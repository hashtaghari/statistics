
/////////////
// ANIMALS //
/////////////

var animals_instructions_text = [
  {
    stimulus:
      "<p> Your goal in this round is to take care of lots of farm animals. </p>" +
      "</div>",
      audio: animals_audio[0]
  },
  {
    stimulus: "<p> Some farm animals are hungry, while other farm animals are already full.  </p>" +
      "<p> On each turn, you will see a farm animal.   </p>" +
      "<p> You need to decide whether to feed it or not.  </p>" ,
      audio: animals_audio[1]
  },
  {
    stimulus:
      "<p> You can feed the farm animal by pressing 1 and leave the farm animal alone by pressing 0. </p>" +
      '<br><div class="choice-instructions-grid"> <div class="choice-option">' +
      '<img src="images/approach.png" class="choice-option-img" stage="instructions" position="0" >' +
      choice_opt_text_1 +
      '<div class="choice-option">' +
      '<img src="images/avoid.png" class="choice-option-img" stage="instructions" position="1" >' +
      choice_opt_text_2,
      audio: animals_audio[2]
  },
  {
    stimulus: "<p> If you feed a hungry farm animal, you will make it feel satisfied! </p>" +
    "<p> But if you feed the farm animal and it was already full, you will make it feel sick. </p>" ,
    audio: animals_audio[3]
  },
  {
    stimulus: "<p> You will earn points based on how you made the farm animal feel. </p>" +
    "<p> If you made it satisfied, you will WIN anywhere from 1 - 9 points, </p>" +
    "<p> but if you made it sick, you will LOSE anywhere from 1 - 9 points. </p>" ,
    audio: animals_audio[4]
  },
  {
    stimulus: "<p> You will see how many points you won or lost in the center of the screen. </p>" +
    "<p> Here is what you would see if you won 5 points: </p>" +
    '<p style="color:green;font-size:50px;font-weight:bolder">5</p>' ,
    audio: five_points_win
  },
  {
    stimulus: "<p> And here is what you would see if you lost 3 points: </p>" +
    '<p style="color:red;font-size:50px;font-weight:bolder">-3</p>' ,
    audio: three_points_lose
  },
  {
    stimulus: "<p> Some farm animals will become very satisfied or very sick. </p>" +
    "<p> These farm animals will make you win or lose LOTS of points. </p>" +
    "<p> Other farm animals have less strong feelings. </p>" + 
    "<p> These farm animals will make you win or lose small amounts of points. </p>" ,
    audio: animals_audio[5]
  },
  {
    stimulus: "<p> If you choose to leave the farm animal alone, you will not win or lose any points. </p>" +
    "<p>  However, in the center of the screen, you will see the number of points you WOULD HAVE won or lost if you had fed the farm animal. </p>",
    audio: animals_audio[6]
  },
  {
    stimulus: "<p> Here is what you might see if you did not feed the farm animal but the animal was hungry: </p>" +
    '<p style="color:grey; font-size:50px; display: inline-block; border-spacing: 15px; border-width:3px; border-style:solid; border-color:red">  &nbsp; 6 &nbsp; </p>' +
    "<p> Remember, in this case, you would not win or lose ANY points because you did not feed the farm animal.  </p>" ,
    audio: animals_audio[7]
  },
  {
    stimulus: "<p> Try to make the best choice for each farm animal because </p>" +
    "<p> at the end of the game, you will earn bonus money based on how many points you earned. </p>",
    audio: animals_audio[8]
  },
  {
    stimulus: "<p> You will have 3 seconds to make each choice. Try to respond before time runs out! </p>" +
    "<p> You will lose 5 points each time you do not make a response. </p>",
    audio: time_warning
  }];

/////////////
// FRUIT //
/////////////

