Array.prototype.indexOf = function (val) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] == val) return i
    }
    return -1
}

Array.prototype.remove = function (val) {
    let index = this.indexOf(val)
    if (index > -1) {
        this.splice(index, 1)
    }
}
