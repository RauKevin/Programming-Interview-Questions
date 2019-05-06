//assuming consequtive number from 1 to N, solution O(log n)

//loop version
var MissingNumber = (arr) => {

    //add 0 at first index to accomedate starting at 1 index 0
    arr.unshift(0);

    let missingNumber = true;
    let left = 0;
    let right = arr.length -1;
    while(missingNumber){
        let len = right - left;
        if(len % 2 != 0)
        {
            len++;
        } 
        
        let middle = (arr.length - 1) - (len/2);

        //check for missing number
        if(left == right || (left + 1 == right) )
        {
            missingNumber = true;
            //check right
            if(right != arr[right])
            {
                return right;
            }

            //check left
            if(left != arr[left])
            {
                return left;
            }
        }

        if(middle == arr[middle])
        {
            //missing num on right
            left = middle;
        }
        else{
            //on left
            right = middle;
        }
    }

};

/* Test */
test1 = [1,2,3,5,6,7];
test2 = [1,2,3,5];
test3 = [1,2,3,4,5,6,7,8,10];
console.log(MissingNumber(test1));
console.log(MissingNumber(test2));
console.log(MissingNumber(test3));

