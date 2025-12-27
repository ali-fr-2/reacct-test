import React, { useContext, useState } from "react";
import { MainContext } from "./contexts/MainContext";
import Gallery from "./gallery/Gallery";
import Posts from "./posts/Posts";
import style from "./style.module.css";
import Todos from "./todos/Todos";
import AddUser from "./users/AddUser";
import EditDesc from "./users/EditDesk";
import Users from "./users/Users";
import { Navigate, replace, Route, Routes } from "react-router-dom";

const Content = () => {
  const { showMenu, setShowMenu } = useContext(MainContext);
  //   const [IsUser, SetIsUser] = useState(false);

  const handleShowMenu = (event) => {
    event.stopPropagation();
    // این خط بالا یعنی از المان والد پیروی نکن
    // مشکل خط 22
    setShowMenu(!showMenu);
    console.log(showMenu);
  };

  return (
    <div
      className={style.content_section}
      onClick={() => {
        setShowMenu(false);
      }}
    >
      {/* این جا قصد اینه که هر جای صفحع را کیلک کردیم منو بسته بشه اما مشکل این بود که خود دکمه هم کار نمیکرد و از المان والد پیروی میکرد */}
      <i
        className={`${style.menu_button} fas fa-bars text-dark m-2 pointer d-md-none`}
        onClick={handleShowMenu}
      ></i>
      <Routes>
        {/* <Route path="/" element={IsUser ? <Users/> : <Navigate replace to ="/posts"/> } /> */}
        <Route path="/users" element={<Users />} />
        <Route path="/users/add" element={<AddUser />}>
          <Route path=":UserId" />
          {/* <Route path=":userId" element={<EditDesc/>} /> */}
        </Route>
        <Route path="/posts" element={<Posts />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="*" element={<Users />} />
      </Routes>
    </div>
  );
};

export default Content;
