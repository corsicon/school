let main = document.getElementById('main');
let compStyles = window.getComputedStyle(main);
main.textContent = compStyles.getPropertyValue('background-color');
document.getElementById("target").innerHTML = compStyles.getPropertyValue('width');