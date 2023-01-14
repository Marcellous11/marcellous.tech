import React, { useState, useEffect } from 'react';
import '../style/WorkHis.css';
import hands from '../images/For_Marcellous 2.png';

const WorkHis = () => {
	useEffect(() => {
		/**This sets the work history box so the first title is colored white */
		document.querySelector('.WorkHis-titles .sb').style.color = ' rgb(255, 255, 255)';
		document.querySelector('.WorkHis-description .mish').style.display = 'none';
		document.querySelector('.WorkHis-description .sol').style.display = 'none';
	}, []);

	//onClick function changes background for h3 and display for p
	const showJob = (e) => {
		/**this removes all colors from the work history titles */
		document.querySelectorAll('.WorkHis-titles h3').forEach((element) => {
			element.style.color = '';
		});
		/**this colors the target event white and then displays corresposnding work history */
		e.target.style.color = 'white';
		document.querySelectorAll('.WorkHis-description div').forEach((p) => {
			if (!p.classList.contains(e.target.classList)) p.style.display = 'none';
			else {
				p.style.display = '';
			}
		});
	};

	return (
		<section className="WorkHis" id="workhis">
			<img src={hands} />
			<div className="WorkHis-collection">
				<div className="WorkHis-collection-hist">
					<h2>Experience</h2>
					<div className="WorkHis-workContent">
						<div className="WorkHis-titles">
							<h3 className="sb" onClick={showJob}>
								Junior Software Developer{' '}
							</h3>
							<h3 className="sol" onClick={showJob}>
								Solar Sales Consultant{' '}
							</h3>
							<h3 className="mish" onClick={showJob}>
								Missionary
							</h3>
						</div>
						<div className="WorkHis-description">
							<div className="sb">
								<ul>
									<li>
										800-hour software engineering course that coverskey aspects of <b>front-end</b>{' '}
										web development
									</li>
									<li>Back-end web development, databases, data structures and algorithms</li>
									<li>
										Includes learning resources, practice exercises, projects, and{' '}
										<b>career-related</b> coursework.
									</li>
								</ul>
								<div className="WorkHis-description-skills sb">
									<p>React</p>
									<p>Python</p>
									<p>JavaScript</p>
									<p>JAVA</p>
									<p>SQL</p>
									<p>HTML</p>
									<p>ReactJS</p>
									<p>C++</p>
									<p>FLASK</p>
									<p>Express</p>
									<p>PostgresQL</p>
									<p>Node</p>
									<p>Git</p>
									<p>Terminal</p>
								</div>
							</div>

							<div className="sol">
								<ul>
									<li>Sold solar systems door to door, knocking on average 100 doors per day</li>
									<li> Networked with locals to help them find affordable energy options</li>
									<li>Sold a total of 56 kW in 1 summer</li>
									<li>Signed up 6 houses and oversaw panel installation.</li>
									<li>Transitioned from knocking to closing in 2 months</li>
								</ul>
								<div className="WorkHis-description-skills sol">
									<p>D2D</p>
									<p>Sales</p>
									<p>Closing</p>
									<p>Timing</p>
									<p>Trust</p>
									<p>Trust</p>
								</div>
							</div>

							<div className="mish">
								<ul>
									<li>
										Led groups of 10-12 volunteers, conducted weekly training meetings, followed up
										on goals, and created weekly progress reports
									</li>
									<li>
										Planned, organized, and taught 10 workshops on goal setting, relationship
										building, and leadership skills
									</li>
									<li>
										Increased volunteer effectiveness by providing training in individual
										communication, problem-solving, and productivity skills for 15 missionaries
									</li>
								</ul>
								<div className="WorkHis-description-skills mish">
									<p> </p>
									<p>Leading</p>
									<p>Training</p>
									<p> </p>
									<p> </p>
									<p>Teaching</p>
									<p>Studying</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WorkHis;
