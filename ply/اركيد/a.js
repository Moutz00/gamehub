// Interactive JavaScript for Arcade Page

const translations = {
    ar: {
        title: 'اركيد',
        home: 'الرئيسية',
        back: 'العودة للألعاب',
        pacman: 'باك مان',
        pacmanDesc: 'لعبة باك مان الكلاسيكية الممتعة.',
        tetris: 'تيتريس',
        tetrisDesc: 'تحدي ترتيب القطع في تيتريس.',
        space: 'سبيس إنفيدرز',
        spaceDesc: 'دفاع عن الأرض من الغزاة الفضائيين.',
        play: 'ابدأ اللعب',
        funMode: '🎲 وضع ممتع',
        clicks: 'عدد النقرات',
        pacmanFact: 'باك مان هو أحد أشهر ألعاب الفيديو في التاريخ!',
        tetrisFact: 'تيتريس اخترع في الاتحاد السوفيتي عام 1984.',
        spaceFact: 'سبيس إنفيدرز أحد أوائل ألعاب الرماية.',
        welcome: 'مرحباً! أنت الآن تلعب',
        enjoy: 'استمتع باللعبة!',
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
        title: 'Arcade',
        home: 'Home',
        back: 'Back to Games',
        pacman: 'Pac-Man',
        pacmanDesc: 'The classic fun Pac-Man game.',
        tetris: 'Tetris',
        tetrisDesc: 'The challenge of arranging pieces in Tetris.',
        space: 'Space Invaders',
        spaceDesc: 'Defend Earth from space invaders.',
        play: 'Start Playing',
        funMode: '🎲 Fun Mode',
        clicks: 'Click Count',
        pacmanFact: 'Pac-Man is one of the most famous video games in history!',
        tetrisFact: 'Tetris was invented in the Soviet Union in 1984.',
        spaceFact: 'Space Invaders is one of the first shooting games.',
        welcome: 'Welcome! You are now playing',
        enjoy: 'Enjoy the game!',
        langButton: '🌐 العربية',
        randomFact: '🎲 Random Fact',
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
    }
};

let currentLang = localStorage.getItem('lang') || 'ar';

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    // Add click event to sections for interaction
    sections.forEach(section => {
        // Add a play button to each section
        const playButton = document.createElement('button');
        playButton.style.cssText = 'margin-top: 10px; padding: 8px 16px; background: #3498db; color: white; border: none; border-radius: 5px; cursor: pointer; font-weight: bold;';
        section.appendChild(playButton);

        playButton.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent section click
            const sport = section.querySelector('h2').textContent;
            alert(`${translations[currentLang].welcome} ${sport}. ${translations[currentLang].enjoy}`);
        });

        section.addEventListener('click', function() {
            this.classList.toggle('clicked');
            if (this.classList.contains('clicked')) {
                const sport = section.querySelector('h2').textContent;
                let fact = '';
                if (sport === translations[currentLang].pacman || sport === 'باك مان') {
                    fact = translations[currentLang].pacmanFact;
                } else if (sport === translations[currentLang].tetris || sport === 'تيتريس') {
                    fact = translations[currentLang].tetrisFact;
                } else if (sport === translations[currentLang].space || sport === 'سبيس إنفيدرز') {
                    fact = translations[currentLang].spaceFact;
                }
                this.innerHTML += '<p>🎮 Fun fact: ' + fact + '</p>';
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

    // Add hover effects for sections
    sections.forEach(section => {
        section.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) rotate(1deg)';
            this.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
        });
        section.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
            this.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
        });
    });

    // Language toggle
    document.getElementById('lang-toggle').addEventListener('click', function() {
        currentLang = currentLang === 'ar' ? 'en' : 'ar';
        localStorage.setItem('lang', currentLang);
        updateLanguage();
    });

    function updateLanguage() {
        document.querySelector('h1').textContent = translations[currentLang].title;
        document.querySelectorAll('nav a')[0].textContent = translations[currentLang].home;
        document.querySelectorAll('nav a')[1].textContent = translations[currentLang].back;
        document.getElementById('lang-toggle').textContent = translations[currentLang].langButton;

        sections.forEach((section, index) => {
            const h2 = section.querySelector('h2');
            const p = section.querySelector('p');
            const button = section.querySelector('button');
            if (index === 0) {
                h2.textContent = translations[currentLang].pacman;
                p.textContent = translations[currentLang].pacmanDesc;
            } else if (index === 1) {
                h2.textContent = translations[currentLang].tetris;
                p.textContent = translations[currentLang].tetrisDesc;
            } else if (index === 2) {
                h2.textContent = translations[currentLang].space;
                p.textContent = translations[currentLang].spaceDesc;
            }
            if (button) button.textContent = translations[currentLang].play;
        });

        // Update random fact button
        const randomBtn = document.getElementById('random-fact-btn');
        if (randomBtn) {
            randomBtn.textContent = translations[currentLang].randomFact;
        }

        // Update counter
        const cnt = document.querySelector('div[style*="position: fixed"]');
        if (cnt) {
            const count = cnt.textContent.split(': ')[1];
            cnt.textContent = `${translations[currentLang].clicks}: ${count}`;
        }
    }

    updateLanguage(); // Initial load

    // Add a random fact button
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

    // Add CSS for bounce animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-10px); }
            60% { transform: translateY(-5px); }
        }
    `;
    document.head.appendChild(style);

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
});
