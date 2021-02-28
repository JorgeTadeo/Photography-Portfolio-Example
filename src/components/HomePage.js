import Social from "./Social"
import Logo from "./Logo"
import NavBar from "./NavBar"
import Content from "./Content"

function HomePage() {
    return(
        <div>
            <Logo />
            <NavBar />
            <Social />
            <Content />
        </div>
    );
}

export default HomePage;