import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ReverseStripes from "../components/ReverseStripes";

function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showContent, setShowContent] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate("/dashboard");
        } catch (error) {
            console.error("Errore:", error.message);
        }
    };

    const handleTransitionComplete = () => {
        setShowContent(true);
    };

    return (
        <div
            className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-100 to-yellow-300 overflow-hidden"
            style={{
                backgroundImage: "url('/img/eevee.png')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "50%",
            }}
        >
            {!showContent && <ReverseStripes onComplete={handleTransitionComplete} />}

            {showContent && (
                <>
                    <motion.h1
                        className="text-5xl font-bold text-yellow-500 drop-shadow-lg -mt-[40%] z-10"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        Registrazione
                    </motion.h1>

                    <motion.form
                        onSubmit={handleRegister}
                        className="absolute top-[85%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col space-y-4 p-6 bg-white/80 backdrop-blur-md rounded-xl shadow-lg border-4 border-yellow-300 w-full max-w-md z-20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.5 }}
                    >
                        <input
                            type="email"
                            placeholder="Email Pokémon"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="px-4 py-2 rounded-full border-2 border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                        <input
                            type="password"
                            placeholder="Password Segreta"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="px-4 py-2 rounded-full border-2 border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.05 }}
                            className="bg-yellow-400 text-red-800 font-bold py-2 rounded-full shadow-md hover:bg-yellow-500 transition"
                        >
                            Cattura il tuo account!
                        </motion.button>
                    </motion.form>
                </>
            )}
        </div>
    );
}

export default RegisterPage;
