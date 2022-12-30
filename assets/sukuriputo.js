//PLACE
// EASY
var emoji_bank = [
    'ヾ(≧▽≦*)o',
    'o(*^＠^*)o',
    'ㄟ(≧◇≦)ㄏ',
    'o((⊙﹏⊙))o.',
    '...(*￣０￣)ノ',
    '━┳━　━┳━',
    '(。・・)ノ',
];

var rnum = (Math.ceil(Math.random() * emoji_bank.length)-1);
var emoji = emoji_bank[rnum];

var tips_bank = [
    'There is no shame in quitting',
    'Do not give up, keep typing',
    'Think outside the box',
    'The next word might be easy',
    'The next one will be hard',
    'Idk, Just give up',
    'You think you can solve the next one?',
    'CHAMBA',
    'Tips: ctrl + w',
    'You cant, you just cant'
]

var randomizer = (Math.ceil(Math.random() * tips_bank.length)-1);
var tips = tips_bank[randomizer];

var try_bank = [
    'Try Again',
    'I know you can do it',
    'One more time',
    'Bruh -_-',
    'Keep calm and think',
    'Are you thinking?',
    'Seriously?',
    '本当にバカですね～藁藁',
    'Check the spelling',
    'just go back',
    'It gets harder, just quit'
]

var rnum2 = (Math.ceil(Math.random() * try_bank.length)-1);
var again = try_bank[rnum2];

function disp() {
    document.getElementById("again").style.display="none";
}


var place_bank = [
    'C _ B _', 
    'M _ _ _ A', 
    'B _ _ _ L',
    'Q _ _ Z _ N',
    '_ E Y _ _',
    '_ A _ A O',
    'P _ _ A W _ _',
    'T _ _ L A _'
];

var place = [
    'CEBU', 
    'MANILA', 
    'BOHOL',
    'QUEZON',
    'LEYTE',
    'DAVAO',
    'PALAWAN',
    'TARLAC',
];


var random = (Math.ceil(Math.random() * place_bank.length)-1);

var the_word = place_bank[random];
var correct_word = place[random];


    function check() {
        var guess = document.getElementById('ans').value;
        guess = guess.toUpperCase();
        if (guess === correct_word) {
            console.log('Correct');
            console.log(guess);
            document.getElementById('again').style.display="none";
            document.getElementById('hidden').style.display="flex";
            document.getElementById('gb').style.display="none";
        }
        else {
            console.log('Wrong');
            console.log(guess);
            document.getElementById('again').style.display="block";
        }
    }  

function reload() {
    location.reload();
}




    // MEDIUM 

    var place_mbank = [
        'A _ _ _ I _ A',
        'E _ _ L _ _ D',
        '_ _ P _ N',
        'K _ _ _ A',
        'I _ A _ Y',
        'F _ A _ C _',
        'R _ _ E',
        'C _ _ _ A',
        'R _ S S _ _'
    ]

    var place_mcbank = [
        'AMERICA',
        'ENGLAND',
        'JAPAN',
        'KOREA',
        'ITALY',
        'FRANCE',
        'ROME',
        'CHINA',
        'RUSSIA'
    ]

    var rand = (Math.ceil(Math.random() * place_mbank.length)-1);
    var the_mword = place_mbank[rand];
    var correct_mword = place_mcbank[rand];

    function mcheck() {
        var guess = document.getElementById('ans').value;
        guess = guess.toUpperCase();
        if (guess === correct_mword) {
            console.log('Correct');
            console.log(guess);
            document.getElementById('again').style.display="none";
            document.getElementById('hidden').style.display="flex";
            document.getElementById('gb').style.display="none";
        }
        else {
            console.log('Wrong');
            console.log(guess);
            document.getElementById('again').style.display="block";
        }
    }


    // HARD 

    var place_hbank = [
        '_ H I L I _ _ _ N _ S',
        'I _ _ O N _ _ _ A',
        'M _ _ N _ A _',
        '_ F _ _ A N _ _ _ A N',
        '_ W _ _ E _',
        'C _ _ I F _ R _ _ A',
        'N _ W   _ E _ S _ Y',
        'M _ _ _ G A S _ _ R',
        '_ I E _ _ _ M',
        '_ I N G _ _ _ R _',
        '_ A Z _ _ H _ _ A N'
    ]

    var place_hcbank = [
        'PHILIPPINES',
        'INDONESIA',
        'MYANMAR',
        'AFGHANISTAN',
        'SWEDEN',
        'CALIFORNIA',
        'NEW JERSEY',
        'MADAGASCAR',
        'VIETNAM',
        'SINGAPORE',
        'KAZAKHSTAN'
    ]

    var rand = (Math.ceil(Math.random() * place_mbank.length)-1);
    var the_hword = place_hbank[rand];
    var correct_hword = place_hcbank[rand];


    function hcheck() {
        var guess = document.getElementById('ans').value;
        guess = guess.toUpperCase();
        if (guess === correct_hword) {
            console.log('Correct');
            console.log(guess);
            document.getElementById('again').style.display="none";
            document.getElementById('hidden').style.display="flex";
            document.getElementById('gb').style.display="none";
        }
        else {
            console.log('Wrong');
            console.log(guess);
            document.getElementById('again').style.display="block";
        }
    }


