function calculateBMI() {
    const w = parseFloat(document.getElementById('weight').value)
    const h = parseFloat(document.getElementById('height').value)
    const out = document.getElementById('result');

    const bmi = w / (h * h);
    let category = 'Obese';
    if (bmi < 18.5) category = 'Underweight';
    else if (bmi < 25) category = 'Normal weight';
    else if (bmi < 30) category = 'Overweight';
    out.textContent = `BMI: ${bmi.toFixed(2)} - ${category}`;
}
