import { generateCategoriesOptions } from '../components/category_select';
import Checkbox from '../components/checkbox';
import Slider from '../components/slider';
import {
  categories, maxScore, questions, scoreModes,
} from '../constants';
import {
  copyTextToClipboard,
  removeChildrenNodes,
  setNavLabelText,
  sortByPointsLegacyDesc,
  sortByWeightDesc,
} from '../utils';

export const setupQuestionnairePage = () => {
  setQuestionnairePageNavText();

  const catSelect = document.querySelector('#ut-questionnaire .ut-category__select');
  catSelect.addEventListener('input', () => resetQuestionnaire(catSelect));

  createQuestionnaireOptions(catSelect);
  generateCategoriesOptions(catSelect);
  generateQuestions(catSelect);

  // toggle accordion items
  const accordionInputs = document.querySelectorAll('.ut-accordion__item > input[type=checkbox]');
  for (const i of accordionInputs) {
    const label = i.nextSibling;
    i.addEventListener('input', () => label.classList.toggle('is-active'));
  }

  setupResetButton(catSelect);
  setupCopyReviewButton();

  setupScoreCopy();
};

const setupCopyReviewButton = () => {
  const previewBtn = document.querySelector('#copy-review');
  previewBtn.addEventListener('click', () => {
    copyTextToClipboard(getReviewCommentBody());
  });
};

const setupResetButton = (catSelect) => {
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
};

/**
 * Creates div with current score.
 */
const createScoreNode = () => {
  const parent = document.querySelector('.ut-nav__val');
  parent.innerHTML = '';
  const scoreDiv = document.createElement('div');
  const scoreSpan = document.createElement('span');
  scoreSpan.id = 'score';
  scoreSpan.innerHTML = maxScore;
  scoreDiv.appendChild(scoreSpan);
  scoreDiv.innerHTML += `/${maxScore}`;
  parent.appendChild(scoreDiv);

  updateScore();
};

/**
 * Sets the page label.
 */
export const setQuestionnairePageNavText = () => {
  setNavLabelText('Final score');
  createScoreNode();
};
/**
 * Resets the review questionnaire to default values.
 * @param {Element} catSelect
 */
const resetQuestionnaire = catSelect => generateQuestions(catSelect);
/**
 * Copies score to the clipboard.
 * @param {Element} scoreNode
 */
const copyScore = scoreNode => copyTextToClipboard(scoreNode.innerHTML);

const getScoreMode = () => {
  const scoreModeNode = document.querySelector('#qn-score-mode');
  if (!scoreModeNode) {
    return scoreModes.MULT;
  }
  const checkHandle = scoreModeNode.querySelector('input');
  return checkHandle.checked ? scoreModes.ADD : scoreModes.MULT;
};

const generateQuestions = (parent) => {
  const questionsList = document.querySelector('#questions');
  // remove old questions
  removeChildrenNodes(questionsList);

  const currentCategory = parent.options[parent.selectedIndex].value;
  const mode = getScoreMode();

  for (const qIdx in questions[currentCategory]) {
    const item = createQuestionsListItem(currentCategory, qIdx, mode);

    questionsList.appendChild(item);
  }
  updateScore();
};

const checkCommentOnSliderChange = (qSelect, qSlider, qSliderComment) => {
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
};

const createScoreSlider = (mode, ansSorted, ansOrig) => {
  let qSlider;
  if (mode === scoreModes.MULT) {
    qSlider = new Slider(
      '',
      ansSorted[ansSorted.length - 1].weight,
      ansSorted[0].weight,
      ansOrig[0].weight,
      0.001,
    );
  } else {
    qSlider = new Slider(
      '',
      ansSorted[ansSorted.length - 1].pointsLegacy,
      ansSorted[0].pointsLegacy,
      ansOrig[0].pointsLegacy,
      0.05,
    );
  }
  return qSlider;
};

const updateScore = () => {
  const scoreMode = getScoreMode();
  const score = calculateScore(scoreMode);
  const scoreNode = document.querySelector('#score');
  scoreNode.innerText = score;
};

