%% Run CBM HBI for memory specificity %%
% Experiment 1 Version
% Kate Nussenbaum - katenuss@nyu.edu
% Last edited: 11/13/23

%cbm
addpath 'cbm/codes';
addpath(genpath('lik_funs'));

%load data for all subjects
fdata = load('all_data.mat');
data = fdata.all_data;

%determine which models to compare (1, 2, or 3)
model_compare_set = 3;

%% Model comparison sets
% 1.) How many choice weights did participants use?
% 2.) How were values initialized?
% 3.) How did participants learn from counterfactual information?

if model_compare_set == 1
    models = {@oneB, @twoB, @fourB};
    fcbm_filenames =  {'lap_oneB', 'lap_twoB', 'lap_fourB'};
    fname_hbi = 'cbm_hbi_output/hbi_beta';
elseif model_compare_set == 2
    models = {@fourB, @fourB_oneQ, @fourB_twoQ};
    fcbm_filenames =  {'lap_fourB', 'lap_fourB_oneQ', 'lap_fourB_twoQ'};
    fname_hbi = 'cbm_hbi_output/hbi_init_q';
 elseif model_compare_set == 3
    models = {@fourB_oneQ, @fourB_oneQ_CF, @fourB_oneQ_noCF};
    fcbm_filenames =  {'lap_fourB_oneQ', 'lap_fourB_oneQ_CF', 'lap_fourB_oneQ_noCF'};
    fname_hbi = 'cbm_hbi_output/hbi_cf';
end

% Results:
% 1 XPs: [0 0 1]
% 2 XPs: [0 1 0]
% 3 XPs: [1 0 0]

%% Do Bayesian inference with cbm hbi%%

% get the first-level fits
for m = 1:length(fcbm_filenames)
    fcbm_maps{m} = ['cbm_lap_output/', fcbm_filenames{m}];
end

% run cbm hbi
cbm_hbi(data, models, fcbm_maps, fname_hbi);
