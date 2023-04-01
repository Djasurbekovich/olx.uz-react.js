import React, { useContext } from 'react';
import Container from '../../Utils/Container/Container';
import { FiMessageCircle, FiHeart, FiUser } from "react-icons/fi";
import { Button } from '../../Utils/Components';
import { Link } from 'react-router-dom';
import i18n from '../../Language/i18next';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import './Header.scss';
import { ContextColor } from '../../Context/ThemeContext';

const Header = () => {
    const email = useSelector(state => state.email)

    const { theme, setTheme } = useContext(ContextColor)

    const { t } = useTranslation()

    const handleChangeLanguage = (e) => {
        i18n.changeLanguage(e.target.value)
    }

    return (
        <header className={theme ? 'header dark' : 'header light'}>
            <Container>
                <div className='header__wrapper'>
                    <Link to='/'>
                        <img className='header__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/OLX_blue_logo.svg/2560px-OLX_blue_logo.svg.png" alt="Logo" />
                    </Link>
                    <nav className='header__nav'>
                        <ul className='header__list'>
                            <select className='header__mode' onChange={e => e.target.value == 'dark' ? setTheme(true) : setTheme(false)}>
                                <option value="light">Light</option>
                                <option value="dark">Dark</option>
                            </select>
                            <select className='header__select' onChange={handleChangeLanguage}>
                                <option value="uz">{t("select__uz")}</option>
                                <option value="ru">{t("select__ru")}</option>
                                <option value="en">{t("select__en")}</option>
                            </select>
                            <Link to='/message' className='header__btn'>
                                <FiMessageCircle className='header__icon' />
                                {t("header__message")}
                            </Link>
                            <Link className='header__btn'>
                                <FiHeart className='header__icon' />
                            </Link>
                            <Link to='/auth' className='header__btn'>
                                <FiUser className='header__icon' />
                                {email ? email : t("header__profile")}
                            </Link>
                            <Button type={'light'} text={t("header__button")}/>
                        </ul>
                    </nav>
                </div>
            </Container>
        </header>
    );
}

export default Header;