import showBlogs from './components/showBlogs';
import listBlogs from './components/listBlogs';
import addBlog from './components/addBlog';
import singleBlog from './components/singleBlog';
export default [
  { path: '*', component: showBlogs},
  { path: '/', component: showBlogs},
  { path: '/list', component: listBlogs},
  { path: '/add', component: addBlog},
  { path: '/blog/:id', component: singleBlog}
]
