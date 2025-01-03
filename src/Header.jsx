import React from 'react'
import logo from './assets/profile_logo.jpg'

const Header = () => {
  return (
    <div>
        <nav className="py-6 md:py-8 fixed top-0 w-full !bg-[#191D26] z-50">
		<div className="container mx-auto flex items-center justify-between gap-x-6">
			{/* <!-- Logo --> */}
			<a href="/">
				<img className="w-20" src={logo} alt="Lws" />
			</a>
			{/* <!-- Logo Ends --> */}
		</div>
	</nav>

    </div>
  )
}

export default Header