import { useEffect, useState } from "react";
import "./App.css";

import { db } from "./config/firebase";
import { getDocs, collection } from "firebase/firestore";

function App() {
  const [movieList, setMovieList] = useState([]);
  const moviesCollectionRef = collection(db, "movies");
  const getMovieList = async () => {
    try {
      const data = await getDocs(moviesCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMovieList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getMovieList();
  }, []);

  return (
    <div className="App">
      <>unkerrrrrrrrrr</>
      <div>
        {movieList.map((movie) => (
          <h1>{movie.title}</h1>
        ))}
      </div>
      <div>raaaaaaaaaaaaaaa</div>
    </div>
  );
}

export default App;
