const unit = [{}];
let byOne = [];
for (i = 0; i < 1500; i++) {
    byOne.push(i);
}

function createUnit() {
    for (i = 0; i < byOne.length; i++) {
        let newUnit = {
            input: byOne[i],
            rem: (byOne[i] / 16).toFixed(1),
            mobileVW: ((byOne[i] / 320) * 100).toFixed(1), //round to one decimal place
            tabletVW: ((byOne[i] / 768) * 100).toFixed(1), //round to one decimal place
            desktopVW: ((byOne[i] / 1280) * 100).toFixed(1), //round to one decimal place
            desktopxlVW: ((byOne[i] / 1440) * 100).toFixed(1), //round to one decimal place
        };
        unit.push(newUnit);
    }
}
createUnit(unit);
console.log(unit);
//for width and height I use min-width:__px (given in mockup) max-width:__px min-height:__px (given in mockup)  max-height:__vw for each breakpoint
//for padding and margin I use rem
//desktop column size: 
//MOBILE 320PX / 4 COLUMN GRID  2-16: 3-32: 3-48
//16| 48| 32 |48 |32 |48| 32|16
//TABLET 768PX / 6 COLUMN GRID 6-100: 7-24
//24| 100| 24| 100 |24 |100| 24 |100| 24 |100|24|100|24
//DESK 1280PX WIDTH / 12 COLUMN GRID  2-80: 11-24 : 12-68 
//80|24|68|24|68|24|68|24|68|24|68|24|68|24|68|24|68|24|68|24|68|24|68|80
//Output of unit  

/*
console.log("Input: " + unit[i].input + " px");
console.log("Rem: " + unit[i].rem + " rem");
console.log("Mobile Viewport: " + unit[i].mobileVW + " vw");
console.log("Tablet Viewport: " + unit[i].tabletVW + " vw");
console.log("Desktop Viewport: " + unit[i].desktopVW + " vw");
*/