//MOVIES ------------------------------------------------------------------------------------------------------------
// Easy

var movies_bank = [
    'S _ I _ _ R _ A N',
    '_ R O N _ _ N',
    '_ U P _ R _ A N',
    'T _ O R',
    '_ V E _ G _ R S',
    'B _ _ _ A N',
    'X _ _ N',
    'H A _ _ Y  P _ _ T E _'
]

var movies_cbank = [
    'SPIDERMAN',
    'IRONMAN',
    'SUPERMAN',
    'THOR',
    'AVENGERS',
    'BATMAN',
    'XMEN',
    'HARRY POTTER'
];

var ranmov = (Math.ceil(Math.random() * movies_bank.length)-1);
var movies = movies_bank[ranmov];
var correct_movword = movies_cbank[ranmov];

function mvcheck() {
    var guess = document.getElementById('ans').value;
    guess = guess.toUpperCase();
    if (guess === correct_movword) {
        console.log('Correct');
        console.log(guess);
        document.getElementById('again').style.display="none";
        document.getElementById('hidden').style.display="flex";
        document.getElementById('gb').style.display="none";
    }
    else {
        console.log('Wrong');
        console.log(guess);
        document.getElementById('again').style.display="block";
    }
}

// MEDIUM

var movies_mbank = [
    'F _ N T _ _ T _ C  _ E A _ T _',
    'S _ _ C E J A _',
    'W _ N _ A V I _ _ O N',
    'L _ K _',
    '_ A N T A _ _ I _ 4',
    'J _ N _ _ E',
    'D _ S _ _ C A B _ E   M _',
    'M _ N I _ N _'
];

var movies_cmbank = [
    'FANTASTIC BEASTS',
    'SPACE JAM',
    'WANDAVISION',
    'LOKI',
    'FANTASTIC 4',
    'JUNGLE',
    'DESPICABLE ME',
    'MINIONS'
];

var ranm = (Math.ceil(Math.random() * movies_mbank.length)-1);
var medmovies = movies_mbank[ranm];
var correct_movmword = movies_cmbank[ranm];

function mvmcheck() {
    var guess = document.getElementById('ans').value;
    guess = guess.toUpperCase();
    if (guess === correct_movmword) {
        console.log('Correct');
        console.log(guess);
        document.getElementById('again').style.display="none";
        document.getElementById('hidden').style.display="flex";
        document.getElementById('gb').style.display="none";
    }
    else {
        console.log('Wrong');
        console.log(guess);
        document.getElementById('again').style.display="block";
    }
}

// HARD

var movies_hbank = [
    '_AS_  AW_Y',
    '_ A C_ _ _W  R_ _ G E',
    'D _ _ E _',
    '_LA_K  P_ _T_ER',
    'U _ B _ _ _ E N',
    'G_ _EN  I_ _ER_O',
    '_V_L  _ _A D',
    'R _ S _ _ E N T  E _ I _',
    'TH_  C _ _ J _ R I _ _',
    'A _ N _ B _ _ L _',
    '_WI_S   A_M_  MA_'
];

var movies_chbank = [
    'CAST AWAY',
    'HACKSAW RIDGE',
    'DUNES',
    'BLACK PANTHER',
    'UNBROKEN',
    'GREEN INFERNO',
    'EVIL DEAD',
    'RESIDENT EVIL',
    'THE CONJURING',
    'ANNABELLE',
    'SWISS ARMY MAN'
];

var ranh = (Math.ceil(Math.random() * movies_hbank.length)-1);
var hardmovies = movies_hbank[ranh];
var correct_movhword = movies_chbank[ranh];

