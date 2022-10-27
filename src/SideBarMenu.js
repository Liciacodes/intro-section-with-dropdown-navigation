import { DropdownItems1, DropdownItems2 } from "./DropdownItems";


export const SideBarMenu = [
    {
        id: 1,
        title: "Features",
        path: "/features",
        icon: "images/icon-arrow-down.svg",
        dropdown: DropdownItems1
    },
    {
        id: 2,
        title: "Company",
        path: "/company",
        icon: "images/icon-arrow-down.svg",
        dropdown: DropdownItems2
    },
    {
        id: 3,
        title: "Careers",
        path: "/careers",
        icon: null,
        dropdown: null

    },
    {
        id: 4,
        title: "About",
        path: "/about",
        icon: null,
        dropdown: null

    },
   
]