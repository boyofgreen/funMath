
var selButtons = $('.quickSelect button');
var topNumUpdate = document.getElementById('topNumber');
var bottomNumUpdate = document.getElementById('bottomNumber')
var keyColor = 'red'

var setNumValues = function(){
    topNumUpdate.value = "";
    selButtons.each(function(){
        if($(this).hasClass(keyColor)){
           // console.log(this)
            bottomNumUpdate.value = "1-12";
            var addComma = '';
            if(!topNumUpdate.value == '') addComma = ", "
            topNumUpdate.value += addComma+this.dataset.value;
            

        }
         
        
        
    })
  
       if(topNumUpdate.value == ''){
            
               bottomNumUpdate.value = ''; 
            } 
}





var setChecked = function(e){
    if($(this).hasClass('grey')){
       $(this).addClass(keyColor);
       $(this).removeClass('grey');
        
        
    }else{
              $(this).addClass('grey');
       $(this).removeClass(keyColor); 
        
    }
    setNumValues();
}



// selButtons.each(function(btn) {
//     console.log(this)
//     this.addEventListiner('click', setChecked)
// });

selButtons.on('click', setChecked)