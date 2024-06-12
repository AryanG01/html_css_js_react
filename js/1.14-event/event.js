function magic() {
    let body = document.getElementById('bodyElement');

    if(body.style.backgroundColor !== 'aquamarine') {
        body.style.backgroundColor = 'aquamarine';
    } else {
        body.style.backgroundColor = 'orange';
    }
}

function changeColor() {
    let header = document.getElementById('headerText');

    if (header.style.color !== 'red') {
        header.style.color = 'red';
    } else {
        header.style.color = 'black';
    }
}

function changeText() {
    let headerText = document.getElementById('headerText');
    let headerTextInput = document.getElementById('headerTextInput');

    headerText.innerText = headerTextInput.value;
    headerText.style.fontSize = '25px';
    headerTextInput.value = '';
}

let fN = document.getElementById('fullName');
fN.addEventListener('change', function test() {
    alert(fN.value);
    document.getElementById('someText').innerText = fN.value;
})