import '/src/Scss/footer.css'

function Footer() {
    return(
        <footer id="footer">
            <div id="icon">
                <a href='https://www.facebook.com/kellytomcu/' target='_blank'>
                    <i class="fa-brands fa-square-facebook"></i>
                </a>
                <a href='mailto:cukellytom@gmail.com' target='_blank'>
                    <i class="fa-solid fa-square-envelope"></i>
                </a>
                <a href='https://github.com/KellyCu' target='_blank'>
                    <i class="fa-brands fa-square-github"></i>
                </a>
                <a href='https://www.linkedin.com/in/kelly-tom-cu-a4704b260' target='_blank'>
                    <i class="fa-brands fa-linkedin"></i>
                </a>
            </div>
            <small>
                <i class="fa-regular fa-copyright">&nbsp;</i>
                KellyCu
            </small>
        </footer>
    )
}

export default Footer;