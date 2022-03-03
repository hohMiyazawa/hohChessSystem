
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

const french_advance = [
	{move: "c3", freq:  2110165,book:[{move: "Nc6",replies:[
		{move: "Nf3", freq: 1120796,book:[{move: "Qb6",replies:[
			{move: "Bd3", freq: 254760,book:[{move: "cxd4"}]},
			{move: "a3", freq:  206869,book:[{move: "c4"}]},
			{move: "Be2", freq: 169924,book:[{move: "cxd4"}]},
			{move: "b3", freq:   47416,book:[{move: "cxd4"}]},
			{move: "Be3", freq:  38360,book:[{move: "Qxb2"}]},
			{move: "Qb3", freq:  36873,book:[{move: "Qxb3"}]},
			{move: "Na3", freq:  36185,book:[{move: "cxd4"}]},
			{move: "dxc5", freq: 21937,book:[{move: "Bxc5"}]},
			{move: "a4", freq:   20440,book:[{move: "Bd7"}]},
			{move: "Nb1d2", freq:14998,book:[{move: "cxd4"}]},
		]}]},
		{move: "Bb5", freq:  153133},
		{move: "Be3", freq:   81502},
		{move: "f4", freq:    80185},
		{move: "a3", freq:    35972},
		{move: "Bd3", freq:   13346},
	]}]},
	{move: "Nf3", freq:  434269,book:[{move: "Nc6"}]},
	{move: "Bb5+", freq:  75251,book:[{move: "Nc6"}]},
	{move: "f4", freq:    68730,book:[{move: "Nc6"}]},
	{move: "dxc5", freq:  68216,book:[{move: "Bxc5"}]},
	{move: "Qg4", freq:   66763,book:[{move: "Nc6"}]},
	{move: "Be3", freq:   55568},
	{move: "c4", freq:    44629},
	{move: "Nc3", freq:   14659,book:[{move: "cxd4"}]},
];

const french_exchange_kingKnight = {move:"Nf6",replies:[
	{move: "Bd3", freq:  647888,book:[{move: "Bd6",replies:[
		{move: "O-O", freq: 303913,book:[{move: "O-O",replies:[
			{move: "Bg5", freq: 88750,book:[{move: "Bg4",replies:[
				{move: "Nb1d2", freq: 31036,book:[{move: "h6"}]},
				{move: "h3",    freq: 18641},
				{move: "c3",    freq:  8599},
			]}]},
			{move: "Re1", freq: 64307,book:[{move: "Bg4"}]},
			{move: "h3",  freq: 58196,book:[{move: "h6"}]},
			{move: "c3",  freq: 40354,book:[{move: "Bg4"}]},
			{move: "c4",  freq: 11698,book:[{move: "dxc4"}]},
			{move: "Nc3",  freq: 9055,book:[{move: "Bg4"}]},
			{move: "Ne5",  freq: 7459,book:[{move: "c5"}]},
		]}]},
		{move: "Bg5", freq:  34246},
		{move: "h3", freq:   32157},
		{move: "c3", freq:   29511},
		{move: "Qe2+", freq: 21036},
	]}]},
	{move: "Nc3", freq:  264501,book:[{move: "Bd6"}]},
	{move: "c4", freq:   202589,book:[{move: "Bb4+"}]},
	{move: "Be2", freq:  164143,book:[{move: "Bd6"}]},
	{move: "Bg5", freq:  136697,book:[{move: "Bd6"}]},
	{move: "c3", freq:    81991},
	{move: "h3", freq:    70619},
	{move: "Bb5+", freq:  43566},
	{move: "Be3", freq:   28247},
	{move: "Bf4", freq:   21526},
	{move: "Ne5", freq:   11239},
]}

const french_exchange = [
	{move: "Nf3", freq:  1120998,book:[french_exchange_kingKnight]},
	{move: "Bd3", freq:   582267,book:[{move: "c5",replies:[
		{move: "dxc5", freq: 18969},
		{move: "c3", freq:   15967},
		{move: "Nf3", freq:  14104},
		{move: "Ne2", freq:   1753,book:[{move: "c4"}]},//bishop
		{move: "Qe2+", freq:  1129},
		{move: "Bb5+", freq:   592},
	]}]},
	{move: "c4", freq:    502403,book:[{move: "Nc6"}]},
	{move: "Nc3", freq:   420009},
	{move: "c3", freq:     99632},
	{move: "Qe2+", freq:   40994},
	{move: "Bf4", freq:    39766},
	{move: "h3", freq:     35077},
	{move: "Be3", freq:    30832},
	{move: "f4", freq:     28224},
	{move: "Bb5+", freq:   17699},
	{move: "Be2", freq:    13518},
];
const french_paulsen = [
	{move: "e5", freq:  677092,book:[{move: "Nf6d7",replies:[
		{move: "f4", freq:  378711,book:[{move: "c5",replies:[
			{move: "Nf3", freq: 307743,book:[{move:"Nc6",replies:[
				{move: "Be3", freq:  201075,book:[{move: "Be7",replies:[
					{move: "Qd2", freq: 23303,book:[{move: "O-O",replies:[
						{move: "dxc5", freq:   4798,book:[{move: "Qa5"}]},
						{move: "O-O-O", freq:  4338,book:[{move: "c4"}]},
						{move: "Be2", freq:    3129,book:[{move: "a6"}]},
					]}]},
					{move: "Be2", freq:  4329},
				]}]},
				{move: "Bb5", freq:   18308},
			]}]},
			{move: "Be3", freq:  15138},
		]}]},
		{move: "Nf3", freq: 147682},
		{move: "Nc3e2", freq:70793},
		{move: "Bd3", freq:  21065},
		{move: "Be3", freq:  11301},
	]}]},
	{move: "Bg5", freq: 487967,book:[{move: "dxe4",replies:[
		{move: "Nxe4", freq:  119160,book:[{move: "Be7",replies:[
			{move: "Bxf6", freq: 124128,book:[{move: "Bxf6"}]},
			{move: "Nxf6+", freq: 50585,book:[{move: "Bxf6"}]},
			{move: "Bd3", freq:    6912},
		]}]},
		{move: "Bxf6", freq:   14181,book:[{move: "gxf6"}]},
		{move: "f3", freq:      6013},
	]}]},
	{move: "exd5", freq: 84500},
	{move: "Bd3", freq:  49489},
	{move: "f3", freq:   21270},
	{move: "Be3", freq:   8068},
	{move: "Nf3", freq:   6516},
];
const french_tarrasch = [
	{move: "exd5", freq: 145802,book:[{move: "Qxd5"}]},
	{move: "c3", freq:    91604},
	{move: "Ng1f3", freq: 90182},
	{move: "dxc5", freq:  17251},
	{move: "Bb5+", freq:   4320},
	{move: "e5", freq:     2061},
	{move: "Ne2", freq:    1252},
	{move: "c4", freq:      580},
];
const french_schlechter = [];

const french = {move: "e6",replies:[
	{move: "d4", freq: 13043258,book:[{move: "d5",replies:[
		{move: "e5", freq:  3110106,book:[{move: "c5",replies: french_advance}]},
		{move: "exd5", freq:2943861,book:[{move: "exd5",replies: french_exchange}]},
		{move: "Nc3", freq: 2754858,book:[{move: "Nf6",replies: french_paulsen}]},
		{move: "Nd2", freq: 1467658,book:[{move: "c5",replies: french_tarrasch}]},
		{move: "Bd3", freq:  227259,book:[{move: "dxe4",replies: french_schlechter}]},
		{move: "c4", freq:    62351},
		{move: "Nf3", freq:   37405},
		{move: "f3", freq:    32449},
		{move: "Be3", freq:   28812},
		{move: "c3", freq:    18877},
	]}]},
	{move: "Nf3", freq: 6062612,book:[{move: "d5",replies:[
		{move: "exd5", freq:  2678170,book:[{move: "exd5",replies:[
			{move: "d4", freq:  2063935,book:[french_exchange_kingKnight]},
			{move: "Nc3", freq:  108234},
			{move: "Be2", freq:   93599},
			{move: "c4", freq:    67571},
			{move: "Bb5+", freq:  63246},
			{move: "Qe2+", freq:  45248},
		]}]},
		{move: "e5", freq:     792532},
		{move: "Nc3", freq:    390074},
		{move: "d4", freq:      98679},
		{move: "d3", freq:      62750},
		{move: "Bb5+", freq:    14028},
	]}]},
	{move: "Nc3", freq: 1875141,book:[{move: "d5",replies:[
		{move: "exd5", freq: 512634,book:[{move: "exd5"}]},
		{move: "d4", freq:   292964},
		{move: "Nf3", freq:  247887,book:[{move: "d4",replies:[//two knights
			{move: "Ne2", freq: 152950,book:[{move: "c5",replies:[
				{move: "c3", freq: 45847},
				{move: "d3", freq: 40180},
				{move: "Ng3", freq:33645,book:[{move: "Nc6",replies:[
					{move: "Bb5", freq: 12,book:[{move: "Ne7",replies:[
						{move: "O-O", freq: 1,book:[{move: "a6",replies:[
							{move: "Bxc6+", freq: 1,book:[{move: "Nxc6",replies:[
								{move: "d3", freq: 1,book:[{move: "e5",replies:[
									{move: "Ng5", freq: 1,book:[{move: "h5"}]},
								]}]},
							]}]},
						]}]},
					]}]},
					{move: "Bc4", freq:  4},
				]},{move: "h5",replies:[
					{move: "h4", freq:   281,book:[{move: "Nc6"}]},
					{move: "Bb5+", freq: 149},
					{move: "Bc4", freq:   91},
				]}]},
			]}]},
		]}]},
		{move: "d3", freq:    88151},
		{move: "f4", freq:    50794},
		{move: "e5", freq:    47378},
		{move: "g3", freq:    31309},
		{move: "f3", freq:    11525},
	]}]},
	{move: "d3", freq:  1055268,book:[{move: "d5"}]},
	{move: "f4", freq:  1045757,book:[{move: "d5"}]},//la bourdonnais
	{move: "Bc4", freq:  829961,book:[{move: "d5"}]},
	{move: "e5", freq:   599574,book:[{move: "c5"}]},
	{move: "c4", freq:   475335,book:[{move: "d5",replies:[//ortoschnap
		{move: "cxd5", freq: 1,book:[{move: "exd5",replies:[
			{move: "Qb3", freq:1,book:[{move: "dxe4",replies:[
				{move: "Bc4", freq: 1,book:[{move: "Qe7",replies:[
					{move: "Nc3", freq: 1,book:[{move: "Nf6",replies:[
						{move: "d3", freq: 1,book:[{move: "exd3+",replies:[
							{move: "Kf1", freq: 1,book:[{move: "Nb8d7",replies:[
								{move: "Bg5", freq: 25,book:[{move: "Nc5",replies:[
									{move: "Qa3", freq: 10,book:[{move: "Be6",replies:[
										{move: "Bxe6", freq: 1},
										{move: "Re2", freq:  4,book:[{move: "d2",replies:[
											{move: "Bxd2", freq: 1,book:[{move: "Bxc4+",replies:[
												{move: "Ng1e2", freq: 1,book:[{move: "Qd7"}]},
											]}]},
											{move: "Rxe6", freq: 1,book:[{move: "d1=Q+"}]},
										]}]},
									]}]},
								]}]},
							]}]},
						]}]},
					]}]},
				]}]},
			]}]},
		]}]},
	]}]},
	{move: "Qe2", freq:  199862,book:[{move: "c5"}]},
	{move: "Qf3", freq:  133265,book:[{move: "c5"}]},
	{move: "c3", freq:   102609,book:[{move: "d5"}]},
]}

