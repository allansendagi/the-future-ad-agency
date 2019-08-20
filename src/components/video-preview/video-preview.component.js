import React from 'react';
import VideoItem from '../video-item/video-item.component';

import './video-preview.styles.scss';

const VideoPreview = ({title, items }) => (
	<div className='video-preview'>
	  <h1 className='title'> { title.toUpperCase()} </h1>
		<div className='preview'>
			{
				items
				.filter((item, idx) => idx < 4)
				.map(({id, ...otherItemProps}) => (
				 <VideoItem key={id} {...otherItemProps}/>
			))
			}
		</div>
	</div>
);

export default VideoPreview;