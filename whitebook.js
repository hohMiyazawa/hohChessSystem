const key_Bg4_london = {move: "c3",replies:[
	{move: "e6",   freq: 21343,book:[{move: "Qa4",replies:[
		{move: "Bd6", freq:  529,book:[{move: "Ba6",replies:[
			{move: "Bxf4",  freq: 55,book:[{move: "Bxb7"}]},
			{move: "O-O",   freq: 37,book:[{move: "Bxb7"}]},
			{move: "Qb6",   freq: 37,book:[{move: "Bxb7"}]},
			{move: "Rb8",   freq: 24,book:[{move: "Bxb7"}]},
			{move: "bxa6",  freq: 21,book:[{move: "Qxc6+"}]},
			{move: "Qd7",   freq: 15,book:[{move: "Bxb7"}]},
			{move: "Qc7",   freq: 13,book:[{move: "Bxd6"}]},
		]}]},
		{move: "Bxf3", freq: 504,book:[]},
		{move: "Nd7",  freq: 264,book:[]},
		{move: "Qb6",  freq: 253,book:[]},
		{move: "a6",   freq: 209,book:[]},
		{move: "Be7",  freq: 186,book:[]},
		{move: "cxd4", freq: 118,book:[]},
		{move: "Qd7",  freq: 102,book:[]},
		{move: "c4",   freq:  52,book:[]},
	]}]},
	{move: "cxd4", freq:  1526,book:[]},
	{move: "Qb6",  freq:  1469,book:[]},
	{move: "Ne4",  freq:   728,book:[]},
	{move: "Bxf3",  freq:  606,book:[]},
]}

const key_london = {move:"Nb1d2",replies:[
	{move: "Qb6", freq:  9577,book:[{move: "dxc5",replies:[
		{move: "Qxb2",  freq: 4392,book:[{move: "Rb1",replies:[
			{move: "Qc3",  freq: 2255,book:[{move: "Bb5",replies:[
				{move: "e6", freq:  761,book:[{move: "O-O",replies:[
					{move: "Be7", freq: 421,book:[{move: "e4",replies:[
						{move: "O-O", freq:  49,book:[]},
						{move: "dxe4", freq: 22,book:[{move: "Nc4",replies:[
							{move: "exf3", freq:  4,book:[{move: "Rb3"}]},
							{move: "Nd5",  freq:  2,book:[{move: "Be5"}]},
						]}]},
						{move: "Nxe4", freq:  6,book:[]},
						{move: "Qzxc5", freq: 4,book:[]},
					]}]},
					{move: "Bxc5",freq: 104,book:[{move: "Be5",replies:[
						{move: "Qa5", freq: 29,book:[]},
						{move: "Qa3", freq: 11,book:[]},
					]}]},
					{move: "Qxc5", freq: 62,book:[]},
					{move: "Bd7", freq:  55,book:[]},
				]}]},
				{move: "Qxc5", freq:510,book:[]},
				{move: "g6",   freq:419,book:[]},
				{move: "Nd7",  freq:228,book:[]},
				{move: "Bf5",  freq: 59,book:[]},
			]}]},
			{move: "Qxa2", freq:  813,book:[]},
			{move: "Qa3",  freq:  392,book:[]},
		]}]},
		{move: "Qxc5",  freq: 2445,book:[]},
	]}]},
	{move: "cxd4", freq: 5998,book:[]},
	{move: "Bg4",  freq: 5976,book:[key_Bg4_london]},
	{move: "Bf5",  freq: 5975,book:[]},
	{move: "e6",   freq: 5380,book:[]},
	{move: "Nh5",   freq: 797,book:[]},
	{move: "g6",    freq: 604,book:[]},
]}

const c5_london = {move:"Nf3",replies:[
	{move: "Nc6",  freq: 201214,book:[key_london]},
	{move: "Qb6",  freq:  23933,book:[]},
	{move: "cxd4", freq:  21691,book:[]},
	{move: "e6",   freq:   5689,book:[]},
	{move: "Bf5",   freq:  4816,book:[]},
]}

const pure_c5_london = {move: "e3",replies:[
	{move: "Nc6",  freq:  152686,book:[{move: "Nf3"}]},
	{move: "cxd4",  freq:  51549,book:[]},
	{move: "e6",    freq:  20366,book:[]},
	{move: "Nf6",   freq:  20312,book:[]},
	{move: "Qb6",   freq:  10158,book:[]},
	{move: "Bf5",   freq:   5181,book:[]},
	{move: "c4",    freq:   5042,book:[]},
	{move: "a6",    freq:   3578,book:[]},
]}

const london_main = {move: "e3",replies:[
	{move: "e6",   freq:  536659,book:[{move: "Nf3"}]},
	{move: "Bf5",  freq:  323823,book:[]},
	{move: "c5",  freq:   315373,book:[c5_london]},
	{move: "Nc6",  freq:  174962,book:[]},
	{move: "c6",   freq:  103383,book:[]},
	{move: "g6",   freq:  102291,book:[]},
	{move: "Bg4",  freq:   66039,book:[]},
	{move: "a6",   freq:   47614,book:[]},
	{move: "Nb8d7", freq:  17576,book:[]},
	{move: "h6",    freq:  12975,book:[]},
	{move: "Nh5",   freq:   5935,book:[{move: "Qxh5"}]},
]};

const london = {move: "Bf4",replies:[
	{move: "Nf6", freq: 1825207,book:[london_main]},
	{move: "e6",  freq: 1194698,book:[{move: "e3",replies:[
		{move: "Bd6",   freq:   370713,book:[]},
		{move: "Nf6",   freq:   350841,book:[]},
		{move: "c5",   freq:    234136,book:[]},
		{move: "Nc6",   freq:    39371,book:[]},
		{move: "f5",    freq:    36486,book:[]},
		{move: "a6",    freq:    35804,book:[]},
		{move: "c6",    freq:    34762,book:[]},
		{move: "Be7",    freq:   16230,book:[]},
		{move: "h6",     freq:   13815,book:[]},
		{move: "Bb4+",     freq:  6451,book:[]},
		{move: "Nd7",     freq:   5898,book:[]},
	]}]},
	{move: "Nc6", freq:  979516,book:[{move: "e3"}]},
	{move: "Bf5", freq:  771087,book:[{move: "e3"}]},
	{move: "c6", freq:   513881,book:[{move: "e3"}]},
	{move: "c5",  freq:  420713,book:[pure_c5_london]},
	{move: "g6",  freq:   72953,book:[{move: "e3"}]},
	{move: "f6",  freq:   53296,book:[{move: "e3"}]},
	{move: "Bg4",  freq:  49627,book:[]},
	{move: "h6",   freq:  33392,book:[]},
	{move: "e5",   freq:  32058,book:[]},
	{move: "h5",   freq:  28454,book:[{move: "Nf3"}]},
]};

const queenspawn = {move: "d4",replies:[
	{move: "d5",   freq: 14423006,book:[london,{move: "c4"},{move: "Nf3"}]},
	{move: "Nf6",   freq: 6220728,book:[{move: "Bf4",replies:[
		{move: "g6",   freq:  1002800},
		{move: "e6",   freq:   852750},
		{move: "d5",   freq:   713766,book:[london_main]},
		{move: "d6",   freq:   489362},
		{move: "c5",   freq:   348631},
		{move: "b6",   freq:    50586},
		{move: "c6",   freq:    47636},
		{move: "Nc6",   freq:   32024},
		{move: "Nd5",   freq:   23673},
	]},{move: "Nf3"}]},
	{move: "e6",   freq:  3687994,book:[{move: "Bf4"},{move: "e4"}]},
	{move: "g6",   freq:  1746401,book:[{move: "Bf4"},{move: "Nf3"},{move: "e4"}]},
	{move: "e5",   freq:  1656145},
	{move: "c5",   freq:  1519219},
	{move: "c6",   freq:  1116647},
	{move: "d6",   freq:  1105706},
	{move: "b6",   freq:   753685},
	{move: "f5",   freq:   591035},
	{move: "Nc6",   freq:  248999,book:[{move: "Bf4"},{move: "d5"}]},
	{move: "a6",   freq:    64800},
]}

const main_philidor = [
	{move: "Be7", freq:  92038,book:[{move: "Bf4",replies:[
		{move: "O-O", freq:  4458,book:[{move: "Qd2",replies:[
			{move: "Nc6", freq: 3903,book:[{move: "O-O-O",replies:[
				{move: "Nxd4",   freq: 2521,book:[{move: "Qxd4"}]},
				{move: "a6",   freq:    641,book:[]},
				{move: "Bd7",   freq:   254,book:[]},
				{move: "Ne5",   freq:   236,book:[]},
				{move: "Be6",   freq:   226,book:[]},
				{move: "a5",   freq:    192,book:[]},
				{move: "Re8",   freq:   174,book:[]},
			]}]},
			{move: "a6", freq:  3817,book:[{move: "O-O-O",replies:[
				{move: "b5",   freq: 2276,book:[{move: "Be2"}]},
				{move: "c5",   freq:  435,book:[]},
				{move: "Nc6",  freq:  288,book:[]},
				{move: "Nb8d7",freq:  108,book:[]},
			]}]},
			{move: "c5", freq:  2081,book:[{move: "Nd4b5",replies:[
				{move: "a6", freq: 108,book:[{move: "Nxd6",replies:[
					{move: "Bxd6", freq:  276,book:[{move: "Qxd6",replies:[
						{move: "Qxd6",  freq:  75,book:[{move: "Bxd6",replies:[
							{move: "Re8",   freq:   48,book:[{move: "f3",replies:[
								{move: "Nc6",   freq:   17,book:[{move: "Bxc5"}]},
								{move: "b6",    freq:   12,book:[{move: "O-O-O"}]},
							]}]},
							{move: "Rd8",   freq:   22,book:[{move: "Bxc5"}]},
						]}]},
						{move: "Qa5",  freq:   38,book:[{move: "Qc7",replies:[
							{move: "Qb4",   freq:   3,book:[{move: "O-O-O",replies:[
								{move: "Nc6",   freq:  2,book:[{move: "a3"}]},
								{move: "Nxe4",  freq:  1,book:[{move: "a3"}]},
							]}]},
							{move: "b6",    freq:   1,book:[{move: "O-O-O"}]},
							{move: "Qxc7",  freq:   1,book:[{move: "Bxc7"}]},
						]}]},
					]}]},
					{move: "Nc6",  freq:   45,book:[]},
					{move: "b5",   freq:   22,book:[]},
				]}]},
				{move: "Nc6", freq: 32,book:[]},
			]}]},
			{move: "c6", freq:   1336,book:[]},
			{move: "d5", freq:   1009,book:[]},
			{move: "Nb8d7", freq:1002,book:[]},
			{move: "Re8",   freq: 914,book:[]},
			{move: "Bd7",   freq: 811,book:[]},
		]}]},
		{move: "Bd7", freq:   384,book:[]},
		{move: "c5", freq:    345,book:[]},
		{move: "a6", freq:    279,book:[]},
	]}]},
	{move: "c5", freq:   16145,book:[{move: "Bb5+"}]},
	{move: "Bd7", freq:  11366,book:[]},
	{move: "Nc6", freq:   9950,book:[{move: "Bb5"}]},
];

const skot_nights = {move: "d4",replies:[
	{move: "exd4", freq:  632095,book:[{move: "Nxd4",replies:[
		{move: "Bb4",  freq:  378564,book:[{move: "Nxc6",replies:[
			{move: "bxc6",   freq:  268964,book:[{move: "Bd3",replies:[
				{move: "d5",  freq:  125694,book:[{move: "exd5",replies:[
					{move: "cxd5",  freq: 73085,book:[{move: "h3",replies:[
						{move: "O-O",  freq:  69,book:[{move: "O-O",replies:[
							{move: "c6",   freq:  10441,book:[{move: "Bf4"}]},
							{move: "h6",   freq:   3535,book:[]},
							{move: "Be6",  freq:    832,book:[]},
							{move: "Re8",  freq:    707,book:[]},
							{move: "c5",   freq:    508,book:[]},
						]}]},
						{move: "d4",   freq:  19,book:[]},
						{move: "c6",   freq:   6,book:[]},
					]}]},
					{move: "O-O",  freq:  21652,book:[]},
					{move: "Qe7+", freq:   3782,book:[]},
					{move: "Nxd5",  freq:  2149,book:[]},
				]}]},
				{move: "O-O",  freq:  75199,book:[{move: "O-O",replies:[
					{move: "d5",  freq:  31598,book:[{move: "exd5"}]},
					{move: "Re8",  freq: 15446,book:[{move: "Bg5"}]},
					{move: "d6",   freq:  5058,book:[]},
					{move: "Bxc3",  freq: 4985,book:[]},
					{move: "h6",    freq: 3526,book:[]},
					{move: "Bb7",   freq:  738,book:[]},
				]}]},
				{move: "d6",  freq:    8211,book:[]},
				{move: "Bxc3+",  freq: 6091,book:[]},
				{move: "Qe7",    freq: 4963,book:[]},
			]}]},
			{move: "Bxc3+",   freq:  20615,book:[{move: "bxc3"}]},
			{move: "dxc6",   freq:   12917,book:[{move: "Qxd8+"}]},
		]}]},
		{move: "Nxd4", freq:  183579,book:[{move: "Qxd4",replies:[
			{move: "d6",   freq: 106447,book:[{move: "Bf4"}]},
			{move: "b6",   freq:  42510,book:[{move: "e5"}]},
			{move: "c5",   freq:  39963,book:[{move: "Qd3"}]},
			{move: "Be7",  freq:  33848,book:[{move: "e5"}]},
			{move: "Qe7",  freq:   8880,book:[]},
			{move: "c6",   freq:   5928,book:[]},
			{move: "Bd6",  freq:   4887,book:[]},
			{move: "d5",   freq:   3503,book:[]},
			{move: "g6",   freq:   2500,book:[]},
			{move: "h6",   freq:   2022,book:[]},
		]}]},
		{move: "Bc5",  freq:  155012,book:[{move: "Be3",replies:[
			{move: "Nxd4", freq:  18547,book:[{move: "Bxd4"}]},
			{move: "Bb6",  freq:  14581,book:[{move: "Qd2"}]},
			{move: "O-O",  freq:  11079,book:[{move: "Nxc6"}]},
			{move: "Bxd4", freq:   8110,book:[{move: "Bxd4"}]},
			{move: "d6",   freq:   6917,book:[{move: "Nxc6"}]},
			{move: "Qe7",  freq:   5005,book:[{move: "Nf5"}]},
			{move: "Bb4",  freq:   4178,book:[{move: "Nxc6"}]},
			{move: "d5",   freq:   1214,book:[]},
		]}]},
		{move: "d6",   freq:   45897,book:[{move: "Bb5"}]},
		{move: "Be7",  freq:   14875,book:[]},
		{move: "d5",   freq:   11590,book:[]},
		{move: "Ne5",  freq:   10625,book:[]},
		{move: "Nxe4", freq:    9636,book:[]},
		{move: "Qe7",  freq:    4094,book:[]},
	]}]},
	{move: "Bb4",  freq:   66985,book:[{move: "Nxe5",replies:[
		{move: "Nxe4", freq:  2744,book:[{move: "Qg4"}]},
		{move: "Nxe5", freq:  2142,book:[{move: "dxe5"}]},
		{move: "Qe7",  freq:  1535,book:[{move: "Qd3"}]},
		{move: "Bxc3+",  freq: 996,book:[]},
		{move: "O-O",  freq:   966,book:[]},
	]}]},
	{move: "d6",   freq:   49080,book:[{move: "Bb5"}]},
	{move: "Nxd4", freq:   11033,book:[]},
	{move: "d5",   freq:   10967,book:[]},
	{move: "Bc5",  freq:    8026,book:[]},
	{move: "Bd6",  freq:    6359,book:[]},
]};

const fork_nights = {move: "Nc3",replies:[
	{move: "Nf6", freq:  1628039,book:[skot_nights]},
	{move: "Bc5", freq:   833235,book:[{move: "Nxe5",replies:[
		{move: "Nxe5",  freq:  77143,book:[{move: "d4",replies:[
			{move: "Bxd4",   freq:  26279,book:[{move: "Qxd4",replies:[
				{move: "d6",    freq:  16202,book:[{move: "Be3"}]},
				{move: "Nc6",   freq:   7890,book:[{move: "Qxg7"}]},
				{move: "Qf6",   freq:   7368,book:[{move: "Nb5"}]},
				{move: "f6",    freq:   2394,book:[{move: "f4"}]},
				{move: "Qe7",   freq:   1271,book:[]},
				{move: "Ng6",   freq:    743,book:[]},
			]}]},
			{move: "Bd6",    freq:  19593,book:[{move: "dxe5",replieS:[
				{move: "Bxe5",    freq:  19168,book:[{move: "Bd3",replies:[
					{move: "Nf6",   freq:   1908,book:[{move: "O-O"}]},
					{move: "Bxc3+", freq:    918,book:[{move: "bxc3"}]},
					{move: "d6",    freq:    755,book:[{move: "h3"}]},
					{move: "c6",    freq:    197,book:[]},
					{move: "Qh4",   freq:    192,book:[]},
					{move: "Be7",   freq:    185,book:[]},
					{move: "Qf6",   freq:    123,book:[]},
				]}]},
			]}]},
			{move: "Bb4",    freq:   7737,book:[{move: "dxe5"}]},
			{move: "Bb6",    freq:   5321,book:[{move: "dxe5"}]},
			{move: "Nf3+",   freq:   2021,book:[{move: "gxf3"}]},
			{move: "Qe7",    freq:   1604,book:[{move: "Nd5"}]},
			{move: "Qf6",    freq:   1325,book:[{move: "dxc5"}]},
		]}]},
		{move: "Bxf2+", freq:  54864,book:[{move: "Kxf2",replies:[
			{move: "Nxe5",   freq:  53941,book:[{move: "d4",replies:[
				{move: "Ng6",   freq:  21898,book:[{move: "Be2",replies:[
					{move: "d6",   freq:  1755,book:[{move: "Rf1"}]},
					{move: "Ng8e7", freq:  626,book:[]},
					{move: "Qh4+", freq:   498,book:[]},
					{move: "Nf6", freq:    368,book:[]},
					{move: "Qf6+", freq:   214,book:[]},
					{move: "c6",   freq:   154,book:[]},
					{move: "d5",   freq:   122,book:[]},
				]}]},
				{move: "Qf6+",  freq:  14910,book:[]},
				{move: "Nc6",   freq:   5815,book:[]},
				{move: "Qh4+",  freq:   3904,book:[]},
			]}]},
		]}]},
		{move: "Nf6",   freq:   3420,book:[]},
		{move: "d6",    freq:   2572,book:[]},
		{move: "Qf6",   freq:   2472,book:[]},
		{move: "Qh4",   freq:    868,book:[]},
		{move: "Qe7",   freq:    528,book:[]},
	]}]},
	{move: "d6",  freq:   297228,book:[{move: "d4",replies:[
		{move: "exd4",  freq: 84576,book:[{move: "Nxd4",replies:[
			{move: "Nxd4",   freq: 64444,book:[{move: "Qxd4"}]},
			{move: "Nf6",    freq: 54859,book:[{move: "Bb5"}]},
			{move: "Bd7",    freq: 28427,book:[{move: "Be3"}]},
			{move: "Be7",    freq: 12814,book:[]},
			{move: "g6",     freq:  5107,book:[]},
			{move: "Ne5",    freq:  4251,book:[]},
			{move: "Ng8e7",  freq:  3105,book:[]},
		]}]},
		{move: "Bg4",   freq: 46476,book:[]},
		{move: "Nf6",   freq: 15255,book:[]},
		{move: "Be7",   freq:  6858,book:[]},
		{move: "f5",    freq:  5219,book:[]},
		{move: "Be6",   freq:  4859,book:[]},
		{move: "Bd7",   freq:  4317,book:[]},
		{move: "Nxd4",  freq:  4067,book:[]},
	]}]},
	{move: "Bb4", freq:   210423,book:[{move: "Nd5",replies:[
		{move: "Bc5",freq:  8740,book:[{move: "Nxe5",replies:[
			{move: "Nxe5",freq:  930,book:[{move: "d4"}]},
			{move: "Bxf2+",freq: 360,book:[{move: "Kxf2",replies:[
				{move: "Nxe5",freq:  343,book:[{move: "d4"}]},
				{move: "Qh4+",freq:   17,book:[]},
			]}]},
			{move: "Nf6",freq:    21,book:[]},
		]}]},
		{move: "Nf6",freq:  7296,book:[{move: "Nxb4"}]},
		{move: "Ba5",freq:  6416,book:[{move: "c3"}]},
		{move: "d6", freq:  4135,book:[{move: "c3"}]},
		{move: "Bd6",freq:  2172,book:[{move: "Nxe5"}]},
		{move: "Ng8e7",freq:1116,book:[]},
		{move: "Be7",freq:   888,book:[]},
		{move: "a5", freq:   605,book:[]},
	]}]},
	{move: "f5",  freq:    57196,book:[{move: "d4"}]},
	{move: "a6",  freq:    55722,book:[{move: "d4"}]},
	{move: "g6",  freq:    33978,book:[{move: "d4"}]},
	{move: "Be7", freq:    31799,book:[{move: "d4"}]},
	{move: "h6",  freq:    30773,book:[{move: "d4"}]},
	{move: "Nd4", freq:    13097,book:[{move: "Nxe5"}]},
	{move: "f6",  freq:     9558,book:[{move: "a4"}]},
	{move: "d5",  freq:     8527,book:[{move: "Nxd5"}]},
]}

const russian_nights = {move: "Nc3",replies:[
	{move: "Nc6", freq:  1239443,book:[skot_nights]},
	{move: "Bb4", freq:   364409,book:[{move: "Nxe5",replies:[
		{move: "O-O", freq:  20321,book:[{move: "Nd3"}]},
		{move: "Bxc3",freq:  19417,book:[{move: "dxc3"}]},
		{move: "Qe7",freq:    5925,book:[{move: "Nf3"}]},
		{move: "d6", freq:    5174,book:[{move: "Nc4"}]},
		{move: "Nc6",freq:    1210,book:[]},
	]}]},
	{move: "Bc5", freq:   357524,book:[{move: "Nxe5",replies:[
		{move: "Nc6",freq:  35084,book:[{move: "Nxc6",replies:[//stafford gambit 2
			{move: "dxc6", freq:  27834,book:[{move: "h3",replies:[
				{move: "h5",freq:  15521,book:[{move: "g3",replies:[
					{move: "Qd6",freq: 13,book:[{move: "d3",replies:[
						{move: "Be6",freq:  51,book:[{move: "Bg2",replies:[
							{move: "O-O-O",freq:  12,book:[{move: "Bg5"}]},
						]}]},
						{move: "Bd7",freq:  20,book:[]},
					]}]},
					{move: "Qd4",freq: 10,book:[]},
					{move: "Be6",freq:  4,book:[]},
				]}]},
				{move: "Qd4",freq: 11672,book:[]},
				{move: "O-O",freq:  6246,book:[]},
				{move: "Be6",freq:  2077,book:[]},
				{move: "Qd6",freq:  1830,book:[]},
			]}]},
			{move: "bxc6", freq:    833,book:[]},
		]}]},
		{move: "d6", freq:  12276,book:[]},
		{move: "O-O", freq: 10331,book:[]},
		{move: "Qe7", freq:  8194,book:[]},
		{move: "d5",  freq:  2163,book:[]},
		{move: "Bxf2+",freq: 1808,book:[]},
		{move: "Bd4",  freq: 1368,book:[]},
		{move: "c6",  freq:   736,book:[]},
	]}]},
	{move: "d6",  freq:   234536,book:[{move: "d4",replies:[
		{move: "exd4",  freq:  134977,book:[{move: "Nxd4",replies: main_philidor}]},
		{move: "Nb8d7", freq:  125872,book:[]},
		{move: "Bg4",   freq:   23158,book:[]},
		{move: "Nc6",   freq:   20243,book:[]},
		{move: "Be7",   freq:   20171,book:[]},
		{move: "g6",    freq:    1788,book:[]},
	]}]},
	{move: "d5",  freq:    66062,book:[{move: "exd5"}]},
	{move: "c6",  freq:    29153,book:[{move: "d4"}]},
	{move: "Bd6", freq:     9154,book:[]},
	{move: "Be7", freq:     8538,book:[]},
	{move: "Nxe4", freq:    7221,book:[]},
]}

const kadas_centre = {move:"h6",replies:[
	{move: "Nxh6", freq:  5000,book:[{move: "d4",replies:[
		{move: "e4", freq:   1002,book:[{move: "Bxh6",replies:[
			{move: "gxh6", freq: 1125,book:[{move: "e3",replies:[
				{move: "Bg7", freq:  130,book:[{move: "c4",replies:[
					{move: "c6", freq:  41,book:[{move: "Nc3",replies:[
						{move: "Be6", freq:  31,book:[{move: "Nh3"}]},
						{move: "O-O", freq:  10,book:[]},
					]}]},
					{move: "O-O", freq:  5,book:[]},
				]}]},
				{move: "Nc6", freq:  110,book:[]},
				{move: "Be6", freq:   74,book:[]},
				{move: "Bf5", freq:   58,book:[]},
				{move: "c5", freq:    50,book:[]},
			]}]},
		]}]},
		{move: "exd4", freq:  840,book:[]},
		{move: "Nf5", freq:   558,book:[]},
		{move: "Ng4", freq:   383,book:[]},
		{move: "Nc6", freq:   276,book:[]},
		{move: "Ng8", freq:   178,book:[]},
	]}]},
	{move: "g6", freq:    1492,book:[]},
	{move: "gxh6", freq:   776,book:[]},
	{move: "Nc6", freq:    481,book:[]},
	{move: "Nf6", freq:    137,book:[]},
	{move: "c5", freq:     118,book:[]},
	{move: "e4", freq:     111,book:[]},
]}

const kadas = {move: "h4", replies:[
	{move: "d5",freq:  106212,book:[{move: "h5",replies:[
		{move: "h6", freq: 13670,book:[{move: "d4"}]},
		{move: "e5", freq: 13026,book:[kadas_centre]},
		{move: "c5", freq:  5518,book:[]},
		{move: "Nf6", freq: 5213,book:[]},
		{move: "c6", freq:  3860,book:[]},
		{move: "Nc6", freq: 3706,book:[]},
		{move: "e6", freq:  3687,book:[]},
		{move: "Bf5", freq: 2229,book:[]},
		{move: "Bg4", freq: 1368,book:[]},
		{move: "d4", freq:   787,book:[]},
	]}]},
	{move: "e5",freq:   90407,book:[{move: "h5",replies:[
		{move: "d5", freq: 13805,book:[kadas_centre]},
		{move: "h6", freq:  8050,book:[{move: "d4"}]},
		{move: "Bc5", freq: 4306,book:[]},
		{move: "Nc6", freq: 4143,book:[]},
		{move: "Nf6", freq: 2257,book:[]},
		{move: "d6", freq:  1635,book:[]},
		{move: "e4", freq:  1431,book:[]},
		{move: "Qf6", freq:  919,book:[]},
		{move: "f5", freq:   861,book:[]},
	]}]},
	{move: "e6",freq:   42768,book:[{move: "h5"}]},
	{move: "Nf6",freq:  31615,book:[{move: "h5"}]},
	{move: "c5",freq:   28024,book:[{move: "h5"}]},
	{move: "h5",freq:   26535,book:[{move: "d4"}]},
	{move: "g6",freq:   22974,book:[{move: "h5"}]},
	{move: "c6",freq:   21481,book:[{move: "h5"}]},
	{move: "d6",freq:   19546,book:[{move: "h5"}]},
	{move: "b6",freq:   13408,book:[{move: "h5"}]},
	{move: "h6",freq:   11179,book:[{move: "d4"}]},
	{move: "Nc6",freq:   9296,book:[{move: "h5"}]},
]}

const polish_sniper = {move: "e3",replies:[
	{move: "Nf6", freq: 42074,book:[]},
	{move: "Bxb4",freq:  7619,book:[{move: "Bxg7",replies:[
		{move: "Nf6",freq:  1609,book:[{move: "Bxh8",replies:[
		]}]},
		{move: "f6", freq:  1442,book:[{move: "Qh5+",replies:[
			{move: "Kd7", freq: 101,book:[{move: "Bxh8"}]},
			{move: "Ke7", freq:  62,book:[{move: "Bxh8"}]},
		]}]},
		{move: "Ne7", freq:  642,book:[{move: "Bxh8"}]},
		{move: "Qg5", freq:  566,book:[{move: "Bxh8"}]},
		{move: "Be7", freq:  513,book:[{move: "Bxh8"}]},
		{move: "Nc6", freq:  436,book:[{move: "Bxh8"}]},
		{move: "d4", freq:   213,book:[{move: "Bxh8"}]},
	]}]},
	{move: "f5",freq:    2651,book:[]},
	{move: "c5",freq:    2546,book:[{move: "bxc5",replies:[
		{move: "Bxc5",freq:   1728,book:[{move: "Bxg7",replies:[
			{move: "Nf6", freq:  315,book:[{move: "Bxh8"}]},
			{move: "f6",  freq:  261,book:[{move: "Qh5+",replies:[
				{move: "Kd7", freq: 23,book:[{move: "Bxh8"}]},
				{move: "Ke7", freq: 18,book:[{move: "Bxh8"}]},
			]}]},
			{move: "Ne7",  freq: 173,book:[{move: "Bxh8"}]},
			{move: "Nc6",  freq: 152,book:[{move: "Bxh8"}]},
			{move: "d4",   freq:  87,book:[{move: "Bxh8"}]},
			{move: "Qb6",  freq:  76,book:[{move: "Bxh8"}]},
		]}]},
		{move: "Nf6", freq:    555,book:[]},
		{move: "Nc6", freq:    188,book:[]},
		{move: "Qa5", freq:     39,book:[]},
	]}]},
	{move: "f6",freq:    1430,book:[]},
	{move: "c6",freq:    1174,book:[]},
	{move: "Nc6",freq:    964,book:[]},
	{move: "a6",freq:     858,book:[]},
]}

const polish_ultramain = [
	{move: "d6",  freq: 9035,book:[{move: "e3"}]},
	{move: "Nc6", freq: 2069,book:[{move: "b5",replies:[
		{move: "Nd4",  freq: 1180,book:[{move: "e3",replies:[
			{move: "Ne6",  freq: 449,book:[{move: "Bxe5"}]},
			{move: "Nf5",  freq: 421,book:[{move: "Bxe5"}]},
			{move: "Nxb5", freq: 229,book:[{move: "Bxb5"}]},
		]}]},
		{move: "Ne7",  freq:  146,book:[]},
		{move: "Na5",  freq:  112,book:[]},
		{move: "Nb8",  freq:   54,book:[]},
		{move: "d5",   freq:   37,book:[]},
		{move: "d6",   freq:   22,book:[]},
	]}]},
	{move: "d5",  freq: 1574,book:[{move: "Bxb5"}]},
	{move: "e4",  freq: 1030,book:[{move: "c4"}]},
];

const full_orangutang = {move: "Bb2",replies:[
	{move: "d6",freq:   187155,book:[{move: "c4",replies:[
		{move: "Nf6",freq:  14425,book:[{move: "e3",replies:[
			{move: "Be7", freq:  8934,book:[{move: "Nc3",replies:[
				{move: "O-O", freq:  1229,book:[{move: "Nf3",replies:[
					{move: "Bg4", freq: 313,book:[{move: "h3"}]},
					{move: "c6",  freq: 249,book:[{move: "a3"}]},
					{move: "a5",  freq: 105,book:[]},
					{move: "b6",  freq:  89,book:[]},
					{move: "Nc6", freq:  88,book:[]},
					{move: "h6",  freq:  79,book:[]},
				]}]},
				{move: "Be6", freq:   134,book:[]},
				{move: "c6",  freq:   124,book:[]},
				{move: "Bf5", freq:    75,book:[]},
				{move: "a6",  freq:    45,book:[]},
			]}]},
			{move: "Be6", freq:  2026,book:[]},
			{move: "g6",  freq:  2013,book:[]},
			{move: "Bf5", freq:  1424,book:[]},
			{move: "Nc6", freq:   776,book:[]},
			{move: "Nb8d7",freq:  588,book:[]},
			{move: "a6",   freq:  538,book:[]},
			{move: "b6",   freq:  534,book:[]},
			{move: "c6",   freq:  522,book:[]},
			{move: "Bg4",  freq:  511,book:[]},
			{move: "a5",  freq:   429,book:[]},
		]}]},
		{move: "f5", freq:   4597,book:[]},
		{move: "Be6", freq:  4190,book:[]},
		{move: "g6",  freq:  2139,book:[]},
		{move: "Bf5", freq:  1836,book:[]},
		{move: "Nc6", freq:  1722,book:[]},
		{move: "Be7", freq:  1502,book:[]},
		{move: "b6",  freq:  1368,book:[]},
		{move: "a6",  freq:  1359,book:[]},
	]}]},
	{move: "Bxb4",freq: 147571,book:[{move: "Bxe5",replies:[
		{move: "Nf6",freq:  95859,book:[{move: "e3"}]},
		{move: "f6", freq:  15681,book:[{move: "Bc3"}]},
		{move: "Nc6", freq: 11337,book:[{move: "Bxg7"}]},
		{move: "d6", freq:   5931,book:[{move: "Bxg7"}]},
		{move: "Qg5", freq:  5475,book:[{move: "Nf3"}]},
		{move: "Bf8", freq:  3418,book:[{move: "c4"}]},
		{move: "Qe7", freq:  2097,book:[{move: "Bxg7"}]},
	]}]},
	{move: "Nc6",freq:   64052,book:[{move: "b5",replies:[
		{move: "Nd4",freq:  48094,book:[{move: "e3",replies:[
			{move: "Nxb5",  freq: 16821,book:[{move: "Bxb5"}]},
			{move: "Nf5",  freq:  14944,book:[{move: "Bxe5"}]},
			{move: "Ne6",  freq:  13298,book:[{move: "Bxe5"}]},
			{move: "Nxc2+", freq:   180,book:[]},
		]}]},
		{move: "Nc6e7",freq: 3509,book:[{move: "Bxe5"}]},
		{move: "Nb4",  freq: 2298,book:[{move: "c4",replies:[
			{move: "d6",  freq: 52,book:[{move: "a3"}]},
			{move: "d5",  freq: 50,book:[{move: "a3"}]},
			{move: "a6",  freq: 21,book:[{move: "a3"}]},
			{move: "Bc5", freq: 17,book:[{move: "e3"}]},
			{move: "c6",  freq: 12,book:[{move: "a3"}]},
			{move: "Qf6", freq: 10,book:[{move: "a3"}]},
			{move: "Nf6", freq:  9,book:[{move: "a3"}]},
		]}]},
		{move: "Nb8",  freq: 2219,book:[{move: "Bxe5"}]},
		{move: "Na5",  freq: 1869,book:[{move: "Bxe5"}]},
	]}]},
	{move: "f6",freq:    53398,book:[{move: "b5",replies:[
		{move: "d5",freq:  11280,book:[{move: "d4",replies:[
			{move: "e4", freq:  245,book:[{move: "e3",replies:[
				{move: "Bd6",freq:  34,book:[{move: "c4"}]},
				{move: "Be6",freq:  33,book:[{move: "c4"}]},
				{move: "f5", freq:  31,book:[{move: "c4"}]},
				{move: "c6", freq:  30,book:[{move: "c4"}]},
				{move: "Bd7",freq:  17,book:[{move: "Qh5+"}]},
				{move: "a6", freq:  15,book:[{move: "bxa6"}]},
			]}]},
			{move: "Bd6",freq:   56,book:[]},
			{move: "Nd7",freq:   12,book:[]},
			{move: "c6", freq:   12,book:[]},
		]}]},
		{move: "a6",freq:   2577,book:[]},
		{move: "Bc5",freq:  2162,book:[]},
		{move: "c6",freq:   1885,book:[]},
		{move: "b6",freq:   1554,book:[]},
	]}]},
	{move: "e4",freq:    25749,book:[{move: "c4"}]},
	{move: "Nf6",freq:   18966,book:[{move: "a3",replies: polish_ultramain}]},
	{move: "d5",freq:    13406,book:[]},
	{move: "Qf6",freq:   11979,book:[]},
	{move: "Bd6",freq:    4674,book:[]},
	{move: "Qe7",freq:    3816,book:[]},
	{move: "Qg5",freq:    3438,book:[]},
	{move: "f5",freq:     2206,book:[]}
]};

const polish = {move:"b4",replies:[
	{move: "e5", freq: 638374,book:[full_orangutang,{move: "a3",replies:[
		{move: "d5", freq:  30214,book:[{move: "Bb2",replies:[
			{move: "Bd6",freq:  18656,book:[{move: "c4"}]},
			{move: "d4",freq:    7662,book:[{move: "Nf3"}]},
			{move: "f6",freq:    3847,book:[]},
			{move: "Nc6",freq:   3017,book:[]},
			{move: "Nd7",freq:   2576,book:[]},
			{move: "Nf6",freq:   1909,book:[]},
			{move: "e4",freq:     809,book:[]},
		]}]},
		{move: "Nf6",freq:  11370,book:[{move: "Bb2",replies: polish_ultramain}]},
		{move: "d6",freq:    6002,book:[{move: "Bb2"}]},
		{move: "a5",freq:    4531,book:[{move: "Bb2",replies:[
			{move: "axb4",freq:  1388,book:[{move: "Bxe5",replies:[
				{move: "bxa3",freq:  140,book:[{move: "Nxa3",replies:[
					{move: "Rxa3", freq:   42,book:[{move: "Rxa3",replies:[
						{move: "Bxa3",  freq:  39,book:[{move: "Bxg7"}]},
						{move: "f6",    freq:   1,book:[{move: "Ra8"}]},
						{move: "Nf6",   freq:   1,book:[{move: "Bxg6"}]},
					]}]},
					{move: "Nc6",  freq:   19,book:[{move: "Nb5",replies:[
						{move: "Rxa1",   freq:  10,book:[{move: "Qxa1",replies:[
							{move: "Nxe5",  freq:   8,book:[{move: "Qxe5+",replies:[
								{move: "Be7",  freq:  6,book:[{move: "Nxc7+",replies:[
									{move: "Kf8", freq:  4,book:[{move: "Nd5"}]},
								]}]},
								{move: "Qe7",  freq:  2,book:[{move: "Nxc7+"}]},
							]}]},
							{move: "Qg5",   freq:   2,book:[]},
						]}]},
					]}]},
					{move: "Nf6",  freq:   12,book:[{move: "Bxc7"}]},
					{move: "f6",   freq:    7,book:[{move: "Bxc7"}]},
					{move: "Bxa3", freq:    6,book:[{move: "Bxg7"}]},
				]}]},
				{move: "Nc6", freq:   38,book:[]},
				{move: "Nf6", freq:   19,book:[]},
			]}]},
			{move: "d6",freq:     156,book:[]},
			{move: "f6",freq:      86,book:[]},
			{move: "Nc6",freq:     23,book:[]},
		]}]},
		{move: "a5",freq:    3768,book:[]},
		{move: "Nc6",freq:   2027,book:[]},
		{move: "f5", freq:   1807,book:[]},
		{move: "a6", freq:   1429,book:[]},
		{move: "g6", freq:   1323,book:[]},
		{move: "Qf6",freq:   1001,book:[]},
		{move: "f6",freq:     864,book:[]},
		{move: "e4",freq:     505,book:[]},
	]}]},
	{move: "d5", freq: 364840,book:[{move: "Bb2",replies:[
		{move: "Nf6",freq: 83811,book:[]},
		{move: "e6", freq: 62859,book:[polish_sniper]},
		{move: "Bf5",freq: 32475,book:[]},
		{move: "c6",freq:  24519,book:[]},
		{move: "Nc6",freq: 23169,book:[]},
		{move: "e5",freq:  17333,book:[{move: "Bxe5"}]},
		{move: "d4",freq:  16804,book:[]},
		{move: "f6",freq:  13018,book:[]},
		{move: "a6",freq:   8203,book:[]},
		{move: "Nd7",freq:  7195,book:[]},
		{move: "Qd6",freq:  6470,book:[]},
		{move: "Bg4",freq:  5838,book:[]},
	]}]},
	{move: "Nf6",freq: 240614,book:[{move: "Bb2",replies:[
		{move: "g6", freq: 74043,book:[{move: "Nf3"}]},
		{move: "e6", freq: 68828,book:[{move: "a3"}]},
		{move: "d5", freq: 27625,book:[{move: "Nf3"}]},
		{move: "d6", freq: 17818,book:[{move: "c4"}]},
		{move: "e5", freq:  6126,book:[{move: "a3"}]},
		{move: "Nc6",freq:  2929,book:[]},
		{move: "a5", freq:  2655,book:[]},
		{move: "b6", freq:  2588,book:[]},
		{move: "c6", freq:  2424,book:[]},
	]}]},
	{move: "e6", freq: 228499,book:[{move: "Bb2",replies:[
		{move: "Nf6", freq: 85827,book:[{move: "a3"}]},
		{move: "d5", freq:  60009,book:[polish_sniper]},
		{move: "Bxb4", freq: 9485,book:[{move: "Bxg7"}]},
		{move: "b6",  freq:  6240,book:[]},
		{move: "d6",  freq:  5256,book:[]},
		{move: "f6",  freq:  4149,book:[]},
		{move: "f5",  freq:  3987,book:[]},
	]}]},
	{move: "g6", freq:  94823,book:[]},
	{move: "c6", freq:  88096,book:[]},
	{move: "d6", freq:  64287,book:[]},
	{move: "c5", freq:  59376,book:[]},
	{move: "b6", freq:  50359,book:[]},
	{move: "a5", freq:  47609,book:[]},
	{move: "f5", freq:  21056,book:[]},
	{move: "b5", freq:  16878,book:[]},
]}

const hoh_c_variation = [{move: "d4",replies:[//c variation
	{move: "exd4", freq: 59736,book:[{move: "O-O",replies:[
		{move: "dxc3",  freq: 14892,book:[{move: "Bxf7+",replies:[
			{move: "Kxf7",  freq: 7520,book:[{move: "Qd5+",replies:[
				{move: "Ke8",  freq:   11489,book:[{move: "Qh5+",replies:[
					{move: "g6",   freq:  864,book:[{move: "Qxc5",replies:[
						{move: "d6",  freq:  374,book:[{move: "Qxc3",replies:[
							{move: "Qf6",  freq: 164,book:[{move: "Bb2",replies:[
								{move: "Kf7",freq: 47,book:[{move: "Qb3+"}]},
								{move: "Qxc3",freq:30,book:[{move: "Bxc3"}]},
								{move: "Ne5",freq: 28,book:[{move: "Nxe5"}]},
								{move: "Ke7",freq: 26,book:[{move: "Qc1",stock:10.17}]},
							]}]},
							{move: "Nf6",  freq: 112,book:[{move: "Re1",replies:[
								{move: "Ne5",freq: 3,book:[{move: "Nxe5",replies:[
									{move: "dxe5",freq: 3,book:[{move: "Qxd5+",replies:[
										{move: "Qe7",freq: 2,book:[{move: "Qc3"}]},
									]}]},
								]}]},
								{move: "Be6",freq: 2,book:[{move: "e5"}]},
								{move: "Rf8",freq: 2,book:[{move: "e5"}]},
								{move: "Bg4",freq: 2,book:[{move: "Nb1d2"}]},
								{move: "Kf7",freq: 1,book:[{move: "Bh6"}]},
							]}]},
							{move: "Bg4",  freq:  44,book:[{move: "Bg5"}]},
							{move: "Be6",  freq:  20,book:[{move: "Bg5"}]}
						]}]},
						{move: "Qe7",  freq: 165,book:[{move: "Qxc3",replies:[
							{move: "Nf6",  freq:210,book:[{move: "Re1",replies:[
								{move: "d6",   freq:  5,book:[{move: "e5",replies:[
									{move: "Nd5",  freq:  1,book:[{move: "Qb3",replies:[
										{move: "Be6",  freq:  1,book:[{move: "exd6",replies:[
											{move: "cxd6",  freq:  1,book:[{move: "Bg5"}]},
											{move: "Qxd6",  freq:  1,book:[{move: "Ba3",replies:[
												{move: "Qd7",  freq:  1,book:[{move: "Nc3"}]},
											]}]},
										]}]},
									]}]},
								]}]},
								{move: "Rf8",  freq:  2,book:[]},
								{move: "Qb4",  freq:  1,book:[]},
							]}]},
							{move: "Qf6",  freq: 93,book:[{move: "Bb2"}]},
							{move: "d6",  freq:  63,book:[]},
							{move: "Qxe4",  freq: 6,book:[]},
						]}]},
						{move: "Qf6",  freq: 132,book:[{move: "Nxc3",replies:[
							{move: "d6",  freq:  109,book:[{move: "Qa3",replies:[
								{move: "Bg4", freq:  12,book:[{move: "Nd5",replies:[
									{move: "Qf7", freq:   4,book:[{move: "Ng5"}]},
									{move: "Qxa1", freq:  1,book:[{move: "Bb2",replies:[
										{move: "Qxf1+", freq:  1,book:[{move: "Kxf1"}]},
									]}]},
								]}]},
								{move: "Ng8e7", freq: 5,book:[]},
								{move: "Be6", freq:   3,book:[]},
							]}]},
							{move: "b6",  freq:   18,book:[{move: "Qa3"}]},
							{move: "Ng8e7", freq:  8,book:[]},
						]}]},
						{move: "Ng8e7",  freq: 95,book:[{move: "Qxc3",replies:[
							{move: "d6",  freq:  55,book:[{move: "Qxh8+",replies:[
								{move: "Kd7",  freq: 45,book:[{move: "Qb2"},{move: "Qxd8"}]},
							]}]},
							{move: "Rf8",  freq: 53,book:[{move: "Ng5",replies:[
								{move: "h6",freq: 3,book:[{move: "Nh7",replies:[
									{move: "Rf8",freq: 2,book:[{move: "Qh8+",replies:[
										{move: "Ng8",freq: 2,book:[{move: "Bxh6"}]},
									]}]},
								]}]},
								{move: "d6",freq: 1,book:[]},
								{move: "h5",freq: 1,book:[]},
								{move: "Rf7",freq:1,book:[]},
							]}]},
							{move: "d5",  freq:  10,book:[]},
						]}]},
						{move: "Nf6",  freq:  69,book:[{move: "Qxc3"}]},
						{move: "b6",  freq:   12,book:[{move: "Qxc3"}]},
					]}]},
					{move: "Kf8",  freq:  134,book:[{move: "Qxc5+",replies:[
						{move: "d6",  freq:  734,book:[{move: "Qxc3"}]},
						{move: "Qe7",  freq: 503,book:[]},
						{move: "Ng8e7",freq: 225,book:[]},
						{move: "Nc8e7",freq:  35,book:[]},
					]}]},
					{move: "Ke7",  freq:   26,book:[{move: "Qxc5+"}]}
				]}]},
				{move: "Kf8",  freq:    3249,book:[{move: "Qxc5+",replies:[
					{move: "d6",  freq:  1809,book:[{move: "Qxc3",replies:[
						{move: "Nf6",  freq: 945,book:[{move: "Bb2"}]},
						{move: "Qf6",  freq: 468,book:[{move: "Qa3"}]},
						{move: "Bg4",  freq: 119,book:[]},
						{move: "h6",   freq:  73,book:[]},
					]}]},
					{move: "Qe7", freq:  1184,book:[{move: "Qxc3"}]},
					{move: "Ng8e7", freq: 446,book:[{move: "Qxc3"}]},
					{move: "Nc6e7", freq:  44,book:[{move: "Nxc3"}]},
					{move: "Ke8",   freq:  37,book:[{move: "Nxc3"}]},
				]}]},
				{move: "Ke7",  freq:     160,book:[{move: "Bg5+"}]},
				{move: "Kg6",  freq:      75,book:[{move: "Qf5#"}]},//matt
				{move: "Kf6",  freq:      15,book:[{move: "Bg5+",replies:[
					{move: "Kg6",   freq:  4,book:[{move: "Qf5+",replies:[
						{move: "Kh5",   freq:  3,book:[{move: "g4#"}]},
					]}]},
				]}]},//matt
			]}]},
			{move: "Kf8",  freq:  1279,book:[{move: "Bxg8",replies:[
				{move: "Rxg8",  freq:  213,book:[{move: "Ng5",replies:[
					{move: "h6",   freq:  35,book:[{move: "Qf3+",replies:[
						{move: "Qf6",   freq:  21,book:[{move: "Nh7+"}]},
						{move: "Ke7",   freq:   4,book:[{move: "Qf7+"}]},
					]}]},
					{move: "Rh8",  freq:  17,book:[{move: "e5"}]},
					{move: "Qf6",  freq:  10,book:[{move: "Nxh7+"}]},
				]}]},
				{move: "Kxg8",  freq:   70,book:[{move: "Qd5+",replies:[
					{move: "Kf8",  freq: 1,book:[{move: "Qxc5+"}]},
				]}]}
			]}]},
			{move: "Ke7",  freq:    49,book:[{move: "Bg5+"}]},
		]}]},
		{move: "Nf6",  freq:   2584,book:[{move: "cxd4",replies:[
			{move: "Bb6",  freq:  4418,book:[{move: "e5",stock:4.23,replies:[
				{move: "d5",     freq:  1935,book:[{move: "exf6",replies:[
					{move: "dxc4",    freq:  1507,book:[{move: "fxg7",replies:[
						{move: "Rg8",    freq:  940,book:[{move: "Re1+",replies:[
							{move: "Ne7",    freq:   368,book:[{move: "Bg5"}]},
							{move: "Be6",    freq:   289,book:[{move: "Bg5"}]},
							{move: "Kdy",    freq:    32,book:[{move: "Bg5"}]},
						]}]},
					]}]},
					{move: "Qxf6",    freq:    21,book:[]},
				]}]},
				{move: "Ng8",    freq:  1893,book:[]},
				{move: "Ng4",    freq:  1687,book:[]},
				{move: "Ne4",    freq:  1343,book:[]},
				{move: "Nh5",    freq:   383,book:[]},
			]}]},
			{move: "Bb4",  freq:  1416,book:[{move: "e5",stock:5.42}]},
			{move: "Be7",  freq:   762,book:[{move: "e5",stock:4.31}]},
			{move: "Nxd4",  freq:  178,book:[{move: "Nxd4"}]},
		]}]},
		{move: "d6",  freq:    2286,book:[{move: "cxd4",replies:[
			{move: "Bb6",  freq:   3666,book:[{move: "Nc3",replies:[
				{move: "Bg4",  freq:   1971,book:[{move: "Bb5",replies:[
					{move: "a6",     freq:   111,book:[{move: "Ba4"}]},
					{move: "Bxf3",   freq:    60,book:[{move: "gxf3"}]},
					{move: "Ng8e7",  freq:    50,book:[{move: "d5"}]},
					{move: "Kf8",    freq:    48,book:[{move: "Be3"}]},
					{move: "Bd7",    freq:    43,book:[{move: "Bg5"}]},
				]}]},
				{move: "Nf6",  freq:    894,book:[{move: "e5"}]},
				{move: "Ng8e7",  freq:  520,book:[{move: "Ng5"}]},
				{move: "h6",     freq:  483,book:[{move: "d5"}]},
				{move: "a6",     freq:  161,book:[{move: "Nd5"}]},
				{move: "Na5",    freq:  127,book:[{move: "Bd3"}]},
			]}]},
			{move: "Bb4",  freq:    456,book:[{move: "d5",replies:[
				{move: "Ne5",    freq:   161,book:[{move: "Nxe5",replies:[
					{move: "dxe5",    freq:   122,book:[{move: "Qa4+",replies:[
						{move: "Nd7",    freq:    69,book:[{move: "Qxb4",replies:[
							{move: "Nf6",     freq:    27,book:[{move: "Nc3"}]},
							{move: "b6",      freq:    19,book:[{move: "Qc3"}]},
							{move: "Ne7",     freq:    13,book:[{move: "Ba3"}]},
						]}]},
						{move: "c6",     freq:     7,book:[]},
					]}]},
				]}]},
				{move: "Nc8e7",  freq:    20,book:[]},
				{move: "Na5",    freq:    18,book:[]},
			]}]},
			{move: "Nxd4",  freq:    63,book:[]},
		]}]},
		{move: "Ng8e7",  freq:  1546,book:[{move: "cxd4",replies:[
			{move: "Bb6",  freq:  3990,book:[{move: "Ng5",replies:[
				{move: "O-O",  freq:  1061,book:[{move: "Qh5",replies:[
					{move: "h6",   freq:   932,book:[{move: "Nxf7",replies:[
						{move: "Rxf7",   freq:  632,book:[{move: "Bxf7+",replies:[
							{move: "Kh8",  freq:   189,book:[{move: "Bxh6",replies:[
								{move: "Bxd4", freq:  40,book:[{move: "Bc1#"}]},
								{move: "g6",  freq:   37,book:[{move: "Bxg6#",replies:[
									{move: "Nxg6",  freq:  17,book:[{move: "Bg5+"}]},
								]}]},
								{move: "Ng8",  freq:  30,book:[{move: "Bg5+"}]},
								{move: "gxh6", freq:   17,book:[{move: "Qxh6#"}]},
							]}]},
							{move: "Kf8",  freq:    75,book:[]},
							{move: "Kh7",  freq:    40,book:[]},
						]}]},
						{move: "Qe8",    freq:  111,book:[{move: "Nxh6+",replies:[
							{move: "Kh7",   freq:  36,book:[{move: "Nf7+",replies:[
								{move: "Kg8",  freq:   1,book:[{move: "Qh8#"}]},
							]}]},
							{move: "Kh8",   freq:  23,book:[{move: "Nf7+",replies:[
								{move: "Kg8",  freq:   1,book:[{move: "Qh8#"}]},
							]}]},
						]}]},
					]}]},
					{move: "Ng6",   freq:   27,book:[{move: "Qxh7#"}]},
					{move: "g6",   freq:    16,book:[{move: "Qxh7#"}]},
					{move: "d5",   freq:    11,book:[{move: "Qxh7"}]},
				]}]},
				{move: "d5",   freq:   411,book:[]},
			]}]},
			{move: "Bb4",  freq:   723,book:[]},
		]}]},
		{move: "h6",  freq:     818,book:[{move: "cxd4"}]},
		{move: "Qf6",  freq:    438,book:[]},
	]}]},
	{move: "Bb6", freq:   1394,book:[{move: "Nxe5"}]},
	{move: "Bd6", freq:    521,book:[{move: "O-O"}]},
]}];

const hoh_e_variation = [{move: "d4",replies:[
	{move: "exd4", freq: 10116,book:[{move: "Qb3",replies:[
		{move: "Na5",  freq: 524,book:[{move: "Bxf7+",replies:[{move: "Kf8", freq: 1,book:[{move: "Qa4",replies:[
			{move: "Kxf7",  freq:  145,book:[{move: "Qxa5",replies:[
				{move: "dxc3",  freq: 62,book:[{move: "Qd5+"}]},
				{move: "d6",    freq: 34,book:[{move: "Qd5+"}]},
				{move: "Nf6",   freq: 25,book:[{move: "e5"}]},
			]}]},
			{move: "c6",  freq:     67,book:[{move: "Bb3"}]},
			{move: "c5",  freq:     24,book:[{move: "Bd5"}]},
			{move: "b6",  freq:     11,book:[]},
			{move: "Nc6",  freq:     7,book:[]},
		]}]},]}]},
		{move: "d5",  freq:  438,book:[{move: "Bxd5",replies:[
			{move: "Be6",  freq: 1093,book:[{move: "Bxe6",replies:[
				{move: "fxe6",  freq:  995,book:[{move: "Qxb7",reolies:[
					{move: "Na5",  freq:  209,book:[{move: "Qa6",replies:[
						{move: "c6",  freq:  43,book:[{move: "cxd4"}]},
						{move: "c5",  freq:  21,book:[{move: "Qb5+"}]},
					]}]},
					{move: "Kd7",  freq:   24,book:[]},
					{move: "dxc3", freq:   11,book:[]},
				]}]},
			]}]},
			{move: "Na5",  freq:  274,book:[]},
			{move: "dxc3", freq:   90,book:[]},
			{move: "Nf6",  freq:   61,book:[]},
			{move: "Nh6",  freq:   22,book:[]},
		]}]},
		{move: "Nh6",  freq: 138,book:[]},
		{move: "dxc3",  freq:131,book:[{move: "Bxf7+"}]},
		{move: "Nf6",  freq:  89,book:[]},
		{move: "d6",  freq:   63,book:[]},
		{move: "f6",  freq:   31,book:[]},
	]}]},
	{move: "d6", freq:    3553,book:[{move: "Qb3",replies:[
		{move: "Na5",  freq:  4841,book:[{move: "Bxf7+",replies:[
			{move: "Kf8",  freq:  4302,book:[{move: "Qa4",replies:[
				{move: "Kxf7",  freq:  2408,book:[{move: "Qxa5"}]},
				{move: "c6",    freq:  1175,book:[{move: "Bxg8",replies:[
					{move: "Rxg8",  freq:  497,book:[{move: "dxe5",replies:[
						{move: "dxe5",  freq:  132,book:[{move: "Nxe5"}]},
						{move: "b5",    freq:   92,book:[{move: "Qc2"}]},
						{move: "Bg4",    freq:  54,book:[{move: "exd6"}]},
					]}]},
					{move: "Kxg8",  freq:  320,book:[{move: "dxe5"}]},
				]}]},
			]}]},
			{move: "Kd7",  freq:     4,book:[{move: "Nxe5+"}]},
		]}]},
		{move: "Be6",  freq:  1373,book:[{move: "d5",replies:[
			{move: "Na5",  freq:   573,book:[{move: "Qa4+"}]},
		]}]},
		{move: "Nf6",  freq:   693,book:[]},
		{move: "Nh6",  freq:   364,book:[]},
		{move: "exd4", freq:   307,book:[]},
	]}]},
	{move: "Na5", freq:   1098,book:[{move: "Nxe5"}]},
	{move: "Nf6", freq:    431,book:[{move: "dxe5",stock:0.80}]},
]}];

const hoh_a_variation = [{move: "d4",replies:[
	{move: "exd4", freq: 105628,master:316,book:[{move: "Qb3",replies:[
		{move: "Qe7",  freq:  14401,master:66,book:[{move: "O-O",replies:[
			{move: "dxc3",  freq: 3116,master:2,book:[{move: "Nxc3",replies:[
				{move: "Bxc3",  freq: 4243,book:[{move: "Qxc3",replies:[
					{move: "Nf6",   freq: 2620,book:[{move: "Ba3",replies:[
						{move: "d6",    freq:  704,book:[{move: "e5",replies:[
							{move: "Ne4",    freq:  580,book:[{move: "Qc2"}]},
							{move: "Nxe5",   freq:  426,book:[{move: "Nxe5"}]},
							{move: "dxe5",   freq:  134,book:[{move: "Bxe7"}]},
						]}]},
						{move: "Qd8",    freq:  27,book:[]},
					]}]},
					{move: "f6",    freq:  866,book:[]},
					{move: "d6",    freq:  860,book:[]},
					{move: "Qf6",   freq:  456,book:[]},
				]}]},
				{move: "Nf6",   freq:  970,book:[]},
				{move: "d6",    freq:  463,book:[]},
				{move: "Bb6",   freq:  197,book:[]},
			]}]},
			{move: "Nf6",  freq:  3574,master:3,book:[{move: "cxd4",replies:[
				{move: "O-O",  freq:  190,book:[{move: "e5",stock:1.57}]},
				{move: "d6",  freq:    39,book:[]},
				{move: "Nxe4",  freq:  30,book:[{move: "Ba3"}]},
			]}]},
			{move: "d6",  freq:   2810,master:2,book:[{move: "e5",replies:[
				{move: "dxe5",  freq:   799,book:[{move: "cxd4",replies:[
					{move: "e4",    freq:    47,book:[{move: "Ne5",replies:[
						{move: "Nxe5",  freq:    22,book:[{move: "dxe5",replies:[
							{move: "Bb6",  freq:   15,book:[{move: "Ba3",replies:[
								{move: "c5",  freq:  9,book:[{move: "Nc3",replies:[
									{move: "Be6",  freq:   6,book:[{move: "Ra1d1"}]},
									{move: "Nh6",  freq:   3,book:[{move: "Nd5"}]},
								]}]},
							]}]},
						]}]},
						{move: "Nxd4",  freq:     1,book:[{move: "Qa4+"}]},
					]}]},
					{move: "Nxd4",  freq:    27,book:[{move: "Nxd4",replies:[
						{move: "exd4",   freq:   26,book:[{move: "Qb5+",replies:[
							{move: "Bd7",   freq:  7,book:[{move: "Qxa5",replies:[
								{move: "Nf6",   freq:  6,book:[{move: "Ba3"}]},
							]}]},
						]}]},
					]}]},
					{move: "Bb6",   freq:    14,book:[]},
					{move: "exd4",  freq:    13,book:[]},
					{move: "Nf6",   freq:    12,book:[]},
				]}]},
				{move: "Nxe5",  freq:   298,book:[]},
				{move: "Be6",   freq:   139,book:[]},
				{move: "Bb6",   freq:    51,book:[]},
				{move: "d5",    freq:    46,book:[]},
			]}]},
			{move: "Bb6",  freq:  2655,master:64,book:[{move: "cxd4"}]},
			{move: "Bxc3",  freq: 1342,book:[]},
			{move: "h6",  freq:   1200,book:[]},
			{move: "Nh6",  freq:   226,book:[]},
			{move: "d3",  freq:    203,book:[]},
		]}]},
		{move: "Qf6",  freq:  4763,master:53,book:[{move: "O-O",replies:[
			{move: "dxc3",  freq:  1207,book:[{move: "Bg5"}]},
			{move: "Ng8e7", freq:  1129,book:[{move: "cxd4	"}]},
			{move: "Bb6",   freq:   715,book:[]},
			{move: "d6",    freq:   514,book:[]},
			{move: "h6",    freq:   288,book:[]},
			{move: "Bxc3",  freq:   285,book:[]},
		]}]},
		{move: "dxc3",  freq:  865,book:[{move: "Bxf7+"}]},
		{move: "Bxc3+",  freq: 601,book:[{move: "Nxc3"}]},
		{move: "d5",  freq:    484,book:[{move: "exd5",stock:2.11}]},
		{move: "Nh6",  freq:   287,book:[]},
	]}]},
	{move: "d6",  freq:   24132,master:270,book:[{move: "Qb3",replies:[
		{move: "Qd7",  freq:  5754,book:[{move: "O-O",replies:[
			{move: "Bb6",  freq:  2293,book:[{move: "Nb1d2"}]},
			{move: "Nf6",  freq:   616,book:[{move: "dxe5",replies:[
				{move: "dxe5",  freq:  175,book:[{move: "Rd1",replies:[
					{move: "Qe7",  freq:  111,book:[{move: "Ba3"}]},
					{move: "Qg4",  freq:   48,book:[]},
					{move: "Qxd1+",  freq:  9,book:[]},
				]}]},
				{move: "Nxe5",  freq:  157,book:[{move: "Nxe5",replies:[
					{move: "dxe5",  freq:   156,book:[{move: "Rd1"}]},
				]}]},
				{move: "Nxe4",  freq:  102,book:[{move: "Re1"}]},
				{move: "Ng4",  freq:    32,book:[{move: "exd6"}]},
			]}]},
			{move: "exd4",  freq:  100,book:[]},
		]}]},
		{move: "Qe7",  freq:  2432,book:[{move: "d5"}]},
		{move: "Qf6",  freq:   490,book:[{move: "d5"}]},
	]}]},
	{move: "Nf6", freq:   2336,master:1,book:[{move: "dxe5"}]},
	{move: "Bb6",  freq:  1630,book:[]},
	{move: "b5",   freq:  1371,book:[]},
	{move: "Qe7",  freq:  1341,book:[]},
]}];

const nimzo_philidor = {move: "dxe5",replies:[
	{move: "Nxe4", freq: 39438,book:[{move: "Qd5",replies:[
		{move: "Nc5", freq:  2384,book:[{move: "Bg5"}]},
		{move: "Bf5", freq:   445,book:[{move: "Bc4"}]},
		{move: "f5", freq:    137,book:[{move: "Bc4"}]},
	]}]},
	{move: "dxe5", freq: 29166,book:[{move: "Qxd8+",replies:[
		{move: "Kxd8", freq:   26377,book:[{move: "Nxe5",replies:[
			{move: "Be6", freq: 8695,book:[{move: "f3"}]},
			{move: "Ke8", freq: 4604,book:[{move: "f3"}]},
			{move: "Ke7", freq: 4283,book:[{move: "f3"}]},
			{move: "Nxe4", freq:2008,book:[{move: "Nxf7+"}]},
			{move: "Bd6", freq: 1593,book:[{move: "Nxf7+"}]},
			{move: "Nc6", freq:  782,book:[{move: "Nxf7+"}]},
		]}]},
	]}]},
	{move: "Nf6d7", freq: 1802,book:[]},
	{move: "Ng4", freq:   1019,book:[]},
]}

const scotch_d6 = {move: "d5",replies:[
	{move: "Nc6e7",    freq:  96541,book:[{move: "c4",replies:[
		{move: "Nf6",      freq:   4074,book:[{move: "Nc3"}]},
		{move: "Bg4",      freq:   2732,book:[{move: "Nc3"}]},
		{move: "Ng6",      freq:   2445,book:[{move: "Nc3"}]},
		{move: "c6",       freq:   2144,book:[{move: "Nc3"}]},
		{move: "f5",       freq:   1973,book:[{move: "Nc3"}]},
	]}]},
	{move: "Nb8",      freq:  17884,book:[{move: "h3"}]},
	{move: "Nd4",      freq:  14043,book:[{move: "Nxd4",replies:[
		{move: "exd4",      freq:  8033,book:[{move: "Qxd4"}]},
	]}]},
	{move: "Nb4",      freq:   6243,book:[{move: "c3",replies:[
		{move: "Na6",      freq:  1277,book:[{move: "h3"}]},
	]}]},
	{move: "Na5",      freq:   3595,book:[{move: "b4"}]},
	{move: "Bg4",      freq:   1354,book:[{move: "dxc6"}]},
]}

const phili_station = [
	{move: "Nc6",   freq:  3126,book:[{move: "Qc4",replies:[
		{move: "Nf6",   freq: 49,book:[{move: "h4"}]},
		{move: "Ne5",   freq: 39,book:[{move: "Qe2",replies:[
			{move: "Qf6",   freq: 25,book:[{move: "f4"}]},
			{move: "Nf6",   freq: 23,book:[{move: "f4"}]},
			{move: "Be7",   freq:  8,book:[]},
		]}]},
		{move: "Qf6",   freq: 23,book:[{move: "Nd5"}]},
		{move: "a6",    freq: 17,book:[]},
		{move: "Qd7",   freq: 10,book:[]},
	]}]},
	{move: "Nf6",   freq:  1248,book:[{move: "Be3"}]},
]

const inter_phili_continues_castles = {move: "Be3",replies:[
	{move: "a6",  freq:   7,book:[{move: "g4"}]},
	{move: "Ne5", freq:   3,book:[{move: "f3"}]},
]}

const inter_phili_continues = {move: "Be2",replies:[
	{move: "O-O", freq:  18,book:[inter_phili_continues_castles]},
	{move: "Nd4", freq:   6,book:[{move: "Be3"}]},
	{move: "Ne5", freq:   3,book:[{move: "Be3"}]},
]}

const inter_phili = {move: "Nc3",replies:[
	{move: "Be7", freq:    106,book:[inter_phili_continues]},
	{move: "Be6", freq:     14,book:[]},
	{move: "Bg4", freq:     12,book:[]},
]}

const philiparis = [
	{move: "Nxd4", freq:   36683,book:[{move: "Qxd4",stock:0.96,replies:[
		{move: "Nf6", freq:    109995,book:[{move: "Nc3",replies:[
			{move: "Be7", freq:  54076,book:[{move: "Bf4",replies:[
				{move: "O-O", freq: 5567,book:[{move: "O-O-O",replies:[
					{move: "Be6", freq: 1468,book:[{move: "Kb1",replies:[
						{move: "Bxc4",  freq: 37,book:[{move: "Qxc4"}]},
						{move: "c5",    freq: 13,book:[]},
						{move: "a6",    freq: 11,book:[]},
					]}]},
					{move: "a6",  freq: 1235,book:[]},
					{move: "c5",  freq:  829,book:[]},
				]}]},
				{move: "Be6", freq:  595,book:[]},
				{move: "c5",  freq:  351,book:[]},
				{move: "a6",  freq:  243,book:[]},
			]}]},
			{move: "Be6", freq:  13712,book:[]},
			{move: "c5",  freq:   6714,book:[]},
		]}]},
		{move: "Be6", freq:     52956,book:[{move: "Nc3"}]},
		{move: "Qf6", freq:     29058,book:[{move: "Qe3"}]},
		{move: "c5",  freq:     15673,book:[]},
		{move: "Be7", freq:      5717,book:[]},
	]}]},
	{move: "Nf6", freq:    11117,book:[{move: "Nc3",stock: 0.70}]},
	{move: "Bd7", freq:     6698,book:[]},
	{move: "Ne5", freq:     6359,book:[{move: "Bb3"}]},
]

const philidor = [//philidor defence
	{move: "exd4", freq:666899,book:[{move: "Nxd4",replies:[
		{move: "Nf6", freq: 183969,book:[{move: "Nc3",replies:main_philidor}]},
		{move: "c5", freq:   81720,book:[{move: "Ne2",stock:1.08,replies:[
			{move: "Nc6", freq: 1549,book:[{move: "Nf4",stock:1.03,replies:[
				{move: "Nf6", freq:  43,book:[inter_phili]},
				{move: "Be7", freq:  13,book:[{move: "Nc3",replies:[
					{move: "Nf6", freq:  29,book:[inter_phili_continues]},
				]}]},
			]}]},
			{move: "Nf6", freq:  753,book:[{move: "Nf4",replies:[
				{move: "Nxe4",freq:  9,book:[{move: "Qe2"}]},
				{move: "Be7", freq:  5,book:[{move: "Nc3",replies:[
					{move: "O-O", freq:   120,book:[{move: "Be2",replies:[
						{move: "Nc6", freq: 13,book:[inter_phili_continues_castles]},
					]}]},
					{move: "Nc6", freq:    29,book:[inter_phili_continues]},
				]}]},
				{move: "Nc6", freq:  4,book:[inter_phili]},
			]}]},
			{move: "Be7", freq:  489,book:[{move: "Nf4"}]},
			{move: "Bg4", freq:  343,book:[{move: "Nb1c3"}]},
			{move: "a6",  freq:  181,book:[{move: "g3"}]},
			{move: "Be6", freq:  181,book:[{move: "Nf4"}]},
			{move: "h6",  freq:  127,book:[{move: "Nb1c3"}]},
			{move: "f5",  freq:   60,book:[{move: "Ng3"}]},
		]}]},
		{move: "Be7", freq:  75055,book:[{move: "Bf4",stock:0.84,replies:[//exchange king
			{move: "Nf6", freq:   1211,book:[{move: "Nc3",replies:[
				{move: "O-O", freq: 21947,book:[{move: "Qd2",replies:[
					{move: "Nc6", freq:  3540,book:[{move: "O-O-O"}]},
					{move: "a6", freq:   3453,book:[{move: "O-O-O"}]},
					{move: "c5", freq:   1874,book:[]},
					{move: "c6", freq:   1184,book:[]},
					{move: "d5", freq:    930,book:[]},
					{move: "Nb8d7", freq: 904,book:[]},
				]}]},
				{move: "a6", freq:   1344,book:[]},
			]}]},
			{move: "Bf6", freq:    117,book:[]},
		]}]},
		{move: "Bd7", freq:  47599,book:[{move: "Nc3",stock:1.38,replies:[
			{move: "Nc6", freq:  33792,book:[{move: "Be3",replies:[
				{move: "Nf6", freq:  11587,book:[{move: "f3",replies:[
					{move: "Be7", freq:   3972,book:[{move: "Qd2",replies:[
						{move: "O-O", freq:  3330,book:[{move: "O-O-O"}]},
						{move: "a6",  freq:   956,book:[]},
						{move: "Nxd4",freq:   871,book:[]},
					]}]},
					{move: "Nxd4", freq:   408,book:[]},
					{move: "g6",  freq:    395,book:[]},
				]}]},
				{move: "Be7", freq:   4424,book:[]},
				{move: "Nxd4", freq:  3072,book:[]},
				{move: "g6",   freq:  1641,book:[]},
			]}]},
			{move: "Nf6", freq:   5110,book:[]},
			{move: "Be7", freq:   2982,book:[]},
			{move: "a6",  freq:   2002,book:[]},
		]}]},//exchange queen
		{move: "Nc6", freq:  21980,book:[{move:"Bc4",replies:philiparis},{move: "Nc3",stock:0.94}]},
		{move: "h6", freq:   19376,book:[{move: "Nc3"}]},
		{move: "a6", freq:   10971,book:[{move: "Nc3"}]},
	]}]},
	{move: "Bg4", freq: 211540,book:[{move: "Nc3",replies:[
		{move: "Bxf3", freq: 7746,book:[{move: "gxf3",replies:[
			{move: "exd4", freq: 2371,book:[{move: "Qxd4",replies: phili_station}]},
			{move: "Nc6",  freq:  430,book:[]},
			{move: "Nf6",  freq:  385,book:[]},
			{move: "Qf6",  freq:  210,book:[]},
			{move: "Nd7",  freq:  189,book:[]},
			{move: "f6",   freq:  116,book:[]},
		]}]},
		{move: "exd4", freq: 6139,book:[{move: "Qxd4",replies:[
			{move: "Bxf3", freq:  3406,book:[{move: "gxf3",replies: phili_station}]},
			{move: "Nc6",  freq:  1653,book:[]},
			{move: "Nf6",  freq:   322,book:[]},
		]}]},
		{move: "Nc6", freq:  3451,book:[{move: "Bb5"}]},
		{move: "Nf6", freq:  1193,book:[]},
		{move: "Nd7", freq:  1103,book:[]},
	]}]},
	{move: "Nc6", freq:  96520,book:[scotch_d6]},
	{move: "f6", freq:   46777,book:[{move: "Bc4",replies:[
		{move: "Bg4", freq:   5821,book:[{move: "h3"}]},
		{move: "Qe7", freq:   5028,book:[{move: "Nc3"}]},
		{move: "c6", freq:    4432,book:[{move: "O-O"}]},
		{move: "Ne7", freq:   4068,book:[{move: "dxe5"}]},
		{move: "Nc6", freq:   3556,book:[{move: "h3"}]},
		{move: "Be7", freq:   1450,book:[{move: "Nc3"}]},
		{move: "exd4", freq:  1444,book:[{move: "Nxd4"}]},
		{move: "g6", freq:    1208,book:[{move: "Nc3"}]},
		{move: "h6", freq:    1050,book:[{move: "Nh4"}]},
	]}]},
	{move: "Nd7", freq:  42884,book:[{move: "c4",stock:0.93,replies:[//queenside philidor
		{move: "Ng8f6", freq:  4638,book:[{move: "Nc3"}]},
		{move: "c6",    freq:  2416,book:[{move: "Nc3"}]},
		{move: "Be7",   freq:  1944,book:[{move: "Nc3"}]},
		{move: "exd4",  freq:  1138,book:[{move: "Nxd4"}]},
		{move: "h6",    freq:   855,book:[]},
		{move: "g6",    freq:   522,book:[]},
	]}]},
	{move: "Nf6", freq:  37881,book:[nimzo_philidor]},
	{move: "Qe7", freq:  26681,book:[{move: "Bc4"}]},
	{move: "f5", freq:   19180,book:[{move: "Bc4"}]},
]

const french_queen_a3_afterPawn = [
	{move: "Ng8e7", freq: 19782,book:[{move: "Nc3",replies:[
		{move: "Nf5", freq:  5486,book:[{move: "Na4",replies:[
			{move: "Qa5+", freq: 2155,book:[{move: "b4",replies:[
				{move: "Qc7", freq:  774,book:[{move: "Bb2"}]},
				{move: "Qd8", freq:  366,book:[{move: "Bb2"}]},
				{move: "Nxb4", freq: 336,book:[{move: "Bd2"}]},
				{move: "Bxb4+", freq: 58,book:[{move: "axb4"}]},
			]}]},
			{move: "Qc7", freq:  1551,book:[{move: "Nc3"},{move: "h4"}]},//bait again?
			{move: "Qd8", freq:   696,book:[{move: "h4"}]},
		]}]},
		{move: "a6", freq:    309},
		{move: "Bd7", freq:   253},
		{move: "Ng6", freq:   183},
	]}]},
	{move: "Bd7", freq:    6839,book:[{move: "Nc3"}]},
	{move: "Nh6", freq:    4251,book:[{move: "Nc3"}]},
	{move: "f6", freq:     1816},
	{move: "f5", freq:     1668},
	{move: "Be7", freq:     581},
	{move: "a6", freq:      349},
	{move: "Qa5+", freq:    317},
	{move: "Na5", freq:     261},
];

const horse_cumsock = [
	{move: "Bb4+", freq:   33851,book:[{move: "Nc3",replies:[
		{move: "Ng8e7",  freq:   14419,book:[{move: "Bd3",replies:[
			{move: "O-O",  freq:   1870,book:[{move: "Bxh7+",replies:[
				{move: "Kxh7",  freq:    395,book:[{move: "Ng5+",replies:[
					{move: "Kg8",  freq:196,book:[{move: "Qh5"}]},
					{move: "Kg6",  freq:192,book:[{move: "h4"}]},
					{move: "Kh6",  freq:  4,book:[{move: "Qg4"}]},
					{move: "Kh8",  freq:  2,book:[{move: "Qh5+",replies:[{move: "Kg8",freq:1,book:[{move: "Qh7#"}]}]}]},
				]}]},
				{move: "Kh8",  freq:      85,book:[{move: "Ng5"}]},
			]}]},
			{move: "Nf5",  freq:    730,book:[{move: "O-O",stock:1.49}]},
			{move: "Qb6",  freq:    552,book:[]},
			{move: "Ng6",  freq:    363,book:[]},
			{move: "h6",  freq:     292,book:[]},
			{move: "a6",  freq:     251,book:[]},
			{move: "Bd7",  freq:    245,book:[]},
			{move: "Qa5",  freq:    133,book:[]},
			{move: "Bxc3+",  freq:   74,book:[]},
		]}]},
		{move: "Qa5",  freq:      2748,book:[{move: "Bd2",stock:2.08}]},
		{move: "Bxc3+",  freq:    2012,book:[{move: "bxc3"}]},
		{move: "Qb6",  freq:      1662,book:[{move: "Bd3"}]},
		{move: "f6",  freq:        771,book:[]},
		{move: "a6",  freq:        595,book:[]},
		{move: "Bd7",  freq:       511,book:[]},
		{move: "h6",  freq:        318,book:[]},
	]}]},
	{move: "Ng8e7", freq:  32288,book:[{move: "Nc3",replies:[
		{move: "Nf5", freq:     5500,book:[{move: "a3",replies:[
			{move: "Qb6", freq:  2724,book:[{move: "Na4",replies:[
				{move: "Qa5+",  freq:  4246,book:[{move: "b4",replies:[
					{move: "Qc7", freq:  1523,book:[{move: "Bb2"}]},
					{move: "Qd8", freq:   704,book:[{move: "Bb2"}]},
					{move: "Nxb4", freq:  665,book:[{move: "Bd2"}]},
					{move: "Bxb4+", freq: 110,book:[{move: "axb4"}]},
				]}]},
				{move: "Qc7",   freq:  2859,book:[{move: "Bf4"}]},
				{move: "Qd8",   freq:  1340,book:[{move: "h4"}]},
			]}]},
			{move: "Be7", freq:  2112,book:[{move: "Bd3"}]},
			{move: "a6",  freq:   578},
			{move: "Bd7", freq:   367},
		]}]},
		{move: "Ng6", freq:     2000,book:[{move: "h4"}]},
		{move: "a6", freq:       834},
		{move: "g6", freq:       550},
		{move: "Qb6", freq:      454},
	]},{move: "Na3"}]},
	{move: "Qb6", freq:    21197,book:[{move: "a3",replies: french_queen_a3_afterPawn}]},
	{move: "Bd7", freq:     8062,book:[{move: "Nc3"}]},
	{move: "f6", freq:      7824,book:[{move: "Nc3",stock:0.91}]},
	{move: "a6", freq:      5449,book:[{move: "Nc3"}]},
	{move: "Be7", freq:     3241},
]

const french_cumsock = [
	{move: "Nc6",  freq:  61940,book:[{move: "Nf3",replies: horse_cumsock}]},
	{move: "Bb4+",  freq: 17547,book:[{move: "Nc3",replies:[
		{move: "Ne7",  freq:   8806,book:[{move: "Bd3"}]},
		{move: "Nc6",  freq:   8397,book:[{move: "Bd3"}]},
		{move: "Bxc3+",  freq: 4061,book:[{move: "bxc3"}]},
		{move: "Qa5",  freq:   2446,book:[{move: "Bd2"}]},
		{move: "Qc7",  freq:    601,book:[{move: "Bd2"}]},
		{move: "Qb6",  freq:    600,book:[{move: "Bd3"}]},
		{move: "a6",   freq:    526,book:[{move: "Bd3"}]},
		{move: "Bd7",  freq:    515,book:[{move: "Bd3"}]},
		{move: "f6",   freq:    404,book:[{move: "Bd3"}]},
	]}]},
	{move: "Ne7",  freq:   6653,book:[{move: "Nf3"}]},
	{move: "a6",  freq:    5795,book:[{move: "Nc3"}]},
	{move: "f6",  freq:    3494,book:[{move: "Bd3"}]},
];

const french_closed_rook = {move: "Be2",replies:[
	{move: "Ne7",  freq:  1012,book:[{move: "h4",replies:[
		{move: "h6",  freq: 22,book:[{move: "h5"}]},
		{move: "Qc7", freq: 15,book:[]},
		{move: "Nc8", freq: 11,book:[]},
	]}]},
	{move: "Nb3",  freq:   363,book:[{move: "Nxb3",replies:[
		{move: "Ba4",  freq: 231,book:[{move: "Nf3d2"}]},
		{move: "cxb3", freq:  52,book:[{move: "Ra1"}]},
		{move: "Qxb3", freq:  13,book:[{move: "Qxb3"}]},
	]}]},
	{move: "O-O-O",  freq: 198,book:[]},
	{move: "Qc7",    freq: 189,book:[]},
	{move: "h6",    freq:  133,book:[]},
]}

const french_queen_a3 = [{move: "a3",replies:[
	{move: "cxd4", freq:  53026,master:50,book:[{move: "cxd4",replies: french_queen_a3_afterPawn}]},
	{move: "Bd7", freq:   48435,master:545,book:[{move: "b4",replies:[
		{move: "cxd4", freq: 38067,book:[{move: "cxd4",replies:[
			{move: "Ng8e7", freq:  15637,book:[{move: "Nc3"}]},
			{move: "Rc8", freq:    14316,book:[{move: "Be3"}]},
			{move: "a5", freq:      5934,book:[{move: "b5"}]},
			{move: "a6", freq:      5912},
			{move: "f6", freq:      2692},
			{move: "Nh6", freq:     2239},
		]}]},
		{move: "cxb4", freq:  4805,book:[{move: "axb4"}]},
		{move: "c4", freq:    2874,book:[{move: "a4"}]},
	]}]},
	{move: "c4", freq:   43295,master:1447,book:[{move: "Nb1d2",replies:[
		{move: "Na5", freq: 15289,book:[{move: "Rb1",replies:[
			{move: "Bd7", freq:  3118,book:[french_closed_rook]},
			{move: "Nb3", freq:   146},
			{move: "Qc7", freq:   113},
		]}]},
		{move: "Bd7", freq:  3583,book:[{move: "Rb1",replies:[
			{move: "Na5", freq:  438,book:[french_closed_rook]},
			{move: "Ng8e7", freq: 24},
		]}]},
		{move: "f6",  freq:  1915},
	]}]},
	{move: "Nh6", freq:  34355 ,master:1282,book:[{move: "Bd3",stock:0.19,replies:[
		{move: "cxd4", freq: 2809},
		{move: "Bd7", freq:  1752},
		{move: "Nf5", freq:  1046},
		{move: "c4",  freq:   136},
	]}]},
	{move: "Ng8e7", freq: 28777,master:57,book:[{move: "dxc5",replies:[
		{move: "Qxc5", freq: 432,book:[{move: "b4",replies:[{move: "Qb6", freq: 1,book:[{move: "c4",replies: [
			{move: "dxc4", freq:  129,book:[{move: "Nb1d2",replies:[
				{move: "c3", freq:  40,book:[{move: "Nc4",replies:[
					{move: "Qc7", freq: 27,book:[{move: "Nd6+",replies:[
						{move: "Kd7", freq: 12,book:[{move: "Nb5+"}]},
						{move: "Kd8", freq:  9,book:[{move: "Nxb7+",replies:[
							{move: "Ke8", freq: 1,book:[{move:"Nd6+",replies:[
								{move: "Kd8", freq: 4,book:[{move: "Nxf7+",replies:[
									{move: "Ke8", freq: 1,book:[{move: "Nd6+",replies:[
										{move: "Kd8", freq: 3,book:[{move: "Bc4",replies:[
											{move: "Ng6", freq: 1,book:[{move: "O-O"}]},
											{move: "Bd7", freq: 1,book:[{move: "O-O"}]},
										]}]},
										{move: "Kd7", freq: 2,book:[{move: "Nb5+"}]},
									]}]},
								]}]},
								{move: "Kd7", freq: 2,book:[{move: "Nb5+"}]},
							]}]},
						]}]},
					]}]},
				]}]},
				{move: "Ng6", freq: 16,book:[{move: "Nxc4"}]},
				{move: "Nf5", freq:  9},
			]}]},
			{move: "Qc7", freq:    32,book:[{move: "Bb2"}]},
			{move: "Ng6", freq:    20,book:[{move: "Bb2"}]},
		]}]}]}]},
		{move: "Qc7", freq:   19,book:[{move: "b4"}]},
	]}]},
	{move: "a5", freq:  28423,master:227,book:[{move: "Bd3",replies:[
		{move: "Bd7",  freq:  8962,book:[{move: "Bc2",replies:[
			{move: "Rc8",   freq:  1501,book:[{move: "O-O"}]},
			{move: "Ng8e7", freq:  1425,book:[{move: "dxc5"}]},
			{move: "cxd4",  freq:  1383,book:[{move: "cxd4"}]},
			{move: "Nh6",   freq:   876,book:[{move: "O-O"}]},
		]}]},
		{move: "cxd4", freq:  1488,book:[{move: "cxd4"}]},
		{move: "Ng8e7", freq:  919},
	]}]},
	{move: "f6", freq:   9496,book:[{move: "Bd3"}]},
]}];

const french_queen = [
	{move: "Qb6", freq: 753503,master:3720,book:french_queen_a3},
	{move: "Bd7", freq: 307850,master:3787,book:[{move: "Be2",replies:[
		{move: "Qb6", freq:  5177,book:[{move: "O-O",replies:[
			{move: "cxd4",freq:  18934,book:[{move: "cxd4"}]},
			{move: "Ng8e7",freq: 13499,book:[{move: "dxc5"}]},
			{move: "Rc8",freq:    9294,book:[{move: "dxc5"}]},
			{move: "Nh6",freq:    5903},
		]}]},
		{move: "Ng8e7", freq:3138,book:[{move: "O-O"}]},
		{move: "cxd4", freq: 2203,book:[{move: "cxd4"}]},
		{move: "Rc8", freq:  1278,book:[{move: "O-O"}]},
	]}]},//euwe
	{move: "cxd4", freq:186121,master:80,book:[{move: "cxd4",replies:horse_cumsock}]},
	{move: "Ng8e7",freq:163905,master:590,book:[{move: "Na3",replies:[
		{move: "Nf5", freq:  3583,book:[{move: "Nc2"}]},
		{move: "cxd4",freq:  2342,book:[{move: "cxd4"}]},
		{move: "a6",freq:    1391,book:[{move: "Nc2"}]},
		{move: "Ng6",freq:   1345,book:[{move: "h4"}]},
		{move: "Bd7",freq:    351},
		{move: "Qb6",freq:    321},
	]}]},
	{move: "f6", freq:   30496,book:[{move: "Bb5"}]},
	{move: "a6", freq:   26517,master:3,book:[{move: "Bd3"}]},
	{move: "Nh6", freq:  18732,book:[{move: "Bxh6",replies:[
		{move: "gxh6", freq: 5696,book:[{move: "Bb5"}]},
	]}]},
	{move: "Qa5", freq:  15884,book:[{move: "dxc5"}]},
	{move: "c4", freq:   12667},
	{move: "Be7", freq:  11341},
	{move: "Qc7", freq:  10265},
	{move: "b6", freq:    9773},
	{move: "h6", freq:    9393,book:[{move: "Bd3",replies:[
		{move: "cxd4", freq:  530,book:[{move: "cxd4"}]},
		{move: "Ng8e7", freq: 475,book:[{move: "O-O",replies:[
			{move: "Nf5",  freq: 252,book:[{move: "dxc5"}]},
			{move: "cxd4", freq: 116,book:[{move: "cxd4"}]},
			{move: "c4",   freq:  88,book:[{move: "dxc5"}]},
			{move: "Ng6",  freq:  80},
			{move: "Qb6",  freq:  61},
		]}]},
		{move: "c4",    freq: 377,book:[{move: "Bc2"}]},
		{move: "Qb6",   freq: 343},
		{move: "Bd7",   freq: 329},
		{move: "a6",    freq: 318},
	]}]},
];

const mainline_french = [
	{move: "Nc6",  freq: 428866,master:8429,book:[{move: "Nf3",replies:french_queen}]},
	{move: "Qb6",  freq:  90787,master:2760,book:[{move: "Nf3",replies:[
		{move: "Nc6", freq:  66565,book:french_queen_a3},
		{move: "Bd7", freq:   8572},
		{move: "cxd4", freq:  2233},
		{move: "Ne7", freq:   1068},
	]}]},
	{move: "cxd4",  freq: 84443,master:9,book:[{move: "cxd4",replies:french_cumsock}]},
	{move: "c4",   freq:  24718,book:[{move: "b3",replies:[
		{move: "b5",   freq: 4421,book:[{move: "a4",replies:[
			{move: "Bd7", freq:  578,book:[{move: "axb5"}]},
			{move: "bxa4", freq: 254,book:[{move: "bxc4"}]},
			{move: "b4", freq:   233,book:[{move: "bxc4"}]},
			{move: "Qa5", freq:  193,book:[{move: "Bb2"}]},
			{move: "Ba6", freq:  122},
			{move: "a6",  freq:  115},
		]}]},
		{move: "cxb3", freq:  567,book:[{move: "axb3"}]},
		{move: "Nc6", freq:   183},
		{move: "Ne7", freq:    84}
	]}]},
	{move: "Bd7",   freq: 14753,master:426,book:[{move: "Be2"}]},
];

const cumsock_invitation = [
	{move: "d5",    freq:  160819,book:[{move: "e5", replies: horse_cumsock}]},
	{move: "Nf6",    freq:  57104,book:[{move: "Nc3",stock:0.88,replies:[
		{move: "Bb4",    freq:   20822,book:[{move: "Bd3",replies:[
			{move: "O-O", freq:  10041,book:[{move: "e5",replies:[
				{move: "Nd5",  freq:  562,book:[{move: "Bxh7+",replies:[
					{move: "Kxh7",  freq: 245,book:[{move: "Ng5+",replies:[
						{move: "Kg6",  freq:  138,book:[{move: "h4"}]},
						{move: "Kg8",  freq:   93,book:[{move: "Qh5"}]},
						{move: "Qxg5",  freq:  13,book:[{move: "Bxg5"}]},
					]}]},
					{move: "Kh8",   freq:  92,book:[{move: "Ng5"}]},
				]}]},
				{move: "Nd5",  freq:   24},
				{move: "Bxc3+",freq:   15},
				{move: "Ng4",  freq:    6},
			]}]},
			{move: "d5",  freq:   6109,book:[{move: "e5"}]},
			{move: "Qb6", freq:   2739},
			{move: "Qa5", freq:   1951},
		]}]},
		{move: "d5",     freq:    5202,book:[{move: "e5"}]},
		{move: "Be7",    freq:    2940},
	]}]},
	{move: "Bb4+",   freq: 33245,book:[{move: "Nc3",replies:[
		{move: "Nf6",    freq:  11614,book:[{move: "Bd3"}]},
		{move: "Ng8e7",  freq:   5919,book:[{move: "d5"}]},
		{move: "Qa5",    freq:   2816},
		{move: "Bxc3+",  freq:   2505},
		{move: "d5",     freq:   2435},
		{move: "Qb6",    freq:   1120},
	]}]},
	{move: "d6",    freq:  25277,book:[{move: "Nc3"}]},
	{move: "a6",    freq:  13237,book:[{move: "d5"}]},
	{move: "g6",    freq:   9146},
];

const ala_main = [
	{move: "Nf3",replies: cumsock_invitation},
	{move: "d5",replies:[
		{move: "exd5",    freq: 9349,book:[{move: "exd5"}]},
		{move: "Ne5",    freq:  1204},
		{move: "Bb4+",    freq:  575},
		{move: "Nc6e7",    freq: 374},
		{move: "Nb8",    freq:   235},
		{move: "Nb4",    freq:   103},
		{move: "Qa5+",    freq:   67},
	]}
];

const sicilian_rat = {move: "Nf3",replies:[
	{move: "Nf6",    freq:  34233,book:[{move: "Bd3"}]},
	{move: "a6",    freq:   15282,book:[{move: "Bd3"}]},
	{move: "Nc6",   freq:   10468,book:[{move: "Nc3"}]},
	{move: "Be7",   freq:    9855,book:[{move: "Bd3"}]},
	{move: "d5",    freq:    2369},
	{move: "g6",    freq:    2322},
	{move: "Nd7",   freq:    2107},
]};

const some_dragon = {move: "Bb5+",replies:[
	{move: "Bd7",  freq:  4159,book:[{move: "e5",replies:[
		{move: "dxe5",  freq: 333,book:[{move: "dxe5",replies:[
			{move: "Ng4",   freq: 290,book:[{move: "Bf4",replies:[
				{move: "O-O",   freq:  56,book:[{move: "h3",replies:[
					{move: "Nh6",   freq:  22,book:[{move: "Bxd7",replies:[
						{move: "Qxd7",   freq:  6,book:[{move: "O-O",replies:[
							{move: "Qxd1",   freq:  4,book:[{move: "Rf1xd1"}]},
						]}]},
						{move: "Nxd7",   freq:  5,book:[{move: "Qd2"}]},
					]}]},
					{move: "Bxb5",  freq:   8,book:[{move: "Qxd8",replies:[
						{move: "Rxd8",   freq:  7,book:[{move: "Nxb5"}]},
					]}]},
				]}]},
				{move: "Nc6",   freq:  11},
			]}]},
			{move: "Bxb5",  freq:  43,book:[{move: "Qxd8+",replies:[
				{move: "Kxd8",   freq:  39,book:[{move: "exf6"}]},
			]}]},
			{move: "Ng8",   freq:  31},
			{move: "Nh5",   freq:  18},
		]}]},
		{move: "Bxb5",  freq: 135,book:[{move: "exf6",replies:[
			{move: "Bxf6",   freq:  98,book:[{move: "Nxb5",replies:[
				{move: "Qa5+",   freq: 44,book:[{move: "Nc3",replies:[
					{move: "Nc6",   freq:  27,book:[{move: "O-O"}]},
					{move: "O-O",   freq:  14,book:[{move: "Bh6"}]},
				]}]},
				{move: "O-O",   freq:  38,book:[{move: "O-O"}]},
				{move: "Nc6",   freq:   8},
			]}]},
			{move: "exf6",   freq:   7},
		]}]},
		{move: "Ng4",   freq:  83,book:[{move: "e6"}]},
		{move: "Ng8",   freq:  51,book:[{move: "exd6"}]},
		{move: "Nh5",   freq:  28},
		{move: "Nd5",   freq:   3},
	]}]},
	{move: "Nb8d7",  freq: 771,book:[{move: "e5",replies:[
		{move: "dxe5",   freq: 258,book:[{move: "dxe5"}]},
		{move: "Ng4",    freq:  31},
		{move: "Ng8",    freq:  14},
		{move: "Nh5",    freq:  11},
	]}]},
	{move: "Nc6",    freq: 289,book:[{move: "d5"}]},
	{move: "Nf6d7",  freq: 181,book:[{move: "O-O"}]},
	{move: "Kf8",    freq:  19},
]}

const coinci = [
	{move: "e6",    freq: 20125,book:[{move: "h3"}]},
	{move: "cxd4",  freq: 16450,book:[{move: "cxd4"}]},
	{move: "Nf6",   freq: 13216,book:[{move: "h3"}]},
	{move: "O-O-O", freq:  6892},
]

const hoh_sicilian = [
	{move: "c3",replies:[
		{move: "Nc6",  freq: 251155,master:80,book:[{move: "d4",replies:[
			{move: "cxd4",  freq: 158865,book:[{move: "cxd4",replies:[
				{move: "e6",  freq:    58005,book:ala_main},
				{move: "d5",  freq:    48453,book:[{move: "Nc3",replies:[
					{move: "dxe4",  freq: 19915,book:[{move: "d5",replies:[
						{move: "Ne5",  freq: 511,book:[{move: "Qa4+",stock:1.56,replies:[//tmp freqs
							{move: "Bd7",  freq:  103,book:[{move: "Qxe4",stock:1.74,replies:[
								{move: "Ng6",  freq:  93,book:[{move: "Nb5",replies:[
									{move: "Nf6",  freq:  173,book:[{move: "Nd6#"}]},
									{move: "Qa5+", freq:   50,book:[{move: "Bd2",replies:[
										{move: "Qb6",   freq:   21,book:[{move: "Be3",replies:[
											{move: "Qa5+",  freq:  38,book:[{move: "b4",replies:[
												{move: "Nf6",   freq:   11,book:[{move: "Nd6+",replies:[
													{move: "Kd8",  freq:  8,book:[{move: "Nxf7+",replies:[
														{move: "Ke8",  freq:  4,book:[{move: "Nd6+",replies:[
															{move: "Kd8",   freq:   4,book:[{move: "bxa5",replies:[
																{move: "Nxe4",   freq:   1,book:[{move: "Nxe4"}]},
															]}]},
														]}]},
														{move: "Kc8",  freq:  1,book:[{move: "Rc1+"}]},
													]}]},
												]}]},
											]}]},
										]}]},
									]}]},
									{move: "e6",   freq:   35,book:[{move: "d6",replies:[
										{move: "Nf6",   freq:  15,book:[{move: "Qxb7",replies:[
											{move: "Rc8",   freq:   3,book:[{move: "Nc7+"}]},
											{move: "Nd5",   freq:   2,book:[{move: "Nc7+"}]},
										]}]},
										{move: "Bc6",   freq:   4,book:[]},
									]}]},
									{move: "a6",   freq:   29,book:[{move: "Nd6#"}]},
									{move: "Qb6",  freq:   24,book:[{move: "Be3"}]},
									{move: "Bxb5", freq:   12,book:[{move: "Bxb5+"}]},
								]},{move: "Bc4",stock: 1.74}]},
							]}]},
							{move: "Nd7",  freq:   10,book:[{move: "Nb5",stock: 2.64}]},
							{move: "Qd7",  freq:    1,book:[]},
						]}]},
						{move: "Nb4",  freq: 431,book:[{move: "Qa4+",replies:[
							{move: "Bd7",  freq:  1,book:[{move: "Qxb4",stock:6.53}]},
							{move: "Qd7",  freq:  1,book:[{move: "Qxb4",stock:7.36}]},
							{move: "Nc6",  freq:  1,book:[{move: "dxc6",stock:8.56}]},
							{move: "b5",   freq:  1,book:[{move: "Bxb5+",stock:8.74}]},
						]}]},
						{move: "Nb8",  freq: 166,book:[{move: "Bc4",stock:0.69}]},
						{move: "Nf6",  freq:  33},
					]}]},
					{move: "e6",    freq: 6415,book:[{move: "e5",stock:0.51,replies:[
						{move: "Ng8e7",  freq: 15990,book:[{move: "Nf3"}]},
						{move: "Bb4",    freq: 15593,book:[{move: "Bd3"}]},
						{move: "Qb6",    freq:  7980},
						{move: "a6",     freq:  4903},
						{move: "Bd7",    freq:  4556},
						{move: "f6",     freq:  4393},
					]}]},
					{move: "Nf6",   freq: 5251,book:[{move: "e5",stock:0.44,replies:[
						{move: "Ne4",    freq:  5816,book:[{move: "Bd3",replies:[
							{move: "Nxc3",    freq:  897,book:[{move: "Bxc3"}]},
							{move: "Bf5",     freq:  201},
							{move: "Nxd4",    freq:  100},
						]}]},
						{move: "Nd7",    freq:  2397,book:[{move: "Nf3"}]},
						{move: "Ng8",    freq:  1217},
					]}]},
					{move: "e5",    freq:  515},
				]},{move: "exd5"}]},
				{move: "d6",  freq:    26071,book:[{move: "d5",replies:[
					{move: "Ne5",  freq:  8992,book:[{move: "Nc3",stock:2.61,replies:[
						{move: "Nf6",  freq: 1670,book:[{move: "f4",replies:[
							{move: "Ng6",   freq: 1611,book:[{move: "Nf3",replies:[
								{move: "e6",    freq: 1283,book:[{move: "dxe6"}]},
								{move: "Bg4",   freq:  768,book:[{move: "f5"}]},
								{move: "e5",    freq:  389},
								{move: "a6",    freq:  319},
							]}]},
							{move: "Ne5d7", freq: 1028,book:[{move: "Nf3"}]},
							{move: "Bg4", freq:    170,book:[{move: "Qc2"}]},
							{move: "Ne5g4", freq:  131,book:[{move: "h3",replies:[
								{move: "Nh6",   freq: 96,book:[{move: "e5",replies:[
									{move: "dxe5",  freq: 21,book:[{move: "fxe5",replies:[
										{move: "Nd7",   freq:  19,book:[{move: "e6",replies:[
											{move: "fxe6",  freq: 5,book:[{move: "Bxh6",replies:[
												{move: "gxh6",   freq: 1,book:[{move: "Qh5#"}]},
											]}]},
											{move: "Nc5",   freq: 2,book:[]},
											{move: "Ne5",   freq: 2,book:[]},
											{move: "Nf6",   freq: 1,book:[]},
										]}]},
									]}]},
									{move: "Nd7",   freq:  3,book:[]},
								]}]},
							]}]},
						]}]},
						{move: "g6",   freq:  848,book:[{move: "f4"}]},
						{move: "e6",   freq:  351,book:[{move: "f4"}]},
						{move: "a6",   freq:  339,book:[{move: "f4"}]},
						{move: "Ng6",   freq: 208,book:[]},
						{move: "Bd7",   freq: 190,book:[]},
					]}]},
					{move: "Nb8",  freq:  1106,stock:1.98},
					{move: "Nb4",  freq:   112,stock:7.59},
				]}]},
				{move: "g6",  freq:    15633,book:[{move: "d5",replies:[
					{move: "Nb8",  freq:  6651,book:[{move: "Qd4",replies:[
						{move: "Nf6",  freq:  810,book:[{move: "e5",replies:[
							{move: "Nh5",  freq: 307,book:[{move: "Nc3"}]},
							{move: "Ng8",  freq: 298,book:[{move: "Nf3"}]},
							{move: "Qa5+", freq: 139,book:[{move: "Bd2",replies:[
								{move: "Qxd5",  freq:    15,book:[{move: "Qc3"}]},
							]}]},
						]}]},
						{move: "f6",   freq:  617,book:[{move: "Nf3"}]},
						{move: "Bg7",  freq:  104,book:[{move: "Qxg7"}]},
						{move: "d6",   freq:   67,book:[{move: "Qxh8"}]},
					]}]},
					{move: "Ne5",  freq:  6649,book:[{move: "f4"}]},
					{move: "Nb4",  freq:   544,book:[{move: "Nc3"}]},
					{move: "Bg7",  freq:   234,book:[{move: "dxc6"}]},
					{move: "Na5",  freq:   180,book:[{move: "Qd4"}]},
				]}]},
				{move: "e5",  freq:    10854,book:[{move: "dxe5",replies:[
					{move: "Nxe5",  freq:  1042,book:[{move: "Nc3",replies:[
						{move: "Nf6",  freq:  459,book:[{move: "f4",replies:[
							{move: "Nc6",  freq: 97,book:[{move: "e5"}]},
							{move: "Ng6",  freq: 54,book:[{move: "e5"}]},
							{move: "Ne6g4",freq: 21,book:[{move: "e5"}]},
						]}]},
						{move: "Bb4",  freq:  259,book:[{move: "Qd4"}]},
						{move: "d6",   freq:   82,book:[{move: "Bb5+"}]},
						{move: "Bc5",  freq:   71,book:[{move: "Bf4"}]},
					]}]},
					{move: "Qa5+",  freq:    78},
				]}]},
				{move: "Nf6",  freq:    9176,book:[{move: "d5",replies:[
					{move: "Ne5",  freq:  1311,book:[{move: "f4",replies:[
						{move: "Ng6",  freq:  602,book:[{move: "e5"}]},
						{move: "Ne5g4",  freq: 89,book:[{move: "Nc3"}]},
						{move: "Nxe4",  freq:  13,book:[{move: "fxe5"}]},
					]}]},
					{move: "Nb8",  freq:   185,stock:4.55},
					{move: "Nb4",  freq:    49},
					{move: "Na5",  freq:    12},
				]}]},
				{move: "Qa5+",  freq:   2468,book:[{move: "Bd2"}]},
				{move: "Qb6",  freq:    2057},
				{move: "a6",  freq:     1612}
			]}]},
			{move: "e6",  freq:    14426,book:[{move: "Nf3",replies:[
				{move: "cxd4",  freq:  76455,book:[{move: "cxd4",replies: cumsock_invitation}]},
				{move: "d5",  freq:    24094,book:[{move: "e5",replies:french_queen}]},
			]},{move: "d5"}]},
			{move: "d6",  freq:     5400,book:[{move: "d5"}]},
			{move: "d5",  freq:     4080,book:[{move: "exd5"}]},
		]}]},
		{move: "d6",  freq:  149838,master:2650,book:[{move: "d4",replies:[
			{move: "cxd4",  freq: 107790,book:[{move: "cxd4",replies:[
				{move: "Nf6",  freq: 48489,book:[{move: "Nc3",replies:[
					{move: "g6",  freq: 59289,book:[{move: "Nf3",replies:[
						{move: "Bg7",  freq:  32125,book:[some_dragon]},
						{move: "Bg4",  freq:    437},
					]}]},
					{move: "e6",  freq:  33864,stock:1.31,book:[{move: "Nf3",replies:[
						{move: "Be7",  freq:  36693,book:[{move: "Bd3",replies:[
							{move: "O-O",  freq: 17708,book:[{move: "O-O",replies:[
								{move: "a6",   freq:  5668,book:[{move: "e5"}]},
								{move: "Nc6",  freq:  4713,book:[{move: "Re1"}]},
								{move: "Nb8d7", freq: 1783},
							]}]},
							{move: "a6",   freq:  4292},
							{move: "Nc6",  freq:  2278},
						]}]},
						{move: "a6",   freq:   7599},
						{move: "Nc6",  freq:   4853},
					]}]},
					{move: "a6",  freq:  28876,book:[{move: "Nf3"}]},
					{move: "Nc6",  freq: 25002,book:[{move: "d5",stock:1.82}]},
					{move: "e5",  freq:   4553},
					{move: "Qa5",  freq:  2995},
					{move: "Nb8d7", freq: 2859},
					{move: "Bg4", freq:   2848},
				]}]},
				{move: "Nc6",  freq: 18375,book:[{move: "d5",replies:[
					{move: "Ne5",  freq:  8992,book:[{move: "Nc3",replies:[
						{move: "Nf6",  freq:  1888,book:[{move: "f4"}]},
						{move: "g6",   freq:   952,book:[{move: "f4"}]},
						{move: "e6",   freq:   392,book:[{move: "f4"}]},
						{move: "a6",   freq:   380,book:[{move: "f4"}]},
						{move: "Ng6",  freq:   230},
						{move: "Bd7",  freq:   205},
					]}]},
					{move: "Nb8",  freq:  1106,book:[{move: "Nf3"}]},
					{move: "Nb4",  freq:   112},
				]}]},
				{move: "e6",  freq:  15370,book:[sicilian_rat]},
				{move: "g6",  freq:  10442,book:[{move: "Nc3",replies:[
					{move: "Bg7",  freq: 25828,book:[{move: "Nf3",replies:[
						{move: "Nf6",  freq:   33172,book:[some_dragon]},
						{move: "Nc6",  freq:   12691},
						{move: "a6",   freq:    5363},
						{move: "Bg4",  freq:    4757},
						{move: "e6",   freq:    4378},
					]}]},
					{move: "Nf6",  freq:   439},
				]}]},
				{move: "a6",  freq:   6383,stock:1.41},
				{move: "e5",  freq:   3447},
				{move: "Nd7",  freq:  1208},
			]}]},
			{move: "Nf6",  freq:    6685,book:[{move: "Bd3"}]},
			{move: "Nc6",  freq:    3881,book:[{move: "d5"}]},
			{move: "b6",  freq:     3618,book:[{move: "Nf3",stock:1.53,replies:[//tmp freqs
				{move: "Bb7",  freq:  147,book:[{move: "Bb5+",replies:[
					{move: "Nd7",  freq: 21,book:[{move: "dxc5"}]},
				]}]},
				{move: "Nf6",  freq:   64,book:[{move: "dxc5"}]},
				{move: "e6",  freq:    53,book:[{move: "Bb5+"}]},
				{move: "g6",  freq:    41,book:[{move: "Bb5+"}]},
				{move: "Bg4",  freq:   30,book:[{move: "h3"}]},
				{move: "cxd4",  freq:  27,book:[{move: "cxd4"}]},
			]}]},//rush semi-slav?
			{move: "e6",  freq:     1371},
			{move: "Nd7",  freq:    1208},
		]}]},
		{move: "e6",  freq:  104391,master:2815,book:[{move: "d4",replies:[
			{move: "cxd4",  freq:  91298,book:[{move: "cxd4",replies:[
				{move: "d5",  freq:    27053,book:[{move: "e5",replies:french_cumsock}]},
				{move: "Nc6",  freq:   18631,book:ala_main},
				{move: "Nf6",  freq:   10389,stock:1.12,book:[{move: "Nc3"}]},
				{move: "a6",  freq:     8788,book:[{move: "Nf3"}]},
				{move: "Bb4+",  freq:   6807,book:[{move: "Nc3"}]},
				{move: "d6",  freq:     6679,book:[sicilian_rat]},
			]}]},
			{move: "d5",  freq:    33833,book:[{move: "e5",replies:mainline_french}]},
			{move: "Nc6",  freq:   14068,book:[{move: "Nf3",replies:[
				{move: "cxd4",  freq:  76455,book:[{move: "cxd4",replies: cumsock_invitation}]},
				{move: "d5",  freq:    24094,book:[{move: "e5",replies:french_queen}]},
			]},{move: "d5"}]},
			{move: "a6",  freq:     9611,book:[{move: "Nf3",stock:0.47}]},
			{move: "Nf6",  freq:    8100},
		]}]},
		{move: "d5",  freq:   71256,master:11225,book:[{move: "exd5",replies:[
			{move: "Qxd5",  freq:  37488,book:[{move: "Nf3",replies:[
				{move: "Nf6",  freq: 3950,book:[{move: "d4",stock:0.25,replies:[
					{move: "Bg4",  freq: 42135,book:[{move: "Nb1d2",replies:[
						{move: "e6",    freq: 1511,book:[{move: "Qb3"}]},
						{move: "cxd4",  freq:  925,book:[{move: "Bc4"}]},
						{move: "Nc6",   freq:  732,book:[{move: "dxc5"}]},
					]}]},
					{move: "e6",  freq:  21298,book:[{move: "Na3"}]},
					{move: "Nc6",  freq: 15373,book:[{move: "dxc5",replies:[
						{move: "Qxd1+", freq: 1852,book:[{move: "Kxd1"}]},
						{move: "Qxc5",  freq: 1252,book:[{move: "Na3"}]},
					]}]},
					{move: "cxd4",  freq: 5617},
				]}]},
				{move: "Bg4",  freq: 3790,book:[{move: "Be2",replies:[
					{move: "Nf6",  freq:  1394,book:[{move: "d3"}]},
					{move: "Nc6",  freq:  1108,book:[{move: "d4",replies:coinci}]},
					{move: "e5",  freq:    289},
					{move: "e6",  freq:    251},
				]}]},
				{move: "Nc6",  freq: 3102,book:[{move: "d4",replies:[
					{move: "Bg4",  freq:  71139,book:[{move: "Be2",replies:coinci}]},
					{move: "cxd4", freq:  44838,book:[{move: "cxd4"}]},
					{move: "Nf6",  freq:  22558,book:[{move: "Be3"}]},
					{move: "e5",   freq:  12698},
					{move: "Bf5",  freq:   9706},
					{move: "e6",   freq:   9517},
				]}]},
				{move: "e5",   freq:  937,book:[{move: "d4"}]},
			]}]},
			{move: "Nf6",  freq:    1622},
		]}]},
		{move: "Nf6",  freq:  43999,master:14472,book:[{move: "e5",replies:[
			{move: "Nd5",  freq:  25187,book:[{move: "Nf3",replies:[
				{move: "Nc6",  freq: 25226,book:[{move: "Bc4",stock:0.00,replies:[
					{move: "Nb6",  freq:  18151,book:[{move: "Bb3",replies:[
						{move: "d5",  freq:  6153,book:[{move: "exd6"}]},
						{move: "c4",  freq:  5876,book:[{move: "Bc2"}]},
						{move: "d6",  freq:  2089},
						{move: "e6",  freq:  1854},
						{move: "g6",  freq:  1289},
					]}]},
					{move: "e6",   freq:   5228,book:[{move: "d4"}]},
					{move: "Nc7",  freq:    511},
				]}]},
				{move: "e6",  freq:  16686,book:[{move: "d4",replies:[
					{move: "cxd5", freq:   83632,book:[{move: "cxd4",replies:[
						{move: "d6",   freq:  69806,book:[{move: "Bc4"}]},
						{move: "Nc6",  freq:  34949,book:[{move: "Bc4"}]},
						{move: "b6",   freq:  21178,book:[{move: "Bc4"}]},
						{move: "Bb4+", freq:   6827,book:[{move: "Nb1d2"}]},
					]}]},
					{move: "Nc6",  freq:   15208,book:[{move: "c4"}]},
					{move: "d6",   freq:   10482,book:[{move: "c4"}]},
					{move: "Be7",  freq:    2134},
				]}]},
				{move: "d6",  freq:  15101,book:[{move: "d4"}]},
				{move: "g6",  freq:   1386},
			]}]},
			{move: "Ng8",  freq:    910},
			{move: "Ne4",  freq:    351},
		]}]},
		{move: "e5",  freq:   40417,master:422,book:[{move: "Nf3",replies:[
			{move: "Nc6",  freq:  14600,book:[{move: "Bc4",stock:0.35,replies:[
				{move: "Nf6",  freq:  19199,book:[{move: "Ng5",replies:[
					{move: "d5",  freq:  3503,book:[{move: "exd5",replies:[
						{move: "Nxd5",  freq:  2470,book:[{move: "Qh5",replies:[
							{move: "g6",  freq:  177,book:[{move: "Qf3",replies:[
								{move: "Qxg5",  freq:   119,book:[{move: "Bxd5"}]},
							]}]},
						]}]},
						{move: "Na5",  freq:    922,book:[{move: "Bb5+",replies:[
							{move: "Bd7",  freq:  668,book:[{move: "Qa4"}]},
						]}]},
					]}]},
				]}]},
				{move: "d6",  freq:   18105,book:[{move: "O-O"}]},
				{move: "h6",  freq:   13125},
				{move: "Be7",  freq:  12034},
				{move: "a6",  freq:    2389}
			]}]},
			{move: "d6",  freq:    7284,book:[{move: "d4",stock:1.41,replies:[
				{move: "cxd4",  freq:   38440,book:[{move: "cxd4",replies:[
					{move: "exd4",  freq:  29575,book:[{move: "Nxd4"}]},
					{move: "Nc6",   freq:   6867}
				]}]},
				{move: "exd4",  freq:    6063,book:[{move: "cxd4"}]},
			]}]},
		]}]},
		{move: "g6",  freq:   31252,master:1178,book:[{move: "d4",replies:[
			{move: "cxd4",  freq:   21376,book:[{move: "cxd4",replies:[
				{move: "Bg7",  freq:   16587,book:[{move: "Nc3",replies:[
					{move: "d6",  freq:  9015,book:[{move: "h3"}]},
					{move: "Nc6", freq:  5415,book:[{move: "d5",replies:[
						{move: "Ne5", freq:  700,book:[{move: "f4"}]},
						{move: "Nb8", freq:  699,book:[{move: "d6",replies:[
							{move: "exd6", freq:  11,book:[{move: "Nb5"}]},
							{move: "e6",   freq:   7,book:[{move: "Nb5"}]},
							{move: "Nc6",  freq:   6,book:[{move: "Nb5"}]},
						]}]},
						{move: "Nd4", freq:  172},
						{move: "Nb4", freq:   91},
					]}]},
					{move: "e6",  freq:  2879},
					{move: "Nf6", freq:  2064},
					{move: "d5",  freq:  1092},
					{move: "a6",  freq:   457},
				]}]},
				{move: "d5",  freq:     4808,book:[{move: "e5",stock:0.91}]},
			]}]},
			{move: "Bg7",  freq:     3558},
			{move: "b6",  freq:       734},
			{move: "e6",  freq:       493},
		]}]},
		{move: "a6",  freq:   12693,master:37,book:[{move: "d4",stock:0.44,replies:[
			{move: "cxd4",  freq: 25644,book:[{move: "cxd4"}]},
			{move: "e6",    freq:  6876},
			{move: "d5",    freq:  1146},
		]}]},
		{move: "b6",  freq:    3490,master:484,book:[{move: "d4"}]},
		{move: "Qa5",  freq:   1244,book:[{move: "Nf3",stock:0.85}]},
	]},
	{move: "Ne2",replies:[//keres
		{move: "Nc6", freq: 12412,book:[{move: "Nb1c3",replies:[
			{move: "e6",  freq:  2220},
			{move: "d6",  freq:  1655},
			{move: "g6",  freq:  1633},
			{move: "Nf6", freq:  1096},
			{move: "e5",  freq:  1032},
			{move: "a6",  freq:   238}
		]}]},
		{move: "d6",  freq:  7539,book:[
			{move: "Nb1c3",replies:[
				{move: "e6",  freq:  2220},
				{move: "d6",  freq:  1655},
				{move: "g6",  freq:  1633},
				{move: "Nf6", freq:  1096},
				{move: "e5",  freq:  1032}
			]},
			{move: "g3"}
		]},
		{move: "e6",  freq:  4331,book:[{move: "Nb1c3"}]},
		{move: "g6",  freq:  1382,book:[{move: "d4"}]},
		{move: "e5",  freq:   868},
		{move: "d5",  freq:   580},
		{move: "Nf6", freq:   536},
		{move: "a6",  freq:   407},
	]},
	{move: "Nc3"},
	{move: "Nf3"}
];

const retreat_scandi = {move: "Bg5",replies:[
	{move: "Be7", freq: 6003,book:[{move: "Qe2",replies:[
		{move: "O-O", freq:  3411,book:[{move: "h4",replies:[
			{move: "h6", freq:    20,book:[{move: "Bxf6",replies:[
				{move: "Bxf6", freq:   2,book:[{move: "O-O-O"}]},
			]}]},
			{move: "b6", freq:    14,book:[{move: "Bxf6",replies:[
				{move: "Bxf6", freq:   3,book:[{move: "Qe4",replies:[
					{move: "c6", freq:  3,book:[{move: "Bd3",replies:[
						{move: "g6", freq:    2,book:[{move: "h5",replies:[
							{move: "Bb7", freq:  3,book:[{move: "hxg6",replies:[
								{move: "hxg6", freq:   1,book:[{move: "Ne5"}]},
								{move: "fxg6", freq:   1,book:[{move: "Rxh7",replies:[
									{move: "Kxh7", freq:  1,book:[{move: "Qxg6+",replies:[
										{move: "Kh8", freq:  1,book:[{move: "Qh7#"}]},
									]}]},
									{move: "Qe8",  freq:  1,book:[{move: "Rxb7"}]},
								]}]},
							]}]},
						]}]},
					]}]},
				]}]},
			]}]},
			{move: "Nb8d7", freq:  8},
			{move: "Nc6", freq:    6},
		]}]},
		{move: "Nb8d7", freq: 237},
		{move: "b6", freq:    227},
		{move: "h6", freq:    210},
		{move: "c6", freq:    148},
	]}]},
	{move: "Bb4", freq:  729},
	{move: "h6", freq:   405},
	{move: "Nb8d7", freq:312},
	{move: "c6", freq:   239},
]}

const scandinavian = [{move: "exd5",replies:[//scandinavian
	{move: "Qxd5", freq: 3580084,book:[{move: "Nc3",replies:[
		{move: "Qd8",  freq: 1088322,book:[{move: "d4",replies:[
			{move: "Nf6", freq:  153795,book:[{move: "Nf3",replies:[
				{move: "e6", freq:  62840,book:[retreat_scandi]},
				{move: "Bg4", freq: 41243,book:[{move: "h3",replies:[
					{move: "Bxf3", freq: 14286,book:[{move: "Qxf3"}]},
					{move: "Bh5",  freq: 10961,book:[{move: "g4",replies:[
						{move: "Bg6", freq: 6112,book:[{move: "Ne5"}]},
					]}]},
				]}]},
				{move: "Nc6", freq: 18646},
				{move: "g6", freq:  13822},
				{move: "Bf5", freq: 11605},
				{move: "c6", freq:   5714},
				{move: "h6", freq:   2467},
			]}]},
			{move: "e6", freq:    80910,book:[{move: "Nf3",stock:0.88,replies:[
				{move: "Nf6", freq:  122035,book:[retreat_scandi]},
				{move: "Bb4", freq:   31186,book:[{move: "Bd3"}]},
				{move: "c6", freq:    28675,book:[{move: "Bd3"}]},
				{move: "Be7", freq:   28026,book:[{move: "g3"}]},
				{move: "h6", freq:     9003,book:[{move: "Bc4"}]},
				{move: "Nc6", freq:    8289,book:[{move: "a3"}]},
				{move: "a6", freq:     7872,book:[{move: "g3"}]},
			]}]},
			{move: "Bf5", freq:   33794,book:[{move: "g4",replies:[
				{move: "Bg6", freq:   75,book:[{move: "Nf3",stock:1.18}]},
			]}]},
			{move: "c6", freq:    33439,book:[{move: "Nf3",stock:1.03}]},
			{move: "Nc6", freq:   26150,book:[{move: "d5",stock:2.17}]},
			{move: "g6", freq:    14067},
			{move: "e5", freq:     5121},
			{move: "a6", freq:     5119},
			{move: "h6", freq:     4085},
		]}]},
		{move: "Qa5",  freq:  757708,book:[{move: "d4",replies:[
			{move: "c6", freq: 97830,book:[{move: "Bd2",replies:[//tmp freqs
				{move: "Qc7", freq: 3698,book:[{move: "Bd3",replies:[
					{move: "Nf6", freq: 3136,book:[{move: "h3",replies:[
						{move: "e6",    freq:  269,book:[{move: "Qe2"}]},
						{move: "Nb8d7", freq:  132},
						{move: "g6",    freq:  121},
						{move: "e5",    freq:  106},
						{move: "h6",    freq:   63},
						{move: "Be6",   freq:   62},
						{move: "b6",    freq:   31},
					]}]},
					{move: "e6",  freq:  151},
				]}]},
				{move: "Nf6", freq: 2276,book:[{move: "Bd3"}]},
				{move: "Qb6", freq: 1536},
				{move: "Bf5", freq: 1403},
			]}]},
			{move: "Nf6", freq:94880,book:[{move: "Nf3",replies:[//tmp freqs
				{move: "Bg4", freq: 13606,book:[{move: "h3",replies:[
					{move: "Bh5", freq: 2800,book:[{move: "g4",replies:[
						{move: "Bg6", freq: 2036,book:[{move: "Ne5",replies:[
							{move: "Nb8d7", freq:  496,book:[{move: "Nc4",replies:[
								{move: "Qa6", freq: 249,book:[{move: "Bf4"}]},
								{move: "Qb4", freq:  55,book:[{move: "a3"}]},
							]}]},
							{move: "c6", freq:     445,book:[{move: "h4"}]},
							{move: "e6", freq:     412,book:[{move: "Nc4"}]},
							{move: "Nc6", freq:     81},
							{move: "Be4", freq:     76},
							{move: "Ne4", freq:     52,book:[{move: "Qf3"}]},
						]}]},
						{move: "Nxg4", freq:  45},
					]}]},
					{move: "Qh5", freq:  749},
					{move: "Bxf3", freq: 515},
					{move: "Bf5", freq:  112},
				]}]},
				{move: "c6", freq:   5984},
				{move: "Nc6", freq:  3586},
				{move: "Bf5", freq:  3193},
				{move: "e6", freq:    794},
			]}]},
			{move: "Nc6", freq:19625,book:[{move: "d5"}]},
			{move: "Bf5", freq:16744},
			{move: "e5", freq: 10236},
		]}]},
		{move: "Qe6+",  freq: 276592,book:[{move: "Be2",replies:[//tmp freqs
			{move: "Qg6", freq:9014,book:[{move: "Nf3",stock:2.23,replies:[
				{move: "Qxg2", freq: 925,book:[{move: "Rg1",stock: 2.48,replies:[
					{move: "Qh3",  freq: 943,book:[{move: "Bc4",stock: 2.83,replies:[
						{move: "Bg4",  freq: 14,book:[{move: "Bxf7+",stock: 3.26,replies:[
							{move: "Kxf7",  freq:  6,book:[{move: "Rg3",stock: 3.71}]},
							{move: "Kd8",  freq:   3,book:[{move: "Rg3",stock: 9.00}]},
						]}]},
						{move: "Be6",  freq:  9},
						{move: "e6",  freq:   7},
						{move: "Qd7",  freq:  4},
						{move: "Nh6",  freq:  4},
					]}]},
					{move: "Qxh2",  freq:  4},
					{move: "Qg6",   freq:  2},
				]}]},
				{move: "Nc6",  freq: 622},
				{move: "Bf5",  freq: 248},
				{move: "c6",   freq: 55},
			]}]},
			{move: "Nc6", freq:7199,book:[{move: "d4",stock: 2.74}]},
			{move: "Nf6", freq:4029,book:[{move: "Nf3",stock:1.37}]},
			{move: "c6", freq: 3678,book:[{move: "Nf3",stock:1.46}]},
			{move: "b6", freq: 2232,book:[{move: "d4",stock: 2.46}]},
			{move: "a6", freq: 1325,book:[{move: "d4",stock: 1.3}]},
			{move: "Qd7", freq:1282,book:[{move: "d4",stock: 1.56}]},
			{move: "g6", freq: 1159},
			{move: "h5", freq:  935},
		]}]},
		{move: "Qe5+",  freq: 238038,book:[{move: "Be2",replies:[
			{move: "Bg4",    freq:  75552,book:[{move: "d4",stock:0.96,replies:[
				{move: "Bxe2",   freq:   40749,book:[{move: "Ng1xe2",replies:[
					{move: "Qh5",    freq:  13396,book:[{move: "d5"}]},
					{move: "Qa5",    freq:  12897,book:[{move: "b4",replies:[
						{move: "Qh5",    freq:  137,book:[{move: "Qd3"}]},
						{move: "Qxb4",   freq:  112,book:[{move: "Qd3",replies:[
							{move: "Nc6",    freq:   20,book:[{move: "Rb1",replies:[
								{move: "Qd6",     freq:   12,book:[{move: "d5"}]},
								{move: "Qa5",     freq:    8,book:[{move: "d5"}]},
							]}]},
							{move: "b6",     freq:    8},
							{move: "e6",     freq:    6},
							{move: "c6",     freq:    4},
							{move: "Nf6",    freq:    4},
							{move: "Qd6",    freq:    3},
						]}]},
						{move: "Qb6",    freq:   36},
						{move: "Qf6",    freq:   26},
					]}]},
					{move: "Qd6",    freq:   5281},
					{move: "Qe6",    freq:   1659},
					{move: "Qf6",    freq:   1630},
					{move: "Qf5",    freq:    693},
				]}]},
				{move: "Qe6",    freq:   15352,book:[{move: "f3"}]},
			]}]},
			{move: "Nc6",    freq:  13172,book:[{move: "Nf3",stock:2.28}]},
			{move: "c6",    freq:   11489},
			{move: "Bf5",    freq:   8900},
			{move: "Nf6",    freq:   8659},
			{move: "e6",     freq:   6510},
			{move: "Qg5",     freq:  5780,book:[{move: "Nf3",replies:[
				{move: "Qxg2",  freq:  1,book:[{move: "Rg1",replies:[
					{move: "Qh3",    freq:  1,book:[{move: "Bc4"}]},
				]}]},
			]}]},
		]}]},
		{move: "Qd6",  freq:  208508,book:[{move: "d4",replies:[//tmp freqs
			{move: "Nf6",  freq:   5308,book:[{move: "Nf3",stock:0.86,replies:[
				{move: "a6",  freq:  54467,book:[{move: "g3"}]},
				{move: "c6",  freq:  48602,book:[{move: "g3"}]},
				{move: "Bg4", freq:  44597,book:[{move: "h3"}]},
				{move: "Nc6", freq:   9922,book:[{move: "Nb5"}]},
				{move: "g6",  freq:   7031,book:[]},
				{move: "Bf5", freq:   4624,book:[]},
				{move: "e6",  freq:   4129,book:[]},
			]}]},
			{move: "c6",  freq:    1457,book:[{move: "Be3"}]},
			{move: "Nc6",  freq:    501,book:[]},
			{move: "a6",  freq:     440,book:[]},
		]}]},
		{move: "Qd7",  freq:   23502,book:[{move: "d4"}]},
		{move: "Qc6",  freq:    9296,book:[{move: "Bb5"}]},
	]}]},
	{move: "Nf6",  freq: 1050569,book:[{move: "d4",replies:[
		{move: "Nxd5", freq:  91820,book:[{move: "Nf3",replies:[
			{move: "Bg4",   freq:  22557,book:[{move: "c4",replies:[
				{move: "Nf6",   freq:  2202,book:[{move: "Be2"}]},
				{move: "Nb6",   freq:  1052,book:[{move: "c5"}]},
				{move: "Nb4",   freq:   318},
				{move: "Bxf3",   freq:  257,book:[{move: "Qxf3"}]},
			]}]},
			{move: "Nc6",   freq:  16336,book:[{move: "c4",replies:[
				{move: "Nf6",   freq: 1020,book:[{move: "Nc3"}]},
				{move: "Nb6",   freq:  603,book:[{move: "Nc3"}]},
				{move: "Nd5b4", freq:  185,book:[{move: "a3"}]},
			]}]},
			{move: "Bf5",   freq:   7594},
			{move: "e6",    freq:   4489},
			{move: "Nf6",   freq:   4346},
			{move: "g6",    freq:   4125},
		]}]},
		{move: "Bg4", freq:   19424,book:[{move: "f3"}]},
		{move: "Qxd5", freq:  12968,book:[{move: "Nc3"}]},
		{move: "c6", freq:    12152},
		{move: "e6", freq:    10917,book:[{move: "dxe6"}]}
	]}]},
	{move: "c6",   freq:  228041,book:[{move: "dxc6",replies:[
		{move: "Nxc6", freq:  85075,book:[{move: "Nc3"}]},
		{move: "e5", freq:    27694,book:[{move: "cxb7",replies:[
			{move: "Bxb7", freq:   1,book:[{move: "Nf3",replies:[
				{move: "Bc5", freq: 447,book:[{move: "Bb5+"}]},
				{move: "e4", freq:  298,book:[{move: "Bb5+"}]},
				{move: "Nc6", freq: 262},
				{move: "Bd6", freq: 205},
				{move: "Nd7", freq: 133},
			]}]},
		]}]},
		{move: "Nf6", freq:   16628},
	]}]},
	{move: "e6",   freq:  120401,book:[{move: "Bb5+",replies:[
		{move: "c6", freq:  726,book:[{move: "dxc6"}]},
		{move: "Bd7", freq: 445,book:[{move: "dxe6",replies:[
			{move: "Bxb5", freq: 84,book:[{move: "exf7+"}]},
			{move: "fxe6", freq: 44,book:[{move: "Qh5+"}]},
		]}]},
	]}]},
	{move: "Bg4",  freq:   41487,book:[{move: "Qxg4"}]},
	{move: "e5",   freq:   22990},
	{move: "Bf5",   freq:  17446,book:[{move: "Nc3"}]},
]}];

const lolli_attack = {move: "d4",replies:[
	{move: "Nxd4", freq:5929,book:[{move: "c3",replies:[
		{move: "Ne6",  freq: 1237,book:[{move: "Qxd5",replies:[
			{move: "Qxd5",   freq: 299,book:[{move: "Bxd5",replies:[
				{move: "Nxg5",   freq:  248,book:[{move: "Bxg5",replies:[
					{move: "f6",   freq:    131,book:[{move: "Be3",replies:[
						{move: "c6",   freq: 78,book:[{move: "Bb3",replies:[
							{move: "Bf5",   freq: 44,book:[{move: "Nd2",replies:[
								{move: "O-O-O",  freq: 18,book:[{move: "Bxa7",replies:[
									{move: "c5",    freq:  2,book:[{move: "Bb6",replies:[
										{move: "Rd6",   freq:  1,book:[{move: "Nc4"}]},
										{move: "Rd7",   freq:  1,book:[{move: "Nc4"}]},
										{move: "Bd6",   freq:  1,book:[{move: "Bxd8"}]},
									]}]},
									{move: "Kc7",   freq:  1,book:[{move: "Nc4"}]},
									{move: "g6",    freq:  1,book:[{move: "Bb6"}]},
									{move: "Bd3",   freq:  1,book:[{move: "O-O-O"}]},
								]}]},
								{move: "Bd3",    freq:  8,book:[{move: "O-O-O"}]},
								{move: "b6",     freq:  3,book:[{move: "O-O-O"}]},
							]}]},
							{move: "Bd7",   freq: 8,book:[{move: "Nd2"}]},
							{move: "Bd6",   freq: 6},
							{move: "b6",    freq: 4},
						]}]},
						{move: "Bd6",   freq:23,book:[{move: "Nd2"}]},
						{move: "Bf5",   freq: 8},
						{move: "b6",   freq:  3},
					]}]},
					{move: "c6",   freq:    50,book:[{move: "Bb3"}]},
					{move: "Bd6",   freq:   36,book:[{move: "Nd2"}]},
					{move: "Bc5",   freq:   32,book:[{move: "Nd2"}]},
					{move: "Bf5",   freq:   10},
					{move: "h6",    freq:    8},
					{move: "Be7",   freq:    5},
				]}]},
				{move: "c6",   freq:   12,book:[{move: "Bxe6"}]},
			]}]},
			{move: "Nxg5",   freq:  88,book:[{move: "Qxd8+",replies:[
				{move: "Kxd8",   freq: 1,book:[{move: "Bxg5+",replies:[
					{move: "f6",     freq:   58,book:[{move: "Be3",replies:[
						{move: "Bf5",    freq:   25,book:[{move: "Nd2"}]},
						{move: "Bd6",    freq:   11,book:[{move: "Nd2"}]},
						{move: "a6",     freq:    6},
						{move: "b6",     freq:    5},
					]}]},
					{move: "Be7",    freq:   10,book:[{move: "Be3"}]},
					{move: "Ke8",    freq:    2,book:[{move: "Nd2"}]},
				]}]}
			]}]},
			{move: "Bd6",   freq:   20,book:[{move: "Nxe6"}]},
		]}]},
		{move: "b5",   freq: 624,book:[{move: "Bd3",replies:[
			{move: "Ne6",   freq: 17,book:[{move: "Bxb5+",replies:[
				{move: "Bd7",    freq: 48,book:[{move: "Qxd5"}]},
				{move: "Ke7",    freq: 32,book:[{move: "Bc6"}]},
			]}]},
			{move: "h6",    freq: 14,book:[{move: "Nxf7",replies:[
				{move: "Kxf7",   freq:  6,book:[{move: "cxd4"}]},
			]}]},
			{move: "Nc6",   freq:  6},
			{move: "Nf4",   freq:  6},
			{move: "BNf5",  freq:  6},
		]}]},
		{move: "h6",   freq: 395,book:[{move: "Nxf7",replies:[
			{move: "Kxf7",  freq: 124,book:[{move: "cxd4",replies:[
				{move: "Bb4+",  freq: 97,book:[{move: "Nc3",replies:[
					{move: "Bxc3+",   freq: 21,book:[{move: "bxc3",replies:[
						{move: "Be6",   freq: 8,book:[{move: "Qf3+"}]},
						{move: "Re8",   freq: 3},
						{move: "e4",    freq: 3},
						{move: "exd4",  freq: 3},
					]}]},
					{move: "Be6",     freq:  8,book:[{move: "Qf3+"}]},
					{move: "exd4",    freq:  5,book:[{move: "Qf3+"}]},
					{move: "Re8",     freq:  5,book:[{move: "Qf3+"}]},
				]}]},
				{move: "Be6",   freq: 59,book:[{move: "Qf3+"}]},
				{move: "exd4",  freq: 48,book:[{move: "Qf3+"}]},
				{move: "e4",    freq: 28,book:[{move: "Qh5+"}]},
				{move: "c6",    freq: 17,book:[{move: "dxe5"}]},
			]}]},
		]}]},
		{move: "Nc6",  freq: 328,book:[{move: "Bxd5",replies:[
			{move: "Be6",   freq: 67,book:[{move: "Nxe5",replies:[
				{move: "fxe6",    freq: 32,book:[{move: "Qh5+",replies:[
					{move: "g6",    freq: 4,book:[{move: "Bxc6+",replies:[
						{move: "bxc6",   freq: 3,book:[{move: "Qxe5",replies:[
							{move: "Rg8",   freq: 7,book:[{move: "Qxe6+"}]},
						]}]},
					]}]},
				]}]},
			]}]},
			{move: "Bc5",   freq: 16,book:[{move: "Bxf7+",replies:[
				{move: "Kf8",    freq: 6,book:[{move: "Qxd8+",replies:[
					{move: "Nxd8",    freq: 4,book:[{move: "Bc4"}]},
				]}]},
				{move: "Ke7",    freq: 1},
			]}]},
			{move: "f6",    freq: 16,book:[{move: "Nf7",replies:[
				{move: "Qd6",   freq: 3,book:[{move: "Nxd6+"}]},
				{move: "Qe7",   freq: 2,book:[{move: "Nxh8"}]},
				{move: "Qd7",   freq: 1,book:[{move: "Nxh8"}]},
			]}]},
			{move: "Be7",   freq: 14,book:[{move: "Nxf7"}]},
			{move: "Qxd5",  freq: 13,book:[{move: "Qxd5"}]},
		]}]},
		{move: "Be7",  freq: 415,book:[{move: "cxd4",replies:[
			{move: "Bxg5",    freq: 148,book:[{move: "Bxg5",replies:[
				{move: "Qxg5",    freq: 122,book:[{move: "Bxd5",replies:[
					{move: "O-O",    freq: 50,book:[{move: "O-O"}]},
					{move: "exd4",   freq: 28,book:[{move: "Qxd4"}]},
					{move: "c6",     freq: 24,book:[{move: "Bf3"}]},
				]}]},
			]}]},
		]}]},
		{move: "f6",   freq: 395,book:[{move: "cxd4",replies:[
			{move: "fxg5",    freq: 222,book:[{move: "O-O",replies:[
				{move: "e4",     freq:  12,book:[{move: "Re1"}]},
				{move: "exd4",   freq:  11,book:[{move: "Re1+",replies:[
					{move: "Be7",    freq: 5,book:[{move: "Bxg5",replies:[
						{move: "O-O",    freq: 2,book:[{move: "Bxe7"}]},
						{move: "Nf6",    freq: 1,book:[{move: "Bxf7",replies:[
							{move: "gxf6",    freq: 1,book:[{move: "Qh5+"}]},
						]}]},
					]}]},
					{move: "Ne7",    freq: 2,book:[{move: "Qh5+"}]},
				]}]},
				{move: "Nb6",    freq:  11,book:[{move: "Bb3"}]},
				{move: "Nf4",    freq:   5,book:[{move: "Bxf4",replies:[
					{move: "exf4",    freq: 2,book:[{move: "Re1+"}]},
					{move: "gxf4",    freq: 1,book:[{move: "Qh5++"}]},
				]}]},
			]}]},
			{move: "Bb4+",    freq:  21,book:[{move: "Nd2"}]},
		]}]},
		{move: "Nf5",  freq: 192,book:[{move: "Bxd5"}]},
		{move: "Nf4",    freq: 120,book:[{move: "Bxf7+",replies:[
			{move: "Ke7",    freq: 1,book:[{move: "Bxf4"}]},
			{move: "Kd7",    freq: 1,book:[{move: "Bxf4"}]},
		]}]},
		{move: "Nb6",    freq:  83,book:[{move: "Bxf7+"}]},
		{move: "Bg4",    freq:  77,book:[{move: "Qxg4"}]},
	]}]},
	{move: "exd4", freq:3615,book:[{move: "O-O",replies:[
		{move: "Be7",   freq: 5684,book:[{move: "Nxf7",replies:[
			{move: "Kxf7",   freq: 4458,book:[{move: "Qh5+",replies:[
				{move: "g6",  freq:  829,book:[{move: "Bxd5+",replies:[
					{move: "Kg7",   freq:   315,book:[{move: "Bh6+",replies:[
						{move: "Kf6",   freq:   266,book:[{move: "Qg5#"}]},
					]}]},
					{move: "Be6",   freq:   214,book:[{move: "Qf3+",replies:[
						{move: "Bf6",   freq:   121,book:[{move: "Bxe6+",replies:[
							{move: "Kxe6",   freq:   106,book:[{move: "Re1+",replies:[
								{move: "Kf7",   freq:    77,book:[{move: "Bh6",replies:[
									{move: "Re8",   freq:    17,book:[{move: "Qb3+",replies:[
										{move: "Re6",   freq:    5,book:[{move: "Qxe6#"}]},
									]}]},
									{move: "Qd6",   freq:     8,book:[{move: "Qb3+",replies:[
										{move: "Qd5",   freq:  1,book:[{move: "Qxd5#"}]},
									]}]},
									{move: "Ne7",   freq:     2,book:[{move: "Nd2"}]},
								]}]},
								{move: "Kd7",   freq:     5,book:[{move: "Bf4"}]},
							]}]},
						]}]},
						{move: "Kg7",   freq:     6,book:[{move: "Bxe6"}]},
					]}]},
					{move: "Ke8",   freq:   116,book:[{move: "Qf3",replies:[
						{move: "Rf8",   freq:    58,book:[{move: "Bxc6+",replies:[
							{move: "bxc6",   freq:    50,book:[{move: "Qxc6+",replies:[
								{move: "Bd7",   freq:   50,book:[{move: "Qd5",replies:[
									{move: "Bf5",   freq:   6,book:[{move: "Qc4"}]},
									{move: "c5",    freq:   5,book:[{move: "Re1"}]},
									{move: "Rf5",   freq:   3,book:[{move: "Qg8+"}]},
								]}]},
							]}]},
						]}]},
						{move: "Ne5",   freq:    21,book:[{move: "Qe4"}]},
					]}]},
					{move: "Kf8",   freq:    22,book:[{move: "Qf3+"}]},
				]}]},
				{move: "Kf8",  freq: 267,book:[{move: "Bxd5",replies:[
					{move: "g6",   freq:    117,book:[{move: "Qf3+",replies:[
						{move: "Bf6",   freq:    32,book:[{move: "Bh6+",replies:[
							{move: "Ke7",   freq:    13,book:[{move: "Re1+"}]},
							{move: "Ke8",   freq:     6,book:[{move: "Re1+"}]},
						]}]},
						{move: "Kg7",   freq:    23,book:[{move: "Qf7#"}]},
						{move: "Bf5",   freq:    14,book:[{move: "Bh6+"}]},
						{move: "Ke8",   freq:     7,book:[{move: "Bf7+",replies:[
							{move: "Kd7",   freq:    1,book:[{move: "Qd5+",replies:[
								{move: "Bd6",   freq:   1,book:[{move: "Qe6#"}]},
							]}]},
							{move: "Kf8",   freq:    1,book:[{move: "Bh6#"}]},
						]}]},
					]}]},
					{move: "Qe8",   freq:    81,book:[{move: "Qf3+"}]},
					{move: "Bf6",   freq:    26,book:[{move: "Qf7#"}]},
					{move: "Nb4",   freq:    10,book:[{move: "Qf7#"}]},
					{move: "Qd6",   freq:     5,book:[{move: "Qf7#"}]},
					{move: "Ne5",   freq:     3,book:[{move: "Qxe5"}]},
				]}]},
				{move: "Ke6",  freq: 122,book:[{move: "Re1+",replies:[
					{move: "Kd6",   freq:    52,book:[{move: "Qxd5#"}]},
					{move: "Kf6",   freq:    31,book:[{move: "Bg5+",replies:[
						{move: "Kf5",   freq:    1,book:[{move: "g4#"}]},
					]}]},
					{move: "Kd7",   freq:    15,book:[{move: "Qxd5+",replies:[
						{move: "Ke8",   freq:   30,book:[{move: "Qf7+",replies:[
							{move: "Kd7",   freq:   29,book:[{move: "Be6+",replies:[
								{move: "Kd6",   freq:  21,book:[{move: "Nc3"}]},
							]}]},
						]}]},
						{move: "Bd6",   freq:    3,book:[{move: "Qe6#"}]},
					]}]},
					{move: "Ne5",   freq:     7,book:[{move: "Re5+"}]},
				]}]},
				{move: "Kg8",   freq:    18,book:[{move: "Bxd5+",replies:[
					{move: "Kf8",   freq:    15,book:[{move: "Qf7#"}]},
				]}]},
			]}]},
			{move: "O-O",   freq:    63},
		]}]},
		{move: "Be6",   freq: 1375,book:[{move: "Re1",replies:[
			{move: "Be7",   freq:   582,book:[{move: "Rxe6",replies:[
				{move: "fxe6",   freq:   114,book:[{move: "Nxe6",replies:[
					{move: "Qd6",   freq:   95,book:[{move: "Bxd5",replies:[
						{move: "Kd7",   freq:   21,book:[{move: "Qg4"}]},
						{move: "Qxd5",   freq:  12,book:[{move: "Nxc7+",replies:[
							{move: "Nxd5",   freq:  9},
						]}]},
						{move: "Nb4",   freq:    8},
						{move: "Bf6",   freq:    7},
					]}]},
					{move: "Qd7",   freq:   18},
				]}]},
			]}]},
			{move: "Qd7",   freq:   556,book:[{move: "Nxf7",replies:[
				{move: "Kxf7",   freq:   81,book:[{move: "Qf3+",replies:[
					{move: "Kg8",   freq:   38,book:[{move: "Rxe6",replies:[
						{move: "Qxe6",   freq:  10,book:[{move: "Qxd5",replies:[
							{move: "Re8",   freq:  2,book:[{move: "Qxe6+",replies:[
								{move: "Rxe6",   freq:  1,book:[{move: "Bxe6#"}]},
							]}]},
						]}]},
						{move: "Nc6e7",   freq:  9,book:[{move: "Rxe7",replies:[
							{move: "Bxe7",   freq:    5,book:[{move: "Bxd5+"}]},
							{move: "Qxe7",   freq:    2,book:[{move: "Bxd5+",replies:[
								{move: "Qf7",   freq:    1,replies:[{move: "Qxf7#"}]},
							]}]},
						]}]},
						{move: "Rd8",   freq:    7,book:[{move: "Qe4"}]},
					]}]},
					{move: "Kg6",   freq:   15,book:[{move: "Rxe6+",replies:[
						{move: "Qxe6",   freq:   9,book:[{move: "Bd3+",replies:[
							{move: "Qf5",    freq:   1,book:[{move: "Qxf5#"}]},
						]}]},
						{move: "Nf6",    freq:   2,book:[{move: "Qe4+",replies:[
							{move: "Kh5",   freq:   1,book:[{move: "Qf5+",replies:[
								{move: "g5",   freq:   1,book:[{move: "Qxg5#"}]},
							]}]},
						]}]},
					]}]},
					{move: "Nf6",   freq:   10,book:[{move: "Bxe6+",replies:[
						{move: "Qxe6",   freq:   10,book:[{move: "Rxe6",replies:[
							{move: "Kxe6",   freq:  11,book:[{move: "Bg5"}]},
						]}]},
					]}]},
				]}]},
				{move: "Qxf7",   freq:   26,book:[{move: "Bxd5"}]},
			]}]},
			{move: "Qd6",   freq:   295,book:[{move: "Nxe6",replies:[
				{move: "fxe6",   freq:  58,book:[{move: "Bxd5"}]},
			]}]},
			{move: "Qf6",   freq:   172},
		]}]},
		{move: "h6",   freq:   657,book:[{move: "Re1+"}]},
		{move: "f6",   freq:   340,book:[{move: "Re1+"}]},
		{move: "Bc5",  freq:   202,book:[{move: "Nxf7"}]},
		{move: "Ne5",  freq:    95},
		{move: "Bd6",  freq:    70},
	]}]},
	{move: "Be7",  freq:1398,book:[{move: "Nxf7",replies:[
		{move: "Kxf7",   freq:  125587,book:[{move: "Qf3+",replies:[
			{move: "Bf6",   freq:  620,book:[{move: "Bxd5+",replies:[
				{move: "Be6",   freq:  405,book:[{move: "Bxe6+",replies:[
					{move: "Kxe6",   freq:  205,book:[{move: "dxe5",replies:[
						{move: "Nxe5",   freq:   78,book:[{move: "Qxb7",replies:[
							{move: "Qd6",   freq:   6,book:[{move: "O-O"}]},
							{move: "Re8",   freq:   4,book:[{move: "O-O"}]},
							{move: "Rb8",   freq:   3,book:[{move: "Qe4"}]},
						]}]},
						{move: "Bxe5",   freq:   17,book:[{move: "Nc3"}]},
					]}]},
				]}]},
				{move: "Kf8",   freq:   76},
				{move: "Ke7",   freq:   70},
			]}]},
			{move: "Ke6",   freq:  573,book:[{move: "Nc3",replies:[
				{move: "Nb4",   freq:  264,book:[{move: "O-O"}]},
				{move: "Nxd4",  freq:  121,book:[{move: "Bxd5+",replies:[
					{move: "Kd6",   freq:   86,book:[{move: "Qd3",replies:[
						{move: "Bf5",   freq:   19,book:[{move: "Be4",replies:[
							{move: "Bxe4",   freq:   12,book:[{move: "Qxe4"}]},
						]}]},
						{move: "c6",    freq:    8,book:[{move: "Bf4"}]},
					]}]},
					{move: "Kd7",   freq:   11,book:[{move: "Qh3+"}]},
					{move: "Qxd5",   freq:   7,book:[{move: "Qxd5+"}]},
				]}]},
				{move: "Bb4",   freq:   62},
				{move: "Rf8",   freq:   29},
			]}]},
			{move: "Ke8",   freq:  354,book:[{move: "Bxd5"}]},
		]}]},
		{move: "Qf6",   freq:     3811},
		{move: "Qd7",   freq:     2065},
		{move: "Qh4",   freq:     1670},
	]}]},
	{move: "f6",   freq:2081,book:[{move: "dxe5",replies:[
		{move: "fxg5",   freq:  396,book:[{move: "Bxd5",replies:[
			{move: "Nxe5",   freq:  242,book:[{move: "O-O",replies:[
				{move: "Bd6",    freq:  112,book:[{move: "Nc3",replies:[
					{move: "c6",   freq:    6,book:[{move: "Bb3",replies:[]}]},
					{move: "Bf5",   freq:   2},
				]}]},
				{move: "c6",     freq:   93,book:[{move: "Bb3",replies:[
					{move: "Qxd1",   freq:    30,book:[{move: "Rxd1",replies:[
						{move: "Bd7",    freq:     9,book:[{move: "Re1"}]},
						{move: "Be7",    freq:     6,book:[{move: "Re1"}]},
						{move: "h6",     freq:     3,book:[{move: "Re1"}]},
					]}]},
					{move: "Be7",    freq:     3},
					{move: "Qf6",    freq:     3},
				]}]},
				{move: "Be7",   freq:    25,book:[{move: "Re1"}]},
				{move: "Bg4",   freq:    15,book:[{move: "Qd4"}]},
				{move: "Qf6",   freq:     8},
			]}]},
			{move: "Bd7",    freq:   27,book:[{move: "O-O"}]},
			{move: "Nb4",    freq:   26,book:[{move: "Bf7+"}]},
			{move: "Bc5",    freq:   25,book:[{move: "Bxc6+",replies:[
				{move: "bxc6",    freq:   1,book:[{move: "Qxd8+",replies:[
					{move: "Kxd8",    freq:   1,book:[{move: "Bxg5+"}]},
				]}]},
			]}]},
			{move: "Ne7",    freq:   23,book:[{move: "Bf7+"}]},
			{move: "Qe7",    freq:   23,book:[{move: "O-O"}]},
			{move: "Be7",    freq:   18,book:[{move: "O-O"}]},
			{move: "Bb4+",    freq:  15,book:[{move: "c3"}]},
		]}]},
		{move: "Nxe5",   freq:  105,book:[{move: "Qxd5",replies:[
			{move: "Qxd5",    freq:   28,book:[{move: "Bxd5",replies:[
				{move: "fxg5",    freq:   26,book:[{move: "O-O",replies:[
					{move: "Bd6",    freq:   11,book:[{move: "Bxg5"}]},
					{move: "Be7",    freq:    6,book:[{move: "Re1"}]},
					{move: "h6",     freq:    4,book:[{move: "Re1"}]},
					{move: "c6",     freq:    4,book:[{move: "bb3"}]},
					{move: "Bf5",    freq:    3,book:[{move: "Bxb7"}]},
				]}]},
			]}]},
		]}]},
		{move: "Nb6",    freq:   15},
		{move: "Be6",    freq:   13},
		{move: "fxe5",   freq:   13},
	]}]},
	{move: "h6",   freq:1904,book:[{move: "Nxf7",replies:[{move: "Kxf7",req: 682,book:[{move: "Qf3+",replies:[
		{move: "Ke6",   freq:  477,book:[{move: "Nc3",replies:[
			{move: "Nxd4",   freq:   93,book:[{move: "Bxd5+",replies:[
				{move: "Kd6",    freq:   49,book:[{move: "Qf7",replies:[
					{move: "Nxc2+",    freq:   6,book:[{move: "Kd1",replies:[
						{move: "Nxa1",   freq:  3,book:[{move: "Ne4#"}]},
					]}]},
					{move: "Be6",     freq:   2,book:[{move: "Bxe6",replies:[
						{move: "Nxc2+",    freq:  1,book:[{move: "Kd1",replies:[
							{move: "Nxa1",   freq:   1,book:[{move: "Ke2"}]},
						]}]},
					]}]},
				]}]},
				{move: "Ke7",    freq:   20,book:[{move: "Qf7+",replies:[
					{move: "Kd6",   freq:  16,book:[{move: "Ne4#"}]},
				]}]},
				{move: "Qxd5",   freq:   10,book:[{move: "Qxd5+",replies:[
					{move: "Kf6",    freq:   3,book:[{move: "O-O"}]},
					{move: "Kf5",    freq:   2,book:[{move: "Qf7+",replies:[
						{move: "Kg4",    freq:  1,book:[{move: "h3+",replies:[
							{move: "Kh4",    freq:   1,book:[{move: "g3#"}]},
						]}]},
					]}]},
				]}]},
			]}]},
			{move: "Bb4",    freq:   92,book:[{move: "Bxd5+",replies:[
				{move: "Qxd5",    freq:  18,book:[{move: "Qxd5+"}]},
				{move: "Ke7",    freq:    8,book:[{move: "Qf7+"}]},
				{move: "Kd6",    freq:    7,book:[{move: "dxe5+"}]},
			]}]},
			{move: "Nb4",    freq:   80,book:[{move: "Qe4"}]},
			{move: "Ne7",    freq:   75,book:[{move: "O-O"}]},
		]}]},
		{move: "Qf6",   freq:  304,book:[{move: "Bxd5+",replies:[
			{move: "Be6",    freq:  197,book:[{move: "Bxe6+",replies:[
				{move: "Kxe6",    freq:   109,book:[{move: "d5+",replies:[
					{move: "Kd6",   freq:  38,book:[{move: "dxc6"}]},
					{move: "Kf7",   freq:  18,book:[{move: "dxc6"}]},
					{move: "Ke7",   freq:  12,book:[{move: "dxc6"}]},
					{move: "Kd7",   freq:   9,book:[{move: "dxc6+"}]},
				]}]},
			]}]},
			{move: "Ke7",    freq:   40,book:[{move: "Bxc6"}]},
			{move: "Ke8",    freq:   33,book:[{move: "Qxf6"}]},
		]}]},
		{move: "Ke8",   freq:  252,book:[{move: "Bxd5",replies:[
			{move: "Nxd4",   freq: 78,book:[{move: "Qf7#"}]},
			{move: "Qf6",   freq:  63,book:[{move: "Qxf6",replies:[
				{move: "gxf6",   freq: 10,book:[{move: "dxe5",replies:[
					{move: "fxe5",   freq:   4,book:[{move: "c3"}]},
					{move: "Nxe5",   freq:   1,book:[{move: "Nc3"}]},
				]}]},
			]}]},
			{move: "Qe7",   freq:  37,book:[{move: "Bxc6+"}]},
			{move: "Qd7",   freq:  20,book:[{move: "dxe5"}]},
			{move: "exd4",   freq: 10,book:[{move: "Qf7#"}]},
		]}]},
	]}]}]}]},
	{move: "Be6",  freq: 2005,book:[{move: "O-O",replies:[
		{move: "Be7",     freq: 126,book:[{move: "Nxe6",replies:[
			{move: "fxe6",      freq:  118,book:[{move: "dxe5",replies:[
				{move: "O-O",    freq:  59,book:[{move: "Nc3",replies:[
					{move: "Nxe5",   freq:   8,book:[{move: "Qe2"}]},
					{move: "Nxc3",   freq:   4,book:[{move: "bxc3",replies:[
						{move: "Qxd1",     freq: 1,book:[{move: "Bxe6+",replies:[
							{move: "Kh8",   freq:  1,book:[{move: "Rxd1"}]},
						]}]},
					]}]},
				]}]},
				{move: "Nxe5",   freq:  41,book:[{move: "Qh5+",replies:[
					{move: "Ng6",    freq:  24,book:[{move: "Nc3"}]},
					{move: "Nf7",    freq:   5,book:[{move: "Nc3"}]},
					{move: "g6",     freq:   1,book:[{move: "Qxe5"}]},
				]}]},
			]}]},
		]}]},
		{move: "Nxd4",    freq:  97,book:[{move: "Nxe6",replies:[
			{move: "fxe6",    freq:  64,book:[{move: "Nd2",replies:[
				{move: "g6",   freq:   1,book:[{move: "c3"}]},
				{move: "Bd6",   freq:  1,book:[{move: "c3"}]},
			]}]},
			{move: "Nxe6",    freq:  16,book:[{move: "Bxd5"}]},
		]}]},
		{move: "exd4",    freq:  47,book:[{move: "Re1"}]},
		{move: "h6",      freq:  47,book:[{move: "Nxe6"}]},
		{move: "Qd7",     freq:  21,book:[{move: "Nxe6"}]},
		{move: "Nf4",     freq:  17,book:[{move: "Nxe6"}]},
	]}]},
	{move: "Bb4+",    freq: 367,book:[{move: "c3",replies:[
		{move: "Be7",     freq:  184,book:[{move: "Nxf7",replies:[
			{move: "Kxf7",     freq:  179,book:[{move: "Qf3+",replies:[
				{move: "Bf6",     freq:   84,book:[{move: "Bxd5+",replies:[
					{move: "Be6",     freq:   48,book:[{move: "Bxe6+",replies:[
						{move: "Kxe6",     freq:   28,book:[{move: "Nd2"}]},
					]}]},
					{move: "Kf8",     freq:   11,book:[{move: "Bxc6"}]},
					{move: "Ke7",     freq:   10,book:[{move: "Bxc6"}]},
				]}]},
				{move: "Ke6",     freq:   67,book:[{move: "O-O"}]},
				{move: "Ke8",     freq:   24,book:[{move: "Bxd5"}]},
				{move: "Kg8",     freq:    2,book:[{move: "Bxd5+"}]},
			]}]},
		]}]},
		{move: "Ba5",     freq:   98,book:[{move: "Nxf7",replies:[
			{move: "Kxf7",     freq:   29,book:[{move: "Qf3+",replies:[
				{move: "Ke6",     freq:   14,book:[{move: "O-O"}]},
				{move: "Qf6",     freq:    8,book:[{move: "Bxd5+"}]},
				{move: "Ke8",     freq:    6,book:[{move: "Bxd5"}]},
				{move: "Kg8",     freq:    2,book:[{move: "Bxd5+"}]},
			]}]},
		]}]},
		{move: "Bd6",     freq:   24,book:[{move: "Bxd5"}]},
		{move: "Nxc3",    freq:   13,book:[{move: "Bxf7+"}]},
		{move: "exd4",    freq:   11,book:[{move: "cxb4"}]},
		{move: "O-O",     freq:    9,book:[{move: "dxe5"}]},
	]}]},
	{move: "Qxg5",    freq: 344,book:[{move: "Bxg5",stock:8.30,replies:[
		{move: "f6",       freq: 30,book:[{move: "Bxd5"}]},
		{move: "exd4",     freq: 28,book:[{move: "Bxd5"}]},
		{move: "Nxd4",     freq: 27,book:[{move: "Bxd5"}]},
		{move: "Nf4",      freq: 16,book:[{move: "O-O"}]},
		{move: "Nb6",      freq: 16,book:[{move: "Bb5"}]},
		{move: "Bb4+",     freq: 16,book:[{move: "c3"}]},
		{move: "Be6",      freq: 13,book:[{move: "dxe5"}]},
		{move: "Nd5e7",    freq: 10,book:[{move: "d5"}]},
		{move: "Nd5b4",    freq: 10,book:[{move: "a3"}]},
		{move: "Be7",      freq:  9,book:[{move: "Bxd5"}]},
		{move: "Nf6",      freq:  7,book:[{move: "Bxf6"}]},
	]}]},
	{move: "Na5",    freq:  317,book:[{move: "Qf3",replies:[
		{move: "Be6",     freq: 80,book:[{move: "Nxe6",replies:[
			{move: "fxe6",      freq: 76,book:[{move: "Qh5+",replies:[
				{move: "g6",     freq: 17,book:[{move: "Bb5+",replies:[
					{move: "c6",    freq:   1,book:[{move: "Qxe5",replies:[
						{move: "Qf6",   freq:   1,book:[{move: "Qxf6",replies:[
							{move: "Nxf6",    freq:   1,book:[{move: "Be2"}]},
						]}]},
						{move: "cxb5",  freq:   1,book:[{move: "Qxh8"}]},
					]}]},
				]}]},
				{move: "Kd7",    freq:  5,book:[{move: "Bxd5",replies:[
					{move: "exd5",     freq: 5,book:[{move: "Qh3+"}]},
				]}]},
			]}]},
		]}]},
		{move: "f6",      freq: 31,book:[{move: "Bxd5"}]},
		{move: "Nf6",     freq: 17,book:[{move: "Bxf7+"}]},
		{move: "Nxc4",    freq: 13,book:[{move: "Qxf7#"}]},
		{move: "Qf6",     freq:  8,book:[{move: "Bxd5"}]},
	]}]},
	{move: "e4",     freq:  222,book:[{move: "O-O"}]},
	{move: "Nf4",     freq: 114,book:[{move: "Bxf7+"}]},
]}

const scotch = {move: "d4",replies:[
	{move: "exd4",  freq: 4588788,book:[{move: "Nxd4",replies:[
		{move: "Nxd4",   freq:  1012156,book:[{move: "Qxd4",replies:[
			{move: "d6",     freq:   382941,book:[{move: "Nc3",replies:[
				{move: "Nf6",    freq:  123406,book:[{move: "Bf4",replies:[
					{move: "Be7",    freq:  11038,book:[{move: "O-O-O",replies:[
						{move: "O-O",    freq: 6227,book:[{move: "e5",replies:[
							{move: "dxe5",    freq: 1291,book:[{move: "Qxe5",replies:[
								{move: "Bd6",      freq:  706,book:[{move: "Qd4",replies:[
									{move: "Bxf4+",   freq:  211,book:[{move: "Qxf4",replies:[
										{move: "Qe7",     freq: 338,book:[{move: "Bc4"}]},
										{move: "Bd7",     freq:  14,book:[]},
									]}]},
									{move: "Be6",    freq:   21,book:[]},
									{move: "Bg4",    freq:   15,book:[]},
								]}]},
								{move: "Qe8",      freq:  297,book:[{move: "Qxc7"}]},
								{move: "Bd7",      freq:   29,book:[]},
							]}]},
							{move: "c5",      freq:  134,book:[]},
							{move: "Nh5",     freq:   81,book:[]},
						]}]},
						{move: "Be6",    freq: 1148,book:[]},
						{move: "c5",     freq:  362,book:[]},
						{move: "Bd7",     freq: 181,book:[]},
						{move: "Bg4",     freq: 146,book:[]},
						{move: "a6",      freq: 134,book:[]},
						{move: "h6",      freq:  78,book:[]},
					]}]},
					{move: "Be6",    freq:   1631,book:[]},
					{move: "c5",    freq:    1000,book:[]},
				]}]},
				{move: "Be6",    freq:   31956,book:[]},
				{move: "Qf6",    freq:   20546,book:[]},
				{move: "c5",     freq:   15400,book:[]},
				{move: "Be7",     freq:   7935,book:[]},
			]}]},
			{move: "Nf6",    freq:   178216,book:[{move: "e5",replies:[
				{move: "Qe7",    freq: 20244,book:[{move: "Be3",replies:[
					{move: "Ng8",    freq: 1809,book:[{move: "Nc3"}]},
					{move: "c5",     freq: 1015,book:[{move: "exf6",replies:[
						{move: "cxd4",    freq: 434,book:[{move: "fxe7",replies:[
							{move: "dxe3",     freq:  314,book:[{move: "exf8=Q+"}]},
							{move: "Bxe7",     freq:  117,book:[{move: "Bxd4"}]},
						]}]},
						{move: "gxf6",    freq:  26,book:[]},
						{move: "Qxf6",    freq:  18,book:[]},
					]}]},
					{move: "Nh5",    freq:  873,book:[]},
					{move: "d6",     freq:  456,book:[]},
					{move: "Qb4+",   freq:  351,book:[]},
					{move: "Ng4",    freq:  151,book:[]},
				]}]},
				{move: "Ng8",    freq: 13520,book:[]},
				{move: "c5",    freq:  12655,book:[]},
				{move: "Nh5",    freq:  5690,book:[]},
				{move: "Ng4",    freq:   239,book:[]},
			]}]},
			{move: "Qf6",    freq:   155284,book:[]},
			{move: "c5",     freq:   153986,book:[]},
			{move: "b6",     freq:    92724,book:[]},
			{move: "Ne7",    freq:    31633,book:[]},
			{move: "Qe7",    freq:    22003,book:[]},
			{move: "c6",     freq:    12801,book:[]},
			{move: "Be7",    freq:     8855,book:[]},
			{move: "f6",     freq:     6527,book:[]},
		]}]},
		{move: "Bc5",    freq:   966853,book:[{move: "Be3",replies:[
			{move: "Qf6",    freq:   213825,book:[{move: "c3",replies:[
				{move: "Ng8e7",     freq: 183828,book:[{move: "Bc4",replies:[
					{move: "O-O",      freq: 28941,book:[{move: "O-O"}]},
					{move: "Ne5",      freq: 15447,book:[]},
					{move: "d6",       freq: 11907,book:[]},
					{move: "Bb6",      freq:  3827,book:[]},
					{move: "Qg6",      freq:  3241,book:[]},
					{move: "b6",       freq:  1981,book:[]},
					{move: "Nxd4",     freq:  1798,book:[]},
				]}]},
				{move: "d6",        freq:  25054,book:[]},
				{move: "Nxd4",      freq:  19390,book:[]},
				{move: "Bb6",       freq:   9501,book:[]},
				{move: "Bxd4",      freq:   6766,book:[]},
				{move: "Qg6",      freq:    5813,book:[]},
			]}]},
			{move: "Bb6",    freq:    55522,book:[]},
			{move: "Nxd4",    freq:   49435,book:[]},
			{move: "Bxd4",    freq:   32057,book:[]},
			{move: "Nf6",     freq:   18159,book:[]},
			{move: "d6",     freq:    13203,book:[]},
			{move: "Qe7",     freq:    9285,book:[]},
			{move: "Ng8e7",     freq:  6240,book:[]},
			{move: "Qh4",     freq:    3068,book:[]},
		]}]},
		{move: "Nf6",    freq:   557110,book:[{move: "Nc3",replies:[
			{move: "Bb4",     freq:  347927,book:[{move: "Nxc6",replies:[
				{move: "bxc6",     freq:  247719,book:[{move: "Bd3",replies:[
					{move: "d5",   freq: 116868,book:[{move: "exd5",replies:[
						{move: "cxd5", freq:  68031,book:[{move: "O-O",replies:[
							{move: "O-O",  freq: 53986,book:[{move: "h3"}]},
							{move: "c6",   freq:  1919,book:[]},
							{move: "Bxc3", freq:  1413,book:[]},
						]}]},
						{move: "O-O",  freq:  20275,book:[]},
						{move: "Qe7+", freq:   3561,book:[]},
						{move: "Nxd5", freq:   1959,book:[]},
					]}]},
					{move: "O-O",  freq:  68945,book:[]},
					{move: "d6",   freq:   7590,book:[]},
					{move: "Bxc3+", freq:  5512,book:[]},
					{move: "Qe7", freq:    4549,book:[]},
					{move: "h6", freq:     2141,book:[]},
				]}]},
				{move: "Bxc3+",     freq:  18809,book:[]},
				{move: "dxc6",     freq:   11688,book:[]},
				{move: "b6",     freq:       164,book:[]},
			]}]},
			{move: "Nxd4",     freq: 163041,book:[]},
			{move: "Bc5",     freq:  140514,book:[]},
			{move: "d6",      freq:   41523,book:[]},
			{move: "Be7",      freq:  13514,book:[]},
			{move: "d5",       freq:  10442,book:[]},
		]}]},
		{move: "Qf6",    freq:   181191,book:[{move: "Nb5"}]},
		{move: "d6",     freq:   171759,book:[{move: "Nc3"}]},
		{move: "Qh4",    freq:   102135,book:[{move: "Nc3"}]},
		{move: "Ne5",    freq:    80356,book:[]},
		{move: "Ng8e7",  freq:    60139,book:[]},
		{move: "Bb4+",   freq:    47580,book:[]},
		{move: "d5",     freq:    31437,book:[]},
		{move: "Be7",    freq:    24999,book:[]},
		{move: "g6",     freq:    18962,book:[]},
	]}]},
	{move: "d6",    freq:  312102,book:[scotch_d6]},
	{move: "Nf6",   freq:  154317,book:[{move: "d5"}]},
	{move: "Nxd4",  freq:   75284,book:[]},
	{move: "d5",    freq:   57615,book:[]},
	{move: "Bd6",   freq:   53002,book:[]},
	{move: "f6",    freq:   48709,book:[]},
	{move: "Bc5",   freq:   29855,book:[]},
	{move: "f5",    freq:   27745,book:[]},
	{move: "Qf6",   freq:   25495,book:[]},
	{move: "Qe7",   freq:   11587,book:[]},
]}

const evans = {move: "b4",replies:[//evans gambit
	{move: "Bxb4", freq: 455004,master:1161,book:[{move: "c3",replies:[
		{move: "Bc5",freq:  143547,master:36,book:hoh_c_variation},
		{move: "Ba5",freq:  194261,master:650,book:hoh_a_variation},
		{move: "Be7",freq:   90146,master:372,book:hoh_e_variation},
		{move: "Bd6",freq:   23741,master:101,book:[{move: "d4",replies:[
			{move: "Nf6", freq: 9266,book:[{move: "O-O",replies:[
				{move: "O-O",   freq:   4679,book:[{move: "Re1"}]},
				{move: "h6",   freq:    1242,book:[]},
				{move: "exd4",   freq:   545,book:[]},
				{move: "Qe7",   freq:    274,book:[]},
				{move: "Nxe4",   freq:   209,book:[]},
			]}]},
			{move: "exd4",freq: 5444,book:[{move: "O-O"}]},
			{move: "h6",  freq: 1774,book:[{move: "O-O"}]},
			{move: "Qe7", freq: 1141,book:[{move: "O-O"}]},
		]}]},
		{move: "Bf8",freq:    1498,master:2,book:[{move: "d4"}]}
	]}]},
	{move: "Bb6",  freq:  77278,master:204,book:[{move: "a4",replies:[//declined
		{move: "a6",freq:  11193,book:[{move: "c3",replies:[
			{move: "d6",freq: 2042,book:[{move: "d3",replies:[
				{move: "Bg4+",freq:  197,book:[{move: "h3"}]},
				{move: "h6",freq:    125,book:[{move: "O-O"}]},
				{move: "Nf6",freq:   107,book:[{move: "h3"}]},
			]}]},
			{move: "Nf6",freq:1565,book:[{move: "d3",replies:[
				{move: "d6",freq:  1082,book:[{move: "O-O"}]},
				{move: "O-O",freq:  773,book:[]},
				{move: "h6",freq:   453,book:[]},
				{move: "d5",freq:   241,book:[]},
			]}]},
			{move: "h6",freq:  174,book:[]},
		]}]},
		{move: "a5",freq:   3913,book:[{move: "b5",replies:[
			{move: "Nd4",freq:   586,book:[{move: "Nxd4"}]},
			{move: "Nc6e7",freq: 156,book:[]},
			{move: "Nb4",freq:   104,book:[]},
			{move: "Na7",freq:    43,book:[]},
		]}]},
		{move: "Nxb4",freq:  1749,book:[{move: "a5",replies:[
			{move: "Bc5",freq:   168,book:[{move: "c3"}]},
			{move: "Bd4",freq:    25,book:[]},
		]}]},
		{move: "d6",freq:     378,book:[{move: "a5"}]},
	]},{move: "O-O"}]},
	{move: "Nxb4", freq:  22500,book:[{move: "c3",replies:[
		{move: "Nc6", freq: 8119,book:hoh_c_variation},
		{move: "Nd3+",freq:  267,book:[]},
		{move: "d5",  freq:  153,book:[]},
		{move: "Na6",  freq:  65,book:[]}
	]}]},
	{move: "Nf6", freq:   5532,book:[{move: "bxc5"}]},
	{move: "Bd4", freq:    5248,book:[{move: "c3",replies:[//very wrong
		{move: "Bb6",  freq: 2398,book:[{move: "d4",replies:[
			{move: "exd4",  freq:  927,book:[{move: "a4",replies:[
				{move: "a5",freq:  3,book:[{move: "Qb3",stock:2.21}]},
				{move: "dxc3",freq:2,book:[{move: "a5",stock:4.15}]},
				{move: "Nf6",freq: 2,book:[]},
				{move: "a6",freq:2,book:[{move: "cxd4",stock:1.37}]},
			]}]},
			{move: "d6",  freq:    202,book:[{move: "a4",stock:1.77}]},
			{move: "Nf6",  freq:    61,book:[]},
		]}]},
		{move: "Bxf2+", freq: 109,book:[]}
	]}]},
	{move: "d6", freq:   4612}
]}

const polerio = {move: "Bb5+",replies:[//polerio
	{move: "c6", freq:156140,master:1742,book:[{move: "dxc6",replies:[
		{move: "bxc6", freq:475645,master:1741,book:[{move: "Qf3",replies:[
			{move: "Bb7", freq: 33912,master:6,book:[{move: "Ba4",replies:[
				{move: "h6",   freq:   2902,book:[{move: "Ne4",replies:[
					{move: "Nxe4",freq: 3341,book:[{move: "Qxe4",replies:[
						{move: "Bd6",freq: 2183,book:[{move: "b4",replies:[
							{move: "O-O",freq: 300,book:[{move: "bxa5",stock:5.84}]},
							{move: "f5",freq:  138,book:[{move: "Qxf5",stock:5.50,replies:[
								{move: "Bxb4",freq: 49,book:[{move: "Qh5+",replies:[
									{move: "Kf8",freq: 1,book:[{move: "O-O",stock:5.75}]},
								]}]},
								{move: "Nc4",freq:  45},
								{move: "Rf8",freq:  11},
							]}]},
							{move: "Bxb4",freq: 57,book:[{move: "Qxb4",stock:8.16}]},
							{move: "Qg5",freq:  12},
						]}]},
						{move: "Qd4",freq:  457},
						{move: "Be7",freq:  206},
						{move: "Bc5",freq:  102},
						{move: "Qc7",freq:   98},
						{move: "Qf6",freq:   88},
						{move: "Qd6",freq:   76},
						{move: "Qd5",freq:   70,book:[{move: "Qxd5"}]},
					]}]},
					{move: "Be7",freq:  2752,book:[{move: "O-O"}]},
					{move: "Nd5",freq:   505},
					{move: "Qd4",freq:   219},
					{move: "Bd6",freq:   103},
				]}]},
				{move: "Be7",   freq:  2374,book:[{move: "O-O",replies:[
					{move: "O-O",   freq:  2445,book:[{move: "d3",replies:[
						{move: "c5",freq:   991,book:[{move: "Qf5",replies:[
							{move: "Qd5",freq:   10,book:[{move: "Nf3"}]},
							{move: "h6" ,freq:    7,book:[{move: "Ne4"}]},
							{move: "Qd4",freq:    5,book:[{move: "Nc3"}]},
							{move: "Nc6",freq:    5,book:[{move: "Bxc6",replies:[
								{move: "Bxc6",freq:   2,book:[{move: "Nc3"}]},
							]}]},
						]}]},
						{move: "h6",freq:   357,book:[{move: "Ne4"}]},
						{move: "Nd5",freq:  284,book:[{move: "Qf5"}]},
						{move: "Qd4",freq:   53,book:[{move: "Nc3"}]},
					]}]},
					{move: "h6",    freq:   109,book:[{move: "Ne4"}]},
				]}]},
				{move: "Bd6",   freq:  1209,book:[{move: "d3"}]},
				{move: "Bc5",   freq:   908,book:[{move: "d3"}]},
				{move: "Qd4",   freq:   445,book:[{move: "Nc3"}]},
			]}]},
			{move: "Bd7", freq:  16253,master:8,book:[{move: "Ba4",replies:[
				{move: "h6",   freq:   3759,book:[{move: "Ne4",replies:[
					{move: "Nxe4",   freq: 1924,book:[{move: "Qxe4"}]},
					{move: "Be7",   freq:  1156,book:[{move: "Nxf6+",replies:[
						{move: "Bxf6",   freq: 1,book:[{move: "d3",stock:2.12}]},
					]}]},
					{move: "Nd5",   freq:   480,book:[]},
					{move: "Bg4",   freq:   149,book:[{move: "Nxf6+"}]},
				]}]},
				{move: "Be7",   freq:  2699,book:[{move: "O-O"}]},
				{move: "Bd6",   freq:  1337,book:[{move: "d3"}]},
				{move: "Bc5",   freq:   822,book:[]},
				{move: "Rc8",   freq:   433,book:[]},
			]}]},
			{move: "Be7", freq:  23004,master:148,book:[{move: "Bd3",replies:[
				{move: "O-O",   freq:  1731,book:[{move: "Nc3",replies:[
					{move: "h6",   freq:  809,book:[{move: "Ng6e4",replies:[
						{move: "Nd5",  freq:  514,book:[{move: "Ng3",replies:[
							{move: "Nf4",  freq:  158,book:[{move: "Bf5",replies:[
								{move: "Bb7",  freq:   44,book:[{move: "d3"}]},
								{move: "Ba6",  freq:   28,book:[{move: "d3"}]},
							]}]},
							{move: "Nb4",  freq:  104,book:[{move: "Nf5"}]},
							{move: "f5",   freq:   55,book:[{move: "Nxf5"}]},
							{move: "g6",   freq:   40,book:[{move: "O-O"}]},
						]}]},
						{move: "Nxe4",  freq: 148,book:[{move: "Bxe4"}]},
					]}]},
					{move: "Bg4",  freq:   96,book:[]},
					{move: "Nd5",  freq:   83,book:[]},
				]}]},
				{move: "h6",    freq:   704,book:[{move: "Ne4"}]},
				{move: "Bg4",   freq:   126,book:[]},
			]}]},
			{move: "h6",  freq:   9881,master:30,book:[{move: "Ne4",stock:0.35,replies:[
				{move: "Nd5",   freq: 1916,book:[{move: "Ba4",replies:[
					{move: "Be7",   freq:   777,book:[{move: "O-O",replies:[
						{move: "O-O",   freq:   229,book:[{move: "d3"}]},
					]}]},
					{move: "f5",   freq:     90,book:[{move: "Qh5+",replies:[
						{move: "Ke7",   freq:  24,book:[{move: "Qh4+"}]},
						{move: "Kd7",   freq:   9,book:[{move: "Qxf5+",replies:[
							{move: "Kc6",   freq: 6,book:[{move: "Qxe5+",replies:[
								{move: "Kb7",   freq: 3,book:[{move: "d3"}]},
							]}]},
						]}]},
					]}]},
				]}]},
				{move: "cxb5",   freq:1785,book:[{move: "Nxf6+",replies:[
					{move: "gxf6",   freq: 1486,book:[{move: "Qxa8",replies:[
						{move: "Qd7",   freq: 1220,book:[{move: "b4",replies:[
							{move: "Nc6",   freq:   4,book:[{move: "a4",replies:[
								{move: "Nd4",   freq: 2,book:[{move: "O-O"}]},
								{move: "Nxb4",  freq: 1,book:[{move: "O-O"}]},
							]}]},
							{move: "Bxb4",   freq:  1,book:[{move: "a4"}]},
						]}]},
					]}]},
					{move: "Qxf6",   freq:  318,book:[{move: "Qxa8"}]},
				]}]},
				{move: "Nxe4",   freq:1504,book:[]},
				{move: "Be7",   freq:  797,book:[]},
			]}]},
			{move: "Rb8", freq:  14863,master:151,book:[{move: "Bd3",replies:[
				{move: "h6", freq:  1365,book:[{move: "Ne4"}]},
				{move: "Be7",freq:   747,book:[{move: "Nc3"}]},
				{move: "Bd6",freq:   338,book:[{move: "Bf5"}]},
				{move: "Bg4",freq:   219,book:[{move: "Qg3"}]},
			]}]},
			{move: "cxb5",freq:   6011,master:15,book:[{move: "Qxa8"}]},
			{move: "e4",freq:     3690,book:[{move: "Nxe4",stock:2.85}]},
			{move: "Bg4",freq:    2072,book:[{move: "Bxc6"}]},
			{move: "Qb6",freq:    3393},
			{move: "Qc7",freq:    3818,master:16},
			{move: "Qd5",freq:    1946,book:[{move: "Be2"}]},
		]}]},
		{move: "Nxc6", freq: 17553,book:[{move: "d3",replies:[
			{move: "Bc5",freq:  217,book:[{move: "O-O"}]},
			{move: "Be7",freq:  157,book:[{move: "O-O"}]},
			{move: "h6",freq:   151,book:[{move: "Ne4"}]},
			{move: "Bd7",freq:  114,book:[{move: "Bc4"}]},
			{move: "Qa5+",freq:  73,book:[{move: "Nc3"}]},
			{move: "a6",freq:    48},
		]}]}
	]}]},
	{move: "Bd7", freq:35692,master:181,book:[{move: "Qe2",replies:[
		{move: "Bd6",freq:    4605,book:[{move: "Bxd7+",replies:[
			{move: "Qxd7",freq:  2061,book:[{move: "Nc3",replies:[
				{move: "O-O",freq:    302,book:[{move: "a3"}]},
				{move: "O-O-O",freq:   68,book:[{move: "a3"}]},
				{move: "h6",freq:      63,book:[{move: "Ng6e4"}]},
				{move: "b6",freq:      54,book:[{move: "b3"}]},
				{move: "c6",freq:      34},
			]}]},
			{move: "Nxd7",freq:   511,book:[{move: "Ne4"}]},
		]}]},
		{move: "Nxd5",freq:   1375},
		{move: "Be7",freq:    1196},
		{move: "a6",freq:      997,book:[{move: "Bxd7+"}]},
	]}]},
	{move: "Nd7", freq:  876,book:[{move: "Ne6"}]},
]}

const liver = {move: "Ng5",replies:[//stekt lever
	{move: "d5", freq:  1288084,master:2325,book:[{move: "exd5",replies:[
		{move: "Na5",  freq: 246874,master:1983,book:[polerio]},
		{move: "Nxd5", freq: 228449,master:26,book:[lolli_attack]},
		{move: "Nd4",  freq:  51390,master:135,book:[{move: "c3",replies:[
			{move: "Nf5", freq:12753,book:[{move: "d3",replies:[
				{move: "Nd6",   freq:   582,book:[{move: "Bb3"}]},
				{move: "h6",   freq:    391,book:[{move: "Nf3"}]},
				{move: "Nxd5",   freq:  338,book:[{move: "Nf3"}]},
				{move: "Bd6",   freq:   261,book:[{move: "Nd2"}]},
				{move: "Bc5",   freq:   170,book:[{move: "Nd2"}]},
				{move: "Be7",   freq:   129,book:[{move: "Nxf7",replies:[
					{move: "Kxf7",   freq: 28,book:[{move: "d6+",replies:[
						{move: "Be6",   freq:  15,book:[{move: "Bxe6+",replies:[
							{move: "Kxe6",   freq: 12,book:[{move: "dxe7",replies:[
								{move: "Qxe7",   freq:  10,book:[{move: "Qb3+",replies:[
									{move: "Kd7",   freq:  4,book:[{move: "Qxb7",replies:[
										{move: "Nd6",   freq:   3,book:[{move: "Qa6"}]},
									]}]},
								]}]},
							]}]},
						]}]},
						{move: "Kf8",   freq:   8,book:[{move: "dxe7+"}]},
						{move: "Ke8",   freq:   4,book:[{move: "dxe7+"}]},
					]}]},
				]}]},
			]}]},
			{move: "b5", freq:  8897,book:[{move: "Bf1",replies:[
				{move: "Nxd5",   freq: 12052,book:[{move: "cxd4",replies:[
					{move: "Qxg5",   freq: 7041,book:[{move: "Bxb5+",replies:[
						{move: "Kd8",freq:    2,book:[{move: "O-O"}]},
						{move: "Ke7",freq:    1,book:[{move: "O-O"}]},
						{move: "Bd7",freq:    1,book:[{move: "Bxd7+",replies:[
							{move: "Kxd7",freq:    1,book:[{move: "O-O"}]},
						]}]},
						{move: "c6", freq:    1,book:[{move: "Bxc6+"}]},
					]}]},
				]}]},
				{move: "Nf5",   freq:   1400,book:[{move: "Bxb5+"}]},
			]}]},
		]}]},
		{move: "b5",   freq:  18830,master:178,book:[{move: "Bf1"}]},
		{move: "Ne7",   freq:   2649,book:[{move: "d4",stock:2.20}]},
		{move: "Nb4",   freq:   1747,book:[]},
		{move: "h6",   freq:   1145,book:[]},
	]}]},
	{move: "Bc5", freq: 234501,master:128,book:[{move: "Nxf7",replies:[//traxler
		{move: "Bxf2+", freq:54663,master:27,book:[{move: "Kf1",replies:[
			{move: "Qe7", freq: 24044,master:17,book:[{move: "Nxh8",replies:[
				{move: "d5",freq: 11902,master:16,book:[{move: "exd5",replies:[
					{move: "Nd4", freq:  6058,master:13,book:[{move: "d6",replies:[
						{move: "cxd6", freq:  653,master:5,book:[{move: "Kxf2",stock:3.34,replies:[
							{move: "Ne4+", freq:  421,book:[{move: "Kg1",stock:7.76,replies:[
								{move: "Qh4", freq:  306,book:[{move: "Qf1",stock:8.15}]},
								{move: "Qf6", freq:   33},
								{move: "d5", freq:    14},
								{move: "Bg4", freq:   13},
							]}]},
							{move: "Bg4", freq:   277,book:[{move: "Qf1",stock:3.32}]},
							{move: "d5", freq:     66},
							{move: "Ng4+", freq:   64,book:[{move: "Kg1"}]},
						]}]},
						{move: "Qxd6", freq:  219,master:3,book:[{move: "Nf7",stock:0.99,replies:[
							{move: "Qc5", freq: 198,book:[{move: "d3"}]},
							{move: "Qe7", freq:  24,book:[{move: "h3"}]},
						]}]},
						{move: "Qf8", freq:    26},
					]}]},
					{move: "Bg4", freq:  1867,master:2},
					{move: "Na5", freq:   509},
					{move: "Nxd5", freq:  132},
					{move: "Qc5", freq:    92}
				]}]},
				{move: "Nxe4", freq:  6746,book:[{move: "Qh5+",stock:8.92,replies:[
					{move: "g6", freq:  2959,book:[{move: "Nxg6",replies:[
						{move: "hxg6", freq: 1430,book:[{move: "Qxg6+",replies:[
							{move: "Kd8", freq: 1139,book:[{move: "d3"}]},
							{move: "Kf8", freq:  179,book:[{move: "Qg8#"}]},
							{move: "Qf7", freq:   60},
						]}]},
						{move: "Qf6", freq:   360,book:[{move: "Qxf6+",replies:[
							{move: "Kd8", freq:  1,book:[{move: "Qf8#"}]},
						]}]},
					]}]},
					{move: "Kd8", freq:  321,book:[{move: "Nf7+"}]},
					{move: "Kf8", freq:  224,book:[{move: "Ng6+",stock:26.02,replies:[
						{move: "hxg6", freq:  31,book:[{move: "Qh8#"}]},
						{move: "Ke8", freq:    4},
					]}]},
				]}]},
				{move: "Bb6", freq:   1850,master:1,book:[{move: "Bf7+",stock:2.96}]},
				{move: "Qc5", freq:   1148,book:[{move: "Nc3",stock:4.23}]},
			]}]},
			{move: "Nxe4", freq:  699,book:[{move: "Nxd8",stock:8.23}]},
			{move: "d5",   freq:  337,book:[{move: "Nxd8",stock:7.92}]}
		]}]},
		{move: "Qe7",   freq: 5304,book:[{move: "Nxh8",replies:[
			{move: "Bxf2+",   freq:  1711,book:[{move: "Kxf2",replies:[
				{move: "Nxe4+",   freq:  927,book:[{move: "Kf1",replies:[
					{move: "Nd4",   freq:  110,book:[{move: "Qh5+"}]},
					{move: "Qh4",   freq:  102,book:[{move: "Qe1"}]},
					{move: "Qf6+",   freq:  66,book:[{move: "Qf3"}]},
				]}]},
				{move: "Qc5+",   freq:   228,book:[{move: "d4"}]},
				{move: "d5",   freq:     158},
			]}]},
			{move: "Nxe4",   freq:  1407,book:[{move: "Qh5+",stock:9.28}]},
			{move: "d5",   freq:     814},
		]}]},	
		{move: "O-O",   freq:  303},
		{move: "d5",   freq:   267},
		{move: "Nxe4",   freq: 232},
	]},{move: "Bxf7+"}]},
	{move: "Nxe4", freq:  42226,book:[{move: "Bxf7+",replies:[
		{move: "Ke7", freq: 13593,book:[{move: "d4",replies:[
			{move: "Nxd4",   freq: 285,book:[{move: "c3",replies:[
				{move: "Nc6",    freq: 56,book:[{move: "Bb3"}]},
				{move: "Nf5",    freq: 29,book:[{move: "Qd5"}]},
				{move: "Ne6",    freq: 29,book:[{move: "Bxe6",replies:[
					{move: "dxe6",   freq:  21,book:[{move: "Qxd8+",replies:[
						{move: "kxd8",     freq:  13,book:[{move: "Nxe4"}]},
					]}]},
				]}]},
				{move: "h6",     freq:  5,book:[{move: "Nxe4",replies:[
					{move: "Kxf7",     freq: 3,book:[{move: "cxd4"}]},
				]}]},
			]}]},
			{move: "h6",     freq: 274,book:[{move: "Nxe4",replies:[
				{move: "Kxf7",   freq: 249,book:[{move: "d5"}]},
			]}]},
			{move: "Nxg5",   freq: 155,book:[{move: "Bxg5+",replies:[
				{move: "Kxf7",    freq: 118,book:[{move: "Bxd8",replies:[
					{move: "Nxd8",    freq: 93,book:[{move: "dxe5"}]},
				]}]},
			]}]},
			{move: "Nf6",    freq: 141,book:[{move: "dxe5"}]},
			{move: "d5",     freq:  54,book:[{move: "Nc3"}]},
			{move: "exd4",   freq:  30,book:[{move: "Bd5"}]},
		]}]},
	]}]},
	{move: "Qe7", freq:  11359,book:[{move: "Bxf7+"}]},
	{move: "d6", freq:    6392,book:[{move: "Nxf7"}]},
	{move: "Be7", freq:   4479,book:[{move: "Nxf7"}]},
	{move: "h6", freq:    4252,master:1,book:[{move: "dxe5"}]},
	{move: "Na5", freq:   3752,master:1,book:[]},
]}

const antimain = [
	{move: "Nf6", freq:  14746,book:[{move: "e5",replies:[
		{move: "dxe5", freq:  4063,book:[{move: "Bxf7+",replies:[
			{move: "Ke7", freq:   775,book:[{move: "Qc4",replies:[
				{move: "Qd6", freq: 136,book:[{move: "Re1",replies:[
					{move: "Be6", freq: 17,book:[{move: "Bxe6",replies:[
						{move: "Qxe6", freq:  16,book:[{move: "Qxc7+",replies:[
							{move: "Nd7", freq:  8,book:[{move: "Qxb7"}]},
							{move: "Qd7", freq:  4,book:[{move: "Qxe5"}]},
							{move: "Ke8", freq:  2,book:[{move: "Rxe5"}]},
						]}]},
					]}]},
				]}]},
				{move: "c6", freq:   53,book:[]},
			]}]},
			{move: "Kxf7", freq:  184,book:[{move: "Qxd8"}]},
		]}]},
		{move: "c5", freq:    1273,book:[]},
		{move: "Nd7", freq:    901,book:[]},
	]}]},
	{move: "Be6", freq:   6111,book:[{move: "Nc3"}]},
	{move: "Qf6", freq:   5131,book:[{move: "Qd3"}]},
	{move: "c5", freq:    2781,book:[]},
	{move: "Be7", freq:   1557,book:[]},
]

const antiliver = {move: "d4",replies:[//anti fried liver
	{move: "exd4", freq: 192921,book:[{move: "Nxd4",replies:[
		{move: "Nxd4", freq: 149990,book:[{move: "Qxd4",replies:[
			{move: "d6", freq:  33290,book:[{move: "O-O",stock:1.57,replies:antimain}]},
			{move: "Nf6", freq: 18557,book:[{move: "e5",replies:[
				{move: "Qe7", freq: 3820,book:[{move: "O-O",replies:[
					{move: "Nh7", freq:1638,book:[{move: "Nc3"}]},
					{move: "c5", freq:  777,book:[{move: "exf6"}]},
				]}]},
				{move: "c5", freq:  3476,book:[{move: "Qf4"}]},
				{move: "Nh7", freq: 2994,book:[]},
			]}]},
			{move: "Qf6", freq: 13290,book:[{move: "e5",replies:[
				{move: "Qb6", freq: 4051,book:[{move: "Qf4",replies:[
					{move: "Qg6",  freq: 1113,book:[{move: "O-O"}]},
					{move: "f6",   freq:  485,book:[{move: "O-O"}]},
					{move: "Qb4+", freq:  100,book:[{move: "Bd2"}]},
					{move: "d5",   freq:   93,book:[{move: "Bxd5"}]},
					{move: "d6",   freq:   13,book:[{move: "Qxf7+",replies:[
						{move: "Kd8", freq: 10,book:[{move: "Qxf8+",replies:[
							{move: "Kd7", freq: 10,book:[{move: "e6+",replies:[
								{move: "Kc6", freq: 2,book:[{move: "Qf3+",replies:[
									{move: "Kc5", freq: 1,book:[{move: "Qd5+",replies:[
										{move: "Kb4", freq: 1,book:[{move: "a3+",replies:[
											{move: "Ka4", freq: 1,book:[{move: "Nc3#"}]},
										]}]},
									]}]},
								]}]},
							]}]},
						]}]},
					]}]},
					{move: "Bb4+", freq:   12,book:[{move: "c3"}]},
					{move: "Bc5",  freq:    8,book:[{move: "Qxf7+"}]},
				]}]},
				{move: "Qg6", freq: 2996,book:[{move: "Nc3"}]},
				{move: "Qc6", freq: 1336,book:[{move: "Nc3"}]},
				{move: "Qf5", freq: 1226,book:[{move: "Bd3"}]},
				{move: "Qe7", freq:  676,book:[{move: "O-O"}]},
				{move: "c5",  freq:  127,book:[{move: "Qe3"}]},
			]}]},
			{move: "c5", freq:  12974,book:[{move: "Qd3",stock:3.85,replies:[
				{move: "d6",  freq: 785,book:[{move: "Nc3"}]},
				{move: "Nf6", freq: 555,book:[{move: "Nc3"}]},
				{move: "a6",  freq: 206,book:[{move: "Nc3"}]},
				{move: "Be7", freq: 184,book:[{move: "Qd5"}]},
				{move: "Qe7", freq: 108,book:[{move: "Nc3"}]},
				{move: "Qf6", freq:  83,book:[{move: "Nc3"}]},
			]}]},
		]}]},
		{move: "Bc5", freq:  49398,book:[{move: "Bxf7+",stock:3.59,replies:[
			{move: "Kxf7", freq:  2717,book:[{move: "Qh5+",replies:[
				{move: "g6", freq: 1531,book:[{move: "Qxc5",replies:[
					{move: "Nxd4",  freq:  632,book:[{move: "Qxd4",replies:[
						{move: "Qf6",  freq:  266,book:[{move: "Qd3"}]},
						{move: "Nf6",  freq:  219,book:[{move: "Nc3"}]},
						{move: "Ne7",  freq:   70,book:[{move: "Nc3"}]},
						{move: "d6",   freq:   44,book:[{move: "Qxh8"}]},
					]}]},
					{move: "d6",  freq:    419,book:[{move: "Nxc6"}]},
					{move: "Qf6",  freq:   162,book:[{move: "Qc4+"}]},
					{move: "Nf6",  freq:   120,book:[{move: "Nxc6"}]},
					{move: "Ng8e7",  freq:  68,book:[{move: "Nc3"}]},
					{move: "Qe7",  freq:    63,book:[{move: "Qc4+"}]},
				]}]},
				{move: "Kf8",freq:  936,book:[{move: "Qxc5+"}]},
			]}]},
			{move: "Kf8",  freq:   579,book:[{move: "Nxc6"}]},
			{move: "Ke7",  freq:    18,book:[{move: "Nxc6+"}]},
		]}]},
		{move: "Ne5", freq:  40127,book:[{move: "Bb3",replies:[
			{move: "Nf6", freq: 12328,book:[{move: "Nc3",replies:[
				{move: "Bb4",  freq:  5528,book:[{move: "f4",replies:[
					{move: "Bxc3+",  freq:  172,book:[{move: "bxc3"}]},
					{move: "Ng6",  freq:    118,book:[{move: "e5"}]},
					{move: "Nc6",  freq:     66,book:[{move: "Nxc6"}]},
					{move: "Nxe4",  freq:    53,book:[{move: "O-O"}]},
					{move: "Ne5g4",  freq:   17,book:[{move: "e5"}]},
				]}]},
				{move: "Bc5",  freq:  2861,book:[{move: "f4"}]},
				{move: "d6",   freq:   952,book:[{move: "f4"}]},
			]}]},
			{move: "Bc5", freq: 10353,book:[{move: "Be3"}]},
			{move: "d6",  freq:  3797,book:[]},
			{move: "c5",  freq:  2320,book:[]},
		]}]},
		{move: "Nf6", freq:  28286,book:[{move: "Nc3",replies:[
			{move: "Nxd4",freq:  25589,book:[{move: "Qxd4"}]},
			{move: "Bc5",freq:   11824,book:[{move: "Nxc6"}]},
			{move: "Bb4",freq:   11299,book:[{move: "Nxc6",replies:[
				{move: "bxc6", freq:  4022,book:[{move: "e5",replies:[
					{move: "Ne4",    freq:  396,book:[{move: "O-O"}]},
					{move: "Bxc3+",  freq:  238,book:[{move: "bxc3"}]},
					{move: "Qe7",    freq:  206,book:[{move: "O-O"}]},
					{move: "Nd5",    freq:  102,book:[{move: "Qg4"}]},
					{move: "Nh7",    freq:   92,book:[{move: "Qg4"}]},
					{move: "d5",     freq:   27,book:[{move: "exf6",replies:[
						{move: "Qxf6",  freq:  8,book:[{move: "Bd3"}]},
						{move: "dxc4",  freq:  7,book:[{move: "Qxd8+",replies:[
							{move: "Kxd8",  freq: 4,book:[{move: "fxg7",replies:[
								{move: "Rg8", freq:  3,book:[{move: "Bxh6+"}]},
								{move: "Rh7", freq:  1,book:[{move: "g8=Q+"}]},
								{move: "Re8+", freq: 1,book:[{move: "Be3"}]},
							]}]},
						]}]},
						{move: "Bxc3+", freq:  3,book:[]},
					]}]},
				]}]},
				{move: "Bxc3+",freq:  1402,book:[{move: "bxc3"}]},
				{move: "dxc6", freq:   345,book:[{move: "Qxd8+"}]},
			]}]},
			{move: "Ne5",freq:    6623,book:[{move: "Bb3"}]},
			{move: "d6",freq:     3743,book:[{move: "Nxc6"}]},
			{move: "Be7",freq:    1726,book:[{move: "Nf5"}]},
		]}]},
		{move: "Qf6", freq:  26809,book:[{move: "Nb5",replies:[
			{move: "Bd6",freq:  346,book:[{move: "Nxd6+",replies:[
				{move: "cxd6",freq:  90,book:[{move: "Nc3"}]},
				{move: "Qxd6",freq:  46,book:[{move: "Qxd6"}]},
			]}]},
			{move: "Bc5",freq:  251,book:[{move: "O-O"}]},
			{move: "Qd8",freq:  117,book:[{move: "Qd5"}]},
			{move: "Qe5",freq:   80,book:[{move: "Nb1c3"}]},
			{move: "Kd8",freq:   52,book:[{move: "Nb1c3"}]},
			{move: "Bb4+",freq:  40,book:[{move: "Bd2"}]},
		]}]},
		{move: "d6", freq:   19769,book:[{move: "O-O",replies:[
			{move: "Nxd4",freq:    13480,book:[{move: "Qxd4",replies:antimain}]},
			{move: "Nf6", freq:     7058,book:[{move: "Re1"}]},
			{move: "Ne5", freq:     3388,book:[{move: "Bb3"}]},
			{move: "Bd7", freq:     3107,book:[{move: "Nxc6",replies:[
				{move: "Bxc6", freq:     617,book:[{move: "Nc3"}]},
				{move: "bxc6", freq:      33},
			]}]},
			{move: "Be7", freq:     1651},
			{move: "Ng8e7",freq:     531},
		]}]},
		{move: "Ng8e7",freq:  8737,book:[]},
	]}]},
	{move: "d6", freq:    30220,book:[{move: "dxe5",replies:[
		{move: "dxe5", freq:  20282,book:[{move: "Qxd8+",replies:[
			{move: "Kxd8", freq:  8834,book:[{move: "Bxf7"}]},
			{move: "Nxd8", freq:  7660,book:[{move: "Nxe5"}]},
		]}]},
		{move: "Bg4",  freq:  10770,book:[{move: "h3"}]},
		{move: "Nxe5", freq:  10562,book:[{move: "Nxe5",replies:[
			{move: "dxe5",  freq:  11262,book:[{move: "Bxf7+",replies:[
				{move: "Ke7",  freq:  3479,book:[{move: "Qf3",replies:[
					{move: "Nf6",  freq:  346,book:[{move: "Qb3",replies:[
						{move: "Nxe4",  freq:   15,book:[{move: "Bg6"}]},
						{move: "Qd6",   freq:   15,book:[{move: "Nc3"}]},
					]}]},
				]}]},
				{move: "Kxf7", freq:   611,book:[{move: "Qxd8"}]},
			]}]},
		]}]},
		{move: "Na5",  freq:    647,book:[]},
	]}]},
	{move: "Bd6", freq:   10285,book:[{move: "dxe5",replies:[
		{move: "Nxe5", freq:  4933,book:[{move: "Nxe5",replies:[
			{move: "Bxe5", freq: 1,book:[{move: "f4",replies:[
				{move: "Nf6", freq: 1,book:[{move: "c4"}]},
			]}]},
		]}]},
		{move: "Bxe5", freq:  3043,book:[{move: "Nxe5",replies:[
			{move: "Nxe5", freq: 1,book:[{move: "Be2"}]},
		]}]},
	]}]},
	{move: "Nf6", freq:    8773,book:[{move: "Nxe5"}]},
	{move: "Nxd4", freq:   4884,book:[{move: "Nxe5"}]},
	{move: "f6", freq:     4610,book:[{move: "Nh4"}]},
	{move: "Bb4+", freq:   3253,book:[{move: "c3"}]}
]}

const italian = {move: "Bc4",replies:[
	{move: "Bc5",  freq: 5423490,master:17519,book:[evans]},
	{move: "Nf6",  freq: 4564594,master:13633,book:[liver]},
	{move: "h6",   freq: 1736141,book:[antiliver]},
	{move: "d6",   freq:  872575,master:369,book:[{move: "d4",replies:[//paris
		{move: "exd4", freq:   54879,book:[{move: "Nxd4",replies:philiparis}]},
		{move: "Bg4", freq:    34166,book:[{move: "h3",replies:[
			{move: "Bxf3", freq:  6948,book:[{move: "Qxf3",replies:[
				{move: "Nf6",  freq:  3259,book:[{move: "d5"}]},
				{move: "Qf6",  freq:  1871,book:[{move: "Qb3"}]},
				{move: "Nxd4", freq:   673,book:[{move: "Qxf7#"}]},
				{move: "Qe7",  freq:   238,book:[]},
				{move: "f6",   freq:   198,book:[]},
				{move: "exd4", freq:    66,book:[{move: "Qxf7#"}]},
			]}]},
			{move: "Bh5",  freq:  4663,book:[{move: "g4"}]},
		]}]},
		{move: "h6", freq:      8846,book:[{move: "dxe5"}]},
		{move: "Nf6", freq:     7725,book:[{move: "d5"}]},
	]}]},
	{move: "Be7",  freq: 721035,master:936,book:[{move: "d4",replies:[
		{move: "exd4", freq: 43248,book:[{move: "Nxd4",replies:[
			{move: "d6", freq:  28428,book:[{move: "Nxc6",stock:0.75}]},
			{move: "Nxd4", freq:26169,book:[{move: "Qxd4",stock:1.11}]},
			{move: "Nf6", freq: 24995,book:[{move: "Nc3"}]},
			{move: "Ne5", freq: 14263,book:[{move: "Bb3",stock:1.01}]},
			{move: "Bc5", freq:  1402,book:[]},
			{move: "Bf6", freq:  1280,book:[]},
		]},{move: "O-O"}]},
		{move: "d6", freq:   11463,book:[{move: "dxe5"}]},
		{move: "Nf6", freq:   1913,book:[]},
		{move: "Nxd4", freq:   891,book:[]},
	]}]},
	{move: "Nd4",  freq:  665668,book:[{move: "Nxd4",replies:[
		{move: "exd4", freq: 138728,book:[{move: "O-O",replies:[
			{move: "d6", freq:   8528,book:[{move: "c3",replies:[
				{move: "dxc3", freq: 4906,book:[{move: "Nxc3",replies:[
					{move: "Nf6",  freq:  2339,book:[{move: "Qb3"}]},
					{move: "Be6",  freq:   742,book:[{move: "Bxe6",replies:[
						{move: "fxe6",   freq:   468,book:[{move: "Qb3"}]},
					]}]},
					{move: "c6",   freq:   445,book:[]},
					{move: "Be7",  freq:   312,book:[]},
				]}]},
				{move: "c5",   freq:  910,book:[{move: "cxd4"}]},
				{move: "Nf6",  freq:  451,book:[{move: "cxd4"}]},
				{move: "Be6",  freq:  265,book:[{move: "Bxe6"}]},
			]}]},
			{move: "Bc5", freq:  8021,book:[{move: "Bxf7+",stock:4.80,replies:[
				{move: "Kxf7", freq:  1326,book:[{move: "Qh5+"}]},
				{move: "Kf8",  freq:   207,book:[]},
			]}]},
			{move: "Nf6", freq:  4624,book:[{move: "Re1",stock:1.84,replies:[
				{move: "d6", freq:  437,book:[{move: "c3",replies:[
					{move: "dxc3", freq:  208,book:[{move: "Qb3",replies:[
						{move: "Qe7", freq:    15,book:[{move: "Nxc3"}]},
						{move: "Be6", freq:     5,book:[{move: "Bxe6",replies:[
							{move: "fxe6",   freq:   4,book:[{move: "Nxc3"}]},
						]}]},
						{move: "Qd7", freq:     4,book:[]},
						{move: "d5",  freq:     2,book:[]},
					]}]},
					{move: "Be7", freq:    72,book:[]},
					{move: "c5", freq:     32,book:[]},
				]}]},
				{move: "Be7", freq: 229,book:[{move: "e5",replies:[
					{move: "Ng8", freq: 84,book:[{move: "Qg4",replies:[
						{move: "g6", freq:  30,book:[{move: "Qxd4"}]},
						{move: "d5", freq:   6,book:[]},
					]}]},
					{move: "d5", freq:  15,book:[]},
					{move: "Ng4", freq:  7,book:[]},
					{move: "O-O", freq:  5,book:[]},
				]}]},
				{move: "Bc5", freq: 211,book:[]},
				{move: "d5", freq:   65,book:[]},
				{move: "c6", freq:   28,book:[]},
				{move: "Bd6", freq:  15,book:[]},
			]}]},
			{move: "c6", freq:   2159,book:[{move: "Re1"}]},
			{move: "c5", freq:   1773,book:[]},
			{move: "Bd6", freq:  1172,book:[{move: "Qh5"}]},
			{move: "Qf6", freq:  1131,book:[]},
		]}]},
		{move: "Qg5", freq:     576,book:[{move: "Nf3"}]}
	]}]},
	{move: "f5", freq:   140310,book:[{move: "d4",replies:[
		{move: "fxe4", freq:  11117,book:[{move: "Nxe5",replies:[
			{move: "d5",  freq:    4785,book:[{move: "Bb5",replies:[
				{move: "Bd7",  freq:  756,book:[{move: "Bxc6"}]},
				{move: "Qd6",  freq:  589,book:[{move: "f3"}]},
				{move: "Nf6",  freq:  338,book:[{move: "Nxc6"}]},
				{move: "Qf6",  freq:  309,book:[{move: "Nxc6"}]},
				{move: "Ne7",  freq:   69,book:[{move: "c4"}]},
			]}]},
			{move: "Nxe5",  freq:  3584,book:[]},
			{move: "Nf6",  freq:   1128,book:[]},
		]}]},
		{move: "exd4", freq:   4966,book:[{move: "e5"}]},
		{move: "Nf6", freq:    2006,book:[{move: "dxe5"}]},
		{move: "d6",  freq:     497,book:[]},
	]}]},
	{move: "a6", freq:    68853,book:[{move: "d4",replies:[
		{move: "exd4", freq:  8630,book:[{move: "O-O",replies:[
			{move: "Bc5", freq:  423,book:[{move: "c3",replies:[
				{move: "dxc3", freq:  674,book:[{move: "Bxf7+",replies:[
					{move: "Kxf7",  freq:  262,book:[{move: "Qd5+",replies:[
						{move: "Ke8",   freq:  192,book:[{move: "Qxh5+",replies:[
							{move: "g6",   freq:   47,book:[{move: "Qxc5"}]},
							{move: "Kf8",   freq:    9,book:[{move: "Qxc5+"}]},
						]}]},
						{move: "Kf8",   freq:   60,book:[{move: "Qxc5+"}]},
					]}]},
					{move: "Kf8",   freq:   59,book:[]},
				]}]},
				{move: "d6",   freq:  131,book:[]},
				{move: "b5",   freq:  100,book:[]},
				{move: "d3",   freq:   61,book:[]},
			]}]},
			{move: "b5",  freq:  398,book:[{move: "Bd5"}]},
			{move: "h6",  freq:  241,book:[{move: "Nxd4"}]},
			{move: "d6",  freq:  158,book:[{move: "Nxd4"}]},
			{move: "Nf6", freq:  151,book:[{move: "Ng5"}]},
			{move: "Be7", freq:   73,book:[{move: "Re1"}]},
		]}]},
		{move: "b5",   freq:  2111,book:[{move: "Bd5"}]},
		{move: "d6",   freq:  1155,book:[{move: "dxe5"}]},
	]}]},
	{move: "f6", freq:    62739,book:[{move: "d4",replies:[
		{move: "exd4", freq:  7845,book:[{move: "O-O"}]},
		{move: "d6", freq:    5211,book:[{move: "O-O"}]},
	]}]},
	{move: "Qf6", freq:   60059,book:[{move: "Nc3"}]},
	{move: "g6", freq:    50977,book:[{move: "d4"}]},
	{move: "Bb4", freq:   26414,book:[{move: "c3"}]},
]};

const ponziani = {move: "c3",replies:[
	{move: "Nf6", freq: 68476,book:[{move: "d4",replies:[//jaenisch
		{move: "exd4", freq:  61882,book:[{move: "e5",replies:[//knight right
			{move: "Nd5", freq:  18028,book:[{move: "Qb3",replies:[
				{move: "Nb6", freq: 1615,book:[{move: "cxd4",replies:[
					{move: "d5", freq:  632,book:[{move: "Bb5",replies:[
						{move: "Bd7", freq: 96,book:[]},
						{move: "Be7", freq: 78,book:[]},
						{move: "Bb4+", freq:29,book:[{move: "Qxb4"}]},
						{move: "Be6", freq: 27,book:[]},
					]}]},
					{move: "Bb4+", freq:405,book:[{move: "Nc3"}]},
					{move: "d6", freq:  384,book:[]},
					{move: "Be7", freq:  98,book:[]},
				]}]},
				{move: "Nd5e7", freq: 121,book:[]},
				{move: "Nc6e7", freq: 103,book:[]},
			]}]},
			{move: "Ng4", freq:  10757,book:[{move: "cxd4",replies:[
				{move: "Bb4+", freq: 1877,book:[{move: "Nc3",replies:[
					{move: "O-O", freq:  598,book:[{move: "h3"}]},
					{move: "d6", freq:   468,book:[{move: "h3",stock:1.51}]},
					{move: "Bxc3+", freq:131,book:[]},
					{move: "d5", freq:    87,book:[]},
					{move: "Qe7", freq:   78,book:[]},
					{move: "h5", freq:    32,book:[]},
					{move: "f6", freq:    23,book:[]},
				]}]},
				{move: "d6", freq:   1095,book:[{move: "h3"}]},
				{move: "d5", freq:    409,book:[]},
				{move: "h5", freq:     54,book:[]},
			]}]},
			{move: "Ne4", freq:  11550,book:[{move: "Qe2",replies:[
				{move: "Nc5", freq:  1022,book:[{move: "cxd4",replies:[
					{move: "Na6", freq:  531,book:[{move: "Nc3"}]},
					{move: "Ne6", freq:  408,book:[{move: "d5",replies:[
						{move: "Nc6d4", freq: 49,book:[{move: "Nxd4",replies:[//Qe4 right away also works here
							{move: "Nxd4", freq:  1,book:[{move: "Qe4"}]}
						]}]},
						{move: "Ne6d4", freq: 41,book:[{move: "Nxd4",replies:[
							{move: "Nxd4", freq:  1,book:[{move: "Qe4"}]}
						]}]},
						{move: "Bb4+", freq:  13,book:[]},
					]}]},
					{move: "Na4", freq:   63,book:[{move: "d5"}]},
				]}]},
				{move: "d5", freq:   1054,book:[{move: "exd6",replies:[
					{move: "Bf5", freq: 108,book:[{move: "Nb1d2"}]},
					{move: "f5", freq:  100,book:[]},
					{move: "Bxd6", freq: 34,book:[]},
				]}]},
				{move: "f5", freq:    164,book:[]},
				{move: "dxc3", freq:   57,book:[]},
			]}]},
			{move: "Qe7", freq:  8978,book:[{move: "cxd4",replies:[
				{move: "d6", freq:  1709,book:[{move: "Bb5",replies:[
					{move: "dxe5", freq:  555,book:[{move: "dxe5"}]},
					{move: "Bd7", freq:   513,book:[{move: "O-O"}]},
					{move: "Bg4", freq:   110,book:[{move: "h3"}]},
					{move: "a6", freq:     65,book:[]},
				]}]},
				{move: "Nd5", freq:  694,book:[]},
				{move: "Qb4+", freq: 139,book:[]},
				{move: "d5", freq:   105,book:[]},
			]}]},
			{move: "Ng8", freq:   2652,book:[{move: "cxd4"}]},
			{move: "Nxe5", freq:  1154,book:[]},
			{move: "dxc3", freq:  1211,book:[]},
			{move: "d5", freq:     556,book:[]},
		]}]},
		{move: "Nxe4", freq:   18867,book:[{move: "d5",replies:[//knight left
			{move: "Ne7", freq:  6249,book:[{move: "Nxe5",replies:[//backward
				{move: "d6", freq:   968,book:[{move: "Bb5+",replies:[
					{move: "c6", freq:  377,book:[{move: "dxc6",replies:[
						{move: "bxc6", freq:  279,book:[{move: "Nxc6",replies:[
							{move: "Qb6", freq: 163,book:[{move: "Nd4+",replies:[
								{move: "Bd7", freq: 165,book:[{move: "Bxd7",replies:[
									{move: "Kxd7", freq: 162,book:[{move: "O-O"}]},
								]}]},
								{move: "Kd8", freq:  18,book:[]},
							]}]},
							{move: "Nxc6", freq: 92,book:[{move: "Bxc6+",replies:[
								{move: "Bd7", freq:  15,book:[{move: "Bxe4",replies:[
									{move: "Qe7", freq:  29,book:[{move: "O-O"}]},
									{move: "Rb8", freq:  27,book:[]},
									{move: "Rc8", freq:  11,book:[]},
									{move: "Be7", freq:   5,book:[]},
								]}]},
							]}]},
							{move: "Bd7", freq:  15,book:[]},
						]}]},
						{move: "dxe5", freq:   35,book:[{move: "cxb7+",replies:[
							{move: "Bd7", freq:   27,book:[{move: "Bxa8"}]},
						]}]},
						{move: "Nxc6", freq:   25,book:[]},
						{move: "Qb6", freq:    23,book:[]},
					]}]},
					{move: "Bd7", freq:  24,book:[{move: "Bxd7+",replies:[
						{move: "Qxd7", freq: 14,book:[{move: "Nxd7",replies:[
							{move: "Kxd7", freq:  13,book:[{move: "Qa4+"}]},
						]}]},
					]}]},
				]}]},
				{move: "Ng6", freq:  492,book:[{move: "Nxg6",replies:[
					{move: "hxg6", freq: 220,book:[{move: "Bd3",replies:[
						{move: "Nc5", freq:  52,book:[{move: "O-O"}]},
						{move: "Nf6", freq:  35,book:[{move: "O-O",replies:[
							{move: "Be7", freq:  5,book:[]},
							{move: "Bd6", freq:  4,book:[]},
							{move: "Nxd5", freq: 1,book:[{move: "Bxg6"}]},
						]}]},
						{move: "Qe7", freq:  10,book:[{move: "O-O"}]},
					]}]},
				]}]},
				{move: "Nf6", freq:  125,book:[]},
				{move: "Nd6", freq:   29,book:[]},
				{move: "g6", freq:    27,book:[]},
				{move: "f6", freq:    13,book:[{move: "Nf3"}]},
			]}]},
			{move: "Nb8", freq:   2900,book:[]},
			{move: "Bc5", freq:   2356,book:[]},
			{move: "Na5", freq:    217,book:[]},
			{move: "Nxf2", freq:   132,book:[]},
		]}]},
		{move: "d6", freq:  11202,book:[{move: "h3"}]},
	]}]},
	{move: "Bc5", freq: 29481,book:[{move: "d4",replies:[//pin line
		{move: "exd4", freq:  17111,book:[{move: "cxd4",replies:[//exchange
			{move: "Bb4+",  freq: 10450,book:[{move: "Nc3",replies:[//check line
				{move: "d6", freq:  1843,book:[{move: "d5",replies:[//just before
					{move: "Ne5", freq: 290,book:[{move: "Qa4+"}]},//bishop trap!
					{move: "Bxc3+", freq:  67,book:[{move: "Bxc3"}]},
					{move: "Nc6e7", freq:  52,book:[{move: "Qa4+"}]},
				]}]},
				{move: "Nf6", freq:  1834,book:[{move: "d5",replies:[
					{move: "Ne7", freq: 199,book:[{move: "Bd3",replies:[
						{move: "d6", freq: 46,book:[{move: "Qa4+"}]},
						{move: "O-O", freq:44,book:[{move: "e5",replies:[
							{move: "Nf6xd5", freq:2,book:[{move: "Bxh7+",replies:[
								{move: "Kh8",  freq:1,book:[{move: "Ng5"}]},
								{move: "Kxh7", freq:1,book:[{move: "Ng5+"}]},
							]}]},
							{move: "Ne7xd5", freq:1,book:[]},
						]}]},
						{move: "Ng6", freq:15,book:[]},
					]}]},
					{move: "Nxe4", freq: 63,book:[]},
					{move: "Bxc3+", freq:18,book:[]},
					{move: "Nb8", freq:  15,book:[]},
					{move: "Na5", freq:  11,book:[]},
				]}]},
				{move: "d5", freq:   1108,book:[{move: "exd5",replies:[
					{move: "Qxd5", freq: 533,book:[{move: "Be2",stock:1.25}]},
					{move: "Bxc3+", freq: 37,book:[]},
					{move: "Nc6e7", freq:  5,book:[]},
				]}]},
				{move: "Bxc3+", freq: 959,book:[]},
				{move: "Ng8e7", freq: 383,book:[]},
				{move: "Qe7", freq:   320,book:[]},
			]}]},
			{move: "Bb6", freq:   7511,book:[{move: "Nc3",replies:[//retreat line
				{move: "d6", freq:    1757,book:[{move: "Bb5",replies:[//retreat phili counter pin
					{move: "Bd7", freq:  345,book:[{move: "h3",stock:1.33}]},
					{move: "Bg4", freq:   66,book:[]},
					{move: "a6", freq:    61,book:[{move: "Ba4",stock:1.61}]},
					{move: "Ne7", freq:   28,book:[]},
					{move: "Nf6", freq:   13,book:[]},
				]}]},
				{move: "Ng8e7", freq:  401,book:[]},
				{move: "Nf6", freq:    394,book:[{move: "e5"}]},
				{move: "a6", freq:     229,book:[]},
				{move: "Qf6", freq:    120,book:[{move: "e5",replies:[
					{move: "Qg6", freq:  57,book:[{move: "Bd3",replies:[
						{move: "Qxg2", freq: 9,book:[{move: "Rg1",replies:[
							{move: "Qh3", freq:  8,book:[{move: "Bf1"}]},
						]}]},
						{move: "Qe6", freq:  4,book:[{move: "d5"}]},
						{move: "Qg4", freq:  2,book:[]},
						{move: "Qh5", freq:  2,book:[]},
					]}]},
					{move: "Qe7", freq:  15,book:[]},
					{move: "Qe6", freq:   9,book:[{move: "d5"}]},
				]}]},
				{move: "h6", freq:      93,book:[]},
				{move: "d5", freq:      92,book:[]},
			]}]},
			{move: "Nxd4", freq:  200,book:[]},
			{move: "Bxd4", freq:  50,book:[]},
		]}]},
		{move: "Bb6", freq:  389,book:[{move: "d5",stock:2.53}]},
		{move: "Bd6", freq:  103,book:[]},
	]}]},
	{move: "d5", freq:  15990,book:[{move: "Qa4",replies:[//refutation
		{move: "dxe4", freq: 1572,book:[{move: "Nxe5",replies:[
			{move: "Bd7", freq:  844,book:[{move: "Nxd7",replies:[
				{move: "Qxd7", freq:  130,book:[{move: "Qxe4+",replies:[
					{move: "Be7", freq: 636,book:[{move: "d4"}]},
					{move: "Qe7", freq: 106,book:[{move: "Qxe7+"}]},
					{move: "Ng8e7", freq:  63,book:[{move: "d4"}]},
				]}]},
			]}]},
			{move: "Qd5", freq:  363,book:[{move: "Nxc6",replies:[
				{move: "bxc6", freq:  226,book:[{move: "Bc4",replies:[
					{move: "Qd6", freq:  118,book:[{move: "O-O"}]},
					{move: "Qc5", freq:   40,book:[{move: "d4"}]},
					{move: "Qd7", freq:   28,book:[{move: "O-O"}]},
					{move: "Qg5", freq:   13,book:[{move: "Qxc6+"}]},
				]}]},
				{move: "Qxc6", freq:   45,book:[{move: "Bb5"}]},
				{move: "Bd7", freq:    11,book:[]},
			]}]},
			{move: "Nf6", freq:  130,book:[{move: "Bc4"}]},
			{move: "Qd6", freq:   80,book:[]},
			{move: "Ne7", freq:   59,book:[]},
			{move: "Bd6", freq:   38,book:[]},
			{move: "Qf6", freq:   20,book:[]},
			{move: "Qg5", freq:   15,book:[]},
		]}]},
		{move: "f6", freq:    652,book:[{move: "Bb5",replies:[
			{move: "Ne7", freq:  450,book:[{move: "exd5",replies:[
				{move: "Qxd5", freq: 279,book:[{move: "d4"}]},
			]}]},
			{move: "dxe4", freq:  36,book:[]},
			{move: "Qd6", freq:   35,book:[]},
			{move: "Bd7", freq:   30,book:[]},
		]}]},
		{move: "Bd7", freq:   587,book:[{move: "exd5",replies:[
			{move: "Nd4", freq:   456,book:[{move: "Qd1",replies:[
				{move: "Nxf3+", freq: 424,book:[{move: "Qxf3",replies:[
					{move: "Nf6", freq: 297,book:[{move: "Bc4"}]},
					{move: "Bd6", freq:  67,book:[]},
					{move: "f5", freq:   35,book:[]},
					{move: "Qf6", freq:   8,book:[]},
				]}]},
				{move: "Nf5", freq:    12,book:[]},
				{move: "Bg4", freq:    11,book:[]},
			]}]},
			{move: "Nc6e7", freq:  42,book:[{move: "Bb5"},{move: "Bb3"}]},
			{move: "Nb4", freq:    25,book:[{move: "Bb5"},{move: "Bb3"}]},
			{move: "e4", freq:      5,book:[{move: "dxc6"}]},
		]}]},
		{move: "Nf6", freq:   295,book:[{move: "Nxe5",replies:[
			{move: "Bd7", freq:   132,book:[{move: "Nxd7",replies:[
				{move: "Qxd7", freq:   116,book:[{move: "exd5"}]},
			]}]},
			{move: "Bd6", freq:   129,book:[{move: "Nxc6",replies:[
				{move: "bxc6", freq:   123,book:[{move: "d3"}]},
			]}]},
			{move: "dxe4", freq:   98,book:[]},
			{move: "Nxe4", freq:   54,book:[]},
			{move: "Qd6", freq:    27,book:[]},
			{move: "Qe7", freq:    13,book:[]},
		]}]},
		{move: "Qd6", freq:   222,book:[]},
	]}]},
	{move: "d6", freq:  15748,book:[{move: "d4",replies:[//semi-phili
		{move: "exd4", freq: 8342,book:[{move: "cxd4",replies:[
			{move: "Bg4", freq:  5004,book:[]},
			{move: "Nf6", freq:  2871,book:[]},
			{move: "Be7", freq:  1133,book:[]},
			{move: "Bd7", freq:   544,book:[]},
			{move: "d5", freq:    445,book:[]},
			{move: "g6", freq:    264,book:[]},
			{move: "h6", freq:    190,book:[]},
		]}]},
		{move: "Bg4", freq:  5147,book:[{move: "Qb3",replies:[
			{move: "Bxf3", freq:  29,book:[{move: "gxf3"}]},
			{move: "Na5", freq:    8,book:[{move: "Qa4+",replies:[
				{move: "c6", freq: 6,book:[{move: "b4"}]},
				{move: "Nc6", freq: 6,book:[{move: "d5"}]},
			]}]},
			{move: "b6", freq:     7,book:[]},
			{move: "Rb8", freq:    7,book:[]},
			{move: "Qd7", freq:    4,book:[]},
		]}]},
		{move: "Nf6", freq:  1343,book:[{move: "h3",replies:[
			{move: "exd4", freq: 167,book:[{move: "cxd4",replies:[
				{move: "Nxe4", freq:  78,book:[{move: "d5"}]},
				{move: "Be7", freq:   70,book:[]},
				{move: "Bd7", freq:   13,book:[]},
			]}]},
			{move: "Be7", freq:  100,book:[{move: "Be3",replies:[
				{move: "O-O", freq: 13,book:[{move: "d5"}]},
				{move: "Nxe4", freq: 4,book:[{move: "d5"}]},
				{move: "cxd4", freq: 1,book:[]},
			]}]},
			{move: "Nxe4", freq:  90,book:[{move: "d5"}]},
			{move: "Bd7", freq:   14,book:[]},
			{move: "Be6", freq:    3,book:[{move: "d5"}]},
		]}]},
		{move: "Be7", freq:   652,book:[]},
		{move: "f5", freq:    513,book:[]},
		{move: "f6", freq:    373,book:[{move: "Bc4",replies:[
			{move: "Bg4", freq:   261,book:[{move: "Qb3"}]},
			{move: "Ng8e7", freq: 176,book:[]},
			{move: "exd4", freq:  150,book:[]},
			{move: "Qe7", freq:    78,book:[]},
			{move: "g6", freq:     70,book:[]},
			{move: "a6", freq:     64,book:[]},
			{move: "Na5", freq:    61,book:[]},
			{move: "Bd7", freq:    47,book:[]},
			{move: "Be7", freq:    19,book:[]},
		]}]},
		{move: "Bd7", freq:   362,book:[]},
		{move: "Be6", freq:   152,book:[]},
	]}]},
	{move: "a6", freq:   3805,book:[{move: "d4"}]},
	{move: "f5", freq:   2849,book:[{move: "d4"}]},
	{move: "h6", freq:   2477,book:[{move: "d4"}]},
	{move: "Be7", freq:  1723,book:[{move: "d4"}]},
	{move: "g6", freq:   1225,book:[{move: "d4"}]},
	{move: "Qf6", freq:   469,book:[{move: "d4"}]},
	{move: "b6", freq:    464,book:[{move: "d4"}]},
	{move: "Ng8e7", freq: 402,book:[{move: "d4"}]},
]}

const modern_attack = {move: "d4",replies:[
	{move: "Nxe4", freq: 174970,book:[{move: "Bd3",replies:[
		{move: "d5",  freq: 40925,book:[{move: "Nxe5",replies:[
			{move: "Bd6",  freq: 20058,book:[{move: "O-O",replies:[
				{move: "O-O",  freq: 11812,book:[{move: "c4",replies:[
					{move: "c6",  freq:   3949,book:[{move: "Nc3",replies:[
						{move: "Nxc3",  freq: 1708,book:[{move: "bxc3",replies:[
							{move: "dxc4",  freq: 492,book:[{move: "Nxc4"}]},
							{move: "Bxe5",  freq: 447},
							{move: "Nd7",  freq:  425},
							{move: "Be6",  freq:  113},
						]}]},
						{move: "Bxe5",  freq:  204},
						{move: "Bf5",  freq:   191},
						{move: "f5",   freq:   185},
					]}]},
					{move: "Bxe5",  freq: 1037,book:[{move: "dxe5"}]},
					{move: "Nf6",  freq:  324},
				]}]},
				{move: "Bxe5",  freq: 1275},
			]}]},
			{move: "Nd7",  freq: 11183,book:[{move: "Nxd7",replies:[
				{move: "Bxd7",  freq: 4779,book:[{move: "O-O",replies:[
					{move: "Bd6",  freq: 2274,book:[{move: "Nc3",replies:[
						{move: "Nxc3",  freq:  446,book:[{move: "Bxc3",replies:[
							{move: "O-O",  freq: 443,book:[{move: "Qh5"}]},
							{move: "Qh4",  freq:  61,book:[]},
						]}]},
						{move: "Qh4",  freq:    29,book:[]},
						{move: "O-O",  freq:    25,book:[]},
					]}]},
					{move: "Be7",  freq:  993},
					{move: "Qh4",  freq:  487},
				]}]},
			]}]},
			{move: "Be7",  freq:  3584},
			{move: "Nc6",  freq:  2772},
		]}]},
		{move: "Nc6",  freq: 2657},
		{move: "Nf6",  freq: 1154},
	]}]},
	{move: "exd4", freq: 173826,book:[{move: "e5",replies:[
		{move: "Nd5", freq:  27672,book:[{move: "Qxd4",replies:[
			{move: "c6", freq:  8844,book:[{move: "Bc4",replies:[
				{move: "Nb6", freq: 1287,book:[{move: "O-O",replies:[
					{move: "Nxc4", freq:  1,book:[{move: "Qxc4",replies:[
						{move: "Be7", freq:  1,book:[{move: "Qg4",replies:[
							{move: "O-O", freq:  1,book:[{move: "Bh6",replies:[
								{move: "g6", freq:  1,book:[{move: "Bxf8"}]},
							]}]},
						]}]},
					]}]},
				]}]},
				{move: "Qa5+", freq: 780,book:[{move: "Nb1d2",replies:[
					{move: "Bc5", freq:  12,book:[{move: "Qh4"}]},
				]}]},
				{move: "Be7", freq:  689,book:[{move: "Qg4",replies:[
					{move: "O-O", freq:  3,book:[{move: "Bh6",replies:[
						{move: "Qa5+", freq:  2,book:[{move: "Nc3",replies:[
							{move: "g6", freq:  1,book:[{move: "Bxf8"},{move: "Bxd5"}]},
						]}]},
						{move: "g6", freq:    1,book:[{move: "Qd4"}]},
					]}]},
					{move: "g6", freq:   2,book:[]},
				]}]},
				{move: "Qb6", freq:  381,book:[]},
			]}]},
			{move: "Nb6", freq: 8182,book:[{move: "Qe4",replies:[
				{move: "Nc6", freq:  49,book:[{move: "Nc3",replies:[
					{move: "Be7", freq:  325,book:[{move: "Be3",replies:[
						{move: "O-O", freq:  17,book:[{move: "O-O-O",replies:[
							{move: "d6",  freq:   7,book:[{move: "h4"}]},
							{move: "Re8",  freq:  4,book:[{move: "e6",replies:[
								{move: "fxe6", freq:  1,book:[{move: "Bd3",replies:[
									{move: "g6",  freq: 1,book:[{move: "Qg4"}]},
								]}]},
							]}]},
						]}]},
						{move: "d5",  freq:   6,book:[]},
					]}]},
					{move: "Bb4", freq:  195,book:[{move: "Bg5"}]},
				]}]},
				{move: "Be7", freq:  21,book:[{move: "Nc3",replies:[
					{move: "O-O", freq:  10,book:[{move: "Bd3",replies:[
						{move: "g6",  freq:   18,book:[{move: "Bh6",replies:[
							{move: "Re8", freq:  7,book:[{move: "O-O-O",replies:[
								{move: "d5", freq:  2,book:[{move: "Qf4"}]},
							]}]},
						]}]},
					]}]},
				]}]},
			]}]},
		]}]},
		{move: "Ne4", freq:  25470,book:[{move: "Qxd4",replies:[
			{move: "d5", freq:  16677,book:[{move: "exd6",replies:[
				{move: "Nxd6", freq: 12026,book:[{move: "Qf4",replies:[
					{move: "Be7", freq:  29,book:[{move: "Nc3",replies:[
						{move: "O-O", freq:   13,book:[{move: "Bd3",replies:[
							{move: "Nc6", freq:  10,book:[{move: "Bd2",replies:[
								{move: "Be6", freq: 21,book:[{move: "O-O-O"}]},
								{move: "Bf6", freq: 19,book:[{move: "O-O-O"}]},
							]}]},
						]}]},
					]}]},
					{move: "Nc6", freq:  22,book:[{move: "Nc3"}]},
				]}]},
			]}]},
			{move: "Nc5", freq:   909,book:[]},
		]}]},
		{move: "Qe7", freq:  21660,book:[{move: "Be2",replies:[
			{move: "Ng4", freq: 3810,book:[{move: "Bg5",replies:[
				{move: "f6", freq:  103,book:[{move: "exf6",replies:[
					{move: "Nxf6", freq:  51,book:[{move: "O-O",replies:[
						{move: "h6", freq: 10,book:[{move: "Re1",replies:[
							{move: "Qd6",freq:  2,book:[{move: "Bxf6",replies:[
								{move: "Qxf6",freq:  1,book:[{move: "Ne5"}]},
								{move: "gxf6",freq:  1,book:[{move: "Ng5",replies:[
									{move: "fxg5",freq:  1,book:[{move: "Bh5+",replies:[
										{move: "Kd8",freq:  8,book:[{move: "Re8#"}]},
										]}]},
									{move: "hxg5",freq:  1,book:[{move: "Bh5+",replies:[
										{move: "Kd8",freq:  8,book:[{move: "Re8#"}]},
									]}]},
								]}]},
							]}]},
						]}]},
						{move: "Nc6",freq:  8,book:[{move: "Re1"}]},
					]}]},
					{move: "gxf6", freq:  49,book:[{move: "Bh4",replies:[
						{move: "Nc6", freq: 1,book:[{move: "Nxd4",replies:[
							{move: "Nxd4", freq:  1,book:[{move: "Qxd4",replies:[
								{move: "Ne5", freq: 1,book:[{move: "Nc3"}]},
							]}]},
						]}]},
					]}]},
				]}]},
				{move: "Qb4+", freq: 54,book:[{move: "Nb1d2",replies:[
					{move: "Qxb2", freq: 14,book:[{move: "O-O"}]},//future: Nc4
					{move: "Nc6", freq:  10,book:[{move: "a3"}]},
					{move: "h6", freq:    4,book:[{move: "a3"}]},
				]}]},
			]}]},
			{move: "Nd5", freq: 2168,book:[{move: "O-O"}]},
			{move: "Ne4", freq:  470,book:[]},
		]}]},
		{move: "Ng4", freq:  12107,book:[{move: "h3",replies:[
			{move: "Nh6", freq: 1699,book:[{move: "Qxd4",replies:[
				{move: "Nc6", freq: 164,book:[{move: "Qe4"}]},
				{move: "Nf5", freq:  68,book:[{move: "Qe4"}]},
			]}]},
			{move: "Nxe5", freq: 548,book:[{move: "Nxe5"}]},
			{move: "Nxf2", freq: 339,book:[{move: "Kxf2"}]},
			{move: "Bb4+", freq: 140,book:[{move: "c3"}]},
		]}]},
		{move: "Ng8", freq:   7447,book:[]},
		{move: "Bb4+", freq:  2744,book:[]},
		{move: "Nc6", freq:   1120,book:[]},
	]}]},
	{move: "Nc6",  freq:  26515,book:[{move: "d5",replies:[
		{move: "Ne7",  freq:  26790,book:[{move: "Nxe5"}]},
		{move: "Nd4",  freq:  13359,book:[{move: "Nxe5",replies:[
			{move: "d6",  freq:   618,book:[{move: "Nc4",replies:[
				{move: "Nb5",  freq: 12,book:[{move: "a4",stock:8.56}]},
				{move: "c5",   freq: 11,book:[{move: "Bd3",replies:[
					{move: "Be7", freq:  6,book:[{move: "a4"}]},
					{move: "Bg4", freq:  6,book:[{move: "f3"}]},
					{move: "b5", freq:   5,book:[{move: "Ne3"}]},
				]}]},
				{move: "Nxe4", freq:  5},
			]}]},
			{move: "Bc5",  freq:  523,book:[{move: "c3",replies:[
				{move: "d6",    freq: 80,book:[{move: "cxd4",replies:[
					{move: "Bb4+",   freq: 44,book:[{move: "Nd2",replies:[
						{move: "dxe5",  freq: 4,book:[{move: "Qa4+"}]},
						{move: "Bxd2+", freq: 1,book:[{move: "Bxd2",replies:[
							{move: "dxe5",  freq: 1,book:[{move: "dxe5"}]},
						]}]},
					]}]},
					{move: "dxe5",   freq: 10,book:[{move: "dxc5"}]},
				]}]},
				{move: "Nb5",   freq: 43,book:[]},
				{move: "Nxe4",  freq: 37,book:[]},
			]}]},
			{move: "Nxe4",  freq: 258,book:[{move: "Qxd4",replies:[
				{move: "Qh4",  freq: 46,book:[{move: "g3",replies:[
					{move: "Bc5",  freq: 5,book:[{move: "Qxc5",replies:[
						{move: "Nxc5",   freq: 1,book:[{move: "gxh4"}]},
					]}]},
					{move: "Qf6",  freq: 2,book:[{move: "Qxe4"}]},
					{move: "Nxg3",  freq:2,book:[{move: "Qxh4"}]},
				]}]},
				{move: "f5",  freq:  38,book:[{move: "Nf3"}]},
				{move: "Nf6",  freq: 35,book:[{move: "Nc3"}]},
				{move: "Nd6",  freq: 30,book:[{move: "Nc3"}]},
				{move: "Nxf2",  freq:22,book:[{move: "Qxf2"}]},
			]}]},
			{move: "c5",    freq: 221,book:[{move: "c3",replies:[
				{move: "d6",   freq: 75,book:[{move: "cxd4",replies:[
					{move: "dxe5",   freq:42,book:[{move: "dxe5",replies:[
						{move: "Nxe4",   freq:38,book:[{move: "Qa4+"}]},
					]}]},
				]}]},
				{move: "Qa5",   freq:17,book:[{move: "Nc4"}]},
				{move: "Nb5",   freq:16,book:[{move: "Bxb5"}]},
			]}]},
			{move: "Qe7",   freq: 163,book:[{move: "Qxd4"}]},
		]}]},
		{move: "Nb8",  freq:   5773,book:[{move: "Nxe5"}]},
		{move: "Nxe4",  freq:  2046,book:[{move: "dxc6"}]},
		{move: "Na5",  freq:    987,book:[{move: "Nxe5"}]},
	]}]},
	{move: "d6",  freq:   21377,book:[nimzo_philidor]},
	{move: "d5",  freq:   13098,book:[]},
	{move: "Bc5",  freq:   3123,book:[]},
	{move: "Bb4+",  freq:  2086,book:[]},
]}

const russian_pin = {move: "d5",replies:[
	{move: "Ne5",  freq:  302,book:[{move: "Nxe5",replies:[
		{move: "Bxe2",  freq:  249,book:[{move: "Qxg2",replies:[
			{move: "Qxe5",  freq: 241,book:[{move: "Re1",replies:[
				{move: "f5",  freq:  125,book:[{move: "Qb5+",replies:[
					{move: "Kf7",  freq:  40,book:[{move: "f3",replies:[
						{move: "Qd4+",   freq:  23,book:[{move: "Be3"}]},
						{move: "Be7",    freq:   4,book:[{move: "fxe4"}]},
					]}]},
					{move: "c6",   freq:  25,book:[{move: "Qxb7",replies:[
						{move: "Rd8",  freq:   22,book:[{move: "dxc6"}]},
					]}]},
					{move: "Kd8",  freq:   8,book:[{move: "f3"}]},
				]}]},
				{move: "Nf6",  freq:  17,book:[{move: "Qb5+"}]},
				{move: "O-O-O",  freq:16,book:[{move: "Qxe4"}]},
			]}]},
		]}]},
		{move: "dxe5",  freq:   10,book:[{move: "Bxg4"}]},
		{move: "Qxd5",  freq:   10,book:[{move: "Bxg4"}]},
	]}]},
	{move: "Nb4",  freq:   62,book:[{move: "c3",replies:[
		{move: "Na6", freq:   22,book:[{move: "Re1",replies:[
			{move: "O-O-O", freq:  3,book:[{move: "Bxa6",replies:[
				{move: "bxa6", freq:  4,book:[{move: "Qa4",replies:[
					{move: "Bxf3", freq:   2,book:[{move: "Qxa6+",replies:[
						{move: "Kb8", freq:  2,book:[{move: "gxf3"}]},
					]}]},
				]}]},
			]}]},
			{move: "Na6c5", freq:  2,book:[{move: "Nd4"}]},
		]}]},
	]}]},
	{move: "Bxf3", freq:   28,book:[{move: "Bxf3"}]},
]}

const classical_attack = {move: "Nxe5",replies:[//russisk
	{move: "d6",  freq: 243501,book:[{move: "Nf3",replies:[
		{move: "Nxe4",  freq: 194811,book:[{move: "d4",replies:[
			{move: "d5",  freq:  24339,book:[{move: "Bd3",replies:[
				{move: "Bd6",  freq:  5270,book:[{move: "O-O",stock:0.33,replies:[
					{move: "O-O",  freq:  12025,book:[{move: "c4",replies:[
						{move: "c6",  freq:  5803,book:[{move: "Re1",replies:[
							{move: "Re8",  freq:  503,book:[{move: "Qb3",replies:[
								{move: "Bg4",  freq:  17,book:[{move: "Nb1d2"}]},
								{move: "Nf6",  freq:  13,book:[{move: "Rxe8+",replies:[
									{move: "Qxe8",  freq:  12,book:[{move: "cxd5",replies:[
										{move: "Nxd5",  freq:  2,book:[{move: "Nc3"}]},
									]}]},
								]}]},
								{move: "Na6",  freq:  12,book:[{move: "cxd5"}]},
								{move: "b6",   freq:  12,book:[{move: "cxd5"}]},
								{move: "h6",   freq:  10,book:[{move: "cxd5"}]},
							]}]},
							{move: "Bf5",  freq:  407,book:[{move: "Qb3"}]},
							{move: "f5",   freq:  164,book:[{move: "Nc3"}]},
							{move: "Nf6",  freq:   93,book:[]},
							{move: "Bg4",  freq:   52,book:[]},
						]}]},
						{move: "Nf6", freq:   260,book:[{move: "c5"}]},
					]}]},
					{move: "Bg4",  freq:    437,book:[{move: "c4"}]},
				]}]},
				{move: "Bf5",  freq:  3061,book:[{move: "O-O",stock:0.67}]},
				{move: "Be7",  freq:  2794,book:[{move: "O-O",stock:0.40}]},
				{move: "Nc6",  freq:  2665,book:[{move: "O-O",stock:0.46}]},
				{move: "Bg4",  freq:  1934,book:[{move: "O-O",stock:0.79}]},
				{move: "Nf6",  freq:  1581,book:[{move: "O-O",stock:0.64}]},
			]}]},
			{move: "Be7",  freq:  5758,book:[{move: "Bd3"}]},
			{move: "Bg4",  freq:  3794,book:[{move: "h3"}]},
			{move: "Qe7",  freq:  3208,book:[]},
			{move: "Nf6",  freq:  2405,book:[{move: "Bd3",stock:0.69}]},
			{move: "Nc6",  freq:   754,book:[]},
			{move: "Bf5",  freq:   734,book:[]},
		]}]},
		{move: "Bg4",  freq:    4811,book:[]},
		{move: "Nc6",  freq:    2185,book:[]},
	]}]},
	{move: "Nc6", freq: 233575,book:[{move: "Nxc6",replies:[//stafford
		{move: "dxc6", freq:  194146,book:[{move: "d3",replies:[
			{move: "Bc5", freq: 73338,book:[{move: "Be2",replies:[
				{move: "h5",  freq: 18430,book:[{move: "c3",replies:[
					{move: "Ng4",  freq: 2893,book:[{move: "d4",replies:[
						{move: "Bb6",  freq:  3678,book:[{move: "a4",replies:[//retreat
							{move: "a5",  freq: 187,book:[{move: "Bg5",replies:[
								{move: "Qd6",  freq:  53,book:[{move: "Nd2"}]},
							]}]},
							{move: "a6",  freq: 33,book:[{move: "Bg5"}]},
							{move: "Ng4", freq: 20,book:[{move: "d4"}]},
						]}]},
						{move: "Qh4",  freq:  2724,book:[{move: "g3",replies:[
							{move: "Qf6",  freq: 333,book:[{move: "f3",replies:[
								{move: "h4",  freq:  73,book:[{move: "fxg4",replies:[
									{move: "hxg3",  freq:   6,book:[{move: "Be3",replies:[
										{move: "Rxh2",  freq:   4,book:[{move: "Rg1",replies:[
											{move: "Qh4",  freq: 2,book:[{move: "dxc5",replies:[
												{move: "Be6",  freq: 2,book:[{move: "Bd4"}]},
											]}]},
										]}]},
									]}]},
								]},{move: "Rg1",replies:[
									{move: "hxg3",  freq:  5,book:[{move: "hxg3",replies:[
										{move: "Rh2",  freq: 1,book:[{move: "dxc5"}]},
									]}]},
								]}]},
							]}]},//hello eric rosen
						]}]},//magical
						{move: "Qf6",  freq:  1096,book:[{move: "Bxg4",replies:[
							{move: "Bxg4",  freq:  225,book:[{move: "f3",replies:[
								{move: "O-O-O",  freq: 83,book:[{move: "fxg4"}]},
								{move: "Qh4+",  freq:  31,book:[{move: "g3"}]},
								{move: "Bxf3",  freq:  30,book:[{move: "Qxf3"}]},
							]}]},
							{move: "hxg4",  freq:   72,book:[{move: "dxc5"}]},
						]}]},//sharp line
					]}]},
					{move: "Bg4",  freq:  669,book:[{move: "f3"}]},
					{move: "Bb6",  freq:  629,book:[{move: "a4",replies:[
						{move: "a5",  freq: 102,book:[{move: "Bg5",replies:[
							{move: "Qd6", freq:   34,book:[{move: "Nd2",replies:[
								{move: "Ng4", freq:   118,book:[{move: "d4"}]},
								{move: "Be6", freq:    24,book:[{move: "d4"}]},
								{move: "Bg4", freq:    20,book:[{move: "Nc4"}]},
								{move: "Nh7", freq:     9,book:[{move: "Nc4"}]},
							]}]},
							{move: "Be6", freq:    6,book:[{move: "Nd2"}]},
						]}]},
						{move: "a6",  freq:  20,book:[{move: "Bg5"}]},
						{move: "Ng4",  freq: 12,book:[{move: "d4"}]},
						{move: "Be6",  freq:  1,book:[{move: "a5"}]},
					]}]},
					{move: "Qd6",  freq:  307,book:[{move: "d4"}]},
					{move: "Bxf2+",freq:  173,book:[{move: "Kxf2"}]},
					{move: "Be6",  freq:  121,book:[{move: "Nd2"}]},
				]}]},
				{move: "O-O",  freq: 3021,book:[{move: "O-O",replies:[
					{move: "Be6", freq:  1203,book:[{move: "a4",replies:[
						{move: "a6", freq: 2,book:[{move: "c3"}]},
						{move: "a5", freq: 1,book:[{move: "c3"}]},
						{move: "Qe7",freq: 1,book:[{move: "c3"}]},
						{move: "b5", freq: 1,book:[{move: "e5"}]},
					]}]},
					{move: "h6", freq:   1035,book:[]},
					{move: "Re8", freq:   895,book:[]},
					{move: "h5", freq:    317,book:[{move: "Bxh5",replies:[
						{move: "Nxh5", freq: 82,book:[{move: "Qxh5",replies:[
							{move: "Qf6", freq: 30,book:[{move: "Qxc5"}]},
							{move: "g6",  freq: 15,book:[{move: "Qxc5"}]},
						]}]},
					]}]},
				]}]},
				{move: "Qd4",  freq: 2829,book:[{move: "O-O"}]},
				{move: "Ng4",  freq: 1942,book:[{move: "Bxg4",replies:[
					{move: "Qh4",  freq: 1,book:[{move: "Qf3",replies:[
						{move:"Bxg4",freq:1,book:[{move: "Qg3",replies:[
							{move:"Qh5",freq:1,book:[{move:"h3",replies:[{move:"Bd1",freq:1,book:[{move:"Nc3",replies:[{move:"Bb4",freq:1,book:[{move:"Bd2"}]}]}]}]}]}
						]}]}
					]}]},
				]}]},
				{move: "Qd6",  freq: 1581,book:[{move: "c3"}]},
			]}]},
			{move: "h5",  freq:   566,book:[]},
		]}]},
		{move: "bxc6", freq:    1839,book:[]}
	]}]},
	{move: "Qe7", freq: 126856,book:[{move: "d4",replies:[
		{move: "d6",  freq:   48194,book:[{move: "Nf3",replies:[
			{move: "Nxe4",  freq:   23444,book:[{move: "Be2",replies:[
				{move: "Bg4",  freq:  6695,book:[{move: "O-O",replies:[
					{move: "Nc6",  freq:  1726,book:[russian_pin]},
					{move: "Nd7",  freq:  1550,book:[{move: "Re1"}]},
					{move: "Bxf3", freq:   748,book:[{move: "Bxf3"}]},
					{move: "d5",   freq:   586,book:[{move: "Re1"}]},
					{move: "Qf6",  freq:   392,book:[{move: "h3"}]},
					{move: "g6",   freq:   366,book:[{move: "Re1"}]},
				]}]},
				{move: "d5",   freq:  3428,book:[{move: "O-O"}]},
				{move: "g6",   freq:  1374,book:[{move: "O-O"}]},
				{move: "Nc6",  freq:  1294,book:[{move: "O-O",replies:[
					{move: "Bg4",   freq:  280,book:[russian_pin]},
					{move: "d5",    freq:  186,book:[]},
					{move: "Bf5",   freq:  165,book:[]},
					{move: "Bd7",   freq:  109,book:[]},
					{move: "Be6",   freq:   91,book:[]},
				]}]},
			]}]},
			{move: "Qxe4+",  freq:  12827,book:[{move: "Be2"}]},
		]}]},
		{move: "Nxe4",  freq: 12971,book:[{move: "Bd3"}]},
		{move: "Nc6",  freq:   1409}
	]}]},
	{move: "Nxe4",freq:  79641,book:[{move: "Qe2",replies:[//bad russian
		{move: "d5",  freq:  20344,book:[{move: "d3",stock:2.05,replies:[
			{move: "Qe7",  freq:  4624,book:[{move: "dxe4"}]},
			{move: "Bd6",  freq:  2872,book:[{move: "Nf3"}]},
			{move: "Nf6",  freq:  1826,book:[{move: "Nc6+"}]},
			{move: "f6",  freq:   1826,book:[{move: "dxe4"}]},
			{move: "Qf6",  freq:  1147,book:[{move: "Nf3"}]},
			{move: "Bb4+",  freq:  970,book:[{move: "Bd2"}]},
			{move: "Nd6",  freq:   595},
			{move: "Nc5",  freq:   522},
			{move: "Qd6",  freq:   436},
			{move: "Ng5",  freq:   219},
			{move: "Nxf2",  freq:  147},
			{move: "Nc6",  freq:   118},
		]}]},
		{move: "Qe7",  freq: 15617,book:[{move: "Qxe4"}]},
		{move: "d6",  freq:   3798,book:[{move: "Nxf7"}]},
		{move: "Nf6",  freq:  3601,book:[{move: "Nc6+"}]},
		{move: "f5",  freq:   1385},
		{move: "Nd6",  freq:  1104,book:[{move: "Nc6+"}]},
		{move: "Qh4",  freq:   917},
		{move: "f6",  freq:    588},
		{move: "Nc5",  freq:   519,book:[{move: "Nc6+"}]},
		{move: "Bd6",  freq:   429},
		{move: "Bg5",  freq:   401},
		{move: "Nxf2",  freq:  275,book:[{move: "Nc6+"}]},
	]}]},
	{move: "Bc5", freq:  26124,book:[{move: "d4"}]},
	{move: "d5", freq:    9369,book:[{move: "exd5",replies:[
		{move: "Qxd5", freq: 16709,book:[{move: "Qe2"}]},
		{move: "Bd6", freq:   7720,book:[{move: "Bb5+",replies:[
			{move: "c6",     freq: 112,book:[{move: "dxc6",replies:[
				{move: "O-O",  freq: 60,book:[{move: "cxb7",replies:[
					{move: "Bxb7",  freq: 24,book:[{move: "Nf3"}]},
				]}]},
				{move: "Bxc6", freq: 37,book:[{move: "Nxc6",replies:[
					{move: "Nxc6",  freq: 19},
					{move: "Qb6",  freq:  12,book:[{move: "Nxa7+",replies:[
						{move: "Bd7",  freq: 1,book:[{move: "Nc8",replies:[
							{move: "Qc6",  freq: 1,book:[{move: "Nxd6+"}]},
						]}]},
					]}]},
				]}]},
			]}]},
			{move: "Bd7",    freq:  77,book:[{move: "Nxd7"}]},
			{move: "Nb8d7",  freq:  50,book:[{move: "Nc4"}]},
		]}]},
	]}]},
	{move: "Bd6", freq:   6585,book:[]},
]}

const latvian_gambit = {move: "Nxe5",replies:[//latvian gambit
	{move: "Qf6", freq:  70975,book:[{move: "d4",replies:[
		{move: "d6", freq:  53656,book:[{move: "Nc4",replies:[
			{move: "fxe4", freq: 34835,book:[{move: "Nc3",replies:[
				{move: "Qg6", freq: 12516,book:[{move: "Ne3",replies:[
					{move: "Nf6", freq: 1617,book:[{move: "Be2",replies:[
						{move: "Be7", freq:  389,book:[{move: "Nc3d5"}]},
						{move: "c6", freq:   382,book:[{move: "O-O"}]},
					]}]},
					{move: "c6", freq:   587,book:[{move: "Be2"}]},
				]}]},
				{move: "Bf5", freq:  2944,book:[{move: "Ne3"}]},
				{move: "Qf7", freq:  1158,book:[{move: "Ne3"}]},
			]}]},
		]}]},
		{move: "fxe4", freq:  2820,book:[]},
		{move: "Nc6",  freq:  1893,book:[]},
	]}]},
	{move: "Nf6", freq:  53236,book:[{move: "Bc4",replies:[
		{move: "d5", freq: 10700,book:[{move: "exd5",replies:[
			{move: "Bd6", freq: 7261,book:[{move: "d4",replies:[
				{move: "O-O",freq:  3619,book:[{move: "O-O",replies:[
					{move: "Nb8d7",freq: 1487,book:[{move: "f4"}]},
					{move: "Kh8",  freq:  567,book:[]},
					{move: "Ng4",  freq:  269,book:[]},
					{move: "a6",   freq:  232,book:[]},
					{move: "Ne4",  freq:  154,book:[]},
				]}]},
				{move: "Nb8d7",freq: 315,book:[{move: "O-O"}]},
			]}]},
			{move: "Nxd5",freq: 1198,book:[{move: "O-O"}]},
		]}]},
		{move: "Qe7",freq:  3910,book:[{move: "d4"}]},
		{move: "fxe4",freq: 2284,book:[{move: "Nf7",replies:[
			{move: "Qe7", freq:  2646,book:[{move: "Nxh8",replies:[
				{move: "d5",  freq:   2610,book:[{move: "Bb5+",replies:[
					{move: "c6",  freq:   228,book:[{move: "Be2",replies:[
						{move: "Bf5",  freq:   62,book:[{move: "O-O"}]},
						{move: "g6",   freq:   33,book:[{move: "O-O"}]},
						{move: "Be6",  freq:   25,book:[{move: "d3"}]},
						{move: "Nb8d7", freq:  11,book:[{move: "O-O"}]},
					]}]},
				]}]},
			]}]},
			{move: "d5",  freq:   105,book:[]},
		]}]},
		{move: "Bc5", freq:  793,book:[]},
		{move: "d6", freq:   616,book:[]},
	]}]},
	{move: "Nc6", freq:  24859,book:[{move: "Qh5+",replies:[
		{move: "g6",  freq:  8329,book:[{move: "Nxg6",replies:[
			{move: "Nf6",  freq: 8029,book:[{move: "Qh4",replies:[
				{move: "Rg8", freq: 2600,book:[{move: "Nxf8",replies:[
					{move: "Rg4",  freq: 1670,book:[{move: "Qh3",replies:[
						{move: "Rxe4", freq:  474,book:[{move: "Be2",replies:[
							{move: "Qe7", freq: 178,book:[{move: "Nc3",replies:[
								{move: "Rxe2+", freq:  89,book:[{move: "Nxe2",replies:[
									{move: "Nd4",   freq:  88,book:[{move: "Qd3",replies:[
										{move: "c5",   freq:  37,book:[{move: "Nxh7",replies:[
											{move: "Nxh7",   freq:  10,book:[{move: "c3"}]},
										]}]},
										{move: "Nxe2", freq:  29,book:[{move: "Qxe2"}]},
									]}]},
								]}]},
								{move: "Nd4",   freq:  49,book:[]},
							]}]},
							{move: "Nd4", freq: 141,book:[{move: "Nc3"}]},
							{move: "Kxf8", freq: 17,book:[{move: "Nc3"}]},
						]}]},
					]}]},
					{move: "Rxf8", freq:  133,book:[]},
					{move: "Kxf8", freq:  110,book:[]},
				]}]},
				{move: "hxg6", freq: 456,book:[]},
			]}]},
			{move: "hxg6", freq:  160,book:[]},
		]}]},
	]}]},
	{move: "fxe4", freq:  8992,book:[{move: "Qh5+"}]},
	{move: "Qe7", freq:   8038,book:[]},
	{move: "d6",  freq:   6236,book:[]},
	{move: "Bc5", freq:   5337,book:[]},
]}

const hoh_kingKnight = 
	{move: "Nf3",replies:[
		{move: "Nc6",freq: 32429093,master:191051,book:[
			//ponziani,
			italian,
			{move: "Bb5",replies:[
				{move: "a6", freq:   871074,book:[{move: "Ba4"}]},
				{move: "d6", freq:   843249,book:[]},
				{move: "Nf6", freq:  598363,book:[]},
				{move: "Bc5", freq:  385388,book:[{move: "c3"}]},
				{move: "Nd4", freq:  217804,book:[]},
				{move: "Ng8e7", freq: 214645,book:[]},
				{move: "Qf6", freq:   97878,book:[]},
				{move: "Bd6", freq:   61048,book:[]},
				{move: "f6", freq:    41608,book:[]},
				{move: "f5", freq:    36776,book:[]},
				{move: "h6", freq:    15851,book:[]},
				{move: "d5", freq:    12802,book:[]}
			]},//spansk
			ponziani,
			scotch,
			fork_nights
		]},
		{move: "d6",  freq: 7356323,master:5939,book:[{move: "d4",replies:philidor}]},
		{move: "Nf6", freq: 5571157,master:26105,book:[modern_attack,classical_attack,russian_nights]},
		{move: "d5",   freq:1084668,master:219,book:[{move: "Nxe5",replies:[
			{move: "dxe4", freq:  26307,book:[{move: "Bc4",replies:[
				{move: "Be6", freq:  10763,book:[{move: "Bxe6",replies:[
					{move: "fxe6", freq: 9382,book:[{move: "Qh5+",replies:[
						{move: "g6", freq: 5167,book:[{move: "Nxg6",replies:[
							{move: "Nf6", freq:  2657,book:[{move: "Qh3",replies:[
								{move: "Rg8", freq:   615,book:[{move: "Nxf8",replies:[
									{move: "Rxf8", freq: 26,book:[{move: "Qxe6+",replies:[
										{move: "Qe7", freq:  19,book:[{move: "Qxe7+",replies:[
											{move: "Kxe7", freq: 12,book:[{move: "b3"}]},
										]}]},
									]}]},
									{move: "Kxf8", freq:  7,book:[{move: "Nc3"}]},
								]}]},
								{move: "hxg6", freq:  314,book:[{move: "Qxh8"}]},
							]}]},
							{move: "hxg6", freq: 1816,book:[{move: "Qxh8"}]},
						]}]},
						{move: "Ke7",freq: 1965,book:[{move: "Qf7+",replies:[
							{move: "Kd6", freq: 1201,book:[{move: "Nc4+",replies:[
								{move: "Kc6", freq: 299,book:[{move: "Qxe6+"}]},
								{move: "Kd5", freq: 271,book:[{move: "Nc3+",replies:[
									{move: "Kxc4", freq: 82,book:[{move: "Qxe6+",replies:[
										{move: "Kc5", freq: 68,book:[{move: "b4+",replies:[
											{move: "Kxb4", freq:  30,book:[{move: "Rb1+",replies:[
												{move: "Kc5", freq: 15,book:[{move: "Rb5+",replies:[
													{move: "Kd4", freq:   12,book:[{move: "Qxe4#"}]},
												]}]},
											]}]},
											{move: "Kd4", freq:   10,book:[{move: "Qxe4#"}]},
										]}]},
										{move: "Kb4", freq: 10,book:[{move: "a3+",replies:[
											{move: "Ka5", freq:   5,book:[{move: "b4+",replies:[
												{move: "Bxb4", freq:  5,book:[{move: "axb4+",replies:[
													{move: "Kxb4", freq:   5,book:[{move: "Ba3+",replies:[
														{move: "Ka5", freq:  2,book:[{move: "Bc5#"}]},
													]}]},
												]}]},
											]}]},
											{move: "Kc5", freq:   3,book:[{move: "b4+",replies:[
												{move: "Kd4", freq:   2,book:[{move: "Qxe4#"}]},
											]}]},
										]}]},
									]}]},
								]}]},
								{move: "Kc5", freq: 137,book:[{move: "Qxe6+"}]},
							]}]},
						]}]},
					]}]},
				]}]},
				{move: "Nh6", freq:   7529,book:[{move: "d4",replies:[
					{move: "exd3", freq: 772,book:[{move: "Bxh6"}]},
					//more
				]}]},
				{move: "Qg5", freq:   4879,book:[{move: "Bxf7+"}]},
				{move: "Qd4", freq:   1535,book:[]},
			]}]},
			{move: "Bd6", freq:   14950,book:[{move: "d4"}]},
			{move: "Qe7", freq:    7507,book:[{move: "d4"}]},
			{move: "Nf6", freq:    4583,book:[]},
			{move: "Qf6", freq:    1250,book:[]},
		]}]},//elephant gambit
		{move: "Bc5",  freq: 965603,book:[{move: "Nxe5",replies:[//Busch-Gass gambit
			{move: "Qh4", freq:     29397,book:[{move: "d4",replies:[
				{move: "Qxe4+", freq:    4744,book:[{move: "Be3",replies:[
					{move: "Bb6",  freq:      932,book:[{move: "Nd2"}]},
					{move: "Bd6",  freq:      575,book:[{move: "Nd2"}]},
					{move: "Bb4+", freq:      423,book:[{move: "c3"}]},
					{move: "d6",   freq:      205,book:[{move: "Nd2"}]},
					{move: "Bxd4", freq:      194,book:[{move: "Qxd4",replies:[
						{move: "Qxc2",  freq:   100,book:[{move: "Bd3",replies:[
							{move: "c5",  freq:    26,book:[{move: "Qd5",replies:[
								{move: "Qxb2",  freq:  5,book:[{move: "Qxf7+",replies:[
									{move: "Kd8",  freq:   8,book:[{move: "Qf8+",replies:[
										{move: "Kc7",  freq:   7,book:[{move: "Nc4",replies:[
											{move: "Qxa1",  freq:   3,book:[{move: "Bf4+",replies:[
												{move: "Kc6",  freq:   2,book:[{move: "Na5+",replies:[
													{move: "Kb6",  freq:   2,book:[{move: "Qd8#"}]},
													{move: "Kd5",  freq:   1,book:[{move: "Qd6#"}]},
												]}]},
												{move: "d6",   freq:   1,book:[{move: "Qxd6#"}]},
											]}]},
										]}]},
									]}]},
								]}]},
								{move: "Nf6",  freq:   2,book:[{move: "Qxf7+",replies:[
									{move: "Kd8",  freq:   2,book:[{move: "Bxc2"}]},
								]}]},
								{move: "Qa4",  freq:   2,book:[{move: "Qxf7+",replies:[
									{move: "Kd8",  freq:   2,book:[{move: "Qf8+",replies:[
										{move: "Kc7",  freq:   1,book:[{move: "Nf7"}]},
									]}]},
								]}]},
							]}]},
							{move: "Nc6",  freq:   26,book:[{move: "Qd5"}]},
						]}]},
						{move: "Qxd4",  freq:    74,book:[{move: "Bxd4"}]},
					]}]},
					{move: "Nf6",  freq:       73,book:[{move: "Nd2"}]},
					{move: "Be7",  freq:       63,book:[{move: "Nc3"}]},
					{move: "Nc6",  freq:       37,book:[{move: "Nd2"}]},
				]}]},
				{move: "Bb6", freq:       293,book:[]},
				{move: "Bxd4", freq:      111,book:[]},
				{move: "Qxf2+", freq:      89,book:[]},
			]}]},
			{move: "Bxf2+", freq:   28482,book:[{move: "Kxf2",replies:[
				{move: "Qh4+", freq:  15396,book:[{move: "Kg1",replies:[
					{move: "Qxe4", freq:    3732,book:[{move: "d4"}]},
					{move: "Nf6", freq:      367,book:[]},
				]}]},
				{move: "Nf6", freq:    6293,book:[{move: "Nc3"}]},
				{move: "Qf6+", freq:   2306,book:[]},
				{move: "d6",   freq:   1288,book:[]},
			]}]},
			{move: "Qe7", freq:    25798,book:[{move: "d4",replies:[
				{move: "Bd6", freq:    3509,book:[{move: "Nc3"}]},
				{move: "Bb6", freq:    3483,book:[{move: "Bc4"}]},
				{move: "d6", freq:     1557,book:[]},
				{move: "Bb4+", freq:    902,book:[]},
			]}]},
			{move: "Nf6", freq:    20920,book:[{move: "d4"}]},
			{move: "d6", freq:     19753,book:[{move: "Nf3"}]},
			{move: "Qf6", freq:    12619,book:[{move: "d4",replies:[
				{move: "Bb6", freq:    1108,book:[{move: "Bc4"}]},
				{move: "Bb4+", freq:    344,book:[]},
				{move: "Bd6", freq:     321,book:[]},
				{move: "Bxd4", freq:    310,book:[]},
				{move: "d6", freq:      248,book:[]},
			]}]},
			{move: "Nc6", freq:    9352,book:[]},
			{move: "d5",  freq:    3328,book:[]},
		]}]},
		{move: "Qf6",  freq: 686580,book:[{move: "Nc3",replies:[
			{move: "c6",  freq:  147893,book:[{move: "d4",stock:3.41,replies:[
				{move: "exd4", freq: 34777,book:[{move: "Bg5",replies:[
					{move: "Qg6", freq:  3831,book:[{move: "Qxd4",replies:[
						{move: "h6",   freq: 1089,book:[{move: "Bf4"}]},
						{move: "f6",   freq:  909,book:[{move: "Bf4"}]},
						{move: "d6",   freq:  444,book:[]},
						{move: "Be7",  freq:  406,book:[]},
						{move: "b6",   freq:  223,book:[]},
						{move: "c5",   freq:  179,book:[]},
					]}]},
					{move: "Qd6",   freq: 761,book:[{move: "Nxd4"}]},
					{move: "Qe6",   freq: 583,book:[{move: "Nxd4"}]},
				]}]},
				{move: "d6",   freq: 12476,book:[{move: "Bg5"}]},
			]}]},
			{move: "Bc5",  freq:  30983,book:[{move: "Nd5",stock:3.42}]},
			{move: "d6", freq:     4591,book:[]},
		]}]},
		{move: "f5",   freq: 592584,master:268,book:[latvian_gambit]},
		{move: "f6",   freq: 173268,book:[{move: "Nxe5",replies:[//damiano
			{move: "fxe5",  freq:  12387,book:[{move: "Qh5+",replies:[
				{move: "g6",  freq:  6398,book:[{move: "Qxe5+"}]},
				{move: "Ke7",  freq: 5838,book:[{move: "Qxe5+",replies:[
					{move: "Kf7",  freq: 1,book:[{move: "Bc4+",replies:[
						{move: "Kg6",  freq: 3128,book:[{move: "Qf5+",replies:[
							{move: "Kh6",  freq:    2508,book:[{move: "d4+",replies:[
								{move: "g5",  freq: 1749,book:[{move: "h4"}]},
								{move: "Qg5",  freq:  78,book:[{move: "Qxg5#"}]},
							]}]},
						]}]},
						{move: "d5",  freq:  2105,book:[{move: "Bxd5+"}]},
					]}]},
				]}]},
			]}]},
			{move: "Qe7",  freq:    2508,book:[]},
			{move: "d6",  freq:      651,book:[]},
		]}]},
		{move: "Bd6",  freq: 109592,book:[{move: "d4"}]},
		{move: "Qe7",  freq: 103246,master:289,book:[{move: "Bc4"}]},
		{move: "c6",  freq:   90541,book:[]},
		{move: "c5",  freq:   29832,book:[{move: "Nxe5"}]},
	]};

const big_centre = {move: "c4",replies:[
	{move: "Nd7",  freq:   9096,book:[{move: "Nc3"}]},
	{move: "Nf6",  freq:   7582,book:[{move: "Nc3"}]},
	{move: "g6",   freq:   7140,book:[{move: "Nc3"}]},
	{move: "Qc7",  freq:   6995,book:[{move: "Nc3"}]},
	{move: "h6",  freq:    4933,book:[{move: "Nc3"}]},
	{move: "e6",  freq:    4064,book:[{move: "Nc3"}]},
	{move: "Qa5+",  freq:  1577,book:[{move: "Nc3"}]},
]};

const unified_alekhine = {move: "O-O"};

const alekhine = {move: "e5",replies:[
		{move: "Nd5", freq: 502164,book:[{move: "d4",replies:[
			{move: "d6", freq:  895435,book:[{move: "c4",replies:[
				{move: "Nb6", freq:  50579,book:[{move: "f4",replies:[//four pawns
					{move: "dxe5", freq:  150711,book:[{move: "fxe5",replies:[
						{move: "Nc6", freq:  83129,book:[{move: "Be3",replies:[
							{move: "Bf5",  freq: 34461,book:[{move: "Nc3",replies:[
								{move: "e6",  freq: 23066,book:[{move: "Nf3",replies:[
									{move: "Be7",  freq: 7789,book:[{move: "Be2"}]},
									{move: "Bg4",  freq: 5953,book:[{move: "Be2"}]},
									{move: "Bb4",  freq: 4542,book:[{move: "Be2"}]},
									{move: "Qd7",  freq: 2232,book:[{move: "Be2"}]},
									{move: "Nb4",  freq: 1298,book:[{move: "Rc1	"}]},
								]}]},
								{move: "Qd7",  freq:  951},
							]}]},
							{move: "g6",  freq:   2853},
							{move: "e6",  freq:    918},
						]}]},
						{move: "c5",  freq:  25738},
						{move: "Bf5", freq:  22393,book:[{move:"Nc3",replies:[
							{move: "e6", freq:1,book:[{move:"Nf3",replies:[
								{move: "Nc6", freq:1,book:[{move:"Be2",replies:[
									{move: "Bg4", freq:1,book:[{move:"Be3",replies:[
										{move: "Qd7", freq:1,book:[unified_alekhine]},
									]}]},
								]}]},
							]}]},
						]}]},
						{move: "e6",  freq:   8291},
						{move: "g6",  freq:   8148},
					]}]},
					{move: "g6", freq:     41278,book:[{move: "Nf3"}]},
					{move: "Bf5", freq:    23041,book:[{move: "Nc3",replies:[
						{move: "dxe5", freq:1,book:[{move:"fxe5",replies:[
							{move: "Nc6", freq:1,book:[{move:"Be3",replies:[
								{move: "Qd7", freq:1,book:[{move:"Nf3",replies:[
									{move: "e6", freq:1,book:[{move:"Be2",replies:[
										{move: "Bg4", freq:1,book:[unified_alekhine]},
									]}]},
								]}]},
							]}]},
						]}]},
					]}]},
					{move: "Nc6", freq:      8930},
					{move: "g5", freq:       5472},
					{move: "e6", freq:       3190}
				]}]},
				{move: "Nb4", freq:    611},
				{move: "dxe5", freq:   194},
			]}]},
			{move: "Nb6", freq: 244096,book:[{move: "a4",replies:[
				{move: "d6",freq:  4144,book:[{move: "a5",replies:[
					{move: "Nc6d7", freq:   3331,book:[{move: "f4"}]},
					{move: "Nd5",   freq:    628,book:[{move: "c4",replies:[
						{move: "Nb4",  freq:    297,book:[{move: "Qa4+",replies:[
							{move: "Nc4c6", freq:    112,book:[{move: "d5"}]},
							{move: "Nc8c6", freq:     63,book:[{move: "d5"}]},
						]}]},
						{move: "dxe5", freq:     32},
					]}]}
				]}]},
				{move: "a5",freq:  1586,book:[{move: "f4"}]},
				{move: "d5",freq:   704,book:[{move: "a5"}]},
				{move: "e6",freq:   383,book:[{move: "Nf3"}]},
			]}]},
			{move: "e6", freq:   84541,book:[{move: "c4",replies:[
				{move: "Nb6", freq: 8932,book:[{move: "Nf3"}]},
				{move: "Ne7", freq: 2401},
				{move: "Bb4+",freq:  887},
				{move: "Nb4",freq:   632},
			]}]},
			{move: "Nc6", freq:  22599,book:[{move: "c4",replies:[
				{move: "Nb6",freq:   15949,book:[{move: "d5",replies:[
					{move: "Nxe5", freq: 2976,book:[{move: "c5",replies:[
						{move: "Nb6c4", freq:  934,book:[{move: "Qd4",relies:[
							{move: "b5", freq: 164,book:[{move: "cxb6",replies:[
								{move: "Ba6",  freq: 48,book:[{move: "Nd2",replies:[
									{move: "Nxd2",   freq: 11,book:[{move: "Bxa6",replies:[
										{move: "axb6",   freq:  6,book:[{move: "Qxe5"}]},
									]}]},
									{move: "c5",     freq:  5,book:[{move: "Qc3"}]},
								]}]},
								{move: "c5",   freq: 14,book:[{move: "Qc3"}]},
								{move: "axb6", freq: 13,book:[{move: "Bxc4"}]},
								{move: "cxb6", freq:  6,book:[{move: "Bxc4"}]},
								{move: "Nxb6", freq:  5,book:[{move: "Qxe5"}]},
							]}]},
							{move: "d6", freq: 133,book:[{move: "Bxc4"}]},
							{move: "c6", freq:  46,book:[{move: "Bxc4"}]},
							{move: "e6", freq:  15,book:[{move: "Bxc4"}]},
							{move: "b6", freq:  10,book:[{move: "Bxc4"}]},
						]}]},
						{move: "Nxd5",  freq:  220,book:[{move: "Qxd5"}]},
					]}]},
					{move: "Nb8",  freq:  135},
				]}]},
				{move: "Nd5b4",freq:  1375,book:[{move: "a3"}]},
			]}]},
			{move: "c5", freq: 20115,book:[{move: "dxc5"}]},
			{move: "b5", freq: 10210,book:[{move: "Bxb5"}]},
		]}]},
		{move: "Ne4", freq:  40597,book:[{move: "d4",replies:[
			{move: "e6",freq:   7439,book:[{move: "Ne2"}]},
			{move: "Nxf2",freq: 7327,book:[{move: "Kxf2"}]},
			{move: "d5",freq:   3722},
			{move: "Nc5",freq:  1778},
			{move: "d6",freq:   1303},
			{move: "f6",freq:    494},
			{move: "h6",freq:    493},
		]}]},
		{move: "Ng8", freq:  35805,book:[{move: "d4"}]},
	]}

const hohVienna = 
	{move: "Nc3",replies:[
		{move: "Nc6",  freq:  559195,book:[{move: "Bc4",replies:[
			{move: "Nf6",  freq: 129848,book:[{move: "Bb3",replies:[
				{move: "Bc5",  freq:  580,book:[{move: "Nf3",replies:[
					{move: "O-O",  freq:   1303,book:[{move: "d3"}]},
					{move: "d6",  freq:    1120,book:[{move: "d3"}]},
					{move: "Ng4",  freq:    184,book:[{move: "O-O"}]},
					{move: "a6",  freq:     104,book:[{move: "Nxe5"}]},//pawn falls
					{move: "h6",  freq:      94,book:[{move: "Nxe5"}]},//pawn falls, but with more stuff (castle)
				]},{move: "d3"}]},
				{move: "Bb4",  freq:  258,book:[{move: "Ng1e2",replies:[
					{move: "Bxc3",  freq:   21,book:[{move: "Nxc3",replies:[
						{move: "O-O",  freq:  1,book:[{move: "d3"}]},
					]}]},
					{move: "d6",  freq:     14,book:[{move: "d3",replies:[
						{move: "O-O",  freq:  1,book:[{move: "a3"}]},
					]}]},
					{move: "O-O",  freq:    12,book:[{move: "O-O"}]},
					{move: "Nd4",  freq:     3,book:[{move: "Nxd4"}]},
				]}]},
				{move: "d6",  freq:   210,book:[{move: "Ng1e2"}]},//bishop stuff, castle, potentially open for rook, d4 opening
				{move: "Be7",  freq:  136,book:[{move: "Ng1e2"}]},
				{move: "d5",  freq:    85,book:[]},
				{move: "Nd4",  freq:   43,book:[{move: "Nf3"}]},
				{move: "Na5",  freq:   31,book:[]},
				{move: "h6",  freq:    24,book:[]},
			]}]},
			{move: "Bc5",  freq:  73539,book:[{move: "Qg4",replies:[
				{move: "Qf6",  freq:  9837,book:[{move: "Nd5",replies:[
					{move: "Qxf2+",  freq:  7606,book:[{move: "Kd1",replies:[
						{move: "d6",  freq: 1643,book:[{move: "Qxg7"}]},
						{move: "g6",  freq: 1245,book:[{move: "Nh3"}]},
						{move: "Nf6",  freq:1089,book:[{move: "Qxg7"}]},
						{move: "Bb6",  freq: 847,book:[{move: "Qxg7"}]},
						{move: "Kf8",  freq: 535,book:[]},
						{move: "Na5",  freq: 485,book:[]},
						{move: "Bd6",  freq: 356,book:[]},
						{move: "Qf1+", freq: 261,book:[{move: "Bxf1"}]},
						{move: "Ng8e7", freq:246,book:[]},
						{move: "Kd8", freq:  203,book:[]},
						{move: "Nd4", freq:  163,book:[]},
						{move: "b5", freq:   109,book:[]},
					]}]},
					{move: "Qg6",  freq:     806,book:[{move: "Nxc7+",replies:[
						{move: "Kd8",  freq:   1,book:[{move: "Qxg6",replies:[
							{move: "fxg6",  freq:   1,book:[{move: "Nxa8"}]},
							{move: "hxg6",  freq:   1,book:[{move: "Nxa8"}]},
						]}]},
						{move: "Kf8",  freq:   1,book:[{move: "Qxg6",replies:[
							{move: "fxg6",  freq:   1,book:[{move: "Nxa8"}]},
							{move: "hxg6",  freq:   1,book:[{move: "Nxa8"}]},
						]}]},
						{move: "Ke7",  freq:   1,book:[{move: "Qxg6",replies:[
							{move: "fxg6",  freq:   1,book:[{move: "Nxa8"}]},
							{move: "hxg6",  freq:   1,book:[{move: "Nxa8"}]},
						]}]},
					]}]},
					{move: "Bxf2+",  freq:   284,book:[{move: "Kf1",replies:[
						{move: "Bb6+",  freq:  13,book:[{move: "Nxf6+"}]},
						{move: "Qg6",  freq:    7,book:[]},
						{move: "Qh4",  freq:    7,book:[]},
						{move: "Qd6",  freq:    4,book:[]},
						{move: "Qh4+",  freq:   3,book:[]},
						{move: "Qd8",  freq:    2,book:[]},
						{move: "d6",   freq:    2,book:[]},
					]}]},
					{move: "Qd8",   freq:    183,book:[{move: "Qxg7"}]},
					{move: "Qd6",  freq:     133,book:[{move: "Qxg7"}]},
					{move: "d6",  freq:       39,book:[]},
					{move: "Qe6",  freq:      30,book:[]},
					{move: "Qh6",  freq:      27,book:[]},
				]}]},
				{move: "g6",   freq:  3329,book:[{move: "Qf3"}]},
				{move: "Nf6",  freq:  1682,book:[{move: "Qxg7"}]},
				{move: "d5",  freq:    664,book:[{move: "Qxg7"}]},
				{move: "d6",  freq:    398,book:[{move: "Qxg7"}]},
				{move: "Qe7",  freq:   365,book:[{move: "Nd5"}]},
				{move: "Nh6",  freq:   230,book:[{move: "Qxg7"}]},
				{move: "Bf8",  freq:   211,book:[{move: "Qg3"}]},
				//Kf8 -> Qf3
			]}]},
			{move: "d6",  freq:   24366,book:[]},
			{move: "Bb4",  freq:  13135,book:[{move: "Qg4"},{move: "Qh5"}]},
			{move: "h6",  freq:    6056,book:[]},
		]}]},
		{move: "Nf6",  freq:  465591,book:[{move: "f4",replies:[//vienna gambit
			{move: "exf4",  freq:  62131,book:[{move: "e5",replies:[
				{move: "Ng8",  freq:  22853,book:[{move: "Nf3",replies:[
					{move: "d6",  freq:  8198,book:[{move: "d4",replies:[
						{move: "dxe5",  freq:4229,book:[{move: "Qe2",replies:[
							{move: "Nc6",  freq: 342,book:[{move: "Bxf4"}]},
							{move: "Be7",  freq: 310,book:[{move: "Qxe5"}]},
							{move: "f6",  freq:  216,book:[]},
							{move: "Bg4",  freq: 203,book:[]},
						]}]},
						{move: "Bg4",  freq: 1069,book:[]},
						{move: "Nc6",  freq:  515,book:[]},
					]}]},
					{move: "Nc6",  freq: 3609,book:[{move: "d4"}]},
					{move: "Bb4",  freq: 1476,book:[{move: "a3"}]},
					{move: "Bc5",  freq: 1251,book:[]},
					{move: "d5",  freq:  1026,book:[]},
					{move: "f6",  freq:  1016,book:[]},
					{move: "g5",  freq:  1010,book:[]},
					{move: "Be7",  freq:  842,book:[]},
				]}]},
				{move: "Qe7",  freq:  12749,book:[{move: "Qe2",replies:[
					{move: "Ng8",  freq:  7000,book:[{move: "Nf3"}]},
					{move: "f3",  freq:    839,book:[{move: "Nxf3"}]},
					{move: "d6",  freq:    839,book:[{move: "exf6"}]},
					{move: "Nc6",  freq:   558,book:[{move: "exf6"}]},
					{move: "Ng4",  freq:   336,book:[{move: "Qxg4"}]},
				]}]},
				{move: "Nd5",  freq:    768,book:[{move: "Nxd5"}]},
				{move: "Ng4",  freq:    712,book:[{move: "Qxg4"}]},
				{move: "Nh5",  freq:    511,book:[]},
				{move: "Ne4",  freq:    294,book:[]},
				{move: "Bb4",  freq:    218,book:[]},
				{move: "Bc5",  freq:    200,book:[]},
				{move: "d6",  freq:     120,book:[]},
				{move: "f3",  freq:     118,book:[]},
				{move: "Be7",  freq:     76,book:[]},
				{move: "d5",  freq:      67,book:[]},
			]}]},
			{move: "d6",  freq:    29033,book:[{move: "Nf3"}]},
			{move: "Nc6",  freq:   22425,book:[{move: "fxe5",replies:[
				{move: "Nxe5",  freq:   13979,book:[{move: "d4",replies:[
					{move: "Nc6",  freq:  6153,book:[{move: "e5"}]},
					{move: "Ng6",  freq:  4530,book:[{move: "e5"}]},
					{move: "Ne5g4",  freq: 910,book:[]},
				]}]},
				{move: "Nxe4",  freq:     144,book:[]},
			]}]},
			{move: "d5",  freq:    16089,book:[{move: "fxe5",replies:[
				{move: "Nxe4",  freq:  10935,book:[{move: "Qf3"}]},
				{move: "d4",  freq:      410,book:[]},
			]}]},
			{move: "Bb4",  freq:    6876,book:[{move: "fxe5"}]},
			{move: "Bc5",  freq:    4890,book:[]},
		]}]},
		{move: "d6",  freq:   178531,book:[{move: "d4",replies:[
			{move: "exd4",  freq: 9960,book:[{move: "Qxd4",replies:[
				{move: "Nc6",  freq:   7312,book:[{move: "Bb5"}]},
				{move: "Nf6",  freq:   3425,book:[{move: "Be3"}]},
				{move: "c5",  freq:    1357,book:[{move: "Bb5+"}]},
				{move: "Qf6",  freq:    412,book:[]},
			]}]},
			{move: "Nc6",  freq:  2703,book:[{move: "d5"},{move: "Ng1e2"}]},
			{move: "Nf6",  freq:  2120,book:[]},
			{move: "f6",   freq:   755,book:[]},
			{move: "f5",   freq:   661,book:[]},
		]}]},
		{move: "Bc5",  freq:  155482,book:[{move: "f4",replies:[
			{move: "exf4",   freq:  6452,book:[{move: "Nf3"}]},
			{move: "d6",   freq:    3130,book:[]},
			{move: "Nc6",   freq:   1387,book:[]},
			{move: "Bxg1",   freq:  1088,book:[]},
			{move: "Qh4+",   freq:  1060,book:[]},
			{move: "Qf2+",   freq:   904,book:[]},
		]}]},//what about second vienna gambit?
		{move: "Bb4",  freq:   59901,book:[{move: "d4"}]},
		{move: "c6",  freq:    47352,book:[]},
		{move: "f5",  freq:    26361,book:[{move: "exf5"}]},
		{move: "Qf6",  freq:   22826,book:[]},
		{move: "d5",  freq:    21626,book:[]}
	]};

const caro_rosen_trap = [
	{move: "h6",  freq:  30103,book:[{move: "Ne5",replies:[
		{move: "Bh7",  freq:  19090,book:[{move: "Qh5",replies:[
			{move: "g6",  freq:  11596,book:[{move: "Bc4",replies:[
				{move: "e6",  freq:   5290,book:[{move: "Qe2",replies:[
					{move: "Bg7",  freq:  1340,book:[{move: "Nxf7",stock:8.61}]},
					{move: "Nf6",  freq:   805,book:[{move: "Nxf7",stock:9.07}]},
					{move: "Qe7",  freq:   656,book:[{move: "Ne4",stock:2.57}]},
					{move: "Nd7",  freq:   579,book:[{move: "Nxf7",stock:8.52}]},
					{move: "Qf6",  freq:   242,book:[{move: "b3",stock:5.02}]},
					{move: "Qd6",  freq:   217,book:[{move: "O-O",stock:3.45}]},
					{move: "Qc7",  freq:   213,book:[{move: "O-O",stock:3.22}]},
					{move: "Bd6",  freq:   192,book:[{move: "Nxf7",stock:6.63}]},
					{move: "Ne7",  freq:    94,book:[{move: "Nxf7",stock:7.23}]},
				]}]},
				{move: "gxh5",  freq: 637,book:[{move: "Bxf7#"}]},
			]},{move: "Qf3"}]},
			{move: "Qd5",  freq:  1917,book:[{move: "Bc4"}]},
			{move: "Nf6",  freq:   134,book:[{move: "Qxf7#"}]},
			{move: "Bg6",  freq:   127,book:[{move: "Nxg6"}]},
		]}]},
		{move: "Qd6",  freq:   4887,book:[]},
		{move: "Nf6",  freq:    641,book:[]},
		{move: "Nd7",  freq:    516,book:[]},
	]}]},
	{move: "h5",  freq:   4882,book:[{move: "Ne5",replies:[
		{move: "Qd6",  freq:   1660,book:[]},
		{move: "Bh7",  freq:   1410,book:[{move: "Qxh5",replies:[
			{move: "g6",  freq:  425,book:[{move: "Bc4",replies:[
				{move: "e6",  freq: 147,book:[{move: "Qe2",replies:[
					{move: "Bg7",  freq: 38,book:[{move: "Nxf7"}]},
					{move: "Nf6",  freq: 31,book:[{move: "Nxf7"}]},
					{move: "Nd7",  freq: 31,book:[{move: "Nxf7"}]},
					{move: "Qe7",  freq:  5,book:[{move: "d4"}]},
				]}]},
				{move: "gxg5", freq: 43,book:[{move: "Bxf7#"}]},
			]}]},
			{move: "Nf6",  freq: 241,book:[{move: "Qxf7#"}]},
			{move: "Qd5",  freq: 140,book:[]},
			{move: "Nh6",  freq:  97,book:[]},
		]}]},
		{move: "Nf6",  freq:    704,book:[]},
		{move: "Nd7",  freq:    324,book:[]},
		{move: "e6",  freq:     254,book:[]},
	]}]},
	{move: "Nf6",  freq:  1619,book:[]},
]

const rosen_caro = {move: "Nf3",replies:[
	{move: "d5",  freq:  3019761,book:[{move: "Nc3",replies:[
		{move: "dxe4",  freq:  480909,book:[{move: "Nxe4",replies:[
			{move: "Nf6",  freq:   257616,book:[{move: "Qe2",replies:[
				{move: "Nxe4",  freq:  56412,book:[{move: "Qxe4"}]},
				{move: "Bf5",  freq:    7146,book:[]},
				{move: "e6",  freq:     4442,book:[]},
				{move: "Bg4",  freq:    4286,book:[]},
				{move: "Nb8d7",  freq:  1171,book:[{move: "Nd6#"}]},
				{move: "Be6",  freq:     496,book:[]},
				{move: "Na6",  freq:     478,book:[]},
				{move: "g6",  freq:      363,book:[{move: "Nxf6#"}]},
			]}]},
			{move: "Bf5",  freq:    99453,book:[{move: "Ng3",replies:[//main trap line
				{move: "Bg6",  freq:   65553,book:[{move: "h4",replies:caro_rosen_trap}]},
				{move: "Bg4",  freq:    6602,book:[]},
				{move: "e6",  freq:      448,book:[]},
			]}]},
			{move: "Nd7",  freq:    55270,book:[]},
			{move: "Bg4",  freq:    47005,book:[{move: "h3",replies:[
				{move: "Bxf3",  freq:    15663,book:[{move: "Qxf3"}]},
				{move: "Bh5",  freq:      6726,book:[{move: "Ng3",replies:[
					{move: "Bg6",  freq:   2797,book:[]},
					{move: "Bxf3",  freq:   688,book:[{move: "Qxf3"}]},
					{move: "Nf6",  freq:     27,book:[{move: "h4",replies:caro_rosen_trap}]},
				]}]},
				{move: "Bf5",  freq:       470,book:[]},
			]}]},
			{move: "e6",  freq:      7238,book:[]},
			{move: "g6",  freq:      3063,book:[]},
		]}]},
		{move: "Bg4",  freq:   207069,book:[{move: "h3"}]},
		{move: "d4",  freq:     94122,book:[]},
		{move: "Nf6",  freq:    68814,book:[]},
		{move: "e6",  freq:     31236,book:[]},
		{move: "g6",  freq:     10083,book:[]},
		{move: "a6",  freq:      9139,book:[]},
	]}]},
	{move: "d6",  freq:   194864,book:[]},
	{move: "e6",  freq:    71883,book:[]},
	{move: "g6",  freq:    44088,book:[]},
	{move: "Nf6",  freq:   12731,book:[]},
	{move: "Qc7",  freq:   12408,book:[]},
	{move: "b5",  freq:     7996,book:[]},
]}

const ultra_crab = [
	{move: "Bg6",  freq: 35,book:[{move: "h4",replies:[
		{move: "h6",  freq:  16,book:[{move: "h5",replies:[
			{move: "Bh7",  freq:  15,book:[{move: "Bd3",replies:[
				{move: "Bxd3",  freq: 18,book:[{move: "cxd3",replies:[
					{move: "c5",  freq: 3,book:[{move: "Nxc5",replies:[
						{move: "Nxc5",  freq:  2,book:[{move: "dxc5",replies:[
							{move: "Qa5+", freq:  2,book:[{move: "Kf1"}]},
						]}]},
					]}]},
					{move: "Qb6", freq: 3,book:[{move: "Be3"}]},
					{move: "a6", freq:  2,book:[{move: "Be3"}]},
				]}]},
			]}]},
		]}]},
		{move: "h5",  freq:   5,book:[{move: "Be3"}]},
	]}]},
	{move: "h6",  freq:   4,book:[{move: "Nxf5"}]},
];

const weird_caro = [
	{move: "h6",  freq:   711,book:[{move: "O-O"}]},
	{move: "c5",  freq:   451,book:[{move: "Nxc5"}]},
	{move: "Bg6",  freq:  451,book:[]},
	{move: "Nc8",  freq:  358,book:[]},
	{move: "Ng6",  freq:  218,book:[]},
	{move: "Bg4",  freq:  123,book:[]},
	{move: "Qc7",  freq:  115,book:[]},
	{move: "Rc8",  freq:  111,book:[]},
];

const caro_french = {move: "Bd3",replies:[
	{move: "d5", freq:   20504,book:[{move: "Nc3",replies:[
		{move: "Bb4",  freq:  5181,book:[{move: "e5"}]},
		{move: "Nf6",  freq:  5161,book:[{move: "e5"}]},
		{move: "dxe4", freq:  4390,book:[{move: "Nxe4",replies:[
			{move: "Nf6", freq:  2635,book:[{move: "Nxf6+"}]},
			{move: "Be7", freq:   694,book:[]},
			{move: "Nd7", freq:   683,book:[]},
		]}]},
	]}]},
	{move: "d6", freq:    1412,book:[]},
	{move: "a6", freq:    1193,book:[]},
]}

const caro_kahn = [{move: "d4",replies:[//caro-kann
	{move: "d5", freq: 1708932,book:[
		{move: "e5",replies:[
			{move: "Bf5",  freq:  583647,book:[{move: "Nd2",replies:[
				{move: "e6",   freq: 2780,book:[{move: "Nb3",replies:[
					{move: "Nd7",   freq: 9266,book:[{move:"Ne2",replies:[
						{move: "c5",   freq:  55,book:[{move: "dxc5",replies:[
							{move: "Nxc5",   freq: 10,book:[{move: "Ne2d4",replies:[
								{move: "Bg6",   freq:  81,book:[{move: "Bb5+",replies:[
									{move: "Nd7",   freq: 25,book:[{move: "h4",replies:[
										{move: "h5",   freq:   1,book:[{move: "Bg5",replies:[
											{move: "Qc7",  freq:  1,book:[{move: "f4"}]},
											{move: "Be7",  freq:  1,book:[{move: "Nc5"}]},
										]}]},
										{move: "h6",   freq:   1,book:[{move: "h5",replies:[
											{move: "Bh7",   freq: 1,book:[{move: "f4",replies:[
												{move: "a6",   freq:   1,book:[{move: "Bd3",replies:[
													{move: "Bxd3",  freq: 1,book:[{move: "Qxd3"}]},
												]}]},
											]}]},
										]}]},
									]}]},
								]}]},
								{move: "Nxb3",   freq: 41,book:[{move: "Bb5+",replies:[
									{move: "Ke7",   freq:  29,book:[{move: "axb3",stock:6.53,replies:[
										{move: "a6",   freq: 6,book:[{move: "Bc6",replies:[
											{move: "bxc6",  freq: 1,book:[{move: "Nxc6+"}]}
										]}]},
										{move: "Bg6",  freq: 5,book:[{move: "Qe2"}]},
										{move: "Nh6",  freq: 2,book:[{move: "O-O"}]},
									]}]},
								]}]},
								{move: "a6",   freq:   10,book:[{move: "Nxf5",replies:[
									{move: "exf5",  freq: 9,book:[{move: "Be3"}]},
								]}]},
							]}]},
							{move: "Nxe5",   freq:  3,book:[{move: "Ne2d4"}]},
							{move: "Bxc5",   freq:  2,book:[{move: "Nxc5"}]},
						]}]},
						{move: "Ne7",   freq: 26,book:[{move: "Ng3",replies:ultra_crab}]},
						{move: "h6",   freq:  14,book:[{move: "Ng3",replies:[
							{move: "Bh7",   freq:  14,book:[{move: "Be2",replies:[
								{move: "c5",   freq:   1,book:[{move: "f4"}]},
								{move: "Ne7",  freq:   1,book:[{move: "O-O"}]},
							]}]},
							{move: "Bg6",   freq:   3},
							{move: "Ne7",   freq:   2},
						]}]},
						{move: "a6",   freq:   5,book:[{move: "h4"}]},
						{move: "Qc7",   freq:  4,book:[{move: "Ng3"}]},
						{move: "f6",    freq:  4,book:[{move: "f4"}]},
						{move: "a5",    freq:  3},
					]},{move: "Nf3",replies:[
							{move: "c5",   freq: 205,book:[{move: "dxc5",replies:[
								{move: "Nxc5",   freq: 56,book:[{move: "Bg5",replies:[
									{move: "Qc7", freq: 1,book:[{move: "c4",stock:0.82}]},
									{move: "f6",  freq: 1,book:[{move: "exf6"}]},
								]}]},
								{move: "Bxc5",   freq: 19,book:[{move: "Nxc5",replies:[
									{move: "Nxc5",   freq: 1,book:[{move: "Be3"}]}
								]}]}
							]}]},
							{move: "Ne7",   freq: 82,book:[{move: "Be2",replies:weird_caro}]},//double knight
							{move: "h6",   freq:  40,book:[{move: "Be2"}]},
							{move: "a6",   freq:  25},
							{move: "Rc8",   freq: 20},
							{move: "Qb6",   freq: 20},
							{move: "a5",   freq:  19},
						]}
					]},
					{move: "Ne7",   freq: 1773,book:[{move:"Ne2",replies:[
						{move: "Nd7",   freq:  22,book:[{move: "Ng3",replies:ultra_crab}]},
						{move: "Bg6",   freq:  8,book:[{move: "Nf4"}]},
					]},{move: "Nf3",replies:[
						{move: "Nd7",   freq: 875,book:[{move: "Be2",replies:weird_caro}]},//double knight
						{move: "h6",   freq:  236,book:[{move: "Be2"}]},
						{move: "Ng6",   freq: 185},
						{move: "Bg4",   freq:  81},
						{move: "Nc8",   freq:  79},
					]}]},
					{move: "c5",    freq:  1440,book:[{move: "dxc5",replies:[
						{move: "Bxc5",   freq:  568,book:[{move: "Bb5+",replies:[
							{move: "Nc6",   freq:  69,book:[{move: "a4",replies:[
								{move: "Bb6",   freq:  10,book:[{move: "a5",replies:[
									{move: "Bc7",   freq:   9,book:[{move: "a6",replies:[
										{move: "Ne7",   freq:   6,book:[{move: "axb7",replies:[
											{move: "Rb8",   freq:   6,book:[{move: "Nd4",replies:[
												{move: "Qd7",   freq: 4,book:[{move: "Ra6"}]},
											]}]},
										]}]},
									]}]},
								]}]},
								{move: "Qb6",   freq:   7},
								{move: "Be7",   freq:   7},
								{move: "a6",   freq:    5},
							]}]},
							{move: "Kf8",   freq:  11,book:[{move: "Ne2"}]},
							{move: "Nd7",   freq:   6,book:[{move: "Bxd7+"}]},
						]}]},
						{move: "Nc6",   freq:   366,book:[{move: "Be3",replies:[
							{move: "Nxe5",   freq: 27,book:[{move: "Bb5+"}]},
						]}]},
						{move: "Nd7",   freq:   127,book:[{move: "Bb5"}]},
					]}]},
					{move: "h6",    freq:   824,book:[{move: "Ne2",replies:[
						{move: "Nd7",   freq: 1,book:[{move: "Ng3"}]},
						{move: "Ne7",   freq: 1,book:[{move: "Ng3"}]},
					]}]},
					{move: "a5",    freq:   830,book:[{move: "a4"}]},
					{move: "Qb6",    freq:  539,book:[{move: "Nf3"}]},
					{move: "Bb4+",   freq:  219,book:[{move: "c3",replies:[
						{move: "Ba5",   freq:  123,book:[{move: "h4",replies:[
							{move: "Ne7",  freq:   5,book:[{move: "g4"}]},
							{move: "h6",   freq:   3,book:[{move: "Ne2"}]},
							{move: "h5",   freq:   1,book:[{move: "Ne2"}]},
						]}]},
						{move: "Be7",   freq:   96,book:[{move: "Ne2"}]},
						{move: "Bf8",   freq:   11,book:[{move: "Ne2"}]},
					]}]},
					{move: "Be7",    freq:   96,book:[{move: "Ne2"}]},
				]}]},
				{move: "Nd7",   freq:  91,book:[{move: "Ng1f3"}]},
			]}]},
			{move: "c5",   freq:  111809,book:[{move: "Nf3",replies:[
				{move: "Nc6",   freq:    25140,book:[{move: "dxc5",replies:[
					{move: "Bg4",  freq:  37466,book:[{move: "c3",replies:[
						{move: "e6",  freq:  7338,book:[{move: "Be3"}]},
						{move: "Bxf3",freq:  1844,book:[{move: "Qxf3"}]},
						{move: "Nxe5",freq:  1395, book:[{move: "Nxe5",replies:[
							{move: "Bxd1",  freq:  718,book:[{move: "Bb5+",replies:[
								{move: "Qd7",    freq:  632,book:[{move: "Bxd7+",replies:[
									{move: "Kd8",    freq:  586,replies:[{move: "Nxf7+"}]},
								]}]},
							]}]},
							{move: "Bd7",    freq:   33},
						]}]},
						{move: "a5",  freq:   231},
						{move: "a6",  freq:   139},
					]}]},
					{move: "e6",   freq:   7224},
					{move: "Bf5",   freq:  1240},
					{move: "Qa5+",  freq:   498},
				]}]},
				{move: "Bg4",   freq:    19704,book:[{move: "dxc5",replies:[
					{move: "e6",    freq: 1519,book:[{move: "Bb5+",replies:[
						{move: "Nc6",  freq: 193,book:[{move: "b4"}]},
						{move: "Nd7",  freq: 53, book:[{move: "b4"}]},
					]}]},
					{move: "Nc6",   freq: 1264,book:[{move: "c3",replies:[
						{move: "e6",  freq:  7338,book:[{move: "Be3"}]},
						{move: "Bxf3",freq:  1844,book:[{move: "Qxf3"}]},
						{move: "Nxe5",freq:  1395, book:[{move: "Nxe5",replies:[
							{move: "Bxd1",  freq:  718,book:[{move: "Bb5+",replies:[
								{move: "Qd7",    freq:  632,book:[{move: "Bxd7+",replies:[
									{move: "Kd8",    freq:  586,replies:[{move: "Nxf7+"}]},
								]}]},
							]}]},
							{move: "Bd7",    freq:   33},
						]}]},
						{move: "a5",  freq:   231},
						{move: "a6",  freq:   139},
					]}]},
					{move: "Bxf3",  freq:  173,book:[{move: "Qxf3"}]},
				]}]},
				{move: "cxd4",   freq:   25140,book:[{move: "Nxd4",replies:[
					{move: "Nc6", freq: 12475,book:[{move: "Nxc6",replies:[
						{move: "bxc6",  freq:  4063,book:[{move: "Bd3",replies:[
							{move: "e6",  freq:  992,book:[{move: "Nd2"}]},
							{move: "g6",  freq:  183},
							{move: "Qc7",  freq: 158},
							{move: "c5",  freq:   76},
							{move: "Ba6",  freq:  74},
						]}]},
					]}]},
					{move: "e6",  freq:  2936,book:[{move: "Nd2"}]},
					{move: "a6",  freq:   487},
				]}]},
				{move: "e6",    freq:    5390,book:[{move: "c3",stock:0.76}]},//lmao, delayed french
			]}]},
			{move: "e6",   freq:   68029,book:[{move: "c3",replies:[
				{move: "c5",   freq: 23388,book:[{move: "Nf3",replies:[
					{move: "Nc6",  freq: 56504,book:[{move: "Bd3",replies:[
						{move: "Qb6",    freq:  5973,book:[{move: "O-O"}]},
						{move: "cxd4",   freq:  5070,book:[{move: "cxd4"}]},
						{move: "Bd7",    freq:  3224,book:[{move: "O-O"}]},
						{move: "Ng8e7",  freq:  2931,book:[{move: "O-O"}]},
						{move: "c4",     freq:   955,book:[{move: "Bc2"}]},
					]}]},
					{move: "cxd4", freq: 28615,book:[{move: "cxd4"}]},
					{move: "c4",   freq:  7082},
					{move: "Qb6",  freq:  4023},	
					{move: "a6",   freq:  2189},	
				]}]},
				{move: "Ne7",  freq: 6180,book:[{move: "Bd3"}]},
				{move: "Nd7",  freq: 4659,book:[{move: "Bd3"}]},
				{move: "Be7",  freq: 2914,book:[{move: "Nf3"}]},
				{move: "f6",  freq:  2806,book:[{move: "Bd3"}]},
				{move: "f5",  freq:  2532,book:[{move: "Bd3"}]},
			]}]},
			{move: "f6",   freq:   17692,book:[{move: "Nd3"}]},
			{move: "g6",   freq:    7391},
			{move: "Nd7",  freq:    4214,book:[{move: "Bd3",replies:[
				{move: "e6",   freq: 1,book:[{move: "c3"}]},//and probably Ne2
			]}]},
			{move: "a6",   freq:    3277},
		]},
		{move: "exd5"},{move: "Nc3"}]},
	{move: "d6", freq:   88781,book:[big_centre]},
	{move: "e6",  freq:  56509,book:[caro_french]},
	{move: "g6",  freq:  20734,book:[{move: "c4"}]},
]},rosen_caro];

const double_fia = [
	{move: "e6",  freq:   763,book:[{move: "Nf3"}]},
	{move: "d6",  freq:   713,book:[{move: "h6"}]},
	{move: "gxh5",  freq: 458,book:[{move: "Ng1e2"}]},
	{move: "Nf6",  freq:  444,book:[{move: "h6",replies:[
		{move: "Bf8",  freq:   1,book:[{move: "Bg5",stock:3.22,replies:[
			{move: "Nxe4",  freq: 14,book:[{move: "Nxe4",stock:4.35,replies:[
				{move: "Bxe4",  freq:  14,book:[{move: "d5",stock:4.34}]},
			]}]},
		]}]},
	]}]},
	{move: "Nc6",  freq:  351,book:[{move: "d5"}]},
	{move: "h6",  freq:   190,book:[{move: "hxg6"}]},
	{move: "c5",  freq:   100,book:[]},
];

const owen_e6_pin = {move: "a3",replies:[
	{move: "Bxc3+", freq: 1515,book:[{move: "Nxc3",replies:[
		{move: "d5",  freq: 681,book:[{move: "e5"}]},
		{move: "O-O", freq: 275,book:[{move: "Bg5"}]},
		{move: "d6",  freq: 215},
		{move: "c5",  freq: 172},
		{move: "Nc6", freq: 145},
		{move: "h6",  freq: 107},
	]}]},
	{move: "Be7",  freq:   547,book:[{move: "e5"}]},
]};


const owen_e6 = {move: "Bd3",replies:[
	{move: "Bb4", freq:   22590,book:[{move: "Ng1e2",stock:0.81,replies:[
		{move: "Nf6", freq:  13322,book:[owen_e6_pin]},
		{move: "Bxc3+", freq: 2701},
		{move: "Ne7", freq:   2179},
	]}]},
	{move: "Nf6", freq:    9224,stock:1.20,book:[{move: "Ng1e2",replies:[
		{move: "Bb4", freq:  8103,book:[owen_e6_pin]},
		{move: "d5",  freq:  3486},
		{move: "c5",  freq:  2230},
		{move: "Be7", freq:  1729},
	]}]},
	{move: "d5", freq:     2761},
]}

const deep_wayward = {move: "a3",replies:[
	{move: "Bg4", freq:  74,book:[{move: "Qg3",replies:[
		{move: "Qd7", freq: 21,book:[{move: "Qh4",replies:[
			{move: "Nd4",freq:   1,book:[{move: "Nxd4"}]},
			{move: "Be6",freq:   1,book:[{move: "Be6"}]},
			{move: "Bxe2",freq:  1,book:[{move: "Nxd2"}]},
		]}]},
		{move: "Bxe2",freq: 20,book:[{move: "Nxe2",replies:[
			{move: "a6",freq: 10,book:[{move: "h4"}]},
			{move: "d5",freq:  7,book:[{move: "exd5"}]},
			{move: "Nh5",freq: 3},
			{move: "Nd4",freq: 2},
		]}]},
		{move: "Nd4",freq:   6},
		{move: "Be6",freq:   6},
		{move: "a6", freq:   4},
	]}]},
	{move: "Be6", freq:  15,book:[{move: "Bg5"}]},
	{move: "a6", freq:   14,book:[{move: "h4"}]},
	{move: "Nd4", freq:   8},
	{move: "h6", freq:    2},
]};

const deep_wayward_alt_long = [
	{move: "Nb4",  freq: 63,book:[{move: "O-O-O"}]},
	{move: "Nd7",  freq: 51,book:[{move: "O-O-O"}]},
	{move: "Kh7",  freq: 37,book:[{move: "O-O-O"}]},
	{move: "Ne7",  freq: 30,book:[{move: "g4"}]},
	{move: "a6",   freq: 25,book:[{move: "Rd1"}]},
	{move: "Qd7",  freq: 19,book:[{move: "O-O-O"}]},
	{move: "Qe7",  freq: 18,book:[{move: "O-O-O"}]},
	{move: "Nh7",  freq: 18,book:[{move: "O-O-O"}]},
	{move: "Nh5",  freq: 12,book:[{move: "O-O-O"}]},
	{move: "Re8",  freq:  9,book:[{move: "O-O-O"}]},
]

const deep_wayward_alt = {move: "h3",replies:[
	{move: "Be6", freq:  2794,book:[{move: "Bg5",replies:[
		{move: "Bxc4", freq: 1517,book:[{move: "dxc4",replies:[
			{move: "h6",   freq: 839,book:[{move: "Be3",replies: deep_wayward_alt_long}]},
			{move: "Nd4",  freq: 365,book:[{move: "Nxd4",replies:[
				{move: "exd4", freq:   363,book:[{move: "Nd5",replies:[
					{move: "Re8",  freq: 132,book:[{move: "Bxf6"}]},
					{move: "c6",   freq: 112,book:[{move: "Nxf6+"}]},
					{move: "h6",   freq:  39,book:[{move: "Nxf6+"}]},
					{move: "Nxd5", freq:  18,book:[{move: "Bxd8"}]},
					{move: "c5",   freq:  16,book:[{move: "Nxf6+"}]},
					{move: "Qd7",  freq:  12,book:[{move: "Bxf6"}]},
				]}]},
			]}]},
			{move: "Nb4",  freq: 229,book:[{move: "O-O-O"}]},
			{move: "Re8",  freq:  74},
			{move: "Qe7",  freq:  74},
		]}]},
		{move: "h6",   freq:  625,book:[{move: "Be3",replies:[
			{move: "Bxc4", freq:  77,book:[{move: "dxc4",replies: deep_wayward_alt_long}]},
			{move: "a6",   freq:  33,book:[{move: "O-O",replies:[
				{move: "b5",  freq:  2,book:[{move: "Bb3"}]},
			]}]},
			{move: "Na5",  freq:  30,book:[{move: "Bd5"}]},
			{move: "Qd7",  freq:  18},
		]}]},
		{move: "a6",   freq:  142,book:[{move: "Nd5"}]},
		{move: "Nd4",   freq: 119,book:[{move: "Nxd4"}]},
		{move: "Nb4",   freq:  71},
	]}]},
	{move: "a6", freq:    986,book:[{move: "a3",replies:[
		{move: "b5", freq:   125,book:[{move: "Ba2"}]},
		{move: "Be6", freq:   65,book:[{move: "O-O"}]},
		{move: "Nd4", freq:   18,book:[{move: "Nxd4"}]},
	]}]},
	{move: "Na5", freq:   847,book:[{move: "a4",replies:[
		{move: "Nxc4", freq:  2,book:[{move: "dxc4",replies:[
			{move: "Be6", freq:  1,book:[{move: "b3"}]},
			{move: "c6",  freq:  1,book:[{move: "b3"}]},
			{move: "Ne8", freq:  1,book:[{move: "g4"}]},
		]}]},
	]}]},
	{move: "Nd4", freq:   650,book:[{move: "Nxd4"}]},
	{move: "h6", freq:    406,book:[{move: "g4"}]},
	{move: "Nb4", freq:   345,book:[{move: "Bb3"}]},
	{move: "Re8", freq:   148},
	{move: "Qe7", freq:    98},
	{move: "Nh5", freq:    93},
	{move: "Nd7", freq:    84},
]};

const inner_wayward = [
	{move: "Bg4",  freq: 664,book:[{move: "Qg3",replies:[
		{move: "Bxe2",  freq:  153,book:[{move: "Nxe2"}]},
		{move: "Qd7",  freq:   130,book:[{move: "f3"}]},
		{move: "O-O",  freq:    90},
		{move: "h5",   freq:    73},
		{move: "Nb4",  freq:    22},
		{move: "Be6",   freq:   20},
		{move: "h6",   freq:    18},
		{move: "Na5",   freq:   10},
	]}]},
	{move: "O-O",  freq: 396,book:[deep_wayward_alt,deep_wayward]},
	{move: "h6",   freq: 151},
	{move: "Be6",  freq: 147},
	{move: "Na5",  freq:  57},
	{move: "Nb4",  freq:  33},
];

const deep_way_phil = {move: "Nf3",replies:[
	{move: "O-O", freq:  25,book:[{move: "Nc3",replies:[
		{move: "Nc6", freq:   30,book:[{move: "a4",replies:[
			{move: "Bg4", freq:  2,book:[{move: "h3"}]},
			{move: "h6",  freq:  1},
		]}]},
		{move: "c6",  freq:   18,book:[{move: "a4"}]},
		{move: "Bg4", freq:   13,book:[{move: "h3"}]},
		{move: "Be6", freq:    9,book:[{move: "Bxe6"}]},
	]},{move: "O-O",replies:[
		{move: "Bg4", freq:   7,book:[{move: "h3",replies:[
			{move: "Bxf3", freq:   4,book:[{move: "Qxf3"}]},
		]}]},
		{move: "Nc6", freq:   4,book:[{move: "a4"}]},
		{move: "c5",  freq:   2,book:[]},
	]}]},
	{move: "Bg4", freq:   6,book:[{move: "h3"}]},
	{move: "Nc6", freq:   6,book:[{move: "Nc3"}]},
	{move: "c6",  freq:   3},
]}

const alt_way_qf6 = {move:"Qf3",replies:[
	{move: "Qxf3", freq:  197,book:[{move: "Nxf3",replies:[
		{move: "d6",  freq:    66,book:[{move: "Ng5",replies:[
			{move: "Nh6", freq:  285,book:[{move: "d3"}]},
			{move: "Be6", freq:   55,book:[{move: "Bxe6",replies:[
				{move: "fxe6",  freq:   45,book:[{move: "Nxe6",replies:[
					{move: "Na6",  freq:  20,book:[{move: "Nxf8",replies:[
						{move: "Kxf8", freq: 3,book:[{move: "f4"}]},
					]}]},
					{move: "Ke7",  freq:  11,book:[{move: "Nc7"}]},
					{move: "Nf6",  freq:   6,book:[{move: "Nc7+"}]},
					{move: "Kd7",  freq:   5,book:[{move: "Nxf8+"}]},
				]}]},
			]}]},
			{move: "d5",  freq:   12,book:[{move: "exd5"}]},
		]}]},
		{move: "Bg7", freq:    38,book:[{move: "a4"}]},
		{move: "f6",  freq:    27,book:[{move: "d4"}]},
		{move: "Nf6", freq:    21,book:[{move: "Nxe5",replies:[
			{move: "d5",  freq:  11,book:[{move: "exd5",replies:[
				{move: "cxd5",  freq:  9,book:[{move: "Nxd5",replies:[
					{move: "Nxd5",  freq:  6,book:[{move: "Bxd5",replies:[
						{move: "Be6",  freq:   4,book:[{move: "Bxb7"}]},
					]}]},
				]}]},
			]}]},
			{move: "d6",  freq:   4},
		]}]},
		{move: "b5",  freq:    18,book:[{move: "Bb3"}]},
	]}]},
	{move: "Bg7", freq:   105,book:[{move: "a4",replies:[
		{move: "Ne7", freq:   2,book:[{move: "d3"}]},
		{move: "d6",  freq:   2,book:[{move: "b3"}]},
	]}]},
	{move: "d6",  freq:    83,book:[{move: "d3",replies:[
		{move: "Qxf3",  freq: 398,book:[{move: "Nxf3"}]},
		{move: "Bg7",  freq:  391,book:[{move: "Qg3"}]},
		{move: "Be6",  freq:  261,book:[{move: "Bxe6"}]},
		{move: "h6",   freq:  125},
		{move: "b5",   freq:   98},
		{move: "Be7",   freq:  77},
	]}]},
	{move: "b5",  freq:    78,book:[{move: "Bb3"}]},
	{move: "Bc5",  freq:   69,book:[{move: "Qg3"}]},
	{move: "Bb4",  freq:   46,book:[{move: "Qg3"}]},
	{move: "Be7",  freq:   21,book:[{move: "a4"}]},
	{move: "Qe7",  freq:   14,book:[{move: "a4"}]},
	{move: "Bh6",  freq:   14,book:[{move: "a4"}]},
]}

const wayward_d6 = {move: "Bc4",replies:[
	{move: "g6", freq: 57117,book:[{move: "Qd1",replies:[
		{move: "Nf6", freq: 420,book:[{move: "d3",replies:[
			{move: "Bg7", freq:  95,book:[deep_way_phil]},
			{move: "Be7", freq:  21,book:[{move: "Nf3"}]},
			{move: "Nc6", freq:  14},
			{move: "c6",  freq:  10},
			{move: "a6",  freq:   8},
			{move: "Be6", freq:   7},
			{move: "Bg4", freq:   6},
		]}]},
		{move: "Bg7", freq: 113,book:[{move: "d3",replies:[
			{move: "Nf6", freq:  20,book:[deep_way_phil]},
			{move: "Ne7", freq:   5},
			{move: "Nd7", freq:   2},
		]}]},
		{move: "Nc6", freq:  37},
		{move: "Be6", freq:  35},
		{move: "Qf6", freq:  18},
		{move: "c6",  freq:  17},
		{move: "f5",  freq:  16},
		{move: "a6",  freq:  10},
		{move: "Qg5", freq:   7},
		{move: "Be7", freq:   7},
	]},{move: "Qf3",replies:[
		{move: "Nf6", freq:  38560,book:[{move: "Nc3",replies:[
			{move: "Bg7",  freq:  2362,book:[{move: "Ng1e2"}]},
			{move: "c6",   freq:   967},
			{move: "Bg4",  freq:   556},
			{move: "Nc6",  freq:   470},
			{move: "Be7",  freq:   357},
			{move: "Be6",  freq:   106},
		]}]},
		{move: "Qf6", freq:   9260,book:[{move: "Nc3"}]},
		{move: "Qe7", freq:   2111,book:[{move: "Ne2"}]},
		{move: "Be6", freq:   1951,book:[{move: "Bxe6"}]},
		{move: "f6", freq:    1280,book:[{move: "Ne2"}]},
		{move: "f5", freq:    1251,book:[{move: "exf5"}]},
	]}]},
	{move: "Qe7", freq:25814,book:[{move: "Qd1",replies:[
		{move: "Nf6", freq:  78,book:[{move: "d3",replies:[
			{move: "Nc6", freq:  98,book:[{move: "Nc3"}]},
			{move: "Be6", freq:  90,book:[{move: "Bxe6"}]},
			{move: "h6",  freq:  50,book:[{move: "Nc3"}]},
			{move: "c6",  freq:  33},
			{move: "Bg4", freq:  28},
			{move: "g6",  freq:  27},
			{move: "a6",  freq:  27},
			{move: "Qd8", freq:   9},
		]}]},
		{move: "Be6", freq:  27,book:[{move: "d3"}]},
		{move: "Nc6", freq:  14},
		{move: "c6", freq:    9},
	]}]},
	{move: "Qf6", freq:25308,book:[{move: "Nc3",replies:[
		{move: "c6", freq:  4073,book:[{move: "d3",replies:[
			{move: "g6",freq:   947,book:[{move: "Qd1"}]},
			{move: "h6",freq:   635,book:[{move: "Be3"}]},
			{move: "Be6",freq:  471},
			{move: "Be7",freq:  317},
			{move: "Qg6",freq:  201},
			{move: "Ne7",freq:   92},
			{move: "b5",freq:    91},
			{move: "Nh6",freq:   89},
			{move: "a5",freq:    84},
			{move: "Nd7",freq:   46},
		]}]},
		{move: "g6", freq:  2010,book:[{move: "Qd1"}]},
		{move: "Be6",freq:  1547,book:[{move: "d3"}]},
		{move: "Ne7",freq:   475},
		{move: "Qg6",freq:   226},
		{move: "Nc6",freq:   212},
		{move: "Nh6",freq:   138},
		{move: "Be7",freq:    76},
	]}]},
	{move: "Be6", freq: 6118,book:[{move: "Bxe6"}]},
	{move: "Nh6", freq: 6018,book:[{move: "d3"}]},
	{move: "Qd7", freq: 4386,book:[{move: "Qe2"}]},
	{move: "Nf6", freq: 4172,book:[{move: "Qxf7#"}]},
	{move: "Nc6", freq:  966,book:[{move: "Qxf7#"}]},
	{move: "Be7", freq:  638,book:[{move: "Qxf7+"}]},
	{move: "h6", freq:   226,book:[{move: "Qxf7#"}]},
	{move: "d5", freq:   208,book:[{move: "Qxe5+"}]},
	{move: "c6", freq:   169,book:[{move: "Qxf7#"}]},
]}

const wayward = {move:"Qh5",replies:[
	{move: "Nc6", freq: 344451,book:[{move: "Bc4",replies:[
		{move: "g6", freq:  249975,book:[{move: "Qf3",replies:[
			{move: "Nf6", freq: 188121,book:[{move: "Ne2",replies:[
				{move: "Bg7", freq: 29774,book:[{move: "d3",replies:[
					{move: "O-O", freq:  9721,book:[{move: "Nb1c3",replies:[
						{move: "d6", freq:   6951,book:[deep_wayward_alt,deep_wayward]},
						{move: "Nd4", freq:  1458,book:[{move: "Nxd4",replies:[
							{move: "exd4",  freq:  1437,book:[{move: "Nd5",replies:[
								{move: "Nxd5",  freq: 603,book:[{move: "Bxd5",replies:[
									{move: "c6",  freq:   607,book:[{move: "Bb3",replies:[
										{move: "d5",  freq: 337,book:[{move: "exd5",replies:[
											{move: "Re8+",  freq:  111,book:[{move: "Kd1"}]},
											{move: "cxd5",  freq:   25},
										]}]},
										{move: "d6",  freq:  75},
										{move: "a5",  freq:  69},
										{move: "b5",  freq:  23},
										{move: "Re8", freq:  16},
										{move: "Qe7", freq:  10},
										{move: "Kh8", freq:   9},
									]}]},
									{move: "d6",  freq:    29},
									{move: "c5",  freq:     7},
								]}]},
								{move: "c6",    freq: 109,book:[{move: "Nxf6+"}]},
								{move: "d6",    freq:  18,book:[{move: "Bg5"}]},
								{move: "Re8",   freq:   7},
							]}]},
						]}]},
						{move: "Na5", freq:  1117,book:[{move: "a4",replies:[
							{move: "Nxc4",   freq:   3,book:[{move: "dxc4",replies:[
								{move: "c6",  freq:   2,book:[{move: "h3"}]},
								{move: "Ne8",  freq:  1,book:[{move: "h4"}]},
							]}]},
						]}]},
						{move: "h6", freq:   1065,book:[{move: "h4",replies:[
							{move: "d6",  freq:  69,book:[{move: "h5",replies:[
								{move: "g5", freq:  10,book:[{move: "Bxg5",replies:[
									{move: "hxg5", freq:  2,book:[{move: "h6",replies:[
										{move: "Bg4", freq: 1,book:[{move: "Qg3"}]},
										{move: "Bh8", freq: 1,book:[{move: "h7+"}]},
									]}]},
								]}]},
								{move: "Bg4", freq:  7,book:[{move: "Qg3"}]},
								{move: "gxh5", freq: 1},
								{move: "Nxh5", freq: 1},
							]}]},
							{move: "Kh7", freq:   8},
							{move: "Nd4", freq:   7},
							{move: "Na5", freq:   7},
						]}]},
						{move: "a6", freq:    889,book:[{move: "h4"}]},
						{move: "Nb4", freq:   263},
						{move: "d5",  freq:   227},
						{move: "Ne7",  freq:  107},
						{move: "Re8",  freq:   77},
						{move: "b6",   freq:   37},
					]}]},
					{move: "d6", freq:   3031,book:[{move: "Nb1c3",replies:inner_wayward}]},
					{move: "h6", freq:   1166,book:[{move: "Nb1c3",replies:[
						{move: "O-O",  freq:  537,book:[{move: "h4"}]},
						{move: "d6",  freq:   392,book:[{move: "h3"}]},
						{move: "Na5",  freq:   46},
						{move: "a6",  freq:    24},
						{move: "Nd4",  freq:   20},
					]}]},
					{move: "Na5", freq:   371,book:[{move: "Nb1c3"}]},
					{move: "Nd4", freq:   255},
					{move: "a6",  freq:   162},
					{move: "d5",  freq:   129},
					{move: "Nb4", freq:   129},
					{move: "Qe7", freq:    21},
				]}]},
				{move: "d6", freq:   5923,book:[{move: "Nb1c3",replies:[
					{move: "Bg4", freq: 621,book:[{move: "Qe3",replies:[
						{move: "Bxe2", freq: 57,book:[{move: "Nxe2",replies:[
							{move: "Bg7",  freq: 9,book:[{move: "Qf3"}]},
							{move: "Ng4",  freq: 5,book:[{move: "Qb3"}]},
							{move: "Be7",  freq: 4,book:[{move: "a3"}]},
							{move: "h5",   freq: 4,book:[{move: "Qb3"}]},
							{move: "Nb4",  freq: 3},
						]}]},
						{move: "h5",   freq: 38,book:[{move: "O-O"}]},
						{move: "Bg7",  freq: 26,book:[{move: "d3"}]},
						{move: "Nb4",  freq: 12},
					]}]},
					{move: "Bg7", freq: 342,book:[{move: "d3",replies:inner_wayward}]},
					{move: "Be6", freq:  83},
					{move: "Nd4", freq:  30},
				]}]},
				{move: "Bc5", freq:  3264,book:[{move: "d3",replies:[
					{move: "d6", freq:   570,book:[{move: "Bg5"}]},
					{move: "O-O", freq:  469,book:[{move: "Bg5",replies:[
						{move: "Be7", freq:  178,book:[{move: "Bh6",replies:[
							{move: "Re8", freq:  171,book:[{move: "Nb1c3"}]},
						]}]},
						{move: "Kg7", freq:   39,book:[{move: "Nb1c3"}]},
						{move: "Nd4", freq:   12,book:[{move: "Nxd4"}]},
					]}]},
					{move: "h6",  freq:  269,book:[{move: "Nb1c3"}]},
					{move: "Nd4",  freq: 122,book:[{move: "Nxd4"}]},
					{move: "d5", freq:    57},
					{move: "Nb4", freq:   34},
					{move: "Na5", freq:   33},
					{move: "a6", freq:    30},
					{move: "Be7", freq:   23},
					{move: "Bd4", freq:   21},
				]}]},
				{move: "Be7", freq:  1139,book:[{move: "Nb1c3"}]},
				{move: "d5", freq:    882,book:[{move: "exd5"}]},
				{move: "Nd4", freq:   793,book:[{move: "Nxd4"}]},
				{move: "Na5", freq:   543,book:[{move: "d3"}]},
				{move: "Nb4", freq:   489,book:[{move: "Qb3"}]},
				{move: "Bh6", freq:   400,book:[{move: "Nb1c3"}]},
				{move: "a6", freq:    390,book:[{move: "Nb1c3"}]},
				{move: "h6", freq:    113,book:[]},
			]}]},
			{move: "Qf6", freq:  35167,book:[{move: "Qd1",replies:[
				{move: "Bc5", freq:   576,book:[{move: "Nf3",replies:[
					{move: "d6",  freq:  254,book:[{move: "d3",replies:[
						{move: "Bg4",    freq: 23,book:[{move: "c3",replies:[
							{move: "Bxf3",    freq:  1,book:[{move: "Qxf3",replies:[
								{move: "Qxf3",     freq:  1,book:[{move: "gxf3",replies:[
									{move: "Nf6",  freq:  1,book:[{move: "a4"}]},
								]}]},
							]}]},
						]}]},
						{move: "h6",     freq:  5},
						{move: "Nd4",    freq:  3},
						{move: "Ng8e7",  freq:  1},
					]}]},
					{move: "Nd4", freq:  172,book:[{move: "Nxd4",replies:[
						{move: "Bxd4",    freq:  107,book:[{move: "O-O",replies:[
							{move: "d6",  freq: 42,book:[{move: "c3",replies:[
								{move: "Bb6", freq: 19,book:[{move: "d4",replies:[
									{move: "exd4",freq: 3,book:[{move: "a4",replies:[
										{move: "a5", freq: 1,book:[{move: "cxd4"}]},
									]}]},
									{move: "Ne7", freq: 1},
									{move: "Qe7", freq: 1},
								]}]},
							]}]},
							{move: "Ne7", freq: 23},
							{move: "Nh6", freq:  7},
						]}]},
					]}]},
					{move: "Ng8e7", freq: 48},
					{move: "Nh6",   freq: 12},
					{move: "g5",    freq: 11},
					{move: "d5",    freq:  7},
					{move: "h6",    freq:  6},
				]}]},
				{move: "Bg7", freq:   159,book:[{move: "Nc3"}]},
				{move: "d6",  freq:    90,book:[{move: "d3"}]},
				{move: "Nd4", freq:    37},
				{move: "Ng8e7",freq:   24},
				{move: "Nh6", freq:    23},
				{move: "Na5", freq:    12},
				{move: "a6",  freq:     9},
			]}]},
			{move: "Qe7", freq:   5881,book:[{move: "Ne2"}]},
			{move: "f6",  freq:   3077,book:[{move: "Ne2"}]},
			{move: "Nd4",  freq:  2118,book:[{move: "Qxf7#"}]},
			{move: "Nh6",  freq:  1821,book:[{move: "Ne2"}]},
			{move: "Bg7",  freq:  1497,book:[{move: "Qxf7#"}]},
			{move: "f5",  freq:   1304,book:[{move: "Ne2"}]},
			{move: "d6",  freq:    389,book:[{move: "Qxf7#"}]},
			{move: "Bc5",  freq:   369,book:[{move: "Qxf7#"}]},
			{move: "d5",  freq:    348,book:[{move: "Bxd5"}]},
			{move: "Bh6",  freq:    78,book:[{move: "Qxf7#"}]},
		]}]},
		{move: "Qf6", freq:  96155,book:[{move: "Nc3",replies:[
			{move: "Bc5", freq:  9362,book:[{move: "Nf3",replies:[
				{move: "Ng8e7", freq:   5979,book:[{move: "d3",replies:[
					{move: "O-O",   freq:   791,book:[{move: "Bg5"}]},
					{move: "h6",    freq:   734,book:[{move: "Bg5"}]},
					{move: "d6",    freq:   656,book:[{move: "Be3"}]},
					{move: "g6",    freq:   362},
					{move: "Nd4",   freq:   318},
					{move: "Qg6",   freq:   200},
					{move: "a6",    freq:    59},
					{move: "Ng6",   freq:    47},
					{move: "Nb4",   freq:    30},
				]}]},
				{move: "g6",    freq:   4544,book:[{move: "Qg5",replies:[
					{move: "Qxg5",   freq:  1084,book:[{move: "Nxg5"}]},
					{move: "h6",   freq:    1041,book:[{move: "Qg3"}]},
					{move: "d6",   freq:     730,book:[{move: "Nd5"}]},
					{move: "Nd4",   freq:    559,book:[{move: "Qxf6"}]},
					{move: "Be7",   freq:    126},
					{move: "Qg7",   freq:    106},
					{move: "Nb4",   freq:     97},
				]}]},
				{move: "d6",    freq:   2416,book:[{move: "Nd5"}]},
				{move: "Nd4",   freq:   2224,book:[{move: "Nd5"}]},
				{move: "Qg6",   freq:    370},
				{move: "Nh6",   freq:    283,book:[{move: "Nd5"}]},
				{move: "Nb4",   freq:    283},
			]}]},
			{move: "g6", freq:   8053,book:[{move: "Qd1",replies:[
				{move: "Bc5",     freq: 681,book:[{move: "Nf3",replies:[
					{move: "Ng8e7",   freq:  237,book:[{move: "d3",replies:[
						{move: "h6",    freq:  58,book:[{move: "Be3"}]},
						{move: "d6",    freq:  28,book:[{move: "Bg5",replies:[
							{move: "Qg7",   freq:  22,book:[{move: "Nb5",replies:[
								{move: "Bb6",   freq:  5,book:[{move: "Be3"}]},
							]}]},
						]}]},
						{move: "O-O",   freq:  24},
						{move: "Nd4",   freq:  21},
					]}]},
					{move: "d6",   freq:     186,book:[{move: "Nd5",replies:[
						{move: "Bd8",   freq:   123,book:[{move: "c3"}]},
					]}]},
					{move: "Nd4",   freq:    156,book:[{move: "Nxd4"}]},
					{move: "g5",    freq:     12},
					{move: "Nh6",   freq:     12},
				]}]},
				{move: "Ng8e7",   freq: 511,book:[{move: "Nb5",replies:[
					{move: "Kd8",     freq: 123,book:[{move: "d3",replies:[
						{move: "a6",   freq:  48,book:[{move: "Nc3",replies:[
							{move: "b5",     freq:  14,book:[{move: "Bb3"}]},
							{move: "d6",     freq:  11,book:[{move: "Be3"}]},
							{move: "Na5",    freq:   9,book:[{move: "Be3"}]},
							{move: "Nd4",    freq:   7,book:[{move: "a4"}]},
							{move: "Bg7",    freq:   6,book:[{move: "Ng1e2"}]},
						]}]},
					]}]},
					{move: "Rb8",     freq:   3},
				]}]},
				{move: "Bg7",     freq: 135},
				{move: "d6",     freq:  133},
				{move: "Nd4",    freq:   76},
				{move: "Bb4",    freq:   63},
			]}]},
			{move: "Ng8e7", freq:4422,book:[{move: "Nb5",replies:[
				{move: "Kd8", freq: 686,book:[{move: "Bxf7",replies:[
					{move: "g6", freq:  37,book:[{move: "Qf3",replies:[
						{move: "Qxf3",    freq:   12,book:[{move: "Nxf3"}]},
						{move: "Bg7",     freq:    9,book:[{move: "Qxf6"}]},
						{move: "Qg7",     freq:    4,book:[{move: "Ne2"}]},
					]}]},
					{move: "a6", freq:  17,book:[{move: "Nc3"}]},
				]}]},
				{move: "g6", freq:  242,book:[{move: "Qf3",replies:[
					{move: "Qxf3", freq:172,book:[{move: "Nxf3",replies:[
						{move: "Kd8", freq:  280,book:[{move: "Ng5"}]},
						{move: "Na5", freq:   18},
						{move: "Rb8", freq:   12},
					]}]},
					{move: "Nd4", freq:  20,book:[{move: "Qxf6"}]},
					{move: "Kd8", freq:  12,book:[{move: "Qxf6"}]},
				]}]},
				{move: "Nd4", freq:  60},
				{move: "Rb8", freq:  13,book:[{move: "Bxf7+"}]},
			]}]},
			{move: "Nd4",   freq:1932,book:[{move: "Nd5",replies:[
				{move: "Qg6", freq:  518,book:[{move: "Qxe5+"}]},
				{move: "Nxc2+",freq: 220,book:[{move: "Kd1"}]},
				{move: "Qc6",freq:   104,book:[{move: "c3",replies:[
					{move: "Nc2+",freq:  1,book:[{move: "Kd1",replies:[
						{move: "Nxa1",freq: 1,book:[{move: "Nxc7+",replies:[
							{move: "Kd8",freq: 1,book:[{move: "Nxa8"}]},
							{move: "Ke7",freq: 1,book:[{move: "Qxf7+",replies:[
								{move: "Kd8",freq: 1,book:[{move: "Nxa8"}]},
							]}]},
						]}]},
					]}]},
				]}]},
				{move: "Qd6",freq:    62},
			]}]},
			{move: "Qg6", freq:  1220,book:[{move: "Qxg6"}]},
			{move: "d6", freq:    705,book:[{move: "Nd5"}]},
			{move: "Bb4", freq:   281,book:[{move: "Nd5"}]},
		]}]},
		{move: "Qe7", freq:  59409,book:[{move: "Nc3",replies:[
			{move: "Nf6",  freq: 19138,book:[{move: "Qd1",replies:[
				{move: "d6",   freq: 3185,book:[{move: "d3",replies:[
					{move: "Be6",   freq: 807,book:[{move: "Nd5",replies:[
						{move: "Bxd5",   freq: 46,book:[{move: "exd5",replies:[
							{move: "Na5",    freq:  18,book:[{move: "Bb5+",replies:[
								{move: "c6",    freq:   13,book:[{move: "dxc6",replies:[
									{move: "bxc6",    freq:  11,book:[{move: "Ba4"}]},
									{move: "Nxc6",    freq:   2},
								]}]},
							]}]},
							{move: "Nd4",    freq:   9},
							{move: "Nb8",    freq:   7},
							{move: "Nb4",    freq:   3},
						]}]},
						{move: "Qd8",    freq:  8},
						{move: "Nxd5",    freq: 4},
						{move: "O-O-O",   freq: 3},
					]}]},
					{move: "Bg4",   freq: 273},
					{move: "h6",    freq: 214},
					{move: "Nd4",   freq:  75},
					{move: "66",    freq:  72},
				]}]},
				{move: "Nd4",   freq: 708,book:[{move: "Ng1e2"}]},
				{move: "g6",   freq:  515,book:[{move: "d3"}]},
				{move: "Qc5",   freq: 482,book:[{move: "d3"}]},
				{move: "a6",    freq: 408,book:[{move: "Nf3"}]},
				{move: "Na5",   freq: 363,book:[{move: "Be2"}]},
				{move: "Qd8",   freq: 336,book:[{move: "d3"}]},
				{move: "h6",    freq:  84},
				{move: "Qb4",   freq:  64},
			]}]},
			{move: "g6",   freq:   870,book:[{move: "Qd1"}]},
			{move: "Nd4",  freq:   503},
			{move: "d6",  freq:    243},
		]}]},
		{move: "Nf6", freq:  19211,book:[{move: "Qxf7#"}]},
		{move: "Nh6", freq:  11372,book:[{move: "Nc3",replies:[
			{move: "g6",   freq:   33,book:[{move: "Qd1"}]},
			{move: "Bc5",  freq:   11},
			{move: "d6",   freq:    9},
			{move: "Qf6",  freq:    9},
			{move: "d5",   freq:    7},
		]}]},
		{move: "d5", freq:    3199,book:[{move: "Bxd5"}]},
		{move: "Bc5", freq:   2614,book:[{move: "Qxf7#"}]},
		{move: "d6", freq:    2228,book:[{move: "Qxf7#"}]},
		{move: "h6", freq:     414,book:[{move: "Qxf7#"}]},
		{move: "Be7", freq:    308,book:[{move: "Qxf7#"}]},
		{move: "Nd4", freq:    228,book:[{move: "Qxf7#"}]},
		{move: "g5", freq:     191,book:[{move: "Qxf7#"}]},
	]}]},
	{move: "d6", freq:   87845,book:[wayward_d6]},
	{move: "Qf6", freq:  70822,book:[{move: "Nc3",replies:[
		{move: "c6", freq:  3633,book:[{move: "Bc4",replies:[
			{move: "g6", freq:  761,book:[{move: "Qd1",replies:[
				{move: "Bc5", freq: 33,book:[{move: "Nf3",replies:[
					{move: "d6",  freq:  21,book:[{move: "d4"}]},
					{move: "Ne7", freq:   7,book:[{move: "d4"}]},
					{move: "b5",  freq:   3},
				]}]},
				{move: "b5", freq:  17},
				{move: "Bb4", freq: 12},
				{move: "Bg7", freq: 10},
				{move: "Ne7", freq:  5},
				{move: "a5",  freq:  5},
				{move: "d6",  freq:  4},
			]},alt_way_qf6]},
			{move: "Bc5", freq: 665,book:[{move: "f4",replies:[
				{move: "Qxf4",  freq:  10,book:[{move: "d4"}]},
				{move: "g6",    freq:   7,book:[{move: "Qxe5+"}]},
				{move: "d6",    freq:   3,book:[{move: "d3"}]},
			]}]},
			{move: "d6",  freq: 330,book:[{move: "d3"}]},
			{move: "Bb4", freq: 100,book:[{move: "d3"}]},
			{move: "b5", freq:   86},
			{move: "Ne7", freq:  82},
			{move: "Be7", freq:  43},
		]}]},
		{move: "Bc5", freq: 3496,book:[{move: "Nf3",replies:[
			{move: "d6", freq:  1022,book:[{move: "d4",replies:[
				{move: "exd4", freq:  4,book:[{move: "Nd5",replies:[
					{move: "Qd8", freq:  4,book:[{move: "Bg5",replies:[
						{move: "Qd7",  freq:  6,book:[{move: "b4"}]},
						{move: "Nf6",  freq:  4,book:[{move: "Bxf6"}]},
						{move: "g6",   freq:  1},
					]}]},
				]}]},
				{move: "Bb6",  freq:  1},
				{move: "g6",   freq:  1},
				{move: "Bxd4", freq:  1},
			]}]},
			{move: "Nc6", freq:  422,book:[{move: "Nd5"}]},
			{move: "g6",  freq:  417,book:[{move: "Qxe5+"}]},
			{move: "c6",  freq:  400,book:[{move: "Qxe5+"}]},
			{move: "Ne7",  freq: 194,book:[{move: "Qxe5"}]},
			{move: "Nh6",  freq:  36},
		]}]},
		{move: "g6", freq:  2125,book:[{move: "Qd1",replies:[
			{move: "c6",   freq:  94,book:[{move: "Nf3",replies:[
				{move: "d6",   freq:  12,book:[{move: "d4"}]},
				{move: "Bb4",  freq:   6},
				{move: "Bc5",  freq:   5},
				{move: "Bg7",  freq:   4},
			]}]},
			{move: "Bc5",  freq:  47,book:[{move: "Nf3"}]},
			{move: "Nc6",  freq:  25,book:[{move: "Bc4"}]},
			{move: "Bg7",  freq:  20,book:[{move: "Nf3"}]},
			{move: "Bb4",  freq:  19,book:[{move: "Nd5"}]},
			{move: "Ne7",  freq:  17},
			{move: "d6",   freq:  11},
		]}]},
		{move: "Nc6", freq:  496},
		{move: "Ne7", freq:  339},
		{move: "d6", freq:   198},
	]}]},
	{move: "Nf6", freq:  68939,book:[{move: "Qxe5+",replies:[
		{move: "Be7", freq:  48563,book:[{move: "Qf4",replies:[
			{move: "O-O", freq: 922,book:[{move: "Nc3",replies:[
				{move: "Nc6", freq:  68,book:[{move: "e5",replies:[
					{move: "Nh5", freq:  23,book:[{move: "Qf3",replies:[
						{move: "g6", freq:  17,book:[{move: "Qd1"}]},
						{move: "Nd4", freq:  7,book:[{move: "Qe4"},{move: "Qxh5",replies:[
							{move: "Nxc2+", freq:   3,book:[{move: "Kd1",replies:[
								{move: "Nxa1", freq: 3,book:[{move: "Nf3",replies:[
									{move: "g6", freq: 1,book:[{move: "Qh6"}]},
									{move: "d6", freq: 1,book:[{move: "Bc4"}]},
									{move: "d5", freq: 1,book:[{move: "d4"}]},
									{move: "c5", freq: 1,book:[{move: "Bc4"}]},
								]}]},
							]}]},
						]}]},
						{move: "Nxe5", freq: 2},
					]}]},
					{move: "Ne8", freq:   8,book:[{move: "d4"}]},
					{move: "Re8", freq:   5},
					{move: "Nxe5", freq:  2},
				]}]},
				{move: "Re8", freq:  45,book:[{move: "e5",replies:[
					{move: "Bc5",  freq:  2,book:[{move: "Be2"}]},
					{move: "Nh5",  freq:  2,book:[{move: "Qf3"}]},
					{move: "Nd5",  freq:  1},
					{move: "Bb4",  freq:  1},
					{move: "Nd6",  freq:  1},
					{move: "Nc6",  freq:  1},
				]}]},
				{move: "d5",  freq:  40,book:[{move: "e5",replies:[
					{move: "Ne4",  freq:  9,book:[{move: "Nxe4",replies:[
						{move: "dxe4", freq:   9,book:[{move: "Qxe4"}]},
					]}]},
					{move: "Nh5",  freq:  3,book:[{move: "Qf3"}]},
					{move: "d4",  freq:   3,book:[{move: "exf6"}]},
					{move: "Nf6d7",freq:  3,book:[{move: "Nf3"}]},
					{move: "Ng4",  freq:  2},
				]}]},
				{move: "d6",  freq:  18,book:[{move: "d4"}]},
				{move: "Bd6", freq:  15,book:[{move: "Qf3"}]},
				{move: "c6",  freq:   6},
				{move: "Bb4",  freq:  4},
			]}]},
			{move: "Nc6", freq: 492,book:[{move: "e5",replies:[
				{move: "Nd5", freq: 129,book:[{move: "Qe4",replies:[
					{move: "Nb6", freq:   55,book:[{move: "d4",replies:[
						{move: "d5", freq:  10,book:[{move: "exd6",replies:[
							{move: "Qxd6", freq:  3,book:[{move: "c3"}]},
						]}]},
						{move: "O-O", freq:  5},
						{move: "d6",  freq:  3},
						{move: "Bg5", freq:  1},
					]}]},
					{move: "Nd4b4", freq: 15,book:[{move: "a3"}]},
					{move: "Nc3b4", freq:  6,book:[{move: "a3"}]},
					{move: "d6",    freq:  4},
				]}]},
				{move: "Nh5", freq:   9,book:[{move: "Qa5"}]},
				{move: "Ng8", freq:   7},
			]}]},
			{move: "d6",  freq: 204,book:[{move: "d4",replies:[
				{move: "O-O", freq:   64,book:[{move: "Bd3"}]},
				{move: "Nc6", freq:   62,book:[{move: "c3"}]},
				{move: "Nh5", freq:   12},
				{move: "hj6", freq:    9},
			]}]},
			{move: "Bd6", freq:  77},
			{move: "d5", freq:   60},
			{move: "Nh5", freq:  17},
		]}]},
		{move: "Qe7", freq:  15555,book:[{move: "Qxe7+",replies:[
			{move: "Bxe7", freq:  8307,book:[{move: "Nc3",replies:[
				{move: "O-O", freq: 786,book:[{move: "e5",replies:[
					{move: "Ng4", freq:   46,book:[{move: "Nd5",replies:[
						{move: "Bc5", freq:  3,book:[{move: "Nxc7",replies:[
							{move: "Nxf1", freq:  1,book:[{move: "b4"}]},
							{move: "Bxf1+", freq: 1,book:[{move: "Ke2"}]},
						]}]},
						{move: "Bd8", freq:  2},
						{move: "Nc6", freq:  2},
						{move: "Na6", freq:  2},
					]}]},
					{move: "Ne8", freq:   19,book:[{move: "d4"}]},
					{move: "Nh5", freq:   11,book:[{move: "d4"}]},
					{move: "Nd5", freq:    5,book:[{move: "Nxd5"}]},
				]}]},
				{move: "Nc6", freq: 709,book:[{move: "Bc4",replies:[
					{move: "O-O", freq:   66,book:[{move: "Nf3"}]},
					{move: "d6",  freq:   49,book:[{move: "d3"}]},
					{move: "Nd4", freq:   34,book:[{move: "Bb3"}]},
					{move: "Bb4",  freq:  24,book:[{move: "Ng1e2"}]},
				]}]},
				{move: "Bb4", freq: 549,book:[{move: "e5"}]},
				{move: "d6", freq:  234,book:[{move: "Ng1e2"}]},
				{move: "Bc5", freq:  62},
				{move: "c6", freq:   56},
				{move: "b6", freq:   45},
				{move: "d5", freq:   29},
			]}]},
			{move: "Kxe7", freq:   102,book:[{move: "Nc3"}]},
		]}]},
	]}]},
	{move: "Qe7", freq:  15817,book:[{move: "Nc3",replies:[
		{move: "Nf6", freq:  1672,book:[{move: "Qd1",replies:[
			{move: "Nc6", freq:    88,book:[{move: "Bc4"}]},
			{move: "c6", freq:     67,book:[{move: "Be2"}]},
			{move: "d6", freq:     35},
			{move: "g6", freq:     15},
			{move: "Qd8", freq:    7},
		]}]},
		{move: "c6",  freq:   517,book:[{move: "Qe2"}]},
		{move: "g6",  freq:   195,book:[{move: "Qd1"}]},
		{move: "Nc6", freq:    69},
		{move: "d6",  freq:    66},
	]}]},
	{move: "g6", freq:    7916,book:[{move: "Qxe5+",replies:[
		{move: "Qe7", freq:  3285,book:[{move: "Qxh8"}]},
		{move: "Be7", freq:  2136,book:[{move: "Qxh8"}]},
		{move: "Ne7", freq:  1286,book:[{move: "Qxh8"}]},
	]}]},
	{move: "Bc5", freq:   5426,book:[{move: "Qxe5+",replies:[
		{move: "Qe7", freq:  1428,book:[{move: "Qxg7",replies:[
			{move: "Qxe4+", freq:  490,book:[{move: "Ne2"}]},
			{move: "Qf6", freq:    300,book:[{move: "Qxf6",replies:[
				{move: "Nxf6", freq: 225,book:[{move: "d3",replies:[
					{move: "Ng4", freq:  30,book:[{move: "Nh3"}]},
					{move: "d6",  freq:  25,book:[{move: "Ne2"}]},
					{move: "Nc6", freq:  15,book:[{move: "c3"}]},
				]}]},
			]}]},
		]}]},
		{move: "Be7", freq:   993,book:[{move: "Qxg7"}]},
		{move: "Ne7", freq:   197,book:[{move: "Qxc5"}]},
	]}]},
	{move: "Bd6", freq:   2569,book:[{move: "Bc4"}]},
	{move: "d5", freq:    2527,book:[{move: "Qxe5+"}]},
	{move: "c6", freq:     720},
	{move: "Nh6", freq:    668},
	{move: "Be7", freq:    404},
]}

const owen = {move: "d4",replies:[
	{move: "Bb7", freq:   677363,book:[{move: "Nc3",replies:[
		{move: "e6", freq: 180521,book:[owen_e6]},
		{move: "g6", freq:  65709,book:[{move: "h4",replies:[
			{move: "Bg7", freq: 337,book:[{move: "h5",stock:2.47,replies:double_fia}]},
			{move: "h5", freq:   20},
		]}]},
		{move: "Nf6", freq: 36211},
		{move: "d6", freq:  22458},
		{move: "d5", freq:   7090},
	]}]},
	{move: "e6", freq:     31217,book:[{move: "Nf3"}]},
	{move: "Ba6", freq:    19616,book:[{move: "Bxa6"}]},
	{move: "g6", freq:     13960,book:[{move: "Nc3"}]},
]}

const pirc_d6_modern = [
	{move: "O-O",  freq:   123777,book:[{move: "Bd3",replies:[
		{move: "c5",  freq:   15816,book:[{move: "dxc5",replies:[
			{move: "dxc5",  freq:  6986,book:[{move: "e5",replies:[
				{move: "Nd5",  freq: 6872,book:[{move: "Nxd5",replies:[
					{move: "Qxd5",  freq: 5434,book:[{move: "Qe2",replies:[
						{move: "Nc6",  freq: 3197,book:[{move: "Be4",replies:[
							{move: "Qd8",  freq: 920,book:[{move: "Be3"}]},
							{move: "Qd7",  freq: 756,book:[{move: "Be3"}]},
						]}]},
					]}]},
				]}]},
			]}]},
			{move: "Qa5",  freq:    489,book:[]},
			{move: "Nc6",  freq:     62,book:[]},
		]}]},
		{move: "Nc6",  freq:  11077,book:[{move: "e5"}]},
		{move: "Bg4",  freq:   7226,book:[{move: "h3"}]},
		{move: "Nb8d7",  freq: 6046,book:[{move: "e5"}]},
		{move: "Na6",  freq:   5391,book:[]},
		{move: "c6",  freq:    3769,book:[]},
		{move: "a6",  freq:    1117,book:[]},
		{move: "e5",  freq:     939,book:[]},
		{move: "b6",  freq:     879,book:[]},
		{move: "Re8",  freq:    547,book:[]},
		{move: "Nf6d7",  freq:  531,book:[]},
	]}]},
	{move: "c5",  freq:     24361,book:[{move: "dxc5"}]},
	{move: "Bg4",  freq:     9923,book:[{move: "Be3"}]},
	{move: "c6",  freq:      4877,book:[]},
	{move: "Nc6",  freq:     3331,book:[]},
	{move: "Nb8d7",  freq:   3205,book:[]},
	{move: "a6",  freq:      1130,book:[]},
	{move: "Nf8d7",  freq:    949,book:[]},
	{move: "b6",  freq:       795,book:[]},
	{move: "e6",  freq:       692,book:[]},
	{move: "e5",  freq:       448,book:[]},
];

const modern_d6 = {move: "f4",replies:[
	{move: "Nf6", freq: 89559,book:[{move: "Nf3",replies:pirc_d6_modern}]},
	{move: "a6", freq:  37805,book:[{move: "Nf3"}]},
	{move: "Nc6", freq: 35234,book:[{move: "Be3"}]},
	{move: "Nd7", freq: 22115,book:[{move: "Nf3"}]},
	{move: "c6", freq:  17800,book:[{move: "Nf3"}]},
	{move: "e6", freq:   9960,book:[{move: "Nf3"}]},
	{move: "c5",  freq:  7379,book:[{move: "dxc5",replies:[
		{move: "Qa5",  freq:   1513,book:[{move: "cxd6",replies:[
			{move: "Bxc3+",  freq:  329,book:[{move: "bxc3",replies:[
				{move: "Qxc3+",  freq:  350,book:[{move: "Bd2"}]},
				{move: "exd6",   freq:   32,book:[]},
			]}]},
			{move: "exd6",   freq:  115,book:[]},
			{move: "Nc6",    freq:   71,book:[]},
			{move: "Nf6",    freq:   69,book:[]},
		]}]},
		{move: "dxc5",  freq:   692,book:[{move: "Qxd8+",replies:[
			{move: "Kxd8",  freq:  655,book:[{move: "Bd2"}]},
		]}]},
		{move: "Bxc3+",  freq:  539,book:[]},
		{move: "Nf6",  freq:    151,book:[]},
		{move: "Nc6",  freq:    116,book:[]},
	]}]},
	{move: "e5",  freq:  3663,book:[]},
]}

const modern = {move: "d4",replies:[//modern
	{move: "Bg7", freq: 1126123,book:[{move: "Nc3",replies:[
		{move: "d6", freq: 735829,book:[modern_d6]},
		{move: "c5", freq: 274177,book:[{move: "d5",replies:[//ptero
			{move: "d6",freq:  43601,book:[{move: "a4",replies:[
				{move: "Nf6",freq:  742,book:[{move: "Nf3",replies:[
					{move: "O-O", freq: 2356,book:[{move: "Bc4",replies:[
						{move: "Bg4", freq:  125,book:[{move: "h3"}]},
						{move: "Na6", freq:   92,book:[{move: "O-O"}]},
						{move: "a6",  freq:   90,book:[{move: "h3"}]},
						{move: "e6",  freq:   84,book:[{move: "O-O"}]},
						{move: "Nb8d7", freq: 69},
					]}]},
					{move: "Bg4", freq:  146,book:[{move: "Be2"}]},
				]}]},
				{move: "a6", freq:  136,book:[{move: "Nf3"}]},
				{move: "e5", freq:   58},
			]}]},
			{move: "Bxc3+", freq:  2989,book:[{move: "bxc3"}]},
			{move: "Nf6",   freq:  2818,book:[{move: "e5"}]},
			{move: "e6",    freq:  2753,book:[{move: "Nb5"}]},
			{move: "a6",    freq:  2394,book:[{move: "a4"}]},
		]}]},
		{move: "e6", freq: 192746,book:[{move: "h4",replies:[
			{move: "Ne7",freq:  590,book:[{move: "h5",replies:[
				{move: "O-O",freq:  249,book:[{move: "Qg4",replies:[
					{move: "f5", freq:  34,book:[{move: "Qh4",replies:[
						{move: "Ne7c6", freq: 2,book:[{move: "Bg5"}]},
						{move: "Bf6", freq:   2,book:[{move: "Qh2"}]},
						{move: "h6",  freq:   1,book:[{move: "Bxh6"}]},
						{move: "fxe4", freq:  1,book:[{move: "hxg6"}]},
						{move: "Nd5", freq:   1,book:[{move: "Qxd8"}]},
						{move: "Qe8", freq:   1,book:[{move: "hxg6"}]},
						{move: "g5",  freq:   1,book:[{move: "Bxg5"}]},
					]}]},
					{move: "d5", freq:  22,book:[{move: "hxg6",replies:[
						{move: "fxg6",freq:  4,book:[{move: "Qh4",replies:[
							{move: "h5",freq:  7,book:[{move: "Bg5",replies:[
								{move: "Nb8c6", freq: 3,book:[{move: "O-O-O"}]},
								{move: "dxe4",  freq: 2,book:[{move: "Bxe7"}]},
							]}]},
						]}]},
					]}]},
				]}]},
				{move: "b6",freq:    68,book:[{move: "h6"}]},
				{move: "gxh5",freq:  62,book:[{move: "Qxh5"}]},
				{move: "d5",freq:    54,book:[{move: "h6",replies:[
					{move: "Bf8", freq:  462,book:[{move: "Bg5"}]},
				]}]},
			]}]},
			{move: "h5",freq:    70},
			{move: "d6",freq:    52},
			{move: "d5",freq:    50},
		]}]},
		{move: "c6", freq: 157007,book:[{move: "f4"}]},
		{move: "b6", freq:  67243,book:[{move: "h4",replies:[
			{move: "Bb7", freq: 1212,book:[{move: "h5",stock:2.47,replies:double_fia}]},
			{move: "h5", freq:   159},
			{move: "h6", freq:    88},
		]}]},
		{move: "Nf6", freq: 59585,book:[{move: "e5",replies:[
			{move: "Ng8", freq: 47723,book:[{move: "Bf4"}]},
			{move: "Nh5", freq:  9854,book:[{move: "g4"}]},
			{move: "O-O", freq:  9242,book:[{move: "exf6"}]},
			{move: "Nd5", freq:  3333,book:[{move: "Nxd5"}]},
			{move: "d6", freq:   2654,book:[{move: "exf6"}]},
		]}]},
		{move: "d5", freq:  38270},
		{move: "a6", freq:  30427},
		{move: "Nc6", freq: 21455},
	]}]},
	{move: "d6", freq:    55035,book:[{move: "Nc3"}]},
	{move: "e6", freq:    17431,book:[{move: "h4"}]},
	{move: "b6", freq:    13448,book:[{move: "Nc3",replies:[
		{move: "Bg7", freq:  8063,book:[{move: "h4",replies:[
			{move: "Bb7",  freq: 1315,book:[{move: "h5",stock:2.47,replies:double_fia}]},
			{move: "h5",   freq:  174},
			{move: "h6",   freq:   97},
		]}]},
		{move: "Bb7", freq:  6781,book:[{move: "h4",replies:[
			{move: "Bg7",  freq: 1667,book:[{move: "h5",stock:2.47,replies:double_fia}]},
			{move: "h5",   freq:  273},
			{move: "h6",   freq:  172},
		]}]},
		{move: "e6",  freq:   991},
		{move: "d6",  freq:   374},
		{move: "Ba6", freq:   244},
	]}]},
	{move: "Nf6", freq:   12484},
	{move: "d5", freq:    11125},
]}

const rat_centre = {move: "Nf3",replies:[
	{move: "Be7",  freq: 63724,book:[{move: "Bd3",stock:1.24}]},
	{move: "h6",  freq:  49591,book:[{move: "Bd3"}]},
	{move: "c6",  freq:  40931,book:[{move: "c4"}]},
	{move: "Nd7", freq:  36697,book:[{move: "c4"}]},
	{move: "Ne7", freq:  35628,book:[{move: "c4"}]},
	{move: "g6", freq:   27463,book:[]},
	{move: "b6", freq:   21092,book:[]},
	{move: "Bd7", freq:  18483,book:[]},
	{move: "Nc6", freq:  14503,book:[]},
	{move: "d5", freq:    8832,book:[]},
]}

const whiteBook = {
	book: [
		{move: "e4",
			replies: [
				{move: "e5",freq: 76235055,master:244654,book:[hoh_kingKnight,wayward,hohVienna]},
				{move: "c5",freq: 58170264,master:506912,book:hoh_sicilian},
				{move: "e6",freq: 28949594,master:134130,book:[{move: "d4",replies:[
					{move: "d5",  freq: 2728137,master:121469,book:[{move: "e5",replies:[
						{move: "c5", freq:  1066483,master:11804,book:[{move: "c3",replies:mainline_french}]},
						{move: "Nc6", freq:   75474,master:5,book:[{move: "Nf3",replies:[
							{move: "f6", freq:    30361,book:[{move: "c3",replies:[
								{move: "fxe5",  freq:  5091,book:[{move: "Nxe5",replies:[
									{move: "Nxe5", freq: 2003,book:[{move: "dxe5"}]},
								]}]},
							]}]},
							{move: "Ng8e7", freq: 29664,book:[{move: "c3"}]},
							{move: "Bb4+", freq:  19886},
							{move: "Bd7",  freq:  15339},
							{move: "Be7",  freq:  11098},
						]}]},
						{move: "f6", freq:    40990,master:2,book:[{move: "Bd3"}]},
						{move: "Qe7", freq:   28888,book:[{move: "Nf3"}]},
						{move: "a6", freq:    25661,book:[{move: "c3"}]},
						{move: "c6", freq:    13544,book:[{move: "c3"}]},
					]}]},//Fransk
					{move: "c5",  freq:  320756,master:892,book:[{move: "d5",replies:[
						{move: "exd5", freq:  60286,book:[{move: "exd5",replies:[
							{move: "d6",  freq:  127467,book:[{move: "Nf3",stock:1.01,replies:[//fransk benoni
								{move: "Nf6",  freq:  24544,book:[{move: "h3"}]},
								{move: "Be7",  freq:   3581,book:[]},
								{move: "g6",   freq:   2595,book:[]},
								{move: "Bg4",  freq:   2459,book:[]},
							]}]},
							{move: "Nf6",  freq:  31112,book:[{move: "c4"}]},
							{move: "Bd6",  freq:   4676,book:[]},
							{move: "Qe7+",  freq:  2560,book:[]},
							{move: "g6",  freq:    1148,book:[]},
						]}]},
						{move: "d6", freq:    26939,book:[{move: "Nf3",stock:1.05}]},
						{move: "Nf6", freq:   14620},
						{move: "e5", freq:    10542,replies:[{move: "a4"}]}
					]}]},//Benoni
					{move: "d6",  freq:  238047,master:28,book:[rat_centre]},
					{move: "b6",  freq:  219901,master:579,book:[{move: "Nc3",replies:[
						{move: "Bb7", freq:  173115,book:[owen_e6]},
						{move: "Bb4", freq:   13329,book:[]},
					]}]},
					{move: "c6",  freq:  187958,book:[caro_french]},
					{move: "Nf6", freq:   83086,book:[{move: "e5"}]},
					{move: "Be7", freq:   73297,book:[{move: "e5"}]},
					{move: "Ne7", freq:   61992,book:[{move: "Nf3"}]},
					{move: "g6", freq:    54634,book:[{move: "h4"}]},
				]}]},
				{move: "d5",freq: 22779690,master:22589,book:scandinavian},
				{move: "c6",freq: 18997039,master:84737,book:caro_kahn},
				{move: "d6",freq: 10205026,master:40681,book:[{move: "d4",replies:[
					{move: "Nf6", freq:  515890,book:[{move: "Nc3",replies:[
						{move: "g6", freq:   246879,book:[{move: "f4",replies:[
							{move: "Bg7", freq: 151320,book:[{move: "Nf3",replies:pirc_d6_modern}]},
							{move: "c6", freq:    2746},
							{move: "Bg4", freq:   1687},
							{move: "c5", freq:    1273},
							{move: "Nb8d7", freq: 1056},
							{move: "e6", freq:     577},
						]},{move: "Nf3"}]},
						{move: "Nb8d7", freq: 45139,book:[{move: "f4"}]},
						{move: "c6", freq:    33228},
					]}]},
					{move: "g6", freq:   164629,book:[{move: "Nc3",replies:[
						{move: "Bg7", freq:  438724,book:[modern_d6]},
						{move: "Nf6", freq:   20018},
						{move: "c6",  freq:   14138},
						{move: "a6",  freq:    8390},
					]}]},
					{move: "e6", freq:   134968,book:[rat_centre]},
					{move: "c6", freq:    89171,book:[big_centre]},
					{move: "e5", freq:    86056,book:[{move: "Nf3",replies:philidor}]},
					{move: "Nd7", freq:   74121,book:[{move: "c4"}]},
					{move: "Nc6", freq:   30383},
				]}]},//pirc
				{move: "g6",freq: 9238464,master:32190,book:[modern]},
				{move: "Nf6",freq:6176851,book:[alekhine]},//alekhine
				{move: "b6",freq: 4657553,book:[owen]},//owen
				{move: "Nc6",freq:3603368,master:19927,book:[{move: "d4",replies:[//nimzo
					{move: "d5", freq:  129518,book:[{move: "e5",replies:[
						{move: "Bf5", freq: 242662,book:[{move: "c3"}]},
						{move: "f6", freq:   68297,book:[{move: "f4"}]},
						{move: "e6", freq:   55590,book:[{move: "Nf3"}]},
					]}]},
					{move: "e5", freq:  103402,book:[{move: "d5",replies:[
						{move: "Nc6e7", freq: 558101,book:[{move: "Nf3"}]},
						{move: "Nb8", freq:    64185,book:[{move: "Nf3"}]},
						{move: "Nd4", freq:    58043,book:[{move: "c3",replies:[
							{move: "Bc5", freq:  6645,book:[{move: "cxd4"}]},
							{move: "Nb5", freq:  6079,book:[{move: "Bxb5"}]},
							{move: "c5",  freq:  4736,book:[{move: "cxd4"}]},
							{move: "Qh4",  freq: 3900,book:[{move: "Bd3",replies:[
								{move: "Bc5",  freq: 83,book:[{move: "cxd4"}]},
								{move: "Nb5",  freq: 80,book:[{move: "g3"}]},
								{move: "Nf6",  freq: 49,book:[{move: "cxd4"}]},
							]}]},
							{move: "Nf6",  freq: 2717},
							{move: "Ne6",  freq: 1551},
							{move: "c6",   freq: 1473},
							{move: "Nf5",  freq: 1302},
						]}]},
						{move: "Nb4", freq:    10994,book:[{move: "Be3"}]},
						{move: "Na5", freq:     4201,book:[{move: "Nc3"}]},
					]}]},
					{move: "e6", freq:   58454,book:[{move: "Nf3"}]},
					{move: "d6", freq:   20943,book:[{move: "d5"}]},
					{move: "Nf6", freq:  16629,book:[{move: "d5"}]},
				]}]},
				{move: "a6",freq:   615523,book:[{move: "d4"}]},
				{move: "f5",freq:   524082,book:[{move: "exf5"}]},
				{move: "f6",freq:   253352},
				{move: "a5",freq:   199264},
				{move: "h5",freq:   188035},
				{move: "g5",freq:   167804},
				{move: "h6",freq:   139194},
				{move: "b5",freq:    81175},
				{move: "Nh6",freq:   34146},
				{move: "Na6",freq:   19029},
			]
		},
		queenspawn,
		polish,
		kadas
	]
}
