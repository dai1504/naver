"use client"

import Image from "next/image"
import { Play } from "lucide-react"

export function MusicCardSmall({
  title,
  author,
  image,
}: {
  title: string
  author: string
  image: string
}) {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-square overflow-hidden rounded-lg shadow-sm">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay gradient transition */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />

        {/* Animated Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-100 scale-75 group-hover:rotate-0 rotate-[-15deg]"
          >
            <div className="bg-gradient-to-tr from-purple-500 to-pink-400 p-3 rounded-full shadow-lg hover:scale-110 transition-transform">
              <Play className="h-4 w-4 text-white" fill="white" />
            </div>
          </div>
        </div>
      </div>

      <p className="mt-2 text-sm font-medium leading-tight">{title}</p>
      <p className="text-xs text-muted-foreground">{author}</p>
    </div>
  )
}
