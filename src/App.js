import GlobalStyle from "./styles/GlobalStyles";
import { Header, Logo, NavBar, LoginButton, NavLink, MenuLogo } from './styles/Styles'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Contents from "./pages/Content/Contents";
import Gallery from "./pages/Gallery/Gallery";
import More from "./pages/More/More";

function App() {
    return (
        <>
            <Router>
                <GlobalStyle />
                <Header>
                    <Logo />
                    <NavBar>
                        <NavLink as={Link} to="/landing-page-react">
                            Home
                        </NavLink>
                        <NavLink as={Link} to="/landing-page-react/product">
                            Product
                        </NavLink>
                        <NavLink as={Link} to="/landing-page-react/contents">
                            Contents
                        </NavLink>
                        <NavLink as={Link} to="/landing-page-react/gallery">
                            Gallery
                        </NavLink>
                        <NavLink as={Link} to="/landing-page-react/more">
                            More
                        </NavLink>
                    </NavBar>
                    <LoginButton>Login</LoginButton>
                    <MenuLogo/>
                </Header>
                <Routes>
                    <Route path="/landing-page-react" element={<Home />} />
                    <Route
                        path="/landing-page-react/product"
                        element={<Product />}
                    />
                    <Route
                        path="/landing-page-react/contents"
                        element={<Contents />}
                    />
                    <Route
                        path="/landing-page-react/gallery"
                        element={<Gallery />}
                    />
                    <Route path="/landing-page-react/more" element={<More />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;