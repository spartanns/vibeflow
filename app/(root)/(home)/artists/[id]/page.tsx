"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import DetailsHeader from "@/components/DetailsHeader";
import { useParams } from "next/navigation";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArtist } from "@/redux/slices/artistSlice";

const FeaturingCard = ({ name, description, imgUrl }) => (
  <Card className="h-[250px] flex flex-col gap-2 justify-end rounded-lg">
    <img src={imgUrl} className="w-full h-full inset-0 object-cover rounded-lg" width="100%" height="100%" />
    {/*
    <div className="flex flex-col relative bg-gray-600">
      <CardTitle>{name}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </div>
    */}
  </Card>
);

const ArtistDetails = () => {
  const { artist } = useSelector((state) => state.artist);
  const dispatch = useDispatch();
  const artistID = useParams();

  useEffect(() => {
    dispatch(fetchArtist(artistID.id));
    console.log(artist);
  }, [artistID.id]);

  return (
    <section className="flex flex-col">
      <DetailsHeader artist={artist} song="" />
      <article className="w-full">
        <p className="text-gray-300">{artist?.profile?.biography?.text}</p>
      </article>

      <h2 className="text-center w-full mt-4 text-3xl text-white mb-8">Featuring</h2>
      <article className="w-full flex justify-center items-center h-[260px]">
        <Carousel className="w-3/4">
          <CarouselContent>
            {artist?.relatedContent?.featuring?.items?.map((item, i) => (
              <CarouselItem key={i} className="basis-1/3">
                <FeaturingCard
                  name={artist?.relatedContent?.featuring?.items[i]?.name}
                  description={artist?.relatedContent?.featuring?.items[i]?.description}
                  imgUrl={artist?.relatedContent?.featuring?.items[i]?.images?.items[0]?.sources[0]?.url}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </article>
    </section>
  );
};

export default ArtistDetails;
