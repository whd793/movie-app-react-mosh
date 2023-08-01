import './App.css';
// import {getMovies} from './services/fakeMovieService'
// import {useState} from "react";
import Movies from './component/Movies';

function App() {
  // const [movies, setMovies] = useState(getMovies());

  // const handleDelete = (title) => {
  //   // console.log(title);
  //   setMovies(
  //     (prev) => {
  //       return prev.filter((m) => m.title !== title);
  //     }
  //   //  movies.filter((movie) => movie.title !== title)
  //   )
  // }

  return (
    <>
   <main className="container">
    <Movies />

   </main>
   </>
  );
}

export default App;
