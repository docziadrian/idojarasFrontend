const mainSection = document.querySelector("#appMain");
const navbarMenu = document.querySelector("#navLinks");

document.addEventListener("DOMContentLoaded", () => {
  const loggedIn = isUserLoggedIn();

  console.log(loggedIn);

  const notLoggedInMenu = `
    <li role="button" onclick="render('Landing')" class="nav-item">
      <a class="nav-link" aria-current="page">Főoldal</a>
    </li>
    <li role="button" onclick="render('Registration')" class="nav-item">
      <a class="nav-link">Regisztráció</a>
    </li>
    <li role="button" onclick="render('Login')" class="nav-item">
      <a class="nav-link">Bejelentkezés</a>
    </li>`;

  const loggedInMenu = `
    <li role="button" onclick="render('Landing')" class="nav-item">
      <a class="nav-link" aria-current="page">Főoldal</a>
    </li>
     <li role="button" onclick="render('Felvetel')" class="nav-item">
      <a class="nav-link" aria-current="page">Felvétel</a>
    </li>
    </li>
     <li role="button" onclick="render('Lekeres')" class="nav-item">
      <a class="nav-link" aria-current="page">Lekérés</a>
    </li>
    </li>
     <li role="button" onclick="render('ProfilAdatok')" class="nav-item">
      <a class="nav-link" aria-current="page">Profil adatok</a>
    </li>
    <li role="button" onclick="logout()" class="nav-item">
      <a class="nav-link" aria-current="page">Kijelentkezés</a>
    </li>
    `;

  if (!loggedIn) {
    navbarMenu.innerHTML = notLoggedInMenu;
  } else {
    navbarMenu.innerHTML = loggedInMenu;
  }

  render("Landing");
});

let render = async (view) => {
  mainSection.innerHTML = await (await fetch(`views/${view}.html`)).text();

  switch (view) {
    case "Landing":
      renderLanding && renderLanding();
      break;
    case "Felvetel":
      handleDateFelvetel();
      handleChange();
      break;
    case "Lekeres":
      await getWeathers();
      break;
    case "ProfilAdatok":
      await getProfileHandler();
      break;
    case "Registration":
      break;
    case "Login":
      break;
  }
};
