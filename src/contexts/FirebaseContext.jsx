import { createContext, useContext, useRef, useCallback } from 'react';
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  addDoc,
  getDoc,
  getDocs,
  doc,
  query,
  where,
} from 'firebase/firestore';
import { message } from 'antd';

import { dropUndefinedFields } from '../utils';

const firebaseContext = createContext({
  firebaseApp: undefined,
  firestore: undefined,
  firestorePost: undefined,
  firestoreGet: undefined,
  firestoreList: undefined,
});

const Provider = firebaseContext.Provider;

export default function FirebaseContextProvider({ children }) {
  const firebaseApp = useRef(
    initializeApp({
      apiKey: 'AIzaSyC_EPGcxcIPNQmbwt8FF3OgF_LwhrUKSRw',
      authDomain: 'exemplo-login-associacao.firebaseapp.com',
      projectId: 'exemplo-login-associacao',
      storageBucket: 'exemplo-login-associacao.appspot.com',
      messagingSenderId: '529772759306',
      appId: '1:529772759306:web:bf45b2ea4b23f10aa412f3',
    })
  );

  // ligage4064@wolfpat.com
  const firestore = useRef(getFirestore(firebaseApp.current));

  const firestorePost = useCallback(
    async (collectionPath, values, extra_values = {}) => {
      dropUndefinedFields(values);

      if (Object.keys(values).length === 0) {
        message.warning('Não é possível criar um documento vazio!');
        return undefined;
      }

      values = { ...values, ...extra_values };

      const collectionRef = collection(firestore.current, collectionPath);

      try {
        const response = await addDoc(collectionRef, values);
        message.success('Documento criado com sucesso!');
        return response;
      } catch (error) {
        console.error(error);
        message.error(error.message);
        return undefined;
      }
    },
    []
  );

  const firestoreGet = useCallback(async (documentPath) => {
    const docRef = doc(firestore.current, documentPath);
    const docSnap = await getDoc(docRef);
    let data = {};
    if (docSnap.exists()) {
      data = docSnap.data();
    }
    return data;
  }, []);

  const firestoreList = useCallback(async (collectionPath, whereStr) => {
    const collectionRef = collection(firestore.current, collectionPath);
    const listQuery = query(
      collectionRef,
      where(
        whereStr.split(' ')[0],
        whereStr.split(' ')[1],
        whereStr.split(' ')[2]
      )
    );
    const querySnapshot = await getDocs(listQuery);
    let data = [];
    if (!querySnapshot.empty) {
      querySnapshot.forEach((docSnap) => data.push(docSnap.data()));
    }
    return data;
  }, []);

  return (
    <Provider
      value={{
        firebaseApp: firebaseApp.current,
        firestore: firestore.current,
        firestorePost,
        firestoreGet,
        firestoreList,
      }}
    >
      {children}
    </Provider>
  );
}

export function useFirebase() {
  return useContext(firebaseContext);
}
