import {
  createContext,
  useContext,
  useCallback,
  useState,
  useEffect,
} from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { message } from 'antd';
import { useHistory } from 'react-router-dom';

import { useFirebase } from './FirebaseContext';

const authContext = createContext({
  logIn: undefined,
  logOut: undefined,
  authUser: undefined,
});

const Provider = authContext.Provider;

export default function AuthContextProvider({ children }) {
  const { firebaseApp, firestoreGet } = useFirebase();
  const firebaseAuth = getAuth(firebaseApp);
  const [authUser, setAuthUser] = useState();
  const history = useHistory();

  const authStateListener = useCallback(async () => {
    onAuthStateChanged(firebaseAuth, async (user) => {
      if (user) {
        const userDocSnapshotData = await firestoreGet(`/users/${user.email}`);
        // dar erro se o get vier vazio
        setAuthUser({ credentials: user, ...userDocSnapshotData });
      } else {
        setAuthUser();
      }
    });
  }, [firebaseAuth, firestoreGet]);

  useEffect(() => {
    authStateListener();
  }, [authStateListener]);

  const logIn = useCallback(
    async (values) => {
      try {
        const userCredental = await signInWithEmailAndPassword(
          firebaseAuth,
          values.email,
          values.password
        );
        console.log('userCredential: ', userCredental);
        history.push('/');
      } catch (error) {
        console.error(error);
        message.error(error.message);
      }
      return;
    },
    [firebaseAuth, history]
  );

  const logOut = useCallback(async () => {
    try {
      signOut(firebaseAuth);
      history.push('/');
    } catch (error) {
      console.error(error);
      message.error(error.message);
    }
    return;
  }, [firebaseAuth, history]);

  return <Provider value={{ logIn, logOut, authUser }}>{children}</Provider>;
}

export function useAuth() {
  const { logIn, logOut, authUser } = useContext(authContext);
  return { logIn, logOut, authUser };
}
