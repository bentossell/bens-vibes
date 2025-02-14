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
          What&apos;s included... 
        </p>
        <p className="mt-4">
          I was an OG no-coder - I started and sold a no-code education company (makerpad) - now I'm a vibe coder. I dont write code, I can't. Instead I rely on AI.
        </p>
        <p className="mt-4">
          This course is for a specific type of person. You can't code, or don't like to. You want to build stuff. The 'simplest' tools are still complicated once you're in the weeds.
        </p>
        <p className="mt-4">
          I'm going to show you what I do. I learn't by seeing others do it. Nat Eliason's course I highly recommend.
           This course is different. I'll show the web-based tools, the IDEs, the 'how to code system', 
           how to get out of trouble, and more...
        </p>
        <ul role="list" className="mt-8 space-y-3">
          {[
            'Intro to vibe coding: Using AI to build projects without writing code',
            'Project setup: Dependencies, Git, env variables & deployments',
            'Navigating docs: Learn to use APIs and docs',
            'Tool comparison: Explore coding tools (Cursor, Replit) vs simpler ones (Bolt, Lovable, Create)',
            'Building Projects: Using the different tools out there',
            'Debugging tips: Fix errors, escape endless loops, and troubleshoot with AI help',
            'Open source projects: Clone existing projects and adapt them for your own use',
            'Databases: Connect and work with databases using AI tools',
            'Authentication basics: Set up user auth',
          ].map((feature) => (
            <li key={feature} className="flex">
              <CheckIcon className="h-8 w-8 flex-none" />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8">
          You'll 100% have shipped something by the end of the course. I guarantee it. 
        </p>
        <p className="mt-10">
          <Link
            href="/api/create-checkout"
            className="text-base font-medium text-[#cfc2f7] hover:text-[#cfc2f7]/80"
          >
            Pre-order now. I'll release videos as they're ready. Price increases $10 every 10 purchases. Ben's Bites members get access free.
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </Container>
    </section>
  )
}
