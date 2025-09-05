import React from "react";
import { motion } from "framer-motion";
import FloatingIcon from "./FloatingIcon";
import TypeLoop from "./TypeLoop";

export default function Splash() {
    return (
        <section className="splash">
            <div className="splash-inner">
                <motion.h1
                    className="splash-title"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Merhaba — Ben <span className="accent">Koray</span>
                </motion.h1>

                <motion.p
                    className="splash-sub"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    Modern, minimal ve yüksek kaliteli kullanıcı arayüzleri
                    inşa ediyorum. Front-end odağım: React + performans.
                </motion.p>

                <div className="floating-icons">
                    <FloatingIcon size={18} style={{ left: "10%", top: "30%" }} />
                    <FloatingIcon size={14} style={{ left: "30%", top: "10%" }} />
                    <FloatingIcon size={22} style={{ right: "20%", top: "25%" }} />
                    <FloatingIcon size={16} style={{ right: "5%", top: "60%" }} />
                </div>

                <motion.div
                    className="type-anim"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                >
                    <TypeLoop texts={["Performant UI", "Accessible", "Testable"]} />
                </motion.div>
            </div>
        </section>
    );
}
