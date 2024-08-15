%% KN

function [loglik] = oneB(parameters, subj)

%get parameters
nd_beta = parameters(1);
beta = exp(nd_beta); %transformed to be > 0

nd_alpha = parameters(2); % normally distributed alpha
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

% Loop through trials
for trial_num = 1:T
    
    % On trial 1, initialize value estimates
    if trial_num == 1 || trial(trial_num) == 1 || trial(trial_num) < trial(trial_num - 1)
        exemp_ests = zeros(1, 15);
        cat_ests = zeros(1, 3);
    end
    
    %Determine stimulus value estimate by taking weighted sum of exemplar
    %and category
    ev = exp([beta .* (cat_ests(category(trial_num)) + exemp_ests(exemplar(trial_num))), 0]);
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
        category_PE = points(trial_num) - cat_ests(category(trial_num));
        exemplar_PE = points(trial_num) - exemp_ests(exemplar(trial_num));
        cat_ests(category(trial_num)) = cat_ests(category(trial_num)) + alpha*category_PE;
        exemp_ests(exemplar(trial_num)) = exemp_ests(exemplar(trial_num)) + alpha*exemplar_PE;
    %end
    
  
end

% compute log likelihood by summing the log probability of the choice data
loglik = sum(log(p + eps));

%add eps (very small number) to overcome very very small values of p

