// Interactive JavaScript for GameHub Plays Page

const translations = {
    ar: {
        title: 'plays',
        home: 'الصفحة الرئيسية',
        contact: 'تواصل معنا',
        openWorld: 'عالم مفتوح',
        arcade: 'اركيد',
        sports: 'رياضة',
        funMode: '🎲 Fun Mode',
        clicks: 'عدد النقرات',
        langButton: '🌐 English',
        randomFact: '🎲 حقيقة عشوائية',
        randomFacts: [
            'GTA 5 has sold over 180 million copies worldwide!',
            'Red Dead Redemption 2 took 8 years to develop.',
            'Minecraft has over 140 million active players.',
            'The Witcher 3 won over 250 Game of the Year awards.',
            'Assassin\'s Creed Valhalla is set in the Viking Age.',
            'Cyberpunk 2077 was delayed multiple times due to its complexity.',
            'Skyrim has over 600 hours of gameplay on average.',
            'Pac-Man was created in 1980 and is still popular today.',
            'Tetris was invented in the Soviet Union.',
            'Space Invaders revolutionized the gaming industry.'
        ]
    },
    en: {
        title: 'Plays',
        home: 'Home',
        contact: 'Contact Us',
        openWorld: 'Open World',
        arcade: 'Arcade',
        sports: 'Sports',
        funMode: '🎲 Fun Mode',
        clicks: 'Click Count',
        langButton: '🌐 العربية',
        randomFact: '🎲 Random Fact',
        randomFacts: [
            'GTA 5 has sold over 180 million copies worldwide!',
            'Red Dead Redemption 2 took 8 years to develop.',
            'Minecraft has over 140 million active players.',
            'The Witcher 3 won over 140 million active players.',
            'The Witcher 3 won over 250 Game of the Year awards.',
            'Assassin\'s Creed Valhalla is set in the Viking Age.',
            'Cyberpunk 2077 was delayed multiple times due to its complexity.',
            'Skyrim has over 600 hours of gameplay on average.',
            'Pac-Man was created in 1980 and is still popular today.',
            'Tetris was invented in the Soviet Union.',
            'Space Invaders revolutionized the gaming industry.'
        ]
    }
};

let currentLang = localStorage.getItem('lang') || 'ar';

function updateLanguage() {
    document.querySelector('h1').textContent = translations[currentLang].title;
    document.querySelectorAll('nav a')[0].textContent = translations[currentLang].home;
    document.querySelectorAll('nav a')[1].textContent = translations[currentLang].contact;
    document.getElementById('lang-toggle').textContent = translations[currentLang].langButton;

    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        const h2 = section.querySelector('h2');
        if (index === 0) {
            h2.textContent = translations[currentLang].openWorld;
        } else if (index === 1) {
            h2.textContent = translations[currentLang].arcade;
        } else if (index === 2) {
            h2.textContent = translations[currentLang].sports;
        }
    });

    // Update counter
    const counter = document.querySelector('div[style*="position: fixed"]');
    if (counter) {
        const count = counter.textContent.split(': ')[1];
        counter.textContent = `${translations[currentLang].clicks}: ${count}`;
    }

    // Update random fact button
    const randomBtn = document.getElementById('random-fact-btn');
    if (randomBtn) {
        randomBtn.textContent = translations[currentLang].randomFact;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Language toggle
    document.getElementById('lang-toggle').addEventListener('click', function() {
        currentLang = currentLang === 'ar' ? 'en' : 'ar';
        localStorage.setItem('lang', currentLang);
        updateLanguage();
    });

    updateLanguage(); // Initial load

    // Logout button functionality
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            localStorage.removeItem('currentUser');
            localStorage.removeItem('lang');
            window.location.href = 'log.html';
        });
    }

    // Check if user is logged in
    const randomFactButton = document.createElement('button');
    randomFactButton.id = 'random-fact-btn';
    randomFactButton.textContent = translations[currentLang].randomFact;
    randomFactButton.style.cssText = 'position: fixed; bottom: 20px; right: 20px; padding: 12px 18px; background: linear-gradient(135deg, #ff6b6b, #ffa726); color: white; border: none; border-radius: 50px; cursor: pointer; font-weight: bold; box-shadow: 0 4px 12px rgba(0,0,0,0.3); transition: all 0.3s ease; z-index: 1000; font-size: 14px;';
    document.body.appendChild(randomFactButton);

    randomFactButton.addEventListener('click', function() {
        const facts = translations[currentLang].randomFacts;
        const randomFact = facts[Math.floor(Math.random() * facts.length)];
        alert(randomFact);
        // Animate the button
        this.style.transform = 'scale(1.2) rotate(10deg)';
        setTimeout(() => {
            this.style.transform = 'scale(1) rotate(0deg)';
        }, 300);
    });

    // Add click event to sections for interaction
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.addEventListener('click', function() {
            this.classList.toggle('clicked');
            if (this.classList.contains('clicked')) {
                this.innerHTML += '<p>🎮 Fun fact: Gaming improves problem-solving skills!</p>';
            } else {
                // Remove the added paragraph
                const paras = this.querySelectorAll('p');
                if (paras.length > 1) {
                    paras[paras.length - 1].remove();
                }
            }
        });
    });

    // Add scroll animation
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        document.body.style.backgroundPosition = `0px ${rate}px`;
    });
});

    // Add hover effect to nav links with sound-like feedback (visual)
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.color = '#ff6b6b';
        });
        link.addEventListener('mouseleave', function() {
            this.style.color = 'white';
        });
    });
    
    // Hamburger Menu
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
        
        // Close menu when link is clicked
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
};