import iconAccessAnywhere from "../Images/icon-access-anywhere.svg";
import iconSecurity from "../Images/icon-security.svg";
import iconCollaboration from "../Images/icon-collaboration.svg";
import iconAnyFile from "../Images/icon-any-file.svg";

export default function Features() {
  const featuresList = [
    {
      icon: iconAccessAnywhere,
      title: "Access your files, anywhere",
      description:
        "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
    },
    {
      icon: iconSecurity,
      title: "Security you can trust",
      description:
        "2-factor authentication and user-controlled encryption are just a couple of the security features we use to help protect your files.",
    },
    {
      icon: iconCollaboration,
      title: "Real-time collaboration",
      description:
        "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
    },
    {
      icon: iconAnyFile,
      title: "Store any type of file",
      description:
        "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
    },
  ];

  return (
    <section className="bg-[#181e2a] text-white py-12 px-6 ">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-30 text-center mt-30">
        {featuresList.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-4">
            <img
              src={item.icon}
              alt={item.title}
              className="w-20 h-20 object-contain"
            />
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-white max-w-sm text-[1vw] font-semibold ">
              {item.description}
            </p>
          </div>
        ))}
      </div>
      <div className="mb-20"></div>
    </section>
  );
}
