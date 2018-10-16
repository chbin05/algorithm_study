// Complete the jumpingOnClouds function below.
// @param {array} c an array of binary integers
// @returns {number} minimun jump count to win the game
function jumpingOnClouds(c) {
    /*
    # 주어진 조건
    - 엠마는 1칸 혹은 2칸을 움직일 수 있다.
    - 0이면 밟아도 되는 구름, 1이면 밟으면 안되는 구름
    - 항상 마지막 구름까지 갈 수 있다.
    - 구름은 2개 이상 100개 이하
    - 첫번째 구름, 마지막 구름은 항상 밟아도 되는 구름 (c[0] = c[n-1] = 0)
    */
    const finishPosition = (c.length - 1)
    let currentPosition = 0;
    let jumpCount = 0;
    
    while (currentPosition < finishPosition) {
        if (_canJumpTo(c[currentPosition + 2])) {
            currentPosition = currentPosition + 2;
        } else {
            currentPosition = currentPosition + 1;
        }
        jumpCount++;
    }
    
    return jumpCount;
}

function _canJumpTo(cloud) {
    if (cloud === 1) {
        return false;
    }
    return true;
}
