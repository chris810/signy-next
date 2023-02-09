import useWindowDimensions from "@/hooks/useWindowDimensions";
import clsx from "clsx";
import Link from "next/link";
import { Dispatch, MutableRefObject, SetStateAction, useEffect, useRef, useState } from "react";
import { NavBarMenu } from "../navbar";

import styles from './navbarMenu.module.css';

export default function NavBarMenus(props: {
    navBarMenus: NavBarMenu[],
    isNavExpanded: boolean;
    setIsNavExpanded: Dispatch<SetStateAction<boolean>>;
    hamburgerRef: MutableRefObject<HTMLImageElement | null>;
}) {
    const { width } = useWindowDimensions();
    const {
        navBarMenus,
        isNavExpanded,
        setIsNavExpanded,
        hamburgerRef,
    } = props;
    const listStyle = clsx({
        [styles.listExpanded]: (width ? width < 568: true) && isNavExpanded,
        [styles.list]: !isNavExpanded || (width ? width > 568: false)
    });

    const dropdown = useRef<HTMLUListElement | null>(null);

    useEffect(() => {
        if (!isNavExpanded) return;
        function handleClick(event: any) {
            if (dropdown.current &&
                    hamburgerRef.current &&
                    !dropdown.current.contains(event.target) &&
                    !hamburgerRef.current.contains(event.target)) {
                setIsNavExpanded(false);
            }
        }
        window.addEventListener('click', handleClick);
        return () => window.removeEventListener('click', handleClick);
    }, [isNavExpanded]);

    return (
        <ul ref={dropdown} className={listStyle}>
            {navBarMenus.map((menu) => 
                <li className={styles.item} key={menu.displayName}>
                    <Link href={menu.href}>{menu.displayName}</Link>
                </li>
            )}
        </ul>
    )
}