import { useRoutes } from "react-router-dom";
import { ROUTES } from './Cohort-component/route/Routes'
import './App.css'
import { Provider } from "react-redux";
// import store from './Store'
function App() {
   const routing = useRoutes(ROUTES);
   
   return (
      <Provider>
         {routing}         
      </Provider>
   )
}

export default App
