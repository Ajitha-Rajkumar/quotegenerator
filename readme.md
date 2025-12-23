# Random Quote Generator

A beautiful, minimal quote generator app with dynamic background images from Unsplash. Display motivational quotes, like them, copy them, and enjoy a new scenic background with each quote!

## 🚀 Features

- **Random Quote Generation** - Display random motivational quotes with authors
- **Dynamic Background Images** - New scenic image from Unsplash loads with each quote
- **Like Button** - Like quotes and track your favorite count
- **Copy to Clipboard** - Easily copy quotes to share with others
- **Transparent Card Design** - Modern glass-morphism UI with semi-transparent card
- **Responsive Layout** - Works perfectly on mobile and desktop
- **Tailwind CSS** - Minimal, clean design using utility-first CSS

## 📋 Step-by-Step Build Guide

### Step 1: Project Setup
1. Create a folder called `quote-2` on your computer
2. Inside the folder, create three files:
   - `index.html` - Main HTML structure
   - `style.css` - Custom styling (optional, as we use Tailwind)
   - `script.js` - JavaScript functionality

### Step 2: Create the HTML Structure (index.html)
The HTML file includes:
- A background container with ID `background-body` for dynamic images
- A main container with the quote card
- Elements for quote text and author
- Buttons for: New Quote, Like, and Copy
- Tailwind CSS CDN link for styling

**Key HTML Elements:**
- `<div id="background-body">` - Container for background images
- `<div class="quote-card">` - Semi-transparent card holding the quote
- `<p id="quote-text">` - Displays the quote text
- `<p id="quote-author">` - Displays the author name
- `<button id="new-quote-btn">` - New Quote button
- `<button id="like-btn">` - Like button with heart icon
- `<button id="copy-btn">` - Copy quote button

### Step 3: Set Up Tailwind CSS Styling
The app uses Tailwind CSS for styling with these key classes:
- `bg-gradient-to-br` - Gradient background overlay
- `flex flex-col items-center justify-center` - Centering layout
- `bg-white/30` - Semi-transparent white card (30% opacity)
- `backdrop-blur-md` - Blur effect on the card
- `rounded-lg` - Rounded corners
- `text-xl, text-lg` - Font sizes
- `hover:bg-opacity-80` - Hover effects on buttons
- `transition-all duration-300` - Smooth animations

### Step 4: Create the Quotes Array (script.js)
The JavaScript file starts with:
1. **Quotes Array** - Store 20 motivational quotes with text and author
2. **DOM Elements** - Select all HTML elements using `getElementById()`
3. **State Variables** - Track `currentQuote` and `likeCount`

```javascript
const quotes = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    // ... more quotes
];
```

### Step 5: Implement Random Quote Function
Create `getRandomQuote()` function that:
1. Generates a random number between 0 and quotes array length
2. Selects a quote from the array
3. Calls `displayQuote()` to show it
4. Calls `getRandomBackgroundImage()` to load a new background

```javascript
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    currentQuote = quotes[randomIndex];
    displayQuote();
    getRandomBackgroundImage();
}
```

### Step 6: Display Quote Function
Create `displayQuote()` function that:
1. Updates the quote text element with the current quote
2. Updates the author element
3. Resets the like count to 0 for the new quote

```javascript
function displayQuote() {
    if (currentQuote) {
        quoteText.textContent = `"${currentQuote.text}"`;
        quoteAuthor.textContent = `- ${currentQuote.author}`;
        likeCount = 0;
        likeCountSpan.textContent = '0';
    }
}
```

### Step 7: Implement Background Image Loading
Create `getRandomBackgroundImage()` function that:
1. Has an array of 12 curated Unsplash image URLs
2. Selects a random image URL
3. Uses JavaScript `Image()` object to preload the image
4. Only applies the background once the image loads successfully
5. Has a fallback to beach image if loading fails
6. Adds a smooth 0.8s transition effect

