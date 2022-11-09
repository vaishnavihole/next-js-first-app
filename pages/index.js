import Link from  "next/link"

export default function Home() {
  return (
   <div>
    <h1>This is a Home Page</h1>
    <Link href="/about">About</Link>
    <Link href="/contact">Contact</Link>
   </div>
  )
}
