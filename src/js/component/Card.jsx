import React from "react";
import {FaClock} from 'react-icons/fa';


const Card = (props) => {
	return (
		<div className="card">
            {props.prop}
		</div>
	);
};

export default Card;