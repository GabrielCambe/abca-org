import { BrowserRouter } from 'react-router-dom';

import RootRouter from './pages/routers/RootRouter';
import Layout from './components/layout/Layout';
import FirebaseContextProvider from './contexts/FirebaseContext';
import AuthProvider from './contexts/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <FirebaseContextProvider>
        <AuthProvider>
          <Layout>
            <RootRouter />
          </Layout>
        </AuthProvider>
      </FirebaseContextProvider>
    </BrowserRouter>
  );
}

export default App;
