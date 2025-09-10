import { MovieCard } from "@/components/home/MovieCard";
import { NavigationBarMenu } from "@/components/home/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <img className=""></img>
      <div>
        <img
          className="flex justify-center mt-6 w-360 h-150 "
          src="wicked.jpg"
          alt="movie"
        ></img>
      </div>
      <div className="flex">
        <MovieCard
          title="Dear Santa"
          score={8.5}
          image="https://en.wikipedia.org/wiki/Dear_Santa_(2024_film)#/media/File:Dear_Santa_(2024_film)_poster.jpg"
        />

        <MovieCard
          title="How To Train Your Dragon Live Action"
          score={6.9}
          image="https://en.wikipedia.org/wiki/File:How_To_Train_Your_Dragon_2025_Poster.jpg"
        />

        <MovieCard
          title="Alien Romulus"
          score={6.9}
          image="https://en.wikipedia.org/wiki/Alien:_Romulus#/media/File:Alien_Romulus_2024_(poster).jpg"
        />
        <MovieCard
          title="From the Ashes"
          score={6.9}
          image="from-the-ashes.jpg"
        />
      </div>
    </div>
  );
}
