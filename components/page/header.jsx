"use client"
import Link from "next/link";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { Telescope } from "lucide-react";

export default function Header() {
    return (
        <motion.header initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0, transition: { type: 'spring' } }} className="flex items-center justify-between px-6 py-5 md:px-20 lg:px-32 sm:px-14">
            <div className="relative">
                <Link href="/" className="font-bold text-xl">AI <span className="text-foreground/70">Base</span></Link>
                <img src="/underline.svg" width={300} height={10} className="absolute -bottom-2 left-0" alt="underline" />
            </div>
            <Button onClick={() => { window.scrollTo({ top: 350, behavior: 'smooth' }) }}>Explore <Telescope className="w-4 h-4" /></Button>
        </motion.header>
    )
}