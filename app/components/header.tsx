import React from 'react'

export default function NavBar() {
  return (
    <header>
        <nav className="relative flex w-full items-center justify-between py-2 shadow-dark-mild lg:flex-wrap lg:justify-start lg:py-4">
            <div className="flex w-full flex-wrap items-center justify-between px-3">
                <nav className="w-full rounded-md" aria-label="breadcrumb">
                    <ol className="list-reseet ms-2 flex">
                        <li>
                            <a
                                href="/"
                                className="text-white/80 transition duration-200 hover:text-white/100 hover:ease-in-out focus:text-white/100 active:text-white/100"
                            >
                                Time Vault
                            </a>
                        </li>
                    </ol>
                </nav>
            </div>
        </nav>
    </header>
  )
}
