function ArrSum(arr){
    sum=0;
    for(i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}

function divideAndConquerSum(a) {

    let First_Arr=a.slice(0,a.length/3);
    let Second_Third=a.slice(a.length/3,2*a.length/3);
    let Last_Third=a.slice(2*a.length/3 ,a.length);


    if(First_Arr.length < 3 & Second_Third.length <3 & Last_Third.length <3){
        return ArrSumrrSum(First_Arr)+ ArrSumrrSum(Second_Third)+ ArrSumrrSum(Last_Third)
    }


    return divideAndConquerSum(First_Arr)+ divideAndConquerSum(Second_Third)+divideAndConquerSum(Last_Third)


}
