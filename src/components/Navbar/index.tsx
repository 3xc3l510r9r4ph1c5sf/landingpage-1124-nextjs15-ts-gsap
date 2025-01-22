//src/components/Navbar/index.tsx

import NavLink from './MagneticNavlink';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-0 h-[var(--navbar-height)] bg-hero-dark pl-[4.37rem] pt-[1.69rem] text-mainbody-weg">
      <ul className="flex gap-12">
        <NavLink href="/section">Section</NavLink>
        <NavLink href="/contact">Contact</NavLink>
        <NavLink icons href="/Ref">
          {'Hello'}
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
