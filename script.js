// Declara una variable para almacenar el dinero
let dinero = 0;
let precioCaja = 1;
const preciosMejoraCaja = [];
let precioActual = 100;

for (let i = 0; i < 100; i++) {
  preciosMejoraCaja.push(Math.round(precioActual));
  precioActual *= 1.20;
}

document.querySelector('.upgrade-box').addEventListener('click', function(){
    const precioCompra = parseInt(document.querySelector('#price1').textContent);
    const dineroActual = parseInt(document.querySelector('#money').textContent);
    if (dineroActual >= precioCompra) {
        document.querySelector('#money').textContent = dineroActual - precioCompra;
        preciosMejoraCaja.splice(0, 1);
        document.querySelector('#price1').textContent = preciosMejoraCaja[0];
        precioCaja = precioCaja + (precioCaja * 0.2)
    }
});

function crearCaja() {
    const contenedor = document.querySelector('.container');
    const caja = document.createElement('div');
    caja.classList.add('caja');
    contenedor.appendChild(caja);

    // Anima la caja y actualiza el dinero al finalizar la animación
    animarCaja(caja);
}

function animarCaja(caja) {
    const velocidadCinta = 120; // Píxeles por segundo, ajusta según sea necesario
    const duracionAnimacionCinta = 2000; // Milisegundos (la misma que la duración de la cinta)

    // Calcula la distancia que la caja debe recorrer durante la animación
    const distancia = velocidadCinta * (duracionAnimacionCinta / 1000);

    // Calcula la duración de la animación de la caja para que coincida con la cinta
    const duracionAnimacionCaja = 4100;

    // Aplica la animación y la transformación
    caja.style.animation = `moverCaja ${duracionAnimacionCaja}ms linear`;
    caja.style.transform = `translateX(${distancia}px)`; // La caja se moverá a lo largo de la distancia calculada

    // Elimina la caja después de la animación y actualiza el dinero
    setTimeout(() => {
        caja.remove();
        sumarDinero(precioCaja);
    }, duracionAnimacionCaja);
}

function sumarDinero(cantidad) {
    const dinero = parseFloat(document.querySelector('#money').textContent);
    const total = parseFloat((dinero + cantidad).toFixed(2));
    document.querySelector('#money').textContent = total
}

