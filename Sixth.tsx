import SingleBlog from "./Blog/SingleBlog";
import SectionTitle from "./Testimolials/SectionTitle";

const Sixth = () => {
    return (
            <section className=" pb-2 pt-8 bg-[#FEF2F2]">
                <div className="container mx-auto">
                    <div className="mb-[60px]">
                        <SectionTitle
            
                            title="Nos Récentes Actualités "
                            paragraph="Nous sommes ravis de partager les dernières mises à jour et réalisations de notre communauté. Voici quelques faits marquants récents qui témoignent des activités dynamiques et des progrès réalisés sur StarAfrica."
                            width="640px"
                            center
                            style
                        />
                        <div className="-mx-4 grid grid-cols-3 justify-between  gap-2">
                                <SingleBlog title="Journée des Investisseurs de la Diaspora" date="06-25-2024" coverImage="/images/pexels-divinetechygirl-1.jpg" 
                                excerpt="Un événement spécial visant à connecter la diaspora africaine avec des opportunités 
                                d'investissement sur le continent, avec des sessions de networking et des présentations de projets prometteurs." 
                                id={1} slug="moi "
                                 />
                        
                                <SingleBlog title="Atelier de Levée de Fonds pour Startups" date="07-05-2024" coverImage="/images/pexels-d.jpg" 
                                excerpt="Un atelier interactif où les startups ont appris des stratégies efficaces de levée de fonds, animé par des experts en investissement et des entrepreneurs chevronnés." 
                                id={1} slug="moi "
                                 />
                        
                                <SingleBlog title="Forum des Investissements Technologiques" date="06-25-2024" coverImage="/images/pexels-pavel.jpg" 
                                excerpt="Un événement de deux jours où des startups technologiques africaines ont présenté leurs projets innovants à des investisseurs du monde entier. Des sessions de mentorat et des tables rondes ont été organisées pour discuter des tendances technologiques émergentes." 
                                id={1} slug="moi "
                                 />
                        </div>
                    </div>
                </div>

            </section>
    );
}

export default Sixth;




