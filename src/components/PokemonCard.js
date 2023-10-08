"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function PokemonCard({ data }) {
  const [pokemonData, setPokemonData] = useState();

  useEffect(() => {
    axios
      .get(data.url)
      .then(function (response) {
        setPokemonData(response.data);
      })
      .catch(function (error) {
        // en cas d’échec de la requête
        console.log(error);
      });
  }, [data]);

  return (
    <Link
      href={""}
      className={
        "w-full max-w-2xl bg-gray-200 border p-4 rounded-md text-lg items-center flex mb-4 "
      }
    >
      {pokemonData ? (
        <img
          src={pokemonData.sprites["front_default"]}
          alt={data.name}
          className={"w-[100px] h-[100px] mr-3"}
        />
      ) : (
        <div className={"aspect-square w-[100px] h-[100px] mr-3"}></div>
      )}
      <div className={"flex justify-between items-center w-full capitalize"}>
        <span className={"bg-blue-950 rounded-full py-1 px-8 text-base mx-2"}>
          {data.name}
        </span>
        {pokemonData && (
          <span
            className={
              "text-black capitalize italic text-yellow-500 text-xl mx-4 font-bold"
            }
          >
            #{pokemonData.id}
          </span>
        )}
      </div>
    </Link>
  );
}
