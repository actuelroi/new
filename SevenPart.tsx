import Image from "next/image";
import Link from "next/link";
import { FaCheckSquare } from "react-icons/fa";


interface iAppProps {
  description?: string;
  coverImage?: string;
  descriptionColor?: string; // New prop for description color
}

const SinglePage = ({ coverImage, description, descriptionColor }: iAppProps) => {
  return (
    <div className="flex flex-col mt-5" data-wow-delay=".1s">
      <div className="mb-2 overflow-hidden rounded">
        <Link href={"/"} aria-label="blog cover" className="block">
          <Image
            src={coverImage!}
            alt="image"
            className="w-full h-48 object-cover transition group-hover:rotate-6 group-hover:scale-125"
            width={300}
            height={200}
          />
        </Link>
      </div>
      <div>
        <p className={`text-sm ${descriptionColor ? descriptionColor : 'text-body-color'}`}>
          {description}
        </p>
      </div>
    </div>
  );
};

const SevenPart = ({ coverImage, description }: iAppProps) => {
  return (
    <section className="">
      <div className="pt-10 pb-5">
        <h1 className="text-[#2b1c50] px-6 md:w-3/5 mx-auto text-center flex justify-center items-center text-3xl md:text-5xl font-medium mb-3">
          Ce qui vous Attends...
        </h1>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-2 p-6 pt-4 justify-between">
          <SinglePage
            coverImage="/images/wait/pexels-anna-nekrashevich-6802048.jpg"
            description="Maintenir un contact constant avec les investisseurs."
            descriptionColor="text-red-500" // Example color
          />
          <SinglePage
            coverImage="/images/wait/pexels-divinetechygirl-1181421.jpg"
            description="S'engager dans des projets à fort potentiel et innovants.Bénéficier de suivi, d'accompagnement et de formation."
            descriptionColor="text-blue-500" // Example color
          />
          <SinglePage
            coverImage="/images/wait/pexels-divinetechygirl-1181715.jpg"
            description="Des rencontres B2B"
            descriptionColor="text-green-500" // Example color
          />
          <SinglePage
            coverImage="/images/wait/pexels-gabby-k-9480118.jpg"
            description="Contribuer au développement de ton continent."
            descriptionColor="text-yellow-500" // Example color
          />
          <SinglePage
            coverImage="/images/wait/pexels-rebrand-cities-581004-1367272.jpg"
            description="Exposer tes projets à des investisseurs."
            descriptionColor="text-purple-500" // Example color
          />
          <SinglePage
            coverImage="/images/wait/pexels-pavel-danil.jpg"
            description="Assister à des conférences, panels et sessions de formation."
            descriptionColor="text-orange-500" // Example color
          />
        </div>
      </div>
      <h1 className="text-[#2b1c50] px-6 pt-5 md:w-3/5 mx-auto text-center flex justify-center items-center text-3xl md:text-5xl font-medium mb-3">
          Ivestisseur...
      </h1>
      
      <div className="flex p-8 gap-4  items-center pb-20">
        <div className="flex gap-2 items-center mt-5 ">
                <FaCheckSquare size={25} className="text-[#416cca]"/>
                <p className=" max-w-prose text-black sm:text-lg">  Flexibilité d'Investissement  </p>
        </div>
        <div className="flex gap-2 items-center mt-5 ">
                <FaCheckSquare size={25} />
                <p className=" max-w-prose text-black sm:text-lg">  Plateforme Sécurisée et Fiable  </p>
        </div>
        <div className="flex gap-2 items-center mt-5 ">
                <FaCheckSquare size={25} />
                <p className=" max-w-prose text-black sm:text-lg">  Accès Préférentiel aux Nouveaux Projets  </p>
        </div>
        <div className="flex gap-2 items-center mt-5 ">
                <FaCheckSquare size={25} className="text-[#416cca]" />
                <p className=" max-w-prose text-black sm:text-lg">  Opportunités d'Investissement Diversifiées </p>
        </div>
        <div className="flex gap-2 items-center mt-5 ">
                <FaCheckSquare size={25} />
                <p className=" max-w-prose text-black sm:text-lg">  Suivi et Rapport Personnalisé </p>
        </div>
      </div>
      
    </section>
  );
}

export default SevenPart;
