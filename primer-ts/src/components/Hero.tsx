'use client'

import Image from 'next/image'

import { Button } from '@/components/Button'
import { GridPattern } from '@/components/GridPattern'
import { StarRating } from '@/components/StarRating'
import { createCheckoutSession } from '@/lib/checkout'
import coverImage from '../images/cover.png'

function Testimonial() {
  return (
    <figure className="relative mx-auto max-w-md text-center lg:mx-0 lg:text-left">
      <div className="flex justify-center text-[#737ffc] lg:justify-start">
        <StarRating />
      </div>
      <blockquote className="mt-2">
        <p className="font-display text-xl font-medium text-slate-900">
          &ldquo;There&apos;s a new kind of coding I call &ldquo;vibe coding&rdquo;, where you fully give in to the vibes, embrace exponentials, and forget that the code even exists&rdquo;
        </p>
      </blockquote>
      <figcaption className="mt-2 text-sm text-slate-500">
        <strong className="font-semibold text-[#737ffc] before:content-['—_']">
          Andrej Karpathy
        </strong>
        , Pioneer of Vibe Coding
      </figcaption>
    </figure>
  )
}

export function Hero() {
  return (
    <header className="overflow-hidden bg-slate-100 lg:bg-transparent lg:px-5">
      <div className="mx-auto grid max-w-6xl grid-cols-1 grid-rows-[auto_1fr] gap-y-16 pt-16 md:pt-20 lg:grid-cols-12 lg:gap-y-20 lg:px-3 lg:pt-20 lg:pb-36 xl:py-32">
        <div className="relative flex items-end lg:col-span-5 lg:row-span-2">
          <div className="absolute -top-20 right-1/2 -bottom-12 left-0 z-10 rounded-br-6xl bg-[#737ffc] text-white/10 md:bottom-8 lg:-inset-y-32 lg:right-full lg:left-[-100vw] lg:-mr-40">
            <GridPattern
              x="100%"
              y="100%"
              patternTransform="translate(112 64)"
            />
          </div>
          <div className="relative z-10 mx-auto flex flex-col items-center">
            <div className="w-64 rounded-xl bg-slate-600 shadow-xl md:w-80 lg:w-auto">
              <Image className="w-full" src={coverImage} alt="" priority />
            </div>
            <p className="mt-2 text-xs text-slate-500 md:text-sm">image by visual electric</p>
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:col-span-7 lg:pr-0 lg:pb-14 lg:pl-16 xl:pl-20">
          <div className="hidden lg:absolute lg:-top-32 lg:right-[-100vw] lg:bottom-0 lg:left-[-100vw] lg:block lg:bg-slate-100" />
          <Testimonial />
        </div>
        <div className="bg-white pt-16 lg:col-span-7 lg:bg-transparent lg:pt-0 lg:pl-16 xl:pl-20">
          <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
            <h1 className="font-display text-5xl font-extrabold text-slate-900 sm:text-6xl">
              Learn vibe coding.
            </h1>
            <p className="mt-4 text-2xl text-slate-600">
              A video course that teaches you how to build with code without writing it - using AI only.
            </p>
            <p className="mt-2 text-l text-slate-600">
              by <a href="https://x.com/bentossell" target="_blank" className="font-bold text-[#737ffc] hover:text-[#737ffc]/80">@bentossell</a>
            </p>
            <div className="mt-4 inline-block">
              <span className="px-4 py-2 bg-[#737ffc]/10 rounded-lg text-sm text-[#737ffc] font-medium">
                <a href="https://bensbites.com" target="_blank"className="font-bold text-[#737ffc] hover:text-[#737ffc]/80">Ben's Bites</a> members get access free
              </span>
            </div>
            <div className="mt-8 flex flex-col gap-4 max-w-xs">
              <Button
                onClick={() => createCheckoutSession()}
                color="blue"
                className="relative"
              >
                <span>Pre-order now</span>
              </Button>
              <p className="text-sm text-slate-600">
                Price increases $10 for every 10 pre-orders. 100% money-back guarantee.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
