import Image from "next/image";
import DialogShow from "./DialogShow";
import EmptyState from "./EmptyState";
import FormTriger from "../Form/Dialog/FormTriger";


const FirstPart = () => {
    return (
        <section className="px-2  mb-5">
            <div className="container flex gap-4 rounded shadow bg-[#ccc4c4] pt-4">
                <div className="p-4">
                    <Image alt="" src={"/images/investor/pexels-rdne.jpg"} width={500} height={500} className="rounded" />
                </div>
                <div className="flex flex-col flex-grow ">
                    <div className="flex flex-col gap-3 items-center mt-5 ">

                        <div className="bg-gradient-to-r from-destructive to-secondary-foreground text-transparent bg-clip-text relative">
                            <h1 className="mt-5 px-6 md:w-3/5 mx-auto text-center flex justify-center items-center text-3xl md:text-5xl font-medium ">
                            Bienvenue à StarAfrica, Cher Investisseur
                            </h1>
                        </div>
                        <p className="text-center">Optimisez Vos Retours sur Investissement avec StarAfrica</p>
                    </div>
                    
                    <EmptyState />

                    <div className="flex justify-center p-5 gap-4 ">

                        <DialogShow />
                        <FormTriger />
        
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FirstPart;
