import service from "./service";
import appconfig from "../config/appconfig";
import keys from "../config/keys";

const keyString = `?api_key=${keys.tmdbKey}`;

class MovieService {
  async getPopularMovies() {
    return service.get(`${appconfig.tmdbEndpoint}/movie/now_playing${keyString}`);
  }

  async getMovieDetails(id) {
    return service.get(`${appconfig.tmdbEndpoint}/movie/${id}${keyString}`);
  }
}

const movieService = new MovieService();
export default movieService;