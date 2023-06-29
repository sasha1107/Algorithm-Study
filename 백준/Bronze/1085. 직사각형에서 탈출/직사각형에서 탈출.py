x, y, w, h = list(map(int, input().split()))

# h-------
# |      |
# y      |
# |      |
# ----x--w

print(min([min([x, y]), min([h - y, w - x])]))