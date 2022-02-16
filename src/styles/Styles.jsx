import styled from "styled-components";
import Colors from "../Colors";
import LogoSrc from "../assets/logo.png";
import Menu from "../assets/Icons/menu.png";

export const Header = styled.header`
    width: 68.75rem;
    height: 11vh;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2.5rem;
    @media (max-width: 480px) {
        display: flex;
        justify-content: normal;
        width: 100vw;
        height: 6.688rem;
        padding: 0 0rem;
        margin: 0;
        overflow: hidden;
}
`

export const NavBar = styled.nav`
    width: 30.5rem;
    height: 2.75rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 480px) {
        display: none;
    }
`;

export const BlackButton = styled.button`
    width: 11.25rem;
    height: 4.063rem;
    border: 1px solid ${Colors.second};
    color: ${Colors.light};
    background-color: ${Colors.dark};
    font-size: 1.07rem;
    cursor: pointer;
    transition: 0.4s;

    &:hover {
        color: ${Colors.second};
        border: 1px solid ${Colors.first};
    }
`;

export const LoginButton = styled.button`
    width: 8.688rem;
    height: 3.25rem;
    border: 1px solid white;
    color: white;
    background-color: #181818;
    font-size: 1.07rem;
    cursor: pointer;
    transition: 0.4s;

    &:hover {
        color: ${Colors.second};
        border: 1px solid ${Colors.first};
    }

    @media (max-width: 480px) {
        margin-right: 2rem;
        margin-left: 2rem;
    }
`;

export const NavLink = styled.a`
    color: white;
    text-decoration: none;
    font-size: 1rem;
`;

export const FooterLink = styled.a`
    color: white;
    text-decoration: none;
    font-size: 1rem;
`;

export const Logo = styled.img.attrs({ src: LogoSrc })`
    width: 11.625rem;
    height: auto;

    @media (max-width: 480px) {
        margin-left: 2rem;
        width: 10rem;
    }
`;

export const MenuLogo = styled.img.attrs({ src: Menu })`
    width: 4.125rem;
    display: none;

    @media (max-width: 480px) {
        display: inline;
    }
`;

export const PurpleButton = styled.button`
    width: 11.25rem;
    height: 3.25rem;
    border: 1px solid ${Colors.first};
    color: ${Colors.light};
    background-color: ${Colors.first};
    font-size: 1.07rem;
    cursor: pointer;
    transition: 0.4s;

    &:hover {
        color: ${Colors.second};
        border: 1px solid ${Colors.second};
    }
`;

export const SectionText = styled.p`
    color: ${Colors.second};
    font-size: 1.25rem;
    font-weight: 400;
    display: flex;
    justify-content: center;
`;

export const SectionTitle = styled.h1`
    font-size: 3.25rem;
    font-weight: 400;
    color: ${Colors.second};
    display: flex;
    justify-content: center;
    margin-top: 1.3rem;
    margin-bottom: 1.3rem;

    @media (max-width: 480px) {
        margin-bottom: 1.688rem;
    }
`;

export const WrapperSubtitle = styled.div`
    width: 37.5rem;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0 auto;

    @media (max-width: 480px) {
        width: 81vw;
        margin-bottom: 3.563rem;
    }
`;



