
function Article() {
  return (
    <section className="bg-gray-200">
      <div className="mx-auto max-w-5xl px-5 py-2">

        {/* Main Heading */}
        <h2 className="text-center text-3xl font-black text-slate-900">
          A modern MoneyPot digital platform
        </h2>

        {/* Article */}
        <div className="mt-6 space-y-5 text-center leading-8 text-slate-600">
          <p>
            MoneyPot is presented as a modern digital gaming and entertainment
            platform where visitors can explore an organized interface,
            discover available content, and navigate between different
            sections through a simple and accessible layout.
          </p>

          <p>
            The website is built with React and Tailwind CSS, helping the
            interface remain responsive across desktop, tablet, and mobile
            screens. The component-based structure also makes it easier to
            maintain the website and expand different sections as the platform
            develops.
          </p>

          <p>
            The main focus of the MoneyPot interface is to provide clear
            navigation while maintaining a distinctive and modern visual
            identity. The platform can continue to evolve with additional
            content, improved graphics, interactive elements, and further
            interface enhancements in future versions.
          </p>
        </div>

        {/* Table */}
        <div className="mt-12 pb-10  overflow-hidden rounded-2xl border border-gray-300">
          <table className="w-full text-center">
            <thead className="bg-yellow-400 text-slate-950">
              <tr>
                <th className="px-5 py-4">Feature</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-5 py-4">Version</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-300 bg-white">
              <tr>
                <td className="px-5 py-4 text-slate-800">
                  Responsive UI
                </td>
                <td className="px-5 py-4 text-green-600">
                  Ready
                </td>
                <td className="px-5 py-4 text-slate-500">
                  1.0
                </td>
              </tr>

              <tr>
                <td className="px-5 py-4 text-slate-800">
                  Navigation
                </td>
                <td className="px-5 py-4 text-green-600">
                  Ready
                </td>
                <td className="px-5 py-4 text-slate-500">
                  1.0
                </td>
              </tr>

              <tr>
                <td className="px-5 py-4 text-slate-800">
                  Additional Platform Features
                </td>
                <td className="px-5 py-4 text-yellow-600">
                  Coming Soon
                </td>
                <td className="px-5 py-4 text-slate-500">
                  2.0
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}

export default Article;
