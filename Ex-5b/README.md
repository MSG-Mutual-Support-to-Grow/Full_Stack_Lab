# EX-5b: BMI Calculator

## Overview
This is a simple and interactive **Body Mass Index (BMI) Calculator** web application. It allows users to input their weight and height to calculate their BMI and determine their weight category.

## Features
- 🧮 **Real-time BMI Calculation** - Calculate BMI instantly as you type
- 📊 **Weight Categories** - Displays BMI category (Underweight, Normal weight, Overweight, Obese)
- 🎨 **Clean & Responsive Design** - User-friendly interface with smooth styling
- ⚡ **Interactive UI** - Live calculation with visual feedback

## BMI Categories
| BMI Range | Category |
|-----------|----------|
| < 18.5 | Underweight |
| 18.5 - 24.9 | Normal weight |
| 25.0 - 29.9 | Overweight |
| ≥ 30.0 | Obese |

## File Structure
```
Ex-5b/
├── index.html      # HTML structure
├── script.js       # BMI calculation logic
├── styles.css      # Styling and layout
└── README.md       # Documentation
```

## How to Use
1. Open `index.html` in your web browser
2. Enter your weight in **kilograms** (kg)
3. Enter your height in **meters** (m)
4. The BMI will be calculated automatically as you type
5. Your result will display your BMI value and category

## Technical Details

### HTML Structure
- Input fields for weight and height with real-time event listeners
- Result display area that updates dynamically
- Clean semantic markup

### JavaScript Logic
- `calculateBMI()` function performs the calculation
- Formula: BMI = weight (kg) / (height (m))²
- Dynamic class assignment based on BMI category for visual feedback

### CSS Styling
- Modern, clean design with a card-based layout
- Responsive design that works on different screen sizes
- Color-coded results for quick category identification
- Smooth transitions and hover effects

## Requirements
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No external dependencies

## Example
```
Weight: 70 kg
Height: 1.75 m
Result: BMI: 22.86 - Normal weight
```

## Browser Compatibility
- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge

## Future Enhancements
- Add metric/imperial unit conversion
- Save calculation history
- Add more detailed health information
- Mobile app version

---
**Created as part of Full Stack Lab exercises**
