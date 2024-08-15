///////////////
// PRACTICE //
//////////////

/////////////
// IMAGES //
////////////
var practice_images = jsPsych.randomization.sampleWithReplacement([
  "images/ball1.png",
  "images/ball2.png",
  "images/ball3.png",
  "images/ball4.png",
  "images/racket1.png",
  "images/racket2.png",
  "images/racket3.png",
  "images/racket4.png"], 12);

var p_rewards = jsPsych.randomization.sampleWithReplacement([-9, -8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9], 12);

////////////
// AUDIO //
///////////

var audio_instructions =
  [ "audio/prac1.wav",
    "audio/prac2.wav",
    "audio/prac3.wav",
    "audio/prac4.wav",
    "audio/prac5.wav",
    "audio/prac6.wav",
    "audio/prac7.wav",
    "audio/prac8.wav",
    "audio/prac9.wav",
    "audio/prac10.wav",
    "audio/prac11.wav",
    "audio/prac12.wav",
    "audio/prac13.wav",
    "audio/practice_round_start.wav",
    "audio/prac14.wav",
    "audio/almost_start.wav",
    "audio/real_game_start.wav"];

  var comp_quest_audio = [
    "audio/Q1.wav", 
    "audio/Q1_C.wav",
    "audio/Q1_I.wav",
    "audio/Q2.wav",
    "audio/Q2_C.wav",
    "audio/Q2_I.wav",
    "audio/Q3.wav",
    "audio/Q3_C.wav",
    "audio/Q3_I.wav"]; 


//////////////////
// INSTRUCTIONS //
//////////////////

