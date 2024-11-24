import React from 'react'
import { FloatingNav } from './ui/floating-navbar'

import {
    IconHome,
    IconSettings,
    IconSearch,
    IconUser,
    
  } from "@tabler/icons-react";

// const dockItems = [
//     {
//       title: "Home",
//       href: "/",
//       icon: <IconHome />,
//     },
//     {
//       title: "Search",
//       href: "/search",
//       icon: <IconSearch />,
//     },
//     {
//       title: "Profile",
//       href: "/profile",
//       icon: <IconUser />,
//     },
//     {
//       title: "Settings",
//       href: "/settings",
//       icon: <IconSettings />,
//     }
    
//   ];


const items = [
    {
        name: 'Home',
        link: '/',
        icon: <IconHome />,
    },
    {
        name: 'About',
        link: '#About',
        icon: <IconUser />,
    },
    {
        name: 'Projects',
        link: '#projects',
        icon: <IconSettings />,
    },
   
]

const Navbar = () => {
  return (
    <div>
      <FloatingNav navItems={items}/>
    </div>
  )
}

export default Navbar
