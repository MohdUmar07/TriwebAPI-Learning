# Program to find out the greatest number in three numbers with AND operator.

n1 = int(input("Enter the first number: "));
n2 = int(input("Enter the second number: "));
n3 = int(input("Enter the third number: "));

if n1 > n2 and n1 > n3:
    print("n1 is greater");
elif n2 > n3:
    print("n2 is greater");
else:
    print("n3 is greater");
