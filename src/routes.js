import {Navigate, useRoutes} from 'react-router-dom';
import {ViewPokemons} from "./pages";

const routes = () => {
// eslint-disable-next-line react-hooks/rules-of-hooks
let rouress =useRoutes([
    {
      path: '/home',
      element: <ViewPokemons/>,
      // children: [
      //   {path: '/', element: <Navigate to="/home"/>},
      // ],
    },
    {
      path: '/',
      element: <ViewPokemons/>,
      // children: [
      //   {path: '/', element: <Navigate to="/login"/>},
      // ],
    },
  ])
  return rouress
}
export default routes;