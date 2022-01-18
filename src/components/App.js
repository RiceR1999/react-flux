import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import NotFoundPage from "./NotFoundPage";
import { Route, Switch, Redirect } from "react-router-dom";
import ManageCoursePage from "./ManageCoursePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    
    // function getPage() {
    //     const route = window.location.pathname;
    //     if (route === "/courses") return <CoursesPage />;
    //     if (route === "/about") return <AboutPage />;
    //     return <HomePage />;
    // }

    return (
        <div className="container-fluid">
            <ToastContainer autoClose={3000} hideProgressBar />
            <Header />
            {/* {getPage()} */}
            <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/courses" component={CoursesPage} />
            <Route path="/course/:slug" component={ManageCoursePage} />
            <Route path="/course" component={ManageCoursePage}/>
            <Route path="/about" component={AboutPage} />
            <Redirect from="/about-page" to="/about"></Redirect>
            <Route component={NotFoundPage}></Route>
            </Switch>
    </div> 
    );
}

export default App;