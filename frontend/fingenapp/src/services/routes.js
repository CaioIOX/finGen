import SignIn from "../pages/SignIn";
import { Route , Link } from 'react-router-dom';
import Dashboard from "../pages/dashboard";
<>
<Route exact path="/login" component={SignIn} />
<Route exact path="/dashboard" component={Dashboard} />


</>
