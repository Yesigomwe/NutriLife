import React from "react"

function Footer() {
	return (
		<div className="Footer flex flex-row bg-[#FE6314] h-78 my-2 justify-around">
			<div className="Footer-headings flex flex-col flex-wrap flex-start text-align-left text-white mx-4">

				<h1 className="text-3xl py-4">ABOUT</h1>
				<a href="/">Our partners</a>
				<a href="/">Affiliate Programs</a>
				<a href="/">Feedback and Support</a>
				<a href="/">Consultation</a>
				<a href="/">How it works</a>
				<a href="/">Privacy policy</a>
			</div>

			<div className="newsletter indent-10">
				<a href="/">
					<h2 className="text-white my-10 ">Subscribe to our Newsletter</h2>
				</a>
				<p className="text-white indent-0">You will receive weeekly news about <br></br> the best deals,recipes and package suggestions</p>
				<input className="px-10 my-4 rounded" type="text" placeholder="Enter email address..."/>
			</div>
         <div className="h-90">
            <img className="logo my-6" src="../src/assets/logo.png"/>
         </div>
		</div>
	)
}

export default Footer
