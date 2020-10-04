let axeY = 0;
let axeX = 0;

const leftBlock = document.querySelector('.left_block');
const rightBlock = document.querySelector('.right_block');

document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowUp':
      axeY = axeY - 50;
      if (axeY < 0) {
        axeY = 0;
      }

      document.querySelector('div').style.top = axeY + 'px';
      //console.log('MOVE UP');
      break;
    case 'ArrowDown':
      axeY = axeY + 50;
      let screenSize = window.innerHeight - 300;
      if (axeY > screenSize) {
        axeY = screenSize;
      }
      document.querySelector('div').style.top = axeY + 'px';
      break; //console.log('MOVE down');
    default:
      return;
  }
});

// Move a block over the Y axis
function moveBlock(block, movement) {}
