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