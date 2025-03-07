import React from "react";
import { Link, Divider } from "@heroui/react";
import TablerMail from "./icons/tabler-mail";
import TablerPhone from "./icons/tabler-phone";
import TablerMapPin from "./icons/tabler-map-pin";
import TablerBrandTwitter from "./icons/tabler-twitter";
import TablerBrandInstagram from "./icons/tabler-instagram";
import TablerBrandFacebook from "./icons/tabler-facebook";
import MdiCompassRose from "./icons/compass";

export function Footer() {
  return (
    <footer className="bg-content1 pt-12 pb-6 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Over ons */}
          <div>
            <div className="flex items-center mb-4">
              <MdiCompassRose className="text-primary" width={24} />
              <h3 className="font-bold text-lg ml-2">De Windroos</h3>
            </div>
            <p className="text-default-500 mb-4">
              Ervaar het authentieke Nederlandse plattelandsleven in onze
              zorgvuldig geselecteerde accommodaties.
            </p>
            <div className="flex gap-4">
              <Link href="#" aria-label="Facebook">
                <TablerBrandFacebook width={18} />
              </Link>
              <Link href="#" aria-label="Instagram">
                <TablerBrandInstagram width={18} />
              </Link>
              <Link href="#" aria-label="Twitter">
                <TablerBrandTwitter width={18} />
              </Link>
            </div>
          </div>

          {/* Snelle links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Snelle Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#">Accommodaties</Link>
              </li>
              <li>
                <Link href="#">Galerij</Link>
              </li>
              <li>
                <Link href="#">Over Ons</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-default-500">
              <li className="flex items-center gap-2">
                <TablerMapPin width={18} />
                <span>Windmolenweg 123, Platteland, Nederland</span>
              </li>
              <li className="flex items-center gap-2">
                <TablerPhone width={18} />
                <span>+31 123 456 789</span>
              </li>
              <li className="flex items-center gap-2">
                <TablerMail width={18} />
                <span>info@dutchhaven.com</span>
              </li>
            </ul>
          </div>

          {/* Nieuwsbrief */}
          <div>
            <h3 className="font-bold text-lg mb-4">Nieuwsbrief</h3>
            <p className="text-default-500 mb-4">
              Schrijf u in om updates te ontvangen over speciale aanbiedingen en
              evenementen.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Uw e-mailadres"
                className="px-4 py-2 rounded-l-md border border-default-200 focus:outline-none focus:border-primary"
              />
              <button className="bg-primary text-white px-4 py-2 rounded-r-md">
                <TablerMail width={18} />
              </button>
            </div>
          </div>
        </div>

        <Divider className="my-6" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-default-500 text-sm">
            © {new Date().getFullYear()} Dutch Haven. Alle rechten voorbehouden.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="text-sm text-default-500">
              Privacybeleid
            </Link>
            <Link href="#" className="text-sm text-default-500">
              Algemene Voorwaarden
            </Link>
            <Link href="#" className="text-sm text-default-500">
              Cookiebeleid
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
