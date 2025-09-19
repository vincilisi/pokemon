import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [accepted, setAccepted] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Login | PokedexWolf";
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess(false);
        if (!accepted) {
            setError("Devi accettare la Privacy Policy e i Termini di Servizio.");
            return;
        }
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setSuccess(true);
            setTimeout(() => navigate("/homepage"), 1000);
        } catch (err) {
            setError("Email o password non corretti.");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black relative overflow-hidden">
            {/* Immagine login come background */}
            <motion.img
                src="/img/login.png"
                alt="Login"
                className="absolute left-[25%] top-[7%] w-[50%] max-w-[100%] -translate-x-1/2 -translate-y-2/3 pointer-events-none select-none opacity-80"
                initial={{ opacity: 0, scale: 1.2, filter: "brightness(2) blur(8px)" }}
                animate={{ opacity: 0.8, scale: 1, filter: "brightness(1.2) blur(0px)" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                style={{ zIndex: 1 }}
            />
            <div className="flex flex-col items-center justify-center w-full z-10 relative">
                <motion.h1
                    className="text-5xl font-bold text-yellow-300 drop-shadow-[0_0_40px_rgba(255,255,100,0.9)] mb-8 mt-32"
                    initial={{ opacity: 0, scale: 0.7, filter: "brightness(2) blur(8px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "brightness(1.2) blur(0px)" }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    style={{ zIndex: 2 }}
                >
                    Login
                </motion.h1>
                <motion.form
                    onSubmit={handleLogin}
                    className="flex flex-col items-center bg-transparent rounded-lg shadow-lg p-8 space-y-6 w-80"
                    initial={{ scaleY: 0, opacity: 0, originY: 0 }}
                    animate={{ scaleY: 1, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 1.2, ease: "backOut" }}
                    style={{ transformOrigin: "top", zIndex: 2 }}
                    aria-label="Modulo di login"
                >
                    <div className="w-full">
                        <label htmlFor="email" className="block text-white font-semibold mb-2">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            placeholder="Inserisci la tua email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="border border-gray-300 rounded px-4 py-2 w-full"
                            required
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="password" className="block text-white font-semibold mb-2">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            placeholder="Inserisci la password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className="border border-gray-300 rounded px-4 py-2 w-full"
                            required
                            minLength={6}
                        />
                    </div>
                    <div className="flex items-center w-full">
                        <input
                            id="privacy"
                            name="privacy"
                            type="checkbox"
                            checked={accepted}
                            onChange={e => setAccepted(e.target.checked)}
                            className="mr-2"
                            required
                        />
                        <label htmlFor="privacy" className="text-white text-sm">
                            Accetto la <a href="/privacy" className="underline text-yellow-400" target="_blank" rel="noopener noreferrer">Privacy Policy</a> e i <a href="/termini" className="underline text-yellow-400" target="_blank" rel="noopener noreferrer">Termini di Servizio</a>
                        </label>
                    </div>
                    {error && <div className="text-red-600 text-sm">{error}</div>}
                    {success && <div className="text-green-600 text-sm">Login effettuato!</div>}
                    <motion.button
                        type="submit"
                        className="rounded-full px-6 py-2 bg-yellow-300 text-red-800 font-semibold shadow-md hover:bg-yellow-400 transition"
                        whileTap={{ scale: 0.95 }}
                    >
                        Login
                    </motion.button>
                </motion.form>
            </div>
        </div>
    );
}

export default Login;