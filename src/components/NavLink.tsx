"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({
  href,
  children,
  classActive,
  className,
}: {
  href: string;
  children: React.ReactNode;
  classActive?: string;
  className?: string;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className={`${isActive ? classActive : ""} ${className}`}>
      {children}
    </Link>
  );
};

export default NavLink;