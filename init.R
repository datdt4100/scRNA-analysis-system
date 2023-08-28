# ex-sync.R
torch::install_torch()

if (!requireNamespace("mclust", quietly = TRUE)) install.packages("mclust", repos = "http://cran.us.r-project.org")
if (!require("scDHA")) install.packages("scDHA", repos = "http://cran.us.r-project.org")
if (!require("readr")) install.packages("readr", repos = "http://cran.us.r-project.org")