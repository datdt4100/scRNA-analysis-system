# scRNA-analysis-by-using-scDHA

# Introduction
This is an online tool for single cell RNA sequencing analysis. There are four techniques including: cell clustering, trajectory inference, classification and visualization. User can use built-in dataset (Goolam) or update their own dataset. If the user's consent is received, the dataset will be updated to our corpus and made public. However, this web application is still not complete. It just perform until the step of uploading the data and I also perform a demo of these for techniques with the Goolam dataset in javascript code.

![Screenshot of the app](https://github.com/trandat04102000/scRNA-analysis-system/blob/main/data/home_screenshot.png)

# Component
- NodeJS for runtime environment.
- Xampp for MySQL Server.
- R for scDHA package.

# How to install
- Download and Install NodeJS at [here](https://nodejs.org/en).
- Download and Install Xampp at [here](https://www.apachefriends.org/download.html), we just use this tool for the server of MySQL.
- Download and Install R at [here](https://cloud.r-project.org/). After installation, please add Rscript to your PATH system variable. The path of Rscript usually is C:\Program Files\R\R-4.3.1\bin\x64.

# Application setup
- Clone this repo to your local repository.
- Run this command to install the javascript packages: 
```bash
npm install.
```
- Run this command to install the R package by using javascript: 
```bash
node install_R_package.js
```
- Open Xampp and start only the module of MySQL and Apache, then access to the link http://localhost/phpmyadmin/ to create the database first. I named it is `scrna_sys` and then run the command in https://github.com/trandat04102000/scRNA-analysis-system/blob/main/db.txt to create the table of dataset as well as insert some data to this table. You sholud check your database config again in these file: https://github.com/trandat04102000/scRNA-analysis-system/blob/main/app/model/m_general.js for check the name of the table, https://github.com/trandat04102000/scRNA-analysis-system/blob/main/app/model/m_general.js for the the name of the database.

# To run the application
- Run the module of MySQL in Xampp first.
- Run the application by command: 
```bash
npm start
```
- Then access the link http://localhost:3000/ to enjoy the app. 
- First, you can click to publication to read more our publication of thes four analysis techniques.
- There are four functionalities in the web for you to try. 
- After select once of them, you should choose your dataset, which is available. Some of dataset is unavailable and will be updated later.
- In the step of adding the dataset, some information is require such as Name, the Tissue of the dataset and the dataset file with format of Tab Seperate Delimiter (tsv). The metadata file and published year of dataset is optional. However the function of attached the metadata file is still exist some problem.
- After selecting the dataset, you are able to execute the analysis technique, the result will be given below. However, this function is updating. 
- In addition, you can see the demo of these four analysis technique by run the file `run_demo.js`:
```bash
node run_demo.js
```
- The result of Clustering and Classification is shown in the console and others is export to Rplots.pdf file.

- A detailed tutorial on how to use scDHA package is available at http://scdha.tinnguyen-lab.com/  
  Or, a vignette in R Notebook format is available [here](https://github.com/duct317/scDHA/blob/master/vignettes/Example.Rmd)

* Screen shot of the publication page:

![Screen shot of the publication](https://github.com/trandat04102000/scRNA-analysis-system/blob/main/data/publication_screenshot.png)

* Screen shot of the dataset selection:

![Screen shot of the dataset selection](https://github.com/trandat04102000/scRNA-analysis-system/blob/main/data/dataset_screenshot.png)

# How to use the package for new data 
To use our package for new data, the package includes these functions:  
- scDHA: main function, doing dimension reuction and clustering. The input is a matrix with rows as samples and columns as genes.
- scDHA.vis: visualization. The input is demension reduction output.
- scDHA.pt: generating pseudotime. The input is demension reduction output.
- scDHA.class: classification new data using available one. The inputs consist of train data matrix, train data label and new data matrix. 
- The result is reproducible by setting seed for these functions.
- More detail about parameters for each function could be found in the manual.
