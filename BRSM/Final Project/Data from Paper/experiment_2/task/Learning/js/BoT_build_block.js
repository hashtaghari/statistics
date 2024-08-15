
function build_block(block_num) {

  // get block type
  var block_type = stim_order[block_num];
  var category_array = eval(block_type + '_cat_array');

  // determine image path
  var image_path = 'images/';

  // determine which 3 of 4 categories to use
  var cats = jsPsych.randomization.sampleWithoutReplacement(category_array, 3);

  // determine which 3 of 5 images to use in each category
  var cat1img = jsPsych.randomization.sampleWithoutReplacement([1, 2, 3, 4, 5], 3);
  var cat2img = jsPsych.randomization.sampleWithoutReplacement([1, 2, 3, 4, 5], 3);
  var cat3img = jsPsych.randomization.sampleWithoutReplacement([1, 2, 3, 4, 5], 3);

  var s1 = image_path + cats[0] + cat1img[0] + '.png';
  var s2 = image_path + cats[0] + cat1img[1] + '.png';
  var s3 = image_path + cats[0] + cat1img[2] + '.png';
  var s4 = image_path + cats[1] + cat2img[0] + '.png';
  var s5 = image_path + cats[1] + cat2img[1] + '.png';
  var s6 = image_path + cats[1] + cat2img[2] + '.png';
  var s7 = image_path + cats[2] + cat3img[0] + '.png';
  var s8 = image_path + cats[2] + cat3img[1] + '.png';
  var s9 = image_path + cats[2] + cat3img[2] + '.png';

  // determine choice images
  var choice_stim = [image_path + block_type + '_choice1.png', image_path + block_type + '_choice2.png', image_path + block_type + '_choice3.png'];

  // build timeline
  var learning_stim = [
    { stimulus: s1, correct_response: cr1[block_num], choice_images: choice_stim, data: { stim_cat: cats[0], task_part: 'learning', task_block: block_type, block_condition: condition_order[block_num], block_number: block_num  } },
    { stimulus: s2, correct_response: cr2[block_num], choice_images: choice_stim, data: { stim_cat: cats[0], task_part: 'learning', task_block: block_type, block_condition: condition_order[block_num], block_number: block_num } },
    { stimulus: s3, correct_response: cr3[block_num], choice_images: choice_stim, data: { stim_cat: cats[0], task_part: 'learning', task_block: block_type, block_condition: condition_order[block_num], block_number: block_num } },
    { stimulus: s4, correct_response: cr4[block_num], choice_images: choice_stim, data: { stim_cat: cats[1], task_part: 'learning', task_block: block_type, block_condition: condition_order[block_num], block_number: block_num } },
    { stimulus: s5, correct_response: cr5[block_num], choice_images: choice_stim, data: { stim_cat: cats[1], task_part: 'learning', task_block: block_type, block_condition: condition_order[block_num], block_number: block_num } },
    { stimulus: s6, correct_response: cr6[block_num], choice_images: choice_stim, data: { stim_cat: cats[1], task_part: 'learning', task_block: block_type, block_condition: condition_order[block_num], block_number: block_num } },
    { stimulus: s7, correct_response: cr7[block_num], choice_images: choice_stim, data: { stim_cat: cats[2], task_part: 'learning', task_block: block_type, block_condition: condition_order[block_num], block_number: block_num } },
    { stimulus: s8, correct_response: cr8[block_num], choice_images: choice_stim, data: { stim_cat: cats[2], task_part: 'learning', task_block: block_type, block_condition: condition_order[block_num], block_number: block_num } },
    { stimulus: s9, correct_response: cr9[block_num], choice_images: choice_stim, data: { stim_cat: cats[2], task_part: 'learning', task_block: block_type, block_condition: condition_order[block_num], block_number: block_num } }];


  // define preload block
  var preload_block = {
    type: 'preload',
    audio: [eval(block_type + '_audio'), time_warning],
    images: all_images,
    message: "<p> Loading, please wait. </p>"
}


  // define learning procedure
  var learning_procedure = {
    timeline: [fixation, learning_trial],
    timeline_variables: learning_stim,
    sample: {
      type: 'fixed-repetitions',
      size: num_repetitions_per_block
    }
  }

  // define instructions
  var block_instructions = {
    timeline: [learning_instructions],
    timeline_variables: eval(block_type + '_instructions_text'),
    randomize_order: false
  }

    /* block end screen */
    var block_end_screen = {
      type: "html-button-response",
      data: { task_part: 'break' },
      stimulus: function () {
        var trials = jsPsych.data.get().filter({ block_number: block_num });
        var block_points = trials.select('points').sum();
  
        return "<p> You have completed the round! " +
          "<p> In this round, you earned " + block_points + " points! </p>";
      },
      choices: ['Next']
    };

  // add to learning block
  var learning_block = {
    timeline: [preload_block, block_instructions, learning_procedure, block_end_screen]
  }

  timeline.push(learning_block)

}