function mvhcheck() {
    var guess = document.getElementById('ans').value;
    guess = guess.toUpperCase();
    if (guess === correct_movhword) {
        console.log('Correct');
        console.log(guess);
        document.getElementById('again').style.display="none";
        document.getElementById('hidden').style.display="flex";
        document.getElementById('gb').style.display="none";
    }
    else {
        console.log('Wrong');
        console.log(guess);
        document.getElementById('again').style.display="block";
    }
}

// ANIMALS ----------------------------------------------------------------------------------------------------------------------
// EASY
var animals_bank = [
    'F _ _ H',
    'G _ _ T',
    'K _ A L _',
    'C _ I C K _ _',
    '_ A R R _ _',
    'C H E _ _ A _',
    'L I _ _',
    'I G _ A _ A'
];

var animals_cbank = [
    'FISH',
    'GOAT',
    'KOALA',
    'CHICKEN',
    'PARROT',
    'CHEETAH',
    'LION',
    'IGUANA'
];

var mix = (Math.ceil(Math.random() * animals_bank.length)-1);
var animals = animals_bank[mix];
var correct_anword = animals_cbank[mix];

function ancheck() {
    var guess = document.getElementById('ans').value;
    guess = guess.toUpperCase();
    if (guess === correct_anword) {
        console.log('Correct');
        console.log(guess);
        document.getElementById('again').style.display="none";
        document.getElementById('hidden').style.display="flex";
        document.getElementById('gb').style.display="none";
    }
    else {
        console.log('Wrong');
        console.log(guess);
        document.getElementById('again').style.display="block";
    }
}

// MEDIUM
var animals_mbank = [
    'H _ _ P _ _ O _ A _ U S',
    '_ L O _ N F _ _ H',
    'H _ _ M _ R H _ _ _ S _ A _ K',
    'T _ _ A N _ U _ A',
    'P _ G E _ N',
    '_ Y T _ _ N',
    'H _ _ S _ E _',
    '_ A C _ O N',
    '_ U T _ _ E F I _ H'
];

var animals_cmbank = [
    'HIPPOPOTAMUS',
    'CLOWN FISH',
    'HAMMERHEAD SHARK',
    'TARANTULA',
    'PIGEON',
    'PYTHON',
    'HAMSTER',
    'RACOON',
    'CUTTLEFISH'
];

var mixm = (Math.ceil(Math.random() * animals_mbank.length)-1);
var animalsm = animals_mbank[mixm];
var correct_anmword = animals_cmbank[mixm];

function anmcheck() {
    var guess = document.getElementById('ans').value;
    guess = guess.toUpperCase();
    if (guess === correct_anmword) {
        console.log('Correct');
        console.log(guess);
        document.getElementById('again').style.display="none";
        document.getElementById('hidden').style.display="flex";
        document.getElementById('gb').style.display="none";
    }
    else {
        console.log('Wrong');
        console.log(guess);
        document.getElementById('again').style.display="block";
    }
}


// HARD
var animals_hbank = [
    'V _ L _ C I _ _ P _ _ R',
    'M _ G A _ _ _ O N',
    'T Y _ _ _ N O S A U _ _ _ R _ X',
    'B R _ N T _ _ A U _ _ S',
    'P T _ R _ D _ _ T Y L',
    'M _ M M _ _ H',
    'R H _ _ O C _ _ O S',
    '_ S T _ I C H',
    'F A _ C _ _',
    '_ U R _ L _'
];

var animals_chbank = [
    'VELOCIRAPTOR',
    'MEGALODON',
    'TYRANNOSAURUS REX',
    'BRONTOSAURUS',
    'PTERODACTYL',
    'MAMMOTH',
    'RHINOCEROS',
    'OSTRICH',
    'FALCON',
    'TURTLE'
];

var mixm = (Math.ceil(Math.random() * animals_hbank.length)-1);
var animalsh = animals_hbank[mixm];
var correct_anhword = animals_chbank[mixm];

function anhcheck() {
    var guess = document.getElementById('ans').value;
    guess = guess.toUpperCase();
    if (guess === correct_anhword) {
        console.log('Correct');
        console.log(guess);
        document.getElementById('again').style.display="none";
        document.getElementById('hidden').style.display="flex";
        document.getElementById('gb').style.display="none";
    }
    else {
        console.log('Wrong');
        console.log(guess);
        document.getElementById('again').style.display="block";
    }
}













// the brain of the game
// le game part 2

// DO NOT REMOVE THIS CODE 
// document.addEventListener("keyup", function(event) {
//     if (event.key === 'Enter') {
//         alert('Enter is pressed!');
//     }
// });





var per = document.getElementById("player");

