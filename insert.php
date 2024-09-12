<?php
$conexion = mysqli_connect("sql108.infinityfree.com", "if0_37286073", "Pa8s6OxkDIUA ", "if0_37286073_realpasion") or die("Error de conexión");

$nombre = $_POST["nombre"];
$correo = $_POST["correo"];
$contraseña = $_POST["contraseña"];

$verificar = "SELECT * FROM registro WHERE Correo='$correo'";
$resultado = mysqli_query($conexion, $verificar);

if (mysqli_num_rows($resultado)>0) {
    header("Location: index.php?exito2=1");
    exit();
} else {
    $sql = "INSERT INTO `registro`(`Nombre`, `Correo`, `Contraseña`) VALUES ('$nombre','$correo','$contraseña')";

    if (mysqli_query($conexion, $sql)) {
        header("Location: index.php?exito=1");
        exit();
    }
}
mysqli_close($conexion);
