import { Phone, Mail, MapPin } from 'lucide-react';

export default function BarInfo() {
  return (
    <>
      <div className="relative z-10">
        <div className="hidden md:flex justify-between items-center px-4 py-2 bg-black/80 text-sm">
          <div className="flex items-center">
            <MapPin size={16} className="mr-1" />
            <span>testing testing testing 04</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Mail size={16} className="mr-1" />
              <a href="mailto:booking@reston.com">booking@rrrwsf.com</a>
            </div>
            <div className="flex items-center">
              <Phone size={16} className="mr-1" />
              <a href="tel:">+46464646464646</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
