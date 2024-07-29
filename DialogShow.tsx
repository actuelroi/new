import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
  
 const DialogShow =  () => {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline">Voir Confidentialité..</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Sécurité et Confidentialité de Vos Données</AlertDialogTitle>
            <AlertDialogDescription>
            <div className="flex flex-col gap-2"></div>
            <h3>Chez StarAfrica, la sécurité et la confidentialité de vos données sont notre priorité absolue. Nous nous engageons à 
            protéger toutes les informations que vous nous fournissez. 
            </h3>
            <p className="font-semibold text-[#000]">Voici comment nous assurons la sécurité de vos données : </p>
            <p> <strong> Utilisation Sécurisée des Données : </strong>Toutes les informations collectées sur notre plateforme sont utilisées exclusivement 
            pour faciliter les interactions et transactions entre les startups et vous. Vos données ne seront jamais partagées avec des tiers 
            sans votre consentement explicite. <br />
            <strong> Protection Avancée :</strong> Nous employons des technologies de sécurité de pointe pour protéger vos données contre tout accès non autorisé, 
            assurant ainsi leur intégrité et leur confidentialité. <br />

            <strong>Confidentialité Garantie : </strong>Nous nous engageons à ne jamais vendre, échanger ou divulguer vos informations personnelles. 
            Toutes les données restent strictement confidentielles et sont utilisées uniquement pour améliorer votre expérience sur notre
            plateforme.</p>
            
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="text-nowrap  text-white">D'accord</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  

  export default DialogShow;