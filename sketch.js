var Font;
//make profile rect
var rectX;
var rectY;
var rectL;
var rectH;
//make profile counter
var makeProfile;
//make profile picture
var makePic;
//choose profile picture
var picX;
var picY;
var picL;
var picH;
//background for start page
var startPage;
//background for profile page
var profilePage;
//*images for corgi*\\
var corgi1, corgi2, corgi3, corgi4;
//*images for ibizan*\\
//brown
var iEar1B, iEar2B, iEar3B, iEar4B;
//grey
var iEar1G, iEar2G, iEar3G, iEar4G;
//musstard
var iEar1M, iEar2M, iEar3M, iEar4M;
//white
var iEar1W, iEar2W, iEar3W, iEar4W;
//*images for shepherd*\\
//brown
var sEye1B, sEye2B, sEye3B, sEye4B;
//black
var sEye1BL, sEye2BL, sEye3BL, sEye4BL;
//gray
var sEye1G, sEye2G, sEye3G, sEye4G;
//white
var sEye1W, sEye2W, sEye3W, sEye4W;
//*pug*\\
var pug1, pug2, pug3, pug4, pug5, pug6, pug7, pug8;
//likes
var rain, sleep, milk, squir, steak, tulip
    //dislikes
var bath, choc, pepper, yell, spider, thunder
    //status input
var input, button;
//dog position
var dogx, dogy;
//profile pages\\
var corgi1_p, corgi2_p, corgi3_p, corgi4_p, ibizan1_p, ibizan2_p, ibizan3_p, ibizan4_p, pug1_p, pug2_p, pug3_p, pug4_p, shep1_p, shep2_p, shep3_p, shep4_p;
//integer for choosing different avatar\\
var corgi1_s, corgi2_s, corgi3_s, corgi4_s, ibizan1_s, ibizan2_s, ibizan3_s, ibizan4_s, pug1_s, pug2_s, pug3_s, pug4_s, shep1_s, shep2_s, shep3_s, shep4_s;
//goes to the next question in chat
var nextQ, nextQc, nextQs;
//points for each dog date
var miloPoints, chouChouPoints, soupPoints, baguettePoints, demitriPoints, maxPoints;
/////////preload/////////
function preload() {
    //font
    Font = loadFont('assets/coders_crux.ttf');
    //welcome page
    startPage = loadAnimation('assets/textures/webPage/startPage.png');
    //profile page
    profilePage = loadAnimation('assets/textures/webPage/profilePage.png');
    //dog avatar sprites
    //*corgi*\\
    corgi1 = loadAnimation('assets/textures/dogSprites/corgi_1.gif');
    corgi2 = loadAnimation('assets/textures/dogSprites/corgi_2.gif');
    corgi3 = loadAnimation('assets/textures/dogSprites/corgi_3.gif');
    corgi4 = loadAnimation('assets/textures/dogSprites/corgi_4.gif');
    //*ibizan*\\
    //brown
    iEar2B = loadAnimation('assets/textures/dogSprites/ibizan_ear2_brown.gif');
    //grey
    iEar3G = loadAnimation('assets/textures/dogSprites/ibizan_ear3_grey.gif');
    //mustard
    iEar4M = loadAnimation('assets/textures/dogSprites/ibizan_ear4_mustard.gif');
    //white
    iEar1W = loadAnimation('assets/textures/dogSprites/ibizan_ear1_white.gif');
    //*shepherd*\\
    //brown
    sEye1B = loadAnimation('assets/textures/dogSprites/shep_eye1B.png');
    //black
    sEye1BL = loadAnimation('assets/textures/dogSprites/shep_eye1BL.png');
    //gray
    sEye3G = loadAnimation('assets/textures/dogSprites/shep_eye3G.png');
    //white
    sEye2W = loadAnimation('assets/textures/dogSprites/shep_eye2W.png');
    //*pug*\\
    pug1 = loadImage('assets/textures/dogSprites/pug1.png');
    pug2 = loadImage('assets/textures/dogSprites/pug2.png');
    pug6 = loadImage('assets/textures/dogSprites/pug6.png');
    pug7 = loadImage('assets/textures/dogSprites/pug7.png');
    //loading the profile pages\\
    corgi1_p = loadImage('assets/textures/avatars/corgi_1.png');
    corgi2_p = loadImage('assets/textures/avatars/corgi_2.png');
    corgi3_p = loadImage('assets/textures/avatars/corgi_3.png');
    corgi4_p = loadImage('assets/textures/avatars/corgi_4.png');
    ibizan1_p = loadImage('assets/textures/avatars/ibizan_1.png');
    ibizan2_p = loadImage('assets/textures/avatars/ibizan_2.png');
    ibizan3_p = loadImage('assets/textures/avatars/ibizan_3.png');
    ibizan4_p = loadImage('assets/textures/avatars/ibizan_4.png');
    pug1_p = loadImage('assets/textures/avatars/pug_1.png');
    pug2_p = loadImage('assets/textures/avatars/pug_2.png');
    pug3_p = loadImage('assets/textures/avatars/pug_3.png');
    pug4_p = loadImage('assets/textures/avatars/pug_4.png');
    shep1_p = loadImage('assets/textures/avatars/shepard_3.png');
    shep2_p = loadImage('assets/textures/avatars/shepard_1.png');
    shep3_p = loadImage('assets/textures/avatars/shepard_4.png');
    shep4_p = loadImage('assets/textures/avatars/shepard_2.png');
    //loading the dogs you can date\\
    //datedog1 profile
    date1 = loadImage('assets/textures/dateProfiles/profile_1.png');
    //datedog1 Sprite
    date1s = loadImage('assets/textures/dateSprites/date_dog_1.gif');
    //poodle profile
    date2 = loadImage('assets/textures/dateProfiles/profile_2.png');
    //poodle sprite
    date2s = loadImage('assets/textures/dateSprites/poodle.gif');
    //chihuahua profile
    date3 = loadImage('assets/textures/dateProfiles/profile_3.png');
    //chihuahua sprite
    date3s = loadImage('assets/textures/dateSprites/chihuaha.gif');
    //shiba inu profile
    date4 = loadImage('assets/textures/dateProfiles/profile_4.png');
    //shiba inu sprite
    date4s = loadImage('assets/textures/dateSprites/shiba_inu_1.gif');
    //maltese profile
    date5 = loadImage('assets/textures/dateProfiles/profile_5.png');
    //maltese sprite
    date5s = loadImage('assets/textures/dateSprites/maltese_1.gif');
    //creepy dude profile
    date6 = loadImage('assets/textures/dateProfiles/profile_6.png');
    //creepy dude sprite
    date6s = loadImage('assets/textures/dateSprites/creepy_dude_1.png');
}

