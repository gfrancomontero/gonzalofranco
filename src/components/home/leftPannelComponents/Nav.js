"use client"
import React from 'react'
import styles from './Nav.module.scss'

const navItems = [
  { id: 1, label: 'About' },
  { id: 2, label: 'Experience' },
  { id: 3, label: 'Projects' },
  { id: 4, label: "Contact" }
];

export default function Nav({selected, setSelected}) {

  return (
    <nav className="ml-14 sticky bottom-60 hidden lg:flex flex-col text-slate-400 mt-28 w-fit">
      {navItems.map(item => (
        <div
          key={item.id}
          className={`my-2 flex flex-row items-center ${styles.legend} ${selected === item.id && styles.selected} ${selected === item.id ? 'text-green-300' : 'hover:text-green-300'}`}
          onClick={() => setSelected(item.id)}
        >
          <div className={`${styles.expander} mr-4 transition-ease`}></div>
          <div className={`label transition`}>{item.label}</div>
        </div>
      ))}
    </nav>
  );
}
