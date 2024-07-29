import { Button } from "@/components/ui/button";

interface CountUpAnimationProps {
	text: string;
	color?: string; // Add color prop
}

const CountUpAnimation: React.FC<CountUpAnimationProps> = ({
	text,
	color = "#316def", // Default color
}) => {
	return (
		<div className="flex justify-around relative bg-white shadow-lg rounded-md text-center ease-out hover:scale-105 p-2 items-center gap-2">
			<span className="font-semibold text-base text-nowrap" style={{ color }}>{text}</span>
		</div>
	); 
};

const ProfessionMap = () => {
	return (
		<section className=' bg-[rgb(230,234,235)] p-10'>
            <div className='flex flex-col gap-4  mb-8'>
                <div className="flex justify-around gap-2">
                    <CountUpAnimation
                        
                        text="Médecin"
                        color="#000000"
                    />
                    <CountUpAnimation
                       
                        text="Banquier(e)s d'Affaires"
                        color="#000000"
                    />
                    <CountUpAnimation
                        
                        text="Ingénieur(e)"
                        color="#000000"
                    />
                    <CountUpAnimation
                        
                        text="Avocat(e)"
                        color="#000000"
                    />
                    <CountUpAnimation
                        
                        text="Institutions"
                        color="#000000"
                    />
                </div>

                <div className="flex justify-around gap-2">
                    <CountUpAnimation
                        
                        text="Pharmacien(ne)"
                        color="#000000"
                    />
                    <CountUpAnimation
                        
                        text="Dentiste"
                        color="#000000"
                    />
                    <CountUpAnimation
                        
                        text="Architecte"
                        color="#000000"
                    />
                    <CountUpAnimation
                        
                        text="Chef d'Entreprise"
                        color="#000000"
                    />
                    <CountUpAnimation
                        
                        text="Artiste"
                        color="#000000"
                    />

                </div>
                
            </div>
            <Button className="">Et bien plus..</Button>
        </section>
	);
}

export default ProfessionMap;
