import { BrowserRouter } from 'react-router-dom';

import RootRouter from './pages/routers/RootRouter';
import Layout from './components/layout/Layout';
import FirebaseContextProvider from './contexts/FirebaseContext';

function App() {
  return (
    <BrowserRouter>
      <FirebaseContextProvider>
        <Layout>
          <RootRouter />
        </Layout>
      </FirebaseContextProvider>
    </BrowserRouter>
  );
}

export default App;
