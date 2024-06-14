"use client"
import React, { useState } from 'react'
import styles from './Nav.module.scss'

const navItems = [
  { id: 1, label: 'About' },
  { id: 2, label: 'Experience' },
  { id: 3, label: 'Projects' }
];

export default function Nav() {
  const [selected, setSelected] = useState(1);

  return (
    <nav className="absolute ml-14 hidden lg:flex flex-col text-slate-400 mt-28 w-fit">
      {navItems.map(item => (
        <div
          key={item.id}
          className={`my-2 flex flex-row items-center ${styles.legend} ${selected === item.id && styles.selected}`}
          onClick={() => setSelected(item.id)}
        >
          <div className={`${styles.expander} mr-4 transition-ease`}></div>
          <div className="label">{item.label}</div>
        </div>
      ))}
    </nav>
  );
}
