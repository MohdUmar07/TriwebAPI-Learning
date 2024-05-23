#  Two numbers division program


num1 = int(input("Enter the first number: "));
num2 = int(input("Enter the secon number: "));

quotient = num1 / num2;
quotientWithReaminder = num1 // num2;
remainder = num1 % num2;

print("Division without remainder", quotient);
print("division with remainder", quotientWithReaminder);
print("Reaminder is", remainder);