%% Fit models to memory specificity choice data using CBM %%
% Experiment 1 Version
% Kate Nussenbaum - katenuss@nyu.edu
% Last edited: 11/13/23

% clear everything
clear;

%add cbm
addpath('cbm/codes');
addpath(genpath('lik_funs'));

% format data into mat? (1 if reading from csv, 0 if 'all_data.mat' exists
% already)
format_data = 0;

%% Put data in correct format (or load if already formatted) %%
if (format_data == 1)
    data = readtable('../../data/e1_rl_data.csv');
    
    %recode points by dividing by max
    data.reward = data.approach_reward/11;
    
    %determine the number of subjects and get subject list
    n_subjects = length(unique(data.subject_id));
    sub_list = unique(data.subject_id);
    
    %store in all_data structure
    all_data{n_subjects} = struct();
    
    for sub = 1:n_subjects
        
        %get the subject id
        subject = sub_list(sub);
        
        %get the data for this subject
        sub_data = data(data.subject_id == subject, :);
        
        %format relevant variables
        all_data{sub}.condition = sub_data.block_condition;
        all_data{sub}.trial = sub_data.trial;
        all_data{sub}.category = sub_data.cat_number;
        all_data{sub}.exemplar = sub_data.stim_number;
        all_data{sub}.choice = sub_data.choice;
        all_data{sub}.points = sub_data.reward;
        all_data{sub}.sub_id = subject;
    end
    save('all_data', 'all_data');
else
    load('all_data');
end

%rename as data
data = all_data;

%% Run cbm lap for each model %%

% determine list of models
models = {'oneB', 'twoB', 'fourB', 'fourB_oneQ', 'fourB_twoQ', 'fourB_oneQ_noCF', 'fourB_oneQ_CF'};

% define numbers of parameters for each model
n_params = [2, 3, 5, 6, 7, 6, 7];

% define prior variance for each parameter
v = 6.25;

%% Run cbm_lap for each model
for m = 1:length(models)
    
    %setup
    model_name = models{m};
    fh = str2func(model_name);
    prior = struct('mean', zeros(n_params(m), 1), 'variance', v);
    fname = ['cbm_lap_output/lap_', model_name];
    
    %run cbm lap
    cbm_lap(data, fh, prior, fname);
end
