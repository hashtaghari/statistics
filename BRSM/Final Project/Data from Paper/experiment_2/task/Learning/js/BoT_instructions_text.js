/////////////////
// CHOICE TEXT //
/////////////////

var choice_opt_text_1 = '<div class="choice-option-text"> Press "1." </div></div>';
var choice_opt_text_2 = '<div class="choice-option-text"> Press "2." </div></div>';
var choice_opt_text_3 = '<div class="choice-option-text"> Press "3." </div></div></div>';

/////////////
// ANIMALS //
/////////////

var animals_instructions_text = [
  {
    stimulus:
      "<p> Your goal in this round is to return farm animals to the barns where they live. </p>" +
      "<p>  Different animals wandered away from different barns! </p>" +
      "</div>",
    audio_stim: animals_audio[0]
  },
  {
    stimulus: "<p> On each turn, you will see a picture of a farm animal and three different barns.  </p>" +
      "<p> You need to select the barn where each animal lives.  </p>",
    audio_stim: animals_audio[1]
  },
  {
    stimulus:
      "<p> You can select the barn on the left by pressing 1, the barn in the middle by pressing 2, and the barn on the right by pressing 3. </p>" +
      '<br><div class="choice-instructions-grid"> <div class="choice-option">' +
      '<img src="images/animals_choice1.png" class="choice-option-img" stage="instructions" position="0" >' +
      choice_opt_text_1 +
      '<div class="choice-option">' +
      '<img src="images/animals_choice2.png" class="choice-option-img" stage="instructions" position="1" >' +
      choice_opt_text_2 +
      '<div class="choice-option">' +
      '<img src="images/animals_choice3.png" class="choice-option-img" stage="instructions" position="2" >' +
      choice_opt_text_3,
    audio_stim: animals_audio[2]
  },
  {
    stimulus: "<p> If you return the farm animal to the correct barn, it will usually be happy! </p>" +
      "<div style='float: center;'><img src='images/check.png' width = '200' height = '200'></img>",
    audio_stim: animals_audio[3]
  },
  {
    stimulus: "<p> But, if you return the farm animal to the wrong barn, it will usually be sad. </p>" +
      "<div style='float: center;'><img src='images/x.png' width = '200' height = '200'></img>",
    audio_stim: animals_audio[4]
  },
  {
    stimulus: "<p> Importantly, each farm animal belongs in one of the barns. </p>" +
      "<p> If you choose the correct barn, the farm animal will return home safely and will be more likely to be happy! </p>",
    audio_stim: animals_audio[5]
  },
  {
    stimulus: "<p> However, even if you choose the correct barn for the farm animal, it might still feel sad. </p>" +
      "<p> Similarly, even if you choose the <i>wrong</i> barn, it might still feel happy.",
    audio_stim: animals_audio[6]
  },
  {
    stimulus: "<p> Try to choose the correct barn for each farm animal, because " +
      "you will <b> WIN </b> 1 point for each farm animal you make happy and <b>LOSE</b> 1 point for each farm animal you make sad. </p>" +
      "<p> Your bonus payment will depend on your total number of points.",
    audio_stim: animals_audio[7]
  },
  {
    stimulus: "<p> The position of each barn will change throughout the round. </p>" +
      "<p> The barn's position <i> does not </i> influence how likely it is to be the correct one. </p>",
    audio_stim: animals_audio[8]
  },
  {
    stimulus: "<p> You will have 4 seconds to make each choice. Try to respond before time runs out! </p>" +
    "<p> You will lose 1 point each time you do not make a response. </p>",
    audio_stim: time_warning
  }];



