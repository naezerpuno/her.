/* ============================================
   LOADING SCREEN
   ============================================ */
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');

    // Hide loading screen
    loadingScreen.classList.add('hidden');

    // Show main content
    if (mainContent) {
        mainContent.classList.remove('hidden');
    }
});

/* ============================================
   FLOATING HEARTS
   ============================================ */
const heartsContainer = document.getElementById('hearts-container');

function createHeart() {
    if (!heartsContainer) return;

    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.animationDuration = (2 + Math.random() * 2) + 's';
    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4500);
}

setInterval(createHeart, 500);

/* ============================================
   MUSIC CONTROLS
   ============================================ */
const musicBtn = document.getElementById('music-toggle');
const muteBtn = document.getElementById('mute-toggle');
const audio = document.getElementById('background-music');
let isPlaying = false;

if (musicBtn && audio) {
    musicBtn.addEventListener('click', () => {
        if (!isPlaying) {
            audio.play();
            isPlaying = true;
            musicBtn.querySelector('#music-status').textContent = "Pause Music";
        } else {
            audio.pause();
            isPlaying = false;
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
const navCards = document.querySelectorAll('.nav-card');
navCards.forEach(card => {
    card.addEventListener('click', () => {
        const page = card.getAttribute('data-page');
        if (page) {
            window.location.href = page;
        }
    });
});

/* ============================================
   BACK BUTTON
   ============================================ */
const backButtons = document.querySelectorAll('.back-btn');

backButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        window.history.back();
    });
});

/* ============================================
   DAILY MESSAGE PAGE
   ============================================ */
function initDailyPage() {
    const messageText = document.getElementById('message-text');
    const stickersContainer = document.getElementById('stickers');

    if (messageText) messageText.textContent = "Your daily message goes here. ✨";

    if (stickersContainer) {
        ['💖', '🌸', '✨'].forEach(s => {
            const span = document.createElement('span');
            span.textContent = s;
            span.classList.add('sticker');
            stickersContainer.appendChild(span);
        });
    }

    // Next/Prev navigation logic can be added here
}

/* ============================================
   MEMORIES PAGE
   ============================================ */
function initMemoriesPage() {
    const photosGrid = document.getElementById('photos-grid');
    if (!photosGrid) return;

    const samplePhotos = [
        { src: 'images/photo1.jpg', caption: 'Beach Fun', story: 'A day at the beach with friends.' },
        { src: 'images/photo2.jpg', caption: 'Sunset', story: 'Sunset vibes.' },
        { src: 'images/photo3.jpg', caption: 'Birthday', story: 'Celebrating a special day.' }
    ];

    samplePhotos.forEach(photo => {
        const card = document.createElement('div');
        card.classList.add('photo-card');

        const img = document.createElement('img');
        img.src = photo.src;
        img.alt = photo.caption;
        card.appendChild(img);

        card.addEventListener('click', () => {
            openMemory(photo);
        });

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
   VERSE PAGE
   ============================================ */
function initVersePage() {
    document.getElementById('verse-date').textContent = "November 9, 2025";
    document.getElementById('verse-reference').textContent = "Philippians 4:13";
    document.getElementById('verse-text').textContent = "I can do all things through Christ who strengthens me.";
    document.getElementById('verse-reflection').textContent = "Remember that your strength comes from faith.";
}