const deep_tactics = {move: "Bf5",replies:[
	{move: "Qxc7", freq: 1,book:[{move:"Bxf8",replies:[
		{move: "Qxb7", freq: 1,book:[{move: "Bd3"}]},
	]}]},
]}

const main_fish = {move:"Bg7",replies:[
	{move: "c3", freq:  25123,book:[{move:"Nf6",replies:[
		{move: "e5", freq:   1438,book:[{move:"dxe5",replies:[
			{move: "Nxe5", freq: 1115,book:[{move:"O-O",replies:[
				{move: "Qb3", freq: 516,book:[{move:"Qe8",replies:[
					{move: "Ng6", freq: 90,book:[{move:"Nc6",replies:[
						{move: "Nxf8", freq: 56,book:[{move:"Na5",replies:[
							{move: "Qb5", freq: 6,book:[{move:"Nxc4",replies:[
								{move: "Qxc4", freq: 1,book: [deep_tactics]},
							]}]},
							{move: "Qb4", freq: 3,book:[{move:"Nxc4",replies:[
								{move: "Qxc4", freq: 1,book: [deep_tactics]},
							]}]},
						]}]},
					]}]},
					{move: "Nd2", freq: 15},
				]}]},
				{move: "Nd2", freq: 141},
			]}]},
		]}]},
		{move: "Nb1d2", freq: 595,book:[{move:"Nc6"}]},
		{move: "Qb3", freq:   506,book:[{move:"O-O"}]},
		{move: "Re1", freq:   255,book:[{move:"O-O"}]},
	]}]},
	{move: "Nc3", freq: 11986,book:[{move:"Nc6"}]},
	{move: "e5", freq:   4901,book:[{move:"Nc6"}]},
	{move: "g3", freq:   3102,book:[{move:"Bh3"}]},
	{move: "h4", freq:   2140},
]}

const fischer_defence = {move:"d6",replies:[
	{move: "Bc4", freq: 269306,book:[{move:"h6",replies:[
		{move: "O-O", freq: 41389,book:[{move:"g5",replies:[
			{move: "d4", freq: 21011,book:[main_fish]},
			{move: "Nc3",freq:  1858},
			{move: "c3", freq:  1692},
			{move: "d3", freq:  1271},
		]}]},
		{move: "d4", freq:  33914,book:[{move:"g5",replies:[
			{move: "O-O", freq: 24293,book:[main_fish]},
			{move: "Nc3", freq:  6053},
			{move: "h4", freq:   5067},
			{move: "c3", freq:   2710},
		]}]},
		{move: "h4", freq:   5528},
		{move: "d3", freq:   3451},
		{move: "Nc3",freq:   3108},
		{move: "c3", freq:   1921},
	]}]},
	{move: "d4", freq:  187807,book:[{move:"g5",replies:[
		{move: "Bc4", freq: 37251,book:[{move:"g4",replies:[
			{move: "O-O", freq:  4536,book:[{move: "gxf3",replies:[
				{move: "Qxf3", freq:  5998,book:[{move: "Qf6",replies:[
					{move: "c3", freq: 1077,book:[{move: "Bh6",replies:[
						{move: "Na3", freq:  688,book:[{move:"a6"}]},
						{move: "Nd2", freq:  437,book:[{move:"Nc6"}]},
						{move: "Bd2", freq:  392,book:[{move:"Ne7"}]},
						{move: "e5", freq:   367},
						{move: "Bxf4", freq: 277},
						{move: "g2", freq:   245},
					]}]},
					{move: "e5", freq:  805,book:[{move:"dxe5",replies:[
						{move: "dxe5", freq: 733,book:[{move: "Qg6",replies:[
							{move: "Bxf4", freq: 11,book:[{move: "Nc6"}]},
							{move: "Qxf4", freq:  7,book:[{move: "Be6"}]},
						]}]},
					]}]},
					{move: "Bxf4", freq:518,book:[{move: "Qxd4+"}]},
				]}]},
				{move: "Rxf3", freq:   201},
				{move: "Bxf7+", freq:  188},
			]}]},
			{move: "Bxf4", freq: 1934,book:[{move: "Qf6",replies:[
				{move: "Bg5", freq:   42,book:[{move: "Qg6",replies:[
					{move: "O-O", freq: 12,book:[{move: "Be6"}]},
				]}]},
			]}]},
			{move: "Nf3d2", freq: 757},
			{move: "Ng1", freq:   619},
			{move: "Bxf7+", freq: 113},
		]}]},
		{move: "h4", freq:  16457},
		{move: "h3", freq:   7298},
		{move: "Nc3", freq:  3783},
		{move: "Bd3", freq:  2810},
		{move: "g3",  freq:  1629},
	]}]},
	{move: "Nc3", freq:   7446},
	{move: "h3", freq:    5532},
	{move: "d3", freq:    4730},
	{move: "Be2", freq:   3542},
]}

const kings_gambit = {move:"exf4",replies:[
	{move: "Nf3", freq: 2233696,book:[fischer_defence]},
	{move: "Bc4", freq:  214450,book:[{move:"Qh4+",replies:[
		{move: "Kf1", freq:  51691,book:[{move:"d6",replies:[
			{move: "Nf3", freq: 5805,book:[{move:"Qf6",replies:[
				{move: "d4",  freq: 714,book:[{move:"Bg4"}]},
				{move: "Nc3", freq: 386,book:[{move:"Ne7"}]},
			]}]},
			{move: "d4",  freq: 1468,book:[{move:"Bg4"}]},
			{move: "Nc3", freq:  786},
			{move: "c3",  freq:  112},
		]}]},
		{move: "g3",  freq:    565,book:[{move:"fxg3"}]},
		{move: "Ke2", freq:    344,book:[{move:"f5"}]},
	]}]},
	{move: "d4", freq:    42359,book:[{move:"Qh4+",replies:[
		{move: "Ke2", freq: 6325,book:[{move:"d5"}]},
		{move: "g3",  freq: 2971,book:[{move:"fxg3"}]},
		{move: "Kd2", freq: 1625,book:[{move:"Qf2+"}]},
	]}]},
	{move: "Nc3", freq:   12107,book:[{move:"Qh4+"}]},
	{move: "d3", freq:     8162,book:[{move:"Qh4+"}]},
	{move: "Qf3", freq:    4638,book:[{move:"Nc6"}]},
]}

