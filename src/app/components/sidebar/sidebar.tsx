'use client'

import * as React from 'react';
import styles from "./sidebar.module.css";
import { usePathname } from 'next/navigation';

const comparePath = (path: string, compare: string) => {
    return path == compare;
}

export default function AppSidebar() {

    const pathname = usePathname();

    return (

        <div className={styles.sidebar}>
            <ul className={styles.sidebarItemContainer}>
                <li className={styles.sidebarItem}>
                    <a href='/'>
                        <div className={styles.sidebarLabelContainer} is-selected={`${comparePath(pathname, '/') ? "true" : "false"}`}>
                            <span>Dashboard</span>
                        </div>
                    </a>
                </li>

                <li className={styles.sidebarItem}>
                    <a href='/list'>
                        <div className={styles.sidebarLabelContainer} is-selected={`${pathname.includes("/list") ? "true" : "false"}`}>
                            <span>List</span>
                        </div>
                    </a>
                </li>
            </ul>
        </div>

    );
}



