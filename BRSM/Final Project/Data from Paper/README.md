# Reinforcement learning increasingly shapes memory specificity from childhood to adulthood
Tasks, anonymized data, and analysis code for: *Reinforcement learning increasingly shapes memory specificity from childhood to adulthood*

## Tasks
We conducted two multi-session online experiments. In the first session of each experiment, participants completed a reinforcement-learning task in which either specific exemplars or broader stimulus categories determined the rewards associated with different actions. In the second session, which was administered one week later, participants completed a memory test in which we probed the specificity of their memories for the stimuli encountered during learning.

The tasks were coded in jsPsych version 6.3.1 and administered online via Pavlovia.

## Data
Cleaned data and parameter estimates from our fitted reinforcement-learning models can be found in the data folders within each experiment. 

## Analysis and computational modeling code
### System requirements and installation guide
Data was analyzed in R (version 4.3.1) via RStudio (version 2023.09.1+49) and Matlab (version 2020b) on macOS Ventura. Code likely works with other software versions and operating systems but has not been tested. Instructions for installation can be found [here](https://posit.co/download/rstudio-desktop/) and [here](https://www.mathworks.com/help/install/).

### Instructions for use
Computational model-fitting was conducted in Matlab with the [cbm package](https://github.com/payampiray/cbm). Modeling code is located in the analysis folders for each experiment. To fit models to behavioral data:
1. First, run fit_cbm_lap.m to individually fit each participant's choice data with the models.
2. Then, run fit_cbm_hbi.m to conduct hierarchical fitting and model comparison.

Regression analyses were conducted and figures were created in R. The R markdown analysis scripts found in the analysis folders will reproduce the analyses described in the manuscript. 'Knitting' each R markdown script will generate an html file with analysis results, as well as .png files for all generated figures (which will be stored in the 'figures') subfolders. Several of the mixed-effects models take a long time to fit. Running each full analysis markdown file on a 'normal' computer may take several hours.

## Contact info
For questions, please contact katenuss@princeton.edu.
