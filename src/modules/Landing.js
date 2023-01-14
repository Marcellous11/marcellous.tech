import React, { useState, useEffect } from 'react';
import '../style/Landing.css';
import Burger from './Burger';
import man from '../images/davincimanSmall.png';
import axios from 'axios';
const Landing = () => {
	function random() {
		const r = Math.floor(Math.random() * 2);
		return r === 0 ? 'rgb(101, 103, 67)' : 'rgb(255, 255, 255)';
	}
	/**changes the color of name randomly between white and green */
	const changeColor = (e) => {
		const name = document.querySelectorAll('#name');
		setInterval(function() {
			name[0].style.color = random();
		}, 1000);
	};

	useEffect(() => {
		changeColor();
	});

	return (
		<section className="Landing" id="landing">
			<div className="Landing-allContent">
				<div className="Landing-gretting">
					<b>Welcome!</b> My name is{' '}
				</div>
				<div id="name" className="Landing-Name">
					Marcellous
				</div>
				<div className="Landing-statement">
					and I am a <b>full stack</b> web developer.
				</div>
			</div>

			<img src={man} />
		</section>
	);
};

export default Landing;
