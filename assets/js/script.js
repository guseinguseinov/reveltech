var menuButton = document.querySelector('button.btn');
var image = document.querySelector('.menu-close-icon');
var linksDiv = document.querySelector('div.links-div');

var linksDivStyle = getComputedStyle(linksDiv);
const showLinks = function (){
  if (linksDivStyle.display == 'none'){
    image.src = './assets/images/close.png';
    linksDiv.style.marginTop = '10px';
    linksDiv.style.visibility = 'visible';
    linksDiv.style.display = 'flex';
    linksDiv.style.flexDirection = 'column';
  }
  else {
    image.src = './assets/images/menu.png';
    linksDiv.style.visibility = 'hidden';
    linksDiv.style.display = 'none';
  }
}

menuButton.onclick = showLinks;
