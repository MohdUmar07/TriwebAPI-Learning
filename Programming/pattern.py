# Program-1
# * 
# * * 
# * * *
# * * * * 
# * * * * * 

i = 1

while i <= 5:
    j = 1
    while j <= i:
        print("*",end=" ")
        j += 1
    print()
    i += 1

print("==============================================================================")
print("==============================================================================")

# Program-2
# * * * * *
# * * * *
# * * *
# * *   
# * *  


i = 5

while i >= 1:
    j = 1
    while j <= i:
        print("*",end=" ")
        j += 1
    print()
    i -= 1
    
print("==============================================================================")
print("==============================================================================")
    
# Program-3
# *
# * *
# * * *
# * * * *
# * * * * *
# * * * * *
# * * *
# * *
# *

i = 1
while i <= 5:
    j = 1
    while j <= i:
        print("*",end=" ")
        j += 1
    print()
    i+=1

i-=1

while i >= 1:
    j = 1
    while j <= i:
        print("*",end=" ")
        j += 1
    print()    
    i-=1
    
print("==============================================================================")
print("==============================================================================")

# Program-4
# * 
# * *
# * * *
# * * * *
# * * * * *
# * * * *
# * * *
# * *
# *

i = 1
while i <= 5:
    j = 1
    while j <= i:
        print("*",end=" ")
        j += 1
    print()
    i+=1

i-=2

while i >= 1:
    j = 1
    while j <= i:
        print("*",end=" ")
        j += 1
    print()    
    i-=1


print("==============================================================================")
print("==============================================================================")
 
# Program-5 
# *
# ****
# ***
# ******

start = 1
gap = 3
end = int(input("Enter ending point: "))

i = start
while i <= end:
    
    j = 1
    while j <= i:
        print("*",end=" ")
        j += 1
    print()
    i += gap
    if gap == 3:
        gap = -1
    else:
        gap = 3    