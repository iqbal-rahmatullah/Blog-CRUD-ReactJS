import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import FindUser from "./pages/FindUser";
import PostUser from "./pages/PostUser";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Users />} />
          <Route path='/finduser' element={<FindUser />} />
          <Route path='/postuser' element={<PostUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
