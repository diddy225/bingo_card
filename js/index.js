const cardAmount = $('#numberOfCards');
const generateCards = $('#generateCards');
const clearBoard = $('#clearBoard');
let markerColor = '#f00';

let errorTimeout;

const getRandomNumbers = (min, max) => {
  let array = [];
  for (let i = 0; array.length < 5; i++) {
    let random = Math.floor(Math.random() * (max - min)) + min + 1;
    if (array.indexOf(random) === -1) array.push(random);
  }
  return array.map((num) => `<div class="numBox">${num}</div>`).join('');
};

generateCards.on('click', (e) => {
  e.preventDefault();
  // if timeout exist clear it out
  if (errorTimeout) {
    clearTimeout(errorTimeout);
  }

  //set the num of boards from user
  let num = cardAmount.val();

  // if the number of boards is greater than 4 return and throw an error
  if (num > 4) {
    $('.alert').text(`YOU DONT NEED ${cardAmount.val()} CARDS, TRY 4!`);
    $('.alert').addClass('show');
    errorTimeout = setTimeout(() => {
      $('.alert').removeClass('show');
    }, 3000);
    return;
  }
  for (let i = 0; i < num; i++) {
    let letterB = getRandomNumbers(1, 15);
    let letterI = getRandomNumbers(16, 30);
    let letterN = getRandomNumbers(31, 45);
    let letterG = getRandomNumbers(46, 60);
    let letterO = getRandomNumbers(61, 75);
    const numBox = $(`<div class="card-body"></div>`);
    numBox.append(
      `<div class="numRow"><div class="headerLetter">B</div>${letterB}</div>`,
      `<div class="numRow"><div class="headerLetter">I</div>${letterI}</div>`,
      `<div class="numRow"><div class="headerLetter">N</div>${letterN}</div>`,
      `<div class="numRow"><div class="headerLetter">G</div>${letterG}</div>`,
      `<div class="numRow"><div class="headerLetter">O</div>${letterO}</div>`
    );
    $('#card-container').append(numBox);
  }
  cardAmount.val('');
  $('.card-body div:nth-child(3) div:nth-child(4)').text('FREE');
});

clearBoard.on('click', (e) => {
  e.preventDefault();
  $('#card-container').empty();
});

// highlight selected box
$(document).on('click', '.numBox', function () {
  let backgroundColor = $(this).css('background-color');
  if (
    backgroundColor === 'rgba(0, 0, 0, 0)' ||
    backgroundColor === 'rgb(255, 255, 255)'
  ) {
    $(this).css('background-color', markerColor);
    $(this).css('color', '#fff');
  } else {
    $(this).css('background-color', '#fff');
    $(this).css('color', '#000');
  }
});

$('.color-box').on('click', function () {
  $('.color-box').css('border-color', 'grey');
  markerColor = $(this).attr('data-color');
  $(this).css('border-color', 'yellow');
});
