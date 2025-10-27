"use client";

import {
  Home,
  Radio,
  Music2,
  Library,
  ListMusic,
  User,
  Disc,
  CirclePlay,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import clsx from "clsx";

const items = [
  { label: "Listen Now", icon: CirclePlay, active: true },
  { label: "Browse", icon: Music2 },
  { label: "Radio", icon: Radio },
];

const library = [
  { label: "Playlists", icon: ListMusic },
  { label: "Songs", icon: Music2 },
  { label: "Made for You", icon: User },
  { label: "Artists", icon: Disc },
  { label: "Albums", icon: Library },
];

export function Sidebar() {
  return (
    <div className="w-64 border-r bg-background p-5 pt-8 flex flex-col">
      <h2 className="text-lg font-semibold mb-4">Discover</h2>
      <nav className="space-y-1 mb-6">
        {items.map((item) => (
          <Button
            key={item.label}
            variant={item.active ? "secondary" : "ghost"}
            className="w-full justify-start"
          >
            <item.icon className="mr-2 h-4 w-4" />
            {item.label}
          </Button>
        ))}
      </nav>

      <h2 className="text-lg font-semibold mb-4">Library</h2>
      <nav className="space-y-1">
        {library.map((item) => (
          <Button
            key={item.label}
            variant="ghost"
            className="w-full justify-start"
          >
            <item.icon className="mr-2 h-4 w-4" />
            {item.label}
          </Button>
        ))}
      </nav>
    </div>
  );
}
