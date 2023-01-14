import React, { useEffect } from 'react';
import '../style/NavBar.css';
import wIcon from '../icons/logo-white.png';
import resume from '../resume/MarcellousC_resume_3.pdf';

const NavBar = () => {
	let previousScroll = 0;
	/**if scrolling up the menu bar is shown. if scrolling down the menu bar is hidden and the menu burger is shown */
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
			<img id="icon" src={wIcon} width="1rem" />

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
				<a href={resume} target="_blank" className="NavBar-button">
					Resume{' '}
				</a>
			</ul>
		</div>
	);
};

export default NavBar;
