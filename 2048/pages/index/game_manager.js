const Grid = require("./grid.js");

function GameManager(size, startTiles) {
    this.size = size;
    this.startTiles = startTiles;
}
GameManager.prototype = {
    setup: function() {
        this.grid = new Grid(this.size);
        this.addStartTiles();
        return this.grid.cells;
    },
    addStartTiles() {
        for (let title = 0; title < this.startTiles; title++) {
            this.addRandomTiles();
        }
    },
    addRandomTiles: function() {
        if (this.grid.cellAvaliable()) {
            const value = Math.random() < 0.9 ? 2 : 4;
            // 随机位置
            // x y
            const cell = this.grid.randomAvaliableCell();
            const tile = {
                x: cell.x,
                y: cell.y,
                value: value
            }

            this.grid.insertTile(tile);
        }
    }
}


module.exports = GameManager;