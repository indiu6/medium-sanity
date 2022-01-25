import Link from 'next/link'

function Header() {
  return (
    <header>
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            className="w-44 cursor-pointer object-contain"
            src="https://links.papareact.com/yvf"
            alt="logo"
          />
        </Link>
        <div className="hidden items-center space-x-5 md:inline-flex">
          <h3>About</h3>
          <h3>Contact</h3>
          <h3 className="rounded-full bg-green-600 px-4 py-1 text-white">
            Follow
          </h3>
        </div>
      </div>

      <div className="flex items-center">
        <h3>Sign In</h3>
        <h3>Get Started</h3>
      </div>
    </header>
  )
}

export default Header
