# EX-5a: Simple Calculator

## Overview
This is a straightforward **Simple Calculator** web application that performs basic arithmetic operations. Users can input two numbers and perform addition, subtraction, multiplication, and division operations.

## Features
- ➕ **Addition** - Add two numbers
- ➖ **Subtraction** - Subtract second number from first
- ✖️ **Multiplication** - Multiply two numbers
- ➗ **Division** - Divide first number by second
- 🗑️ **Clear Function** - Reset all inputs and results
- 🎯 **Simple Interface** - User-friendly and easy to use
- 📱 **Centered Design** - Responsive layout on various screen sizes

## File Structure
```
Ex-5a/
├── index.html      # HTML structure with input fields and buttons
├── script.js       # Arithmetic operation functions
├── styles.css      # Styling and layout
└── README.md       # Documentation
```

## How to Use
1. Open `index.html` in your web browser
2. Enter the **first number** in the first input field
3. Enter the **second number** in the second input field
4. Click the appropriate operation button:
   - **+ add** - Adds the two numbers
   - **- Subtract** - Subtracts the second from the first
   - **\* Multiply** - Multiplies the two numbers
   - **/ Divide** - Divides the first by the second
5. The result will be displayed below
6. Click **Clear** to reset all fields

## Operations Supported

| Operation | Button | Formula | Example |
|-----------|--------|---------|---------|
| Addition | + add | n1 + n2 | 10 + 5 = 15 |
| Subtraction | - Subtract | n1 - n2 | 10 - 5 = 5 |
| Multiplication | \* Multiply | n1 × n2 | 10 × 5 = 50 |
| Division | / Divide | n1 ÷ n2 | 10 ÷ 5 = 2 |

## Technical Details

### HTML Structure
- Two input fields for number entry with numeric type
- Five buttons: Add, Subtract, Multiply, Divide, and Clear
- A result display div for showing calculation output
- Inline onclick event handlers for button clicks

### JavaScript Logic
- `add()` - Calculates sum of two numbers
- `subtract()` - Calculates difference
- `multiply()` - Calculates product
- `divide()` - Calculates quotient
- `Clear()` - Resets all input fields and result display

### CSS Styling
- Centered layout using flexbox
- Full viewport height with centered content
- Clean, professional button styling
- Red highlight for Clear button
- Smooth transitions on button hover

## Requirements
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No external dependencies or libraries

## Browser Compatibility
- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge

## Example Calculations
```
Example 1: Addition
Input: 15 and 8
Click: + add
Output: Result: 23

Example 2: Division
Input: 100 and 4
Click: / Divide
Output: Result: 25
```
