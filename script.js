const revealElements = () => {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        // Bajamos el margen para que se active más rápido
        const elementVisible = 50; 
        
        if (elementTop < windowHeight - elementVisible) {
            // Faltaba ".classList" aquí, ¡por eso se quedaba oculto!
            element.classList.add('active');
        }
    });
}

// Escuchamos el scroll
window.addEventListener('scroll', revealElements);

// Esto es clave: ejecutamos al cargar para mostrar lo que ya está en pantalla
window.onload = () => {
    revealElements();
};