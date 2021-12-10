const Nav = () =>{
    return(
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">ICS2608</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="navbar-nav" id="navbarNavAltMarkup">
                        <a className="nav-link" href="/">Home</a>
                        <a className="nav-link" href="/employees">Employees</a>
                        <a className="nav-link" href="/add">Add Employees</a>
                        <a className="nav-link" href="/">Edit Employees</a>
                        <a className="nav-link" href="/">Delete Employees</a>
                        <a className="nav-link disabled" href="/" tabIndex="-1" aria-disabled="true">Disabled</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;