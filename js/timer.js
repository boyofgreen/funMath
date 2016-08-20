

var timer, 
timeLeft = 30000, 
numCorrect = 0, 
numIncorrect = 0,
timerBtn = document.querySelector('#startTimer'),
timerContainer = document.getElementById('timerDisplay'),
showRight = document.getElementById('correct'),
showWrong = document.getElementById('incorrect'),
timerMode = false;
var timeInput = document.getElementById('enterTimeBox');


timerBtn.addEventListener('click', function(){
    if(timeInput.value === '' || isNaN(timeInput.value) == true ) {
        
                         $('#timerCard').addClass('swing');
                  
                    playSound(wrongSound);

                    setTimeout(function () {
                        $('#timerCard').removeClass('swing');
                     
                    }, 1000)
        
    } else{
        numCorrect = 0;
        numIncorrect = 0;
         $.fn.fullpage.moveTo(3);
         
        setTimeout(function(){
      $('.timerBar').removeClass('fadeOutUp');
      $('.timerBar').addClass('fadeInDown');
      document.querySelector('.timerBar').style.display = 'flex';
         ab.value = '';
         ab.focus();
      startTimer()  ;
        },1000);
      
    }
    
    
    
} )


var startTimer = function(){
 timerMode = true;
 timeLeft = (timeInput.value*1000) || 30000;
 timer = setInterval(countDown, 1000);
};


var countDown = function(){
    timeLeft -= 1000;
    if(timeLeft === 0){
        clearInterval(timer);
        timerMode = false;
                    $('#youWin').addClass('bounceIn');
                    $('#youWin').removeClass('hide');
                    $('#problemSection').addClass('hide');
                    playSound(winSound);
                    //bonus 10 points for winning the round
                    coinCount+= (numCorrect*3);
                    coinCounter();
                    
             
                   
                    
    }
    playSound(tickSound);
     timerContainer.innerHTML = (timeLeft/1000).toString();
}

document.getElementById('youWin').addEventListener('click', function(){
           $('.timerBar').removeClass('fadeInDown');
            $('.timerBar').addClass('fadeOutUp');
})
var answerRight = function(){
    numCorrect += 1;
    showRight.innerHTML = ""+numCorrect;
}

var answerWrong = function(){
    moveOn(false)
    numIncorrect += 1;
    showWrong.innerHTML = ''+numIncorrect;
    
};


