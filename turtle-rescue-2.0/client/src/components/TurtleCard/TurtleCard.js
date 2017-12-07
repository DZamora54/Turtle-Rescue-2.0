import React from "react";
import "./TurtleCard";

const TurtleCard = () =>

<Col m={6} s={12}>
<Card className='blue-grey darken-1' textClassName='white-text' title='Card title' actions={[<a href='#'>This is a link</a>]}>
I am a very simple card.
</Card>
</Col>


<!--TURTLE CARD-->
			<div id="fullCard" class="col s12 m6">
				<div id="turtle" class="card hoverable hide">
					<div class="card-image">
						<div id="map" class="col s12"></div>
					</div>
					<div class="card-content">
						<span id="number" class="card-title activator green-text"><i class="material-icons right">more_vert</i></span>
						<p id="reported"></p>
					</div>
					<div class="card sticky-action">
						<div class="card-action right-align">
							<button id="next-stage-btn" class="card-button green btn-flat yellow-text waves-effect waves-light" type="button" name="button">Done</button>
						</div>
					</div>
					<div class="card-reveal">
						<span class="card-title green-text">Comment<i class="material-icons right">close</i></span>
						<p id="comment"></p>
					</div>
				</div>
			</div>


export default TurtleCard;
