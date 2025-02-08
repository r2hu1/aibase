"use client";
import { aiBase } from "@/constants/ai";
import { Button } from "../ui/button";
import { ExternalLink, Info, Loader, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useContext, useState } from "react";
import { SearchContext } from "../providers/search-provider";
import { useEffect } from "react";

export default function AiGrid() {
    const search = useContext(SearchContext);
    const [slicedData, setSlicedData] = useState(aiBase.slice(0, 8));
    const [isFetching, setIsFetching] = useState(false);
    const [end, setEnd] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000) {
                if (!isFetching && slicedData.length < aiBase.length) {
                    setIsFetching(true);
                    setEnd(false);
                    setTimeout(() => {
                        setSlicedData([...slicedData, ...aiBase.slice(slicedData.length, slicedData.length + 4)]);
                        setIsFetching(false);
                    }, 500);
                } else if (slicedData.length === aiBase.length) {
                    setEnd(true);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [slicedData, isFetching]);

    useEffect(() => {
        if (search.query !== "") {
            setSlicedData(aiBase);
        } else {
            setSlicedData(aiBase.slice(0, 8));
        }
    }, [search.query]);

    return (
        <section className="py-10 px-6 md:px-20 lg:px-32 sm:px-14">
            <div className="grid gap-3 sm:grid-cols-2">
                {slicedData.filter((item) => item.tags[0].toLowerCase().includes(search.query.toLowerCase()) || item.name.toLowerCase().includes(search.query.toLowerCase())).map((item, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ type: 'spring' }}
                        viewport={{ once: true, amount: 0.5 }}
                        key={index}
                        className="grid gap-4 border rounded-lg p-4"
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <img src={item.icon} className="w-10 h-10" alt={item.name} onError={(e) => e.target.src = '/bot.svg'} />
                                <h3 className="text-lg font-medium">{item.name}</h3>
                            </div>
                            <Button size="icon" asChild className="h-9 w-9">
                                <Link href={item.link}><ExternalLink className="w-3 h-3" /></Link>
                            </Button>
                        </div>
                        <p className="text-sm text-foreground/80">{item.description}</p>
                    </motion.div>
                ))}
                {isFetching && (
                    <Loader className="w-5 h-5 sm:col-span-2 mt-6 animate-spin mx-auto" />
                )}
                {end && (
                    <p className="text-center sm:col-span-2 text-sm text-foreground/80 mt-6">You've reached the end!</p>
                )}
            </div>
        </section>
    )
};
