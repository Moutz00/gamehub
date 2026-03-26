// Interactive JavaScript for Sports Page

const translations = {
    ar: {
        title: 'رياضة',
        home: 'الرئيسية',
        back: 'العودة للألعاب',
        football: 'كرة القدم',
        footballDesc: 'ألعاب كرة القدم مثيرة وممتعة.',
        basketball: 'كرة السلة',
        basketballDesc: 'تحديات كرة السلة لعشاق الرياضة.',
        tennis: 'التنس',
        tennisDesc: 'ألعاب تنس سريعة ومثيرة.',
        play: 'ابدأ اللعب',
        funMode: '🎲 وضع ممتع',
        clicks: 'عدد النقرات',
        footballFact: 'كرة القدم هي أكثر الرياضات شعبية في العالم!',
        basketballFact: 'كرة السلة اخترعها جيمس نايسميث في 1891.',
        tennisFact: 'التنس يساعد في تحسين التنسيق والقوة.',
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
        title: 'Sports',
        home: 'Home',
        back: 'Back to Games',
        football: 'Football',
        footballDesc: 'Exciting and fun football games.',
        basketball: 'Basketball',
        basketballDesc: 'Basketball challenges for sports enthusiasts.',
        tennis: 'Tennis',
        tennisDesc: 'Fast and exciting tennis games.',
        play: 'Start Playing',
        funMode: '🎲 Fun Mode',
        clicks: 'Click Count',
        footballFact: 'Football is the most popular sport in the world!',
        basketballFact: 'Basketball was invented by James Naismith in 1891.',
        tennisFact: 'Tennis helps improve coordination and strength.',
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

    // Language toggle button
    const header = document.querySelector('header');
    const langButton = document.createElement('button');
    langButton.style.cssText = 'margin: 10px; padding: 10px; background: #e74c3c; color: white; border: none; border-radius: 5px; cursor: pointer; font-weight: bold;';
    header.appendChild(langButton);

    function updateLanguage() {
        document.querySelector('h1').textContent = translations[currentLang].title;
        document.querySelectorAll('nav a')[0].textContent = translations[currentLang].home;
        document.querySelectorAll('nav a')[1].textContent = translations[currentLang].back;
        langButton.textContent = translations[currentLang].langButton;

        sections.forEach((section, index) => {
            const h2 = section.querySelector('h2');
            const p = section.querySelector('p');
            const button = section.querySelector('button');
            if (index === 0) {
                h2.textContent = translations[currentLang].football;
                p.textContent = translations[currentLang].footballDesc;
            } else if (index === 1) {
                h2.textContent = translations[currentLang].basketball;
                p.textContent = translations[currentLang].basketballDesc;
            } else if (index === 2) {
                h2.textContent = translations[currentLang].tennis;
                p.textContent = translations[currentLang].tennisDesc;
            }
            if (button) button.textContent = translations[currentLang].play;
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

    langButton.addEventListener('click', function() {
        currentLang = currentLang === 'ar' ? 'en' : 'ar';
        localStorage.setItem('lang', currentLang);
        updateLanguage();
    });

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
                const sport = this.querySelector('h2').textContent;
                let fact = '';
                if (sport === translations[currentLang].football || sport === 'كرة القدم') {
                    fact = translations[currentLang].footballFact;
                } else if (sport === translations[currentLang].basketball || sport === 'كرة السلة') {
                    fact = translations[currentLang].basketballFact;
                } else if (sport === translations[currentLang].tennis || sport === 'التنس') {
                    fact = translations[currentLang].tennisFact;
                }
                this.innerHTML += '<p>🎾 Fun fact: ' + fact + '</p>';
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

    // Hamburger menu functionality
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
        
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
});