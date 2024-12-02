import numpy as np

lst = [1, 2, 3]
a = np.array(lst, copy=False)
a[0] = 0
print(lst) # no change to original

b = np.array([1, 2, 3])
a = np.array(b, copy=False)
a[0]=0
print(b) # b changed as well!