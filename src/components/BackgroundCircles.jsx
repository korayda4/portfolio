import React from "react";
import { motion } from "framer-motion";

const circles = Array.from({ length: 12 }, (_, i) => i); 

export default function BackgroundCircles() {
    return (
        <div className="background-circles">
            {circles.map((i) => {
                const size = Math.floor(Math.random() * 100) + 125; // 50-150px
                const left = Math.random() * 90; // %0-%90, ekran dışına çıkmasın
                const top = Math.random() * 80; // %0-%80
                const durationX = Math.random() * 10 + 10; // 10-20s
                const durationY = Math.random() * 10 + 10; // 10-20s
                const delay = Math.random() * 2;

                return (
                    <motion.div
                        key={i}
                        className="circle"
                        style={{
                            width: size,
                            height: size,
                            left: `${left}%`,
                            top: `${top}%`,
                        }}
                        animate={{
                            x: [0, Math.random() * 50 - 25, 0], // -25px ~ +25px arası x
                            y: [0, Math.random() * 50 - 25, 0], // -25px ~ +25px arası y
                        }}
                        transition={{
                            duration: Math.max(durationX, durationY),
                            repeat: Infinity,
                            repeatType: "loop",
                            delay: delay,
                            ease: "easeInOut",
                        }}
                    />
                );
            })}
        </div>
    );
}