const calculateScore = (scoreMode) => {
  const sliders = document.querySelectorAll('#questions input[type=range]');
  let score = maxScore;
  for (let i = 0, len = sliders.length; i < len; ++i) {
    if (scoreMode === scoreModes.MULT) {
      score *= sliders[i].valueAsNumber;
    } else {
      score += sliders[i].valueAsNumber;
    }
  }
  return Math.max(Math.min(Math.round(score), maxScore), 0);
};

const getModeratorSignature = () => '[[utopian-moderator]](https://join.utopian.io/)';

const getParWithDiscordLink = () => '--- \nNeed help? Chat with us on [Discord](https://discord.gg/uTyJkNm).';

const getParWithGuidelinesLink = category => `Your contribution has been evaluated according to [Utopian policies and guidelines](https://join.utopian.io/guidelines), as well as a predefined set of questions relevant to the category.\n\nTo view those questions and the relevant answers related to your post, [click here](https://review.utopian.io/result/${category}/${getAnswersLinkPart()}).`;

const getQuestionnaireResult = () => {
  const qItems = document.querySelectorAll('.questions__item');
  const parts = [
    '***Results of the questionnaire used to evaluate this contribution are included below.***',
  ];

  const vals = [];
  for (let i = 0, len = qItems.length; i < len; ++i) {
    const part = getQuestionResults(qItems[i], vals);
    parts.push(part.join('\n\n'));
  }

  const scoreNode = document.querySelector('#score');
  parts.push(`**Final score: ${scoreNode.innerText}/${maxScore}**`);

  const mode = getScoreMode();
  if (mode === scoreModes.MULT) {
    parts.push(`Score calculation: ${[maxScore, ...vals].join(' * ')} ≈ ${scoreNode.innerText}`);
  } else {
    const w = [];
    for (let i = 0, len = vals.length; i < len; ++i) {
      if (vals[i] < 0) {
        w.push(`- ${+vals[i] * -1}`);
      } else {
        w.push(`+ ${+vals[i]}`);
      }
    }
    parts.push(`Score calculation: ${[maxScore, ...w].join(' ')} ≈ ${scoreNode.innerText}`);
  }

  return parts.join('\n\n');
};

const getAnswersLinkPart = () => {
  const selects = document.querySelectorAll('select[id^=question-][id$=-select]');
  const ansIdx = [];
  for (const s of selects) {
    ansIdx.push(s.selectedIndex + 1);
  }
  return ansIdx.join('-');
};

const getReviewCommentBody = () => {
  const comment = document.querySelector('#review-comment');
  const category = document.querySelector('#ut-questionnaire .ut-category__select');

  let cIdx = 0;
  for (const c of categories) {
    if (c.slug === category.options[category.selectedIndex].value) {
      cIdx = c.num;
      break;
    }
  }

  const includeQuest = document.querySelector('#qn-quest-in-comment input').checked;

  let parts = [
    includeQuest ? getQuestionnaireResult() : getParWithGuidelinesLink(cIdx),
    getParWithDiscordLink(),
    getModeratorSignature(),
  ];

  if (comment.value.length > 0) {
    parts = [comment.value, ...parts];
  }

  return parts.join('\n\n');
};

const setupScoreCopy = () => document.addEventListener('click', (e) => {
  if (e.target && e.target.id === 'score') {
    copyScore(e.target);
  }
});

/**
 * Create options for questionnaire.
 * @param {Element} catSelect categories select
 */
const createQuestionnaireOptions = (catSelect) => {
  const optionsWrapper = document.querySelector('#ut-questionnaire-options');
  const options = new Checkbox('qn-score-mode', 'Use legacy scoring (resets questionnaire)');
  optionsWrapper.appendChild(options);
  options.addEventListener('input', () => resetQuestionnaire(catSelect));
  const questInComment = new Checkbox(
    'qn-quest-in-comment',
    'Include questionnaire results in review',
  );
  questInComment.querySelector('input').checked = true;
  optionsWrapper.appendChild(questInComment);
};

