// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray
describe("shuffle",()=>{
    test("removes the first element from an array and shuffles the remainig elements of the array",()=>{
        expect(shuffle(["purple", "blue", "green", "yellow", "pink"])).toEqual(["yellow", "blue", "pink", "green"])
    })
    test("removes the first element from an array and shuffles the remainig elements of the array",()=>{
        expect(shuffle(["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"])).toEqual(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"])
    })
})
var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]



// b) Create the function that makes the test pass.
/*
   Algorithm->remove first element of an array and shuffle randomly the remaining element of the array
        Input->an array
        Output->randomly shuffeld array and 1 less than array.length
            create a function
            remove the first element of the array using shift() built in method
            loop the array from array.length to array >zero
            declare variable j,use Math.floor and Math.random built in methods
            swap i and j
            return array
*/
const shuffle = array => {
    array.shift()
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i],array[j]]=[array[j],array[i]]
    }return array
  }
  
// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.
describe("minMax",()=>{
    test("returns the minimam and maximum values from the array",()=>{
        expect(minMax([3, 56, 90, -8, 0, 23, 6])).toEqual([-8, 90])
    })
    test("returns the minimam and maximum values from the array",()=>{
        expect(minMax([109, 5, 9, 67, 8, 24])).toEqual([5, 109])
    })
})
var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]



// b) Create the function that makes the test pass.
/*
  Algorithm->sort out the minimum and maximum values from an array
    Input->an array
    Output->an array containing the minimum and maximum values of the original array
        create a function
        declare maximum value to negative infinity
        declare minimum value to positive infiity
        loop the array
        if array at i is greater than the declared maximum value, maximum equals array at i
        if array at i is less than the declared minimum value ,minimum equals array at i
        return an array with minimum and maximum values respectively 

*/
const minMax=(array)=>{
    let max=-Infinity
    let min=Infinity
    for(let i=0;i<array.length;i++){
        if(array[i]>max){
            max=array[i]
        }
        if(array[i]<min){
            min=array[i]
        }
    }return [min,max]
}

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. 
//STRETCH: Use the spread operator to pass in a dynamic number of arguments.
// a) Create a test with an expect statement using the variables provided.
describe("removeDup",()=>{
    test("merge the two arrays and remove duplicates",()=>{
        expect(removeDup([3, 7, 10, 5, 4, 3, 3],[7, 8, 2, 3, 1, 5, 4])).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
    })
})
var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

// b) Create the function that makes the test pass.
/*
Algorithm->merge two arrays and remove duplicates 
    Input->two array with duplicated values
    Output->combined array with unique values
        create a function
        concatnate the two arrays
        declare a variable and assign an empty array
        loop over the merged array
        if the declared variable doesn't contain elements of the merged array push to it
        return the declared variable
*/
const removeDup=(array1,array2)=>{
    let mergedArray=array1.concat(array2)
    let unique=[]
    for(let i=0;i<mergedArray.length;i++){
        if(!unique.includes(mergedArray[i])){
            unique.push(mergedArray[i])
        }
    }return unique
}

//STRETCH: Use the spread operator to pass in a dynamic number of arguments.
describe("removeDuplicate",()=>{
    test("returns unique values from dynamic number of arguments",()=>{
        expect(removeDuplicate([3,2,1],[1,2,3,4])).toEqual([1,2,3,4])
    })
    test("returns unique values from dynamic number of arguments",()=>{
        expect(removeDuplicate([3,2,1],[1,2,3,4],[100,200,300,100])).toEqual([1,2,3,4,100,200,300])
    })
})
const removeDuplicate=(...array)=>{
    let merged=array.flat()
     let unique=[]
     for(let i=0;i<merged.length;i++){
         if(!unique.includes(merged[i])){
             unique.push(merged[i])
         }
     }return unique.sort((a,b)=>a-b)
 }

//test failed for question number 1 as I expected ,because the answer is 
//randomly  ordered array