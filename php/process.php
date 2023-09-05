<?php
// Habilita CORS (Cross-Origin Resource Sharing) para permitir solicitudes desde cualquier origen
header("Access-Control-Allow-Origin: *");

// Establece el tipo de contenido de la respuesta como JSON
header("Content-Type: application/json");

// Verifica que la solicitud sea de tipo POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Obtén los datos del formulario
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $comment = $_POST["comment"];
    $service = $_POST["service"]; // Asegúrate de que coincida con el nombre del campo en tu formulario HTML

    // Realiza cualquier procesamiento adicional que necesites con los datos del formulario
    // ...

    // Prepara una respuesta JSON
    $response = array(
        "success" => true, // Indica que la solicitud se procesó con éxito
        "message" => "¡Formulario enviado con éxito!",
        // Puedes agregar más campos a la respuesta si lo necesitas
    );

    // Convierte la respuesta a JSON y envíala de vuelta al cliente
    echo json_encode($response);
} else {
    // Maneja otras solicitudes de manera adecuada, si es necesario
    // Por ejemplo, puedes mostrar un mensaje de error o redirigir a una página de error
    $response = array(
        "success" => false,
        "message" => "Solicitud no válida"
    );
    
    echo json_encode($response);
}
?>
