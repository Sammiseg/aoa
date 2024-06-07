let navbarItems =  `<nav class="navbar navbar-expand navbar-dark bg-dark navbar-custom">
<div class="container-fluid">
  <a class="navbar-brand" href="#"><strong>AoA</strong></a>

  <button
    class="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link" aria-current="page" href="index.html">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="rules.html">Rules</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="event.html">Events</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="factions.html">Factions</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="contest.html">Contest</a>
      </li>
      <li></li>
      <li class="nav-item dropdown navbar-custom">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Horsemen
        </a>
        <ul
          class="dropdown-menu bg-dark navbar-dark"
          aria-labelledby="navbarDropdown"
        >
          <li>
            <a class="dropdown-item" href="death.html">Death</a>
          </li>
          <li>
            <a class="dropdown-item" href="war.html">War</a>
          </li>
          <li>
            <a class="dropdown-item" href="conquest.html">Conquest</a>
          </li>
          <li>
            <a class="dropdown-item" href="famine.html">Famine</a>
          </li>
        </ul>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://discord.gg/ageofapocalypse" target=”_blank” attribute>Discord</a>
      </li>
    </ul>
  </div>
</div>
</nav>
`
document.body.insertAdjacentHTML("afterbegin", navbarItems);

