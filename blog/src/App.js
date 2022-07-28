import React from 'react'
// import Header from './components/Header';
// import Blogs from './components/Blogs';
import AddNewBlog from './components/AddNewBlog/AddNewBlog';
import FirstPage from './components/FirstPage/FirstPage';
import Blog from './components/PublishedBlog/Blog';
import Error from './components/Error';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
    <Routes>
      <Route exact path="/" element={<FirstPage/>} />
      <Route path="/new-blog" element={<AddNewBlog/>} />
      <Route path="/first-blog" element={<Blog/>} />
      <Route  element={<Error/>} />
    </Routes>
     

      {/* <FirstPage/> */}
      {/* <Header/>
      <Blogs/> */}
      {/* <AddNewBlog/>  */}


    </div>
  </Router>
  );
}

export default App;
