// Interactive JavaScript for Login Page

const translations = {
    ar: {
        title: 'Game Hub',
        home: 'الرئيسية',
        games: 'الألعاب',
        login: 'تسجيل الدخول',
        register: 'إنشاء حساب',
        loginTitle: 'تسجيل الدخول',
        registerTitle: 'إنشاء حساب',
        email: 'البريد الإلكتروني',
        password: 'كلمة المرور',
        confirmPassword: 'تأكيد كلمة المرور',
        username: 'اسم المستخدم',
        loginBtn: 'دخول',
        registerBtn: 'إنشاء',
        langButton: '🌐 English',
        loginSuccess: 'تم تسجيل الدخول بنجاح!',
        registerSuccess: 'تم إنشاء الحساب بنجاح!',
        invalidCredentials: 'بيانات غير صحيحة',
        passwordsNotMatch: 'كلمات المرور غير متطابقة',
        userExists: 'المستخدم موجود بالفعل',
        fillAllFields: 'يرجى ملء جميع الحقول',
        or: 'أو',
        googleLogin: 'تسجيل الدخول باستخدام Google',
        captchaError: 'إجابة التحقق غير صحيحة'
    },
    en: {
        title: 'Game Hub',
        home: 'Home',
        games: 'Games',
        login: 'Login',
        register: 'Register',
        loginTitle: 'Login',
        registerTitle: 'Create Account',
        email: 'Email',
        password: 'Password',
        confirmPassword: 'Confirm Password',
        username: 'Username',
        loginBtn: 'Login',
        registerBtn: 'Create',
        langButton: '🌐 العربية',
        loginSuccess: 'Login successful!',
        registerSuccess: 'Account created successfully!',
        invalidCredentials: 'Invalid credentials',
        passwordsNotMatch: 'Passwords do not match',
        userExists: 'User already exists',
        fillAllFields: 'Please fill all fields',
        or: 'or',
        googleLogin: 'Sign in with Google',
        captchaError: 'Incorrect verification answer'
    }
};

let currentLang = localStorage.getItem('lang') || 'ar';

// CAPTCHA variables
let loginCaptchaAnswer = 0;
let registerCaptchaAnswer = 0;

function generateCaptcha() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operators = ['+', '-', '*'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    let answer;
    switch (operator) {
        case '+': answer = num1 + num2; break;
        case '-': answer = num1 - num2; break;
        case '*': answer = num1 * num2; break;
    }
    return { question: `${num1} ${operator} ${num2} = ?`, answer };
}

