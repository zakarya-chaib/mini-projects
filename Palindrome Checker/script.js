const input = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');

checkBtn.addEventListener('click', () => {
  const text = input.value;

  if (!text) {
    alert('Please input a value.');
    return;
  }

  const cleanText = text.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedText = cleanText.split('').reverse().join('');

  result.classList.remove('green', 'red');

  if (cleanText === reversedText) {
    result.textContent = `${text} is a palindrome.`;
    result.classList.add('green');
  } else {
    result.textContent = `${text} is not a palindrome.`;
    result.classList.add('red');
  }
});
