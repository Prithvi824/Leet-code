'''
Given a string path, where path[i] = 'N', 'S', 'E' or 'W',
each representing moving one unit north, south, east, or west, respectively.
You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.
Return true if the path crosses itself at any point, that is, 
if at any time you are on a location you have previously visited. Return false otherwise.
'''

class Solution:
    def isPathCrossing(self, path: str) -> bool:
        steps = {
            "N": [0, 1],
            "S": [0, -1],
            "E": [1, 0],
            "W": [-1, 0]
        }
        x, y = 0, 0
        seen = set()
        seen.add((x, y))

        for direction in path:
            a, b = steps[direction]
            x += a
            y += b

            if (x, y) in seen:
                return True

            seen.add((x, y))

        return False

print(Solution().isPathCrossing("ENNNNNNNNNNNEEEEEEEEEESSSSSSSSSS"))
