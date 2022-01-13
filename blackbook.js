
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
			{move: "Nb1d2", freq:  5074,book:[{move: "Be6"}]},
			{move: "c3", freq:     4633,book:[{move: "Bg4"}]},
			{move: "h3", freq:     2171},
			{move: "Re1", freq:    2014},
			{move: "Ne5", freq:    1331},
			{move: "c4", freq:      997},
			{move: "Nc3", freq:     824},
			{move: "Bxf6", freq:    387},
		]}]},
		{move: "Bg5", freq:  34246},
		{move: "h3", freq:   32157},
		{move: "c3", freq:   29511},
		{move: "Qe2+", freq: 21036},
	]}]},
	{move: "Nc3", freq:  264501},
	{move: "c4", freq:   202589},
	{move: "Be2", freq:  164143},
	{move: "Bg5", freq:  136697},
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
		{move: "Nf3", freq:  247887},
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
	{move: "c4", freq:   475335,book:[{move: "d5"}]},
	{move: "Qe2", freq:  199862,book:[{move: "c5"}]},
	{move: "Qf3", freq:  133265,book:[{move: "c5"}]},
	{move: "c3", freq:   102609,book:[{move: "d5"}]},
]}

const regular = {move: "e5",replies:[
	{move: "Nf3", freq: 43972247},
	{move: "Bc4", freq:  6438338,book:[{move:"Nf6"}]},
	{move: "f4", freq:   5255846},
	{move: "d4", freq:   4159531},
	{move: "Nc3", freq:  3871880},
	{move: "d3", freq:   1293745},
	{move: "Qh5", freq:   565421,book:[{move:"Nf6",replies:[
		{move: "Qxe5+", freq:  59573,book:[{move:"Be7",replies:[
			{move: "d3", freq:  16218,book:[{move:"Nc6",replies:[
				{move: "Qg3", freq:  5497,book:[{move:"d5",replies:[
					{move: "e5",  freq: 186,book:[{move:"Ng4",replies:[
						{move: "Nf3",freq: 21,replies:[
							{move: "Nd4",freq:   5,replies:[
								{move: "Nxd4",freq: 1,replies:[
									{move: "Qf3",freq: 1,book:[{move:"Bxf2+",replies:[
										{move: "Kd1",freq: 1,book:[{move:"Bxd4",replies:[
											{move: "h3",freq:  1,book:[{move:"Nf2+"}]},
											{move: "c3",freq:  1,book:[{move:"Nf2+"}]},
										]}]},
									]}]},
									{move: "Qf4",freq: 1,book:[{move:"g5"}]},
								]},
							]},
						]},
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
	{move: "c3", freq:    407569},
	{move: "Qf3", freq:   343339,book:[{move:"Nf6"}]},
	{move: "c4", freq:    246194},
	{move: "g3", freq:    166902},
	{move: "b3", freq:    117231},
]}

const blackBook = {
	replies:[
		{move: "e4",   freq: 81122312,book:[french,regular]},
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
