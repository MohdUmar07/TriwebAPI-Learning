rangeEnd = int(input("Enter the number: "));
for i in range(rangeEnd):
    num = i + 1;
    if num % 2 == 0:
        print(num,"is even");
    else:
        print(num,"is odd");