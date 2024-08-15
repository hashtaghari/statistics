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
var comp_questions = [
  {
    stimulus: "<p> <b> True or False? </b> </p>" +
      "<p> In this game, you will only see each image once. </p>",
    correct_button: 0,
    right_response: "<p> <b> That's right! </b> You will see many different images <i> one time each </i> in this game. </p>",
    wrong_response: "<p> <b>Incorrect.</b> You will see many different images <i> one time each </i> in this game. </p>",
    audio_stim: comp_quest_audio[0],
    right_audio: comp_quest_audio[1],
    wrong_audio: comp_quest_audio[2]

  },
  {
    stimulus: "<p> <b> True or False? </b> </p>" +
      "<p> You should use the mouse and click to make your response. </p>",
    correct_button: 1,
    right_response: "<p><b> That's right! </b> You should use the '1', '2', '3', and '4' keys to make your response. </p>",
    wrong_response: "<p><b> Incorrect. </b> You should use the '1', '2', '3', and '4' keys to make your response. </p>",
    audio_stim: comp_quest_audio[3],
    right_audio: comp_quest_audio[4],
    wrong_audio: comp_quest_audio[5]
  },

  {
    stimulus: "<p> <b> True or False? </b> </p>" +
      "<p> You will have as much time as you want to make each choice. </p>",
    correct_button: 1,
    right_response: "<p> <b> That's right! </b> You will only have 10 seconds to make each choice. </p>",
    wrong_response: "<p> <b>Incorrect.</b> You will only have 10 seconds to make each choice.</p>",
    audio_stim: comp_quest_audio[6],
    right_audio: comp_quest_audio[7],
    wrong_audio: comp_quest_audio[8]
  }

]

var instructions_text_2 = [
  {
    stimulus: '<p> Great! You have completed the practice. </p>' +
      "<p> Before you start, we're going to ask you a few questions about how the game works.  </p>",
    audio_stim: "audio/M9.wav",
  }];


// CHOICE MEMORY

// Choice options text
var choice_opt_text_1 = '<div class="choice-mem-option-text"> Press "1." </div></div>';
var choice_opt_text_2 = '<div class="choice-mem-option-text"> Press "2." </div></div>';
var choice_opt_text_3 = '<div class="choice-mem-option-text"> Press "3." </div></div></div>';

// animals
var animals_choice_text = [
  {
    stimulus: "<p> We're now going to ask you to return your farm animals to barns again. </p>",
    audio_stim: "audio/choice_mem_A1.wav",
  },
  {
    stimulus: '<p> On each trial, you will see a farm animal. Select the barn where you think the animal belongs. </p>',
    audio_stim: "audio/choice_mem_A2.wav",
  },
  {
    stimulus: '<p> To make your selection, think about what you learned last week. You will NOT receive any feedback about your choice. </p>',
    audio_stim: "audio/choice_mem_feedback_warning.wav",
  },

  {
    stimulus: '<p> You should use the 1 key to select the barn on the left, the 2 key to select the barn in the middle, and the 3 key to select the barn on the right. </p>' +
      '<br><div class="choice-mem-instructions-grid"> <div class="choice-mem-option">' +
      '<img src="images/animals_choice1.png" class="choice-mem-option-img" stage="instructions" position="0" >' +
      choice_opt_text_1 +
      '<div class="choice-mem-option">' +
      '<img src="images/animals_choice2.png" class="choice-mem-option-img" stage="instructions" position="1" >' +
      choice_opt_text_2 +
      '<div class="choice-mem-option">' +
      '<img src="images/animals_choice3.png" class="choice-mem-option-img" stage="instructions" position="2" >' +
      choice_opt_text_3,
    audio_stim: "audio/choice_mem_A3.wav",
  },

  {
    stimulus: '<p> You will have 10 seconds to make each selection. Try to respond before time runs out! </p>',
    audio_stim: "audio/choice_mem_time_warning.wav",
  }];


