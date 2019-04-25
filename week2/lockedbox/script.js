const box = {
    locked: false, //Op false gezet om bonus opdracht te testen
    unlock() { this.locked = false; },
    lock() { this.locked = true;  },
    _content: [],
    get content() {
        if (this.locked) throw new Error("Locked!");
        return this._content;
    }
};

function withBoxUnlocked(body) {
    let boxLockedBefore = true; //Checked of de box gelockt is, standaard ervanuit dat is wel locked is
    try {
        if (!box.locked) boxLocked = false;
        box.unlock();
        body();
    } catch (e) {
        console.log(box.content)
    } finally {
        if (!boxLockedBefore) box.lock();
    }

}


withBoxUnlocked(function() {
    box.content.push("gold piece");
});

try {
    withBoxUnlocked(function() {
        throw new Error("Pirates on the horizon! Abort!");
    });
} catch (e) {
    console.log("Error raised:", e);
}
console.log(box.locked);
// → true