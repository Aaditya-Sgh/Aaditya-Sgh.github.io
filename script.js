const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');
const happyAnimation = document.querySelector('.happy-animation');

let size = 16;

noButton.addEventListener('click', function() {
 size += 2;
 yesButton.style.fontSize = size + 'px';
});

yesButton.addEventListener('click', function() {
 happyAnimation.style.display = 'block';
});
