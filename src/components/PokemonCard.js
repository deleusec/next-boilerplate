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
      href={pokemonData ? `/pokemon/${pokemonData.id}` : ""}
      className={
        "w-full max-w-2xl bg-gray-200 border p-4 rounded-md text-lg items-center flex mb-4 "
      }
    >
      {pokemonData && (
        <img
          src={pokemonData.sprites["front_default"]}
          alt={data.name}
          className={"w-30 h-30 mr-3"}
        />
      )}
      <span className={"text-black capitalize"}>{data.name}</span>
    </Link>
  );
}