var practice_text_1 = [

  {
    stimulus: "<p> Welcome! Today you are going to play 6 different rounds of a decision-making game. </p>" +
      "<p> Use the mouse to click next to continue. </p>",
      audio: audio_instructions[0]
  },

  {
    stimulus: "<p> You will start with a practice round to learn the rules. </p>",
    audio: audio_instructions[1]
  },

  {
    stimulus:
      "<p> Your goal in this round is to give out sports equipment to kids. </p>" +
      "</div>",
      audio: audio_instructions[2]
  },
  {
    stimulus: "<p> The kids only like some of the equipment.  </p>" +
      "<p> On each turn, you will see a piece of sports equipment.   </p>" +
      "<p> You need to decide whether to give it to the kids or not.  </p>" ,
      audio: audio_instructions[3]
  },
  {
    stimulus:
      "<p> You can give them the equipment by pressing 1 and choose not to give it to them by pressing 0. </p>" +
      '<br><div class="choice-instructions-grid"> <div class="choice-option">' +
      '<img src="images/approach.png" class="choice-option-img" stage="instructions" position="0" >' +
      choice_opt_text_1 +
      '<div class="choice-option">' +
      '<img src="images/avoid.png" class="choice-option-img" stage="instructions" position="1" >' +
      choice_opt_text_2,
      audio: audio_instructions[4]
  },
  {
    stimulus: "<p> If you give them a piece of equipment they like, they will be happy! </p>" +
    "<p> But if you give them a piece of equipment they do not like, they will be sad. </p>" ,
    audio: audio_instructions[5]
  },
  {
    stimulus: "<p> You will earn points based on how you make kids feel. </p>" +
    "<p> If you make them happy, you will WIN anywhere from 1 - 9 points, </p>" +
    "<p> but if you make them sad, you will LOSE anywhere from 1 - 9 points. </p>" ,
    audio: audio_instructions[6]
  },
  {
    stimulus: "<p> You will see how many points you won or lost in the center of the screen. </p>" +
    "<p> Here is what you would see if you won 6 points: </p>" +
    '<p style="color:green;font-size:50px;font-weight:bolder">6</p>' +
    '<p style="color:green">The text is GREEN because you WON points.</p>' ,
    audio: audio_instructions[7]
  },
  {
    stimulus: "<p> And here is what you would see if you lost 4 points: </p>" +
    '<p style="color:red;font-size:50px;font-weight:bolder">-4</p>' +
    '<p style="color:red">The text is RED because you LOST points. </p>' ,
    audio: audio_instructions[8]
  },
  {
    stimulus: "<p> Some of the equipment will make the kids VERY happy or sad. </p>" +
    "<p> These pieces of equipment will make you win or lose LOTS of points. </p>" +
    "<p> Other pieces of equipment will only make the kids a little happy or sad. </p>" + 
    "<p> These pieces of equipment will make you win or lose small amounts of points. </p>" ,
    audio: audio_instructions[9]
  },
  {
    stimulus: "<p> If you choose not to give them the equipment, you will not win or lose any points. </p>" +
    "<p>  However, in the center of the screen, you will see the number of points you WOULD HAVE won or lost if you had given them the equipment. </p>",
    audio: audio_instructions[10]
  },
  {
    stimulus: "<p> Here is what you might see if you did not give the equipment to the kids but it would have made them happy: </p>" +
    '<p style="color:grey; font-size:50px; display: inline-block; border-spacing: 15px; border-width:3px; border-style:solid; border-color:red">  &nbsp; 7 &nbsp; </p>' +
    "<p> Remember, in this case, you would not win or lose ANY points because you did not give them the equipment.  </p>" +
    '<p style="color:grey">The text is GREY because you earned ZERO points. </p>' +
    '<p style="color:red">However, choosing to give the kids the equipment would have made you win points. The box around the text is RED because you chose the worse option. </p>' ,
    audio: audio_instructions[11]
  },
  {
    stimulus: "<p> Here is what you might see if you did not give the equipment to the kids but it would have made them sad: </p>" +
    '<p style="color:grey;font-size:50px; display: inline-block; border-spacing: 15px; border-width:3px; border-style:solid; border-color:green">  &nbsp; -8 &nbsp; </p>' +
    "<p> Remember, in this case, you would not win or lose ANY points because you did not give them the equipment.  </p>" +
    '<p style="color:grey">The text is GREY because you earned ZERO points. </p>' +
    '<p  style="color:green"> Choosing to give the kids the equipment would have made you lose points. The box around the text is GREEN because you chose the better option.</p>' ,
    audio: audio_instructions[12]
  },
  {
    stimulus: "<p> You will have 3 seconds to make each choice. Try to respond before time runs out! </p>" +
    "<p> You will lose 5 points each time you do not make a response. </p>",
    audio: time_warning
  },
  {
    stimulus: "<p> This is just a practice round, but in the real game, your bonus payment will depend on your total number of points.",
    audio: audio_instructions[13]
  },
  {
    stimulus:
      "<p> Remember, you can give them the equipment by pressing 1 and choose not to give it to them by pressing 0. </p>" +
      '<br><div class="choice-instructions-grid"> <div class="choice-option">' +
      '<img src="images/approach.png" class="choice-option-img" stage="instructions" position="0" >' +
      choice_opt_text_1 +
      '<div class="choice-option">' +
      '<img src="images/avoid.png" class="choice-option-img" stage="instructions" position="1" >' +
      choice_opt_text_2,
      audio: audio_instructions[14]
  }];

var practice_start = {
  type: "html-button-response",
  stimulus: "<p> Ready to practice? </p>",
  choices: ['Start practice'],
  post_trial_gap: 100
};

var practice_text_2 = [
  { stimulus: "<p> It's almost time to start the real game. </p>" +
 "<p> Before you start, we're going to ask you a few questions about how the game works. </p>" ,
audio: audio_instructions[15]}];

var real_start_text = [
  { stimulus: "<p> It's now time to start the real game. </p>" +
  "Do your best, because the points you earn in the next rounds will influence your bonus payment. </p>" ,
  audio: audio_instructions[16]}];



