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
    <header className="w-full bg-gr-blue-primary h-24 flex items-center justify-center">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image
            width={177.67}
            height={68}
            src="/images/logo_GR.png"
            alt="Logo da GR Assessoria Contábil"
          />
        </Link>
        <nav className="flex items-center gap-4 sm:gap-10">
          {NAV_ITEMS.map(item => (
            <NavItem {...item} key={item.label}/>
          ))}
        </nav>
        <Button className="bg-gr-yellow-primary hover:bg-gr-yellow-dark py-3">
          Venha para GR Assessoria Contábil
        </Button>
      </div>      
    </header>
  );
};
