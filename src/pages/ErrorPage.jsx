import { NavLink, useRouteError } from "react-router-dom"


export const ErrorPage = () => {
    const error = useRouteError();
    let ind = error.data.indexOf('/');
    let str = error.data.substring(ind, error.data.length-1);
    return (
        <>
        <h1>404 Error</h1>
        <br/>
        <br/>
        <h3>No route with name {str} exists.</h3>
        <NavLink to="/">
            <button>Go to Homepage</button>
        </NavLink>
        </>
    )
}