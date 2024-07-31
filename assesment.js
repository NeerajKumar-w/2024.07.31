function merging(){
    let arr = [1, 2 , 3, 4, 5];
    let arr2 = [6, 7, 8, 9, 10];
    let arr3 = arr.concat(arr2);
    console.log(arr);
    console.log(arr2);
    console.log(arr3);
}
merging();
//output = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function firstOccurence(){
    let target = 4;
    let arr = [1, 4, 5, 3, 4, 7];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == target){
            console.log("The firstOccurence of target is in index " + i);
            break;
        }
    }
}
firstOccurence();
//output = The firstOccurence of target is in index 1
function lastOccurence(){
    let target = 9;
    let arr = [1, 2, 3, 4, 9, 3, 2, 9];
    console.log("The lastOccurence of target is in index " + arr.lastIndexOf(target));
}
lastOccurence();
//The lastOccurence of target is in index 7
function removeDuplicate(){
    let arr = [1, 2, 2, 3, 4, 5, 4];
    let arr2 = []
    for(let i = 0; i < arr.length; i++){
        for(let j = i; j < arr.length; j++){
            if(arr[i] == arr[j]){
                arr2.push(...arr.splice(j, 1));
            }
        }
    }
    console.log(arr2);
}
removeDuplicate();
//output = [ 1, 2, 3, 4, 5 ]
function intersection(){
    let arr = [1, 2, 3, 4, 5];
    let arr2 = [4, 5, 6, 7, 8];
    let arr3 = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr2.length; j++){
            if(arr[i] == arr2[j]){
                arr3.push(arr[i]);
            }
        }
    }
    console.log(arr3);
}
intersection();
//[ 4, 5 ]

