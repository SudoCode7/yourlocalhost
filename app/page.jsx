import Image from "next/image";
import Socials from './components/Socials';
export default function Home() {
  return (
    <div className="grid grid-cols-3 gap-6 mt-20 md:mt-28">
      <div className="justify-self-end hidden lg:block">
        <Image
          src="/profile_pic.jpg"
          width={250}
          height={450}
          className="border-black border"
          alt="Picture of the author"
        />
      </div>
      <div className="max-w-xl flex flex-col gap-4 justify-center justify-self-center lg:justify-self-auto col-span-3 lg:col-span-2">
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
