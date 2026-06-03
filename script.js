// Monitora a rolagem da página para modificar o estilo da barra de navegação
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('nav');
    
    window.addEventListener('scroll', () => {
        // Se a página for rolada mais de 50 pixels, adiciona a classe reflexiva
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});
