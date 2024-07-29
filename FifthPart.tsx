
import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import Logo from "@/app/_component/Header/Logo";


const reviews = [
  {
    name: "HealthConnect Africa",
    username: "Santé Numérique",
    body: "HealthConnect Africa développe des plateformes de santé numériques pour améliorer l'accès aux soins de santé dans les régions rurales et urbaines défavorisées...",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "FinTech Bridge",
    username: "FinTech",
    body: "FinTech Bridge développe des solutions financières innovantes pour offrir des services bancaires et financiers accessibles aux populations non bancarisées...",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "AgriTechInn",
    username: "AgriTech",
    body: "AgriTech Innovators utilise des technologies avancées pour optimiser les pratiques agricoles et augmenter les rendements des cultures pour les agriculteurs africains...",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Diaspora Angel",
    username: "Investisseur",
    body: "Diaspora Angel Network regroupe des investisseurs de la diaspora africaine désireux de soutenir des projets innovants sur le continent.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Sustainable Growth Partners",
    username: "Investisseur",
    body: "Sustainable Growth Partners soutient les entreprises axées sur la durabilité et les pratiques écologiques.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "EduVenture Capital",
    username: "Investisseur",
    body: "EduVenture Capital se spécialise dans l'investissement dans des startups EdTech qui révolutionnent l'éducation en Afrique.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-3",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-[#316def]">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm ">{body}</blockquote>
    </figure>
  );
};

const  FifthPart =() =>{
  return (
    <div className="relative flex  w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl pb-10">
        <div className="flex items-center justify-between gap-2 my-10 mb-5 p-10">
        <h1 className="my-2  max-w-4xl text-5xl font-bold    text-[#9838e7]">Startups en Vedette</h1>
          <Logo />
        </div>
        
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}

export default FifthPart;
