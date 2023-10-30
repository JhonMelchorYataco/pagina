<?php
$servername = "localhost"; // Cambia esto con la dirección de tu servidor de base de datos
$username = "tu_usuario"; // Cambia esto con tu nombre de usuario de la base de datos
$password = "tu_contraseña"; // Cambia esto con tu contraseña de la base de datos
$dbname = "tu_base_de_datos"; // Cambia esto con el nombre de tu base de datos

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Error de conexión a la base de datos: " . $conn->connect_error);
}

$carrera = $_POST['carrera'];
$nombre = $_POST['nombre'];
// Otros campos del formulario (ajusta los nombres de las variables según tu formulario)

$sql = "INSERT INTO formulario (carrera, nombre) VALUES ('$carrera', '$nombre')";
// Agrega otros campos a la consulta SQL según sea necesario

if ($conn->query($sql) === TRUE) {
    echo "Datos insertados correctamente";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
