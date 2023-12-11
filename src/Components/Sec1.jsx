import '/src/Scss/sec1.css'
import Nav from "/src/Components/Nav"


function Sec1() {
    return(
        <section id="main">
            <Nav />
            <div id="intro">
                <h2>&nbsp;Hello, I'm Kelly Cu</h2>
                <h1>Full-Stack Web Developer</h1>
                <div id="bg1">
                    <div id="top">
                        <i className="fa-brands fa-html5"></i>
                        <i className="fa-brands fa-css3-alt"></i>
                        <i className="fa-brands fa-square-js"></i>
                        <i className="fa-brands fa-react"></i>
                        <i className="fa-brands fa-node-js"></i>
                    </div>
                    <div id="bot">
                        <i className="fa-solid fa-c"></i>
                        <i className="fa-brands fa-python"></i>
                        <i className="fa-brands fa-java"></i>
                        <i id="cplus" className="fa-solid fa-c"><span id="plus">++</span></i>
                        <i className="fa-brands fa-bootstrap"></i>
                        <i id="sass" className="fa-brands fa-sass"></i>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sec1;