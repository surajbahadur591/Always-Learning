# x = int(input("enter a number : "))

# y = int(input("enter another number : "))

# print (x + y)

# ch = input("enter a character :  ")[0]
# print(ch)

# exp = eval(input ("give me a mathematic expression : "))
# print(exp)

# _______________________________________________________________________

# sets in python


a = {1, 2, "suraj", 9.2}
b = set(['a', 1, 10, 2])
print(a)
print(b)

# c = set([])
# print(c)

# print(dir(a))

# print(len(a))

# for i in a:
#     print(i)

# a.add("bahadur")
# print(a)
# a.remove("suraj")  # gives error when element is not present
# print(a)
# a.discard("suraj")  # no error
# print(a)

print(a.union(b))
print(a | b)

print(a.intersection(b))
print(a & b)

print(a.difference(b))
print(a-b)

frozen_set = frozenset(a)
print(frozen_set)
# frozen_set.add(3)
