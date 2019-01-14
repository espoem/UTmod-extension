import '../sass/main.scss';

import { categories, questions } from './constants';

window.addEventListener('DOMContentLoaded', () => {
  const catSelect = document.querySelector('#category-select');
  generateCategoriesOptions(catSelect);
  generateQuestions(catSelect);

  catSelect.addEventListener('input', () => {
    generateQuestions(catSelect);

    // reset score
    const scoreNode = document.querySelector('#score');
    scoreNode.innerText = 100;
  });

  const accordionInputs = document.querySelectorAll('.accordion input[type=checkbox]');
  for (const i of accordionInputs) {
    const label = i.nextSibling;
    i.addEventListener('input', () => label.classList.toggle('is-active'));
  }

  const buttons = document.querySelectorAll('.btn');
  for (const b of buttons) {
    b.addEventListener('click', (e) => {
      e.preventDefault();
    });
  }

  // reset review
  const resetBtn = document.querySelector('#reset');
  resetBtn.addEventListener('click', () => {
    generateQuestions(catSelect);
    const reviewText = document.querySelector('#review-comment');
    reviewText.value = '';
  });

  // copy button to clipboard
  const previewBtn = document.querySelector('#copy');
  previewBtn.addEventListener('click', () => {
    const dummy = document.createElement('textarea');
    dummy.value = getReviewCommentBody();
    const node = document.querySelector('.container');
    node.appendChild(dummy);
    dummy.select();
    document.execCommand('copy');
    node.removeChild(dummy);
  });
});

function sortByWeightDesc(a, b) {
  return +b.weight - a.weight;
}

function generateQuestions(parentNode) {
  const questionsNode = document.querySelector('#questions');
  // remove old questions
  while (questionsNode.hasChildNodes()) {
    questionsNode.removeChild(questionsNode.lastChild);
  }

  const currentCategory = parentNode.options[parentNode.selectedIndex].value;
  for (const idx in questions[currentCategory]) {
    const qItem = document.createElement('li');
    qItem.classList.add('questions__item');
    const qText = document.createElement('div');
    qText.classList.add('question__text');
    const q = questions[currentCategory][idx];
    qText.innerText = `Q${+idx + 1}: ${q.question}`;
    qItem.appendChild(qText);
    const qDecor = document.createElement('div');
    qDecor.classList.add('question__decorator');
    qItem.appendChild(qDecor);

    const qSelect = document.createElement('select');
    qSelect.id = `question-${+idx + 1}-select`;

    const ansSorted = q.answers.sort(sortByWeightDesc);
    for (const aIdx in ansSorted) {
      const ans = document.createElement('option');
      ans.value = q.answers[aIdx].weight;
      ans.innerText = q.answers[aIdx].answer;
      qSelect.appendChild(ans);
    }
    qItem.appendChild(qSelect);

    const qSliderWrapper = document.createElement('div');
    qSliderWrapper.classList.add('range');
    const qSlider = document.createElement('input');
    qSlider.setAttribute('type', 'range');
    qSlider.setAttribute('min', ansSorted[ansSorted.length - 1].weight);
    qSlider.setAttribute('max', ansSorted[0].weight);
    qSlider.setAttribute('step', 0.001);
    qSlider.value = ansSorted[0].weight;
    qSlider.setAttribute('value', ansSorted[0].weight);

    qSliderWrapper.appendChild(qSlider);
    qItem.appendChild(qSliderWrapper);
    qSelect.addEventListener('input', () => {
      qSlider.value = qSelect.options[qSelect.selectedIndex].value;

      updateScore();
    });

    const vals = [];
    for (const opt of qSelect.options) {
      vals.push(+opt.value);
    }
    qSlider.addEventListener('input', () => {
      updateScore();

      // update select with closest answer
      let idx = 0;
      let dist = Infinity;
      for (const i in vals) {
        const d = Math.abs(vals[+i] - qSlider.value);
        if (d < dist) {
          dist = d;
          idx = +i;
        }
      }
      qSelect.selectedIndex = idx;
    });

    questionsNode.appendChild(qItem);
    updateScore();
  }
}

function generateCategoriesOptions(parentNode) {
  for (const category of categories) {
    const c = document.createElement('option');
    c.value = category.slug;
    c.innerText = category.name;
    parentNode.appendChild(c);
  }
}

function updateScore() {
  const score = calculateScore();
  const scoreNode = document.querySelector('#score');
  scoreNode.innerText = Math.max(Math.min(Math.round(score), 100), 0);
}

function calculateScore() {
  const sliders = document.querySelectorAll('#questions input[type=range]');
  let score = 100;
  for (const s of sliders) {
    score *= s.value;
  }
  return score;
}

function getModeratorSignature() {
  return `[[utopian-moderator]](https://join.utopian.io/)`;
}

function getParWithDiscordLink() {
  return `--- \nNeed help? Chat with us on [Discord](https://discord.gg/uTyJkNm).`;
}

function getParWithGuidelinesLink(category) {
  return `Your contribution has been evaluated according to [Utopian policies and guidelines](https://join.utopian.io/guidelines), as well as a predefined set of questions relevant to the category.\n\nTo view those questions and the relevant answers related to your post, [click here](https://review.utopian.io/result/${category}/${getAnswersLinkPart()}).`;
}

function getAnswersLinkPart() {
  const selects = document.querySelectorAll('select[id^=question-][id$=-select]');
  const ansIdx = [];
  for (const s of selects) {
    ansIdx.push(s.selectedIndex + 1);
  }
  return ansIdx.join('-');
}

function getReviewCommentBody() {
  const comment = document.querySelector('#review-comment');
  const category = document.querySelector('#category-select');

  let cIdx = 0;
  for (const c of categories) {
    if (c.slug === category.options[category.selectedIndex].value) {
      cIdx = c.num;
      break;
    }
  }

  let parts = [getParWithGuidelinesLink(cIdx), getParWithDiscordLink(), getModeratorSignature()];

  if (comment.value.length > 0) {
    parts = [comment.value, ...parts];
  }

  return parts.join('\n\n');
}
