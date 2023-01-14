import React, { useEffect } from 'react';
import '../style/Bio.css';
import profilePic from '../images/profile_pic.jpg';
import code from '../images/Screenshot 2023-01-07 at 12.45.32 AM.png';
import tech from '../images/techpattern_small.png';
import { motion } from 'framer-motion';

const Bio = () => {
	/**on click  corresponding picture is shown*/

	useEffect(() => {
		document.querySelector('#profilePic').style.display = 'block';
	});
	const goto = (e) => {
		document.querySelectorAll('.Bio-pictureFrame img').forEach((img) => {
			img.style.display = 'none';
		});
		document.querySelectorAll('.Bio-pictureFrame a').forEach((a) => {
			a.style.display = 'none';
		});

		switch (e.target.innerText) {
			case 'Spokane Falls':
				document.querySelector('#soccerPic').style.display = 'block';
				document.querySelectorAll('.Bio-pictureFrame a')[1].style.display = 'block';
				break;
			case 'church':
				document.querySelector('#missionPic').style.display = 'block';
				document.querySelectorAll('.Bio-pictureFrame a')[2].style.display = 'block';
				break;
			case 'Springboard':
				document.querySelector('#deskPic').style.display = 'block';
				document.querySelectorAll('.Bio-pictureFrame a')[3].style.display = 'block';
				break;
			case 'Marcellous Curtis':
				document.querySelector('#profilePic').style.display = 'block';
				document.querySelectorAll('.Bio-pictureFrame a')[0].style.display = 'block';
				break;
		}
	};
	return (
		<section className="Bio" id="bio">
			<img id="tech" src={tech} />

			<div className="Bio-aboutMe">
				<h2>About Me</h2>
				<div className="Bio-aboutMe-blockAndPic">
					<div className="Bio-aboutMe-info">
						<p>
							Hi, my name is <b onClick={goto}>Marcellous Curtis</b>, and I am a software developer. I
							love software development, but it took me some time to get here. I first played soccer in
							college at <b onClick={goto}>Spokane Falls</b> for 2 years. I then served a mission for my{' '}
							<b onClick={goto}>church</b> for another 2 years.
						</p>
						<p>
							For the last year I've been working through the <b onClick={goto}>Springboard</b> software
							engineering course online while also working toward a bachelor’s degree in computer science.
							I'm also searching for opportunities to expand my skills.
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
								src="https://images.unsplash.com/photo-1574772135913-d519461c3996?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
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
							<img
								id="deskPic"
								src="https://cdn-images-1.medium.com/max/1200/1*PXENf9nDzZV0uwxKd-PwgA.png"
							/>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Bio;
