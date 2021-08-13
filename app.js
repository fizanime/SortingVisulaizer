var algorithms = [
    "1.Bubble Sort  is a Sorting algorithm which uses n-squared approach O(n^2) , It requires n times n passes of the array Where in every pass the comparison between adjacent elements is done in order to bubble out the max element , In Worst Case the time complexity of the bubble sort is O(n^2) ",
    "2.Selection Sort  is a Sorting algorithm which uses n-squared approach O(n^2) , It requires n times n passes of the array Where in every pass the comparison between adjacent elements is done in order to bubble out the max element , In Worst Case the time complexity of the bubble sort is O(n^2) ",
    "3.Insertion Sort  is a Sorting algorithm which uses n-squared approach O(n^2) , It requires n times n passes of the array Where in every pass the comparison between adjacent elements is done in order to bubble out the max element , In Worst Case the time complexity of the bubble sort is O(n^2) ",
    "4.Merge Sort  is a Sorting algorithm which uses n-squared approach O(n^2) , It requires n times n passes of the array Where in every pass the comparison between adjacent elements is done in order to bubble out the max element , In Worst Case the time complexity of the bubble sort is O(n^2) ",
    "5.Quick Sort  is a Sorting algorithm which uses n-squared approach O(n^2) , It requires n times n passes of the array Where in every pass the comparison between adjacent elements is done in order to bubble out the max element , In Worst Case the time complexity of the bubble sort is O(n^2) "
 ]

 //getting the value from select element
 var selectedAlgo = 1
 document.getElementById('selectAlgo').addEventListener('change',() => {
     selectedAlgo = document.getElementById('selectAlgo').value;
     document.getElementById('desc').innerHTML=algorithms[selectedAlgo-1];
     })

//Slider for increasing the array size
var slider = document.getElementById("myRange");
var size = slider.value; // Display the default slider value
var randomArray = []
var newArrayBtn = document.getElementById('newArrayButton');
var sortButton = document.getElementById('sort-button');

// Update the current slider value (each time you drag the slider handle)
slider.onchange = function(){
    size = this.value
    console.log("size is : " + size)
    generateRandomArray(size)
}

//method to empty out parent
var emptyParent = () => {
    var parentContainer = document.getElementById('main-block')
    while(parentContainer.firstElementChild){
        parentContainer.removeChild(parentContainer.lastChild)
    }
}

//method to generate a random elements array
var generateRandomArray = (size) => {
    
    emptyParent();
       
    randomArray = []
    for(let i=0;i<size;i++){
         var randomNumber = Math.floor(Math.random() * size) + 1
        if(!randomArray.includes(randomNumber)){
            randomArray.push(randomNumber)
        }else{
            randomNumber = Math.floor(Math.random() * size) + 1
            if(!randomArray.includes(randomNumber)){
                randomArray.push(randomNumber)
            }
        }
        }

    randomArray.forEach(number => {
        var parentContainer = document.getElementById('main-block')
        var newElement = document.createElement('div');
        newElement.setAttribute("style",`height : ${number*5}px`)
        newElement.className="array-row-child col"
        newElement.innerHTML=`${number}`
        parentContainer.appendChild(newElement)
    });
}

//call which in turn calls genraterRandomArray method onclick event of button
//which further can be modified by size adjusment
newArrayBtn.addEventListener('click',() => (generateRandomArray(slider.value)))

//================================ Sorting Algorithms ===============================
function bubbleSort(arr){
    console.log(arr)
    
    for(var i=0;i<arr.length - 1;i++){
        function innerLoop(){
            for(var j=0;j<(arr.length-i-1);j++){
                
                if(arr[j] > arr[j+1]){
                    let temp = arr[j]
                    arr[j] = arr[j+1];
                    arr[j+1] = temp; 
                }
                
            }
        }
        setTimeout(innerLoop(),3000)
        
    }
    
    console.log(arr)
    
    emptyParent();
    
    arr.forEach(number => {
        var parentContainer = document.getElementById('main-block')
        var newElement = document.createElement('div');
        newElement.setAttribute("style",`height : ${number*5}px`)
        newElement.className="array-row-child col"
        newElement.id=`${number}`
        newElement.innerHTML=`${number}`
        parentContainer.appendChild(newElement)
    });
}
//===================================================================================

//Button click listener to call particular method to sort the array
sortButton.addEventListener('click',() => {

    bubbleSort(randomArray);
    // if(selectedAlgo === 1){
    //     bubbleSort(randomArray)
    //     add classes to slidercontainer and new array button and select 
    // }else if(selectedAlgo === 2){
    //     selectionSort(randomArray)
    //     add classes to slidercontainer and new array button and select
    // }else if(selectedAlgo === 3){
    //     insertionSort(randomArray)
    //     add classes to slidercontainer and new array button and select
    // }else if(selectedAlgo === 4){
    //     MergeSort(randomArray)
    //     add classes to slidercontainer and new array button and select
    // }else{
    //     quickSort(randomArray)
    //     add classes to slidercontainer and new array button and select
    // }
    
    //remove the added classes onclick after the array is sorted
})
    





