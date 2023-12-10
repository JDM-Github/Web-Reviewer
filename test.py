
n = int(input("Mama mo number: "))


for i in range(n):
    result = ((n * 2 - 1) // 2) - i
    for _ in range(result): print(" ", end="")
    for j in range(1, i+2): print(j, end="")
    for j in range(i+1, 1, -1): print(j-1, end="")
    print()

for i in range(n-2, -1, -1):
    result = ((n * 2 - 1) // 2) - i
    for _ in range(result): print(" ", end="")
    for j in range(1, i+2): print(j, end="")
    for j in range(i+1, 1, -1): print(j-1, end="")
    print()
