"use client";

import Link from "next/link";
import { Building2 } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navLinks } from "./nav-links";

export function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link 
              href="/" 
              className={cn(
                "flex items-center space-x-2",
                isActive('/') && "text-primary"
              )}
            >
              <Building2 className="h-8 w-8" />
              <span className="font-bold text-xl">SFS Consultancy</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "transition-colors duration-200",
                    isActive(link.href)
                      ? "font-bold text-primary"
                      : "text-foreground/80 hover:text-primary"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}