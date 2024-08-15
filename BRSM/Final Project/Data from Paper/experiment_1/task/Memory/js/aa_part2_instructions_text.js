///////////////////
// INSTRUCTIONS  //
///////////////////

var instructions_text_1 = [
  {
    stimulus: '<p> Welcome back! </p>' +
      '<p> Last week, you had to make choices about lots of different items.  </p>',
    audio_stim: "audio/M1.wav",
  },
  {
    stimulus: '<p> Today, we are going to ask you to try to remember all the items. </p>',
    audio_stim: "audio/M2.wav",
  },
  {
    stimulus: '<p> On every trial, you will see an image. </p>' +
      '<p> The image may be an OLD image you saw during the games last week or it may be a NEW image that was not presented. </p>',
    audio_stim: "audio/M3.wav",
  },
  {
    stimulus: "<p> You need to select whether the image is:  </p>" +
      "<p>  'Definitely old', 'Maybe old', 'Maybe new', or 'Definitely new.'  </p>" +
      '<div class="mem-choice-instructions-grid">' +
      `<div class="choice-option" id="choice-option-1" >` +
      `<img src="images/definitely_old_1.png" id="choice-option-img-1" class="choice-option-img" stage="1">` +
      '</div>' +
      `<div class="choice-option" id="choice-option-2" >` +
      `<img src="images/maybe_old_1.png" id="choice-option-img-2" class="choice-option-img" stage="1">` +
      '</div>' +

      `<div class="choice-option" id="choice-option-3" >` +
      `<img src="images/maybe_new_1.png" id="choice-option-img-3" class="choice-option-img" stage="1">` +
      '</div>' +
      `<div class="choice-option" id="choice-option-4" >` +
      ` <img src="images/definitely_new_1.png" id="choice-option-img-4" class="choice-option-img" stage="1">` +
      '</div>' +
      '</div>',
    audio_stim: "audio/M4.wav",
  },
  {
    stimulus: "<p> You should use the 1, 2, 3, and 4 keys to make your responses.  </p>" +
      '<div class="mem-choice-instructions-grid">' +
      `<div class="choice-option" id="choice-option-1" >` +
      `<img src="images/definitely_old.png" id="choice-option-img-1" class="choice-option-img" stage="1">` +
      '</div>' +
      `<div class="choice-option" id="choice-option-2" >` +
      `<img src="images/maybe_old.png" id="choice-option-img-2" class="choice-option-img" stage="1">` +
      '</div>' +

      `<div class="choice-option" id="choice-option-3" >` +
      `<img src="images/maybe_new.png" id="choice-option-img-3" class="choice-option-img" stage="1">` +
      '</div>' +


      `<div class="choice-option" id="choice-option-4" >` +
      ` <img src="images/definitely_new.png" id="choice-option-img-4" class="choice-option-img" stage="1">` +
      '</div>' +
      '</div>',
    audio_stim: "audio/M5.wav",
  },
  {
    stimulus: "<p> You will have 10 seconds to make each response.  </p>" +
      "<p>  Make sure to respond before time runs out! </p>",
    audio_stim: "audio/M6.wav",
  },
  {
    stimulus: "<p> Today, you will see each image ONCE only.  </p>" +
      "<p>  That means none of the images will repeat. </p>",
    audio_stim: "audio/M7.wav",
  },
  {
    stimulus: "<p> Before you play the real game, it is time to practice. </p>" +
      "<p>  Just like in the real game, some of the images in the practice will be ones you have seen before. </p>" +
      "<p>  Others will be entirely new. </p>",
    audio_stim: "audio/M8.wav",
  }];


// COMPREHENSION QUESTIONS
var comp_question_text1 = [
  {
    stimulus: "<p> <b> True or False? </b> </p>" +
      "<p> In this game, you will only see each image once. </p>",
    correct_button: 0,
    right_response: "<p> <b> That's right! </b> You will see many different images <i> one time each </i> in this game. </p>",
    wrong_response: "<p> <b>Incorrect.</b> You will see many different images <i> one time each </i> in this game. </p>",
    audio_stim: comp_quest_audio[0],
    right_audio: comp_quest_audio[1],
    wrong_audio: comp_quest_audio[2]

  }];

var comp_question_text2 = [
  {
    stimulus: "<p> <b> True or False? </b> </p>" +
      "<p> You should use the mouse and click to make your response. </p>",
    correct_button: 1,
    right_response: "<p><b> That's right! </b> You should use the '1', '2', '3', and '4' keys to make your response. </p>",
    wrong_response: "<p><b> Incorrect. </b> You should use the '1', '2', '3', and '4' keys to make your response. </p>",
    audio_stim: comp_quest_audio[3],
    right_audio: comp_quest_audio[4],
    wrong_audio: comp_quest_audio[5]
  }];

var comp_question_text3 = [
  {
    stimulus: "<p> <b> True or False? </b> </p>" +
      "<p> You will have as much time as you want to make each choice. </p>",
    correct_button: 1,
    right_response: "<p> <b> That's right! </b> You will only have 10 seconds to make each choice. </p>",
    wrong_response: "<p> <b>Incorrect.</b> You will only have 10 seconds to make each choice.</p>",
    audio_stim: comp_quest_audio[6],
    right_audio: comp_quest_audio[7],
    wrong_audio: comp_quest_audio[8]
  }];


var instructions_text_2 = [
  {
    stimulus: '<p> Great! You have completed the practice. </p>' +
      "<p> Before you start, we're going to ask you a few questions about how the game works.  </p>",
    audio_stim: "audio/M9.wav",
  }];