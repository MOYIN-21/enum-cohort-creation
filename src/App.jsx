import { useRoutes } from "react-router-dom";
import { ROUTES } from './Cohort-component/route/Routes'
import './App.css'
import { Provider } from "react-redux";
import store from "./store";
function App() {
   const routing = useRoutes(ROUTES);
   
   return (
      <Provider store={store}>
         {routing}         
      </Provider>
   )
}

export default App