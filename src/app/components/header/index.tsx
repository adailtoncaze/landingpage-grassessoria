'use client'
import Image from "next/image";
import Link from "next/link";
import { NavItem } from "./nav-item";
import { Button } from "../button";

const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'Soluções',
    href: '#'
  },
  {
    label: 'Sobre nós',
    href: '#'
  },
  {
    label: 'Contato',
    href: '#'
  }
]

export const Header = () => {
  return (
    <header className="w-full h-32 flex items-center justify-center">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image
            width={168}
            height={75}
            src="/images/logo_GR.svg"
            alt="Logo da GR Assessoria Contábil"
          />
        </Link>
        <nav className="flex items-center gap-4 sm:gap-10">
          {NAV_ITEMS.map(item => (
            <NavItem {...item} key={item.label}/>
          ))}
        </nav>
        <Button className="hover:bg-gr-blue-dark py-4">
          Venha para GR Assessoria Contábil
        </Button>
      </div>      
    </header>
  );
};
