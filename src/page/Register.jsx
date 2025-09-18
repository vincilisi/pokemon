import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        // Logica di registrazione qui
        // navigate("/") se vuoi tornare alla home dopo
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen relative overflow-hidden">
            {/* Eevee come background centrale sopra il titolo */}
            <motion.img
                src="/img/eevee.png"
                alt="Eevee"
                className="absolute left-[25%] top-[7%] w-[50%] max-w-[100%] -translate-x-1/2 -translate-y-2/3 pointer-events-none select-none opacity-80"
                initial={{ opacity: 0, scale: 1.2, filter: "brightness(2) blur(8px)" }}
                animate={{ opacity: 0.8, scale: 1, filter: "brightness(1.2) blur(0px)" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                style={{ zIndex: 1 }}
            />
            {/* Contenuto sopra Eevee */}
            <div className="flex flex-col items-center justify-center w-full z-10 relative">
                <motion.h2
                    className="text-5xl font-bold text-yellow-300 drop-shadow-[0_0_40px_rgba(255,255,100,0.9)] mb-8"
                    initial={{ opacity: 0, scale: 0.7, filter: "brightness(2) blur(8px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "brightness(1.2) blur(0px)" }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    style={{ zIndex: 2 }}
                >
                    Register
                </motion.h2>
                <motion.form
                    onSubmit={handleRegister}
                    className="flex flex-col items-center bg-transparent rounded-lg shadow-lg p-8 space-y-6 w-80 mt-20"
                    initial={{ scaleY: 0, opacity: 0, originY: 0 }}
                    animate={{ scaleY: 1, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 1.2, ease: "backOut" }}
                    style={{ transformOrigin: "top", zIndex: 2 }}
                >
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="border border-transparent rounded px-4 py-2 w-full"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="border border-gray-300 rounded px-4 py-2 w-full"
                        required
                    />
                    <motion.button
                        type="submit"
                        className="rounded-full px-6 py-2 bg-yellow-300 text-red-800 font-semibold shadow-md hover:bg-yellow-400 transition"
                        whileTap={{ scale: 0.95 }}
                    >
                        Registrati
                    </motion.button>
                </motion.form>
            </div>
        </div>
    );
}

export default Register;