// Variables globales
let resultadosHistoricos = [];

// Función principal
function calcularRatio() {
    // Obtener valores
    const leyCabeza = parseFloat(document.getElementById('ley-cabeza').value);
    const leyConcentrado = parseFloat(document.getElementById('ley-concentrado').value);
    const recuperacion = parseFloat(document.getElementById('recuperacion').value) || 100;

    // Validaciones
    if (isNaN(leyCabeza) || isNaN(leyConcentrado)) {
        mostrarError("¡Ingresa valores numéricos válidos!");
        return;
    }

    if (leyCabeza <= 0 || leyConcentrado <= 0) {
        mostrarError("¡Las leyes deben ser mayores a cero!");
        return;
    }

    // Cálculos
    const ratio = (leyConcentrado / leyCabeza).toFixed(2);
    const masaConcentrado = ((leyCabeza * recuperacion) / leyConcentrado).toFixed(2);

    // Guardar en historial
    resultadosHistoricos.push({
        leyCabeza,
        leyConcentrado,
        ratio,
        masaConcentrado,
        fecha: new Date().toLocaleTimeString()
    });

    // Mostrar resultados
    mostrarResultados(ratio, masaConcentrado);
    actualizarHistorial();
}

// Mostrar resultados
function mostrarResultados(ratio, masaConcentrado) {
    const resultadoHTML = `
        <div class="resultado-item">
            <p><strong>Ratio de Concentración:</strong> ${ratio}</p>
            <p><strong>Masa de Concentrado por 100 ton de mineral:</strong> ${masaConcentrado} ton</p>
            <small>Cálculo realizado a las ${new Date().toLocaleTimeString()}</small>
        </div>
    `;
    document.getElementById('resultado-ratio').innerHTML = resultadoHTML;
}

// Mostrar errores
function mostrarError(mensaje) {
    document.getElementById('resultado-ratio').innerHTML = `
        <div class="alert alert-danger">${mensaje}</div>
    `;
}

// Actualizar tabla de historial
function actualizarHistorial() {
    const historialHTML = resultadosHistoricos.map(item => `
        <tr>
            <td>${item.leyCabeza}%</td>
            <td>${item.leyConcentrado}%</td>
            <td>${item.ratio}</td>
            <td>${item.masaConcentrado} ton</td>
            <td>${item.fecha}</td>
        </tr>
    `).join('');

    document.getElementById('historial-body').innerHTML = historialHTML;
}

// Limpiar campos
function limpiarCampos() {
    document.getElementById('ley-cabeza').value = '';
    document.getElementById('ley-concentrado').value = '';
    document.getElementById('recuperacion').value = '';
    document.getElementById('resultado-ratio').innerHTML = '';
}
