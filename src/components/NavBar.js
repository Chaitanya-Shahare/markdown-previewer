import logo from "../markdown.svg"


const NavBar = () => {

	return(
		<>
			<div className="navbar flex justify-between items-center p-2 py-4 max-w-[1000px] m-auto">
				<div onClick={() => window.location.reload()}
					className="logo  flex items-center p-1">
					<img src={logo} 
						className="logo-img max-w-[40px]" 
					/>
					<span className="logo-text text-2xl font-bold ml-1">MarkedUp</span>
				</div>

				<ul className="nav-options flex gap-2 text-sm">
					{/* <li>About</li> */}
				</ul>
		</div>
		</>
	)
}

export default NavBar;
