const API_KEY = "8046d7b22a547791f4abb8f1fa8f2a8a";
const request = {
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchUpcomingMovie: `/movie/upcoming?api_key=${API_KEY}&language=en-US`,
};
export default request;
