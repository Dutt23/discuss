import Link from "next/link";
import { Navbar, NavbarBrand,NavbarContent, NavbarItem }  from "@nextui-org/navbar";
import HeaderAuth from "./header-auth";
import React from "react";
import SearchInput from "./search-input";

export default function Header() {

  return (
    <Navbar className="shadow mb-6">
      <NavbarBrand>
        <Link className="font-bold" href={"/"}>
        Discuss
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <SearchInput />
        </NavbarItem>
      </NavbarContent>
      
      <NavbarContent justify="end">
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  )
}

