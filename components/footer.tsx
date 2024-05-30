import Link from "next/link";
import Image from "next/image";

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/SudoKMaar/leaf",
  },
  {
    id: 2,
    img: "/linkedin.svg",
    url: "https://www.linkedin.com/in/AbhishekKMaar/",
  },
  {
    id: 3,
    img: "/instagram.svg",
    url: "https://www.instagram.com/KMaar44",
  },
];
const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center mx-auto">
        <h1 className="font-bold text-4xl md:text-5xl text-center lg:max-w-[50vw]">
          Ready to take <span className="text-green-500">your</span> linguistic
          skills to the next level?
        </h1>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          &copy; {new Date().getFullYear()}{" "}
          <Link
            className="hover:underline cursor-pointer"
            href="https://kmaar.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Abhishek Kumar
          </Link>
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Link href={info.url} target="_blank" rel="noopener noreferrer">
                <Image src={info.img} alt="icons" width={20} height={20} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
