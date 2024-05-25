### 1 2 3 4 5 6 7 8 9 10.

# start = 1
# gap = 1
# end = 10

# i = start
# while i <= end:
#     print(i)
#     i += gap

### 1 3 5 7 9......21.

# start = 1
# gap = 2
# end = 21

# i = start
# while i <= end:
#     print(i)
#     i += gap

### 2 4 6 8 10.....20.

# start = 2
# gap = 2
# end = 20

# i = start
# while i <= end:
#     print(i)
#     i += gap


# take user input and make series dynemic.

start = int(input("Enter starting point: "))
gap = int(input("Enter gap: "))
end = int(input("Enter ending point: "))

i = start
while i <= end:
    print(i)
    i += gap