///////////
// FRUIT //
///////////
var fruit_instructions_text = [
  {
    stimulus:
      "<p> Your goal in this round is to buy different types of fruits. </p>" +
      "<p> You will try to purchase many fruits from different stores. </p>" +
      "</div>",
    audio_stim: fruit_audio[0]
  },
  {
    stimulus: "<p> On each turn, you will see a picture of a fruit and three different stores.  </p>" +
      "<p> You need to select the store where you can buy that fruit.  </p>",
    audio_stim: fruit_audio[1]
  },
  {
    stimulus:
      "<p> You can select the store on the left by pressing 1, the store in the middle by pressing 2, and the store on the right by pressing 3. </p>" +
      '<br><div class="choice-instructions-grid"> <div class="choice-option">' +
      '<img src="images/fruit_choice1.png" class="choice-option-img" stage="instructions" position="0" >' +
      choice_opt_text_1 +
      '<div class="choice-option">' +
      '<img src="images/fruit_choice2.png" class="choice-option-img" stage="instructions" position="1" >' +
      choice_opt_text_2 +
      '<div class="choice-option">' +
      '<img src="images/fruit_choice3.png" class="choice-option-img" stage="instructions" position="2" >' +
      choice_opt_text_3,
    audio_stim: fruit_audio[2]
  },
  {
    stimulus: "<p> If you find the fruit in the store you chose, you will get to buy and eat it! </p>" +
      "<div style='float: center;'><img src='images/check.png' width = '200' height = '200'></img>",
    audio_stim: fruit_audio[3]
  },
  {
    stimulus: "<p> But, if the fruit is not in that store, you will be hungry. </p>" +
      "<div style='float: center;'><img src='images/x.png' width = '200' height = '200'></img>",
    audio_stim: fruit_audio[4]
  },
  {
    stimulus: "<p> Importantly, each fruit is more likely to be found in one of the stores. </p>" +
      "<p> If you choose the correct store, you will be more likely to be able to buy the fruit! </p>",
    audio_stim: fruit_audio[5]
  },
  {
    stimulus: "<p> However, even if you choose the best store for the fruit, the store might not have it sometimes. </p>" +
      "<p> Similarly, even if you choose the <i>wrong</i> store, it might still have the fruit.",
    audio_stim: fruit_audio[6]
  },
  {
    stimulus: "<p> Try to choose the best store for each fruit, because " +
      "you will <b> WIN </b> 1 point for each fruit you eat and <b>LOSE</b> 1 point each time you are hungry. </p>" +
      "<p> Your bonus payment will depend on your total number of points.",
    audio_stim: fruit_audio[7]
  },
  {
    stimulus: "<p> The position of each store will change throughout the round. </p>" +
      "<p> The store's position <i> does not </i> influence how likely you are to find the fruit. </p>",
    audio_stim: fruit_audio[8]
  },
  {
    stimulus: "<p> You will have 4 seconds to make each choice. Try to respond before time runs out! </p>" +
    "<p> You will lose 1 point each time you do not make a response. </p>",
    audio_stim: time_warning
  }];


///////////////
// FURNITURE //
///////////////

var furniture_instructions_text = [
  {
    stimulus:
      "<p> Your goal in this round is to deliver furniture to three different buildings. </p>" +
      "<p> You will need to deliver many pieces of furniture. </p>" +
      "</div>",
    audio_stim: furniture_audio[0]
  },
  {
    stimulus: "<p> On each turn, you will see a picture of a furniture item and three different buildings.  </p>" +
      "<p> You need to select the building that you want to deliver the furniture to.  </p>",
    audio_stim: furniture_audio[1]
  },
  {
    stimulus:
      "<p> You can select the building on the left by pressing 1, the building in the middle by pressing 2, and the building on the right by pressing 3.  </p>" +
      '<br><div class="choice-instructions-grid"> <div class="choice-option">' +
      '<img src="images/furniture_choice1.png" class="choice-option-img" stage="instructions" position="0" >' +
      choice_opt_text_1 +
      '<div class="choice-option">' +
      '<img src="images/furniture_choice2.png" class="choice-option-img" stage="instructions" position="1" >' +
      choice_opt_text_2 +
      '<div class="choice-option">' +
      '<img src="images/furniture_choice3.png" class="choice-option-img" stage="instructions" position="2" >' +
      choice_opt_text_3,
    audio_stim: furniture_audio[2]
  },
  {
    stimulus: "<p> If the furniture belongs in the building you chose, the building owner will likely be very happy! </p>" +
      "<div style='float: center;'><img src='images/check.png' width = '200' height = '200'></img>",
    audio_stim: furniture_audio[3]
  },
  {
    stimulus: "<p> But, if the furniture does not belong in the building you chose, the owner will likely be mad. </p>" +
      "<div style='float: center;'><img src='images/x.png' width = '200' height = '200'></img>",
    audio_stim: furniture_audio[4]
  },
  {
    stimulus: "<p> Importantly, each piece of furniture belongs in one of the three buildings. </p>" +
      "<p> If you choose the correct building for the piece of furniture, you will be more likely to make the building owner happy! </p>",
    audio_stim: furniture_audio[5]
  },
  {
    stimulus: "<p> However, even if you choose the best building for the furniture, the owner may still be mad sometimes. </p>" +
      "<p> Similarly, even if you choose the <i>wrong</i> building, the owner may still be happy.",
    audio_stim: furniture_audio[6]
  },
  {
    stimulus: "<p> Try to choose the best building for each piece of furniture, because " +
      "you will <b> WIN </b> 1 point each time a building owner is happy and <b>LOSE</b>  1 point each time a building owner is mad. </p>" +
      "<p> Your bonus payment will depend on your total number of points.",
    audio_stim: furniture_audio[7]
  },
  {
    stimulus: "<p> The position of each building will change throughout the round. </p>" +
      "<p> The building's position <i> does not </i> influence how likely the owner is to be happy or mad. </p>",
    audio_stim: furniture_audio[8]
  },
  {
    stimulus: "<p> You will have 4 seconds to make each choice. Try to respond before time runs out! </p>" +
    "<p> You will lose 1 point each time you do not make a response. </p>",
    audio_stim: time_warning
  }];


