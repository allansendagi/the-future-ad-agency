import React from 'react';

import Directory from '../../components/directory/directory.component';
import VIDEO_DATA from '../../homepage-data/video-data';

import VideoPreview from '../../components/video-preview/video-preview.component';
import Video from '../../components/player/player.component';




import './homepage.styles.scss';

class Homepage extends React.Component {
	constructor() {
		super()
		
		this.state = {
			collections: VIDEO_DATA
		}
 }

 render() {
 	const {collections} = this.state;
 	return (
 		<div className='homepage'>
		   <Directory />
		    <div className='home'>
		     <Video />

		    	{
		      collections.map(({id, ...otherCollectionProps}) => (
		      	<VideoPreview key={id} {...otherCollectionProps}/>
		      ))
		    }
		   </div>
	    </div>
    )
  }
}


export default Homepage;