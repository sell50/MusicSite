function Nav(props) {
    
    const navNames = {
        page1: 'Artists',
        page2: 'Albums',
        page3: 'Songs',
        page4: 'Contact'
    }

    return (
        <div>
            <nav>
                <ul className="navUL">
                    <button className="navLinks">
                        {navNames.page1}
                    </button>
                    <button className="navLinks">
                        {navNames.page2}
                    </button>
                    <button className="navLinks">
                        {navNames.page3}
                    </button>
                    <button className="navLinks">
                        {navNames.page4}
                    </button>
                </ul>
            </nav>
        </div>    
    );
}

ReactDOM.render(<Nav />, document.getElementById('nav'))