const gundam_zz = {move:"c6",replies:[
	{move: "O-O", freq:  799,book:[{move:"d6",stock:1.33,replies:[
		{move: "d4", freq:  288,book:[{move:"Qc7",replies:[
			{move: "dxe5", freq:  6,book:[{move:"dxe5"}]},
			{move: "Ng5", freq:   6,book:[{move:"Bg4"}]},
		]}]},
		{move: "h3", freq:   74,book:[{move:"Be6"}]},
		{move: "d3", freq:   71,book:[{move:"b5",replies:[
			{move: "Bb3", freq: 1,book:[{move:"g6"}]},
		]}]},
		{move: "Re1", freq:  58,book:[{move:"Be6"}]},
	]}]},
	{move: "d3",  freq:  784,book:[{move:"d6",replies:[
		{move: "Bg5", freq: 240,book:[{move:"h6",replies:[
			{move: "Bh4", freq:  81,book:[{move:"g5",replies:[
				{move: "Bg3", freq: 45,book:[{move:"b5",replies:[
					{move: "Bb3", freq: 7,book:[{move:"Bg7",replies:[
						{move: "h4",  freq:  4,book:[{move:"g4"}]},
						{move: "h3",  freq:  2,book:[{move:"a5"}]},
						{move: "d4",  freq:  2,book:[{move:"Nb8d7"}]},
						{move: "Qd2",  freq: 2,book:[{move:"a5"}]},
					]}]},
				]}]},
			]}]},
			{move: "Bxf6", freq: 25,book:[{move:"Qxf6",replies:[
				{move: "O-O", freq:   8,book:[{move:"Bg4"}]},
			]}]},
			{move: "Be3", freq:   8},
		]}]},
		{move: "O-O", freq:  74,book:[{move:"g6",replies:[
			{move: "Bg5",  freq: 13,book:[{move:"h6"}]},
			{move: "d4",  freq:   3,book:[{move:"b5"}]},
		]}]},
		{move: "h3",  freq:  60,book:[{move:"b5"}]},
		{move: "Ng5",  freq: 53,book:[{move:"h6"}]},
		{move: "Be3",  freq: 25,book:[{move:"b5"}]},
	]}]},
	{move: "d4",  freq:  220,book:[{move:"d5"}]},
	{move: "Ng5", freq:  215,book:[{move:"d5"}]},
	{move: "a3", freq:    77,book:[{move:"Nxe4",replies:[
		{move: "Nxe4",  freq:  1,book:[{move:"d5",replies:[
			//enjoy., but be aware of:
			{move: "d4", freq:  1,book:[{move:"Bg4"}]},
		]}]},
	]}]},
]}

const gundam = {move:"Qe7",stock:1.30,replies:[
	{move: "Bc4", freq:  44854,book:[{move:"Nf6",stock:1.32,replies:[
		{move: "d3", freq:  2440,book:[{move:"d6",stock:0.67,replies:[
			{move: "Bg5", freq:  346,book:[{move:"h6",replies:[
				{move: "Bh4",  freq: 77,book:[{move:"g5",replies:[
					{move: "Bg3", freq:  42,book:[{move:"Nc6",replies:[
						{move: "Nc3", freq:  22,book:[{move:"Bg7"}]},
						{move: "h3",  freq:  12,book:[{move:"Be6"}]},
					]}]},
				]}]},
				{move: "Bxf6", freq: 27,book:[{move:"Qxf6"}]},
				{move: "Be3",  freq:  7,book:[{move:"Nc6"}]},
			]}]},
			{move: "Ng5", freq:  304,book:[{move:"h6",replies:[
				{move: "Nxf7", freq: 26,book:[{move:"Rh7"}]}
			]}]},
			{move: "O-O", freq:  264,book:[{move:"g6",replies:[
				{move: "Nc3", freq: 14,book:[{move:"Bg7",replies:[
					{move: "Bg5",  freq: 28,book:[{move:"c6"}]},
				]}]},
				{move: "c3",  freq: 10,book:[{move:"Bg7"}]},
				{move: "Bg5", freq:  7,book:[{move:"h6"}]},
				{move: "h3", freq:   4,book:[{move:"h3"}]},
			]}]},
			{move: "Nc3", freq:  247,book:[{move:"g6",replies:[
				{move: "Bg5",  freq: 49,book:[{move:"c6"}]},
				{move: "Ng5",  freq: 12,book:[{move:"h6"}]},
			]}]},
			{move: "h3",  freq:  173,book:[{move:"g6"}]},
			{move: "c3",  freq:  129,book:[{move:"g6"}]},
			{move: "Be3", freq:   26,book:[{move:"g6"}]},
		]}]},
		{move: "Nc3", freq: 1738,stock:1.50,book:[gundam_zz]},
		{move: "O-O", freq: 1542,stock:1.44,book:[{move:"d6",replies:[
			{move: "d4", freq: 307,book:[{move:"c6",replies:[
				{move: "dxe5", freq: 63,book:[{move:"dxe5",replies:[
					{move: "Nc3",  freq: 57,book:[{move:"Qc7"}]},
					{move: "Bg5",  freq: 54,book:[{move:"h6"}]},
				]}]},
				{move: "Bg5",  freq: 19},
				{move: "Re1",  freq: 16},
				{move: "Nc3",  freq: 12},
			]}]},
			{move: "Re1", freq:264,book:[{move:"g6"}]},
			{move: "d3", freq: 190,book:[{move:"g6"}]},
			{move: "Nc3", freq:180,book:[{move:"c6"}]},
			{move: "Ng5", freq: 54},
			{move: "c3",  freq: 51},
			{move: "h3",  freq: 36},
		]},{move:"Nc6"}]},
		{move: "Ng5", freq:  989,stock:-0.06,book:[{move:"h6",replies:[
			{move: "Nxf7", freq: 97,book:[{move:"Rh7",stock:-0.44,replies:[
				{move: "d4", freq: 16,book:[{move:"d6",replies:[
					{move: "dxe5",freq: 4,book:[{move:"dxe5",replies:[
						{move: "f4", freq: 2,book:[{move:"exf4",stock:-3.69}]},
						{move: "O-O", freq: 1,book:[{move:"g5",stock:-2.40}]},
						{move: "b3", freq: 1,book:[{move:"Nc6",stock:-0.33}]},
					]}]},
				]}]},
				{move: "Nc3",freq: 14,book:[{move:"d6"}]},
				{move: "d3", freq: 12,book:[{move:"d6"}]},
				{move: "Qf3",freq:  6,book:[{move:"d6"}]},
				{move: "O-O",freq:  5,book:[{move:"d6"}]},
			]}]},
			{move: "Bxf7+", freq:11,book:[{move:"Kd8",stock:-4.53}]},
			{move: "Nf3", freq:   5,book:[{move:"Nxe4"}]},
		]}]},
		{move: "d4",stock:1.23, freq:   268},
	]}]},
	{move: "Nc3", freq:  29985,book:[{move:"Nf6",replies:[
		{move: "Bc4", freq: 3376,book:[gundam_zz]},
		{move: "d3",  freq: 1057,book:[{move:"d6"}]},
		{move: "d4",  freq: 1033,book:[{move:"exd4",replies:[
			{move: "Nxd4",  freq: 304,book:[{move:"Nxe4",replies:[
				{move: "Nxe4",  freq: 263,book:[{move:"Qxe4+",replies:[
					{move: "Be3",  freq: 77,book:[{move:"Nc6",replies:[
						{move: "Nxc6", freq:   60,book:[{move:"dxc6"}]},
						{move: "Bd3", freq:    21,book:[{move:"Qxg2"}]},
						{move: "Nb5", freq:    15,book:[{move:"Bb4+"}]},
					]}]},
					{move: "Ne2",  freq: 76,book:[{move:"Bc5"}]},
					{move: "Qe2",  freq: 55,book:[{move:"Qxe2+"}]},
					{move: "Be2",  freq: 52,book:[{move:"Bc5"}]},
				]}]},
				{move: "Qe2",  freq:   58,book:[{move:"Nxc3"}]},
				{move: "Be2",  freq:   46,book:[{move:"Nxc3"}]},
				{move: "Be3",  freq:   29,book:[{move:"Nxc3"}]},
			]}]},
			{move: "Qxd4",  freq: 237,book:[{move:"Nc6"}]},
		]}]},
		{move: "Be2",  freq: 185},
	]}]},
	{move: "d4", freq:   10334,book:[{move:"exd4",replies:[
		{move: "Qxd4", freq: 2208,stock:0.38,book:[{move:"Nc6",replies:[
			{move: "Qe3", freq: 879,book:[{move:"Nb4",replies:[//d5 next
				{move: "Bd3",  freq: 36,book:[{move:"d5"}]},
				{move: "Na3",  freq: 23,book:[{move:"d5"}]},
			]}]},
			{move: "Qd3", freq: 356,book:[{move:"d5",replies:[
				{move: "NC3", freq: 7,book:[{move:"dxe4",replies:[
					{move: "Qxe4", freq: 6,book:[{move:"Bf5"}]},
					{move: "Nxe4", freq: 1,book:[{move:"Nf6"}]},
				]}]},
			]}]},
			{move: "Qa4", freq: 280,book:[{move:"Qb4+"}]},
			{move: "Qc4", freq: 173,book:[{move:"d5"}]},
			{move: "Qd1", freq: 130,book:[{move:"d5"}]},
			{move: "Qd5", freq:  91,book:[{move:"Nf6"}]},
		]}]},
		{move: "Bd3", freq:  1726,stock:0.99,book:[{move:"d5"}]},
		{move: "Nxd4", freq:  799,book:[{move:"Qxe4+"}]},
		{move: "e5",  freq:   658,book:[{move:"d6"}]},
		{move: "Bc4",  freq:  592,book:[{move:"Qxe4+"}]},
		{move: "c3",  freq:   285,book:[{move:"Qxe4+"}]},
		{move: "Be2",  freq:  215,book:[{move:"Nc6"}]},
	]}]},
	{move: "c3", freq:    2928,book:[{move:"f5",replies:[
		{move: "d4",   freq: 1,book:[{move:"fxe4",replies:[
			{move: "Nxe5", freq:  1,book:[{move:"Nf3"}]},
		]}]},
		{move: "exf5", freq: 1,book:[{move:"e4"}]},
	]}]},
	{move: "d3", freq:    2163,book:[{move:"Nf6"}]},
	{move: "b3", freq:    1275,book:[{move:"f5",replies:[
		{move: "Ba3", freq: 4,book:[{move:"d6"}]},
	]}]},
	{move: "Be2", freq:   1156,book:[{move:"Nf6"}]},
]}

