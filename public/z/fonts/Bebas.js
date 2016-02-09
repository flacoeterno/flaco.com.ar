
var Bebas = function( path ){

  var texture = new THREE.ImageUtils.loadTexture( path );
  texture.flipY = false;
        
  return {

    texture:   texture,
    "0  "  : [293,    101 ,   32   ,      32   ,      -4   ,      2   ,   23],
    "10 "  : [0  ,    0   ,   0    ,      0    ,      -4   ,      0   ,   0 ],
    "32 "  : [0  ,    0   ,   0    ,      0    ,      -4   ,      0   ,   5 ],
    "33 "  : [295,    69  ,   12   ,      32   ,      -4   ,      2   ,   6 ],
    "34 "  : [164,    101 ,   17   ,      16   ,      -4   ,      2   ,   10],
    "35 "  : [488,    69  ,   21   ,      32   ,      -4   ,      2   ,   13],
    "36 "  : [173,    0   ,   19   ,      34   ,      -4   ,      1   ,   13],
    "37 "  : [461,    69  ,   27   ,      32   ,      -4   ,      2   ,   20],
    "38 "  : [0  ,    101 ,   20   ,      32   ,      -4   ,      2   ,   13],
    "39 "  : [181,    101 ,   12   ,      16   ,      -4   ,      2   ,   6 ],
    "40 "  : [327,    69  ,   15   ,      32   ,      -4   ,      2   ,   8 ],
    "41 "  : [342,    69  ,   15   ,      32   ,      -4   ,      2   ,   8 ],
    "42 "  : [44 ,    101 ,   21   ,      21   ,      -4   ,      2   ,   13],
    "43 "  : [65 ,    101 ,   20   ,      20   ,      -4   ,      8   ,   13],
    "44 "  : [193,    101 ,   12   ,      16   ,      -4   ,      21  ,   6 ],
    "45 "  : [253,    101 ,   15   ,      12   ,      -4   ,      12  ,   9 ],
    "46 "  : [241,    101 ,   12   ,      13   ,      -4   ,      21  ,   6 ],
    "47 "  : [419,    69  ,   21   ,      32   ,      -4   ,      2   ,   12],
    "48 "  : [275,    69  ,   20   ,      32   ,      -4   ,      2   ,   13],
    "49 "  : [495,    37  ,   15   ,      32   ,      -4   ,      2   ,   13],
    "50 "  : [119,    69  ,   19   ,      32   ,      -4   ,      2   ,   13],
    "51 "  : [138,    69  ,   19   ,      32   ,      -4   ,      2   ,   13],
    "52 "  : [157,    69  ,   21   ,      32   ,      -4   ,      2   ,   13],
    "53 "  : [178,    69  ,   19   ,      32   ,      -4   ,      2   ,   13],
    "54 "  : [197,    69  ,   19   ,      32   ,      -4   ,      2   ,   13],
    "55 "  : [216,    69  ,   19   ,      32   ,      -4   ,      2   ,   13],
    "56 "  : [235,    69  ,   20   ,      32   ,      -4   ,      2   ,   13],
    "57 "  : [255,    69  ,   20   ,      32   ,      -4   ,      2   ,   13],
    "58 "  : [32 ,    101 ,   12   ,      25   ,      -4   ,      9   ,   6 ],
    "59 "  : [20 ,    101 ,   12   ,      28   ,      -4   ,      9   ,   6 ],
    "60 "  : [85 ,    101 ,   20   ,      19   ,      -4   ,      8   ,   13],
    "61 "  : [145,    101 ,   19   ,      17   ,      -4   ,      9   ,   13],
    "62 "  : [105,    101 ,   19   ,      19   ,      -4   ,      8   ,   13],
    "63 "  : [307,    69  ,   20   ,      32   ,      -4   ,      2   ,   12],
    "64 "  : [143,    0   ,   30   ,      34   ,      -4   ,      1   ,   22],
    "65 "  : [213,    0   ,   21   ,      32   ,      -4   ,      2   ,   13],
    "66 "  : [234,    0   ,   20   ,      32   ,      -4   ,      2   ,   13],
    "67 "  : [254,    0   ,   20   ,      32   ,      -4   ,      2   ,   12],
    "68 "  : [274,    0   ,   20   ,      32   ,      -4   ,      2   ,   13],
    "69 "  : [294,    0   ,   18   ,      32   ,      -4   ,      2   ,   12],
    "70 "  : [312,    0   ,   18   ,      32   ,      -4   ,      2   ,   11],
    "71 "  : [330,    0   ,   20   ,      32   ,      -4   ,      2   ,   12],
    "72 "  : [350,    0   ,   20   ,      32   ,      -4   ,      2   ,   14],
    "73 "  : [370,    0   ,   12   ,      32   ,      -4   ,      2   ,   6 ],
    "74 "  : [382,    0   ,   16   ,      32   ,      -4   ,      2   ,   8 ],
    "75 "  : [398,    0   ,   20   ,      32   ,      -4   ,      2   ,   13],
    "76 "  : [418,    0   ,   18   ,      32   ,      -4   ,      2   ,   11],
    "77 "  : [436,    0   ,   24   ,      32   ,      -4   ,      2   ,   17],
    "78 "  : [460,    0   ,   20   ,      32   ,      -4   ,      2   ,   14],
    "79 "  : [480,    0   ,   20   ,      32   ,      -4   ,      2   ,   13],
    "80 "  : [0  ,    37  ,   19   ,      32   ,      -4   ,      2   ,   12],
    "81 "  : [192,    0   ,   21   ,      33   ,      -4   ,      2   ,   13],
    "82 "  : [19 ,    37  ,   20   ,      32   ,      -4   ,      2   ,   13],
    "83 "  : [39 ,    37  ,   20   ,      32   ,      -4   ,      2   ,   12],
    "84 "  : [59 ,    37  ,   20   ,      32   ,      -4   ,      2   ,   11],
    "85 "  : [79 ,    37  ,   19   ,      32   ,      -4   ,      2   ,   13],
    "86 "  : [98 ,    37  ,   21   ,      32   ,      -4   ,      2   ,   13],
    "87 "  : [119,    37  ,   26   ,      32   ,      -4   ,      2   ,   18],
    "88 "  : [145,    37  ,   22   ,      32   ,      -4   ,      2   ,   14],
    "89 "  : [167,    37  ,   21   ,      32   ,      -4   ,      2   ,   13],
    "90 "  : [188,    37  ,   20   ,      32   ,      -4   ,      2   ,   12],
    "91 "  : [357,    69  ,   15   ,      32   ,      -4   ,      2   ,   8 ],
    "92 "  : [440,    69  ,   21   ,      32   ,      -4   ,      2   ,   12],
    "93 "  : [372,    69  ,   15   ,      32   ,      -4   ,      2   ,   8 ],
    "94 "  : [124,    101 ,   21   ,      19   ,      -4   ,      2   ,   13],
    "95 "  : [268,    101 ,   25   ,      11   ,      -4   ,      25  ,   16],
    "96"   : [226,    101 ,   15   ,      13   ,      -4   ,      -3  ,   8 ],
    "97 "  : [208,    37  ,   21   ,      32   ,      -4   ,      2   ,   13],
    "98 "  : [229,    37  ,   20   ,      32   ,      -4   ,      2   ,   13],
    "99 "  : [249,    37  ,   20   ,      32   ,      -4   ,      2   ,   12],
    "100"  : [269,    37  ,   20   ,      32   ,      -4   ,      2   ,   13],
    "101"  : [289,    37  ,   18   ,      32   ,      -4   ,      2   ,   12],
    "102"  : [307,    37  ,   18   ,      32   ,      -4   ,      2   ,   11],
    "103"  : [325,    37  ,   20   ,      32   ,      -4   ,      2   ,   12],
    "104"  : [345,    37  ,   20   ,      32   ,      -4   ,      2   ,   14],
    "105"  : [365,    37  ,   12   ,      32   ,      -4   ,      2   ,   6 ],
    "106"  : [377,    37  ,   16   ,      32   ,      -4   ,      2   ,   8 ],
    "107"  : [393,    37  ,   20   ,      32   ,      -4   ,      2   ,   13],
    "108"  : [413,    37  ,   18   ,      32   ,      -4   ,      2   ,   11],
    "109"  : [431,    37  ,   24   ,      32   ,      -4   ,      2   ,   17],
    "110"  : [455,    37  ,   20   ,      32   ,      -4   ,      2   ,   14],
    "111"  : [475,    37  ,   20   ,      32   ,      -4   ,      2   ,   13],
    "112"  : [0  ,    69  ,   19   ,      32   ,      -4   ,      2   ,   12],
    "113"  : [192,    0   ,   21   ,      33   ,      -4   ,      2   ,   13],
    "114"  : [19 ,    69  ,   20   ,      32   ,      -4   ,      2   ,   13],
    "115"  : [39 ,    69  ,   20   ,      32   ,      -4   ,      2   ,   12],
    "116"  : [59 ,    69  ,   20   ,      32   ,      -4   ,      2   ,   11],
    "117"  : [79 ,    69  ,   19   ,      32   ,      -4   ,      2   ,   13],
    "118"  : [98 ,    69  ,   21   ,      32   ,      -4   ,      2   ,   13],
    "119"  : [119,    37  ,   26   ,      32   ,      -4   ,      2   ,   18],
    "120"  : [145,    37  ,   22   ,      32   ,      -4   ,      2   ,   14],
    "121"  : [167,    37  ,   21   ,      32   ,      -4   ,      2   ,   13],
    "122"  : [188,    37  ,   20   ,      32   ,      -4   ,      2   ,   12],
    "123"  : [387,    69  ,   16   ,      32   ,      -4   ,      2   ,   8 ],
    "124"  : [131,    0   ,   12   ,      36   ,      -4   ,      0   ,   16],
    "125"  : [403,    69  ,   16   ,      32   ,      -4   ,      2   ,   8 ],
    "126"  : [205,    101 ,   21   ,      14   ,      -4   ,      11  ,   13],
    "127" : [0  ,    0   ,   21   ,      37   ,      -4   ,      -3  ,   13],
    "128": [21 ,    0   ,   18   ,      37   ,      -4   ,      -3  ,   12],
    "129": [39 ,    0   ,   14   ,      37   ,      -4   ,      -3  ,   6 ],
    "130": [111,    0   ,   20   ,      36   ,      -4   ,      -2  ,   14],
    "131": [53 ,    0   ,   20   ,      37   ,      -4   ,      -3  ,   13],
    "132": [73 ,    0   ,   19   ,      37   ,      -4   ,      -3  ,   13],
    "133": [92 ,    0   ,   19   ,      36   ,      -4   ,      -2  ,   13],
    "134": [0  ,    0   ,   21   ,      37   ,      -4   ,      -3  ,   13],
    "135": [21 ,    0   ,   18   ,      37   ,      -4   ,      -3  ,   12],
    "136": [39 ,    0   ,   14   ,      37   ,      -4   ,      -3  ,   6 ],
    "137": [111,    0   ,   20   ,      36   ,      -4   ,      -2  ,   14],
    "138": [53 ,    0   ,   20   ,      37   ,      -4   ,      -3  ,   13],
    "139": [73 ,    0   ,   19   ,      37   ,      -4   ,      -3  ,   13],
    "140": [92 ,    0   ,   19   ,      36   ,      -4   ,      -2  ,   13]

  }
}

