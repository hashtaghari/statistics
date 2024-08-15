///////////////
// PRACTICE //
//////////////

/////////////
// IMAGES //
////////////
var practice_images = jsPsych.randomization.sampleWithoutReplacement([
  "images/ball1.png",
  "images/ball2.png",
  "images/ball3.png",
  "images/ball4.png",
  "images/racket1.png",
  "images/racket2.png",
  "images/racket3.png",
  "images/racket4.png"], 6);

////////////
// AUDIO //
///////////

var audio_instructions =
  ["audio/1.wav",
    "audio/2.wav",
    "audio/3.wav",
    "audio/4.wav",
    "audio/5.wav",
    "audio/6.wav",
    "audio/7.wav",
    "audio/8.wav",
    "audio/9.wav",
    "audio/10.wav",
    "audio/11.wav",
    "audio/12.wav",
    "audio/13.wav",
    "audio/13a.wav",
    "audio/13b.wav",
    "audio/14.wav",
    "audio/15.wav",
    "audio/16.wav",
    "audio/17.wav",
    "audio/18.wav",
    "audio/19.wav",
    "audio/20.wav",
    "audio/21.wav",
    "audio/22.wav",
    "audio/23.wav",
    "audio/24.wav",
    "audio/25.wav"];

  var comp_quest_audio = [
    "audio/Q1.wav", 
    "audio/Q1C.wav",
    "audio/Q1I.wav",
    "audio/Q2.wav",
    "audio/Q2C.wav",
    "audio/Q2I.wav",
    "audio/Q3.wav",
    "audio/Q3C.wav",
    "audio/Q3I.wav"]; 


