function Grid(size) {
    // size 大小 规格
    this.size = size;
    this.cells = this.empty();
}
Grid.prototype = {
        // 返回一个空的矩阵（网格），二位数组
        empty: function() {
            let cells = [];
            for (let i = 0; i < this.size; i++) {
                cells[i] = [];
                for (let j = 0; j < this.size; j++) {
                    cells[i].push(null);
                }
            }
            return cells;
        },
        // 找出所有空位置
        avaliableCells() {
            // 空位置
            var cells = [];
            for (let i = 0; i < this.size; i++) {
                for (let j = 0; j < this.size; j++) {
                    if (!this.cells[i][j]) {
                        cells.push({
                            x: i,
                            y: j
                        })
                    }
                }
            }
            return cells;
        },
        cellAvaliable() {
            // 0 || >0
            // 两个感叹号!!强转为true or false
            return !!this.avaliableCells().length;
        },
        randomAvaliableCell() {
            const cells = this.avaliableCells();
            return cells[Math.floor(Math.random() * cells.length)];
        },
        insertTile(tile) {
            this.cells[tile.x][tile.y] = tile;
        }
    }
    // commonJS
module.exports = Grid;

// ecm