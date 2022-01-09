const hoh_c_variation = [{move: "d4",replies:[//c variation
	{move: "exd4", freq: 59736,book:[{move: "O-O",replies:[
		{move: "dxc3",  freq: 14892,book:[{move: "Bxf7+",replies:[
			{move: "Kxf7",  freq: 7520,book:[{move: "Qd5+",replies:[
				{move: "Ke8",  freq:    5914,book:[{move: "Qh5+",replies:[
					{move: "g6",   freq:  864,book:[{move: "Qxc5",replies:[
						{move: "d6",  freq:  374,book:[{move: "Qxc3",replies:[
							{move: "Qf6",  freq: 164,book:[{move: "Bb2"}]},
							{move: "Nf6",  freq: 112,book:[{move: "Re1"}]},
							{move: "Bg4",  freq:  44,book:[{move: "Bg5"}]},
							{move: "Be6",  freq:  20,book:[{move: "Bg5"}]}
						]}]},
						{move: "Qe7",  freq: 165,book:[{move: "Qxc3",replies:[
							{move: "Nf6",  freq: 89,book:[{move: "Re1"}]},
							{move: "Qf6",  freq: 34,book:[{move: "Bb2"}]},
							{move: "d6",  freq:  27,book:[]},
							{move: "Qxe4",  freq: 4,book:[]},
						]}]},
						{move: "Qf6",  freq: 132,book:[{move: "Nxc3"}]},
						{move: "Ng8e7",  freq: 95,book:[{move: "Qxc3"}]},
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
				{move: "Kf8",  freq:    1407,book:[{move: "Qxc5+"}]},
				{move: "Ke7",  freq:      92,book:[{move: "Bg5+"}]},
				{move: "Kg6",  freq:      38,book:[{move: "Qf5#"}]},//matt
				{move: "Kf6",  freq:       7,book:[{move: "Bg5+"}]},//matt
			]}]},
			{move: "Kf8",  freq:  1279,book:[{move: "Bxg8",replies:[
				{move: "Rxg8",  freq:  213,book:[{move: "Ng5"}]},
				{move: "Kxg8",  freq:   70,book:[{move: "Qd5+"}]}
			]}]},
			{move: "Ke7",  freq:    49,book:[{move: "Bg5+"}]},
		]}]},
		{move: "Nf6",  freq:   2584,book:[{move: "cxd4",replies:[
			{move: "Bb6",  freq:  4418,book:[{move: "e5",stock:4.23}]},
			{move: "Bb4",  freq:  1416,book:[{move: "e5",stock:5.42}]},
			{move: "Be7",  freq:   762,book:[{move: "e5",stock:4.31}]},
			{move: "Nxd4",  freq:  178,book:[{move: "Nxd4"}]},
		]}]},
		{move: "d6",  freq:    2286,book:[{move: "cxd4",replies:[
			{move: "Bb6",  freq:   3666,book:[{move: "Nc3"}]},
			{move: "Bb4",  freq:    456,book:[]},
			{move: "Nxd4",  freq:    63,book:[]},
		]}]},
		{move: "Ng8e7",  freq:  1546,book:[{move: "cxd4"}]},
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
		{move: "d5",  freq:  438,book:[{move: "Bxd5"}]},
		{move: "Nh6",  freq: 138,book:[]},
		{move: "dxc3",  freq:131,book:[{move: "Bxf7+"}]},
		{move: "Nf6",  freq:  89,book:[]},
		{move: "d6",  freq:   63,book:[]},
		{move: "f6",  freq:   31,book:[]},
	]}]},
	{move: "d6", freq:    3553,book:[{move: "Qb3"}]},
	{move: "Na5", freq:   1098,book:[{move: "Nxe5"}]},
	{move: "Nf6", freq:    431,book:[{move: "dxe5",stock:0.80}]},
]}];

const hoh_a_variation = [{move: "d4",replies:[
	{move: "exd4", freq: 23299,master:316,book:[{move: "Qb3",replies:[
		{move: "Qe7",  freq:   2648,master:66,book:[{move: "O-O",replies:[
			{move: "dxc3",  freq:  811,master:2,book:[{move: "Nxc3"}]},
			{move: "Nf6",  freq:   793,master:3,book:[{move: "cxd4",replies:[
				{move: "O-O",  freq:  190,book:[{move: "e5",stock:1.57}]},
				{move: "d6",  freq:    39,book:[]},
				{move: "Nxe4",  freq:  30,book:[{move: "Ba3"}]},
			]}]},
			{move: "d6",  freq:    463,master:2,book:[{move: "e5"}]},
			{move: "Bb6",  freq:   288,master:64,book:[{move: "cxd4"}]},
			{move: "Bxc3",  freq:  247,book:[]},
			{move: "h6",  freq:    191,book:[]},
		]}]},
		{move: "Qf6",  freq:    670,master:53,book:[{move: "O-O"}]},
		{move: "dxc3",  freq:   254,book:[{move: "Bxf7+"}]},
		{move: "Bxc3+",  freq:  210,book:[{move: "Nxc3"}]},
		{move: "Nh6",  freq:    116,book:[]},
		{move: "d5",  freq:     101,book:[]}
	]}]},
	{move: "d6",  freq:   3232,master:270,book:[{move: "Qb3",replies:[
		{move: "Bb6",  freq: 103,book:[/*{move: "Nb1d2",replies:[
			{move: "Na5",  freq: 1,master:51,book:[{move: "Qc2",replies:[
				{move: "Nxc4",  freq: 1,book:[{move: "Nxc4"}]},
			]}]}
		]}*/{move: "Bxf7+",stock:1.45,replies:[
		]}]},
		{move: "Nf6",  freq:  56,book:[{move: "dxe5",stock:1.48}]},
		{move: "exd4", freq:  15,book:[{move: "Bxf7+",stock:1.20}]},
	]}]},
	{move: "Nf6", freq:    404,master:1,book:[{move: "dxe5"}]},
]}];

const philidor = [//philidor
	{move: "exd4", freq:666899,book:[{move: "Nxd4",replies:[
		{move: "Nf6", freq: 183969,book:[{move: "Nc3",replies:[
			{move: "Be7", freq:  92038,book:[{move: "Bf4",replies:[
				{move: "O-O", freq:  4458,book:[{move: "Qd2",replies:[
					{move: "c5", freq: 492,book:[{move: "Nd4b5",replies:[
						{move: "a6", freq: 108,book:[{move: "Nxd6"}]},
						{move: "Nc6", freq: 32,book:[]},
					]}]},
					{move: "a6", freq: 297,book:[]},
					{move: "Nc6", freq:281,book:[]},
				]}]},
				{move: "Bd7", freq:   384,book:[]},
				{move: "c5", freq:    345,book:[]},
				{move: "a6", freq:    279,book:[]},
			]}]},
			{move: "c5", freq:   16145,book:[{move: "Bb5+"}]},
			{move: "Bd7", freq:  11366,book:[]},
			{move: "Nc6", freq:   9950,book:[]},
		]}]},
		{move: "c5", freq:   81720,book:[{move: "Ne2",stock:1.08}]},
		{move: "Be7", freq:  75055,book:[{move: "c4",stock:0.84}]},//exchange king
		{move: "Bd7", freq:  47599,book:[{move: "Nc3",stock:1.38}]},//exchange queen
		{move: "Nc6", freq:  21980,book:[{move: "Nc3",stock:0.94}]},
		{move: "h6", freq:   19376,book:[]},
		{move: "a6", freq:   10971,book:[]},
	]}]},
	{move: "Bg4", freq: 211540,book:[{move: "Nc3",replies:[
		{move: "Bxf3", freq: 4087,book:[{move: "gxf3"}]},
		{move: "exd4", freq: 3329,book:[{move: "Qxd4"}]},
		{move: "Nc6", freq:  1343,book:[{move: "Bb5"}]},
		{move: "Nf6", freq:   631,book:[]},
	]}]},
	{move: "Nc6", freq:  96520,book:[]},
	{move: "f6", freq:   46777,book:[{move: "Bc4"}]},
	{move: "Nd7", freq:  42884,book:[{move: "c4",stock:0.93}]},//queenside philidor
	{move: "Nf6", freq:  37881,book:[]},
	{move: "Qe7", freq:  26681,book:[]},
	{move: "f5", freq:   19180,book:[]},
]

const french_queen_a3_afterPawn = [
	{move: "Ng8e7", freq: 9165,book:[{move: "Nc3"}]},
	{move: "Bd7", freq:   2418},
	{move: "Nh6", freq:   1358},
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
		{move: "Bxc3+",  freq:    2012,book:[]},
		{move: "Qb6",  freq:      1662,book:[]},
		{move: "f6",  freq:        771,book:[]},
		{move: "a6",  freq:        595,book:[]},
		{move: "Bd7",  freq:       511,book:[]},
		{move: "h6",  freq:        318,book:[]},
	]}]},
	{move: "Ng8e7", freq:  32288,book:[{move: "Nc3",replies:[
		{move: "Nf5", freq:     5500,book:[{move: "Bb5"}]},
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
	{move: "Bb4+",  freq: 17547,book:[{move: "Nc3"}]},
	{move: "Ne7",  freq:   6653,book:[]},
	{move: "a6",  freq:    5795,book:[]},
	{move: "f6",  freq:    3494,book:[]},
];

const french_queen_a3 = [{move: "a3",replies:[
	{move: "cxd4", freq:  11530,master:50,book:[{move: "cxd4",replies: french_queen_a3_afterPawn}]},
	{move: "Bd7", freq:    7732,master:545,book:[{move: "b4"}]},
	{move: "Ng8e7", freq:  7524,master:57,book:[{move: "dxc5",replies:[
		{move: "Qxc5", freq: 432,book:[{move: "b4",replies:[{move: "Qb6", freq: 1,book:[{move: "c4"}]}]}]},
		{move: "Qc7", freq:   19},
	]}]},
	{move: "Nh6", freq:    4605,master:1282,book:[{move: "Bd3",stock:0.19}]},
	{move: "a5", freq:     3177,master:227,book:[{move: "Bd3"}]},
	{move: "c4", freq:     3142,master:1447,book:[{move: "Nb1d2"}]},
]}];

const french_queen = [
	{move: "Qb6", freq: 207357,master:3720,book:french_queen_a3},
	{move: "Bd7", freq:  60811,master:3787,book:[{move: "Be2",replies:[
		{move: "Qb6", freq:  5177,book:[{move: "O-O"}]},
		{move: "Ng8e7", freq:3138,book:[{move: "O-O"}]},
		{move: "cxd4", freq: 2203,book:[{move: "cxd4"}]},
		{move: "Rc8", freq:  1278,book:[{move: "O-O"}]},
	]}]},//euwe
	{move: "cxd4", freq: 54313,master:80,book:[{move: "cxd4",replies:horse_cumsock}]},
	{move: "Ng8e7", freq:41043,master:590,book:[{move: "Na3"}]},
	{move: "a6", freq:    8808,master:3},
];

const mainline_french = [
	{move: "Nc6",  freq: 428866,master:8429,book:[{move: "Nf3",replies:french_queen}]},
	{move: "Qb6",  freq:  90787,master:2760,book:[{move: "Nf3",replies:[
		{move: "Nc6", freq:  66565,book:french_queen_a3},
		{move: "Bd7", freq:   8572},
		{move: "cxd4", freq:  2233},
		{move: "Ne7", freq:  1068},
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
	{move: "Bd7",   freq: 14753,master:426},
];

const cumsock_invitation = [
	{move: "d5",    freq:  42742,book:[{move: "e5", replies: horse_cumsock}]},
	{move: "Nf6",    freq: 20688,book:[{move: "Nc3",stock:0.88}]},
	{move: "Bb4+",   freq: 14423,book:[{move: "Nc3"}]},
	{move: "d6",    freq:   9116},
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

const hoh_sicilian = [
	{move: "c3",replies:[
		{move: "Nc6",  freq: 251155,master:80,book:[{move: "d4",replies:[
			{move: "cxd4",  freq: 158865,book:[{move: "cxd4",replies:[
				{move: "e6",  freq:    58005,book:ala_main},
				{move: "d5",  freq:    48453,book:[{move: "Nc3",replies:[
					{move: "dxe4",  freq: 3038,book:[{move: "d5",replies:[
						{move: "Ne5",  freq: 511,book:[{move: "Qa4+",stock:1.56,replies:[//tmp freqs
							{move: "Bd7",  freq:  103,book:[{move: "Qxe4",stock:1.74,replies:[
								{move: "Ng6",  freq:  93,book:[{move: "Bc4",stock: 1.74}]},
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
					{move: "e6",    freq:  941,book:[{move: "e5",stock:0.51}]},
					{move: "Nf6",   freq:  338,book:[{move: "e5",stock:0.44}]},
				]},{move: "exd5"}]},
				{move: "d6",  freq:    26071,book:[{move: "d5",replies:[
					{move: "Ne5",  freq:  8992,book:[{move: "Nc3"}]},
					{move: "Nb8",  freq:  1106},
					{move: "Nb4",  freq:   112},
				]}]},
				{move: "g6",  freq:    15633},
				{move: "e5",  freq:    10854,book:[{move: "dxe5",replies:[
					{move: "Nxe5",  freq:  1042,book:[{move: "Nc3"}]},
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
					{move: "g6",  freq: 10338,book:[{move: "Nf3"}]},
					{move: "e6",  freq:  8073,stock:1.31},
					{move: "a6",  freq:  6896},
					{move: "Nc6",  freq: 6685,book:[{move: "d5",stock:1.82}]},
					{move: "e5",  freq:  1339},
				]}]},
				{move: "Nc6",  freq: 18375,book:[{move: "d5",replies:[
					{move: "Ne5",  freq:  8992,book:[{move: "Nc3"}]},
					{move: "Nb8",  freq:  1106},
					{move: "Nb4",  freq:   112},
				]}]},
				{move: "e6",  freq:  15370,book:[{move: "Nf3"}]},
				{move: "g6",  freq:  10442},
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
				{move: "Nf6",  freq:   10389,stock:1.12},
				{move: "a6",  freq:     8788},
				{move: "Bb4+",  freq:   6807},
				{move: "d6",  freq:     6679,book:[{move: "Nf3"}]},
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
				{move: "Nf6",  freq: 3950,book:[{move: "d4",stock:0.25}]},
				{move: "Bg4",  freq: 3790,book:[{move: "Be2",replies:[
					{move: "Nf6",  freq:  1394,book:[{move: "d3"}]},
					{move: "Nc6",  freq:  1108,book:[{move: "d4"}]},
					{move: "e5",  freq:    289},
					{move: "e6",  freq:    251},
				]}]},
				{move: "Nc6",  freq: 3102,book:[{move: "d4"}]},
				{move: "e5",   freq:  937,book:[{move: "d4"}]},
			]}]},
			{move: "Nf6",  freq:    1622},
		]}]},
		{move: "Nf6",  freq:  43999,master:14472,book:[{move: "e5",replies:[
			{move: "Nd5",  freq:  25187,book:[{move: "Nf3",replies:[
				{move: "Nc6",  freq: 1369,book:[{move: "d4",stock:0.00}]},//connect 4 variation sicilian-alekhine
				{move: "e6",  freq:   953},
				{move: "d6",  freq:   870},
				{move: "g6",  freq:   162},
			]}]},
			{move: "Ng8",  freq:    910},
			{move: "Ne4",  freq:    351},
		]}]},
		{move: "e5",  freq:   40417,master:422,book:[{move: "Nf3",replies:[
			{move: "Nc6",  freq:  14600,book:[{move: "Bc4",stock:0.35}]},
			{move: "d6",  freq:    7284,book:[{move: "d4",stock:1.41}]},
		]}]},
		{move: "g6",  freq:   31252,master:1178,book:[{move: "d4",replies:[
			{move: "cxd4",  freq:   21376,book:[{move: "cxd4",replies:[
				{move: "Bg7",  freq:   16587,book:[{move: "Nc3"}]},
				{move: "d5",  freq:     4808,book:[{move: "e5",stock:0.91}]},
			]}]},
			{move: "Bg7",  freq:     3558},
			{move: "b6",  freq:       734},
			{move: "e6",  freq:       493},
		]}]},
		{move: "a6",  freq:   12693,master:37,book:[{move: "d4",stock:0.44}]},
		{move: "b6",  freq:    3490,master:484,book:[{move: "d4"}]},
		{move: "Qa5",  freq:   1244},
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

const scandinavian = [{move: "exd5",replies:[//scandinavian
	{move: "Qxd5", freq: 3580084,book:[{move: "Nc3",replies:[
		{move: "Qd8",  freq: 1088322,book:[{move: "d4",replies:[
			{move: "Nf6", freq:  153795,book:[{move: "Nf3",replies:[
				{move: "e6", freq:  62840,book:[{move: "Bg5"}]},
				{move: "Ng4", freq: 41243},
				{move: "Nc6", freq: 18646},
				{move: "g6", freq:  13822},
				{move: "Bf5", freq: 11605},
				{move: "c6", freq:   5714},
				{move: "h6", freq:   2467},
			]}]},
			{move: "e6", freq:    80910,book:[{move: "Nf3",stock:0.88}]},
			{move: "Bf5", freq:   33794},
			{move: "c6", freq:    33439,book:[{move: "Nf3",stock:1.03}]},
			{move: "Nc6", freq:   26150,book:[{move: "d5",stock:2.17}]},
			{move: "g6", freq:    14067},
			{move: "e5", freq:     5121},
			{move: "a6", freq:     5119},
			{move: "h6", freq:     4085},
		]}]},
		{move: "Qa5",  freq:  757708,book:[{move: "d4",replies:[
			{move: "c6", freq: 97830,book:[{move: "Bd2",replies:[//tmp freqs
				{move: "Qc7", freq: 3698,book:[{move: "Bd3"}]},
				{move: "Nf6", freq: 2276,book:[{move: "Bd3"}]},
				{move: "Qb6", freq: 1536},
				{move: "Bf5", freq: 1403},
			]}]},
			{move: "Nf6", freq:94880,book:[{move: "Nf3",replies:[//tmp freqs
				{move: "Bg4", freq: 13606,book:[{move: "h3"}]},
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
			{move: "Qd7", freq:1282},
			{move: "g6", freq: 1159},
			{move: "h5", freq:  935},
		]}]},
		{move: "Qe5+",  freq: 238038,book:[{move: "Be2",replies:[
			{move: "Bg4",    freq:  75552,book:[{move: "d4",stock:0.96}]},
			{move: "Nc6",    freq:  13172,book:[{move: "Nf3",stock:2.28}]},
			{move: "c6",    freq:   11489},
			{move: "Nf5",    freq:   8900},
			{move: "Nf6",    freq:   8659},
			{move: "e6",     freq:   6510},
			{move: "Qg5",     freq:  5780},
		]}]},
		{move: "Qd6",  freq:  208508,book:[{move: "d4",replies:[//tmp freqs
			{move: "Nf6",  freq:   5308,book:[{move: "Nf3",stock:0.86}]},
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
			{move: "Nc6",   freq:  16336},
			{move: "Bf5",   freq:   7594},
			{move: "e6",    freq:   4489},
			{move: "Nf6",   freq:   4346},
			{move: "g6",    freq:   4125},
		]}]},
		{move: "Bg4", freq:   19424},
		{move: "Qxd5", freq:  12968,book:[{move: "Nc3"}]},
		{move: "c6", freq:    12152},
		{move: "e6", freq:    10917,book:[{move: "dxe6"}]}
	]}]},
	{move: "c6",   freq:  228041,book:[{move: "dxc6",replies:[
		{move: "Nxc6", freq:  85075,book:[{move: "Nc3"}]},
		{move: "e5", freq:    27694},
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
	{move: "Bf5",   freq:  17446},
]}];

const lolli_attack = {move: "d4",replies:[
	{move: "Nxd4", freq:3350,book:[{move: "c3",replies:[
		{move: "Ne6",  freq: 719,book:[{move: "Qxd5"}]},
		{move: "b5",   freq: 257,book:[{move: "Bd3"}]},
		{move: "h6",   freq: 215,book:[{move: "Nxf7",replies:[
			{move: "Kxf7",  freq: 124,book:[{move: "cxd4",replies:[
				{move: "Bb4+",  freq: 44,book:[{move: "Bd2",replies:[
					{move: "Bxd2",   freq: 18,book:[{move: "Nxd2"}]},
				]}]},
				{move: "exd4",  freq: 24,book:[{move: "Qf3+"}]},
			]}]},
		]}]},
		{move: "Nc6",  freq: 204,book:[{move: "Bxd5"}]},
		{move: "Be7",  freq: 199},
		{move: "f6",   freq: 196},
		{move: "Nf5",  freq: 112},
	]}]},
	{move: "exd4", freq:2165,book:[{move: "O-O",replies:[
		{move: "Be7",   freq: 1635,book:[{move: "Nxf7",replies:[
			{move: "Kxf7",   freq: 1056,book:[{move: "Qh5+",replies:[
				{move: "g6",  freq: 135,book:[{move: "Bxd5+"}]},
				{move: "Kf8",  freq: 60,book:[{move: "Bxd5+"}]},
				{move: "Ke6",  freq: 28,book:[{move: "Re1+"}]},
			]}]},
		]}]},
		{move: "Be6",   freq:  381},
		{move: "h6",   freq:   319},
	]}]},
	{move: "Be7",  freq:1398,book:[{move: "Nxf7",replies:[
		{move: "Kxf7",   freq:  125587,book:[{move: "Qf3+"}]},
		{move: "Qf6",   freq:     3811},
		{move: "Qd7",   freq:     2065},
		{move: "Qh4",   freq:     1670},
	]}]},
	{move: "f6",   freq:1292,book:[{move: "dxe5"}]},
	{move: "h6",   freq:1112,book:[{move: "Nxf7",replies:[{move: "Kxf7",req: 682,book:[{move: "Qf3+"}]}]}]},
	{move: "Be6",  freq: 917,book:[{move: "O-O"}]},
	{move: "Qxg5", freq: 246,book:[{move: "Bxg5",stock:8.30}]},
]}

const hoh_kingKnight = 
	{move: "Nf3",replies:[
		{move: "Nc6",freq: 13449726,master:191051,book:[
			{move: "Bc4",replies:[
				{move: "Bc5",  freq: 2133202,master:17519,book:[
					{move: "b4",replies:[//evans gambit
						{move: "Bxb4", freq: 137950,master:1161,book:[{move: "c3",replies:[
							{move: "Bc5",freq:  64262,master:36,book:hoh_c_variation},
							{move: "Ba5",freq:  46265,master:650,book:hoh_a_variation},
							{move: "Be7",freq:  20793,master:372,book:hoh_e_variation},
							{move: "Bd6",freq:   4667,master:101,book:[{move: "d4"}]},
							{move: "Bf8",freq:    347,master:2,book:[{move: "d4"}]}
						]}]},
						{move: "Bb6",  freq:  28157,master:204,book:[{move: "a4",replies:[//declined
							{move: "a6",freq:  2791,book:[{move: "c3",replies:[
								{move: "d6",freq:  552,book:[{move: "d3",replies:[
									{move: "Bg4+",freq:  197,book:[{move: "h3"}]},
									{move: "h6",freq:    125,book:[{move: "O-O"}]},
									{move: "Nf6",freq:   107,book:[{move: "h3"}]},
								]}]},
								{move: "Nf6",freq: 488,book:[{move: "d3"}]},
								{move: "h6",freq:   73,book:[]},
							]}]},
							{move: "a5",freq:   984,book:[{move: "b5",replies:[
								{move: "Nd4",freq:   586,book:[{move: "Nxd4"}]},
								{move: "Nc6e7",freq: 156,book:[]},
								{move: "Nb4",freq:   104,book:[]},
								{move: "Na7",freq:    43,book:[]},
							]}]},
							{move: "Nxb4",freq: 807,book:[{move: "a5",replies:[
								{move: "Bc5",freq:   168,book:[{move: "c3"}]},
								{move: "Bd4",freq:    25,book:[]},
							]}]},
							{move: "d6",freq:   101,book:[{move: "a5"}]},
						]},{move: "O-O"}]},
						{move: "Nxb4", freq:  10714,book:[{move: "c3",replies:[
							{move: "Nc6", freq: 8119,book:hoh_c_variation},
							{move: "Nd3+",freq:  267,book:[]},
							{move: "d5",  freq:  153,book:[]},
							{move: "Na6",  freq:  65,book:[]}
						]}]},
						{move: "Bd4", freq:     2941,book:[{move: "c3",replies:[//very wrong
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
						{move: "Nf6", freq:    2232,book:[{move: "bxc5"}]}
					]}
				]},
				{move: "Nf6",  freq: 1807909,master:13633,book:[
					{move: "Ng5",replies:[//stekt lever
						{move: "d5", freq:  565489,master:2325,book:[{move: "exd5",replies:[
							{move: "Na5",  freq: 246874,master:1983,book:[{move: "Bb5+",replies:[
								{move: "c6", freq:156140,master:1742,book:[{move: "dxc6",replies:[
									{move: "bxc6", freq:145596,master:1741,book:[{move: "Qf3",replies:[
										{move: "Bb7", freq: 12681,master:6,book:[{move: "Ba4",replies:[
											{move: "h6",   freq:   2902,book:[{move: "Ne4"}]},
											{move: "Be7",   freq:  2374,book:[{move: "O-O"}]},
											{move: "Bd6",   freq:  1209,book:[{move: "d3"}]},
											{move: "Bc5",   freq:   908,book:[]},
											{move: "Qd4",   freq:   445,book:[{move: "Nc3"}]},
										]}]},
										{move: "Bd7", freq:  5194,master:8,book:[{move: "Ba4"}]},
										{move: "Be7", freq:  4001,master:148,book:[{move: "Bd3"}]},
										{move: "h6",  freq:  2612,master:30,book:[{move: "Ne4",stock:0.35}]},
										{move: "Rb8", freq:  2425,master:151,book:[{move: "Bd3"}]},
										{move: "cxb5",freq:  1599,master:15,book:[{move: "Qxa8"}]},
										{move: "e4",freq:    1455},
										{move: "Bg4",freq:   1047},
										{move: "Qb6",freq:    856},
										{move: "Qc7",freq:    792,master:16},
									]}]},
									{move: "Nxc6", freq:  9155,book:[{move: "d3"}]}
								]}]},
								{move: "Bd7", freq:35692,master:181,book:[{move: "Qe2",replies:[
									{move: "Bd6",freq:    4605,book:[{move: "Bxd7+"}]},
									{move: "Nxd5",freq:   1375},
									{move: "Be7",freq:    1196},
									{move: "a6",freq:      997,book:[{move: "Bxd7+"}]},
								]}]},
								{move: "Nd7", freq:  876,book:[{move: "Ne6"}]},
							]}]},
							{move: "Nxd5", freq: 228449,master:26,book:[lolli_attack]},
							{move: "Nd4",  freq:  51390,master:135,book:[{move: "c3",replies:[
								{move: "Nf5", freq:12753,book:[{move: "d3"}]},
								{move: "b5", freq:  8897,book:[{move: "Bf1"}]},
							]}]},
							{move: "b5",   freq:  18830,master:178,book:[{move: "Bf1"}]},
							{move: "Ne7",   freq:   2649,book:[]},
							{move: "Nb4",   freq:   1747,book:[]},
							{move: "h6",   freq:   1145,book:[]},
						]}]},
						{move: "Bc5", freq:  97416,master:128,book:[{move: "Nxf7",replies:[//traxler
							{move: "Bxf2+", freq:54663,master:27,book:[{move: "Kf1",replies:[
								{move: "Qe7", freq: 24044,master:17,book:[{move: "Nxh8",replies:[
									{move: "d5",freq: 11902,master:16,book:[{move: "exd5",replies:[
										{move: "Nd4", freq:  6058,master:13,book:[{move: "d6",replies:[
											{move: "cxd6", freq:  653,master:5,book:[{move: "Kxf2",stock:3.34}]},
											{move: "Qxd6", freq:  219,master:3,book:[{move: "Nf7",stock:0.99}]},
											{move: "Qf8", freq:    26},
										]}]},
										{move: "Bg4", freq:  1867,master:2},
										{move: "Na5", freq:   509},
										{move: "Nxd5", freq:  132},
										{move: "Qc5", freq:    92}
									]}]},
									{move: "Nxe4", freq:  6746,book:[{move: "Qh5+",stock:8.92}]},
									{move: "Bb6", freq:   1850,master:1,book:[{move: "Bf7+",stock:2.96}]},
									{move: "Qc5", freq:   1148,book:[{move: "Nc3",stock:4.23}]},
								]}]},
								{move: "Nxe4", freq:  699,book:[{move: "Nxd8",stock:8.23}]},
								{move: "d5",   freq:  337,book:[{move: "Nxd8",stock:7.92}]}
							]}]},
							{move: "Qe7",   freq: 5304,book:[{move: "Nxh8",replies:[
								{move: "Bxf2+",   freq:  1711,book:[{move: "Kxf2",replies:[
									{move: "Nxe4+",   freq:  927,book:[{move: "Kf1"}]},
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
						{move: "Nxe4", freq: 18163,book:[{move: "Bxf7+",replies:[
							{move: "Ke7", freq: 1,book:[{move: "d4"}]},
						]}]},
						{move: "Qe7", freq:   8965,book:[{move: "Bxf7+"}]},
						{move: "d6", freq:    3261,book:[]},
						{move: "h6", freq:    3079,master:1,book:[]},
						{move: "Be7", freq:   2499,book:[]},
						{move: "Na5", freq:   1891,master:1,book:[]},
					]}
				]},
				{move: "h6",   freq: 1051935,book:[{move: "d4",replies:[//anti fried liver
					{move: "exd4", freq: 192921,book:[{move: "Nxd4",replies:[
						{move: "Nxd4", freq: 89391,book:[{move: "Qxd4",replies:[
							{move: "d6", freq:  33290,book:[{move: "O-O"}]},
							{move: "Nf6", freq: 18557,book:[]},
							{move: "Qf6", freq: 13290,book:[{move: "e5"}]},
							{move: "c5", freq:  12974,book:[]},
						]}]},
						{move: "Bc5", freq:  26475,book:[{move: "Bxf7+",stock:3.59}]},
						{move: "Ne5", freq:  20826,book:[]},
						{move: "Nf6", freq:  15963,book:[]},
						{move: "Qf6", freq:  14525,book:[]},
						{move: "d6", freq:    8904,book:[]},
					]}]},
					{move: "d6", freq:    30220,book:[{move: "dxe5"}]},
					{move: "Bd6", freq:   10285,book:[{move: "dxe5"}]},
					{move: "Nf6", freq:    8773,book:[]},
					{move: "Nxd4", freq:   4884,book:[]},
					{move: "f6", freq:     4610,book:[{move: "Nh4"}]},
					{move: "Bb4+", freq:   3253,book:[{move: "c3"}]}
				]}]},
				{move: "d6",   freq:  414989,master:369,book:[{move: "d4",replies:[//pseudo philidor
					{move: "exd4", freq:   54879,book:[{move: "Nxd4",replies:[
						{move: "Nxd4", freq:   36683,book:[{move: "Qxd4",stock:0.96}]},
						{move: "Nf6", freq:    11117,book:[{move: "Nc3",stock: 0.70}]},
						//{move: "Nd7", freq:     6698,book:[]},
						{move: "Ne5", freq:     6359,book:[]},
					]}]},
					{move: "Bg4", freq:    34166,book:[{move: "h3"}]},
					{move: "h6", freq:      8846,book:[]},
					{move: "Nf6", freq:     7725,book:[]},
				]}]},
				{move: "Nd4",  freq:  360526,book:[{move: "Nxd4",replies:[
					{move: "exd4", freq: 138728,book:[{move: "O-O",replies:[
						{move: "d6", freq:   8528,book:[{move: "c3"}]},
						{move: "Bc5", freq:  8021,book:[{move: "Bxf7+",stock:4.80}]},
						{move: "Nf6", freq:  4624,book:[{move: "Re1",stock:1.84}]},
						{move: "c6", freq:   2159,book:[]},
						{move: "c5", freq:   1773,book:[]},
						{move: "Bd6", freq:  1172,book:[]},
						{move: "Qf6", freq:  1131,book:[]},
					]}]},
					{move: "Qg5", freq:     576,book:[{move: "Nf3"}]}
				]}]},
				{move: "Be7",  freq:  238629,master:936,book:[{move: "d4",replies:[
					{move: "exd4", freq: 43248,book:[{move: "O-O"}]},
					{move: "d6", freq:   11463,book:[]},
					{move: "Nf6", freq:   1913,book:[]},
					{move: "Nxd4", freq:   891,book:[]},
				]}]},
				{move: "f5", freq:    44523,book:[{move: "d4"}]},
				{move: "f6", freq:    42942,book:[{move: "d4"}]},
				{move: "a6", freq:    42893,book:[{move: "d4"}]},
				{move: "Qf6", freq:   33915,book:[{move: "Nc3"}]},
				{move: "g6", freq:    18616,book:[]},
				{move: "Bb4", freq:   15044,book:[{move: "c3"}]},
			]},
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
			]}//spansk
		]},
		{move: "d6",  freq: 3680148,master:5939,book:[{move: "d4",replies:philidor}]},
		{move: "Nf6", freq: 2227800,master:26105,book:[{move: "Nxe5",replies:[//russisk
			{move: "d6",  freq: 243501,book:[{move: "Nf3",replies:[
				{move: "Nxe4",  freq: 194811,book:[{move: "d4",replies:[
					{move: "d5",  freq:  24339,book:[{move: "Bd3",replies:[
						{move: "Bd6",  freq:  5270,book:[{move: "O-O",stock:0.33}]},
						{move: "Bf5",  freq:  3061,book:[{move: "O-O",stock:0.67}]},
						{move: "Be7",  freq:  2794,book:[{move: "O-O",stock:0.40}]},
						{move: "Nc6",  freq:  2665,book:[{move: "O-O",stock:0.46}]},
						{move: "Bg4",  freq:  1934,book:[]},
						{move: "Nf6",  freq:  1581,book:[]},
					]}]},
					{move: "Be7",  freq:  5758,book:[{move: "Bd3"}]},
					{move: "Bg4",  freq:  3794,book:[{move: "h3"}]},
					{move: "Qe7",  freq:  3208,book:[]},
					{move: "Nf6",  freq:  2405,book:[]},
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
								{move: "Bb6",  freq:  1054,book:[{move: "f3"}]},//retreat
								{move: "Qh4",  freq:  669,book:[{move: "g3",replies:[
									{move: "Qf6",  freq: 333,book:[{move: "f3",replies:[
										{move: "h4",  freq:  73,book:[{move: "Rg1",replies:[
											{move: "hxg3",  freq:  5,book:[{move: "hxg3"}]},
										]}]},
									]}]},//hello eric rosen
								]}]},//magical
							]}]},
							{move: "Bg4",  freq:  669,book:[{move: "f3"}]},
							{move: "Bb6",  freq:  629,book:[{move: "a4"}]},
							{move: "Qd6",  freq:  307,book:[{move: "d4"}]},
							{move: "Bxf2+",freq:  173,book:[{move: "Kxf2"}]},
							{move: "Be6",  freq:  121,book:[{move: "Nd2"}]},
						]}]},
						{move: "O-O",  freq: 3021,book:[{move: "O-O"}]},
						{move: "Qd4",  freq: 2829,book:[{move: "O-O"}]},
						{move: "Ng4",  freq: 1942,book:[{move: "Bxg4"}]},
						{move: "Qd6",  freq: 1581,book:[{move: "c3"}]},
					]}]},
					{move: "h5",  freq:   566,book:[]},
				]}]},
				{move: "bxc6", freq:    1839,book:[]}
			]}]},
			{move: "Qe7", freq: 126856,book:[{move: "d4",replies:[
				{move: "d6",  freq:   48194,book:[{move: "Nf3",replies:[
					{move: "Nxe4",  freq:   23444,book:[{move: "Be2"}]},
					{move: "Qxe4+",  freq:  12827,book:[{move: "Be2"}]},
				]}]},
				{move: "Nxe4",  freq: 12971,book:[{move: "Bd3"}]},
				{move: "Nc6",  freq:   1409},
			]}]},
			{move: "Nxe4",freq:  79641,book:[{move: "Qe2",replies:[
				{move: "d5",  freq:  20344,book:[{move: "d3",stock:2.05}]},
				{move: "Qe7",  freq: 15617,book:[{move: "Qxe4"}]},
				{move: "d6",  freq:   3798},
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
			{move: "d5", freq:    9369,book:[{move: "exd5"}]},
			{move: "Bd6", freq:   6585,book:[]},
		]},{move: "d4"}]},
		{move: "Bc5",  freq: 523105,book:[{move: "Nxe5",replies:[//Busch-Gass gambit
			{move: "Bxf2+", freq:   16517,book:[{move: "Kxf2",replies:[
				{move: "Qh4+", freq:   9508,book:[{move: "Kg1",replies:[
					{move: "Qxe4", freq:    2243,book:[{move: "d4"}]},
					{move: "Nf6", freq:      214,book:[]},
				]}]},
				{move: "Nf6", freq:    3328,book:[{move: "Nc3"}]},
				{move: "Qf6+", freq:   1371,book:[]},
			]}]},
			{move: "Qh4", freq:     16135,book:[{move: "d4",replies:[
				{move: "Qxe4+", freq:    2226,book:[{move: "Be3"}]},
				{move: "Bb6", freq:       117,book:[]},
			]}]},
			{move: "Qe7", freq:     14111,book:[{move: "d4",replies:[
				{move: "Bd6", freq:    3509,book:[{move: "Nc3"}]},
				{move: "Bb6", freq:    3483,book:[{move: "Bc4"}]},
				{move: "d6", freq:     1557,book:[]},
				{move: "Bb4+", freq:    902,book:[]},
			]}]},
			{move: "Nf6", freq:     11630,book:[{move: "d4"}]},
			{move: "d6", freq:      10522,book:[{move: "Nf3"}]},
			{move: "Qf6", freq:      8291,book:[{move: "d4",replies:[
				{move: "Bb6", freq:    1108,book:[{move: "Bc4"}]},
				{move: "Bb4+", freq:    344,book:[]},
				{move: "Bd6", freq:     321,book:[]},
				{move: "Bxd4", freq:    310,book:[]},
				{move: "d6", freq:      248,book:[]},
			]}]},
		]}]},
		{move: "Qf6",  freq: 424111,book:[{move: "Nc3",replies:[
			{move: "c6",  freq:  98720,book:[{move: "d4",stock:3.41}]},
			{move: "Bc5",  freq: 23381,book:[{move: "Nd5",stock:3.42}]},
		]}]},
		{move: "d5",   freq: 355116,master:219,book:[{move: "Nxe5",replies:[
			{move: "dxe4", freq:  26307,book:[{move: "Bc4"}]},
			{move: "Bd6", freq:   14950,book:[]},
			{move: "Qe7", freq:    7507,book:[]},
			{move: "Nf6", freq:    4583,book:[]},
			{move: "Qf6", freq:    1250,book:[]},
		]}]},//elephant gambit
		{move: "f5",   freq: 183171,master:268,book:[{move: "Nxe5",replies:[//latvian gambit
			{move: "Nf6", freq:  15006,book:[{move: "Bc4"}]},
			{move: "Qf6", freq:  11625,book:[{move: "d4"}]},
			{move: "fxe4", freq:  3574,book:[{move: "Qh5+"}]},
		]}]},
		{move: "f6",   freq: 114483,book:[{move: "Nxe5",replies:[//damiano
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
						{move: "d5",  freq:  2105,book:[{move: "Bxc5+"}]},
					]}]},
				]}]},
			]}]},
			{move: "Qe7",  freq:    2508,book:[]},
			{move: "d6",  freq:      651,book:[]},
		]}]},
		{move: "Bd6",  freq:  76490,book:[{move: "d4"}]},
		{move: "c6",  freq:   44200,book:[]},
		{move: "Qe7",  freq:  42751,master:289,book:[]},
		{move: "c5",  freq:   15341,book:[]},
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
			{move: "d6", freq:  128945,book:[{move: "c4",replies:[
				{move: "Nb6", freq:  50579,book:[{move: "f4",replies:[
					{move: "Bf5", freq:    1,book:[{move: "Nc3",replies:[
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
					{move: "dxe5", freq:   1,book:[{move: "fxe5",replies:[
						{move: "Bf5", freq:1,book:[{move:"Nc3",replies:[
							{move: "e6", freq:1,book:[{move:"Nf3",replies:[
								{move: "Nc6", freq:1,book:[{move:"Be2",replies:[
									{move: "Bg4", freq:1,book:[{move:"Be3",replies:[
										{move: "Qd7", freq:1,book:[unified_alekhine]},
									]}]},
								]}]},
							]}]},
						]}]},
					]}]},
				]}]},
				{move: "Nb4", freq:    611},
				{move: "dxe5", freq:   194},
			]}]},
			{move: "Nb6", freq:  32766},
			{move: "e6", freq:   26722},
			{move: "Nc6", freq:  10163},
		]}]},
		{move: "Ne4", freq:  40597,book:[{move: "d4"}]},
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

const whiteBook = {
	book: [
		{move: "e4",
			replies: [
				{move: "e5",freq: 33121744,master:244654,book:[hoh_kingKnight,hohVienna,]},
				{move: "c5",freq: 16035874,master:506912,book:hoh_sicilian},
				{move: "e6",freq: 8895904,master:134130,book:[{move: "d4",replies:[
					{move: "d5",  freq: 2728137,master:121469,book:[{move: "e5",replies:[
						{move: "c5", freq:  1066483,master:11804,book:[{move: "c3",replies:mainline_french}]},
						{move: "Nc6", freq:   75474,master:5,book:[{move: "Nf3",replies:[
						]}]},
						{move: "f6", freq:    40990,master:2,book:[{move: "Bd3"}]},
						{move: "Qe7", freq:   28888,book:[{move: "Nf3"}]},
						{move: "a6", freq:    25661,book:[{move: "c3"}]},
						{move: "c6", freq:    13544,book:[{move: "c3"}]},
					]}]},//Fransk
					{move: "c5",  freq:  320756,master:892,book:[{move: "d5",replies:[
						{move: "exd5", freq:  60286,book:[{move: "exd5"}]},
						{move: "d6", freq:    26939,book:[{move: "Nf3",stock:1.05}]},
						{move: "Nf6", freq:   14620},
						{move: "e5", freq:    10542,replies:[{move: "a4"}]}
					]}]},//Benoni
					{move: "d6",  freq:  238047,master:28,book:[{move: "Nf3"}]},
					{move: "b6",  freq:  219901,master:579,book:[{move: "Nf3"}]},
					{move: "c6",  freq:  187958,book:[{move: "Nf3"}]},
					{move: "Nf6", freq:   83086,book:[{move: "e5"}]},
					{move: "Be7", freq:   73297,book:[{move: "e5"}]},
					{move: "Ne7", freq:   61992,book:[{move: "Nf3"}]},
					{move: "g6", freq:    54634,book:[{move: "h4"}]},
				]}]},
				{move: "d5",freq: 7622050,master:22589,book:scandinavian},
				{move: "c6",freq: 4613271,master:84737,book:[{move: "d4",replies:[//caro-kann
					{move: "d5", freq: 1708932,book:[
						{move: "e5",replies:[
							{move: "Bf5",  freq:  583647,book:[{move: "Nd2",replies:[
								{move: "e6",   freq: 2780,book:[{move: "Nb3",replies:[
									{move: "Nd7",   freq:  422,book:[{move: "Nf3",replies:[
										{move: "c5",   freq: 205,book:[{move: "dxc5",replies:[
											{move: "Nxc5",   freq: 56,book:[{move: "Bg5",replies:[
												{move: "Qc7", freq: 1,book:[{move: "c4",stock:0.82}]},
												{move: "f6",  freq: 1,book:[{move: "exf6"}]},
											]}]},
											{move: "Bxc5",   freq: 19,book:[{move: "Nxc5",replies:[
												{move: "Nxc5",   freq: 1,book:[{move: "Be3"}]}
											]}]}
										]}]},
										{move: "Ne7",   freq: 82,book:[{move: "Be2"}]},//double knight
										{move: "h6",   freq:  40},
										{move: "a6",   freq:  25},
										{move: "Rc8",   freq: 20},
										{move: "Qb6",   freq: 20},
										{move: "a5",   freq:  19},
									]}]},
									{move: "Ne7",   freq:   91,book:[{move: "Nf3"}]},
									{move: "c5",    freq:   81,book:[{move: "dxc5"}]},
									{move: "Qb6",    freq:  64,book:[{move: "Nf3"}]},
									{move: "Bb4+",   freq:  59,book:[{move: "c3"}]},
								]}]},
								{move: "Nd7",   freq:  91,book:[{move: "Ng1f3"}]},
							]}]},
							{move: "c5",   freq:  111809,book:[{move: "Nf3",replies:[
								{move: "Nc6",   freq:   11460,book:[{move: "dxc5"},{move: "c3"}]},//funny idea: pretend it's french. But the bishop is coming
								{move: "Bg4",   freq:    6634,book:[{move: "dxc5"}]},
								{move: "cxd4",   freq:   6559,book:[{move: "Nxd4"}]},
								{move: "e6",    freq:    1938,book:[{move: "c3",stock:0.76}]},//lmao, delayed french
							]}]},
							{move: "e6",   freq:   68029,book:[{move: "c3",replies:[
								{move: "c5",   freq: 6129,book:[{move: "Nf3"}]},
								{move: "Ne7",  freq: 1708},
								{move: "Nd7",  freq: 1619},
								{move: "f6",  freq:  1110},
							]}]},
							{move: "f6",   freq:   17692},
							{move: "g6",   freq:    7391},
							{move: "Nd7",  freq:    4214},
							{move: "a6",   freq:    3277},
						]},
						{move: "exd5"},{move: "Nc3"}]},
					{move: "d6", freq:   88781,book:[big_centre]},
					{move: "e6",  freq:  56509,book:[{move: "Nf3"}]},
					{move: "g6",  freq:  20734},
				]}]},
				{move: "g6",freq: 2753427,master:32190,book:[{move: "d4",replies:[//modern
					{move: "Bg7", freq: 1126123,book:[{move: "Nc3",replies:[
						{move: "d6", freq: 71077,book:[{move: "f4",replies:[
							{move: "Nf6", freq: 7229,book:[{move: "Nf3"}]},
							{move: "Nd7", freq: 2350},
							{move: "Nc6", freq: 2191},
							{move: "e6", freq:  1420},
						]}]},
						{move: "e6", freq: 47075,book:[{move: "h4",replies:[
							{move: "Ne7",freq:  590,book:[{move: "h5",replies:[
								{move: "O-O",freq:  249,book:[{move: "Qg4"}]},
								{move: "b6",freq:    68,book:[{move: "h6"}]},
								{move: "gxh5",freq:  62,book:[{move: "Qxh5"}]},
								{move: "d5",freq:    54},
							]}]},
							{move: "h5",freq:    70},
							{move: "d6",freq:    52},
							{move: "d5",freq:    50},
						]}]},
						{move: "b6", freq: 16226},
						{move: "Nf6", freq:16066},
						{move: "c5", freq: 12791},
						{move: "c6", freq: 10662},
					]}]},
					{move: "d6", freq:    55035,book:[{move: "Nc3"}]},
					{move: "e6", freq:    17431,book:[{move: "h4"}]},
					{move: "b6", freq:    13448},
					{move: "Nf6", freq:   12484},
					{move: "d5", freq:    11125},
				]}]},
				{move: "d6",freq: 2578568,master:40681,book:[{move: "d4",replies:[
					{move: "Nf6", freq:  515890,book:[{move: "Nc3",replies:[
						{move: "g6", freq:   246879,book:[{move: "f4"},{move: "Nf3"}]},
						{move: "Nb8d7", freq: 45139},
						{move: "c6", freq:    33228},
					]}]},
					{move: "g6", freq:   164629,book:[{move: "Nc3"}]},
					{move: "e6", freq:   134968,book:[{move: "Nf3"}]},
					{move: "c6", freq:    89171,book:[big_centre]},
					{move: "e5", freq:    86056,book:[{move: "Nf3",replies:philidor}]},
					{move: "Nd7", freq:   74121},
					{move: "Nc6", freq:   30383},
				]}]},//pirc
				{move: "b6",freq: 1805399,book:[{move: "d4",replies:[
					{move: "Bb7", freq:   677363,book:[{move: "Nc3",replies:[
						{move: "e6", freq: 180521,book:[{move: "Bd3",replies:[
							{move: "Bb4", freq:   22590,book:[{move: "Ne2"}]},
							{move: "Nf6", freq:    9224},
							{move: "d5", freq:     2761},
						]}]},
						{move: "g6", freq:  65709,book:[{move: "h4",replies:[
							{move: "Bg7", freq: 337,book:[{move: "h5",stock:2.47}]},
							{move: "h5", freq:   20},
						]}]},
						{move: "Nf6", freq: 36211},
						{move: "d6", freq:  22458},
						{move: "d5", freq:   7090},
					]}]},
					{move: "e6", freq:     31217,book:[{move: "Nf3"}]},
					{move: "Ba6", freq:    19616,book:[{move: "Bxa6"}]},
					{move: "g6", freq:     13960},
				]}]},//owen
				{move: "Nf6",freq: 1445137,book:[alekhine]},//alekhine
				{move: "Nc6",freq: 1204761,master:19927,book:[{move: "d4",replies:[
					{move: "d5", freq:  129518,book:[{move: "e5"}]},
					{move: "e5", freq:  103402},
					{move: "e6", freq:   58454},
					{move: "d6", freq:   20943},
					{move: "Nf6", freq:  16629,book:[{move: "d5"}]},
				]}]},
				{move: "a6",freq:   214136,book:[{move: "d4"}]},
				{move: "f5",freq:   191950,book:[{move: "exf5"}]}
			]
		},
		{move: "d4",replies:[
			{move: "d5",   freq: 14423006,book:[{move: "c4"},{move: "Bf4"},{move: "Nf3"}]},
			{move: "Nf6",   freq: 6220728,book:[{move: "Bf4"},{move: "Nf3"}]},
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
	]
}

const london_queenattack = {move: "Qb6",replies:[
	{move: "Qb3", freq: 623,book:[{move: "c4",replies:[
		{move: "Qxb6", freq: 222,book:[{move: "axb6",replies:[
			{move: "Nd2", freq: 1016,book:[{move: "b5"}]},
			{move: "Nf3", freq:  415,book:[{move: "bf5"}]},
			{move: "Na3", freq:  367,book:[{move: "e5"}]},
			{move: "a3", freq:   322,book:[{move: "b5"}]},
			{move: "e4", freq:   110},
		]}]},
		{move: "Qc2", freq:  123,book:[{move: "e5",replies:[//rare, all lichess ratings counted
			{move: "dxe5", freq: 505,book:[{move: "Bf5",replies:[
				{move: "Qc1", freq: 417,book:[{move: "g5",replies:[
					{move: "Bg3", freq:  293,book:[{move: "h5",replies:[
						{move: "h4", freq:  157,book:[{move: "g4"}]},
						{move: "h3", freq:   67,book:[{move: "h4",replies:[
							{move: "Bh2", freq:  1,book:[{move: "Bg7"}]},
						]}]},
					]}]},
					{move: "Bxg5", freq:  69,book:[{move: "Nxe5"}]},
				]}]},
				{move: "Qxf5", freq: 49,book:[{move: "Qxb2",replies:[
					{move: "e6",  freq: 39,book:[{move: "fxe6",replies:[
						{move: "Qxe6+", freq: 23,book:[{move: "Be7",replies:[
							{move: "Nf3", freq: 3,book:[{move: "Qxa1"}]},
							{move: "Qxd5", freq: 3,book:[{move: "Rd8"}]},
							{move: "Be2", freq: 3,book:[{move: "Nf6"}]},//best move
						]}]},
					]}]},
					{move: "Nf3", freq: 10,book:[{move: "Ng8e7"}]},
				]}]},
				{move: "Qd2", freq:  20},
			]}]},
			{move: "Bxe5", freq:  93,book:[{move: "Bf5",replies:[
				{move: "Qc1", freq:  27,book:[{move: "Nxe5",replies:[
					{move: "dxe5", freq:  28,book:[{move: "f6"}]},
				]}]},
				{move: "Qxf5", freq:  2,book:[{move: "Qxb2"}]},
			]}]},
		]}]},
	]}]},
	{move: "Qc2", freq: 438,book:[{move: "Bf5",replies:[//my most dubious gambit
		{move: "Qc1", freq:  135,book:[{move: "cxd4",replies:[
			{move: "exd4", freq:   94,book:[{move: "e5"}]},
		]}]},
		{move: "dxc5", freq: 129,book:[{move: "Bxc2",replies:[
			{move: "cxb6", freq:   1,book:[{move: "e5"}]},
		]}]},
		{move: "Qb3", freq:  127,book:[{move: "c4",replies:[
			{move: "Qxb6", freq: 101,book:[{move: "axb6"}]},
		]}]},
		{move: "Qxf5", freq:  97,book:[{move: "e5"}]},
		{move: "Qd3", freq:   94},
		{move: "Qd2", freq:   68},
	]}]},
	{move: "b3", freq:  218,book:[{move: "cxd4",replies:[
		{move: "exd4", freq: 233,book:[{move: "Bf5"}]},
		{move: "cxd3", freq:  91,book:[{move: "Bf5"}]},
	]}]},
	{move: "Qc1", freq: 104,book:[{move: "cxd4",replies:[
		{move: "exd4", freq: 233,book:[{move: "Bf5"}]},
		{move: "cxd3", freq:  91,book:[{move: "Bf5"}]},
	]}]},
	{move: "Na3", freq:  66},
	{move: "Nf3", freq:  40},
	{move: "Qd2", freq:  20},
	{move: "Nd2", freq:  19},
	{move: "Bd3", freq:  12},
	{move: "dxc5", freq: 12},
]}

const blackBook = {
	replies:[
		{move: "e4",   freq: 81122312,book:[{move: "e6",replies:[
		]}]},
		{move: "d4",   freq: 33498373,book:[{move: "d5",replies:[
			{move: "c4",  freq:  6374783,book:[{move: "c6"}]},//slav defence
			{move: "Bf4",  freq: 2364624,book:[{move: "c5",replies:[
				{move: "e3",  freq: 64434,book:[{move: "Nc6",replies:[
					{move: "c3", freq:15611,book:[london_queenattack]},
					{move: "Nf3", freq:8090},
					{move: "Bb5", freq:1610},
					{move: "Nc3", freq:1264},
				]}]},
				{move: "c3",  freq: 21496,book:[{move: "Nc6",replies:[
					{move: "e3", freq: 8276,book:[london_queenattack]},
					{move: "Nf3", freq:3609},
					{move: "dxc5",freq: 453},
				]}]},
				{move: "Nf3",  freq:16718,book:[{move: "Nc6"}]},
				{move: "dxc5", freq:10538},
				{move: "Nc3", freq:  3839},
			]}]},//london
			{move: "Nf3",  freq: 2159387},
			{move: "e3",  freq:  1411951},
			{move: "Nc3",  freq:  736915},
		]}]},
		{move: "Nf3",  freq:  4689064},
		{move: "c4",  freq:   4672138},
		{move: "e3",  freq:   3421637},
	]
}

function masterify(book){
	let hasMasterGames = (book.replies || []).some(reply => reply.hasOwnProperty("master"));
	(book.replies || []).forEach(reply => {
		if(reply.hasOwnProperty("master")){
			reply.freq = reply.master;
			if(reply.book && reply.book.length){
				masterify(reply.book[0])
			}
		}
		else if(hasMasterGames){
			reply.freq = 0;
		}
	})
}

function commonList(book){
	let list = [];
	let recurse = function(book,splitting,prefix){
		prefix += " " + book[0].move;
		if(book[0].replies && book[0].replies.length){
			let cumFreq = book[0].replies.reduce((acc,val) => acc + (val.freq || 1),0);
			book[0].replies.forEach(reply => {
				let splot = splitting * (reply.freq || 1)/cumFreq;
				if(reply.book && reply.book.length){
					recurse(reply.book,splot,prefix + " " + reply.move)
				}
				else{
					list.push([splot,prefix + " " + reply.move])
				}
			})
		}
		else{
			list.push([splitting,prefix])
		}
	};
	recurse(book,1,"");
	list.sort((b,a) => a[0] - b[0]);
	return list
}

function randomRun(book,number){
	let mates = 0;
	let recurse = function(book,len){
		if(book[0].replies && book[0].replies.length){
			let cumFreq = book[0].replies.reduce((acc,val) => acc + (val.freq || 1),0);
			let rand = Math.floor(Math.random()*cumFreq);
			let sum = 0;
			let i=0;
			for(;i<book[0].replies.length;i++){
				sum += book[0].replies[i].freq || 1;
				if(sum > rand){
					break;
				}
			};
			if(book[0].replies[i].book && book[0].replies[i].book.length){
				return recurse(book[0].replies[i].book,len+1)
			}
			else{
				return len
			}
		}
		else{
			if(book[0].move[book[0].move.length - 1] === "#"){
				mates++;
			}
			return len
		}
	}
	let sum = 0;
	for(let i=0;i<number;i++){
		sum += recurse(book,1);
	}
	console.log("mates",mates/number);
	return sum/number
}

function notationDec(notation,boardState){
	let normal_proto = notation.replace(/(#|\?|\?\?|!!|!|!\?|\?!|\+)$/,"");
	let normal = normal_proto.replace("x","");
	if(normal === "O-O"){
		if(boardState.isWhite){
			return {name: "K", x: 6, y: 0, x0: 4, y0: 0, special: "castle"}
		}
		else{
			return {name: "K", x: 6, y: 7, x0: 4, y0: 7, special: "castle"}
		}
	}
	else if(normal === "O-O-O"){
		if(boardState.isWhite){
			return {name: "K", x: 2, y: 0, x0: 4, y0: 0, special: "castle"}
		}
		else{
			return {name: "K", x: 2, y: 7, x0: 4, y0: 7, special: "castle"}
		}
	}
	let endingX = {"a": 0,"b": 1,"c": 2,"d": 3,"e": 4,"f": 5,"g": 6,"h": 7}[normal[normal.length - 2]];
	let endingY = parseInt(normal[normal.length - 1]) - 1;
	let piece = normal[0];
	if(!["R","N","B","Q","K"].includes(piece)){
		piece = "P";
		normal = "P" + normal
	}
	let x0 = -1;
	let y0 = -1;
	if(normal.length === 4){
		x0 = {"a": 0,"b": 1,"c": 2,"d": 3,"e": 4,"f": 5,"g": 6,"h": 7}[normal[1]];
		if(piece === "P"){
			if(boardState.isWhite){
				y0 = endingY - 1;
			}
			else{
				y0 = endingY + 1;
			}
		}
	}
	else if(normal.length === 5){
		x0 = {"a": 0,"b": 1,"c": 2,"d": 3,"e": 4,"f": 5,"g": 6,"h": 7}[normal[1]];
		y0 = parseInt(normal[2]) - 1;
	}
	else{
		if(piece === "K"){
			boardState.pieces.forEach((piece,index) => {
				if(boardState.isWhite && piece === "K"){
					x0 = index % 8;
					y0 = Math.floor(index / 8);
				}
				else if(!boardState.isWhite && piece === "k"){
					x0 = index % 8;
					y0 = Math.floor(index / 8);
				}
			})
		}
		else if(piece === "P"){
			x0 = endingX;
			if(boardState.isWhite){
				if(boardState.pieces[endingX + (endingY - 1)*8] === "P"){
					y0 = endingY - 1;
				}
				else{
					y0 = endingY - 2;
				}
			}
			else{
				if(boardState.pieces[endingX + (endingY + 1)*8] === "p"){
					y0 = endingY + 1;
				}
				else{
					y0 = endingY + 2;
				}
			}

		}
		else if(piece === "N"){
			let horse = boardState.isWhite ? "N" : "n";
			if(boardState.pieces[endingX + 2 + (endingY - 1)*8] === horse){
				x0 = endingX + 2;
				y0 = endingY - 1;
			}
			else if(boardState.pieces[endingX - 2 + (endingY - 1)*8] === horse){
				x0 = endingX - 2;
				y0 = endingY - 1;
			}
			else if(boardState.pieces[endingX - 2 + (endingY + 1)*8] === horse){
				x0 = endingX - 2;
				y0 = endingY + 1;
			}
			else if(boardState.pieces[endingX + 2 + (endingY + 1)*8] === horse){
				x0 = endingX + 2;
				y0 = endingY + 1;
			}
			else if(boardState.pieces[endingX + 1 + (endingY + 2)*8] === horse){
				x0 = endingX + 1;
				y0 = endingY + 2;
			}
			else if(boardState.pieces[endingX - 1 + (endingY + 2)*8] === horse){
				x0 = endingX - 1;
				y0 = endingY + 2;
			}
			else if(boardState.pieces[endingX - 1 + (endingY - 2)*8] === horse){
				x0 = endingX - 1;
				y0 = endingY - 2;
			}
			else if(boardState.pieces[endingX + 1 + (endingY - 2)*8] === horse){
				x0 = endingX + 1;
				y0 = endingY - 2;
			}
		}
		else if(piece === "B"){
			let bishop = boardState.isWhite ? "B" : "b";
			for(let offset = 1;offset < 8;offset++){
				if(boardState.pieces[endingX - offset + (endingY - offset)*8] === bishop){
					x0 = endingX - offset;
					y0 = endingY - offset;
					break;
				}
				else if(boardState.pieces[endingX + offset + (endingY + offset)*8] === bishop){
					x0 = endingX + offset;
					y0 = endingY + offset;
					break;
				}
				else if(boardState.pieces[endingX - offset + (endingY + offset)*8] === bishop){
					x0 = endingX - offset;
					y0 = endingY + offset;
					break;
				}
				else if(boardState.pieces[endingX + offset + (endingY - offset)*8] === bishop){
					x0 = endingX + offset;
					y0 = endingY - offset;
					break;
				}
			}
		}
		else if(piece === "Q"){
			let queen = boardState.isWhite ? "Q" : "q";
			for(let offset = 1;offset < 8;offset++){
				if(boardState.pieces[endingX - offset + (endingY - offset)*8] === queen){
					x0 = endingX - offset;
					y0 = endingY - offset;
					break;
				}
				else if(boardState.pieces[endingX + offset + (endingY + offset)*8] === queen){
					x0 = endingX + offset;
					y0 = endingY + offset;
					break;
				}
				else if(boardState.pieces[endingX - offset + (endingY + offset)*8] === queen){
					x0 = endingX - offset;
					y0 = endingY + offset;
					break;
				}
				else if(boardState.pieces[endingX + offset + (endingY - offset)*8] === queen){
					x0 = endingX + offset;
					y0 = endingY - offset;
					break;
				}

				else if(boardState.pieces[endingX + (endingY - offset)*8] === queen){
					x0 = endingX;
					y0 = endingY - offset;
					break;
				}
				else if(boardState.pieces[endingX + (endingY + offset)*8] === queen){
					x0 = endingX;
					y0 = endingY + offset;
					break;
				}
				else if(boardState.pieces[endingX - offset + (endingY)*8] === queen){
					x0 = endingX - offset;
					y0 = endingY;
					break;
				}
				else if(boardState.pieces[endingX + offset + (endingY)*8] === queen){
					x0 = endingX + offset;
					y0 = endingY;
					break;
				}
			}
		}
		else if(piece === "R"){
			let rook = boardState.isWhite ? "R" : "r";
			for(let offset = 1;offset < 8;offset++){
				if(boardState.pieces[endingX + (endingY - offset)*8] === rook){
					x0 = endingX;
					y0 = endingY - offset;
					break;
				}
				else if(boardState.pieces[endingX + (endingY + offset)*8] === rook){
					x0 = endingX;
					y0 = endingY + offset;
					break;
				}
				else if(boardState.pieces[endingX - offset + (endingY)*8] === rook){
					x0 = endingX - offset;
					y0 = endingY;
					break;
				}
				else if(boardState.pieces[endingX + offset + (endingY)*8] === rook){
					x0 = endingX + offset;
					y0 = endingY;
					break;
				}
			}
		}
	}
	return {name: piece, x: endingX, y: endingY, x0: x0, y0: y0}
}

function hohChess(DOMlocation,options){
	let board = document.createElement("div");
	board.classList.add("hohBoard");
	DOMlocation.appendChild(board);
	let backBoard = document.createElement("img");
	backBoard.classList.add("hohBackBoard");
	backBoard.src = "board.png";
	backBoard.width = 512;
	backBoard.height = 512;
	board.appendChild(backBoard);

	let pieceContainer = document.createElement("div");
	pieceContainer.classList.add("hohPieceContainer");
	board.appendChild(pieceContainer);

	let squareContainer = document.createElement("div");
	squareContainer.classList.add("hohSquareContainer");
	board.appendChild(squareContainer);

	let boardState = {
		pieces: [
			"R","N","B","Q","K","B","N","R",
			"P","P","P","P","P","P","P","P",
			"","","","","","","","",
			"","","","","","","","",
			"","","","","","","","",
			"","","","","","","","",
			"p","p","p","p","p","p","p","p",
			"r","n","b","q","k","b","n","r"
		],
		enPassantFile: 0,
		zeroing: 0,
		turn: 0,
		castle: [true,true,true,true],
		isWhite: true,
		notation: []
	};

	let globalSelected = -1;

	for(let i=0;i<64;i++){
		let ele = document.createElement("div");
		ele.classList.add("hohSquare");
		ele.style.left = (i % 8) * 64 + "px";
		ele.style.top  = 448 - Math.floor(i / 8) * 64 + "px";
		let currIndex = i + 0;
		ele.onclick = function(){
			if(ele.classList.contains("selected")){
				ele.classList.remove("selected");
				globalSelected = -1
			}
			else{
				if(globalSelected === -1){
					ele.classList.add("selected");
					globalSelected = currIndex
				}
				else{
					doMove(globalSelected,currIndex);
					squareContainer.querySelector(".selected").classList.remove("selected");
					globalSelected = -1
				}
			}
		}
		squareContainer.appendChild(ele);
	}

	let currentBook = whiteBook.book;

	let doMove = function(from,to){
		let x1 = from % 8;
		let y1 = Math.floor(from / 8);
		let x2 = to % 8;
		let y2 = Math.floor(to / 8);
		let name = boardState.pieces[from];
		boardState.pieces[from] = "";
		boardState.pieces[to] = name;
		if(name === "K" && y1 === 0 && y2 === 0 && x1 === 4){
			if(x2 === 6){
				boardState.pieces[to - 1] = "R";
				boardState.pieces[to + 1] = ""
			}
			else if(x2 === 2){
				boardState.pieces[to + 1] = "R";
				boardState.pieces[to - 2] = ""
			}
		}
		else if(name === "k" && y1 === 7 && y2 === 7 && x1 === 4){
			if(x2 === 6){
				boardState.pieces[to - 1] = "r";
				boardState.pieces[to + 1] = ""
			}
			else if(x2 === 2){
				boardState.pieces[to + 1] = "r";
				boardState.pieces[to - 2] = ""
			}
		}
		let possible = currentBook.map(move => notationDec(move.move,boardState));
		let found = false;
		let further = 0;
		//console.log(further,x2,y2,name,possible,found);
		for(let i=0;i<possible.length;i++){
			if(possible[i].x === x2 && possible[i].y === y2 && name === possible[i].name){
				found = true;
				further = i;
				break;
			}
		};
		boardState.isWhite = false;
		if(found){
			currentBook = currentBook[further];
			if(currentBook.replies && currentBook.replies.length){
				let cumFreq = currentBook.replies.reduce((acc,val) => acc + (val.freq || 1),0);
				let rand = Math.floor(Math.random()*cumFreq);
				let sum = 0;
				let i=0;
				for(;i<currentBook.replies.length;i++){
					sum += currentBook.replies[i].freq || 1;
					if(sum > rand){
						break;
					}
				};
				let move = notationDec(currentBook.replies[i].move,boardState);
				boardState.pieces[move.y0*8 + move.x0] = "";
				if(boardState.isWhite){
					boardState.pieces[move.y*8 + move.x] = move.name;
				}
				else{
					boardState.pieces[move.y*8 + move.x] = move.name.toLowerCase();
					if(move.special === "castle" && move.x0 === 4){
						if(move.x === 6){
							boardState.pieces[move.y*8 + move.x - 1] = "r";
							boardState.pieces[move.y*8 + move.x + 1] = ""
						}
						else if(move.x === 2){
							boardState.pieces[move.y*8 + move.x + 1] = "r";
							boardState.pieces[move.y*8 + move.x - 2] = ""
						}
					}
				}
				boardState.isWhite = true;
				if(currentBook.replies[i].book && currentBook.replies[i].book.length){
					currentBook = currentBook.replies[i].book;
				}
				else{
					let fail = document.createElement("div");
					fail.classList.add("hohFail");
					fail.innerText = "Ferdig!";
					if(currentBook.replies[i].stock){
						fail.innerText += " " + currentBook.replies[i].stock
					}
					DOMlocation.appendChild(fail);
				}
			}
			else{
				let fail = document.createElement("div");
				fail.classList.add("hohFail");
				fail.innerText = "Ferdig!";
				if(currentBook.stock){
					fail.innerText += " " + currentBook.stock
				}
				DOMlocation.appendChild(fail);
			}
		}
		else{
			let fail = document.createElement("div");
			fail.classList.add("hohFail");
			fail.innerText = currentBook.map(move => move.move).join(", ");
			DOMlocation.appendChild(fail);
		}
		render()
	}

	let render = function(){
		Array.from(pieceContainer.children).forEach(child => child.remove());
		boardState.pieces.forEach((piece,index) => {
			if(piece){
				let ele = document.createElement("img");
				ele.classList.add("hohPiece");
				ele.width = 64;
				ele.height = 64;
				ele.style.left = (index % 8) * 64 + "px";
				ele.style.top  = 448 - Math.floor(index / 8) * 64 + "px";
				if(piece === piece.toUpperCase()){
					ele.src = piece + "w.png";
				}
				else{
					ele.src = piece.toUpperCase() + "b.png";
				}
				pieceContainer.appendChild(ele);
			}
		})
	}

	render()
}
