import AiGrid from "@/components/page/aiGrid";
import Hero from "@/components/page/hero";
import Search from "@/components/page/search";
import { SearchProvider } from "@/components/providers/search-provider";

export default function Home() {
  return (
    <main>
      <Hero />
      <SearchProvider>
        <Search />
        <AiGrid />
      </SearchProvider>
    </main>
  );
}
