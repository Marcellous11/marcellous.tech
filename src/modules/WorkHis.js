import React, { useState, useEffect } from 'react';
import '../style/WorkHis.css';

const WorkHis = () => {
	useEffect(() => {
		//setting workhistory box
		document.querySelector('.WorkHis-titles .sb').style.color = ' rgb(255, 255, 255)';
		document.querySelector('.WorkHis-description .mish').style.display = 'none';
		document.querySelector('.WorkHis-description .sol').style.display = 'none';
	}, []);

	//onClick function changes background for h3 and display for p
	const showJob = (e) => {
		document.querySelectorAll('.WorkHis-titles h3').forEach((element) => {
			element.style.color = '';
		});
		e.target.style.color = 'white';
		document.querySelectorAll('.WorkHis-description div').forEach((p) => {
			// console.log(p);
			if (!p.classList.contains(e.target.classList)) p.style.display = 'none';
			else {
				p.style.display = '';
			}
		});
	};

	return (
		<section className="WorkHis" id="workhis">
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
										800-hour software engineering course that covers <b>key aspects</b> of front-end
										web development
									</li>
									<li>Back-end web development, databases, data structures and algorithms</li>
									<li>
										It includes learning resources, practice exercises, projects, and{' '}
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
									<li>Sold Solar systems door to door.</li>
									<li> Set up and finalized appointments.</li>
									<li>Sold a total 56 kW in 1 summer</li>
									<li>Signed up 6 houses and had panels installed.</li>
									<li>Knocked on average 100 doors per day</li>
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
									<li>Trained missionaries to identify goals and find path to accomplish them.</li>
									<li>
										Lead multiple trainings for multiple zones which contain upwards of 20+
										missionaries.
									</li>
									<li>
										These trainings consisted of goal setting, planning, and independent study
										Successfully collaborated with other leaders in the mission to set goals and
										make plans for 250+ missionaries.
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
