import { Building2, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-secondary mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Building2 className="h-6 w-6" />
              <span className="font-bold text-lg">SFS Consultancy</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Leading engineering and construction consultancy providing innovative solutions.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/cad" className="text-sm hover:text-primary">CAD Services</Link></li>
              <li><Link href="/services/bim" className="text-sm hover:text-primary">BIM Solutions</Link></li>
              <li><Link href="/services/ppm" className="text-sm hover:text-primary">Project Management</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm hover:text-primary">About Us</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-primary">Contact</Link></li>
              <li><Link href="/careers" className="text-sm hover:text-primary">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4" />
                <span>123 Business District, City</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4" />
                <span>+1 234 567 890</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4" />
                <span>contact@sfsconsultancy.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} SFS Consultancy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}