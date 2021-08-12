//Slider for increasing the array size
var slider = document.getElementById("myRange");
var size = slider.value; // Display the default slider value
var randomArray = []
// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
 size = this.value
 console.log("size is : " + size)
 generateRandomArray(size)
 console.log(randomArray)
}

var generateRandomArray = (size) => {
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
}



