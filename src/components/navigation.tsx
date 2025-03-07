import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@heroui/react";
import Link from "next/link";
import MdiCompassRose from "./icons/compass";

export default async function Navigation() {
  return (
    <Navbar isBordered>
      <NavbarBrand>
        <MdiCompassRose width={20} className="text-primary" />
        <p className="font-bold text-large text-inherit ml-2">De Windroos</p>
      </NavbarBrand>
      {/* <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Accommodations
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Gallery
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent> */}
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="https://www.airbnb.com/s/Tollebeek--Netherlands/homes?host_id=499981093"
            target="_blank"
            variant="flat"
          >
            Boek Nu
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
