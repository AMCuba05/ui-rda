import './App.css'
import {BrowserRouter} from 'react-router-dom'
import {Layout} from './components/Layout'
import {AppRoutes} from './router'
import {Provider, useSelector} from "react-redux";
import store from "./redux/store";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {
  return (
      <BrowserRouter>
          <Provider store={store}>
              <Layout>
                  <AppRoutes />
              </Layout>
          </Provider>
      </BrowserRouter>
  );
}

export default App;
