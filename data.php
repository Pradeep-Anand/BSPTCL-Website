<?php
$servername = "localhost:5173";
$username ="root";
$password = "";
$database = "notice";

$conn = new mysqli($servername, $username, $password, $database);

if($conn->connect_error){
    die ("Connection failed: ". $conn->connect.error);
}
// else{
//     echo "Server Connected"
// }

$department = $_POST['department'];
$headline = $_POST['headline'];
$date = $_POST['date'];
$document = $_POST['document'];
$detail = $_POST['detail'];

$sql = "INSERT INTO 'notification'('Department', 'Headline', 'Issue Date', 'Uploaded Document', 'Details') VALUES ('$headline', '$headline', '$date', '$document', '$detail')";

// $result = mysqli_query($connection, $sql);

if($conn->query($sql) === TRUE){
    echo "Data Submitted";
}
else{
    echo "Data not Submitted". $sql."<br>".$conn->error;
}
$conn->close();
?>






