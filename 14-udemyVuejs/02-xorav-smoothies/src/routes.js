import Index from "./components/Index";
import addSmoothie from "./components/addSmoothie";
import editSmoothie from "./components/editSmoothie";

export default [
  { path: '*', name:'*' , component: Index},
  { path: '/', name:'Index' , component: Index},
  { path: '/add-smoothie', name:'addSmoothie' , component: addSmoothie},
  { path: '/edit-smoothie/:smoothie_slug', name:'editSmoothie' , component: editSmoothie}
]
