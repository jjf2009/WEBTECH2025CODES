<?php
$inputString = "Hello! My Name is Jared John Furtado";
$processedString = strtolower($inputString);
$characters = str_split($processedString);
$frequencies = [];
foreach ($characters as $char) {
if (isset($frequencies[$char])) {
$frequencies[$char]++; }
else {
$frequencies[$char] = 1; }}
echo "Character Frequency Count \n";
echo "Input String: \"$inputString\"\n\n";
echo "Frequencies (case-insensitive):\n";
foreach ($frequencies as $character => $count) {
echo "'$character' : $count\n";}
echo "\n";
?>