import { MusicCardLarge } from "@/components/music-card-large";
import { MusicCardSmall } from "@/components/music-card-small";
import { Sidebar } from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CirclePlus } from "lucide-react";

const topPicks = [
  {
    title: "React Rendezvous",
    author: "Ethan Byte",
    image: "/images/1.jpg",
  },
  {
    title: "Async Awakenings",
    author: "Nina Netcode",
    image: "/images/2.jpg",
  },
  {
    title: "The Art of Reusability",
    author: "Lena Logic",
    image: "/images/3.jpg",
  },
  {
    title: "Stateful Symphony",
    author: "Beth Binary",
    image: "/images/4.jpg",
  },
  {
    title: "React Rendezvous",
    author: "Ethan Byte",
    image: "/images/1.jpg",
  },
];
const madeForYou = [
  {
    title: "Thinking Components",
    author: "Lena Logic",
    image: "/images/5.jpg",
  },
  {
    title: "Functional Fury",
    author: "Beth Binary",
    image: "/images/6.jpg",
  },
  {
    title: "React Rendezvous",
    author: "Ethan Byte",
    image: "/images/7.jpg",
  },
  {
    title: "Stateful Symphony",
    author: "Beth Binary",
    image: "/images/8.jpg",
  },
  {
    title: "Async Awakenings",
    author: "Nina Netcode",
    image: "/images/9.jpg",
  },
  {
    title: "The Art of Reusability",
    author: "Lena Logic",
    image: "/images/10.jpg",
  },
  {
    title: "Thinking Components",
    author: "Lena Logic",
    image: "/images/5.jpg",
  },
];

export default function Page() {
  return (
    <div>
      {/* 🔹 Top Header Bar */}
      <div className="sticky top-0 z-30 bg-background border-b border-border flex items-center justify-between px-5 py-3">
        <h1 className="text-xs font-bold tracking-wide">Music</h1>
      </div>
      <div className="flex min-h-screen overflow-hidden">
        <Sidebar />
        <main className="flex-1 p-8 overflow-x-hidden">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <Tabs defaultValue="music">
              <TabsList>
                <TabsTrigger value="music">Music</TabsTrigger>
                <TabsTrigger value="podcasts">Podcasts</TabsTrigger>
                <TabsTrigger value="live" disabled>
                  Live
                </TabsTrigger>
              </TabsList>
            </Tabs>
            <Button className="flex items-center gap-2 bg-[#181818] text-white hover:bg-[#282828]">
              <CirclePlus className="w-4 h-4" />
              Add music
            </Button>
          </div>
          {/* Listen Now */}
          <h2 className="text-xl font-semibold mb-1">Listen Now</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Top picks for you. Updated daily.
          </p>
          {/* Divider line */}
          <hr className="border-t border-gray-200 dark:border-neutral-800 my-5" />
          <ScrollArea className="w-full whitespace-nowrap pb-6 mb-3">
            <div className="flex gap-6">
              {topPicks.map((item, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-[75%] sm:w-[45%] md:w-[30%] lg:w-[23%]"
                >
                  <MusicCardLarge {...item} />
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
          {/* Made for You */}
          <h2 className="text-xl font-semibold mb-1">Made for You</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Your personal playlists. Updated daily.
          </p>
          {/* Divider line */}
          <hr className="border-t border-gray-200 dark:border-neutral-800 my-5" />
          <ScrollArea className="w-full whitespace-nowrap pb-4 mb-3">
            <div className="flex gap-4">
              {madeForYou.map((item, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 snap-start w-[80%] sm:w-[45%] md:w-[30%] lg:w-[20%] xl:w-[15%]"
                >
                  <MusicCardSmall {...item} />
                </div>
              ))}
            </div>
            {/* Thanh scroll bar nằm dưới */}
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </main>
      </div>
    </div>
  );
}
