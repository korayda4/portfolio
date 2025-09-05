import React from "react";
import { motion } from "framer-motion";

export default function TypeLoop({ texts = [] }) {
    const [idx, setIdx] = React.useState(0);

    React.useEffect(() => {
        const t = setInterval(
            () => setIdx((i) => (i + 1) % texts.length),
            2400
        );
        return () => clearInterval(t);
    }, [texts.length]);

    return (
        <motion.div
            key={idx}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            className="type-text"
        >
            {texts[idx]}
        </motion.div>
    );
}
