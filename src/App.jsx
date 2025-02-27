import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Movie from "./components/Movie/Movie";
import MovieList from "./components/MovieList/MovieList";
import Error from "./components/Error";
import Dummyshow from './components/DummyShow'
function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="movie/:id" element={<Movie />}></Route>
            <Route path="movies/:type" element={<MovieList />}></Route>
            {/* <Route path="dummyShow" element={<Dummyshow />}></Route> */}
            <Route path="/*" element={<Error />}></Route>
    
          </Routes>
      </Router>
    </>
  );
}

export default App;
