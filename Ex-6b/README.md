# EX-6b: Car Animation

## Overview
This is an interactive **Car Animation** web application that demonstrates JavaScript animation and DOM manipulation. Users can control a car animation that moves across a road with start, stop, and reset controls. When the car reaches the end of the road, a "danger" warning appears.

## Features
- 🚗 **Animated Car Movement** - Car smoothly moves across the road
- ▶️ **Start Button** - Initiates the car animation
- ⏹️ **Stop Button** - Pauses the car movement
- 🔄 **Reset Button** - Returns car to starting position
- ⚠️ **Danger Alert** - Warning message when car reaches the end
- 🎯 **Smooth Animation** - Continuous motion with consistent speed
- 🛣️ **Road Display** - Visual road container for the animation

## File Structure
```
Ex-6b/
├── index.html      # HTML structure with car image and controls
├── script.js       # Animation and control logic
├── style.css       # Styling and layout
├── car.png         # Car image asset (required)
└── README.md       # Documentation
```

## How to Use
1. Open `index.html` in your web browser
2. **Note:** Ensure `car.png` is in the same directory as the HTML file
3. You'll see a road with a car positioned at the left side
4. Use the control buttons to manage the animation:
   - **Start** - The car will begin moving from left to right
   - **Stop** - Pauses the car at its current position
   - **Reset** - Returns the car to the starting position
5. When the car reaches the right edge of the road, a "Car in Danger!" message appears
6. Click **Reset** to clear the danger message and start over

## Animation Mechanics

| Action | Function | Behavior |
|--------|----------|----------|
| Start | `startCar()` | Clears any existing animation, hides danger message, starts movement |
| Stop | `stopCar()` | Pauses the animation at current position |
| Reset | `resetCar()` | Stops animation, resets position to 0, hides danger message |
| Move Car | `moveCar()` | Moves car 5px every 20ms, displays danger when reaching edge |

## Technical Details

### HTML Structure
- `<div id="road">` - Container for the animation area
- `<img id="car">` - Car image element
- Three control buttons (Start, Stop, Reset)
- `<div id="dangerBox">` - Warning message (initially hidden)

### JavaScript Logic
- `startCar()` - Initiates the animation interval
- `stopCar()` - Pauses the animation using `clearInterval()`
- `resetCar()` - Resets position to 0 and clears animation
- `moveCar()` - Core animation function that increments position
- Position tracking with `position` variable
- Window resize awareness using `window.innerWidth`

### CSS Styling
- **Road**: Relative positioned container with black border
- **Car**: Absolute positioned, 100px width
- **Danger Box**: Red alert message with rounded corners
- **Controls**: Circular buttons with 50px padding
- **Background**: Light blue theme
- **Animations**: Smooth CSS transitions

## Animation Details
```
Movement Speed: 5px every 20ms = 250px per second
Car Width: 100px
Road Width: 90% of viewport
Animation Stops When: Car reaches window width - 150px
Danger Alert: Displays when car reaches road boundary
```

## Requirements
- Modern web browser (Chrome, Firefox, Safari, Edge)
- **Required Asset:** `car.png` image file in the same directory
- JavaScript enabled

## Browser Compatibility
- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge

## Key Properties & Methods Used
- `setInterval()` - Creates animation loop
- `clearInterval()` - Stops animation
- `window.onload` - Initializes car element reference
- `element.style.left` - Positions car
- `window.innerWidth` - Detects boundary
- `element.style.display` - Shows/hides danger message

## Visual Layout
```
┌─────────────────────────────────────┐
│  Car Animation                      │
├─────────────────────────────────────┤
│  ┌──────────────────────────────┐   │
│  │ 🚗 (moves left to right)     │   │
│  └──────────────────────────────┘   │
│  Road                               │
├─────────────────────────────────────┤
│  [Start] [Stop] [Reset]             │
├─────────────────────────────────────┤
│  Car in Danger! (appears at end)    │
└─────────────────────────────────────┘
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Car image not showing | Ensure `car.png` is in the same directory |
| Animation not smooth | Check browser performance settings |
| Car moves too fast/slow | Adjust the increment value (currently 5px) or interval (currently 20ms) in script.js |
| Danger message always visible | Check that CSS has `display: none` initially |


