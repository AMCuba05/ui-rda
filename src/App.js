import './App.css'
import {BrowserRouter} from 'react-router-dom'
import {Layout} from './components/Layout'
import {AppRoutes} from './router'

function App() {
  return (
      <BrowserRouter>
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
  );
}

export default App;
