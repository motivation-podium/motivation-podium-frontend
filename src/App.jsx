import { BrowserRouter , Routes , Route} from "react-router-dom";
import GetStarted from "./pages/auth/GetStarted";
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";
import Upload from "./pages/forms/Upload";
// import UploadContent from "./pages/forms/UploadContent";
import Root from "./pages/Root";
import Home from "./pages/user/Home";
import React from "react";
import AdminAuth from "./pages/admin/AdminAuth";
import ControlPannel from "./pages/admin/ControlPannel";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root></Root>}></Route>
          <Route path="/getStarted" element={<GetStarted/>}></Route>
          <Route path="/home/*" element={<Home/>}></Route>
          <Route path="/upload/*" element={<Upload/>}></Route>
          <Route path="/auth/signin" element={<Signin/>}></Route>
          <Route path="/auth/signup" element={<Signup/>}></Route>
          <Route path="/admin" element={<AdminAuth></AdminAuth>}></Route>
          <Route path="/admin/controlpannel/*" element={<ControlPannel/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
