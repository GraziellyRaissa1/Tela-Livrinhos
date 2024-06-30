const timerEl = document.getElementById('timer');
const marksList = document.getElementById('marks-list');
let intervalId = 0;
let timer = 0;
let marks = [];

// Formata o tempo para HH:MM:SS:HH
const formatTime = (time) => {
    const hours = Math.floor(time / 360000);
    const minutes = Math.floor((time % 360000) / 6000);
    const seconds = Math.floor((time % 6000) / 100);
    const hundredths = time % 100; 

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${hundredths.toString().padStart(2, '0')}`;
}

// Atualiza o elemento do cronômetro
const setTimer = (time) => {
    timerEl.textContent = formatTime(time);
}

// Alterna o estado do cronômetro
const toggleTimer = () => {
    const button = document.getElementById('power');
    const action = button.getAttribute('action');

    clearInterval(intervalId);

    if (action === 'start' || action === 'continue') {
        intervalId = setInterval(() => {
            timer += 1;
            setTimer(timer);
        }, 10);
        button.setAttribute('action', 'pause');
        button.innerHTML = '<i class="fa-solid fa-pause"></i>';
    } else if (action === 'pause') {
        button.setAttribute('action', 'continue');
        button.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
}

// Marca o tempo atual
const markTime = () => {
    marks.push(timer);
    addMarkToList(marks.length, timer);
}

// Adiciona a marcação de tempo à lista
const addMarkToList = (index, time) => {
    const markElement = document.createElement('li');
    markElement.textContent = `Mark ${index}: ${formatTime(time)}`;
    marksList.appendChild(markElement);
}

// Reseta o cronômetro
const resetTimer = () => {
    clearInterval(intervalId);
    timer = 0;
    marks = [];
    setTimer(timer);
    marksList.innerHTML = '';
    const button = document.getElementById('power');
    button.setAttribute('action', 'start');
    button.innerHTML = '<i class="fa-solid fa-play"></i>';
}

// Adiciona event listeners aos botões
document.getElementById('power').addEventListener('click', toggleTimer);
document.getElementById('mark').addEventListener('click', markTime);
document.getElementById('reset').addEventListener('click', resetTimer);
