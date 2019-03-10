import Home from "./components/Home";
import About from "./components/About";

export default [
  { path: '*', component: Home},
  { path: '/', component: Home},
  { path: '/about', component: About}
]
