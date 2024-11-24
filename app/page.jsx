import Image from "next/image";
import Socials from './components/Socials';
export default function Home() {
  return (
    <div className="grid grid-rows-2 md:grid-rows-1 grid-cols-3 gap-6 mt-20 md:mt-28">
      <div className="lg:justify-self-end justify-self-center md:max-lg:hidden lg:block row-start-1 row-end-2 col-span-3 lg:col-span-1">
        <Image
          src="/profile_pic.webp"
          width={250}
          height={450}
          className="border-black border"
          alt="Picture of the author"
        />
      </div>
      <div className="max-w-xl flex flex-col gap-4 justify-start md:justify-center justify-self-center lg:justify-self-auto col-span-3 lg:col-span-2">
        <h1 className="text-4xl font-bold">Hi, I'm Akshat.</h1>
        <p className="text-2xl">
          I'm a hacker and security researcher focused on national security,
          targeted surveillance, and other offensive security practices enabled by
          technology.
        </p>
        <div className="">
          <Socials />
        </div>
      </div>
    </div>
  );
}
