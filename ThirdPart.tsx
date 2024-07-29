import { Button } from "@/components/ui/button";
import { FaCheck } from "react-icons/fa6";

interface SectionProps {
  title: string;
  description: string;
  color: string;
}

const Section: React.FC<SectionProps> = ({ title, description, color }) => (
  <div className="flex flex-col justify-around relative bg-white shadow-lg rounded-md text-center ease-out hover:scale-105 p-2 items-center gap-2">
    <div className="flex gap-2 items-center pb-3">
      <FaCheck size={25} className="text-[#316def]" />
      <h2 className={`font-semibold text-lg`} style={{ color }}>{title}</h2>
    </div>
    <p className="text-[#000] font-normal text-sm items-center">{description}...</p>
  </div>
);

const ThirdPart = () => {
  return (
    <section className="pb-10 p-10 ">
      <div className="flex flex-col gap-5 ">
      <h1 className="text-[#e67bd9] px-6 md:w-3/5 mx-auto text-center flex justify-center items-center text-3xl md:text-5xl font-semibold mb-6">
                    Beneficiez de..
                </h1>
        <div className="flex gap-3">
          <Section
            title="Accès à des Startups Innovantes"
            description="Découvrez des startups africaines prometteuses dans divers secteurs, offrant des opportunités d'investissement dans des projets novateurs et à fort potentiel de croissance."
            color="#ff5733"
          />
          <Section
            title="Réseau Élargi"
            description="Connectez-vous avec d'autres investisseurs, entrepreneurs et mentors à travers notre réseau exclusif pour échanger des idées, partager des conseils et explorer des collaborations."
            color="#995520"
          />
          <Section
            title="Opportunités d'Investissement Diversifiées"
            description="Accédez à une gamme variée de projets d'investissement allant des technologies émergentes aux initiatives de développement durable, adaptées à vos intérêts et objectifs financiers."
            color="#3357ff"
          />
          <Section
            title="Support et Accompagnement"
            description="Bénéficiez de l'expertise de notre équipe pour évaluer les opportunités d'investissement, structurer les transactions et suivre les performances des startups."
            color="#ff33a1"
          />
        </div>
        <div className="flex gap-4">
          <Section
            title="Visibilité et Reconnaissance"
            description="Profitez de la visibilité accrue et de la reconnaissance en tant qu'investisseur clé dans des projets à impact, renforçant votre réputation dans l'écosystème entrepreneurial."
            color="#ffa533"
          />
          <Section
            title="Accès à des Événements Exclusifs"
            description="Participez à des événements de réseautage, des conférences et des ateliers dédiés aux investisseurs pour rester informé des tendances du marché et rencontrer des fondateurs prometteurs."
            color="#ff2233"
          />
          <Section
            title="Suivi et Rapport Personnalisé"
            description="Recevez des rapports détaillés et des mises à jour régulières sur l'évolution des projets dans lesquels vous investissez, vous permettant de suivre les progrès et les retours sur investissement."
            color="#a533ff"
          />
        </div>
      </div>
    </section>
  );
}

export default ThirdPart;
