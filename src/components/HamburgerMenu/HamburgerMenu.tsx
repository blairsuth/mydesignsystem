import React, { useId, useState } from 'react';
import { Hamburger } from '../Svgs/hamburger';
import { Xmark } from '../Svgs';
import css from './hamburgerMenu.module.css';

interface HamburgerMenuProps {
  menuOptions: JSX.Element[];
}

const HamburgerMenu = ({ ...props }: HamburgerMenuProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const idArr = props.menuOptions.map(() => useId());

  return (
    <div className={css.hamburger_menu_container}>
      <div className={css.icon} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <Xmark /> : <Hamburger />}
      </div>

      {isOpen && (
        <div className={css.dropdown}>
          {props.menuOptions.map((o, index) => {
            return <div key={idArr[index]}>{o}</div>;
          })}
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
