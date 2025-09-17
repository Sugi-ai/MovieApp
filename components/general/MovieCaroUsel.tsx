"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MovieType } from "@/types";
import Image from "next/image";
import { getImagePath } from "@/lib/getIMagePath";
import useEmblaCarousel from "embla-carousel-react";
import { IoIosStar } from "react-icons/io";



type MovieCarouselProps = {
  movies: MovieType[];
};

export function MovieCarousel({ movies }: MovieCarouselProps) {
const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )


  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
      <div className="relative"
    >
      <Carousel plugins={[plugin.current]} setApi={setApi} className="">
        <CarouselContent>
          {movies.slice(0,3).map((movie, index) => (
            <CarouselItem key={index}>
                <Card className="p-0">
                  <Image 
                  className="w-full h-fit"
                  src={getImagePath(movie?.backdrop_path, true)}
                  alt={movie.title}
                  width={1920}
                  height={1000}/>
                  <CardContent className=" absolute aspect-video w-200 items-center justify-center p-6 top-50 ml-40">
                    <h1 className="text-base">Now Playing:</h1>
                    <span className="text-4xl font-semibold ">
                      {movie.title}
                    </span>
                     <div className="mt-2.5 flex gap-2 items-center text-lg font-normal leading-4"><IoIosStar size={28 } color="yellow"/>

                      {movie.vote_average}/10</div>
                     <div className="text-xs mt-4">{movie.overview}</div>
                  </CardContent>
                 
                </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-13" />
        <CarouselNext className="right-13" />
      </Carousel>
      <div className="flex gap-2 absolute bottom-10 left-1/2 translate-x-1/2">
        {Array.from({ length: count }).slice(0,3).map((_, index) => (
          <div
            onClick={() => {
              api?.scrollTo(index);
            }}
            key={index}
            className={`rounded-full size-4 ${
              index + 1 === current ? "bg-white" : "bg-gray-600"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}