var fruit_choice_text = [
  {
    stimulus: "<p> We're now going to ask you to buy fruit again. </p>",
    audio_stim: "audio/choice_mem_F1.wav",
  },
  {
    stimulus: '<p> On each trial, you will see a fruit. Select the store where you think you can buy the fruit. </p>',
    audio_stim: "audio/choice_mem_F2.wav",
  },
  {
    stimulus: '<p> To make your selection, think about what you learned last week. You will NOT receive any feedback about your choice. </p>',
    audio_stim: "audio/choice_mem_feedback_warning.wav",
  },

  {
    stimulus: '<p> You should use the 1 key to select the store on the left, the 2 key to select the store in the middle, and the 3 key to select the store on the right. </p>' +
      '<br><div class="choice-mem-instructions-grid"> <div class="choice-mem-option">' +
      '<img src="images/fruit_choice1.png" class="choice-mem-option-img" stage="instructions" position="0" >' +
      choice_opt_text_1 +
      '<div class="choice-mem-option">' +
      '<img src="images/fruit_choice2.png" class="choice-mem-option-img" stage="instructions" position="1" >' +
      choice_opt_text_2 +
      '<div class="choice-mem-option">' +
      '<img src="images/fruit_choice3.png" class="choice-mem-option-img" stage="instructions" position="2" >' +
      choice_opt_text_3,
    audio_stim: "audio/choice_mem_F3.wav",
  },

  {
    stimulus: '<p> You will have 10 seconds to make each selection. Try to respond before time runs out! </p>',
    audio_stim: "audio/choice_mem_time_warning.wav",
  }];


var furniture_choice_text = [
  {
    stimulus: "<p> We're now going to ask you to deliver furniture again. </p>",
    audio_stim: "audio/choice_mem_U1.wav",
  },
  {
    stimulus: '<p> On each trial, you will see a furniture item. Select the building where you think the furniture item belongs. </p>',
    audio_stim: "audio/choice_mem_U2.wav",
  },
  {
    stimulus: '<p> To make your selection, think about what you learned last week. You will NOT receive any feedback about your choice. </p>',
    audio_stim: "audio/choice_mem_feedback_warning.wav",
  },

  {
    stimulus: '<p> You should use the 1 key to select the building on the left, the 2 key to select the building in the middle, and the 3 key to select the building on the right. </p>' +
      '<br><div class="choice-mem-instructions-grid"> <div class="choice-mem-option">' +
      '<img src="images/furniture_choice1.png" class="choice-mem-option-img" stage="instructions" position="0" >' +
      choice_opt_text_1 +
      '<div class="choice-mem-option">' +
      '<img src="images/furniture_choice2.png" class="choice-mem-option-img" stage="instructions" position="1" >' +
      choice_opt_text_2 +
      '<div class="choice-mem-option">' +
      '<img src="images/furniture_choice3.png" class="choice-mem-option-img" stage="instructions" position="2" >' +
      choice_opt_text_3,
    audio_stim: "audio/choice_mem_U3.wav",
  },

  {
    stimulus: '<p> You will have 10 seconds to make each selection. Try to respond before time runs out! </p>',
    audio_stim: "audio/choice_mem_time_warning.wav",
  }];


var pets_choice_text = [
  {
    stimulus: "<p> We're now going to ask you to feed your pets again. </p>",
    audio_stim: "audio/choice_mem_P1.wav",
  },
  {
    stimulus: '<p> On each trial, you will see a pet. Select the food that you think is most likely to make the pet happy. </p>',
    audio_stim: "audio/choice_mem_P2.wav",
  },
  {
    stimulus: '<p> To make your selection, think about what you learned last week. You will NOT receive any feedback about your choice. </p>',
    audio_stim: "audio/choice_mem_feedback_warning.wav",
  },

  {
    stimulus: '<p> You should use the 1 key to select the food on the left, the 2 key to select the food in the middle, and the 3 key to select the food on the right. </p>' +
      '<br><div class="choice-mem-instructions-grid"> <div class="choice-mem-option">' +
      '<img src="images/pets_choice1.png" class="choice-mem-option-img" stage="instructions" position="0" >' +
      choice_opt_text_1 +
      '<div class="choice-mem-option">' +
      '<img src="images/pets_choice2.png" class="choice-mem-option-img" stage="instructions" position="1" >' +
      choice_opt_text_2 +
      '<div class="choice-mem-option">' +
      '<img src="images/pets_choice3.png" class="choice-mem-option-img" stage="instructions" position="2" >' +
      choice_opt_text_3,
    audio_stim: "audio/choice_mem_P3.wav",
  },

  {
    stimulus: '<p> You will have 10 seconds to make each selection. Try to respond before time runs out! </p>',
    audio_stim: "audio/choice_mem_time_warning.wav",
  }];


