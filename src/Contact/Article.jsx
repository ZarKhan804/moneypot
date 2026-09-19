
import { Mail, MessageCircle, Send } from "lucide-react";

function Article() {
  function handleSubmit(e) {
    e.preventDefault();
    alert("Message submitted successfully!");
  }

  return (
    <section className="bg-gray-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-2">

        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-600">
            Contact
          </p>

          <h2 className="mt-3 text-4xl font-black text-slate-900">
            We would love to hear from you
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            If you have questions, suggestions or feedback about our
            entertainment platform, use the form and send us a message.
          </p>

          <div className="mx-auto mt-8 max-w-md space-y-4 md:mx-0">

            <div className="flex items-center gap-4 rounded-xl border border-gray-300 bg-white p-4 text-left">
              <Mail className="shrink-0 text-yellow-500" />
              <span className="text-slate-700">
                support@example.com
              </span>
            </div>

            <div className="flex items-center gap-4 rounded-xl border border-gray-300 bg-white p-4 text-left">
              <MessageCircle className="shrink-0 text-yellow-500" />
              <span className="text-slate-700">
                Customer Support
              </span>
            </div>

          </div>
        </div>

        {/* FORM */}
        <div className="flex justify-center md:justify-end">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-xl rounded-2xl border border-gray-300 bg-white p-6 shadow-sm"
          >
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-800">
                Name
              </label>

              <input
                required
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-slate-900 outline-none placeholder:text-gray-400 focus:border-yellow-400"
              />
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-semibold text-slate-800">
                Email
              </label>

              <input
                required
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-slate-900 outline-none placeholder:text-gray-400 focus:border-yellow-400"
              />
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-semibold text-slate-800">
                Message
              </label>

              <textarea
                required
                rows="5"
                placeholder="Write your message"
                className="w-full resize-none rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-slate-900 outline-none placeholder:text-gray-400 focus:border-yellow-400"
              />
            </div>

            <button
              type="submit"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-400 px-5 py-3.5 font-bold text-slate-950 transition hover:bg-yellow-300"
            >
              Send Message
              <Send size={18} />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}

export default Article;
