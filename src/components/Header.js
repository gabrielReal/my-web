import React from 'react'
import { ButtonTheme } from './ButtonTheme';
import { HeaderLogo } from './HeaderLogo';
import { HeaderNav } from './HeaderNav';
import MenuMobile from './MenuMobile';

export const Header = () => {
  return (
    <>
    <div className='top'>
        <MenuMobile />
        <HeaderLogo />
        <HeaderNav />
        <ButtonTheme />
    </div>
    </>
  )
}
