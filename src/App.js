import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddBlog from "./pages/AddBlog";
import Blog from "./pages/Blog";
import DetailBlog from "./pages/DetailBlog";
import EditBlog from "./pages/EditBlog";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Blog />} />
          <Route path='/detail_blog/:blog_id' element={<DetailBlog />} />
          <Route path='/add_blog' element={<AddBlog />} />
          <Route path='/edit_blog/:blog_id' element={<EditBlog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
