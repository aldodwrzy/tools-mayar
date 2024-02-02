export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="navigation">
                    <ul className="list-unstyled">
                    <a href="/">Home</a>
                    <a href="about.html">About</a>
                    <a href="contact.html">Contact</a>
                    <a href="privacy.html">Privacy</a>
                    <a href="terms.html">Terms</a>
                    </ul>
                </div>
                <div className="clearfix"></div>
                <hr/>
                <center>
                    <p style={{color:"white"}}>&#169; Copyright 2024 - All Right Reserved - <a href='https://www.codesterra.com/'>CodesTerra</a></p>
                </center>
            </div>
        </footer>
    );
}