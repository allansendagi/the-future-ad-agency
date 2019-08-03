import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
	constructor() {
		super();

		this.state = {
			sections: [{
				title: 'THE FUTURE AD AGENCY',
				imageUrl: 'https://images.unsplash.com/photo-1533069027836-fa937181a8ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
				id: 1,
				size: 'large',
			}]
		}
	}

	render() {
		return(
		 <div className='directory-menu'>
		  	{
		  	this.state.sections.map(({title, id, imageUrl, size}) => (
		  		<MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
		  		)) 
		    }
		 </div>

	  )
	}
}

export default Directory;



