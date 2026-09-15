import heroImg from "../Images/heroimage.png";

export default function Hero() {
  return (
    <section className="relative bg-[#1c2430] text-white pt-6 pb-28 overflow-hidden">
      {/* Background Curve positioned behind content */}
      <div className="absolute bottom-0 left-0 right-0 w-full pointer-events-none z-0">
        <svg
          className="w-full h-[50vh]"
          viewBox="0 0 1440 400"
          preserveAspectRatio="none"
        >
          <path
            fill="#181e2a"
            d="M0,520 C200,50 550,5 720,5 C900,190 1180,30 1440,180 L1440,400 L0,400 Z"
          ></path>
        </svg>
      </div>

      {/* Hero Content on top of curve */}
      <div className="relative z-10 flex flex-col items-center gap-6 text-center max-w-4xl mx-auto px-6">
        <img src={heroImg} alt="Hero Image" className="w-[50vw]" />

        <h1 className="text-4xl font-bold mt-4">
          All your files in one secure location,
          <br /> accessible anywhere.
        </h1>
        <p className="text-lg text-gray-300">
          Fylo stores all your most important files in one secure location.
          <br />
          Access them wherever you need, share and collaborate with friends
          <br />
          family, and co-workers.
        </p>

        <button className="bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-semibold p-3.5 w-48 rounded-full transition-all cursor-pointer shadow-lg">
          Get Started
        </button>
      </div>
    </section>
  );
}
