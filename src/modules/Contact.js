import React, { useEffect } from 'react';
import '../style/NavBar.css';
import '../style/Contact.css';
import github_icon from '../images/github_icon.png';
import gmailIcon from '../images/gmail_icon.png';
import linkedInIcon from '../images/linkedin_icon.png';
import iphone from '../images/cell_ousphone.png';
import { motion } from 'framer-motion';
import bIcon from '../icons/logo-black.png';

const Contact = () => {
	useEffect(() => {
		const MEtag = document.querySelector('#ME');
		MEtag.style.animation = 'shakeME 1s infinite';
		//start iphone display 0
		document.querySelector('#Contact-me-mainContent').style.opacity = '0';
		if (window.screen.availWidth === 844) {
			document.querySelector('.Contact-me-headTag').style.marginTop = ' 7rem';
		} else if (window.screen.availWidth === 390) {
			document.querySelector('.Contact-me-headTag').style.marginTop = ' 7rem';
		} else {
			document.querySelector('.Contact-me-headTag').style.marginTop = ' 24rem';
		}
	});

	const changeH2 = () => {
		document.querySelectorAll('.Contact-me h2').forEach((a) => {
			a.style.fontSize = '5rem';
			a.style.transition = ' all .5s';
		});
		document.querySelectorAll('.arrows').forEach((a) => {
			a.style.opacity = '0';
			a.style.display = 'none';

			a.style.transition = ' width .2s';
		});
	};

	//shows iphone while hidding arrows around "ME"
	const showPhone = () => {
		console.log(document.querySelector('#Contact-me-mainContent'));
		let container = document.querySelector('#Contact-me-mainContent');
		container.style.opacity = '1';

		container.style.transition = ' all .5s';
		document.querySelector('.Contact-me-headTag').style.marginTop = '0';
	};

	const change = () => {
		changeH2();
		showPhone();
	};

	return (
		<section className="Contact" id="contact">
			<div className="Contact-me">
				<div className="Contact-me-headTag">
					<h2 id="contactH2"> Contact </h2>
					<h2 className="arrows" id="rightArrow">
						{'\u00a0'}
						{'\u21E8'}
						{'\u00a0'}
					</h2>
					<h2 id="ME" onClick={change}>
						Me
					</h2>
					<h2 className="arrows" id="leftArrow">
						{'\u00a0'}
						{'\u21E6'}
					</h2>
				</div>

				<div id="Contact-me-mainContent" className="Contact-me-mainContent-show">
					<div className="main-icon-container">
						<div className="Contact-github icon-container ">
							<a href="https://github.com/Marcellous11" target="_blank">
								<img className="appIcon-img" src={github_icon} />
							</a>
						</div>
						<div className="Contact-linkedIn icon-container">
							<a href="https://www.linkedin.com/in/m-curtis-jr/ " target="_blank">
								<img className="appIcon-img" src={linkedInIcon} />
							</a>{' '}
						</div>
						<div className="Contact-email icon-container ">
							<a href="mailto:j.marcellouscurtis@gmail.com" target="_blank">
								<img className="appIcon-img" src={gmailIcon} />
							</a>
						</div>
					</div>
					<img id="iphone" src={iphone} />
				</div>
			</div>
			<footer>
				<p>Built & Designed by Marcellous Curtis Jr.</p>
				<img src={bIcon} />
			</footer>
		</section>
	);
};

export default Contact;
