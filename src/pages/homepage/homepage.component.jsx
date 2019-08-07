import React from 'react';

import HOMEPAGE_DATA from '../../homepage-data/homepage.data.js';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import Directory from '../../components/directory/directory.component';

import './homepage.styles.scss';

class Homepage extends React.Component {
	constructor() {
		super()
		this.state = {
			collections: HOMEPAGE_DATA
		}
 }

 render() {
 	const { collections} = this.state;
 	return (
 	 	<div className='homepage'>
		   <Directory />
		   <div className='homepage-s'>
		   		{
		   			collections.map(({id, ...otherCollectionProps }) => (
		   				<CollectionPreview key={id}  {...otherCollectionProps}/>
		   			))
		   		}
		   </div>
	    </div>
    )
  }

}


export default Homepage;