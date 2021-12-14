import { BrowserRouter } from 'react-router-dom';

import RootRouter from './pages/routers/RootRouter';
import Layout from './components/layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <RootRouter />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
