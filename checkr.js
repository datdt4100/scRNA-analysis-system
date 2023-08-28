// Here, we suppose you already have Rserve running in the background on port 6311
const {library} = require('hordes');
const stats = library(package = "stats");

stats.lm("Sepal.Length ~ Sepal.Width, data = iris")
    .then((e) => console.log(e.join("\n")))
    .catch((err) => console.error(err))