import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
            <h1 className="text-5xl font-bold text-yellow-300 mb-8">PokeWolf</h1>
            {/* Riga superiore */}
            <div className="flex space-x-8 mt-10">
                <Link to="/pokedex">
                    <div className="w-80 h-32 bg-transparent rounded-xl shadow-lg flex items-center justify-center text-xl font-bold text-red-800 border-4 border-gray-600 cursor-pointer transition hover:scale-105">
                        Pokedex  <img src="/img/pokedex.png" alt="Pokedex" className="h-20 ml-4" />
                    </div>
                </Link>
                <Link to="/gamecard">
                    <div className="w-80 h-32 bg-transparent rounded-xl shadow-lg flex items-center justify-center text-xl font-bold text-red-800 border-4 border-gray-600 cursor-pointer transition hover:scale-105">
                        Game Card <img src="/img/card.png" alt="Game Card" className="h-20 ml-4" />
                    </div>
                </Link>
            </div>
            {/* Riga inferiore */}
            <div className="flex space-x-8">
                <Link to="/gameconsole">
                    <div className="w-80 h-32 bg-transparent rounded-xl shadow-lg flex items-center justify-center text-xl font-bold text-red-800 border-4 border-gray-600 cursor-pointer transition hover:scale-105">
                        Game Console <img src="/img/game.png" alt="Game Console" className="h-20 ml-4" />
                    </div>
                </Link>
                <Link to="/contattaci">
                    <div className="w-80 h-32 bg-transparent rounded-xl shadow-lg flex items-center justify-center text-xl font-bold text-red-800 border-4 border-gray-600 cursor-pointer transition hover:scale-105">
                        Contattaci <img src="/img/contattaci.png" alt="Contattaci" className="h-20 ml-4" />
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default HomePage;