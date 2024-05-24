tracker = int(input("Enter the value of tracker: "));
end = int(input("Enter the end point: "));
gap = int(input("Enter the gap: "));

while tracker < end:
    print(tracker);
    tracker = tracker + gap;
    
print("Finished")
print("At the end tracker is ",tracker)