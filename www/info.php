<?php
$connection = mysqli_connect("localhost", "root", ""); // Establishing Connection with Server 

$db = mysqli_select_db("Sigora", $connection); // Selecting Database from Server

if(isset($_POST['submit'])){ // Fetching variables of the form which travels in URL
$Customer_Name = $_POST['calc-name'];
$Date_and_Time = $_POST['calc-date'];
$Module_Type = $_POST['selectchoice'];
$String_ID = $_POST['selectchoice2'];
$Irradiance = $_POST['calc-irradience'];
$Temperature = $_POST['calc-temperature'];
$Number_of_Modules = $_POST['calc-modules'];
$Theoretical_Voltage = $_POST['calc-answer'];
$Field_Voltage = $_POST['calc-field'];
if($Customer_Name !=''||$Date_and_Time !=''){
//Insert Query of SQL
$query = mysqli_query("insert into sigora(Customer_Name, Date_and_Time, Module_Type, String_ID, Irradiance, Temperature, Number_of_Modules, Theoretical_Voltage, Field_Voltage) values ('$Customer_Name', '$Date_and_Time', '$Module_Type', '$String_ID', '$Irradiance', '$Temperature', '$Number_of_Modules', '$Theoretical_Voltage', '$Field_Voltage')");
echo "<br/><br/><span>Data Inserted successfully...!!</span>";
}
else{
echo "<p>Insertion Failed <br/> Some Fields are Blank....!!</p>";
}
}
mysqli_close($connection); // Closing Connection with Server
?>
