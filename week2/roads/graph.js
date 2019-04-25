const buildGraph = (roadsArrays) => {
            let graph = Object.create(null);
            const addEdge = (from, to) => {
                if (graph[from] == null) {
                    graph[from] = [to];
                } else {
                    graph[from].push(to);
                }
            }
            for (let [from, to] of roadsArrays) {
                addEdge(from, to);
                addEdge(to, from);
            }
            return graph;
};

module.exports = buildGraph;