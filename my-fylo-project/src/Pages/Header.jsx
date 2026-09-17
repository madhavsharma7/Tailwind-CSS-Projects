import { useState, useEffect } from "react";

export default function Header() {
  // =========================================================================
  // DARK / LIGHT MODE LOGIC
  // =========================================================================

  // [1] State: LocalStorage se saved theme check karta hai (default: Dark Mode)
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") !== "light";
  });

  // [2] DOM Update: State change par <html> tag me 'light' class add/remove aur save karta hai
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  // [3] Click Handler: State ko toggle karta hai (Dark <-> Light)
  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className="bg-[#1c2430]">
      <header className="flex items-center gap-3 p-10 size text-white">
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

        <div className="ml-auto flex items-center gap-15 list-none text-m">
          <li className="cursor-pointer hover:text-[#65e2d9] transition-colors">
            Features
          </li>
          <li className="cursor-pointer hover:text-[#65e2d9] transition-colors">
            Testimonials
          </li>
          <li className="cursor-pointer hover:text-[#65e2d9] transition-colors">
            Footer
          </li>
          {/* =========================================================================
              DARK / LIGHT MODE TOGGLE BUTTON
              - Click karne par toggleTheme() function chalega
              - isDark = true  => Moon Icon (🌙)
              - isDark = false => Sun Icon (☀️)
             ========================================================================= */}
          <li
            onClick={toggleTheme}
            className="cursor-pointer p-1 rounded-full hover:scale-110 active:scale-95 transition-transform"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDark ? (
              /* Moon Icon: Dark Mode me show hoga */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-moon hover:text-[#65e2d9] transition-colors"
              >
                <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-sun text-amber-500 hover:text-amber-400 transition-colors"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.93 4.93 1.41 1.41" />
                <path d="m17.66 17.66 1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m6.34 17.66-1.41 1.41" />
                <path d="m19.07 4.93-1.41 1.41" />
              </svg>
            )}
          </li>
        </div>
      </header>
    </div>
  );
}
