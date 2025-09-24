import {getMovieDetails, getMovieTrailers} from "@/utils/get-data";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/Button";


type DetailDynamicPageProps = {
  params: Promise<{ id: string }>;
};

export const generateMetadata = async ({ params }: DetailDynamicPageProps) => {
  const dynamicParams = await params;
  const id = dynamicParams.id;
  const movieDetailData = await getMovieDetails(id);
  
  return {
    title: 'MovieZ | ${movieDetailData.title}',
  }
 
} 
 




  const DetailDynamicPage = async ({ params }: DetailDynamicPageProps) => {
    const dynamicParams = await params;
    const id = dynamicParams.id;
    const movieDetailData = await getMovieDetails(id);

    const trailerData: TrailerResponseType = await getMovieTrailers(id);

    const trailer = trailerData.results.find((item) => item.type === "Trailer");



  return (
    <div className="text-2xl font-bold">
      {movieDetailData.title}
      <div>
        <Dialog>
  <DialogTrigger asChild>
    <Button>Watch Trailer</Button>
    </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle></DialogTitle>
       <iframe
          width="1920"
          height="911"
          src={`https://www.youtube.com/embed/${trailer?.key}`}
          title={trailer?.type}
          allowFullScreen
        ></iframe>
   
    </DialogHeader>
  </DialogContent>
</Dialog>
       
      </div>
  </div>
    );
}

export default DetailDynamicPage;    