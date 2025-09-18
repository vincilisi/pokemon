import { motion } from "framer-motion";

function TransitionStripes({ onComplete }) {
    return (
        <div className="fixed inset-0 z-50 bg-black">
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="h-[5%] bg-yellow-300"
                    initial={{ x: 0 }}
                    animate={{ x: i % 2 === 0 ? 1000 : -1000 }}
                    transition={{ duration: 0.8, delay: i * 0.05 }}
                    onAnimationComplete={i === 19 ? onComplete : undefined}
                />
            ))}
        </div>
    );
}

export default TransitionStripes;
