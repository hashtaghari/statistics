%% Export memory specificity parameter estimates %%
% Experiment 2 Version
% Kate Nussenbaum - katenuss@nyu.edu
% Last edited: 11/13/23

% Export non-hierarchical fits for all subjects from best-fitting model 
clear all;

%% get subject IDs
load('all_data');

for sub = 1:length(all_data)
    sub_list(sub) = all_data{sub}.sub_id;
end


%% Export non-hierarchical fits 

%load fit model data
load('cbm_lap_output/lap_fourB_oneQ_CF')

% param names
param_names = {'beta_c_cCond', 'beta_e_cCond', 'beta_c_eCond', 'beta_e_eCond', 'alpha', 'alpha_cf', 'q_init'};

%get params
params = cbm.output.parameters;

%determine headers
headers{1} = 'subject_id';

for column = 1:length(param_names)
    headers{column+1} = param_names{column};
end

%save as csv
csvwrite_with_headers('../../data/model_estimates/params_fourB_oneQ_CF.csv', [sub_list', params], headers);
