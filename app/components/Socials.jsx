import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Socials() {
  return (
    <ul className="flex gap-6">
        <li>
        <Link href="https://x.com/AkshatOnDuty/" className="">
            <Twitter size={30} className="m-2 hover:scale-[1.1] transition-transform"/>
        </Link>
        </li>
        <li>
        <Link href="https://github.com/SudoCode7">
            <Github size={30} className="m-2 hover:scale-[1.1] transition-transform"/>
        </Link>
        </li>
        {/* <li>
        <Link href="#">
            <Mail size={30} className="m-2 hover:scale-[1.1] transition-transform"/>
        </Link>
        </li> */}
        <li>
        <Link href="https://www.linkedin.com/in/akshat-007-jain/">
            <Linkedin size={30} className="m-2 hover:scale-[1.1] transition-transform"/>
        </Link>
        </li>
    </ul>
  )
}
