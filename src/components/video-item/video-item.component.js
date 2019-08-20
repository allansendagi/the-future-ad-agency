import React from 'react';
// import Player from 'video-react';

import './video-item.styles.scss';

const VideoItem = ({id, name, imageUrl}) => (
	<div className='video-item'>
		<div
			className='video'
			  style={{
				backgroundImage:`url(${imageUrl})`
			}}
		/>
	</div>
)

export default VideoItem;