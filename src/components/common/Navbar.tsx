import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';

import { NavigationMenu, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

// Function to toggle dark mode
const toggleDarkMode = (darkMode: boolean, setDarkMode: React.Dispatch<React.SetStateAction<boolean>>) => {
  if (darkMode) {
    document.documentElement.classList.remove('dark');
  } else {
    document.documentElement.classList.add('dark');
  }
  setDarkMode(!darkMode);
};

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-40 border-b bg-background dark:bg-black/[0.6]">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 md:px-8">
        <nav className="flex items-center gap-4 md:gap-6">
          <Link to="#" className="flex items-center gap-2 font-bold">
            <OrbitIcon className="h-6 w-6" />
            <span className="sr-only">Astrologer Dashboard</span>
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuLink asChild>
                <Link to="#" className="px-4 py-2 text-sm font-medium">
                  My Profile
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link to="#" className="px-4 py-2 text-sm font-medium">
                  Plans and Settings
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link to="#" className="px-4 py-2 text-sm font-medium">
                  Logout
                </Link>
              </NavigationMenuLink>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        <div className="flex items-center">
          {/* Dark Mode Toggle Button */}
          <button
            onClick={() => toggleDarkMode(darkMode, setDarkMode)}
            className="text-gray-900 dark:text-gray-300 dark:shadow-gray-600 shadow-sm p-3 py-2 rounded-md text-sm font-medium"
          >
            {darkMode ? <Moon className='size-4' /> : <Sun className='size-4' />}
          </button>

          {/* Avatar Dropdown Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="overflow-hidden rounded-full ml-4">
			  <UserAvatar className="w-8 h-8 text-gray-400 dark:text-gray-600" />
                <img
                  src="/placeholder.svg"
                  width={36}
                  height={36}
                  alt="Avatar"
                  className="overflow-hidden rounded-full"
                  style={{ aspectRatio: "36/36", objectFit: "cover" }}
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Link to="#" onClick={() => { console.log("Show Profile Modal") }}>
                  View Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

function OrbitIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="3" />
      <circle cx="19" cy="5" r="2" />
      <circle cx="5" cy="19" r="2" />
      <path d="M10.4 21.9a10 10 0 0 0 9.941-15.416" />
      <path d="M13.5 2.1a10 10 0 0 0-9.841 15.416" />
    </svg>
  );
}
function UserAvatar(props: React.SVGProps<SVGSVGElement>) {
	return (
	  <svg
		{...props}
		xmlns="http://www.w3.org/2000/svg"
		width="36"
		height="36"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
	  >
		<circle cx="12" cy="7" r="4" />
		<path d="M5 21c0-3.9 3.1-7 7-7s7 3.1 7 7" />
	  </svg>
	);
  }
  

export default Navbar;
