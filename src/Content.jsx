import React, { useContext } from 'react';
import { MainContext } from './contexts/MainContext';
import Gallery from './gallery/Gallery';
import Posts from './posts/Posts';
import style from './style.module.css'
import Todos from './todos/Todos';
import Users from './users/Users';

const Content = ()=>{

    const {showMenu,setShowMenu} = useContext(MainContext)

    const handleShowMenu = (event)=>{
        event.stopPropagation()
        // این خط بالا یعنی از المان والد پیروی نکن 
        // مشکل خط 22
        setShowMenu(!showMenu)
        console.log(showMenu);
    }

    return (
        <div className={style.content_section} onClick={()=>{setShowMenu(false)}}>
            {/* این جا قصد اینه که هر جای صفحع را کیلک کردیم منو بسته بشه اما مشکل این بود که خود دکمه هم کار نمیکرد و از المان والد پیروی میکرد */}
            <i className={`${style.menu_button} fas fa-bars text-dark m-2 pointer`} 
            onClick={handleShowMenu}
            ></i>
            <Users/>
            <Posts/>
            <Gallery/>
            <Todos/>
        </div>
    )

}

export default Content;