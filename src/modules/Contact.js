import React, { useEffect } from 'react';
import '../style/NavBar.css';
import '../style/Contact.css';
import anime from 'animejs/lib/anime.es.js';
import Sketch from 'react-p5';
import github_icon from '../images/github_icon.png';
import gmailIcon from '../images/gmail_icon.png';
import linkedInIcon from '../images/linkedin_icon.png';
import iphone from '../images/cell_ousphone.png';
import { motion } from 'framer-motion';

const Contact = () => {
	useEffect(() => {
		const MEtag = document.querySelector('#ME');
		MEtag.style.animation = 'shakeME 1s infinite';
		document.querySelector('#Contact-me-mainContent').style.opacity = '0';
	});

	const changeH2 = () => {
		document.querySelectorAll('.Contact-me h2').forEach((a) => {
			a.style.fontSize = '5rem';
			a.style.transition = ' all .5s';
		});
		document.querySelectorAll('.arrows').forEach((a) => {
			a.style.opacity = '0';
			a.style.width = '0';
			a.style.height = '0';

			a.style.transition = ' width .2s';
		});
	};

	const showPhone = () => {
		console.log(document.querySelector('#Contact-me-mainContent'));
		let container = document.querySelector('#Contact-me-mainContent');
		container.style.opacity = '1';
		container.style.transition = ' all .5s';
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
					{/* <div className="example-container">
							<motion.div
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								whileHover={{ scale: 1.2 }}
								whileTap={{ scale: 0.8 }}
							>
								<img className="appIcon" src={gmailIcon} style={{ width: '100%' }} />
							</motion.div>
						</div> */}
				</div>
			</div>

			<script src="static/js/p5.js"> </script>
		</section>
	);
};

export default Contact;
