let axeY = 0;
let axeX = 0;

const leftBlock = document.querySelector('.left_block');
const rightBlock = document.querySelector('.right_block');

document.addEventListener('keydown', (eventOnArrowKeysForLeftBlock) => {
  switch (eventOnArrowKeysForLeftBlock.key) {
    case 'ArrowUp':
      axeY = axeY - 50;
      if (axeY < 0) {
        axeY = 0;
      }
      document.querySelector('.left_block').style.top = axeY + 'px';
      break;
    case 'ArrowDown':
      axeY = axeY + 50;
      let screenSize = window.innerHeight - 300;
      if (axeY > screenSize) {
        axeY = screenSize;
      }
      document.querySelector('.left_block').style.top = axeY + 'px';
      break;
    default:
      return;
  }
});

document.addEventListener('keydown', (eventOnArrowKeysForRightBlock) => {
  switch (eventOnArrowKeysForRightBlock.code) {
    case 'KeyW':
      axeY = axeY - 50;
      if (axeY < 0) {
        axeY = 0;
      }
      document.querySelector('.right_block').style.top = axeY + 'px';
      break;
    case 'KeyS':
      axeY = axeY + 50;
      let screenSize = window.innerHeight - 300;
      if (axeY > screenSize) {
        axeY = screenSize;
      }
      document.querySelector('.right_block').style.top = axeY + 'px';
      break;
    default:
      return;
  }
});
