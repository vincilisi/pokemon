import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TransitionStripes from "../components/TransitionStripes";

function Intro() {
    const [showTransition, setShowTransition] = useState(false);
    const navigate = useNavigate();

    const handleRegisterClick = () => {
        setShowTransition(true);
    };

    const handleTransitionComplete = () => {
        navigate("/register");
    };

    return (
        <div className="flex items-center justify-center min-h-screen relative overflow-hidden">
            {showTransition && <TransitionStripes onComplete={handleTransitionComplete} />}

            <div className="flex flex-col items-center justify-center space-y-6 z-10">
                <div className="relative w-130 h-130 flex items-center justify-center">
                    <motion.img
                        src="/img/logo.png"
                        alt="Pokemon Logo"
                        className="w-130 h-130"
                        initial={{ opacity: 0, scale: 0.1, y: 200, rotate: 0 }}
                        animate={{ opacity: 1, scale: 1, y: 0, rotate: 360 }}
                        transition={{ duration: 4, ease: "easeOut" }}
                    />
                    <motion.h1
                        className="absolute text-7xl font-bold text-center text-yellow-400 drop-shadow-lg pointer-events-none"
                        style={{ top: "45%", left: "20%", transform: "translate(-50%, -50%)" }}
                        initial={{ opacity: 0, scale: 0.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 4, ease: "easeOut", delay: 2 }}
                    >
                        Pokemon
                    </motion.h1>
                </div>

                <div className="flex space-x-20">
                    <motion.button
                        onClick={handleRegisterClick}
                        className="rounded-full px-6 py-2 bg-yellow-300 text-red-800 font-semibold shadow-md hover:bg-yellow-400 transition"
                        initial={{ opacity: 0, scale: 0.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 4, ease: "easeOut", delay: 4 }}
                    >
                        Registrati
                    </motion.button>
                    <motion.button
                        className="rounded-full px-6 py-2 bg-yellow-300 text-red-800 font-semibold shadow-md hover:bg-yellow-400 transition"
                        initial={{ opacity: 0, scale: 0.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 2.5, ease: "easeOut", delay: 4 }}
                    >
                        Accedi
                    </motion.button>
                </div>
            </div>
        </div>
    );
}

export default Intro;
