import Image from "next/image"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function MovieDetails() {
  return (
    <div className="bg-black min-h-screen text-white">
      <div className="container mx-auto p-4 md:p-6">
        <div className="grid md:grid-cols-[300px,1fr] gap-6">
          {/* Movie Poster */}
          <div className="relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-14%20194645-uEoqdqNBbdMXEnQcChXKS3xscWNHaM.png"
              alt="Frozen movie poster"
              width={300}
              height={450}
              className="rounded-lg"
            />
            <div className="absolute bottom-4 left-4">
              <div className="text-sm text-white/90">1 hour 50 minutes remaining</div>
              <Progress value={75} className="w-[250px] mt-2" />
            </div>
          </div>

          {/* Movie Details */}
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-2xl md:text-3xl font-semibold">Frozen (Plus Bonus Features)</h1>
                <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
                  <span>2013</span>
                  <span>2 hours 24 minutes</span>
                  <span className="border border-gray-600 px-1 rounded text-xs">PG</span>
                </div>
              </div>
              <Badge variant="secondary" className="bg-green-700 text-white hover:bg-green-700">
                YOU OWN THIS VIDEO
              </Badge>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <Star className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
                <span className="ml-1 font-semibold">7.9/10</span>
              </div>
              <span className="text-gray-400 text-sm">(5206)</span>
            </div>

            <p className="text-gray-300">
              In "Frozen," fearless optimist Anna teams up with rugged mountain man Kristoff and his loyal reindeer Sven
              in an epic journey.
            </p>

            <div className="space-y-2">
              <div className="text-gray-400">
                <span className="font-semibold text-gray-300">Starring: </span>
                Kristen Bell, Idina Menzel, Jonathan Groff
              </div>
              <div className="text-gray-400">
                <span className="font-semibold text-gray-300">Directed by: </span>
                Chris Buck, Jennifer Lee
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <Button className="bg-yellow-500 text-black hover:bg-yellow-600">Resume</Button>
              <Button variant="secondary">Remove from Watchlist</Button>
              <Button variant="secondary">Watch Trailer</Button>
              <Button variant="secondary">More Ways to Watch</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

