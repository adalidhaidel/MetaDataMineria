function calcularRatio() {
    const leyCabeza = parseFloat(document.getElementById('ley-cabeza').value);
    const leyConcentrado = parseFloat(document.getElementById('ley-concentrado').value);
    
    if (isNaN(leyCabeza) || isNaN(leyConcentrado)) {
        alert("Ingresa valores numéricos válidos");
        return;
    }

    const ratio = (leyConcentrado / leyCabeza).toFixed(2);
    document.getElementById('resultado-ratio').innerHTML = `
        <strong>Ratio de Concentración:</strong> ${ratio}
    `;
}