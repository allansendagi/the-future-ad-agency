import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component.jsx';

const BlogPage = () => (
	<div>
		<h1>BLOG</h1>
	</div>
);


function App() {
  return (
    <div>
    <Header />
     <Switch>
    	<Route exact path='/' component={HomePage} />
    	<Route path='/blog' component={BlogPage} />
     </Switch>
    </div>
  );
}

export default App;
