import { useEffect, useState } from "react";

const typeColors = {
    fire: "bg-[#FF4500]",
    water: "bg-[#1E90FF]",
    grass: "bg-[#32CD32]",
    electric: "bg-[#FFD700]",
    psychic: "bg-[#DA70D6]",
    dark: "bg-[#2F4F4F]",
    steel: "bg-[#A9A9A9]",
    rock: "bg-[#B8860B]",
    flying: "bg-[#87CEEB]",
    dragon: "bg-[#6A5ACD]",
    fairy: "bg-[#FFB6C1]",
    ghost: "bg-[#4B0082]",
    fighting: "bg-[#8B0000]",
    normal: "bg-[#D3D3D3]",
    poison: "bg-[#8A2BE2]",
    ice: "bg-[#AFEEEE]",
    ground: "bg-[#DEB887]",
    bug: "bg-[#9ACD32]",
};

function Gen7() {
    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchGen7Pokemon() {
            setLoading(true);
            const res = await fetch("gen7.json");
            const data = await res.json();
            setPokemonList(data);
            setLoading(false);
        }
        fetchGen7Pokemon();
    }, []);

    if (loading) {
        return <div className="text-center text-yellow-500 text-2xl mt-10">Caricamento Pokémon...</div>;
    }

    return (
        <div className="p-4">
            <h2 className="text-3xl font-bold text-yellow-600 mb-8 text-center">Pokédex Gen 7</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {pokemonList.map((poke) => (
                    <div
                        key={poke.id}
                        className={`rounded-xl shadow-lg flex flex-col items-center justify-center p-4 ${typeColors[poke.mainType] || "bg-gray-200"}`}
                    >
                        <img src={poke.sprite} alt={poke.name} className="w-20 h-20 mb-2" />
                        <div className="text-lg font-bold capitalize text-gray-900">{poke.name}</div>
                        <div className="text-xs text-gray-700">#{poke.id}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Gen7;