function setup() {
    createCanvas(800, 800);
    background(180);
    //makeprofile box
    rectX = 305;
    rectY = 430;
    rectL = 190;
    rectH = 50;
    //profile picture box
    picX = 40;
    picY = 40;
    picL = 270;
    picH = 295;
    //dog position
    dogx = 250;
    dogy = 250;
    //status input
    //input = createInput();
    //input.position(414, 83);
    //input.size(396, 256);
    //counter that changes to profile choice page
    makeProfile = 0;
    //sets profile image
    profileSet = 0;
    //integer for navigating website\\
    corgi1_s = 0;
    //moves to next question for milo
    nextQ = 0;
    //moves to the next question for chou chou
    nextQc = 0;
    //moves to the next question for soup
    nextQs = 0;
    //points for each dog date
    miloPoints = 0;
    chouChouPoints = 0;
    soupPoints = 0;
    baguettePoints = 0;
    demitriPoints = 0;
    maxPoints = 0;
}

function draw() {
    welcomePage();
    if (makeProfile >= 1) {
        chooseProfile();
    }
    if (corgi1_s >= 1) {
        corgi1Profile();
        if (corgi1_s == 0) {
            chooseProfile();
        }
        if (corgi1_s >= 5) {
            corgi1Chosen();
        }
        //options for dogdate1, milo
        if (corgi1_s >= 10) {
            dogdate1Page();
        }
        if (corgi1_s >= 15) {
            dogdate1Chat();
        }
        //options for dogdate2, chou chou
        if (corgi1_s >= 25) {
            dogdate2Page();
        }
        if (corgi1_s >= 30) {
            dogdate2Chat();
        }
        //options for dogdate2, soup
        if (corgi1_s >= 45){
            dogdate3Page();
        }
        //if (corgi1_s >= 50){}
    }
}

function welcomePage() {
    animation(startPage, 400, 400);
    fill(100);
    rect(rectX, rectY, rectL, rectH);
    fill(255, 0, 220);
    textFont(Font, 60);
    textAlign(CENTER);
    text('WELCOME TO eBARK!', 400, 400);
    textFont(Font, 30);
    text('CHOOSE A PROFILE', 400, 460);
    if (mouseIsPressed && mouseX >= rectX && mouseX <= rectX + rectL && mouseY >= rectY && mouseY <= rectY + rectH) {
        makeProfile += 1;
    }
}

