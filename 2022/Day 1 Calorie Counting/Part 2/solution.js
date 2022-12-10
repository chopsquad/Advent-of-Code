const example = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000 `

function turnStringToArray(string){
     //turn string into an array
    const array = string.split('\n');
    // console.log(array)
    return array;
}


function findGreatest (array){
    // [calories, which elf]
    let first = [0,0];
    let second = [0,0];
    let third = [0,0];
    let elf = 0;
    //got thru the array
    let sum = 0;

for(let i = 0; i < array.length; i++){
    // console.log(array[i]);
    if(Number(array[i]) === 0) {
        if(sum > first[0] && sum > second[0] && sum > third[0]) {
            first[0] = sum
            first[1] = elf
        }else if (sum < first[0] && sum > second[0] && sum > third[0]){
            second[0] = sum
            second[1] = elf
        }else if (sum < first[0] && sum < second[0]){
            third[0] = sum
            third[1] = elf
        }

            elf++;
            sum = 0;
            console.log(sum)
        
    }
    sum += Number(array[i]);
    // console.log(sum);
}

console.log(first);
console.log(second);
console.log(third);
}


findGreatest(turnStringToArray(example));