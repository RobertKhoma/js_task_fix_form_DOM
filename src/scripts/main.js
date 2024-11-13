'use strict';

// const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');

console.log(inputs);

function createLabel(input) {
  const parentElement = input.parentElement;

  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = breakWord(capitalize(input.name));
  input.placeholder = label.textContent;

  parentElement.prepend(label);
}

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

function breakWord(string, substring = 'Name') {
  if (string.includes(substring)) {
    const index = string.indexOf(substring);

    return string.slice(0, index) + ' ' + substring;
  }

  return string;
}

inputs.forEach((input) => createLabel(input));
