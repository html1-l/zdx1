// 检查用户是否已登录
function checkAuth() {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
        showLoginModal();
        return false;
    }
    return true;
}

// 显示登录模态框
function showLoginModal() {
    const modal = document.getElementById('loginModal');
    if (modal) {
        modal.style.display = 'flex';
    }
}

// 隐藏登录模态框
function hideLoginModal() {
    const modal = document.getElementById('loginModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// 初始化登录表单
function initLoginForm() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const errorMessage = document.getElementById('errorMessage');
            
            if (username === 'zdx' && password === '123') {
                sessionStorage.setItem('isLoggedIn', 'true');
                hideLoginModal();
                location.reload(); // 刷新页面以加载受保护的内容
            } else {
                errorMessage.style.display = 'block';
            }
        });
    }
}

// 退出登录
function logout() {
    sessionStorage.removeItem('isLoggedIn');
    showLoginModal();
}

// 在页面加载时初始化
document.addEventListener('DOMContentLoaded', function() {
    checkAuth();
    initLoginForm();
});

// 假设现有的验证函数
function validateLogin(username, password) {
    // 将登录凭据更改为 zdx/123
    const validUsername = "zdx";
    const validPassword = "123";
    
    return username === validUsername && password === validPassword;
} 