import { createContext, useContext, useRef } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { message } from 'antd';

import { dropUndefinedFields } from '../utils';

const firebaseContext = createContext({
  firebaseApp: undefined,
  firestorePost: undefined,
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

  const firestore = getFirestore(firebaseApp.current);

  /**
   * Adiciona um novo document na firestore com os valores do objeto "values",
   * caso esse objeto esteja vazio nenhum documento é criado.
   *
   * @param {string} collectionPath - Caminho da coleção na qual o documento deve ser criado na firestore.
   * @param {object} values - Objeto com os valores dos campos do novo documento.
   * @param {object} extra_values - Objeto com os valores extras a serem concatenados com o objeto values.
   */
  const firestorePost = async (collectionPath, values, extra_values = {}) => {
    dropUndefinedFields(values);

    if (Object.keys(values).length === 0) {
      message.warning('Não é possível criar um documento vazio!');
      return undefined;
    }

    values = { ...values, ...extra_values };

    const collectionRef = collection(firestore, collectionPath);

    try {
      const response = await addDoc(collectionRef, values);
      message.success('Documento criado com sucesso!');
      return response;
    } catch (error) {
      console.error(error);
      message.error(error.message);
      return undefined;
    }
  };

  // const firestorePatch = async (docPath, values) => {
  //   const docRef = doc(firestore, docPath);
  //   try {
  //     await setDoc(docRef, values);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <Provider value={{ firebaseApp: firebaseApp.current, firestorePost }}>
      {children}
    </Provider>
  );
}

export function useFirebase() {
  const { firebaseApp, firestorePost } = useContext(firebaseContext);
  return { firebaseApp, firestorePost };
}
