import React from "react";
import {BrowserRouter as Router, Navigate, Redirect, Route, Routes} from 'react-router-dom'
import {ViewPokemons} from "./pages";
// import {useRoutes} from "react-router-dom";


// const App = () => {
//   const routing = useRoutes();
//
//   return (
//     <>
//       {routing}
//     </>
//   );
// }

const App = () => (

    // <Routes>
        <ViewPokemons exact path='/home'/>
        // {/*<Route path='' element={<Navigate replace to="/home"/>}/>*/}
    // {/*</Routes>*/}
    // <Routes>
    //     {/*<Route path='*' element={<Navigate replace to="/"/>}/>*/}
    //     <Route path='home' element={<ViewPokemons/> }/>
    // </Routes>
)

export default App;
