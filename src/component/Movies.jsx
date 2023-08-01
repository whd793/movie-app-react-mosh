import {getMovies} from '../services/fakeMovieService'
import {useState} from "react";

function Movies() {
    const [movies, setMovies] = useState(getMovies());

  const handleDelete = (title) => {
    // console.log(title);
    setMovies(
      (prev) => {
        return prev.filter((m) => m.title !== title);
      }
    //  movies.filter((movie) => movie.title !== title)
    )
  }

  //pagination
  const totalCount = movies.length;
  const perPage = 5;
  const currPage = 1;
  const paginatedMovies = movies.slice(currPage, currPage + perPage);

    return(


        <div>
            <h1>Showing {movies.length} movies in the database.</h1>
    <table className="table">
    <thead>

      <tr>
        <th>Title</th>
        <th>Genre</th>
        <th>Stock</th>
        <th>Rate</th>

      </tr>
      </thead>
                    <tbody>

    {movies.map((movie) => {
      return(
        <tr>
          <td>{movie.title}</td>
          <td>{movie.genre.name}</td>
          <td>{movie.numberInStock}</td>
          <td>{movie.dailyRentalRate}</td>
          <button className="btn btn-danger btn-sm" onClick={() => handleDelete(movie.title)}>delete</button>

        </tr>
        

      )
    })}
    </tbody>

    </table>
    <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    {for (let i = 1; i < Math.floor(totalCount / perPage); i++) 
        {
           return (<li class="page-item"><a class="page-link" href="#">{i}</a></li>);

        }
    }
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
        </div>
    )
} 

export default Movies;