const list = document.querySelector('.list');
const listTag = document.querySelector('.listTag');
const T_list = document.querySelector('.T_list');
const T_listTag = document.querySelector('.T_listTag');

listTag.addEventListener('click', () => {
  listTag.classList.toggle('tagDown');
  list.classList.toggle('listDown');
});

T_listTag.addEventListener('click', () => {
  T_listTag.classList.toggle('tagDown');
  T_list.classList.toggle('listDown');
});