"use client";

import React, { useEffect, useState } from 'react';
import { FaSmileBeam } from 'react-icons/fa';
import { RiFundsFill } from "react-icons/ri";
import { BsPersonBoundingBox } from 'react-icons/bs';
import { FaHandshakeAngle } from "react-icons/fa6";

interface CountUpAnimationProps {
	iconComponent: React.ReactNode;
	initialValue: number;
	targetValue: number;
	text: string;
}

const CountUpAnimation: React.FC<CountUpAnimationProps> = ({
	iconComponent,
	initialValue,
	targetValue,
	text,
}) => {
	const [count, setCount] = useState(initialValue);
	const duration = 4000; // 4 seconds

	useEffect(() => {
		let startValue = initialValue;
		const interval = Math.floor(duration / (targetValue - initialValue));

		const counter = setInterval(() => {
			startValue += 1;
			setCount(startValue);
			if (startValue >= targetValue) {
				clearInterval(counter);
			}
		}, interval);

		return () => {
			clearInterval(counter);
		};
	}, [targetValue, initialValue]);

	return (
		<div className="flex flex-col justify-around relative bg-white shadow-lg rounded-md text-center ease-out hover:scale-105 p-2">
			<div className="text-[#316def] font-medium items-center ">{iconComponent}</div>
			<span className="text-black font-semibold text-sm ">+{count}</span>
			<span className="text-black font-medium text-sm">{text}</span>
		</div>
	); 
};

const Number = () => {
	const [key, setKey] = useState(0);

	useEffect(() => {
		const timer = setTimeout(() => {
			setKey(prevKey => prevKey + 1);
		}, 30000); // 10 seconds

		return () => clearTimeout(timer);
	}, [key]);

	return (
		<div key={key}>
			<div className="flex justify-around gap-2">
				<CountUpAnimation
					iconComponent={<RiFundsFill size={25} />}
					initialValue={0}
					targetValue={150}
					text="Startups Inscrites"
				/>
				<CountUpAnimation
					iconComponent={<FaSmileBeam size={25} />}
					initialValue={0}
					targetValue={200}
					text="Client(e)s satisfait(e)s"
				/>
				<CountUpAnimation
					iconComponent={<FaHandshakeAngle size={25} />}
					initialValue={0}
					targetValue={250}
					text="Fonds Levés"
				/>
				<CountUpAnimation
					iconComponent={<BsPersonBoundingBox size={25} />}
					initialValue={0}
					targetValue={300}
					text="Investisseurs Actifs"
				/>
			</div>
		</div>
	);
}

export default Number;
