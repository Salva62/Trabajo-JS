document.addEventListener('DOMContentLoaded', function() {
    const inputPresupuesto = document.getElementById('inputPresupuesto');

    // Función para calcular el presupuesto estimado
    function calcularPresupuesto() {
        // Obtener los valores seleccionados del formulario
        const vehiculoPrecio = parseInt(document.getElementById('vehiculo').value);
        const formaPago = parseInt(document.getElementById('formaPago').value);
        const pagoInicial = parseInt(document.getElementById('pagoInicial').value) || 0;
        const regalo = parseInt(document.querySelector('input[name="regalo"]:checked').value) || 0;
        const extras = Array.from(document.querySelectorAll('input[name="extras"]:checked')).reduce((total, checkbox) => total + parseInt(checkbox.value || 0), 0);

        // Calcular el presupuesto estimado
        let presupuestoEstimado = vehiculoPrecio + formaPago - pagoInicial + regalo + extras;

        // Obtener el valor del plazo estimado
        const plazoEstimado = parseInt(document.getElementById('plazoEstimado').value) || 0;

        // Aplicar descuento según el plazo estimado
        const descuento = plazoEstimado > 0 ? (presupuestoEstimado * (plazoEstimado / 100)) : 0;
        presupuestoEstimado -= descuento;

        // Verificar si el presupuesto estimado es negativo y establecerlo en cero si es así
        if (presupuestoEstimado < 0) {
            presupuestoEstimado = 0;
        }

        // Mostrar el presupuesto estimado en el input
        inputPresupuesto.value = presupuestoEstimado + ' €';
    }

    // Escuchar eventos de cambio en los elementos del formulario y calcular el presupuesto
    document.querySelectorAll('#vehiculo, #formaPago, #pagoInicial, input[name="regalo"], input[name="extras"], #plazoEstimado').forEach(function(elemento) {
        elemento.addEventListener('change', calcularPresupuesto);
    });

    // Calcular presupuesto al cargar la página
    calcularPresupuesto();
});