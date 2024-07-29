
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { FaArrowAltCircleRight } from "react-icons/fa";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const OverCard= ()=> {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">
        <div className='mx-auto mb-4 mt-4 flex max-w-fit items-center cursor-pointer justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-[#d59ee7] px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50'>
            <p className='text-sm font-semibold text-gray-700 flex gap-2'>Inscrivez-vous gratuitement <FaArrowAltCircleRight size={20} /> </p>
        </div>
        </Button>
      </HoverCardTrigger>

      <HoverCardContent className="flex">
        <div className="flex flex-col items-center justify-between gap-2 ">

                <div className='mx-auto  flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border cursor-pointer border-gray-200 bg-[#c2cbe3] px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50'>
                    <Link href={'/Startup'}>
                        <p className='text-sm font-semibold text-gray-700 flex gap-2'>Je suis une Startup <FaArrowAltCircleRight size={20} /> </p>
                    </Link>
                </div>

                <div className='mx-auto  flex max-w-fit items-center cursor-pointer justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-[#c2cbe3] px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50'>
                    <Link href={"/Investor"} >
                        <p className='text-sm font-semibold text-gray-700 flex gap-2'>Je suis un Investisseur <FaArrowAltCircleRight size={20} /> </p>
                    </Link>
                </div>
            </div>
      </HoverCardContent>
    </HoverCard>
  )
}



export default OverCard;