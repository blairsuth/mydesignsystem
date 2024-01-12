import React, { useState } from 'react';
import css from './header.module.css';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

interface HeaderProps {
  /**
   * The required logo image at the start of the header. Accepts JSX Element.
   *
   * Expected behavior of a logo is to serve as a link to the homepage.
   */
  leadingLogo: JSX.Element;

  /**
   * The required links centered in the middle of the header. Accepts an array of JSX Elements.
   *
   * Looks best with 4 - 6 links.
   */
  centeredElements: JSX.Element[];

  /**
   * A single, required JSX element at the end of the header.
   */
  trailingElement: JSX.Element;
}

const Header = ({ leadingLogo, centeredElements, trailingElement }: HeaderProps) => {
  return (
    <header className={css.header}>
      <div className={css.logo}>{leadingLogo}</div>
      <div className={css.centered}>{centeredElements}</div>
      <div className={css.menu}>
        <HamburgerMenu menuOptions={[...centeredElements, trailingElement]} />
      </div>
      <div className={css.trailing}>{trailingElement}</div>
    </header>
  );
};

export default Header;