//////////////////
// INSTRUCTIONS //
//////////////////
var practice_text_1 = [

  {
    stimulus: "<p> Welcome! Today you are going to play 6 different rounds of a decision-making game. </p>" +
      "<p> Use the mouse to click next to continue. </p>",
    audio_stim: audio_instructions[0]
  },

  {
    stimulus: "<p> You will start with a practice round to learn the rules. </p>",
    audio_stim: audio_instructions[1]
  },

  {
    stimulus:
      "<p> Your goal in this round is to deliver sports equipment to three different parks. </p>" +
      "<p> You will need to deliver many types of equipment. </p>" +
      "</div>",
    audio_stim: audio_instructions[2]
  },
  {
    stimulus: "<p> On each turn, you will see one piece of sports equipment and three different parks.  </p>" +
      "<p> You need to select which park to deliver the equipment to.  </p>",
    audio_stim: audio_instructions[3]
  },
  {
    stimulus:
      "<p> You can select the park on the left by pressing the '1' key on your keyboard. <br>" +
      "You can select the park in the middle by pressing the '2' key on your keyboard. <br>" +
      "You can select the park on the right by pressing the '3' key on your keyboard.  </p>" +
      '<br><div class="choice-instructions-grid"> <div class="choice-option">' +
      '<img src="images/park1.png" class="choice-option-img" stage="instructions" position="0" >' +
      choice_opt_text_1 +
      '<div class="choice-option">' +
      '<img src="images/park2.png" class="choice-option-img" stage="instructions" position="1" >' +
      choice_opt_text_2 +
      '<div class="choice-option">' +
      '<img src="images/park3.png" class="choice-option-img" stage="instructions" position="2" >' +
      choice_opt_text_3,
    audio_stim: audio_instructions[4]
  },
  {
    stimulus: "<p> If the kids in the park you chose like the equipment, they will be very happy! </p>" +
      "<div style='float: center;'><img src='images/check.png' width = '200' height = '200'></img>",
    audio_stim: audio_instructions[5]
  },
  {
    stimulus: "<p> But, if the kids in the park you chose do not like the equipment, they will be sad. </p>" +
      "<div style='float: center;'><img src='images/x.png' width = '200' height = '200'></img>",
    audio_stim: audio_instructions[6]
  },
  {
    stimulus: "<p> Importantly, the kids in each park like some pieces of sports equipment more than others. </p>",
    audio_stim: audio_instructions[7]
  },
  {
    stimulus: "<p> If you choose the best park for each piece of equipment, the kids there will usually be happy. </p>",
    audio_stim: audio_instructions[8]
  },
  {
    stimulus: "<p> However, even if you choose the best park for the equipment, the kids may sometimes be sad. </p>",
    audio_stim: audio_instructions[9]
  },
  {
    stimulus: "<p> Similarly, even if you choose the <i>wrong</i> park for the equipment, the kids may still be happy sometimes.",
    audio_stim: audio_instructions[10]
  },
  {
    stimulus: "<p> For example, the best park for this soccer ball is this one." +
    "<div style='float: center;'><img src='images/i1.png' width = '500' height = '268'></img>",
    audio_stim: audio_instructions[11]
  },
  {
    stimulus: "<p> Let's see what happens if you choose this park for the soccer ball five times.",
    audio_stim: audio_instructions[12]
  },
  {
    stimulus: "<p> The kids are happy." +
    "<div style='float: left;'><img src='images/i2.png' width = '640' height = '360'></img>",
    audio_stim: audio_instructions[13]
  },
  {
    stimulus: "<p> The kids are happy." +
    "<div style='float: left;'><img src='images/i3.png' width = '640' height = '360'></img>",
    audio_stim: audio_instructions[13]
  },

  {
    stimulus: "<p> The kids are happy." +
    "<div style='float: left;'><img src='images/i4.png' width = '640' height = '360'></img>",
    audio_stim: audio_instructions[13]
  },

  {
    stimulus: "<p> The kids are sad." +
    "<div style='float: left;'><img src='images/i5.png' width = '640' height = '360'></img>",
    audio_stim: audio_instructions[14]
  },

  {
    stimulus: "<p> The kids are happy." +
    "<div style='float: left;'><img src='images/i6.png' width = '640' height = '360'></img>",
    audio_stim: audio_instructions[13]
  },

  {
    stimulus: "<p> As you can see, selecting that park for the soccer ball made the kids happy most of the time, but not all the time.",
    audio_stim: audio_instructions[15]
  },

  {
    stimulus: "<p> Now let's see what happens if you choose a DIFFERENT park for the soccer ball 5 times.",
    audio_stim: audio_instructions[16]
  },

  {
    stimulus: "<p> The kids are sad." +
    "<div style='float: left;'><img src='images/i7.png' width = '640' height = '360'></img>",
    audio_stim: audio_instructions[14]
  },
  {
    stimulus: "<p> The kids are sad." +
    "<div style='float: left;'><img src='images/i8.png' width = '640' height = '360'></img>",
    audio_stim: audio_instructions[14]
  },

  {
    stimulus: "<p> The kids are happy." +
    "<div style='float: left;'><img src='images/i9.png' width = '640' height = '360'></img>",
    audio_stim: audio_instructions[13]
  },

  {
    stimulus: "<p> The kids are sad." +
    "<div style='float: left;'><img src='images/i10.png' width = '640' height = '360'></img>",
    audio_stim: audio_instructions[14]
  },

  {
    stimulus: "<p> The kids are sad." +
    "<div style='float: left;'><img src='images/i11.png' width = '640' height = '360'></img>",
    audio_stim: audio_instructions[14]
  },

  {
    stimulus: "<p> As you can see, selecting the wrong park for the soccer ball made the kids sad most of the time, but not all the time.",
    audio_stim: audio_instructions[17]
  },

  {
    stimulus: "<p> The different pieces of equipment belong in different parks. You need to try to learn which is the best park for each piece of equipment.",
    audio_stim: audio_instructions[18]
  },


  {
    stimulus: "<p> Try to choose the best park for each piece of equipment, because " +
      "you will <b> WIN </b> 1 point for each time you make the kids happy and <b>LOSE</b> 1 point for each time you make them sad. </p>" +
      "<p> Remember, if you make the best choice, you will win 1 point most of the time, but not all the time. </p>" ,
    audio_stim: audio_instructions[19]
  },
  {
    stimulus: "<p> This is just a practice round, but in the real game, your bonus payment will depend on your total number of points.",
    audio_stim: audio_instructions[20]
  },


  {
    stimulus: "<p> The position where each park appears will change throughout the game. </p>" +
      "<p> The position where the park appears <i> does not </i> influence how likely the kids are to be happy or sad. </p>",
    audio_stim: audio_instructions[21]
  },

  {
    stimulus: "<p> You will have 4 seconds to make each choice. Try to respond before time runs out! </p>" +
    "<p> You will lose 1 point each time you do not make a response. </p>",
    audio_stim: time_warning
  },

  {
    stimulus: "<p> Remember, you should use the 1, 2, and 3 keys to select the park for each piece of equipment. </p>" +
      '<br><div class="choice-instructions-grid"> <div class="choice-option">' +
      '<img src="images/park1.png" class="choice-option-img" stage="instructions" position="0" >' +
      choice_opt_text_1 +
      '<div class="choice-option">' +
      '<img src="images/park2.png" class="choice-option-img" stage="instructions" position="1" >' +
      choice_opt_text_2 +
      '<div class="choice-option">' +
      '<img src="images/park3.png" class="choice-option-img" stage="instructions" position="2" >' +
      choice_opt_text_3,
      audio_stim: audio_instructions[23]

  }];

