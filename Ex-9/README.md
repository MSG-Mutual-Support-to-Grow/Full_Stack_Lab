# EX-9: Product Inventory System

## Overview
This is an **AngularJS Product Inventory System** - a single page web application that manages a product inventory using AngularJS framework. The system allows users to add new products, view them in a dynamic table using `ng-repeat`, and remove products from the inventory. Built with HTML5, CSS3, and AngularJS, this application demonstrates arrays and dynamic list rendering.

## Objective
To develop a HTML single page web application to create a product inventory system using AngularJS Framework. The system includes:
- Creating an interface for storing the name and price of a product
- Saving products in an AngularJS Array
- Binding products in the HTML table using `ng-repeat`
- Providing a "delete" link for every item in the table row to remove the item from the array and update the UI

## Features
- 📦 **Add Products** - Add new products with name and price
- 💾 **Array Storage** - Store products in an AngularJS array
- 📊 **Dynamic Table** - Display products using `ng-repeat` directive
- 🗑️ **Remove Products** - Delete products with confirmation dialog
- ✅ **Input Validation** - Validate product name and price
- 📱 **Responsive Design** - Works on all device sizes
- 🎨 **Professional UI** - Clean table layout with green header
- ⚡ **Real-time Updates** - UI updates instantly when products are added/removed
- 🔍 **Duplicate Prevention** - Prevents adding duplicate products

## File Structure
```
Ex-9/
├── index.html      # HTML structure with AngularJS directives
├── style.css       # Professional styling for tables and forms
├── app.js          # AngularJS controller and business logic
└── README.md       # Documentation
```

## How to Use
1. Open `index.html` in your web browser
2. Enter a product name in the "Enter the Product Name:" field
3. Enter the product price in the "Enter the Product Price:" field
4. Click the **"Add Product"** button
5. The product appears in the table below
6. To remove a product, click the **"[delete]"** button in the Remove column
7. Confirm the deletion when prompted

## Form Fields

| Field | Type | Range | Description |
|-------|------|-------|-------------|
| Product Name | Text | - | Name of the product |
| Product Price | Number | ≥ 0 | Price of the product in Rupees |

## Sample Products (Pre-loaded)
The application comes with 4 sample products:
- Apple - Rs.200
- Mango - Rs.80
- Orange - Rs.70
- Pineapple - Rs.80

## Technical Details

### HTML Structure
- Semantic HTML5 markup
- AngularJS directive `ng-app` to bootstrap the application
- AngularJS directive `ng-controller` to attach controller
- Input fields with `ng-model` for two-way data binding
- Button with `ng-click` to add products
- Table with `ng-repeat` to display products dynamically
- Delete button with `ng-click` to remove products
- Conditional display with `ng-if` for empty state

### AngularJS Features Used

| Feature | Purpose |
|---------|---------|
| `ng-app` | Bootstraps AngularJS application |
| `ng-controller` | Attaches controller to element |
| `ng-model` | Two-way data binding for form inputs |
| `ng-click` | Handles button click events |
| `ng-repeat` | Repeats HTML elements for array items |
| `ng-if` | Conditionally shows/hides elements |
| `{{ }}` | Expression interpolation |

### JavaScript Logic
- `addProduct()` - Validates and adds product to array
- `removeProduct(index)` - Removes product with confirmation
- `getProductCount()` - Returns total number of products
- `searchProduct(name)` - Searches for product by name

