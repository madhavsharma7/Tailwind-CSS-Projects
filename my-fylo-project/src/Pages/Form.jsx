export default function Form() {
  return (
    <section className="relative z-20 max-w-4xl mx-auto px-6 mt-[-20vh] mb-16">
      <div className="bg-[#171e29] rounded-2xl shadow-2xl p-8 md:p-12 text-center text-white border border-slate-800">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Get early access today
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-sm md:text-base leading-relaxed">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>

        <form className="flex">
          <input
            type="email"
            placeholder="email@example.com"
            className="w-full sm:flex-1 px-6 py-3.5 rounded-full text-slate-900 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          />

          <button
            type="submit"
            className="bg-[#65e2d9] text-white font-bold px-8 py-3.5 rounded-full cursor-pointer shadow-lg ml-5"
          >
            Get Started For Free
          </button>
        </form>
      </div>
    </section>
  );
}
