'''
You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.
'''

class Solution:
    def checkStraightLine(self, coordinates: list[list[int]]) -> bool:
        if len(coordinates) <= 2:
            return True
        else:
            start_x = coordinates[0][0]
            start_y = coordinates [0][1]
            delta_y = coordinates[1][1] - start_y
            delta_x = coordinates[1][0] - start_x

            for x,y in coordinates[2:]:
                curr_delta_x = x - start_x
                curr_delta_y = y - start_y

                if curr_delta_y * delta_x != curr_delta_x * delta_y:
                    return False

            return True

