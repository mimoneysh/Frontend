//159 Website Animations with jQuery--------------------
$("button").on("click",function(){


    //Chaining Animations
    $("h1").slideUp().slideDown().animate({opacity:0.3});

    // $("h1").animate({
    //         margin: "20%"//if u want to use string use ""
    //     //color: red  //no string values only numeric
    //    // opacity:0.5
    // });

    // $("h1").fadeToggle();
    // $("h1").fadeDown();
    // $("h1").fadeUp();



   // $("h1").fadeToggle();//simultaneous fade in and out
    // $("h1").fadeOut();//outro
    // $("h1").fadeIn();//intro
   
        //$("h1").toggle();// to do repetations
        //$("h1").hide();//to hide element
    });


    
//158 Adding and Removing Elements with jQuery----------------

// $("button").remove();
// $("h1").append("<button>new</button>");
// $("h1").prepend("<button>new</button>");
// $("h1").after("<button>new</button>");
// $("h1").before("<button>new</button>");

//157 Adding event listners with jquery------------------------

//method ON
// $("h1").on("mouseover",function(){
//     $("h1").css("color","green");
// });


//challenge
// $(document).keypress(function(event){
//     $("h1").text(event.key);
// });



//to appy to whole page insted of input write body or document
// $(document).keypress(function(event){
//     console.log(event.key);
// });





// using jQuery for below
// $("button").click(function(){
//     $("h1").css("color","green");
// });

//using js
// for(var i=0;i<5;i++){
//     document.querySelectorAll("button")[i].addEventListener("click",function(){
//             document.querySelector("h1").style.color="green";
//     });
// }



// $("h1").click(function(){
//     $("h1").css("color","green");//will green after click

// });

1//156 attribute manipulation--------------------------------------
// in consoloe to find classe $("h1").attr("class");
// $("a").attr("href","https://www.yahoo.com")//setting attributes

// console.log($("img").attr("src"));//getting vbalue of attribute


//155 lect 6 text manipulation

//method 1 use .txt 
//will not consider html code will print directly
//$("h1").text("Bye")
//2nd method
//it will consider run as html code and will change text
//$("button").html("<em>click</em>");//will select all buttons

//Lect 4 ----------

// $("h1").addClass("big-title margin-50")

// 



// $("h1").css("color","green");

// console.log($("h1").css("color"));
// console.log($("h1").css("font-size"));//get value
// console.log($("h1").css("font-size","7rem"));//to set p 


//lect3--------------
//If we put script tags in head
// $(document).ready(function(){
//     $("h1").css("color","red");
// })
    //if we put script tags normal place i.e just above /body tag
//$("h1").css("color","red");