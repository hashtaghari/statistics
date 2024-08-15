// Variables for best of three decision making game: Approach/Avoid version

// Response keys
var key1 = '1'; // 1 
var key2 = '2'; // 2
var key3 = '3'; // 3
var key4 = '4'; // 4

// Timing
var max_choice_time = 10000; // 
var selection_time = 1000;
var iti_time = 500; // 

// how many trials before a break?
var num_before_break = 50;

// initialize trial count at zero
var trial_count = 0;

/** Global position variables **/
var height = window.screen.availHeight;
var width = window.screen.availWidth;

var x_center = width / 2;
var y_center = height / 2;

// Image sizes // 
var stimulus_width = width / 3;
var stimulus_height = stimulus_width * (3 / 4);

var stimulus_border_width = stimulus_width * (5 / 4);
var stimulus_border_height = stimulus_border_width * (3 / 4)

var choice_width = stimulus_width / 3;
var choice_height = choice_width;

var left_choice_x = x_center - stimulus_width - choice_width;
var right_choice_x = x_center + stimulus_width;
var choice_y = y_center - choice_height;