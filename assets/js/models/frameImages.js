const frameImages = {
    ken : {
        animationStopped: [
            {x: 1, y: 121, width: 104, height: 120},
            {x: 108, y: 121, width: 104, height: 120},
            {x: 214, y: 121, width: 104, height: 120},
            {x: 318, y: 121, width: 105, height: 120}
        ],
        animationWaking: [
            {x: 1, y: 362, width: 104, height: 121},
            {x: 108, y: 362, width: 104, height: 121},
            {x: 214, y: 362, width: 104, height: 121},
            {x: 320, y: 362, width: 104, height: 121},
            {x: 425, y: 362, width: 104, height: 121}
        ],
        animationJump: [
            {x: 107, y: 960, width: 104, height: 121},
            {x: 214, y: 960, width: 104, height: 121},
            {x: 320, y: 960, width: 104, height: 121},
            {x: 425, y: 960, width: 104, height: 121},
            {x: 530, y: 960, width: 104, height: 121}
        ],
        animationBend: [
            {x: 1, y: 1080, width: 104, height: 121}
        ],
        animationPunch: [
            {x: 1, y: 242, width: 104, height: 121},
            {x: 107.5, y: 242, width: 104, height: 118},
            {x: 214, y: 242, width: 104, height: 121}
        ],
        animationKick: [
            {x: 3, y: 720, width: 104, height: 121},
            {x: 108, y: 720, width: 103, height: 120},
            {x: 211, y: 720, width: 104, height: 120},
            {x: 320, y: 720, width: 104, height: 121},
            {x: 424.5, y: 720, width: 104, height: 121}
        ],
        animationSuperKick: [
            {x: 424.5, y: 840, width: 104, height: 120},
            {x: 315, y: 840, width: 103, height: 120},
            {x: 202.5, y: 840, width: 104, height: 120},
            {x: 100, y: 840, width: 104, height: 120},
            {x: 3, y: 840, width: 103, height: 120}
        ],
        animationSpecial: [
            {x: 0, y: 0, width: 104, height: 120},
            {x: 108, y: 0, width: 104, height: 120},
            {x: 214, y: 0, width: 104, height: 120},
            {x: 322, y: 0, width: 104, height: 120}
        ],
        animationEffectHabilitySpecial: [
            {x: 5, y: 480, width: 60, height: 80},
            {x: 108, y: 480, width: 60, height: 80}
        ],
        animationMirrorStopped: [
            {x: 597, y: 116, width: 104, height: 121},
            {x: 489, y: 116, width: 104, height: 121},
            {x: 384, y: 116, width: 104, height: 121},
            {x: 281, y: 116, width: 105, height: 121}
        ],
        animationMirrorWaking: [
            {x: 597, y: 357, width: 104, height: 121},
            {x: 497, y: 357, width: 104, height: 121},
            {x: 384, y: 357, width: 104, height: 121},
            {x: 276, y: 357, width: 104, height: 121},
            {x: 168, y: 357, width: 104, height: 121}
        ],
        animationMirrorBend: [
            {x: 597, y: 1080, width: 104, height: 121}
        ],
        animationMirrorJump: [
            {x: 497, y: 960, width: 104, height: 121},
            {x: 384, y: 960, width: 104, height: 121},
            {x: 276, y: 960, width: 104, height: 121},
            {x: 170, y: 960, width: 104, height: 121},
            {x: 68, y: 960, width: 104, height: 121}
        ],
        animationMirrorPunch: [
            {x: 597, y: 237, width: 104, height: 122},
            {x: 490.5, y: 237, width: 104, height: 120},
            {x: 384, y: 237, width: 104, height: 122}
        ],
        animationMirrorKick: [
            {x: 595, y: 715, width: 104, height: 121},
            {x: 497, y: 715, width: 104, height: 121},
            {x: 386, y: 715, width: 115, height: 121},
            {x: 276, y: 715, width: 104, height: 121},
            {x: 173.5, y: 715, width: 104, height: 121}
        ],
        animationMirrorSuperKick: [
            {x: 173.5, y: 837, width: 104, height: 120},
            {x: 286, y: 837, width: 104, height: 120},
            {x: 398, y: 837, width: 115, height: 120},
            {x: 502, y: 837, width: 104, height: 120},
            {x: 605, y: 837, width: 104, height: 121}
        ],
        animationMirrorSpecial: [
            {x: 597, y: 0, width: 104, height: 118},
            {x: 489, y: 0, width: 104, height: 117},
            {x: 384, y: 0, width: 104, height: 117},
            {x: 276, y: 0, width: 104, height: 120}
        ],
        animationMirrorEffectHabilitySpecial: [
            {x: 597, y: 480, width: 104, height: 118},
            {x: 489, y: 480, width: 104, height: 117}
        ]
        
    },
    background : {
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
        },
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