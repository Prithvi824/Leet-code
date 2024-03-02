'''
Implement the class SubrectangleQueries which receives a rows x cols rectangle as a matrix of integers in the constructor and supports two methods:

1. updateSubrectangle(int row1, int col1, int row2, int col2, int newValue)

Updates all values with newValue in the subrectangle whose upper left coordinate is (row1,col1) and bottom right coordinate is (row2,col2).
2. getValue(int row, int col)

Returns the current value of the coordinate (row,col) from the rectangle.
'''


class SubrectangleQueries:

    def __init__(self, rectangle: list[list[int]]):
        self.matrix = rectangle

    def updateSubrectangle(self, row1: int, col1: int, row2: int, col2: int, newValue: int) -> None:
        curr_col = col1
        curr_row = row1

        while curr_row <= row2:
            self.matrix[curr_row][curr_col] = newValue

            if curr_col == col2:
                curr_col = col1
                curr_row += 1
            else:
                curr_col += 1           

    def getValue(self, row: int, col: int) -> int:
        return self.matrix[row][col]


obj = SubrectangleQueries([[[[1,1,1],[2,2,2],[3,3,3]]],[0,0],[0,0,2,2,100],[0,0],[2,2],[1,1,2,2,20],[2,2]])
param_2 = obj.getValue(0, 2)
print(param_2)

obj.updateSubrectangle(0, 0, 3, 2, 5)

param_2 = obj.getValue(0, 2)
print(param_2)