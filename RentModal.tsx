"use client";
import React, { useMemo, useState, useTransition } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { BiDollar } from "react-icons/bi";

import Modal from "./Modal";
import Button from "../Button";
import Heading from "../Heading";
import Input from "../Input/Input";
import SelectDomain from "./SelectDomain";
import SpinnerMini from "./Loader";
import { categories } from "@/utils/constant";
import CategoryButton from "../Input/CategoryButton";
import dynamic from "next/dynamic";
import CountrySelect from "../Input/CountrySelect";
import { MdAddIcCall } from "react-icons/md";


const steps = {
  "0": "category",
  "1": "guestCount",
  "2": "name",
  "3": "surname",
  "4": "email",
  "5": "location",
  "6": "price",
};

enum STEPS {
  CATEGORY = 0,
  INFO = 1,
  DESCRIPTION = 2,
  LOCATION = 3,
  PROFESSION=4,
  PRICE = 5,

}

const RentModal = ({ onCloseModal }: { onCloseModal?: () => void }) => {
  const [step, setStep] = useState(STEPS.CATEGORY);
  const [isLoading, startTransition] = useTransition();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
    getValues,
  } = useForm<FieldValues>({
    defaultValues: {
      category: [],
      location: null,
      guestCount: 1,
      bathroomCount: 1,
      roomCount: 1,
      image: "",
      price: "",
      name: "",
      surname: "",
      email: "",
      description: "",
    },
  });


  const location = watch("location");
  const country = location?.label;

  const Map = useMemo(
    () =>
      dynamic(() => import("./Map"), {
        ssr: false,
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [country]
  );




  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
    if (id === "category") {
      setSelectedCategory(value);
    }
  };

  const onBack = () => {
    setStep((value) => value - 1);
  };

  const onNext = () => {
    if (step === STEPS.CATEGORY && !getValues("category").length) {
      toast.error("Please select a category");
      return;
    }
    setStep((value) => value + 1);
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (step !== STEPS.PRICE) return onNext();

    startTransition(() => {
      try {
        router.refresh();
        router.push('/');
      } catch (error: any) {
        toast.error("Failed to create listing!");
        console.log(error?.message);
      }
    });
  };

  const body = () => {
    switch (step) {
      case STEPS.INFO:
        return (
          <div className="flex flex-col gap-6">
            <Heading
              title="Sélectionnez Votre Domaine Préférentiel"
              subtitle="Découvrez les startups innovantes dans des secteurs variés et trouvez les projets qui correspondent à vos intérêts."
            />
            <SelectDomain watch={watch} onChange={setCustomValue} />
          </div>
        );

      case STEPS.DESCRIPTION:
        return (
          <div className="flex flex-col gap-6">
            <Heading
              title="Partagez Votre Profil d'Investisseur"
              subtitle="Dites-nous en un peu plus sur vous pour commencer!"
            />
            <Input
              id="name"
              label="Nom"
              disabled={isLoading}
              register={register}
              errors={errors}
              required
              watch={watch}
              autoFocus
            />
            <Input
              id="surname"
              label="Prénom"
              disabled={isLoading}
              register={register}
              errors={errors}
              required
              watch={watch}
            />
            <Input
              id="email"
              label="Email"
              disabled={isLoading}
              register={register}
              errors={errors}
              required
              watch={watch}
            />
          </div>
        );

        
      
          case STEPS.LOCATION:
            return (
              <div className="flex flex-col gap-6">
                <Heading
                  title="Quelle est Votre Nationalité et Votre Pays de Résidence?"
                  subtitle="Aidez-nous à vous connecter avec les meilleures opportunités!"
                />
                <Input
                    id="location"
                    label="Pays de residence"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                    watch={watch}
                    
            />

            <Input
             
              id="number"
              label="Votre contact"
              icon={MdAddIcCall }
              type="number"
              disabled={isLoading}
              register={register}
              errors={errors}
              required
              watch={watch}
             
            />
                <CountrySelect value={location} onChange={setCustomValue} />
                
              </div>
            );





        case STEPS.PROFESSION:
        return (
          <div className="flex flex-col gap-6">
            <Heading
              title="Quelle est Votre Profession ?"
              subtitle="Partagez votre expertise pour des recommandations personnalisées!"
            />
            <Input
              id="job"
              label="Votre professsion"
              disabled={isLoading}
              register={register}
              errors={errors}
              required
              type="text"
              watch={watch}
              autoFocus
            />
            <Input
              
              id="experience"
              label="Combien d'années d'experience d'investissement de startup en Afrique avez vous?"
              type="number"
              disabled={isLoading}
              register={register}
              errors={errors}
              required
              watch={watch}
            />
            
          </div>
        );



      case STEPS.PRICE:
        return (
          <div className="flex flex-col gap-6">
            <Heading
              title="Maintenant, définissez votre prix"
              subtitle="Combien facturez-vous par nuit?"
            />
            <Input
              key="price"
              id="price"
              label="Prix"
              icon={BiDollar}
              type="number"
              disabled={isLoading}
              register={register}
              errors={errors}
              required
              watch={watch}
              autoFocus
            />
          </div>
        );

      default:
        return (
          <div className="flex flex-col gap-2">
            <Heading
              title="Comment vous décririez-vous ?"
              subtitle="Choisissez une catégorie"
            />
            <div className="flex-1 grid grid-cols-2 gap-3 max-h-[60vh] lg:max-h-[260px] overflow-y-scroll scroll-smooth">
              {categories.map((item) => (
                <CategoryButton
                  onClick={setCustomValue}
                  watch={watch}
                  label={item.label}
                  icon={item.icon}
                  key={item.label}
                  color={item.color}
                />
              ))}
            </div>
          </div>
        );
    }
  };

  const isFieldFilled = !!getValues(steps[step]) || (step === STEPS.CATEGORY && !!selectedCategory);

  return (
    <div className="w-full h-full flex flex-col">
      <Modal.WindowHeader title="Rejoignez StarAfrica!" />
      <form
        className="flex-1 md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="relative p-6">{body()}</div>
        <div className="flex flex-col gap-2 px-6 pb-6 pt-3">
          <div className="flex flex-row items-center gap-4 w-full">
            {step !== STEPS.CATEGORY ? (
              <Button
                type="button"
                className="flex items-center gap-2 justify-center"
                onClick={onBack}
                outline
              >
                Back
              </Button>
            ) : null}
            <Button
              type="submit"
              className="flex items-center gap-2 justify-center"
              disabled={isLoading || !isFieldFilled}
            >
              {isLoading ? (
                <SpinnerMini />
              ) : step === STEPS.PRICE ? (
                "Create"
              ) : (
                "Next"
              )}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RentModal;
