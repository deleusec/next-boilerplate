"use client";

import PokemonCard from "@/components/PokemonCard";
import { useEffect, useState } from "react";
import axios from "axios";

export default function PokemonList() {
  const [data, setData] = useState(null);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");

  useEffect(() => {
    axios
      .get(url)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        // en cas d’échec de la requête
        console.log(error);
      });
  }, [url]);

  return (
    <>
      {data &&
        data.results.map((pokemon) => {
          return <PokemonCard data={pokemon} key={pokemon.name} />;
        })}
      {data && (
        <div className={"flex w-full max-w-2xl justify-between"}>
          {data.previous ? (
            <button
              className={
                "bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
              }
              onClick={() => setUrl(data.previous)}
            >
              Previous
            </button>
          ) : (
            <div></div>
          )}
          {data.next ? (
            <button
              className={
                "bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
              }
              onClick={() => setUrl(data.next)}
            >
              Next
            </button>
          ) : (
            <div></div>
          )}
        </div>
      )}
    </>
  );
}
