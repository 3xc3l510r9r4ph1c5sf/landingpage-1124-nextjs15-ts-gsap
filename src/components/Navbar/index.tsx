// src/components/Navbar/index.tsx

'use client';

import NavLink from './Navlink'; // Updated import
import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <>
      {/* Desktop Nav -- hidden on small screens */}
      <nav
        className="
          sticky top-0 z-50 h-[var(--navbar-height)] bg-hero-dark
          pl-[4.37rem] pt-[1.69rem] text-mainbody-weg
          hidden lg:block
        "
      >
        <ul className="flex gap-12">
          <NavLink href="/section">Section</NavLink>
          <NavLink href="/contact">Contact</NavLink>
          <NavLink icons href="/Ref">
            Hello
          </NavLink>
        </ul>
      </nav>

      {/* Mobile Nav -- shown below lg breakpoint */}
      <div className="lg:hidden">
        <MobileNav />
      </div>
    </>
  );
};

export default Navbar;
