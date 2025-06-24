function connectTheDots(paper) {
    let grid = paper.split('\n').map(row => row.split(''));
    const height = grid.length;
    const width = grid[0].length;

    let dots = {};
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const ch = grid[y][x];
            if (ch >= 'a' && ch <= 'z') {
                dots[ch] = {x, y};
            }
        }
    }

    let keys = Object.keys(dots).sort();
}