function chooseProfile() {
    //background
    animation(startPage, 400, 400);
    //corgi\\
    animation(corgi1, dogx, dogy);
    if (mouseIsPressed && mouseX >= dogx - 50 && mouseX <= dogx + 30 && mouseY >= dogy - 50 && mouseY <= dogy + 20) {
        corgi1_s++;
    }
}

function corgi1Profile() {
    image(corgi1_p, 0, 0, 800, 800);
    fill(180);
    rect(650, 776, 125, 100);
    rect(525, 776, 124, 100);
    if (mouseIsPressed && mouseX >= 650 && mouseX <= 775 && mouseY >= 776) {
        corgi1_s--;
    }
    if (mouseIsPressed && mouseX >= 525 && mouseX <= 649 && mouseY >= 776) {
        corgi1_s += 5;
    }
    fill(255, 0, 220);
    textFont(Font, 50);
    textAlign(CENTER);
    text('choose', 585, 800);
    text('return', 715, 800);
}
//after having chosen an avatar\\
function corgi1Chosen() {
    background(180);
    //top bar\\
    fill(100);
    rect(0, 0, 799, 50);
    //home button\\
    fill(255, 0, 220);
    textFont(Font, 50);
    textAlign(CENTER);
    text('home', 750, 40);
    line(705, 0, 705, 50);
    //profile button\\
    text('Jean-Pierre Claude III', 495, 40);
    line(285, 0, 285, 50);
    if (mouseIsPressed && mouseX >= 285 && mouseX <= 700 && mouseY >= 0 && mouseY <= 50) {
        corgi1_s -= 4;
    }
    //header\\
    text('Here are your matches!', 400, 100);
    //matches\\
    //datedog1
    image(date1s, 10, 250, 200, 200);
    if (mouseIsPressed && mouseX >= 10 && mouseX <= 200 && mouseY >= 250 && mouseY <= 445) {
        corgi1_s += 5;
    }
    //poodle
    image(date2s, 250, 250, 200, 200);
    if (mouseIsPressed && mouseX >= 200 && mouseX <= 440 && mouseY >= 250 && mouseY <= 445) {
        corgi1_s += 20;
    }
    //chihuaha
    image(date3s, 500, 250, 200, 200);
    if (mouseIsPressed && mouseX >= 600 && mouseX <= 700 && mouseY >= 250 && mouseY <= 445){
        corgi1_s += 40;
        }
    //shiba inu
    image(date4s, 10, 500, 200, 200);
    //maltese
    image(date5s, 250, 500, 200, 200);
    //creepy dude
    image(date6s, 500, 500, 200, 200);
}
//dogdate1's profile page
function dogdate1Page() {
    image(date1, 0, 0, 800, 800);
    //text
    textSize(35);
    text('you have a message from Milo!', 550, 795);
    //exit box
    fill(180);
    rect(780, 0, 20, 19);
    line(780, 0, 800, 19);
    line(800, 0, 780, 19);
    if (mouseIsPressed && mouseX >= 780 && mouseX <= 800 && mouseY >= 0 && mouseY <= 19) {
        corgi1_s -= 5;
    }
    //mail icon
    fill(250);
    rect(750, 780, 50, 20);
    line(750, 780, 775, 800);
    line(800, 780, 775, 800);
    if (mouseIsPressed && mouseX >= 750 && mouseX <= 800 && mouseY >= 780 && mouseY <= 800) {
        corgi1_s += 5;
    }
}
//if you click on chat for dogdate1
function dogdate1Chat() {
    background(250);
    //top bar
    fill(255, 0, 220);
    textFont(Font, 50);
    textAlign(CENTER);
    text('Chat with Milo!', 150, 50);
    line(0, 50, 800, 50);
    //exit box
    line(750, 0, 750, 50);
    line(750, 0, 800, 50);
    line(800, 0, 750, 50);
    if (mouseIsPressed && mouseX >= 750 && mouseX <= 800 && mouseY >= 0 && mouseY <= 50) {
        corgi1_s -= 5;
        nextQ -= nextQ;
        nextQc -= nextQc;
        nextQs -= nextQs;
    }
    //chat points
    textAlign(RIGHT);
    text(miloPoints, 790, 790);
    //opening greeting
    textSize(40);
    fill(25, 249, 0);
    textAlign(LEFT);
    text('Hi! Im Milo!', 10, 100);
    text('Whats your ideal first date?', 10, 130);
    //response options
    fill(0, 66, 249);
    textAlign(RIGHT);
    text('Type a, b, c or d:', 790, 160);
    text('a) a car ride', 790, 190);
    text('b) long walk in the park', 790, 220);
    text('c) butt sniffing', 790, 250);
    text('d) squirrel hunts', 790, 280);
    //when key is pressed
    if (nextQ >= 1) {
        //response question
        fill(25, 249, 0);
        textAlign(LEFT);
        text('Cool! Whats your favorite... food?', 10, 310);
        //response options
        fill(0, 66, 249);
        textAlign(RIGHT);
        text('a) milk', 790, 340);
        text('b) biscuits', 790, 370);
        text('c) steak', 790, 400);
        text('d) peanut butter', 790, 430);
        if (nextQ >= 2) {
            //final response question
            fill(25, 249, 0);
            textAlign(LEFT);
            text('Yumma! Whats your political affiliation?', 10, 460);
            //response options
            fill(0, 66, 249);
            textAlign(RIGHT);
            text('a) Green Grass Party', 790, 490);
            text('b) No-Least Party', 790, 520);
            text('c) Democatic Party', 790, 550);
            text('d) Working Dogs Party', 790, 580);
            if (nextQ >= 3) {
                //goodbye
                fill(25, 249, 0);
                textAlign(LEFT);
                text('Great talking to you, Jean-Pierre III!', 10, 620);
                text('Maybe we should hang out some time? ;p', 10, 650);
            }
        }
    }
}
//chou chou's profile page
function dogdate2Page() {
    image(date2, 0, 0, 800, 800);
    //text
    textSize(35);
    fill(255, 0, 220);
    text('you have a message from Chou Chou!', 550, 795);
    //exit box
    fill(180);
    rect(780, 0, 20, 19);
    line(780, 0, 800, 19);
    line(800, 0, 780, 19);
    if (mouseIsPressed && mouseX >= 780 && mouseX <= 800 && mouseY >= 0 && mouseY <= 19) {
        corgi1_s -= 15;
    }
    //mail icon
    fill(250);
    rect(750, 780, 50, 20);
    line(750, 780, 775, 800);
    line(800, 780, 775, 800);
    if (mouseIsPressed && mouseX >= 750 && mouseX <= 800 && mouseY >= 780 && mouseY <= 800) {
        corgi1_s += 5;
    }
}
//chou chou's chat
function dogdate2Chat() {
    background(250);
    //top bar
    fill(255, 0, 220);
    textFont(Font, 50);
    textAlign(CENTER);
    text('Chat with Chou Chou!', 200, 50);
    line(0, 50, 800, 50);
    //exit box
    line(750, 0, 750, 50);
    line(750, 0, 800, 50);
    line(800, 0, 750, 50);
    if (mouseIsPressed && mouseX >= 750 && mouseX <= 800 && mouseY >= 0 && mouseY <= 50) {
        corgi1_s -= 5;
        nextQ -= nextQ;
        nextQc -= nextQc;
        nextQs -= nextQs;
    }
    //chat points
    textAlign(RIGHT);
    text(chouChouPoints, 790, 790);
    //opening greeting
    textSize(40);
    fill(25, 249, 0);
    textAlign(LEFT);
    text('Hi! Im Chou Chou!', 10, 100);
    text('Whats your favorite activity?', 10, 130);
    //response options
    fill(0, 66, 249);
    textAlign(RIGHT);
    text('Type e, f, g, or h:', 790, 160);
    text('e) baths', 790, 190);
    text('f) playing in the rain', 790, 220);
    text('g) sleeping', 790, 250);
    text('h) getting treats', 790, 280);
    //when key is pressed
    if (nextQc >= 1) {
        //response question
        fill(25, 249, 0);
        textAlign(LEFT);
        text('Oh wow! Whats your current occupation?', 10, 310);
        //response options
        fill(0, 66, 249);
        textAlign(RIGHT);
        text('e) Full-time dog... it can be a lot of work', 790, 340);
        text('f) Squirrel-rights activist... non-profit', 790, 370);
        text('g) Seeing-eye dog', 790, 400);
        text('h) Unemployed', 790, 430);
        if (nextQc >= 2) {
            //final response question
            fill(25, 249, 0);
            textAlign(LEFT);
            text('Jeez! Do you have a favorite movie?', 10, 460);
            //response options
            fill(0, 66, 249);
            textAlign(RIGHT);
            text('e) Reservoir Dogs', 790, 490);
            text('f) Count Barkula', 790, 520);
            text('g) How to Lose a Dog in 10 Days', 790, 550);
            text('h) Purple Noon', 790, 580);
            if (nextQc >= 3) {
                //goodbye
                fill(25, 249, 0);
                textAlign(LEFT);
                text('Great talking to you, Jean-Pierre III!', 10, 620);
                text('We should get together sometime... perhaps.', 10, 650);
            }
        }
    }
}
//soup's profile page
function dogdate3Page(){
    image(date3, 0, 0, 800, 800);
    //text
    textSize(35);
    fill(255, 0, 220);
    text('you have a message from Soup!', 550, 795);
    //exit box
    fill(180);
    rect(780, 0, 20, 19);
    line(780, 0, 800, 19);
    line(800, 0, 780, 19);
    if (mouseIsPressed && mouseX >= 780 && mouseX <= 800 && mouseY >= 0 && mouseY <= 19) {
        corgi1_s -= 30;
    }
    //mail icon
    fill(250);
    rect(750, 780, 50, 20);
    line(750, 780, 775, 800);
    line(800, 780, 775, 800);
    if (mouseIsPressed && mouseX >= 750 && mouseX <= 800 && mouseY >= 780 && mouseY <= 800) {
        corgi1_s += 5;
    }
}
//soup's chat
function dogdate3Chat(){
background(250);
    //top bar
    fill(255, 0, 220);
    textFont(Font, 50);
    textAlign(CENTER);
    text('Chat with Soup!', 200, 50);
    line(0, 50, 800, 50);
    //exit box
    line(750, 0, 750, 50);
    line(750, 0, 800, 50);
    line(800, 0, 750, 50);
    if (mouseIsPressed && mouseX >= 750 && mouseX <= 800 && mouseY >= 0 && mouseY <= 50) {
        corgi1_s -= 5;
        nextQ -= nextQ;
        nextQc -= nextQc;
        nextQs -= nextQs;
    }
    //chat points
    textAlign(RIGHT);
    text(soupPoints, 790, 790);
    //opening greeting
    textSize(40);
    fill(25, 249, 0);
    textAlign(LEFT);
    text('Hi! Im Soup!', 10, 100);
    text('Whats your favorite activity?', 10, 130);
    //response options
    fill(0, 66, 249);
    textAlign(RIGHT);
    text('Type i, j, k, or l:', 790, 160);
    text('i) baths', 790, 190);
    text('j) playing in garden', 790, 220);
    text('k) napping', 790, 250);
    text('l) drinking milk', 790, 280);
    //when key is pressed
    if (nextQc >= 1) {
        //response question
        fill(25, 249, 0);
        textAlign(LEFT);
        text('Oh wow! What is your favourist state in the US?', 10, 310);
        //response options
        fill(0, 66, 249);
        textAlign(RIGHT);
        text('i) California', 790, 340);
        text('j) My home', 790, 370);
        text('k) Swimming in the sea, 790, 400);
        text('l) None of your business', 790, 430);
        if (nextQc >= 2) {
            //final response question
            fill(25, 249, 0);
            textAlign(LEFT);
            text('Hey, do you have your favourite TV show?', 10, 460);
            //response options
            fill(0, 66, 249);
            textAlign(RIGHT);
            text('i) Arrow?', 790, 490);
            text('j) I love all soap show', 790, 520);
            text('k) I never watch TV show baby', 790, 550);
            text('l) Sorry, i forgot its name', 790, 580);
            if (nextQc >= 3) {
                //goodbye
                fill(25, 249, 0);
                textAlign(LEFT);
                text('Great talking to you, Jean-Pierre III!', 10, 620);
                text('We should hang out next time！.... really enjoy being with you!', 10, 650);
            }
        }
    }
}
// points system for each dog\\
function keyPressed() {
    //for milo
    if (key == 'A' && nextQ == 1) {
        miloPoints++;
        nextQ++;
    }
    else if (key == 'B' && nextQm == 2) {
        miloPoints++;
        nextQ++;
    }
    else if (key == 'C') {
        nextQ++;
    }
    else if (key == 'D' && nextQ == 0) {
        miloPoints++;
        nextQ++;
    }
    //for chou chou
    else if (key == 'E' && nextQc == 1) {
        chouChouPoints++;
        nextQc++;
    }
    else if (key == 'F' && nextQc == 0) {
        chouChouPoints -= 1;
        nextQc++;
    }
    else if (key == 'G') {
        nextQc++;
    }
    else if (key == 'H' && nextQc == 2) {
        chouChouPoints++;
        nextQc++;
    }

    else {
        nextQ++;
        nextQc++;
    }
     //for Soup
    else if (Key == 'I' && nextQc ==1){
        soupPoints++;
        nextQc++;
    }
    else if (key == 'J' && next Qc == 2){
        soupPoints++;
        nextQc++;
    }
    else if (key == 'K' && nextQc == 0){
        soupPoints -= 1;
        nextQ++;
    }
    else if (key == 'L' ){
        nextQc++;
    }
}

