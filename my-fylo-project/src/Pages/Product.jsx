import stayProductiveImg from "../Images/illustration-stay-productive.png";

export default function Products() {
  return (
    <section className="bg-[#1c2431] text-white py-16 px-6">
      <div className="flex">
        <img
          src={stayProductiveImg}
          className="w-150 m-20"
          alt="Productive Img"
        ></img>
        <div>
          <h1 className="mt-45 text-5xl font-medium">
            Stay productive, <br />
            wherever you are
          </h1>
          <p className="text-lg mt-5">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all <br /> of your file storage needs.
          </p>
          <p className="text-lg mt-5">
            Securely share files and folders with friends, family and colleagues
            for live <br /> collaboration. No email attachments required.
          </p>
          <a href="#" className="text-lg mt-5 flex underline text-[#61dfd9]">
            See how Flyo works
            <svg
              className="size-4  ml-2 mt-1 border rounded-2xl border-[#61dfd9] bg-[#61dfd9] text-black"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-move-right"
            >
              <path d="M18 8L22 12L18 16" />
              <path d="M2 12H22" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
