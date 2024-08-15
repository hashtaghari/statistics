/**
 * jspsych-choice-memory-trial
 * KN
 *
 * plugin for displaying a centered image w/ three images as choices and  getting a response
 *
 *
 **/


jsPsych.plugins["choice-memory-trial"] = (function () {

  var plugin = {};

  plugin.info = {
    name: 'choice-memory-trial',
    description: '',
    parameters: {
      stimulus: {
        type: jsPsych.plugins.parameterType.IMAGE,
        pretty_name: 'Stimulus',
        default: undefined,
        description: 'The image to be displayed'
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
        default: null,
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
       correct_response: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'The correct response',
        default: true,
        description: 'The response associated with the highest reward probability.'
      },
    }
  }

  plugin.trial = function (display_element, trial) {

    // Randomly determine choice positions
    var positions = [0, 1, 2];
    var shuffled_positions = jsPsych.randomization.shuffle(positions);

    // ---------------------------------- //
    // Section 1: Define HTML             //
    // ---------------------------------- //

    // display stimulus
    var html = '<div class="choice-mem-stimulus" id="choice-mem-stimulus"> <img src="' + trial.stimulus + '" width="' + trial.stimulus_width + '" height="' + trial.stimulus_height + '"></img> </div>';

    // draw choice grid to display three choice options
    html += '<div class="choice-mem-grid">';

    var i;
    for (i = 0; i < 3; i++) {
      // determine the choice image 
      var choice_img = trial.choice_images[shuffled_positions[i]];
      // start choice container
      html += `<div class="choice-mem-option" id="choice-mem-option-${i}" >`;
      // draw choice image
      html += ` <img src="${choice_img}" id="choice-mem-option-img-${i}" class="choice-mem-option-img" stage="1" position="${i}">`;
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
      key: null,
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

      // generate random number to determine feedback
      var rand_num = Math.random();

      // Create selected choice images
      if (response.key == key1) {
        display_element.querySelector('#choice-mem-option-img-0').setAttribute('stage', 'selected')
        display_element.querySelector('#choice-mem-option-img-1').setAttribute('stage', 'not selected')
        display_element.querySelector('#choice-mem-option-img-2').setAttribute('stage', 'not selected')
        response.choice = trial.choice_images[shuffled_positions[0]];

      } else if (response.key == key2) {
        console.log(response.key)
        display_element.querySelector('#choice-mem-option-img-0').setAttribute('stage', 'not selected')
        display_element.querySelector('#choice-mem-option-img-1').setAttribute('stage', 'selected')
        display_element.querySelector('#choice-mem-option-img-2').setAttribute('stage', 'not selected')
        response.choice = trial.choice_images[shuffled_positions[1]];

      }
      else if (response.key == key3) {
        display_element.querySelector('#choice-mem-option-img-0').setAttribute('stage', 'not selected')
        display_element.querySelector('#choice-mem-option-img-1').setAttribute('stage', 'not selected')
        display_element.querySelector('#choice-mem-option-img-2').setAttribute('stage', 'selected')
        response.choice = trial.choice_images[shuffled_positions[2]];
      }

      // render for display selection time and then display feedback
      jsPsych.pluginAPI.setTimeout(function () {
        end_trial()
      }, trial.display_selection_time)
    }; //end of after_response function


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
        "left_choice": trial.choice_images[shuffled_positions[0]],
        "middle_choice": trial.choice_images[shuffled_positions[1]],
        "right_choice": trial.choice_images[shuffled_positions[2]],
        "choice_positions": shuffled_positions,
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
        display_element.querySelector('#choice-mem-stimulus').style.visibility = 'hidden';
      }, trial.stimulus_duration);
    }

    // end trial if trial_duration is set
    if (trial.trial_duration !== null) {
      jsPsych.pluginAPI.setTimeout(function () {
        end_trial();
      }, trial.trial_duration);
    }

  };

  return plugin;
})();
