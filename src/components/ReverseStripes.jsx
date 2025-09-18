import { motion } from "framer-motion";

function ReverseStripes({ onComplete }) {
    return (
        <div className="fixed inset-0 z-50 bg-black">
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="h-[5%] bg-yellow-300"
                    initial={{ x: i % 2 === 0 ? 1000 : -1000 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.8, delay: i * 0.05 }}
                    onAnimationComplete={i === 19 ? onComplete : undefined}
                />
            ))}
        </div>
    );
}

export default ReverseStripes;
