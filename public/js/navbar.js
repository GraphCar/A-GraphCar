var nav = document.createElement('nav');
nav.id = 'navbar';
nav.innerHTML = `
        <div class="nav-logo-container">
            <a href="index.html"><h1>GRAPHCAR</h1></a>
        </div>

        <div class="button-navigation-container" id="navigationContainer">
            <ul>
                <li><a href="#">A Graph</a></li>
                <li><a href="#">Produto</a></li>
                <li><a href="#">Contato</a></li>
            </ul>
        </div>

        <div class="button-user-container">
            <a href="#"><img src="./assets/img/help-icon.png"></a>
            <a href="#"><img src="./assets/img/Person-icon.png"></a>
            <button id="collapseMenu" class="collapse-menu"><img src="./assets/img/Menu-icon.png"></button>
        </div>
`;

document.body.insertBefore(nav, document.body.firstChild);


const collapseMenu = document.getElementById('collapseMenu');
const navigationContainer = document.getElementById('navigationContainer');
const navbar = document.getElementById('navbar');

var enabledMenu = false;

collapseMenu.onclick = ()=>{
    navigationContainer.style.top = enabledMenu ? '-130px' : '0px';

    enabledMenu = !enabledMenu;
}

document.onscroll = ()=>{
    navbar.style.backgroundColor = scrollY > 10 ? '#FFF' : 'transparent'
}
