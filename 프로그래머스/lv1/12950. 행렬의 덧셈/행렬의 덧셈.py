import numpy as np

def solution(arr1, arr2):
    result = np.array(arr1) + np.array(arr2)
    return result.tolist()