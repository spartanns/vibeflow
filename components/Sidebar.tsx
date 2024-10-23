"use client";

import { links } from "@/constants";
import Link from "next/link";

interface LinkProps {
  handleClick?: () => void;
};

const Links: React.FC = ({ handleClick }: LinkProps) => (
  <section className="mt-10">
    {links.map((link) => (
      <Link
        href={link.to}
        key={link.name}
        onClick={() => handleClick && handleClick()}
        className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400"
      >
        <link.icon className="w-6 h-6 mr-2" />
        {link.name}
      </Link>
    ))}
  </section>
);

const Sidebar: React.FC = () => {

  return (
    <nav>
      <section className="md:flex hidden flex-col w-[240px] h-screen py-10 px-4 bg-[#191624]">
        <article className="w-full flex gap-2 justify-center items-center">
          <h3 className="text-cyan-400 font-bold text-3xl">Vibeflow</h3>
        </article>
        <Links />
      </section>
    </nav>
  );
};

export default Sidebar;
