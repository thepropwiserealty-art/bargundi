"use client"

export default function StickyForm() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#0a1a2f] shadow-lg z-[9999]">
      <div className="max-w-screen-xl mx-auto px-4">
        <form className="flex flex-wrap items-center gap-4 py-4">
          <input
            type="text"
            placeholder="Name*"
            required
            className="flex-1 min-w-[150px] bg-transparent border-b border-white/50 text-white placeholder-white focus:border-[#c17727] focus:outline-none transition"
          />
          <input
            type="email"
            placeholder="Email*"
            required
            className="flex-1 min-w-[150px] bg-transparent border-b border-white/50 text-white placeholder-white focus:border-[#c17727] focus:outline-none transition"
          />
          <input
            type="tel"
            placeholder="Phone*"
            required
            className="flex-1 min-w-[150px] bg-transparent border-b border-white/50 text-white placeholder-white focus:border-[#c17727] focus:outline-none transition"
          />
          <button
            type="submit"
            className="bg-[#c17727] hover:bg-[#a8621d] text-white font-semibold px-6 py-2 rounded-md transition transform hover:-translate-y-0.5 whitespace-nowrap"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
