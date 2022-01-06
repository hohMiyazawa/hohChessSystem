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
						{move: "Qe7",  freq: 165,book:[{move: "Qxc3"}]},
						{move: "Qf6",  freq: 132,book:[{move: "Nxc3"}]},
						{move: "Nge7",  freq: 95,book:[{move: "Qxc3"}]},
						{move: "Nf6",  freq:  69,book:[{move: "Qxc3"}]},
						{move: "b6",  freq:   12,book:[{move: "Qxc3"}]},
					]}]},
					{move: "Kf8",  freq:  134,book:[{move: "Qxc5+"}]},
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
			{move: "Bb6",  freq:  4418,book:[{move: "e5"}]},
			{move: "Bb4",  freq:  1416,book:[{move: "e5"}]},
			{move: "Be7",  freq:   762,book:[{move: "e5"}]},
			{move: "Nxd4",  freq:  178,book:[{move: "Nxd4"}]},
		]}]},
		{move: "d6",  freq:    2286,book:[{move: "cxd4",replies:[
			{move: "Bb6",  freq:   3666,book:[{move: "Nc3"}]},
			{move: "Bb4",  freq:    456,book:[]},
			{move: "Nxd4",  freq:    63,book:[]},
		]}]},
		{move: "Ng8e7",  freq:  1546,book:[{move: "cxd4"}]},
		{move: "h6",  freq:     818,book:[]},
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
		{move: "d5",  freq:  438,book:[]},
		{move: "Nh6",  freq: 138,book:[]},
		{move: "dxc3",  freq:131,book:[{move: "Bxf7+"}]},
		{move: "Nf6",  freq:  89,book:[]},
		{move: "d6",  freq:   63,book:[]},
		{move: "f6",  freq:   31,book:[]},
	]}]},
	{move: "d6", freq:    3553,book:[{move: "Qb3"}]},
	{move: "Na5", freq:   1098,book:[{move: "Nxe5"}]},
	{move: "Nf6", freq:    431,book:[]},
]}];

