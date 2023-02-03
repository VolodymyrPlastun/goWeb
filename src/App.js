import { Route, Routes, Navigate } from 'react-router-dom';
// import { lazy, Suspense, useEffect, useRef } from 'react';
import Home  from './pages/Home/Home';
import Layout from './components/Layout';
import About from './pages/About';
import NavBar from './components/NavBar';
import Cases from './pages/Cases';
import Blog from './pages/Blog';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
        <Routes>
       
          <Route exact path='/' element={
          <Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='cases' element={<Cases/>}/>
            <Route path='blog' element={<Blog/>}/>
            <Route path='team' element={<Team/>}/>
            <Route path='contact' element={<Contact/>}/>
          </Route>
          <Route path='*' element={<Navigate to='/'/>} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
