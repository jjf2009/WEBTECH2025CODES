<?php
$names = [
"Jared",
"Noah",
"Kanak",
"Ava",
"Herlunio",
"Chinmayi",
"James",
"Charlotte",
"Benjamin"
];
echo " Unsorted Order of Names:\n";
foreach ($names as $name) {
echo $name ."\n" ;
}sort($names);
echo "\n\n";
echo "Sorted Order of Names:\n";
foreach ($names as $name) {
echo $name . "\n";}
echo "\n";?>