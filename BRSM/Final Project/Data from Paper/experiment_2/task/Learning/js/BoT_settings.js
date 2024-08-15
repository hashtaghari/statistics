// Variables for best of three decision making game

// Task variables
var num_stim = 9; // number of stimuli per block
var num_repetitions_per_block = 8; 
var num_blocks = 6; //
var num_prac_repetitions = 2; // should be 2
var reward_probs = [.9, .1, .1]; // high and low reward probabilities 
var key1 = '1'; // 1 
var key2 = '2'; // 2
var key3 = '3'; // 3

// base payment
var base_payment = 10;

// timing
var max_choice_time = 4000; 
var selection_time = 500;
var feedback_time = 500;
var iti_time = 500;

// feedback images
var win_feedback_img = "images/check.png"
var lose_feedback_img = "images/x.png"

// categories
var high_level_cats = ['animals', 'fruit', 'furniture', 'pets', 'plants', 'vehicles'];
var animals_cat_array = ['cow', 'horse', 'goat', 'sheep'];
var fruit_cat_array = ['apple', 'banana', 'orange', 'straw'];
var furniture_cat_array = ['bed', 'chair', 'sofa', 'table'];
var pets_cat_array = ['dog', 'feline', 'rodent', 'rabbit'];
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

var feedback_width = width / 10;
var feedback_height = feedback_width;

////////////////////
// RANDOMIZATION //
////////////////////

// determine stimulus order // 
var stim_order = jsPsych.randomization.shuffle(high_level_cats);

// should the choice options switch positions throughout the task?
var randomize_choice_positions = true; 

// What condition is the first block (1 for category first, 2 for exemplar first)? 
var urlvar = jsPsych.data.urlVariables();
var condition = urlvar.condition;

// determine condition order for first two blocks
if (condition == 1) {
    var first_two_conditions = [1, 2];
} else if (condition == 2) {
    var first_two_conditions = [2, 1];
} 

// determine condition order for last four blocks
var last_four_conditions = jsPsych.randomization.shuffle([1, 1, 2, 2]);
var condition_order = first_two_conditions.concat(last_four_conditions);


/////////////////////
// INITIALIZATIONS //
/////////////////////

// initialize response arrays //
var cr1 = Array(num_blocks)
var cr2 = Array(num_blocks)
var cr3 = Array(num_blocks)
var cr4 = Array(num_blocks)
var cr5 = Array(num_blocks)
var cr6 = Array(num_blocks)
var cr7 = Array(num_blocks)
var cr8 = Array(num_blocks)
var cr9 = Array(num_blocks)

// define correct responses for each block
for (let block_num = 0; block_num < num_blocks; block_num++) {
    if (condition_order[block_num] == 1) {
        cr1[block_num] = 0;
        cr2[block_num] = 0;
        cr3[block_num] = 0;
        cr4[block_num] = 1;
        cr5[block_num] = 1;
        cr6[block_num] = 1;
        cr7[block_num] = 2;
        cr8[block_num] = 2;
        cr9[block_num] = 2;
    } else if (condition_order[block_num] == 2) {
        cr1[block_num] = 0;
        cr2[block_num] = 1;
        cr3[block_num] = 2;
        cr4[block_num] = 0;
        cr5[block_num] = 1;
        cr6[block_num] = 2;
        cr7[block_num] = 0;
        cr8[block_num] = 1;
        cr9[block_num] = 2;
    }
}

// initialize points
var block_points = 0;