import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "@/components/ui/menubar";
import Link from "next/link";





const HeaderComponent = () => {
    return (
        <div className="px-2 flex items-center justify-between gap-2 flex-row ">
            <Menubar className="rounded-none border-b border-none px-2 lg:px-4">
                <MenubarMenu>
                    <MenubarTrigger>
                        <Link href={"/"}>Accueil</Link>
                    </MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>
                        <Link  href={"/"}> À Propos </Link>
                    </MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger className="font-bold">Startups</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>Découvrir les Startups </MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>
                                    S'inscrire en tant que Startup... <MenubarShortcut>⌘,</MenubarShortcut>
                            </MenubarItem>
                            <MenubarSeparator />
                        <MenubarItem>
                                Ressources pour Startups <MenubarShortcut>⇧⌘H</MenubarShortcut>
                        </MenubarItem>
                        <MenubarShortcut />
                        <MenubarItem>
                                Plus <MenubarShortcut>⌘Q</MenubarShortcut>
                        </MenubarItem>
                    </MenubarContent>
                </MenubarMenu>

                <MenubarMenu>
                    <MenubarTrigger className="relative">Investisseurs</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>Découvrir les Opportunités  </MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>
                            S'inscrire en tant qu'Investisseur ... <MenubarShortcut>⌘,</MenubarShortcut>
                            </MenubarItem>
                            <MenubarSeparator />
                        <MenubarItem>
                        Ressources pour Investisseurs <MenubarShortcut>⇧⌘H</MenubarShortcut>
                        </MenubarItem>
                        <MenubarShortcut />
                        <MenubarItem>
                                Plus <MenubarShortcut>⌘Q</MenubarShortcut>
                        </MenubarItem>
                    </MenubarContent>
                </MenubarMenu>

                    
                <MenubarMenu>
                    <MenubarTrigger className="relative">Événements</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>Événements à Venir  </MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>
                            Organiser un Événement <MenubarShortcut>⌘,</MenubarShortcut>
                            </MenubarItem>
                            <MenubarSeparator />
                        <MenubarItem>
                        Événements Passés <MenubarShortcut>⇧⌘H</MenubarShortcut>
                        </MenubarItem>
                        <MenubarShortcut />
                        <MenubarItem>
                                Plus <MenubarShortcut>⌘Q</MenubarShortcut>
                        </MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
                    
                <MenubarMenu>
                    <MenubarTrigger className="relative ">Tableau de Bord</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>Mes Projets </MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>
                            Mes Investissements <MenubarShortcut>⌘,</MenubarShortcut>
                            </MenubarItem>
                            <MenubarSeparator />
                        <MenubarItem>
                        Profil <MenubarShortcut>⇧⌘H</MenubarShortcut>
                        </MenubarItem>
                        <MenubarShortcut />
                        <MenubarItem>
                        Déconnexion <MenubarShortcut>⌘Q</MenubarShortcut>
                        </MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
      </Menubar>
        </div>
    );
}

export default HeaderComponent;