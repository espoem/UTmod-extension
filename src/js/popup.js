import '../sass/main.scss';

import { categories, questions, scoreModes } from './constants';
import Checkbox from './checkbox';

window.addEventListener('DOMContentLoaded', () => {
  const scoreNode = document.querySelector('#score');
  scoreNode.addEventListener('click', () => copyScore(scoreNode));

  const options = createScoreModeCheckbox();
  const optionsWrapper = document.querySelector('#qn-options');
  optionsWrapper.appendChild(options);
  options.addEventListener('input', () => resetQuestionnaire(catSelect));

  const catSelect = document.querySelector('#category-select');
  generateCategoriesOptions(catSelect);
  generateQuestions(catSelect);

  catSelect.addEventListener('input', () => resetQuestionnaire(catSelect));

  // toggle accordion items
  const accordionInputs = document.querySelectorAll('.accordion__item > input[type=checkbox]');
  for (const i of accordionInputs) {
    const label = i.nextSibling;
    i.addEventListener('input', () => label.classList.toggle('is-active'));
  }

  const buttons = document.querySelectorAll('.btn');
  for (const b of buttons) {
    b.addEventListener('click', e => e.preventDefault());
  }

  // reset review
  const resetBtn = document.querySelector('#reset');
  resetBtn.addEventListener('click', () => {
    // reset questions
    generateQuestions(catSelect);

    // reset review comment
    const reviewText = document.querySelector('#review-comment');
    reviewText.value = '';

    // enable copy review button
    const reviewBtn = document.querySelector('#copy-review');
    reviewBtn.classList.remove('btn--disabled');
  });

  // copy button to clipboard
  const previewBtn = document.querySelector('#copy-review');
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

function resetQuestionnaire(catSelect) {
  generateQuestions(catSelect);
}

function copyScore(scoreNode) {
  const range = document.createRange();
  range.selectNode(scoreNode);
  const sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
  document.execCommand('copy');
  sel.removeAllRanges();
}

function createScoreModeCheckbox() {
  const scoreModeChkbox = new Checkbox(
    'qn-score-mode',
    'Use legacy scoring (resets questionnaire)',
  );
  console.log(scoreModeChkbox);
  return scoreModeChkbox.body;
}

function getScoreMode() {
  const scoreModeNode = document.querySelector('#qn-score-mode');
  const checkHandle = scoreModeNode.querySelector('input');
  return checkHandle.checked ? scoreModes.ADD : scoreModes.MULT;
}

function sortByWeightDesc(a, b) {
  return +b.weight - a.weight;
}

function sortByPointsLegacyDesc(a, b) {
  return +b.pointsLegacy - a.pointsLegacy;
}

function generateQuestions(parentNode) {
  const questionsNode = document.querySelector('#questions');
  // remove old questions
  while (questionsNode.hasChildNodes()) {
    questionsNode.removeChild(questionsNode.lastChild);
  }

  const currentCategory = parentNode.options[parentNode.selectedIndex].value;
  const mode = getScoreMode();
  for (const idx in questions[currentCategory]) {
    const qItem = document.createElement('li');
    qItem.classList.add('questions__item');
    const qText = document.createElement('div');
    qText.id = `question-${+idx + 1}-text`;
    qText.classList.add('question__text');
    const q = questions[currentCategory][idx];
    qText.innerText = `Q${+idx + 1}: ${q.question}`;
    qItem.appendChild(qText);
    const qDecor = document.createElement('div');
    qDecor.classList.add('question__decorator');
    qItem.appendChild(qDecor);

    const qSelect = document.createElement('select');
    qSelect.id = `question-${+idx + 1}-select`;

    const answersOriginal = q.answers;
    let answersSorted;
    if (mode === scoreModes.MULT) {
      answersSorted = Array.from(answersOriginal).sort(sortByWeightDesc);
    } else {
      answersSorted = Array.from(answersOriginal).sort(sortByPointsLegacyDesc);
    }
    for (const aIdx in answersOriginal) {
      // original questionnaire contains some unsorted questions || use ansSorted in future
      const ans = document.createElement('option');
      if (mode === scoreModes.MULT) {
        ans.value = answersOriginal[aIdx].weight;
      } else {
        ans.value = answersOriginal[aIdx].pointsLegacy;
      }
      ans.innerText = answersOriginal[aIdx].answer;
      qSelect.appendChild(ans);
    }
    qItem.appendChild(qSelect);

    const checkbox = new Checkbox(`question-${+idx + 1}-checkbox-advanced`, 'Advanced');
    qItem.appendChild(checkbox.body);

    const qAdvancedWrapper = document.createElement('div');
    qAdvancedWrapper.classList.add('advanced_wrapper');
    const qSliderWrapper = document.createElement('div');
    qSliderWrapper.classList.add('range');
    const qSlider = createScoreSlider(mode, answersSorted, answersOriginal);

    // extra comment for a specific question
    const qSliderComment = document.createElement('textarea');
    qSliderComment.setAttribute('placeholder', 'Write additional comment for this question');
    qSliderComment.classList.add('range__comment');

    qSliderWrapper.appendChild(qSlider);
    qAdvancedWrapper.appendChild(qSliderWrapper);
    qAdvancedWrapper.appendChild(qSliderComment);
    qItem.appendChild(qAdvancedWrapper);
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

      checkCommentOnSliderChange(qSelect, qSlider, qSliderComment);
    });
    qSliderComment.addEventListener('input', () => {
      checkCommentOnSliderChange(qSelect, qSlider, qSliderComment);
    });

    const checkboxHandle = checkbox.body.querySelector('input');
    checkboxHandle.addEventListener('input', () => {
      checkbox.body.classList.toggle('is-active');
      if (!checkboxHandle.checked) {
        qSlider.value = qSelect.options[qSelect.selectedIndex].value;
        qSliderComment.value = '';
        updateScore();
      }
      checkCommentOnSliderChange(qSelect, qSlider, qSliderComment);
    });

    questionsNode.appendChild(qItem);
    updateScore();
  }

  function checkCommentOnSliderChange(qSelect, qSlider, qSliderComment) {
    const reviewBtn = document.querySelector('#copy-review');
    if (
      qSelect.options[qSelect.selectedIndex].value !== qSlider.value
      && !(qSliderComment.value.length > 20)
    ) {
      qSliderComment.classList.add('error');
      reviewBtn.classList.add('btn--disabled');
      reviewBtn.disabled = true;
    } else {
      qSliderComment.classList.remove('error');
      reviewBtn.classList.remove('btn--disabled');
      reviewBtn.disabled = false;
    }
  }
}

