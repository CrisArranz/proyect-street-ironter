const frameImages = {
    ken : {
        url: {
            noMirror: './assets/images/characters/ken.png',
            mirror: './assets/images/characters/ken.mirror.png'
        },
        noMirror: {
            animation: {
                Stopped: [
                    {x: 1, y: 270, width: 204, height: 281},
                    {x: 251, y: 270, width: 204, height: 281},
                    {x: 496.5, y: 270, width: 204, height: 281},
                    {x: 737, y: 270, width: 204, height: 281}
                ],
                Waking: [
                    {x: 1, y: 830, width: 204, height: 281},
                    {x: 246, y: 830, width: 204, height: 281},
                    {x: 494.5, y: 830, width: 204, height: 281},
                    {x: 744, y: 830, width: 204, height: 281},
                    {x: 980, y: 830, width: 204, height: 281}
                ],
                Jump: [
                    {x: 251, y: 2300, width: 204, height: 340},
                    {x: 498, y: 2300, width: 204, height: 340},
                    {x: 744, y: 2300, width: 204, height: 340},
                    {x: 990, y: 2300, width: 204, height: 340},
                    {x: 251, y: 2300, width: 204, height: 340}
                ],
                Bend: [
                    {x: 1, y: 2600, width: 204, height: 281}
                ],
                Punch: [
                    {x: 1, y: 552, width: 220, height: 276},
                    {x: 249, y: 552, width: 220, height: 276},
                    {x: 1, y: 552, width: 220, height: 276}
                ],
                Kick: [
                    {x: 221, y: 1700, width: 220, height: 277},
                    {x: 460, y: 1700, width: 250, height: 277},
                    {x: 221, y: 1700, width: 220, height: 277}
                ],
                SuperKick: [
                    {x: 980, y: 1980, width: 240, height: 277},
                    {x: 724, y: 1980, width: 240, height: 277},
                    {x: 440, y: 1980, width: 280, height: 277},
                    {x: 220, y: 1980, width: 240, height: 277},
                    {x: 1, y: 1980, width: 220, height: 277}
                ],
                Special: [
                    {x: 0, y: 0, width: 220, height: 270},
                    {x: 250, y: 0, width: 220, height: 270},
                    {x: 494, y: 0, width: 220, height: 270},
                    {x: 745, y: 0, width: 220, height: 270}
                ],
                EffectHabilitySpecial: [
                    {x: 1, y: 1160, width: 124, height: 160},
                    {x: 260, y: 1160, width: 124, height: 160}
                ]
            }
        },
        mirror: {
            animation: {
                Stopped: [
                    {x: 1400, y: 270, width: 204, height: 281},
                    {x: 1150, y: 270, width: 204, height: 281},
                    {x: 905, y: 270, width: 204, height: 281},
                    {x: 665, y: 270, width: 204, height: 281}
                ],
                Waking: [
                    {x: 1400, y: 830, width: 204, height: 281},
                    {x: 1157, y: 830, width: 204, height: 281},
                    {x: 905, y: 830, width: 204, height: 281},
                    {x: 635, y: 830, width: 204, height: 281},
                    {x: 385, y: 830, width: 208, height: 281}
                ],
                Jump: [
                    {x: 1157, y: 2300, width: 204, height: 340},
                    {x: 897, y: 2300, width: 204, height: 340},
                    {x: 653, y: 2300, width: 204, height: 340},
                    {x: 410, y: 2300, width: 204, height: 340},
                    {x: 1157, y: 2300, width: 204, height: 340},
                ],
                Bend: [
                    {x: 1400, y: 2600, width: 204, height: 281}
                ],
                Punch: [
                    {x: 1400, y: 552, width: 204, height: 277},
                    {x: 1152, y: 552, width: 204, height: 277},
                    {x: 1400, y: 552, width: 204, height: 277}
                ],
                Kick: [
                    {x: 1150, y: 1700, width: 260, height: 277},
                    {x: 905, y: 1700, width: 260, height: 277},
                    {x: 1150, y: 1700, width: 260, height: 277}
                ],
                SuperKick: [
                    {x: 384, y: 1980, width: 240, height: 277},
                    {x: 645, y: 1980, width: 240, height: 277},
                    {x: 905, y: 1980, width: 245, height: 277},
                    {x: 1155, y: 1980, width: 240, height: 277},
                    {x: 1400, y: 1980, width: 240, height: 277}
                ],
                Special: [
                    {x: 1400, y: 0, width: 240, height: 271},
                    {x: 1155, y: 0, width: 240, height: 271},
                    {x: 910, y: 0, width: 240, height: 271},
                    {x: 659, y: 0, width: 240, height: 271}
                ],
                EffectHabilitySpecial: [
                    {x: 1495, y: 1160, width: 124, height: 160},
                    {x: 1250, y: 1160, width: 124, height: 160}
                ]
            }
        }
    },
    honda: {
        url: {
            noMirror: './assets/images/characters/honda.png',
            mirror: './assets/images/characters/honda.mirror.png'
        },
        noMirror: {
            animation: {
                Stopped: [
                    {x: 0, y: 0, width: 156, height: 200},
                    {x: 166, y: 0, width: 156, height: 200},
                    {x: 333, y: 0, width: 156, height: 200},
                    {x: 166, y: 0, width: 156, height: 200}
                ],
                Waking: [
                    {x: 0, y: 340, width: 179, height: 200},
                    {x: 175, y: 340, width: 172, height: 200},
                    {x: 340, y: 340, width: 160, height: 200},
                    {x: 500, y: 340, width: 160, height: 200},
                    {x: 340, y: 340, width: 160, height: 200},
                    {x: 175, y: 340, width: 172, height: 200},
                    {x: 0, y: 340, width: 179, height: 200}
                ],
                Jump: [
                    {x: 6, y: 600, width: 158, height: 200},
                    {x: 150, y: 600, width: 150, height: 200},
                    {x: 291.5, y: 600, width: 140, height: 200},
                    {x: 150, y: 600, width: 150, height: 200}
                ],
                Bend: [
                    {x: 200, y: 850, width: 140, height: 200}
                ],
                Punch: [
                    {x: 0, y: 1040, width: 184, height: 250},
                    {x: 177, y: 1037, width: 205, height: 252},
                    {x: 0, y: 1040, width: 184, height: 250}
                ],
                Kick: [
                    {x: 0, y: 1700, width: 178, height: 210},
                    {x: 167, y: 1700, width: 178, height: 210},
                    {x: 340, y: 1700, width: 178, height: 210},
                    {x: 167, y: 1700, width: 178, height: 210},
                    {x: 0, y: 1700, width: 178, height: 210}
                ],
                SuperKick: [
                    {x: -10, y: 1400, width: 166, height: 260},
                    {x: 148, y: 1400, width: 166, height: 260},
                    {x: 322, y: 1400, width: 168, height: 260},
                    {x: 558, y: 1400, width: 168, height: 260},
                    {x: 322, y: 1400, width: 168, height: 260},
                    {x: 148, y: 1400, width: 166, height: 260},
                    {x: -10, y: 1400, width: 166, height: 260}
                ],
                Special: [
                    {x: 0, y: 0, width: 156, height: 200},
                    {x: 166, y: 0, width: 156, height: 200},
                    {x: 333, y: 0, width: 156, height: 200},
                    {x: 166, y: 0, width: 156, height: 200}
                ],
                EffectHabilitySpecial: [
                    {x: 177, y: 1037, width: 205, height: 252},
                ]
            }
        },
        mirror: {
            animation: {
                Stopped: [
                    {x: -8, y: 0, width: 156, height: 200},
                    {x: 166, y: 0, width: 156, height: 200},
                    {x: 333, y: 0, width: 156, height: 200},
                    {x: 166, y: 0, width: 156, height: 200}
                ],
                Waking: [
                    {x: -12, y: 340, width: 152, height: 200},
                    {x: 150, y: 340, width: 152, height: 200},
                    {x: 315, y: 340, width: 152, height: 200},
                    {x: 472, y: 340, width: 169, height: 200},
                    {x: 315, y: 340, width: 152, height: 200},
                    {x: 150, y: 340, width: 152, height: 200},
                    {x: -12, y: 340, width: 152, height: 200}
                ],
                Jump: [
                    {x: 400, y: 600, width: 158, height: 200},
                    {x: -30, y: 600, width: 162, height: 200},
                    {x: 131, y: 600, width: 143, height: 200},
                    {x: -30, y: 600, width: 162, height: 200},
                ],
                Bend: [
                    {x: 0, y: 850, width: 140, height: 200}
                ],
                Punch: [
                    {x: 0, y: 1040, width: 180, height: 250},
                    {x: 185, y: 1037, width: 198, height: 252},
                    {x: 0, y: 1040, width: 180, height: 250}
                ],
                Kick: [
                    {x: 0, y: 1700, width: 185, height: 210},
                    {x: 174, y: 1700, width: 185, height: 210},
                    {x: 379, y: 1700, width: 185, height: 210},
                    {x: 174, y: 1700, width: 185, height: 210},
                    {x: 0, y: 1700, width: 185, height: 210}
                ],
                SuperKick: [
                    {x: -10, y: 1400, width: 166, height: 260},
                    {x: 164, y: 1400, width: 166, height: 260},
                    {x: 389, y: 1400, width: 168, height: 260},
                    {x: 558, y: 1400, width: 168, height: 260},
                    {x: 389, y: 1400, width: 168, height: 260},
                    {x: 164, y: 1400, width: 166, height: 260},
                    {x: -10, y: 1400, width: 166, height: 260}
                ],
                Special: [
                    {x: -8, y: 0, width: 156, height: 200},
                    {x: 166, y: 0, width: 156, height: 200},
                    {x: 333, y: 0, width: 156, height: 200},
                    {x: 166, y: 0, width: 156, height: 200}
                ],
                EffectHabilitySpecial: [
                    {x: 185, y: 1037, width: 198, height: 252}
                ]
            }
        }
    },
    chunli: {
        url: {
            noMirror: './assets/images/characters/chunli.png',
            mirror: './assets/images/characters/chunli.mirror.png'
        },
        noMirror: {
            animation: {
                Stopped: [
                    {x: 0, y: -5, width: 201, height: 290},
                    {x: 180, y: -5, width: 201, height: 290},
                    {x: 356, y: -5, width: 201, height: 290},
                    {x: 536, y: -5, width: 201, height: 290}
                ],
                Waking: [
                    {x: 0, y: 290, width: 201, height: 275},
                    {x: 180, y: 290, width: 201, height: 275},
                    {x: 376, y: 290, width: 201, height: 275},
                    {x: 585, y: 290, width: 201, height: 275},
                    {x: 805, y: 290, width: 201, height: 275},
                    {x: 585, y: 290, width: 201, height: 275},
                    {x: 376, y: 290, width: 201, height: 275},
                    {x: 180, y: 290, width: 201, height: 275}
                ],
                Jump: [
                    {x: 1700, y: 10, width: 201, height: 350},
                    {x: 1870, y: 0, width: 130, height: 350, minusWidth: -20},
                    {x: 2010, y: 0, width: 150, height: 350, minusWidth: -15},
                    {x: 1870, y: 0, width: 130, height: 350, minusWidth: -20}
                ],
                Bend: [
                    {x: 200, y: 2700, width: 201, height: 300}
                ],
                Punch: [
                    {x: 0, y: 554, width: 201, height: 298},
                    {x: 240, y: 547, width: 280, height: 296, minusWidth: 25},
                    {x: 0, y: 554, width: 201, height: 298}
                ],
                Kick: [
                    {x: 0, y: 825, width: 201, height: 298},
                    {x: 200, y: 825, width: 201, height: 298},
                    {x: 5, y: 1120, width: 250, height: 304, minusWidth: 15},
                    {x: 200, y: 825, width: 201, height: 298},
                    {x: 0, y: 825, width: 201, height: 298}
                ],
                SuperKick: [
                    {x: 675, y: 2100, width: 201, height: 298},
                    {x: 445, y: 2100, width: 231, height: 298, minusWidth: 12},
                    {x: 157, y: 2079, width: 260, height: 298, minusWidth: 12, minusHeight: -6},
                    {x: 0, y: 2100, width: 190, height: 298}
                ],
                Special: [
                    {x: 0, y: 2400, width: 160, height: 340, minusWidth: -15},
                    {x: 170, y: 2400, width: 220, height: 340},
                    {x: 400, y: 2370, width: 160, height: 349, minusWidth: -15},
                    {x: 570, y: 2400, width: 220, height: 340}
                ],
                EffectHabilitySpecial: [
                    {x: 15, y: 1450, width: 115, height: 150},
                    {x: 130, y: 1450, width: 115, height: 150},
                    {x: 275, y: 1450, width: 115, height: 150},
                    {x: 395, y: 1450, width: 115, height: 150},
                    {x: 520, y: 1450, width: 135, height: 150},
                    {x: 650, y: 1450, width: 135, height: 150},
                    {x: 792, y: 1450, width: 135, height: 150}
                ]
            }
        },
        mirror: {
            animation: {
                Stopped: [
                    {x: 0, y: -5, width: 201, height: 290},
                    {x: 180, y: -5, width: 197, height: 290},
                    {x: 356, y: -5, width: 201, height: 290},
                    {x: 536, y: -5, width: 201, height: 290}
                ],
                Waking: [
                    {x: 1350, y: 290, width: 210, height: 275, minusWidth: 7},
                    {x: 0, y: 290, width: 201, height: 275},
                    {x: 215, y: 290, width: 160, height: 275, minusWidth: -10},
                    {x: 785, y: 290, width: 170, height: 275, minusWidth: -10},
                    {x: 583, y: 290, width: 201, height: 275},
                    {x: 785, y: 290, width: 170, height: 275, minusWidth: -10},
                    {x: 215, y: 290, width: 160, height: 275, minusWidth: -10},
                    {x: 0, y: 290, width: 201, height: 275}
                ],
                Jump: [
                    {x: 2120, y: 10, width: 201, height: 350},
                    {x: 2000, y: 0, width: 140, height: 350, minusWidth: -25},
                    {x: 1860, y: 0, width: 145, height: 350, minusWidth: -15},
                    {x: 2000, y: 0, width: 140, height: 350, minusWidth: -25},
                ],
                Bend: [
                    {x: 100, y: 2732, width: 201, height: 265}
                ],
                Punch: [
                    {x: 0, y: 560, width: 201, height: 280, minusWidth: 20},
                    {x: 250, y: 560, width: 280, height: 280, minusWidth: 40},
                    {x: 0, y: 560, width: 201, height: 280, minusWidth: 20},
                ],
                Kick: [
                    {x: 200, y: 825, width: 201, height: 298},
                    {x: 0, y: 825, width: 201, height: 298},
                    {x: 45, y: 1120, width: 250, height: 304, minusWidth: 15},
                    {x: 0, y: 825, width: 201, height: 298},
                    {x: 200, y: 825, width: 201, height: 298}
                ],
                SuperKick: [
                    {x: 0, y: 2078, width: 190, height: 298},
                    {x: 214, y: 2078, width: 200, height: 298, minusWidth: 5},
                    {x: 458, y: 2078, width: 260, height: 298, minusWidth: 20},
                    {x: 692, y: 2078, width: 200, height: 298, minusWidth: 5}
                ],
                Special: [
                    {x: 620, y: 2400, width: 220, height: 340},
                    {x: 420, y: 2400, width: 220, height: 349, minusWidth: -5},
                    {x: 230, y: 2400, width: 160, height: 340, minusWidth: -25},
                    {x: 0, y: 2400, width: 220, height: 340, minusWidth: -5},
                ],
                EffectHabilitySpecial: [
                    {x: 819, y: 1450, width: 110, height: 150},
                    {x: 693, y: 1450, width: 115, height: 150},
                    {x: 560, y: 1450, width: 110, height: 150},
                    {x: 435, y: 1450, width: 125, height: 150},
                    {x: 305, y: 1450, width: 125, height: 150},
                    {x: 155, y: 1450, width: 135, height: 150},
                    {x: 15, y: 1450, width: 135, height: 150},
                ]
            }
        }
    },
    background : {
        url: {
            noMirror: './assets/images/stage/stage-ironter.png'
        },
        noMirror: {
            static: {
                sky: {
                    xTrim: 5, yTrim: 295, widthTrim: 400, heightTrim: 65,
                    xBackground: 0, yBackground: 0, widthBackground: null, heightBackground: 220
                },
                plain: {
                    xTrim: 0, yTrim: 0, widthTrim: 512, heightTrim: 220,
                    xBackground: 0, yBackground: 20, widthBackground: null, heightBackground: 375
                },
                road: {
                    xTrim: 0, yTrim: 680, widthTrim: 512, heightTrim: 100,
                    xBackground: 0, yBackground: 352, widthBackground: null, heightBackground: 200
                }
            },
            animation: {
                firstPeople: [
                    {x: 5, y: 350, width: 60, height: 120},
                    {x: 71, y: 350, width: 60, height: 120}
                ],
                secondPeople: [
                    {x: 135, y: 349, width: 103, height: 115},
                    {x: 238, y: 349, width: 103, height: 115}
                ],
                thirdPeople: [
                    {x: 342, y: 349, width: 85, height: 120},
                    {x: 427, y: 349, width: 85, height: 120}
                ]
            }
        }
    }
}