import data from './data'



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
    let greatest = 0;
    let elf = 0;
    //got thru the array
    let sum = 0;

for(let i = 0; i < array.length; i++){
    // console.log(array[i]);
    if(Number(array[i]) === 0) {
        if(sum > greatest) {
            greatest = sum
        }
        
        elf++;
        sum = 0;
        // console.log(sum)
    }
    sum += Number(array[i]);
    // console.log(sum);
}
console.log(`Elf number ${elf} is holding the most amount of calories at ${greatest}`);
}


findGreatest(turnStringToArray(example));
// findGreatest(turnStringToArray(data));



