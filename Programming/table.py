### Print table of 2 :-> 2 4 6 .... 20.

# start = 1;
# end = 10
# i = start

# while i <= end:
#     print(i*2)
#     i+=1

### Print table of any number -

start = 1
end = 10
i = start

num = int(input("Enter the number you want to print the table of: "))

while i <= end:
    print(num,"*",i,"=",i*num)
    i+=1