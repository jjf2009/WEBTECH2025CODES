
<?php
function factorial(int $n): int {
if ($n <= 1) {
return 1;}
return $n * factorial($n - 1);}
$num1 = 8;
echo "Recursive Factorial Calculator\n";
$result1 = factorial($num1);
echo "\nFactorial of $num1 ($num1!) is $result1.\n";
$num2 = 0;
$result2 = factorial($num2);
echo "\nFactorial of $num2 ($num2!) is $result2.\n";
$num3 = 3;
$result3 = factorial($num3);
echo "\nFactorial of $num3 ($num3!) is $result3.\n";
echo "\n";
?>