import os

def addition(num1, num2):
    sum = num1 + num2
    return sum
    
def subtraction(num1, num2):
    diff = num1 - num2
    return diff
    
def multiplication(num1, num2):
    product = num1 * num2
    return product
    
def division(num1, num2):
    quotient = num1 / num2
    return quotient
    
while True:


    os.system('cls')
    print("Enter 1 to print Addition")
    print("Enter 2 to print Subtraction")
    print("Enter 3 to print Multiplication")
    print("Enter 4 to print Division")
    print("Enter 0 to Exit")

    userInput = int(input("Enter your choise: "))
    if userInput == 0:
        break
    elif userInput not in range(0,5):
        print("Invalid choice. Please enter a number between 1 and 4.")
        continue  # Loop back to get user input again

    
    num1 = int(input("Enter first number: "))
    num2 = int(input("Enter second number: "))

    result = 0
    if userInput == 1:
        result = addition(num1, num2)
    elif userInput == 2:
        result = subtraction(num1, num2)
    elif userInput == 3:
        result = multiplication(num1, num2)
    elif userInput == 4:
        result = division(num1, num2)

        

    print("Result =",result)
    input("Press enter to continue")