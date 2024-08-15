// INSTRUCTIONS AND STIMULI //

// INSTRUCTIONS 
var instructions_text_1 = [
    {
        stimulus: '<p> Welcome back! </p>' +
            '<p> Last week, you had to make choices about lots of different items.  </p>'
    },
    { stimulus: '<p> Today, we are going to ask you to try to remember all the items. </p>' },
    {
        stimulus: '<p> On every trial, you will see an image. </p>' +
            '<p> This image may be an OLD image you saw during the games last week or it may be a NEW image that was not presented. </p>'
    },
    {
        stimulus: "<p> You need to select whether the image is:  </p>" +
            "<p>  'Definitely old', 'Maybe old', 'Maybe new', or 'Definitely new.'  </p>" +
            '<div class="mem-choice-grid">' +
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
            '</div>'
    },
    {
        stimulus: "<p> You should use the 1, 2, 3, and 4 keys to make your responses.  </p>" +
            "<p>  'Definitely old', 'Maybe old', 'Maybe new', or 'Definitely new.'  </p>" +
            '<div class="mem-choice-grid">' +
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
            '</div>'
    },
    {
        stimulus: "<p> You will have 5 seconds to make each response.  </p>" +
            "<p>  Make sure to respond before time runs out! </p>"
    },
    {
        stimulus: "<p> Today, you will see each image ONCE only.  </p>" +
            "<p>  That means none of the images will repeat. </p>"
    },
    {
        stimulus: "<p> Before you play the real game, it is time to practice. </p>" +
            "<p>  Just like in the real game, some of the images in the practice will be ones you have seen before. </p>" +
            "<p>  Others will be entirely new. </p>"
    }];





// COMPREHENSION QUESTIONS
var comp_questions = [
    {
        stimulus: "<p> <b> True or False? </b> </p>" +
            "<p> In this game, you will only see each image once. </p>",
        correct_button: 0,
        right_response: "<p> <b> That's right! </b> You will see many different images <i> one time each </i> in this game. </p>",
        wrong_response: "<p> <b>Incorrect.</b> You will see many different images <i> one time each </i> in this game. </p>"
    },
    {
        stimulus: "<p> <b> True or False? </b> </p>" +
            "<p> You should use the mouse and click to make your response. </p>",
        correct_button: 1,
        right_response: "<p><b> That's right! </b> You should use the '1', '2', '3', and '4' keys to make your response. </p>",
        wrong_response: "<p><b> Incorrect. </b> You should use the '1', '2', '3', and '4' keys to make your response. </p>"
    },

    {
        stimulus: "<p> <b> True or False? </b> </p>" +
            "<p> You will have as much time as you want to make each choice. </p>",
        correct_button: 1,
        right_response: "<p> <b> That's right! </b> You will only have 5 seconds to make each choice. </p>",
        wrong_response: "<p> <b>Incorrect.</b> You will only have 5 seconds to make each choice.</p>"
    }

]

var instructions_text_2 = [
    {
        stimulus: '<p> Great! You have completed the practice. </p>' +
            "<p> Before you start, we're going to ask you a few questions about how the game works.  </p>"
    }];


// PRACTICE STIM //
var practice_stim = [
    { stimulus: prac_stim[0], data: { task_part: 'practice' } },
    { stimulus: prac_stim[1], data: { task_part: 'practice' } },
    { stimulus: prac_stim[2], data: { task_part: 'practice' } },
    { stimulus: prac_stim[3], data: { task_part: 'practice' } },
    { stimulus: prac_stim[4], data: { task_part: 'practice' } },
    { stimulus: prac_stim[5], data: { task_part: 'practice' } },
    { stimulus: prac_stim[6], data: { task_part: 'practice' } },
    { stimulus: prac_stim[7], data: { task_part: 'practice' } }];

// MEMORY STIM //
var memory_stim = [
    { stimulus: real_stim[0], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[1], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[2], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[3], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[4], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[5], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[6], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[7], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[8], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[9], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[10], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[11], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[12], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[13], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[14], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[15], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[16], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[17], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[18], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[19], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[20], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[21], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[22], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[23], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[24], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[25], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[26], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[27], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[28], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[29], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[30], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[31], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[32], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[33], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[34], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[35], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[36], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[37], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[38], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[39], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[40], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[41], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[42], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[43], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[44], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[45], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[46], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[47], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[48], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[49], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[50], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[51], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[52], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[53], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[54], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[55], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[56], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[57], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[58], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[59], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[60], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[61], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[62], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[63], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[64], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[65], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[66], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[67], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[68], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[69], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[70], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[71], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[72], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[73], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[74], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[75], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[76], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[77], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[78], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[79], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[80], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[81], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[82], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[83], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[84], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[85], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[86], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[87], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[88], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[89], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[90], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[91], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[92], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[93], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[94], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[95], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[96], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[97], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[98], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[99], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[100], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[101], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[102], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[103], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[104], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[105], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[106], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[107], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[108], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[109], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[110], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[111], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[112], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[113], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[114], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[115], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[116], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[117], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[118], data: { task_part: 'memory_trial' } },
    { stimulus: real_stim[119], data: { task_part: 'memory_trial' } }];
