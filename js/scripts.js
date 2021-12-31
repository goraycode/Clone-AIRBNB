
document.addEventListener('DOMContentLoaded', () => {

    /* obtener la imagen */
    const imagenHero = document.querySelector('.hero');

    /* iniciarlizar varaibles */
    let i = 0;
    let tiempo = 0;
    const imagenes = ["arriba2.jpg", "arriba.jpg"];

    setInterval(() => {

        imagenHero.style.backgroundPositionY = '-' + tiempo + 'px';

        if (tiempo > 30) {
            tiempo = 0;

            /* agregar las imagenes */
            imagenHero.style.backgroundImage = "url(../img/" + imagenes[i] + ")";
            if (i === imagenes.length - 1) {
                i = 0;
            } else {
                i++;
            }
            console.log(imagenes[i]);
        }
        tiempo++;
    }, 100);

    /* boton flotante */
    const btnFlotante = document.querySelector('.btn-flotante');
    btnFlotante.addEventListener('click', (e) => {
        e.preventDefault();

        /* prevenimos el default para evitar que nos lleve a la ese link y acambio 
        pedimos que se ejecute el siguiente codigo*/
        const footer = document.querySelector('#footer');
        console.log(footer.classList);
        if (footer.classList.contains('activo')) {
            /* si la contiene ejecuta este codigo */
            footer.classList.remove('activo');

            btnFlotante.innerText = 'Idioma y moneda';
            btnFlotante.classList.remove('activo');
        } else {
            /* si no la contine quiero que le agrege*/
            footer.classList.add('activo');
            btnFlotante.classList.add('activo');
            btnFlotante.innerText = 'X Cerrar';

        }
    });
});