const danish = {move:"exd4",replies:[
	{move: "c3",   freq: 1336169,book:[{move:"Qe7",replies:[
		{move: "Bd3",  freq:  7009,book:[{move:"d5",replies:[
			{move: "Qe2", freq: 1648,book:[{move:"dxe4",replies:[
				{move: "Bxe4",freq:  952,book:[{move:"Nf6"}]},
				{move: "Qxe4",freq:  444,book:[{move:"dxc3",replies:[
					{move: "Nxc3",  freq: 45,book:[{move:"Bf5",replies:[
						{move: "Qxe7+",  freq: 1,book:[{move:"Nxe7",replies:[
							{move: "Bxf5",  freq: 1,book:[{move:"Nxf5"}]},
						]}]},
					]}]},
				]}]},
			]}]},
			{move: "f3",  freq:  823},
			{move: "cxd4",freq:  639},
			{move: "Nd2", freq:  573},
			{move: "e5",  freq:  478},
			{move: "Qa4+", freq: 301},
		]}]},
		{move: "cxd4", freq:  3999,book:[{move:"Qxe4+"}]},
		{move: "Qxd4", freq:  2942,book:[{move:"Nf6"}]},
		{move: "Nf3",  freq:  1515,book:[{move:"Qxe4+"}]},
		{move: "Bc4",  freq:  1434,book:[{move:"Qxe4+"}]},
		{move: "f3",   freq:   971,book:[{move:"d5"}]},
	]}]},
	{move: "Qxd4", freq:  873247,book:[{move:"Nc6"}]},
	{move: "Nf3",  freq:  614565,book:[{move:"Bb4+"}]},
	{move: "Bc4",  freq:  137643,book:[{move:"Nf6"}]},
	{move: "f4",  freq:    42321},
]};

const four_knights = [
	{move: "Bc5",  freq: 844159,book:[{move:"Nxe4",replies:[
		{move: "Nxe4",  freq: 185519,book:[{move:"d5",replies:[
			{move: "Bxd5", freq: 89366,book:[{move:"Qxd5",replies:[
				{move: "Nc3",   freq: 52469,book:[{move:"Qd6"}]},
				{move: "d3",    freq: 30836,book:[{move:"Bf5"}]},
			]}]},
			{move: "Bd3", freq:  45882,book:[{move:"dxe4"}]},
			{move: "Bb5", freq:  23580,book:[{move:"dxe4",replies:[
				{move: "Nxe5", freq: 15599,book:[{move:"Qg5",replies:[
					{move: "Bxc6+", freq: 1313,book:[{move:"Bxc6"}]},
					{move: "Nxc6", freq:  1273,book:[{move:"Qxb5"}]},
					{move: "d4", freq:     776,book:[{move:"Qxg2"}]},
				]}]},
				{move: "Bxc6+", freq: 7265,book:[{move:"bxc6"}]},
			]}]},
			{move: "Bb3", freq:   6133,book:[{move:"dxe4"}]},
			{move: "Qe2", freq:   5174,book:[{move:"dxc4"}]},
		]}]},
		{move: "Bxf7+",  freq:105902,book:[{move:"Kxf7",replies:[
			{move: "Nxe4", freq: 105098,book:[{move:"d5",replies:[
				{move: "Ne4g5+", freq: 41492,book:[{move:"Kg8",replies:[
					{move: "d3", freq:  16596,book:[{move:"h6"}]},
					{move: "d4", freq:  12401,book:[{move:"h6"}]},
				]}]},
				{move: "Ng3", freq:    27962},
				{move: "Nc3", freq:    15362},
				{move: "Nf3g5+", freq:  3881},
			]}]},
		]}]},
		{move: "O-O",  freq:   14418,book:[{move:"Nxc3"}]},
		{move: "d3",   freq:   11321,book:[{move:"Nxc3"}]},
	]}]},
	{move: "d4",   freq: 728826,book:[{move:"exd4",replies:[
		{move: "Nxd4", freq:   561284,book:[{move:"Bb4",replies:[
			{move: "Nxc6", freq: 288120,book:[{move:"bxc6"}]},
		]}]},
		{move: "Nd5",  freq:    31709,book:[{move:"Nb4"}]},
	]}]},
	{move: "Bb5", freq:  650125,book:[{move:"Bb4",replies:[
		{move: "O-O", freq:  55407,book:[{move:"O-O",replies:[
			{move: "d3", freq:   19314,book:[{move:"Bxc3",replies:[
				{move: "bxc3", freq:  6278,book:[{move:"d6"}]},
			]}]},
			{move: "Bxc6", freq:  4977},
			{move: "Re1", freq:   2944},
			{move: "Nd5", freq:   1798},
			{move: "a3",  freq:   1493},
			{move: "d4",  freq:   1158},
		]}]},
		{move: "Bxc6", freq: 37625,book:[{move:"dxc6"}]},
		{move: "d3", freq:   35507,book:[{move:"Nd4"}]},
		{move: "a3", freq:    8472,book:[{move:"Bxc3"}]},
		{move: "Nd5", freq:   4839,book:[{move:"Nxd5"}]},
	]}]},
	{move: "d3", freq:   183536,book:[{move:"Bb4"}]},
	{move: "Nxe5", freq:  99844,book:[{move:"Nxe5"}]},
	{move: "a3", freq:    85273,book:[{move:"d5"}]},
	{move: "Be2", freq:   61415,book:[{move:"d5"}]},
	{move: "g3", freq:    31937},
	{move: "h3", freq:    31739},
];

const russian = {move:"Nf6",replies:[
	{move: "Nxe5",freq:1826515,book:[{move:"d6",replies:[
		{move: "Nf3",  freq: 683975,book:[{move:"Nxe4"}]},
		{move: "Nxf7", freq:  59249,book:[{move:"Kxf7"}]},
		{move: "Nc4",  freq:  27333,book:[{move:"Nxe4"}]},
		{move: "Nd3",  freq:  15248,book:[{move:"Nxe4"}]},
	]}]},
	{move: "Nc3",freq: 1589090,book:[{move:"Nc6",replies:[four_knights]}]},
	{move: "Bc4",freq:  914037,book:[{move:"Nxe4"}]},
	{move: "d4",freq:   423568,book:[{move:"Nxe4"}]},
	{move: "d3",freq:   335543,book:[{move:"Nc6"}]},
	{move: "c3",freq:    36553,book:[{move:"Nxe4"}]},
]};

const copy_cat = {move:"Bc5",replies:[
	{move: "d3",  freq: 91160,book:[{move:"d6",replies:[
		{move: "f4",   freq: 9152,book:[{move:"Bxg1",replies:[
			{move: "Rxg1",  freq: 1349,book:[{move:"Qh4+",replies:[
				{move: "Kf1", freq: 808,book:[{move:"Bg4",replies:[
					{move: "Qe1", freq: 109,book:[{move:"Qxh2"}]},
					{move: "Qd2", freq:  19},
				]}]},
				{move: "g3",  freq: 453,book:[{move:"Qxh2",replies:[
					{move: "Be3", freq: 325,book:[{move:"Nd4",replies:[
						{move: "Bxd4", freq: 58,book:[{move:"exd4",replies:[
							{move: "Ne2", freq: 56,book:[{move:"Bg4"}]},
						]}]},
						{move: "Bb3", freq:  22},
						{move: "Nd5", freq:  12},
						{move: "Bf2", freq:  11},
					]}]},
					{move: "Kf1", freq:  52,book:[{move:"Bh3+",replies:[
						{move: "Ke1", freq:  22,book:[{move:"Qxg1+",replies:[
							{move: "Kd2", freq: 18,book:[{move:"Qh2+"}]},
						]}]},
					]}]},
					{move: "Ne2", freq:  45,book:[{move:"Nd4"}]},
					{move: "Rf1", freq:  22,book:[{move:"Nd4"}]},
				]}]},
			]}]},
		]}]},
		{move: "Ng1e2",freq: 8292,book:[{move:"Na5"}]},
		{move: "Nf3",  freq: 8255,book:[{move:"Na5"}]},
		{move: "h3",   freq: 7858,book:[{move:"Na5"}]},
		{move: "Be3",  freq: 7596,book:[{move:"Bxe3"}]},
		{move: "Na4",  freq: 3395,book:[{move:"Na5"}]},
		{move: "a3",   freq: 3172,book:[{move:"a6"}]},
		{move: "Qf3",   req: 1118,book:[{move:"Nf6"}]},
		{move: "Qh5",   req:  773},
	]}]},
	{move: "Qg4",  freq:68414,book:[{move:"Nd4",replies:[
		{move: "Qxg7",  freq: 918,book:[{move:"Qf6",replies:[
			{move: "Qxf6",  freq: 713,book:[{move:"Nxf6",replies:[
				{move: "Bb3",   freq: 414,book:[{move:"Rg8",replies:[
					{move: "g3",   req: 154,book:[{move:"a5",replies:[
						{move: "a4",   freq: 13,book:[{move:"d5",replies:[
							{move: "exd5", freq:  2,book:[{move:"Bf5"}]},
							{move: "Nxd5", freq:  2,book:[{move:"Nxd5",replies:[
								{move: "exd5", freq: 2,book:[{move:"Bf5",replies:[
									{move: "d3",   freq: 2,book:[{move:"O-O-O"}]},
								]}]},
							]}]},
							{move: "d3",   freq:  1},
						]}]},
						{move: "Ng1e2",freq:  7,book:[{move:"Nf3+",replies:[
							{move: "Kf1",   freq:  5,book:[{move:"d5"}]},
							{move: "Kd1",   freq:  2,book:[{move:"Ng4"}]},
						]}]},
						{move: "d3",   freq:  6,book:[{move:"c6"}]},
					]}]},
					{move: "Kf1",  req:  40},
				]}]},
				{move: "Bd3",   req: 189,book:[{move:"Rg8",replies:[
					{move: "g3",   freq:  100,book:[{move:"c6"}]},
					{move: "Kf1",  freq:   19,book:[{move:"c6"}]},
				]}]},
				{move: "Kd1",   req:  97,book:[{move:"b5"}]},
			]}]},
			{move: "Bxf7+",  req: 140,book:[{move:"Qxf7",replies:[
				{move: "Qxh8",  freq: 96,book:[{move:"d6",replies:[
					{move: "Kd1", freq: 15,book:[{move:"Be6"}]},
					{move: "Nd5", freq:  6,book:[{move:"Nxc2+",replies:[
						{move: "Kd1", freq: 4,book:[{move:"Nxa1"}]},
					]}]},
					{move: "Nf3", freq:  5,book:[{move:"Nxc2+"}]},
				]}]},
				{move: "Qxe5+", freq: 33,book:[{move:"Ne6",replies:[
					{move: "Nf3",  freq: 13,book:[{move:"Nf6",replies:[
						{move: "Nd5",  freq: 6,book:[{move:"O-I"}]},
						{move: "d4",   freq: 2,book:[{move:"d6"}]},
					]}]},
					{move: "Qxc5",  freq: 2,book:[{move:"Nxc5"}]},
					{move: "Qxh8",  freq: 2,book:[{move:"Qxf2+",replies:[{move: "Qd1",  freq: 1,book:[{move: "Qf1#"}]}]}]},
				]}]},
			]}]},
		]}]},
		{move: "Bb3",  freq: 29,book:[{move:"Nxb3",replies:[
			{move: "axb3",  freq: 14,book:[{move:"Nf6"}]},
		]}]},
		{move: "Kd1",  freq: 28,book:[{move:"b5"}]},
	]}]},
	{move: "Nf3",  freq:44032,book:[{move:"Nf6"}]},
	{move: "a3",   freq:14611,book:[{move:"Qg5"}]},
	{move: "Ng1e2",freq:10121,book:[{move:"Qh4"}]},
]}

