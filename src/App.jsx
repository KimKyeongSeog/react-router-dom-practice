import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/main";
import A from "./pages/A";
import B from "./pages/B";
import C from "./pages/C";
import User from "./pages/user";


const App = () => {
  return <div className="bg-red-100">
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Main />} />
    {/* path="/" 기본경로, 사용자가 처음 페이지에 접속할 때 보여주는 페이지,
    Main 컴포넌트를 사용자에게 보여주게 된다 */}
    <Route path="/a" element={<A />} />
    <Route path="/b" element={<B />} />
    <Route path="/c" element={<C />} />
    <Route path="/user/:id" element={<User />} />
  </Routes>
</BrowserRouter>


  </div>;
};

export default App;