var fruit_instructions_text = [
  {
    stimulus:
      "<p> Your goal in this round is to eat tasty fruit. </p>" +
      "</div>",
      audio: fruit_audio[0]
  },
  {
    stimulus: "<p> Some of the fruits you will see are tasty. Others are rotten on the inside.  </p>" +
      "<p> On each turn, you will see a fruit.   </p>" +
      "<p> You need to decide whether to eat it or not.  </p>" ,
      audio: fruit_audio[1]
  },
  {
    stimulus:
      "<p> You can eat the fruit by pressing 1 and choose not to eat it by pressing 0. </p>" +
      '<br><div class="choice-instructions-grid"> <div class="choice-option">' +
      '<img src="images/approach.png" class="choice-option-img" stage="instructions" position="0" >' +
      choice_opt_text_1 +
      '<div class="choice-option">' +
      '<img src="images/avoid.png" class="choice-option-img" stage="instructions" position="1" >' +
      choice_opt_text_2,
      audio: fruit_audio[2]
  },
  {
    stimulus: "<p> If you eat the fruit and it was tasty, you will win points! </p>" +
    "<p> But if you eat the fruit and it was rotten, you will lose points. </p>" ,
    audio: fruit_audio[3]
  },
  {
    stimulus: "<p> You will earn points based on how tasty or rotten the fruit was. </p>" +
    "<p> If it was tasty, you will WIN anywhere from 1 - 9 points, </p>" +
    "<p> but if it was rotten, you will LOSE anywhere from 1 - 9 points. </p>" ,
    audio: fruit_audio[4]
  },
  {
    stimulus: "<p> You will see how many points you won or lost in the center of the screen. </p>" +
    "<p> Here is what you would see if you earned 5 points: </p>" +
    '<p style="color:green;font-size:50px;font-weight:bolder">5</p>' ,
    audio: five_points_win
  },
  {
    stimulus: "<p> And here is what you would see if you lost 3 points: </p>" +
    '<p style="color:red;font-size:50px;font-weight:bolder">-3</p>' ,
    audio: three_points_lose
  },
  {
    stimulus: "<p> Some fruit is very tasty or very rotten. </p>" +
    "<p> These fruits will make you win or lose LOTS of points. </p>" +
    "<p> Other fruits are only kind of tasty or kind of rotten. </p>" + 
    "<p> These fruits will make you win or lose small amounts of points. </p>" ,
    audio: fruit_audio[5]
  },
  {
    stimulus: "<p> If you choose to not eat the fruit, you will not win or lose any points. </p>" +
    "<p>  However, in the center of the screen, you will see the number of points you WOULD HAVE earned if you had eaten the fruit. </p>",
    audio: fruit_audio[6]
  },
  {
    stimulus: "<p> Here is what you might see if you did not eat the fruit but the fruit was tasty: </p>" +
    '<p style="color:grey; font-size:50px; display: inline-block; border-spacing: 15px; border-width:3px; border-style:solid; border-color:red">  &nbsp; 6 &nbsp; </p>' +
    "<p> Remember, in this case, you would not win or lose ANY points because you did not eat the fruit.  </p>" ,
    audio: fruit_audio[7]
  },
  {
    stimulus: "<p> Try to make the best choice for each fruit because </p>" +
    "<p> at the end of the game, you will earn bonus money based on how many points you earned. </p>",
    audio: fruit_audio[8]
  },
  {
    stimulus: "<p> You will have 3 seconds to make each choice. Try to respond before time runs out! </p>" +
    "<p> You will lose 5 points each time you do not make a response. </p>",
    audio: time_warning
  }];


///////////////
// FURNITURE //
///////////////

