const items = document.getElementsByClassName('item');
const paras = document.getElementsByTagName('p');

const setHeight = () => {
  for (let item of items) {
    item.style.height = item.offsetWidth + 'px';
  }
}

setHeight()
window.addEventListener('resize', () => {
  setHeight();
})


for (let i = 0; i < items.length; i++) {
  items[i].addEventListener('mouseenter', () => {
    paras[i].style.animation = "paragraph-popup 0.5s forwards"
  });

  items[i].addEventListener('mouseleave', () => {
    paras[i].style.animation = "paragraph-hide 0.5s forwards"
  })
}