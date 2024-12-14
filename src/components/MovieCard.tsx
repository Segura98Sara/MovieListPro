import { Movie } from '@/interfaces/movie.interface';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { MovieInfo } from './MovieInfo';

interface Props {
  movie: Movie;
}

export function MovieCard({ movie }: Props) {
  const MySwal = withReactContent(Swal);
  const stars = [];

  for (let i = 0; i < Math.ceil(movie.rating / 2); i++) {
    stars.push(i + 1);
  }

  const showAlert = () => {
    MySwal.fire({
      background: '#115e59',
      html: <MovieInfo movie={movie} />,
      showCloseButton: true,
      showConfirmButton: false,
    });
  };
    return (
    <div className="relative w-60  aspect-[3/4] rounded-2xl group">
      
      <img
        src={movie.img}
        alt={movie.title}
        className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl -z-10 group-hover:scale-110 transition-transform duration-300"
      />

    
      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex flex-col justify-center items-center p-4">
        <h3 className="text-white text-lg font-medium">{movie.title}</h3>
        <p className="text-sm text-gray-300 text-center line-clamp-3">
          {movie.description}
        </p>
        <button
          className="mt-2 text-xs text-white bg-teal-600 px-2 py-1 rounded-md transition-transform hover:scale-105"
          onClick={showAlert}
        >
          Ver más
        </button>
      </div>
      
    </div>
  );
}

