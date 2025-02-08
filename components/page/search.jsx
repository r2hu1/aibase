"use client";
import { SearchIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { aiBase } from "@/constants/ai";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { SearchContext } from "../providers/search-provider";

export default function Search() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedTag, setSelectedTag] = useState("");
    const search = useContext(SearchContext);

    return (
        <motion.section initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0, transition: { type: 'spring' } }} className="py-4 bg-secondary sm:rounded-lg px-6 md:mx-20 lg:mx-32 sm:mx-14">
            <div className="flex items-center gap-2">
                <Input value={searchQuery} onChange={(e) => { setSearchQuery(e.target.value); search.setQuery(e.target.value); }} placeholder="Search..." />
                <Button size="icon" className="min-w-10"><SearchIcon className="w-4 h-4" /></Button>
            </div>
            <ScrollArea className="py-3 -mb-3">
                <div className="flex gap-2">
                    {aiBase.map((item, index) => item.tags[0]).filter((value, index, self) => self.indexOf(value) === index).map((item, index) => (
                        <Button key={index} onClick={() => { setSelectedTag(item === selectedTag ? "" : item); search.setQuery(item === selectedTag ? "" : item); }} size="sm" className="text-sm font-normal" variant={selectedTag === item ? "default" : "outline"}>{item.slice(0, 1).toUpperCase() + item.slice(1)}</Button>
                    ))}
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
        </motion.section>
    )
}