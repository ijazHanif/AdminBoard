'use client';
import React from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  LayoutDashboard,
  Banknote,
  Tag,
  FileText
} from "lucide-react"; // Removed unused imports
import Link from "next/link";
import { useTheme } from "next-themes";

const Sidebar = () => {
  const { theme } = useTheme();
  
  return (
    <Command 
      className={`${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'} shadow-xl rounded-none`}
    >
      <CommandInput placeholder="Type a command or search..." className="bg-white my-2 px-2" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          <CommandItem>
            <LayoutDashboard className="mr-2 w-4 h-4" />
            <Link href='/dashboard'>Dashboard</Link>
          </CommandItem>
          <CommandItem>
            <Banknote className="w-4 h-4 mr-2" />
            <Link href='/bankmanagement'>Bank Management</Link>
          </CommandItem>
          <CommandItem>
            <Tag className="w-4 h-4 mr-2" />
            <Link href='/label'>Label Management</Link>
          </CommandItem>
        <Link href='/receipt'>
          <CommandItem>
            <FileText className="w-4 h-4 mr-2" />
            Receipt
          </CommandItem>
        </Link> {/* Fixed typo: 'Reciept' to 'Receipt' */}
        </CommandGroup>
        <CommandSeparator />
      </CommandList>
    </Command>
  );
};

export default Sidebar;
