export const copyTextToClipboard = (text) => {
  const dummy = document.createElement('textarea');
  dummy.value = text;
  const node = document.querySelector('.ut-container');
  node.appendChild(dummy);
  dummy.select();
  document.execCommand('copy');
  node.removeChild(dummy);
};

export const copyNodeTextToClipboard = (node) => {
  const range = document.createRange();
  range.selectNode(node);
  const sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
  document.execCommand('copy');
  sel.removeAllRanges();
};

export const removeChildrenNodes = (parent) => {
  while (parent.firstChild) {
    parent.lastChild.remove();
  }
};

export const setNavLabelText = (labelText) => {
  const navLabel = document.querySelector('.ut-nav__label');
  navLabel.innerHTML = labelText;
};

export const sortByWeightDesc = (a, b) => +b.weight - a.weight;

export const sortByPointsLegacyDesc = (a, b) => +b.pointsLegacy - a.pointsLegacy;
