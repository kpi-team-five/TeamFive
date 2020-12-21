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

const nav = document.getElementsByTagName('nav')[0];
const authorizeButton = nav.getElementsByTagName('li')[4];
const outerForm = document.getElementsByClassName('outer')[0];
const closeButton = document.getElementsByClassName('close-button')[0];
const blockBackground = document.getElementsByClassName('block-background')[0];
blockBackground.style.height = document.body.offsetHeight + 'px';

authorizeButton.addEventListener('click', () => {
  blockBackground.style.display = 'block';
  outerForm.style.display = 'flex';
});

closeButton.addEventListener('click', () => {
  blockBackground.style.display = 'none';
  outerForm.style.display = 'none';
});

const tabs = document.getElementsByClassName('tab');
const vhodTab = tabs[0];
const regTab = tabs[1];
const vhodForm = document.getElementById('vhod-form');
const regForm = document.getElementById('reg-form');

function tabClickListener(tab, secondTab, form, secondForm) {
  tab.addEventListener('click', () => {
    if (secondTab.classList.contains('active-tab')) {
      secondTab.classList.remove('active-tab');
      tab.classList.add('active-tab');
      form.style.display = 'none';
      secondForm.style.display = 'flex';
    }
  })
}

tabClickListener(vhodTab, regTab, regForm, vhodForm);
tabClickListener(regTab, vhodTab, vhodForm, regForm);