document.addEventListener("keyup", function(event) {
    if (event.key === 'w') {
        player.style.top="-10px";
    }
});

document.addEventListener("keyup", function(event) {
    if (event.key === 'a') {
        player.style.right="10px";
    }
});

document.addEventListener("keyup", function(event) {
    if (event.key === 's') {
        player.style.top="10px";
    }
});

document.addEventListener("keyup", function(event) {
    if (event.key === 'd') {
        player.style.right="-10px";
    }
});


// CALCULATOR ------------------------------------------------------------------------------------------------------------

var fnum;
var ope;
var snum;
var ans;
var disp;
var ongoing;
var dp;


function Add(){
    fnum = document.getElementById('compt').value;
    ope = '+';
    disp = document.getElementById('compt');
    disp.value = '';
    dp = document.getElementById('sym');
    dp.innerHTML = '+';
}

function Sub(){
    fnum = document.getElementById('compt').value;
    ope = '-';
    disp = document.getElementById('compt');
    disp.value = '';
    dp = document.getElementById('sym');
    dp.innerHTML = '-';
}

function Mul(){
     fnum = document.getElementById('compt').value;
     ope = '*';
    disp = document.getElementById('compt');
    disp.value = '';
    dp = document.getElementById('sym');
    dp.innerHTML = '×';
}

function Div(){
    fnum = document.getElementById('compt').value;
    ope = '/';
    disp = document.getElementById('compt');
    disp.value = '';
    dp = document.getElementById('sym');
    dp.innerHTML = '÷';
}

function Clr(){
    disp = document.getElementById('compt');
    disp.value = '';
    fnum = null;
    snum = null;
    dp = document.getElementById('sym');
    dp.innerHTML = '';
}

function Sqrt(){
    fnum = document.getElementById('compt').value;
    ope = "!";
    dp = document.getElementById('sym');
    dp.innerHTML = '√';
    ans = Math.sqrt(parseInt(fnum));
    disp = document.getElementById('compt');
    disp.value = ans;

}

function Equals(){
    snum = document.getElementById('compt').value;
    var num1 = parseInt(fnum);
    var num2 = parseInt(snum);
    switch(ope){
        case '+':
            ans = num1 + num2;
            disp = document.getElementById('compt');
            disp.value = ans;
            break;
        case '-':
            snum = document.getElementById('compt').value;
            ans = num1 - num2;
            disp = document.getElementById('compt');
            disp.value = ans;
            break;
        case '*':
            snum = document.getElementById('compt').value;
            ans = num1 * num2;
            disp = document.getElementById('compt');
            disp.value = ans;
            break;
        case '/':
            snum = document.getElementById('compt').value;
            ans = num1 / num2;
            disp = document.getElementById('compt');
            disp.value = ans;
            break;
        case '!':
            ans = Math.sqrt(num1);
            disp = document.getElementById('compt');
            disp.value = ans;
            break;
    }
    dp = document.getElementById('sym');
    dp.innerHTML = '';
}

function one(){
    ongoing = document.getElementById('compt').value;
    disp = document.getElementById('compt');
    disp.value = ongoing + 1;
}

function two(){
    ongoing = document.getElementById('compt').value;
    disp = document.getElementById('compt');
    disp.value = ongoing + 2;
}

function three(){
    ongoing = document.getElementById('compt').value;
    disp = document.getElementById('compt');
    disp.value = ongoing + 3;
}

function four(){
    ongoing = document.getElementById('compt').value;
    disp = document.getElementById('compt');
    disp.value = ongoing + 4;
}

function five(){
    ongoing = document.getElementById('compt').value;
    disp = document.getElementById('compt');
    disp.value = ongoing + 5;
}

function six(){
    ongoing = document.getElementById('compt').value;
    disp = document.getElementById('compt');
    disp.value = ongoing + 6;
}

function seven(){
    ongoing = document.getElementById('compt').value;
    disp = document.getElementById('compt');
    disp.value = ongoing + 7;
}

function eight(){
    ongoing = document.getElementById('compt').value;
    disp = document.getElementById('compt');
    disp.value = ongoing + 8;
}

function nine(){
    ongoing = document.getElementById('compt').value;
    disp = document.getElementById('compt');
    disp.value = ongoing + 9;
}

function zero(){
    ongoing = document.getElementById('compt').value;
    disp = document.getElementById('compt');
    disp.value = ongoing + 0;
}

function Del(){
    ongoing = document.getElementById('compt').value;
    disp = document.getElementById('compt');
    disp.value = ongoing.slice(0, -1);
}


