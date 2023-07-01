inputs = []
for i in range(5):
	inputs.append(int(input()))

inputs.sort()
print(sum(inputs) // 5)
print(inputs[2])