import Link from 'next/link'
export default function Header() {
  return (
    <div className="container">
      <header className="blog-header py-3">
        <div className="row flex-nowrap justify-content-between align-items-center">

          <center><div className="col-4 text-center">
            <a className="blog-header-logo text-dark" href="#">FOTANI</a>
          </div></center>
        </div>
      </header>

      <div className="nav-scroller py-1 mb-2">
        <nav className="nav d-flex justify-content-between">
          <Link href="/hujan">
            <a className="p-2 link-secondary" ><h3>musim hujan</h3></a>
          </Link>
          <Link href="/panas">
            <a className="p-2 link-secondary" ><h3>musim panas</h3></a>
          </Link>

        </nav>
      </div>
    </div>
  )
}