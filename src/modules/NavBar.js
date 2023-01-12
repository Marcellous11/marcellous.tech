import React, { useEffect } from 'react';
import '../style/NavBar.css';
import { Button } from '@mui/material/';

const NavBar = () => {
	let previousScroll = 0;
	useEffect(() => {
		document.querySelector('.App-container').onscroll = function() {
			let curScroll = document.querySelector('.App-container').scrollTop;

			if (curScroll < previousScroll) {
				document.getElementById('navbar').style.top = '1em';
				document.getElementById('burger').style.animation = 'offPage .4s 1 forwards';
			} else {
				document.getElementById('navbar').style.top = '-70px';
				document.getElementById('burger').style.animation = 'onPage .5s 1 forwards';
			}
			previousScroll = curScroll;
		};
	});

	return (
		<div className="Navbar" id="navbar">
			{/* <div className="NavBar-buttonCollection"> */}
			<ul className="NavBar-buttonCollection">
				<a className="NavBar-button" href="#bio">
					About Me
				</a>
				<a className="NavBar-button" href="#workhis">
					Experience{' '}
				</a>
				<a className="NavBar-button" href="#contact">
					Contact Me{' '}
				</a>
				<a className="NavBar-button">Resume </a>
			</ul>
			{/* </div> */}
		</div>
	);
};

export default NavBar;
