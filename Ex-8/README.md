# EX-8: Grade Evaluation System

## Overview
This is an **Angular JS Grade Evaluation System** web application that allows students to calculate their overall grade based on marks from 5 courses. Built using AngularJS framework with HTML, CSS, and JavaScript, this application demonstrates the MVC (Model-View-Controller) architecture pattern.

## Objective
To develop a website using HTML, CSS, and AngularJS client-side MVC framework that calculates student grades and provides grade details. AngularJS is an open-source JavaScript framework developed and maintained by Google that implements the MVC pattern to separate data, presentation, and logical units.

## Features
- 📚 **Student Information** - Input student name and roll number
- 📊 **Multi-Course Marks** - Enter marks for 5 different courses
- 🧮 **Automatic Grade Calculation** - Calculate average and letter grade
- 🎓 **Grade Details Display** - Shows average marks and letter grade
- ✅ **Input Validation** - Validates all required fields and mark ranges
- 🎨 **Professional UI** - Clean, modern design with blue color scheme
- 📱 **Responsive Layout** - Works on desktop, tablet, and mobile devices
- ⚡ **AngularJS MVC** - Implements Model-View-Controller pattern

## File Structure
```
Ex-8/
├── index.html      # HTML structure with AngularJS directives
├── style.css       # Professional styling and responsive layout
├── app.js          # AngularJS application logic and controller
└── README.md       # Documentation
```

## How to Use
1. Open `index.html` in your web browser
2. Enter the student's name in the "Student Name" field
3. Enter the student's roll number in the "Student RollNo" field
4. Enter marks (0-100) for each of the 5 courses
5. Click the **"Find Grade"** button
6. The grade details section will display showing:
   - **Average Marks** - Average of all 5 courses
   - **Grade** - Letter grade based on average marks

## Form Fields

| Field | Type | Range | Description |
|-------|------|-------|-------------|
| Student Name | Text | - | Student's full name |
| Student RollNo | Text | - | Student's roll number |
| Course 1 Marks | Number | 0-100 | Marks for course 1 |
| Course 2 Marks | Number | 0-100 | Marks for course 2 |
| Course 3 Marks | Number | 0-100 | Marks for course 3 |
| Course 4 Marks | Number | 0-100 | Marks for course 4 |
| Course 5 Marks | Number | 0-100 | Marks for course 5 |

## Grading Scale

| Average Marks | Letter Grade |
|---------------|--------------|
| 90-100 | A+ |
| 80-89 | A |
| 70-79 | B |
| 60-69 | C |
| 50-59 | D |
| Below 50 | F |

## Technical Details

### HTML Structure
- Semantic HTML5 markup
- AngularJS directive `ng-app` to bootstrap the application
- AngularJS directive `ng-controller` to bind controller
- Input fields with `ng-model` for two-way data binding
- Button with `ng-click` for grade calculation
- Conditional display with `ng-if` for grade details section

### AngularJS Features
- **ng-app** - Defines the root element of AngularJS application
- **ng-init** - Initialize application data
- **ng-model** - Binds input values to application model
- **ng-click** - Handles button click events
- **ng-if** - Conditionally displays elements
- **{{ }}** - Template syntax for data binding

