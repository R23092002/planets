import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutView from "./components/AboutView";
import { Switch, Route } from "react-router-dom";
import SearchView from "./components/SearchView";
// import TvView from "./components/TvView";
import MovieView from "./components/MovieView";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if(searchText) {
      // ${searchText}
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=fcb5a8039388ba2a588b4309054aaf2a&language=en-US&query=${searchText}&page=1&include_adult=false`)
        .then(response => response.json())
        .then(data => {
          setSearchResults(data.results)
        }) 
      
    }
  }, [searchText])

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" component={AboutView} />
        <Route path="/search">
          <SearchView keyword={searchText} searchResults={searchResults} />
        </Route>
            
          {/* <Route path="/movies/:id" component={TvView} /> */}
          <Route path="/movies/:id" component={MovieView} /> 
          
          
      </Switch>
    </div>
  );
}

export default App;



//chatgpt c


// import "./App.css";
// import { useState, useEffect } from "react";
// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import AboutView from "./components/AboutView";
// import { Switch, Route } from "react-router-dom";
// import SearchView from "./components/SearchView";
// import TvView from "./components/TvView";
// import MovieView from "./components/MovieView";

// function App() {
//   const [searchResults, setSearchResults] = useState([]);
//   const [searchText, setSearchText] = useState("");

//   useEffect(() => {
//     if (searchText) {
//       fetch(
//         `https://api.themoviedb.org/3/search/multi?api_key=fcb5a8039388ba2a588b4309054aaf2a&language=en-US&query=${searchText}&page=1&include_adult=false`
//       )
//         .then((response) => response.json())
//         .then((data) => {
//           setSearchResults(data.results);
//         });
//     }
//   }, [searchText]);

//   return (
//     <div>
//       <Navbar searchText={searchText} setSearchText={setSearchText} />
//       <Switch>
//         <Route path="/" exact>
//           <Home />
//         </Route>
//         <Route path="/about" component={AboutView} />
//         <Route path="/search">
//           <SearchView keyword={searchText} searchResults={searchResults} />
//         </Route>

//         {searchResults.some((result) => result.original_name) ? (
//           <Route path="/movies/:id" component={TvView} />
//         ) : null}

//         {searchResults.some((result) => result.original_title) ? (
//           <Route path="/movies/:id" component={MovieView} />
//         ) : null}
//       </Switch>
//     </div>
//   );
// }

// export default App;

