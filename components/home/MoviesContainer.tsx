
import { MovieType } from "@/types";
import { MovieCard } from "./MovieCard";
import Link from "next/link";

type MoviesContainerProps = {
  movies: MovieType[];
  title: string;
};

export const MoviesContainer = ({ movies, title }: MoviesContainerProps) => {
  return (
    <div className="mt-10 mb-10 px-20 gap-8" >
      <div className="flex items-center justify-between">
      <h2 className="text-3xl font-bold my-5">{title}</h2>
      <Link href={`/seemore?title=${title}`}>
        See more
      </Link>
      </div>
      <div className="flex gap-4 flex-wrap">
        {movies.slice(0, 10).map((movie) => (
          <MovieCard
            key={movie?.id}
          movie={movie}
          />
        ))}
      </div>
    </div>
  );
};