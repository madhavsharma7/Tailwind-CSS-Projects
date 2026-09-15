export default function Header() {
  return (
    <div className="bg-[#1c2430]">
      <header className="flex items-center gap-3 p-10 size  text-white ">
        <svg
          className="size-15 h-15 text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" />
          <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" />
          <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" />
        </svg>

        <h1 className="text-[3vw] mt-[-1vw] font-bold text-white">Fylo</h1>

        <div className="ml-auto flex gap-15 list-none text-m">
          <li>Features</li>
          <li>Testimonials</li>
          <li>Footer</li>
        </div>
      </header>
    </div>
  );
}
