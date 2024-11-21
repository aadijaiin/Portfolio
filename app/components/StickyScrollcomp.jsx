import React from 'react'
import { StickyScroll } from '@/components/ui/sticky-scroll'

const data = [
  {
    title: "About Me",
    description: 
      "I'm Aadi Jain, a passionate web developer who turns ideas into interactive web experiences. Proficient in React, Next.js, and Tailwind CSS, I focus on creating scalable and optimized web applications that prioritize user experience and performance.",
  },
  {
    title: "What I Do",
    description: 
      "From designing intuitive user interfaces to building complex frontend architectures, I craft solutions tailored to user needs. My expertise includes responsive design, API integration, state management, and optimizing web applications for modern performance standards.",
  },
  {
    title: "My Philosophy",
    description: 
      "I believe in writing clean, maintainable code and designing user-first interfaces. My approach emphasizes collaboration, continuous learning, and staying up-to-date with the latest technologies to deliver solutions that not only work but inspire confidence and delight in their users.",
  }
  
];


const StickyScrollcomp = () => {
  return (
    <div>
      <StickyScroll content={data} />
    </div>
  )
}

export default StickyScrollcomp
