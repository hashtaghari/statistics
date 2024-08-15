%% KN

function [loglik] = fourB(parameters, subj)

%get parameters
nd_beta_cat_catCond = parameters(1);
beta_cat_catCond = exp(nd_beta_cat_catCond); %transformed to be > 0

nd_beta_ex_catCond = parameters(2);
beta_ex_catCond = exp(nd_beta_ex_catCond); %transformed to be > 0

nd_beta_cat_exCond = parameters(3);
beta_cat_exCond = exp(nd_beta_cat_exCond); %transformed to be > 0

nd_beta_ex_exCond = parameters(4);
beta_ex_exCond = exp(nd_beta_ex_exCond); %transformed to be > 0

nd_alpha = parameters(5); % normally distributed alpha
alpha = 1/(1+exp(-nd_alpha)); % alpha (transformed to be between zero and one)

%get relevant data variables
condition = subj.condition;
trial = subj.trial;
category = subj.category;
exemplar = subj.exemplar;
choices = subj.choice;
points = subj.points;

%number of total trials
T = size(choices, 1);

% save choice probabilities
p = nan(T, 1);

%set initial q values
q_init = .5;

% Loop through trials
for trial_num = 1:T
    
    % On first trial of each block, initialize value estimates
    if trial_num == 1 || trial(trial_num) < trial(trial_num - 1)
        exemp_ests = q_init .* ones(9, 3);
        cat_ests = q_init .* ones(3, 3);
    end
    
    %determine condition
    if condition(trial_num) == 1
        beta_c = beta_cat_catCond;
        beta_e = beta_ex_catCond;
    elseif condition(trial_num) == 2
        beta_c = beta_cat_exCond;
        beta_e = beta_ex_exCond;
    end
    
    % Determine choice probabilities
    weighted_exemplar_choice_vals = beta_e .* exemp_ests(exemplar(trial_num), :);
    weighted_category_choice_vals = beta_c .* cat_ests(category(trial_num), :);
    ev = exp(weighted_exemplar_choice_vals + weighted_category_choice_vals);
    sev = sum(ev);
    choice_probs = ev/sev;
    
    % Determine the choice the participant actually made on this trial
    trial_choice = choices(trial_num);
    
    %Determine the probability that the participant made the choice they
    %made
    p(trial_num) = choice_probs(trial_choice);
    
    %Compute  prediction error and update
    %value estimates
    %if trial_choice == 1
    category_PE = points(trial_num) - cat_ests(category(trial_num), trial_choice);
    exemplar_PE = points(trial_num) - exemp_ests(exemplar(trial_num), trial_choice);
    cat_ests(category(trial_num), trial_choice) = cat_ests(category(trial_num), trial_choice) + alpha*category_PE;
    exemp_ests(exemplar(trial_num), trial_choice) = exemp_ests(exemplar(trial_num), trial_choice) + alpha*exemplar_PE;
    %end
    
    
end

% compute log likelihood by summing the log probability of the choice data
loglik = sum(log(p + eps));

%add eps (very small number) to overcome very very small values of p

