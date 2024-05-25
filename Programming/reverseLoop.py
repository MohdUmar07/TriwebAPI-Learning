start = 10

num = int(input("Enter the number you want to print the table of in reverse: "))

i = start


while i >= 1:
  print(num, "*", i, "=", i*num)
  i -= 1