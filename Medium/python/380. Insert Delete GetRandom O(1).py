'''
Implement the RandomizedSet class:

RandomizedSet() Initializes the RandomizedSet object.
bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.
You must implement the functions of the class such that each function works in average O(1) time complexity.
'''

import random

class RandomizedSet:

    def __init__(self):
        self.arr = []
        self.mapping = {}
        self.last_elem = None

    def insert(self, val: int) -> bool:
        if val in self.mapping:
            return False

        self.arr.append(val)
        self.mapping[val] = len(self.arr) - 1

        return True

    def remove(self, val: int) -> bool:
        if val not in self.mapping:
            return False

        del_ind = self.mapping[val]
        self.mapping[self.arr[-1]] = del_ind
        del self.mapping[val]

        tmp = self.arr[-1]
        self.arr[-1] = self.arr[del_ind]
        self.arr[del_ind] = tmp
        self.arr.pop()

        return True

    def getRandom(self) -> int:
        if len(self.arr) == 1:
            return self.arr[0]

        return random.choice(self.arr)


obj = RandomizedSet()
print(obj.insert(3))
print(obj.remove(3))
print(obj.remove(0))
print(obj.insert(3))
print(obj.getRandom())
print(obj.remove(0))