// COMPREHENSION QUESTIONS
var comp_question_text1 = [
  {
    stimulus: "<p> <b> True or False? </b> </p>" +
      "<p> If you see a number in GREY, that means you earned that many points. </p>",
    correct_button: 1,
    right_response: "<p><b> That's right! </b> If you see a grey number, it means you earned ZERO points. <br> The grey numbers show the points you WOULD HAVE earned if you had made the other choice. </p>",
    wrong_response: "<p><b> Incorrect. </b> If you see a grey number, it means you earned ZERO points. <br> The grey numbers show the points you WOULD HAVE earned if you had made the other choice. </p>",
    audio_stim: comp_quest_audio[0],
    right_audio: comp_quest_audio[1],
    wrong_audio: comp_quest_audio[2]
  }];

  var comp_question_text2 = [
  {
    stimulus: "<p> <b> True or False? </b> </p>" +
      "<p> You will have as much time as you want to make each choice. </p>",
    correct_button: 1,
    right_response: "<p> <b> That's right! </b> You will only have 3 seconds to make each choice. </p>",
    wrong_response: "<p> <b>Incorrect.</b> You will only have 3 seconds to make each choice.</p>",
    audio_stim: comp_quest_audio[3],
    right_audio: comp_quest_audio[4],
    wrong_audio: comp_quest_audio[5]
  }];

 var comp_question_text3 = [
  {
    stimulus: "<p> <b> True or False? </b> </p>" +
      "<p> You should use the '1' and '0' keys to make your choices. </p>",
    correct_button: 0,
    right_response: "<p> <b> That's right! </b> You should use the '1' and '0' keys to make each choice. </p>",
    wrong_response: "<p> <b>Incorrect.</b> You <i>should</i> use the '1' and '0' keys to make each choice. </p>",
    audio_stim: comp_quest_audio[6],
    right_audio: comp_quest_audio[7],
    wrong_audio: comp_quest_audio[8]
  }];


///////////////
// TIMELINE //
///////////////
var practice_stim = [
  { stimulus: practice_images[0], reward: p_rewards[0], mean_cat_reward: 0, data: { stim_cat: 'practice', task_part: 'learning', task_block: 'practice', block_condition: 'practice', block_number: -1 }}, 
  { stimulus: practice_images[1], reward: p_rewards[1], mean_cat_reward: 0, data: { stim_cat: 'practice', task_part: 'learning', task_block: 'practice', block_condition: 'practice', block_number: -1 }}, 
  { stimulus: practice_images[2], reward: p_rewards[2], mean_cat_reward: 0, data: { stim_cat: 'practice', task_part: 'learning', task_block: 'practice', block_condition: 'practice', block_number: -1 }}, 
  { stimulus: practice_images[3], reward: p_rewards[3], mean_cat_reward: 0, data: { stim_cat: 'practice', task_part: 'learning', task_block: 'practice', block_condition: 'practice', block_number: -1 }}, 
  { stimulus: practice_images[4], reward: p_rewards[4], mean_cat_reward: 0, data: { stim_cat: 'practice', task_part: 'learning', task_block: 'practice', block_condition: 'practice', block_number: -1 }}, 
  { stimulus: practice_images[5], reward: p_rewards[5], mean_cat_reward: 0, data: { stim_cat: 'practice', task_part: 'learning', task_block: 'practice', block_condition: 'practice', block_number: -1 }},
  { stimulus: practice_images[6], reward: p_rewards[6], mean_cat_reward: 0, data: { stim_cat: 'practice', task_part: 'learning', task_block: 'practice', block_condition: 'practice', block_number: -1 }}, 
  { stimulus: practice_images[7], reward: p_rewards[7], mean_cat_reward: 0, data: { stim_cat: 'practice', task_part: 'learning', task_block: 'practice', block_condition: 'practice', block_number: -1 }}, 
  { stimulus: practice_images[8], reward: p_rewards[8], mean_cat_reward: 0, data: { stim_cat: 'practice', task_part: 'learning', task_block: 'practice', block_condition: 'practice', block_number: -1 }}, 
  { stimulus: practice_images[9], reward: p_rewards[9], mean_cat_reward: 0, data: { stim_cat: 'practice', task_part: 'learning', task_block: 'practice', block_condition: 'practice', block_number: -1 }}, 
  { stimulus: practice_images[10], reward: p_rewards[10], mean_cat_reward: 0, data: { stim_cat: 'practice', task_part: 'learning', task_block: 'practice', block_condition: 'practice', block_number: -1 }}, 
  { stimulus: practice_images[11], reward: p_rewards[11], mean_cat_reward: 0, data: { stim_cat: 'practice', task_part: 'learning', task_block: 'practice', block_condition: 'practice', block_number: -1 }}];

