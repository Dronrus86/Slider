const btn = document.querySelectorAll('.shopping_button');
const form = document.getElementById('form');


form.addEventListener("click", (e) =>{
    e.preventDefault();
    alert("Вы точно хотите добавить товар вкорзину?");
  });
