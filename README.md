# scRNA-analysis-by-using-scDHA

# Introduction
This is an online tool for single cell RNA sequencing analysis. There are four techniques including: cell clustering, trajectory inference, and visualization. User can use built-in dataset (Goolam) or update their own dataset. If the user's consent is received, the dataset will be updated to our corpus and made public. However, this web application is still not complete. It just perform until the step of uploading the data.

()

# Component
- NodeJS.
- Xampp for MySQL Server.
- R for scDHA package.

# News
- The package is now available on [CRAN](https://cran.r-project.org/package=scDHA).
- The machine learning framework is changed from Tensorflow to Torch. Torch can be called directly from R. Python environment is no longer required. 

# How to install
- The package can be installed from CRAN or this repository.  
- Using CRAN: `install.packages('scDHA')`  
- Using devtools:  
  - Install devtools: `utils::install.packages('devtools')`
  - Install the package using: `devtools::install_github('duct317/scDHA')`  
    Or, install with manual and vignette: `devtools::install_github('duct317/scDHA', build_manual = T, build_vignettes = T)`
- When the package is loaded, it will check for the necessary `libtorch`: `library(scDHA)`  
  `libtorch` can be installed using: `torch::install_torch()`

# To run the Goolam example
- Load the package: `library(scDHA)`
- Load Goolam dataset: `data('Goolam'); data <- t(Goolam$data); label <- as.character(Goolam$label)`
- Log transform the data: `data <- log2(data + 1)`
- Generating clustering result: `result <- scDHA(data, seed = 1)`
- The clustering result can be found here: `cluster <- result$cluster`
- Calculating adjusted Rand Index using mclust package: `mclust::adjustedRandIndex(cluster,label)`
- A detailed tutorial on how to use scDHA package is available at http://scdha.tinnguyen-lab.com/  
  Or, a vignette in R Notebook format is available [here](https://github.com/duct317/scDHA/blob/master/vignettes/Example.Rmd)

# How to use the package for new data 
To use our package for new data, the package includes these functions:  
- scDHA: main function, doing dimension reuction and clustering. The input is a matrix with rows as samples and columns as genes.
- scDHA.vis: visualization. The input is demension reduction output.
- scDHA.pt: generating pseudotime. The input is demension reduction output.
- scDHA.class: classification new data using available one. The inputs consist of train data matrix, train data label and new data matrix. 
- The result is reproducible by setting seed for these functions.
- More detail about parameters for each function could be found in the manual.
