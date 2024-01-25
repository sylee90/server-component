"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export interface NavItemProps {
  item: {
    id: number;
    href: string;
    title: string;
    isActive: boolean;
  }
}
export default function NavItem({ item }: NavItemProps) {
  const { id, href, title, isActive } = item;
  const pathname = usePathname();
 
  return (
    <Link 
      href={href} 
      className={`px-3 py-2 rounded-md ${pathname === href ? 'bg-sky-500 text-white' : 'bg-slate-50'}`}>
      {title}
    </Link>
  )
}