const regular = {move: "e5",replies:[
	{move: "Nf3", freq: 43972247,book:[gundam,russian]},
	{move: "Bc4", freq:  6438338,book:[{move:"Nf6",replies:[
		{move: "d3",  freq:  965935,book:[{move:"c6"}]},
		{move: "Nf3",  freq: 522862,book:[{move:"Nxe4",replies:[
			{move: "Nxe5",   freq: 130104,book:[{move:"d5",replies:[
				{move: "Bb3",   freq:  32273,book:[{move:"Qg5",replies:[
					{move: "O-O",   freq: 1811,book:[{move:"Qxe5"}]},
					{move: "d4",    freq: 1277,book:[{move:"Qxg2",replies:[
						{move: "Rf1",   freq: 700,book:[{move:"Bh3"}]},
						{move: "Qf3",   freq: 550,book:[{move:"Qxf3"}]},
					]}]},
					{move: "Nf3",   freq: 1104,book:[{move:"Qxg2"}]},
				]}]},
				{move: "Qf3",   freq:  28297,book:[{move:"Be6"}]},
			]}]},
			{move: "O-O",   freq:   65814},
			{move: "Qe2",   freq:   58560},
		]}]},
		{move: "Nc3",  freq: 489622,book:[{move:"Bc5"}]},
		{move: "d4",   freq: 237753},
		{move: "Qf3",   freq:138784},
		{move: "Bxf7+", freq: 41155},
	]}]},
	{move: "f4", freq:   5255846,book:[kings_gambit]},
	{move: "d4", freq:   4159531,book:[danish]},
	{move: "Nc3", freq:  3871880,book:[{move:"Nc6",replies:[
		{move: "Nf6",   freq: 377398,book:[{move:"Nf6",replies:[four_knights]}]},
		{move: "Bc5",   freq: 233940,book:[copy_cat]},
		{move: "d6",   freq:   61993},
		{move: "Bb4",   freq:  30442},
	]}]},
	{move: "d3", freq:   1293745,book:[{move:"Nc6"}]},
	{move: "Qh5", freq:   565421,book:[{move:"Nf6",replies:[
		{move: "Qxe5+", freq:  59573,book:[{move:"Be7",replies:[
			{move: "d3", freq:  16218,book:[{move:"Nc6",replies:[
				{move: "Qg3", freq:  5497,book:[{move:"d5",replies:[
					{move: "e5",  freq: 186,book:[{move:"Ng4",replies:[
						{move: "Nf3",freq: 21,book:[{move: "Nd4",replies:[
							{move: "Nxd4",freq: 1,book:[{move:"Bh4",replies:[
								{move: "Qf3",freq: 1,book:[{move:"Bxf2+",replies:[
									{move: "Kd1",freq: 1,book:[{move:"Bxd4",replies:[
										{move: "h3",freq:  1,book:[{move:"Nf2+"}]},
										{move: "c3",freq:  1,book:[{move:"Nf2+"}]},
									]}]},
								]}]},
								{move: "Qf4",freq: 1,book:[{move:"g5"}]},
							]}]},
						]}]},
						{move: "h3",freq:   7,book:[{move:"Bh4",replies:[
							{move: "Qf3",freq: 1,book:[{move:"Nxf2",replies:[
								{move: "Rh2",freq: 1,book:[{move:"Nxd3"}]},
							]}]},
							{move: "Qf4",freq: 1,book:[{move:"g5"}]},
						]}]},
						{move: "f4",freq:   5},
						{move: "d4",freq:   4},
						{move: "Bf4",freq:  4},
					]}]},
					{move: "Qxg7",freq: 173,book:[{move:"Rg8",replies:[
						{move: "Qh6",freq: 136,book:[{move:"dxe4",replies:[
							{move: "dxe4",freq: 55,book:[{move:"Nd4",replies:[
								{move: "Bd3",freq: 10,book:[{move:"Rxg2",replies:[
									{move: "h3", freq: 1,book:[{move:"Rg6"}]},
									{move: "c3", freq: 1,book:[{move:"Rxg1+",replies:[
										{move: "Rxg1",freq:  1,book:[{move:"Nf3+",replies:[
											{move: "Ke2",freq:  1,book:[{move:"Nxg1+"}]},
											{move: "Kd1",freq:  1,book:[{move:"Qxd3+"}]},
											{move: "Kf1",freq:  1,book:[{move:"Qxd3+"}]},
										]}]},
									]}]},
									{move: "Nc3",freq: 1,book:[{move:"Rg6"}]},
								]}]},
								{move: "Qd2",freq:  2,book:[{move:"Nxe4",replies:[
									{move: "Qd3",freq:  1,book:[{move:"Nxf2",replies:[
										{move: "Kxf2",freq: 1,book:[{move:"Bf5",replies:[
											{move: "Qc4",freq: 1,book:[{move:"Nxc2"}]},
										]}]},
									]}]},
								]}]},
								{move: "Na3",freq:  1,book:[{move:"Bxa3"}]},
							]}]},
							{move: "Bg5",freq:  22,book:[{move:"Rg6",replies:[
								{move: "Qh4",freq: 1,book:[{move:"Nd4"}]},
							]}]},
						]}]},
					]}]},
					{move: "exd5",freq: 110,book:[{move:"Nd4",replies:[
						{move: "Na3",freq: 2,book:[{move:"Bxa3",replies:[
							{move: "Qe5+",freq: 1,book:[{move:"Qe7",replies:[
								{move: "Qxe7",freq: 1,book:[{move:"Bxe7"}]},
							]}]},
						]}]},
						{move: "Kd2",freq: 1,book:[{move:"O-O"}]},
						{move: "Kd1",freq: 1,book:[{move:"O-O"}]},
					]}]},
					{move: "Be2",freq:   31},
					{move: "Nc3",freq:   23},
					{move: "c3",freq:    13},
				]}]},
				{move: "Qf4", freq:   798},
				{move: "Qc3", freq:   678,book:[{move:"Bb4"}]},
				{move: "Qg5", freq:   463},
				{move: "Qb5", freq:    60},
			]}]},
			{move: "Bc4", freq:  8198,book:[{move:"Nc6",replies:[
				{move: "Qf4", freq:  1667,book:[{move:"d5"}]},
				{move: "Qg3", freq:  1142,book:[{move:"O-O"}]},
				{move: "Qc3", freq:   246,book:[{move:"O-O"}]},
				{move: "Qg5", freq:   235,book:[{move:"O-O"}]},
				{move: "Qf5", freq:    77,book:[{move:"d5"}]},
				{move: "Bxf7+", freq:  45},
			]}]},
			{move: "Nc3", freq:  8042,book:[{move:"Nc6"}]},
			{move: "Qg3", freq:  2766,book:[{move:"O-O"}]},
			{move: "Qf4", freq:  1633,book:[{move:"O-O"}]},
			{move: "d4", freq:   1504,book:[{move:"d5"}]},
			{move: "Nf3", freq:  1440,book:[{move:"d5"}]},
			{move: "Qg5", freq:  1224,book:[{move:"O-O"}]},
			{move: "f3", freq:    967},
			{move: "Be2", freq:   750},
			{move: "Bb5", freq:   550},
		]}]},
		{move: "Qf3", freq:     2057,book:[{move:"Nc6"}]},
		{move: "Bc4", freq:      692,book:[{move:"Nxh5"}]},
	]}]},
	{move: "c3", freq:    407569,book:[{move:"d5"}]},
	{move: "Qf3", freq:   343339,book:[{move:"Nf6"}]},
	{move: "c4", freq:    246194},
	{move: "g3", freq:    166902},
	{move: "b3", freq:    117231},
]}

