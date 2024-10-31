"use client";
import ResultCard from "@/components/ResultCard";
import { fetchResults } from "@/redux/slices/searchSlice";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Search = () => {
  const query = useParams();
  const dispatch = useDispatch();
  const { results } = useSelector((state) => state.results);

  useEffect(() => {
    dispatch(fetchResults(query.id));
  }, [query]);

  return (
    <section className="flex flex-col">
      <section className="flex flex-wrap sm:justify-start justify-center gap-8 mt-4">
        {results?.map((track, i) => (
          <ResultCard
            key={i}
            name={track?.data?.name}
            artist={track?.data?.artists?.items[0]?.profile?.name}
            imgUrl={track?.data?.albumOfTrack?.coverArt?.sources[0]?.url}
            id={track?.data?.id}
          />
        ))}
      </section>

    </section>
  );
};

export default Search;
