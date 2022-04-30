function Footer(props) {

    const footerNames = {
        page1: 'Home',
        page2: 'Albums',
        page3: 'Songs',
        page4: 'Contact'
    }

    return (
        <div>
            <nav>
                <ul className="footerUL">
                    <button className="footerLinks">
                        {footerNames.page1}
                    </button>
                    <button className="footerLinks">
                        {footerNames.page2}
                    </button>
                    <button className="footerLinks">
                        {footerNames.page3}
                    </button>
                    <button className="footerLinks">
                        {footerNames.page4}
                    </button>
                </ul>
            </nav>
        </div>    
    );
}

ReactDOM.render(<Footer />, document.getElementById('footer'))