const dutch_fian_everything = {move:"c6",replies:[
	{move: "d5", freq: 10018,book:[{move:"e5",replies:[
		{move: "dxe6", freq: 6055,book:[{move:"Bxe6",replies:[
			{move: "b3",  freq: 2455,book:[{move:"Na6",replies:[
				{move: "Bb2",  freq: 663,book:[{move:"Qe7"}]},
				{move: "Ng5",  freq: 190,book:[{move:"Nc5"}]},
			]}]},
			{move: "Qd3", freq: 1400,book:[{move:"Na6",replies:[
				{move: "Ng5", freq: 201,book:[{move:"Nc5",replies:[
					{move: "Nxe6",  freq: 44,book:[{move:"Nxe6",replies:[
						{move: "Rd1",  freq: 26,book:[{move:"Ng4"}]},
					]}]},
				]}]},
				{move: "b3",  freq: 178},
				{move: "Bf4",  freq:117},
			]}]},
		]}]},
	]}]},
	{move: "Re1", freq: 7578},
	{move: "b3",  freq: 5974},
	{move: "Ng5", freq: 3934},
	{move: "Qc2", freq: 3920},
]};

const dutch_c4_both = {move:"g6",replies:[
	{move: "Bg5", freq:  9251,book:[{move:"Bg7",replies:[
		{move: "e3", freq:   10205,book:[{move:"O-O"}]},
		{move: "Bxf6", freq:  3573},
		{move: "Qd2", freq:   1816},
	]}]},
	{move: "g3", freq:   8072,book:[{move:"Bg7",replies:[
		{move: "Bg2", freq: 15042,book:[{move:"O-O",replies:[
			{move: "O-O", freq: 44896,book:[dutch_fian_everything]},
		]}]},
	]}]},
	{move: "e3", freq:   3636},
	{move: "Bf4", freq:  2005},
	{move: "Qc2", freq:  1154},
	{move: "d5", freq:    930},
]}


const dutch_c4_nf3 = {move:"d6",replies:[
	{move: "Nc3", freq: 17473,book:[dutch_c4_both]},
	{move: "g3",  freq:  5756},
	{move: "e3",  freq:  1534},
	{move: "Bg5", freq:  1511},
	{move: "d5", freq:    519},
]}

const pre_everything2 = {move:"O-O",replies:[
	{move: "O-O",  freq: 44900,book:[dutch_fian_everything]},
	{move: "d5",   freq:  2843},
]}

const dutch_c4_nc3 = {move:"d6",replies:[
	{move: "Nf3", freq: 18843,book:[dutch_c4_both]},
	{move: "Bg5", freq: 13875,book:[{move:"e6",replies:[
		{move: "e4",  freq: 1249,book:[{move:"fxe4",replies:[
			{move: "Nxe4",  freq: 715,book:[{move:"Be7",replies:[
				{move: "Bxf6",  freq: 385,book:[{move:"Bxf6"}]},
				{move: "Nxf6+", freq: 302,book:[{move:"Bxf6"}]},
				{move: "Bd3",   freq:  75},
			]}]},
			{move: "Bxf6",  freq:  42},
		]}]},
		{move: "e3",  freq: 1188},
		{move: "Nf3", freq:  879},
		{move: "Bxf6",freq:  618},
		{move: "f3",  freq:  106},
	]}]},
	{move: "g3",  freq:  9280,book:[{move:"g6",replies:[
		{move: "Bg2",  freq: 7120,book:[{move:"Bg7",replies:[
			{move: "Nf3",freq: 8479,book:[pre_everything2]},
			{move: "Nh3",freq: 2272},
		]}]},
		{move: "Nf3",  freq:  170},
	]}]},
	{move: "e3",  freq:  6123,book:[{move:"g6"}]},
	{move: "f3",  freq:  3622},
	{move: "Bf4", freq:  3276},
	{move: "e4", freq:   1982},
	{move: "Qc2", freq:  1749},
	{move: "d5", freq:   1249},
]}

const dutch_full_london = {move:"h6",replies:[
	{move: "h3",  freq:  530,book:[{move:"g5",replies:[
		{move: "Bh2",  freq: 511,book:[{move:"Bg7"}]},
	]}]},
	{move: "Bd3",  freq: 278,book:[{move:"g5",replies:[
		{move: "Bg3",  freq: 173,book:[{move:"Bg7"}]},
	]}]},
	{move: "h4",  freq:  198,book:[{move:"g6"}]},
	{move: "Nb1d2",freq: 101,book:[{move:"g5"}]},
]};

const dutch_london = {move:"d6",replies:[
	{move: "Nf3", freq:  9495,book:[dutch_full_london]},
	{move: "Bd3", freq:  3065,book:[{move:"h6"}]},
	{move: "h3",  freq:  2196,book:[{move:"h6"}]},
	{move: "c3",  freq:  1721,book:[{move:"h6"}]},
	{move: "c4",  freq:  1301,book:[{move:"Ne4"}]},
	{move: "Nd2", freq:  1091},
	{move: "Be2", freq:  1060,book:[{move:"g6"}]},
	{move: "Nc3", freq:   888},
]}

const pre_everything = {move:"O-O",replies:[
	{move: "Nc3",  freq: 53215,book:[dutch_fian_everything]},
	{move: "b3",   freq:  5416},
	{move: "d5",   freq:  4635},
]}

const dutch = {move:"f5",replies:[
	{move: "c4", freq:  798445,book:[{move:"Nf6",replies:[
		{move: "Nc3", freq: 461713,book:[dutch_c4_nc3]},
		{move: "Nf3", freq:  73874,book:[dutch_c4_nf3]},
		{move: "g3",  freq:  38932},
		{move: "e3",  freq:  27874},
		{move: "Bg5",  freq: 18218},
		{move: "Bf4",  freq:  6739},
	]}]},
	{move: "Nf3", freq: 404558,book:[{move:"Nf6",replies:[
		{move: "c4",  freq: 86134,book:[dutch_c4_nf3]},
		{move: "g3",  freq: 82213,book:[{move:"d6",replies:[
			{move: "Bg2", freq: 11918,book:[{move:"g6",replies:[
				{move: "O-O",  freq: 9467,book:[{move:"Bg7",replies:[
					{move: "c4",  freq: 15382,book:[pre_everything]},
					{move: "b3",  freq:  4254},
					{move: "c3",  freq:  2034},
				]}]},
				{move: "c4",   freq: 1105,book:[{move:"Bg7",replies:[
					{move: "O-O",  freq: 11228,book:[pre_everything]},
					{move: "Nc3",  freq:  2917,book:[pre_everything2]},
				]}]},
			]}]},
		]}]},
		{move: "Bf4", freq: 61084,book:[{move:"d6",replies:[
			{move: "e3", freq: 14204,book:[dutch_full_london]},
			{move: "h3", freq:  2302},
			{move: "Nc3", freq:  961},
		]}]},
		{move: "Bg5", freq: 58400},
		{move: "e3",  freq: 43848},
		{move: "Nc3", freq: 25593},
		{move: "c3",  freq: 12231},
		{move: "h3",  freq:  7011},
		{move: "b3",  freq:  3629},
		{move: "Nb1d2",freq: 3401},
	]}]},
	{move: "Bf4", freq: 250999,book:[{move:"Nf6",replies:[
		{move: "e3",  freq: 115785,book:[dutch_london]},
		{move: "Nf3", freq:  37350},
		{move: "Nc3", freq:  13021,book:[{move:"e6"}]},
		{move: "h3", freq:    7480},
		{move: "c4", freq:    3653},
	]}]},
	{move: "Nc3", freq: 175473,book:[{move:"Nf6",replies:[
		{move: "Bg5",  freq: 71852,book:[{move:"d5",replies:[
			{move: "Bxf6",  freq: 9245,book:[{move:"exf6"}]},
			{move: "e3",    freq: 3371},
			{move: "f3",    freq: 2275},
			{move: "Nf3",   freq: 1731},
		]}]},//raphael
		{move: "Bf4",  freq: 18430,book:[{move:"d6"}]},
		{move: "e4",   freq: 15312},
		{move: "Nf3",  freq: 13206},
		{move: "f3",   freq:  6372},
		{move: "e3",   freq:  4705},
		{move: "g3",   freq:  2890},
		{move: "h3",   freq:  1498},
	]}]},
	{move: "e3",  freq: 156567,book:[{move:"Nf6",replies:[
		{move: "Nf3",  freq: 40495,book:[{move:"e6"}]},
		{move: "Bd3",  freq: 32209,book:[{move:"d6"}]},
		{move: "c4",   freq: 18630,book:[{move:"e6"}]},
		{move: "f4",   freq: 18058,book:[{move:"b6"}]},
		{move: "Be2",  freq:  6477},
		{move: "Nc3",  freq:  5378},
		{move: "c3",   freq:  3881},
	]}]},
	{move: "e4",  freq: 128903,book:[{move:"fxe4",replies:[
		{move: "Nc3",   freq: 77880,book:[{move:"Nf6",replies:[
			{move: "Bg5",  freq: 57633,book:[{move:"g6"}]},
			{move: "f3",   freq: 16036},
		]}]},
		{move: "f3",    freq: 17077,book:[{move:"d5"}]},
		{move: "Qh5+",  freq:  3650,book:[{move:"g6"}]},
	]}]},//staunton gambit
	{move: "Bg5", freq: 115012,book:[{move:"h6",replies:[
		{move: "Bh4",  freq: 22415,book:[{move:"g5",replies:[
			{move: "Bg3",   freq: 8595,book:[{move:"c5"}]},
			{move: "e3",    freq: 6139,book:[{move:"Bg7"}]},
			{move: "e4",    freq: 4670,book:[{move:"Bg7"}]},
		]}]},
		{move: "Bf4",  freq:  5317,book:[{move:"Nf6"}]},
		{move: "Bd2",  freq:  1480},
	]}]},
	{move: "g3",  freq:  93171,book:[{move:"Nf6",replies:[
		{move: "Bg2",  freq: 70455,book:[{move:"d6",replies:[
			{move: "Nf3",  freq: 2423,book:[{move:"g6",replies:[
				{move: "O-O", freq:  9467,book:[{move:"Bg7",replies:[
					{move: "c4",  freq: 15382,book:[pre_everything]},
					{move: "b3",  freq:  4253},
					{move: "c3",  freq:  2034},
				]}]},
				{move: "c4",  freq:  1105,book:[{move:"Bg7",replies:[
					{move: "O-O",  freq: 11228,book:[pre_everything]},
					{move: "Nc3",  freq:  2917,book:[pre_everything2]},
				]}]},
			]}]},
			{move: "c4",  freq:  1145},
			{move: "Nh3",  freq:  559},
		]}]},
	]}]},
	{move: "c3",  freq:  42029,book:[{move:"Nf6"}]},
	{move: "f4",  freq:  21808,book:[{move:"Nf6"}]},
	{move: "h3",  freq:  20849,book:[{move:"Nf6"}]},
	{move: "g4",  freq:  17519,book:[{move:"d5"}]},
]}

