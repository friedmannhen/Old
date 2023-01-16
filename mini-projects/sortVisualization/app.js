
let stop = false;
const container = document.getElementById('container');
const sizeInput = document.getElementById('size');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const scrollInput = document.getElementById('scroll-input');
const scrollValue = document.getElementById('scroll-value');
scrollValue.innerHTML = (2000 - scrollInput.value) / 1000 + " sec";

// generate an array with random values
let array = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));
let bars = [];
let reset = false;
function createBars() {
    // clear the container
    container.innerHTML = '';
    // get the size of the array from the input
    let size = sizeInput.value;
    // generate a new array with random values
    array = Array.from({ length: size }, () => Math.floor(Math.random() * 100));
    // create an HTML element for each value in the array
    bars = array.map(value => {
        let bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.height = `${value + 10}px`;
        bar.style.width = `${80 / size}%`;
        container.appendChild(bar);
        return bar;
    });
}
let i = 0, j = 0;
async function bubbleSort() {
    startButton.disabled = true;
    stopButton.disabled = false;
    let length = array.length;
    for (i; i < length; i++) {
        for (j; j < length - i - 1; j++) {
            bars[j].classList.add('active');
            bars[j + 1].classList.add('active');

            if (stop) return;

            await new Promise(resolve => setTimeout(resolve, 2000 - scrollInput.value));
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                [bars[j].style.height, bars[j + 1].style.height] = [bars[j + 1].style.height, bars[j].style.height];
            }
            bars[j].classList.remove('active');
            bars[j + 1].classList.remove('active');
        }
        bars[j].classList.add('fixed');
        j = 0;
    }
    done();
    stopButton.disabled = true;


}

// sssssssssssssssssssssssssssssssssssssssssssssssss
function quickSort(arr, start, end) {
    if (start >= end) {
        return;
    }
    let pivotIndex = partition(arr, start, end);
    quickSort(arr, start, pivotIndex);
    quickSort(arr, pivotIndex + 1, end);
}

function partition(arr, start, end) {
    let pivotIndex = start;
    let pivotValue = arr[end];
    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
            swap(arr, i, pivotIndex);
            pivotIndex++;
        }
    }
    swap(arr, pivotIndex, end);
    return pivotIndex;
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    // update the height of the corresponding bar
    bars[i].style.height = `${arr[i]}px`;
    bars[j].style.height = `${arr[j]}px`;
    // add active class to the bars being compared
    bars[i].classList.add('active');
    bars[j].classList.add('active');
    // remove active class after a delay
    setTimeout(() => {
        bars[i].classList.remove('active');
        bars[j].classList.remove('active');
    }, 500); // you can adjust the delay time here
}




// sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
async function done() {
    for (let j = 0; j < array.length; j++) {
        bars[j].classList.add('done');
        await new Promise(resolve => setTimeout(resolve, 40));
    }
    startButton.disabled = false;
}
function runSort() {
    switch (document.querySelector('#sortType').value) {
        case 'bubble':
            bubbleSort();
            break;
        case 'quick':
            // alert("Not yet implemented!");
            quickSort(array, 0, array.length - 1);
            break;
    }
}

startButton.addEventListener('click', function () {
    stopButton.innerText = 'Pause'
    stop = false;
    i = j = 0;
    createBars();
    scrollValue.value = 1700;
    runSort();
});

stopButton.addEventListener('click', function () {
    stop = !stop;
    if (stopButton.innerText == "Pause") {
        startButton.disabled = false;
        stopButton.innerText = 'Continue'
    }
    else {
        stopButton.innerText = 'Pause'
        startButton.disabled = true;
        runSort();
    }

});

scrollInput.addEventListener('input', function () {
    scrollValue.innerHTML = (2000 - scrollInput.value) / 1000 + " sec";
});
