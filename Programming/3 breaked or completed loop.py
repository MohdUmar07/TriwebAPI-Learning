marks = [12,13,16,25,32,10,11]
isBreakCalled = 0

for i in marks:
    if i % 5 == 1:
        isBreakCalled = 1
        break
    print(i)

if isBreakCalled == 1:
    print("Loop breaked")
else:
    print("Loop completed")    