### CSS Styling
- **Header:** Blue background (#0052cc) with white text
- **Form Fields:** Light gray background with blue border on focus
- **Buttons:** Blue background with hover effects
- **Grade Details:** Green background (#28a745) for results display
- **Responsive Design:** Mobile-friendly layout
- **Color Scheme:**
  - Primary Blue: #0052cc
  - Secondary Blue: #0088cc
  - Success Green: #28a745
  - Error Red: #cc0000

### JavaScript Logic
- `calculateGrade()` - Main function to calculate average and letter grade
- Input validation for all fields
- Mark range validation (0-100)
- Average calculation formula: (course1 + course2 + course3 + course4 + course5) / 5
- Conditional letter grade assignment based on average
- `resetForm()` - Optional function to clear all fields

## AngularJS Architecture

### Model
- `student` object containing all student data:
  - `name` - Student name
  - `rollNo` - Roll number
  - `course1` to `course5` - Course marks

### View
- HTML template with AngularJS directives
- Input fields bound to model properties
- Display of calculated results

### Controller
- `gradeController` function
- Manages model data and business logic
- Handles user interactions
- Performs grade calculations

## Validation Rules

✓ Student name is required  
✓ Roll number is required  
✓ All 5 course marks must be entered  
✓ Marks must be between 0 and 100  
✓ Non-numeric input is rejected  

## Color Scheme

| Element | Color | Hex Code | Purpose |
|---------|-------|----------|---------|
| Header Background | Blue | #0052cc | Page header |
| Labels | Blue | #0088cc | Form labels |
| Input Fields | Light Gray | #f9f9f9 | Input backgrounds |
| Button | Blue | #0052cc | Action button |
| Grade Details Background | Green | #28a745 | Results display |
| Section Title (Grade Eval) | Red | #cc0000 | Section heading |
| Section Title (Grade Details) | Green | #28a745 | Results heading |

## Responsive Breakpoints

| Device | Width | Changes |
|--------|-------|---------|
| Desktop | > 768px | Full layout with all elements visible |
| Tablet | 481-768px | Reduced padding and font sizes |
| Mobile | ≤ 480px | Optimized spacing and input fields |

## Visual Layout

```
┌─────────────────────────────────────────────────────┐
│         My College (Blue Header)                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  Grade Evaluation (Red Title)                       │
│                                                     │
│  Student Name: [________________]                  │
│  Student RollNo: [________________]                │
│  Course 1 Marks: [________________]                │
│  Course 2 Marks: [________________]                │
│  Course 3 Marks: [________________]                │
│  Course 4 Marks: [________________]                │
│  Course 5 Marks: [________________]                │
│                                                     │
│         [      Find Grade      ]                   │
│                                                     │
│  ─────────────────────────────────────────         │
│                                                     │
│  Grade Details (Green Title)                        │
│                                                     │
│  ┌─────────────────────────────────────┐           │
│  │ Average Marks        95.4           │           │
│  ├─────────────────────────────────────┤           │
│  │ Grade                A+             │           │
│  └─────────────────────────────────────┘           │
│                                                     │
└─────────────────────────────────────────────────────┘
```

## Requirements
- Modern web browser (Chrome, Firefox, Safari, Edge)
- AngularJS framework (loaded from CDN)
- JavaScript enabled
- No server-side requirements

## Browser Compatibility
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## Learning Outcomes
This project demonstrates:
- **AngularJS Fundamentals:**
  - Module creation and bootstrapping
  - Controller definition and scope management
  - Two-way data binding with ng-model
  - Event handling with ng-click
  - Conditional rendering with ng-if

- **MVC Architecture:**
  - Separation of concerns (Model, View, Controller)
  - Data binding between model and view
  - Business logic in controller

- **HTML & CSS:**
  - Semantic HTML5 markup
  - CSS styling and layout
  - Responsive design principles
  - Form design and validation

- **JavaScript:**
  - Object manipulation
  - Array operations
  - Conditional logic
  - Function definition and execution

## Key AngularJS Directives Used

| Directive | Purpose |
|-----------|---------|
| `ng-app` | Bootstraps AngularJS application |
| `ng-controller` | Attaches controller to element |
| `ng-model` | Binds input value to model |
| `ng-click` | Handles button/element click |
| `ng-if` | Conditionally shows/hides elements |
| `{{ }}` | Expression interpolation |
| `&#124; number:1` | Filter for formatting numbers |

## Function Reference

### calculateGrade()
Validates input and calculates student grade
```javascript
$scope.calculateGrade = function() {
    // Validation
    // Calculation of average
    // Letter grade assignment
    // Display results
}
```

### resetForm()
Clears all form fields and resets display
```javascript
$scope.resetForm = function() {
    // Clears student data
    // Hides grade details
    // Resets all variables
}
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Page not displaying correctly | Ensure AngularJS CDN link is working, check browser console for errors |
| Two-way binding not working | Verify `ng-model` is correctly bound to controller properties |
| Grade not calculating | Check all 5 course marks are entered and valid (0-100) |
| Button not responding | Ensure `ng-click` is correctly bound to controller function |
| Styles not applied | Clear browser cache, verify style.css is loading |
| AngularJS not loading | Check internet connection for CDN access |

## Testing the Application

1. **Test with valid data:**
   - Name: David
   - RollNo: 234
   - Marks: 100, 95, 98, 91, 93
   - Expected: Average: 95.4, Grade: A+

2. **Test input validation:**
   - Try submitting without student name
   - Try entering marks > 100
   - Try leaving fields empty
   - All should show appropriate error messages

3. **Test responsive design:**
   - Open on different device sizes
   - Check layout adjusts properly
   - Verify text is readable

---
**Technology:** AngularJS Framework, HTML5, CSS3
