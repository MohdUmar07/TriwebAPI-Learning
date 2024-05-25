# set - group of similar type of elements.

subjectMark1 = 23;
subjectMark2 = 22; 
subjectMark3 = 27;
subjectMark4 = 29;
subjectMark5=  18;

print("Mark in subject1", subjectMark1)
print("Mark in subject2", subjectMark2)
print("Mark in subject3", subjectMark3)
print("Mark in subject4", subjectMark4)
print("Mark in subject5", subjectMark5)

print("===================================================================================")
#list
subjectMarks = [23,22,27,24,18];

print("0 -",subjectMarks[0])
print("1 -",subjectMarks[1])
print("2 -",subjectMarks[2])
print("3 -",subjectMarks[3])
print("4 -",subjectMarks[4])

print("===================================================================================")
# 1-> Change the value of list.

subjectMarks[0] = 26;
print(subjectMarks) 

print("===================================================================================")
# 2-> Print list using index 

i = 0
while i<5:
    print(i,"-",subjectMarks[i]);
    i = i + 1;
print("===================================================================================")
# 3-> Print list values without index 

for mark in subjectMarks:
    print(mark);

print("===================================================================================")
# 4->Update list values using index

print("Before",subjectMarks);
i = 0;
while i<5:
    subjectMarks[i] = subjectMarks[i] + 2;
    i = i+ 1;
    
print("After",subjectMarks);

print("===================================================================================")
# 5-> Add or append a new value to list 

print("Before",subjectMarks);
subjectMarks.append(21);    
print("After",subjectMarks);

print("===================================================================================")
# 6-> Remove a value from list

print("Before",subjectMarks);
subjectMarks.pop();    
print("After",subjectMarks);