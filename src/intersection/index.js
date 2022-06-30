function intersection(a, b) {
    const aValues = new Map();
    const sharedValues = new Set();

    a.forEach((element) => aValues.set(element));

    b.forEach((element) => {
        if(aValues.has(element)) sharedValues.add(element);
    })

    return [...sharedValues]
}

module.exports = intersection;
