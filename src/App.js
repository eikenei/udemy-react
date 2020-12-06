import React from 'react';
import PropTypes from 'prop-types';

const App = () => {
	const profiles = [
		{name: "taro", age:30},
		{name: "Hanako", age:20}
	]

	return(
		<div>
			{
				profiles.map((profile, index) => {
					return <User name={profile.name} age={profile.age} key={index} />
				})
			}
		</div>

	)
}

const User = (props) => {
return <div>Hi {props.name} and age is {props.age}</div>
}

User.propTypes = {
	name: PropTypes.string,
	age: PropTypes.number
}

export default App;
