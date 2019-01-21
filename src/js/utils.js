export function copyTextToClipboard(text) {
  const dummy = document.createElement('textarea');
  dummy.value = text;
  const node = document.querySelector('.ut-container');
  console.log(node);
  node.appendChild(dummy);
  dummy.select();
  document.execCommand('copy');
  node.removeChild(dummy);
}

export function copyNodeTextToClipboard(scoreNode) {
  const range = document.createRange();
  range.selectNode(scoreNode);
  const sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
  document.execCommand('copy');
  sel.removeAllRanges();
}

export function removeChildrenNodes(parent) {
  while (parent.firstChild) {
    parent.lastChild.remove();
  }
}

export function setNavLabelText(labelText) {
  const navLabel = document.querySelector('.ut-nav__label');
  navLabel.innerHTML = labelText;
}
