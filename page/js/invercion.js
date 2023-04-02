function openEmailModal() {
    // Obtener el mensaje predefinido
    const mensaje = "Hola, me gustaría recibir más información sobre AI Teacher";

    // Abrir la ventana de correo electrónico con el mensaje predefinido
    window.open(`mailto:anderlabss@gmail.com?subject=Información%20AI%20Teacher&body=${mensaje}`);
}



document.getElementById("btn-inversor").onclick = function() {
    var mensaje = "Me interesa obtener más información sobre la oportunidad de inversión en AI Teacher.";
    var link = "mailto:tuemail@gmail.com?subject=Información de inversión&body=" + mensaje;
    window.location.href = link;
}

document.getElementById("btn-patrocinador").onclick = function() {
    var mensaje = "Me interesa obtener más información sobre las oportunidades de patrocinio en AI Teacher.";
    var link = "mailto:tuemail@gmail.com?subject=Información de patrocinio&body=" + mensaje;
    window.location.href = link;
}

document.getElementById("btn-socio").onclick = function() {
    var mensaje = "Me interesa obtener más información sobre la oportunidad de colaborar como socio en AI Teacher.";
    var link = "mailto:tuemail@gmail.com?subject=Información de colaboración&body=" + mensaje;
    window.location.href = link;
}