///////////
// PETS //
///////////
var pets_instructions_text = [
  {
    stimulus:
      "<p> Your goal in this round is to feed all of your pets with the foods they like. </p>" +
      "<p> You will need to feed many pets. </p>" +
      "</div>",
    audio_stim: pets_audio[0]
  },
  {
    stimulus: "<p> On each turn, you will see a picture of one of your pets and three different types of foods.  </p>" +
      "<p> You need to select the food that you want to give to your pet.  </p>",
    audio_stim: pets_audio[1]
  },
  {
    stimulus:
      "<p> You can select the food on the left by pressing 1, the food in the middle by pressing 2, and the food on the right by pressing 3. </p>" +
      '<br><div class="choice-instructions-grid"> <div class="choice-option">' +
      '<img src="images/pets_choice1.png" class="choice-option-img" stage="instructions" position="0" >' +
      choice_opt_text_1 +
      '<div class="choice-option">' +
      '<img src="images/pets_choice2.png" class="choice-option-img" stage="instructions" position="1" >' +
      choice_opt_text_2 +
      '<div class="choice-option">' +
      '<img src="images/pets_choice3.png" class="choice-option-img" stage="instructions" position="2" >' +
      choice_opt_text_3,
    audio_stim: pets_audio[2]
  },
  {
    stimulus: "<p> If your pet likes the food you chose, it will be very happy! </p>" +
      "<div style='float: center;'><img src='images/check.png' width = '200' height = '200'></img>",
    audio_stim: pets_audio[3]
  },
  {
    stimulus: "<p> But, if your pet does not like the food you chose, it will feel sick. </p>" +
      "<div style='float: center;'><img src='images/x.png' width = '200' height = '200'></img>",
    audio_stim: pets_audio[4]
  },
  {
    stimulus: "<p> Importantly, each pet has a food that it prefers. </p>" +
      "<p> If you choose the food that the pet prefers, it will be more likely to be happy! </p>",
    audio_stim: pets_audio[5]
  },
  {
    stimulus: "<p> However, even if you choose the food the pet prefers, it may still feel sick sometimes. </p>" +
      "<p> Similarly, even if you choose the <i>wrong</i> food, it may still feel happy.",
    audio_stim: pets_audio[6]
  },
  {
    stimulus: "<p> Try to choose the food each pet prefers, because " +
      "you will <b> WIN </b> 1 point each time the pet is happy and <b>LOSE</b>  1 point each time the pet feels sick. </p>" +
      "<p> Your bonus payment will depend on your total number of points.",
    audio_stim: pets_audio[7]
  },
  {
    stimulus: "<p> The position of each food will change throughout the round. </p>" +
      "<p> The food's position <i> does not </i> influence how likely the pet is to feel happy or sick. </p>",
    audio_stim: pets_audio[8]
  },
  {
    stimulus: "<p> You will have 4 seconds to make each choice. Try to respond before time runs out! </p>" +
    "<p> You will lose 1 point each time you do not make a response. </p>",
    audio_stim: time_warning
  }];



////////////
// PLANTS //
////////////
var plants_instructions_text = [
  {
    stimulus:
      "<p> Your goal in this round is to grow a beautiful garden by watering plants. </p>" +
      "<p> You will need to water many different plants. </p>" +
      "</div>",
    audio_stim: plants_audio[0]
  },
  {
    stimulus: "<p> On each turn, you will see a picture of one of your plants and three different watering cans.  </p>" +
      "<p> Each watering can has a different mixture of water and fertilizer.  </p>" +
      "<p> You need to select which watering can to use for each plant. </p>",
    audio_stim: plants_audio[1]
  },
  {
    stimulus:
      "<p> You can select the watering can on the left by pressing 1, the watering can in the middle by pressing 2, and the watering can on the right by pressing 3. </p>" +
      '<br><div class="choice-instructions-grid"> <div class="choice-option">' +
      '<img src="images/plants_choice1.png" class="choice-option-img" stage="instructions" position="0" >' +
      choice_opt_text_1 +
      '<div class="choice-option">' +
      '<img src="images/plants_choice2.png" class="choice-option-img" stage="instructions" position="1" >' +
      choice_opt_text_2 +
      '<div class="choice-option">' +
      '<img src="images/plants_choice3.png" class="choice-option-img" stage="instructions" position="2" >' +
      choice_opt_text_3,
    audio_stim: plants_audio[2]
  },
  {
    stimulus: "<p> If the watering can you chose works for the plant, it will grow! </p>" +
      "<div style='float: center;'><img src='images/check.png' width = '200' height = '200'></img>",
    audio_stim: plants_audio[3]
  },
  {
    stimulus: "<p> But, if the watering can you chose does not work, your plant will droop. </p>" +
      "<div style='float: center;'><img src='images/x.png' width = '200' height = '200'></img>",
    audio_stim: plants_audio[4]
  },
  {
    stimulus: "<p> Importantly, each plant has one fertilizer mixture that works best for it. </p>" +
      "<p> If you choose the watering can with the right fertilizer, the plant will be more likely to grow. </p>",
    audio_stim: plants_audio[5]
  },
  {
    stimulus: "<p> However, even if you choose the best watering can for the plant, the plant may still droop. </p>" +
      "<p> Similarly, even if you choose the <i>wrong</i> watering can, the plant may still grow.",
    audio_stim: plants_audio[6]
  },
  {
    stimulus: "<p> Try to choose the best watering can for each plant, because " +
      "you will <b> WIN </b> 1 point each time a plant grows and <b>LOSE</b>  1 point each time a plant droops. </p>" +
      "<p> Your bonus payment will depend on your total number of points.",
    audio_stim: plants_audio[7]
  },
  {
    stimulus: "<p> The position of each watering can will change throughout the round. </p>" +
      "<p> The watering can's position <i> does not </i> influence how likely each plant is to droop or grow. </p>",
    audio_stim: plants_audio[8]
  },
  {
    stimulus: "<p> You will have 4 seconds to make each choice. Try to respond before time runs out! </p>" +
    "<p> You will lose 1 point each time you do not make a response. </p>",
    audio_stim: time_warning
  }];


