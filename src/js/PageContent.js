function PageContent(props) {
    return (
        <div>
            <h1 className="pageContent">Welcome to the site!</h1>
            <h2 className="pageContent">Please click a category!</h2>
        </div>
    );
}

ReactDOM.render(<PageContent />, document.getElementById('pageContent'))