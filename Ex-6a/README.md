# EX-6a: JavaScript Dynamic Styles

## Overview
This is an interactive **JavaScript Styles Controller** web application that demonstrates dynamic CSS manipulation using JavaScript. Users can control various CSS properties of an element in real-time using a collection of input controls.

## Features
- 🎨 **Background Color Control** - Change the background color using a color picker
- 🖌️ **Text Color Control** - Modify text color dynamically
- 📏 **Font Size Adjustment** - Change text size with numeric input
- 📦 **Box Dimensions** - Adjust width and height of the element
- 🔄 **Border Radius** - Control rounded corners with a slider
- 👁️ **Opacity Control** - Adjust transparency level
- ⚡ **Real-time Updates** - Changes apply instantly as you adjust controls
- 🎯 **Interactive UI** - Intuitive control panel for all properties

## File Structure
```
Ex-6/
├── index.html      # HTML with input controls and display element
├── script.js       # Dynamic style update function
├── style.css       # Initial styling
└── README.md       # Documentation
```

## How to Use
1. Open `index.html` in your web browser
2. You'll see a light blue box displaying "URK23AI1001"
3. Use the control panel to modify the following properties:
   - **Background Color** - Click the color picker to choose a color
   - **Text Color** - Click the color picker to change text color
   - **Text Size** - Enter a number (e.g., 20, 30, 40)
   - **Box Width** - Enter width in pixels
   - **Box Height** - Enter height in pixels
   - **Border Radius** - Drag the slider to adjust corner rounding (0-100)
   - **Opacity** - Drag the slider to adjust transparency (0-1)
4. All changes are applied in real-time

## Control Types

| Control | Type | Input Method | Range/Default |
|---------|------|--------------|---------------|
| Background Color | Color Picker | Click to select | Any RGB color |
| Text Color | Color Picker | Click to select | Any RGB color |
| Text Size | Number Input | Type value | Default: 20px |
| Box Width | Number Input | Type value | Default: 200px |
| Box Height | Number Input | Type value | Default: 150px |
| Border Radius | Slider | Drag to adjust | 0-100px |
| Opacity | Slider | Drag to adjust | 0-1 (0 = transparent) |

## Technical Details

### HTML Structure
- Single `<div id="myDiv">` element that displays the text
- Control panel with labeled input elements
- Inline `onchange` and `onkeyup` event handlers for real-time updates

### JavaScript Logic
- `updateStyle()` function reads all input values
- Applies styles dynamically to the target div element
- Conditional checks ensure only non-empty values are applied
- Converts numeric values to appropriate CSS units (px, etc.)

### CSS Styling
- Initial styling with default values:
  - Background: Cyan/Light Blue (rgb(12, 206, 240))
  - Width: 400px
  - Height: 200px
  - Border: 1px solid black
  - Initial border-radius: 0px
  - Initial opacity: 1
- Centered layout with control panel alignment

## Default Values
```
Background Color: Cyan (rgb(12, 206, 240))
Text Color: Black
Text Size: 20px (placeholder)
Box Width: 200px (placeholder)
Box Height: 150px (placeholder)
Border Radius: 0px
Opacity: 1 (fully opaque)
```

## Requirements
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No external dependencies

## Browser Compatibility
- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge

## Example Customizations
```
Scenario 1: Create a rounded gradient button effect
- Background Color: Choose a vibrant color
- Border Radius: Set to 50 or higher
- Width: Set to 150
- Height: Set to 50
- Text Color: Choose contrasting color

Scenario 2: Create a transparent overlay
- Background Color: Choose any color
- Opacity: Set to 0.3-0.5
- Width: Set to 400
- Height: Set to 300
```