function createScoreSlider(mode, ansSorted, ansOrig) {
  const qSlider = document.createElement('input');
  qSlider.setAttribute('type', 'range');
  if (mode === scoreModes.MULT) {
    qSlider.setAttribute('min', ansSorted[ansSorted.length - 1].weight);
    qSlider.setAttribute('max', ansSorted[0].weight);
    qSlider.setAttribute('step', 0.001);
    qSlider.value = ansOrig[0].weight;
    qSlider.setAttribute('value', ansOrig[0].weight);
  } else {
    qSlider.setAttribute('min', ansSorted[ansSorted.length - 1].pointsLegacy);
    qSlider.setAttribute('max', ansSorted[0].pointsLegacy);
    qSlider.setAttribute('step', 0.05);
    qSlider.value = ansOrig[0].pointsLegacy;
    qSlider.setAttribute('value', ansOrig[0].pointsLegacy);
  }
  return qSlider;
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
  const scoreMode = getScoreMode();
  const score = calculateScore(scoreMode);
  const scoreNode = document.querySelector('#score');
  scoreNode.innerText = Math.max(Math.min(Math.round(score), 100), 0);
}

function calculateScore(scoreMode) {
  const sliders = document.querySelectorAll('#questions input[type=range]');
  let score = 100;
  for (let i = 0, len = sliders.length; i < len; ++i) {
    if (scoreMode === scoreModes.MULT) {
      score *= sliders[i].valueAsNumber;
    } else {
      score += sliders[i].valueAsNumber;
    }
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

function getQuestionnaireResult() {
  const questions = document.querySelectorAll('.questions__item > .question__text');
  const parts = [
    '***Results of the questionnaire used to evaluate this contribution are included below.***',
  ];
  const weights = [];
  for (const q of questions) {
    const part = [];
    part.push(q.innerHTML);
    const select = q.parentNode.querySelector('select');
    const answer = select.options[select.selectedIndex].innerText;
    const slider = q.parentNode.querySelector('div.range > input[type=range]');
    const weight = slider.value;
    weights.push(+weight);
    const comment = q.parentNode.querySelector('textarea').value;

    let ans = `- Answer: ${answer}\n- Factor: ${weight}`;
    if (slider.value !== select.options[select.selectedIndex].value) {
      ans += ` (orig. ${select.options[select.selectedIndex].value})`;
    }

    if (comment && comment.trim().length > 0) {
      ans += `\n- Additional comment: ${comment.trim()}`;
    }

    part.push(ans);
    parts.push(part.join('\n\n'));
  }

  const scoreNode = document.querySelector('#score');
  parts.push(`**Final score: ${scoreNode.innerText}/100**`);
  const scoreMode = getScoreMode();
  if (scoreMode === scoreModes.MULT) {
    parts.push(`Score calculation: ${[100, ...weights].join(' * ')} ≈ ${scoreNode.innerText}`);

  } else {
    const w = []
    for (var i = 0, len = weights.length; i < len; ++i) {
        if (weights[i] < 0) {
          w.push(`- ${+weights[i]*(-1)}`)
        } else {
          w.push(`+ ${+weights[i]}`)
        }
    }
    parts.push(`Score calculation: ${[100, ...w].join(' ')} ≈ ${scoreNode.innerText}`);

  }

  return parts.join('\n\n');
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

  let parts = [
    // getParWithGuidelinesLink(cIdx),
    getQuestionnaireResult(),
    getParWithDiscordLink(),
    getModeratorSignature(),
  ];

  if (comment.value.length > 0) {
    parts = [comment.value, ...parts];
  }

  return parts.join('\n\n');
}
