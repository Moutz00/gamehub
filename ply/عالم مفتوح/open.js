// JavaScript for Open World Games Page

document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    if (!localStorage.getItem('currentUser')) {
        window.location.href = '../log.html';
    }

    // Language toggle
    document.getElementById('lang-toggle').addEventListener('click', function() {
        const currentLang = localStorage.getItem('lang') || 'ar';
        const newLang = currentLang === 'ar' ? 'en' : 'ar';
        localStorage.setItem('lang', newLang);
        location.reload();
    });

    // Logout button functionality
    document.getElementById('logout-btn').addEventListener('click', function() {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('lang');
        window.location.href = '../log.html';
    });

    // Add hover effect to game articles
    const gameArticles = document.querySelectorAll('.game-article');
    gameArticles.forEach(article => {
        article.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-20px)';
        });
        article.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add click event for articles
    gameArticles.forEach((article, index) => {
        article.addEventListener('click', function() {
            const title = this.querySelector('.game-header-section h2').textContent;
            console.log(`Clicked on: ${title}`);
        });
    });
});
    ar: {
        title: 'عالم مفتوح',
        home: 'الرئيسية',
        back: 'العودة للألعاب',
        explore: 'استكشاف',
        exploreDesc: 'اكتشف عالمًا واسعًا مليئًا بالمغامرات.',
        challenges: 'تحديات',
        challengesDesc: 'مهام واتحديات ستضع مهاراتك على المحك.',
        secrets: 'أسرار',
        secretsDesc: 'اكتشف الأسرار الخفية واحصل على مكافآت.',
        play: 'ابدأ اللعب',
        funMode: '🎲 وضع ممتع',
        clicks: 'عدد النقرات',
        exploreFact: 'العوالم المفتوحة تمنح حرية استكشاف لا محدودة.',
        challengesFact: 'التحديات تحسن مهاراتك في اللعب والتفكير.',
        secretsFact: 'الأسرار مخبأة في كل زاوية من الخريطة.',
        welcome: 'مرحباً! أنت الآن تستكشف',
        enjoy: 'استمتع بالمغامرة!',
        langButton: '🌐 English',
        game1Title: 'GTA 5',
        game1Desc: 'لعبة عالم مفتوح تدور حول عصابة من ثلاثة مجرمين في مدينة لوس سانتوس؛ تتيح لك التنقل بحرية في المدينة والاستمتاع بالمهام العنيفة والسباقات والتحديات مع قدرة على التبديل بين الشخصيات.',
        game2Title: 'RDR 2',
        game2Desc: 'لعبة مغامرات غربي في عالم مفتوح ضخم مليء بالطبيعة الخلابة، والمهام المثيرة، والعلاقات بين الشخصيات؛ تعيش فيها دور الخارج عن القانون في نهاية عصر الغرب المتوحش.',
        game3Title: 'The Elder Scrolls V: Skyrim',
        game3Desc: 'لعبة عالم مفتوح فانتازي تتيح لك استكشاف عالم تمبلوريا، قتال التنانين، تعلم السحر، وصنع الأسلحة والدروع في عالم مليء بالمغامرات والأسرار.'
    },
    en: {
        title: 'Open World',
        home: 'Home',
        back: 'Back to Games',
        explore: 'Explore',
        exploreDesc: 'Discover a vast world full of adventures.',
        challenges: 'Challenges',
        challengesDesc: 'Tasks and challenges that test your skills.',
        secrets: 'Secrets',
        secretsDesc: 'Find hidden secrets and earn rewards.',
        play: 'Start Playing',
        funMode: '🎲 Fun Mode',
        clicks: 'Click Count',
        exploreFact: 'Open worlds give you unlimited freedom to explore.',
        challengesFact: 'Challenges improve your gameplay and thinking skills.',
        secretsFact: 'Secrets are hidden in every corner of the map.',
        welcome: 'Welcome! You are now exploring',
        enjoy: 'Enjoy the adventure!',
        langButton: '🌐 العربية',
        game1Title: 'GTA 5',
        game1Desc: 'An open-world game revolving around a gang of three criminals in the city of Los Santos; it allows you to navigate freely in the city and enjoy violent missions, races, and challenges with the ability to switch between characters.',
        game2Title: 'RDR 2',
        game2Desc: 'A western adventure game in a vast open world full of beautiful nature, exciting quests, and character relationships; you live as an outlaw at the end of the Wild West era.',
        game3Title: 'The Elder Scrolls V: Skyrim',
        game3Desc: 'A fantasy open-world game that allows you to explore the world of Tamriel, fight dragons, learn magic, and craft weapons and armor in a world full of adventures and secrets.',
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
                h2.textContent = translations[currentLang].game1Title;
                p.textContent = translations[currentLang].game1Desc;
            } else if (index === 1) {
                h2.textContent = translations[currentLang].game2Title;
                p.textContent = translations[currentLang].game2Desc;
            } else if (index === 2) {
                h2.textContent = translations[currentLang].game3Title;
                p.textContent = translations[currentLang].game3Desc;
            }
            if (button) button.textContent = translations[currentLang].play;
        });

        // Update counter text
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

    updateLanguage(); // Initial language load

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
            e.stopPropagation();
            const topic = section.querySelector('h2').textContent;
            alert(`${translations[currentLang].welcome} ${topic}. ${translations[currentLang].enjoy}`);
        });

        section.addEventListener('click', function() {
            this.classList.toggle('clicked');
            if (this.classList.contains('clicked')) {
                const topic = section.querySelector('h2').textContent;
                let fact = '';
                if (topic === translations[currentLang].game1Title) {
                    fact = translations[currentLang].exploreFact;
                } else if (topic === translations[currentLang].game2Title) {
                    fact = translations[currentLang].challengesFact;
                } else if (topic === translations[currentLang].game3Title) {
                    fact = translations[currentLang].secretsFact;
                }
                this.innerHTML += '<p>🎮 Fun fact: ' + fact + '</p>';
            } else {
                const paras = this.querySelectorAll('p');
                if (paras.length > 1) {
                    paras[paras.length - 1].remove();
                }
            }
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
});
