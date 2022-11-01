class SortedList {
    constructor() {
        this.items = [];
        this.length = this.items.length;
    }

    add(item) {
        this.items.push(item)
        this.items.sort((a, b) => a - b);
        this.length += 1;
    }

    get(pos) {
        if (pos >= 0 && pos < this.length) {
            return this.items[pos]
        } else throw new Error('OutOfBounds');
    }

    max() {
        if (!this.length) {
            throw new Error('EmptySortedList');
        } else {
            return this.items[this.length - 1];
        }
    }

    min() {
        if (!this.length) {
            throw new Error('EmptySortedList');
        } else {
            return this.items[0]
        }
    }

    sum() {

    }

    avg() {

    }
}


module.exports = SortedList;