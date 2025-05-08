
import { useScrollDetection } from '../hooks/useScrollDetection';
import NavbarLogo from './NavbarLogo';
import NavbarDesktopMenu from './NavbarDesktopMenu';
import NavbarMobileMenu from './NavbarMobileMenu';

const Navbar = () => {
  const isScrolled = useScrollDetection();

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <NavbarLogo />
          </div>

          <NavbarDesktopMenu />
          <NavbarMobileMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
