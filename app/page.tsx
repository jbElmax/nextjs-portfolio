import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1 className='text-black'>Hello</h1>
      <Link href="/work-experience">Work Experience</Link> 
      <button className='rounded border border-gray-500 px-2 py-2'>Click Me</button>
    </main>
    
  )
}
