import '/src/Scss/sec2.css'


function Sec2() {
    return (
        <section id="webDes">
            <div id="cap1">
                <h1>Web <span className='diff'>Designs</span></h1>
            </div>
            <div id="webCon">
                <div id="websites">
                    <div id="website">
                        <a href="https://animestocks.github.io/" target='_blank'>
                            <img src="https://github.com/KellyCu/Kellycu.github.io/blob/main/img/web1.png?raw=true"/>
                        </a>
                    </div>
                    <div id="website">
                        <a href="https://divstruct.github.io/" target='_blank'>
                            <img src="https://github.com/KellyCu/Kellycu.github.io/blob/main/img/web2.png?raw=true"/>
                        </a>
                    </div>
                    <div id="website">
                        <a href="https://divstruct.github.io/#/sample3" target='_blank'>
                            <img src="https://github.com/KellyCu/Kellycu.github.io/blob/main/img/web3.png?raw=true"/>
                        </a>
                    </div>
                    <div id="website">
                        <a href="https://divstruct.github.io/#/sample4" target='_blank'>
                            <img src="https://github.com/KellyCu/Kellycu.github.io/blob/main/img/web4.png?raw=true"/>
                        </a>
                    </div>
                    <div id="website">
                        <a href="https://temp00l0.github.io/" target='_blank'>
                            <img src="https://github.com/KellyCu/Kellycu.github.io/blob/main/img/web5.png?raw=true"/>
                        </a>
                    </div>
                    <div id="website">
                        <a href="https://tempuleto01.github.io/" target='_blank'>
                            <img src="https://github.com/KellyCu/Kellycu.github.io/blob/main/img/web6.png?raw=true"/>
                        </a>
                    </div>
                    {/* FOR SMOOTHER LOOP */}
                    <div id="website" className='add'>
                        <a href="https://animestocks.github.io/" target='_blank'>
                            <img src="https://github.com/KellyCu/Kellycu.github.io/blob/main/img/web1.png?raw=true"/>
                        </a>
                    </div>
                    <div id="website" className='add'>
                        <a href="https://divstruct.github.io/" target='_blank'>
                            <img src="https://github.com/KellyCu/Kellycu.github.io/blob/main/img/web2.png?raw=true"/>
                        </a>
                    </div>
                    <div id="website" className='add'>
                        <a href="https://divstruct.github.io/#/sample3" target='_blank'>
                            <img src="https://github.com/KellyCu/Kellycu.github.io/blob/main/img/web3.png?raw=true"/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sec2;