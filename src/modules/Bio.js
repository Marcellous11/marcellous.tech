import React from 'react';
import '../style/Bio.css';
import profilePic from '../images/profile_pic.jpg';
import code from '../images/Screenshot 2023-01-07 at 12.45.32 AM.png';
import tech from '../images/techpattern_small.png';
import { motion } from 'framer-motion';

const Bio = () => {
	const goto = (e) => {
		const href = document.createElement('a');
		href.href = '#deskPic';
		switch (e.target.innerText) {
			case 'Spokane Falls':
				href.href = '#soccerPic';
				break;
			case 'church':
				href.href = '#missionPic';

				break;
			case 'Springboard':
				href.href = '#deskPic';
				break;
			case 'About Me':
				href.href = '#profilePic';
				break;
			case 'Marcellous Curtis':
				href.href = '#profilePic';
				break;
		}
		href.click();
	};

	return (
		<section className="Bio" id="bio">
			<img id="tech" src={tech} />

			<div className="Bio-aboutMe">
				<h2>About Me</h2>
				<div className="Bio-aboutMe-blockAndPic">
					<div className="Bio-aboutMe-info">
						<p>
							Hi, my name is <b onMouseOver={goto}>Marcellous Curtis</b>, and I am a software developer. I
							love software development, but it took me some time to get here. I first played soccer in
							college at <b onMouseOver={goto}>Spokane Falls</b> for 2 years. I then served a mission for
							my <b onMouseOver={goto}>church</b> for another 2 years.
						</p>
						<p>
							For the last year I've been working through the <b onMouseOver={goto}>Springboard</b>{' '}
							software engineering course online while also working toward a bachelor’s degree in computer
							science. I'm also searching for opportunities to expand my skills.
						</p>
						<p>
							I've learned so much this year and I am excited to make forward-thinking and effective
							software!
						</p>
					</div>

					<div className="Bio-pictureFrame">
						<a href="https://www.linkedin.com/in/m-curtis-jr/" target="_blank" className="contain-inner">
							<img id="profilePic" src={profilePic} />
						</a>

						<a className="contain-inner">
							<img
								id="soccerPic"
								src="https://scontent-dfw5-2.xx.fbcdn.net/v/t31.18172-8/11879150_1640924332815466_9170596703221788037_o.jpg?_nc_cat=100&ccb=1-7&_nc_sid=19026a&_nc_ohc=SzxrQAtljl8AX89BRlL&_nc_ht=scontent-dfw5-2.xx&oh=00_AfDpOLRtd8Rd4KY-N-UTswU2tVFDImo1PKm0Mv06fIz8fA&oe=63DFB0DE"
							/>
						</a>

						<a
							href="https://www.churchofjesuschrist.org/?lang=eng"
							target="_blank"
							className="contain-inner"
						>
							<img
								id="missionPic"
								src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.6435-9/122498300_3529029333825760_1673457001776607019_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=VVCguLf8xyYAX_qXSkN&_nc_ht=scontent-dfw5-1.xx&oh=00_AfAfqJ2WpOs6IrM5ba1al3yZLDpYjQq9CYWq_IwU0s8tgQ&oe=63DF9E14"
							/>
						</a>

						<a href="https://www.springboard.com/" target="_blank" className="contain-inner">
							<img id="deskPic" src={code} />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Bio;
