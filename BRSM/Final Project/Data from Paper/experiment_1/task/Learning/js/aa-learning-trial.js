/**
 * aa-learning-trial
 * KN
 
 * plugin for displaying a centered image w/ two images as choices, getting a response, and providing feedback

 **/

jsPsych.plugins["aa-learning-trial"] = (function () {

  var plugin = {};

  plugin.info = {
    name: 'aa-learning-trial',
    description: '',
    parameters: {
      stimulus: {
        type: jsPsych.plugins.parameterType.IMAGE,
        pretty_name: 'Stimulus',
        default: undefined,
        description: 'The image to be displayed'
      },
      reward: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Reward',
        default: undefined,
        description: 'The reward associated with approaching that stimulus'
      },
      mean_cat_reward: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Mean of category reward distribution',
        default: undefined,
        description: 'Mean of the category reawrd distribution',
      },
      stimulus_height: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Image height',
        default: null,
        description: 'Set the image height in pixels'
      },
      stimulus_width: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Image width',
        default: null,
        description: 'Set the image width in pixels'
      },
      maintain_aspect_ratio: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Maintain aspect ratio',
        default: true,
        description: 'Maintain the aspect ratio after setting width or height'
      },
      choices: {
        type: jsPsych.plugins.parameterType.KEY,
        array: true,
        pretty_name: 'Choices',
        default: jsPsych.ALL_KEYS,
        description: 'The keys the subject is allowed to press to respond to the stimulus.'
      },
      choice_images: {
        type: jsPsych.plugins.parameterType.IMAGE,
        pretty_name: 'Choice image array',
        default: ['images/approach.png', 'images/avoid.png'],
        description: 'Array of choice images'
      },
      trial_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Trial duration',
        default: null,
        description: 'How long to show trial before it ends.'
      },
      display_selection_time: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Display selection time',
        default: null,
        description: 'How long to show the choice selection'
      },
      stimulus_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Stimulus duration',
        default: null,
        description: 'How long to hide the stimulus'
      },
      response_ends_trial: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Response ends trial',
        default: true,
        description: 'If true, trial will end when subject makes a response.'
      },
    }
  }

  plugin.trial = function (display_element, trial) {

    // determine the approach reward 
    if (trial.reward == 'A') {
      var approach_reward = Math.round(sampleNormal(parseInt(trial.mean_cat_reward), reward_noise));
      if (approach_reward <= 0) {
        approach_reward = 1; // ensure approach reward for 'good' category is positive
      }
    }
    else if (trial.reward == 'B') {
      var approach_reward = Math.round(sampleNormal(parseInt(trial.mean_cat_reward), reward_noise));
      if (approach_reward >= 0) {
        approach_reward = 2; // ensure approach reward for 'bad' category is negative
      }
    } else if (trial.reward == 'C') {
      var approach_reward = Math.round(sampleNormal(parseInt(trial.mean_cat_reward), reward_noise));
      if (approach_reward == 0) {
        approach_reward = jsPsych.randomization.sampleWithoutReplacement([-1, 1], 1); //ensure approach reward for neutral category is not 0
      }
    } else {
      approach_reward = trial.reward;
    }

  
    // initialize trial points at -5 (for failing to make a response)
    var trial_points = -5;

    // ---------------------------------- //
    // Section 1: Define HTML             //
    // ---------------------------------- //

    // display stimulus
    var html = '<div class="learning-stimulus" id="learning-stimulus"> <img src="' + trial.stimulus + '" width="' + trial.stimulus_width + '" height="' + trial.stimulus_height + '"></img> </div>';

    // draw coins
    html += '<div id = "coin1" class="coin"  type="A" stage="start"  > <img src="images/coin.png"></img></div>';
    html += '<div id = "coin2" class="coin"  type="B" stage="start"  > <img src="images/coin.png"></img></div>';
    html += '<div id = "coin3" class="coin"  type="C" stage="start"  > <img src="images/coin.png"></img></div>';
    html += '<div id = "coin4" class="coin"  type="D" stage="start"  > <img src="images/coin.png"></img></div>';

    // draw choice grid to display two choice options
    html += '<div class="choice-grid">';

    var i;
    for (i = 0; i < 2; i++) {
      // determine the choice image 
      var choice_img = trial.choice_images[i];
      // start choice container
      html += `<div class="choice-option" id="choice-option-${i}" >`;
      // draw choice image
      html += ` <img src="${choice_img}" id="choice-option-img-${i}" class="choice-option-img" stage="1" position="${i}">`;
      // Finish choice container
      html += '</div>';
    }

    // Close choice grid container.
    html += '</div>';

    // render
    display_element.innerHTML = html;

    // store response
    var response = {
      rt: null,
      choice: null
    };


    // ---------------------------------- //
    // Section 2: jsPsych Functions       //
    // ---------------------------------- //

    // function to handle responses by the subject
    var after_response = function (info) {

      // only record the first response
      if (response.key == null) {
        response = info;
      }

      // Create selected choice images
      if (response.key == key1) {
        display_element.querySelector('#choice-option-img-0').setAttribute('stage', 'selected')
        display_element.querySelector('#choice-option-img-1').setAttribute('stage', 'not selected')
        response.choice = key1

        // determine points earned
        trial_points = parseInt(approach_reward);
       
      } else if (response.key == key2) {
        display_element.querySelector('#choice-option-img-0').setAttribute('stage', 'not selected')
        display_element.querySelector('#choice-option-img-1').setAttribute('stage', 'selected')
        response.choice = key2;
      
       // determine points earned
        trial_points = 0;
      }
   
      // render for display selection time and then display feedback
      jsPsych.pluginAPI.setTimeout(function () {
        display_feedback()

      }, trial.display_selection_time)
    }; //end of after_response function


    var display_feedback = function () {
      // update feedback display 
      if (trial_points == 0) {

      // display feedback text in grey
      if (approach_reward > 0){
      html += feedback_text = `<div id="feedback" class="grey_pos">  ${approach_reward} </div>`;
      } else if (approach_reward < 0){
        html += feedback_text = `<div id="feedback" class="grey_neg"> ${approach_reward} </div>`;
      }
      var set_stage = "avoid"

      } else if (trial_points > 0) {
        html += feedback_text = `<div id="feedback" class="green"> ${approach_reward} </div>`;
      var set_stage = "win"
      }

      else if (trial_points < 0) {
        html += feedback_text = `<div id="feedback" class="red"> ${approach_reward} </div>`;
      var set_stage = "lose"
      }

      // render
      display_element.innerHTML = html;
      display_element.querySelector('#coin1').setAttribute('stage', set_stage)
      display_element.querySelector('#coin2').setAttribute('stage', set_stage)
      display_element.querySelector('#coin3').setAttribute('stage', set_stage)
      display_element.querySelector('#coin4').setAttribute('stage', set_stage)
    }

    // function to end trial when it is time
    var end_trial = function () {

      // kill any remaining setTimeout handlers
      jsPsych.pluginAPI.clearAllTimeouts();

      // kill keyboard listeners
      if (typeof keyboardListener !== 'undefined') {
        jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);
      }

      // gather the data to store for the trial 
      var trial_data = {
        "stimulus": trial.stimulus,
        "approach_reward": approach_reward,
        "points": trial_points,
        "key_press": response.key,
        "option_selected": response.choice,
        "rt": response.rt
      };

      // clear the display
      display_element.innerHTML = '';

      // move on to the next trial
      jsPsych.finishTrial(trial_data);
    };




    // ---------------------------------- //
    // Section 3: Run trial              //
    // ---------------------------------- //

    // start the response listener
    if (trial.choices != jsPsych.NO_KEYS) {
      var keyboardListener = jsPsych.pluginAPI.getKeyboardResponse({
        callback_function: after_response,
        valid_responses: trial.choices,
        rt_method: 'performance',
        persist: false,
        allow_held_key: false
      });
    }

    // hide stimulus if stimulus_duration is set
    if (trial.stimulus_duration !== null) {
      jsPsych.pluginAPI.setTimeout(function () {
        display_element.querySelector('#learning-stimulus').style.visibility = 'hidden';
      }, trial.stimulus_duration);
    }

    // end trial if trial_duration is set
    if (trial.trial_duration !== null) {
      jsPsych.pluginAPI.setTimeout(function () {
        end_trial();
      }, trial.trial_duration);
    };

  };

  return plugin;
})();
