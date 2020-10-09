let page = document.querySelector('.page');
page.classList.add('dark-theme');

let themeBtn = document.querySelector('.theme-button');
themeBtn.onclick = function() {
  page.classList.toggle('dark-theme');
}