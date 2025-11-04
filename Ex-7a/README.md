# EX-7a: Age Calculator App

## Overview
This is an interactive **Age Calculator** web application that calculates a person's exact age in years, months, and days based on their birth date. Built with jQuery for simplified DOM manipulation and event handling, this application provides precise age calculations with input validation.

## Features
- 📅 **Birth Date Input** - Enter day, month, and year separately
- 🧮 **Precise Age Calculation** - Calculates age in years, months, and days
- ✅ **Input Validation** - Validates date ranges and future date checking
- ⚡ **Real-time Calculation** - Automatic calculation on page load with default values
- 🎯 **Error Handling** - Displays error messages for invalid inputs
- 🎨 **Clean UI** - Professional, centered calculator interface
- 📱 **Responsive Design** - Works on various screen sizes

## File Structure
```
Ex-7a/
├── index.html      # HTML structure with input fields
├── script.js       # Age calculation logic using jQuery
├── style.css       # Professional styling and layout
└── README.md       # Documentation
```

## How to Use
1. Open `index.html` in your web browser
2. The calculator loads with default values (11/12/1998)
3. Modify the birth date fields as needed:
   - **Day**: Enter a value between 1-31
   - **Month**: Enter a value between 1-12
   - **Year**: Enter a value between 1900-2099
4. Click the **Find Age** button to calculate
5. The result will display showing:
   - Years lived
   - Months
   - Days

## Input Details

| Field | Type | Min | Max | Default |
|-------|------|-----|-----|---------|
| Day | Number | 1 | 31 | 11 |
| Month | Number | 1 | 12 | 12 |
| Year | Number | 1900 | 2099 | 1998 |

## Age Calculation Logic

The calculator performs the following steps:

1. **Input Validation**
   - Checks if all fields contain valid numbers
   - Verifies month is between 1-12
   - Verifies day is between 1-31
   - Ensures birth date is not in the future

2. **Date Processing**
   - Converts user input to JavaScript Date object
   - Compares with today's date

3. **Age Computation**
   - Calculates difference in years
   - Calculates difference in months
   - Calculates difference in days
   - Adjusts for month and year boundaries

4. **Result Display**
   - Shows formatted result: "X Years Y Months Z Days"
   - Displays in green color (#2e8b57)

## Technical Details

### HTML Structure
- Input fields for day, month, and year with labels
- Pre-populated default values
- Single "Find Age" button
- Result display area
- External jQuery library from CDN

### JavaScript Logic (jQuery)
- `calculateAge()` - Core calculation function
- Input validation with range checking
- Date object manipulation
- Boundary adjustment for accurate month/day calculations
- jQuery selectors for DOM manipulation
- Event binding with `.click()`

### CSS Styling
- **Container**: 400px width with white background and shadow
- **Header**: Blue (#007bff) background with white text
- **Input Prompt**: Purple/maroon color
- **Button**: Blue with hover effect
- **Result**: Sea green color (#2e8b57)
- **Layout**: Centered with flexbox
- **Colors**:
  - Header: #007bff (Blue)
  - Input Prompt: #800080 (Purple)
  - Result Header: #000080 (Dark Blue)
  - Age Result: #2e8b57 (Sea Green)
  - Error: Red

## Validation Rules

| Condition | Error Message |
|-----------|---------------|
| Invalid/empty fields | "Please enter a valid date." |
| Future birth date | "Birth date cannot be in the future." |
| Valid date | Shows age in green |

## Default Calculation
```
Birth Date: 11/12/1998
Calculation: From Dec 11, 1998 to today
Example Output: 25 Years 10 Months 24 Days
(Note: Exact output depends on current date)
```

## Requirements
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (jQuery loaded from CDN)
- JavaScript enabled

## Browser Compatibility
- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge

## Libraries Used
- **jQuery 3.6.4** - DOM manipulation and event handling
  - Source: https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js

## Color Scheme

| Element | Color | Hex Code |
|---------|-------|----------|
| Header Background | Blue | #007bff |
| Input Prompt | Purple | #800080 |
| Result Header | Dark Blue | #000080 |
| Age Result (Success) | Sea Green | #2e8b57 |
| Error Messages | Red | Red |
| Page Background | Light Gray | #f0f0f0 |
| Card Background | White | #fff |

## Example Scenarios

### Scenario 1: Adult User
```
Input: Day 15, Month 6, Year 1990
Output: 34 Years 4 Months 20 Days (approx.)
```

### Scenario 2: Teen User
```
Input: Day 3, Month 3, Year 2010
Output: 14 Years 8 Months 2 Days (approx.)
```

### Scenario 3: Invalid Future Date
```
Input: Day 25, Month 12, Year 2030
Output: Birth date cannot be in the future.
```

## Key Features Explained

### Real-time Calculation
- The page automatically calculates age with default values on load
- Users can modify inputs and click "Find Age" for new calculations

### Precise Month/Day Adjustment
```javascript
// Adjusts for days less than birth day
if (ageDays < 0) {
    ageMonths--;
    ageDays += daysInPreviousMonth;
}
```

### Boundary Handling
- Accounts for varying days in different months
- Adjusts years when necessary months are negative
- Correctly handles leap years through JavaScript Date object

**Created as part of Full Stack Lab exercises**
