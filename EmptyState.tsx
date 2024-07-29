import React from "react";

import Head from "./Head";

interface EmptyProps {
  title?: string;
  subtitle?: string;
  
}

const EmptyState: React.FC<EmptyProps> = ({
  title = "Accédez à un Monde d'Opportunités",
  subtitle = "Transformez Votre Investissement en Impact Global avec StarAfrica.",
  
}) => {
  return (
    <div className=" h-[30vh] flex flex-col gap-2 justify-center items-center ">
      <Head center title={title} subtitle={subtitle}  />
    </div>
  );
};

export default EmptyState;
