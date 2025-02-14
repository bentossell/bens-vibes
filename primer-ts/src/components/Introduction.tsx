import Link from 'next/link'

import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'

export function Introduction() {
  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="pt-20 pb-16 sm:pb-20 md:pt-36 lg:py-32"
    >
      <Container className="text-lg tracking-tight text-slate-700">
        <p className="font-display text-4xl font-bold tracking-tight text-slate-900">
          What&apos;s included... coming soon (currently vibe coding this page)
        </p>
        {/* 
        <p className="mt-4">
          Before I learned how to build with AI, I always thought that creating software required years of coding experience, 
          complex programming languages, and hours spent debugging mysterious errors.
        </p>
        <p className="mt-4">
          But it turns out this isn't how modern builders work at all.
        </p>
        <p className="mt-4">
          In "Vibe Coding", you'll learn the systems I use to create fully functional applications and tools, 
          without writing a single line of code yourself.
        </p>
        <ul role="list" className="mt-8 space-y-3">
          {[
            'Using AI to turn your ideas into working code',
            'How to structure your prompts for best results',
            'Building full applications without writing code',
            'Understanding basic concepts without getting technical',
            'Tools and workflows to speed up your building process',
          ].map((feature) => (
            <li key={feature} className="flex">
              <CheckIcon className="h-8 w-8 flex-none fill-[#cfc2f7]" />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8">
          By the end of the course, you'll have all the confidence you need to start
          building your own projects using AI, even if you've never written a line of code before.
        </p>
        <p className="mt-10">
          <Link
            href="#pricing"
            className="text-base font-medium text-[#cfc2f7] hover:text-[#cfc2f7]/80"
          >
            Pre-order now and lock in the lowest price{' '}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
        */}
      </Container>
    </section>
  )
}
