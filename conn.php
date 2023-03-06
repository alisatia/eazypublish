<?php
//database
$server = "localhost";
$dbuser = "root";
$dbpass = "";
$dbname = "publishing";

//konek ke database
$conn = mysqli_connect($server, $dbuser, $dbpass, $dbname);

// koneksi ke database
// database user
$penulis = $_SESSION['id_user'];
$result = mysqli_query($conn, "SELECT * FROM user WHERE id_user= '$penulis'");
$dbuser = mysqli_fetch_array($result);

// databse penulis
$email = $dbuser['email'];
$datapenulis = mysqli_query($conn, "SELECT * FROM penulis WHERE email= '$email'");
$dbpenulis = mysqli_fetch_array($datapenulis);

// database buku
$idpenulis = $dbpenulis['id_penulis'];
$dbnbuku = mysqli_query($conn, "SELECT * FROM buku WHERE id_penulis = '$idpenulis'");

?>