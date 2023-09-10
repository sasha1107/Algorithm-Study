import sys

n = int(sys.stdin.readline())

log = {}

for _ in range(n):
    name, log_type = sys.stdin.readline().strip().split()
    log[name] = log_type;
        
filtered_log = {key: value for key, value in log.items() if value == "enter"}

sorted_keys = sorted(filtered_log.keys(), reverse=True)
for name in sorted_keys:
    print(name)