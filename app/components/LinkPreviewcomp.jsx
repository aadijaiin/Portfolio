import React from 'react'
import { LinkPreview } from '@/components/ui/link-preview'

const LinkPreviewcomp = () => {
  return (
    <div className=" p-40 relative">

      <div className='mb-12 justify-self-center align-top'>
      < h2 className="text-4xl font-bold text-white mb-2">Projects</h2>
      <pre className="text-white text-lg -translate-x-16">And what I learned from 'em</pre>
      </div>

      <div className='mb-4'>
        {/* Todo App */}
      <pre className="text-white text-lg inline">
       1. First up{' '}
      </pre>
      <LinkPreview
        url={'https://todo-app-code.vercel.app/'}
        className="text-4xl font-bold bg-clip-text inline text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
      >
        Todos App,
      </LinkPreview>
      </div>

      <ul className='translate-x-6 mb-4'>
        <li className='text-white'>- Redux-tool-kit</li>
        <li className='text-white'>- Complex state management</li>
        <li className='text-white'>- Context API</li>
      </ul>

      <div className='mb-4'>
      <pre className="text-white text-lg inline">
       2. Next up, We have the classic{' '}    
      </pre>
      <LinkPreview
        url={'https://aadijaiin.github.io/Weather-app/'}
    className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
      >
        Weather App
      </LinkPreview>
      </div>
      <ul className='translate-x-6 mb-4'>
        <li className='text-white'>- API integration</li>
        <li className='text-white'>- Displaying data in a user friendly manner</li>
        
      </ul>

      {/* Password Generator */}
      <div className='mb-4'>
      <pre className="text-white text-lg inline">
       3. Then we have this random {' '}   
      </pre>
      <LinkPreview
        url={'https://aadijaiin.github.io/PasswordGeneratorUsingReact/'}
        className="text-4xl font-bold bg-clip-text inline text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
      >
        Password Generator
      </LinkPreview>
      </div>
      <ul className='translate-x-6 '>
        <li className='text-white'>- Component management</li>
        <li className='text-white'>- Logic Building</li>
      </ul>

    </div>
  )
}

export default LinkPreviewcomp