const hoh_a_variation = [{move: "d4",replies:[
	{move: "exd4", freq: 23299,master:316,book:[{move: "Qb3",replies:[
		{move: "Qe7",  freq:   2648,master:66,book:[{move: "O-O",replies:[
			{move: "dxc3",  freq:  811,master:2,book:[{move: "Nxc3"}]},
			{move: "Nf6",  freq:   793,master:3,book:[{move: "cxd4",replies:[
				{move: "O-O",  freq:  190,book:[{move: "e5"}]},
				{move: "d6",  freq:    39,book:[]},
				{move: "Nxe4",  freq:  30,book:[{move: "Ba3"}]},
			]}]},
			{move: "d6",  freq:    463,master:2,book:[]},
			{move: "Bb6",  freq:   288,master:64,book:[]},
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
		{move: "Bb6",  freq: 103,book:[{move: "Nb1d2",replies:[
			{move: "Na5",  freq: 1,master:51,book:[{move: "Qc2",replies:[
				{move: "Nxc4",  freq: 1,book:[{move: "Nxc4"}]},
			]}]}
		]}]},
		{move: "Nf6",  freq:  56,book:[{move: "dxe5"}]},
		{move: "exd4", freq:  15,book:[{move: "cxd4"}]},
	]}]},
	{move: "Nf6", freq:    404,master:1,book:[{move: "dxe5"}]},
]}];

const french_cumsock = [
	{move: "Nc6",  freq:  61940,book:[{move: "Nf3"}]},
	{move: "Bb4+",  freq: 17547,book:[{move: "Nc3"}]},
	{move: "Ne7",  freq:   6653,book:[]},
];

const hoh_sicilian = [//sicilian
	{move: "c3",replies:[
		{move: "Nc6",  freq: 251155,master:80,book:[{move: "d4",replies:[
			{move: "cxd4",  freq: 158865,book:[{move: "cxd4",replies:[
				{move: "e6",  freq:    58005,book:[{move: "d5",replies:[
					{move: "exd5",    freq: 9349,book:[{move: "exd5"}]},
					{move: "Ne5",    freq:  1204},
					{move: "Bb4+",    freq:  575},
					{move: "Nc6e7",    freq: 374},
					{move: "Nb8",    freq:   235},
					{move: "Nb4",    freq:   103},
					{move: "Qa5+",    freq:   67},
				]}]},
				{move: "d5",  freq:    48453,book:[{move: "Nc3",replies:[
					{move: "dxe4",  freq: 3038,book:[{move: "d5"}]},
					{move: "e6",    freq:  941},
					{move: "Nf6",   freq:  338},
				]}]},
				{move: "d6",  freq:    26071,book:[{move: "d5"}]},
				{move: "g6",  freq:    15633},
				{move: "e5",  freq:    10854},
				{move: "Nf6",  freq:    9176},
				{move: "Qa5+",  freq:   2468},
				{move: "Qb6",  freq:    2057},
				{move: "a6",  freq:     1612}
			]}]},
			{move: "e6",  freq:    14426},
			{move: "d6",  freq:     5400},
			{move: "d5",  freq:     4080},
		]}]},
		{move: "d6",  freq:  149838,master:2650,book:[{move: "d4",replies:[
			{move: "cxd4",  freq: 107790,book:[{move: "cxd4",replies:[
				{move: "Nf6",  freq: 48489,book:[{move: "Nc3"}]},
				{move: "Nc6",  freq: 18375},
				{move: "e6",  freq:  15370},
				{move: "g6",  freq:  10442},
				{move: "a6",  freq:   6383},
				{move: "e5",  freq:   3447},
				{move: "Nd7",  freq:  1208},
			]}]},
			{move: "Nf6",  freq:    6685},
			{move: "Nc6",  freq:    3881},
			{move: "b6",  freq:     3618},
			{move: "e6",  freq:     1371},
			{move: "Nd7",  freq:    1208},
		]}]},
		{move: "e6",  freq:  104391,master:2815,book:[{move: "d4",replies:[
			{move: "cxd4",  freq:  91298,book:[{move: "cxd4",replies:[
				{move: "d5",  freq:    27053,book:[{move: "e5",replies:french_cumsock}]},
				{move: "Nc6",  freq:   18631},
				{move: "Nf6",  freq:   10389},
				{move: "a6",  freq:     8788},
			]}]},
			{move: "d5",  freq:    33833},
			{move: "Nc6",  freq:   14068},
			{move: "a6",  freq:     9611},
			{move: "Nf6",  freq:    8100},
		]}]},
		{move: "d5",  freq:   71256,master:11225,book:[{move: "exd5",replies:[
			{move: "Qxd5",  freq:  37488,book:[{move: "Nf3",replies:[
				{move: "Nf6",  freq: 3950,book:[{move: "d4"}]},
				{move: "Bg4",  freq: 3790,book:[{move: "Be2"}]},
				{move: "Nc6",  freq: 3102,book:[{move: "d4"}]},
				{move: "e5",   freq:  937},
			]}]},
			{move: "Nf6",  freq:    1622},
		]}]},
		{move: "Nf6",  freq:  43999,master:14472,book:[{move: "e5"}]},
		{move: "e5",  freq:   40417,master:422,book:[{move: "Nf3"}]},
		{move: "g6",  freq:   31252,master:1178,book:[{move: "d4"}]},
		{move: "a6",  freq:   12693,master:37},
		{move: "b6",  freq:    3490,master:484},
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

const whiteBook = {
	book: [
		{move: "e4",
			replies: [
				{move: "e5",freq: 33121744,master:244654,book:[
					{move: "Nf3",replies:[
						{move: "Nc6",freq: 13449726,master:191051,book:[
							{move: "Bc4",replies:[
								{move: "Bc5",  freq: 2133202,master:17519,book:[
									{move: "b4",replies:[//evans gambit
										{move: "Bxb4", freq: 137950,master:1161,book:[{move: "c3",replies:[
										{move: "Nc6", freq: 8119,book:[]},
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
										{move: "Bd4", freq:     2941,book:[{move: "c3"}]},
										{move: "Nf6", freq:    2232,book:[{move: "bxc5"}]}
									]}
								]},
								{move: "Nf6",  freq: 1807909,master:13633,book:[
									{move: "Ng5",replies:[//stekt lever
										{move: "d5", freq:  565489,master:2325,book:[{move: "exd5",replies:[
											{move: "Na5",  freq: 246874,master:1983,book:[{move: "Bb5+",replies:[
												{move: "c6", freq:156140,master:1742,book:[{move: "dxc6",replies:[
													{move: "bxc6", freq:145596,master:1741,book:[{move: "Qf3",replies:[
														{move: "Bb7", freq: 12681,master:6,book:[{move: "Ba4"}]},
														{move: "Bd7", freq:  5194,master:8},
														{move: "Be7", freq:  4001,master:148},
														{move: "h6",  freq:  2612,master:30,book:[{move: "Ne4"}]},
														{move: "Rb8", freq:  2425,master:151,book:[{move: "Bd3"}]},
														{move: "cxb5",freq:  1599,master:15},
														{move: "e4",freq:    1455},
														{move: "Bg4",freq:   1047},
														{move: "Qb6",freq:    856},
														{move: "Qc7",freq:    792,master:16},
													]}]},
													{move: "Nxc6", freq:  9155,book:[{move: "d3"}]}
												]}]},
												{move: "Bd7", freq:35692,master:181,book:[{move: "Qe2"}]},
												{move: "Nd7", freq:  876},
											]}]},
											{move: "Nxd5", freq: 228449,master:26,book:[{move: "d4",replies:[
												{move: "Nxd4", freq:3350,book:[{move: "c3",replies:[
													{move: "Ne6",  freq: 719,book:[{move: "Qxd5"}]},
													{move: "b5",   freq: 257,book:[{move: "Bd3"}]},
													{move: "h6",   freq: 215,book:[{move: "Nxf7"}]},
													{move: "Nc6",  freq: 204,book:[{move: "Bxd5"}]},
													{move: "Be7",  freq: 199},
													{move: "f6",   freq: 196},
													{move: "Nf5",  freq: 112},
												]}]},
												{move: "exd4", freq:2165,book:[{move: "O-O"}]},
												{move: "Be7",  freq:1398,book:[{move: "Nxf7"}]},
												{move: "f6",   freq:1292,book:[{move: "dxe5"}]},
												{move: "h6",   freq:1112,book:[{move: "Nxf7"}]},
												{move: "Be6",  freq: 917},
												{move: "Qxg6", freq: 246},
											]}]},
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
															{move: "cxd6", freq:  653,master:5,book:[{move: "Kxf2"}]},
															{move: "Qxd6", freq:  219,master:3,book:[{move: "Nf7"}]},
															{move: "Qf8", freq:    26},
														]}]},
														{move: "Bg4", freq:  1867,master:2},
														{move: "Na5", freq:   509},
														{move: "Nxd5", freq:  132},
														{move: "Qc5", freq:    92}
													]}]},
													{move: "Nxe4", freq:  6746},
													{move: "Bb6", freq:   1850,master:1},
													{move: "Qc5", freq:   1148},
												]}]},
												{move: "Nxe4", freq:  699,book:[{move: "Nxd8"}]},
												{move: "d5",   freq:  337}
											]}]},
											{move: "Qe7",   freq: 5304},
											{move: "O-O",   freq:  303},
											{move: "d5",   freq:   267},
											{move: "Nxe4",   freq: 232},
										]},{move: "Bxf7+"}]},
										{move: "Nxe4", freq: 18163,book:[{move: "Bxf7+",replies:[
											{move: "Ke7", freq: 1,book:[{move: "d4"}]},
										]}]},
										{move: "Qe7", freq:   8965,book:[]},
										{move: "d6", freq:    3261,book:[]},
										{move: "h6", freq:    3079,master:1,book:[]},
										{move: "Be7", freq:   2499,book:[]},
										{move: "Na5", freq:   1891,master:1,book:[]},
									]}
								]},
								{move: "h6",   freq: 1051935,book:[{move: "d4",replies:[//anti fried liver
									{move: "exd4", freq: 192921,book:[{move: "Nxd4",replies:[
										{move: "Nxd4", freq: 89391,book:[{move: "Qxd4"}]},
										{move: "Bc5", freq:  26475,book:[]},
										{move: "Ne5", freq:  20826,book:[]},
										{move: "Nf6", freq:  15963,book:[]},
										{move: "Qf6", freq:  14525,book:[]},
										{move: "d6", freq:    8904,book:[]},
									]}]},
									{move: "d6", freq:    30220,book:[]},
									{move: "Bd6", freq:   10285,book:[]},
									{move: "Nf6", freq:    8773,book:[]},
									{move: "Nxd4", freq:   4884,book:[]},
									{move: "f6", freq:     4610,book:[]},
									{move: "Bb4+", freq:   3253,book:[]}
								]}]},
								{move: "d6",   freq:  414989,master:369,book:[{move: "d4",replies:[
									{move: "exd4", freq:   54879,book:[{move: "Nxd4"}]},
									{move: "Bg4", freq:    34166,book:[]},
									{move: "h6", freq:      8846,book:[]},
									{move: "Nf6", freq:     7725,book:[]},
								]}]},
								{move: "Nd4",  freq:  360526,book:[{move: "Nxd4",replies:[
									{move: "exd4", freq: 138728,book:[{move: "O-O"}]},
									{move: "Qg5", freq:     576,book:[]}
								]}]},
								{move: "Be7",  freq:  238629,master:936,book:[{move: "d4",replies:[
									{move: "exd4", freq: 43248,book:[{move: "O-O"}]},
									{move: "d6", freq:   11463,book:[]},
									{move: "Nf6", freq:   1913,book:[]},
									{move: "Nxd4", freq:   891,book:[]},
								]}]},
								{move: "f5", freq:    44523,book:[]},
								{move: "f6", freq:    42942,book:[]},
								{move: "a6", freq:    42893,book:[{move: "d4"}]},
								{move: "Qf6", freq:   33915,book:[{move: "Nc3"}]},
								{move: "g6", freq:    18616,book:[]},
								{move: "Bb4", freq:   15044,book:[]},
							]},
							{move: "Bb5",replies:[
								{move: "a6", freq:   871074,book:[{move: "Ba4"}]},
								{move: "d6", freq:   843249,book:[]},
								{move: "Nf6", freq:  598363,book:[]},
								{move: "Bc5", freq:  385388,book:[{move: "c3"}]},
								{move: "Nd4", freq:  217804,book:[]},
								{move: "Nge7", freq: 214645,book:[]},
								{move: "Qf6", freq:   97878,book:[]},
								{move: "Bd6", freq:   61048,book:[]},
								{move: "f6", freq:    41608,book:[]},
								{move: "f5", freq:    36776,book:[]},
								{move: "h6", freq:    15851,book:[]},
								{move: "d5", freq:    12802,book:[]}
							]}//spansk
						]},
						{move: "d6",  freq: 3680148,master:5939,book:[{move: "d4",replies:[//philidor
							{move: "exd4", freq:666899,book:[{move: "Nxd4",replies:[
								{move: "Nf6", freq: 183969,book:[{move: "Nc3"}]},
								{move: "c5", freq:   81720,book:[{move: "Ne2"}]},
								{move: "Be7", freq:  75055,book:[]},
								{move: "Bd7", freq:  47599,book:[]},
								{move: "Nc6", freq:  21980,book:[]},
								{move: "h6", freq:   19376,book:[]},
								{move: "a6", freq:   10971,book:[]},
							]}]},
							{move: "Bg4", freq: 211540,book:[{move: "Nc3"}]},
							{move: "Nc6", freq:  96520,book:[]},
							{move: "f6", freq:   46777,book:[{move: "Bc4"}]},
							{move: "Nd7", freq:  42884,book:[]},
							{move: "Nf6", freq:  37881,book:[]},
							{move: "Qe7", freq:  26681,book:[]},
							{move: "f5", freq:   19180,book:[]},
						]}]},
						{move: "Nf6", freq: 2227800,master:26105,book:[{move: "Nxe5",replies:[//russisk
							{move: "d6",  freq: 243501,book:[{move: "Nf3",replies:[
								{move: "Nxe4",  freq: 194811,book:[{move: "d4"}]},
								{move: "Bg4",  freq:    4811,book:[]},
								{move: "Nc6",  freq:    2185,book:[]},
							]}]},
							{move: "Nc6", freq: 233575,book:[{move: "Nxc6",replies:[//stafford
								{move: "dxc6", freq:  194146,book:[{move: "d3",replies:[
									{move: "Bc5", freq: 73338,book:[{move: "Be2",replies:[
										{move: "h5",  freq: 18430,book:[{move: "c3",replies:[
											{move: "Ng4",  freq: 2893,book:[{move: "d4"}]},
											{move: "Bg4",  freq:  669,book:[]},
											{move: "Bb6",  freq:  629,book:[]},
											{move: "Qd6",  freq:  307,book:[]},
											{move: "Bxf2+",freq:  173,book:[]},
											{move: "Be6",  freq:  121,book:[]},
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
							{move: "Qe7", freq: 126856,book:[{move: "d4"}]},
							{move: "Nxe4",freq:  79641,book:[{move: "Qe2",replies:[
								{move: "d5",  freq:  20344,book:[{move: "d3"}]},
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
							{move: "d5", freq:    9369,book:[]},
							{move: "Bd6", freq:   6585,book:[]},
						]},{move: "d4"}]},
						{move: "Bc5",  freq: 523105,book:[{move: "Nxe5"}]},
						{move: "Qf6",  freq: 424111,book:[{move: "Nc3"}]},
						{move: "d5",   freq: 355116,master:219,book:[{move: "Nxe5"}]},//elephant gambit
						{move: "f5",   freq: 183171,master:268,book:[{move: "Nxe5",replies:[//latvian gambit
							{move: "Nf6", freq:  15006,book:[{move: "Bc4"}]},
							{move: "Qf6", freq:  11625,book:[{move: "d4"}]},
							{move: "fxe4", freq:  3574,book:[{move: "Qh5+"}]},
						]}]},
						{move: "f6",   freq: 114483,book:[]},
						{move: "Bd6",  freq:  76490,book:[]},
						{move: "c6",  freq:   44200,book:[]},
						{move: "Qe7",  freq:  42751,master:289,book:[]},
						{move: "c5",  freq:   15341,book:[]},
					]}
				]},
				{move: "c5",freq: 16035874,master:506912,book:hoh_sicilian},
				{move: "e6",freq: 8895904,master:134130,book:[{move: "d4",replies:[
					{move: "d5",  freq: 2728137,master:121469,book:[{move: "e5",replies:[
						{move: "c5", freq:  1066483,master:11804,book:[{move: "c3",replies:[
							{move: "Nc6",  freq: 428866,master:8429,book:[{move: "Nf3",replies:[
								{move: "Qb6", freq: 207357,master:3720,book:[{move: "a3",replies:[
									{move: "cxd4", freq:  11530,master:50,book:[{move: "cxd4",replies:[
										{move: "Ng8e7", freq: 9165,book:[{move: "Nc3"}]},
										{move: "Bd7", freq:   2418},
										{move: "Nh6", freq:   1358},
									]}]},
									{move: "Bd7", freq:    7732,master:545},
									{move: "Ng8e7", freq:  7524,master:57},
									{move: "Nh6", freq:    4605,master:1282},
									{move: "a5", freq:     3177,master:227},
									{move: "c4", freq:     3142,master:1447,book:[{move: "Nb1d2"}]},
								]}]},
								{move: "Bd7", freq:  60811,master:3787,book:[{move: "Be2"}]},
								{move: "cxd4", freq: 54313,master:80},
								{move: "Ng1e7", freq:41043,master:590},
								{move: "a6", freq:    8808,master:3},
							]}]},
							{move: "Qb6",  freq:  90787,master:2760,book:[{move: "Nf3"}]},
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
								{move: "cxb3", freq:  567},
								{move: "Nc6", freq:   183},
								{move: "Ne7", freq:    84}
							]}]},
							{move: "Bd7",   freq: 14753,master:426},
						]}]},
						{move: "Nc6", freq:   75474,master:5},
						{move: "f6", freq:    40990,master:2},
						{move: "Qe7", freq:   28888},
						{move: "a6", freq:    25661},
						{move: "c6", freq:    13544},
					]}]},//Fransk
					{move: "c5",  freq:  320756,master:892,book:[{move: "d5",replies:[
						{move: "exd5", freq:  60286,book:[{move: "exd5"}]},
						{move: "d6", freq:    26939,book:[{move: "Nf3"}]},
						{move: "Nf6", freq:   14620},
						{move: "e5", freq:    10542}
					]}]},//Benoni
					{move: "d6",  freq:  238047,master:28,book:[{move: "Nf3"}]},
					{move: "b6",  freq:  219901,master:579,book:[{move: "Nf3"}]},
					{move: "c6",  freq:  187958,book:[{move: "Nf3"}]},
					{move: "Nf6", freq:   83086},
				]}]},
				{move: "d5",freq: 7622050,master:22589,book:[{move: "exd5",replies:[//scandinavian
					{move: "Qxd5", freq: 3580084,book:[{move: "Nc3",replies:[
						{move: "Qd8",  freq: 1088322,book:[{move: "d4",replies:[
							{move: "Nf6", freq:  153795,book:[{move: "Nf3"}]},
							{move: "e6", freq:    80910},
							{move: "Bf5", freq:   33794},
							{move: "c6", freq:    33439},
							{move: "Nc6", freq:   26150},
							{move: "g6", freq:    14067},
							{move: "e5", freq:     5121},
							{move: "a6", freq:     5119},
							{move: "h6", freq:     4085},
						]}]},
						{move: "Qa5",  freq:  757708,book:[{move: "d4",replies:[
							{move: "c6", freq: 97830,book:[{move: "Bd2"}]},
							{move: "Nf6", freq:94880},
							{move: "Nc6", freq:19625},
							{move: "Bf5", freq:16744},
							{move: "e5", freq: 10236},
						]}]},
						{move: "Qe6+",  freq: 276592,book:[{move: "Be2"}]},
						{move: "Qe5+",  freq: 238038,book:[{move: "Be2"}]},
						{move: "Qd6",  freq:  208508,book:[{move: "d4"}]},
						{move: "Qd7",  freq:   23502,book:[{move: "d4"}]},
						{move: "Qc6",  freq:    9296,book:[{move: "Bb5"}]},
					]}]},
					{move: "Nf6",  freq: 1050569,book:[{move: "d4",replies:[
						{move: "Nxd5", freq:  91820,book:[{move: "Nf3"}]},
						{move: "Bg4", freq:   19424},
						{move: "Qxd5", freq:  12968,book:[{move: "Nc3"}]},
						{move: "c6", freq:    12152},
						{move: "e6", freq:    10917}
					]}]},
					{move: "c6",   freq:  228041},
					{move: "e6",   freq:  120401},
					{move: "Bg4",  freq:   41487},
					{move: "e5",   freq:   22990},
					{move: "Bf5",   freq:  17446},
				]}]},
				{move: "c6",freq: 4613271,master:84737,book:[{move: "d4",replies:[//caro-kann
					{move: "d5", freq: 1708932,book:[
						{move: "e5",replies:[
							{move: "Bf5",  freq:  583647,book:[{move: "Nd2",replies:[
								{move: "e6",   freq: 2780,book:[{move: "Nb3",replies:[
									{move: "Nd7",   freq:  422,book:[{move: "Nf3",replies:[
										{move: "c5",   freq: 205,book:[{move: "dxc5",replies:[
											{move: "Nxc5",   freq: 56,book:[{move: "Bg5",replies:[
												{move: "Qc7", freq: 1,book:[{move: "c4"}]},
												{move: "f6",  freq: 1,book:[{move: "exf6"}]},
											]}]},
											{move: "Bxc5",   freq: 19,book:[{move: "Nxc5",replies:[
												{move: "Nxc5",   freq: 1,book:[{move: "Be3"}]}
											]}]}
										]}]},
										{move: "Ne7",   freq: 82},
										{move: "h6",   freq:  40},
										{move: "a6",   freq:  25},
										{move: "Rc8",   freq: 20},
										{move: "Qb6",   freq: 20},
										{move: "a5",   freq:  19},
									]}]},
									{move: "Ne7",   freq:   91,book:[{move: "Nf3"}]},
									{move: "c5",    freq:   81},
									{move: "Qb6",    freq:  64,book:[{move: "Nf3"}]},
									{move: "Bb4+",   freq:  59,book:[{move: "c3"}]},
								]}]},
								{move: "Nd7",   freq:  91,book:[{move: "Ng1f3"}]},
							]}]},
							{move: "c5",   freq:  111809,book:[{move: "Nf3"}]},
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
					{move: "d6", freq:   88781,book:[{move: "c4"}]},
					{move: "e6",  freq:  56509,book:[{move: "Nf3"}]},
					{move: "g6",  freq:  20734},
				]}]},
				{move: "g6",freq: 2753427,master:32190,book:[{move: "d4",replies:[
					{move: "Bg7", freq: 1126123,book:[{move: "Nc3",replies:[
						{move: "d6", freq: 71077,book:[{move: "f4"}]},
						{move: "e6", freq: 47075},
						{move: "b6", freq: 16226},
						{move: "Nf6", freq:16066},
						{move: "c5", freq: 12791},
						{move: "c6", freq: 10662},
					]}]},
					{move: "d6", freq:    55035,book:[{move: "Nc3"}]},
					{move: "e6", freq:    17431},
					{move: "b6", freq:    13448},
					{move: "Nf6", freq:   12484},
					{move: "d5", freq:    11125},
				]}]},//modern
				{move: "d6",freq: 2578568,master:40681,book:[{move: "d4",replies:[
					{move: "Nf6", freq:  515890,book:[{move: "Nc3",replies:[
						{move: "d6", freq: 71077,book:[{move: "Be3"}]},
						{move: "e6", freq: 47075},
						{move: "b6", freq: 16226},
						{move: "Nf6",freq: 16066},
						{move: "c5",freq:  12791},
						{move: "c6",freq:  10662},
						{move: "Nc6",freq:  5915},
						{move: "e5",freq:   4640},
					]}]},
					{move: "g6", freq:   164629,book:[{move: "Nc3"}]},
					{move: "e6", freq:   134968},
					{move: "c6", freq:    89171},
					{move: "e5", freq:    86056},
					{move: "Nd7", freq:   74121},
					{move: "Nc6", freq:   30383},
				]}]},//pirc
				{move: "b6",freq: 1805399,book:[{move: "d4",replies:[
					{move: "Bb7", freq:   677363,book:[{move: "Nc3"}]},
					{move: "e6", freq:     31217,book:[{move: "Nf3"}]},
					{move: "Ba6", freq:    19616},
					{move: "g6", freq:     13960},
				]}]},//owen
				{move: "Nf6",freq: 1445137,book:[{move: "e5",replies:[
					{move: "Nd5", freq: 502164,book:[{move: "d4",replies:[
						{move: "d6", freq:  128945,book:[{move: "c4",replies:[
							{move: "Nb6", freq:  50579,book:[{move: "f4"}]},
							{move: "Nb4", freq:    611},
							{move: "dxe5", freq:   194},
						]}]},
						{move: "Nb6", freq:  32766},
						{move: "e6", freq:   26722},
						{move: "Nc6", freq:  10163},
					]}]},
					{move: "Ne4", freq:  40597},
					{move: "Ng8", freq:  35805},
				]}]},//alekhine
				{move: "Nc6",freq: 1204761,master:19927,book:[{move: "d4",replies:[
					{move: "d5", freq:  129518,book:[{move: "e5"}]},
					{move: "e5", freq:  103402},
					{move: "e6", freq:   58454},
					{move: "d6", freq:   20943},
					{move: "Nf6", freq:  16629},
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
					DOMlocation.appendChild(fail);
				}
			}
			else{
				let fail = document.createElement("div");
				fail.classList.add("hohFail");
				fail.innerText = "Ferdig!";
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
