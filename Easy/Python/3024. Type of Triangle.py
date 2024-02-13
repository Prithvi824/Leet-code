'''
You are given a 0-indexed integer array nums of size 3 which can form the sides of a triangle.

A triangle is called equilateral if it has all sides of equal length.
A triangle is called isosceles if it has exactly two sides of equal length.
A triangle is called scalene if all its sides are of different lengths.
Return a string representing the type of triangle that can be formed or "none" if it cannot form a triangle.
'''

class Solution:
    def triangleType(self, nums: list[int]) -> str:
        if nums[0] + nums[1] > nums[2] and nums[1] + nums[2] > nums[0] and nums[0] + nums[2] > nums[1]:
            for i in nums[0:2]:
                count = nums.count(i)
                if count == 3:
                    return "equilateral"
                elif count == 2:
                    return "isosceles"
            return "scalene"
        return "none"


            