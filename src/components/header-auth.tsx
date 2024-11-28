'use client';
import { NavbarItem }  from "@nextui-org/navbar";
import { Button } from '@nextui-org/button'
import { Avatar } from '@nextui-org/avatar'
import { useSession } from "next-auth/react";
import React from "react";
import { signIn, signOut } from "@/actions";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/popover";

export default function HeaderAuth() {
  const session = useSession();
  let authContent: React.ReactNode;
  if(session.status === 'loading') {
    authContent = null
  } else if(session.data?.user) {
      authContent = 
      <Popover placement="left">
          <PopoverTrigger>
            <Avatar src ={session.data.user.image ?? ''}/>
          </PopoverTrigger>
          <PopoverContent>
            <div className="p-4">
              <form action={signOut}>
                <Button type="submit">
                  Sign Out
                </Button>
              </form>
            </div>
          </PopoverContent>
        </Popover>
    } else {
      authContent = <>
        <NavbarItem>
          <form action={signIn}>
            <Button type="submit" color="secondary" variant="bordered">
              Sign In
            </Button>
          </form>
        </NavbarItem>

        <NavbarItem>
          <form action={signOut}>
            <Button type="submit" color="primary" variant="flat">
              Sign Out
            </Button>
          </form>
        </NavbarItem>
        </>
    }
    return authContent;
}