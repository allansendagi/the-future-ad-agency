import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
	constructor() {
		super();

		this.state = {
			sections: [{
				title: 'THE FUTURE AD AGENCY',
				imageUrl: '',
				id: 1,
				size: 'large',
				linkUrl: 'blog',
			}]
		}
	}

	render() {
		return(
		 <div className='directory-menu'>
		  	{
		  	this.state.sections.map(({id, ...otherSectionProps}) => (
		  		<MenuItem key={id} {...otherSectionProps}/>
		  		)) 
		    }
		 </div>

	  )
	}
}

export default Directory;



