'use client'
import React from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import {
  LayoutDashboard,
  Home,
  Folders,
  CreditCard,
  Settings,
  User,
  Banknote,
  Tag,
  FileText
} from "lucide-react";
import Link from "next/link";
import { Label } from "@radix-ui/react-dropdown-menu";
import { useTheme } from "next-themes";

const Sidebar = () => {
  const {theme} = useTheme()
  return (
    <Command 
    className={
      `${theme === 'dark'? 'bg-gray-700':'bg-gray-300 ' }  shadow-xl rounded-none`
      // ''
    }
      >
      <CommandInput placeholder="Type a command or search..." className={`bg-white  my-2 px-2`}/>
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup className="">
          <CommandItem>
            <LayoutDashboard className="mr-2 w-4 h-4"/>
             <Link href='/dashboard'>Dashboard</Link>
            </CommandItem>
          <CommandItem>
            <Banknote className="w-4 h-4 mr-2"/>
             <Link href='bankmanagement'>Bank Management</Link>
            </CommandItem>
          <CommandItem>
            <Tag className="w-4 h-4 mr-2"/>
            <Link href='/label'>Label Management</Link>
            </CommandItem>
          <CommandItem>
            <FileText className="w-4 h-4 mr-2"/>
            <Link href='/receipt'>Reciept</Link>
            </CommandItem>
        </CommandGroup>
        <CommandSeparator />
      </CommandList>
    </Command>
  );
};

export default Sidebar;
