function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-primary ">
                <div className="d-flex w-100 justify-content-between">
                    <div className="d-flex align-items-center">
                        <a className="navbar-brand ps-3 text-white" href="#">Sklep</a>
                        <a className="navbar-brand ps-3 text-white" href="/login">Logowanie</a>
                    </div>
                    <a className="navbar-brand pe-4 text-white" href="#">Koszyk(0)</a>
                </div>
            </nav>

        </div>


    );
  }
  export default Navbar;
  