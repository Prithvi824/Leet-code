'''
You are entering a competition, and are given two positive integers initialEnergy and initialExperience denoting your initial energy and initial experience respectively.

You are also given two 0-indexed integer arrays energy and experience, both of length n.

You will face n opponents in order. The energy and experience of the ith opponent is denoted by energy[i] and experience[i] respectively. When you face an opponent, you need to have both strictly greater experience and energy to defeat them and move to the next opponent if available.

Defeating the ith opponent increases your experience by experience[i], but decreases your energy by energy[i].

Before starting the competition, you can train for some number of hours. After each hour of training, you can either choose to increase your initial experience by one, or increase your initial energy by one.

Return the minimum number of training hours required to defeat all n opponents.
'''

class Solution:
    def check_energy(self, opponents:list[int], initial_energy:int) -> int:
        diff = 0

        for opponent in opponents:
            if initial_energy > opponent:
                initial_energy -= opponent
            elif initial_energy == opponent:
                diff += 1
                initial_energy = 1
            else:
                diff += (opponent - initial_energy) + 1
                initial_energy = 1

        return diff


    def check_experience(self, opponents:list[int], initial_exp:int) -> int:
        diff = 0

        for opponent in opponents:
            if initial_exp > opponent:
                initial_exp += opponent
            elif initial_exp == opponent:
                diff += 1
                initial_exp += opponent + 1
            else:
                diff += (opponent - initial_exp) + 1
                initial_exp += (opponent - initial_exp) + 1 + opponent

        return diff

    def minNumberOfHours(self, initialEnergy: int, initialExperience: int, energy: list[int], experience: list[int]) -> int:
        return self.check_energy(energy, initialEnergy) # + self.check_experience(experience, initialExperience)

print(Solution().minNumberOfHours(94, 70, [58,47,100,71,47,6,92,82,35,16,50,15,42,5,2,45,22], [77,83,99,76,75,66,58,84,44,98,70,41,48,7,10,61,28]))