var furniture_instructions_text = [
  {
    stimulus:
      "<p> Your goal in this round is to decorate your friend's new house with furniture. </p>" +
      "</div>",
      audio: furniture_audio[0]
  },
  {
    stimulus: "<p> Your friend likes some pieces of furniture but not others.  </p>" +
      "<p> On each turn, you will see a piece of furniture.   </p>" +
      "<p> You need to decide whether to put it in your friend's house or not.  </p>" ,
      audio: furniture_audio[1]
  },
  {
    stimulus:
      "<p> You can put the furniture in her house by pressing 1 and deliver it elsewhere by pressing 0. </p>" +
      '<br><div class="choice-instructions-grid"> <div class="choice-option">' +
      '<img src="images/approach.png" class="choice-option-img" stage="instructions" position="0" >' +
      choice_opt_text_1 +
      '<div class="choice-option">' +
      '<img src="images/avoid.png" class="choice-option-img" stage="instructions" position="1" >' +
      choice_opt_text_2,
      audio: furniture_audio[2]
  },
  {
    stimulus: "<p> If you decorate your friend's house with furniture she likes, she will be happy! </p>" +
    "<p> But if you give her furniture that she does not like, she will be annoyed. </p>" ,
    audio: furniture_audio[3]
  },
  {
    stimulus: "<p> You will earn points based on how you made your friend feel. </p>" +
    "<p> If you made her happy, you will WIN anywhere from 1 - 9 points, </p>" +
    "<p> but if you made her annoyed you will LOSE anywhere from 1 - 9 points. </p>" ,
    audio: furniture_audio[4]
  },
  {
    stimulus: "<p> You will see how many points you won or lost in the center of the screen. </p>" +
    "<p> Here is what you would see if you won 5 points: </p>" +
    '<p style="color:green;font-size:50px;font-weight:bolder">5</p>' ,
    audio: five_points_win
  },
  {
    stimulus: "<p> And here is what you would see if you lost 3 points: </p>" +
    '<p style="color:red;font-size:50px;font-weight:bolder">-3</p>' ,
    audio: three_points_lose
  },
  {
    stimulus: "<p> Some pieces of furniture will make her feel very happy or very annoyed. </p>" +
    "<p> These pieces of furniture will make you win or lose LOTS of points. </p>" +
    "<p> Other pieces of furniture will only make her feel a little happy or a little annoyed. </p>" + 
    "<p> These pieces of furniture will make you win or lose small amounts of points. </p>" ,
    audio: furniture_audio[5]
  },
  {
    stimulus: "<p> If you choose to deliver a piece of furniture elsewhere, you will not win or lose any points. </p>" +
    "<p>  However, in the center of the screen, you will see the number of points you WOULD HAVE won or lost if you had given the furniture to your friend. </p>",
    audio: furniture_audio[6]
  },
  {
    stimulus: "<p> Here is what you might see if you did not give a piece of furniture to your friend that would have made her happy: </p>" +
    '<p style="color:grey; font-size:50px; display: inline-block; border-spacing: 15px; border-width:3px; border-style:solid; border-color:red">  &nbsp; 6 &nbsp; </p>' +
    "<p> Remember, in this case, you would not win or lose ANY points because you did not give her the furniture.  </p>" ,
    audio: furniture_audio[7]
  },
  {
    stimulus: "<p> Try to make the best choice for each piece of furniture because </p>" +
    "<p> at the end of the game, you will earn bonus money based on how many points you earned. </p>",
    audio: furniture_audio[8]
  },
  {
    stimulus: "<p> You will have 3 seconds to make each choice. Try to respond before time runs out! </p>" +
    "<p> You will lose 5 points each time you do not make a response. </p>",
    audio: time_warning
  }];


///////////
// PETS //
//////////

var pets_instructions_text = [
  {
    stimulus:
      "<p> Your goal in this round is to take care of lots of animals. </p>" +
      "</div>",
      audio: pets_audio[0]
  },
  {
    stimulus: "<p> Some animals want to be pet, while other animals want to be left alone.  </p>" +
      "<p> On each turn, you will see an animal.   </p>" +
      "<p> You need to decide whether to pet it or not.  </p>" ,
      audio: pets_audio[1]
  },
  {
    stimulus:
      "<p> You can pet the animal by pressing 1 and leave the animal alone by pressing 0. </p>" +
      '<br><div class="choice-instructions-grid"> <div class="choice-option">' +
      '<img src="images/approach.png" class="choice-option-img" stage="instructions" position="0" >' +
      choice_opt_text_1 +
      '<div class="choice-option">' +
      '<img src="images/avoid.png" class="choice-option-img" stage="instructions" position="1" >' +
      choice_opt_text_2,
      audio: pets_audio[2]
  },
  {
    stimulus: "<p> If you pet an animal that wants to be pet, you will make it feel happy! </p>" +
    "<p> But if you pet an animal that wants to be left alone, you will make it feel angry. </p>" ,
    audio: pets_audio[3]
  },
  {
    stimulus: "<p> You will earn points based on how you made the animal feel. </p>" +
    "<p> If you made it feel happy, you will WIN anywhere from 1 - 9 points, </p>" +
    "<p> but if you made it feel angry, you will LOSE anywhere from 1 - 9 points. </p>" ,
    audio: pets_audio[4]
  },
  {
    stimulus: "<p> You will see how many points you won or lost in the center of the screen. </p>" +
    "<p> Here is what you would see if you won 5 points: </p>" +
    '<p style="color:green;font-size:50px;font-weight:bolder">5</p>' ,
    audio: five_points_win
  },
  {
    stimulus: "<p> And here is what you would see if you lost 3 points: </p>" +
    '<p style="color:red;font-size:50px;font-weight:bolder">-3</p>' ,
    audio: three_points_lose
  },
  {
    stimulus: "<p> Some animals will become very happy or very angry. </p>" +
    "<p> These animals will make you win or lose LOTS of points. </p>" +
    "<p> Other animals have less strong feelings. </p>" + 
    "<p> These animals will make you win or lose small amounts of points. </p>" ,
    audio: pets_audio[5]
  },
  {
    stimulus: "<p> If you choose to leave the animal alone, you will not win or lose any points. </p>" +
    "<p>  However, in the center of the screen, you will see the number of points you WOULD HAVE won or lost if you had pet the animal. </p>",
    audio: pets_audio[6]
  },
  {
    stimulus: "<p> Here is what you might see if you did not pet the animal but the animal wanted to be pet: </p>" +
    '<p style="color:grey; font-size:50px; display: inline-block; border-spacing: 15px; border-width:3px; border-style:solid; border-color:red">  &nbsp; 6 &nbsp; </p>' +
    "<p> Remember, in this case, you would not win or lose ANY points because you did not pet the animal.  </p>" ,
    audio: pets_audio[7]
  },
  {
    stimulus: "<p> Try to make the best choice for each animal because </p>" +
    "<p> at the end of the game, you will earn bonus money based on how many points you earned. </p>",
    audio: pets_audio[8]
  },
  {
    stimulus: "<p> You will have 3 seconds to make each choice. Try to respond before time runs out! </p>" +
    "<p> You will lose 5 points each time you do not make a response. </p>",
    audio: time_warning
  }];


