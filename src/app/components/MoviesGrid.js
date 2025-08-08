import Card from '@/app/components/Card';

export default function MoviesGrid({ movies, loading }) {
  return (
    <div className='grid grid-cols-3'>
      {movies.map((movie) => <Card movie = {movie}/>)}
    </div>
  );
}
