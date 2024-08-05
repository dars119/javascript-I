var opcion = prompt(
  "¡Hola! Soy Eva, tu asistente virtual del Servicio al Cliente de Mentel. Estoy aquí para ayudarte en lo que necesides.\nEscribe el número de la opción que buscas: \n1.- Boletas y Pagos \n2.- Señal y llamadas \n3.- Oferta comercial  \n4.- Otras consultas"
);

switch (opcion) {
  case "1":
    boleta();

    break;

  case "2":
    señal();

    break;

  case "3":
    oferta();

    break;

  case "4":
    consulta();

    break;

  default:
    noExiste();

    break;
}

//opcion 1 1 ver boleta, haz click para descargar su boleta 2 pagar cuenta, usted esta siendo trans//

function boleta() {
  let respuesta = prompt(
    "seleccione una opcion: \n 1. Ver boleta \n 2. Pagar cuenta"
  );

  if (respuesta == 1) {
    alert("haz click aquí para descargar tu boleta.");
  } else if (respuesta == 2) {
    alert("usted esta siendo transferido, espere porfavor...");
  } else {
    noExiste();
  }
}

//opcion 2 1 problemas con la señal 2 problemas con las llamadas ambas escriba su solicitud, mensaje flot//

function señal() {
  let respuesta = prompt(
    " Seleccione una opción: \n 1.Problemas con la señal \n 2.Problemas con las llamadas"
  );

  if (respuesta == "1" || respuesta == "2") {
    let requerimiento = prompt(" A continuación escriba su solicitud:");
    alert("Su solicitud: \n" + requerimiento + "\n esta siendo ingresada");
  } else {
    noExiste();
  }
}

//opcion 3 mensaje de oferta, si: contactara ejecutivo  no: gracias//

function oferta() {
  let respuesta = prompt(
    "¡Mentel tiene una oferta comercial de acuerdo a tus necesidades! \n para conocer más información y ser asedorado por un \n ejecutivo escribe SI y un ejecutivo te contactara.\n de lo contrario ingrese NO"
  );

  if (respuesta == "si") {
    alert("un ejecutivo se contactara con usted.");
  } else if (respuesta == "no") {
    alert("Gracias por preferir nuestros servicios");
  } else {
    noExiste();
  }
}

//opcion 4 escriba su consulta, mensaje con la consulta y que se contactara//

function consulta() {
  let respuesta = prompt("Acontinuación escriba su consulta");

  if (respuesta) {
    alert(
      "Estimado usuario,su consulta: " +
        respuesta +
        " ha sido ingresada con exito \n !Pronto sera contactado por uno de nuestros ejecutivos¡"
    );
  } else {
    noExiste();
  }
}

//distinta opcion no valida//

function noExiste() {
  alert(
    "la opción ingresada no es valida. Gracias por preferir nuestros servicios"
  );
}
