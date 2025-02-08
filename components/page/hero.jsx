"use client";
import { Input } from "../ui/input";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="py-16 -mb-2 px-6 md:px-20 lg:px-32 sm:px-14 md:max-w-4xl">
            <div className="grid gap-3">
                <motion.h1 className="text-3xl md:text-5xl font-medium" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0, transition: { type: 'spring' } }}>
                    Discover & Explore AI Tools & Prompts.
                </motion.h1>
                <motion.p className="text-base md:text-lg" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0, transition: { type: 'spring' } }}>
                    Find the best AI chatbots, image generators, and prompts—all in one place. Browse, compare, and access the latest AI tools effortlessly.
                </motion.p>
            </div>
        </section >
    )
}
