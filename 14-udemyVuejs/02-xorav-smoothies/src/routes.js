import Index from "./components/Index";
import addSmoothie from "./components/addSmoothie";

export default [
  { path: '*', name:'*' , component: Index},
  { path: '/', name:'Index' , component: Index},
  { path: '/add-smoothie', name:'addSmoothie' , component: addSmoothie}
]
