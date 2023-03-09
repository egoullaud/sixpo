import {BrowserRouter, Route, Routes} from 'react-router-dom';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogPage from './pages/BlogPage';

import Events from './pages/Events';
import Home from './pages/Home';
import Resources from './pages/Resources';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/events" element={<Events/>}/>
      <Route path="/resources" element={<Resources/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/blog/:slug" element={<BlogPage/>}/>
     
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
