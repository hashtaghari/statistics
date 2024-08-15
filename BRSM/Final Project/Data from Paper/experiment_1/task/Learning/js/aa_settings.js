// Variables for best of three decision making game: Approach/Avoid version

// Task variables
var num_stim = 15; // number of unique stimuli per block
var num_prac_repetitions = 1; // number of repetitions of each stim during practice
var num_blocks = 6; //
var key1 = '1'; // 1 
var key2 = '0'; // 0
var reward_noise = 1.5; // SD of normal distributions determining reward

// choice optinon text in instructions
var choice_opt_text_1 = '<div class="choice-option-text"> Press "1." </div></div>';
var choice_opt_text_2 = '<div class="choice-option-text"> Press "0." </div></div>';

// base payment
var base_payment = 10;

// timing
var max_choice_time = 3000; // 3 seconds to make choice
var selection_time = 500;
var feedback_time = 1000;
var iti_time = 500;

// categories
var high_level_cats = ['animals', 'fruit', 'furniture', 'pets', 'plants', 'vehicles'];
var animals_cat_array = ['cow', 'horse', 'sheep', 'goat'];
var fruit_cat_array = ['apple', 'banana', 'orange', 'straw'];
var furniture_cat_array = ['bed', 'chair', 'sofa', 'table'];
var pets_cat_array = ['cat', 'dog', 'rabbit', 'rodent'];
var plants_cat_array = ['bush', 'cactus', 'flower', 'tree'];
var vehicles_cat_array = ['boat', 'plane', 'train', 'truck'];

// screen positions
var height = window.screen.availHeight;
var width = window.screen.availWidth;

var x_center = width / 2;
var y_center = height / 2;

// Image sizes 
var stimulus_width = width / 3;
var stimulus_height = stimulus_width * (3 / 4);
var stimulus_border_width = stimulus_width * (5 / 4);
var stimulus_border_height = stimulus_border_width * (3 / 4)


///////////////////
// RANDOMIZATION //
///////////////////

// determine stimulus order // 
var stim_order = jsPsych.randomization.shuffle(high_level_cats);

// should the choice options switch positions throughout the task?
var randomize_choice_positions = false; 

// What condition is the first block (1 for category first, 2 for exemplar first)? 
var urlvar = jsPsych.data.urlVariables();
var task_condition = urlvar.condition;

// determine condition order for first two blocks
if (task_condition == 1) {
    var first_two_conditions = [1, 2];
} else if (task_condition == 2) {
    var first_two_conditions = [2, 1];
} 

// determine condition order for last four blocks
var last_four_conditions = jsPsych.randomization.shuffle([1, 1, 2, 2]);
var condition_order = first_two_conditions.concat(last_four_conditions);

// initialize points
var block_points = 0;