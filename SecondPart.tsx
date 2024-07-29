











import { GiMoneyStack, GiReceiveMoney, GiTakeMyMoney } from 'react-icons/gi';
import {  BiSolidInstitution } from 'react-icons/bi';

import {  SiWebmoney } from 'react-icons/si';

import { BsPersonCheckFill } from 'react-icons/bs';
import { GrMoney } from 'react-icons/gr';
import { FcMoneyTransfer } from 'react-icons/fc';

interface CountUpAnimationProps {
	iconComponent: React.ReactNode;
	text: string;
	color?: string; // Add color prop
}

const CountUpAnimation: React.FC<CountUpAnimationProps> = ({
	iconComponent,
	text,
	color = "#316def", // Default color
}) => {
	return (
		<div className="flex justify-around relative bg-white shadow-lg rounded-md text-center ease-out hover:scale-105 p-2 items-center gap-2">
			<span className="text-black font-medium text-sm text-nowrap">{text}</span>
			<div className="text-[#316def] font-medium items-center " style={{ color }}>{iconComponent}</div>
		</div>
	); 
};

const SecondPart = () => {
	return (
		<section className='px-10 py-10 '>
            <div className='flex flex-col gap-4  mb-8'>
            <h1 className="text-[#2b1c50] px-6 md:w-3/5 mx-auto text-center flex justify-center items-center text-3xl md:text-5xl font-medium mb-6">
                    Qu'attendez-vous 😊?
                </h1>
                <div className="flex justify-around gap-2 mt-5">
                    <CountUpAnimation
                        iconComponent={<BsPersonCheckFill size={45} />}
                        text="Investisseur privé"
                        color="#CDDC39"
                        
                    />
                    <CountUpAnimation
                        iconComponent={<GiReceiveMoney size={45} />}
                        text="Venture capital"
                        color="#3F51B5"
                        
                    />
                    <CountUpAnimation
                        iconComponent={<BiSolidInstitution size={45} />}
                        text="Institutions privé"
                        color="#009688"
                        
                    />
                    <CountUpAnimation
                        iconComponent={<GiMoneyStack size={45} />}
                        text="Fond d'investissement"
                        color="#FFD700"
                        
                    />
                </div>

                <div className="flex justify-around gap-2">
                    <CountUpAnimation
                        iconComponent={<SiWebmoney size={45} />}
                        text="Business angel"
                        color="#FF69B4"
                        
                    />
                    <CountUpAnimation
                        iconComponent={<GrMoney size={45} />}
                        text="Investisseur de la diaspora"
                        color="#FF4500"
                        
                    />
                    <CountUpAnimation
                        iconComponent={<FcMoneyTransfer size={45} />}
                        text="Corporate venture capital"
                        color="#6A5ACD"
                        
                    />
                    <CountUpAnimation
                        iconComponent={<GiTakeMyMoney size={45} />}
                        text="Incubateur"
                        color="#2E8B57"
                        
                    />

                </div>
               
            </div>
        </section>
	);
}

export default SecondPart;