////////////
// PLANTS //
////////////

var plants_instructions_text = [
  {
    stimulus:
      "<p> Your goal in this round is to sell different plants to a picky customer. </p>" +
      "</div>",
      audio: plants_audio[0]
  },
  {
    stimulus: "<p> The customer likes some plants and dislikes others.  </p>" +
      "<p> On each turn, you will see a plant.   </p>" +
      "<p> You need to decide whether to offer it to the customer or not.  </p>" ,
     audio: plants_audio[1]
  },
  {
    stimulus:
      "<p> You can offer the plant by pressing 1 and decide to not offer it by pressing 0. </p>" +
      '<br><div class="choice-instructions-grid"> <div class="choice-option">' +
      '<img src="images/approach.png" class="choice-option-img" stage="instructions" position="0" >' +
      choice_opt_text_1 +
      '<div class="choice-option">' +
      '<img src="images/avoid.png" class="choice-option-img" stage="instructions" position="1" >' +
      choice_opt_text_2,
      audio: plants_audio[2]
  },
  {
    stimulus: "<p> If you offer a plant to the customer that she likes, she will be very pleased! </p>" +
    "<p> But if you offer a plant that she does NOT like, she will be annoyed. </p>" ,
    audio: plants_audio[3]
  },
  {
    stimulus: "<p> You will earn points based on how you made the customer feel. </p>" +
    "<p> If you made her pleased, you will WIN anywhere from 1 - 9 points, </p>" +
    "<p> but if you made her annoyed, you will LOSE anywhere from 1 - 9 points. </p>" ,
    audio: plants_audio[4]
  },
  {
    stimulus: "<p> You will see how many points you won or lost in the center of the screen. </p>" +
    "<p> Here is what you would see if you won 5 points: </p>" +
    '<p style="color:green;font-size:50px;font-weight:bolder">5</p>' ,
    audio: five_points_win
  },
  {
    stimulus: "<p> And here is what you would see if you lost 3 points: </p>" +
    '<p style="color:red;font-size:50px;font-weight:bolder">-3</p>' ,
    audio: three_points_lose
  },
  {
    stimulus: "<p> Some plants will make the customer VERY pleased or annoyed. </p>" +
    "<p> These plants will make you win or lose LOTS of points. </p>" +
    "<p> The customer will have less strong feelings about other plants. </p>" + 
    "<p> These plants will make you win or lose small amounts of points. </p>" ,
    audio: plants_audio[5]
  },
  {
    stimulus: "<p> If you choose to not offer the plant to the customer, you will not win or lose any points. </p>" +
    "<p>  However, in the center of the screen, you will see the number of points you WOULD HAVE won or lost if you had offered the plant. </p>",
    audio: plants_audio[6]
  },
  {
    stimulus: "<p> Here is what you might see if you did not offer the plant but the customer would have liked it: </p>" +
    '<p style="color:grey; font-size:50px; display: inline-block; border-spacing: 15px; border-width:3px; border-style:solid; border-color:red">  &nbsp; 6 &nbsp; </p>' +
    "<p> Remember, in this case, you would not win or lose ANY points because you did not offer the plant.  </p>" ,
    audio: plants_audio[7]
  },
  {
    stimulus: "<p> Try to make the best choice for each plant because </p>" +
    "<p> at the end of the game, you will earn bonus money based on how many points you earned. </p>",
    audio: plants_audio[8]
  },
  {
    stimulus: "<p> You will have 3 seconds to make each choice. Try to respond before time runs out! </p>" +
    "<p> You will lose 5 points each time you do not make a response. </p>",
    audio: time_warning
  }];

