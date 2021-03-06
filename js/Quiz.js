class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    question.hide();
    background("Yellow");
    fill();
    textSize(30);
    text("Result of th quiz",340,50);
    text("Result of the quiz",320,65);
    Contestant.getPlayerInfo();
    if(allContest !== undefined){
      debugger;
      var display_Answers = 230;
      fill("Blue");
      textSize(20);
      text("*NOTE: Contestant who answered are highlighted in green color!",130,230);

      for(var plr in allContestants){
        debugger;
        var correctAns = "2";
        if(correctAns ==- allContestants[plr].answer)
         fill("Green")
         else
         fill("Red");

         display_Answers+=30;
         textSize(20);
         text(allContestants[plr].name + " : " + allContestants.answer, 250, display_Answers);
      }
    }
  }

}
