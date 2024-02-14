'''
You are given a 0-indexed integer array forts of length n representing the positions of several forts. forts[i] can be -1, 0, or 1 where:

-1 represents there is no fort at the ith position.
0 indicates there is an enemy fort at the ith position.
1 indicates the fort at the ith the position is under your command.
Now you have decided to move your army from one of your forts at position i to an empty position j such that:

0 <= i, j <= n - 1
The army travels over enemy forts only. Formally, for all k where min(i,j) < k < max(i,j), forts[k] == 0.
While moving the army, all the enemy forts that come in the way are captured.

Return the maximum number of enemy forts that can be captured. In case it is impossible to move your army, or you do not have any fort under your command, return 0.
'''

class Solution:
    def captureForts(self, forts: list[int]) -> int:
        if 1 not in forts or -1 not in forts: 
            return 0

        captured = []
        flag = False
        count = 0

        for i in range(len(forts)):
            if forts[i] == 1:
                flag = True
                count = 0

            elif forts[i] == -1:
                flag = False
                captured.append(count)
                count = 0

            elif flag and forts[i] == 0:
                count +=1

        flag = False
        count = 0

        for i in range(len(forts)-1, -1, -1):
            if forts[i] == 1:
                flag = True
                count = 0

            elif forts[i] == -1:
                flag = False
                captured.append(count)
                count = 0

            elif flag and forts[i] == 0:
                count+=1
        
        return max(captured)