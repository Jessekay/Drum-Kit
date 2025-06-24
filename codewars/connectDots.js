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

    function drawLine(from, to) {
        let dx = Math.sign(to.x - from.x);
        let dy = Math.sign(to.y - from.y);

        let x = from.x;
        let y = from.y;

        while (x !== to.x || y !== to.y) {
            x +=dx;
            y += dy;

            if (grid[y][x] === ' ') {
                grid[y][x] = '*';
            }
        }
    }

    for (let i = 0; i < keys.length -1; i++) {
        const from = dots[keys[i]];
        const to = dots[keys[i + 1]];
        drawLine(from, to);
    }
    return grid.map(row => row.join('')).join('\n');
}