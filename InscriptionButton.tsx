import PulsatingButton from "@/components/ui/pulsating-button";
import Link from "next/link";
import { FaArrowAltCircleRight } from "react-icons/fa";

interface iAProps {
    link: string;
    
  }

const InscriptionButton=({link}:iAProps) => {
    return (
        <div className="fixed bottom-8 right-0 left-0 z-[999] flex justify-center">
            <Link href={link}>
                    <PulsatingButton>
                        <p>Je m'inscris</p>  
                        <FaArrowAltCircleRight size={20} /> 
                    </PulsatingButton>
            </Link>
        </div>
    );
}

export default InscriptionButton;