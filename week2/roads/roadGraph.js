const buildGraph = require('./graph');

const roadGraph = (roads) => {
    // The expression below splits the items into seperate strings inside an array, but also replaces the ' ' and "'" to sanitize the return object
    let roadsArrays = roads.map(road => road.split('-').map(road => road.replace(' ', '_').replace("'", '')));

    return buildGraph(roadsArrays);
};

module.exports = roadGraph;