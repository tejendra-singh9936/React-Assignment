import Row from "./components/Row";
import request from "./request";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* all the movies are horizontally alligned in a row  */}
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      {/* all the movies are horizontally alligned in a row  */}
      <Row title="Upcomming Movies" fetchUrl={request.fetchUpcomingMovie} />
    </div>
  );
}

export default App;
