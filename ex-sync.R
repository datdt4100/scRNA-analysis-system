# ex-sync.R
torch::install_torch()

if (!requireNamespace("mclust", quietly = TRUE)) install.packages("mclust", repos = "http://cran.us.r-project.org")
if (!require("scDHA")) install.packages("scDHA", repos = "http://cran.us.r-project.org")
library(scDHA)
data("Goolam")

#Get data matrix and label
data <- t(Goolam$data); label <- as.character(Goolam$label)


data <- log2(data + 1)

### Clustering
#Generate clustering result, the input matrix has rows as samples and columns as genes
result <- scDHA(data, seed = 1)

#The clustering result can be found here 
cluster <- result$cluster

#Calculate adjusted Rand Index using mclust package
ari <- round(mclust::adjustedRandIndex(cluster,label), 2)
print(paste0("ARI = ", ari))
