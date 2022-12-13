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
        if(sum > first[0]) {
            const previous = first[0]
            const previousElf = first[1]
            first[0] = sum
            first[1] = elf
            if(previous > second[0]){
                const secondPrev = second[0];
                const secondPrevElf = second[1]
                second[0] = previous;
                second[1] = previousElf;
                if(secondPrev > third[0]){
                    third[0] = secondPrev;
                    third[1] = secondPrevElf;
                }
            }
        }
        if (sum > second[0] && sum < first[0] && sum > third[0]){
            const previous = second[0];
            const previousElf = second[1];
            second[0] = sum;
            second[1] = elf;
            if(previous > third[0]) {
                third[0] = previous;
                third[1] = previousElf;
            };
        }
         if (sum > third[0] && sum < (first[0] || second[0])){
            console.log(sum);
            third[0] = sum
            third[1] = elf
        }

            elf++;
            sum = 0;
            console.log(sum)
        
    }
    sum += Number(array[i]);
    console.log("sum:", sum);
}

console.log(first);
console.log(second);
console.log(third);
}


findGreatest(turnStringToArray(example));