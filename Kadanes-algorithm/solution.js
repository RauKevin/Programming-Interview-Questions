// find the longest subarray with the maximum sum

var Kadane = (arr) => {

    let max_sum = arr[0];
    let subarray_startPos = 0;
    let subarray_endPos = 0;

    arr.forEach((element, index) => {
        
        if(index == 0) 
        {
            return;
        }

        // check if current subarray + element is greater than current subarray alone
        let temp_subarray_sum = arr.slice(subarray_startPos, index+1).reduce((total, num)=>{return total+num;});
        if( temp_subarray_sum >= max_sum)
        {
            subarray_endPos = index;
            max_sum = temp_subarray_sum;
            return;
        }

        // check is element is greater than current max sub arrray
        if(element >= max_sum)
        {
            subarray_startPos = index;
            subarray_endPos = index;
            max_sum = element;
        }

    });

    return {
        "max sum": max_sum,
        "subarray": arr.slice(subarray_startPos, subarray_endPos+1)
    }

}


/* Test Algorithm */

var test1 = [1,2,3,-2,5];
var test2 = [-1,-2,-3,-4];

console.log(Kadane(test1));
console.log(Kadane(test2));