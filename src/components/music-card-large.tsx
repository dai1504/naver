"use client"

import Image from "next/image"
import { Play } from "lucide-react"

export function MusicCardLarge({
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
      <div className="relative aspect-[3/4] overflow-hidden rounded-xl shadow-md">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay gradient transition */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />

        {/* Animated Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-100 scale-75 group-hover:rotate-0 rotate-[-15deg]"
          >
            <div className="bg-gradient-to-tr from-purple-500 to-pink-400 p-4 rounded-full shadow-xl hover:scale-110 transition-transform">
              <Play className="h-6 w-6 text-white" fill="white" />
            </div>
          </div>
        </div>
      </div>

      {/* Text */}
      <p className="mt-2 font-medium text-sm leading-tight">{title}</p>
      <p className="text-xs text-muted-foreground">{author}</p>
    </div>
  )
}
