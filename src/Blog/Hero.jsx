
function Hero() {
  return (
    <section className="border-b border-gray-300 bg-gray-100">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="mx-auto max-w-4xl rounded-3xl border border-gray-300 bg-white px-6 py-10 text-center shadow-sm sm:px-10">

          <div className="inline-flex items-center gap-3 rounded-full bg-yellow-50 px-5 py-2">
            <span className="h-2 w-2 rounded-full bg-yellow-500" />
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-yellow-600">
              Latest Updates
            </p>
          </div>

          <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            MoneyPot <span className="text-yellow-500">Blog</span>
          </h1>

          <div className="mx-auto mt-6 flex justify-center gap-2">
            <span className="h-1 w-8 rounded-full bg-yellow-300" />
            <span className="h-1 w-14 rounded-full bg-yellow-500" />
            <span className="h-1 w-8 rounded-full bg-yellow-300" />
          </div>

          {/* Article */}
          <article className="mx-auto mt-8 max-w-3xl text-left">
            <p className="text-base leading-8 text-slate-600">
              Welcome to the MoneyPot Blog, a dedicated space for platform
              updates, digital gaming information, website improvements, design
              ideas, and useful content related to the MoneyPot experience.
              Explore articles covering new developments, interface features,
              mobile accessibility, and the changing world of modern digital
              entertainment platforms.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Our articles are created to provide clear and easy-to-understand
              information for visitors. From responsive website design and
              mobile-friendly layouts to navigation improvements, gaming
              interfaces, and new content, the MoneyPot Blog offers a convenient
              way to explore the latest information surrounding the platform.
            </p>
          </article>

          {/* Tags */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              "MoneyPot",
              "MoneyPot Game",
              "Gaming Updates",
              "Web Design",
              "Mobile Experience",
            ].map((keyword) => (
              <span
                key={keyword}
                className="rounded-full border border-yellow-200 bg-yellow-50 px-5 py-2 text-xs font-semibold text-slate-700 transition hover:border-yellow-400 hover:bg-yellow-100"
              >
                {keyword}
              </span>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