/* ALL BY ONE 1-1280px */
/* 
const outPutOne = [{

1: {input: 0, rem: "0.0", mobileVW: "0.0", tabletVW: "0.0", desktopVW: "0.0"}
2: {input: 1, rem: "0.1", mobileVW: "0.3", tabletVW: "0.1", desktopVW: "0.1"}
3: {input: 2, rem: "0.1", mobileVW: "0.6", tabletVW: "0.3", desktopVW: "0.2"}
4: {input: 3, rem: "0.2", mobileVW: "0.9", tabletVW: "0.4", desktopVW: "0.2"}
5: {input: 4, rem: "0.3", mobileVW: "1.3", tabletVW: "0.5", desktopVW: "0.3"}
6: {input: 5, rem: "0.3", mobileVW: "1.6", tabletVW: "0.7", desktopVW: "0.4"}
7: {input: 6, rem: "0.4", mobileVW: "1.9", tabletVW: "0.8", desktopVW: "0.5"}
8: {input: 7, rem: "0.4", mobileVW: "2.2", tabletVW: "0.9", desktopVW: "0.5"}
9: {input: 8, rem: "0.5", mobileVW: "2.5", tabletVW: "1.0", desktopVW: "0.6"}
10: {input: 9, rem: "0.6", mobileVW: "2.8", tabletVW: "1.2", desktopVW: "0.7"}
11: {input: 10, rem: "0.6", mobileVW: "3.1", tabletVW: "1.3", desktopVW: "0.8"}
12: {input: 11, rem: "0.7", mobileVW: "3.4", tabletVW: "1.4", desktopVW: "0.9"}
13: {input: 12, rem: "0.8", mobileVW: "3.8", tabletVW: "1.6", desktopVW: "0.9"}
14: {input: 13, rem: "0.8", mobileVW: "4.1", tabletVW: "1.7", desktopVW: "1.0"}
15: {input: 14, rem: "0.9", mobileVW: "4.4", tabletVW: "1.8", desktopVW: "1.1"}
16: {input: 15, rem: "0.9", mobileVW: "4.7", tabletVW: "2.0", desktopVW: "1.2"}
17: {input: 16, rem: "1.0", mobileVW: "5.0", tabletVW: "2.1", desktopVW: "1.3"}
18: {input: 17, rem: "1.1", mobileVW: "5.3", tabletVW: "2.2", desktopVW: "1.3"}
19: {input: 18, rem: "1.1", mobileVW: "5.6", tabletVW: "2.3", desktopVW: "1.4"}
20: {input: 19, rem: "1.2", mobileVW: "5.9", tabletVW: "2.5", desktopVW: "1.5"}
21: {input: 20, rem: "1.3", mobileVW: "6.3", tabletVW: "2.6", desktopVW: "1.6"}
22: {input: 21, rem: "1.3", mobileVW: "6.6", tabletVW: "2.7", desktopVW: "1.6"}
23: {input: 22, rem: "1.4", mobileVW: "6.9", tabletVW: "2.9", desktopVW: "1.7"}
24: {input: 23, rem: "1.4", mobileVW: "7.2", tabletVW: "3.0", desktopVW: "1.8"}
25: {input: 24, rem: "1.5", mobileVW: "7.5", tabletVW: "3.1", desktopVW: "1.9"}
26: {input: 25, rem: "1.6", mobileVW: "7.8", tabletVW: "3.3", desktopVW: "2.0"}
27: {input: 26, rem: "1.6", mobileVW: "8.1", tabletVW: "3.4", desktopVW: "2.0"}
28: {input: 27, rem: "1.7", mobileVW: "8.4", tabletVW: "3.5", desktopVW: "2.1"}
29: {input: 28, rem: "1.8", mobileVW: "8.8", tabletVW: "3.6", desktopVW: "2.2"}
30: {input: 29, rem: "1.8", mobileVW: "9.1", tabletVW: "3.8", desktopVW: "2.3"}
31: {input: 30, rem: "1.9", mobileVW: "9.4", tabletVW: "3.9", desktopVW: "2.3"}
32: {input: 31, rem: "1.9", mobileVW: "9.7", tabletVW: "4.0", desktopVW: "2.4"}
33: {input: 32, rem: "2.0", mobileVW: "10.0", tabletVW: "4.2", desktopVW: "2.5"}
34: {input: 33, rem: "2.1", mobileVW: "10.3", tabletVW: "4.3", desktopVW: "2.6"}
35: {input: 34, rem: "2.1", mobileVW: "10.6", tabletVW: "4.4", desktopVW: "2.7"}
36: {input: 35, rem: "2.2", mobileVW: "10.9", tabletVW: "4.6", desktopVW: "2.7"}
37: {input: 36, rem: "2.3", mobileVW: "11.3", tabletVW: "4.7", desktopVW: "2.8"}
38: {input: 37, rem: "2.3", mobileVW: "11.6", tabletVW: "4.8", desktopVW: "2.9"}
39: {input: 38, rem: "2.4", mobileVW: "11.9", tabletVW: "4.9", desktopVW: "3.0"}
40: {input: 39, rem: "2.4", mobileVW: "12.2", tabletVW: "5.1", desktopVW: "3.0"}
41: {input: 40, rem: "2.5", mobileVW: "12.5", tabletVW: "5.2", desktopVW: "3.1"}
42: {input: 41, rem: "2.6", mobileVW: "12.8", tabletVW: "5.3", desktopVW: "3.2"}
43: {input: 42, rem: "2.6", mobileVW: "13.1", tabletVW: "5.5", desktopVW: "3.3"}
44: {input: 43, rem: "2.7", mobileVW: "13.4", tabletVW: "5.6", desktopVW: "3.4"}
45: {input: 44, rem: "2.8", mobileVW: "13.8", tabletVW: "5.7", desktopVW: "3.4"}
46: {input: 45, rem: "2.8", mobileVW: "14.1", tabletVW: "5.9", desktopVW: "3.5"}
47: {input: 46, rem: "2.9", mobileVW: "14.4", tabletVW: "6.0", desktopVW: "3.6"}
48: {input: 47, rem: "2.9", mobileVW: "14.7", tabletVW: "6.1", desktopVW: "3.7"}
49: {input: 48, rem: "3.0", mobileVW: "15.0", tabletVW: "6.3", desktopVW: "3.8"}
50: {input: 49, rem: "3.1", mobileVW: "15.3", tabletVW: "6.4", desktopVW: "3.8"}
51: {input: 50, rem: "3.1", mobileVW: "15.6", tabletVW: "6.5", desktopVW: "3.9"}
52: {input: 51, rem: "3.2", mobileVW: "15.9", tabletVW: "6.6", desktopVW: "4.0"}
53: {input: 52, rem: "3.3", mobileVW: "16.3", tabletVW: "6.8", desktopVW: "4.1"}
54: {input: 53, rem: "3.3", mobileVW: "16.6", tabletVW: "6.9", desktopVW: "4.1"}
55: {input: 54, rem: "3.4", mobileVW: "16.9", tabletVW: "7.0", desktopVW: "4.2"}
56: {input: 55, rem: "3.4", mobileVW: "17.2", tabletVW: "7.2", desktopVW: "4.3"}
57: {input: 56, rem: "3.5", mobileVW: "17.5", tabletVW: "7.3", desktopVW: "4.4"}
58: {input: 57, rem: "3.6", mobileVW: "17.8", tabletVW: "7.4", desktopVW: "4.5"}
59: {input: 58, rem: "3.6", mobileVW: "18.1", tabletVW: "7.6", desktopVW: "4.5"}
60: {input: 59, rem: "3.7", mobileVW: "18.4", tabletVW: "7.7", desktopVW: "4.6"}
61: {input: 60, rem: "3.8", mobileVW: "18.8", tabletVW: "7.8", desktopVW: "4.7"}
62: {input: 61, rem: "3.8", mobileVW: "19.1", tabletVW: "7.9", desktopVW: "4.8"}
63: {input: 62, rem: "3.9", mobileVW: "19.4", tabletVW: "8.1", desktopVW: "4.8"}
64: {input: 63, rem: "3.9", mobileVW: "19.7", tabletVW: "8.2", desktopVW: "4.9"}
65: {input: 64, rem: "4.0", mobileVW: "20.0", tabletVW: "8.3", desktopVW: "5.0"}
66: {input: 65, rem: "4.1", mobileVW: "20.3", tabletVW: "8.5", desktopVW: "5.1"}
67: {input: 66, rem: "4.1", mobileVW: "20.6", tabletVW: "8.6", desktopVW: "5.2"}
68: {input: 67, rem: "4.2", mobileVW: "20.9", tabletVW: "8.7", desktopVW: "5.2"}
69: {input: 68, rem: "4.3", mobileVW: "21.3", tabletVW: "8.9", desktopVW: "5.3"}
70: {input: 69, rem: "4.3", mobileVW: "21.6", tabletVW: "9.0", desktopVW: "5.4"}
71: {input: 70, rem: "4.4", mobileVW: "21.9", tabletVW: "9.1", desktopVW: "5.5"}
72: {input: 71, rem: "4.4", mobileVW: "22.2", tabletVW: "9.2", desktopVW: "5.5"}
73: {input: 72, rem: "4.5", mobileVW: "22.5", tabletVW: "9.4", desktopVW: "5.6"}
74: {input: 73, rem: "4.6", mobileVW: "22.8", tabletVW: "9.5", desktopVW: "5.7"}
75: {input: 74, rem: "4.6", mobileVW: "23.1", tabletVW: "9.6", desktopVW: "5.8"}
76: {input: 75, rem: "4.7", mobileVW: "23.4", tabletVW: "9.8", desktopVW: "5.9"}
77: {input: 76, rem: "4.8", mobileVW: "23.8", tabletVW: "9.9", desktopVW: "5.9"}
78: {input: 77, rem: "4.8", mobileVW: "24.1", tabletVW: "10.0", desktopVW: "6.0"}
79: {input: 78, rem: "4.9", mobileVW: "24.4", tabletVW: "10.2", desktopVW: "6.1"}
80: {input: 79, rem: "4.9", mobileVW: "24.7", tabletVW: "10.3", desktopVW: "6.2"}
81: {input: 80, rem: "5.0", mobileVW: "25.0", tabletVW: "10.4", desktopVW: "6.3"}
82: {input: 81, rem: "5.1", mobileVW: "25.3", tabletVW: "10.5", desktopVW: "6.3"}
83: {input: 82, rem: "5.1", mobileVW: "25.6", tabletVW: "10.7", desktopVW: "6.4"}
84: {input: 83, rem: "5.2", mobileVW: "25.9", tabletVW: "10.8", desktopVW: "6.5"}
85: {input: 84, rem: "5.3", mobileVW: "26.3", tabletVW: "10.9", desktopVW: "6.6"}
86: {input: 85, rem: "5.3", mobileVW: "26.6", tabletVW: "11.1", desktopVW: "6.6"}
87: {input: 86, rem: "5.4", mobileVW: "26.9", tabletVW: "11.2", desktopVW: "6.7"}
88: {input: 87, rem: "5.4", mobileVW: "27.2", tabletVW: "11.3", desktopVW: "6.8"}
89: {input: 88, rem: "5.5", mobileVW: "27.5", tabletVW: "11.5", desktopVW: "6.9"}
90: {input: 89, rem: "5.6", mobileVW: "27.8", tabletVW: "11.6", desktopVW: "7.0"}
91: {input: 90, rem: "5.6", mobileVW: "28.1", tabletVW: "11.7", desktopVW: "7.0"}
92: {input: 91, rem: "5.7", mobileVW: "28.4", tabletVW: "11.8", desktopVW: "7.1"}
93: {input: 92, rem: "5.8", mobileVW: "28.7", tabletVW: "12.0", desktopVW: "7.2"}
94: {input: 93, rem: "5.8", mobileVW: "29.1", tabletVW: "12.1", desktopVW: "7.3"}
95: {input: 94, rem: "5.9", mobileVW: "29.4", tabletVW: "12.2", desktopVW: "7.3"}
96: {input: 95, rem: "5.9", mobileVW: "29.7", tabletVW: "12.4", desktopVW: "7.4"}
97: {input: 96, rem: "6.0", mobileVW: "30.0", tabletVW: "12.5", desktopVW: "7.5"}
98: {input: 97, rem: "6.1", mobileVW: "30.3", tabletVW: "12.6", desktopVW: "7.6"}
99: {input: 98, rem: "6.1", mobileVW: "30.6", tabletVW: "12.8", desktopVW: "7.7"}
100: {input: 99, rem: "6.2", mobileVW: "30.9", tabletVW: "12.9", desktopVW: "7.7"}
101: {input: 100, rem: "6.3", mobileVW: "31.3", tabletVW: "13.0", desktopVW: "7.8"}
102: {input: 101, rem: "6.3", mobileVW: "31.6", tabletVW: "13.2", desktopVW: "7.9"}
103: {input: 102, rem: "6.4", mobileVW: "31.9", tabletVW: "13.3", desktopVW: "8.0"}
104: {input: 103, rem: "6.4", mobileVW: "32.2", tabletVW: "13.4", desktopVW: "8.0"}
105: {input: 104, rem: "6.5", mobileVW: "32.5", tabletVW: "13.5", desktopVW: "8.1"}
106: {input: 105, rem: "6.6", mobileVW: "32.8", tabletVW: "13.7", desktopVW: "8.2"}
107: {input: 106, rem: "6.6", mobileVW: "33.1", tabletVW: "13.8", desktopVW: "8.3"}
108: {input: 107, rem: "6.7", mobileVW: "33.4", tabletVW: "13.9", desktopVW: "8.4"}
109: {input: 108, rem: "6.8", mobileVW: "33.8", tabletVW: "14.1", desktopVW: "8.4"}
110: {input: 109, rem: "6.8", mobileVW: "34.1", tabletVW: "14.2", desktopVW: "8.5"}
111: {input: 110, rem: "6.9", mobileVW: "34.4", tabletVW: "14.3", desktopVW: "8.6"}
112: {input: 111, rem: "6.9", mobileVW: "34.7", tabletVW: "14.5", desktopVW: "8.7"}
113: {input: 112, rem: "7.0", mobileVW: "35.0", tabletVW: "14.6", desktopVW: "8.8"}
114: {input: 113, rem: "7.1", mobileVW: "35.3", tabletVW: "14.7", desktopVW: "8.8"}
115: {input: 114, rem: "7.1", mobileVW: "35.6", tabletVW: "14.8", desktopVW: "8.9"}
116: {input: 115, rem: "7.2", mobileVW: "35.9", tabletVW: "15.0", desktopVW: "9.0"}
117: {input: 116, rem: "7.3", mobileVW: "36.3", tabletVW: "15.1", desktopVW: "9.1"}
118: {input: 117, rem: "7.3", mobileVW: "36.6", tabletVW: "15.2", desktopVW: "9.1"}
119: {input: 118, rem: "7.4", mobileVW: "36.9", tabletVW: "15.4", desktopVW: "9.2"}
120: {input: 119, rem: "7.4", mobileVW: "37.2", tabletVW: "15.5", desktopVW: "9.3"}
121: {input: 120, rem: "7.5", mobileVW: "37.5", tabletVW: "15.6", desktopVW: "9.4"}
122: {input: 121, rem: "7.6", mobileVW: "37.8", tabletVW: "15.8", desktopVW: "9.5"}
123: {input: 122, rem: "7.6", mobileVW: "38.1", tabletVW: "15.9", desktopVW: "9.5"}
124: {input: 123, rem: "7.7", mobileVW: "38.4", tabletVW: "16.0", desktopVW: "9.6"}
125: {input: 124, rem: "7.8", mobileVW: "38.8", tabletVW: "16.1", desktopVW: "9.7"}
126: {input: 125, rem: "7.8", mobileVW: "39.1", tabletVW: "16.3", desktopVW: "9.8"}
127: {input: 126, rem: "7.9", mobileVW: "39.4", tabletVW: "16.4", desktopVW: "9.8"}
128: {input: 127, rem: "7.9", mobileVW: "39.7", tabletVW: "16.5", desktopVW: "9.9"}
129: {input: 128, rem: "8.0", mobileVW: "40.0", tabletVW: "16.7", desktopVW: "10.0"}
130: {input: 129, rem: "8.1", mobileVW: "40.3", tabletVW: "16.8", desktopVW: "10.1"}
131: {input: 130, rem: "8.1", mobileVW: "40.6", tabletVW: "16.9", desktopVW: "10.2"}
132: {input: 131, rem: "8.2", mobileVW: "40.9", tabletVW: "17.1", desktopVW: "10.2"}
133: {input: 132, rem: "8.3", mobileVW: "41.3", tabletVW: "17.2", desktopVW: "10.3"}
134: {input: 133, rem: "8.3", mobileVW: "41.6", tabletVW: "17.3", desktopVW: "10.4"}
135: {input: 134, rem: "8.4", mobileVW: "41.9", tabletVW: "17.4", desktopVW: "10.5"}
136: {input: 135, rem: "8.4", mobileVW: "42.2", tabletVW: "17.6", desktopVW: "10.5"}
137: {input: 136, rem: "8.5", mobileVW: "42.5", tabletVW: "17.7", desktopVW: "10.6"}
138: {input: 137, rem: "8.6", mobileVW: "42.8", tabletVW: "17.8", desktopVW: "10.7"}
139: {input: 138, rem: "8.6", mobileVW: "43.1", tabletVW: "18.0", desktopVW: "10.8"}
140: {input: 139, rem: "8.7", mobileVW: "43.4", tabletVW: "18.1", desktopVW: "10.9"}
141: {input: 140, rem: "8.8", mobileVW: "43.8", tabletVW: "18.2", desktopVW: "10.9"}
142: {input: 141, rem: "8.8", mobileVW: "44.1", tabletVW: "18.4", desktopVW: "11.0"}
143: {input: 142, rem: "8.9", mobileVW: "44.4", tabletVW: "18.5", desktopVW: "11.1"}
144: {input: 143, rem: "8.9", mobileVW: "44.7", tabletVW: "18.6", desktopVW: "11.2"}
145: {input: 144, rem: "9.0", mobileVW: "45.0", tabletVW: "18.8", desktopVW: "11.3"}
146: {input: 145, rem: "9.1", mobileVW: "45.3", tabletVW: "18.9", desktopVW: "11.3"}
147: {input: 146, rem: "9.1", mobileVW: "45.6", tabletVW: "19.0", desktopVW: "11.4"}
148: {input: 147, rem: "9.2", mobileVW: "45.9", tabletVW: "19.1", desktopVW: "11.5"}
149: {input: 148, rem: "9.3", mobileVW: "46.3", tabletVW: "19.3", desktopVW: "11.6"}
150: {input: 149, rem: "9.3", mobileVW: "46.6", tabletVW: "19.4", desktopVW: "11.6"}
151: {input: 150, rem: "9.4", mobileVW: "46.9", tabletVW: "19.5", desktopVW: "11.7"}
152: {input: 151, rem: "9.4", mobileVW: "47.2", tabletVW: "19.7", desktopVW: "11.8"}
153: {input: 152, rem: "9.5", mobileVW: "47.5", tabletVW: "19.8", desktopVW: "11.9"}
154: {input: 153, rem: "9.6", mobileVW: "47.8", tabletVW: "19.9", desktopVW: "12.0"}
155: {input: 154, rem: "9.6", mobileVW: "48.1", tabletVW: "20.1", desktopVW: "12.0"}
156: {input: 155, rem: "9.7", mobileVW: "48.4", tabletVW: "20.2", desktopVW: "12.1"}
157: {input: 156, rem: "9.8", mobileVW: "48.8", tabletVW: "20.3", desktopVW: "12.2"}
158: {input: 157, rem: "9.8", mobileVW: "49.1", tabletVW: "20.4", desktopVW: "12.3"}
159: {input: 158, rem: "9.9", mobileVW: "49.4", tabletVW: "20.6", desktopVW: "12.3"}
160: {input: 159, rem: "9.9", mobileVW: "49.7", tabletVW: "20.7", desktopVW: "12.4"}
161: {input: 160, rem: "10.0", mobileVW: "50.0", tabletVW: "20.8", desktopVW: "12.5"}
162: {input: 161, rem: "10.1", mobileVW: "50.3", tabletVW: "21.0", desktopVW: "12.6"}
163: {input: 162, rem: "10.1", mobileVW: "50.6", tabletVW: "21.1", desktopVW: "12.7"}
164: {input: 163, rem: "10.2", mobileVW: "50.9", tabletVW: "21.2", desktopVW: "12.7"}
165: {input: 164, rem: "10.3", mobileVW: "51.2", tabletVW: "21.4", desktopVW: "12.8"}
166: {input: 165, rem: "10.3", mobileVW: "51.6", tabletVW: "21.5", desktopVW: "12.9"}
167: {input: 166, rem: "10.4", mobileVW: "51.9", tabletVW: "21.6", desktopVW: "13.0"}
168: {input: 167, rem: "10.4", mobileVW: "52.2", tabletVW: "21.7", desktopVW: "13.0"}
169: {input: 168, rem: "10.5", mobileVW: "52.5", tabletVW: "21.9", desktopVW: "13.1"}
170: {input: 169, rem: "10.6", mobileVW: "52.8", tabletVW: "22.0", desktopVW: "13.2"}
171: {input: 170, rem: "10.6", mobileVW: "53.1", tabletVW: "22.1", desktopVW: "13.3"}
172: {input: 171, rem: "10.7", mobileVW: "53.4", tabletVW: "22.3", desktopVW: "13.4"}
173: {input: 172, rem: "10.8", mobileVW: "53.8", tabletVW: "22.4", desktopVW: "13.4"}
174: {input: 173, rem: "10.8", mobileVW: "54.1", tabletVW: "22.5", desktopVW: "13.5"}
175: {input: 174, rem: "10.9", mobileVW: "54.4", tabletVW: "22.7", desktopVW: "13.6"}
176: {input: 175, rem: "10.9", mobileVW: "54.7", tabletVW: "22.8", desktopVW: "13.7"}
177: {input: 176, rem: "11.0", mobileVW: "55.0", tabletVW: "22.9", desktopVW: "13.8"}
178: {input: 177, rem: "11.1", mobileVW: "55.3", tabletVW: "23.0", desktopVW: "13.8"}
179: {input: 178, rem: "11.1", mobileVW: "55.6", tabletVW: "23.2", desktopVW: "13.9"}
180: {input: 179, rem: "11.2", mobileVW: "55.9", tabletVW: "23.3", desktopVW: "14.0"}
181: {input: 180, rem: "11.3", mobileVW: "56.3", tabletVW: "23.4", desktopVW: "14.1"}
182: {input: 181, rem: "11.3", mobileVW: "56.6", tabletVW: "23.6", desktopVW: "14.1"}
183: {input: 182, rem: "11.4", mobileVW: "56.9", tabletVW: "23.7", desktopVW: "14.2"}
184: {input: 183, rem: "11.4", mobileVW: "57.2", tabletVW: "23.8", desktopVW: "14.3"}
185: {input: 184, rem: "11.5", mobileVW: "57.5", tabletVW: "24.0", desktopVW: "14.4"}
186: {input: 185, rem: "11.6", mobileVW: "57.8", tabletVW: "24.1", desktopVW: "14.5"}
187: {input: 186, rem: "11.6", mobileVW: "58.1", tabletVW: "24.2", desktopVW: "14.5"}
188: {input: 187, rem: "11.7", mobileVW: "58.4", tabletVW: "24.3", desktopVW: "14.6"}
189: {input: 188, rem: "11.8", mobileVW: "58.8", tabletVW: "24.5", desktopVW: "14.7"}
190: {input: 189, rem: "11.8", mobileVW: "59.1", tabletVW: "24.6", desktopVW: "14.8"}
191: {input: 190, rem: "11.9", mobileVW: "59.4", tabletVW: "24.7", desktopVW: "14.8"}
192: {input: 191, rem: "11.9", mobileVW: "59.7", tabletVW: "24.9", desktopVW: "14.9"}
193: {input: 192, rem: "12.0", mobileVW: "60.0", tabletVW: "25.0", desktopVW: "15.0"}
194: {input: 193, rem: "12.1", mobileVW: "60.3", tabletVW: "25.1", desktopVW: "15.1"}
195: {input: 194, rem: "12.1", mobileVW: "60.6", tabletVW: "25.3", desktopVW: "15.2"}
196: {input: 195, rem: "12.2", mobileVW: "60.9", tabletVW: "25.4", desktopVW: "15.2"}
197: {input: 196, rem: "12.3", mobileVW: "61.3", tabletVW: "25.5", desktopVW: "15.3"}
198: {input: 197, rem: "12.3", mobileVW: "61.6", tabletVW: "25.7", desktopVW: "15.4"}
199: {input: 198, rem: "12.4", mobileVW: "61.9", tabletVW: "25.8", desktopVW: "15.5"}
200: {input: 199, rem: "12.4", mobileVW: "62.2", tabletVW: "25.9", desktopVW: "15.5"}
201: {input: 200, rem: "12.5", mobileVW: "62.5", tabletVW: "26.0", desktopVW: "15.6"}
202: {input: 201, rem: "12.6", mobileVW: "62.8", tabletVW: "26.2", desktopVW: "15.7"}
203: {input: 202, rem: "12.6", mobileVW: "63.1", tabletVW: "26.3", desktopVW: "15.8"}
204: {input: 203, rem: "12.7", mobileVW: "63.4", tabletVW: "26.4", desktopVW: "15.9"}
205: {input: 204, rem: "12.8", mobileVW: "63.7", tabletVW: "26.6", desktopVW: "15.9"}
206: {input: 205, rem: "12.8", mobileVW: "64.1", tabletVW: "26.7", desktopVW: "16.0"}
207: {input: 206, rem: "12.9", mobileVW: "64.4", tabletVW: "26.8", desktopVW: "16.1"}
208: {input: 207, rem: "12.9", mobileVW: "64.7", tabletVW: "27.0", desktopVW: "16.2"}
209: {input: 208, rem: "13.0", mobileVW: "65.0", tabletVW: "27.1", desktopVW: "16.3"}
210: {input: 209, rem: "13.1", mobileVW: "65.3", tabletVW: "27.2", desktopVW: "16.3"}
211: {input: 210, rem: "13.1", mobileVW: "65.6", tabletVW: "27.3", desktopVW: "16.4"}
212: {input: 211, rem: "13.2", mobileVW: "65.9", tabletVW: "27.5", desktopVW: "16.5"}
213: {input: 212, rem: "13.3", mobileVW: "66.3", tabletVW: "27.6", desktopVW: "16.6"}
214: {input: 213, rem: "13.3", mobileVW: "66.6", tabletVW: "27.7", desktopVW: "16.6"}
215: {input: 214, rem: "13.4", mobileVW: "66.9", tabletVW: "27.9", desktopVW: "16.7"}
216: {input: 215, rem: "13.4", mobileVW: "67.2", tabletVW: "28.0", desktopVW: "16.8"}
217: {input: 216, rem: "13.5", mobileVW: "67.5", tabletVW: "28.1", desktopVW: "16.9"}
218: {input: 217, rem: "13.6", mobileVW: "67.8", tabletVW: "28.3", desktopVW: "17.0"}
219: {input: 218, rem: "13.6", mobileVW: "68.1", tabletVW: "28.4", desktopVW: "17.0"}
220: {input: 219, rem: "13.7", mobileVW: "68.4", tabletVW: "28.5", desktopVW: "17.1"}
221: {input: 220, rem: "13.8", mobileVW: "68.8", tabletVW: "28.6", desktopVW: "17.2"}
222: {input: 221, rem: "13.8", mobileVW: "69.1", tabletVW: "28.8", desktopVW: "17.3"}
223: {input: 222, rem: "13.9", mobileVW: "69.4", tabletVW: "28.9", desktopVW: "17.3"}
224: {input: 223, rem: "13.9", mobileVW: "69.7", tabletVW: "29.0", desktopVW: "17.4"}
225: {input: 224, rem: "14.0", mobileVW: "70.0", tabletVW: "29.2", desktopVW: "17.5"}
226: {input: 225, rem: "14.1", mobileVW: "70.3", tabletVW: "29.3", desktopVW: "17.6"}
227: {input: 226, rem: "14.1", mobileVW: "70.6", tabletVW: "29.4", desktopVW: "17.7"}
228: {input: 227, rem: "14.2", mobileVW: "70.9", tabletVW: "29.6", desktopVW: "17.7"}
229: {input: 228, rem: "14.3", mobileVW: "71.3", tabletVW: "29.7", desktopVW: "17.8"}
230: {input: 229, rem: "14.3", mobileVW: "71.6", tabletVW: "29.8", desktopVW: "17.9"}
231: {input: 230, rem: "14.4", mobileVW: "71.9", tabletVW: "29.9", desktopVW: "18.0"}
232: {input: 231, rem: "14.4", mobileVW: "72.2", tabletVW: "30.1", desktopVW: "18.0"}
233: {input: 232, rem: "14.5", mobileVW: "72.5", tabletVW: "30.2", desktopVW: "18.1"}
234: {input: 233, rem: "14.6", mobileVW: "72.8", tabletVW: "30.3", desktopVW: "18.2"}
235: {input: 234, rem: "14.6", mobileVW: "73.1", tabletVW: "30.5", desktopVW: "18.3"}
236: {input: 235, rem: "14.7", mobileVW: "73.4", tabletVW: "30.6", desktopVW: "18.4"}
237: {input: 236, rem: "14.8", mobileVW: "73.8", tabletVW: "30.7", desktopVW: "18.4"}
238: {input: 237, rem: "14.8", mobileVW: "74.1", tabletVW: "30.9", desktopVW: "18.5"}
239: {input: 238, rem: "14.9", mobileVW: "74.4", tabletVW: "31.0", desktopVW: "18.6"}
240: {input: 239, rem: "14.9", mobileVW: "74.7", tabletVW: "31.1", desktopVW: "18.7"}
241: {input: 240, rem: "15.0", mobileVW: "75.0", tabletVW: "31.3", desktopVW: "18.8"}
242: {input: 241, rem: "15.1", mobileVW: "75.3", tabletVW: "31.4", desktopVW: "18.8"}
243: {input: 242, rem: "15.1", mobileVW: "75.6", tabletVW: "31.5", desktopVW: "18.9"}
244: {input: 243, rem: "15.2", mobileVW: "75.9", tabletVW: "31.6", desktopVW: "19.0"}
245: {input: 244, rem: "15.3", mobileVW: "76.3", tabletVW: "31.8", desktopVW: "19.1"}
246: {input: 245, rem: "15.3", mobileVW: "76.6", tabletVW: "31.9", desktopVW: "19.1"}
247: {input: 246, rem: "15.4", mobileVW: "76.9", tabletVW: "32.0", desktopVW: "19.2"}
248: {input: 247, rem: "15.4", mobileVW: "77.2", tabletVW: "32.2", desktopVW: "19.3"}
249: {input: 248, rem: "15.5", mobileVW: "77.5", tabletVW: "32.3", desktopVW: "19.4"}
250: {input: 249, rem: "15.6", mobileVW: "77.8", tabletVW: "32.4", desktopVW: "19.5"}
251: {input: 250, rem: "15.6", mobileVW: "78.1", tabletVW: "32.6", desktopVW: "19.5"}
252: {input: 251, rem: "15.7", mobileVW: "78.4", tabletVW: "32.7", desktopVW: "19.6"}
253: {input: 252, rem: "15.8", mobileVW: "78.8", tabletVW: "32.8", desktopVW: "19.7"}
254: {input: 253, rem: "15.8", mobileVW: "79.1", tabletVW: "32.9", desktopVW: "19.8"}
255: {input: 254, rem: "15.9", mobileVW: "79.4", tabletVW: "33.1", desktopVW: "19.8"}
256: {input: 255, rem: "15.9", mobileVW: "79.7", tabletVW: "33.2", desktopVW: "19.9"}
257: {input: 256, rem: "16.0", mobileVW: "80.0", tabletVW: "33.3", desktopVW: "20.0"}
258: {input: 257, rem: "16.1", mobileVW: "80.3", tabletVW: "33.5", desktopVW: "20.1"}
259: {input: 258, rem: "16.1", mobileVW: "80.6", tabletVW: "33.6", desktopVW: "20.2"}
260: {input: 259, rem: "16.2", mobileVW: "80.9", tabletVW: "33.7", desktopVW: "20.2"}
261: {input: 260, rem: "16.3", mobileVW: "81.3", tabletVW: "33.9", desktopVW: "20.3"}
262: {input: 261, rem: "16.3", mobileVW: "81.6", tabletVW: "34.0", desktopVW: "20.4"}
263: {input: 262, rem: "16.4", mobileVW: "81.9", tabletVW: "34.1", desktopVW: "20.5"}
264: {input: 263, rem: "16.4", mobileVW: "82.2", tabletVW: "34.2", desktopVW: "20.5"}
265: {input: 264, rem: "16.5", mobileVW: "82.5", tabletVW: "34.4", desktopVW: "20.6"}
266: {input: 265, rem: "16.6", mobileVW: "82.8", tabletVW: "34.5", desktopVW: "20.7"}
267: {input: 266, rem: "16.6", mobileVW: "83.1", tabletVW: "34.6", desktopVW: "20.8"}
268: {input: 267, rem: "16.7", mobileVW: "83.4", tabletVW: "34.8", desktopVW: "20.9"}
269: {input: 268, rem: "16.8", mobileVW: "83.8", tabletVW: "34.9", desktopVW: "20.9"}
270: {input: 269, rem: "16.8", mobileVW: "84.1", tabletVW: "35.0", desktopVW: "21.0"}
271: {input: 270, rem: "16.9", mobileVW: "84.4", tabletVW: "35.2", desktopVW: "21.1"}
272: {input: 271, rem: "16.9", mobileVW: "84.7", tabletVW: "35.3", desktopVW: "21.2"}
273: {input: 272, rem: "17.0", mobileVW: "85.0", tabletVW: "35.4", desktopVW: "21.3"}
274: {input: 273, rem: "17.1", mobileVW: "85.3", tabletVW: "35.5", desktopVW: "21.3"}
275: {input: 274, rem: "17.1", mobileVW: "85.6", tabletVW: "35.7", desktopVW: "21.4"}
276: {input: 275, rem: "17.2", mobileVW: "85.9", tabletVW: "35.8", desktopVW: "21.5"}
277: {input: 276, rem: "17.3", mobileVW: "86.3", tabletVW: "35.9", desktopVW: "21.6"}
278: {input: 277, rem: "17.3", mobileVW: "86.6", tabletVW: "36.1", desktopVW: "21.6"}
279: {input: 278, rem: "17.4", mobileVW: "86.9", tabletVW: "36.2", desktopVW: "21.7"}
280: {input: 279, rem: "17.4", mobileVW: "87.2", tabletVW: "36.3", desktopVW: "21.8"}
281: {input: 280, rem: "17.5", mobileVW: "87.5", tabletVW: "36.5", desktopVW: "21.9"}
282: {input: 281, rem: "17.6", mobileVW: "87.8", tabletVW: "36.6", desktopVW: "22.0"}
283: {input: 282, rem: "17.6", mobileVW: "88.1", tabletVW: "36.7", desktopVW: "22.0"}
284: {input: 283, rem: "17.7", mobileVW: "88.4", tabletVW: "36.8", desktopVW: "22.1"}
285: {input: 284, rem: "17.8", mobileVW: "88.8", tabletVW: "37.0", desktopVW: "22.2"}
286: {input: 285, rem: "17.8", mobileVW: "89.1", tabletVW: "37.1", desktopVW: "22.3"}
287: {input: 286, rem: "17.9", mobileVW: "89.4", tabletVW: "37.2", desktopVW: "22.3"}
288: {input: 287, rem: "17.9", mobileVW: "89.7", tabletVW: "37.4", desktopVW: "22.4"}
289: {input: 288, rem: "18.0", mobileVW: "90.0", tabletVW: "37.5", desktopVW: "22.5"}
290: {input: 289, rem: "18.1", mobileVW: "90.3", tabletVW: "37.6", desktopVW: "22.6"}
291: {input: 290, rem: "18.1", mobileVW: "90.6", tabletVW: "37.8", desktopVW: "22.7"}
292: {input: 291, rem: "18.2", mobileVW: "90.9", tabletVW: "37.9", desktopVW: "22.7"}
293: {input: 292, rem: "18.3", mobileVW: "91.3", tabletVW: "38.0", desktopVW: "22.8"}
294: {input: 293, rem: "18.3", mobileVW: "91.6", tabletVW: "38.2", desktopVW: "22.9"}
295: {input: 294, rem: "18.4", mobileVW: "91.9", tabletVW: "38.3", desktopVW: "23.0"}
296: {input: 295, rem: "18.4", mobileVW: "92.2", tabletVW: "38.4", desktopVW: "23.0"}
297: {input: 296, rem: "18.5", mobileVW: "92.5", tabletVW: "38.5", desktopVW: "23.1"}
298: {input: 297, rem: "18.6", mobileVW: "92.8", tabletVW: "38.7", desktopVW: "23.2"}
299: {input: 298, rem: "18.6", mobileVW: "93.1", tabletVW: "38.8", desktopVW: "23.3"}
300: {input: 299, rem: "18.7", mobileVW: "93.4", tabletVW: "38.9", desktopVW: "23.4"}
301: {input: 300, rem: "18.8", mobileVW: "93.8", tabletVW: "39.1", desktopVW: "23.4"}
302: {input: 301, rem: "18.8", mobileVW: "94.1", tabletVW: "39.2", desktopVW: "23.5"}
303: {input: 302, rem: "18.9", mobileVW: "94.4", tabletVW: "39.3", desktopVW: "23.6"}
304: {input: 303, rem: "18.9", mobileVW: "94.7", tabletVW: "39.5", desktopVW: "23.7"}
305: {input: 304, rem: "19.0", mobileVW: "95.0", tabletVW: "39.6", desktopVW: "23.8"}
306: {input: 305, rem: "19.1", mobileVW: "95.3", tabletVW: "39.7", desktopVW: "23.8"}
307: {input: 306, rem: "19.1", mobileVW: "95.6", tabletVW: "39.8", desktopVW: "23.9"}
308: {input: 307, rem: "19.2", mobileVW: "95.9", tabletVW: "40.0", desktopVW: "24.0"}
309: {input: 308, rem: "19.3", mobileVW: "96.3", tabletVW: "40.1", desktopVW: "24.1"}
310: {input: 309, rem: "19.3", mobileVW: "96.6", tabletVW: "40.2", desktopVW: "24.1"}
311: {input: 310, rem: "19.4", mobileVW: "96.9", tabletVW: "40.4", desktopVW: "24.2"}
312: {input: 311, rem: "19.4", mobileVW: "97.2", tabletVW: "40.5", desktopVW: "24.3"}
313: {input: 312, rem: "19.5", mobileVW: "97.5", tabletVW: "40.6", desktopVW: "24.4"}
314: {input: 313, rem: "19.6", mobileVW: "97.8", tabletVW: "40.8", desktopVW: "24.5"}
315: {input: 314, rem: "19.6", mobileVW: "98.1", tabletVW: "40.9", desktopVW: "24.5"}
316: {input: 315, rem: "19.7", mobileVW: "98.4", tabletVW: "41.0", desktopVW: "24.6"}
317: {input: 316, rem: "19.8", mobileVW: "98.8", tabletVW: "41.1", desktopVW: "24.7"}
318: {input: 317, rem: "19.8", mobileVW: "99.1", tabletVW: "41.3", desktopVW: "24.8"}
319: {input: 318, rem: "19.9", mobileVW: "99.4", tabletVW: "41.4", desktopVW: "24.8"}
320: {input: 319, rem: "19.9", mobileVW: "99.7", tabletVW: "41.5", desktopVW: "24.9"}
321: {input: 320, rem: "20.0", mobileVW: "100.0", tabletVW: "41.7", desktopVW: "25.0"}
322: {input: 321, rem: "20.1", mobileVW: "100.3", tabletVW: "41.8", desktopVW: "25.1"}
323: {input: 322, rem: "20.1", mobileVW: "100.6", tabletVW: "41.9", desktopVW: "25.2"}
324: {input: 323, rem: "20.2", mobileVW: "100.9", tabletVW: "42.1", desktopVW: "25.2"}
325: {input: 324, rem: "20.3", mobileVW: "101.3", tabletVW: "42.2", desktopVW: "25.3"}
326: {input: 325, rem: "20.3", mobileVW: "101.6", tabletVW: "42.3", desktopVW: "25.4"}
327: {input: 326, rem: "20.4", mobileVW: "101.9", tabletVW: "42.4", desktopVW: "25.5"}
328: {input: 327, rem: "20.4", mobileVW: "102.2", tabletVW: "42.6", desktopVW: "25.5"}
329: {input: 328, rem: "20.5", mobileVW: "102.5", tabletVW: "42.7", desktopVW: "25.6"}
330: {input: 329, rem: "20.6", mobileVW: "102.8", tabletVW: "42.8", desktopVW: "25.7"}
331: {input: 330, rem: "20.6", mobileVW: "103.1", tabletVW: "43.0", desktopVW: "25.8"}
332: {input: 331, rem: "20.7", mobileVW: "103.4", tabletVW: "43.1", desktopVW: "25.9"}
333: {input: 332, rem: "20.8", mobileVW: "103.8", tabletVW: "43.2", desktopVW: "25.9"}
334: {input: 333, rem: "20.8", mobileVW: "104.1", tabletVW: "43.4", desktopVW: "26.0"}
335: {input: 334, rem: "20.9", mobileVW: "104.4", tabletVW: "43.5", desktopVW: "26.1"}
336: {input: 335, rem: "20.9", mobileVW: "104.7", tabletVW: "43.6", desktopVW: "26.2"}
337: {input: 336, rem: "21.0", mobileVW: "105.0", tabletVW: "43.8", desktopVW: "26.3"}
338: {input: 337, rem: "21.1", mobileVW: "105.3", tabletVW: "43.9", desktopVW: "26.3"}
339: {input: 338, rem: "21.1", mobileVW: "105.6", tabletVW: "44.0", desktopVW: "26.4"}
340: {input: 339, rem: "21.2", mobileVW: "105.9", tabletVW: "44.1", desktopVW: "26.5"}
341: {input: 340, rem: "21.3", mobileVW: "106.3", tabletVW: "44.3", desktopVW: "26.6"}
342: {input: 341, rem: "21.3", mobileVW: "106.6", tabletVW: "44.4", desktopVW: "26.6"}
343: {input: 342, rem: "21.4", mobileVW: "106.9", tabletVW: "44.5", desktopVW: "26.7"}
344: {input: 343, rem: "21.4", mobileVW: "107.2", tabletVW: "44.7", desktopVW: "26.8"}
345: {input: 344, rem: "21.5", mobileVW: "107.5", tabletVW: "44.8", desktopVW: "26.9"}
346: {input: 345, rem: "21.6", mobileVW: "107.8", tabletVW: "44.9", desktopVW: "27.0"}
347: {input: 346, rem: "21.6", mobileVW: "108.1", tabletVW: "45.1", desktopVW: "27.0"}
348: {input: 347, rem: "21.7", mobileVW: "108.4", tabletVW: "45.2", desktopVW: "27.1"}
349: {input: 348, rem: "21.8", mobileVW: "108.7", tabletVW: "45.3", desktopVW: "27.2"}
350: {input: 349, rem: "21.8", mobileVW: "109.1", tabletVW: "45.4", desktopVW: "27.3"}
351: {input: 350, rem: "21.9", mobileVW: "109.4", tabletVW: "45.6", desktopVW: "27.3"}
352: {input: 351, rem: "21.9", mobileVW: "109.7", tabletVW: "45.7", desktopVW: "27.4"}
353: {input: 352, rem: "22.0", mobileVW: "110.0", tabletVW: "45.8", desktopVW: "27.5"}
354: {input: 353, rem: "22.1", mobileVW: "110.3", tabletVW: "46.0", desktopVW: "27.6"}
355: {input: 354, rem: "22.1", mobileVW: "110.6", tabletVW: "46.1", desktopVW: "27.7"}
356: {input: 355, rem: "22.2", mobileVW: "110.9", tabletVW: "46.2", desktopVW: "27.7"}
357: {input: 356, rem: "22.3", mobileVW: "111.3", tabletVW: "46.4", desktopVW: "27.8"}
358: {input: 357, rem: "22.3", mobileVW: "111.6", tabletVW: "46.5", desktopVW: "27.9"}
359: {input: 358, rem: "22.4", mobileVW: "111.9", tabletVW: "46.6", desktopVW: "28.0"}
360: {input: 359, rem: "22.4", mobileVW: "112.2", tabletVW: "46.7", desktopVW: "28.0"}
361: {input: 360, rem: "22.5", mobileVW: "112.5", tabletVW: "46.9", desktopVW: "28.1"}
362: {input: 361, rem: "22.6", mobileVW: "112.8", tabletVW: "47.0", desktopVW: "28.2"}
363: {input: 362, rem: "22.6", mobileVW: "113.1", tabletVW: "47.1", desktopVW: "28.3"}
364: {input: 363, rem: "22.7", mobileVW: "113.4", tabletVW: "47.3", desktopVW: "28.4"}
365: {input: 364, rem: "22.8", mobileVW: "113.8", tabletVW: "47.4", desktopVW: "28.4"}
366: {input: 365, rem: "22.8", mobileVW: "114.1", tabletVW: "47.5", desktopVW: "28.5"}
367: {input: 366, rem: "22.9", mobileVW: "114.4", tabletVW: "47.7", desktopVW: "28.6"}
368: {input: 367, rem: "22.9", mobileVW: "114.7", tabletVW: "47.8", desktopVW: "28.7"}
369: {input: 368, rem: "23.0", mobileVW: "115.0", tabletVW: "47.9", desktopVW: "28.7"}
370: {input: 369, rem: "23.1", mobileVW: "115.3", tabletVW: "48.0", desktopVW: "28.8"}
371: {input: 370, rem: "23.1", mobileVW: "115.6", tabletVW: "48.2", desktopVW: "28.9"}
372: {input: 371, rem: "23.2", mobileVW: "115.9", tabletVW: "48.3", desktopVW: "29.0"}
373: {input: 372, rem: "23.3", mobileVW: "116.3", tabletVW: "48.4", desktopVW: "29.1"}
374: {input: 373, rem: "23.3", mobileVW: "116.6", tabletVW: "48.6", desktopVW: "29.1"}
375: {input: 374, rem: "23.4", mobileVW: "116.9", tabletVW: "48.7", desktopVW: "29.2"}
376: {input: 375, rem: "23.4", mobileVW: "117.2", tabletVW: "48.8", desktopVW: "29.3"}
377: {input: 376, rem: "23.5", mobileVW: "117.5", tabletVW: "49.0", desktopVW: "29.4"}
378: {input: 377, rem: "23.6", mobileVW: "117.8", tabletVW: "49.1", desktopVW: "29.5"}
379: {input: 378, rem: "23.6", mobileVW: "118.1", tabletVW: "49.2", desktopVW: "29.5"}
380: {input: 379, rem: "23.7", mobileVW: "118.4", tabletVW: "49.3", desktopVW: "29.6"}
381: {input: 380, rem: "23.8", mobileVW: "118.8", tabletVW: "49.5", desktopVW: "29.7"}
382: {input: 381, rem: "23.8", mobileVW: "119.1", tabletVW: "49.6", desktopVW: "29.8"}
383: {input: 382, rem: "23.9", mobileVW: "119.4", tabletVW: "49.7", desktopVW: "29.8"}
384: {input: 383, rem: "23.9", mobileVW: "119.7", tabletVW: "49.9", desktopVW: "29.9"}
385: {input: 384, rem: "24.0", mobileVW: "120.0", tabletVW: "50.0", desktopVW: "30.0"}
386: {input: 385, rem: "24.1", mobileVW: "120.3", tabletVW: "50.1", desktopVW: "30.1"}
387: {input: 386, rem: "24.1", mobileVW: "120.6", tabletVW: "50.3", desktopVW: "30.2"}
388: {input: 387, rem: "24.2", mobileVW: "120.9", tabletVW: "50.4", desktopVW: "30.2"}
389: {input: 388, rem: "24.3", mobileVW: "121.2", tabletVW: "50.5", desktopVW: "30.3"}
390: {input: 389, rem: "24.3", mobileVW: "121.6", tabletVW: "50.7", desktopVW: "30.4"}
391: {input: 390, rem: "24.4", mobileVW: "121.9", tabletVW: "50.8", desktopVW: "30.5"}
392: {input: 391, rem: "24.4", mobileVW: "122.2", tabletVW: "50.9", desktopVW: "30.5"}
393: {input: 392, rem: "24.5", mobileVW: "122.5", tabletVW: "51.0", desktopVW: "30.6"}
394: {input: 393, rem: "24.6", mobileVW: "122.8", tabletVW: "51.2", desktopVW: "30.7"}
395: {input: 394, rem: "24.6", mobileVW: "123.1", tabletVW: "51.3", desktopVW: "30.8"}
396: {input: 395, rem: "24.7", mobileVW: "123.4", tabletVW: "51.4", desktopVW: "30.9"}
397: {input: 396, rem: "24.8", mobileVW: "123.8", tabletVW: "51.6", desktopVW: "30.9"}
398: {input: 397, rem: "24.8", mobileVW: "124.1", tabletVW: "51.7", desktopVW: "31.0"}
399: {input: 398, rem: "24.9", mobileVW: "124.4", tabletVW: "51.8", desktopVW: "31.1"}
400: {input: 399, rem: "24.9", mobileVW: "124.7", tabletVW: "52.0", desktopVW: "31.2"}
401: {input: 400, rem: "25.0", mobileVW: "125.0", tabletVW: "52.1", desktopVW: "31.3"}
402: {input: 401, rem: "25.1", mobileVW: "125.3", tabletVW: "52.2", desktopVW: "31.3"}
403: {input: 402, rem: "25.1", mobileVW: "125.6", tabletVW: "52.3", desktopVW: "31.4"}
404: {input: 403, rem: "25.2", mobileVW: "125.9", tabletVW: "52.5", desktopVW: "31.5"}
405: {input: 404, rem: "25.3", mobileVW: "126.3", tabletVW: "52.6", desktopVW: "31.6"}
406: {input: 405, rem: "25.3", mobileVW: "126.6", tabletVW: "52.7", desktopVW: "31.6"}
407: {input: 406, rem: "25.4", mobileVW: "126.9", tabletVW: "52.9", desktopVW: "31.7"}
408: {input: 407, rem: "25.4", mobileVW: "127.2", tabletVW: "53.0", desktopVW: "31.8"}
409: {input: 408, rem: "25.5", mobileVW: "127.5", tabletVW: "53.1", desktopVW: "31.9"}
410: {input: 409, rem: "25.6", mobileVW: "127.8", tabletVW: "53.3", desktopVW: "32.0"}
411: {input: 410, rem: "25.6", mobileVW: "128.1", tabletVW: "53.4", desktopVW: "32.0"}
412: {input: 411, rem: "25.7", mobileVW: "128.4", tabletVW: "53.5", desktopVW: "32.1"}
413: {input: 412, rem: "25.8", mobileVW: "128.8", tabletVW: "53.6", desktopVW: "32.2"}
414: {input: 413, rem: "25.8", mobileVW: "129.1", tabletVW: "53.8", desktopVW: "32.3"}
415: {input: 414, rem: "25.9", mobileVW: "129.4", tabletVW: "53.9", desktopVW: "32.3"}
416: {input: 415, rem: "25.9", mobileVW: "129.7", tabletVW: "54.0", desktopVW: "32.4"}
417: {input: 416, rem: "26.0", mobileVW: "130.0", tabletVW: "54.2", desktopVW: "32.5"}
418: {input: 417, rem: "26.1", mobileVW: "130.3", tabletVW: "54.3", desktopVW: "32.6"}
419: {input: 418, rem: "26.1", mobileVW: "130.6", tabletVW: "54.4", desktopVW: "32.7"}
420: {input: 419, rem: "26.2", mobileVW: "130.9", tabletVW: "54.6", desktopVW: "32.7"}
421: {input: 420, rem: "26.3", mobileVW: "131.3", tabletVW: "54.7", desktopVW: "32.8"}
422: {input: 421, rem: "26.3", mobileVW: "131.6", tabletVW: "54.8", desktopVW: "32.9"}
423: {input: 422, rem: "26.4", mobileVW: "131.9", tabletVW: "54.9", desktopVW: "33.0"}
424: {input: 423, rem: "26.4", mobileVW: "132.2", tabletVW: "55.1", desktopVW: "33.0"}
425: {input: 424, rem: "26.5", mobileVW: "132.5", tabletVW: "55.2", desktopVW: "33.1"}
426: {input: 425, rem: "26.6", mobileVW: "132.8", tabletVW: "55.3", desktopVW: "33.2"}
427: {input: 426, rem: "26.6", mobileVW: "133.1", tabletVW: "55.5", desktopVW: "33.3"}
428: {input: 427, rem: "26.7", mobileVW: "133.4", tabletVW: "55.6", desktopVW: "33.4"}
429: {input: 428, rem: "26.8", mobileVW: "133.8", tabletVW: "55.7", desktopVW: "33.4"}
430: {input: 429, rem: "26.8", mobileVW: "134.1", tabletVW: "55.9", desktopVW: "33.5"}
431: {input: 430, rem: "26.9", mobileVW: "134.4", tabletVW: "56.0", desktopVW: "33.6"}
432: {input: 431, rem: "26.9", mobileVW: "134.7", tabletVW: "56.1", desktopVW: "33.7"}
433: {input: 432, rem: "27.0", mobileVW: "135.0", tabletVW: "56.3", desktopVW: "33.8"}
434: {input: 433, rem: "27.1", mobileVW: "135.3", tabletVW: "56.4", desktopVW: "33.8"}
435: {input: 434, rem: "27.1", mobileVW: "135.6", tabletVW: "56.5", desktopVW: "33.9"}
436: {input: 435, rem: "27.2", mobileVW: "135.9", tabletVW: "56.6", desktopVW: "34.0"}
437: {input: 436, rem: "27.3", mobileVW: "136.3", tabletVW: "56.8", desktopVW: "34.1"}
438: {input: 437, rem: "27.3", mobileVW: "136.6", tabletVW: "56.9", desktopVW: "34.1"}
439: {input: 438, rem: "27.4", mobileVW: "136.9", tabletVW: "57.0", desktopVW: "34.2"}
440: {input: 439, rem: "27.4", mobileVW: "137.2", tabletVW: "57.2", desktopVW: "34.3"}
441: {input: 440, rem: "27.5", mobileVW: "137.5", tabletVW: "57.3", desktopVW: "34.4"}
442: {input: 441, rem: "27.6", mobileVW: "137.8", tabletVW: "57.4", desktopVW: "34.5"}
443: {input: 442, rem: "27.6", mobileVW: "138.1", tabletVW: "57.6", desktopVW: "34.5"}
444: {input: 443, rem: "27.7", mobileVW: "138.4", tabletVW: "57.7", desktopVW: "34.6"}
445: {input: 444, rem: "27.8", mobileVW: "138.8", tabletVW: "57.8", desktopVW: "34.7"}
446: {input: 445, rem: "27.8", mobileVW: "139.1", tabletVW: "57.9", desktopVW: "34.8"}
447: {input: 446, rem: "27.9", mobileVW: "139.4", tabletVW: "58.1", desktopVW: "34.8"}
448: {input: 447, rem: "27.9", mobileVW: "139.7", tabletVW: "58.2", desktopVW: "34.9"}
449: {input: 448, rem: "28.0", mobileVW: "140.0", tabletVW: "58.3", desktopVW: "35.0"}
450: {input: 449, rem: "28.1", mobileVW: "140.3", tabletVW: "58.5", desktopVW: "35.1"}
451: {input: 450, rem: "28.1", mobileVW: "140.6", tabletVW: "58.6", desktopVW: "35.2"}
452: {input: 451, rem: "28.2", mobileVW: "140.9", tabletVW: "58.7", desktopVW: "35.2"}
453: {input: 452, rem: "28.3", mobileVW: "141.3", tabletVW: "58.9", desktopVW: "35.3"}
454: {input: 453, rem: "28.3", mobileVW: "141.6", tabletVW: "59.0", desktopVW: "35.4"}
455: {input: 454, rem: "28.4", mobileVW: "141.9", tabletVW: "59.1", desktopVW: "35.5"}
456: {input: 455, rem: "28.4", mobileVW: "142.2", tabletVW: "59.2", desktopVW: "35.5"}
457: {input: 456, rem: "28.5", mobileVW: "142.5", tabletVW: "59.4", desktopVW: "35.6"}
458: {input: 457, rem: "28.6", mobileVW: "142.8", tabletVW: "59.5", desktopVW: "35.7"}
459: {input: 458, rem: "28.6", mobileVW: "143.1", tabletVW: "59.6", desktopVW: "35.8"}
460: {input: 459, rem: "28.7", mobileVW: "143.4", tabletVW: "59.8", desktopVW: "35.9"}
461: {input: 460, rem: "28.8", mobileVW: "143.8", tabletVW: "59.9", desktopVW: "35.9"}
462: {input: 461, rem: "28.8", mobileVW: "144.1", tabletVW: "60.0", desktopVW: "36.0"}
463: {input: 462, rem: "28.9", mobileVW: "144.4", tabletVW: "60.2", desktopVW: "36.1"}
464: {input: 463, rem: "28.9", mobileVW: "144.7", tabletVW: "60.3", desktopVW: "36.2"}
465: {input: 464, rem: "29.0", mobileVW: "145.0", tabletVW: "60.4", desktopVW: "36.3"}
466: {input: 465, rem: "29.1", mobileVW: "145.3", tabletVW: "60.5", desktopVW: "36.3"}
467: {input: 466, rem: "29.1", mobileVW: "145.6", tabletVW: "60.7", desktopVW: "36.4"}
468: {input: 467, rem: "29.2", mobileVW: "145.9", tabletVW: "60.8", desktopVW: "36.5"}
469: {input: 468, rem: "29.3", mobileVW: "146.3", tabletVW: "60.9", desktopVW: "36.6"}
470: {input: 469, rem: "29.3", mobileVW: "146.6", tabletVW: "61.1", desktopVW: "36.6"}
471: {input: 470, rem: "29.4", mobileVW: "146.9", tabletVW: "61.2", desktopVW: "36.7"}
472: {input: 471, rem: "29.4", mobileVW: "147.2", tabletVW: "61.3", desktopVW: "36.8"}
473: {input: 472, rem: "29.5", mobileVW: "147.5", tabletVW: "61.5", desktopVW: "36.9"}
474: {input: 473, rem: "29.6", mobileVW: "147.8", tabletVW: "61.6", desktopVW: "37.0"}
475: {input: 474, rem: "29.6", mobileVW: "148.1", tabletVW: "61.7", desktopVW: "37.0"}
476: {input: 475, rem: "29.7", mobileVW: "148.4", tabletVW: "61.8", desktopVW: "37.1"}
477: {input: 476, rem: "29.8", mobileVW: "148.8", tabletVW: "62.0", desktopVW: "37.2"}
478: {input: 477, rem: "29.8", mobileVW: "149.1", tabletVW: "62.1", desktopVW: "37.3"}
479: {input: 478, rem: "29.9", mobileVW: "149.4", tabletVW: "62.2", desktopVW: "37.3"}
480: {input: 479, rem: "29.9", mobileVW: "149.7", tabletVW: "62.4", desktopVW: "37.4"}
481: {input: 480, rem: "30.0", mobileVW: "150.0", tabletVW: "62.5", desktopVW: "37.5"}
482: {input: 481, rem: "30.1", mobileVW: "150.3", tabletVW: "62.6", desktopVW: "37.6"}
483: {input: 482, rem: "30.1", mobileVW: "150.6", tabletVW: "62.8", desktopVW: "37.7"}
484: {input: 483, rem: "30.2", mobileVW: "150.9", tabletVW: "62.9", desktopVW: "37.7"}
485: {input: 484, rem: "30.3", mobileVW: "151.3", tabletVW: "63.0", desktopVW: "37.8"}
486: {input: 485, rem: "30.3", mobileVW: "151.6", tabletVW: "63.2", desktopVW: "37.9"}
487: {input: 486, rem: "30.4", mobileVW: "151.9", tabletVW: "63.3", desktopVW: "38.0"}
488: {input: 487, rem: "30.4", mobileVW: "152.2", tabletVW: "63.4", desktopVW: "38.0"}
489: {input: 488, rem: "30.5", mobileVW: "152.5", tabletVW: "63.5", desktopVW: "38.1"}
490: {input: 489, rem: "30.6", mobileVW: "152.8", tabletVW: "63.7", desktopVW: "38.2"}
491: {input: 490, rem: "30.6", mobileVW: "153.1", tabletVW: "63.8", desktopVW: "38.3"}
492: {input: 491, rem: "30.7", mobileVW: "153.4", tabletVW: "63.9", desktopVW: "38.4"}
493: {input: 492, rem: "30.8", mobileVW: "153.8", tabletVW: "64.1", desktopVW: "38.4"}
494: {input: 493, rem: "30.8", mobileVW: "154.1", tabletVW: "64.2", desktopVW: "38.5"}
495: {input: 494, rem: "30.9", mobileVW: "154.4", tabletVW: "64.3", desktopVW: "38.6"}
496: {input: 495, rem: "30.9", mobileVW: "154.7", tabletVW: "64.5", desktopVW: "38.7"}
497: {input: 496, rem: "31.0", mobileVW: "155.0", tabletVW: "64.6", desktopVW: "38.8"}
498: {input: 497, rem: "31.1", mobileVW: "155.3", tabletVW: "64.7", desktopVW: "38.8"}
499: {input: 498, rem: "31.1", mobileVW: "155.6", tabletVW: "64.8", desktopVW: "38.9"}
500: {input: 499, rem: "31.2", mobileVW: "155.9", tabletVW: "65.0", desktopVW: "39.0"}
501: {input: 500, rem: "31.3", mobileVW: "156.3", tabletVW: "65.1", desktopVW: "39.1"}
502: {input: 501, rem: "31.3", mobileVW: "156.6", tabletVW: "65.2", desktopVW: "39.1"}
503: {input: 502, rem: "31.4", mobileVW: "156.9", tabletVW: "65.4", desktopVW: "39.2"}
504: {input: 503, rem: "31.4", mobileVW: "157.2", tabletVW: "65.5", desktopVW: "39.3"}
505: {input: 504, rem: "31.5", mobileVW: "157.5", tabletVW: "65.6", desktopVW: "39.4"}
506: {input: 505, rem: "31.6", mobileVW: "157.8", tabletVW: "65.8", desktopVW: "39.5"}
507: {input: 506, rem: "31.6", mobileVW: "158.1", tabletVW: "65.9", desktopVW: "39.5"}
508: {input: 507, rem: "31.7", mobileVW: "158.4", tabletVW: "66.0", desktopVW: "39.6"}
509: {input: 508, rem: "31.8", mobileVW: "158.8", tabletVW: "66.1", desktopVW: "39.7"}
510: {input: 509, rem: "31.8", mobileVW: "159.1", tabletVW: "66.3", desktopVW: "39.8"}
511: {input: 510, rem: "31.9", mobileVW: "159.4", tabletVW: "66.4", desktopVW: "39.8"}
512: {input: 511, rem: "31.9", mobileVW: "159.7", tabletVW: "66.5", desktopVW: "39.9"}
513: {input: 512, rem: "32.0", mobileVW: "160.0", tabletVW: "66.7", desktopVW: "40.0"}
514: {input: 513, rem: "32.1", mobileVW: "160.3", tabletVW: "66.8", desktopVW: "40.1"}
515: {input: 514, rem: "32.1", mobileVW: "160.6", tabletVW: "66.9", desktopVW: "40.2"}
516: {input: 515, rem: "32.2", mobileVW: "160.9", tabletVW: "67.1", desktopVW: "40.2"}
517: {input: 516, rem: "32.3", mobileVW: "161.3", tabletVW: "67.2", desktopVW: "40.3"}
518: {input: 517, rem: "32.3", mobileVW: "161.6", tabletVW: "67.3", desktopVW: "40.4"}
519: {input: 518, rem: "32.4", mobileVW: "161.9", tabletVW: "67.4", desktopVW: "40.5"}
520: {input: 519, rem: "32.4", mobileVW: "162.2", tabletVW: "67.6", desktopVW: "40.5"}
521: {input: 520, rem: "32.5", mobileVW: "162.5", tabletVW: "67.7", desktopVW: "40.6"}
522: {input: 521, rem: "32.6", mobileVW: "162.8", tabletVW: "67.8", desktopVW: "40.7"}
523: {input: 522, rem: "32.6", mobileVW: "163.1", tabletVW: "68.0", desktopVW: "40.8"}
524: {input: 523, rem: "32.7", mobileVW: "163.4", tabletVW: "68.1", desktopVW: "40.9"}
525: {input: 524, rem: "32.8", mobileVW: "163.8", tabletVW: "68.2", desktopVW: "40.9"}
526: {input: 525, rem: "32.8", mobileVW: "164.1", tabletVW: "68.4", desktopVW: "41.0"}
527: {input: 526, rem: "32.9", mobileVW: "164.4", tabletVW: "68.5", desktopVW: "41.1"}
528: {input: 527, rem: "32.9", mobileVW: "164.7", tabletVW: "68.6", desktopVW: "41.2"}
529: {input: 528, rem: "33.0", mobileVW: "165.0", tabletVW: "68.8", desktopVW: "41.3"}
530: {input: 529, rem: "33.1", mobileVW: "165.3", tabletVW: "68.9", desktopVW: "41.3"}
531: {input: 530, rem: "33.1", mobileVW: "165.6", tabletVW: "69.0", desktopVW: "41.4"}
532: {input: 531, rem: "33.2", mobileVW: "165.9", tabletVW: "69.1", desktopVW: "41.5"}
533: {input: 532, rem: "33.3", mobileVW: "166.3", tabletVW: "69.3", desktopVW: "41.6"}
534: {input: 533, rem: "33.3", mobileVW: "166.6", tabletVW: "69.4", desktopVW: "41.6"}
535: {input: 534, rem: "33.4", mobileVW: "166.9", tabletVW: "69.5", desktopVW: "41.7"}
536: {input: 535, rem: "33.4", mobileVW: "167.2", tabletVW: "69.7", desktopVW: "41.8"}
537: {input: 536, rem: "33.5", mobileVW: "167.5", tabletVW: "69.8", desktopVW: "41.9"}
538: {input: 537, rem: "33.6", mobileVW: "167.8", tabletVW: "69.9", desktopVW: "42.0"}
539: {input: 538, rem: "33.6", mobileVW: "168.1", tabletVW: "70.1", desktopVW: "42.0"}
540: {input: 539, rem: "33.7", mobileVW: "168.4", tabletVW: "70.2", desktopVW: "42.1"}
541: {input: 540, rem: "33.8", mobileVW: "168.8", tabletVW: "70.3", desktopVW: "42.2"}
542: {input: 541, rem: "33.8", mobileVW: "169.1", tabletVW: "70.4", desktopVW: "42.3"}
543: {input: 542, rem: "33.9", mobileVW: "169.4", tabletVW: "70.6", desktopVW: "42.3"}
544: {input: 543, rem: "33.9", mobileVW: "169.7", tabletVW: "70.7", desktopVW: "42.4"}
545: {input: 544, rem: "34.0", mobileVW: "170.0", tabletVW: "70.8", desktopVW: "42.5"}
546: {input: 545, rem: "34.1", mobileVW: "170.3", tabletVW: "71.0", desktopVW: "42.6"}
547: {input: 546, rem: "34.1", mobileVW: "170.6", tabletVW: "71.1", desktopVW: "42.7"}
548: {input: 547, rem: "34.2", mobileVW: "170.9", tabletVW: "71.2", desktopVW: "42.7"}
549: {input: 548, rem: "34.3", mobileVW: "171.3", tabletVW: "71.4", desktopVW: "42.8"}
550: {input: 549, rem: "34.3", mobileVW: "171.6", tabletVW: "71.5", desktopVW: "42.9"}
551: {input: 550, rem: "34.4", mobileVW: "171.9", tabletVW: "71.6", desktopVW: "43.0"}
552: {input: 551, rem: "34.4", mobileVW: "172.2", tabletVW: "71.7", desktopVW: "43.0"}
553: {input: 552, rem: "34.5", mobileVW: "172.5", tabletVW: "71.9", desktopVW: "43.1"}
554: {input: 553, rem: "34.6", mobileVW: "172.8", tabletVW: "72.0", desktopVW: "43.2"}
555: {input: 554, rem: "34.6", mobileVW: "173.1", tabletVW: "72.1", desktopVW: "43.3"}
556: {input: 555, rem: "34.7", mobileVW: "173.4", tabletVW: "72.3", desktopVW: "43.4"}
557: {input: 556, rem: "34.8", mobileVW: "173.8", tabletVW: "72.4", desktopVW: "43.4"}
558: {input: 557, rem: "34.8", mobileVW: "174.1", tabletVW: "72.5", desktopVW: "43.5"}
559: {input: 558, rem: "34.9", mobileVW: "174.4", tabletVW: "72.7", desktopVW: "43.6"}
560: {input: 559, rem: "34.9", mobileVW: "174.7", tabletVW: "72.8", desktopVW: "43.7"}
561: {input: 560, rem: "35.0", mobileVW: "175.0", tabletVW: "72.9", desktopVW: "43.8"}
562: {input: 561, rem: "35.1", mobileVW: "175.3", tabletVW: "73.0", desktopVW: "43.8"}
563: {input: 562, rem: "35.1", mobileVW: "175.6", tabletVW: "73.2", desktopVW: "43.9"}
564: {input: 563, rem: "35.2", mobileVW: "175.9", tabletVW: "73.3", desktopVW: "44.0"}
565: {input: 564, rem: "35.3", mobileVW: "176.3", tabletVW: "73.4", desktopVW: "44.1"}
566: {input: 565, rem: "35.3", mobileVW: "176.6", tabletVW: "73.6", desktopVW: "44.1"}
567: {input: 566, rem: "35.4", mobileVW: "176.9", tabletVW: "73.7", desktopVW: "44.2"}
568: {input: 567, rem: "35.4", mobileVW: "177.2", tabletVW: "73.8", desktopVW: "44.3"}
569: {input: 568, rem: "35.5", mobileVW: "177.5", tabletVW: "74.0", desktopVW: "44.4"}
570: {input: 569, rem: "35.6", mobileVW: "177.8", tabletVW: "74.1", desktopVW: "44.5"}
571: {input: 570, rem: "35.6", mobileVW: "178.1", tabletVW: "74.2", desktopVW: "44.5"}
572: {input: 571, rem: "35.7", mobileVW: "178.4", tabletVW: "74.3", desktopVW: "44.6"}
573: {input: 572, rem: "35.8", mobileVW: "178.8", tabletVW: "74.5", desktopVW: "44.7"}
574: {input: 573, rem: "35.8", mobileVW: "179.1", tabletVW: "74.6", desktopVW: "44.8"}
575: {input: 574, rem: "35.9", mobileVW: "179.4", tabletVW: "74.7", desktopVW: "44.8"}
576: {input: 575, rem: "35.9", mobileVW: "179.7", tabletVW: "74.9", desktopVW: "44.9"}
577: {input: 576, rem: "36.0", mobileVW: "180.0", tabletVW: "75.0", desktopVW: "45.0"}
578: {input: 577, rem: "36.1", mobileVW: "180.3", tabletVW: "75.1", desktopVW: "45.1"}
579: {input: 578, rem: "36.1", mobileVW: "180.6", tabletVW: "75.3", desktopVW: "45.2"}
580: {input: 579, rem: "36.2", mobileVW: "180.9", tabletVW: "75.4", desktopVW: "45.2"}
581: {input: 580, rem: "36.3", mobileVW: "181.3", tabletVW: "75.5", desktopVW: "45.3"}
582: {input: 581, rem: "36.3", mobileVW: "181.6", tabletVW: "75.7", desktopVW: "45.4"}
583: {input: 582, rem: "36.4", mobileVW: "181.9", tabletVW: "75.8", desktopVW: "45.5"}
584: {input: 583, rem: "36.4", mobileVW: "182.2", tabletVW: "75.9", desktopVW: "45.5"}
585: {input: 584, rem: "36.5", mobileVW: "182.5", tabletVW: "76.0", desktopVW: "45.6"}
586: {input: 585, rem: "36.6", mobileVW: "182.8", tabletVW: "76.2", desktopVW: "45.7"}
587: {input: 586, rem: "36.6", mobileVW: "183.1", tabletVW: "76.3", desktopVW: "45.8"}
588: {input: 587, rem: "36.7", mobileVW: "183.4", tabletVW: "76.4", desktopVW: "45.9"}
589: {input: 588, rem: "36.8", mobileVW: "183.8", tabletVW: "76.6", desktopVW: "45.9"}
590: {input: 589, rem: "36.8", mobileVW: "184.1", tabletVW: "76.7", desktopVW: "46.0"}
591: {input: 590, rem: "36.9", mobileVW: "184.4", tabletVW: "76.8", desktopVW: "46.1"}
592: {input: 591, rem: "36.9", mobileVW: "184.7", tabletVW: "77.0", desktopVW: "46.2"}
593: {input: 592, rem: "37.0", mobileVW: "185.0", tabletVW: "77.1", desktopVW: "46.3"}
594: {input: 593, rem: "37.1", mobileVW: "185.3", tabletVW: "77.2", desktopVW: "46.3"}
595: {input: 594, rem: "37.1", mobileVW: "185.6", tabletVW: "77.3", desktopVW: "46.4"}
596: {input: 595, rem: "37.2", mobileVW: "185.9", tabletVW: "77.5", desktopVW: "46.5"}
597: {input: 596, rem: "37.3", mobileVW: "186.3", tabletVW: "77.6", desktopVW: "46.6"}
598: {input: 597, rem: "37.3", mobileVW: "186.6", tabletVW: "77.7", desktopVW: "46.6"}
599: {input: 598, rem: "37.4", mobileVW: "186.9", tabletVW: "77.9", desktopVW: "46.7"}
600: {input: 599, rem: "37.4", mobileVW: "187.2", tabletVW: "78.0", desktopVW: "46.8"}
601: {input: 600, rem: "37.5", mobileVW: "187.5", tabletVW: "78.1", desktopVW: "46.9"}
602: {input: 601, rem: "37.6", mobileVW: "187.8", tabletVW: "78.3", desktopVW: "47.0"}
603: {input: 602, rem: "37.6", mobileVW: "188.1", tabletVW: "78.4", desktopVW: "47.0"}
604: {input: 603, rem: "37.7", mobileVW: "188.4", tabletVW: "78.5", desktopVW: "47.1"}
605: {input: 604, rem: "37.8", mobileVW: "188.8", tabletVW: "78.6", desktopVW: "47.2"}
606: {input: 605, rem: "37.8", mobileVW: "189.1", tabletVW: "78.8", desktopVW: "47.3"}
607: {input: 606, rem: "37.9", mobileVW: "189.4", tabletVW: "78.9", desktopVW: "47.3"}
608: {input: 607, rem: "37.9", mobileVW: "189.7", tabletVW: "79.0", desktopVW: "47.4"}
609: {input: 608, rem: "38.0", mobileVW: "190.0", tabletVW: "79.2", desktopVW: "47.5"}
610: {input: 609, rem: "38.1", mobileVW: "190.3", tabletVW: "79.3", desktopVW: "47.6"}
611: {input: 610, rem: "38.1", mobileVW: "190.6", tabletVW: "79.4", desktopVW: "47.7"}
612: {input: 611, rem: "38.2", mobileVW: "190.9", tabletVW: "79.6", desktopVW: "47.7"}
613: {input: 612, rem: "38.3", mobileVW: "191.3", tabletVW: "79.7", desktopVW: "47.8"}
614: {input: 613, rem: "38.3", mobileVW: "191.6", tabletVW: "79.8", desktopVW: "47.9"}
615: {input: 614, rem: "38.4", mobileVW: "191.9", tabletVW: "79.9", desktopVW: "48.0"}
616: {input: 615, rem: "38.4", mobileVW: "192.2", tabletVW: "80.1", desktopVW: "48.0"}
617: {input: 616, rem: "38.5", mobileVW: "192.5", tabletVW: "80.2", desktopVW: "48.1"}
618: {input: 617, rem: "38.6", mobileVW: "192.8", tabletVW: "80.3", desktopVW: "48.2"}
619: {input: 618, rem: "38.6", mobileVW: "193.1", tabletVW: "80.5", desktopVW: "48.3"}
620: {input: 619, rem: "38.7", mobileVW: "193.4", tabletVW: "80.6", desktopVW: "48.4"}
621: {input: 620, rem: "38.8", mobileVW: "193.8", tabletVW: "80.7", desktopVW: "48.4"}
622: {input: 621, rem: "38.8", mobileVW: "194.1", tabletVW: "80.9", desktopVW: "48.5"}
623: {input: 622, rem: "38.9", mobileVW: "194.4", tabletVW: "81.0", desktopVW: "48.6"}
624: {input: 623, rem: "38.9", mobileVW: "194.7", tabletVW: "81.1", desktopVW: "48.7"}
625: {input: 624, rem: "39.0", mobileVW: "195.0", tabletVW: "81.3", desktopVW: "48.8"}
626: {input: 625, rem: "39.1", mobileVW: "195.3", tabletVW: "81.4", desktopVW: "48.8"}
627: {input: 626, rem: "39.1", mobileVW: "195.6", tabletVW: "81.5", desktopVW: "48.9"}
628: {input: 627, rem: "39.2", mobileVW: "195.9", tabletVW: "81.6", desktopVW: "49.0"}
629: {input: 628, rem: "39.3", mobileVW: "196.3", tabletVW: "81.8", desktopVW: "49.1"}
630: {input: 629, rem: "39.3", mobileVW: "196.6", tabletVW: "81.9", desktopVW: "49.1"}
631: {input: 630, rem: "39.4", mobileVW: "196.9", tabletVW: "82.0", desktopVW: "49.2"}
632: {input: 631, rem: "39.4", mobileVW: "197.2", tabletVW: "82.2", desktopVW: "49.3"}
633: {input: 632, rem: "39.5", mobileVW: "197.5", tabletVW: "82.3", desktopVW: "49.4"}
634: {input: 633, rem: "39.6", mobileVW: "197.8", tabletVW: "82.4", desktopVW: "49.5"}
635: {input: 634, rem: "39.6", mobileVW: "198.1", tabletVW: "82.6", desktopVW: "49.5"}
636: {input: 635, rem: "39.7", mobileVW: "198.4", tabletVW: "82.7", desktopVW: "49.6"}
637: {input: 636, rem: "39.8", mobileVW: "198.8", tabletVW: "82.8", desktopVW: "49.7"}
638: {input: 637, rem: "39.8", mobileVW: "199.1", tabletVW: "82.9", desktopVW: "49.8"}
639: {input: 638, rem: "39.9", mobileVW: "199.4", tabletVW: "83.1", desktopVW: "49.8"}
640: {input: 639, rem: "39.9", mobileVW: "199.7", tabletVW: "83.2", desktopVW: "49.9"}
641: {input: 640, rem: "40.0", mobileVW: "200.0", tabletVW: "83.3", desktopVW: "50.0"}
642: {input: 641, rem: "40.1", mobileVW: "200.3", tabletVW: "83.5", desktopVW: "50.1"}
643: {input: 642, rem: "40.1", mobileVW: "200.6", tabletVW: "83.6", desktopVW: "50.2"}
644: {input: 643, rem: "40.2", mobileVW: "200.9", tabletVW: "83.7", desktopVW: "50.2"}
645: {input: 644, rem: "40.3", mobileVW: "201.3", tabletVW: "83.9", desktopVW: "50.3"}
646: {input: 645, rem: "40.3", mobileVW: "201.6", tabletVW: "84.0", desktopVW: "50.4"}
647: {input: 646, rem: "40.4", mobileVW: "201.9", tabletVW: "84.1", desktopVW: "50.5"}
648: {input: 647, rem: "40.4", mobileVW: "202.2", tabletVW: "84.2", desktopVW: "50.5"}
649: {input: 648, rem: "40.5", mobileVW: "202.5", tabletVW: "84.4", desktopVW: "50.6"}
650: {input: 649, rem: "40.6", mobileVW: "202.8", tabletVW: "84.5", desktopVW: "50.7"}
651: {input: 650, rem: "40.6", mobileVW: "203.1", tabletVW: "84.6", desktopVW: "50.8"}
652: {input: 651, rem: "40.7", mobileVW: "203.4", tabletVW: "84.8", desktopVW: "50.9"}
653: {input: 652, rem: "40.8", mobileVW: "203.8", tabletVW: "84.9", desktopVW: "50.9"}
654: {input: 653, rem: "40.8", mobileVW: "204.1", tabletVW: "85.0", desktopVW: "51.0"}
655: {input: 654, rem: "40.9", mobileVW: "204.4", tabletVW: "85.2", desktopVW: "51.1"}
656: {input: 655, rem: "40.9", mobileVW: "204.7", tabletVW: "85.3", desktopVW: "51.2"}
657: {input: 656, rem: "41.0", mobileVW: "205.0", tabletVW: "85.4", desktopVW: "51.2"}
658: {input: 657, rem: "41.1", mobileVW: "205.3", tabletVW: "85.5", desktopVW: "51.3"}
659: {input: 658, rem: "41.1", mobileVW: "205.6", tabletVW: "85.7", desktopVW: "51.4"}
660: {input: 659, rem: "41.2", mobileVW: "205.9", tabletVW: "85.8", desktopVW: "51.5"}
661: {input: 660, rem: "41.3", mobileVW: "206.3", tabletVW: "85.9", desktopVW: "51.6"}
662: {input: 661, rem: "41.3", mobileVW: "206.6", tabletVW: "86.1", desktopVW: "51.6"}
663: {input: 662, rem: "41.4", mobileVW: "206.9", tabletVW: "86.2", desktopVW: "51.7"}
664: {input: 663, rem: "41.4", mobileVW: "207.2", tabletVW: "86.3", desktopVW: "51.8"}
665: {input: 664, rem: "41.5", mobileVW: "207.5", tabletVW: "86.5", desktopVW: "51.9"}
666: {input: 665, rem: "41.6", mobileVW: "207.8", tabletVW: "86.6", desktopVW: "52.0"}
667: {input: 666, rem: "41.6", mobileVW: "208.1", tabletVW: "86.7", desktopVW: "52.0"}
668: {input: 667, rem: "41.7", mobileVW: "208.4", tabletVW: "86.8", desktopVW: "52.1"}
669: {input: 668, rem: "41.8", mobileVW: "208.8", tabletVW: "87.0", desktopVW: "52.2"}
670: {input: 669, rem: "41.8", mobileVW: "209.1", tabletVW: "87.1", desktopVW: "52.3"}
671: {input: 670, rem: "41.9", mobileVW: "209.4", tabletVW: "87.2", desktopVW: "52.3"}
672: {input: 671, rem: "41.9", mobileVW: "209.7", tabletVW: "87.4", desktopVW: "52.4"}
673: {input: 672, rem: "42.0", mobileVW: "210.0", tabletVW: "87.5", desktopVW: "52.5"}
674: {input: 673, rem: "42.1", mobileVW: "210.3", tabletVW: "87.6", desktopVW: "52.6"}
675: {input: 674, rem: "42.1", mobileVW: "210.6", tabletVW: "87.8", desktopVW: "52.7"}
676: {input: 675, rem: "42.2", mobileVW: "210.9", tabletVW: "87.9", desktopVW: "52.7"}
677: {input: 676, rem: "42.3", mobileVW: "211.2", tabletVW: "88.0", desktopVW: "52.8"}
678: {input: 677, rem: "42.3", mobileVW: "211.6", tabletVW: "88.2", desktopVW: "52.9"}
679: {input: 678, rem: "42.4", mobileVW: "211.9", tabletVW: "88.3", desktopVW: "53.0"}
680: {input: 679, rem: "42.4", mobileVW: "212.2", tabletVW: "88.4", desktopVW: "53.0"}
681: {input: 680, rem: "42.5", mobileVW: "212.5", tabletVW: "88.5", desktopVW: "53.1"}
682: {input: 681, rem: "42.6", mobileVW: "212.8", tabletVW: "88.7", desktopVW: "53.2"}
683: {input: 682, rem: "42.6", mobileVW: "213.1", tabletVW: "88.8", desktopVW: "53.3"}
684: {input: 683, rem: "42.7", mobileVW: "213.4", tabletVW: "88.9", desktopVW: "53.4"}
685: {input: 684, rem: "42.8", mobileVW: "213.8", tabletVW: "89.1", desktopVW: "53.4"}
686: {input: 685, rem: "42.8", mobileVW: "214.1", tabletVW: "89.2", desktopVW: "53.5"}
687: {input: 686, rem: "42.9", mobileVW: "214.4", tabletVW: "89.3", desktopVW: "53.6"}
688: {input: 687, rem: "42.9", mobileVW: "214.7", tabletVW: "89.5", desktopVW: "53.7"}
689: {input: 688, rem: "43.0", mobileVW: "215.0", tabletVW: "89.6", desktopVW: "53.8"}
690: {input: 689, rem: "43.1", mobileVW: "215.3", tabletVW: "89.7", desktopVW: "53.8"}
691: {input: 690, rem: "43.1", mobileVW: "215.6", tabletVW: "89.8", desktopVW: "53.9"}
692: {input: 691, rem: "43.2", mobileVW: "215.9", tabletVW: "90.0", desktopVW: "54.0"}
693: {input: 692, rem: "43.3", mobileVW: "216.3", tabletVW: "90.1", desktopVW: "54.1"}
694: {input: 693, rem: "43.3", mobileVW: "216.6", tabletVW: "90.2", desktopVW: "54.1"}
695: {input: 694, rem: "43.4", mobileVW: "216.9", tabletVW: "90.4", desktopVW: "54.2"}
696: {input: 695, rem: "43.4", mobileVW: "217.2", tabletVW: "90.5", desktopVW: "54.3"}
697: {input: 696, rem: "43.5", mobileVW: "217.5", tabletVW: "90.6", desktopVW: "54.4"}
698: {input: 697, rem: "43.6", mobileVW: "217.8", tabletVW: "90.8", desktopVW: "54.5"}
699: {input: 698, rem: "43.6", mobileVW: "218.1", tabletVW: "90.9", desktopVW: "54.5"}
700: {input: 699, rem: "43.7", mobileVW: "218.4", tabletVW: "91.0", desktopVW: "54.6"}
701: {input: 700, rem: "43.8", mobileVW: "218.8", tabletVW: "91.1", desktopVW: "54.7"}
702: {input: 701, rem: "43.8", mobileVW: "219.1", tabletVW: "91.3", desktopVW: "54.8"}
703: {input: 702, rem: "43.9", mobileVW: "219.4", tabletVW: "91.4", desktopVW: "54.8"}
704: {input: 703, rem: "43.9", mobileVW: "219.7", tabletVW: "91.5", desktopVW: "54.9"}
705: {input: 704, rem: "44.0", mobileVW: "220.0", tabletVW: "91.7", desktopVW: "55.0"}
706: {input: 705, rem: "44.1", mobileVW: "220.3", tabletVW: "91.8", desktopVW: "55.1"}
707: {input: 706, rem: "44.1", mobileVW: "220.6", tabletVW: "91.9", desktopVW: "55.2"}
708: {input: 707, rem: "44.2", mobileVW: "220.9", tabletVW: "92.1", desktopVW: "55.2"}
709: {input: 708, rem: "44.3", mobileVW: "221.3", tabletVW: "92.2", desktopVW: "55.3"}
710: {input: 709, rem: "44.3", mobileVW: "221.6", tabletVW: "92.3", desktopVW: "55.4"}
711: {input: 710, rem: "44.4", mobileVW: "221.9", tabletVW: "92.4", desktopVW: "55.5"}
712: {input: 711, rem: "44.4", mobileVW: "222.2", tabletVW: "92.6", desktopVW: "55.5"}
713: {input: 712, rem: "44.5", mobileVW: "222.5", tabletVW: "92.7", desktopVW: "55.6"}
714: {input: 713, rem: "44.6", mobileVW: "222.8", tabletVW: "92.8", desktopVW: "55.7"}
715: {input: 714, rem: "44.6", mobileVW: "223.1", tabletVW: "93.0", desktopVW: "55.8"}
716: {input: 715, rem: "44.7", mobileVW: "223.4", tabletVW: "93.1", desktopVW: "55.9"}
717: {input: 716, rem: "44.8", mobileVW: "223.7", tabletVW: "93.2", desktopVW: "55.9"}
718: {input: 717, rem: "44.8", mobileVW: "224.1", tabletVW: "93.4", desktopVW: "56.0"}
719: {input: 718, rem: "44.9", mobileVW: "224.4", tabletVW: "93.5", desktopVW: "56.1"}
720: {input: 719, rem: "44.9", mobileVW: "224.7", tabletVW: "93.6", desktopVW: "56.2"}
721: {input: 720, rem: "45.0", mobileVW: "225.0", tabletVW: "93.8", desktopVW: "56.3"}
722: {input: 721, rem: "45.1", mobileVW: "225.3", tabletVW: "93.9", desktopVW: "56.3"}
723: {input: 722, rem: "45.1", mobileVW: "225.6", tabletVW: "94.0", desktopVW: "56.4"}
724: {input: 723, rem: "45.2", mobileVW: "225.9", tabletVW: "94.1", desktopVW: "56.5"}
725: {input: 724, rem: "45.3", mobileVW: "226.3", tabletVW: "94.3", desktopVW: "56.6"}
726: {input: 725, rem: "45.3", mobileVW: "226.6", tabletVW: "94.4", desktopVW: "56.6"}
727: {input: 726, rem: "45.4", mobileVW: "226.9", tabletVW: "94.5", desktopVW: "56.7"}
728: {input: 727, rem: "45.4", mobileVW: "227.2", tabletVW: "94.7", desktopVW: "56.8"}
729: {input: 728, rem: "45.5", mobileVW: "227.5", tabletVW: "94.8", desktopVW: "56.9"}
730: {input: 729, rem: "45.6", mobileVW: "227.8", tabletVW: "94.9", desktopVW: "57.0"}
731: {input: 730, rem: "45.6", mobileVW: "228.1", tabletVW: "95.1", desktopVW: "57.0"}
732: {input: 731, rem: "45.7", mobileVW: "228.4", tabletVW: "95.2", desktopVW: "57.1"}
733: {input: 732, rem: "45.8", mobileVW: "228.8", tabletVW: "95.3", desktopVW: "57.2"}
734: {input: 733, rem: "45.8", mobileVW: "229.1", tabletVW: "95.4", desktopVW: "57.3"}
735: {input: 734, rem: "45.9", mobileVW: "229.4", tabletVW: "95.6", desktopVW: "57.3"}
736: {input: 735, rem: "45.9", mobileVW: "229.7", tabletVW: "95.7", desktopVW: "57.4"}
737: {input: 736, rem: "46.0", mobileVW: "230.0", tabletVW: "95.8", desktopVW: "57.5"}
738: {input: 737, rem: "46.1", mobileVW: "230.3", tabletVW: "96.0", desktopVW: "57.6"}
739: {input: 738, rem: "46.1", mobileVW: "230.6", tabletVW: "96.1", desktopVW: "57.7"}
740: {input: 739, rem: "46.2", mobileVW: "230.9", tabletVW: "96.2", desktopVW: "57.7"}
741: {input: 740, rem: "46.3", mobileVW: "231.3", tabletVW: "96.4", desktopVW: "57.8"}
742: {input: 741, rem: "46.3", mobileVW: "231.6", tabletVW: "96.5", desktopVW: "57.9"}
743: {input: 742, rem: "46.4", mobileVW: "231.9", tabletVW: "96.6", desktopVW: "58.0"}
744: {input: 743, rem: "46.4", mobileVW: "232.2", tabletVW: "96.7", desktopVW: "58.0"}
745: {input: 744, rem: "46.5", mobileVW: "232.5", tabletVW: "96.9", desktopVW: "58.1"}
746: {input: 745, rem: "46.6", mobileVW: "232.8", tabletVW: "97.0", desktopVW: "58.2"}
747: {input: 746, rem: "46.6", mobileVW: "233.1", tabletVW: "97.1", desktopVW: "58.3"}
748: {input: 747, rem: "46.7", mobileVW: "233.4", tabletVW: "97.3", desktopVW: "58.4"}
749: {input: 748, rem: "46.8", mobileVW: "233.8", tabletVW: "97.4", desktopVW: "58.4"}
750: {input: 749, rem: "46.8", mobileVW: "234.1", tabletVW: "97.5", desktopVW: "58.5"}
751: {input: 750, rem: "46.9", mobileVW: "234.4", tabletVW: "97.7", desktopVW: "58.6"}
752: {input: 751, rem: "46.9", mobileVW: "234.7", tabletVW: "97.8", desktopVW: "58.7"}
753: {input: 752, rem: "47.0", mobileVW: "235.0", tabletVW: "97.9", desktopVW: "58.8"}
754: {input: 753, rem: "47.1", mobileVW: "235.3", tabletVW: "98.0", desktopVW: "58.8"}
755: {input: 754, rem: "47.1", mobileVW: "235.6", tabletVW: "98.2", desktopVW: "58.9"}
756: {input: 755, rem: "47.2", mobileVW: "235.9", tabletVW: "98.3", desktopVW: "59.0"}
757: {input: 756, rem: "47.3", mobileVW: "236.2", tabletVW: "98.4", desktopVW: "59.1"}
758: {input: 757, rem: "47.3", mobileVW: "236.6", tabletVW: "98.6", desktopVW: "59.1"}
759: {input: 758, rem: "47.4", mobileVW: "236.9", tabletVW: "98.7", desktopVW: "59.2"}
760: {input: 759, rem: "47.4", mobileVW: "237.2", tabletVW: "98.8", desktopVW: "59.3"}
761: {input: 760, rem: "47.5", mobileVW: "237.5", tabletVW: "99.0", desktopVW: "59.4"}
762: {input: 761, rem: "47.6", mobileVW: "237.8", tabletVW: "99.1", desktopVW: "59.5"}
763: {input: 762, rem: "47.6", mobileVW: "238.1", tabletVW: "99.2", desktopVW: "59.5"}
764: {input: 763, rem: "47.7", mobileVW: "238.4", tabletVW: "99.3", desktopVW: "59.6"}
765: {input: 764, rem: "47.8", mobileVW: "238.8", tabletVW: "99.5", desktopVW: "59.7"}
766: {input: 765, rem: "47.8", mobileVW: "239.1", tabletVW: "99.6", desktopVW: "59.8"}
767: {input: 766, rem: "47.9", mobileVW: "239.4", tabletVW: "99.7", desktopVW: "59.8"}
768: {input: 767, rem: "47.9", mobileVW: "239.7", tabletVW: "99.9", desktopVW: "59.9"}
769: {input: 768, rem: "48.0", mobileVW: "240.0", tabletVW: "100.0", desktopVW: "60.0"}
770: {input: 769, rem: "48.1", mobileVW: "240.3", tabletVW: "100.1", desktopVW: "60.1"}
771: {input: 770, rem: "48.1", mobileVW: "240.6", tabletVW: "100.3", desktopVW: "60.2"}
772: {input: 771, rem: "48.2", mobileVW: "240.9", tabletVW: "100.4", desktopVW: "60.2"}
773: {input: 772, rem: "48.3", mobileVW: "241.3", tabletVW: "100.5", desktopVW: "60.3"}
774: {input: 773, rem: "48.3", mobileVW: "241.6", tabletVW: "100.7", desktopVW: "60.4"}
775: {input: 774, rem: "48.4", mobileVW: "241.9", tabletVW: "100.8", desktopVW: "60.5"}
776: {input: 775, rem: "48.4", mobileVW: "242.2", tabletVW: "100.9", desktopVW: "60.5"}
777: {input: 776, rem: "48.5", mobileVW: "242.5", tabletVW: "101.0", desktopVW: "60.6"}
778: {input: 777, rem: "48.6", mobileVW: "242.8", tabletVW: "101.2", desktopVW: "60.7"}
779: {input: 778, rem: "48.6", mobileVW: "243.1", tabletVW: "101.3", desktopVW: "60.8"}
780: {input: 779, rem: "48.7", mobileVW: "243.4", tabletVW: "101.4", desktopVW: "60.9"}
781: {input: 780, rem: "48.8", mobileVW: "243.8", tabletVW: "101.6", desktopVW: "60.9"}
782: {input: 781, rem: "48.8", mobileVW: "244.1", tabletVW: "101.7", desktopVW: "61.0"}
783: {input: 782, rem: "48.9", mobileVW: "244.4", tabletVW: "101.8", desktopVW: "61.1"}
784: {input: 783, rem: "48.9", mobileVW: "244.7", tabletVW: "102.0", desktopVW: "61.2"}
785: {input: 784, rem: "49.0", mobileVW: "245.0", tabletVW: "102.1", desktopVW: "61.3"}
786: {input: 785, rem: "49.1", mobileVW: "245.3", tabletVW: "102.2", desktopVW: "61.3"}
787: {input: 786, rem: "49.1", mobileVW: "245.6", tabletVW: "102.3", desktopVW: "61.4"}
788: {input: 787, rem: "49.2", mobileVW: "245.9", tabletVW: "102.5", desktopVW: "61.5"}
789: {input: 788, rem: "49.3", mobileVW: "246.3", tabletVW: "102.6", desktopVW: "61.6"}
790: {input: 789, rem: "49.3", mobileVW: "246.6", tabletVW: "102.7", desktopVW: "61.6"}
791: {input: 790, rem: "49.4", mobileVW: "246.9", tabletVW: "102.9", desktopVW: "61.7"}
792: {input: 791, rem: "49.4", mobileVW: "247.2", tabletVW: "103.0", desktopVW: "61.8"}
793: {input: 792, rem: "49.5", mobileVW: "247.5", tabletVW: "103.1", desktopVW: "61.9"}
794: {input: 793, rem: "49.6", mobileVW: "247.8", tabletVW: "103.3", desktopVW: "62.0"}
795: {input: 794, rem: "49.6", mobileVW: "248.1", tabletVW: "103.4", desktopVW: "62.0"}
796: {input: 795, rem: "49.7", mobileVW: "248.4", tabletVW: "103.5", desktopVW: "62.1"}
797: {input: 796, rem: "49.8", mobileVW: "248.7", tabletVW: "103.6", desktopVW: "62.2"}
798: {input: 797, rem: "49.8", mobileVW: "249.1", tabletVW: "103.8", desktopVW: "62.3"}
799: {input: 798, rem: "49.9", mobileVW: "249.4", tabletVW: "103.9", desktopVW: "62.3"}
800: {input: 799, rem: "49.9", mobileVW: "249.7", tabletVW: "104.0", desktopVW: "62.4"}
801: {input: 800, rem: "50.0", mobileVW: "250.0", tabletVW: "104.2", desktopVW: "62.5"}
802: {input: 801, rem: "50.1", mobileVW: "250.3", tabletVW: "104.3", desktopVW: "62.6"}
803: {input: 802, rem: "50.1", mobileVW: "250.6", tabletVW: "104.4", desktopVW: "62.7"}
804: {input: 803, rem: "50.2", mobileVW: "250.9", tabletVW: "104.6", desktopVW: "62.7"}
805: {input: 804, rem: "50.3", mobileVW: "251.3", tabletVW: "104.7", desktopVW: "62.8"}
806: {input: 805, rem: "50.3", mobileVW: "251.6", tabletVW: "104.8", desktopVW: "62.9"}
807: {input: 806, rem: "50.4", mobileVW: "251.9", tabletVW: "104.9", desktopVW: "63.0"}
808: {input: 807, rem: "50.4", mobileVW: "252.2", tabletVW: "105.1", desktopVW: "63.0"}
809: {input: 808, rem: "50.5", mobileVW: "252.5", tabletVW: "105.2", desktopVW: "63.1"}
810: {input: 809, rem: "50.6", mobileVW: "252.8", tabletVW: "105.3", desktopVW: "63.2"}
811: {input: 810, rem: "50.6", mobileVW: "253.1", tabletVW: "105.5", desktopVW: "63.3"}
812: {input: 811, rem: "50.7", mobileVW: "253.4", tabletVW: "105.6", desktopVW: "63.4"}
813: {input: 812, rem: "50.8", mobileVW: "253.8", tabletVW: "105.7", desktopVW: "63.4"}
814: {input: 813, rem: "50.8", mobileVW: "254.1", tabletVW: "105.9", desktopVW: "63.5"}
815: {input: 814, rem: "50.9", mobileVW: "254.4", tabletVW: "106.0", desktopVW: "63.6"}
816: {input: 815, rem: "50.9", mobileVW: "254.7", tabletVW: "106.1", desktopVW: "63.7"}
817: {input: 816, rem: "51.0", mobileVW: "255.0", tabletVW: "106.3", desktopVW: "63.7"}
818: {input: 817, rem: "51.1", mobileVW: "255.3", tabletVW: "106.4", desktopVW: "63.8"}
819: {input: 818, rem: "51.1", mobileVW: "255.6", tabletVW: "106.5", desktopVW: "63.9"}
820: {input: 819, rem: "51.2", mobileVW: "255.9", tabletVW: "106.6", desktopVW: "64.0"}
821: {input: 820, rem: "51.3", mobileVW: "256.3", tabletVW: "106.8", desktopVW: "64.1"}
822: {input: 821, rem: "51.3", mobileVW: "256.6", tabletVW: "106.9", desktopVW: "64.1"}
823: {input: 822, rem: "51.4", mobileVW: "256.9", tabletVW: "107.0", desktopVW: "64.2"}
824: {input: 823, rem: "51.4", mobileVW: "257.2", tabletVW: "107.2", desktopVW: "64.3"}
825: {input: 824, rem: "51.5", mobileVW: "257.5", tabletVW: "107.3", desktopVW: "64.4"}
826: {input: 825, rem: "51.6", mobileVW: "257.8", tabletVW: "107.4", desktopVW: "64.5"}
827: {input: 826, rem: "51.6", mobileVW: "258.1", tabletVW: "107.6", desktopVW: "64.5"}
828: {input: 827, rem: "51.7", mobileVW: "258.4", tabletVW: "107.7", desktopVW: "64.6"}
829: {input: 828, rem: "51.8", mobileVW: "258.8", tabletVW: "107.8", desktopVW: "64.7"}
830: {input: 829, rem: "51.8", mobileVW: "259.1", tabletVW: "107.9", desktopVW: "64.8"}
831: {input: 830, rem: "51.9", mobileVW: "259.4", tabletVW: "108.1", desktopVW: "64.8"}
832: {input: 831, rem: "51.9", mobileVW: "259.7", tabletVW: "108.2", desktopVW: "64.9"}
833: {input: 832, rem: "52.0", mobileVW: "260.0", tabletVW: "108.3", desktopVW: "65.0"}
834: {input: 833, rem: "52.1", mobileVW: "260.3", tabletVW: "108.5", desktopVW: "65.1"}
835: {input: 834, rem: "52.1", mobileVW: "260.6", tabletVW: "108.6", desktopVW: "65.2"}
836: {input: 835, rem: "52.2", mobileVW: "260.9", tabletVW: "108.7", desktopVW: "65.2"}
837: {input: 836, rem: "52.3", mobileVW: "261.3", tabletVW: "108.9", desktopVW: "65.3"}
838: {input: 837, rem: "52.3", mobileVW: "261.6", tabletVW: "109.0", desktopVW: "65.4"}
839: {input: 838, rem: "52.4", mobileVW: "261.9", tabletVW: "109.1", desktopVW: "65.5"}
840: {input: 839, rem: "52.4", mobileVW: "262.2", tabletVW: "109.2", desktopVW: "65.5"}
841: {input: 840, rem: "52.5", mobileVW: "262.5", tabletVW: "109.4", desktopVW: "65.6"}
842: {input: 841, rem: "52.6", mobileVW: "262.8", tabletVW: "109.5", desktopVW: "65.7"}
843: {input: 842, rem: "52.6", mobileVW: "263.1", tabletVW: "109.6", desktopVW: "65.8"}
844: {input: 843, rem: "52.7", mobileVW: "263.4", tabletVW: "109.8", desktopVW: "65.9"}
845: {input: 844, rem: "52.8", mobileVW: "263.8", tabletVW: "109.9", desktopVW: "65.9"}
846: {input: 845, rem: "52.8", mobileVW: "264.1", tabletVW: "110.0", desktopVW: "66.0"}
847: {input: 846, rem: "52.9", mobileVW: "264.4", tabletVW: "110.2", desktopVW: "66.1"}
848: {input: 847, rem: "52.9", mobileVW: "264.7", tabletVW: "110.3", desktopVW: "66.2"}
849: {input: 848, rem: "53.0", mobileVW: "265.0", tabletVW: "110.4", desktopVW: "66.3"}
850: {input: 849, rem: "53.1", mobileVW: "265.3", tabletVW: "110.5", desktopVW: "66.3"}
851: {input: 850, rem: "53.1", mobileVW: "265.6", tabletVW: "110.7", desktopVW: "66.4"}
852: {input: 851, rem: "53.2", mobileVW: "265.9", tabletVW: "110.8", desktopVW: "66.5"}
853: {input: 852, rem: "53.3", mobileVW: "266.3", tabletVW: "110.9", desktopVW: "66.6"}
854: {input: 853, rem: "53.3", mobileVW: "266.6", tabletVW: "111.1", desktopVW: "66.6"}
855: {input: 854, rem: "53.4", mobileVW: "266.9", tabletVW: "111.2", desktopVW: "66.7"}
856: {input: 855, rem: "53.4", mobileVW: "267.2", tabletVW: "111.3", desktopVW: "66.8"}
857: {input: 856, rem: "53.5", mobileVW: "267.5", tabletVW: "111.5", desktopVW: "66.9"}
858: {input: 857, rem: "53.6", mobileVW: "267.8", tabletVW: "111.6", desktopVW: "67.0"}
859: {input: 858, rem: "53.6", mobileVW: "268.1", tabletVW: "111.7", desktopVW: "67.0"}
860: {input: 859, rem: "53.7", mobileVW: "268.4", tabletVW: "111.8", desktopVW: "67.1"}
861: {input: 860, rem: "53.8", mobileVW: "268.8", tabletVW: "112.0", desktopVW: "67.2"}
862: {input: 861, rem: "53.8", mobileVW: "269.1", tabletVW: "112.1", desktopVW: "67.3"}
863: {input: 862, rem: "53.9", mobileVW: "269.4", tabletVW: "112.2", desktopVW: "67.3"}
864: {input: 863, rem: "53.9", mobileVW: "269.7", tabletVW: "112.4", desktopVW: "67.4"}
865: {input: 864, rem: "54.0", mobileVW: "270.0", tabletVW: "112.5", desktopVW: "67.5"}
866: {input: 865, rem: "54.1", mobileVW: "270.3", tabletVW: "112.6", desktopVW: "67.6"}
867: {input: 866, rem: "54.1", mobileVW: "270.6", tabletVW: "112.8", desktopVW: "67.7"}
868: {input: 867, rem: "54.2", mobileVW: "270.9", tabletVW: "112.9", desktopVW: "67.7"}
869: {input: 868, rem: "54.3", mobileVW: "271.3", tabletVW: "113.0", desktopVW: "67.8"}
870: {input: 869, rem: "54.3", mobileVW: "271.6", tabletVW: "113.2", desktopVW: "67.9"}
871: {input: 870, rem: "54.4", mobileVW: "271.9", tabletVW: "113.3", desktopVW: "68.0"}
872: {input: 871, rem: "54.4", mobileVW: "272.2", tabletVW: "113.4", desktopVW: "68.0"}
873: {input: 872, rem: "54.5", mobileVW: "272.5", tabletVW: "113.5", desktopVW: "68.1"}
874: {input: 873, rem: "54.6", mobileVW: "272.8", tabletVW: "113.7", desktopVW: "68.2"}
875: {input: 874, rem: "54.6", mobileVW: "273.1", tabletVW: "113.8", desktopVW: "68.3"}
876: {input: 875, rem: "54.7", mobileVW: "273.4", tabletVW: "113.9", desktopVW: "68.4"}
877: {input: 876, rem: "54.8", mobileVW: "273.8", tabletVW: "114.1", desktopVW: "68.4"}
878: {input: 877, rem: "54.8", mobileVW: "274.1", tabletVW: "114.2", desktopVW: "68.5"}
879: {input: 878, rem: "54.9", mobileVW: "274.4", tabletVW: "114.3", desktopVW: "68.6"}
880: {input: 879, rem: "54.9", mobileVW: "274.7", tabletVW: "114.5", desktopVW: "68.7"}
881: {input: 880, rem: "55.0", mobileVW: "275.0", tabletVW: "114.6", desktopVW: "68.8"}
882: {input: 881, rem: "55.1", mobileVW: "275.3", tabletVW: "114.7", desktopVW: "68.8"}
883: {input: 882, rem: "55.1", mobileVW: "275.6", tabletVW: "114.8", desktopVW: "68.9"}
884: {input: 883, rem: "55.2", mobileVW: "275.9", tabletVW: "115.0", desktopVW: "69.0"}
885: {input: 884, rem: "55.3", mobileVW: "276.3", tabletVW: "115.1", desktopVW: "69.1"}
886: {input: 885, rem: "55.3", mobileVW: "276.6", tabletVW: "115.2", desktopVW: "69.1"}
887: {input: 886, rem: "55.4", mobileVW: "276.9", tabletVW: "115.4", desktopVW: "69.2"}
888: {input: 887, rem: "55.4", mobileVW: "277.2", tabletVW: "115.5", desktopVW: "69.3"}
889: {input: 888, rem: "55.5", mobileVW: "277.5", tabletVW: "115.6", desktopVW: "69.4"}
890: {input: 889, rem: "55.6", mobileVW: "277.8", tabletVW: "115.8", desktopVW: "69.5"}
891: {input: 890, rem: "55.6", mobileVW: "278.1", tabletVW: "115.9", desktopVW: "69.5"}
892: {input: 891, rem: "55.7", mobileVW: "278.4", tabletVW: "116.0", desktopVW: "69.6"}
893: {input: 892, rem: "55.8", mobileVW: "278.8", tabletVW: "116.1", desktopVW: "69.7"}
894: {input: 893, rem: "55.8", mobileVW: "279.1", tabletVW: "116.3", desktopVW: "69.8"}
895: {input: 894, rem: "55.9", mobileVW: "279.4", tabletVW: "116.4", desktopVW: "69.8"}
896: {input: 895, rem: "55.9", mobileVW: "279.7", tabletVW: "116.5", desktopVW: "69.9"}
897: {input: 896, rem: "56.0", mobileVW: "280.0", tabletVW: "116.7", desktopVW: "70.0"}
898: {input: 897, rem: "56.1", mobileVW: "280.3", tabletVW: "116.8", desktopVW: "70.1"}
899: {input: 898, rem: "56.1", mobileVW: "280.6", tabletVW: "116.9", desktopVW: "70.2"}
900: {input: 899, rem: "56.2", mobileVW: "280.9", tabletVW: "117.1", desktopVW: "70.2"}
901: {input: 900, rem: "56.3", mobileVW: "281.3", tabletVW: "117.2", desktopVW: "70.3"}
902: {input: 901, rem: "56.3", mobileVW: "281.6", tabletVW: "117.3", desktopVW: "70.4"}
903: {input: 902, rem: "56.4", mobileVW: "281.9", tabletVW: "117.4", desktopVW: "70.5"}
904: {input: 903, rem: "56.4", mobileVW: "282.2", tabletVW: "117.6", desktopVW: "70.5"}
905: {input: 904, rem: "56.5", mobileVW: "282.5", tabletVW: "117.7", desktopVW: "70.6"}
906: {input: 905, rem: "56.6", mobileVW: "282.8", tabletVW: "117.8", desktopVW: "70.7"}
907: {input: 906, rem: "56.6", mobileVW: "283.1", tabletVW: "118.0", desktopVW: "70.8"}
908: {input: 907, rem: "56.7", mobileVW: "283.4", tabletVW: "118.1", desktopVW: "70.9"}
909: {input: 908, rem: "56.8", mobileVW: "283.8", tabletVW: "118.2", desktopVW: "70.9"}
910: {input: 909, rem: "56.8", mobileVW: "284.1", tabletVW: "118.4", desktopVW: "71.0"}
911: {input: 910, rem: "56.9", mobileVW: "284.4", tabletVW: "118.5", desktopVW: "71.1"}
912: {input: 911, rem: "56.9", mobileVW: "284.7", tabletVW: "118.6", desktopVW: "71.2"}
913: {input: 912, rem: "57.0", mobileVW: "285.0", tabletVW: "118.8", desktopVW: "71.3"}
914: {input: 913, rem: "57.1", mobileVW: "285.3", tabletVW: "118.9", desktopVW: "71.3"}
915: {input: 914, rem: "57.1", mobileVW: "285.6", tabletVW: "119.0", desktopVW: "71.4"}
916: {input: 915, rem: "57.2", mobileVW: "285.9", tabletVW: "119.1", desktopVW: "71.5"}
917: {input: 916, rem: "57.3", mobileVW: "286.3", tabletVW: "119.3", desktopVW: "71.6"}
918: {input: 917, rem: "57.3", mobileVW: "286.6", tabletVW: "119.4", desktopVW: "71.6"}
919: {input: 918, rem: "57.4", mobileVW: "286.9", tabletVW: "119.5", desktopVW: "71.7"}
920: {input: 919, rem: "57.4", mobileVW: "287.2", tabletVW: "119.7", desktopVW: "71.8"}
921: {input: 920, rem: "57.5", mobileVW: "287.5", tabletVW: "119.8", desktopVW: "71.9"}
922: {input: 921, rem: "57.6", mobileVW: "287.8", tabletVW: "119.9", desktopVW: "72.0"}
923: {input: 922, rem: "57.6", mobileVW: "288.1", tabletVW: "120.1", desktopVW: "72.0"}
924: {input: 923, rem: "57.7", mobileVW: "288.4", tabletVW: "120.2", desktopVW: "72.1"}
925: {input: 924, rem: "57.8", mobileVW: "288.8", tabletVW: "120.3", desktopVW: "72.2"}
926: {input: 925, rem: "57.8", mobileVW: "289.1", tabletVW: "120.4", desktopVW: "72.3"}
927: {input: 926, rem: "57.9", mobileVW: "289.4", tabletVW: "120.6", desktopVW: "72.3"}
928: {input: 927, rem: "57.9", mobileVW: "289.7", tabletVW: "120.7", desktopVW: "72.4"}
929: {input: 928, rem: "58.0", mobileVW: "290.0", tabletVW: "120.8", desktopVW: "72.5"}
930: {input: 929, rem: "58.1", mobileVW: "290.3", tabletVW: "121.0", desktopVW: "72.6"}
931: {input: 930, rem: "58.1", mobileVW: "290.6", tabletVW: "121.1", desktopVW: "72.7"}
932: {input: 931, rem: "58.2", mobileVW: "290.9", tabletVW: "121.2", desktopVW: "72.7"}
933: {input: 932, rem: "58.3", mobileVW: "291.3", tabletVW: "121.4", desktopVW: "72.8"}
934: {input: 933, rem: "58.3", mobileVW: "291.6", tabletVW: "121.5", desktopVW: "72.9"}
935: {input: 934, rem: "58.4", mobileVW: "291.9", tabletVW: "121.6", desktopVW: "73.0"}
936: {input: 935, rem: "58.4", mobileVW: "292.2", tabletVW: "121.7", desktopVW: "73.0"}
937: {input: 936, rem: "58.5", mobileVW: "292.5", tabletVW: "121.9", desktopVW: "73.1"}
938: {input: 937, rem: "58.6", mobileVW: "292.8", tabletVW: "122.0", desktopVW: "73.2"}
939: {input: 938, rem: "58.6", mobileVW: "293.1", tabletVW: "122.1", desktopVW: "73.3"}
940: {input: 939, rem: "58.7", mobileVW: "293.4", tabletVW: "122.3", desktopVW: "73.4"}
941: {input: 940, rem: "58.8", mobileVW: "293.8", tabletVW: "122.4", desktopVW: "73.4"}
942: {input: 941, rem: "58.8", mobileVW: "294.1", tabletVW: "122.5", desktopVW: "73.5"}
943: {input: 942, rem: "58.9", mobileVW: "294.4", tabletVW: "122.7", desktopVW: "73.6"}
944: {input: 943, rem: "58.9", mobileVW: "294.7", tabletVW: "122.8", desktopVW: "73.7"}
945: {input: 944, rem: "59.0", mobileVW: "295.0", tabletVW: "122.9", desktopVW: "73.8"}
946: {input: 945, rem: "59.1", mobileVW: "295.3", tabletVW: "123.0", desktopVW: "73.8"}
947: {input: 946, rem: "59.1", mobileVW: "295.6", tabletVW: "123.2", desktopVW: "73.9"}
948: {input: 947, rem: "59.2", mobileVW: "295.9", tabletVW: "123.3", desktopVW: "74.0"}
949: {input: 948, rem: "59.3", mobileVW: "296.3", tabletVW: "123.4", desktopVW: "74.1"}
950: {input: 949, rem: "59.3", mobileVW: "296.6", tabletVW: "123.6", desktopVW: "74.1"}
951: {input: 950, rem: "59.4", mobileVW: "296.9", tabletVW: "123.7", desktopVW: "74.2"}
952: {input: 951, rem: "59.4", mobileVW: "297.2", tabletVW: "123.8", desktopVW: "74.3"}
953: {input: 952, rem: "59.5", mobileVW: "297.5", tabletVW: "124.0", desktopVW: "74.4"}
954: {input: 953, rem: "59.6", mobileVW: "297.8", tabletVW: "124.1", desktopVW: "74.5"}
955: {input: 954, rem: "59.6", mobileVW: "298.1", tabletVW: "124.2", desktopVW: "74.5"}
956: {input: 955, rem: "59.7", mobileVW: "298.4", tabletVW: "124.3", desktopVW: "74.6"}
957: {input: 956, rem: "59.8", mobileVW: "298.8", tabletVW: "124.5", desktopVW: "74.7"}
958: {input: 957, rem: "59.8", mobileVW: "299.1", tabletVW: "124.6", desktopVW: "74.8"}
959: {input: 958, rem: "59.9", mobileVW: "299.4", tabletVW: "124.7", desktopVW: "74.8"}
960: {input: 959, rem: "59.9", mobileVW: "299.7", tabletVW: "124.9", desktopVW: "74.9"}
961: {input: 960, rem: "60.0", mobileVW: "300.0", tabletVW: "125.0", desktopVW: "75.0"}
962: {input: 961, rem: "60.1", mobileVW: "300.3", tabletVW: "125.1", desktopVW: "75.1"}
963: {input: 962, rem: "60.1", mobileVW: "300.6", tabletVW: "125.3", desktopVW: "75.2"}
964: {input: 963, rem: "60.2", mobileVW: "300.9", tabletVW: "125.4", desktopVW: "75.2"}
965: {input: 964, rem: "60.3", mobileVW: "301.3", tabletVW: "125.5", desktopVW: "75.3"}
966: {input: 965, rem: "60.3", mobileVW: "301.6", tabletVW: "125.7", desktopVW: "75.4"}
967: {input: 966, rem: "60.4", mobileVW: "301.9", tabletVW: "125.8", desktopVW: "75.5"}
968: {input: 967, rem: "60.4", mobileVW: "302.2", tabletVW: "125.9", desktopVW: "75.5"}
969: {input: 968, rem: "60.5", mobileVW: "302.5", tabletVW: "126.0", desktopVW: "75.6"}
970: {input: 969, rem: "60.6", mobileVW: "302.8", tabletVW: "126.2", desktopVW: "75.7"}
971: {input: 970, rem: "60.6", mobileVW: "303.1", tabletVW: "126.3", desktopVW: "75.8"}
972: {input: 971, rem: "60.7", mobileVW: "303.4", tabletVW: "126.4", desktopVW: "75.9"}
973: {input: 972, rem: "60.8", mobileVW: "303.8", tabletVW: "126.6", desktopVW: "75.9"}
974: {input: 973, rem: "60.8", mobileVW: "304.1", tabletVW: "126.7", desktopVW: "76.0"}
975: {input: 974, rem: "60.9", mobileVW: "304.4", tabletVW: "126.8", desktopVW: "76.1"}
976: {input: 975, rem: "60.9", mobileVW: "304.7", tabletVW: "127.0", desktopVW: "76.2"}
977: {input: 976, rem: "61.0", mobileVW: "305.0", tabletVW: "127.1", desktopVW: "76.3"}
978: {input: 977, rem: "61.1", mobileVW: "305.3", tabletVW: "127.2", desktopVW: "76.3"}
979: {input: 978, rem: "61.1", mobileVW: "305.6", tabletVW: "127.3", desktopVW: "76.4"}
980: {input: 979, rem: "61.2", mobileVW: "305.9", tabletVW: "127.5", desktopVW: "76.5"}
981: {input: 980, rem: "61.3", mobileVW: "306.3", tabletVW: "127.6", desktopVW: "76.6"}
982: {input: 981, rem: "61.3", mobileVW: "306.6", tabletVW: "127.7", desktopVW: "76.6"}
983: {input: 982, rem: "61.4", mobileVW: "306.9", tabletVW: "127.9", desktopVW: "76.7"}
984: {input: 983, rem: "61.4", mobileVW: "307.2", tabletVW: "128.0", desktopVW: "76.8"}
985: {input: 984, rem: "61.5", mobileVW: "307.5", tabletVW: "128.1", desktopVW: "76.9"}
986: {input: 985, rem: "61.6", mobileVW: "307.8", tabletVW: "128.3", desktopVW: "77.0"}
987: {input: 986, rem: "61.6", mobileVW: "308.1", tabletVW: "128.4", desktopVW: "77.0"}
988: {input: 987, rem: "61.7", mobileVW: "308.4", tabletVW: "128.5", desktopVW: "77.1"}
989: {input: 988, rem: "61.8", mobileVW: "308.8", tabletVW: "128.6", desktopVW: "77.2"}
990: {input: 989, rem: "61.8", mobileVW: "309.1", tabletVW: "128.8", desktopVW: "77.3"}
991: {input: 990, rem: "61.9", mobileVW: "309.4", tabletVW: "128.9", desktopVW: "77.3"}
992: {input: 991, rem: "61.9", mobileVW: "309.7", tabletVW: "129.0", desktopVW: "77.4"}
993: {input: 992, rem: "62.0", mobileVW: "310.0", tabletVW: "129.2", desktopVW: "77.5"}
994: {input: 993, rem: "62.1", mobileVW: "310.3", tabletVW: "129.3", desktopVW: "77.6"}
995: {input: 994, rem: "62.1", mobileVW: "310.6", tabletVW: "129.4", desktopVW: "77.7"}
996: {input: 995, rem: "62.2", mobileVW: "310.9", tabletVW: "129.6", desktopVW: "77.7"}
997: {input: 996, rem: "62.3", mobileVW: "311.3", tabletVW: "129.7", desktopVW: "77.8"}
998: {input: 997, rem: "62.3", mobileVW: "311.6", tabletVW: "129.8", desktopVW: "77.9"}
999: {input: 998, rem: "62.4", mobileVW: "311.9", tabletVW: "129.9", desktopVW: "78.0"}
1000: {input: 999, rem: "62.4", mobileVW: "312.2", tabletVW: "130.1", desktopVW: "78.0"}
1001: {input: 1000, rem: "62.5", mobileVW: "312.5", tabletVW: "130.2", desktopVW: "78.1"}
1002: {input: 1001, rem: "62.6", mobileVW: "312.8", tabletVW: "130.3", desktopVW: "78.2"}
1003: {input: 1002, rem: "62.6", mobileVW: "313.1", tabletVW: "130.5", desktopVW: "78.3"}
1004: {input: 1003, rem: "62.7", mobileVW: "313.4", tabletVW: "130.6", desktopVW: "78.4"}
1005: {input: 1004, rem: "62.8", mobileVW: "313.8", tabletVW: "130.7", desktopVW: "78.4"}
1006: {input: 1005, rem: "62.8", mobileVW: "314.1", tabletVW: "130.9", desktopVW: "78.5"}
1007: {input: 1006, rem: "62.9", mobileVW: "314.4", tabletVW: "131.0", desktopVW: "78.6"}
1008: {input: 1007, rem: "62.9", mobileVW: "314.7", tabletVW: "131.1", desktopVW: "78.7"}
1009: {input: 1008, rem: "63.0", mobileVW: "315.0", tabletVW: "131.3", desktopVW: "78.8"}
1010: {input: 1009, rem: "63.1", mobileVW: "315.3", tabletVW: "131.4", desktopVW: "78.8"}
1011: {input: 1010, rem: "63.1", mobileVW: "315.6", tabletVW: "131.5", desktopVW: "78.9"}
1012: {input: 1011, rem: "63.2", mobileVW: "315.9", tabletVW: "131.6", desktopVW: "79.0"}
1013: {input: 1012, rem: "63.3", mobileVW: "316.3", tabletVW: "131.8", desktopVW: "79.1"}
1014: {input: 1013, rem: "63.3", mobileVW: "316.6", tabletVW: "131.9", desktopVW: "79.1"}
1015: {input: 1014, rem: "63.4", mobileVW: "316.9", tabletVW: "132.0", desktopVW: "79.2"}
1016: {input: 1015, rem: "63.4", mobileVW: "317.2", tabletVW: "132.2", desktopVW: "79.3"}
1017: {input: 1016, rem: "63.5", mobileVW: "317.5", tabletVW: "132.3", desktopVW: "79.4"}
1018: {input: 1017, rem: "63.6", mobileVW: "317.8", tabletVW: "132.4", desktopVW: "79.5"}
1019: {input: 1018, rem: "63.6", mobileVW: "318.1", tabletVW: "132.6", desktopVW: "79.5"}
1020: {input: 1019, rem: "63.7", mobileVW: "318.4", tabletVW: "132.7", desktopVW: "79.6"}
1021: {input: 1020, rem: "63.8", mobileVW: "318.8", tabletVW: "132.8", desktopVW: "79.7"}
1022: {input: 1021, rem: "63.8", mobileVW: "319.1", tabletVW: "132.9", desktopVW: "79.8"}
1023: {input: 1022, rem: "63.9", mobileVW: "319.4", tabletVW: "133.1", desktopVW: "79.8"}
1024: {input: 1023, rem: "63.9", mobileVW: "319.7", tabletVW: "133.2", desktopVW: "79.9"}
1025: {input: 1024, rem: "64.0", mobileVW: "320.0", tabletVW: "133.3", desktopVW: "80.0"}
1026: {input: 1025, rem: "64.1", mobileVW: "320.3", tabletVW: "133.5", desktopVW: "80.1"}
1027: {input: 1026, rem: "64.1", mobileVW: "320.6", tabletVW: "133.6", desktopVW: "80.2"}
1028: {input: 1027, rem: "64.2", mobileVW: "320.9", tabletVW: "133.7", desktopVW: "80.2"}
1029: {input: 1028, rem: "64.3", mobileVW: "321.3", tabletVW: "133.9", desktopVW: "80.3"}
1030: {input: 1029, rem: "64.3", mobileVW: "321.6", tabletVW: "134.0", desktopVW: "80.4"}
1031: {input: 1030, rem: "64.4", mobileVW: "321.9", tabletVW: "134.1", desktopVW: "80.5"}
1032: {input: 1031, rem: "64.4", mobileVW: "322.2", tabletVW: "134.2", desktopVW: "80.5"}
1033: {input: 1032, rem: "64.5", mobileVW: "322.5", tabletVW: "134.4", desktopVW: "80.6"}
1034: {input: 1033, rem: "64.6", mobileVW: "322.8", tabletVW: "134.5", desktopVW: "80.7"}
1035: {input: 1034, rem: "64.6", mobileVW: "323.1", tabletVW: "134.6", desktopVW: "80.8"}
1036: {input: 1035, rem: "64.7", mobileVW: "323.4", tabletVW: "134.8", desktopVW: "80.9"}
1037: {input: 1036, rem: "64.8", mobileVW: "323.8", tabletVW: "134.9", desktopVW: "80.9"}
1038: {input: 1037, rem: "64.8", mobileVW: "324.1", tabletVW: "135.0", desktopVW: "81.0"}
1039: {input: 1038, rem: "64.9", mobileVW: "324.4", tabletVW: "135.2", desktopVW: "81.1"}
1040: {input: 1039, rem: "64.9", mobileVW: "324.7", tabletVW: "135.3", desktopVW: "81.2"}
1041: {input: 1040, rem: "65.0", mobileVW: "325.0", tabletVW: "135.4", desktopVW: "81.3"}
1042: {input: 1041, rem: "65.1", mobileVW: "325.3", tabletVW: "135.5", desktopVW: "81.3"}
1043: {input: 1042, rem: "65.1", mobileVW: "325.6", tabletVW: "135.7", desktopVW: "81.4"}
1044: {input: 1043, rem: "65.2", mobileVW: "325.9", tabletVW: "135.8", desktopVW: "81.5"}
1045: {input: 1044, rem: "65.3", mobileVW: "326.3", tabletVW: "135.9", desktopVW: "81.6"}
1046: {input: 1045, rem: "65.3", mobileVW: "326.6", tabletVW: "136.1", desktopVW: "81.6"}
1047: {input: 1046, rem: "65.4", mobileVW: "326.9", tabletVW: "136.2", desktopVW: "81.7"}
1048: {input: 1047, rem: "65.4", mobileVW: "327.2", tabletVW: "136.3", desktopVW: "81.8"}
1049: {input: 1048, rem: "65.5", mobileVW: "327.5", tabletVW: "136.5", desktopVW: "81.9"}
1050: {input: 1049, rem: "65.6", mobileVW: "327.8", tabletVW: "136.6", desktopVW: "82.0"}
1051: {input: 1050, rem: "65.6", mobileVW: "328.1", tabletVW: "136.7", desktopVW: "82.0"}
1052: {input: 1051, rem: "65.7", mobileVW: "328.4", tabletVW: "136.8", desktopVW: "82.1"}
1053: {input: 1052, rem: "65.8", mobileVW: "328.8", tabletVW: "137.0", desktopVW: "82.2"}
1054: {input: 1053, rem: "65.8", mobileVW: "329.1", tabletVW: "137.1", desktopVW: "82.3"}
1055: {input: 1054, rem: "65.9", mobileVW: "329.4", tabletVW: "137.2", desktopVW: "82.3"}
1056: {input: 1055, rem: "65.9", mobileVW: "329.7", tabletVW: "137.4", desktopVW: "82.4"}
1057: {input: 1056, rem: "66.0", mobileVW: "330.0", tabletVW: "137.5", desktopVW: "82.5"}
1058: {input: 1057, rem: "66.1", mobileVW: "330.3", tabletVW: "137.6", desktopVW: "82.6"}
1059: {input: 1058, rem: "66.1", mobileVW: "330.6", tabletVW: "137.8", desktopVW: "82.7"}
1060: {input: 1059, rem: "66.2", mobileVW: "330.9", tabletVW: "137.9", desktopVW: "82.7"}
1061: {input: 1060, rem: "66.3", mobileVW: "331.3", tabletVW: "138.0", desktopVW: "82.8"}
1062: {input: 1061, rem: "66.3", mobileVW: "331.6", tabletVW: "138.2", desktopVW: "82.9"}
1063: {input: 1062, rem: "66.4", mobileVW: "331.9", tabletVW: "138.3", desktopVW: "83.0"}
1064: {input: 1063, rem: "66.4", mobileVW: "332.2", tabletVW: "138.4", desktopVW: "83.0"}
1065: {input: 1064, rem: "66.5", mobileVW: "332.5", tabletVW: "138.5", desktopVW: "83.1"}
1066: {input: 1065, rem: "66.6", mobileVW: "332.8", tabletVW: "138.7", desktopVW: "83.2"}
1067: {input: 1066, rem: "66.6", mobileVW: "333.1", tabletVW: "138.8", desktopVW: "83.3"}
1068: {input: 1067, rem: "66.7", mobileVW: "333.4", tabletVW: "138.9", desktopVW: "83.4"}
1069: {input: 1068, rem: "66.8", mobileVW: "333.8", tabletVW: "139.1", desktopVW: "83.4"}
1070: {input: 1069, rem: "66.8", mobileVW: "334.1", tabletVW: "139.2", desktopVW: "83.5"}
1071: {input: 1070, rem: "66.9", mobileVW: "334.4", tabletVW: "139.3", desktopVW: "83.6"}
1072: {input: 1071, rem: "66.9", mobileVW: "334.7", tabletVW: "139.5", desktopVW: "83.7"}
1073: {input: 1072, rem: "67.0", mobileVW: "335.0", tabletVW: "139.6", desktopVW: "83.8"}
1074: {input: 1073, rem: "67.1", mobileVW: "335.3", tabletVW: "139.7", desktopVW: "83.8"}
1075: {input: 1074, rem: "67.1", mobileVW: "335.6", tabletVW: "139.8", desktopVW: "83.9"}
1076: {input: 1075, rem: "67.2", mobileVW: "335.9", tabletVW: "140.0", desktopVW: "84.0"}
1077: {input: 1076, rem: "67.3", mobileVW: "336.3", tabletVW: "140.1", desktopVW: "84.1"}
1078: {input: 1077, rem: "67.3", mobileVW: "336.6", tabletVW: "140.2", desktopVW: "84.1"}
1079: {input: 1078, rem: "67.4", mobileVW: "336.9", tabletVW: "140.4", desktopVW: "84.2"}
1080: {input: 1079, rem: "67.4", mobileVW: "337.2", tabletVW: "140.5", desktopVW: "84.3"}
1081: {input: 1080, rem: "67.5", mobileVW: "337.5", tabletVW: "140.6", desktopVW: "84.4"}
1082: {input: 1081, rem: "67.6", mobileVW: "337.8", tabletVW: "140.8", desktopVW: "84.5"}
1083: {input: 1082, rem: "67.6", mobileVW: "338.1", tabletVW: "140.9", desktopVW: "84.5"}
1084: {input: 1083, rem: "67.7", mobileVW: "338.4", tabletVW: "141.0", desktopVW: "84.6"}
1085: {input: 1084, rem: "67.8", mobileVW: "338.8", tabletVW: "141.1", desktopVW: "84.7"}
1086: {input: 1085, rem: "67.8", mobileVW: "339.1", tabletVW: "141.3", desktopVW: "84.8"}
1087: {input: 1086, rem: "67.9", mobileVW: "339.4", tabletVW: "141.4", desktopVW: "84.8"}
1088: {input: 1087, rem: "67.9", mobileVW: "339.7", tabletVW: "141.5", desktopVW: "84.9"}
1089: {input: 1088, rem: "68.0", mobileVW: "340.0", tabletVW: "141.7", desktopVW: "85.0"}
1090: {input: 1089, rem: "68.1", mobileVW: "340.3", tabletVW: "141.8", desktopVW: "85.1"}
1091: {input: 1090, rem: "68.1", mobileVW: "340.6", tabletVW: "141.9", desktopVW: "85.2"}
1092: {input: 1091, rem: "68.2", mobileVW: "340.9", tabletVW: "142.1", desktopVW: "85.2"}
1093: {input: 1092, rem: "68.3", mobileVW: "341.3", tabletVW: "142.2", desktopVW: "85.3"}
1094: {input: 1093, rem: "68.3", mobileVW: "341.6", tabletVW: "142.3", desktopVW: "85.4"}
1095: {input: 1094, rem: "68.4", mobileVW: "341.9", tabletVW: "142.4", desktopVW: "85.5"}
1096: {input: 1095, rem: "68.4", mobileVW: "342.2", tabletVW: "142.6", desktopVW: "85.5"}
1097: {input: 1096, rem: "68.5", mobileVW: "342.5", tabletVW: "142.7", desktopVW: "85.6"}
1098: {input: 1097, rem: "68.6", mobileVW: "342.8", tabletVW: "142.8", desktopVW: "85.7"}
1099: {input: 1098, rem: "68.6", mobileVW: "343.1", tabletVW: "143.0", desktopVW: "85.8"}
1100: {input: 1099, rem: "68.7", mobileVW: "343.4", tabletVW: "143.1", desktopVW: "85.9"}
1101: {input: 1100, rem: "68.8", mobileVW: "343.8", tabletVW: "143.2", desktopVW: "85.9"}
1102: {input: 1101, rem: "68.8", mobileVW: "344.1", tabletVW: "143.4", desktopVW: "86.0"}
1103: {input: 1102, rem: "68.9", mobileVW: "344.4", tabletVW: "143.5", desktopVW: "86.1"}
1104: {input: 1103, rem: "68.9", mobileVW: "344.7", tabletVW: "143.6", desktopVW: "86.2"}
1105: {input: 1104, rem: "69.0", mobileVW: "345.0", tabletVW: "143.8", desktopVW: "86.3"}
1106: {input: 1105, rem: "69.1", mobileVW: "345.3", tabletVW: "143.9", desktopVW: "86.3"}
1107: {input: 1106, rem: "69.1", mobileVW: "345.6", tabletVW: "144.0", desktopVW: "86.4"}
1108: {input: 1107, rem: "69.2", mobileVW: "345.9", tabletVW: "144.1", desktopVW: "86.5"}
1109: {input: 1108, rem: "69.3", mobileVW: "346.3", tabletVW: "144.3", desktopVW: "86.6"}
1110: {input: 1109, rem: "69.3", mobileVW: "346.6", tabletVW: "144.4", desktopVW: "86.6"}
1111: {input: 1110, rem: "69.4", mobileVW: "346.9", tabletVW: "144.5", desktopVW: "86.7"}
1112: {input: 1111, rem: "69.4", mobileVW: "347.2", tabletVW: "144.7", desktopVW: "86.8"}
1113: {input: 1112, rem: "69.5", mobileVW: "347.5", tabletVW: "144.8", desktopVW: "86.9"}
1114: {input: 1113, rem: "69.6", mobileVW: "347.8", tabletVW: "144.9", desktopVW: "87.0"}
1115: {input: 1114, rem: "69.6", mobileVW: "348.1", tabletVW: "145.1", desktopVW: "87.0"}
1116: {input: 1115, rem: "69.7", mobileVW: "348.4", tabletVW: "145.2", desktopVW: "87.1"}
1117: {input: 1116, rem: "69.8", mobileVW: "348.8", tabletVW: "145.3", desktopVW: "87.2"}
1118: {input: 1117, rem: "69.8", mobileVW: "349.1", tabletVW: "145.4", desktopVW: "87.3"}
1119: {input: 1118, rem: "69.9", mobileVW: "349.4", tabletVW: "145.6", desktopVW: "87.3"}
1120: {input: 1119, rem: "69.9", mobileVW: "349.7", tabletVW: "145.7", desktopVW: "87.4"}
1121: {input: 1120, rem: "70.0", mobileVW: "350.0", tabletVW: "145.8", desktopVW: "87.5"}
1122: {input: 1121, rem: "70.1", mobileVW: "350.3", tabletVW: "146.0", desktopVW: "87.6"}
1123: {input: 1122, rem: "70.1", mobileVW: "350.6", tabletVW: "146.1", desktopVW: "87.7"}
1124: {input: 1123, rem: "70.2", mobileVW: "350.9", tabletVW: "146.2", desktopVW: "87.7"}
1125: {input: 1124, rem: "70.3", mobileVW: "351.3", tabletVW: "146.4", desktopVW: "87.8"}
1126: {input: 1125, rem: "70.3", mobileVW: "351.6", tabletVW: "146.5", desktopVW: "87.9"}
1127: {input: 1126, rem: "70.4", mobileVW: "351.9", tabletVW: "146.6", desktopVW: "88.0"}
1128: {input: 1127, rem: "70.4", mobileVW: "352.2", tabletVW: "146.7", desktopVW: "88.0"}
1129: {input: 1128, rem: "70.5", mobileVW: "352.5", tabletVW: "146.9", desktopVW: "88.1"}
1130: {input: 1129, rem: "70.6", mobileVW: "352.8", tabletVW: "147.0", desktopVW: "88.2"}
1131: {input: 1130, rem: "70.6", mobileVW: "353.1", tabletVW: "147.1", desktopVW: "88.3"}
1132: {input: 1131, rem: "70.7", mobileVW: "353.4", tabletVW: "147.3", desktopVW: "88.4"}
1133: {input: 1132, rem: "70.8", mobileVW: "353.8", tabletVW: "147.4", desktopVW: "88.4"}
1134: {input: 1133, rem: "70.8", mobileVW: "354.1", tabletVW: "147.5", desktopVW: "88.5"}
1135: {input: 1134, rem: "70.9", mobileVW: "354.4", tabletVW: "147.7", desktopVW: "88.6"}
1136: {input: 1135, rem: "70.9", mobileVW: "354.7", tabletVW: "147.8", desktopVW: "88.7"}
1137: {input: 1136, rem: "71.0", mobileVW: "355.0", tabletVW: "147.9", desktopVW: "88.8"}
1138: {input: 1137, rem: "71.1", mobileVW: "355.3", tabletVW: "148.0", desktopVW: "88.8"}
1139: {input: 1138, rem: "71.1", mobileVW: "355.6", tabletVW: "148.2", desktopVW: "88.9"}
1140: {input: 1139, rem: "71.2", mobileVW: "355.9", tabletVW: "148.3", desktopVW: "89.0"}
1141: {input: 1140, rem: "71.3", mobileVW: "356.3", tabletVW: "148.4", desktopVW: "89.1"}
1142: {input: 1141, rem: "71.3", mobileVW: "356.6", tabletVW: "148.6", desktopVW: "89.1"}
1143: {input: 1142, rem: "71.4", mobileVW: "356.9", tabletVW: "148.7", desktopVW: "89.2"}
1144: {input: 1143, rem: "71.4", mobileVW: "357.2", tabletVW: "148.8", desktopVW: "89.3"}
1145: {input: 1144, rem: "71.5", mobileVW: "357.5", tabletVW: "149.0", desktopVW: "89.4"}
1146: {input: 1145, rem: "71.6", mobileVW: "357.8", tabletVW: "149.1", desktopVW: "89.5"}
1147: {input: 1146, rem: "71.6", mobileVW: "358.1", tabletVW: "149.2", desktopVW: "89.5"}
1148: {input: 1147, rem: "71.7", mobileVW: "358.4", tabletVW: "149.3", desktopVW: "89.6"}
1149: {input: 1148, rem: "71.8", mobileVW: "358.8", tabletVW: "149.5", desktopVW: "89.7"}
1150: {input: 1149, rem: "71.8", mobileVW: "359.1", tabletVW: "149.6", desktopVW: "89.8"}
1151: {input: 1150, rem: "71.9", mobileVW: "359.4", tabletVW: "149.7", desktopVW: "89.8"}
1152: {input: 1151, rem: "71.9", mobileVW: "359.7", tabletVW: "149.9", desktopVW: "89.9"}
1153: {input: 1152, rem: "72.0", mobileVW: "360.0", tabletVW: "150.0", desktopVW: "90.0"}
1154: {input: 1153, rem: "72.1", mobileVW: "360.3", tabletVW: "150.1", desktopVW: "90.1"}
1155: {input: 1154, rem: "72.1", mobileVW: "360.6", tabletVW: "150.3", desktopVW: "90.2"}
1156: {input: 1155, rem: "72.2", mobileVW: "360.9", tabletVW: "150.4", desktopVW: "90.2"}
1157: {input: 1156, rem: "72.3", mobileVW: "361.3", tabletVW: "150.5", desktopVW: "90.3"}
1158: {input: 1157, rem: "72.3", mobileVW: "361.6", tabletVW: "150.7", desktopVW: "90.4"}
1159: {input: 1158, rem: "72.4", mobileVW: "361.9", tabletVW: "150.8", desktopVW: "90.5"}
1160: {input: 1159, rem: "72.4", mobileVW: "362.2", tabletVW: "150.9", desktopVW: "90.5"}
1161: {input: 1160, rem: "72.5", mobileVW: "362.5", tabletVW: "151.0", desktopVW: "90.6"}
1162: {input: 1161, rem: "72.6", mobileVW: "362.8", tabletVW: "151.2", desktopVW: "90.7"}
1163: {input: 1162, rem: "72.6", mobileVW: "363.1", tabletVW: "151.3", desktopVW: "90.8"}
1164: {input: 1163, rem: "72.7", mobileVW: "363.4", tabletVW: "151.4", desktopVW: "90.9"}
1165: {input: 1164, rem: "72.8", mobileVW: "363.8", tabletVW: "151.6", desktopVW: "90.9"}
1166: {input: 1165, rem: "72.8", mobileVW: "364.1", tabletVW: "151.7", desktopVW: "91.0"}
1167: {input: 1166, rem: "72.9", mobileVW: "364.4", tabletVW: "151.8", desktopVW: "91.1"}
1168: {input: 1167, rem: "72.9", mobileVW: "364.7", tabletVW: "152.0", desktopVW: "91.2"}
1169: {input: 1168, rem: "73.0", mobileVW: "365.0", tabletVW: "152.1", desktopVW: "91.3"}
1170: {input: 1169, rem: "73.1", mobileVW: "365.3", tabletVW: "152.2", desktopVW: "91.3"}
1171: {input: 1170, rem: "73.1", mobileVW: "365.6", tabletVW: "152.3", desktopVW: "91.4"}
1172: {input: 1171, rem: "73.2", mobileVW: "365.9", tabletVW: "152.5", desktopVW: "91.5"}
1173: {input: 1172, rem: "73.3", mobileVW: "366.3", tabletVW: "152.6", desktopVW: "91.6"}
1174: {input: 1173, rem: "73.3", mobileVW: "366.6", tabletVW: "152.7", desktopVW: "91.6"}
1175: {input: 1174, rem: "73.4", mobileVW: "366.9", tabletVW: "152.9", desktopVW: "91.7"}
1176: {input: 1175, rem: "73.4", mobileVW: "367.2", tabletVW: "153.0", desktopVW: "91.8"}
1177: {input: 1176, rem: "73.5", mobileVW: "367.5", tabletVW: "153.1", desktopVW: "91.9"}
1178: {input: 1177, rem: "73.6", mobileVW: "367.8", tabletVW: "153.3", desktopVW: "92.0"}
1179: {input: 1178, rem: "73.6", mobileVW: "368.1", tabletVW: "153.4", desktopVW: "92.0"}
1180: {input: 1179, rem: "73.7", mobileVW: "368.4", tabletVW: "153.5", desktopVW: "92.1"}
1181: {input: 1180, rem: "73.8", mobileVW: "368.8", tabletVW: "153.6", desktopVW: "92.2"}
1182: {input: 1181, rem: "73.8", mobileVW: "369.1", tabletVW: "153.8", desktopVW: "92.3"}
1183: {input: 1182, rem: "73.9", mobileVW: "369.4", tabletVW: "153.9", desktopVW: "92.3"}
1184: {input: 1183, rem: "73.9", mobileVW: "369.7", tabletVW: "154.0", desktopVW: "92.4"}
1185: {input: 1184, rem: "74.0", mobileVW: "370.0", tabletVW: "154.2", desktopVW: "92.5"}
1186: {input: 1185, rem: "74.1", mobileVW: "370.3", tabletVW: "154.3", desktopVW: "92.6"}
1187: {input: 1186, rem: "74.1", mobileVW: "370.6", tabletVW: "154.4", desktopVW: "92.7"}
1188: {input: 1187, rem: "74.2", mobileVW: "370.9", tabletVW: "154.6", desktopVW: "92.7"}
1189: {input: 1188, rem: "74.3", mobileVW: "371.3", tabletVW: "154.7", desktopVW: "92.8"}
1190: {input: 1189, rem: "74.3", mobileVW: "371.6", tabletVW: "154.8", desktopVW: "92.9"}
1191: {input: 1190, rem: "74.4", mobileVW: "371.9", tabletVW: "154.9", desktopVW: "93.0"}
1192: {input: 1191, rem: "74.4", mobileVW: "372.2", tabletVW: "155.1", desktopVW: "93.0"}
1193: {input: 1192, rem: "74.5", mobileVW: "372.5", tabletVW: "155.2", desktopVW: "93.1"}
1194: {input: 1193, rem: "74.6", mobileVW: "372.8", tabletVW: "155.3", desktopVW: "93.2"}
1195: {input: 1194, rem: "74.6", mobileVW: "373.1", tabletVW: "155.5", desktopVW: "93.3"}
1196: {input: 1195, rem: "74.7", mobileVW: "373.4", tabletVW: "155.6", desktopVW: "93.4"}
1197: {input: 1196, rem: "74.8", mobileVW: "373.8", tabletVW: "155.7", desktopVW: "93.4"}
1198: {input: 1197, rem: "74.8", mobileVW: "374.1", tabletVW: "155.9", desktopVW: "93.5"}
1199: {input: 1198, rem: "74.9", mobileVW: "374.4", tabletVW: "156.0", desktopVW: "93.6"}
1200: {input: 1199, rem: "74.9", mobileVW: "374.7", tabletVW: "156.1", desktopVW: "93.7"}
1201: {input: 1200, rem: "75.0", mobileVW: "375.0", tabletVW: "156.3", desktopVW: "93.8"}
1202: {input: 1201, rem: "75.1", mobileVW: "375.3", tabletVW: "156.4", desktopVW: "93.8"}
1203: {input: 1202, rem: "75.1", mobileVW: "375.6", tabletVW: "156.5", desktopVW: "93.9"}
1204: {input: 1203, rem: "75.2", mobileVW: "375.9", tabletVW: "156.6", desktopVW: "94.0"}
1205: {input: 1204, rem: "75.3", mobileVW: "376.3", tabletVW: "156.8", desktopVW: "94.1"}
1206: {input: 1205, rem: "75.3", mobileVW: "376.6", tabletVW: "156.9", desktopVW: "94.1"}
1207: {input: 1206, rem: "75.4", mobileVW: "376.9", tabletVW: "157.0", desktopVW: "94.2"}
1208: {input: 1207, rem: "75.4", mobileVW: "377.2", tabletVW: "157.2", desktopVW: "94.3"}
1209: {input: 1208, rem: "75.5", mobileVW: "377.5", tabletVW: "157.3", desktopVW: "94.4"}
1210: {input: 1209, rem: "75.6", mobileVW: "377.8", tabletVW: "157.4", desktopVW: "94.5"}
1211: {input: 1210, rem: "75.6", mobileVW: "378.1", tabletVW: "157.6", desktopVW: "94.5"}
1212: {input: 1211, rem: "75.7", mobileVW: "378.4", tabletVW: "157.7", desktopVW: "94.6"}
1213: {input: 1212, rem: "75.8", mobileVW: "378.8", tabletVW: "157.8", desktopVW: "94.7"}
1214: {input: 1213, rem: "75.8", mobileVW: "379.1", tabletVW: "157.9", desktopVW: "94.8"}
1215: {input: 1214, rem: "75.9", mobileVW: "379.4", tabletVW: "158.1", desktopVW: "94.8"}
1216: {input: 1215, rem: "75.9", mobileVW: "379.7", tabletVW: "158.2", desktopVW: "94.9"}
1217: {input: 1216, rem: "76.0", mobileVW: "380.0", tabletVW: "158.3", desktopVW: "95.0"}
1218: {input: 1217, rem: "76.1", mobileVW: "380.3", tabletVW: "158.5", desktopVW: "95.1"}
1219: {input: 1218, rem: "76.1", mobileVW: "380.6", tabletVW: "158.6", desktopVW: "95.2"}
1220: {input: 1219, rem: "76.2", mobileVW: "380.9", tabletVW: "158.7", desktopVW: "95.2"}
1221: {input: 1220, rem: "76.3", mobileVW: "381.3", tabletVW: "158.9", desktopVW: "95.3"}
1222: {input: 1221, rem: "76.3", mobileVW: "381.6", tabletVW: "159.0", desktopVW: "95.4"}
1223: {input: 1222, rem: "76.4", mobileVW: "381.9", tabletVW: "159.1", desktopVW: "95.5"}
1224: {input: 1223, rem: "76.4", mobileVW: "382.2", tabletVW: "159.2", desktopVW: "95.5"}
1225: {input: 1224, rem: "76.5", mobileVW: "382.5", tabletVW: "159.4", desktopVW: "95.6"}
1226: {input: 1225, rem: "76.6", mobileVW: "382.8", tabletVW: "159.5", desktopVW: "95.7"}
1227: {input: 1226, rem: "76.6", mobileVW: "383.1", tabletVW: "159.6", desktopVW: "95.8"}
1228: {input: 1227, rem: "76.7", mobileVW: "383.4", tabletVW: "159.8", desktopVW: "95.9"}
1229: {input: 1228, rem: "76.8", mobileVW: "383.8", tabletVW: "159.9", desktopVW: "95.9"}
1230: {input: 1229, rem: "76.8", mobileVW: "384.1", tabletVW: "160.0", desktopVW: "96.0"}
1231: {input: 1230, rem: "76.9", mobileVW: "384.4", tabletVW: "160.2", desktopVW: "96.1"}
1232: {input: 1231, rem: "76.9", mobileVW: "384.7", tabletVW: "160.3", desktopVW: "96.2"}
1233: {input: 1232, rem: "77.0", mobileVW: "385.0", tabletVW: "160.4", desktopVW: "96.3"}
1234: {input: 1233, rem: "77.1", mobileVW: "385.3", tabletVW: "160.5", desktopVW: "96.3"}
1235: {input: 1234, rem: "77.1", mobileVW: "385.6", tabletVW: "160.7", desktopVW: "96.4"}
1236: {input: 1235, rem: "77.2", mobileVW: "385.9", tabletVW: "160.8", desktopVW: "96.5"}
1237: {input: 1236, rem: "77.3", mobileVW: "386.3", tabletVW: "160.9", desktopVW: "96.6"}
1238: {input: 1237, rem: "77.3", mobileVW: "386.6", tabletVW: "161.1", desktopVW: "96.6"}
1239: {input: 1238, rem: "77.4", mobileVW: "386.9", tabletVW: "161.2", desktopVW: "96.7"}
1240: {input: 1239, rem: "77.4", mobileVW: "387.2", tabletVW: "161.3", desktopVW: "96.8"}
1241: {input: 1240, rem: "77.5", mobileVW: "387.5", tabletVW: "161.5", desktopVW: "96.9"}
1242: {input: 1241, rem: "77.6", mobileVW: "387.8", tabletVW: "161.6", desktopVW: "97.0"}
1243: {input: 1242, rem: "77.6", mobileVW: "388.1", tabletVW: "161.7", desktopVW: "97.0"}
1244: {input: 1243, rem: "77.7", mobileVW: "388.4", tabletVW: "161.8", desktopVW: "97.1"}
1245: {input: 1244, rem: "77.8", mobileVW: "388.8", tabletVW: "162.0", desktopVW: "97.2"}
1246: {input: 1245, rem: "77.8", mobileVW: "389.1", tabletVW: "162.1", desktopVW: "97.3"}
1247: {input: 1246, rem: "77.9", mobileVW: "389.4", tabletVW: "162.2", desktopVW: "97.3"}
1248: {input: 1247, rem: "77.9", mobileVW: "389.7", tabletVW: "162.4", desktopVW: "97.4"}
1249: {input: 1248, rem: "78.0", mobileVW: "390.0", tabletVW: "162.5", desktopVW: "97.5"}
1250: {input: 1249, rem: "78.1", mobileVW: "390.3", tabletVW: "162.6", desktopVW: "97.6"}
1251: {input: 1250, rem: "78.1", mobileVW: "390.6", tabletVW: "162.8", desktopVW: "97.7"}
1252: {input: 1251, rem: "78.2", mobileVW: "390.9", tabletVW: "162.9", desktopVW: "97.7"}
1253: {input: 1252, rem: "78.3", mobileVW: "391.3", tabletVW: "163.0", desktopVW: "97.8"}
1254: {input: 1253, rem: "78.3", mobileVW: "391.6", tabletVW: "163.2", desktopVW: "97.9"}
1255: {input: 1254, rem: "78.4", mobileVW: "391.9", tabletVW: "163.3", desktopVW: "98.0"}
1256: {input: 1255, rem: "78.4", mobileVW: "392.2", tabletVW: "163.4", desktopVW: "98.0"}
1257: {input: 1256, rem: "78.5", mobileVW: "392.5", tabletVW: "163.5", desktopVW: "98.1"}
1258: {input: 1257, rem: "78.6", mobileVW: "392.8", tabletVW: "163.7", desktopVW: "98.2"}
1259: {input: 1258, rem: "78.6", mobileVW: "393.1", tabletVW: "163.8", desktopVW: "98.3"}
1260: {input: 1259, rem: "78.7", mobileVW: "393.4", tabletVW: "163.9", desktopVW: "98.4"}
1261: {input: 1260, rem: "78.8", mobileVW: "393.8", tabletVW: "164.1", desktopVW: "98.4"}
1262: {input: 1261, rem: "78.8", mobileVW: "394.1", tabletVW: "164.2", desktopVW: "98.5"}
1263: {input: 1262, rem: "78.9", mobileVW: "394.4", tabletVW: "164.3", desktopVW: "98.6"}
1264: {input: 1263, rem: "78.9", mobileVW: "394.7", tabletVW: "164.5", desktopVW: "98.7"}
1265: {input: 1264, rem: "79.0", mobileVW: "395.0", tabletVW: "164.6", desktopVW: "98.8"}
1266: {input: 1265, rem: "79.1", mobileVW: "395.3", tabletVW: "164.7", desktopVW: "98.8"}
1267: {input: 1266, rem: "79.1", mobileVW: "395.6", tabletVW: "164.8", desktopVW: "98.9"}
1268: {input: 1267, rem: "79.2", mobileVW: "395.9", tabletVW: "165.0", desktopVW: "99.0"}
1269: {input: 1268, rem: "79.3", mobileVW: "396.3", tabletVW: "165.1", desktopVW: "99.1"}
1270: {input: 1269, rem: "79.3", mobileVW: "396.6", tabletVW: "165.2", desktopVW: "99.1"}
1271: {input: 1270, rem: "79.4", mobileVW: "396.9", tabletVW: "165.4", desktopVW: "99.2"}
1272: {input: 1271, rem: "79.4", mobileVW: "397.2", tabletVW: "165.5", desktopVW: "99.3"}
1273: {input: 1272, rem: "79.5", mobileVW: "397.5", tabletVW: "165.6", desktopVW: "99.4"}
1274: {input: 1273, rem: "79.6", mobileVW: "397.8", tabletVW: "165.8", desktopVW: "99.5"}
1275: {input: 1274, rem: "79.6", mobileVW: "398.1", tabletVW: "165.9", desktopVW: "99.5"}
1276: {input: 1275, rem: "79.7", mobileVW: "398.4", tabletVW: "166.0", desktopVW: "99.6"}
1277: {input: 1276, rem: "79.8", mobileVW: "398.8", tabletVW: "166.1", desktopVW: "99.7"}
1278: {input: 1277, rem: "79.8", mobileVW: "399.1", tabletVW: "166.3", desktopVW: "99.8"}
1279: {input: 1278, rem: "79.9", mobileVW: "399.4", tabletVW: "166.4", desktopVW: "99.8"}
1280: {input: 1279, rem: "79.9", mobileVW: "399.7", tabletVW: "166.5", desktopVW: "99.9"}
/************************THIS SECTION ACTS HAS NO MOBULE BUT INCLUDES DESKTOP WAS 1440PX*/
/*

1300: {input: 1299, rem: "81.2", tabletVW: "169.1", desktopVW: "101.5", desktopxlVW: "90.2"}
1301: {input: 1300, rem: "81.3", tabletVW: "169.3", desktopVW: "101.6", desktopxlVW: "90.3"}
1302: {input: 1301, rem: "81.3", tabletVW: "169.4", desktopVW: "101.6", desktopxlVW: "90.3"}
1303: {input: 1302, rem: "81.4", tabletVW: "169.5", desktopVW: "101.7", desktopxlVW: "90.4"}
1304: {input: 1303, rem: "81.4", tabletVW: "169.7", desktopVW: "101.8", desktopxlVW: "90.5"}
1305: {input: 1304, rem: "81.5", tabletVW: "169.8", desktopVW: "101.9", desktopxlVW: "90.6"}
1306: {input: 1305, rem: "81.6", tabletVW: "169.9", desktopVW: "102.0", desktopxlVW: "90.6"}
1307: {input: 1306, rem: "81.6", tabletVW: "170.1", desktopVW: "102.0", desktopxlVW: "90.7"}
1308: {input: 1307, rem: "81.7", tabletVW: "170.2", desktopVW: "102.1", desktopxlVW: "90.8"}
1309: {input: 1308, rem: "81.8", tabletVW: "170.3", desktopVW: "102.2", desktopxlVW: "90.8"}
1310: {input: 1309, rem: "81.8", tabletVW: "170.4", desktopVW: "102.3", desktopxlVW: "90.9"}
1311: {input: 1310, rem: "81.9", tabletVW: "170.6", desktopVW: "102.3", desktopxlVW: "91.0"}
1312: {input: 1311, rem: "81.9", tabletVW: "170.7", desktopVW: "102.4", desktopxlVW: "91.0"}
1313: {input: 1312, rem: "82.0", tabletVW: "170.8", desktopVW: "102.5", desktopxlVW: "91.1"}
1314: {input: 1313, rem: "82.1", tabletVW: "171.0", desktopVW: "102.6", desktopxlVW: "91.2"}
1315: {input: 1314, rem: "82.1", tabletVW: "171.1", desktopVW: "102.7", desktopxlVW: "91.3"}
1316: {input: 1315, rem: "82.2", tabletVW: "171.2", desktopVW: "102.7", desktopxlVW: "91.3"}
1317: {input: 1316, rem: "82.3", tabletVW: "171.4", desktopVW: "102.8", desktopxlVW: "91.4"}
1318: {input: 1317, rem: "82.3", tabletVW: "171.5", desktopVW: "102.9", desktopxlVW: "91.5"}
1319: {input: 1318, rem: "82.4", tabletVW: "171.6", desktopVW: "103.0", desktopxlVW: "91.5"}
1320: {input: 1319, rem: "82.4", tabletVW: "171.7", desktopVW: "103.0", desktopxlVW: "91.6"}
1321: {input: 1320, rem: "82.5", tabletVW: "171.9", desktopVW: "103.1", desktopxlVW: "91.7"}
1322: {input: 1321, rem: "82.6", tabletVW: "172.0", desktopVW: "103.2", desktopxlVW: "91.7"}
1323: {input: 1322, rem: "82.6", tabletVW: "172.1", desktopVW: "103.3", desktopxlVW: "91.8"}
1324: {input: 1323, rem: "82.7", tabletVW: "172.3", desktopVW: "103.4", desktopxlVW: "91.9"}
1325: {input: 1324, rem: "82.8", tabletVW: "172.4", desktopVW: "103.4", desktopxlVW: "91.9"}
1326: {input: 1325, rem: "82.8", tabletVW: "172.5", desktopVW: "103.5", desktopxlVW: "92.0"}
1327: {input: 1326, rem: "82.9", tabletVW: "172.7", desktopVW: "103.6", desktopxlVW: "92.1"}
1328: {input: 1327, rem: "82.9", tabletVW: "172.8", desktopVW: "103.7", desktopxlVW: "92.2"}
1329: {input: 1328, rem: "83.0", tabletVW: "172.9", desktopVW: "103.8", desktopxlVW: "92.2"}
1330: {input: 1329, rem: "83.1", tabletVW: "173.0", desktopVW: "103.8", desktopxlVW: "92.3"}
1331: {input: 1330, rem: "83.1", tabletVW: "173.2", desktopVW: "103.9", desktopxlVW: "92.4"}
1332: {input: 1331, rem: "83.2", tabletVW: "173.3", desktopVW: "104.0", desktopxlVW: "92.4"}
1333: {input: 1332, rem: "83.3", tabletVW: "173.4", desktopVW: "104.1", desktopxlVW: "92.5"}
1334: {input: 1333, rem: "83.3", tabletVW: "173.6", desktopVW: "104.1", desktopxlVW: "92.6"}
1335: {input: 1334, rem: "83.4", tabletVW: "173.7", desktopVW: "104.2", desktopxlVW: "92.6"}
1336: {input: 1335, rem: "83.4", tabletVW: "173.8", desktopVW: "104.3", desktopxlVW: "92.7"}
1337: {input: 1336, rem: "83.5", tabletVW: "174.0", desktopVW: "104.4", desktopxlVW: "92.8"}
1338: {input: 1337, rem: "83.6", tabletVW: "174.1", desktopVW: "104.5", desktopxlVW: "92.8"}
1339: {input: 1338, rem: "83.6", tabletVW: "174.2", desktopVW: "104.5", desktopxlVW: "92.9"}
1340: {input: 1339, rem: "83.7", tabletVW: "174.3", desktopVW: "104.6", desktopxlVW: "93.0"}
1341: {input: 1340, rem: "83.8", tabletVW: "174.5", desktopVW: "104.7", desktopxlVW: "93.1"}
1342: {input: 1341, rem: "83.8", tabletVW: "174.6", desktopVW: "104.8", desktopxlVW: "93.1"}
1343: {input: 1342, rem: "83.9", tabletVW: "174.7", desktopVW: "104.8", desktopxlVW: "93.2"}
1344: {input: 1343, rem: "83.9", tabletVW: "174.9", desktopVW: "104.9", desktopxlVW: "93.3"}
1345: {input: 1344, rem: "84.0", tabletVW: "175.0", desktopVW: "105.0", desktopxlVW: "93.3"}
1346: {input: 1345, rem: "84.1", tabletVW: "175.1", desktopVW: "105.1", desktopxlVW: "93.4"}
1347: {input: 1346, rem: "84.1", tabletVW: "175.3", desktopVW: "105.2", desktopxlVW: "93.5"}
1348: {input: 1347, rem: "84.2", tabletVW: "175.4", desktopVW: "105.2", desktopxlVW: "93.5"}
1349: {input: 1348, rem: "84.3", tabletVW: "175.5", desktopVW: "105.3", desktopxlVW: "93.6"}
1350: {input: 1349, rem: "84.3", tabletVW: "175.7", desktopVW: "105.4", desktopxlVW: "93.7"}
1351: {input: 1350, rem: "84.4", tabletVW: "175.8", desktopVW: "105.5", desktopxlVW: "93.8"}
1352: {input: 1351, rem: "84.4", tabletVW: "175.9", desktopVW: "105.5", desktopxlVW: "93.8"}
1353: {input: 1352, rem: "84.5", tabletVW: "176.0", desktopVW: "105.6", desktopxlVW: "93.9"}
1354: {input: 1353, rem: "84.6", tabletVW: "176.2", desktopVW: "105.7", desktopxlVW: "94.0"}
1355: {input: 1354, rem: "84.6", tabletVW: "176.3", desktopVW: "105.8", desktopxlVW: "94.0"}
1356: {input: 1355, rem: "84.7", tabletVW: "176.4", desktopVW: "105.9", desktopxlVW: "94.1"}
1357: {input: 1356, rem: "84.8", tabletVW: "176.6", desktopVW: "105.9", desktopxlVW: "94.2"}
1358: {input: 1357, rem: "84.8", tabletVW: "176.7", desktopVW: "106.0", desktopxlVW: "94.2"}
1359: {input: 1358, rem: "84.9", tabletVW: "176.8", desktopVW: "106.1", desktopxlVW: "94.3"}
1360: {input: 1359, rem: "84.9", tabletVW: "177.0", desktopVW: "106.2", desktopxlVW: "94.4"}
1361: {input: 1360, rem: "85.0", tabletVW: "177.1", desktopVW: "106.3", desktopxlVW: "94.4"}
1362: {input: 1361, rem: "85.1", tabletVW: "177.2", desktopVW: "106.3", desktopxlVW: "94.5"}
1363: {input: 1362, rem: "85.1", tabletVW: "177.3", desktopVW: "106.4", desktopxlVW: "94.6"}
1364: {input: 1363, rem: "85.2", tabletVW: "177.5", desktopVW: "106.5", desktopxlVW: "94.7"}
1365: {input: 1364, rem: "85.3", tabletVW: "177.6", desktopVW: "106.6", desktopxlVW: "94.7"}
1366: {input: 1365, rem: "85.3", tabletVW: "177.7", desktopVW: "106.6", desktopxlVW: "94.8"}
1367: {input: 1366, rem: "85.4", tabletVW: "177.9", desktopVW: "106.7", desktopxlVW: "94.9"}
1368: {input: 1367, rem: "85.4", tabletVW: "178.0", desktopVW: "106.8", desktopxlVW: "94.9"}
1369: {input: 1368, rem: "85.5", tabletVW: "178.1", desktopVW: "106.9", desktopxlVW: "95.0"}
1370: {input: 1369, rem: "85.6", tabletVW: "178.3", desktopVW: "107.0", desktopxlVW: "95.1"}
1371: {input: 1370, rem: "85.6", tabletVW: "178.4", desktopVW: "107.0", desktopxlVW: "95.1"}
1372: {input: 1371, rem: "85.7", tabletVW: "178.5", desktopVW: "107.1", desktopxlVW: "95.2"}
1373: {input: 1372, rem: "85.8", tabletVW: "178.6", desktopVW: "107.2", desktopxlVW: "95.3"}
1374: {input: 1373, rem: "85.8", tabletVW: "178.8", desktopVW: "107.3", desktopxlVW: "95.3"}
1375: {input: 1374, rem: "85.9", tabletVW: "178.9", desktopVW: "107.3", desktopxlVW: "95.4"}
1376: {input: 1375, rem: "85.9", tabletVW: "179.0", desktopVW: "107.4", desktopxlVW: "95.5"}
1377: {input: 1376, rem: "86.0", tabletVW: "179.2", desktopVW: "107.5", desktopxlVW: "95.6"}
1378: {input: 1377, rem: "86.1", tabletVW: "179.3", desktopVW: "107.6", desktopxlVW: "95.6"}
1379: {input: 1378, rem: "86.1", tabletVW: "179.4", desktopVW: "107.7", desktopxlVW: "95.7"}
1380: {input: 1379, rem: "86.2", tabletVW: "179.6", desktopVW: "107.7", desktopxlVW: "95.8"}
1381: {input: 1380, rem: "86.3", tabletVW: "179.7", desktopVW: "107.8", desktopxlVW: "95.8"}
1382: {input: 1381, rem: "86.3", tabletVW: "179.8", desktopVW: "107.9", desktopxlVW: "95.9"}
1383: {input: 1382, rem: "86.4", tabletVW: "179.9", desktopVW: "108.0", desktopxlVW: "96.0"}
1384: {input: 1383, rem: "86.4", tabletVW: "180.1", desktopVW: "108.0", desktopxlVW: "96.0"}
1385: {input: 1384, rem: "86.5", tabletVW: "180.2", desktopVW: "108.1", desktopxlVW: "96.1"}
1386: {input: 1385, rem: "86.6", tabletVW: "180.3", desktopVW: "108.2", desktopxlVW: "96.2"}
1387: {input: 1386, rem: "86.6", tabletVW: "180.5", desktopVW: "108.3", desktopxlVW: "96.3"}
1388: {input: 1387, rem: "86.7", tabletVW: "180.6", desktopVW: "108.4", desktopxlVW: "96.3"}
1389: {input: 1388, rem: "86.8", tabletVW: "180.7", desktopVW: "108.4", desktopxlVW: "96.4"}
1390: {input: 1389, rem: "86.8", tabletVW: "180.9", desktopVW: "108.5", desktopxlVW: "96.5"}
1391: {input: 1390, rem: "86.9", tabletVW: "181.0", desktopVW: "108.6", desktopxlVW: "96.5"}
1392: {input: 1391, rem: "86.9", tabletVW: "181.1", desktopVW: "108.7", desktopxlVW: "96.6"}
1393: {input: 1392, rem: "87.0", tabletVW: "181.3", desktopVW: "108.7", desktopxlVW: "96.7"}
1394: {input: 1393, rem: "87.1", tabletVW: "181.4", desktopVW: "108.8", desktopxlVW: "96.7"}
1395: {input: 1394, rem: "87.1", tabletVW: "181.5", desktopVW: "108.9", desktopxlVW: "96.8"}
1396: {input: 1395, rem: "87.2", tabletVW: "181.6", desktopVW: "109.0", desktopxlVW: "96.9"}
1397: {input: 1396, rem: "87.3", tabletVW: "181.8", desktopVW: "109.1", desktopxlVW: "96.9"}
1398: {input: 1397, rem: "87.3", tabletVW: "181.9", desktopVW: "109.1", desktopxlVW: "97.0"}
1399: {input: 1398, rem: "87.4", tabletVW: "182.0", desktopVW: "109.2", desktopxlVW: "97.1"}
1400: {input: 1399, rem: "87.4", tabletVW: "182.2", desktopVW: "109.3", desktopxlVW: "97.2"}
1401: {input: 1400, rem: "87.5", tabletVW: "182.3", desktopVW: "109.4", desktopxlVW: "97.2"}
1402: {input: 1401, rem: "87.6", tabletVW: "182.4", desktopVW: "109.5", desktopxlVW: "97.3"}
1403: {input: 1402, rem: "87.6", tabletVW: "182.6", desktopVW: "109.5", desktopxlVW: "97.4"}
1404: {input: 1403, rem: "87.7", tabletVW: "182.7", desktopVW: "109.6", desktopxlVW: "97.4"}
1405: {input: 1404, rem: "87.8", tabletVW: "182.8", desktopVW: "109.7", desktopxlVW: "97.5"}
1406: {input: 1405, rem: "87.8", tabletVW: "182.9", desktopVW: "109.8", desktopxlVW: "97.6"}
1407: {input: 1406, rem: "87.9", tabletVW: "183.1", desktopVW: "109.8", desktopxlVW: "97.6"}
1408: {input: 1407, rem: "87.9", tabletVW: "183.2", desktopVW: "109.9", desktopxlVW: "97.7"}
1409: {input: 1408, rem: "88.0", tabletVW: "183.3", desktopVW: "110.0", desktopxlVW: "97.8"}
1410: {input: 1409, rem: "88.1", tabletVW: "183.5", desktopVW: "110.1", desktopxlVW: "97.8"}
1411: {input: 1410, rem: "88.1", tabletVW: "183.6", desktopVW: "110.2", desktopxlVW: "97.9"}
1412: {input: 1411, rem: "88.2", tabletVW: "183.7", desktopVW: "110.2", desktopxlVW: "98.0"}
1413: {input: 1412, rem: "88.3", tabletVW: "183.9", desktopVW: "110.3", desktopxlVW: "98.1"}
1414: {input: 1413, rem: "88.3", tabletVW: "184.0", desktopVW: "110.4", desktopxlVW: "98.1"}
1415: {input: 1414, rem: "88.4", tabletVW: "184.1", desktopVW: "110.5", desktopxlVW: "98.2"}
1416: {input: 1415, rem: "88.4", tabletVW: "184.2", desktopVW: "110.5", desktopxlVW: "98.3"}
1417: {input: 1416, rem: "88.5", tabletVW: "184.4", desktopVW: "110.6", desktopxlVW: "98.3"}
1418: {input: 1417, rem: "88.6", tabletVW: "184.5", desktopVW: "110.7", desktopxlVW: "98.4"}
1419: {input: 1418, rem: "88.6", tabletVW: "184.6", desktopVW: "110.8", desktopxlVW: "98.5"}
1420: {input: 1419, rem: "88.7", tabletVW: "184.8", desktopVW: "110.9", desktopxlVW: "98.5"}
1421: {input: 1420, rem: "88.8", tabletVW: "184.9", desktopVW: "110.9", desktopxlVW: "98.6"}
1422: {input: 1421, rem: "88.8", tabletVW: "185.0", desktopVW: "111.0", desktopxlVW: "98.7"}
1423: {input: 1422, rem: "88.9", tabletVW: "185.2", desktopVW: "111.1", desktopxlVW: "98.8"}
1424: {input: 1423, rem: "88.9", tabletVW: "185.3", desktopVW: "111.2", desktopxlVW: "98.8"}
1425: {input: 1424, rem: "89.0", tabletVW: "185.4", desktopVW: "111.3", desktopxlVW: "98.9"}
1426: {input: 1425, rem: "89.1", tabletVW: "185.5", desktopVW: "111.3", desktopxlVW: "99.0"}
1427: {input: 1426, rem: "89.1", tabletVW: "185.7", desktopVW: "111.4", desktopxlVW: "99.0"}
1428: {input: 1427, rem: "89.2", tabletVW: "185.8", desktopVW: "111.5", desktopxlVW: "99.1"}
1429: {input: 1428, rem: "89.3", tabletVW: "185.9", desktopVW: "111.6", desktopxlVW: "99.2"}
1430: {input: 1429, rem: "89.3", tabletVW: "186.1", desktopVW: "111.6", desktopxlVW: "99.2"}
1431: {input: 1430, rem: "89.4", tabletVW: "186.2", desktopVW: "111.7", desktopxlVW: "99.3"}
1432: {input: 1431, rem: "89.4", tabletVW: "186.3", desktopVW: "111.8", desktopxlVW: "99.4"}
1433: {input: 1432, rem: "89.5", tabletVW: "186.5", desktopVW: "111.9", desktopxlVW: "99.4"}
1434: {input: 1433, rem: "89.6", tabletVW: "186.6", desktopVW: "112.0", desktopxlVW: "99.5"}
1435: {input: 1434, rem: "89.6", tabletVW: "186.7", desktopVW: "112.0", desktopxlVW: "99.6"}
1436: {input: 1435, rem: "89.7", tabletVW: "186.8", desktopVW: "112.1", desktopxlVW: "99.7"}
1437: {input: 1436, rem: "89.8", tabletVW: "187.0", desktopVW: "112.2", desktopxlVW: "99.7"}
1438: {input: 1437, rem: "89.8", tabletVW: "187.1", desktopVW: "112.3", desktopxlVW: "99.8"}
1439: {input: 1438, rem: "89.9", tabletVW: "187.2", desktopVW: "112.3", desktopxlVW: "99.9"}
1440: {input: 1439, rem: "89.9", tabletVW: "187.4", desktopVW: "112.4", desktopxlVW: "99.9"}
1441: {input: 1440, rem: "90.0", tabletVW: "187.5", desktopVW: "112.5", desktopxlVW: "100.0"}
1442: {input: 1441, rem: "90.1", tabletVW: "187.6", desktopVW: "112.6", desktopxlVW: "100.1"}
1443: {input: 1442, rem: "90.1", tabletVW: "187.8", desktopVW: "112.7", desktopxlVW: "100.1"}
1444: {input: 1443, rem: "90.2", tabletVW: "187.9", desktopVW: "112.7", desktopxlVW: "100.2"}
1445: {input: 1444, rem: "90.3", tabletVW: "188.0", desktopVW: "112.8", desktopxlVW: "100.3"}
1446: {input: 1445, rem: "90.3", tabletVW: "188.2", desktopVW: "112.9", desktopxlVW: "100.3"}
1447: {input: 1446, rem: "90.4", tabletVW: "188.3", desktopVW: "113.0", desktopxlVW: "100.4"}
1448: {input: 1447, rem: "90.4", tabletVW: "188.4", desktopVW: "113.0", desktopxlVW: "100.5"}
1449: {input: 1448, rem: "90.5", tabletVW: "188.5", desktopVW: "113.1", desktopxlVW: "100.6"}
1450: {input: 1449, rem: "90.6", tabletVW: "188.7", desktopVW: "113.2", desktopxlVW: "100.6"}
1451: {input: 1450, rem: "90.6", tabletVW: "188.8", desktopVW: "113.3", desktopxlVW: "100.7"}
1452: {input: 1451, rem: "90.7", tabletVW: "188.9", desktopVW: "113.4", desktopxlVW: "100.8"}
1453: {input: 1452, rem: "90.8", tabletVW: "189.1", desktopVW: "113.4", desktopxlVW: "100.8"}
1454: {input: 1453, rem: "90.8", tabletVW: "189.2", desktopVW: "113.5", desktopxlVW: "100.9"}
1455: {input: 1454, rem: "90.9", tabletVW: "189.3", desktopVW: "113.6", desktopxlVW: "101.0"}
1456: {input: 1455, rem: "90.9", tabletVW: "189.5", desktopVW: "113.7", desktopxlVW: "101.0"}
1457: {input: 1456, rem: "91.0", tabletVW: "189.6", desktopVW: "113.8", desktopxlVW: "101.1"}
1458: {input: 1457, rem: "91.1", tabletVW: "189.7", desktopVW: "113.8", desktopxlVW: "101.2"}
1459: {input: 1458, rem: "91.1", tabletVW: "189.8", desktopVW: "113.9", desktopxlVW: "101.3"}
1460: {input: 1459, rem: "91.2", tabletVW: "190.0", desktopVW: "114.0", desktopxlVW: "101.3"}
1461: {input: 1460, rem: "91.3", tabletVW: "190.1", desktopVW: "114.1", desktopxlVW: "101.4"}
1462: {input: 1461, rem: "91.3", tabletVW: "190.2", desktopVW: "114.1", desktopxlVW: "101.5"}
1463: {input: 1462, rem: "91.4", tabletVW: "190.4", desktopVW: "114.2", desktopxlVW: "101.5"}
1464: {input: 1463, rem: "91.4", tabletVW: "190.5", desktopVW: "114.3", desktopxlVW: "101.6"}
1465: {input: 1464, rem: "91.5", tabletVW: "190.6", desktopVW: "114.4", desktopxlVW: "101.7"}
1466: {input: 1465, rem: "91.6", tabletVW: "190.8", desktopVW: "114.5", desktopxlVW: "101.7"}
1467: {input: 1466, rem: "91.6", tabletVW: "190.9", desktopVW: "114.5", desktopxlVW: "101.8"}
1468: {input: 1467, rem: "91.7", tabletVW: "191.0", desktopVW: "114.6", desktopxlVW: "101.9"}
1469: {input: 1468, rem: "91.8", tabletVW: "191.1", desktopVW: "114.7", desktopxlVW: "101.9"}
1470: {input: 1469, rem: "91.8", tabletVW: "191.3", desktopVW: "114.8", desktopxlVW: "102.0"}
1471: {input: 1470, rem: "91.9", tabletVW: "191.4", desktopVW: "114.8", desktopxlVW: "102.1"}
1472: {input: 1471, rem: "91.9", tabletVW: "191.5", desktopVW: "114.9", desktopxlVW: "102.2"}
1473: {input: 1472, rem: "92.0", tabletVW: "191.7", desktopVW: "115.0", desktopxlVW: "102.2"}
1474: {input: 1473, rem: "92.1", tabletVW: "191.8", desktopVW: "115.1", desktopxlVW: "102.3"}
1475: {input: 1474, rem: "92.1", tabletVW: "191.9", desktopVW: "115.2", desktopxlVW: "102.4"}
1476: {input: 1475, rem: "92.2", tabletVW: "192.1", desktopVW: "115.2", desktopxlVW: "102.4"}
1477: {input: 1476, rem: "92.3", tabletVW: "192.2", desktopVW: "115.3", desktopxlVW: "102.5"}
1478: {input: 1477, rem: "92.3", tabletVW: "192.3", desktopVW: "115.4", desktopxlVW: "102.6"}
1479: {input: 1478, rem: "92.4", tabletVW: "192.4", desktopVW: "115.5", desktopxlVW: "102.6"}
1480: {input: 1479, rem: "92.4", tabletVW: "192.6", desktopVW: "115.5", desktopxlVW: "102.7"}
1481: {input: 1480, rem: "92.5", tabletVW: "192.7", desktopVW: "115.6", desktopxlVW: "102.8"}
1482: {input: 1481, rem: "92.6", tabletVW: "192.8", desktopVW: "115.7", desktopxlVW: "102.8"}
1483: {input: 1482, rem: "92.6", tabletVW: "193.0", desktopVW: "115.8", desktopxlVW: "102.9"}
1484: {input: 1483, rem: "92.7", tabletVW: "193.1", desktopVW: "115.9", desktopxlVW: "103.0"}
1485: {input: 1484, rem: "92.8", tabletVW: "193.2", desktopVW: "115.9", desktopxlVW: "103.1"}
1486: {input: 1485, rem: "92.8", tabletVW: "193.4", desktopVW: "116.0", desktopxlVW: "103.1"}
1487: {input: 1486, rem: "92.9", tabletVW: "193.5", desktopVW: "116.1", desktopxlVW: "103.2"}
1488: {input: 1487, rem: "92.9", tabletVW: "193.6", desktopVW: "116.2", desktopxlVW: "103.3"}
1489: {input: 1488, rem: "93.0", tabletVW: "193.8", desktopVW: "116.3", desktopxlVW: "103.3"}
1490: {input: 1489, rem: "93.1", tabletVW: "193.9", desktopVW: "116.3", desktopxlVW: "103.4"}
1491: {input: 1490, rem: "93.1", tabletVW: "194.0", desktopVW: "116.4", desktopxlVW: "103.5"}
1492: {input: 1491, rem: "93.2", tabletVW: "194.1", desktopVW: "116.5", desktopxlVW: "103.5"}
1493: {input: 1492, rem: "93.3", tabletVW: "194.3", desktopVW: "116.6", desktopxlVW: "103.6"}
1494: {input: 1493, rem: "93.3", tabletVW: "194.4", desktopVW: "116.6", desktopxlVW: "103.7"}
1495: {input: 1494, rem: "93.4", tabletVW: "194.5", desktopVW: "116.7", desktopxlVW: "103.8"}
1496: {input: 1495, rem: "93.4", tabletVW: "194.7", desktopVW: "116.8", desktopxlVW: "103.8"}
1497: {input: 1496, rem: "93.5", tabletVW: "194.8", desktopVW: "116.9", desktopxlVW: "103.9"}
1498: {input: 1497, rem: "93.6", tabletVW: "194.9", desktopVW: "117.0", desktopxlVW: "104.0"}
1499: {input: 1498, rem: "93.6", tabletVW: "195.1", desktopVW: "117.0", desktopxlVW: "104.0"}

}]; */
/*
const bigDesktopXLARGE = [{

    100: { input: 99, rem: "6.2", desktopxlVW: "6.9" }
    101: { input: 100, rem: "6.3", desktopxlVW: "6.9" }
    102: { input: 101, rem: "6.3", desktopxlVW: "7.0" }
    103: { input: 102, rem: "6.4", desktopxlVW: "7.1" }
    104: { input: 103, rem: "6.4", desktopxlVW: "7.2" }
    105: { input: 104, rem: "6.5", desktopxlVW: "7.2" }
    106: { input: 105, rem: "6.6", desktopxlVW: "7.3" }
    107: { input: 106, rem: "6.6", desktopxlVW: "7.4" }
    108: { input: 107, rem: "6.7", desktopxlVW: "7.4" }
    109: { input: 108, rem: "6.8", desktopxlVW: "7.5" }
    110: { input: 109, rem: "6.8", desktopxlVW: "7.6" }
    111: { input: 110, rem: "6.9", desktopxlVW: "7.6" }
    112: { input: 111, rem: "6.9", desktopxlVW: "7.7" }
    113: { input: 112, rem: "7.0", desktopxlVW: "7.8" }
    114: { input: 113, rem: "7.1", desktopxlVW: "7.8" }
    115: { input: 114, rem: "7.1", desktopxlVW: "7.9" }
    116: { input: 115, rem: "7.2", desktopxlVW: "8.0" }
    117: { input: 116, rem: "7.3", desktopxlVW: "8.1" }
    118: { input: 117, rem: "7.3", desktopxlVW: "8.1" }
    119: { input: 118, rem: "7.4", desktopxlVW: "8.2" }
    120: { input: 119, rem: "7.4", desktopxlVW: "8.3" }
    121: { input: 120, rem: "7.5", desktopxlVW: "8.3" }
    122: { input: 121, rem: "7.6", desktopxlVW: "8.4" }
    123: { input: 122, rem: "7.6", desktopxlVW: "8.5" }
    124: { input: 123, rem: "7.7", desktopxlVW: "8.5" }
    125: { input: 124, rem: "7.8", desktopxlVW: "8.6" }
    126: { input: 125, rem: "7.8", desktopxlVW: "8.7" }
    127: { input: 126, rem: "7.9", desktopxlVW: "8.8" }
    128: { input: 127, rem: "7.9", desktopxlVW: "8.8" }
    129: { input: 128, rem: "8.0", desktopxlVW: "8.9" }
    130: { input: 129, rem: "8.1", desktopxlVW: "9.0" }
    131: { input: 130, rem: "8.1", desktopxlVW: "9.0" }
    132: { input: 131, rem: "8.2", desktopxlVW: "9.1" }
    133: { input: 132, rem: "8.3", desktopxlVW: "9.2" }
    134: { input: 133, rem: "8.3", desktopxlVW: "9.2" }
    135: { input: 134, rem: "8.4", desktopxlVW: "9.3" }
    136: { input: 135, rem: "8.4", desktopxlVW: "9.4" }
    137: { input: 136, rem: "8.5", desktopxlVW: "9.4" }
    138: { input: 137, rem: "8.6", desktopxlVW: "9.5" }
    139: { input: 138, rem: "8.6", desktopxlVW: "9.6" }
    140: { input: 139, rem: "8.7", desktopxlVW: "9.7" }
    141: { input: 140, rem: "8.8", desktopxlVW: "9.7" }
    142: { input: 141, rem: "8.8", desktopxlVW: "9.8" }
    143: { input: 142, rem: "8.9", desktopxlVW: "9.9" }
    144: { input: 143, rem: "8.9", desktopxlVW: "9.9" }
    145: { input: 144, rem: "9.0", desktopxlVW: "10.0" }
    146: { input: 145, rem: "9.1", desktopxlVW: "10.1" }
    147: { input: 146, rem: "9.1", desktopxlVW: "10.1" }
    148: { input: 147, rem: "9.2", desktopxlVW: "10.2" }
    149: { input: 148, rem: "9.3", desktopxlVW: "10.3" }
    150: { input: 149, rem: "9.3", desktopxlVW: "10.3" }
    151: { input: 150, rem: "9.4", desktopxlVW: "10.4" }
    152: { input: 151, rem: "9.4", desktopxlVW: "10.5" }
    153: { input: 152, rem: "9.5", desktopxlVW: "10.6" }
    154: { input: 153, rem: "9.6", desktopxlVW: "10.6" }
    155: { input: 154, rem: "9.6", desktopxlVW: "10.7" }
    156: { input: 155, rem: "9.7", desktopxlVW: "10.8" }
    157: { input: 156, rem: "9.8", desktopxlVW: "10.8" }
    158: { input: 157, rem: "9.8", desktopxlVW: "10.9" }
    159: { input: 158, rem: "9.9", desktopxlVW: "11.0" }
    160: { input: 159, rem: "9.9", desktopxlVW: "11.0" }
    161: { input: 160, rem: "10.0", desktopxlVW: "11.1" }
    162: { input: 161, rem: "10.1", desktopxlVW: "11.2" }
    163: { input: 162, rem: "10.1", desktopxlVW: "11.3" }
    164: { input: 163, rem: "10.2", desktopxlVW: "11.3" }
    165: { input: 164, rem: "10.3", desktopxlVW: "11.4" }
    166: { input: 165, rem: "10.3", desktopxlVW: "11.5" }
    167: { input: 166, rem: "10.4", desktopxlVW: "11.5" }
    168: { input: 167, rem: "10.4", desktopxlVW: "11.6" }
    169: { input: 168, rem: "10.5", desktopxlVW: "11.7" }
    170: { input: 169, rem: "10.6", desktopxlVW: "11.7" }
    171: { input: 170, rem: "10.6", desktopxlVW: "11.8" }
    172: { input: 171, rem: "10.7", desktopxlVW: "11.9" }
    173: { input: 172, rem: "10.8", desktopxlVW: "11.9" }
    174: { input: 173, rem: "10.8", desktopxlVW: "12.0" }
    175: { input: 174, rem: "10.9", desktopxlVW: "12.1" }
    176: { input: 175, rem: "10.9", desktopxlVW: "12.2" }
    177: { input: 176, rem: "11.0", desktopxlVW: "12.2" }
    178: { input: 177, rem: "11.1", desktopxlVW: "12.3" }
    179: { input: 178, rem: "11.1", desktopxlVW: "12.4" }
    180: { input: 179, rem: "11.2", desktopxlVW: "12.4" }
    181: { input: 180, rem: "11.3", desktopxlVW: "12.5" }
    182: { input: 181, rem: "11.3", desktopxlVW: "12.6" }
    183: { input: 182, rem: "11.4", desktopxlVW: "12.6" }
    184: { input: 183, rem: "11.4", desktopxlVW: "12.7" }
    185: { input: 184, rem: "11.5", desktopxlVW: "12.8" }
    186: { input: 185, rem: "11.6", desktopxlVW: "12.8" }
    187: { input: 186, rem: "11.6", desktopxlVW: "12.9" }
    188: { input: 187, rem: "11.7", desktopxlVW: "13.0" }
    189: { input: 188, rem: "11.8", desktopxlVW: "13.1" }
    190: { input: 189, rem: "11.8", desktopxlVW: "13.1" }
    191: { input: 190, rem: "11.9", desktopxlVW: "13.2" }
    192: { input: 191, rem: "11.9", desktopxlVW: "13.3" }
    193: { input: 192, rem: "12.0", desktopxlVW: "13.3" }
    194: { input: 193, rem: "12.1", desktopxlVW: "13.4" }
    195: { input: 194, rem: "12.1", desktopxlVW: "13.5" }
    196: { input: 195, rem: "12.2", desktopxlVW: "13.5" }
    197: { input: 196, rem: "12.3", desktopxlVW: "13.6" }
    198: { input: 197, rem: "12.3", desktopxlVW: "13.7" }
    199: { input: 198, rem: "12.4", desktopxlVW: "13.8" }
    200: { input: 199, rem: "12.4", desktopxlVW: "13.8" }
    201: { input: 200, rem: "12.5", desktopxlVW: "13.9" }
    202: { input: 201, rem: "12.6", desktopxlVW: "14.0" }
    203: { input: 202, rem: "12.6", desktopxlVW: "14.0" }
    204: { input: 203, rem: "12.7", desktopxlVW: "14.1" }
    205: { input: 204, rem: "12.8", desktopxlVW: "14.2" }
    206: { input: 205, rem: "12.8", desktopxlVW: "14.2" }
    207: { input: 206, rem: "12.9", desktopxlVW: "14.3" }
    208: { input: 207, rem: "12.9", desktopxlVW: "14.4" }
    209: { input: 208, rem: "13.0", desktopxlVW: "14.4" }
    210: { input: 209, rem: "13.1", desktopxlVW: "14.5" }
    211: { input: 210, rem: "13.1", desktopxlVW: "14.6" }
    212: { input: 211, rem: "13.2", desktopxlVW: "14.7" }
    213: { input: 212, rem: "13.3", desktopxlVW: "14.7" }
    214: { input: 213, rem: "13.3", desktopxlVW: "14.8" }
    215: { input: 214, rem: "13.4", desktopxlVW: "14.9" }
    216: { input: 215, rem: "13.4", desktopxlVW: "14.9" }
    217: { input: 216, rem: "13.5", desktopxlVW: "15.0" }
    218: { input: 217, rem: "13.6", desktopxlVW: "15.1" }
    219: { input: 218, rem: "13.6", desktopxlVW: "15.1" }
    220: { input: 219, rem: "13.7", desktopxlVW: "15.2" }
    221: { input: 220, rem: "13.8", desktopxlVW: "15.3" }
    222: { input: 221, rem: "13.8", desktopxlVW: "15.3" }
    223: { input: 222, rem: "13.9", desktopxlVW: "15.4" }
    224: { input: 223, rem: "13.9", desktopxlVW: "15.5" }
    225: { input: 224, rem: "14.0", desktopxlVW: "15.6" }
    226: { input: 225, rem: "14.1", desktopxlVW: "15.6" }
    227: { input: 226, rem: "14.1", desktopxlVW: "15.7" }
    228: { input: 227, rem: "14.2", desktopxlVW: "15.8" }
    229: { input: 228, rem: "14.3", desktopxlVW: "15.8" }
    230: { input: 229, rem: "14.3", desktopxlVW: "15.9" }
    231: { input: 230, rem: "14.4", desktopxlVW: "16.0" }
    232: { input: 231, rem: "14.4", desktopxlVW: "16.0" }
    233: { input: 232, rem: "14.5", desktopxlVW: "16.1" }
    234: { input: 233, rem: "14.6", desktopxlVW: "16.2" }
    235: { input: 234, rem: "14.6", desktopxlVW: "16.3" }
    236: { input: 235, rem: "14.7", desktopxlVW: "16.3" }
    237: { input: 236, rem: "14.8", desktopxlVW: "16.4" }
    238: { input: 237, rem: "14.8", desktopxlVW: "16.5" }
    239: { input: 238, rem: "14.9", desktopxlVW: "16.5" }
    240: { input: 239, rem: "14.9", desktopxlVW: "16.6" }
    241: { input: 240, rem: "15.0", desktopxlVW: "16.7" }
    242: { input: 241, rem: "15.1", desktopxlVW: "16.7" }
    243: { input: 242, rem: "15.1", desktopxlVW: "16.8" }
    244: { input: 243, rem: "15.2", desktopxlVW: "16.9" }
    245: { input: 244, rem: "15.3", desktopxlVW: "16.9" }
    246: { input: 245, rem: "15.3", desktopxlVW: "17.0" }
    247: { input: 246, rem: "15.4", desktopxlVW: "17.1" }
    248: { input: 247, rem: "15.4", desktopxlVW: "17.2" }
    249: { input: 248, rem: "15.5", desktopxlVW: "17.2" }
    250: { input: 249, rem: "15.6", desktopxlVW: "17.3" }
    251: { input: 250, rem: "15.6", desktopxlVW: "17.4" }
    252: { input: 251, rem: "15.7", desktopxlVW: "17.4" }
    253: { input: 252, rem: "15.8", desktopxlVW: "17.5" }
    254: { input: 253, rem: "15.8", desktopxlVW: "17.6" }
    255: { input: 254, rem: "15.9", desktopxlVW: "17.6" }
    256: { input: 255, rem: "15.9", desktopxlVW: "17.7" }
    257: { input: 256, rem: "16.0", desktopxlVW: "17.8" }
    258: { input: 257, rem: "16.1", desktopxlVW: "17.8" }
    259: { input: 258, rem: "16.1", desktopxlVW: "17.9" }
    260: { input: 259, rem: "16.2", desktopxlVW: "18.0" }
    261: { input: 260, rem: "16.3", desktopxlVW: "18.1" }
    262: { input: 261, rem: "16.3", desktopxlVW: "18.1" }
    263: { input: 262, rem: "16.4", desktopxlVW: "18.2" }
    264: { input: 263, rem: "16.4", desktopxlVW: "18.3" }
    265: { input: 264, rem: "16.5", desktopxlVW: "18.3" }
    266: { input: 265, rem: "16.6", desktopxlVW: "18.4" }
    267: { input: 266, rem: "16.6", desktopxlVW: "18.5" }
    268: { input: 267, rem: "16.7", desktopxlVW: "18.5" }
    269: { input: 268, rem: "16.8", desktopxlVW: "18.6" }
    270: { input: 269, rem: "16.8", desktopxlVW: "18.7" }
    271: { input: 270, rem: "16.9", desktopxlVW: "18.8" }
    272: { input: 271, rem: "16.9", desktopxlVW: "18.8" }
    273: { input: 272, rem: "17.0", desktopxlVW: "18.9" }
    274: { input: 273, rem: "17.1", desktopxlVW: "19.0" }
    275: { input: 274, rem: "17.1", desktopxlVW: "19.0" }
    276: { input: 275, rem: "17.2", desktopxlVW: "19.1" }
    277: { input: 276, rem: "17.3", desktopxlVW: "19.2" }
    278: { input: 277, rem: "17.3", desktopxlVW: "19.2" }
    279: { input: 278, rem: "17.4", desktopxlVW: "19.3" }
    280: { input: 279, rem: "17.4", desktopxlVW: "19.4" }
    281: { input: 280, rem: "17.5", desktopxlVW: "19.4" }
    282: { input: 281, rem: "17.6", desktopxlVW: "19.5" }
    283: { input: 282, rem: "17.6", desktopxlVW: "19.6" }
    284: { input: 283, rem: "17.7", desktopxlVW: "19.7" }
    285: { input: 284, rem: "17.8", desktopxlVW: "19.7" }
    286: { input: 285, rem: "17.8", desktopxlVW: "19.8" }
    287: { input: 286, rem: "17.9", desktopxlVW: "19.9" }
    288: { input: 287, rem: "17.9", desktopxlVW: "19.9" }
    289: { input: 288, rem: "18.0", desktopxlVW: "20.0" }
    290: { input: 289, rem: "18.1", desktopxlVW: "20.1" }
    291: { input: 290, rem: "18.1", desktopxlVW: "20.1" }
    292: { input: 291, rem: "18.2", desktopxlVW: "20.2" }
    293: { input: 292, rem: "18.3", desktopxlVW: "20.3" }
    294: { input: 293, rem: "18.3", desktopxlVW: "20.3" }
    295: { input: 294, rem: "18.4", desktopxlVW: "20.4" }
    296: { input: 295, rem: "18.4", desktopxlVW: "20.5" }
    297: { input: 296, rem: "18.5", desktopxlVW: "20.6" }
    298: { input: 297, rem: "18.6", desktopxlVW: "20.6" }
    299: { input: 298, rem: "18.6", desktopxlVW: "20.7" }
    [300… 399]
    300: { input: 299, rem: "18.7", desktopxlVW: "20.8" }
    301: { input: 300, rem: "18.8", desktopxlVW: "20.8" }
    302: { input: 301, rem: "18.8", desktopxlVW: "20.9" }
    303: { input: 302, rem: "18.9", desktopxlVW: "21.0" }
    304: { input: 303, rem: "18.9", desktopxlVW: "21.0" }
    305: { input: 304, rem: "19.0", desktopxlVW: "21.1" }
    306: { input: 305, rem: "19.1", desktopxlVW: "21.2" }
    307: { input: 306, rem: "19.1", desktopxlVW: "21.3" }
    308: { input: 307, rem: "19.2", desktopxlVW: "21.3" }
    309: { input: 308, rem: "19.3", desktopxlVW: "21.4" }
    310: { input: 309, rem: "19.3", desktopxlVW: "21.5" }
    311: { input: 310, rem: "19.4", desktopxlVW: "21.5" }
    312: { input: 311, rem: "19.4", desktopxlVW: "21.6" }
    313: { input: 312, rem: "19.5", desktopxlVW: "21.7" }
    314: { input: 313, rem: "19.6", desktopxlVW: "21.7" }
    315: { input: 314, rem: "19.6", desktopxlVW: "21.8" }
    316: { input: 315, rem: "19.7", desktopxlVW: "21.9" }
    317: { input: 316, rem: "19.8", desktopxlVW: "21.9" }
    318: { input: 317, rem: "19.8", desktopxlVW: "22.0" }
    319: { input: 318, rem: "19.9", desktopxlVW: "22.1" }
    320: { input: 319, rem: "19.9", desktopxlVW: "22.2" }
    321: { input: 320, rem: "20.0", desktopxlVW: "22.2" }
    322: { input: 321, rem: "20.1", desktopxlVW: "22.3" }
    323: { input: 322, rem: "20.1", desktopxlVW: "22.4" }
    324: { input: 323, rem: "20.2", desktopxlVW: "22.4" }
    325: { input: 324, rem: "20.3", desktopxlVW: "22.5" }
    326: { input: 325, rem: "20.3", desktopxlVW: "22.6" }
    327: { input: 326, rem: "20.4", desktopxlVW: "22.6" }
    328: { input: 327, rem: "20.4", desktopxlVW: "22.7" }
    329: { input: 328, rem: "20.5", desktopxlVW: "22.8" }
    330: { input: 329, rem: "20.6", desktopxlVW: "22.8" }
    331: { input: 330, rem: "20.6", desktopxlVW: "22.9" }
    332: { input: 331, rem: "20.7", desktopxlVW: "23.0" }
    333: { input: 332, rem: "20.8", desktopxlVW: "23.1" }
    334: { input: 333, rem: "20.8", desktopxlVW: "23.1" }
    335: { input: 334, rem: "20.9", desktopxlVW: "23.2" }
    336: { input: 335, rem: "20.9", desktopxlVW: "23.3" }
    337: { input: 336, rem: "21.0", desktopxlVW: "23.3" }
    338: { input: 337, rem: "21.1", desktopxlVW: "23.4" }
    339: { input: 338, rem: "21.1", desktopxlVW: "23.5" }
    340: { input: 339, rem: "21.2", desktopxlVW: "23.5" }
    341: { input: 340, rem: "21.3", desktopxlVW: "23.6" }
    342: { input: 341, rem: "21.3", desktopxlVW: "23.7" }
    343: { input: 342, rem: "21.4", desktopxlVW: "23.8" }
    344: { input: 343, rem: "21.4", desktopxlVW: "23.8" }
    345: { input: 344, rem: "21.5", desktopxlVW: "23.9" }
    346: { input: 345, rem: "21.6", desktopxlVW: "24.0" }
    347: { input: 346, rem: "21.6", desktopxlVW: "24.0" }
    348: { input: 347, rem: "21.7", desktopxlVW: "24.1" }
    349: { input: 348, rem: "21.8", desktopxlVW: "24.2" }
    350: { input: 349, rem: "21.8", desktopxlVW: "24.2" }
    351: { input: 350, rem: "21.9", desktopxlVW: "24.3" }
    352: { input: 351, rem: "21.9", desktopxlVW: "24.4" }
    353: { input: 352, rem: "22.0", desktopxlVW: "24.4" }
    354: { input: 353, rem: "22.1", desktopxlVW: "24.5" }
    355: { input: 354, rem: "22.1", desktopxlVW: "24.6" }
    356: { input: 355, rem: "22.2", desktopxlVW: "24.7" }
    357: { input: 356, rem: "22.3", desktopxlVW: "24.7" }
    358: { input: 357, rem: "22.3", desktopxlVW: "24.8" }
    359: { input: 358, rem: "22.4", desktopxlVW: "24.9" }
    360: { input: 359, rem: "22.4", desktopxlVW: "24.9" }
    361: { input: 360, rem: "22.5", desktopxlVW: "25.0" }
    362: { input: 361, rem: "22.6", desktopxlVW: "25.1" }
    363: { input: 362, rem: "22.6", desktopxlVW: "25.1" }
    364: { input: 363, rem: "22.7", desktopxlVW: "25.2" }
    365: { input: 364, rem: "22.8", desktopxlVW: "25.3" }
    366: { input: 365, rem: "22.8", desktopxlVW: "25.3" }
    367: { input: 366, rem: "22.9", desktopxlVW: "25.4" }
    368: { input: 367, rem: "22.9", desktopxlVW: "25.5" }
    369: { input: 368, rem: "23.0", desktopxlVW: "25.6" }
    370: { input: 369, rem: "23.1", desktopxlVW: "25.6" }
    371: { input: 370, rem: "23.1", desktopxlVW: "25.7" }
    372: { input: 371, rem: "23.2", desktopxlVW: "25.8" }
    373: { input: 372, rem: "23.3", desktopxlVW: "25.8" }
    374: { input: 373, rem: "23.3", desktopxlVW: "25.9" }
    375: { input: 374, rem: "23.4", desktopxlVW: "26.0" }
    376: { input: 375, rem: "23.4", desktopxlVW: "26.0" }
    377: { input: 376, rem: "23.5", desktopxlVW: "26.1" }
    378: { input: 377, rem: "23.6", desktopxlVW: "26.2" }
    379: { input: 378, rem: "23.6", desktopxlVW: "26.3" }
    380: { input: 379, rem: "23.7", desktopxlVW: "26.3" }
    381: { input: 380, rem: "23.8", desktopxlVW: "26.4" }
    382: { input: 381, rem: "23.8", desktopxlVW: "26.5" }
    383: { input: 382, rem: "23.9", desktopxlVW: "26.5" }
    384: { input: 383, rem: "23.9", desktopxlVW: "26.6" }
    385: { input: 384, rem: "24.0", desktopxlVW: "26.7" }
    386: { input: 385, rem: "24.1", desktopxlVW: "26.7" }
    387: { input: 386, rem: "24.1", desktopxlVW: "26.8" }
    388: { input: 387, rem: "24.2", desktopxlVW: "26.9" }
    389: { input: 388, rem: "24.3", desktopxlVW: "26.9" }
    390: { input: 389, rem: "24.3", desktopxlVW: "27.0" }
    391: { input: 390, rem: "24.4", desktopxlVW: "27.1" }
    392: { input: 391, rem: "24.4", desktopxlVW: "27.2" }
    393: { input: 392, rem: "24.5", desktopxlVW: "27.2" }
    394: { input: 393, rem: "24.6", desktopxlVW: "27.3" }
    395: { input: 394, rem: "24.6", desktopxlVW: "27.4" }
    396: { input: 395, rem: "24.7", desktopxlVW: "27.4" }
    397: { input: 396, rem: "24.8", desktopxlVW: "27.5" }
    398: { input: 397, rem: "24.8", desktopxlVW: "27.6" }
    399: { input: 398, rem: "24.9", desktopxlVW: "27.6" }
    [400… 499]
    400: { input: 399, rem: "24.9", desktopxlVW: "27.7" }
    401: { input: 400, rem: "25.0", desktopxlVW: "27.8" }
    402: { input: 401, rem: "25.1", desktopxlVW: "27.8" }
    403: { input: 402, rem: "25.1", desktopxlVW: "27.9" }
    404: { input: 403, rem: "25.2", desktopxlVW: "28.0" }
    405: { input: 404, rem: "25.3", desktopxlVW: "28.1" }
    406: { input: 405, rem: "25.3", desktopxlVW: "28.1" }
    407: { input: 406, rem: "25.4", desktopxlVW: "28.2" }
    408: { input: 407, rem: "25.4", desktopxlVW: "28.3" }
    409: { input: 408, rem: "25.5", desktopxlVW: "28.3" }
    410: { input: 409, rem: "25.6", desktopxlVW: "28.4" }
    411: { input: 410, rem: "25.6", desktopxlVW: "28.5" }
    412: { input: 411, rem: "25.7", desktopxlVW: "28.5" }
    413: { input: 412, rem: "25.8", desktopxlVW: "28.6" }
    414: { input: 413, rem: "25.8", desktopxlVW: "28.7" }
    415: { input: 414, rem: "25.9", desktopxlVW: "28.7" }
    416: { input: 415, rem: "25.9", desktopxlVW: "28.8" }
    417: { input: 416, rem: "26.0", desktopxlVW: "28.9" }
    418: { input: 417, rem: "26.1", desktopxlVW: "29.0" }
    419: { input: 418, rem: "26.1", desktopxlVW: "29.0" }
    420: { input: 419, rem: "26.2", desktopxlVW: "29.1" }
    421: { input: 420, rem: "26.3", desktopxlVW: "29.2" }
    422: { input: 421, rem: "26.3", desktopxlVW: "29.2" }
    423: { input: 422, rem: "26.4", desktopxlVW: "29.3" }
    424: { input: 423, rem: "26.4", desktopxlVW: "29.4" }
    425: { input: 424, rem: "26.5", desktopxlVW: "29.4" }
    426: { input: 425, rem: "26.6", desktopxlVW: "29.5" }
    427: { input: 426, rem: "26.6", desktopxlVW: "29.6" }
    428: { input: 427, rem: "26.7", desktopxlVW: "29.7" }
    429: { input: 428, rem: "26.8", desktopxlVW: "29.7" }
    430: { input: 429, rem: "26.8", desktopxlVW: "29.8" }
    431: { input: 430, rem: "26.9", desktopxlVW: "29.9" }
    432: { input: 431, rem: "26.9", desktopxlVW: "29.9" }
    433: { input: 432, rem: "27.0", desktopxlVW: "30.0" }
    434: { input: 433, rem: "27.1", desktopxlVW: "30.1" }
    435: { input: 434, rem: "27.1", desktopxlVW: "30.1" }
    436: { input: 435, rem: "27.2", desktopxlVW: "30.2" }
    437: { input: 436, rem: "27.3", desktopxlVW: "30.3" }
    438: { input: 437, rem: "27.3", desktopxlVW: "30.3" }
    439: { input: 438, rem: "27.4", desktopxlVW: "30.4" }
    440: { input: 439, rem: "27.4", desktopxlVW: "30.5" }
    441: { input: 440, rem: "27.5", desktopxlVW: "30.6" }
    442: { input: 441, rem: "27.6", desktopxlVW: "30.6" }
    443: { input: 442, rem: "27.6", desktopxlVW: "30.7" }
    444: { input: 443, rem: "27.7", desktopxlVW: "30.8" }
    445: { input: 444, rem: "27.8", desktopxlVW: "30.8" }
    446: { input: 445, rem: "27.8", desktopxlVW: "30.9" }
    447: { input: 446, rem: "27.9", desktopxlVW: "31.0" }
    448: { input: 447, rem: "27.9", desktopxlVW: "31.0" }
    449: { input: 448, rem: "28.0", desktopxlVW: "31.1" }
    450: { input: 449, rem: "28.1", desktopxlVW: "31.2" }
    451: { input: 450, rem: "28.1", desktopxlVW: "31.3" }
    452: { input: 451, rem: "28.2", desktopxlVW: "31.3" }
    453: { input: 452, rem: "28.3", desktopxlVW: "31.4" }
    454: { input: 453, rem: "28.3", desktopxlVW: "31.5" }
    455: { input: 454, rem: "28.4", desktopxlVW: "31.5" }
    456: { input: 455, rem: "28.4", desktopxlVW: "31.6" }
    457: { input: 456, rem: "28.5", desktopxlVW: "31.7" }
    458: { input: 457, rem: "28.6", desktopxlVW: "31.7" }
    459: { input: 458, rem: "28.6", desktopxlVW: "31.8" }
    460: { input: 459, rem: "28.7", desktopxlVW: "31.9" }
    461: { input: 460, rem: "28.8", desktopxlVW: "31.9" }
    462: { input: 461, rem: "28.8", desktopxlVW: "32.0" }
    463: { input: 462, rem: "28.9", desktopxlVW: "32.1" }
    464: { input: 463, rem: "28.9", desktopxlVW: "32.2" }
    465: { input: 464, rem: "29.0", desktopxlVW: "32.2" }
    466: { input: 465, rem: "29.1", desktopxlVW: "32.3" }
    467: { input: 466, rem: "29.1", desktopxlVW: "32.4" }
    468: { input: 467, rem: "29.2", desktopxlVW: "32.4" }
    469: { input: 468, rem: "29.3", desktopxlVW: "32.5" }
    470: { input: 469, rem: "29.3", desktopxlVW: "32.6" }
    471: { input: 470, rem: "29.4", desktopxlVW: "32.6" }
    472: { input: 471, rem: "29.4", desktopxlVW: "32.7" }
    473: { input: 472, rem: "29.5", desktopxlVW: "32.8" }
    474: { input: 473, rem: "29.6", desktopxlVW: "32.8" }
    475: { input: 474, rem: "29.6", desktopxlVW: "32.9" }
    476: { input: 475, rem: "29.7", desktopxlVW: "33.0" }
    477: { input: 476, rem: "29.8", desktopxlVW: "33.1" }
    478: { input: 477, rem: "29.8", desktopxlVW: "33.1" }
    479: { input: 478, rem: "29.9", desktopxlVW: "33.2" }
    480: { input: 479, rem: "29.9", desktopxlVW: "33.3" }
    481: { input: 480, rem: "30.0", desktopxlVW: "33.3" }
    482: { input: 481, rem: "30.1", desktopxlVW: "33.4" }
    483: { input: 482, rem: "30.1", desktopxlVW: "33.5" }
    484: { input: 483, rem: "30.2", desktopxlVW: "33.5" }
    485: { input: 484, rem: "30.3", desktopxlVW: "33.6" }
    486: { input: 485, rem: "30.3", desktopxlVW: "33.7" }
    487: { input: 486, rem: "30.4", desktopxlVW: "33.8" }
    488: { input: 487, rem: "30.4", desktopxlVW: "33.8" }
    489: { input: 488, rem: "30.5", desktopxlVW: "33.9" }
    490: { input: 489, rem: "30.6", desktopxlVW: "34.0" }
    491: { input: 490, rem: "30.6", desktopxlVW: "34.0" }
    492: { input: 491, rem: "30.7", desktopxlVW: "34.1" }
    493: { input: 492, rem: "30.8", desktopxlVW: "34.2" }
    494: { input: 493, rem: "30.8", desktopxlVW: "34.2" }
    495: { input: 494, rem: "30.9", desktopxlVW: "34.3" }
    496: { input: 495, rem: "30.9", desktopxlVW: "34.4" }
    497: { input: 496, rem: "31.0", desktopxlVW: "34.4" }
    498: { input: 497, rem: "31.1", desktopxlVW: "34.5" }
    499: { input: 498, rem: "31.1", desktopxlVW: "34.6" }

    500: { input: 499, rem: "31.2", desktopxlVW: "34.7" }
    501: { input: 500, rem: "31.3", desktopxlVW: "34.7" }
    502: { input: 501, rem: "31.3", desktopxlVW: "34.8" }
    503: { input: 502, rem: "31.4", desktopxlVW: "34.9" }
    504: { input: 503, rem: "31.4", desktopxlVW: "34.9" }
    505: { input: 504, rem: "31.5", desktopxlVW: "35.0" }
    506: { input: 505, rem: "31.6", desktopxlVW: "35.1" }
    507: { input: 506, rem: "31.6", desktopxlVW: "35.1" }
    508: { input: 507, rem: "31.7", desktopxlVW: "35.2" }
    509: { input: 508, rem: "31.8", desktopxlVW: "35.3" }
    510: { input: 509, rem: "31.8", desktopxlVW: "35.3" }
    511: { input: 510, rem: "31.9", desktopxlVW: "35.4" }
    512: { input: 511, rem: "31.9", desktopxlVW: "35.5" }
    513: { input: 512, rem: "32.0", desktopxlVW: "35.6" }
    514: { input: 513, rem: "32.1", desktopxlVW: "35.6" }
    515: { input: 514, rem: "32.1", desktopxlVW: "35.7" }
    516: { input: 515, rem: "32.2", desktopxlVW: "35.8" }
    517: { input: 516, rem: "32.3", desktopxlVW: "35.8" }
    518: { input: 517, rem: "32.3", desktopxlVW: "35.9" }
    519: { input: 518, rem: "32.4", desktopxlVW: "36.0" }
    520: { input: 519, rem: "32.4", desktopxlVW: "36.0" }
    521: { input: 520, rem: "32.5", desktopxlVW: "36.1" }
    522: { input: 521, rem: "32.6", desktopxlVW: "36.2" }
    523: { input: 522, rem: "32.6", desktopxlVW: "36.3" }
    524: { input: 523, rem: "32.7", desktopxlVW: "36.3" }
    525: { input: 524, rem: "32.8", desktopxlVW: "36.4" }
    526: { input: 525, rem: "32.8", desktopxlVW: "36.5" }
    527: { input: 526, rem: "32.9", desktopxlVW: "36.5" }
    528: { input: 527, rem: "32.9", desktopxlVW: "36.6" }
    529: { input: 528, rem: "33.0", desktopxlVW: "36.7" }
    530: { input: 529, rem: "33.1", desktopxlVW: "36.7" }
    531: { input: 530, rem: "33.1", desktopxlVW: "36.8" }
    532: { input: 531, rem: "33.2", desktopxlVW: "36.9" }
    533: { input: 532, rem: "33.3", desktopxlVW: "36.9" }
    534: { input: 533, rem: "33.3", desktopxlVW: "37.0" }
    535: { input: 534, rem: "33.4", desktopxlVW: "37.1" }
    536: { input: 535, rem: "33.4", desktopxlVW: "37.2" }
    537: { input: 536, rem: "33.5", desktopxlVW: "37.2" }
    538: { input: 537, rem: "33.6", desktopxlVW: "37.3" }
    539: { input: 538, rem: "33.6", desktopxlVW: "37.4" }
    540: { input: 539, rem: "33.7", desktopxlVW: "37.4" }
    541: { input: 540, rem: "33.8", desktopxlVW: "37.5" }
    542: { input: 541, rem: "33.8", desktopxlVW: "37.6" }
    543: { input: 542, rem: "33.9", desktopxlVW: "37.6" }
    544: { input: 543, rem: "33.9", desktopxlVW: "37.7" }
    545: { input: 544, rem: "34.0", desktopxlVW: "37.8" }
    546: { input: 545, rem: "34.1", desktopxlVW: "37.8" }
    547: { input: 546, rem: "34.1", desktopxlVW: "37.9" }
    548: { input: 547, rem: "34.2", desktopxlVW: "38.0" }
    549: { input: 548, rem: "34.3", desktopxlVW: "38.1" }
    550: { input: 549, rem: "34.3", desktopxlVW: "38.1" }
    551: { input: 550, rem: "34.4", desktopxlVW: "38.2" }
    552: { input: 551, rem: "34.4", desktopxlVW: "38.3" }
    553: { input: 552, rem: "34.5", desktopxlVW: "38.3" }
    554: { input: 553, rem: "34.6", desktopxlVW: "38.4" }
    555: { input: 554, rem: "34.6", desktopxlVW: "38.5" }
    556: { input: 555, rem: "34.7", desktopxlVW: "38.5" }
    557: { input: 556, rem: "34.8", desktopxlVW: "38.6" }
    558: { input: 557, rem: "34.8", desktopxlVW: "38.7" }
    559: { input: 558, rem: "34.9", desktopxlVW: "38.8" }
    560: { input: 559, rem: "34.9", desktopxlVW: "38.8" }
    561: { input: 560, rem: "35.0", desktopxlVW: "38.9" }
    562: { input: 561, rem: "35.1", desktopxlVW: "39.0" }
    563: { input: 562, rem: "35.1", desktopxlVW: "39.0" }
    564: { input: 563, rem: "35.2", desktopxlVW: "39.1" }
    565: { input: 564, rem: "35.3", desktopxlVW: "39.2" }
    566: { input: 565, rem: "35.3", desktopxlVW: "39.2" }
    567: { input: 566, rem: "35.4", desktopxlVW: "39.3" }
    568: { input: 567, rem: "35.4", desktopxlVW: "39.4" }
    569: { input: 568, rem: "35.5", desktopxlVW: "39.4" }
    570: { input: 569, rem: "35.6", desktopxlVW: "39.5" }
    571: { input: 570, rem: "35.6", desktopxlVW: "39.6" }
    572: { input: 571, rem: "35.7", desktopxlVW: "39.7" }
    573: { input: 572, rem: "35.8", desktopxlVW: "39.7" }
    574: { input: 573, rem: "35.8", desktopxlVW: "39.8" }
    575: { input: 574, rem: "35.9", desktopxlVW: "39.9" }
    576: { input: 575, rem: "35.9", desktopxlVW: "39.9" }
    577: { input: 576, rem: "36.0", desktopxlVW: "40.0" }
    578: { input: 577, rem: "36.1", desktopxlVW: "40.1" }
    579: { input: 578, rem: "36.1", desktopxlVW: "40.1" }
    580: { input: 579, rem: "36.2", desktopxlVW: "40.2" }
    581: { input: 580, rem: "36.3", desktopxlVW: "40.3" }
    582: { input: 581, rem: "36.3", desktopxlVW: "40.3" }
    583: { input: 582, rem: "36.4", desktopxlVW: "40.4" }
    584: { input: 583, rem: "36.4", desktopxlVW: "40.5" }
    585: { input: 584, rem: "36.5", desktopxlVW: "40.6" }
    586: { input: 585, rem: "36.6", desktopxlVW: "40.6" }
    587: { input: 586, rem: "36.6", desktopxlVW: "40.7" }
    588: { input: 587, rem: "36.7", desktopxlVW: "40.8" }
    589: { input: 588, rem: "36.8", desktopxlVW: "40.8" }
    590: { input: 589, rem: "36.8", desktopxlVW: "40.9" }
    591: { input: 590, rem: "36.9", desktopxlVW: "41.0" }
    592: { input: 591, rem: "36.9", desktopxlVW: "41.0" }
    593: { input: 592, rem: "37.0", desktopxlVW: "41.1" }
    594: { input: 593, rem: "37.1", desktopxlVW: "41.2" }
    595: { input: 594, rem: "37.1", desktopxlVW: "41.3" }
    596: { input: 595, rem: "37.2", desktopxlVW: "41.3" }
    597: { input: 596, rem: "37.3", desktopxlVW: "41.4" }
    598: { input: 597, rem: "37.3", desktopxlVW: "41.5" }
    599: { input: 598, rem: "37.4", desktopxlVW: "41.5" }
    [600… 699]
    600: { input: 599, rem: "37.4", desktopxlVW: "41.6" }
    601: { input: 600, rem: "37.5", desktopxlVW: "41.7" }
    602: { input: 601, rem: "37.6", desktopxlVW: "41.7" }
    603: { input: 602, rem: "37.6", desktopxlVW: "41.8" }
    604: { input: 603, rem: "37.7", desktopxlVW: "41.9" }
    605: { input: 604, rem: "37.8", desktopxlVW: "41.9" }
    606: { input: 605, rem: "37.8", desktopxlVW: "42.0" }
    607: { input: 606, rem: "37.9", desktopxlVW: "42.1" }
    608: { input: 607, rem: "37.9", desktopxlVW: "42.2" }
    609: { input: 608, rem: "38.0", desktopxlVW: "42.2" }
    610: { input: 609, rem: "38.1", desktopxlVW: "42.3" }
    611: { input: 610, rem: "38.1", desktopxlVW: "42.4" }
    612: { input: 611, rem: "38.2", desktopxlVW: "42.4" }
    613: { input: 612, rem: "38.3", desktopxlVW: "42.5" }
    614: { input: 613, rem: "38.3", desktopxlVW: "42.6" }
    615: { input: 614, rem: "38.4", desktopxlVW: "42.6" }
    616: { input: 615, rem: "38.4", desktopxlVW: "42.7" }
    617: { input: 616, rem: "38.5", desktopxlVW: "42.8" }
    618: { input: 617, rem: "38.6", desktopxlVW: "42.8" }
    619: { input: 618, rem: "38.6", desktopxlVW: "42.9" }
    620: { input: 619, rem: "38.7", desktopxlVW: "43.0" }
    621: { input: 620, rem: "38.8", desktopxlVW: "43.1" }
    622: { input: 621, rem: "38.8", desktopxlVW: "43.1" }
    623: { input: 622, rem: "38.9", desktopxlVW: "43.2" }
    624: { input: 623, rem: "38.9", desktopxlVW: "43.3" }
    625: { input: 624, rem: "39.0", desktopxlVW: "43.3" }
    626: { input: 625, rem: "39.1", desktopxlVW: "43.4" }
    627: { input: 626, rem: "39.1", desktopxlVW: "43.5" }
    628: { input: 627, rem: "39.2", desktopxlVW: "43.5" }
    629: { input: 628, rem: "39.3", desktopxlVW: "43.6" }
    630: { input: 629, rem: "39.3", desktopxlVW: "43.7" }
    631: { input: 630, rem: "39.4", desktopxlVW: "43.8" }
    632: { input: 631, rem: "39.4", desktopxlVW: "43.8" }
    633: { input: 632, rem: "39.5", desktopxlVW: "43.9" }
    634: { input: 633, rem: "39.6", desktopxlVW: "44.0" }
    635: { input: 634, rem: "39.6", desktopxlVW: "44.0" }
    636: { input: 635, rem: "39.7", desktopxlVW: "44.1" }
    637: { input: 636, rem: "39.8", desktopxlVW: "44.2" }
    638: { input: 637, rem: "39.8", desktopxlVW: "44.2" }
    639: { input: 638, rem: "39.9", desktopxlVW: "44.3" }
    640: { input: 639, rem: "39.9", desktopxlVW: "44.4" }
    641: { input: 640, rem: "40.0", desktopxlVW: "44.4" }
    642: { input: 641, rem: "40.1", desktopxlVW: "44.5" }
    643: { input: 642, rem: "40.1", desktopxlVW: "44.6" }
    644: { input: 643, rem: "40.2", desktopxlVW: "44.7" }
    645: { input: 644, rem: "40.3", desktopxlVW: "44.7" }
    646: { input: 645, rem: "40.3", desktopxlVW: "44.8" }
    647: { input: 646, rem: "40.4", desktopxlVW: "44.9" }
    648: { input: 647, rem: "40.4", desktopxlVW: "44.9" }
    649: { input: 648, rem: "40.5", desktopxlVW: "45.0" }
    650: { input: 649, rem: "40.6", desktopxlVW: "45.1" }
    651: { input: 650, rem: "40.6", desktopxlVW: "45.1" }
    652: { input: 651, rem: "40.7", desktopxlVW: "45.2" }
    653: { input: 652, rem: "40.8", desktopxlVW: "45.3" }
    654: { input: 653, rem: "40.8", desktopxlVW: "45.3" }
    655: { input: 654, rem: "40.9", desktopxlVW: "45.4" }
    656: { input: 655, rem: "40.9", desktopxlVW: "45.5" }
    657: { input: 656, rem: "41.0", desktopxlVW: "45.6" }
    658: { input: 657, rem: "41.1", desktopxlVW: "45.6" }
    659: { input: 658, rem: "41.1", desktopxlVW: "45.7" }
    660: { input: 659, rem: "41.2", desktopxlVW: "45.8" }
    661: { input: 660, rem: "41.3", desktopxlVW: "45.8" }
    662: { input: 661, rem: "41.3", desktopxlVW: "45.9" }
    663: { input: 662, rem: "41.4", desktopxlVW: "46.0" }
    664: { input: 663, rem: "41.4", desktopxlVW: "46.0" }
    665: { input: 664, rem: "41.5", desktopxlVW: "46.1" }
    666: { input: 665, rem: "41.6", desktopxlVW: "46.2" }
    667: { input: 666, rem: "41.6", desktopxlVW: "46.3" }
    668: { input: 667, rem: "41.7", desktopxlVW: "46.3" }
    669: { input: 668, rem: "41.8", desktopxlVW: "46.4" }
    670: { input: 669, rem: "41.8", desktopxlVW: "46.5" }
    671: { input: 670, rem: "41.9", desktopxlVW: "46.5" }
    672: { input: 671, rem: "41.9", desktopxlVW: "46.6" }
    673: { input: 672, rem: "42.0", desktopxlVW: "46.7" }
    674: { input: 673, rem: "42.1", desktopxlVW: "46.7" }
    675: { input: 674, rem: "42.1", desktopxlVW: "46.8" }
    676: { input: 675, rem: "42.2", desktopxlVW: "46.9" }
    677: { input: 676, rem: "42.3", desktopxlVW: "46.9" }
    678: { input: 677, rem: "42.3", desktopxlVW: "47.0" }
    679: { input: 678, rem: "42.4", desktopxlVW: "47.1" }
    680: { input: 679, rem: "42.4", desktopxlVW: "47.2" }
    681: { input: 680, rem: "42.5", desktopxlVW: "47.2" }
    682: { input: 681, rem: "42.6", desktopxlVW: "47.3" }
    683: { input: 682, rem: "42.6", desktopxlVW: "47.4" }
    684: { input: 683, rem: "42.7", desktopxlVW: "47.4" }
    685: { input: 684, rem: "42.8", desktopxlVW: "47.5" }
    686: { input: 685, rem: "42.8", desktopxlVW: "47.6" }
    687: { input: 686, rem: "42.9", desktopxlVW: "47.6" }
    688: { input: 687, rem: "42.9", desktopxlVW: "47.7" }
    689: { input: 688, rem: "43.0", desktopxlVW: "47.8" }
    690: { input: 689, rem: "43.1", desktopxlVW: "47.8" }
    691: { input: 690, rem: "43.1", desktopxlVW: "47.9" }
    692: { input: 691, rem: "43.2", desktopxlVW: "48.0" }
    693: { input: 692, rem: "43.3", desktopxlVW: "48.1" }
    694: { input: 693, rem: "43.3", desktopxlVW: "48.1" }
    695: { input: 694, rem: "43.4", desktopxlVW: "48.2" }
    696: { input: 695, rem: "43.4", desktopxlVW: "48.3" }
    697: { input: 696, rem: "43.5", desktopxlVW: "48.3" }
    698: { input: 697, rem: "43.6", desktopxlVW: "48.4" }
    699: { input: 698, rem: "43.6", desktopxlVW: "48.5" }
    [700… 799]
    700: { input: 699, rem: "43.7", desktopxlVW: "48.5" }
    701: { input: 700, rem: "43.8", desktopxlVW: "48.6" }
    702: { input: 701, rem: "43.8", desktopxlVW: "48.7" }
    703: { input: 702, rem: "43.9", desktopxlVW: "48.8" }
    704: { input: 703, rem: "43.9", desktopxlVW: "48.8" }
    705: { input: 704, rem: "44.0", desktopxlVW: "48.9" }
    706: { input: 705, rem: "44.1", desktopxlVW: "49.0" }
    707: { input: 706, rem: "44.1", desktopxlVW: "49.0" }
    708: { input: 707, rem: "44.2", desktopxlVW: "49.1" }
    709: { input: 708, rem: "44.3", desktopxlVW: "49.2" }
    710: { input: 709, rem: "44.3", desktopxlVW: "49.2" }
    711: { input: 710, rem: "44.4", desktopxlVW: "49.3" }
    712: { input: 711, rem: "44.4", desktopxlVW: "49.4" }
    713: { input: 712, rem: "44.5", desktopxlVW: "49.4" }
    714: { input: 713, rem: "44.6", desktopxlVW: "49.5" }
    715: { input: 714, rem: "44.6", desktopxlVW: "49.6" }
    716: { input: 715, rem: "44.7", desktopxlVW: "49.7" }
    717: { input: 716, rem: "44.8", desktopxlVW: "49.7" }
    718: { input: 717, rem: "44.8", desktopxlVW: "49.8" }
    719: { input: 718, rem: "44.9", desktopxlVW: "49.9" }
    720: { input: 719, rem: "44.9", desktopxlVW: "49.9" }
    721: { input: 720, rem: "45.0", desktopxlVW: "50.0" }
    722: { input: 721, rem: "45.1", desktopxlVW: "50.1" }
    723: { input: 722, rem: "45.1", desktopxlVW: "50.1" }
    724: { input: 723, rem: "45.2", desktopxlVW: "50.2" }
    725: { input: 724, rem: "45.3", desktopxlVW: "50.3" }
    726: { input: 725, rem: "45.3", desktopxlVW: "50.3" }
    727: { input: 726, rem: "45.4", desktopxlVW: "50.4" }
    728: { input: 727, rem: "45.4", desktopxlVW: "50.5" }
    729: { input: 728, rem: "45.5", desktopxlVW: "50.6" }
    730: { input: 729, rem: "45.6", desktopxlVW: "50.6" }
    731: { input: 730, rem: "45.6", desktopxlVW: "50.7" }
    732: { input: 731, rem: "45.7", desktopxlVW: "50.8" }
    733: { input: 732, rem: "45.8", desktopxlVW: "50.8" }
    734: { input: 733, rem: "45.8", desktopxlVW: "50.9" }
    735: { input: 734, rem: "45.9", desktopxlVW: "51.0" }
    736: { input: 735, rem: "45.9", desktopxlVW: "51.0" }
    737: { input: 736, rem: "46.0", desktopxlVW: "51.1" }
    738: { input: 737, rem: "46.1", desktopxlVW: "51.2" }
    739: { input: 738, rem: "46.1", desktopxlVW: "51.2" }
    740: { input: 739, rem: "46.2", desktopxlVW: "51.3" }
    741: { input: 740, rem: "46.3", desktopxlVW: "51.4" }
    742: { input: 741, rem: "46.3", desktopxlVW: "51.5" }
    743: { input: 742, rem: "46.4", desktopxlVW: "51.5" }
    744: { input: 743, rem: "46.4", desktopxlVW: "51.6" }
    745: { input: 744, rem: "46.5", desktopxlVW: "51.7" }
    746: { input: 745, rem: "46.6", desktopxlVW: "51.7" }
    747: { input: 746, rem: "46.6", desktopxlVW: "51.8" }
    748: { input: 747, rem: "46.7", desktopxlVW: "51.9" }
    749: { input: 748, rem: "46.8", desktopxlVW: "51.9" }
    750: { input: 749, rem: "46.8", desktopxlVW: "52.0" }
    751: { input: 750, rem: "46.9", desktopxlVW: "52.1" }
    752: { input: 751, rem: "46.9", desktopxlVW: "52.2" }
    753: { input: 752, rem: "47.0", desktopxlVW: "52.2" }
    754: { input: 753, rem: "47.1", desktopxlVW: "52.3" }
    755: { input: 754, rem: "47.1", desktopxlVW: "52.4" }
    756: { input: 755, rem: "47.2", desktopxlVW: "52.4" }
    757: { input: 756, rem: "47.3", desktopxlVW: "52.5" }
    758: { input: 757, rem: "47.3", desktopxlVW: "52.6" }
    759: { input: 758, rem: "47.4", desktopxlVW: "52.6" }
    760: { input: 759, rem: "47.4", desktopxlVW: "52.7" }
    761: { input: 760, rem: "47.5", desktopxlVW: "52.8" }
    762: { input: 761, rem: "47.6", desktopxlVW: "52.8" }
    763: { input: 762, rem: "47.6", desktopxlVW: "52.9" }
    764: { input: 763, rem: "47.7", desktopxlVW: "53.0" }
    765: { input: 764, rem: "47.8", desktopxlVW: "53.1" }
    766: { input: 765, rem: "47.8", desktopxlVW: "53.1" }
    767: { input: 766, rem: "47.9", desktopxlVW: "53.2" }
    768: { input: 767, rem: "47.9", desktopxlVW: "53.3" }
    769: { input: 768, rem: "48.0", desktopxlVW: "53.3" }
    770: { input: 769, rem: "48.1", desktopxlVW: "53.4" }
    771: { input: 770, rem: "48.1", desktopxlVW: "53.5" }
    772: { input: 771, rem: "48.2", desktopxlVW: "53.5" }
    773: { input: 772, rem: "48.3", desktopxlVW: "53.6" }
    774: { input: 773, rem: "48.3", desktopxlVW: "53.7" }
    775: { input: 774, rem: "48.4", desktopxlVW: "53.8" }
    776: { input: 775, rem: "48.4", desktopxlVW: "53.8" }
    777: { input: 776, rem: "48.5", desktopxlVW: "53.9" }
    778: { input: 777, rem: "48.6", desktopxlVW: "54.0" }
    779: { input: 778, rem: "48.6", desktopxlVW: "54.0" }
    780: { input: 779, rem: "48.7", desktopxlVW: "54.1" }
    781: { input: 780, rem: "48.8", desktopxlVW: "54.2" }
    782: { input: 781, rem: "48.8", desktopxlVW: "54.2" }
    783: { input: 782, rem: "48.9", desktopxlVW: "54.3" }
    784: { input: 783, rem: "48.9", desktopxlVW: "54.4" }
    785: { input: 784, rem: "49.0", desktopxlVW: "54.4" }
    786: { input: 785, rem: "49.1", desktopxlVW: "54.5" }
    787: { input: 786, rem: "49.1", desktopxlVW: "54.6" }
    788: { input: 787, rem: "49.2", desktopxlVW: "54.7" }
    789: { input: 788, rem: "49.3", desktopxlVW: "54.7" }
    790: { input: 789, rem: "49.3", desktopxlVW: "54.8" }
    791: { input: 790, rem: "49.4", desktopxlVW: "54.9" }
    792: { input: 791, rem: "49.4", desktopxlVW: "54.9" }
    793: { input: 792, rem: "49.5", desktopxlVW: "55.0" }
    794: { input: 793, rem: "49.6", desktopxlVW: "55.1" }
    795: { input: 794, rem: "49.6", desktopxlVW: "55.1" }
    796: { input: 795, rem: "49.7", desktopxlVW: "55.2" }
    797: { input: 796, rem: "49.8", desktopxlVW: "55.3" }
    798: { input: 797, rem: "49.8", desktopxlVW: "55.3" }
    799: { input: 798, rem: "49.9", desktopxlVW: "55.4" }
    [800… 899]
    800: { input: 799, rem: "49.9", desktopxlVW: "55.5" }
    801: { input: 800, rem: "50.0", desktopxlVW: "55.6" }
    802: { input: 801, rem: "50.1", desktopxlVW: "55.6" }
    803: { input: 802, rem: "50.1", desktopxlVW: "55.7" }
    804: { input: 803, rem: "50.2", desktopxlVW: "55.8" }
    805: { input: 804, rem: "50.3", desktopxlVW: "55.8" }
    806: { input: 805, rem: "50.3", desktopxlVW: "55.9" }
    807: { input: 806, rem: "50.4", desktopxlVW: "56.0" }
    808: { input: 807, rem: "50.4", desktopxlVW: "56.0" }
    809: { input: 808, rem: "50.5", desktopxlVW: "56.1" }
    810: { input: 809, rem: "50.6", desktopxlVW: "56.2" }
    811: { input: 810, rem: "50.6", desktopxlVW: "56.3" }
    812: { input: 811, rem: "50.7", desktopxlVW: "56.3" }
    813: { input: 812, rem: "50.8", desktopxlVW: "56.4" }
    814: { input: 813, rem: "50.8", desktopxlVW: "56.5" }
    815: { input: 814, rem: "50.9", desktopxlVW: "56.5" }
    816: { input: 815, rem: "50.9", desktopxlVW: "56.6" }
    817: { input: 816, rem: "51.0", desktopxlVW: "56.7" }
    818: { input: 817, rem: "51.1", desktopxlVW: "56.7" }
    819: { input: 818, rem: "51.1", desktopxlVW: "56.8" }
    820: { input: 819, rem: "51.2", desktopxlVW: "56.9" }
    821: { input: 820, rem: "51.3", desktopxlVW: "56.9" }
    822: { input: 821, rem: "51.3", desktopxlVW: "57.0" }
    823: { input: 822, rem: "51.4", desktopxlVW: "57.1" }
    824: { input: 823, rem: "51.4", desktopxlVW: "57.2" }
    825: { input: 824, rem: "51.5", desktopxlVW: "57.2" }
    826: { input: 825, rem: "51.6", desktopxlVW: "57.3" }
    827: { input: 826, rem: "51.6", desktopxlVW: "57.4" }
    828: { input: 827, rem: "51.7", desktopxlVW: "57.4" }
    829: { input: 828, rem: "51.8", desktopxlVW: "57.5" }
    830: { input: 829, rem: "51.8", desktopxlVW: "57.6" }
    831: { input: 830, rem: "51.9", desktopxlVW: "57.6" }
    832: { input: 831, rem: "51.9", desktopxlVW: "57.7" }
    833: { input: 832, rem: "52.0", desktopxlVW: "57.8" }
    834: { input: 833, rem: "52.1", desktopxlVW: "57.8" }
    835: { input: 834, rem: "52.1", desktopxlVW: "57.9" }
    836: { input: 835, rem: "52.2", desktopxlVW: "58.0" }
    837: { input: 836, rem: "52.3", desktopxlVW: "58.1" }
    838: { input: 837, rem: "52.3", desktopxlVW: "58.1" }
    839: { input: 838, rem: "52.4", desktopxlVW: "58.2" }
    840: { input: 839, rem: "52.4", desktopxlVW: "58.3" }
    841: { input: 840, rem: "52.5", desktopxlVW: "58.3" }
    842: { input: 841, rem: "52.6", desktopxlVW: "58.4" }
    843: { input: 842, rem: "52.6", desktopxlVW: "58.5" }
    844: { input: 843, rem: "52.7", desktopxlVW: "58.5" }
    845: { input: 844, rem: "52.8", desktopxlVW: "58.6" }
    846: { input: 845, rem: "52.8", desktopxlVW: "58.7" }
    847: { input: 846, rem: "52.9", desktopxlVW: "58.8" }
    848: { input: 847, rem: "52.9", desktopxlVW: "58.8" }
    849: { input: 848, rem: "53.0", desktopxlVW: "58.9" }
    850: { input: 849, rem: "53.1", desktopxlVW: "59.0" }
    851: { input: 850, rem: "53.1", desktopxlVW: "59.0" }
    852: { input: 851, rem: "53.2", desktopxlVW: "59.1" }
    853: { input: 852, rem: "53.3", desktopxlVW: "59.2" }
    854: { input: 853, rem: "53.3", desktopxlVW: "59.2" }
    855: { input: 854, rem: "53.4", desktopxlVW: "59.3" }
    856: { input: 855, rem: "53.4", desktopxlVW: "59.4" }
    857: { input: 856, rem: "53.5", desktopxlVW: "59.4" }
    858: { input: 857, rem: "53.6", desktopxlVW: "59.5" }
    859: { input: 858, rem: "53.6", desktopxlVW: "59.6" }
    860: { input: 859, rem: "53.7", desktopxlVW: "59.7" }
    861: { input: 860, rem: "53.8", desktopxlVW: "59.7" }
    862: { input: 861, rem: "53.8", desktopxlVW: "59.8" }
    863: { input: 862, rem: "53.9", desktopxlVW: "59.9" }
    864: { input: 863, rem: "53.9", desktopxlVW: "59.9" }
    865: { input: 864, rem: "54.0", desktopxlVW: "60.0" }
    866: { input: 865, rem: "54.1", desktopxlVW: "60.1" }
    867: { input: 866, rem: "54.1", desktopxlVW: "60.1" }
    868: { input: 867, rem: "54.2", desktopxlVW: "60.2" }
    869: { input: 868, rem: "54.3", desktopxlVW: "60.3" }
    870: { input: 869, rem: "54.3", desktopxlVW: "60.3" }
    871: { input: 870, rem: "54.4", desktopxlVW: "60.4" }
    872: { input: 871, rem: "54.4", desktopxlVW: "60.5" }
    873: { input: 872, rem: "54.5", desktopxlVW: "60.6" }
    874: { input: 873, rem: "54.6", desktopxlVW: "60.6" }
    875: { input: 874, rem: "54.6", desktopxlVW: "60.7" }
    876: { input: 875, rem: "54.7", desktopxlVW: "60.8" }
    877: { input: 876, rem: "54.8", desktopxlVW: "60.8" }
    878: { input: 877, rem: "54.8", desktopxlVW: "60.9" }
    879: { input: 878, rem: "54.9", desktopxlVW: "61.0" }
    880: { input: 879, rem: "54.9", desktopxlVW: "61.0" }
    881: { input: 880, rem: "55.0", desktopxlVW: "61.1" }
    882: { input: 881, rem: "55.1", desktopxlVW: "61.2" }
    883: { input: 882, rem: "55.1", desktopxlVW: "61.3" }
    884: { input: 883, rem: "55.2", desktopxlVW: "61.3" }
    885: { input: 884, rem: "55.3", desktopxlVW: "61.4" }
    886: { input: 885, rem: "55.3", desktopxlVW: "61.5" }
    887: { input: 886, rem: "55.4", desktopxlVW: "61.5" }
    888: { input: 887, rem: "55.4", desktopxlVW: "61.6" }
    889: { input: 888, rem: "55.5", desktopxlVW: "61.7" }
    890: { input: 889, rem: "55.6", desktopxlVW: "61.7" }
    891: { input: 890, rem: "55.6", desktopxlVW: "61.8" }
    892: { input: 891, rem: "55.7", desktopxlVW: "61.9" }
    893: { input: 892, rem: "55.8", desktopxlVW: "61.9" }
    894: { input: 893, rem: "55.8", desktopxlVW: "62.0" }
    895: { input: 894, rem: "55.9", desktopxlVW: "62.1" }
    896: { input: 895, rem: "55.9", desktopxlVW: "62.2" }
    897: { input: 896, rem: "56.0", desktopxlVW: "62.2" }
    898: { input: 897, rem: "56.1", desktopxlVW: "62.3" }
    899: { input: 898, rem: "56.1", desktopxlVW: "62.4" }
    [900… 999]
    900: { input: 899, rem: "56.2", desktopxlVW: "62.4" }
    901: { input: 900, rem: "56.3", desktopxlVW: "62.5" }
    902: { input: 901, rem: "56.3", desktopxlVW: "62.6" }
    903: { input: 902, rem: "56.4", desktopxlVW: "62.6" }
    904: { input: 903, rem: "56.4", desktopxlVW: "62.7" }
    905: { input: 904, rem: "56.5", desktopxlVW: "62.8" }
    906: { input: 905, rem: "56.6", desktopxlVW: "62.8" }
    907: { input: 906, rem: "56.6", desktopxlVW: "62.9" }
    908: { input: 907, rem: "56.7", desktopxlVW: "63.0" }
    909: { input: 908, rem: "56.8", desktopxlVW: "63.1" }
    910: { input: 909, rem: "56.8", desktopxlVW: "63.1" }
    911: { input: 910, rem: "56.9", desktopxlVW: "63.2" }
    912: { input: 911, rem: "56.9", desktopxlVW: "63.3" }
    913: { input: 912, rem: "57.0", desktopxlVW: "63.3" }
    914: { input: 913, rem: "57.1", desktopxlVW: "63.4" }
    915: { input: 914, rem: "57.1", desktopxlVW: "63.5" }
    916: { input: 915, rem: "57.2", desktopxlVW: "63.5" }
    917: { input: 916, rem: "57.3", desktopxlVW: "63.6" }
    918: { input: 917, rem: "57.3", desktopxlVW: "63.7" }
    919: { input: 918, rem: "57.4", desktopxlVW: "63.7" }
    920: { input: 919, rem: "57.4", desktopxlVW: "63.8" }
    921: { input: 920, rem: "57.5", desktopxlVW: "63.9" }
    922: { input: 921, rem: "57.6", desktopxlVW: "64.0" }
    923: { input: 922, rem: "57.6", desktopxlVW: "64.0" }
    924: { input: 923, rem: "57.7", desktopxlVW: "64.1" }
    925: { input: 924, rem: "57.8", desktopxlVW: "64.2" }
    926: { input: 925, rem: "57.8", desktopxlVW: "64.2" }
    927: { input: 926, rem: "57.9", desktopxlVW: "64.3" }
    928: { input: 927, rem: "57.9", desktopxlVW: "64.4" }
    929: { input: 928, rem: "58.0", desktopxlVW: "64.4" }
    930: { input: 929, rem: "58.1", desktopxlVW: "64.5" }
    931: { input: 930, rem: "58.1", desktopxlVW: "64.6" }
    932: { input: 931, rem: "58.2", desktopxlVW: "64.7" }
    933: { input: 932, rem: "58.3", desktopxlVW: "64.7" }
    934: { input: 933, rem: "58.3", desktopxlVW: "64.8" }
    935: { input: 934, rem: "58.4", desktopxlVW: "64.9" }
    936: { input: 935, rem: "58.4", desktopxlVW: "64.9" }
    937: { input: 936, rem: "58.5", desktopxlVW: "65.0" }
    938: { input: 937, rem: "58.6", desktopxlVW: "65.1" }
    939: { input: 938, rem: "58.6", desktopxlVW: "65.1" }
    940: { input: 939, rem: "58.7", desktopxlVW: "65.2" }
    941: { input: 940, rem: "58.8", desktopxlVW: "65.3" }
    942: { input: 941, rem: "58.8", desktopxlVW: "65.3" }
    943: { input: 942, rem: "58.9", desktopxlVW: "65.4" }
    944: { input: 943, rem: "58.9", desktopxlVW: "65.5" }
    945: { input: 944, rem: "59.0", desktopxlVW: "65.6" }
    946: { input: 945, rem: "59.1", desktopxlVW: "65.6" }
    947: { input: 946, rem: "59.1", desktopxlVW: "65.7" }
    948: { input: 947, rem: "59.2", desktopxlVW: "65.8" }
    949: { input: 948, rem: "59.3", desktopxlVW: "65.8" }
    950: { input: 949, rem: "59.3", desktopxlVW: "65.9" }
    951: { input: 950, rem: "59.4", desktopxlVW: "66.0" }
    952: { input: 951, rem: "59.4", desktopxlVW: "66.0" }
    953: { input: 952, rem: "59.5", desktopxlVW: "66.1" }
    954: { input: 953, rem: "59.6", desktopxlVW: "66.2" }
    955: { input: 954, rem: "59.6", desktopxlVW: "66.3" }
    956: { input: 955, rem: "59.7", desktopxlVW: "66.3" }
    957: { input: 956, rem: "59.8", desktopxlVW: "66.4" }
    958: { input: 957, rem: "59.8", desktopxlVW: "66.5" }
    959: { input: 958, rem: "59.9", desktopxlVW: "66.5" }
    960: { input: 959, rem: "59.9", desktopxlVW: "66.6" }
    961: { input: 960, rem: "60.0", desktopxlVW: "66.7" }
    962: { input: 961, rem: "60.1", desktopxlVW: "66.7" }
    963: { input: 962, rem: "60.1", desktopxlVW: "66.8" }
    964: { input: 963, rem: "60.2", desktopxlVW: "66.9" }
    965: { input: 964, rem: "60.3", desktopxlVW: "66.9" }
    966: { input: 965, rem: "60.3", desktopxlVW: "67.0" }
    967: { input: 966, rem: "60.4", desktopxlVW: "67.1" }
    968: { input: 967, rem: "60.4", desktopxlVW: "67.2" }
    969: { input: 968, rem: "60.5", desktopxlVW: "67.2" }
    970: { input: 969, rem: "60.6", desktopxlVW: "67.3" }
    971: { input: 970, rem: "60.6", desktopxlVW: "67.4" }
    972: { input: 971, rem: "60.7", desktopxlVW: "67.4" }
    973: { input: 972, rem: "60.8", desktopxlVW: "67.5" }
    974: { input: 973, rem: "60.8", desktopxlVW: "67.6" }
    975: { input: 974, rem: "60.9", desktopxlVW: "67.6" }
    976: { input: 975, rem: "60.9", desktopxlVW: "67.7" }
    977: { input: 976, rem: "61.0", desktopxlVW: "67.8" }
    978: { input: 977, rem: "61.1", desktopxlVW: "67.8" }
    979: { input: 978, rem: "61.1", desktopxlVW: "67.9" }
    980: { input: 979, rem: "61.2", desktopxlVW: "68.0" }
    981: { input: 980, rem: "61.3", desktopxlVW: "68.1" }
    982: { input: 981, rem: "61.3", desktopxlVW: "68.1" }
    983: { input: 982, rem: "61.4", desktopxlVW: "68.2" }
    984: { input: 983, rem: "61.4", desktopxlVW: "68.3" }
    985: { input: 984, rem: "61.5", desktopxlVW: "68.3" }
    986: { input: 985, rem: "61.6", desktopxlVW: "68.4" }
    987: { input: 986, rem: "61.6", desktopxlVW: "68.5" }
    988: { input: 987, rem: "61.7", desktopxlVW: "68.5" }
    989: { input: 988, rem: "61.8", desktopxlVW: "68.6" }
    990: { input: 989, rem: "61.8", desktopxlVW: "68.7" }
    991: { input: 990, rem: "61.9", desktopxlVW: "68.8" }
    992: { input: 991, rem: "61.9", desktopxlVW: "68.8" }
    993: { input: 992, rem: "62.0", desktopxlVW: "68.9" }
    994: { input: 993, rem: "62.1", desktopxlVW: "69.0" }
    995: { input: 994, rem: "62.1", desktopxlVW: "69.0" }
    996: { input: 995, rem: "62.2", desktopxlVW: "69.1" }
    997: { input: 996, rem: "62.3", desktopxlVW: "69.2" }
    998: { input: 997, rem: "62.3", desktopxlVW: "69.2" }
    999: { input: 998, rem: "62.4", desktopxlVW: "69.3" }
    [1000… 1099]
    1000: { input: 999, rem: "62.4", desktopxlVW: "69.4" }
    1001: { input: 1000, rem: "62.5", desktopxlVW: "69.4" }
    1002: { input: 1001, rem: "62.6", desktopxlVW: "69.5" }
    1003: { input: 1002, rem: "62.6", desktopxlVW: "69.6" }
    1004: { input: 1003, rem: "62.7", desktopxlVW: "69.7" }
    1005: { input: 1004, rem: "62.8", desktopxlVW: "69.7" }
    1006: { input: 1005, rem: "62.8", desktopxlVW: "69.8" }
    1007: { input: 1006, rem: "62.9", desktopxlVW: "69.9" }
    1008: { input: 1007, rem: "62.9", desktopxlVW: "69.9" }
    1009: { input: 1008, rem: "63.0", desktopxlVW: "70.0" }
    1010: { input: 1009, rem: "63.1", desktopxlVW: "70.1" }
    1011: { input: 1010, rem: "63.1", desktopxlVW: "70.1" }
    1012: { input: 1011, rem: "63.2", desktopxlVW: "70.2" }
    1013: { input: 1012, rem: "63.3", desktopxlVW: "70.3" }
    1014: { input: 1013, rem: "63.3", desktopxlVW: "70.3" }
    1015: { input: 1014, rem: "63.4", desktopxlVW: "70.4" }
    1016: { input: 1015, rem: "63.4", desktopxlVW: "70.5" }
    1017: { input: 1016, rem: "63.5", desktopxlVW: "70.6" }
    1018: { input: 1017, rem: "63.6", desktopxlVW: "70.6" }
    1019: { input: 1018, rem: "63.6", desktopxlVW: "70.7" }
    1020: { input: 1019, rem: "63.7", desktopxlVW: "70.8" }
    1021: { input: 1020, rem: "63.8", desktopxlVW: "70.8" }
    1022: { input: 1021, rem: "63.8", desktopxlVW: "70.9" }
    1023: { input: 1022, rem: "63.9", desktopxlVW: "71.0" }
    1024: { input: 1023, rem: "63.9", desktopxlVW: "71.0" }
    1025: { input: 1024, rem: "64.0", desktopxlVW: "71.1" }
    1026: { input: 1025, rem: "64.1", desktopxlVW: "71.2" }
    1027: { input: 1026, rem: "64.1", desktopxlVW: "71.3" }
    1028: { input: 1027, rem: "64.2", desktopxlVW: "71.3" }
    1029: { input: 1028, rem: "64.3", desktopxlVW: "71.4" }
    1030: { input: 1029, rem: "64.3", desktopxlVW: "71.5" }
    1031: { input: 1030, rem: "64.4", desktopxlVW: "71.5" }
    1032: { input: 1031, rem: "64.4", desktopxlVW: "71.6" }
    1033: { input: 1032, rem: "64.5", desktopxlVW: "71.7" }
    1034: { input: 1033, rem: "64.6", desktopxlVW: "71.7" }
    1035: { input: 1034, rem: "64.6", desktopxlVW: "71.8" }
    1036: { input: 1035, rem: "64.7", desktopxlVW: "71.9" }
    1037: { input: 1036, rem: "64.8", desktopxlVW: "71.9" }
    1038: { input: 1037, rem: "64.8", desktopxlVW: "72.0" }
    1039: { input: 1038, rem: "64.9", desktopxlVW: "72.1" }
    1040: { input: 1039, rem: "64.9", desktopxlVW: "72.2" }
    1041: { input: 1040, rem: "65.0", desktopxlVW: "72.2" }
    1042: { input: 1041, rem: "65.1", desktopxlVW: "72.3" }
    1043: { input: 1042, rem: "65.1", desktopxlVW: "72.4" }
    1044: { input: 1043, rem: "65.2", desktopxlVW: "72.4" }
    1045: { input: 1044, rem: "65.3", desktopxlVW: "72.5" }
    1046: { input: 1045, rem: "65.3", desktopxlVW: "72.6" }
    1047: { input: 1046, rem: "65.4", desktopxlVW: "72.6" }
    1048: { input: 1047, rem: "65.4", desktopxlVW: "72.7" }
    1049: { input: 1048, rem: "65.5", desktopxlVW: "72.8" }
    1050: { input: 1049, rem: "65.6", desktopxlVW: "72.8" }
    1051: { input: 1050, rem: "65.6", desktopxlVW: "72.9" }
    1052: { input: 1051, rem: "65.7", desktopxlVW: "73.0" }
    1053: { input: 1052, rem: "65.8", desktopxlVW: "73.1" }
    1054: { input: 1053, rem: "65.8", desktopxlVW: "73.1" }
    1055: { input: 1054, rem: "65.9", desktopxlVW: "73.2" }
    1056: { input: 1055, rem: "65.9", desktopxlVW: "73.3" }
    1057: { input: 1056, rem: "66.0", desktopxlVW: "73.3" }
    1058: { input: 1057, rem: "66.1", desktopxlVW: "73.4" }
    1059: { input: 1058, rem: "66.1", desktopxlVW: "73.5" }
    1060: { input: 1059, rem: "66.2", desktopxlVW: "73.5" }
    1061: { input: 1060, rem: "66.3", desktopxlVW: "73.6" }
    1062: { input: 1061, rem: "66.3", desktopxlVW: "73.7" }
    1063: { input: 1062, rem: "66.4", desktopxlVW: "73.8" }
    1064: { input: 1063, rem: "66.4", desktopxlVW: "73.8" }
    1065: { input: 1064, rem: "66.5", desktopxlVW: "73.9" }
    1066: { input: 1065, rem: "66.6", desktopxlVW: "74.0" }
    1067: { input: 1066, rem: "66.6", desktopxlVW: "74.0" }
    1068: { input: 1067, rem: "66.7", desktopxlVW: "74.1" }
    1069: { input: 1068, rem: "66.8", desktopxlVW: "74.2" }
    1070: { input: 1069, rem: "66.8", desktopxlVW: "74.2" }
    1071: { input: 1070, rem: "66.9", desktopxlVW: "74.3" }
    1072: { input: 1071, rem: "66.9", desktopxlVW: "74.4" }
    1073: { input: 1072, rem: "67.0", desktopxlVW: "74.4" }
    1074: { input: 1073, rem: "67.1", desktopxlVW: "74.5" }
    1075: { input: 1074, rem: "67.1", desktopxlVW: "74.6" }
    1076: { input: 1075, rem: "67.2", desktopxlVW: "74.7" }
    1077: { input: 1076, rem: "67.3", desktopxlVW: "74.7" }
    1078: { input: 1077, rem: "67.3", desktopxlVW: "74.8" }
    1079: { input: 1078, rem: "67.4", desktopxlVW: "74.9" }
    1080: { input: 1079, rem: "67.4", desktopxlVW: "74.9" }
    1081: { input: 1080, rem: "67.5", desktopxlVW: "75.0" }
    1082: { input: 1081, rem: "67.6", desktopxlVW: "75.1" }
    1083: { input: 1082, rem: "67.6", desktopxlVW: "75.1" }
    1084: { input: 1083, rem: "67.7", desktopxlVW: "75.2" }
    1085: { input: 1084, rem: "67.8", desktopxlVW: "75.3" }
    1086: { input: 1085, rem: "67.8", desktopxlVW: "75.3" }
    1087: { input: 1086, rem: "67.9", desktopxlVW: "75.4" }
    1088: { input: 1087, rem: "67.9", desktopxlVW: "75.5" }
    1089: { input: 1088, rem: "68.0", desktopxlVW: "75.6" }
    1090: { input: 1089, rem: "68.1", desktopxlVW: "75.6" }
    1091: { input: 1090, rem: "68.1", desktopxlVW: "75.7" }
    1092: { input: 1091, rem: "68.2", desktopxlVW: "75.8" }
    1093: { input: 1092, rem: "68.3", desktopxlVW: "75.8" }
    1094: { input: 1093, rem: "68.3", desktopxlVW: "75.9" }
    1095: { input: 1094, rem: "68.4", desktopxlVW: "76.0" }
    1096: { input: 1095, rem: "68.4", desktopxlVW: "76.0" }
    1097: { input: 1096, rem: "68.5", desktopxlVW: "76.1" }
    1098: { input: 1097, rem: "68.6", desktopxlVW: "76.2" }
    1099: { input: 1098, rem: "68.6", desktopxlVW: "76.3" }
    [1100… 1199]
    1100: { input: 1099, rem: "68.7", desktopxlVW: "76.3" }
    1101: { input: 1100, rem: "68.8", desktopxlVW: "76.4" }
    1102: { input: 1101, rem: "68.8", desktopxlVW: "76.5" }
    1103: { input: 1102, rem: "68.9", desktopxlVW: "76.5" }
    1104: { input: 1103, rem: "68.9", desktopxlVW: "76.6" }
    1105: { input: 1104, rem: "69.0", desktopxlVW: "76.7" }
    1106: { input: 1105, rem: "69.1", desktopxlVW: "76.7" }
    1107: { input: 1106, rem: "69.1", desktopxlVW: "76.8" }
    1108: { input: 1107, rem: "69.2", desktopxlVW: "76.9" }
    1109: { input: 1108, rem: "69.3", desktopxlVW: "76.9" }
    1110: { input: 1109, rem: "69.3", desktopxlVW: "77.0" }
    1111: { input: 1110, rem: "69.4", desktopxlVW: "77.1" }
    1112: { input: 1111, rem: "69.4", desktopxlVW: "77.2" }
    1113: { input: 1112, rem: "69.5", desktopxlVW: "77.2" }
    1114: { input: 1113, rem: "69.6", desktopxlVW: "77.3" }
    1115: { input: 1114, rem: "69.6", desktopxlVW: "77.4" }
    1116: { input: 1115, rem: "69.7", desktopxlVW: "77.4" }
    1117: { input: 1116, rem: "69.8", desktopxlVW: "77.5" }
    1118: { input: 1117, rem: "69.8", desktopxlVW: "77.6" }
    1119: { input: 1118, rem: "69.9", desktopxlVW: "77.6" }
    1120: { input: 1119, rem: "69.9", desktopxlVW: "77.7" }
    1121: { input: 1120, rem: "70.0", desktopxlVW: "77.8" }
    1122: { input: 1121, rem: "70.1", desktopxlVW: "77.8" }
    1123: { input: 1122, rem: "70.1", desktopxlVW: "77.9" }
    1124: { input: 1123, rem: "70.2", desktopxlVW: "78.0" }
    1125: { input: 1124, rem: "70.3", desktopxlVW: "78.1" }
    1126: { input: 1125, rem: "70.3", desktopxlVW: "78.1" }
    1127: { input: 1126, rem: "70.4", desktopxlVW: "78.2" }
    1128: { input: 1127, rem: "70.4", desktopxlVW: "78.3" }
    1129: { input: 1128, rem: "70.5", desktopxlVW: "78.3" }
    1130: { input: 1129, rem: "70.6", desktopxlVW: "78.4" }
    1131: { input: 1130, rem: "70.6", desktopxlVW: "78.5" }
    1132: { input: 1131, rem: "70.7", desktopxlVW: "78.5" }
    1133: { input: 1132, rem: "70.8", desktopxlVW: "78.6" }
    1134: { input: 1133, rem: "70.8", desktopxlVW: "78.7" }
    1135: { input: 1134, rem: "70.9", desktopxlVW: "78.8" }
    1136: { input: 1135, rem: "70.9", desktopxlVW: "78.8" }
    1137: { input: 1136, rem: "71.0", desktopxlVW: "78.9" }
    1138: { input: 1137, rem: "71.1", desktopxlVW: "79.0" }
    1139: { input: 1138, rem: "71.1", desktopxlVW: "79.0" }
    1140: { input: 1139, rem: "71.2", desktopxlVW: "79.1" }
    1141: { input: 1140, rem: "71.3", desktopxlVW: "79.2" }
    1142: { input: 1141, rem: "71.3", desktopxlVW: "79.2" }
    1143: { input: 1142, rem: "71.4", desktopxlVW: "79.3" }
    1144: { input: 1143, rem: "71.4", desktopxlVW: "79.4" }
    1145: { input: 1144, rem: "71.5", desktopxlVW: "79.4" }
    1146: { input: 1145, rem: "71.6", desktopxlVW: "79.5" }
    1147: { input: 1146, rem: "71.6", desktopxlVW: "79.6" }
    1148: { input: 1147, rem: "71.7", desktopxlVW: "79.7" }
    1149: { input: 1148, rem: "71.8", desktopxlVW: "79.7" }
    1150: { input: 1149, rem: "71.8", desktopxlVW: "79.8" }
    1151: { input: 1150, rem: "71.9", desktopxlVW: "79.9" }
    1152: { input: 1151, rem: "71.9", desktopxlVW: "79.9" }
    1153: { input: 1152, rem: "72.0", desktopxlVW: "80.0" }
    1154: { input: 1153, rem: "72.1", desktopxlVW: "80.1" }
    1155: { input: 1154, rem: "72.1", desktopxlVW: "80.1" }
    1156: { input: 1155, rem: "72.2", desktopxlVW: "80.2" }
    1157: { input: 1156, rem: "72.3", desktopxlVW: "80.3" }
    1158: { input: 1157, rem: "72.3", desktopxlVW: "80.3" }
    1159: { input: 1158, rem: "72.4", desktopxlVW: "80.4" }
    1160: { input: 1159, rem: "72.4", desktopxlVW: "80.5" }
    1161: { input: 1160, rem: "72.5", desktopxlVW: "80.6" }
    1162: { input: 1161, rem: "72.6", desktopxlVW: "80.6" }
    1163: { input: 1162, rem: "72.6", desktopxlVW: "80.7" }
    1164: { input: 1163, rem: "72.7", desktopxlVW: "80.8" }
    1165: { input: 1164, rem: "72.8", desktopxlVW: "80.8" }
    1166: { input: 1165, rem: "72.8", desktopxlVW: "80.9" }
    1167: { input: 1166, rem: "72.9", desktopxlVW: "81.0" }
    1168: { input: 1167, rem: "72.9", desktopxlVW: "81.0" }
    1169: { input: 1168, rem: "73.0", desktopxlVW: "81.1" }
    1170: { input: 1169, rem: "73.1", desktopxlVW: "81.2" }
    1171: { input: 1170, rem: "73.1", desktopxlVW: "81.3" }
    1172: { input: 1171, rem: "73.2", desktopxlVW: "81.3" }
    1173: { input: 1172, rem: "73.3", desktopxlVW: "81.4" }
    1174: { input: 1173, rem: "73.3", desktopxlVW: "81.5" }
    1175: { input: 1174, rem: "73.4", desktopxlVW: "81.5" }
    1176: { input: 1175, rem: "73.4", desktopxlVW: "81.6" }
    1177: { input: 1176, rem: "73.5", desktopxlVW: "81.7" }
    1178: { input: 1177, rem: "73.6", desktopxlVW: "81.7" }
    1179: { input: 1178, rem: "73.6", desktopxlVW: "81.8" }
    1180: { input: 1179, rem: "73.7", desktopxlVW: "81.9" }
    1181: { input: 1180, rem: "73.8", desktopxlVW: "81.9" }
    1182: { input: 1181, rem: "73.8", desktopxlVW: "82.0" }
    1183: { input: 1182, rem: "73.9", desktopxlVW: "82.1" }
    1184: { input: 1183, rem: "73.9", desktopxlVW: "82.2" }
    1185: { input: 1184, rem: "74.0", desktopxlVW: "82.2" }
    1186: { input: 1185, rem: "74.1", desktopxlVW: "82.3" }
    1187: { input: 1186, rem: "74.1", desktopxlVW: "82.4" }
    1188: { input: 1187, rem: "74.2", desktopxlVW: "82.4" }
    1189: { input: 1188, rem: "74.3", desktopxlVW: "82.5" }
    1190: { input: 1189, rem: "74.3", desktopxlVW: "82.6" }
    1191: { input: 1190, rem: "74.4", desktopxlVW: "82.6" }
    1192: { input: 1191, rem: "74.4", desktopxlVW: "82.7" }
    1193: { input: 1192, rem: "74.5", desktopxlVW: "82.8" }
    1194: { input: 1193, rem: "74.6", desktopxlVW: "82.8" }
    1195: { input: 1194, rem: "74.6", desktopxlVW: "82.9" }
    1196: { input: 1195, rem: "74.7", desktopxlVW: "83.0" }
    1197: { input: 1196, rem: "74.8", desktopxlVW: "83.1" }
    1198: { input: 1197, rem: "74.8", desktopxlVW: "83.1" }
    1199: { input: 1198, rem: "74.9", desktopxlVW: "83.2" }
    [1200… 1299]
    1200: { input: 1199, rem: "74.9", desktopxlVW: "83.3" }
    1201: { input: 1200, rem: "75.0", desktopxlVW: "83.3" }
    1202: { input: 1201, rem: "75.1", desktopxlVW: "83.4" }
    1203: { input: 1202, rem: "75.1", desktopxlVW: "83.5" }
    1204: { input: 1203, rem: "75.2", desktopxlVW: "83.5" }
    1205: { input: 1204, rem: "75.3", desktopxlVW: "83.6" }
    1206: { input: 1205, rem: "75.3", desktopxlVW: "83.7" }
    1207: { input: 1206, rem: "75.4", desktopxlVW: "83.8" }
    1208: { input: 1207, rem: "75.4", desktopxlVW: "83.8" }
    1209: { input: 1208, rem: "75.5", desktopxlVW: "83.9" }
    1210: { input: 1209, rem: "75.6", desktopxlVW: "84.0" }
    1211: { input: 1210, rem: "75.6", desktopxlVW: "84.0" }
    1212: { input: 1211, rem: "75.7", desktopxlVW: "84.1" }
    1213: { input: 1212, rem: "75.8", desktopxlVW: "84.2" }
    1214: { input: 1213, rem: "75.8", desktopxlVW: "84.2" }
    1215: { input: 1214, rem: "75.9", desktopxlVW: "84.3" }
    1216: { input: 1215, rem: "75.9", desktopxlVW: "84.4" }
    1217: { input: 1216, rem: "76.0", desktopxlVW: "84.4" }
    1218: { input: 1217, rem: "76.1", desktopxlVW: "84.5" }
    1219: { input: 1218, rem: "76.1", desktopxlVW: "84.6" }
    1220: { input: 1219, rem: "76.2", desktopxlVW: "84.7" }
    1221: { input: 1220, rem: "76.3", desktopxlVW: "84.7" }
    1222: { input: 1221, rem: "76.3", desktopxlVW: "84.8" }
    1223: { input: 1222, rem: "76.4", desktopxlVW: "84.9" }
    1224: { input: 1223, rem: "76.4", desktopxlVW: "84.9" }
    1225: { input: 1224, rem: "76.5", desktopxlVW: "85.0" }
    1226: { input: 1225, rem: "76.6", desktopxlVW: "85.1" }
    1227: { input: 1226, rem: "76.6", desktopxlVW: "85.1" }
    1228: { input: 1227, rem: "76.7", desktopxlVW: "85.2" }
    1229: { input: 1228, rem: "76.8", desktopxlVW: "85.3" }
    1230: { input: 1229, rem: "76.8", desktopxlVW: "85.3" }
    1231: { input: 1230, rem: "76.9", desktopxlVW: "85.4" }
    1232: { input: 1231, rem: "76.9", desktopxlVW: "85.5" }
    1233: { input: 1232, rem: "77.0", desktopxlVW: "85.6" }
    1234: { input: 1233, rem: "77.1", desktopxlVW: "85.6" }
    1235: { input: 1234, rem: "77.1", desktopxlVW: "85.7" }
    1236: { input: 1235, rem: "77.2", desktopxlVW: "85.8" }
    1237: { input: 1236, rem: "77.3", desktopxlVW: "85.8" }
    1238: { input: 1237, rem: "77.3", desktopxlVW: "85.9" }
    1239: { input: 1238, rem: "77.4", desktopxlVW: "86.0" }
    1240: { input: 1239, rem: "77.4", desktopxlVW: "86.0" }
    1241: { input: 1240, rem: "77.5", desktopxlVW: "86.1" }
    1242: { input: 1241, rem: "77.6", desktopxlVW: "86.2" }
    1243: { input: 1242, rem: "77.6", desktopxlVW: "86.3" }
    1244: { input: 1243, rem: "77.7", desktopxlVW: "86.3" }
    1245: { input: 1244, rem: "77.8", desktopxlVW: "86.4" }
    1246: { input: 1245, rem: "77.8", desktopxlVW: "86.5" }
    1247: { input: 1246, rem: "77.9", desktopxlVW: "86.5" }
    1248: { input: 1247, rem: "77.9", desktopxlVW: "86.6" }
    1249: { input: 1248, rem: "78.0", desktopxlVW: "86.7" }
    1250: { input: 1249, rem: "78.1", desktopxlVW: "86.7" }
    1251: { input: 1250, rem: "78.1", desktopxlVW: "86.8" }
    1252: { input: 1251, rem: "78.2", desktopxlVW: "86.9" }
    1253: { input: 1252, rem: "78.3", desktopxlVW: "86.9" }
    1254: { input: 1253, rem: "78.3", desktopxlVW: "87.0" }
    1255: { input: 1254, rem: "78.4", desktopxlVW: "87.1" }
    1256: { input: 1255, rem: "78.4", desktopxlVW: "87.2" }
    1257: { input: 1256, rem: "78.5", desktopxlVW: "87.2" }
    1258: { input: 1257, rem: "78.6", desktopxlVW: "87.3" }
    1259: { input: 1258, rem: "78.6", desktopxlVW: "87.4" }
    1260: { input: 1259, rem: "78.7", desktopxlVW: "87.4" }
    1261: { input: 1260, rem: "78.8", desktopxlVW: "87.5" }
    1262: { input: 1261, rem: "78.8", desktopxlVW: "87.6" }
    1263: { input: 1262, rem: "78.9", desktopxlVW: "87.6" }
    1264: { input: 1263, rem: "78.9", desktopxlVW: "87.7" }
    1265: { input: 1264, rem: "79.0", desktopxlVW: "87.8" }
    1266: { input: 1265, rem: "79.1", desktopxlVW: "87.8" }
    1267: { input: 1266, rem: "79.1", desktopxlVW: "87.9" }
    1268: { input: 1267, rem: "79.2", desktopxlVW: "88.0" }
    1269: { input: 1268, rem: "79.3", desktopxlVW: "88.1" }
    1270: { input: 1269, rem: "79.3", desktopxlVW: "88.1" }
    1271: { input: 1270, rem: "79.4", desktopxlVW: "88.2" }
    1272: { input: 1271, rem: "79.4", desktopxlVW: "88.3" }
    1273: { input: 1272, rem: "79.5", desktopxlVW: "88.3" }
    1274: { input: 1273, rem: "79.6", desktopxlVW: "88.4" }
    1275: { input: 1274, rem: "79.6", desktopxlVW: "88.5" }
    1276: { input: 1275, rem: "79.7", desktopxlVW: "88.5" }
    1277: { input: 1276, rem: "79.8", desktopxlVW: "88.6" }
    1278: { input: 1277, rem: "79.8", desktopxlVW: "88.7" }
    1279: { input: 1278, rem: "79.9", desktopxlVW: "88.8" }
    1280: { input: 1279, rem: "79.9", desktopxlVW: "88.8" }
    1281: { input: 1280, rem: "80.0", desktopxlVW: "88.9" }
    1282: { input: 1281, rem: "80.1", desktopxlVW: "89.0" }
    1283: { input: 1282, rem: "80.1", desktopxlVW: "89.0" }
    1284: { input: 1283, rem: "80.2", desktopxlVW: "89.1" }
    1285: { input: 1284, rem: "80.3", desktopxlVW: "89.2" }
    1286: { input: 1285, rem: "80.3", desktopxlVW: "89.2" }
    1287: { input: 1286, rem: "80.4", desktopxlVW: "89.3" }
    1288: { input: 1287, rem: "80.4", desktopxlVW: "89.4" }
    1289: { input: 1288, rem: "80.5", desktopxlVW: "89.4" }
    1290: { input: 1289, rem: "80.6", desktopxlVW: "89.5" }
    1291: { input: 1290, rem: "80.6", desktopxlVW: "89.6" }
    1292: { input: 1291, rem: "80.7", desktopxlVW: "89.7" }
    1293: { input: 1292, rem: "80.8", desktopxlVW: "89.7" }
    1294: { input: 1293, rem: "80.8", desktopxlVW: "89.8" }
    1295: { input: 1294, rem: "80.9", desktopxlVW: "89.9" }
    1296: { input: 1295, rem: "80.9", desktopxlVW: "89.9" }
    1297: { input: 1296, rem: "81.0", desktopxlVW: "90.0" }
    1298: { input: 1297, rem: "81.1", desktopxlVW: "90.1" }
    1299: { input: 1298, rem: "81.1", desktopxlVW: "90.1" }
    1300: { input: 1299, rem: "81.2", desktopxlVW: "90.2" }
    1301: { input: 1300, rem: "81.3", desktopxlVW: "90.3" }
    1302: { input: 1301, rem: "81.3", desktopxlVW: "90.3" }
    1303: { input: 1302, rem: "81.4", desktopxlVW: "90.4" }
    1304: { input: 1303, rem: "81.4", desktopxlVW: "90.5" }
    1305: { input: 1304, rem: "81.5", desktopxlVW: "90.6" }
    1306: { input: 1305, rem: "81.6", desktopxlVW: "90.6" }
    1307: { input: 1306, rem: "81.6", desktopxlVW: "90.7" }
    1308: { input: 1307, rem: "81.7", desktopxlVW: "90.8" }
    1309: { input: 1308, rem: "81.8", desktopxlVW: "90.8" }
    1310: { input: 1309, rem: "81.8", desktopxlVW: "90.9" }
    1311: { input: 1310, rem: "81.9", desktopxlVW: "91.0" }
    1312: { input: 1311, rem: "81.9", desktopxlVW: "91.0" }
    1313: { input: 1312, rem: "82.0", desktopxlVW: "91.1" }
    1314: { input: 1313, rem: "82.1", desktopxlVW: "91.2" }
    1315: { input: 1314, rem: "82.1", desktopxlVW: "91.3" }
    1316: { input: 1315, rem: "82.2", desktopxlVW: "91.3" }
    1317: { input: 1316, rem: "82.3", desktopxlVW: "91.4" }
    1318: { input: 1317, rem: "82.3", desktopxlVW: "91.5" }
    1319: { input: 1318, rem: "82.4", desktopxlVW: "91.5" }
    1320: { input: 1319, rem: "82.4", desktopxlVW: "91.6" }
    1321: { input: 1320, rem: "82.5", desktopxlVW: "91.7" }
    1322: { input: 1321, rem: "82.6", desktopxlVW: "91.7" }
    1323: { input: 1322, rem: "82.6", desktopxlVW: "91.8" }
    1324: { input: 1323, rem: "82.7", desktopxlVW: "91.9" }
    1325: { input: 1324, rem: "82.8", desktopxlVW: "91.9" }
    1326: { input: 1325, rem: "82.8", desktopxlVW: "92.0" }
    1327: { input: 1326, rem: "82.9", desktopxlVW: "92.1" }
    1328: { input: 1327, rem: "82.9", desktopxlVW: "92.2" }
    1329: { input: 1328, rem: "83.0", desktopxlVW: "92.2" }
    1330: { input: 1329, rem: "83.1", desktopxlVW: "92.3" }
    1331: { input: 1330, rem: "83.1", desktopxlVW: "92.4" }
    1332: { input: 1331, rem: "83.2", desktopxlVW: "92.4" }
    1333: { input: 1332, rem: "83.3", desktopxlVW: "92.5" }
    1334: { input: 1333, rem: "83.3", desktopxlVW: "92.6" }
    1335: { input: 1334, rem: "83.4", desktopxlVW: "92.6" }
    1336: { input: 1335, rem: "83.4", desktopxlVW: "92.7" }
    1337: { input: 1336, rem: "83.5", desktopxlVW: "92.8" }
    1338: { input: 1337, rem: "83.6", desktopxlVW: "92.8" }
    1339: { input: 1338, rem: "83.6", desktopxlVW: "92.9" }
    1340: { input: 1339, rem: "83.7", desktopxlVW: "93.0" }
    1341: { input: 1340, rem: "83.8", desktopxlVW: "93.1" }
    1342: { input: 1341, rem: "83.8", desktopxlVW: "93.1" }
    1343: { input: 1342, rem: "83.9", desktopxlVW: "93.2" }
    1344: { input: 1343, rem: "83.9", desktopxlVW: "93.3" }
    1345: { input: 1344, rem: "84.0", desktopxlVW: "93.3" }
    1346: { input: 1345, rem: "84.1", desktopxlVW: "93.4" }
    1347: { input: 1346, rem: "84.1", desktopxlVW: "93.5" }
    1348: { input: 1347, rem: "84.2", desktopxlVW: "93.5" }
    1349: { input: 1348, rem: "84.3", desktopxlVW: "93.6" }
    1350: { input: 1349, rem: "84.3", desktopxlVW: "93.7" }
    1351: { input: 1350, rem: "84.4", desktopxlVW: "93.8" }
    1352: { input: 1351, rem: "84.4", desktopxlVW: "93.8" }
    1353: { input: 1352, rem: "84.5", desktopxlVW: "93.9" }
    1354: { input: 1353, rem: "84.6", desktopxlVW: "94.0" }
    1355: { input: 1354, rem: "84.6", desktopxlVW: "94.0" }
    1356: { input: 1355, rem: "84.7", desktopxlVW: "94.1" }
    1357: { input: 1356, rem: "84.8", desktopxlVW: "94.2" }
    1358: { input: 1357, rem: "84.8", desktopxlVW: "94.2" }
    1359: { input: 1358, rem: "84.9", desktopxlVW: "94.3" }
    1360: { input: 1359, rem: "84.9", desktopxlVW: "94.4" }
    1361: { input: 1360, rem: "85.0", desktopxlVW: "94.4" }
    1362: { input: 1361, rem: "85.1", desktopxlVW: "94.5" }
    1363: { input: 1362, rem: "85.1", desktopxlVW: "94.6" }
    1364: { input: 1363, rem: "85.2", desktopxlVW: "94.7" }
    1365: { input: 1364, rem: "85.3", desktopxlVW: "94.7" }
    1366: { input: 1365, rem: "85.3", desktopxlVW: "94.8" }
    1367: { input: 1366, rem: "85.4", desktopxlVW: "94.9" }
    1368: { input: 1367, rem: "85.4", desktopxlVW: "94.9" }
    1369: { input: 1368, rem: "85.5", desktopxlVW: "95.0" }
    1370: { input: 1369, rem: "85.6", desktopxlVW: "95.1" }
    1371: { input: 1370, rem: "85.6", desktopxlVW: "95.1" }
    1372: { input: 1371, rem: "85.7", desktopxlVW: "95.2" }
    1373: { input: 1372, rem: "85.8", desktopxlVW: "95.3" }
    1374: { input: 1373, rem: "85.8", desktopxlVW: "95.3" }
    1375: { input: 1374, rem: "85.9", desktopxlVW: "95.4" }
    1376: { input: 1375, rem: "85.9", desktopxlVW: "95.5" }
    1377: { input: 1376, rem: "86.0", desktopxlVW: "95.6" }
    1378: { input: 1377, rem: "86.1", desktopxlVW: "95.6" }
    1379: { input: 1378, rem: "86.1", desktopxlVW: "95.7" }
    1380: { input: 1379, rem: "86.2", desktopxlVW: "95.8" }
    1381: { input: 1380, rem: "86.3", desktopxlVW: "95.8" }
    1382: { input: 1381, rem: "86.3", desktopxlVW: "95.9" }
    1383: { input: 1382, rem: "86.4", desktopxlVW: "96.0" }
    1384: { input: 1383, rem: "86.4", desktopxlVW: "96.0" }
    1385: { input: 1384, rem: "86.5", desktopxlVW: "96.1" }
    1386: { input: 1385, rem: "86.6", desktopxlVW: "96.2" }
    1387: { input: 1386, rem: "86.6", desktopxlVW: "96.3" }
    1388: { input: 1387, rem: "86.7", desktopxlVW: "96.3" }
    1389: { input: 1388, rem: "86.8", desktopxlVW: "96.4" }
    1390: { input: 1389, rem: "86.8", desktopxlVW: "96.5" }
    1391: { input: 1390, rem: "86.9", desktopxlVW: "96.5" }
    1392: { input: 1391, rem: "86.9", desktopxlVW: "96.6" }
    1393: { input: 1392, rem: "87.0", desktopxlVW: "96.7" }
    1394: { input: 1393, rem: "87.1", desktopxlVW: "96.7" }
    1395: { input: 1394, rem: "87.1", desktopxlVW: "96.8" }
    1396: { input: 1395, rem: "87.2", desktopxlVW: "96.9" }
    1397: { input: 1396, rem: "87.3", desktopxlVW: "96.9" }
    1398: { input: 1397, rem: "87.3", desktopxlVW: "97.0" }
    1399: { input: 1398, rem: "87.4", desktopxlVW: "97.1" }
    [1400… 1499]
    1400: { input: 1399, rem: "87.4", desktopxlVW: "97.2" }
    1401: { input: 1400, rem: "87.5", desktopxlVW: "97.2" }
    1402: { input: 1401, rem: "87.6", desktopxlVW: "97.3" }
    1403: { input: 1402, rem: "87.6", desktopxlVW: "97.4" }
    1404: { input: 1403, rem: "87.7", desktopxlVW: "97.4" }
    1405: { input: 1404, rem: "87.8", desktopxlVW: "97.5" }
    1406: { input: 1405, rem: "87.8", desktopxlVW: "97.6" }
    1407: { input: 1406, rem: "87.9", desktopxlVW: "97.6" }
    1408: { input: 1407, rem: "87.9", desktopxlVW: "97.7" }
    1409: { input: 1408, rem: "88.0", desktopxlVW: "97.8" }
    1410: { input: 1409, rem: "88.1", desktopxlVW: "97.8" }
    1411: { input: 1410, rem: "88.1", desktopxlVW: "97.9" }
    1412: { input: 1411, rem: "88.2", desktopxlVW: "98.0" }
    1413: { input: 1412, rem: "88.3", desktopxlVW: "98.1" }
    1414: { input: 1413, rem: "88.3", desktopxlVW: "98.1" }
    1415: { input: 1414, rem: "88.4", desktopxlVW: "98.2" }
    1416: { input: 1415, rem: "88.4", desktopxlVW: "98.3" }
    1417: { input: 1416, rem: "88.5", desktopxlVW: "98.3" }
    1418: { input: 1417, rem: "88.6", desktopxlVW: "98.4" }
    1419: { input: 1418, rem: "88.6", desktopxlVW: "98.5" }
    1420: { input: 1419, rem: "88.7", desktopxlVW: "98.5" }
    1421: { input: 1420, rem: "88.8", desktopxlVW: "98.6" }
    1422: { input: 1421, rem: "88.8", desktopxlVW: "98.7" }
    1423: { input: 1422, rem: "88.9", desktopxlVW: "98.8" }
    1424: { input: 1423, rem: "88.9", desktopxlVW: "98.8" }
    1425: { input: 1424, rem: "89.0", desktopxlVW: "98.9" }
    1426: { input: 1425, rem: "89.1", desktopxlVW: "99.0" }
    1427: { input: 1426, rem: "89.1", desktopxlVW: "99.0" }
    1428: { input: 1427, rem: "89.2", desktopxlVW: "99.1" }
    1429: { input: 1428, rem: "89.3", desktopxlVW: "99.2" }
    1430: { input: 1429, rem: "89.3", desktopxlVW: "99.2" }
    1431: { input: 1430, rem: "89.4", desktopxlVW: "99.3" }
    1432: { input: 1431, rem: "89.4", desktopxlVW: "99.4" }
    1433: { input: 1432, rem: "89.5", desktopxlVW: "99.4" }
    1434: { input: 1433, rem: "89.6", desktopxlVW: "99.5" }
    1435: { input: 1434, rem: "89.6", desktopxlVW: "99.6" }
    1436: { input: 1435, rem: "89.7", desktopxlVW: "99.7" }
    1437: { input: 1436, rem: "89.8", desktopxlVW: "99.7" }
    1438: { input: 1437, rem: "89.8", desktopxlVW: "99.8" }
    1439: { input: 1438, rem: "89.9", desktopxlVW: "99.9" }
    1440: { input: 1439, rem: "89.9", desktopxlVW: "99.9" }
    1441: { input: 1440, rem: "90.0", desktopxlVW: "100.0" }
    1442: { input: 1441, rem: "90.1", desktopxlVW: "100.1" }
    1443: { input: 1442, rem: "90.1", desktopxlVW: "100.1" }
    1444: { input: 1443, rem: "90.2", desktopxlVW: "100.2" }
    1445: { input: 1444, rem: "90.3", desktopxlVW: "100.3" }
    1446: { input: 1445, rem: "90.3", desktopxlVW: "100.3" }
    1447: { input: 1446, rem: "90.4", desktopxlVW: "100.4" }
    1448: { input: 1447, rem: "90.4", desktopxlVW: "100.5" }
    1449: { input: 1448, rem: "90.5", desktopxlVW: "100.6" }
    1450: { input: 1449, rem: "90.6", desktopxlVW: "100.6" }
    1451: { input: 1450, rem: "90.6", desktopxlVW: "100.7" }
    1452: { input: 1451, rem: "90.7", desktopxlVW: "100.8" }
    1453: { input: 1452, rem: "90.8", desktopxlVW: "100.8" }
    1454: { input: 1453, rem: "90.8", desktopxlVW: "100.9" }
    1455: { input: 1454, rem: "90.9", desktopxlVW: "101.0" }
    1456: { input: 1455, rem: "90.9", desktopxlVW: "101.0" }
    1457: { input: 1456, rem: "91.0", desktopxlVW: "101.1" }
    1458: { input: 1457, rem: "91.1", desktopxlVW: "101.2" }
    1459: { input: 1458, rem: "91.1", desktopxlVW: "101.3" }
    1460: { input: 1459, rem: "91.2", desktopxlVW: "101.3" }
    1461: { input: 1460, rem: "91.3", desktopxlVW: "101.4" }
    1462: { input: 1461, rem: "91.3", desktopxlVW: "101.5" }
    1463: { input: 1462, rem: "91.4", desktopxlVW: "101.5" }
    1464: { input: 1463, rem: "91.4", desktopxlVW: "101.6" }
    1465: { input: 1464, rem: "91.5", desktopxlVW: "101.7" }
    1466: { input: 1465, rem: "91.6", desktopxlVW: "101.7" }
    1467: { input: 1466, rem: "91.6", desktopxlVW: "101.8" }
    1468: { input: 1467, rem: "91.7", desktopxlVW: "101.9" }
    1469: { input: 1468, rem: "91.8", desktopxlVW: "101.9" }
    1470: { input: 1469, rem: "91.8", desktopxlVW: "102.0" }
    1471: { input: 1470, rem: "91.9", desktopxlVW: "102.1" }
    1472: { input: 1471, rem: "91.9", desktopxlVW: "102.2" }
    1473: { input: 1472, rem: "92.0", desktopxlVW: "102.2" }
    1474: { input: 1473, rem: "92.1", desktopxlVW: "102.3" }
    1475: { input: 1474, rem: "92.1", desktopxlVW: "102.4" }
    1476: { input: 1475, rem: "92.2", desktopxlVW: "102.4" }
    1477: { input: 1476, rem: "92.3", desktopxlVW: "102.5" }
    1478: { input: 1477, rem: "92.3", desktopxlVW: "102.6" }
    1479: { input: 1478, rem: "92.4", desktopxlVW: "102.6" }
    1480: { input: 1479, rem: "92.4", desktopxlVW: "102.7" }
    1481: { input: 1480, rem: "92.5", desktopxlVW: "102.8" }
    1482: { input: 1481, rem: "92.6", desktopxlVW: "102.8" }
    1483: { input: 1482, rem: "92.6", desktopxlVW: "102.9" }
    1484: { input: 1483, rem: "92.7", desktopxlVW: "103.0" }
    1485: { input: 1484, rem: "92.8", desktopxlVW: "103.1" }
    1486: { input: 1485, rem: "92.8", desktopxlVW: "103.1" }
    1487: { input: 1486, rem: "92.9", desktopxlVW: "103.2" }
    1488: { input: 1487, rem: "92.9", desktopxlVW: "103.3" }
    1489: { input: 1488, rem: "93.0", desktopxlVW: "103.3" }
    1490: { input: 1489, rem: "93.1", desktopxlVW: "103.4" }
    1491: { input: 1490, rem: "93.1", desktopxlVW: "103.5" }
    1492: { input: 1491, rem: "93.2", desktopxlVW: "103.5" }
    1493: { input: 1492, rem: "93.3", desktopxlVW: "103.6" }
    1494: { input: 1493, rem: "93.3", desktopxlVW: "103.7" }
    1495: { input: 1494, rem: "93.4", desktopxlVW: "103.8" }
    1496: { input: 1495, rem: "93.4", desktopxlVW: "103.8" }
    1497: { input: 1496, rem: "93.5", desktopxlVW: "103.9" }
    1498: { input: 1497, rem: "93.6", desktopxlVW: "104.0" }
    1499: { input: 1498, rem: "93.6", desktopxlVW: "104.0" }
    1500: { input: 1499, rem: "93.7", desktopxlVW: "104.1" }

}]; */