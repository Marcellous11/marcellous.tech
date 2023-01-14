import React, { useState } from 'react';
import BurgerPic from '../icons/9034605_hamburger_menu_icon.png';
import '../style/Burger.css';

const Burger = () => {
	/** when clicked the menus burger pulled off the page to the left and the menu bar is pulled down from above*/
	const pullDown = (e) => {
		document.getElementById('navbar').style.top = '1em';
		e.target.style.animation = 'offPage .5s 1 forwards';
		document.querySelector('.Burger-backdrop').style.animation = 'offPage .5s 1 forwards';
	};

	return (
		<div onClick={pullDown} className="Burger-backdrop">
			<img onClick={pullDown} id="burger" src={BurgerPic} />
		</div>
	);
};

export default Burger;
