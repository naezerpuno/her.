/* ============================================
   LOADING SCREEN & SHOW PAGE
   ============================================ */
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        loadingScreen.style.display = 'none';
    }

    // For index.html
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
        mainContent.style.display = 'block';
    }

    // For other pages (daily, memories, verse)
    const pageContainer = document.querySelector('.page-container');
    if (pageContainer) {
        pageContainer.style.opacity = 0;
        pageContainer.style.display = 'block';
        fadeIn(pageContainer, 800); // fade in smoothly
    }
});

/* ============================================
   SIMPLE FADE IN FUNCTION
   ============================================ */
function fadeIn(element, duration) {
    let opacity = 0;
    element.style.opacity = opacity;
    const increment = 50 / duration;

    const interval = setInterval(() => {
        opacity += increment;
        if (opacity >= 1) {
            opacity = 1;
            clearInterval(interval);
        }
        element.style.opacity = opacity;
    }, 50);
}

/* ============================================
   FLOATING HEARTS
   ============================================ */
const heartsContainer = document.getElementById('hearts-container');
if (heartsContainer) {
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.animationDuration = (2 + Math.random() * 2) + 's';
        heartsContainer.appendChild(heart);
        setTimeout(() => heart.remove(), 4500);
    }, 500);
}

/* ============================================
   MUSIC CONTROLS (if any)
   ============================================ */
const musicBtn = document.getElementById('music-toggle');
const muteBtn = document.getElementById('mute-toggle');
const audio = document.getElementById('background-music');

if (musicBtn && audio) {
    musicBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            musicBtn.querySelector('#music-status').textContent = "Pause Music";
        } else {
            audio.pause();
            musicBtn.querySelector('#music-status').textContent = "Play Music";
        }
    });
}

if (muteBtn && audio) {
    muteBtn.addEventListener('click', () => {
        audio.muted = !audio.muted;
    });
}

/* ============================================
   NAVIGATION CARDS (Landing Page)
   ============================================ */
document.querySelectorAll('.nav-card').forEach(card => {
    card.addEventListener('click', () => {
        const page = card.dataset.page;
        if (page) window.location.href = page;
    });
});

/* ============================================
   BACK BUTTON
   ============================================ */
document.querySelectorAll('.back-btn').forEach(btn => {
    btn.addEventListener('click', () => window.history.back());
});

/* ============================================
   DAILY PAGE INITIALIZATION
   ============================================ */
function initDailyPage() {
    const messageText = document.getElementById('message-text');
    const stickersContainer = document.getElementById('stickers');
    if (messageText) messageText.textContent = "Your daily message goes here 💌";
    if (stickersContainer) {
        ['💖','🌸','✨'].forEach(s => {
            const span = document.createElement('span');
            span.textContent = s;
            span.classList.add('sticker');
            stickersContainer.appendChild(span);
        });
    }
}

/* ============================================
   MEMORIES PAGE INITIALIZATION
   ============================================ */
function initMemoriesPage() {
    const photosGrid = document.getElementById('photos-grid');
    if (!photosGrid) return;

    const samplePhotos = [
        {src:'images/photo1.jpg', caption:'Beach Fun', story:'A fun day at the beach'},
        {src:'images/photo2.jpg', caption:'Sunset', story:'Sunset vibes'},
        {src:'images/photo3.jpg', caption:'Birthday', story:'Celebrating a special day'}
    ];

    samplePhotos.forEach(photo => {
        const card = document.createElement('div');
        card.classList.add('photo-card');
        const img = document.createElement('img');
        img.src = photo.src;
        img.alt = photo.caption;
        card.appendChild(img);
        card.addEventListener('click', () => openMemory(photo));
        photosGrid.appendChild(card);
    });
}

function openMemory(photo) {
    const expanded = document.getElementById('expanded-memory');
    if (!expanded) return;
    expanded.classList.remove('hidden');
    document.getElementById('expanded-image').src = photo.src;
    document.getElementById('expanded-caption').textContent = photo.caption;
    document.getElementById('expanded-story').textContent = photo.story;

    const music = document.getElementById('memory-music');
    if (music) music.play();
}

function closeMemory() {
    const expanded = document.getElementById('expanded-memory');
    if (!expanded) return;
    expanded.classList.add('hidden');

    const music = document.getElementById('memory-music');
    if (music) music.pause();
}

/* ============================================
   VERSE PAGE INITIALIZATION
   ============================================ */
function initVersePage() {
    document.getElementById('verse-date').textContent = "November 9, 2025";
    document.getElementById('verse-reference').textContent = "Philippians 4:13";
    document.getElementById('verse-text').textContent = "I can do all things through Christ who strengthens me.";
    document.getElementById('verse-reflection').textContent = "Remember that your strength comes from faith.";
}
