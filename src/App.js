import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPage from "./pages/BlogPage";
import Events from "./pages/Events";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import SelectedBlogCategory from "./pages/SelectedBlogCategory";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPage />} />
        <Route path="/posts/:slug" element={<SelectedBlogCategory />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
