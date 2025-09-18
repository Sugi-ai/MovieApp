import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "../ui/card";
import { FaStar } from "react-icons/fa";
import { MovieType } from "@/types";




export const SearchedMovieCard = ({ movie }: { movie: MovieType}) => {
 
  
  return (
    <Card className="w-[230px] bg-secondary p-0 overflow-hidden gap-2">
      <CardContent className="p-0">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
          width={230}
          
          height={340}
        />
      </CardContent>
      <CardFooter className="flex flex-col items-start p-2">
        <CardDescription className="flex gap-2">
          <FaStar color="#FDE047" />
          <span>{movie?.vote_average}/10</span>
        </CardDescription>
        <div className="mb-4 mt-2">
          {movie?.title}
      </div>
      </CardFooter>
    </Card>
  );
};