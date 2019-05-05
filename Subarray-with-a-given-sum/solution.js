/*
Given an unsorted array A of size N of non-negative integers, find a continuous sub-array which adds to a given number S.

Input: Array and Sum
Output:  continous subarray that addes to sum
*/

/* Test case */
let sum1 = 12;
let arr1 = [1,2,3,7,5];

let sum2 = 15;
let arr2 = [1,2,3,4,5,6,7,8,9,10];

/* Subarray with given sum - Function */
let myFnc = ( arr, arraySum ) => {

    let start;
    let end;
    let sum;

    for(let i=0; i<arr.length; i++)
    {   
        sum = arr[i];
        start = i;
        if(sum == arraySum)
        {
            //if a single element is equal to the target Sum
            end = start;
            return {
                "startIndex": start,
                "endIndex": end
            };
        }

        for(let j=i+1; j<arr.length-i; j++)
        {
            sum += arr[j];
            if(sum == arraySum)
            {
                //condition met
                end = j;
                return {
                    "startIndex": start,
                    "endIndex": end
                };
            }
            else if(sum > arraySum)
            {
                //reset
                break;
            }
        }

    }

    return -1;
}


/* Console Test cases*/
console.log(myFnc(arr1, sum1));
console.log(myFnc(arr2, sum2));