//////////////
// VEHICLES //
//////////////
var vehicles_instructions_text = [
  {
    stimulus:
      "<p> Your goal in this round is to travel the world by putting fuel into different vehicles. </p>" +
      "<p> To travel, you will need to put fuel into many different vehicles. </p>" +
      "</div>",
    audio_stim: vehicles_audio[0]
  },
  {
    stimulus: "<p> On each turn, you will see a picture of one of your vehicles and three different types of fuel.  </p>" +
      "<p> You need to select which kind of fuel to use.  </p>",
    audio_stim: vehicles_audio[1]
  },
  {
    stimulus:
      "<p> You can select the fuel on the left by pressing 1, the fuel in the middle by pressing 2, and the fuel on the right by pressing 3. </p>" +
      '<br><div class="choice-instructions-grid"> <div class="choice-option">' +
      '<img src="images/vehicles_choice1.png" class="choice-option-img" stage="instructions" position="0" >' +
      choice_opt_text_1 +
      '<div class="choice-option">' +
      '<img src="images/vehicles_choice2.png" class="choice-option-img" stage="instructions" position="1" >' +
      choice_opt_text_2 +
      '<div class="choice-option">' +
      '<img src="images/vehicles_choice3.png" class="choice-option-img" stage="instructions" position="2" >' +
      choice_opt_text_3,
    audio_stim: vehicles_audio[2]
  },

  {
    stimulus: "<p> If the fuel you chose works for that vehicle, it will start, and </p>" +
      "<p> you will get to travel. </p>" +
      "<div style='float: center;'><img src='images/check.png' width = '200' height = '200'></img>",
    audio_stim: vehicles_audio[3]
  },
  {
    stimulus: "<p> But, if the fuel you chose does not work, your vehicle will not move. </p>" +
      "<div style='float: center;'><img src='images/x.png' width = '200' height = '200'></img>",
    audio_stim: vehicles_audio[4]
  },
  {
    stimulus: "<p> Importantly, each vehicle has a fuel that works best for it. </p>" +
      "<p> If you choose the fuel that works best for the vehicle, it will be more likely to start. </p>",
    audio_stim: vehicles_audio[5]
  },
  {
    stimulus: "<p> However, even if you choose the best fuel for the vehicle, it may still not move. </p>" +
      "<p> Similarly, even if you choose the <i>wrong</i> fuel, the vehicle may still start and let you travel.",
    audio_stim: vehicles_audio[6]
  },
  {
    stimulus: "<p> Try to choose the best fuel for each vehicle, because " +
      "you will <b> WIN </b> 1 point each time you get to travel and <b>LOSE</b> 1 point each time a vehicle does not start. </p>" +
      "<p> Your bonus payment will depend on your total number of points.",
    audio_stim: vehicles_audio[7]
  },
  {
    stimulus: "<p> The position of each type of fuel will change throughout the round. </p>" +
      "<p> The fuel's position <i> does not </i> influence how likely it is to make each vehicle start. </p>",
    audio_stim: vehicles_audio[8]
  },
  {
    stimulus: "<p> You will have 4 seconds to make each choice. Try to respond before time runs out! </p>" +
    "<p> You will lose 1 point each time you do not make a response. </p>",
    audio_stim: time_warning
  }];