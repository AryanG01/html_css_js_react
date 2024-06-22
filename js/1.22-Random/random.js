const randomize = () => {
    let min = document.querySelector('#min').value;
    let max = document.querySelector('#max').value;

    if (min === '' || max === '') {
        alert('Please enter a number');
        return;
    }

    min = parseInt(min);
    max = parseInt(max);

    let randomNum = Math.floor(Math.random() * (max - min + 1) + min);
    document.querySelector('#output').innerHTML = `Random Number: ${randomNum}`;
}