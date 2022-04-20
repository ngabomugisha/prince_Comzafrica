import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


//Authantication
import LoginPage from "../pages/Auth/Login";
import RegisterPage from "../pages/Auth/Register";

//Home Pages
import AdminHomePage from "../pages/roles/Admin";
import UserHomePage from "../pages/roles/User";

// Form Pages
import Products from "../components/dashboard/Products"
import Services from "../components/dashboard/Services"

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <Suspense
            fallback={
                <div className="loading">
                    <p>Loading.......</p>
                </div>
            }
        >
            <Router>
                <Switch>
                    <Route exact path="/login" ><LoginPage /></Route>
                    <Route exact path="/register"><RegisterPage /></Route>
                    <Route exact path="/"><LoginPage /></Route>

                    <Route exact path="/adminHome"><AdminHomePage /></Route>
                    <Route exact path="/userHome"><UserHomePage /></Route>
                    <Route exact path="/userHome"><UserHomePage /></Route>

                    <Route exact path="/products"><Products /></Route>
                    <Route exact path="/services"><Services /></Route>

                </Switch>
            </Router>
        </Suspense>
    )
}

