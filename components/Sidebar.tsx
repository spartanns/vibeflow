"use client";

import { links } from "@/constants";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { RiCloseLine } from "react-icons/ri";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav>
        <section className="md:flex hidden flex-col w-[240px] h-screen py-10 px-4 bg-[#191624]">
          <article className="w-full flex gap-2 justify-center items-center">
            <Link href="/">
              <h3 className="text-cyan-400 font-bold text-3xl font-logo" id="logo">Vibeflow</h3>
            </Link>
          </article>
          <Links />
        </section>
      </nav>
      <div className="absolute md:hidden block top-6 right-3">
        {mobileMenuOpen ? (
          <RiCloseLine className="w-6 h-6 text-white mr-2" onClick={() => setMobileMenuOpen(prev => !prev)} />
        ) : (
          <HiOutlineMenu className="w-6 h-6 text-white mr-2" onClick={() => setMobileMenuOpen(prev => !prev)} />
        )}
      </div>
      <section className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#082f49] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen ? "left-0" : "-left-full"}`}>
        <article className="w-full flex gap-2 justify-center items-center">
          <Link href="/">
            <h3 className="text-cyan-400 font-bold text-3xl font-logo" id="logo">Vibeflow</h3>
          </Link>
        </article>
        <Links handleClick={() => setMobileMenuOpen(prev => !prev)} />
      </section>

    </>
  );
};

export default Sidebar;
