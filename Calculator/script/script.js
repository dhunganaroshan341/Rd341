
   value1 =0; value2=0;
    
          const button1 = document.getElementById("button1");
          const button2 = document.getElementById("button2");
          const button3 = document.getElementById("button3");
          const button4 = document.getElementById("button4");
          const button5 = document.getElementById("button5");
          const button6 = document.getElementById("button6");
          const button7 = document.getElementById("button7");
          const button8 = document.getElementById("button8");
          const button9 = document.getElementById("button9");
          const button0 = document.getElementById("button0");
      const add = document.getElementById("add");
            const subtract = document.getElementById("subtract");
            const divide = document.getElementById("divide");
            const multiply = document.getElementById("button1");
    const equals = document.getElementById("equals");
    var display = document.getElementById("display");
    const clear = document.getElementById("clear");
     
    function numberfn(x){
  value1 = x;
     display.innerHTML  = value1;
  
     
               
       }
      
       function operationfn(x){
        operator = x;
        display.innerHTML = value1;
       }
    
    
    
    
    display.addEventListener("mouseover",function(){
      display.style.background = "rgba(100,100,100,0.9)";
    });
    display.addEventListener("mouseleave",function(){
      display.style.background= "rgb(48, 17, 48)";
    });
    
    
    //     clear.addEventListener("click",function() {
              //     display.innerHTML = "0000";
              //     answer =0;
              //     });

              //     //onclick funciton use for numbers
              //     function numberfn(x){
              //       if(display.innerHTML==0000){
              //       display.innerHTML = null;}
              //    while(x.){
              //     appendNumber = x;
              //    }
              //             display.innerHTML = display.innerHTML+" "+x;
              //  if(add.click){
              //   answer = x+appendNumber;
              //  }

                    
                    
                  

              //     }

              //     add.addEventListener("click",function(){
              //       answer = answer+appendNumber;
              //     display.innerHTML =display.innerHTML+""+add.innerHTML;


              //     }

              //     );
              //     equals.addEventListener("click",function(){
              //     display.innerHTML = answer;
              //     });
              //     function operationfn(){
                    
              //     }

    // button1.addEventListener("click",function(){
            
        //     answer=1;
        //     if(answer ==1){
        //     display.innerHTML = display.innerHTML+" "+answer;}
        
        // });

        // add.addEventListener("click",function(){
        //     answer = answer+anotherValue;

        //     display.innerHTML =display.innrHTML+" ="+answer+"+";
        // });
        // button2.addEventListener("click",function(){
            
        //     answer=2;
        //     if(answer ==2){
        //     display.innerHTML = display.innerHTML+" "+answer;}
        
        // });
        // button1.addEventListener("click",function(){
            
        //     answer=3;
        //     if(answer ==3){
        //     display.innerHTML = display.innerHTML+" "+answer;}
        
        // });
        // button1.addEventListener("click",function(){
            
        //     answer=4;
        //     if(answer ==4){
        //     display.innerHTML = display.innerHTML+" "+answer;}
        
        // });
        // button1.addEventListener("click",function(){
            
        //     answer=5;
        //     if(answer ==5){
        //     display.innerHTML = display.innerHTML+" "+answer;}
        
        // });
        // button1.addEventListener("click",function(){
            
        //     answer=6;
        //     if(answer ==6){
        //     display.innerHTML = display.innerHTML+" "+answer;}
        
        // });
        // button1.addEventListener("click",function(){
            
        //     answer=7;
        //     if(answer ==7){
        //     display.innerHTML = display.innerHTML+" "+answer;}
        
        // });
        // button1.addEventListener("click",function(){
            
        //     answer=8;
        //     if(answer ==8){
        //     display.innerHTML = display.innerHTML+" "+answer;}
        
        // });
        // button1.addEventListener("click",function(){
            
        //     answer=9;
        //     if(answer ==9){
        //     display.innerHTML = display.innerHTML+" "+answer;}
        
        // });
        // button1.addEventListener("click",function(){
            
        //     answer=0;
        //     if(answer ==0){
        //     display.innerHTML = display.innerHTML+" "+answer;}
        
        // });