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
    corgi2_s = 0;
    corgi3_s = 0;
    corgi4_s = 0
    ibizan1_s = 0;
    ibizan2_s = 0;
    ibizan3_s = 0;
    ibizan4_s = 0;
    pug1_s = 0;
    pug2_s = 0;
    pug3_s = 0;
    pug4_s = 0;
    shep1_s = 0;
    shep2_s = 0;
    shep3_s = 0;
    shep4_s = 0;
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
        if (corgi1_s >= 10){
            dogdate1Page();
        }
        if (corgi1_s >= 15){
            dogdate1Chat();
        }
    }
    if (corgi2_s >= 1) {
        corgi2Profile();
        if (corgi2_s == 0) {
            chooseProfile();
        }
        if (corgi2_s >= 5) {
            corgi2Chosen();
        }
    }
    if (corgi3_s >= 1) {
        corgi3Profile();
        if (corgi3_s == 0) {
            chooseProfile();
        }
        if (corgi3_s >= 5) {
            corgi3Chosen();
        }
    }
    if (corgi4_s >= 1) {
        corgi4Profile();
        if (corgi4_s == 0) {
            chooseProfile();
        }
        if (corgi4_s >= 5) {
            corgi4Chosen();
        }
    }
    if (ibizan1_s >= 1) {
        ibizan1Profile();
        if (ibizan1_s == 0) {
            chooseProfile();
        }
        if (ibizan1_s >= 5) {
            ibizan1Chosen()
        }
    }
    if (ibizan2_s >= 1) {
        ibizan2Profile();
        if (ibizan2_s == 0) {
            chooseProfile();
        }
        if (ibizan2_s >= 5) {
            ibizan2Chosen();
        }
    }
    if (ibizan3_s >= 1) {
        ibizan3Profile();
        if (ibizan3_s == 0) {
            chooseProfile();
        }
        if (ibizan3_s >= 5) {
            ibizan3Chosen();
        }
    }
    if (ibizan4_s >= 1) {
        ibizan4Profile();
        if (ibizan4_s == 0) {
            chooseProfile();
        }
        if (ibizan4_s >= 5) {
            ibizan4Chosen();
        }
    }
    if (pug1_s >= 1) {
        pug1Profile();
        if (pug1_s == 0) {
            chooseProfile();
        }
        if (pug1_s >= 5) {
            pug1Chosen();
        }
    }
    if (pug2_s >= 1) {
        pug2Profile();
        if (pug2_s == 0) {
            chooseProfile();
        }
        if (pug2_s >= 5) {
            pug2Chosen();
        }
    }
    if (pug3_s >= 1) {
        pug3Profile();
        if (pug3_s == 0) {
            chooseProfile();
        }
        if (pug3_s >= 5) {
            pug3Chosen();
        }
    }
    if (pug4_s >= 1) {
        pug4Profile();
        if (pug4_s == 0) {
            chooseProfile();
        }
        if (pug4_s >= 5) {
            pug4Chosen();
        }
    }
    //    if (shep1_s >= 1) {
    //        shep1Profile();
    //        if (shep1_s == 0) {
    //            chooseProfile();
    //        }
    //        if (shep1_s >= 5) {
    //            shep1Chosen();
    //        }
    //    }
    //   if (shep2_s >= 1) {
    //       shep2Profile();
    //       if (shep2_s == 0) {
    //           chooseProfile();
    //       }
    //       if (shep2_s >= 5) {
    //           shep2Chosen();
    //       }
    //   }
    //   if (shep3_s >= 1) {
    //       shep3Profile();
    //       if (shep3_s == 0) {
    //           chooseProfile();
    //       }
    //       if (shep3_s >= 5) {
    //           shep3Chosen();
    //       }
    //   }
    //   if (shep4_s >= 1) {
    //       shep4Profile();
    //       if (shep4_s == 0) {
    // //          chooseProfile();
    //      }
    //      if (shep4_s >= 5) {
    //           shep4Chosen();
    //      }
    //}
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
    animation(corgi2, dogx + 100, dogy);
    if (mouseIsPressed && mouseX >= dogx + 50 && mouseX <= dogx + 130 && mouseY >= dogy - 50 && mouseY <= dogy + 20) {
        corgi2_s++;
    }
    animation(corgi3, dogx + 200, dogy);
    if (mouseIsPressed && mouseX >= dogx + 150 && mouseX <= dogx + 230 && mouseY >= dogy - 50 && mouseY <= dogy + 20) {
        corgi3_s++;
    }
    animation(corgi4, dogx + 300, dogy);
    if (mouseIsPressed && mouseX >= dogx + 250 && mouseX <= dogx + 330 && mouseY >= dogy - 50 && mouseY <= dogy + 20) {
        corgi4_s++;
    }
    //ibizan\\
    animation(iEar2B, dogx, dogy + 100);
    if (mouseIsPressed && mouseX >= dogx - 50 && mouseX <= dogx + 30 && mouseY >= dogy + 50 && mouseY <= dogy + 160) {
        ibizan1_s++;
    }
    animation(iEar3G, dogx + 100, dogy + 100);
    if (mouseIsPressed && mouseX >= dogx + 50 && mouseX <= dogx + 130 && mouseY >= dogy + 50 && mouseY <= dogy + 160) {
        ibizan2_s++;
    }
    animation(iEar4M, dogx + 200, dogy + 100);
    if (mouseIsPressed && mouseX >= dogx + 150 && mouseX <= dogx + 230 && mouseY >= dogy + 50 && mouseY <= dogy + 160) {
        ibizan3_s++;
    }
    animation(iEar1W, dogx + 300, dogy + 100);
    if (mouseIsPressed && mouseX >= dogx + 250 && mouseX <= dogx + 300 && mouseY >= dogy + 50 && mouseY <= dogy + 160) {
        ibizan4_s++;
    }
    //shepherd\\
    animation(sEye1B, dogx, dogy + 225);
    if (mouseIsPressed && mouseX >= dogx - 50 && mouseX <= dogx + 30 && mouseY >= dogy + 150 && mouseY <= dogy + 300) {
        shep1_s++;
    }
    animation(sEye1BL, dogx + 100, dogy + 225);
    if (mouseIsPressed && mouseX >= dogx + 50 && mouseX <= dogx + 130 && mouseY >= dogy + 150 && mouseY <= dogy + 300) {
        shep2_s++;
    }
    animation(sEye3G, dogx + 200, dogy + 225);
    if (mouseIsPressed && mouseX >= dogx + 150 && mouseX <= dogx + 230 && mouseY >= dogy + 150 && mouseY <= dogy + 300) {
        shep3_s++;
    }
    animation(sEye2W, dogx + 300, dogy + 225);
    if (mouseIsPressed && mouseX >= dogx + 250 && mouseX <= dogx + 330 && mouseY >= dogy + 150 && mouseY <= dogy + 300) {
        shep4_s++;
    }
    //pug\\
    image(pug1, dogx - 60, dogy + 225, 200, 200);
    if (mouseIsPressed && mouseX >= dogx - 50 && mouseX <= dogx + 50 && mouseY >= dogy + 300 && mouseY <= dogy + 440) {
        pug1_s++;
    }
    image(pug2, dogx + 60, dogy + 225, 200, 200);
    if (mouseIsPressed && mouseX >= dogx + 50 && mouseX <= dogx + 180 && mouseY >= dogy + 300 && mouseY <= dogy + 440) {
        pug2_s++;
    }
    image(pug6, dogx + 180, dogy + 225, 200, 200);
    if (mouseIsPressed && mouseX >= dogx + 200 && mouseX <= dogx + 300 && mouseY >= dogy + 300 && mouseY <= dogy + 400) {
        pug3_s++;
    }
    image(pug7, dogx + 300, dogy + 225, 200, 200);
    if (mouseIsPressed && mouseX >= dogx + 300 && mouseX <= dogx + 400 && mouseY >= dogy + 300 && mouseY <= dogy + 400) {
        pug4_s++;
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

function corgi2Profile() {
    image(corgi2_p, 0, 0, 800, 800);
    fill(180);
    rect(650, 776, 125, 100);
    rect(525, 776, 124, 100);
    if (mouseIsPressed && mouseX >= 650 && mouseX <= 775 && mouseY >= 776) {
        corgi2_s--;
    }
    if (mouseIsPressed && mouseX >= 525 && mouseX <= 649 && mouseY >= 776) {
        corgi2_s += 5;
    }
    fill(255, 0, 220);
    textFont(Font, 50);
    textAlign(CENTER);
    text('choose', 585, 800);
    text('return', 715, 800);
}

function corgi3Profile() {
    image(corgi3_p, 0, 0, 800, 800);
    fill(180);
    rect(650, 776, 125, 100);
    rect(525, 776, 124, 100);
    if (mouseIsPressed && mouseX >= 650 && mouseX <= 775 && mouseY >= 776) {
        corgi3_s--;
    }
    if (mouseIsPressed && mouseX >= 525 && mouseX <= 649 && mouseY >= 776) {
        corgi3_s += 5;
    }
    fill(255, 0, 220);
    textFont(Font, 50);
    textAlign(CENTER);
    text('choose', 585, 800);
    text('return', 715, 800);
}

function corgi4Profile() {
    image(corgi4_p, 0, 0, 800, 800);
    fill(180);
    rect(650, 776, 125, 100);
    rect(525, 776, 124, 100);
    if (mouseIsPressed && mouseX >= 650 && mouseX <= 775 && mouseY >= 776) {
        corgi4_s--;
    }
    if (mouseIsPressed && mouseX >= 525 && mouseX <= 649 && mouseY >= 776) {
        corgi4_s += 5;
    }
    fill(255, 0, 220);
    textFont(Font, 50);
    textAlign(CENTER);
    text('choose', 585, 800);
    text('return', 715, 800);
}

function ibizan1Profile() {
    image(ibizan1_p, 0, 0, 800, 800);
    fill(180);
    rect(650, 776, 125, 100);
    rect(525, 776, 124, 100);
    if (mouseIsPressed && mouseX >= 650 && mouseX <= 775 && mouseY >= 776) {
        ibizan1_s--;
    }
    if (mouseIsPressed && mouseX >= 525 && mouseX <= 649 && mouseY >= 776) {
        ibizan1_s += 5;
    }
    fill(255, 0, 220);
    textFont(Font, 50);
    textAlign(CENTER);
    text('choose', 585, 800);
    text('return', 715, 800);
}

function ibizan2Profile() {
    image(ibizan2_p, 0, 0, 800, 800);
    fill(180);
    rect(650, 776, 125, 100);
    rect(525, 776, 124, 100);
    if (mouseIsPressed && mouseX >= 650 && mouseX <= 775 && mouseY >= 776) {
        ibizan2_s--;
    }
    if (mouseIsPressed && mouseX >= 525 && mouseX <= 649 && mouseY >= 776) {
        ibizan2_s += 5;
    }
    fill(255, 0, 220);
    textFont(Font, 50);
    textAlign(CENTER);
    text('choose', 585, 800);
    text('return', 715, 800);
}

function ibizan3Profile() {
    image(ibizan3_p, 0, 0, 800, 800);
    fill(180);
    rect(650, 776, 125, 100);
    rect(525, 776, 124, 100);
    if (mouseIsPressed && mouseX >= 650 && mouseX <= 775 && mouseY >= 776) {
        ibizan3_s--;
    }
    if (mouseIsPressed && mouseX >= 525 && mouseX <= 649 && mouseY >= 776) {
        ibizan3_s += 5;
    }
    fill(255, 0, 220);
    textFont(Font, 50);
    textAlign(CENTER);
    text('choose', 585, 800);
    text('return', 715, 800);
}

function ibizan4Profile() {
    image(ibizan4_p, 0, 0, 800, 800);
    fill(180);
    rect(650, 776, 125, 100);
    rect(525, 776, 124, 100);
    if (mouseIsPressed && mouseX >= 650 && mouseX <= 775 && mouseY >= 776) {
        ibizan4_s--;
    }
    if (mouseIsPressed && mouseX >= 525 && mouseX <= 649 && mouseY >= 776) {
        ibizan4_s += 5;
    }
    fill(255, 0, 220);
    textFont(Font, 50);
    textAlign(CENTER);
    text('choose', 585, 800);
    text('return', 715, 800);
}

function pug1Profile() {
    image(pug1_p, 0, 0, 800, 800);
    fill(180);
    rect(650, 776, 125, 100);
    rect(525, 776, 124, 100);
    if (mouseIsPressed && mouseX >= 650 && mouseX <= 775 && mouseY >= 776) {
        pug1_s--;
    }
    if (mouseIsPressed && mouseX >= 525 && mouseX <= 649 && mouseY >= 776) {
        pug1_s += 5;
    }
    fill(255, 0, 220);
    textFont(Font, 50);
    textAlign(CENTER);
    text('choose', 585, 800);
    text('return', 715, 800);
}

function pug2Profile() {
    image(pug2_p, 0, 0, 800, 800);
    fill(180);
    rect(650, 776, 125, 100);
    rect(525, 776, 124, 100);
    if (mouseIsPressed && mouseX >= 650 && mouseX <= 775 && mouseY >= 776) {
        pug2_s--;
    }
    if (mouseIsPressed && mouseX >= 525 && mouseX <= 649 && mouseY >= 776) {
        pug2_s += 5;
    }
    fill(255, 0, 220);
    textFont(Font, 50);
    textAlign(CENTER);
    text('choose', 585, 800);
    text('return', 715, 800);
}

function pug3Profile() {
    image(pug3_p, 0, 0, 800, 800);
    fill(180);
    rect(650, 776, 125, 100);
    rect(525, 776, 124, 100);
    if (mouseIsPressed && mouseX >= 650 && mouseX <= 775 && mouseY >= 776) {
        pug3_s--;
    }
    if (mouseIsPressed && mouseX >= 525 && mouseX <= 649 && mouseY >= 776) {
        pug3_s += 5;
    }
    fill(255, 0, 220);
    textFont(Font, 50);
    textAlign(CENTER);
    text('choose', 585, 800);
    text('return', 715, 800);
}

function pug4Profile() {
    image(pug4_p, 0, 0, 800, 800);
    fill(180);
    rect(650, 776, 125, 100);
    rect(525, 776, 124, 100);
    if (mouseIsPressed && mouseX >= 650 && mouseX <= 775 && mouseY >= 776) {
        pug4_s--;
    }
    if (mouseIsPressed && mouseX >= 525 && mouseX <= 649 && mouseY >= 776) {
        pug4_s += 5;
    }
    fill(255, 0, 220);
    textFont(Font, 50);
    textAlign(CENTER);
    text('choose', 585, 800);
    text('return', 715, 800);
}

function shep1Profile() {
    image(shep1_p, 0, 0, 800, 800);
    fill(180);
    rect(650, 776, 125, 100);
    rect(525, 776, 124, 100);
    if (mouseIsPressed && mouseX >= 650 && mouseX <= 775 && mouseY >= 776) {
        shep1_s--;
    }
    if (mouseIsPressed && mouseX >= 525 && mouseX <= 649 && mouseY >= 776) {
        shep1_s += 5;
    }
    fill(255, 0, 220);
    textFont(Font, 50);
    textAlign(CENTER);
    text('choose', 585, 800);
    text('return', 715, 800);
}

function shep2Profile() {
    image(shep2_p, 0, 0, 800, 800);
    fill(180);
    rect(650, 776, 125, 100);
    rect(525, 776, 124, 100);
    if (mouseIsPressed && mouseX >= 650 && mouseX <= 775 && mouseY >= 776) {
        shep2_s--;
    }
    if (mouseIsPressed && mouseX >= 525 && mouseX <= 649 && mouseY >= 776) {
        shep2_s += 5;
    }
    fill(255, 0, 220);
    textFont(Font, 50);
    textAlign(CENTER);
    text('choose', 585, 800);
    text('return', 715, 800);
}

function shep3Profile() {
    image(shep3_p, 0, 0, 800, 800);
    fill(180);
    rect(650, 776, 125, 100);
    rect(525, 776, 124, 100);
    if (mouseIsPressed && mouseX >= 650 && mouseX <= 775 && mouseY >= 776) {
        shep3_s--;
    }
    if (mouseIsPressed && mouseX >= 525 && mouseX <= 649 && mouseY >= 776) {
        shep3_s += 5;
    }
    fill(255, 0, 220);
    textFont(Font, 50);
    textAlign(CENTER);
    text('choose', 585, 800);
    text('return', 715, 800);
}

function shep4Profile() {
    image(shep4_p, 0, 0, 800, 800);
    fill(180);
    rect(650, 776, 125, 100);
    rect(525, 776, 124, 100);
    if (mouseIsPressed && mouseX >= 650 && mouseX <= 775 && mouseY >= 776) {
        shep4_s--;
    }
    if (mouseIsPressed && mouseX >= 525 && mouseX <= 649 && mouseY >= 776) {
        shep4_s += 5;
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
    if (mouseIsPressed && mouseX >= 10 && mouseX <= 200 && mouseY >= 250 && mouseY <= 445){
        corgi1_s += 5;
    }
    //poodle
    image(date2s, 250, 250, 200, 200);
    if (mouseIsPressed && mouseX >= 200 && mouseX <= 440 && mouseY >= 250 && mouseY <= 445){
        image(date2, 0, 0, 800, 800);
    }
    //chihuaha
    image(date3s, 500, 250, 200, 200);
    //shiba inu
    image(date4s, 10, 500, 200, 200);
    //maltese
    image(date5s, 250, 500, 200, 200);
    //creepy dude
    image(date6s, 500, 500, 200, 200);
}

function corgi2Chosen() {
    background(180);
    fill(255, 0, 220);
    textFont(Font, 50);
    textAlign(CENTER);
    text('welcome', 400, 400);
}

function corgi3Chosen() {
    background(180);
    fill(255, 0, 220);
    textFont(Font, 50);
    textAlign(CENTER);
    text('welcome', 400, 400);
}

function corgi4Chosen() {
    background(180);
    fill(255, 0, 220);
    textFont(Font, 50);
    textAlign(CENTER);
    text('welcome', 400, 400);
}

function ibizan1Chosen() {
    background(180);
    fill(255, 0, 220);
    textFont(Font, 50);
    textAlign(CENTER);
    text('welcome', 400, 400);
}

function ibizan2Chosen() {
    background(180);
    fill(255, 0, 220);
    textFont(Font, 50);
    textAlign(CENTER);
    text('welcome', 400, 400);
}

function ibizan3Chosen() {
    background(180);
    fill(255, 0, 220);
    textFont(Font, 50);
    textAlign(CENTER);
    text('welcome', 400, 400);
}

function ibizan4Chosen() {
    background(180);
    fill(255, 0, 220);
    textFont(Font, 50);
    textAlign(CENTER);
    text('welcome', 400, 400);
}

function pug1Chosen() {
    background(180);
    fill(255, 0, 220);
    textFont(Font, 50);
    textAlign(CENTER);
    text('welcome', 400, 400);
}

function pug2Chosen() {
    background(180);
    fill(255, 0, 220);
    textFont(Font, 50);
    textAlign(CENTER);
    text('welcome', 400, 400);
}

function pug3Chosen() {
    background(180);
    fill(255, 0, 220);
    textFont(Font, 50);
    textAlign(CENTER);
    text('welcome', 400, 400);
}

function pug4Chosen() {
    background(180);
    fill(255, 0, 220);
    textFont(Font, 50);
    textAlign(CENTER);
    text('welcome', 400, 400);
}

function pug5Chosen() {
    background(180);
    fill(255, 0, 220);
    textFont(Font, 50);
    textAlign(CENTER);
    text('welcome', 400, 400);
}

function shep1Chosen() {
    background(180);
    fill(255, 0, 220);
    textFont(Font, 50);
    textAlign(CENTER);
    text('welcome', 400, 400);
}

function shep2Chosen() {
    background(180);
    fill(255, 0, 220);
    textFont(Font, 50);
    textAlign(CENTER);
    text('welcome', 400, 400);
}

function shep3Chosen() {
    background(180);
    fill(255, 0, 220);
    textFont(Font, 50);
    textAlign(CENTER);
    text('welcome', 400, 400);
}

function shep4Chosen() {
    background(180);
    fill(255, 0, 220);
    textFont(Font, 50);
    textAlign(CENTER);
    text('welcome', 400, 400);
}
//dogdate1's profile page
function dogdate1Page(){
    image(date1, 0, 0, 800, 800);
    //text
    textSize(35);
    text('you have a message from Milo!', 550, 795);
    //exit box
    fill(180);
    rect(780, 0, 20, 19);
    line(780, 0, 800, 19);
    line(800, 0, 780, 19);
    if (mouseIsPressed && mouseX >= 780 && mouseX <= 800 && mouseY >= 0 && mouseY <= 19){
        corgi1_s -= 5;
    }
    //mail icon
    fill(250);
    rect(750, 780, 50, 20);
    line(750, 780, 775, 800);
    line(800, 780, 775, 800);
    if (mouseIsPressed && mouseX >= 750 && mouseX <= 800 && mouseY >= 780 && mouseY <= 800){
        corgi1_s += 5;
    }
}
//if you click on chat for dogdate1
function dogdate1Chat(){
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
    if (mouseIsPressed && mouseX >= 750 && mouseX <= 800 && mouseY >= 0 && mouseY <= 50){
        corgi1_s -= 5;
    }
}
