import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1D2030] text-[#F1FAEE] py-8 font-trirong">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-[#E63946] mb-4">
              SABAI THAI
            </h3>
            <p className="max-w-xs">
              Bringing the authentic street food experience of Thailand to your
              doorstep since 2015.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold mb-4 text-[#A5D8A6]">HOURS</h4>
              <ul>
                <li>Mon-Fri: 11am - 10pm</li>
                <li>Sat-Sun: 12pm - 11pm</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-[#A5D8A6]">CONTACT</h4>
              <ul>
                <li>123 Thai Street</li>
                <li>Phone: (555) 123-4567</li>
                <li>Email: info@sabaithai.com</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-[#A5D8A6]">FOLLOW US</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-[#E63946]">
                  <span className="sr-only">Facebook</span>
                  <FaFacebook className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-[#E63946]">
                  <span className="sr-only">Instagram</span>
                  <FaInstagram className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-[#E63946]">
                  <span className="sr-only">Twitter</span>
                  <FaTwitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-8 pt-8 border-t border-[#3D4152] text-center text-sm">
          <p>© {new Date().getFullYear()} Sabai Thai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;