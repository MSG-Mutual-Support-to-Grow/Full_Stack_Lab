function calculateBMI() {
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);
    let resultDiv = document.getElementById('result');

    if (weight > 0 && height > 0) {
        let bmi = weight / (height * height);
        let category = '';
        if (bmi < 18.5) category = 'Underweight';
        else if (bmi >= 18.5 && bmi < 25) category = 'Normal weight';
        else if (bmi >= 25 && bmi < 30) category = 'Overweight';
        else category = 'Obese';
        
        let categoryClass = category.toLowerCase().replace(/\s+/g, '-');
        resultDiv.innerHTML = 'BMI: ' + bmi.toFixed(2) + ' - ' + category;
        resultDiv.className = 'result ' + categoryClass;
    } else {
        resultDiv.innerHTML = '';
        resultDiv.className = 'result';
    }
}
