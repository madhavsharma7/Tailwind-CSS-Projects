export default function Comment() {
  const testimonials = [
    {
      id: 1,
      quote:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      name: "Satish Patel",
      title: "Founder & CEO, Huddle",
      avatar: "https://i.pravatar.cc/100?img=33",
    },
    {
      id: 2,
      quote:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      name: "Bruce McKenzie",
      title: "Founder & CEO, Huddle",
      avatar: "https://i.pravatar.cc/100?img=12",
    },
    {
      id: 3,
      quote:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      name: "Iva Boyd",
      title: "Founder & CEO, Huddle",
      avatar: "https://i.pravatar.cc/100?img=47",
    },
  ];

  return (
    <section className="bg-[#1c2430] h-150 py-20 px-10 md:px-16 text-white">
      <div className="relative">
        {/* Decorative Quote Mark */}
        <div className="absolute top-[-33vh] left-[-2vw] text-[#61dfd9] text-[25rem] font-serif select-none z-2000">
          “
        </div>

        {/* 3-Column Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 pt-4 ">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-[#202b3d] p-8 rounded-lg shadow-xl flex flex-col justify-between space-y-6 "
            >
              <p className="text-sm md:text-base text-gray-200">{item.quote}</p>
              <div className="flex items-center space-x-5">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-xs font-bold tracking-wide">
                    {item.name}
                  </h4>
                  <p className="text-[10px] text-gray-400">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