const eng_branch = [
	{move: "Bd2",  freq:  148372,book:[{move:"Qxb2",replies:[
		{move: "Nc3",  freq: 117046,book:[{move:"Bb4",replies:[
		]}]},
		{move: "Bc3",  freq:  45080,book:[{move:"Bb4"}]},
	]}]},
	{move: "Nc3",  freq:   24821,book:[{move:"Qxf4"}]},
	{move: "Nb1d2",  freq: 21850,book:[{move:"Qxf4"}]},
	{move: "Qd2",  freq:   13580,book:[{move:"Qxb2"}]},
	{move: "c3",  freq:     9257,book:[{move:"Qxf4"}]},
]

const englund = {move:"e5",replies:[
	{move: "dxe5",  freq: 2068615,book:[{move:"Nc6",replies:[
		{move: "Nf3",  freq:  798585,book:[{move:"Qe7",replies:[
			{move: "Bf4",  freq: 190715,book:[{move:"Qb4+",replies:eng_branch}]},
		]}]},
		{move: "Bf4",  freq:   87522,book:[{move:"Qe7",replies:[
			{move: "Bf4",  freq: 40267,book:[{move:"Qb4+",replies:eng_branch}]},
		]}]},
		{move: "f4",   freq:   83204,book:[]},
	]}]},
	{move: "c4",  freq:    717870,book:[{move:"exd4"}]},
	{move: "Nf3",  freq:   463620,book:[{move:"e4"}]},
	{move: "d5",  freq:    358811,book:[{move:"Bc5"}]},
	{move: "e3",  freq:    350596,book:[{move:"exd4"}]},
	{move: "c3",  freq:    193179,book:[{move:"e4"}]},
]}

const georg_mainline_continues = {move:"e6",replies:[
	{move: "O-O",  freq:  29336,book:[{move:"c5",replies:[
		{move: "c3",   freq: 7696,book:[{move:"c4",replies:[
			{move: "Bc2", freq: 2446,book:[{move:"Nf6",replies:[
				{move: "Re1", freq: 585,book:[{move:"d6",replies:[
					{move: "Bg5", freq:  131,book:[{move:"Be7",replies:[
						{move: "Nb1d2", freq: 117,book:[{move:"Nb8d7",replies:[
							{move: "Qe2",    freq:  25,book:[{move:"h6"}]},
							{move: "Nf1",    freq:  24,book:[{move:"O-O"}]},
							{move: "e5",     freq:  15,book:[{move:"dxe5"}]},
						]}]},
						{move: "e5",    freq:  12,book:[]},
						{move: "Qe2",    freq:  9,book:[]},
					]}]},
					{move: "Nb1d2", freq: 84,book:[{move:"Be7"}]},
					{move: "a4", freq:    27,book:[]},
					{move: "e5", freq:    19,book:[]},
				]}]},
				{move: "Bg5", freq: 277,book:[{move:"Be7",replies:[
					{move: "Nb1d2", freq: 91,book:[{move:"h6"}]},
					{move: "Re1", freq:   41,book:[{move:"d6"}]},
					{move: "Bxf6", freq:  37,book:[{move:"Bxf6"}]},
					{move: "e5", freq:    37,book:[{move:"Nd5"}]},
				]}]},
				{move: "e5",  freq: 204,book:[{move:"Nd5"}]},
				{move: "Nb1d2",freq: 93,book:[]},
				{move: "Qe2",freq:   88,book:[]},
			]}]},
		]}]},
		{move: "dxc5", freq: 2521,book:[{move:"Bxc5",replies:[
			{move: "Nc3",freq: 563,book:[{move:"Qc7"}]},
			{move: "Be3",freq: 400,book:[{move:"Bxe3"}]},
			{move: "a4",freq:  398,book:[{move:"b4"}]},
			{move: "Re1",freq: 375,book:[{move:"Nf6"}]},
			{move: "a3",freq:  314,book:[{move:"Ne7"}]},
			{move: "Qe2",freq: 303,book:[{move:"Nc6"}]},
			{move: "c3",freq:  269,book:[{move:"Nc6"}]},
			{move: "Nb1d2",freq:227,book:[{move:"Nc6"}]},
			{move: "c4",freq:  219,book:[{move:"Bxc4"}]},
			{move: "Bg5",freq: 152,book:[{move:"Nf6"}]},
			{move: "Bf4",freq:  90,book:[{move:"Nc6"}]},
			{move: "b3",freq:   89,book:[]},
		]}]},
		{move: "d5", freq:   1061,book:[{move:"c4"}]},
		{move: "Re1", freq:   596,book:[]},
	]}]},
	{move: "Qe2",  freq:   3762,book:[{move:"c5"}]},
	{move: "c3",   freq:   3676,book:[{move:"Nf6"}]},
	{move: "Be3",   freq:  2858,book:[{move:"d6"}]},
]}

const georg_rainbow = {move:"b4"}

const georg_mainline = {move:"Bb7",replies:[
	{move: "Bd3",   freq:  68563,book:[georg_mainline_continues]},
	{move: "d5",    freq:  17682,book:[{move:"Nf6",replies:[
		{move: "Bd3",   freq:  2774,book:[{move:"e6",replies:[
			{move: "dxe6",   freq:  1289,book:[{move:"dxe6",replies:[
				{move: "O-O",   freq:    245,book:[{move:"Nxe4"}]},
				{move: "Bg5",   freq:    231,book:[]},
				{move: "Qe2",   freq:    184,book:[]},
				{move: "e5",    freq:    146,book:[]},
			]}]},
			{move: "Bg5",   freq:    277,book:[]},
			{move: "O-O",   freq:    176,book:[]},
			{move: "c4",   freq:     173,book:[]},
			{move: "e5",   freq:     108,book:[]},
		]}]},
		{move: "Nc3",   freq:   804,book:[{move:"d6"}]},
		{move: "Nb1d2",   freq: 486,book:[{move:"e6"}]},
		{move: "c4",   freq:    469,book:[{move:"Nxe4"}]},
	]}]},
	{move: "Nc3",    freq:  9108,book:[{move:"b4",replies:[
		{move: "Nd5",  freq:  7682,book:[{move:"e6",replies:[
			{move: "Nf4",  freq:  3294,book:[{move:"Bxe4",replies:[
				{move: "Bd3",  freq:  1912,book:[{move:"Bxd3"}]},
			]}]},
			{move: "Ne3",  freq:  2281,book:[{move:"Bxe4"}]},
			{move: "Nxb4",  freq: 1520,book:[{move:"Bxb4+"}]},
			{move: "Bg5",  freq:   168,book:[{move:"f6"}]},
		]}]},
		{move: "Ne2",  freq:  1762,book:[]},
		{move: "Na4",  freq:  1018,book:[]},
	]}]},
	{move: "Nb1d2",  freq:  5354,book:[{move:"e6"}]},
	{move: "c4",  freq:     5147,book:[{move:"Bxe4",replies:[
		{move: "cxb5",  freq:  1390,book:[{move:"axb5",replies:[
			{move: "Bxb5",  freq:  997,book:[{move:"Nc6",replies:[
				{move: "Nc3",  freq:  19,book:[{move:"Bxf3",replies:[
					{move: "Qxf3",  freq:  11,book:[{move:"Nxd4",replies:[
						{move: "Qd3",  freq:   9,book:[{move:"Nxb5",replies:[
							{move: "Nxb5",  freq:   5,book:[{move:"c6"}]},
						]}]},
					]}]},
					{move: "gxf3",  freq:   4,book:[{move:"e6"}]},
				]}]},
				{move: "O-O",  freq:   5,book:[{move:"Bxf3"}]},
				{move: "Bxc6",  freq:  4,book:[{move:"Bxc6"}]},
			]}]},
			{move: "Nc3",   freq:   99,book:[{move:"Bxf3"}]},
		]}]},
		{move: "Nc3",  freq:    240,book:[{move:"Bb7"}]},
	]}]},
]}

