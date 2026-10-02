import { Link } from "react-router-dom";

function InternalLinksArticle() {
  return (
    <section
      aria-labelledby="contact-related-pages"
      className="bg-gray-200 py-10 sm:py-14"
    >
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <article className="rounded-2xl border border-gray-300 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <h2
            id="contact-related-pages"
            className="text-2xl font-extrabold leading-tight text-gray-900 sm:text-3xl"
          >
            Moneypot777 Contact & Related Pages
          </h2>

          <div className="mt-5 space-y-5 text-base leading-8 text-gray-600">
            <p>
              The Moneypot777 Contact page provides visitors with a convenient
              way to reach <strong>Moneypot777 Contact</strong> and send
              questions, feedback, and general enquiries.
            </p>

            <p>
              Visitors looking for <strong>Moneypot777 Support</strong> can use
              this page to find general information about available assistance.
              The page is also useful for users searching for{" "}
              <strong>Moneypot777 Customer Support</strong> and general
              platform guidance.
            </p>

            <p>
              To learn more about Moneypot777 and its available sections, visit
              the{" "}
              <Link
                to="/"
                className="font-semibold text-yellow-600 underline decoration-yellow-400 underline-offset-4 hover:text-yellow-700"
              >
                Moneypot777 Home
              </Link>{" "}
              page for an overview of the website and information related to{" "}
              <strong>Moneypot777 Help</strong>.
            </p>

            <p>
              Visitors who want to learn more about the platform can explore
              the{" "}
              <Link
                to="/about"
                className="font-semibold text-yellow-600 underline decoration-yellow-400 underline-offset-4 hover:text-yellow-700"
              >
                About Moneypot777
              </Link>{" "}
              page for additional platform information and website resources.
            </p>

            <p>
              For gaming information, guides, and useful articles, visit the{" "}
              <Link
                to="/blog"
                className="font-semibold text-yellow-600 underline decoration-yellow-400 underline-offset-4 hover:text-yellow-700"
              >
                Moneypot777 Blog
              </Link>{" "}
              section for articles covering gaming information, platform
              features, mobile access, account topics, and responsible gaming.
            </p>

            <p>
              Users looking for game access and installation information can
              visit the{" "}
              <Link
                to="/download"
                className="font-semibold text-yellow-600 underline decoration-yellow-400 underline-offset-4 hover:text-yellow-700"
              >
                Moneypot777 Download
              </Link>{" "}
              page for information about accessing the platform on supported
              devices.
            </p>

            <p>
              Visitors searching for <strong>Moneypot777 Contact Us</strong>{" "}
              information can use this page to review the available contact
              options.
            </p>

            <p>
              These internal links connect the Home, About, Blog, Download, and
              Contact sections, helping visitors move between related
              Moneypot777 resources while keeping the website navigation clear
              and consistent.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default InternalLinksArticle;