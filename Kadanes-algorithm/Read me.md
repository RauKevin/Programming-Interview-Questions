## Kadane's Algorithm Programming Practice Question

Given an array arr of N integers. Find the contiguous sub-array with maximum sum.

Input:
The first line of input contains an integer T denoting the number of test cases. The description of T test cases follows. The first line of each test case contains a single integer N denoting the size of array. The second line contains N space-separated integers A1, A2, ..., AN denoting the elements of the array.

Output:
Print the maximum sum of the contiguous sub-array in a separate line for each test case.


Example:
Input
2
5
1 2 3 -2 5
4
-1 -2 -3 -4
Output
9
-1

Explanation:
Testcase 1: Max subarray sum is 9 of elements (1, 2, 3, -2, 5) which is a contiguous subarray.



## Kadane's Algorithm

Efficiency: O(n)
Itterate over array and take the local maximum subarray at each position until you get ot the end.

Ex: [1,-3,2,1]
At position 0, local max is 1 and subarray is [1], start_position=0;
At position 1, add -3 to previous sum/subarray and compare. [1]=1 > [1.-3]=-2, so we keep [1] as max
At position 2, we add the 2 to the current max sum/subarray, that start_position=0, thus [1,-3,2] = 0 and [1,-3,2] < [1] so we disregard this subarray. However, we must also check if the current position alone is greater than the current max, in which case we reset the starting position. [2] > [1]

# Short hand / Psuedocode

sub_array_start_position = index 0;
current_max_sum = array[0];

For each number in array

   temp_sum = subarray from sub_array_start_position to current_array_position;
   if temp_sum is greater than current_max_sum
      then current_max_sum = temp_sum;

   if number is greater than current_max_sum
      then sub_array_start_position = index current_array_position; continue;
	
   else
     continue; 
   











