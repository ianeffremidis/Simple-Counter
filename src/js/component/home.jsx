import React, { useState,useEffect } from "react";
import {FaClock} from 'react-icons/fa';
import Card from "./Card.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	
	const [first, setFirst] = useState(0) 
	const [second, setSecond] = useState(0) 
	const [third, setThird] = useState(0) 
	let counterFirst = 0;
	let counterSecond = 0;
	let counterThird = 0;

	useEffect(()=>{
		setInterval(()=>{
			Math.floor(counterFirst / 10)
			counterFirst++;
			if (counterFirst>9) {counterFirst=0;}
			setFirst(counterFirst);
		},1000)
		setInterval(()=>{
			Math.floor(counterSecond / 10)
			counterSecond++;
			if (counterSecond>9) {counterSecond=0;}
			setSecond(counterSecond);
		},10000)
		setInterval(()=>{
			Math.floor(counterThird / 10)
			counterThird++;
			if (counterThird>9) {counterThird=0;}
			setThird(counterThird);
		},100000)
		/* ETC for rest of cards*/
	},[])
	return (
		<div className="container">
		<Card prop={<FaClock className="icon"/>}/>
		<Card prop={<p className='icon'>0</p>}/>
		<Card prop={<p className='icon'>0</p>}/>
		<Card prop={<p className='icon'>0</p>}/>
		<Card prop={<p className='icon'>{third}</p>}/>
		<Card prop={<p className='icon'>{second}</p>}/>
		<Card prop={<p className='icon'>{first}</p>}/>
		</div>
	);
};

export default Home;
