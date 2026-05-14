# Calculator Application Documentation

## Overview
This is a web-based calculator application built with HTML, CSS, and JavaScript. It provides a user-friendly interface for performing basic mathematical operations including addition, subtraction, multiplication, division, and modulo calculations.

---

## Project Structure

### Files
- **index.html** - Main HTML file containing the calculator UI
- **style.css** - Stylesheet for visual design and layout
- **script.js** - JavaScript file containing calculation logic and event handling

---

## HTML Structure (index.html)

### Document Head
```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calc</title>
    <link rel="stylesheet" href="style.css">
    <link rel="icon" href="C:\Users\uganr\Downloads\calc.png" type="image/icon type">
</head>
```

**Elements:**
- **charset**: UTF-8 encoding for character support
- **viewport**: Responsive design meta tag for mobile compatibility
- **title**: Page title displayed in browser tab
- **stylesheet**: Links to external CSS file for styling
- **favicon**: Browser tab icon (note: file path is local; should be relative to web root)

### Document Body

#### Header
```html
<h2>Calculator</h2>
```
Main heading displaying "Calculator"

#### Container Section
```html
<section class="container">
```

**Main Container Elements:**

1. **Display Area**
   ```html
   <textarea class="ta"></textarea>
   ```
   - Displays current input and calculation results
   - Users can view their input before pressing equals

2. **Button Grid**
   ```html
   <div class="boxes">
   ```
   A 4-column grid layout containing calculator buttons

---

## Button Layout

### Button Categories

#### Function Buttons (Special Styling - Class: `dif`)
- **C** - Clear display and reset calculator
- **Del** - Delete last entered digit/character
- **/** - Division operator
- **X** - Multiplication operator (displays as "X")
- **+** - Addition operator
- **Mod** - Modulo (remainder) operator

#### Number Buttons
- **0, 1, 2, 3, 4, 5, 6, 7, 8, 9** - Digit input
- **00** - Quick entry for double zeros
- **.** - Decimal point for floating-point numbers

#### Special Buttons
- **=** (Class: `equal`) - Execute calculation and display result

### Button Grid Layout
```
[C]   [Del]  [/]   [X]
[7]   [8]    [9]   [-]
[4]   [5]    [6]   [+]
[1]   [2]    [3]   [Mod]
[0]   [00]   [.]   [=]
```

---

## Event Handling

### Event Handler: `change(event)`
All buttons trigger the `change()` function defined in **script.js** when clicked.

```html
onclick="change(event)"
```

**Parameters:**
- `event` - Click event object passed from button click

**Functionality:**
- Captures button value/text
- Appends to display (textarea)
- Performs calculations (for operators and equals)
- Handles special functions (C, Del, Mod)

---

## Supported Operations

| Operation | Button | Symbol |
|-----------|--------|--------|
| Addition | + | + |
| Subtraction | - | - |
| Multiplication | X | * |
| Division | / | / |
| Modulo | Mod | % |
| Decimal | . | . |

---

## Usage Instructions

1. **Enter Numbers**: Click number buttons (0-9) to build your number
2. **Select Operation**: Click an operator button (+, -, X, /, Mod)
3. **Enter Second Number**: Click number buttons for the next value
4. **Calculate**: Press the = button to see the result
5. **Clear**: Press C to reset everything
6. **Delete**: Press Del to remove the last character
7. **Decimal Values**: Use the . button for floating-point numbers

---

## Known Issues & Notes

### Current Issues
1. **Icon Path**: The favicon uses a hardcoded local Windows path (`C:\Users\uganr\Downloads\calc.png`) 
   - **Fix**: Should use a relative path (e.g., `./calc.png` or `./assets/calc.png`)
   
2. **HTML Markup Error**: Missing closing tag
   - Line 11 has `<textarea>` but closing `</div>` on next line
   - **Fix**: Should be `</textarea></div>`

3. **Favicon Type**: MIME type appears incorrect
   - Current: `type="image?icon type"`
   - **Recommended**: `type="image/png"` or `type="image/x-icon"`

### Accessibility Considerations
- Consider adding `aria-label` attributes to buttons for screen readers
- Add `title` attributes for button tooltips
- Ensure proper contrast ratios for button styling

---

## Dependencies

- **External CSS**: Requires `style.css` in same directory
- **External JavaScript**: Requires `script.js` in same directory
- **No External Libraries**: Uses vanilla HTML, CSS, and JavaScript

---

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design enabled via viewport meta tag
- JavaScript required for full functionality

---

## Future Improvements

1. Fix hardcoded icon path
2. Add keyboard support (number pad and operators)
3. Add calculation history
4. Implement advanced operations (square root, power, percentage)
5. Add dark mode toggle
6. Improve accessibility with ARIA labels
7. Add input validation and error handling
8. Create a PWA version for offline use

---

## Developer Notes

- All calculations are handled by the `change()` function in **script.js**
- The textarea serves as both input field and display
- Button styling is managed through CSS classes: `dif` (special buttons) and `equal` (result button)
- Standard calculator button grid (5 rows × 4 columns)

---

## Support

For issues or questions about this calculator, please check:
1. Browser console for JavaScript errors
2. Ensure all linked files (style.css, script.js) are present
3. Verify file paths are correct relative to index.html
