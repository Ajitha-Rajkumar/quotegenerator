// Array of motivational quotes
const quotes = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "Innovation distinguishes between a leader and a follower.",
        author: "Steve Jobs"
    },
    {
        text: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        text: "It is during our darkest moments that we must focus to see the light.",
        author: "Aristotle"
    },
    {
        text: "The only impossible journey is the one you never begin.",
        author: "Tony Robbins"
    },
    {
        text: "In the middle of difficulty lies opportunity.",
        author: "Albert Einstein"
    },
    {
        text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        text: "The best time to plant a tree was 20 years ago. The second best time is now.",
        author: "Chinese Proverb"
    },
    {
        text: "Your time is limited, don't waste it living someone else's life.",
        author: "Steve Jobs"
    },
    {
        text: "The purpose of our lives is to be happy.",
        author: "Dalai Lama"
    },
    {
        text: "Get busy living or get busy dying.",
        author: "Stephen King"
    },
    {
        text: "You have within you right now, everything you need to deal with whatever the world can throw at you.",
        author: "Brian Tracy"
    },
    {
        text: "Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.",
        author: "Roy T. Bennett"
    },
    {
        text: "I learned that courage was not the absence of fear, but the triumph over it.",
        author: "Nelson Mandela"
    },
    {
        text: "The only limit to our realization of tomorrow is our doubts of today.",
        author: "Franklin D. Roosevelt"
    },
    {
        text: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius"
    },
    {
        text: "Everything you want is on the other side of fear.",
        author: "Jack Canfield"
    },
    {
        text: "Believe in the process and trust the timing.",
        author: "Unknown"
    }
];

// Current quote
let currentQuote = null;
let likeCount = 0;

// DOM Elements
const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('new-quote-btn');
const likeBtn = document.getElementById('like-btn');
const likeCountSpan = document.getElementById('like-count');
const copyBtn = document.getElementById('copy-btn');
const backgroundBody = document.getElementById('background-body');

// Function to get random background image from Unsplash
function getRandomBackgroundImage() {
    // Array of specific Unsplash image URLs for reliable loading
    const unsplashImages = [
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&h=900&q=80&fit=crop', // Beach
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&q=80&fit=crop', // Mountains
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&h=900&q=80&fit=crop', // Forest
        'https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=1600&h=900&q=80&fit=crop', // Ocean wave
        'https://images.unsplash.com/photo-1469022563149-aa64dbd37dae?w=1600&h=900&q=80&fit=crop', // Sunset
        'https://images.unsplash.com/photo-1502933691298-84fc14542831?w=1600&h=900&q=80&fit=crop', // Sky clouds
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&q=80&fit=crop', // Mountain landscape
        'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1600&h=900&q=80&fit=crop', // Desert
        'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1600&h=900&q=80&fit=crop', // Waves
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&q=80&fit=crop', // Scenic hills
        'https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?w=1600&h=900&q=80&fit=crop', // Mountain lake
        'https://images.unsplash.com/photo-1426604966848-d7bcdd5735a9?w=1600&h=900&q=80&fit=crop'  // Mountain peaks
    ];
    
    const randomImage = unsplashImages[Math.floor(Math.random() * unsplashImages.length)];
    
    // Preload the image to ensure it loads properly
    const img = new Image();
    img.onload = function() {
        backgroundBody.style.transition = 'background-image 0.8s ease-in-out';
        backgroundBody.style.backgroundImage = `url('${randomImage}')`;
    };
    img.onerror = function() {
        // If image fails to load, try the beach image as fallback
        backgroundBody.style.backgroundImage = `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&h=900&q=80&fit=crop')`;
    };
    img.src = randomImage;
}

// Function to get random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    currentQuote = quotes[randomIndex];
    displayQuote();
    getRandomBackgroundImage();
}

// Function to display quote
function displayQuote() {
    if (currentQuote) {
        quoteText.textContent = `"${currentQuote.text}"`;
        quoteAuthor.textContent = `- ${currentQuote.author}`;
        // Reset like count for new quote
        likeCount = 0;
        likeCountSpan.textContent = '0';
    }
}

// Function to toggle like
function toggleLike() {
    likeCount++;
    likeCountSpan.textContent = likeCount;
    
    // Add animation effect
    likeBtn.style.transform = 'scale(1.2)';
    setTimeout(() => {
        likeBtn.style.transform = 'scale(1)';
    }, 150);
}

// Function to copy quote
function copyToClipboard() {
    if (!currentQuote) return;
    const text = `"${currentQuote.text}" - ${currentQuote.author}`;
    navigator.clipboard.writeText(text).then(() => {
        // Change button text temporarily
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'Copied!';
        setTimeout(() => {
            copyBtn.textContent = originalText;
        }, 2000);
    }).catch(() => {
        alert('Failed to copy quote');
    });
}

// Event Listeners
newQuoteBtn.addEventListener('click', getRandomQuote);
likeBtn.addEventListener('click', toggleLike);
copyBtn.addEventListener('click', copyToClipboard);

// Load initial quote
getRandomQuote();
