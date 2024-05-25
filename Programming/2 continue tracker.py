i = 0
countContinue = 0

while i < 10:
    if i % 2 == 1:
        i = i + 1
        countContinue = countContinue + 1
        continue
    print(i)
    i = i + 1
    
print("After Loop")
print("In loop continue is called",countContinue,"times.")    