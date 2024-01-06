import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext, useContext } from "react";
import Home from "./Components/Pages/Home/Home";
import HomeUser from "./Components/Pages/User/Pages/HomeUser";
import Login from "./Components/Pages/Auth/Login";
import Signup from "./Components/Pages/Auth/Signup";
import UserLayout from "./Components/Pages/User/Layout/UserLayout";
import Addpatient from "./Components/Pages/User/Pages/Addpatient";
import Editpatient from "./Components/Pages/User/Pages/Editpatient";
import Userprofile from "./Components/Pages/User/Pages/Userprofile";

export default function App() {
  const UserContext = createContext(1);
  const isUser = useContext(UserContext);

  return (
    <BrowserRouter>
      <Routes>
        {/* Default routes */}
        <Route>
          <Route path="/" element={<Home />} />
        </Route>
        {isUser && (
          <Route element={<UserLayout />} path="/user">
            <Route index element={<HomeUser />} />
            <Route path="/user/add" element={<Addpatient />}></Route>
            <Route path="/user/edit" element={<Editpatient />}></Route>
            <Route path='/user/profile' element={<Userprofile />}></Route>
          </Route>
        )}
        {/* Auth routes, no layout */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />

      </Routes>
    </BrowserRouter>
  );
}
