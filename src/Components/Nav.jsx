import '/src/Scss/nav.css'


function Nav() {
    return(
        <div id="navbar">
            <div id="logo">
                <i className="fa-solid fa-laptop-code"></i>
            </div>
            <ul>
                <a href="#main"><li>Home</li></a>
                <a href="#certificates"><li>Certificates</li></a>
                <a href="#projects"><li>Projects</li></a>
                <a href="#footer"><li>Hire Me!</li></a>
            </ul>
        </div>
    )
}

export default Nav;