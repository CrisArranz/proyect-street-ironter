const KEY_RIGHTBOARD_LEFTPRESSED = 37;
const KEY_RIGHTBOARD_UPPRESSED = 38;
const KEY_RIGHTBOARD_RIGHTPRESSED = 39;
const KEY_RIGHTBOARD_DOWNPRESSED = 40;
const KEY_RIGHTBOARD_PUNCHPRESSED = 97;
const KEY_RIGHTBOARD_KICKPRESSED = 98;
const KEY_RIGHTBOARD_SUPERKICKPRESSED = 99;
const KEY_RIGHTBOARD_SPECIALPRESSED = 96;

const KEY_LEFTBOARD_LEFTPRESSED = 65;
const KEY_LEFTBOARD_UPPRESSED = 87;
const KEY_LEFTBOARD_RIGHTPRESSED = 68;
const KEY_LEFTBOARD_DOWNPRESSED = 83;
const KEY_LEFTBOARD_PUNCHPRESSED = 81;
const KEY_LEFTBOARD_KICKPRESSED = 69;
const KEY_LEFTBOARD_SUPERKICKPRESSED = 82;
const KEY_LEFTBOARD_SPECIALPRESSED = 32;

const TICK_PER_SECOND = {
    character: 4,
    special: 6,
    background: 90
}

const FPS = 60;

const GRAVITY = 0.3;

const VELOCITY_CHARACTER_X = 4;
const VELOCITY_HABILITY_SPECIAL_X = 2.5;

const ROUTE_HABILITY_SPECIAL = 150;

const WIDTH_CHARACTERS = 70;
const HEIGHT_CHARACTERS = 120;

const WIDTH_SPECIAL_ANIMATED = 60;
const HEIGHT_SPECIAL_ANIMATED = 80;

const HEIGHT_BATTLEFIELD_CHARACTER = 150;
const HEIGHT_BATTLEFIELD_BACKGROUND = 100;

const START_LEFT_SIDE = -260;
const START_RIGHT_SIDE = 140;

const CAST_HABILITY_DURATION = 2.5;
const COOLDOWN_HABILITIES = {
    special: 20,
    superKick: 10
};

const POWER_ATTACKS = {
    punch : 16,
    kick: 24,
    superkick: 48,
    special: 70
}

const DURATION_FIGHT = 60;
const VELOCITY_MESSAGE = 10;
const WIDTH_MESSAGE_END = {
    ko: 50,
    timeover: 100
}

const POSITION_LIVES = {
    left: {
        border: {x: 20, y: 30},
        fill: {x: 28, y: 36}
    },
    right: {
        border: {x: 610, y: 30},
        fill: {x: 618, y: 36}
    }
}

const SOUNDS_GAME = {
    punch: new Audio('./assets/sounds/punch_sound.wav'),
    kick: new Audio('./assets/sounds/kick_sound.wav'),
    superKick: new Audio('./assets/sounds/superkick_sound.mp3'),
    selectionCharacter: new Audio('./assets/sounds/character_select.mp3'),
    selectedCharacter: new Audio('./assets/sounds/selected.wav'),
    titleTheme: new Audio('./assets/sounds/main.mp3'),
    fight: new Audio('./assets/sounds/fight.wav'),
    ko: new Audio('./assets/sounds/ko.wav'),
    timeover: new Audio('./assets/sounds/timeover.wav'),
    battlefield: [
        new Audio('./assets/sounds/chunli/chunli_theme.mp3'),
        new Audio('./assets/sounds/ken/ken_theme.mp3'),
        new Audio('./assets/sounds/ryu/ryu_theme.mp3'),
        new Audio('./assets/sounds/honda/honda_theme.mp3')
    ]
}