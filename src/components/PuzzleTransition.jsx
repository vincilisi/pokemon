import { motion } from "framer-motion";

function PuzzleTransition({ show, onComplete, rows = 10, cols = 20 }) {
    if (!show) return null;

    const tiles = [];
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            tiles.push({ r, c, key: `${r}-${c}` });
        }
    }

    return (
        <div className="fixed inset-0 z-50 pointer-events-none">
            {tiles.map(({ r, c, key }) => (
                <motion.div
                    key={key}
                    className="absolute"
                    style={{
                        width: `${100 / cols}%`,
                        height: `${100 / rows}%`,
                        left: `${(c * 100) / cols}%`,
                        top: `${(r * 100) / rows}%`,
                        background: "rgba(253, 224, 71, 0.85)",
                        borderRadius: "6px",
                    }}
                    initial={{ scale: 1, opacity: 1 }}
                    animate={{
                        scale: 0,
                        opacity: 0,
                        transition: {
                            delay: 0.2 + (r + c) * 0.04,
                            duration: 0.4,
                        },
                    }}
                    onAnimationComplete={
                        key === `${rows - 1}-${cols - 1}` ? onComplete : undefined
                    }
                />
            ))}
        </div>
    );
}

export default PuzzleTransition;