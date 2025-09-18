import { motion } from "framer-motion";

function StripeTransition({ show, onComplete }) {
    if (!show) return null;
    const stripes = Array.from({ length: 40 });

    return (
        <div className="fixed inset-0 z-50 pointer-events-none">
            {stripes.map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute left-0 w-full"
                    style={{ top: `${(i * 2.5)}%`, height: "2.5%", background: "rgba(253, 224, 71, 0.7)" }} // bg-yellow-200/70
                    initial={{ x: 0 }}
                    animate={{ x: i % 2 === 0 ? "100vw" : "-100vw" }}
                    transition={{ duration: 0.5, delay: i * 0.025 }}
                    onAnimationComplete={i === stripes.length - 1 ? onComplete : undefined}
                />
            ))}
        </div>
    );
}

export default StripeTransition;