import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Socials() {
  return (
    <ul className="flex gap-6">
        <li>
        <Link href="#" className="">
            <Twitter size={30} className="m-2 hover:scale-[1.1] transition-transform"/>
        </Link>
        </li>
        <li>
        <Link href="#">
            <Github size={30} className="m-2 hover:scale-[1.1] transition-transform"/>
        </Link>
        </li>
        <li>
        <Link href="#">
            <Mail size={30} className="m-2 hover:scale-[1.1] transition-transform"/>
        </Link>
        </li>
        <li>
        <Link href="#">
            <Linkedin size={30} className="m-2 hover:scale-[1.1] transition-transform"/>
        </Link>
        </li>
    </ul>
  )
}