///////////////
// VEHICLES //
//////////////

var vehicles_instructions_text = [
  {
    stimulus:
      "<p> Your goal in this round is to take your friend for rides in different vehicles. </p>" +
      "</div>",
      audio: vehicles_audio[0]
  },
  {
    stimulus: "<p> Your friend enjoys riding in some vehicles but not in others.  </p>" +
      "<p> On each turn, you will see a vehicle.   </p>" +
      "<p> You need to decide whether to take your friend for a ride or not.  </p>" ,
      audio: vehicles_audio[1]
  },
  {
    stimulus:
      "<p> You can take your friend for a ride in the vehicle by pressing 1 and skip the ride by pressing 0. </p>" +
      '<br><div class="choice-instructions-grid"> <div class="choice-option">' +
      '<img src="images/approach.png" class="choice-option-img" stage="instructions" position="0" >' +
      choice_opt_text_1 +
      '<div class="choice-option">' +
      '<img src="images/avoid.png" class="choice-option-img" stage="instructions" position="1" >' +
      choice_opt_text_2,
      audio: vehicles_audio[2]
  },
  {
    stimulus: "<p> If you take them for a ride in a vehicle they like, they will be thrilled! </p>" +
    "<p> But if you take them for a ride in a vehicle they do not like, they will be upset. </p>" ,
    audio: vehicles_audio[3]
  },
  {
    stimulus: "<p> You will earn points based on how you made your friend feel. </p>" +
    "<p> If you made him thrilled, you will WIN anywhere from 1 - 9 points, </p>" +
    "<p> but if you made him upset, you will LOSE anywhere from 1 - 9 points. </p>" ,
    audio: vehicles_audio[4]
  },
  {
    stimulus: "<p> You will see how many points you won or lost in the center of the screen. </p>" +
    "<p> Here is what you would see if you won 5 points: </p>" +
    '<p style="color:green;font-size:50px;font-weight:bolder">5</p>' ,
    audio: five_points_win
  },
  {
    stimulus: "<p> And here is what you would see if you lost 3 points: </p>" +
    '<p style="color:red;font-size:50px;font-weight:bolder">-3</p>' ,
    audio: three_points_lose
  },
  {
    stimulus: "<p> Some vehicles will make your friend REALLY thrilled or upset. </p>" +
    "<p> These vehicles will make you win or lose LOTS of points. </p>" +
    "<p> Other vehicles will only make him feel a little thrilled or upset. </p>" + 
    "<p> These vehicles will make you win or lose small amounts of points. </p>" ,
    audio: vehicles_audio[5]
  },
  {
    stimulus: "<p> If you choose to skip the ride, you will not win or lose any points. </p>" +
    "<p>  However, in the center of the screen, you will see the number of points you WOULD HAVE won or lost if you had taken your friend for a ride. </p>",
    audio: vehicles_audio[6]
  },
  {
    stimulus: "<p> Here is what you might see if you did not take your friend for a ride but he would have enjoyed it: </p>" +
    '<p style="color:grey; font-size:50px; display: inline-block; border-spacing: 15px; border-width:3px; border-style:solid; border-color:red">  &nbsp; 6 &nbsp; </p>' +
    "<p> Remember, in this case, you would not win or lose ANY points because you skipped the ride.  </p>" ,
    audio: vehicles_audio[7]
  },
  {
    stimulus: "<p> Try to make the best choice for each vehicle because </p>" +
    "<p> at the end of the game, you will earn bonus money based on how many points you earned. </p>",
    audio: vehicles_audio[8]
  },
  {
    stimulus: "<p> You will have 3 seconds to make each choice. Try to respond before time runs out! </p>" +
    "<p> You will lose 5 points each time you do not make a response. </p>",
    audio: time_warning
  }];