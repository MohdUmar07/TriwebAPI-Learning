### Dynemic series in sequence of -> 1 2 4 7 ...... n

# start = 1
# gap = 1
# end = int(input("Enter ending point: "))

# i = start
# while i <= end:
    
#     print(i)
#     i += gap
#     gap +=1
    
    
### Dynemic series in sequence of -> 1 4 3 6 5 8 7 10 ...... n

# start = 1
# gap = 3
# end = int(input("Enter ending point: "))

# i = start
# while i <= end:
    
#     print(i)
#     i += gap
#     if gap == 3:
#         gap = -1
#     else:
#         gap = 3

### Dynemic series in sequence of -> 1 4 3 6 5 8 7 10 with number of occrance.

start = 1
gap = 3
numberOfOccrance = int(input("Enter the Number of Occrance: "))

val = start

i = 1
while i <= numberOfOccrance:
    
    print(val)
    val+=gap
    
    if gap == 3:
        gap = -1
    else:
        gap = 3
    i += 1