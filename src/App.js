import Row from "./Row";
import request from "./request";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Upcomming Movies" fetchUrl={request.fetchUpcomingMovie} />
    </div>
  );
}

export default App;