### CSS Styling
- **Header:** Blue background (#0052cc) with white text
- **Table Header:** Green background (#28a745)
- **Input Fields:** Light gray background with blue focus effect
- **Delete Button:** Red/pink styling for danger action
- **Hover Effects:** Row highlighting on hover
- **Responsive Design:** Adapts to mobile, tablet, and desktop
- **Color Scheme:**
  - Primary Blue: #0052cc
  - Success Green: #28a745
  - Danger Red: #cc0000

## Validation Rules

✓ Product name cannot be empty  
✓ Product price cannot be empty  
✓ Product price must be a positive number  
✓ Duplicate products are not allowed  
✓ Delete action requires confirmation  

## Color Scheme

| Element | Color | Hex Code | Purpose |
|---------|-------|----------|---------|
| Header Background | Blue | #0052cc | Page header |
| Table Header | Green | #28a745 | Column headers |
| Product Name | Blue | #0052cc | Product name in table |
| Product Price | Green | #28a745 | Price in table |
| Input Fields | Light Gray | #f9f9f9 | Input backgrounds |
| Delete Button | Light Red | #ffcccc | Delete action |
| Input Focus Border | Blue | #0052cc | Focus state |

## Responsive Breakpoints

| Device | Width | Changes |
|--------|-------|---------|
| Desktop | > 768px | Full layout with all elements visible |
| Tablet | 481-768px | Reduced padding and adjusted column widths |
| Mobile | ≤ 480px | Optimized for small screens with smaller fonts |

## Visual Layout

```
┌─────────────────────────────────────────────────────┐
│   Product Inventory System (Blue Header)            │
├─────────────────────────────────────────────────────┤
│                                                     │
│  Enter the Product Name:                            │
│  [        Pineapple           ]                     │
│                                                     │
│  Enter the Product Price:                           │
│  [           80               ]                     │
│                                                     │
│         [  Add Product  ]                           │
│                                                     │
│  ─────────────────────────────────────────          │
│                                                     │
│  ┌────────────────────────────────────────────┐    │
│  │ Name        │ Price      │ Remove         │    │
│  ├────────────────────────────────────────────┤    │
│  │ Apple       │ Rs.200     │ [delete]       │    │
│  │ Mango       │ Rs.80      │ [delete]       │    │
│  │ Orange      │ Rs.70      │ [delete]       │    │
│  │ Pineapple   │ Rs.80      │ [delete]       │    │
│  └────────────────────────────────────────────┘    │
│                                                     │
└─────────────────────────────────────────────────────┘
```

## Array Operations

### Adding Products
```javascript
// When "Add Product" is clicked:
// 1. Validate inputs
// 2. Check for duplicates
// 3. Push new product to array
// 4. Clear input fields
$scope.products.push({
    name: productName,
    price: productPrice
});
```

### Removing Products
```javascript
// When "[delete]" is clicked:
// 1. Show confirmation dialog
// 2. If confirmed, remove from array
// 3. UI automatically updates via ng-repeat
$scope.products.splice(index, 1);
```

### Displaying Products
```html
<!-- ng-repeat loops through products array -->
<tr ng-repeat="product in products">
    <td>{{ product.name }}</td>
    <td>Rs.{{ product.price }}</td>
    <td>
        <button ng-click="removeProduct($index)">[delete]</button>
    </td>
</tr>
```

## Requirements
- Modern web browser (Chrome, Firefox, Safari, Edge)
- AngularJS framework (loaded from CDN)
- JavaScript enabled
- No server-side requirements
- No internet required for local usage (after loading AngularJS)

## Browser Compatibility
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (Chrome Mobile, Safari iOS)

## Learning Outcomes
This project demonstrates:

**AngularJS Concepts:**
- Module creation and bootstrapping
- Controller definition and scope management
- Two-way data binding with ng-model
- Dynamic list rendering with ng-repeat
- Event handling with ng-click
- Conditional rendering with ng-if

**Array Operations:**
- Array declaration and initialization
- Array push() method to add elements
- Array splice() method to remove elements
- Array iteration and searching
- Array find() and some() methods

**JavaScript Concepts:**
- Function definition and execution
- Object creation and manipulation
- Validation logic
- DOM manipulation
- Event handling

**UI/UX Design:**
- Form design and usability
- Table layout and styling
- Responsive design principles
- User feedback and confirmation dialogs

## Key AngularJS Directives Reference

| Directive | Example | Purpose |
|-----------|---------|---------|
| `ng-app` | `<html ng-app="inventoryApp">` | Bootstrap app |
| `ng-controller` | `<body ng-controller="inventoryController">` | Attach controller |
| `ng-model` | `<input ng-model="newProduct.name">` | Data binding |
| `ng-click` | `<button ng-click="addProduct()">` | Click handler |
| `ng-repeat` | `<tr ng-repeat="product in products">` | Loop through array |
| `ng-if` | `<div ng-if="products.length === 0">` | Conditional display |

## Function Reference

### addProduct()
Validates input and adds product to inventory
```javascript
$scope.addProduct = function() {
    // Validates name and price
    // Checks for duplicates
    // Adds to products array
    // Clears input fields
}
```

### removeProduct(index)
Removes product from inventory with confirmation
```javascript
$scope.removeProduct = function(index) {
    // Shows confirmation dialog
    // Removes from array if confirmed
    // UI updates automatically
}
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Page not displaying | Ensure AngularJS CDN link is working, check browser console |
| Products not showing in table | Verify `ng-repeat` directive is correctly written |
| Add button not working | Check `ng-click="addProduct()"` is correctly bound |
| Delete not removing product | Verify `ng-click="removeProduct($index)"` is correct |
| Input fields not updating | Check `ng-model` binding is correct |
| Styles not applied | Clear browser cache, verify style.css is loading |
| AngularJS not loading | Check internet connection for CDN access |

## Testing the Application

1. **Test Adding Products:**
   - Add "Apple" with price 200 - should appear in table
   - Add "Banana" with price 50 - should be added
   - Try adding duplicate "Apple" - should show error

2. **Test Validation:**
   - Try adding empty name - should show alert
   - Try adding empty price - should show alert
   - Try negative price - should show error

3. **Test Deletion:**
   - Click [delete] on any product
   - Confirm deletion - product should disappear
   - Click [delete] and cancel - product should remain

4. **Test Responsive Design:**
   - Open on mobile device - should adjust layout
   - Resize browser window - should adapt to screen size
   - Test on tablet - should look good

## Sample Test Data

Try these products:
- Laptop - 50000
- Mouse - 500
- Keyboard - 1500
- Monitor - 15000
- USB Cable - 100

---
**Technology:** AngularJS Framework, HTML5, CSS3
**Key Concept:** Arrays and ng-repeat directive in AngularJS


# 1. Install dependencies
npm install

# 2. Start MongoDB (if running locally)
mongod

# 3. Start the server
npm start

# 4. Open browser
http://localhost:6000