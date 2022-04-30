function Header(props) {
    return (
        <div>
            <img className="headerImg" src="../images/dog.jpg" />
        </div>
    );
}

ReactDOM.render(<Header />, document.getElementById('header'))