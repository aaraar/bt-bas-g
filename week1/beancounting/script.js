const countChar = (haystack, needle) => {
    let count = 0;
    for (i = 0; i < haystack.length; i++) {
        count = haystack[i] === needle ? count += 1 : count;
    }
    return count;
};

console.log(countChar('hottetottetentententoonstelling', 't'));