import Home from "./components/Home";
import About from "./components/About";
import ViewProfile from "./components/ViewProfile";

export default [
  { path: '*', name:'*' , component: Home},
  { path: '/', name: 'Home', component: Home},
  { path: '/about', name: 'About' , component: About},
  { path: '/profile/:user_id', name: 'ViewProfile' , component: ViewProfile}
]
