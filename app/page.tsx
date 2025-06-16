import Link from "next/link"

const projects = [
  { slug: "weather-app", title: "Weather", description: "Get weather details of your city" },
  { slug: "drum-kit", title: "Drum Kit", description: "Play drums with keyboard" },
  { slug: "todo-app", title: "Todo App", description: "Classic todo with add/delete" },
  // add more projects here
]

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white px-8 py-20">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 text-center">
          <h1 className="text-5xl font-bold tracking-tight mb-4">My Project Playground 🛠️</h1>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            A curated collection of 30+ mini projects rebuilt with Next.js, TailwindCSS, and TypeScript.
          </p>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map(({ slug, title, description }) => (
            <Link
              key={slug}
              href={`/projects/${slug}`}
              className="block p-6 rounded-3xl border border-neutral-800 bg-neutral-900 hover:border-white/20 hover:shadow-lg transition-all duration-300 group"
            >
              <h2 className="text-2xl font-semibold mb-2 group-hover:underline">{title}</h2>
              <p className="text-neutral-400 text-base leading-relaxed">{description}</p>
            </Link>
          ))}
        </section>
      </div>
    </main>
  )
}
