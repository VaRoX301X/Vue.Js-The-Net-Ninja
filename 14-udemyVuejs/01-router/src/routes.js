import Home from "./components/Home";
import About from "./components/About";

export default [
  { path: '*', name:'*' , component: Home},
  { path: '/', name: 'Home', component: Home},
  { path: '/about', name: 'About' , component: About}
]
