const buildGraph = require('./graph');

const roadGraph = (roads) => {
    let roadsArrays = roads.map(road => road.split('-'));
    return buildGraph(roadsArrays);
};

module.exports = roadGraph;