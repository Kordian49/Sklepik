function Register() {
  return (
    <div class="login">
      <header className="Header-register">
        <p class="text-center fs-4">Rejestracja</p>
        <form class="border border-dark-subtle border-2 rounded p-3 text-start"  >
          <div class="mb-3">
          <label class="form-label">Nazwa użytkownika</label>
          <input type="text" class="form-control container-fluid"></input>

          </div>
          <div class="mb-4">
            <label class="form-label">Password</label>
            <input type="password" class="form-control container-fluid" id="inputPassword"></input>
          </div>
          <a class="btn btn-primary container-fluid" href="/main">Submit</a>
        </form>
      </header>

    </div>
  );
}
export default Register;
