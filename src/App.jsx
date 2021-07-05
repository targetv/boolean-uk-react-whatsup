import { Route, Switch, Redirect } from "react-router";
import LoginPage from "./pages/LoginPage";
import MainApp from "./pages/MainApp";


export default function App() {
  
  return(
 
      <Switch>
        
        <Route path="/" exact> 
          <Redirect to="/login">
          </Redirect>
          </Route>
          <Route path="/login">
          <LoginPage/>
          </Route>
        <Route path="/logged-in/:id" exact>
        <MainApp/>
        </Route>
      </Switch>
    
  )

}
