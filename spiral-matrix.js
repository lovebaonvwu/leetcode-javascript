// 54. Spiral Matrix

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (!matrix.length) return [];

    let rowLo = 0;
    let rowHi = matrix.length;
    let colLo = 0;
    let colHi = matrix[0].length;

    let ans = [];

    const directions = {
        RIGHT: 'right',
        BOTTOM: 'bottom',
        LEFT: 'left',
        TOP: 'top'
    };

    let direction = directions.RIGHT;

    while (rowLo < rowHi && colLo < colHi) {
        switch (direction) {
            case directions.RIGHT:
                for (let i = colLo; i < colHi; ++i) {
                    ans.push(matrix[rowLo][i]);
                }
                ++rowLo;
                direction = directions.BOTTOM;
                break;
            case directions.BOTTOM:
                for (let i = rowLo; i < rowHi; ++i) {
                    ans.push(matrix[i][colHi - 1]);
                }
                --colHi;
                direction = directions.LEFT;
                break;
            case directions.LEFT:
                for (let i = colHi - 1; i >= colLo; --i) {
                    ans.push(matrix[rowHi - 1][i]);
                }
                --rowHi;
                direction = directions.TOP;
                break;
            case directions.TOP:
                for (let i = rowHi - 1; i >= rowLo; --i) {
                    ans.push(matrix[i][colLo]);
                }
                ++colLo;
                direction = directions.RIGHT;
                break;
        }
    }

    return ans;
};