```javascript
function getRandomBackgroundImage() {
    const unsplashImages = [
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&h=900&q=80&fit=crop',
        // ... more image URLs
    ];
    
    const randomImage = unsplashImages[Math.floor(Math.random() * unsplashImages.length)];
    
    const img = new Image();
    img.onload = function() {
        backgroundBody.style.transition = 'background-image 0.8s ease-in-out';
        backgroundBody.style.backgroundImage = `url('${randomImage}')`;
    };
    img.onerror = function() {
        backgroundBody.style.backgroundImage = `url('https://images.unsplash.com/...')`;
    };
    img.src = randomImage;
}
```

### Step 8: Add Like Button Functionality
Create `toggleLike()` function that:
1. Increments the `likeCount` by 1
2. Updates the like count display
3. Adds a scale animation effect (1.2x size, then back to 1x)

```javascript
function toggleLike() {
    likeCount++;
    likeCountSpan.textContent = likeCount;
    
    likeBtn.style.transform = 'scale(1.2)';
    setTimeout(() => {
        likeBtn.style.transform = 'scale(1)';
    }, 150);
}
```

### Step 9: Implement Copy to Clipboard
Create `copyToClipboard()` function that:
1. Combines quote text and author into one string
2. Uses `navigator.clipboard.writeText()` to copy to clipboard
3. Changes button text to "Copied!" for 2 seconds
4. Shows feedback to the user

```javascript
function copyToClipboard() {
    if (!currentQuote) return;
    const text = `"${currentQuote.text}" - ${currentQuote.author}`;
    navigator.clipboard.writeText(text).then(() => {
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'Copied!';
        setTimeout(() => {
            copyBtn.textContent = originalText;
        }, 2000);
    });
}
```

### Step 10: Add Event Listeners
Connect buttons to functions:
```javascript
newQuoteBtn.addEventListener('click', getRandomQuote);
likeBtn.addEventListener('click', toggleLike);
copyBtn.addEventListener('click', copyToClipboard);

// Load initial quote on page load
getRandomQuote();
```

## 🎨 Design Details

### Color Scheme
- **Background**: Gradient overlay (blue to indigo)
- **Card**: White with 30% opacity for glass effect
- **Text**: Dark gray/black for readability
- **Buttons**: Various colors for visual hierarchy

### Layout
- **Container**: `min-h-screen` (full viewport height)
- **Card**: Centered using flexbox
- **Spacing**: Padding and margin for breathing room
- **Shadows**: Subtle shadows for depth

### Animations
- **Background Transition**: 0.8s smooth fade
- **Button Hover**: Opacity and scaling effects
- **Like Button**: 150ms scale animation

## 📱 Technologies Used

- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript (Vanilla)** - No frameworks needed
- **Unsplash API** - Free high-quality images
- **Clipboard API** - Copy to clipboard functionality

## 🔧 How to Run

1. Open `index.html` in your web browser
2. Click "New Quote" button to get a random quote
3. Click the heart icon to like a quote
4. Click "Copy" to copy the quote to your clipboard
5. The background image changes automatically with each new quote

## 📚 Key JavaScript Concepts Used

- **Array Methods**: `Math.floor()`, `Math.random()`
- **DOM Manipulation**: `getElementById()`, `textContent`, `style`
- **Event Listeners**: `addEventListener()`
- **Asynchronous Loading**: `Image()` object with `onload`
- **Clipboard API**: `navigator.clipboard.writeText()`
- **Template Literals**: Backticks for string interpolation
- **Arrow Functions**: Used in `setTimeout()` callbacks

## 🚀 Potential Enhancements

- Add local storage to save favorite quotes
- Add category filters (motivation, success, happiness, etc.)
- Add keyboard shortcuts (spacebar for new quote, etc.)
- Add light/dark mode toggle
- Fetch quotes from an external API
- Add animations for quote appearance
- Add sound effects for interactions

## 📄 License

This project is open source and available for personal use.

---

**Built with ❤️ using HTML, CSS, JavaScript, and Tailwind CSS**
