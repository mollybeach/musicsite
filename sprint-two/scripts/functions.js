const unit = [{}];
let byEight = [];
for (i = 0; i < 1280; i++) {
    if (i % 8 === 0) {
        byEight.push(i);
    }
}

function createUnit() {
    for (i = 0; i < byEight.length; i++) {
        let newUnit = {
            input: byEight[i],
            rem: (byEight[i] / 16).toFixed(1),
            mobileVW: ((byEight[i] / 320) * 100).toFixed(1), //round to one decimal place
            tabletVW: ((byEight[i] / 768) * 100).toFixed(1), //round to one decimal place
            desktopVW: ((byEight[i] / 1280) * 100).toFixed(1), //round to one decimal place
        };
        unit.push(newUnit);
    }
}
createUnit(unit);
console.log(unit);
//Output
const outPut = [{
    0: {},
    1: { input: 0, rem: "0.0", mobileVW: "0.0", tabletVW: "0.0", desktopVW: "0.0" },
    2: { input: 8, rem: "0.5", mobileVW: "2.5", tabletVW: "1.0", desktopVW: "0.6" },
    3: { input: 16, rem: "1.0", mobileVW: "5.0", tabletVW: "2.1", desktopVW: "1.3" },
    4: { input: 24, rem: "1.5", mobileVW: "7.5", tabletVW: "3.1", desktopVW: "1.9" },
    5: { input: 32, rem: "2.0", mobileVW: "10.0", tabletVW: "4.2", desktopVW: "2.5" },
    6: { input: 40, rem: "2.5", mobileVW: "12.5", tabletVW: "5.2", desktopVW: "3.1" },
    7: { input: 48, rem: "3.0", mobileVW: "15.0", tabletVW: "6.3", desktopVW: "3.8" },
    8: { input: 56, rem: "3.5", mobileVW: "17.5", tabletVW: "7.3", desktopVW: "4.4" },
    9: { input: 64, rem: "4.0", mobileVW: "20.0", tabletVW: "8.3", desktopVW: "5.0" },
    10: { input: 72, rem: "4.5", mobileVW: "22.5", tabletVW: "9.4", desktopVW: "5.6" },
    11: { input: 80, rem: "5.0", mobileVW: "25.0", tabletVW: "10.4", desktopVW: "6.3" },
    12: { input: 88, rem: "5.5", mobileVW: "27.5", tabletVW: "11.5", desktopVW: "6.9" },
    13: { input: 96, rem: "6.0", mobileVW: "30.0", tabletVW: "12.5", desktopVW: "7.5" },
    14: { input: 104, rem: "6.5", mobileVW: "32.5", tabletVW: "13.5", desktopVW: "8.1" },
    15: { input: 112, rem: "7.0", mobileVW: "35.0", tabletVW: "14.6", desktopVW: "8.8" },
    16: { input: 120, rem: "7.5", mobileVW: "37.5", tabletVW: "15.6", desktopVW: "9.4" },
    17: { input: 128, rem: "8.0", mobileVW: "40.0", tabletVW: "16.7", desktopVW: "10.0" },
    18: { input: 136, rem: "8.5", mobileVW: "42.5", tabletVW: "17.7", desktopVW: "10.6" },
    19: { input: 144, rem: "9.0", mobileVW: "45.0", tabletVW: "18.8", desktopVW: "11.3" },
    20: { input: 152, rem: "9.5", mobileVW: "47.5", tabletVW: "19.8", desktopVW: "11.9" },
    21: { input: 160, rem: "10.0", mobileVW: "50.0", tabletVW: "20.8", desktopVW: "12.5" },
    22: { input: 168, rem: "10.5", mobileVW: "52.5", tabletVW: "21.9", desktopVW: "13.1" },
    23: { input: 176, rem: "11.0", mobileVW: "55.0", tabletVW: "22.9", desktopVW: "13.8" },
    24: { input: 184, rem: "11.5", mobileVW: "57.5", tabletVW: "24.0", desktopVW: "14.4" },
    25: { input: 192, rem: "12.0", mobileVW: "60.0", tabletVW: "25.0", desktopVW: "15.0" },
    26: { input: 200, rem: "12.5", mobileVW: "62.5", tabletVW: "26.0", desktopVW: "15.6" },
    27: { input: 208, rem: "13.0", mobileVW: "65.0", tabletVW: "27.1", desktopVW: "16.3" },
    28: { input: 216, rem: "13.5", mobileVW: "67.5", tabletVW: "28.1", desktopVW: "16.9" },
    29: { input: 224, rem: "14.0", mobileVW: "70.0", tabletVW: "29.2", desktopVW: "17.5" },
    30: { input: 232, rem: "14.5", mobileVW: "72.5", tabletVW: "30.2", desktopVW: "18.1" },
    31: { input: 240, rem: "15.0", mobileVW: "75.0", tabletVW: "31.3", desktopVW: "18.8" },
    32: { input: 248, rem: "15.5", mobileVW: "77.5", tabletVW: "32.3", desktopVW: "19.4" },
    33: { input: 256, rem: "16.0", mobileVW: "80.0", tabletVW: "33.3", desktopVW: "20.0" },
    34: { input: 264, rem: "16.5", mobileVW: "82.5", tabletVW: "34.4", desktopVW: "20.6" },
    35: { input: 272, rem: "17.0", mobileVW: "85.0", tabletVW: "35.4", desktopVW: "21.3" },
    36: { input: 280, rem: "17.5", mobileVW: "87.5", tabletVW: "36.5", desktopVW: "21.9" },
    37: { input: 288, rem: "18.0", mobileVW: "90.0", tabletVW: "37.5", desktopVW: "22.5" },
    38: { input: 296, rem: "18.5", mobileVW: "92.5", tabletVW: "38.5", desktopVW: "23.1" },
    39: { input: 304, rem: "19.0", mobileVW: "95.0", tabletVW: "39.6", desktopVW: "23.8" },
    40: { input: 312, rem: "19.5", mobileVW: "97.5", tabletVW: "40.6", desktopVW: "24.4" },
    41: { input: 320, rem: "20.0", mobileVW: "100.0", tabletVW: "41.7", desktopVW: "25.0" },
    42: { input: 328, rem: "20.5", mobileVW: "102.5", tabletVW: "42.7", desktopVW: "25.6" },
    43: { input: 336, rem: "21.0", mobileVW: "105.0", tabletVW: "43.8", desktopVW: "26.3" },
    44: { input: 344, rem: "21.5", mobileVW: "107.5", tabletVW: "44.8", desktopVW: "26.9" },
    45: { input: 352, rem: "22.0", mobileVW: "110.0", tabletVW: "45.8", desktopVW: "27.5" },
    46: { input: 360, rem: "22.5", mobileVW: "112.5", tabletVW: "46.9", desktopVW: "28.1" },
    47: { input: 368, rem: "23.0", mobileVW: "115.0", tabletVW: "47.9", desktopVW: "28.7" },
    48: { input: 376, rem: "23.5", mobileVW: "117.5", tabletVW: "49.0", desktopVW: "29.4" },
    49: { input: 384, rem: "24.0", mobileVW: "120.0", tabletVW: "50.0", desktopVW: "30.0" },
    50: { input: 392, rem: "24.5", mobileVW: "122.5", tabletVW: "51.0", desktopVW: "30.6" },
    51: { input: 400, rem: "25.0", mobileVW: "125.0", tabletVW: "52.1", desktopVW: "31.3" },
    52: { input: 408, rem: "25.5", mobileVW: "127.5", tabletVW: "53.1", desktopVW: "31.9" },
    53: { input: 416, rem: "26.0", mobileVW: "130.0", tabletVW: "54.2", desktopVW: "32.5" },
    54: { input: 424, rem: "26.5", mobileVW: "132.5", tabletVW: "55.2", desktopVW: "33.1" },
    55: { input: 432, rem: "27.0", mobileVW: "135.0", tabletVW: "56.3", desktopVW: "33.8" },
    56: { input: 440, rem: "27.5", mobileVW: "137.5", tabletVW: "57.3", desktopVW: "34.4" },
    57: { input: 448, rem: "28.0", mobileVW: "140.0", tabletVW: "58.3", desktopVW: "35.0" },
    58: { input: 456, rem: "28.5", mobileVW: "142.5", tabletVW: "59.4", desktopVW: "35.6" },
    59: { input: 464, rem: "29.0", mobileVW: "145.0", tabletVW: "60.4", desktopVW: "36.3" },
    60: { input: 472, rem: "29.5", mobileVW: "147.5", tabletVW: "61.5", desktopVW: "36.9" },
    61: { input: 480, rem: "30.0", mobileVW: "150.0", tabletVW: "62.5", desktopVW: "37.5" },
    62: { input: 488, rem: "30.5", mobileVW: "152.5", tabletVW: "63.5", desktopVW: "38.1" },
    63: { input: 496, rem: "31.0", mobileVW: "155.0", tabletVW: "64.6", desktopVW: "38.8" },
    64: { input: 504, rem: "31.5", mobileVW: "157.5", tabletVW: "65.6", desktopVW: "39.4" },
    65: { input: 512, rem: "32.0", mobileVW: "160.0", tabletVW: "66.7", desktopVW: "40.0" },
    66: { input: 520, rem: "32.5", mobileVW: "162.5", tabletVW: "67.7", desktopVW: "40.6" },
    67: { input: 528, rem: "33.0", mobileVW: "165.0", tabletVW: "68.8", desktopVW: "41.3" },
    68: { input: 536, rem: "33.5", mobileVW: "167.5", tabletVW: "69.8", desktopVW: "41.9" },
    69: { input: 544, rem: "34.0", mobileVW: "170.0", tabletVW: "70.8", desktopVW: "42.5" },
    70: { input: 552, rem: "34.5", mobileVW: "172.5", tabletVW: "71.9", desktopVW: "43.1" },
    71: { input: 560, rem: "35.0", mobileVW: "175.0", tabletVW: "72.9", desktopVW: "43.8" },
    72: { input: 568, rem: "35.5", mobileVW: "177.5", tabletVW: "74.0", desktopVW: "44.4" },
    73: { input: 576, rem: "36.0", mobileVW: "180.0", tabletVW: "75.0", desktopVW: "45.0" },
    74: { input: 584, rem: "36.5", mobileVW: "182.5", tabletVW: "76.0", desktopVW: "45.6" },
    75: { input: 592, rem: "37.0", mobileVW: "185.0", tabletVW: "77.1", desktopVW: "46.3" },
    76: { input: 600, rem: "37.5", mobileVW: "187.5", tabletVW: "78.1", desktopVW: "46.9" },
    77: { input: 608, rem: "38.0", mobileVW: "190.0", tabletVW: "79.2", desktopVW: "47.5" },
    78: { input: 616, rem: "38.5", mobileVW: "192.5", tabletVW: "80.2", desktopVW: "48.1" },
    79: { input: 624, rem: "39.0", mobileVW: "195.0", tabletVW: "81.3", desktopVW: "48.8" },
    80: { input: 632, rem: "39.5", mobileVW: "197.5", tabletVW: "82.3", desktopVW: "49.4" },
    81: { input: 640, rem: "40.0", mobileVW: "200.0", tabletVW: "83.3", desktopVW: "50.0" },
    82: { input: 648, rem: "40.5", mobileVW: "202.5", tabletVW: "84.4", desktopVW: "50.6" },
    83: { input: 656, rem: "41.0", mobileVW: "205.0", tabletVW: "85.4", desktopVW: "51.2" },
    84: { input: 664, rem: "41.5", mobileVW: "207.5", tabletVW: "86.5", desktopVW: "51.9" },
    85: { input: 672, rem: "42.0", mobileVW: "210.0", tabletVW: "87.5", desktopVW: "52.5" },
    86: { input: 680, rem: "42.5", mobileVW: "212.5", tabletVW: "88.5", desktopVW: "53.1" },
    87: { input: 688, rem: "43.0", mobileVW: "215.0", tabletVW: "89.6", desktopVW: "53.8" },
    88: { input: 696, rem: "43.5", mobileVW: "217.5", tabletVW: "90.6", desktopVW: "54.4" },
    89: { input: 704, rem: "44.0", mobileVW: "220.0", tabletVW: "91.7", desktopVW: "55.0" },
    90: { input: 712, rem: "44.5", mobileVW: "222.5", tabletVW: "92.7", desktopVW: "55.6" },
    91: { input: 720, rem: "45.0", mobileVW: "225.0", tabletVW: "93.8", desktopVW: "56.3" },
    92: { input: 728, rem: "45.5", mobileVW: "227.5", tabletVW: "94.8", desktopVW: "56.9" },
    93: { input: 736, rem: "46.0", mobileVW: "230.0", tabletVW: "95.8", desktopVW: "57.5" },
    94: { input: 744, rem: "46.5", mobileVW: "232.5", tabletVW: "96.9", desktopVW: "58.1" },
    95: { input: 752, rem: "47.0", mobileVW: "235.0", tabletVW: "97.9", desktopVW: "58.8" },
    96: { input: 760, rem: "47.5", mobileVW: "237.5", tabletVW: "99.0", desktopVW: "59.4" },
    97: { input: 768, rem: "48.0", mobileVW: "240.0", tabletVW: "100.0", desktopVW: "60.0" },
    98: { input: 776, rem: "48.5", mobileVW: "242.5", tabletVW: "101.0", desktopVW: "60.6" },
    99: { input: 784, rem: "49.0", mobileVW: "245.0", tabletVW: "102.1", desktopVW: "61.3" },
    100: { input: 792, rem: "49.5", mobileVW: "247.5", tabletVW: "103.1", desktopVW: "61.9" },
    101: { input: 800, rem: "50.0", mobileVW: "250.0", tabletVW: "104.2", desktopVW: "62.5" },
    102: { input: 808, rem: "50.5", mobileVW: "252.5", tabletVW: "105.2", desktopVW: "63.1" },
    103: { input: 816, rem: "51.0", mobileVW: "255.0", tabletVW: "106.3", desktopVW: "63.7" },
    104: { input: 824, rem: "51.5", mobileVW: "257.5", tabletVW: "107.3", desktopVW: "64.4" },
    105: { input: 832, rem: "52.0", mobileVW: "260.0", tabletVW: "108.3", desktopVW: "65.0" },
    106: { input: 840, rem: "52.5", mobileVW: "262.5", tabletVW: "109.4", desktopVW: "65.6" },
    107: { input: 848, rem: "53.0", mobileVW: "265.0", tabletVW: "110.4", desktopVW: "66.3" },
    108: { input: 856, rem: "53.5", mobileVW: "267.5", tabletVW: "111.5", desktopVW: "66.9" },
    109: { input: 864, rem: "54.0", mobileVW: "270.0", tabletVW: "112.5", desktopVW: "67.5" },
    110: { input: 872, rem: "54.5", mobileVW: "272.5", tabletVW: "113.5", desktopVW: "68.1" },
    111: { input: 880, rem: "55.0", mobileVW: "275.0", tabletVW: "114.6", desktopVW: "68.8" },
    112: { input: 888, rem: "55.5", mobileVW: "277.5", tabletVW: "115.6", desktopVW: "69.4" },
    113: { input: 896, rem: "56.0", mobileVW: "280.0", tabletVW: "116.7", desktopVW: "70.0" },
    114: { input: 904, rem: "56.5", mobileVW: "282.5", tabletVW: "117.7", desktopVW: "70.6" },
    115: { input: 912, rem: "57.0", mobileVW: "285.0", tabletVW: "118.8", desktopVW: "71.3" },
    116: { input: 920, rem: "57.5", mobileVW: "287.5", tabletVW: "119.8", desktopVW: "71.9" },
    117: { input: 928, rem: "58.0", mobileVW: "290.0", tabletVW: "120.8", desktopVW: "72.5" },
    118: { input: 936, rem: "58.5", mobileVW: "292.5", tabletVW: "121.9", desktopVW: "73.1" },
    119: { input: 944, rem: "59.0", mobileVW: "295.0", tabletVW: "122.9", desktopVW: "73.8" },
    120: { input: 952, rem: "59.5", mobileVW: "297.5", tabletVW: "124.0", desktopVW: "74.4" },
    121: { input: 960, rem: "60.0", mobileVW: "300.0", tabletVW: "125.0", desktopVW: "75.0" },
    122: { input: 968, rem: "60.5", mobileVW: "302.5", tabletVW: "126.0", desktopVW: "75.6" },
    124: { input: 984, rem: "61.5", mobileVW: "307.5", tabletVW: "128.1", desktopVW: "76.9" },
    125: { input: 992, rem: "62.0", mobileVW: "310.0", tabletVW: "129.2", desktopVW: "77.5" },
    126: { input: 1000, rem: "62.5", mobileVW: "312.5", tabletVW: "130.2", desktopVW: "78.1" },
    127: { input: 1008, rem: "63.0", mobileVW: "315.0", tabletVW: "131.3", desktopVW: "78.8" },
    128: { input: 1016, rem: "63.5", mobileVW: "317.5", tabletVW: "132.3", desktopVW: "79.4" },
    129: { input: 1024, rem: "64.0", mobileVW: "320.0", tabletVW: "133.3", desktopVW: "80.0" },
    130: { input: 1032, rem: "64.5", mobileVW: "322.5", tabletVW: "134.4", desktopVW: "80.6" },
    131: { input: 1040, rem: "65.0", mobileVW: "325.0", tabletVW: "135.4", desktopVW: "81.3" },
    132: { input: 1048, rem: "65.5", mobileVW: "327.5", tabletVW: "136.5", desktopVW: "81.9" },
    133: { input: 1056, rem: "66.0", mobileVW: "330.0", tabletVW: "137.5", desktopVW: "82.5" },
    134: { input: 1064, rem: "66.5", mobileVW: "332.5", tabletVW: "138.5", desktopVW: "83.1" },
    135: { input: 1072, rem: "67.0", mobileVW: "335.0", tabletVW: "139.6", desktopVW: "83.8" },
    136: { input: 1080, rem: "67.5", mobileVW: "337.5", tabletVW: "140.6", desktopVW: "84.4" },
    137: { input: 1088, rem: "68.0", mobileVW: "340.0", tabletVW: "141.7", desktopVW: "85.0" },
    138: { input: 1096, rem: "68.5", mobileVW: "342.5", tabletVW: "142.7", desktopVW: "85.6" },
    139: { input: 1104, rem: "69.0", mobileVW: "345.0", tabletVW: "143.8", desktopVW: "86.3" },
    140: { input: 1112, rem: "69.5", mobileVW: "347.5", tabletVW: "144.8", desktopVW: "86.9" },
    141: { input: 1120, rem: "70.0", mobileVW: "350.0", tabletVW: "145.8", desktopVW: "87.5" },
    142: { input: 1128, rem: "70.5", mobileVW: "352.5", tabletVW: "146.9", desktopVW: "88.1" },
    143: { input: 1136, rem: "71.0", mobileVW: "355.0", tabletVW: "147.9", desktopVW: "88.8" },
    144: { input: 1144, rem: "71.5", mobileVW: "357.5", tabletVW: "149.0", desktopVW: "89.4" },
    145: { input: 1152, rem: "72.0", mobileVW: "360.0", tabletVW: "150.0", desktopVW: "90.0" },
    146: { input: 1160, rem: "72.5", mobileVW: "362.5", tabletVW: "151.0", desktopVW: "90.6" },
    147: { input: 1168, rem: "73.0", mobileVW: "365.0", tabletVW: "152.1", desktopVW: "91.3" },
    148: { input: 1176, rem: "73.5", mobileVW: "367.5", tabletVW: "153.1", desktopVW: "91.9" },
    149: { input: 1184, rem: "74.0", mobileVW: "370.0", tabletVW: "154.2", desktopVW: "92.5" },
    150: { input: 1192, rem: "74.5", mobileVW: "372.5", tabletVW: "155.2", desktopVW: "93.1" },
    151: { input: 1200, rem: "75.0", mobileVW: "375.0", tabletVW: "156.3", desktopVW: "93.8" },
    153: { input: 1216, rem: "76.0", mobileVW: "380.0", tabletVW: "158.3", desktopVW: "95.0" },
    154: { input: 1224, rem: "76.5", mobileVW: "382.5", tabletVW: "159.4", desktopVW: "95.6" },
    155: { input: 1232, rem: "77.0", mobileVW: "385.0", tabletVW: "160.4", desktopVW: "96.3" },
    156: { input: 1240, rem: "77.5", mobileVW: "387.5", tabletVW: "161.5", desktopVW: "96.9" },
    157: { input: 1248, rem: "78.0", mobileVW: "390.0", tabletVW: "162.5", desktopVW: "97.5" },
    158: { input: 1256, rem: "78.5", mobileVW: "392.5", tabletVW: "163.5", desktopVW: "98.1" },
    159: { input: 1264, rem: "79.0", mobileVW: "395.0", tabletVW: "164.6", desktopVW: "98.8" },
    160: { input: 1272, rem: "79.5", mobileVW: "397.5", tabletVW: "165.6", desktopVW: "99.4" },

}];







/*
console.log("Input: " + unit[i].input + " px");
console.log("Rem: " + unit[i].rem + " rem");
console.log("Mobile Viewport: " + unit[i].mobileVW + " vw");
console.log("Tablet Viewport: " + unit[i].tabletVW + " vw");
console.log("Desktop Viewport: " + unit[i].desktopVW + " vw");
*/