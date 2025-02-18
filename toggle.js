document.addEventListener('DOMContentLoaded', () => {
  const questions = document.querySelectorAll('.feedback-question');
  questions.forEach(question => question.addEventListener('click', () => {
    requestAnimationFrame(() => {
      const answer = question.nextElementSibling;
      question.classList.toggle('active');
      answer.classList.toggle('show');
      const icon = question.querySelector('.icon');
      icon.classList.toggle('rotate');
      if (icon.classList.contains('rotate')) {
        icon.textContent = '-';
      } else {
        icon.textContent = '+';
      }
    })
  }));
});