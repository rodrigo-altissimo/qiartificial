import { useScrollDetection } from '../hooks/useScrollDetection';
import NavbarLogo from './NavbarLogo';
import NavbarDesktopMenu from './NavbarDesktopMenu';
import NavbarMobileMenu from './NavbarMobileMenu';

const Navbar = () => {
  const isScrolled = useScrollDetection();

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="flex justify-between items-center px-4">
        <div className="flex items-center">
          <NavbarLogo />
        </div>

        <NavbarDesktopMenu />
        <NavbarMobileMenu />
      </div>
    </nav>
  );
};

export default Navbar;
