import Link from 'next/link'
import { Container } from '@/components/Container'

export default function Success() {
  return (
    <Container className="relative py-16 text-center">
      <h1 className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
        Thank you for pre-ordering!
      </h1>
      <p className="mt-4 text-lg tracking-tight text-slate-700">
        I'll keep you updated as I create lessons and share them with you via email. 
      </p>
      <p className="mt-8">
        <Link
          href="/"
          className="text-base font-medium tracking-tight text-blue-600 hover:text-blue-800"
        >
          ← Back to homepage
        </Link>
      </p>
    </Container>
  )
} 