class Quiz {
    constructor(category) {
        // 检查是否已登录
        if (!checkAuth()) {
            return;
        }
        this.category = category;
        this.questions = getRandomQuestions(category, 5); // 5题
        this.answers = new Array(5).fill(null);
        this.timeRemaining = 7200; // 2小时
        this.timer = null;
        
        // 只初始化提交按钮
        this.initializeSubmitButton();
    }

    initializeSubmitButton() {
        document.getElementById('submit-quiz').onclick = () => this.submitQuiz();
    }

    startQuiz() {
        this.showModal();
        this.displayQuestion();
        this.startTimer();
    }

    showModal() {
        document.getElementById('quiz-modal').style.display = 'flex';
        document.getElementById('quiz-title').textContent = this.category;
    }

    displayQuestion() {
        const questionsContainer = document.getElementById('question-container');
        questionsContainer.innerHTML = '';
        
        // 显示所有5道题目
        this.questions.forEach((question, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.className = 'question-item';
            
            questionDiv.innerHTML = `
                <h3 class="question-number">第 ${index + 1} 题</h3>
                <p class="question-text">${question.question}</p>
                <div class="options-container">
                    ${question.options.map((option, optIndex) => `
                        <button class="option-btn ${this.answers[index] === optIndex ? 'selected' : ''}"
                                onclick="quiz.selectAnswer(${index}, ${optIndex})">
                            ${option}
                        </button>
                    `).join('')}
                </div>
            `;
            
            questionsContainer.appendChild(questionDiv);
        });
    }

    selectAnswer(questionIndex, optionIndex) {
        this.answers[questionIndex] = optionIndex;
        this.displayQuestion();
    }

    submitQuiz() {
        clearInterval(this.timer);
        let score = 0;
        this.answers.forEach((answer, index) => {
            if (answer === this.questions[index].correct) {
                score += 20; // 每题20分，总分100分
            }
        });
        alert(`测试完成！\n您的得分是：${score}分`);
        document.getElementById('quiz-modal').style.display = 'none';
    }

    // 保持计时器相关方法不变
    startTimer() {
        this.timer = setInterval(() => {
            this.timeRemaining--;
            if (this.timeRemaining <= 0) {
                this.submitQuiz();
            }
            this.updateTimer();
        }, 1000);
    }

    updateTimer() {
        const hours = Math.floor(this.timeRemaining / 3600);
        const minutes = Math.floor((this.timeRemaining % 3600) / 60);
        const seconds = this.timeRemaining % 60;
        document.getElementById('time-remaining').textContent = 
            `剩余时间: ${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
}

// 创建全局变量以便访问
let quiz;

// 初始化事件监听器
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.start-quiz');
    buttons.forEach(button => {
        button.onclick = () => {
            const category = button.parentElement.querySelector('h3').textContent;
            quiz = new Quiz(category);
            quiz.startQuiz();
        };
    });
}); 