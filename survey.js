const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answers = {};

rl.question("What's your name? Nicknames are acceptable.. ", (name) => {
  answers.name = name;
  rl.question("What's an activity you like doing? ", (activity) => {
    answers.activity = activity;
    rl.question("What do you listen to while doing that? ", (music) => {
      answers.music = music;
      rl.question("Which meal is your favourite?", (favMeal) => {
        answers.favMeal = favMeal;
        rl.question("Which sport is your absolute favorite? ", (sport) => {
          answers.sport = sport;
          rl.question("What is your superpower? ", (superpower) => {
            answers.superpower = superpower;
            let paragraph = "Hi, my name is " + answers.name + ". My favourite activity is " + answers.activity + ". I like listening to " + answers.music + " while I do that. My favourite meal of the day is " + answers.favMeal + ". I love " + answers.meal + " the most. I like " + answers.sports + "and my superpower is " + answers.superpower + ".";
            console.log(paragraph);
            rl.close();
          });
        });
      });
    });
  });
});




