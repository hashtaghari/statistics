
function build_block(block_num) {

  // get block type (e.g., the stimuli that will be used)
  var block_type = stim_order[block_num];
  var category_array = eval(block_type + '_cat_array');

  // determine image path
  var image_path = 'images/';

  // determine block condition
  var block_condition = condition_order[block_num] // 1 for category, 2 for exemplar

  // determine which 3 of 4 categories to use
  var cats = jsPsych.randomization.sampleWithoutReplacement(category_array, 3);

  // determine which 5 of 8 images to use in each category
  var cat0img = jsPsych.randomization.sampleWithoutReplacement([1, 2, 3, 4, 5, 6, 7, 8], 5);
  var cat1img = jsPsych.randomization.sampleWithoutReplacement([1, 2, 3, 4, 5, 6, 7, 8], 5);
  var cat2img = jsPsych.randomization.sampleWithoutReplacement([1, 2, 3, 4, 5, 6, 7, 8], 5);

  // first category
  var s0 = image_path + cats[0] + cat0img[0] + '.png';
  var s1 = image_path + cats[0] + cat0img[1] + '.png';
  var s2 = image_path + cats[0] + cat0img[2] + '.png';
  var s3 = image_path + cats[0] + cat0img[3] + '.png';
  var s4 = image_path + cats[0] + cat0img[4] + '.png';

  // second category
  var s5 = image_path + cats[1] + cat1img[0] + '.png';
  var s6 = image_path + cats[1] + cat1img[1] + '.png';
  var s7 = image_path + cats[1] + cat1img[2] + '.png';
  var s8 = image_path + cats[1] + cat1img[3] + '.png';
  var s9 = image_path + cats[1] + cat1img[4] + '.png';

  // third category
  var s10 = image_path + cats[2] + cat2img[0] + '.png';
  var s11 = image_path + cats[2] + cat2img[1] + '.png';
  var s12 = image_path + cats[2] + cat2img[2] + '.png';
  var s13 = image_path + cats[2] + cat2img[3] + '.png';
  var s14 = image_path + cats[2] + cat2img[4] + '.png';


  // Associate each stimulus with a reward
  // In category condition, rewards are represented by letters which will be converted to functions in the learning trial
  var good_cat_mean_reward = jsPsych.randomization.sampleWithoutReplacement([3, 4, 5, 6], 1)
  var bad_cat_mean_reward = jsPsych.randomization.sampleWithoutReplacement([-3, -4, -5, -6], 1) 

  // In exemplar condition, rewards are -9 - 9 (no 0)
 // console.log('block condition:', block_condition)

  if (block_condition == 1){
    var rewards = Array(15);
    rewards.fill('A', 0);
    rewards.fill('B', 5);
    rewards.fill('C', 10);
  } else if(block_condition == 2){ // assign each exemplar w/in each category one of 5 outcome groups
    var vbad_outcomes = jsPsych.randomization.sampleWithoutReplacement([-9, -8, -7, -6], 4);
    var bad_outcomes = jsPsych.randomization.sampleWithoutReplacement([-5, -4, -3], 3);
    var med_outcomes = jsPsych.randomization.sampleWithoutReplacement([-2, -1, 1, 2,], 4);
    var good_outcomes = jsPsych.randomization.sampleWithoutReplacement([3, 4, 5], 3);
    var vgood_outcomes = jsPsych.randomization.sampleWithoutReplacement([6, 7, 8, 9], 3);

    var cat1_rewards = jsPsych.randomization.sampleWithoutReplacement([vbad_outcomes[0], bad_outcomes[0], med_outcomes[0], good_outcomes[0], vgood_outcomes[0]], 5);
    var cat2_rewards = jsPsych.randomization.sampleWithoutReplacement([vbad_outcomes[1], bad_outcomes[1], med_outcomes[1], good_outcomes[1], vgood_outcomes[1]], 5);
    var cat3_rewards = jsPsych.randomization.sampleWithoutReplacement([vbad_outcomes[2], bad_outcomes[2], med_outcomes[2], good_outcomes[2], vgood_outcomes[2]], 5);
    var rewards = cat1_rewards.concat(cat2_rewards).concat(cat3_rewards);

    //var rewards = jsPsych.randomization.sampleWithoutReplacement([-9, -8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9], 15)
  };


  // create array linking stimuli to rewards
  var six_learning_stim = [
    { stimulus: s0, reward: rewards[0], mean_cat_reward: good_cat_mean_reward, data: { cat_type: 'good', mean_cat_reward: good_cat_mean_reward, stim_cat: cats[0], task_part: 'learning', task_block: block_type, block_condition: block_condition, block_number: block_num }}, 
    { stimulus: s1, reward: rewards[1], mean_cat_reward: good_cat_mean_reward, data: { cat_type: 'good', mean_cat_reward: good_cat_mean_reward, stim_cat: cats[0], task_part: 'learning', task_block: block_type, block_condition: block_condition, block_number: block_num }}, 
    { stimulus: s5, reward: rewards[5], mean_cat_reward: bad_cat_mean_reward, data: { cat_type: 'bad', mean_cat_reward: bad_cat_mean_reward, stim_cat: cats[1], task_part: 'learning', task_block: block_type, block_condition: block_condition, block_number: block_num }}, 
    { stimulus: s6, reward: rewards[6], mean_cat_reward: bad_cat_mean_reward, data: { cat_type: 'bad', mean_cat_reward: bad_cat_mean_reward, stim_cat: cats[1], task_part: 'learning', task_block: block_type, block_condition: block_condition, block_number: block_num }}, 
    { stimulus: s10, reward: rewards[10], mean_cat_reward: 0, data: {cat_type: 'neutral', mean_cat_reward: 0,  stim_cat: cats[2], task_part: 'learning', task_block: block_type, block_condition: block_condition, block_number: block_num }}, 
    { stimulus: s11, reward: rewards[11], mean_cat_reward: 0, data: { cat_type: 'neutral', mean_cat_reward: 0, stim_cat: cats[2], task_part: 'learning', task_block: block_type, block_condition: block_condition, block_number: block_num }}];

  var three_learning_stim = [
    { stimulus: s2, reward: rewards[2], mean_cat_reward: good_cat_mean_reward, data: { cat_type: 'good', mean_cat_reward: good_cat_mean_reward, stim_cat: cats[0], task_part: 'learning', task_block: block_type, block_condition: block_condition, block_number: block_num }}, 
    { stimulus: s7, reward: rewards[7], mean_cat_reward: bad_cat_mean_reward, data: { cat_type: 'bad', mean_cat_reward: bad_cat_mean_reward, stim_cat: cats[1], task_part: 'learning', task_block: block_type, block_condition: block_condition, block_number: block_num }}, 
    { stimulus: s12, reward: rewards[12], mean_cat_reward: 0, data: { cat_type: 'neutral', mean_cat_reward: 0, stim_cat: cats[2],  task_part: 'learning', task_block: block_type, block_condition: block_condition, block_number: block_num }}];
 

  var one_learning_stim = [
    { stimulus: s3, reward: rewards[3], mean_cat_reward: good_cat_mean_reward, data: { cat_type: 'good', mean_cat_reward: good_cat_mean_reward, stim_cat: cats[0], task_part: 'learning', task_block: block_type, block_condition: block_condition, block_number: block_num }}, 
    { stimulus: s4, reward: rewards[4], mean_cat_reward: good_cat_mean_reward, data: { cat_type: 'good', mean_cat_reward: good_cat_mean_reward, stim_cat: cats[0], task_part: 'learning', task_block: block_type, block_condition: block_condition, block_number: block_num }}, 
    { stimulus: s8, reward: rewards[8], mean_cat_reward: bad_cat_mean_reward, data: { cat_type: 'bad', mean_cat_reward: bad_cat_mean_reward, stim_cat: cats[1], task_part: 'learning', task_block: block_type, block_condition: block_condition, block_number: block_num }}, 
    { stimulus: s9, reward: rewards[9], mean_cat_reward: bad_cat_mean_reward, data: { cat_type: 'bad', mean_cat_reward: bad_cat_mean_reward, stim_cat: cats[1], task_part: 'learning', task_block: block_type, block_condition: block_condition, block_number: block_num }}, 
    { stimulus: s13, reward: rewards[13], mean_cat_reward: 0, data: { cat_type: 'neutral', mean_cat_reward: 0, stim_cat: cats[2], task_part: 'learning', task_block: block_type, block_condition: block_condition, block_number: block_num }}, 
    { stimulus: s14, reward: rewards[14], mean_cat_reward: 0, data: { cat_type: 'neutral', mean_cat_reward: 0, stim_cat: cats[2], task_part: 'learning', task_block: block_type, block_condition: block_condition, block_number: block_num }}];


  // determine first fifteen trials (2x each of the 6 learning stim, 1x each of the three learning stim)
  var first_fifteen_six = jsPsych.randomization.repeat(six_learning_stim, 2);
  var first_fifteen_three = jsPsych.randomization.repeat(three_learning_stim, 1);

  // combine two sets of stimuli for the first fifteen trials and randomize order
  var first_fifteen_trials = first_fifteen_six.concat(first_fifteen_three);
  var first_fifteen_trials= jsPsych.randomization.repeat(first_fifteen_trials, 1);

  // determine subsequent trials
  var six_learning_stim_shuffled = jsPsych.randomization.repeat(six_learning_stim, 4);
  var three_learning_stim_shuffled = jsPsych.randomization.repeat(three_learning_stim, 2);
  var one_learning_stim_shuffled = jsPsych.randomization.repeat(one_learning_stim, 1)

  // combine
  var temp = six_learning_stim_shuffled.concat(three_learning_stim_shuffled).concat(one_learning_stim_shuffled);

  // shuffled
  var rest_of_trials = jsPsych.randomization.repeat(temp, 1);

  // combine into timeline
  var learning_stim = first_fifteen_trials.concat(rest_of_trials);

  // define preload block
  var preload_block = {
    type: 'preload',
   // audio: [eval(block_type + '_audio'), time_warning],
    images: all_images,
    message: "<p> Loading, please wait. </p>"
}


  // define learning procedure
  var learning_procedure = {
    timeline: [fixation, learning_trial],
    timeline_variables: learning_stim
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