const createQuestionTextDiv = (idx, question) => {
  const div = document.createElement('div');
  const textDiv = document.createElement('div');
  textDiv.id = `question-${+idx + 1}-text`;
  textDiv.classList.add('question__text');
  textDiv.innerText = `Q${+idx + 1}: ${question.question}`;
  const decor = document.createElement('div');
  decor.classList.add('question__decorator');
  div.appendChild(textDiv);
  div.appendChild(decor);
  return div;
};

/**
 * Creates selct element with answers for a question.
 * @param {Number} questionIdx question index
 * @param {Array} answers
 * @param {String} mode score mode
 */
const createQuestionAnswers = (questionIdx, answers, mode) => {
  const select = document.createElement('select');
  select.id = `question-${+questionIdx + 1}-select`;
  answers.forEach((answer) => {
    const ansOpt = document.createElement('option');
    if (mode === scoreModes.MULT) {
      ansOpt.value = answer.weight;
    } else {
      ansOpt.value = answer.pointsLegacy;
    }
    ansOpt.innerText = answer.answer;
    select.appendChild(ansOpt);
  });
  return select;
};

const createQuestionsListItem = (currentCategory, qIdx, mode) => {
  const question = questions[currentCategory][qIdx];
  const qItem = document.createElement('li');
  qItem.classList.add('questions__item');
  const qDiv = createQuestionTextDiv(qIdx, question);
  qItem.appendChild(qDiv);
  const answersOriginal = question.answers;
  let answersSorted;
  if (mode === scoreModes.MULT) {
    answersSorted = Array.from(answersOriginal).sort(sortByWeightDesc);
  } else {
    answersSorted = Array.from(answersOriginal).sort(sortByPointsLegacyDesc);
  }
  const qSelect = createQuestionAnswers(qIdx, answersOriginal, mode);
  qItem.appendChild(qSelect);
  const checkbox = new Checkbox(`question-${+qIdx + 1}-checkbox-advanced`, 'Advanced');
  qItem.appendChild(checkbox);
  const { qSlider, qSliderComment } = createScoreSliderSection(
    mode,
    answersSorted,
    answersOriginal,
    qItem,
    qSelect,
  );
  const checkboxHandle = checkbox.querySelector('input');
  checkboxHandle.addEventListener('input', () => {
    checkbox.classList.toggle('is-active');
    if (!checkboxHandle.checked) {
      qSlider.value = qSelect.options[qSelect.selectedIndex].value;
      qSliderComment.value = '';
      updateScore();
    }
    checkCommentOnSliderChange(qSelect, qSlider, qSliderComment);
  });
  return qItem;
};

const createScoreSliderSection = (mode, answersSorted, answersOriginal, qItem, qSelect) => {
  const qAdvancedWrapper = document.createElement('div');
  qAdvancedWrapper.classList.add('advanced_wrapper');
  const qSliderWrapper = document.createElement('div');
  qSliderWrapper.classList.add('range');
  const qSlider = createScoreSlider(mode, answersSorted, answersOriginal);
  qSliderWrapper.appendChild(qSlider);
  qAdvancedWrapper.appendChild(qSliderWrapper);
  // extra comment for a specific question
  const qSliderComment = document.createElement('textarea');
  qSliderComment.setAttribute('placeholder', 'Write additional comment for this question');
  qSliderComment.classList.add('range__comment');
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
  return { qSlider, qSliderComment };
};

const getQuestionResults = (questionItem, values) => {
  const part = [];
  const question = questionItem.querySelector('.question__text');
  part.push(question.innerHTML);

  const select = questionItem.querySelector('select[id$=-select]');
  const answer = select.options[select.selectedIndex].innerText;
  const slider = questionItem.querySelector('div.range > input[type=range]');
  const weight = slider.value;
  values.push(+weight);

  const comment = questionItem.querySelector('textarea').value;
  let ans = `- Answer: ${answer}\n- Value: ${weight}`;
  if (slider.value !== select.options[select.selectedIndex].value) {
    ans += ` (orig. ${select.options[select.selectedIndex].value})`;
  }
  if (comment && comment.trim().length > 0) {
    ans += `\n- Additional comment: ${comment.trim()}`;
  }
  part.push(ans);

  return part;
};
