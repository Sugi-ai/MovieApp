import { MovieCard } from "@/components/home";
import { movieResponseType } from "@/types";
import { getMoviesByGenreId } from "@/utils/get-data";

type GenrePageProps = {
    searchParams: Promise<{id: string}>;
}

const Genre = async ({searchParams}: GenrePageProps) => {

    const params = await searchParams;
    const id = params.id;

    const filteredMoviesResponse: movieResponseType= await getMoviesByGenreId(id);


    console.log("Filteedsen KINONUUD", filteredMoviesResponse)


    return <div className="flex flex-wrap gap-6 justify-center">
        {filteredMoviesResponse.results.slice(0,10).map((movie)=> (
            <MovieCard  key={movie.id} 
                        movie={movie}/>
        ))}
    </div>
}

export default Genre;