document.querySelectorAll('.livro').forEach(livro => {
    livro.addEventListener('click', () => {
      livro.classList.add('pulando');
      setTimeout(() => {
        livro.classList.remove('pulando');
      }, 300); // Remova a classe 'pulando' após 300ms
    });
  });
  
 // MENU

const menuIcon = document.querySelector('.menu-icon');
const menuItems = document.querySelector('.menu-items');
menuIcon.addEventListener('click', () => {
  menuItems.classList.toggle('active');
});

