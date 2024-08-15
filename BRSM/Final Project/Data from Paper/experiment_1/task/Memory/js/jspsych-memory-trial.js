/**
 * jspsych-memory-trial
 * Josh de Leeuw
 *
 * plugin for displaying a stimulus and getting a keyboard response
 *
 * documentation: docs.jspsych.org
 *
 **/


jsPsych.plugins["memory-trial"] = (function () {

  var plugin = {};

  jsPsych.pluginAPI.registerPreload('memory-trial', 'stimulus', 'image');

  plugin.info = {
    name: 'memory-trial',
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
        type: jsPsych.plugins.parameterType.KEYCODE,
        array: true,
        pretty_name: 'Choices',
        default: jsPsych.ALL_KEYS,
        description: 'The keys the subject is allowed to press to respond to the stimulus.'
      },
      prompt: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Prompt',
        default: null,
        description: 'Any content here will be displayed below the stimulus.'
      },
      stimulus_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Stimulus duration',
        default: null,
        description: 'How long to hide the stimulus.'
      },
      trial_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Trial duration',
        default: null,
        description: 'How long to show trial before it ends.'
      },
      response_ends_trial: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Response ends trial',
        default: true,
        description: 'If true, trial will end when subject makes a response.'
      },
      display_selection_time: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Display selection time',
        default: null,
        description: 'How long to show the choice selection'
      },
    }
  }

  plugin.trial = function (display_element, trial) {

    // ---------------------------------- //
    // Section 1: Define HTML             //
    // ---------------------------------- //

    // display stimulus
    var html = '<div class="memory-trial-stimulus" id="memory-trial-stimulus"> <img src="' + trial.stimulus + '" width="' + trial.stimulus_width + '" height="' + trial.stimulus_height + '"></img> </div>';

    // draw choice grid to display three choice options
    html += '<div class="mem-choice-grid">'

    // choice 1
    html += `<div class="choice-option" id="choice-option-1" >`;
    html += `<img src="images/definitely_old.png" id="choice-option-img-1" class="choice-option-img" stage="1">`;
    html += '</div>';

    // choice 2
    html += `<div class="choice-option" id="choice-option-2" >`;
    html += `<img src="images/maybe_old.png" id="choice-option-img-2" class="choice-option-img" stage="1">`;
    html += '</div>';

    // choice 3
    html += `<div class="choice-option" id="choice-option-3" >`;
    html += `<img src="images/maybe_new.png" id="choice-option-img-3" class="choice-option-img" stage="1">`;
    html += '</div>';

    // choice 4
    html += `<div class="choice-option" id="choice-option-4" >`;
    html += ` <img src="images/definitely_new.png" id="choice-option-img-4" class="choice-option-img" stage="1">`;
    html += '</div>';

    // Close choice grid container.
    html += '</div>';

    // render
    display_element.innerHTML = html;

    // store response
    var response = {
      rt: null,
      key: null,
      answer: null
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

      if (response.key == key1) {
        response.answer = 'definitely_old';
        display_element.querySelector('#choice-option-img-1').setAttribute('stage', 'selected');
        display_element.querySelector('#choice-option-img-2').setAttribute('stage', 'not selected');
        display_element.querySelector('#choice-option-img-3').setAttribute('stage', 'not selected');
        display_element.querySelector('#choice-option-img-4').setAttribute('stage', 'not selected');

        // render for display selection time and then display feedback
        jsPsych.pluginAPI.setTimeout(function () {
          end_trial()
        },
          trial.display_selection_time)

      } else if (response.key == key2) {
        response.answer = 'maybe_old';

        display_element.querySelector('#choice-option-img-1').setAttribute('stage', 'not selected');
        display_element.querySelector('#choice-option-img-2').setAttribute('stage', 'selected');
        display_element.querySelector('#choice-option-img-3').setAttribute('stage', 'not selected');
        display_element.querySelector('#choice-option-img-4').setAttribute('stage', 'not selected');

        // render for display selection time and then display feedback
        jsPsych.pluginAPI.setTimeout(function () {
          end_trial()
        },
          trial.display_selection_time)

      } else if (response.key == key3) {
        response.answer = 'maybe_new';

        display_element.querySelector('#choice-option-img-1').setAttribute('stage', 'not selected');
        display_element.querySelector('#choice-option-img-2').setAttribute('stage', 'not selected');
        display_element.querySelector('#choice-option-img-3').setAttribute('stage', 'selected');
        display_element.querySelector('#choice-option-img-4').setAttribute('stage', 'not selected');

        // render for display selection time and then display feedback
        jsPsych.pluginAPI.setTimeout(function () {
          end_trial()
        },
          trial.display_selection_time)

      } else if (response.key == key4) {
        response.answer = 'definitely_new';

        display_element.querySelector('#choice-option-img-1').setAttribute('stage', 'not selected');
        display_element.querySelector('#choice-option-img-2').setAttribute('stage', 'not selected');
        display_element.querySelector('#choice-option-img-3').setAttribute('stage', 'not selected');
        display_element.querySelector('#choice-option-img-4').setAttribute('stage', 'selected');

        // render for display selection time and then display feedback
        jsPsych.pluginAPI.setTimeout(function () {
          end_trial()
        },
          trial.display_selection_time)
      };
    };

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
        "rt": response.rt,
        "stimulus": trial.stimulus,
        "key_press": response.key,
        "answer": response.answer
      };

      // clear the display
      display_element.innerHTML = '';

      // move on to the next trial
      jsPsych.finishTrial(trial_data);
    };






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
        display_element.querySelector('#jspsych-memory-trial-stimulus').style.visibility = 'hidden';
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
