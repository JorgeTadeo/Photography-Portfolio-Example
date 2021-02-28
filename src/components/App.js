import Logo from './Logo'
import NavBar from './NavBar'
import Content from './Content'
import Social from './Social'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import About from './About'

library.add(fab, faEnvelope)

function App () {
    return(
        <div>
            <Logo />
            <NavBar />
            <Social />
            <About />
        </div>
    );
}

export default App;