var plants_choice_text = [
  {
    stimulus: "<p> We're now going to ask you to water your plants again. </p>",
    audio_stim: "audio/choice_mem_L1.wav",
  },
  {
    stimulus: '<p> On each trial, you will see a plant. Select the watering can that you think will make the plant grow. </p>',
    audio_stim: "audio/choice_mem_L2.wav",
  },
  {
    stimulus: '<p> To make your selection, think about what you learned last week. You will NOT receive any feedback about your choice. </p>',
    audio_stim: "audio/choice_mem_feedback_warning.wav",
  },

  {
    stimulus: '<p> You should use the 1 key to select the watering can on the left, the 2 key to select the watering can in the middle, and the 3 key to select the watering can on the right. </p>' +
      '<br><div class="choice-mem-instructions-grid"> <div class="choice-mem-option">' +
      '<img src="images/plants_choice1.png" class="choice-mem-option-img" stage="instructions" position="0" >' +
      choice_opt_text_1 +
      '<div class="choice-mem-option">' +
      '<img src="images/plants_choice2.png" class="choice-mem-option-img" stage="instructions" position="1" >' +
      choice_opt_text_2 +
      '<div class="choice-mem-option">' +
      '<img src="images/plants_choice3.png" class="choice-mem-option-img" stage="instructions" position="2" >' +
      choice_opt_text_3,
    audio_stim: "audio/choice_mem_L3.wav",
  },

  {
    stimulus: '<p> You will have 10 seconds to make each selection. Try to respond before time runs out! </p>',
    audio_stim: "audio/choice_mem_time_warning.wav",
  }];


var vehicles_choice_text = [
  {
    stimulus: "<p> We're now going to ask you to put fuel in your vehicles again. </p>",
    audio_stim: "audio/choice_mem_V1.wav",
  },
  {
    stimulus: '<p> On each trial, you will see a vehicle. Select the fuel that you think will make the vehicle start. </p>',
    audio_stim: "audio/choice_mem_V2.wav",
  },
  {
    stimulus: '<p> To make your selection, think about what you learned last week. You will NOT receive any feedback about your choice. </p>',
    audio_stim: "audio/choice_mem_feedback_warning.wav",
  },

  {
    stimulus: '<p> You should use the 1 key to select the fuel on the left, the 2 key to select the fuel in the middle, and the 3 key to select the fuel on the right. </p>' +
      '<br><div class="choice-mem-instructions-grid"> <div class="choice-mem-option">' +
      '<img src="images/vehicles_choice1.png" class="choice-mem-option-img" stage="instructions" position="0" >' +
      choice_opt_text_1 +
      '<div class="choice-mem-option">' +
      '<img src="images/vehicles_choice2.png" class="choice-mem-option-img" stage="instructions" position="1" >' +
      choice_opt_text_2 +
      '<div class="choice-mem-option">' +
      '<img src="images/vehicles_choice3.png" class="choice-mem-option-img" stage="instructions" position="2" >' +
      choice_opt_text_3,
    audio_stim: "audio/choice_mem_V3.wav",
  },

  {
    stimulus: '<p> You will have 10 seconds to make each selection. Try to respond before time runs out! </p>',
    audio_stim: "audio/choice_mem_time_warning.wav",
  }];