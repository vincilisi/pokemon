import { Outlet, useNavigate, useLocation } from "react-router-dom";

const generations = [
    { name: "Gen 1", img: "/img/gen1.png", route: "gen1" },
    { name: "Gen 2", img: "/img/gen2.png", route: "gen2" },
    { name: "Gen 3", img: "/img/gen3.png", route: "gen3" },
    { name: "Gen 4", img: "/img/gen4.png", route: "gen4" },
    { name: "Gen 5", img: "/img/gen5.png", route: "gen5" },
    { name: "Gen 6", img: "/img/gen6.png", route: "gen6" },
    { name: "Gen 7", img: "/img/gen7.png", route: "gen7" },
    { name: "Gen 8", img: "/img/gen8.png", route: "gen8" },
    { name: "Gen 9", img: "/img/gen9.png", route: "gen9" },
];

function Pokedex() {
    const navigate = useNavigate();
    const location = useLocation();

    // Controlla se una generazione è aperta
    const genMatch = location.pathname.match(/^\/pokedex\/(gen\d)$/);
    const openGenRoute = genMatch ? genMatch[1] : null;

    // Gestione click sulla card
    const handleGenClick = (route) => {
        if (openGenRoute === route) {
            navigate("/pokedex");
        } else {
            navigate(route);
        }
    };

    // Overlay per chiudere cliccando fuori
    const isGenOpen = !!openGenRoute;

    return (
        <div className="flex flex-col items-center justify-center min-h-screen space-y-8 relative">
            <h1 className="text-5xl font-bold text-yellow-300 mb-8">Pokedex</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 z-10">
                {generations.map((gen) => (
                    <div
                        key={gen.route}
                        className="w-80 h-32 bg-transparent rounded-xl shadow-lg flex items-center justify-center text-xl font-bold text-red-800 border-4 border-gray-600 cursor-pointer transition hover:scale-105"
                        onClick={() => handleGenClick(gen.route)}
                    >
                        {gen.name}
                        <img src={gen.img} alt={gen.name} className="h-20 ml-4" />
                    </div>
                ))}
            </div>
            {/* Overlay per chiudere la pagina generazione cliccando fuori */}
            {isGenOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-30 z-0"
                    onClick={() => navigate("/pokedex")}
                />
            )}
            {/* Outlet mostra la pagina della generazione sotto le card */}
            <div className={isGenOpen ? "relative z-20" : ""}>
                <Outlet />
            </div>
        </div>
    );
}

export default Pokedex;