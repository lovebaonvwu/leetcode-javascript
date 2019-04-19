/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    for (let i = 0; i < matrix.length; ++i) {
        for (let j = i; j < matrix[i].length; ++j) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    for (let i = 0; i < matrix.length; ++i) {
        let rowLength = matrix[i].length;

        for (let j = 0; j < Math.ceil(rowLength / 2); ++j) {
            let temp = matrix[i][rowLength - 1 - j];
            matrix[i][rowLength - 1 - j] = matrix[i][j];
            matrix[i][j] = temp;
        }
    }
};
