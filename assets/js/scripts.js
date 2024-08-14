$(document).ready(function () {

    // === Code with value 5 - Prints in Console ===
    let circleRadius = '5';
    let circleArea = Math.PI * Math.pow(circleRadius, 2);
    console.log(`El área del circulo es: ${circleArea}`);

    // === Code for the HTML input ===
    document.getElementById('resultBox').style.display = 'none'

    document.getElementById('calculate').addEventListener('click', function (event) {

        event.preventDefault();

        let circleRadius = document.getElementById('circleRadius').value;

        if (circleRadius === '' || circleRadius <= 0) {
            alert('Datos ingresados incorrectamente, intentelo de nuevo.')
        } else {

            let circleArea = Math.PI * Math.pow(circleRadius, 2);

            document.getElementById('resultBox').style.display = 'block';
            document.getElementById('result').innerHTML = `<b>El área del circulo es:</b> ${circleArea}`

        }
    });

    document.getElementById('reset').addEventListener('click', function () {
        document.getElementById('resultBox').style.display = 'none';
    })

});