const georg = {move: "a6",replies:[
	{move: "d4",  freq:  272453,book:[{move:"b5",replies:[
		{move: "Nf3",  freq: 55064,book:[georg_mainline]},
		{move: "Bd3",  freq: 33326,book:[{move:"Bb7",replies:[
			{move: "Nf3",  freq:  13172,book:[georg_mainline_continues]},
			{move: "Qe2",  freq:   5443,book:[{move:"e6"}]},
			{move: "Ne2",  freq:   3837,book:[{move:"c5"}]},
			{move: "c3",  freq:    2949,book:[{move:"Nf6"}]},
			{move: "f4",  freq:    2459,book:[]},
			{move: "Be3",  freq:   1972,book:[]},
		]}]},
		{move: "c4",  freq:  29879,book:[{move:"Bb7",replies:[
			{move: "d5",  freq:   7087,book:[{move:"e6",replies:[
				{move: "cxb5",  freq: 698,book:[{move:"exd5"}]},
				{move: "Nc3",   freq: 398,book:[]},
				{move: "Nf3",   freq: 200,book:[]},
			]}]},
			{move: "cxb5",  freq: 5670,book:[{move:"Bxe4",replies:[
				{move: "bxa6",  freq:   960,book:[{move:"Nxa6",replies:[
					{move: "Nc3",   freq: 531,book:[{move:"Bg6"}]},
					{move: "Bxa6",   freq:152,book:[{move:"Bxg2"}]},
					{move: "Nf3",   freq:  75,book:[{move:"Nb4"}]},
				]}]},
				{move: "Nc3",  freq:    888,book:[{move:"Bb7"}]},
			]}]},
			{move: "f3",  freq:   3129,book:[{move:"bxc4",replies:[
				{move: "Bxc4",  freq:  2527,book:[{move:"e6	"}]},
			]}]},
			{move: "Nc3",  freq:  2915,book:[]},
			{move: "Nd2",  freq:   867,book:[]},
			{move: "Qc2",  freq:   544,book:[]},
		]}]},
		{move: "f4",  freq:  17193,book:[{move:"Bb7",replies:[
			{move: "Bd3",  freq: 12761,book:[{move:"Nf6",replies:[
				{move: "Qe2",  freq: 2912,book:[{move:"c5"}]},
				{move: "Nd2",  freq: 1290,book:[{move:"c5"}]},
				{move: "e5",   freq:  303,book:[{move:"Bxg2"}]},
			]}]},
			{move: "Nf3",  freq:  1516,book:[{move:"Bxe4"}]},
			{move: "d5",  freq:   1313,book:[{move:"c6"}]},
		]}]},
		{move: "a4",  freq:  16640,book:[{move:"Bb7",replies:[
			{move: "axb5",  freq: 5657,book:[{move:"Bxe4"}]},
			{move: "Bd3",  freq:  2400,book:[{move:"e6"}]},
			{move: "f3",  freq:   1291,book:[{move:"b4"}]},
			{move: "Nd2",  freq:   574,book:[{move:"b4"}]},
			{move: "d5",  freq:    460,book:[{move:"Nf6"}]},
		]}]},
		{move: "Nc3",  freq: 12394,book:[{move:"Bb7",replies:[
			{move: "Bd3",  freq:  7188,book:[{move:"c5"}]},
			{move: "a3",  freq:   3831,book:[]},
			{move: "f3",  freq:   2832,book:[]},
			{move: "Nf3",  freq:  2762,book:[georg_rainbow]},
			{move: "d5",  freq:   2355,book:[]},
		]}]},
		{move: "d5",  freq:   6793,book:[{move:"e6"}]},
	]}]},
	{move: "Nf3",  freq: 158596,book:[{move:"b5",replies:[
		{move: "d4",  freq: 64521,book:[georg_mainline]},
		{move: "Nc3", freq:  8643,book:[{move:"Bb7"}]},
		{move: "c4",  freq:  6735,book:[{move:"Bb7"}]},
		{move: "a4",  freq:  5283,book:[{move:"eBb7"}]},
	]}]},
	{move: "Nc3",  freq:  42860,book:[{move:"b5",replies:[
		{move: "d4",  freq: 8905,book:[{move:"Bb7"}]},
		{move: "Nf3", freq: 7083,book:[{move:"Bb7"}]},
		{move: "a3", freq:  4172,book:[{move:"c5"}]},
		{move: "f4", freq:  2846,book:[{move:"Bb7"}]},
		{move: "d3", freq:  2295,book:[{move:"Bb7"}]},
		{move: "a4", freq:  1897,book:[{move:"b4"}]},
		{move: "g3", freq:  1617,book:[{move:"Bb7"}]},
	]}]},
	{move: "Bc4",  freq:  40002,book:[{move:"c5",replies:[
		{move: "Nf3", freq: 22707,book:[{move:"e6"}]},
		{move: "a3", freq:  21562,book:[{move:"e6"}]},
		{move: "a4", freq:  20772,book:[{move:"e6"}]},
		{move: "Qf3", freq:  9532,book:[{move:"e6"}]},
		{move: "d3", freq:   9137,book:[{move:"e6"}]},
		{move: "Qh5", freq:  8695,book:[{move:"e6"}]},
		{move: "Nc3", freq:  7611,book:[{move:"e6"}]},
	]}]},
	{move: "f4",  freq:   22563,book:[{move:"b5",replies:[
		{move: "Nf3",  freq:  10892,book:[{move:"Bb7",replies:[
			{move: "d3",  freq:  5376,book:[{move:"e6"}]},
			{move: "Nc3",  freq: 1430,book:[]},
			{move: "e5",  freq:  1398,book:[]},
			{move: "d4",  freq:  1045,book:[]},
		]}]},
		{move: "d4",  freq:    2134,book:[]},
	]}]},
	{move: "d3",  freq:   13067,book:[{move:"b5"}]},
	{move: "a4",  freq:    6905,book:[{move:"c5"}]},
	{move: "c4",  freq:    6070,book:[{move:"e5"}]},
]}

const blackBook = {
	replies:[
		{move: "e4",   freq: 81122312,book:[french,regular,georg]},
		{move: "d4",   freq: 33498373,book:[dutch,englund,{move: "d5",replies:[
			{move: "c4",  freq:  6374783,book:[{move: "c6",replies:[
				{move: "Nc3", freq:3113095,book:[{move:"e5",replies:[
					{move: "cxd5", freq: 11732,book:[{move:"cxd5",replies:[
						{move: "dxe5",   freq: 9360,book:[{move:"d4",replies:[
							{move: "Ne4", freq: 5856,book:[{move:"Qa5+",replies:[
								{move: "Bd2", freq: 3370,book:[{move:"Qxe5",replies:[
									{move: "Ng3", freq: 1,book:[{move:"Bc5",replies:[
										{move: "Nf3", freq: 1,book:[{move:"Qe7"}]},
									]}]},
								]}]},
								{move: "Nd2", freq:  854,book:[{move:"Nc6"}]},
								{move: "Qd2", freq:  208,book:[{move:"Bb4"}]},
							]}]},
							{move: "Nb1", freq: 1236,book:[{move:"Nc6"}]},
							{move: "Nb5", freq:  717},
							{move: "Qa4+", freq: 646},
						]}]},
						{move: "Nf3",    freq: 3539,book:[{move:"e4"}]},
						{move: "e3",     freq: 2810},
						{move: "e4",     freq: 1086},
					]}]},
					{move: "dxe5", freq: 10982},
					{move: "Nf3",  freq:  5639,book:[{move:"e4"}]},
					{move: "e3",   freq:  5040,book:[{move:"e4"},{move:"exd4"}]},
					{move: "e4",   freq:   599},
				]}]},
				{move: "Nf3", freq:1226671,book:[{move:"Nf6"}]},
				{move: "cxd5",freq: 771406},
				{move: "e3",  freq: 460555},
				{move: "c5",  freq:  68527},
				{move: "Bf4", freq:  66970},
				{move: "g3",  freq:  42556},
			]}]},//slav defence
			{move: "Bf4",  freq: 2364624,book:[{move: "c5",replies:[
				{move: "e3",  freq: 64434,book:[{move: "Nc6",replies:[
					{move: "c3", freq:15611,book:[london_queenattack]},
					{move: "Nf3", freq:8090,book:[{move:"cxd4"}]},
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
		{move: "Nf3",  freq:  4689064,book:[{move:"f5"}]},
		{move: "c4",  freq:   4672138,book:[{move:"f5"}]},
		{move: "e3",  freq:   3421637},
	]
}
