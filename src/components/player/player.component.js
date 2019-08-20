import React from 'react';
import { Player } from 'video-react';

import VIDEO_DATA from '../../homepage-data/video-data';
import './player.styles.scss';

class Video extends React.Component {
	constructor() {
		super()


		this.state = {
			collections: VIDEO_DATA
		}
	}

	render() {
		const {collections} = this.state;

		return (
		 <div className='player'>
          <Player  className='preview'>
          	{
		      collections.map(({id, imageUrl}) => (
		      	<source key={id}>{imageUrl}</source>
		      ))
		    }
          </Player>
         </div>	
	   )
	}
}

export default Video;
 