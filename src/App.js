import { GlobalStyle } from "./GlobalStyles";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Settings from "./Pages/Settings/Settings";
import Single from "./Pages/Single/Single";
import Write from "./Pages/Write/Write";


function App() {
  return (
    <>
      <GlobalStyle/>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Single/>} />
        <Route path="/write" element={<Write />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/single" element={<Single />} />

      </Routes>
     
    </>
  );
}

export default App;
