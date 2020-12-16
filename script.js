const leftPaddle = document.querySelector('.left_block');
const rightPaddle = document.querySelector('.right_block');

let axeY = 0;
let axeX = 0;

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

function myMove() {
  let screenHeight = window.innerHeight;
  let screenWidth = window.innerWidth;
  const pong = document.getElementById('animate');
  const id = setInterval(frame, 1);
  const maxDistToTravel = 600; // height of current screen
  let position = 0; // starting position of
  let end = maxDistToTravel;
  let direction = 1;

  function frame() {
    if (position === end) {
      direction *= -1; // reverses current direction

      end = Math.abs(maxDistToTravel - end); // stops at starting position to then start again
    }

    position += direction;

    pong.style.top = position + 'px';
    pong.style.bottom = position + 'px';
    pong.style.left = position + 'px';
    pong.style.right = position + 'px';
  }
}