var practice_start = {
  type: "html-button-response",
  stimulus: "<p> Ready to practice? </p>",
  choices: ['Start practice'],
  post_trial_gap: 100
};

var practice_text_2 = [
  { stimulus: "<p> It's almost time to start the real game. </p>" +
 "<p> Before you start, we're going to ask you a few questions about how the game works. </p>",
 audio_stim: audio_instructions[25] }];

var real_start_text = [
  { stimulus: "<p> It's now time to start the real game. </p>" +
  "Do your best, because the points you earn in the next rounds will influence your bonus payment. </p>",
audio_stim: audio_instructions[26] }];



// COMPREHENSION QUESTIONS
var comp_question_text = [
  {
    stimulus: "<p> <b> True or False? </b> </p>" +
      "<p> If you choose the best option, you will always earn 1 point. </p>",
    correct_button: 1,
    right_response: "<p><b> That's right! </b> Sometimes you will lose 1 point, even if you choose the best option. </p>",
    wrong_response: "<p><b> Incorrect. </b> Sometimes you will lose 1 point, even if you choose the best option. </p>",
    audio_stim: comp_quest_audio[0],
    right_audio: comp_quest_audio[1],
    wrong_audio: comp_quest_audio[2]
  },

  {
    stimulus: "<p> <b> True or False? </b> </p>" +
      "<p> You will have as much time as you want to make each choice. </p>",
    correct_button: 1,
    right_response: "<p> <b> That's right! </b> You will only have 4 seconds to make each choice. </p>",
    wrong_response: "<p> <b>Incorrect.</b> You will only have 4 seconds to make each choice.</p>",
    audio_stim: comp_quest_audio[3],
    right_audio: comp_quest_audio[4],
    wrong_audio: comp_quest_audio[5]
  },

  {
    stimulus: "<p> <b> True or False? </b> </p>" +
      "<p> You should use the '1', '2', and '3' keys to make your choices. </p>",
    correct_button: 0,
    right_response: "<p> <b> That's right! </b> You should use the '1', '2', and '3' keys to make each choice. </p>",
    wrong_response: "<p> <b>Incorrect.</b> You <i>should</i> use the '1', '2', and '3' keys to make each choice. </p>",
    audio_stim: comp_quest_audio[6],
    right_audio: comp_quest_audio[7],
    wrong_audio: comp_quest_audio[8]
  }]


///////////////
// TIMELINE //
///////////////
var practice_stim = [
  { stimulus: practice_images[0], correct_response: 0, choice_images: ["images/park1.png", "images/park2.png", "images/park3.png"], data: { task_part: 'practice', task_block: 'practice' } },
  { stimulus: practice_images[1], correct_response: 1, choice_images: ["images/park1.png", "images/park2.png", "images/park3.png"], data: { task_part: 'practice', task_block: 'practice' } },
  { stimulus: practice_images[2], correct_response: 2, choice_images: ["images/park1.png", "images/park2.png", "images/park3.png"], data: { task_part: 'practice', task_block: 'practice' } },
  { stimulus: practice_images[3], correct_response: 0, choice_images: ["images/park1.png", "images/park2.png", "images/park3.png"], data: { task_part: 'practice', task_block: 'practice' } },
  { stimulus: practice_images[4], correct_response: 1, choice_images: ["images/park1.png", "images/park2.png", "images/park3.png"], data: { task_part: 'practice', task_block: 'practice' } },
  { stimulus: practice_images[5], correct_response: 2, choice_images: ["images/park1.png", "images/park2.png", "images/park3.png"], data: { task_part: 'practice', task_block: 'practice' } }];