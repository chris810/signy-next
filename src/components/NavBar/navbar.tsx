import Link from "next/link";
import Image from "next/image";
import SignyLogo from '../../../public/signy-cropped.svg';
import Hamburger from '../../../public/hamburger.svg';
import { useState, useRef } from "react";

import styles from './navbar.module.css';
import NavBarMenus from "./NavBarComponents/navbarMenus";

export type NavBarMenu = {
    displayName: string;
    href: string;
    img?: any; // Imported SVG
}

const navBarMenus: NavBarMenu[] = [
    {
        displayName: 'Games',
        href: 'games',
    },
    {
        displayName: 'Sign In',
        href: 'signIn'
    },
    {
        displayName: 'About',
        href: 'about'
    },
];

export default function NavBar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const hamburgerRef = useRef<HTMLImageElement | null>(null);
    return (
        <nav className={styles.navigation}>
            <Link href='/'>
                <Image className={styles.logo} src={SignyLogo} alt='Signy logo'></Image>
            </Link>
            <div className={styles.navigationMenu}>
                <NavBarMenus
                navBarMenus={navBarMenus}
                isNavExpanded={isNavExpanded}
                setIsNavExpanded={setIsNavExpanded}
                hamburgerRef={hamburgerRef}
                />
                <Image 
                    className={styles.hamburger}
                    ref={hamburgerRef}
                    src={Hamburger}
                    alt="..."
                    onClick= {() => setIsNavExpanded(!isNavExpanded)}
                />
            </div>
            
        </nav>
    )
}