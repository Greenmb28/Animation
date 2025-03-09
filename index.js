const butterflyData = 
{
    butterflyImg: ["flyingne000.png","flyingne001.png","flyingne002.png","flyingne003.png",
        "flyingne004.png","flyingne005.png","flyingne006.png","flyingne007.png"
        ], 
        
        butterflyImg3:["flyingse000.png","flyingse001.png","flyingse002.png","flyingse003.png",
        "flyingse004.png","flyingse005.png","flyingse006.png",
        "flyingse007.png","flyingse008.png"],
       

    poseNum : 0,
    
    poseNum3 : 0,
    elem:document.querySelector("#blauer"),
   
    elem:document.querySelector("#roter"),
    screenWidth: document.querySelector("#field").clientWidth,
    screenHeight: document.querySelector("#field").scrollHeight,
    
    x:0,
    y:document.querySelector("#field").scrollHeight - 100,
   
    y3:0,
    x3:document.querySelector("#field").scrollHeight - 100,
    timerId: null,
    
    timerId3: null,

    
  
}
function move()
{
    butterflyData.timerId = setInterval(frame,51);
    
    butterflyData.timerId3 = setInterval(frame_3,50);
    
}



function frame()
{
    if(butterflyData.x>butterflyData.screenWidth-150)
    {
       butterflyData.x= 5;
       butterflyData.y += -5;

    }
    else
    {
        butterflyData.x += 5;
        butterflyData.y += -5;
        butterflyData.elem.style.top = butterflyData.y + "px";

        butterflyData.elem.style.left = butterflyData.x + "px";

        butterflyData.elem.src =

            "butterAlt\\" + butterflyData.butterflyImg[butterflyData.poseNum];
           
           


        console.log(butterflyData.elem.src);

        butterflyData.poseNum = (butterflyData.poseNum + 1) % 8;
        
    } 
}

function frame_3()
{
    if(butterflyData.y3>butterflyData.screenWidth-150)
        {
            butterflyData.x3 += 5;
            butterflyData.y3 += 5;
            
    
        }
        else
        {
            butterflyData.x3 += 5;
            butterflyData.y3 += 5;
           
            butterflyData.elem.style.top = butterflyData.y3 + "px";
    
            butterflyData.elem.style.right = butterflyData.x3 + "px";
    
            butterflyData.elem.src =
    
                "butterAlt\\" + butterflyData.butterflyImg3[butterflyData.poseNum3];
               
               
    
    
            console.log(butterflyData.elem.src);
    
            butterflyData.poseNum3 = (butterflyData.poseNum3 + 1) % 8;
            
        
    } 
}
function stopMoving()
{
    clearInterval(butterflyData.timerId);
    
    clearInterval(butterflyData.timerId3);


   
}
//const characters = [butterflyData];