import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Sorry, that project doesn't exist.</p>
      <p>
        View <Link href="/#projects">All Projects</Link>
      </p>
    </div>
  )
}