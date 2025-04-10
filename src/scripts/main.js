document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os elementos com o atributo "data-scroll"
    const scrollButtons = document.querySelectorAll('[data-scroll]');
    
    scrollButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        event.preventDefault(); // Evita comportamentos padrão do botão, se houver
  
        // Recupera o ID da seção a partir do atributo data-scroll do botão
        const targetId = button.getAttribute('data-scroll');
        const targetSection = document.getElementById(targetId);
  
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        } else {
          console.error(`Seção com id "${targetId}" não encontrada!`);
        }
      });
    });
  });
  