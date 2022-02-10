let balText = document.getElementById('balacne-text');

// deposit
const depButton = document.getElementById('deposit-button');
const depInput = document.getElementById('deposit-input');
let depText = document.getElementById('deposit-text');
// widthdraw\
let widText = document.getElementById('widthdraw-text');
const widInput = document.getElementById('widthdraw-input')
const widButton = document.getElementById('widthdraw-button')

//handle deposit button event
depButton.addEventListener('click', function (e) {
    if (depInput.value == '') {
        alert('write something')
        depInput.value = '';
    } else if (isNaN(parseInt(depInput.value))) {
        alert('write a Number')
        depInput.value = '';
    }
    else if (typeof (parseInt(depInput.value)) == 'number') {
        depText.innerText = parseInt(depText.innerText) + parseInt(depInput.value);

        balText.innerText = parseInt(balText.innerText) + parseInt(depInput.value);

        depInput.value = '';

    }
    else {
        alert('pls insert a valid number')
        console.log(parseInt(depInput.value))
        depInput.value = '';
    }

})

// handle widthdraw button
widButton.addEventListener('click', function (e) {



    if (widInput.value == '') {
        alert('write something')
        widInput.value = ''
    }
    else if (isNaN(parseInt(widInput.value))) {
        alert('write a Number')
        widInput.value = ''
    }
    else if (typeof (parseInt(widInput.value)) == 'number') {

        if (typeof (widInput.value) == 'string') {
            widText.innerText = parseInt(widText.innerText) + parseInt(widInput.value);

            balText.innerText = parseInt(balText.innerText) - parseInt(widInput.value)

            widInput.value = ''
        }

    }
    else {
        alert('pls insert a valid number')

        widInput.value = ''
    }






})