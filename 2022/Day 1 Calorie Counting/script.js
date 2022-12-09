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

//turn string into an array
const array = example.split('\n');
// console.log(array)


function findGreatest (array){
    let greatest = -Infinity;
    //got thru the array
for(let i = 0; i < array.length; i++){
    let sum = 0;
    // console.log(array[i]);
    if(!array[i]) {
        if(sum > greatest) {
            greatest = sum
            sum = 0;
        }
    }
    sum += Number(array[i]);
    console.log(sum);
}

console.log(greatest);

}


findGreatest(array)