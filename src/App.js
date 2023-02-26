
import './App.css';

import React, { useState } from 'react';
// import Home from './component/Todo_Practice/Home';
import ShowHide from './component/Toggle/ShowHide';
import FAQs from './component/FAQ/FAQs';
import UseEffectEx from './component/Hooks/UseEffectEx';
import DataFetch from './component/Hooks/customHooks/DataFetch';
import UserForm from './component/Hooks/useRef/UserForm';
import UseReducer from './component/Hooks/useReducer/UseReducer';
import Component1 from './component/Hooks/useContext/Component1';
import Home from './component/Routing/Home';
import Blogs from './component/Routing/Blogs';
import Contact from './component/Routing/Contact';
import Blog from './component/Routing/Blog';
import Error from './component/Routing/Error';
import User from './component/Routing/User';
import {BrowserRouter,Routes,Route } from 'react-router-dom';
import Nav from './component/Routing/Nav';
import ProtectedPage from './component/Routing/ProtectedPage';
import Protected from './component/Routing/Protected';


//books,modalText,isModalOpen - create state
//add book-modal text
//remove text - modalText
function App() {
  const [isLogin,setLogin] = useState(false);
  return (
      <BrowserRouter>
        <Nav/>
        {isLogin ? <button onClick={()=>{setLogin(!isLogin)}}>Log out</button >:<button onClick={()=>{setLogin(!isLogin)}}>Login</button>}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="/blogs/:title" element={<Blog/>}/>
          <Route path="/user" element={<User/>}/>
          <Route path="/protected" element={
            <Protected isLogin={isLogin}>
              <ProtectedPage/>
            </Protected>
          }/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>

  );
  
}

export default App;
