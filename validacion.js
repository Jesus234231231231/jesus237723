function validarNumeroControl() {
    const numeroControl = document.getElementById("numero_control").value;
    
    // Expresión regular para la validación
    const regex = /^(1[89]|2[0-4])84\d{4}$/;
    
    // Verificar si el número de control cumple con las condiciones
    if (regex.test(numeroControl)) {
        alert("Número de Control válido");
        return false; // Prevenir el envío, incluso si es válido
    } else {
        alert("Número de Control inválido. Asegúrate de que siga el formato correcto.");
        return false; // También prevenir el envío si es inválido
    }
}
