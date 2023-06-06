result = []
for i in range(10):
    inp = int(input())
    result.append(inp % 42)
print(len(list(set(result))))