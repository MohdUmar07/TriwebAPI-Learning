# Program to find out the greatest number in four numbers with AND operator.

n1 = int(input("Enter the first number: "));
n2 = int(input("Enter the second number: "));
n3 = int(input("Enter the third number: "));
n4 = int(input("Enter the fourth number: "));

if n1 > n2 and n1 > n3 and n1 > n4:
    print("n1 is greatest");
elif n2 > n3 and n2 > n4:
    print("n2 is greatest");
elif n3 > n4:
    print("n3 is greatest")
else:
    print("n4 is greatest");