document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    // Language toggle
    document.getElementById('lang-toggle').addEventListener('click', function() {
        currentLang = currentLang === 'ar' ? 'en' : 'ar';
        localStorage.setItem('lang', currentLang);
        updateLanguage();
    });

    // Form toggle
    loginBtn.addEventListener('click', function() {
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
        loginBtn.classList.add('active');
        registerBtn.classList.remove('active');
        // Generate new CAPTCHA for login
        const loginCaptcha = generateCaptcha();
        document.getElementById('login-captcha-label').textContent = loginCaptcha.question;
        loginCaptchaAnswer = loginCaptcha.answer;
    });

    registerBtn.addEventListener('click', function() {
        registerForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
        registerBtn.classList.add('active');
        loginBtn.classList.remove('active');
        // Generate new CAPTCHA for register
        const registerCaptcha = generateCaptcha();
        document.getElementById('register-captcha-label').textContent = registerCaptcha.question;
        registerCaptchaAnswer = registerCaptcha.answer;
    });

    // Generate initial CAPTCHAs
    const initialLoginCaptcha = generateCaptcha();
    document.getElementById('login-captcha-label').textContent = initialLoginCaptcha.question;
    loginCaptchaAnswer = initialLoginCaptcha.answer;

    const initialRegisterCaptcha = generateCaptcha();
    document.getElementById('register-captcha-label').textContent = initialRegisterCaptcha.question;
    registerCaptchaAnswer = initialRegisterCaptcha.answer;

    // Google login
    document.getElementById('google-login').addEventListener('click', function() {
        // Simulate Google login (in real app, integrate Google OAuth)
        const googleUser = {
            username: 'Google User',
            email: 'google@example.com'
        };
        localStorage.setItem('currentUser', JSON.stringify(googleUser));
        alert(translations[currentLang].loginSuccess);
        window.location.href = 'play.html'; // Redirect to games
    });

    // Login form submit
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        const captchaInput = document.getElementById('login-captcha').value;
        const error = document.getElementById('login-error');

        if (!email || !password || !captchaInput) {
            error.textContent = translations[currentLang].fillAllFields;
            return;
        }

        if (parseInt(captchaInput) !== loginCaptchaAnswer) {
            error.textContent = translations[currentLang].captchaError;
            // Generate new CAPTCHA
            const newCaptcha = generateCaptcha();
            document.getElementById('login-captcha-label').textContent = newCaptcha.question;
            loginCaptchaAnswer = newCaptcha.answer;
            document.getElementById('login-captcha').value = '';
            return;
        }

        // Simple mock login (in real app, check against server)
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            alert(translations[currentLang].loginSuccess);
            window.location.href = 'play.html'; // Redirect to games
        } else {
            error.textContent = translations[currentLang].invalidCredentials;
        }
    });

    // Register form submit
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('register-username').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        const confirm = document.getElementById('register-confirm').value;
        const captchaInput = document.getElementById('register-captcha').value;
        const error = document.getElementById('register-error');

        if (!username || !email || !password || !confirm || !captchaInput) {
            error.textContent = translations[currentLang].fillAllFields;
            return;
        }

        if (parseInt(captchaInput) !== registerCaptchaAnswer) {
            error.textContent = translations[currentLang].captchaError;
            // Generate new CAPTCHA
            const newCaptcha = generateCaptcha();
            document.getElementById('register-captcha-label').textContent = newCaptcha.question;
            registerCaptchaAnswer = newCaptcha.answer;
            document.getElementById('register-captcha').value = '';
            return;
        }

        if (password !== confirm) {
            error.textContent = translations[currentLang].passwordsNotMatch;
            return;
        }

        // Check if user exists
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        if (users.find(u => u.email === email)) {
            error.textContent = translations[currentLang].userExists;
            return;
        }

        // Save user
        users.push({ username, email, password });
        localStorage.setItem('users', JSON.stringify(users));
        alert(translations[currentLang].registerSuccess);
        // Switch to login
        loginBtn.click();
    });

    function updateLanguage() {
        document.querySelector('h1').textContent = translations[currentLang].title;
        document.getElementById('lang-toggle').textContent = translations[currentLang].langButton;

        loginBtn.textContent = translations[currentLang].login;
        registerBtn.textContent = translations[currentLang].register;

        document.querySelector('#login-form h2').textContent = translations[currentLang].loginTitle;
        document.querySelector('#register-form h2').textContent = translations[currentLang].registerTitle;

        document.getElementById('login-email').placeholder = translations[currentLang].email;
        document.getElementById('login-password').placeholder = translations[currentLang].password;
        document.querySelector('#login-form button').textContent = translations[currentLang].loginBtn;

        document.getElementById('register-username').placeholder = translations[currentLang].username;
        document.getElementById('register-email').placeholder = translations[currentLang].email;
        document.getElementById('register-password').placeholder = translations[currentLang].password;
        document.getElementById('register-confirm').placeholder = translations[currentLang].confirmPassword;
        document.querySelector('#register-form button').textContent = translations[currentLang].registerBtn;

        document.querySelector('.social-login p').textContent = translations[currentLang].or;
        document.getElementById('google-login').textContent = translations[currentLang].googleLogin;
        // Re-add the icon since textContent removes it
        const googleBtn = document.getElementById('google-login');
        googleBtn.innerHTML = '<img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" width="20" height="20"> ' + translations[currentLang].googleLogin;
    }

    updateLanguage(); // Initial load
});
