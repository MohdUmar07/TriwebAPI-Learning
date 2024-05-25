import os

# i = 1
while True:
#     print(i,"My country is great")
#     i+=1

    os.system('cls')
    print("Enter 1 to print A")
    print("Enter 2 to print B")
    print("Enter 3 to print C")
    print("Enter 4 to print D")
    print("Enter 0 to Exit")

    userInput = int(input("Enter your choise: "))

    if userInput == 1:
        print("A")
    elif userInput == 2:
        print("B")
    elif userInput == 3:
        print("C")
    elif userInput == 4:
        print("D")
    elif userInput == 0:
        break
    else:
        print("Please enter the correct choise")
    input("Press enter to continue")