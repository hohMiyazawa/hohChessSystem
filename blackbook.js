const corner_stone = {move: "Nf6",replies:[
	{move: "O-O",    freq:  3022, book:[{move: "Bd6",replies:[
		{move: "Ne5",     freq:  866, book:[{move: "Qb6",replies:[
			{move: "Kh1",     freq:  12, book:[{move: "O-O",replies:[
				{move: "h3",      freq:  3, book:[{move: "Ne7"}]},
				{move: "Qe2",     freq:  3, book:[{move: "Ne7"}]},
				{move: "Qc2",     freq:  2, book:[{move: "Ne7"}]},
			]}]},
			{move: "Bxf5",     freq:  7, book:[{move: "exf5",replies:[
				{move: "Nd2",     freq:  9, book:[{move: "O-O"}]},
				{move: "Kh1",     freq:  5, book:[{move: "O-O"}]},
				{move: "Qd3",     freq:  2},
			]}]},
			{move: "Qe2",     freq:   3, book:[{move: "O-O"}]},
			{move: "b3",      freq:   2, book:[{move: "O-O"}]},
			{move: "Bc2",     freq:   2, book:[{move: "O-O"}]},
			{move: "Qc2",     freq:   2, book:[{move: "Bxd3"}]},
		]}]},
		{move: "Qe2",     freq:  268},
		{move: "Qc3",     freq:  117},
		{move: "Bxf5",    freq:  103, book:[{move: "exf5"}]},
	]}]},
	{move: "Bxf5",   freq:  1044, book:[{move: "exf5",replies:[
		{move: "O-O",     freq:  928, book:[{move: "Bd6"}]},
		{move: "Ne5",     freq:  206, book:[{move: "Bd6"}]},
		{move: "Nb1d2",   freq:   96},
	]}]},
	{move: "Qc2",    freq:   174, book:[{move: "Bxd3"}]},
	{move: "Qe2",    freq:   165, book:[{move: "Bxd3"}]},
	{move: "Ne5",    freq:   150, book:[{move: "Bd6"}]},
	{move: "a3",     freq:    33},
	{move: "Nb1d2",  freq:    20},
	{move: "Bc2",    freq:    18},
	{move: "Bb5",    freq:    18},
]}

const common_stone = {move: "c5",replies:[
	{move: "c3",     freq:  4292, book:[{move: "Nc6",replies:[
		{move: "Bd3",    freq:  4865, book:[corner_stone]},
		{move: "Bb5",    freq:  1271, book:[{move: "Nf6",replies:[
			{move: "Ne5",  freq:  633, book:[{move: "Qb6"}]},
			{move: "O-O",  freq:  309, book:[{move: "Qb6"}]},
			{move: "Qa4",  freq:  181, book:[{move: "Qb6"}]},
			{move: "Bxc6+",freq:  135, book:[{move: "bxc6"}]},
		]}]},
		{move: "Be2",    freq:  1216, book:[{move: "Nf6",replies:[
			{move: "O-O",     freq:  3233, book:[{move: "Bd6",replies:[
				{move: "Ne5",     freq:    807, book:[{move: "h6"}]},
				{move: "Nb1d2",     freq:  302, book:[{move: "h6"}]},
				{move: "Bd2",       freq:   93},
			]}]},
			{move: "Nb1d2",   freq:   280},
			{move: "Ne5",     freq:   121},
		]}]},
		{move: "Nb1d2",  freq:   342, book:[{move: "Nf6"}]},
		{move: "a3",     freq:   207},
		{move: "Ne5",    freq:   194},
	]}]},
	{move: "Bd3",    freq:  1449, book:[{move: "Nc6",replies:[
		{move: "Bxf5",    freq:   97, book:[{move: "exf5",replies:[
			{move: "O-O",     freq:   56, book:[{move: "Nf6"}]},
			{move: "c3",      freq:   40, book:[{move: "Nf6"}]},
			{move: "Ne5",     freq:   11, book:[{move: "Nf6"}]},
		]}]},
		{move: "c3",      freq:   96, book:[corner_stone]},
		{move: "O-O",     freq:   40, book:[{move: "Nf6"}]},
	]}]},
	{move: "Bb5+",    freq:  345, book:[{move: "Nc6"}]},
	{move: "c4",      freq:  274, book:[{move: "Nf6"}]},
	{move: "Be2",     freq:  244, book:[{move: "Nc6"}]},
]}

const antistonewall = {move: "Bf5",replies:[
	{move: "e3",   freq:  30658, book:[{move: "e6",replies:[
		{move: "Nf3",   freq: 20971, book:[common_stone]},
		{move: "Bd3",   freq:  7297, book:[{move: "c5",replies:[
			{move: "c3",    freq:   134, book:[{move: "Nf6"}]},
			{move: "Bxf5",  freq:    90, book:[{move: "exf5"}]},
			{move: "Nf3",   freq:    47, book:[{move: "Nc6"}]},
		]}]},
		{move: "c3",    freq:  1738, book:[{move: "c5"}]},
		{move: "a3",    freq:   708},
		{move: "c4",    freq:   420},
	]}]},
	{move: "Nf3",   freq: 28474, book:[{move: "e6",replies:[
		{move: "e3",    freq: 14005, book:[common_stone]},
		{move: "a3",    freq:   675},
		{move: "Nc3",   freq:   634},
		{move: "c3",    freq:   609},
	]}]},
	{move: "Nc3",   freq:  1510, book:[{move: "e6"}]},
	{move: "c3",    freq:  1062, book:[{move: "e6",replies:[
		{move: "Nf3",   freq:  356, book:[{move: "c5"}]},
		{move: "e3",    freq:  320, book:[{move: "c5"}]},
	]}]},
	{move: "Nd2",   freq:   977},
]}

const falkbeer = {move: "d5",replies:[
	{move: "exd5", freq:  486478,book:[{move: "c6",replies:[
		{move: "dxc6",  freq:  12973,book:[{move: "Nxc6",replies:[
			{move: "Nf3",   freq:   3862,book:[{move: "e4",replies:[
				{move: "Ne5",   freq:  708,book:[{move: "Nf6"}]},
				{move: "Qe2",   freq:  517,book:[{move: "Be7"}]},
				{move: "Ng5",   freq:  474,book:[{move: "Nf6"}]},
				{move: "Ng1",   freq:  195},
				{move: "Bc4",   freq:   24},
			]}]},
			{move: "fxe5",  freq:   2783,book:[{move: "Qh4+",replies:[
				{move: "g3",   freq:  1313,book:[{move: "Qe4+",replies:[
					{move: "Qe2",   freq:  1030,book:[{move: "Qxh1",replies:[
						{move: "Nf3",   freq:   720,book:[{move: "Bg4",replies:[
							{move: "Kf2",   freq:   241,book:[{move: "Bc5+",replies:[
								{move: "d4",    freq:    71,book:[{move: "Nxd4"}]},
							]}]},
							{move: "e6",    freq:    82},
							{move: "Qg2",   freq:    53},
						]}]},
						{move: "Qf2",   freq:    85},
						{move: "Nc3",   freq:    63},
						{move: "c3",    freq:    51},
						{move: "Qg2",    freq:   46},
					]}]},
					{move: "Kf2",   freq:   136},
					{move: "Ne2",   freq:    79},
					{move: "Be2",   freq:    41},
				]}]},
				{move: "Ke2",  freq:   894,book:[{move: "Nd4+"}]},
			]}]},
			{move: "Bb5",   freq:   1923,book:[{move: "Bc5"}]},
			{move: "Nc3",   freq:   1878,book:[{move: "exf4"}]},
			{move: "d3",    freq:   1042,book:[{move: "exf4"}]},
			{move: "Bc4",   freq:    421},
			{move: "Qe2",   freq:    258},
		]}]},
		{move: "fxe5",  freq:   3241,book:[{move: "Qh4+",replies:[
			{move: "g3",   freq:  1514,book:[{move: "Qe4+",replies:[
				{move: "Qe2",  freq:  6080,book:[{move: "Qxh1"}]},
				{move: "Kf2",  freq:   963,book:[{move: "Bc5+"}]},
				{move: "Ne2",  freq:   779,book:[{move: "Qxh1"}]},
				{move: "Be2",  freq:   528,book:[{move: "Qxh1"}]},
			]}]},
			{move: "Ke2",  freq:  1168,book:[{move: "Qe4+",replies:[
				{move: "Kf2",   freq:   1100,book:[{move: "Bc5+",replies:[
					{move: "d4",   freq:  579,book:[{move: "Bxd4+",replies:[
						{move: "Kg3",   freq: 536,book:[{move: "Qg6+",replies:[
							{move: "Kf4",  freq: 40,book:[{move: "Qf5+",replies:[
								{move: "Kg3",  freq: 29,book:[{move: "Qf2#"}]},
							]}]},
							{move: "Kf3",  freq: 29,book:[{move: "Qg4#"}]},
							{move: "Kh4",  freq: 25,book:[{move: "Bf2+",replies:[
								{move: "g3",  freq: 18,book:[{move: "Qe4+",replies:[
									{move: "Bf4",   freq:  7,book:[{move: "Qxf4+",replies:[
										{move: "Kh5",   freq:  3,book:[{move: "g6#"}]},
									]}]},
									{move: "Kg5",   freq:  4,book:[{move: "h6+",replies:[
										{move: "Kh5",   freq:  4,book:[{move: "g6#"}]},
									]}]},
									{move: "Kh5",   freq:  1,book:[{move: "g6+",replies:[
										{move: "Kg5",   freq:  1,book:[{move: "h6#"}]},
									]}]},
								]}]},
							]}]},
							{move: "Qg4",  freq:  2,book:[{move: "Qxg4#"}]},
						]}]},
						{move: "Qxd4",  freq:  12,book:[{move: "Qxd4+"}]},
						{move: "Be3",   freq:  10,book:[{move: "Qe3#"}]},
					]}]},
					{move: "Kg3",  freq:  477,book:[{move: "Qxe5+",replies:[
						{move: "Kf3",   freq: 274,book:[{move: "Qf5+",replies:[
							{move: "Ke2",   freq: 25,book:[{move: "Qe4#"}]},
							{move: "Kg3",   freq:  8,book:[{move: "Bf2#"}]},
						]}]},
						{move: "Kh4",   freq:  25,book:[{move: "Be7#"}]},
					]}]},
				]}]},
			]}]},
		]}]},
		{move: "Nf3",   freq:   3085,book:[{move: "e4",replies:[
			{move: "Ne5",  freq:  1859,book:[{move: "cxd5"}]},
			{move: "Qe2",  freq:   756,book:[{move: "cxd5"}]},
			{move: "Ng5",  freq:   524,book:[{move: "cxd5"}]},
			{move: "Nd4",  freq:   258},
			{move: "dxc6",  freq:  115},
			{move: "Ng1",   freq:   73},
			{move: "Bc4",   freq:   28},
		]}]},
		{move: "Nc3",   freq:   2560,book:[{move: "exf4",replies:[
			{move: "Nf3",   freq:  1187,book:[{move: "Bd6"}]},
			{move: "d4",    freq:   197},
			{move: "dxc6",  freq:   188},
		]}]},
		{move: "d4",    freq:   1292,book:[{move: "exd4"}]},
		{move: "Qe2",   freq:   1046,book:[{move: "cxd5"}]},
		{move: "d3",    freq:    576},
		{move: "d6",    freq:    368},
		{move: "c4",    freq:    255},
	]}]},
	{move: "Nf3",  freq:  139408,book:[{move: "exf4",replies:[
		{move: "exd5",   freq:  207885,book:[{move: "Nf6",replies:[
			{move: "c4",     freq: 34687,book:[{move: "c6"}]},
			{move: "d4",     freq: 25143,book:[{move: "Nxd5"}]},
			{move: "Bc4",    freq: 23231,book:[{move: "Qe7+"}]},
			{move: "Nc3",    freq: 22357,book:[{move: "Nxd5"}]},
			{move: "Bb5+",   freq: 11666,book:[{move: "c6"}]},
			{move: "Be2",    freq:  2783},
		]}]},
		{move: "e5",     freq:   80510,book:[{move: "g5",replies:[
			{move: "d4",     freq:  7229,book:[{move: "g4"}]},
			{move: "h4",     freq:  1225},
			{move: "h3",     freq:  1133},
			{move: "Be2",    freq:   271},
			{move: "Bb5+",   freq:   184},
		]}]},
		{move: "Nc3",    freq:    7421},
		{move: "d4",     freq:    6140},
	]}]},
	{move: "fxe5", freq:   34570,book:[{move: "Qh4+",replies:[
		{move: "g3",   freq:   8770,book:[{move: "Qxe4+",replies:[
			{move: "Qe2",  freq:  6080,book:[{move: "Qxh1"}]},
			{move: "Kf2",  freq:   963,book:[{move: "Bc5+",replies:[
				{move: "d4",  freq:  301,book:[{move: "Bxd4+",replies:[
					{move: "Be3",  freq: 149,book:[{move: "Qxe3+",replies:[
						{move: "Kg2", freq:  35,book:[{move: "Qf2#"}]},
					]}]},
					{move: "Qxd4", freq:  86,book:[{move: "Qxd4+",replies:[
						{move: "Be3",  freq:  52,book:[{move: "Qxb2"}]},
						{move: "Kg2",  freq:  26,book:[{move: "Qe4+"}]},
					]}]},
				]}]},
			]}]},
			{move: "Ne2",  freq:   779,book:[{move: "Qxh1"}]},
			{move: "Be2",  freq:   528,book:[{move: "Qxh1"}]},
		]}]},
		{move: "Ke2",  freq:   6088},
	]}]},
	{move: "Nc3",  freq:   29656,book:[{move: "exf4"}]},
	{move: "d4",  freq:    18549,book:[{move: "exd4"}]},
	{move: "d3",  freq:    14492,book:[{move: "dxe4"}]},
	{move: "Qe2",  freq:    3583},
	{move: "Qf3",  freq:    2959},
	{move: "Bd3",  freq:    1726},
	{move: "Qh5",  freq:    1401},
]}

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
	{move: "Qxd4", freq:  873247,book:[{move:"Nc6",replies:[
		{move: "Qe3",  freq:  353419,book:[{move:"Nf6",replies:[
			{move: "Nc3",  freq:  74569,book:[{move:"Bb4",replies:[
				{move: "Bd2",  freq:  54813,book:[{move:"O-O",replies:[
					{move: "O-O-O",  freq:  37206,book:[{move:"Re8"}]},
				]}]},
			]}]},
			{move: "Bd2",  freq:  11073},
			{move: "e5",   freq:  10634},
		]}]},
		{move: "Qd1",  freq:  260234,book:[{move:"Nf6"}]},
		{move: "Qa4",  freq:   94518,book:[{move:"Bc5"}]},
		{move: "Qd3",  freq:   35572},
		{move: "Qc4",  freq:   30301},
		{move: "Qd5",  freq:   15324},
		{move: "Qc3",  freq:   13354},
		{move: "Qd2",  freq:    9215},
	]}]},
	{move: "Nf3",  freq:  614565,book:[{move:"Bb4+",replies:[
		{move: "c3",  freq:  11983,book:[{move:"dxc3",replies:[
			{move: "bxc3", freq:   8326,book:[{move:"Bc5"}]},
			{move: "Nxc3", freq:   5221,book:[{move:"Nc6",replies:[
				{move: "Bc4",  freq:  39534,book:[{move:"d6"}]},
				{move: "Bd2",  freq:   3719},
			]}]},
		]}]},
		{move: "Bd2", freq:   4935},
		{move: "Nb1d2",  freq: 693},
	]}]},
	{move: "Bc4",  freq:  137643,book:[{move:"Nf6"}]},
	{move: "f4",  freq:    42321},
]};

const four_knights = [
	{move: "Bc4",  freq: 844159,book:[{move:"Nxe4",replies:[
		{move: "Nxe4",  freq: 185519,book:[{move:"d5",replies:[
			{move: "Bxd5", freq: 89366,book:[{move:"Qxd5",replies:[
				{move: "Nc3",   freq: 54680,book:[{move:"Qd6",replies:[
					{move: "O-O", freq: 4091,book:[{move:"Bg4",replies:[
						{move: "h3",  freq: 1194,book:[{move:"Bh5"}]},
						{move: "Re1",  freq: 634,book:[]},
						{move: "d3",  freq:  450,book:[]},
						{move: "Ne4",  freq: 152,book:[]},
						{move: "Nb5",  freq:  88,book:[]},
					]}]},
					{move: "d3",  freq: 3139,book:[{move:"Bg4",replies:[
						{move: "h3",   freq:  1151,book:[{move:"Bh5"}]},
						{move: "O-O",  freq:   359,book:[{move:"O-O-O"}]},
						{move: "Be3",  freq:   334,book:[]},
						{move: "Ne4",  freq:   165,book:[]},
					]}]},
					{move: "h3",  freq:  759,book:[]},
					{move: "Qe2", freq:  500,book:[]},
					{move: "Nb5", freq:  336,book:[]},
				]}]},
				{move: "d3",    freq: 32114,book:[{move:"Bf5",replies:[
					{move: "Nc3",  freq:    2245,book:[{move:"Qd7"}]},
					{move: "Qe2",  freq:    1359,book:[{move:"O-O-O"}]},
					{move: "O-O",  freq:    1019,book:[{move:"O-O-O",replies:[
						{move: "Nc3",  freq:    196,book:[{move:"Qd7"}]},
						{move: "c4",  freq:      81,book:[{move:"Qxd3",replies:[
							{move: "Qxd3",  freq:   49,replies:[{move:"Rxd3",replies:[
								{move: "Ne4g5",freq:     26,book:[{move:"f6",replies:[
									{move: "Nf7",  freq:     9,book:[{move:"Rg8"}]},
									{move: "Nh3",  freq:     3},
									{move: "Ne1",  freq:     2},
								]}]},
								{move: "Nc3",  freq:     11},
								{move: "Nc5",  freq:     11},
								{move: "Ng3",  freq:      5},
							]}]},
						]}]},
						{move: "Re1",  freq:     61},
						{move: "Be3",  freq:     48},
						{move: "Bg5",  freq:     37},
						{move: "Qe2",  freq:     36},
					]}]},
					{move: "c4",  freq:      727,book:[{move:"Bb4+"}]},
					{move: "Ng3",  freq:     230},
					{move: "Nf3d2",  freq:   130},
				]}]},
				{move: "Qe2",    freq: 3383,book:[{move:"Bg4"}]},
			]}]},
			{move: "Bd3", freq:  45882,book:[{move:"dxe4",replies:[
				{move: "Bxe4",    freq: 42690,book:[{move:"Bd6",replies:[
					{move: "O-O", freq:   10707,book:[{move:"O-O",replies:[
						{move: "Re1",    freq:  1807,book:[{move:"Bg4",replies:[
							{move: "h3",    freq:  403,book:[{move:"Bh5"}]},
							{move: "c3",    freq:  106,book:[{move:"Kh8"}]},
							{move: "d3",    freq:   43},
						]}]},
						{move: "d3",    freq:   1776,book:[{move:"Bg4"}]},
						{move: "c3",    freq:   1655,book:[{move:"f5"}]},
						{move: "d4",    freq:   1502,book:[{move:"Nxd4",replies:[
							{move: "Nxd4",    freq:   388,book:[{move:"exd4",replies:[
								{move: "Qh5",    freq:   154,book:[{move:"g6",replies:[
									{move: "Qh6",    freq:    100,book:[{move:"Re8",replies:[
										{move: "Bg5",    freq:     18,book:[{move:"Bf8"}]},
										{move: "Bd3",    freq:     16,book:[{move:"Re5"}]},
									]}]},
									{move: "Qf3",    freq:     25},
								]}]},
								{move: "Qxd4",    freq:   71,book:[{move:"Bxh2+",replies:[
									{move: "Kxh2",    freq:  214,book:[{move:"Qxd4"}]},
									{move: "Kh1",    freq:    11,book:[{move:"Qxd4"}]},
								]}]},
								{move: "g3",    freq:     41},
								{move: "Qd3",    freq:    35},
								{move: "Kh1",    freq:    33},
								{move: "Qf3",    freq:    28},
								{move: "Re1",    freq:    22},
								{move: "h3",    freq:     18},
								{move: "f4",    freq:     10},
							]}]},
							{move: "Bxh7+",    freq:   20},
						]}]},
						{move: "h3",    freq:    929},
						{move: "Bxc6",    freq:  672},
						{move: "b3",    freq:    229},
					]}]},
					{move: "Bxc6+", freq:  4397,book:[{move:"Bxc6"}]},
					{move: "d4",    freq:  3007,book:[{move:"exd4"}]},
					{move: "d3",    freq:  2715,book:[{move:"Ne7"}]},
					{move: "c3",    freq:  1310,book:[{move:"O-O"}]},
					{move: "h3",    freq:   910},
				]}]},
			]}]},
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
					{move: "d3", freq:  16596,book:[{move:"h6",replies:[
						{move: "Nh3", freq:  13769,book:[{move:"Bd6",replies:[
							{move: "Bd2",    freq:   418,book:[{move:"Qf6"}]},
							{move: "Nh3g1",    freq: 365,book:[{move:"Qf6"}]},
							{move: "Qe2",    freq:   183,book:[{move:"Qf6"}]},
							{move: "c3",    freq:    180,book:[{move:"Qf6"}]},
							{move: "Be3",    freq:   152,book:[{move:"Qf6"}]},
							{move: "O-O",    freq:   124,book:[{move:"Bg4"}]},
							{move: "c4",    freq:     97,book:[{move:"Bg4"}]},
						]}]},
					]}]},
					{move: "d4", freq:  12401,book:[{move:"h6",replies:[
						{move: "Nh3", freq:  6068,book:[{move:"Bg4"}]},
						{move: "dxe5", freq:  336,book:[{move:"hxg5"}]},
					]}]},
					{move: "O-O", freq:  2613,book:[{move:"h6"}]},
					{move: "h4", freq:   1464,book:[{move:"h6"}]},
					{move: "c3", freq:   1366,book:[{move:"h6"}]},
					{move: "Qe2", freq:  1198,book:[{move:"h6"}]},
					{move: "Nh3", freq:  1045,book:[{move:"Bg4"}]},
					{move: "c4",  freq:   403,book:[{move:"h6"}]},
				]}]},
				{move: "Ng3", freq:    27962,book:[{move:"e4",replies:[
					{move: "Ng1",    freq: 132240,book:[{move:"h5",replies:[
						{move: "d3",  freq:   1048,book:[{move:"Bg4",replies:[
							{move: "f3",  freq:  221,book:[{move:"exf3",replies:[
								{move: "Nxf3",  freq: 137,book:[{move:"Bc5",replies:[
									{move: "h3",  freq:    14,book:[{move:"Re8+",replies:[
										{move: "Ne2",  freq:    5,book:[{move:"Bxf3",replies:[
											{move: "gxf3",  freq:  7,book:[{move:"Qh4+",replies:[
												{move: "Kd1",  freq:    6,book:[{move:"Be3+",replies:[
													{move: "Kc3",  freq:    6,book:[{move:"Qb4#"}]},
												]}]},
												{move: "Kf1",  freq:    1,book:[{move:"Qf2#"}]},
											]}]},
										]}]},
										{move: "Kf1",  freq:    2},
									]}]},
									{move: "c3",  freq:    13},
									{move: "Rf1",  freq:    8},
									{move: "d4",  freq:     8},
									{move: "Bg5",  freq:    6},
								]}]},
								{move: "gxf3",  freq:  78},
							]}]},
							{move: "Qd2",  freq:  76},
							{move: "Ng1e2",  freq:47},
							{move: "Ng3e2",  freq:27},
						]}]},
						{move: "Nxh5",  freq:  859},
						{move: "h4",  freq:    594},
						{move: "Ng1e2",  freq: 211},
						{move: "d4",  freq:    207},
						{move: "h3",  freq:    145},
					]}]},
				]}]},
				{move: "Nc3", freq:    15362,book:[{move:"e4"}]},
				{move: "Nf3g5+", freq:  3881,book:[{move:"Ke8"}]},
			]}]},
		]}]},
		{move: "O-O",  freq:   14418,book:[{move:"Nxc3",replies:[
			{move: "dxc3",  freq:  14253,book:[{move:"h6"}]},
			{move: "bxc3",  freq:   2118,book:[{move:"e4",replies:[
				{move: "Re1",   freq:  43,book:[{move:"d5"}]},
				{move: "Nd4",   freq:  20,book:[{move:"d5"}]},
				{move: "Ne1",   freq:   7,book:[{move:"d5"}]},
			]}]},
		]}]},
		{move: "d3",   freq:   11321,book:[{move:"Nxc3"}]},
	]}]},
	{move: "d4",   freq: 728826,book:[{move:"exd4",replies:[
		{move: "Nxd4", freq:   561284,book:[{move:"Bb4",replies:[
			{move: "Nxc6", freq: 306530,book:[{move:"bxc6",replies:[
				{move: "Bd3", freq:   225726,book:[{move:"d5",replies:[
					{move: "exd5", freq:   102427,book:[{move:"Qe7+",replies:[
						{move: "Qe2",   freq:   2465,book:[{move:"Qxe2+",replies:[
							{move: "Kxe2",   freq:   929,book:[{move:"cxd5",replies:[
								{move: "Bg5",   freq: 165,book:[{move:"c6"}]},
								{move: "Nb5",   freq: 137},
								{move: "Bd2",   freq:  63},
								{move: "Re1",   freq:  31},
								{move: "Bb5+",  freq:  27},
								{move: "a3",    freq:  23},
								{move: "Bf4",   freq:  20},
								{move: "Rd1",   freq:  11},
							]}]},
							{move: "Bxe2",   freq:   863,book:[{move:"Nxd5",replies:[
								{move: "Bd2",   freq:  291,book:[{move:"Nxc3",replies:[
									{move: "bxc3",   freq: 126,book:[{move:"Bd6"}]},
									{move: "Bxc3",   freq: 110,book:[{move:"Bxc3+",replies:[
										{move: "bxc3",   freq:   111,book:[{move:"Be6"}]},
									]}]},
								]}]},
							]}]},
						]}]},
						{move: "Be3",   freq:    972,book:[{move:"Nxd5",replies:[
							{move: "O-O",   freq:   679,book:[{move:"Bxc3",replies:[
								{move: "bxc3",   freq:   158,book:[{move:"Nxe3",replies:[
									{move: "fxe3",   freq:   157,book:[{move:"Qxe3+",replies:[
										{move: "Kh1",   freq:   186,book:[{move:"O-O",replies:[
											{move: "Qh5",   freq:  216,book:[{move:"g6",replies:[
												{move: "Qh4",   freq:  156,book:[{move:"Qc5",replies:[
													{move: "Ra1e1", freq:   24,book:[{move:"Qxc3",replies:[
														{move: "Re7",   freq:  7,book:[{move:"Be6",replies:[
															{move: "Rxc7", freq:  4,book:[{move:"Bxa2"}]},
															{move: "h3",   freq:  2},
														]}]},
														{move: "Qe7",   freq:  4},
													]}]},
													{move: "Rf3",   freq:    8},
												]}]},
												{move: "Qa5",   freq:   41,book:[{move:"Qe7"}]},
											]}]},
											{move: "Rf3",   freq:   35},
										]}]},
									]}]},
								]}]},
							]}]},
							{move: "Qd2",   freq:   109},
						]}]},
						{move: "Be2",   freq:    283,book:[{move:"Nxd5"}]},
					]}]},
					{move: "e5",   freq:    11017},
					{move: "O-O",  freq:     9029},
					{move: "Bd2",  freq:     3757},
				]}]},
				{move: "Bd2", freq:    29256},
				{move: "Bg5", freq:    13954},
				{move: "e5",  freq:    11426},
				{move: "Qd4", freq:    10710},
			]}]},
			{move: "f3", freq:   20102,book:[{move:"d5"}]},
			{move: "Bg5", freq:  19321,book:[{move:"h6"}]},
			{move: "Qd3", freq:   7411,book:[{move:"O-O",replies:[
				{move: "Bd2", freq:    1024,book:[{move:"Ne5"}]},
				{move: "Bg5", freq:     963,book:[{move:"h6",replies:[
					{move: "Bh4",  freq:     401,book:[{move:"Ne5",replies:[
						{move: "Qe3", freq:      23,book:[{move:"d5"}]},
						{move: "Qg3", freq:      23,book:[{move:"Nxe4"}]},
						{move: "Qb5", freq:      15,book:[{move:"c5"}]},
						{move: "Qe2", freq:      13,book:[{move:"d5"}]},
						{move: "Qd2", freq:       7,book:[{move:"g5"}]},
					]}]},
					{move: "Bxf6", freq:      75},
					{move: "Nxc6", freq:      33},
					{move: "h4",   freq:      29},
				]}]},
				{move: "Be2", freq:     652},
				{move: "Nxc6",freq:     522,book:[{move:"bxc6"}]},
				{move: "f3",  freq:     394},
				{move: "a3",  freq:     273},
				{move: "Be3", freq:     216},
			]}]},
			{move: "Bd3", freq:   6448,book:[{move:"Nxd4"}]},
			{move: "Bd2", freq:   5400,book:[{move:"Nxd4"}]},
			{move: "Be3", freq:   4864,book:[{move:"O-O"}]},
			{move: "Bc4", freq:   4388,book:[{move:"Nxe4"}]},
			{move: "a3",  freq:   3682,book:[{move:"Bxc3+"}]},
			{move: "Nf5", freq:   2678,book:[{move:"O-O"}]},
			{move: "e5",  freq:   1347,book:[{move:"Nxe5"}]},
		]}]},
		{move: "Nd5",  freq:    31709,book:[{move:"Nb4"}]},
	]}]},
	{move: "Bb5", freq:  650125,book:[{move:"Bb4",replies:[
		{move: "O-O", freq:  55407,book:[{move:"O-O",replies:[
			{move: "d3", freq:   19314,book:[{move:"Bxc3",replies:[
				{move: "bxc3", freq:  6278,book:[{move:"d6",replies:[
					{move: "Bg5", freq:  3540,book:[{move:"a6",replies:[
						{move: "Bxc6", freq:  114,book:[{move:"bxc6"}]},
						{move: "Ba4",  freq:  112,book:[{move:"h6"}]},
						{move: "Bc4",  freq:   84,book:[{move:"h6"}]},
					]}]},
					{move: "h3",  freq:  1491},
					{move: "Re1", freq:  1109},
					{move: "Bxc6", freq:  676},
				]}]},
			]}]},
			{move: "Bxc6", freq:  4977},
			{move: "Re1", freq:   2944},
			{move: "Nd5", freq:   1798},
			{move: "a3",  freq:   1493},
			{move: "d4",  freq:   1158},
		]}]},
		{move: "Bxc6", freq: 37625,book:[{move:"dxc6",replies:[
			{move: "d3", freq:   8542,book:[{move:"Qe7"}]},
			{move: "Nxe5",freq:  7849,book:[{move:"Qe7"}]},
			{move: "O-O", freq:  5714,book:[{move:"Bg4"}]},
			{move: "a3", freq:   1708},
			{move: "Qe2", freq:   842},
		]}]},
		{move: "d3", freq:   35507,book:[{move:"Nd4",replies:[
			{move: "Bc4", freq:  1918,book:[{move:"d5",replies:[
				{move: "exd5", freq:    718,book:[{move:"Bg4",replies:[
					{move: "Bd2", freq:     103,book:[{move:"Bxf3",replies:[
						{move: "gxf3", freq:  30,book:[{move:"Qd7"}]},
					]}]},
					{move: "Bg5", freq:      94,book:[{move:"b5",replies:[
						{move: "Bb3", freq:  2,book:[{move:"h6"}]},
					]}]},
					{move: "O-O", freq:      78,book:[{move:"O-O"}]},
					{move: "a3" , freq:      47,book:[{move:"Ba5"}]},
					{move: "h3",  freq:      47,book:[{move:"Bxf3"}]},
					{move: "Be3", freq:      42,book:[{move:"Nxd5"}]},
				]}]},
				{move: "Bb3", freq:      28},
				{move: "Bxd5", freq:     20},
			]}]},
			{move: "Ba4", freq:   709,book:[{move:"b5"}]},
			{move: "Bd2", freq:   414,book:[{move:"Bxc3",replies:[
				{move: "Bxc3", freq:  146,book:[{move:"Nxb5"}]},
				{move: "Nxd4", freq:  119,book:[{move:"Bxd4"}]},
				{move: "Bxd7+", freq:  41,book:[{move:"Bxd7"}]},
			]}]},
			{move: "Nxd4", freq:  402,book:[{move:"exd4",replies:[
				{move: "a3", freq:   342,book:[{move:"Ba5",replies:[
					{move: "b4", freq:   136,book:[{move:"dxc3",replies:[
						{move: "bxa5",freq:  78,book:[{move:"O-O",replies:[
							{move: "O-O", freq:   15,book:[{move:"c6",replies:[
								{move: "Bc4", freq:   11,book:[{move:"d5",replies:[
									{move: "exd5", freq:   12,book:[{move:"cxd5",replies:[
										{move: "Bb3", freq:   11,book:[{move:"Bg4",replies:[
											{move: "f3", freq:    6,book:[{move:"Bd7"}]},
											{move: "Qe1", freq:   2},
										]}]},
									]}]},
								]}]},
								{move: "Ba4", freq:    2},
							]}]},
							{move: "Bg5", freq:    6},
						]}]},
					]}]},
				]}]},
				{move: "Bd2", freq:   21},
				{move: "O-O",freq:    10},
			]}]},
			{move: "O-O", freq:   273,book:[{move:"Bxc3"}]},
			{move: "Nxe5", freq:  210,book:[{move:"Nxb5"}]},
			{move: "a3",  freq:   109,book:[{move:"Bxc3+"}]},
		]}]},
		{move: "a3", freq:    8472,book:[{move:"Bxc3"}]},
		{move: "Nd5", freq:   4839,book:[{move:"Nxd5"}]},
	]}]},
	{move: "d3", freq:   183536,book:[{move:"Bb4",replies:[
		{move: "Bd2", freq:  61223,book:[{move:"d5",replies:[
			{move: "exd5", freq: 5733,book:[{move:"Nxe5",replies:[
				{move: "Nxd5", freq:  5821,book:[{move:"Bxd2+",replies:[
					{move: "Qxd2",  freq:  4188,book:[{move:"Qxd5",replies:[
						{move: "Be2",  freq:  3461,book:[{move:"Bf5"}]},
						{move: "c4",   freq:   538},
						{move: "O-O-O",  freq: 436},
						{move: "Qg5",  freq:   232},
					]}]},
					{move: "Nxd2",  freq:   338},
					{move: "Kxd2",  freq:    14},
				]}]},
				{move: "Be2",  freq:  2163},
				{move: "a3",   freq:   685},
			]}]},
			{move: "a3",   freq: 1567,book:[{move:"Bxc3"}]},
			{move: "Nxd5", freq:  912,book:[{move:"Bxd2+"}]},
			{move: "Be2",  freq:  603,book:[{move:"d4"}]},
		]}]},
		{move: "Bg5", freq:  17609},
		{move: "Be2", freq:  16447},
		{move: "a3",  freq:   7926},
		{move: "Be3",  freq:  5135},
	]}]},
	{move: "Nxe5", freq:  99844,book:[{move:"Nxe5",replies:[
		{move: "d4", freq:   100515,book:[{move:"Ng6",replies:[
			{move: "e5", freq:     50378,book:[{move:"Ng8",replies:[
				{move: "Bc4", freq:    35405,book:[{move:"d5",replies:[
					{move: "Bxd5", freq:  7837,book:[{move:"Ng8e7",replies:[
						{move: "Bb3", freq:   931,book:[{move:"Nf5",replies:[
							{move: "Be3", freq:   242,book:[{move:"Bb4",replies:[
								{move: "O-O", freq:    64,book:[{move:"Bxc3",replies:[
									{move: "bxc3", freq:   31,book:[{move:"Nxe3",replies:[
										{move: "fxe3", freq:    17,book:[{move:"O-O"}]},
									]}]},
								]}]},
								{move: "Qf3", freq:    18,book:[{move:"a5"}]},
							]}]},
							{move: "Qf3", freq:    80,book:[{move:"Qxd4"}]},
							{move: "Ne2", freq:    70,book:[{move:"c5"}]},
							{move: "O-O", freq:    36,book:[{move:"Nxd4"}]},
						]}]},
						{move: "Bg5", freq:   178,book:[{move:"c6"}]},
						{move: "Be4", freq:   172,book:[{move:"c5"}]},
						{move: "Bc4", freq:   155,book:[{move:"Nf5"}]},
					]}]},
					{move: "exd6", freq:   871,book:[{move:"Bxd6"}]},
					{move: "Nxd5", freq:   828,book:[{move:"Be6"}]},
				]}]},
				{move: "f4", freq:      3346,book:[{move:"d6"}]},
				{move: "Qf6", freq:     1532},
			]}]},
			{move: "f4", freq:       555},
		]}]},
		{move: "f4", freq:      514},
	]}]},
	{move: "a3", freq:    85273,book:[{move:"d5",replies:[
		{move: "exd5", freq:  19169,book:[{move:"Nxd5"}]},
		{move: "Bb5", freq:    6848,book:[{move:"Nxe4"}]},
		{move: "d3", freq:     1516},
	]}]},
	{move: "Be2", freq:   61415,book:[{move:"d5",replies:[
		{move: "exd5", freq:    9453,book:[{move:"Nxd5",replies:[
			{move: "O-O", freq:     4424,book:[{move:"Nxc3",replies:[
				{move: "bxc3", freq:    1968,book:[{move:"e4"}]},
				{move: "dxc3", freq:     597,book:[{move:"Qxd1",replies:[
					{move: "Rxd1", freq:     317,book:[{move:"f6"}]},
					{move: "Bxd1", freq:      18},
				]}]},
			]}]},
			{move: "Nxd5",freq:     3522,book:[{move:"Qxd5"}]},
			{move: "d3",  freq:     1069,book:[{move:"Bb4"}]},
			{move: "Bb5", freq:      492},
			{move: "Ne4", freq:      297},
			{move: "d4",  freq:      258},
		]}]},
		{move: "d3",   freq:    1650,book:[{move:"d4"}]},
		{move: "O-O",  freq:    1090,book:[{move:"dxe4"}]},
	]}]},
	{move: "g3", freq:    31937},
	{move: "h3", freq:    31739},
	{move: "a4", freq:     3725,book:[{move:"a6"}]},
];

const deep_castle_damiano = {move:"Nxe5",replies:[
	{move: "Bxd7+",     freq: 382,book:[{move:"Rxd7",replies:[
		{move: "Bf4", freq:  54,book:[{move:"Ng6"}]},
		{move: "Be3", freq:  24,book:[{move:"Nc6"}]},
		{move: "Qa4", freq:   7},
		{move: "Re1", freq:   7},
	]}]},
	{move: "Bf4",       freq: 100,book:[{move:"Ng6"}]},
	{move: "Re1",       freq:  87,book:[{move:"Ng6"}]},
	{move: "Nd5",       freq:  46,book:[{move:"Qe6"}]},
	{move: "Be3",       freq:  43,book:[{move:"Bxb5",replies:[
		{move: "Nxb5",      freq:    9,book:[{move:"a6",replies:[
			{move: "Nc3", freq:   5,book:[{move:"g6"}]},
		]}]},
	]}]},
]};

const dami_cube = {move:"d5",replies:[
	{move: "Bd3",    freq:  17687,book:[{move:"Nd7",replies:[
		{move: "Nxd7",   freq:   5376,book:[{move:"Bxd7",replies:[
			{move: "O-O",    freq:  4288,book:[{move:"Bd6",replies:[
				{move: "c4",     freq:  1416,book:[{move:"O-O",replies:[
					{move: "cxd5",    freq:   102,book:[{move:"f5",replies:[
						{move: "Nc3",     freq:    40,book:[{move:"Qf6"}]},
					]}]},
					{move: "Nc3",     freq:    44},
					{move: "c5",      freq:    31},
				]}]},
				{move: "Nc3",    freq:   587},
				{move: "Re1",    freq:   269},
				{move: "Qh5",    freq:   191},
				{move: "Nd2",    freq:   175},
				{move: "f3",     freq:    63},
			]}]},
			{move: "Nc3",    freq:   300},
			{move: "Nd2",    freq:   282},
			{move: "c4",     freq:   179},
		]}]},
		{move: "O-O",    freq:   3546,book:[{move:"Nxe5",replies:[
			{move: "dxe5",    freq:  3091,book:[{move:"Nc5"}]},
			{move: "Bxe4",    freq:    41},
		]}]},
		{move: "Nc3",    freq:    871},
		{move: "Nxf7",   freq:    807},
	]}]},
	{move: "Qf3",    freq:   2014},
	{move: "c4",     freq:   1861},
	{move: "Nc3",    freq:   1475},
]}

const bish_rus = {move:"d5",replies:[
	{move: "Bb3", freq:  34153,book:[{move:"Qg5",replies:[
		{move: "O-O", freq:  1982,book:[{move:"Qxe5",replies:[
			{move: "d3",      freq:   1646,book:[{move:"Nxf2"}]},
			{move: "Re1",     freq:    673,book:[{move:"Bd6",replies:[
				{move: "g3",      freq:    240,book:[{move:"Bc5"}]},
				{move: "d3",      freq:     77,book:[{move:"Qxh2+",replies:[
					{move: "Kf1",      freq:    87,book:[{move:"Qh1+",replies:[
						{move: "Ke2",      freq:    77,book:[{move:"Bg4+",replies:[
							{move: "f3",      freq:     32,book:[{move:"Qxg2+",replies:[
								{move: "Ke3",     freq:     30,book:[{move:"Qf2#"}]},
							]}]},
							{move: "Ke3",     freq:     13,book:[{move:"Qh6+",replies:[
								{move: "Kd4",      freq:   6,book:[{move:"Nc6+",replies:[
									{move: "Kxd5",      freq:  1,book:[{move:"Qe6#"}]},
								]}]},
								{move: "f4",       freq:   1,book:[{move:"Qxf4+",replies:[
									{move: "Kd4",   freq:  1,book:[{move:"Nc6+",replies:[
										{move: "Kxd5",      freq:  1,book:[{move:"Be6#"}]},
									]}]},
								]}]},
							]}]},
						]}]},
					]}]},
				]}]},
				{move: "f3",      freq:     18},
			]}]},
			{move: "d4",      freq:    160},
			{move: "f3",      freq:     74},
		]}]},
		{move: "d4",  freq:  1402,book:[{move:"Qxg2",replies:[
			{move: "Rf1",      freq:   781,book:[{move:"Bh3",replies:[
				{move: "Qe2",      freq:    464,book:[{move:"c6",replies:[
					{move: "Nd2",      freq:     47,book:[{move:"Nxd2"}]},
					{move: "Bf4",      freq:     25,book:[{move:"Qxf1+"}]},
					{move: "c4",       freq:     17,book:[{move:"Bb4+"}]},
					{move: "Nc3",      freq:     10},
					{move: "Be3",      freq:     10},
					{move: "f3",       freq:      8},
				]}]},
				{move: "Nd2",      freq:     45,book:[{move:"Nxd2"}]},
				{move: "Ke2",      freq:     26,book:[{move:"Nc6"}]},
				{move: "Qd3",      freq:     24,book:[{move:"c6"}]},
				{move: "Bxd5",      freq:    12},
				{move: "Qf3",      freq:     12},
			]}]},
			{move: "Qf3",      freq:   609,book:[{move:"Qxf3",replies:[
				{move: "Nxf3",      freq:  594,book:[{move:"Be6"}]},
			]}]},
		]}]},
		{move: "Nf3", freq:  1239,book:[{move:"Qxg2"}]},
		{move: "Nxf7", freq:  627,book:[{move:"Qxg2"}]},
		{move: "Qf3", freq:   454,book:[{move:"Qxe5"}]},
		{move: "d3",  freq:   415,book:[{move:"Qxg2"}]},
		{move: "Ng4", freq:   364,book:[{move:"Bxg4"}]},
		{move: "Bxd5", freq:  219,book:[{move:"Qxe5"}]},
		{move: "Qe2", freq:   116,book:[{move:"Qxe5"}]},
	]}]},
	{move: "Qf3", freq:  29702,book:[{move:"Be6",replies:[
		{move: "Bb3", freq:   5819,book:[{move:"Qg5",replies:[
			{move: "Nd3",    freq:   383,book:[{move:"Nc6"}]},
			{move: "d4",     freq:   177,book:[{move:"Qxc1+",replies:[
				{move: "Qd1",    freq:   73,book:[{move:"Qxb2",replies:[
					{move: "Nd2",    freq:   39,book:[{move:"Qxd4"}]},
					{move: "O-O",    freq:    6},
				]}]},
				{move: "Ke2",    freq:   47,book:[{move:"Qxh1"}]},
			]}]},
			{move: "O-O",    freq:   103,book:[{move:"Qxd5"}]},
			{move: "d3",     freq:    69,book:[{move:"Qxc1+"}]},
			{move: "Ba4+",   freq:    50,book:[{move:"c6"}]},
			{move: "Nc3",    freq:    44,book:[{move:"Qxd5"}]},
			{move: "Nxf7",   freq:    21,book:[{move:"Bxf7"}]},
		]}]},
		{move: "Bd3", freq:   3134,book:[{move:"Qg5",replies:[
			{move: "Bxe4",    freq:  414,book:[{move:"Qxe5"}]},
			{move: "Nxf7",    freq:   73,book:[{move:"Bxf7"}]},
		]}]},
		{move: "Bb5+", freq:  2226,book:[{move:"c6"}]},
		{move: "d3",  freq:   2011,book:[{move:"Ng5"}]},
		{move: "O-O", freq:   1077,book:[{move:"Ng5"}]},
		{move: "d4",    freq:  156},
	]}]},
	{move: "Bd3", freq:   8644,book:[{move:"Qg5",replies:[
		{move: "Bxe4",   freq:  698,book:[{move:"Qxe5",replies:[
			{move: "O-O",    freq:  763,book:[{move:"Bd6"}]},
			{move: "Qe2",    freq:  155},
			{move: "d4",     freq:  154},
			{move: "d3",     freq:   77},
			{move: "Nc3",    freq:   48},
		]}]},
		{move: "Nf3",    freq:  352,book:[{move:"Qxg2"}]},
		{move: "O-O",    freq:  185,book:[{move:"Qxg5"}]},
		{move: "Nxf7",   freq:  102,book:[{move:"Qxg2"}]},
		{move: "Qf3",    freq:   96,book:[{move:"Qxe5"}]},
		{move: "Ng4",    freq:   86,book:[{move:"Bxg4"}]},
	]}]},
	{move: "Nxf7", freq:  8288,book:[{move:"Qe7",replies:[
		{move: "O-O",     freq:  389,book:[{move:"Qxf7"}]},
		{move: "Bxd5",    freq:  181,book:[{move:"Ng3+",replies:[
			{move: "Qe2",    freq:  21,book:[{move:"Qxe2#"}]},
			{move: "Ne5",    freq:  10,book:[{move:"Qxe5+",replies:[
				{move: "Be4",  freq:  6,book:[{move:"Qxe4+",replies:[
					{move: "Qe2",     freq:   3,book:[{move:"Qxe2#"}]},
				]}]},
			]}]},
			{move: "Be4",    freq:   5,book:[{move:"Qxe4+",replies:[
				{move: "Qe2",   freq:   4,book:[{move:"Qxe2#"}]},
			]}]},
			{move: "Be6",    freq:   4,book:[{move:"Qxe6+",replies:[
				{move: "Ne5",   freq:   2,book:[{move:"Qxe5+",replies:[
					{move: "Qe2",   freq:   1,book:[{move:"Qxe2#"}]},
				]}]},
				{move: "Qe2",   freq:   1,book:[{move:"Qxe2#"}]},
			]}]},
		]}]},
		{move: "Nxh8",    freq:  154,book:[{move:"Nc3+"}]},
		{move: "Qe2",     freq:  136,book:[{move:"Qxf7"}]},
		{move: "Qh5",     freq:   48,book:[{move:"Nf6+"}]},
	]}]},
	{move: "Qe2", freq:   5423,book:[{move:"Bc5"}]},
	{move: "Bb5+", freq:  4574,book:[{move:"c6",replies:[
		{move: "Bd3",    freq: 1668,book:[{move:"Qg5",replies:[
			{move: "Bxe4",   freq: 114,book:[{move:"Qxe5"}]},
			{move: "Nf3",    freq:  85,book:[{move:"Qxg2"}]},
			{move: "O-O",    freq:  39,book:[{move:"Qxe5"}]},
			{move: "Nxf7",   freq:  23},
			{move: "Qf3",    freq:  22},
			{move: "Ng4",    freq:  15},
		]}]},
		{move: "Ba4",    freq: 1650,book:[{move:"Qg5"}]},
		{move: "Be2",    freq:  720,book:[{move:"Bd6"}]},
		{move: "Qf3",    freq:  275},
		{move: "Nxc6",   freq:  114},
	]}]},
	{move: "Be2", freq:   3611,book:[{move:"Bd6"}]},
	{move: "Qh5", freq:   2391,book:[{move:"g6"}]},
	{move: "d3", freq:    1101,book:[{move:"dxc4",replies:[
		{move: "dxe4", freq:  786,book:[{move:"1xd1+",replies:[
			{move: "Kxd1", freq:  908,book:[{move:"Be6"}]},
		]}]},
	]}]},
]}

const kholmov_mainline = {move:"dxe5",replies:[
	{move: "dxe5",    freq:  15683,book:[{move:"Nc6",replies:[
		{move: "Bb5",    freq:   6970,book:[{move:"Bd7",replies:[
			{move: "O-O",    freq: 2995,book:[{move:"O-O-O",replies:[
				{move: "Nc3",    freq:  737,book:[deep_castle_damiano]},
				{move: "Re1",    freq:  669,book:[{move:"Nxe5",replies:[
					{move: "Bxd7+",  freq: 296,book:[{move:"Rxd7",replies:[
						{move: "Nc3",    freq:  225,book:[{move:"Nc6",replies:[
							{move: "Bf4",   freq:  101,book:[{move:"Qxe4",replies:[
								{move: "Rxe4",   freq:   68,book:[{move:"Bb4"}]},
								{move: "Nxe4",   freq:   36,book:[{move:"Nd4"}]},
							]}]},
							{move: "Qxe7",   freq:  31,book:[{move:"Bxe7"}]},
							{move: "Be3",   freq:   10,book:[{move:"Qxe4",replies:[
								{move: "Nxe4",    freq: 10,book:[{move:"Be7"}]},
							]}]},
						]}]},
						{move: "Bf4",    freq:   27,book:[{move:"Ng6"}]},
					]}]},
					{move: "Qxe5",   freq:  38,book:[{move:"Qxe5",replies:[
						{move: "Rxe5",   freq:   31,book:[{move:"Bxb5",replies:[
							{move: "Nc3",  freq: 29,book:[{move:"Bc6",replies:[
								{move: "Be3",  freq: 13,book:[{move:"f6"}]},
								{move: "Bf4",  freq:  5,book:[{move:"Bd6"}]},
							]}]},
							{move: "Rxb5",  freq: 2,book:[{move:"Rd1#"}]},
						]}]},
					]}]},
					{move: "Nc3",    freq:  28,book:[{move:"Ng6"}]},
				]}]},
				{move: "Bf4",    freq:  531,book:[{move:"g5",replies:[
					{move: "Bg3",    freq:  343,book:[{move:"f5",replies:[
						{move: "Qa4",    freq:  287,book:[{move:"f4",replies:[
							{move: "Bxc6",    freq:   224,book:[{move:"Bxc6",replies:[
								{move: "Qxa7",    freq:  224,book:[{move:"Qxe5"}]},
							]}]},
						]}]},
					]}]},
					{move: "Be3",    freq:   45},
					{move: "Bxc6",   freq:   26},
				]}]},
				{move: "Bxc6",    freq: 197},
				{move: "Be3",     freq: 138},
				{move: "f4",      freq:  91},
				{move: "Qa4",     freq:  84},
			]}]},
			{move: "Nc3",    freq: 1699,book:[{move:"O-O-O",replies:[
				{move: "Bf4",    freq:  687},
				{move: "O-O",    freq:  303,book:[deep_castle_damiano]},
				{move: "Be3",    freq:  119},
				{move: "f4",     freq:   97},
				{move: "Nd5",    freq:   43},
			]}]},
			{move: "Bf4",    freq:  923},
			{move: "f4",     freq:  551},
			{move: "Bxc6",   freq:  473},
		]}]},
		{move: "Nc3",    freq:   2329,book:[{move:"Qxe5",replies:[
			{move: "Qxe5+",  freq:  1633,book:[{move:"Nxe5",replies:[
				{move: "Bf4",    freq:  1099,book:[{move:"Bd6",replies:[
					{move: "Bg3",    freq:  417,book:[{move:"h5"}]},
					{move: "O-O-O",  freq:  194,book:[{move:"Nd3+",replies:[
						{move: "Bxd3",    freq:  95,book:[{move:"Bxf4+"}]},
						{move: "Rxd3",    freq:  11,book:[{move:"Bxf4+"}]},
					]}]},
					{move: "Nb5",    freq:  114,book:[{move:"Nf3+"}]},
				]}]},
				{move: "Nb5",    freq:   511,book:[{move:"Bb4+",replies:[
					{move: "Bd2",    freq:   170,book:[{move:"Bxd2+",replies:[
						{move: "Kxd2",    freq:   163,book:[{move:"Kd8",replies:[
							{move: "Re1",  freq:  80,book:[{move:"Nd7",replies:[
								{move: "Bc4",   freq:  4,book:[{move:"Rf8"}]},
							]}]},
							{move: "Rd1",  freq:  32,book:[{move:"Bd7"}]},
							{move: "f4",   freq:   9},
						]}]},
					]}]},
					{move: "c3",     freq:   124,book:[{move:"Ba5"}]},
				]}]},
			]}]},
			{move: "Bf4",    freq:   195,book:[{move:"Qxe4+",replies:[
				{move: "Nxe4",    freq:   197,book:[{move:"Bf5"}]},
			]}]},
			{move: "Bb5",    freq:   109,book:[{move:"Qxe4+",replies:[
				{move: "Nxe4",    freq:   103,book:[{move:"Bf5"}]},
			]}]},
		]}]},
		{move: "Bf4",    freq:   2281,book:[{move:"g5",replies:[
			{move: "Bg3",     freq:  1335,book:[{move:"f5",replies:[
				{move: "Qe2",     freq:  501,book:[{move:"Be6",replies:[
					{move: "h4",     freq:    4,book:[{move:"f4",replies:[
						{move: "Bh2",   freq:  4,book:[{move:"O-O-O",replies:[
							{move: "hxg5",    freq:   1,book:[{move:"Nd4"}]},
							{move: "Nd2",     freq:   1,book:[{move:"Nd4"}]},
						]}]},
					]}]},
					{move: "f4",     freq:    2,book:[{move:"gxf4"}]},
				]}]},
				{move: "Qa4",     freq:  337,book:[{move:"f4"}]},
				{move: "Qd5",     freq:  132,book:[{move:"Be6"}]},
				{move: "Qf3",     freq:  100,book:[{move:"f4"}]},
				{move: "Qe3",     freq:   82,book:[{move:"f4"}]},
				{move: "Qd3",     freq:   34,book:[{move:"f4"}]},
				{move: "Qc4",     freq:   34,book:[{move:"Be6"}]},
			]}]},
			{move: "Bd2",     freq:    79},
			{move: "Be3",     freq:    73},
			{move: "Bb5",     freq:    31},
		]}]},
		{move: "f4",     freq:   2207,book:[{move:"Bg4",replies:[
			{move: "Bb5",     freq:   359,book:[{move:"O-O-O",replies:[
				{move: "Nc3",     freq:   135,book:[{move:"Nd4",replies:[
					{move: "Bd3",    freq:   72,book:[{move:"Qh4+",replies:[
						{move: "g3",    freq:   20,book:[{move:"Qh3",replies:[
							{move: "Be3",    freq:   8,book:[{move:"Bf3"}]},
							{move: "Qe3",    freq:   3},
							{move: "Kf1",    freq:   3},
							{move: "Kf2",    freq:   2},
						]}]},
						{move: "Kf1",   freq:    7,book:[{move:"Bf5"}]},
					]}]},
					{move: "Be3",    freq:   26},
					{move: "Ba4",    freq:   13},
				]}]},
				{move: "Bxc6",    freq:   109,book:[{move:"Rd1+",replies:[
					{move: "Kf2",     freq:  98,book:[{move:"Rxh1",replies:[
						{move: "Bxb7+",  freq:  88,book:[{move:"Kb8",replies:[
							{move: "Be3",   freq:   32,book:[{move:"Qh4+",replies:[
								{move: "g3",   freq:  17,book:[{move:"Rxh2+",replies:[
									{move: "Kf1",   freq:   7,book:[{move:"Bh3+"}]},
									{move: "Ke1",   freq:   3,book:[{move:"Qxg3+",replies:[
										{move: "Kf1",   freq:   2,book:[{move:"Be2#"}]},
									]}]},
									{move: "Qg2",   freq:   2,book:[{move:"Rxg2+"}]},
									{move: "Kg1",   freq:   2,book:[{move:"Qxg3+"}]},
								]}]},
							]}]},
							{move: "Nc3",   freq:   25,book:[{move:"Qh4+",replies:[
								{move: "g3",   freq:   10,book:[{move:"Bc5+",replies:[
									{move: "Be3",   freq:  2,book:[{move:"Rxh2+"}]},
								]}]},
								{move: "Ke3",   freq:   4,book:[{move:"Re1+"}]},
							]}]},
							{move: "Ba6",   freq:   24,book:[{move:"Qh4+",replies:[
								{move: "g3",   freq:   6,book:[{move:"Bc5+"}]},
								{move: "Ke3",   freq:  1,book:[{move:"Re1+"}]},
							]}]},
							{move: "Ba8",   freq:    5,book:[{move:"Qh4+"}]},
						]}]},
					]}]},
				]}]},
				{move: "O-O",     freq:    73,book:[{move:"Qc5+"}]},
			]}]},
			{move: "Nc3",     freq:   228,book:[{move:"O-O-O"}]},
			{move: "Be2",     freq:    55,book:[{move:"Bxe2",replies:[
				{move: "Qxe2",   freq:    33,book:[{move:"O-O-O"}]},
			]}]},
			{move: "h3",      freq:    39,book:[{move:"Qh4+"}]},
			{move: "Bd3",     freq:    35,book:[{move:"Qh4+"}]},
			{move: "Be3",     freq:    16,book:[{move:"O-O-O"}]},
		]}]},
	]}]},
	{move: "Qxe5",    freq:  13146,book:[{move:"Qxe5+",replies:[
		{move: "dxe5",    freq:  10751,book:[{move:"Bf5",replies:[
			{move: "Bd3",   freq:  3923,book:[{move:"Bxd3",replies:[
				{move: "cxd3",    freq:  3875,book:[{move:"Nc6",replies:[
					{move: "f4",    freq:  1638,book:[{move:"Nb4",replies:[
						{move: "Kd2",   freq:   481,book:[{move:"O-O-O"}]},
						{move: "Na3",   freq:   422,book:[{move:"O-O-O"}]},
						{move: "Kd1",   freq:    36,book:[]},
						{move: "Ke2",   freq:    33,book:[]},
						{move: "Nc3",   freq:    30,book:[]},
						{move: "O-O",   freq:    24,book:[]},
					]}]},
					{move: "Bf4",   freq:  1010,book:[{move:"Nb4"}]},
					{move: "O-O",   freq:   976,book:[{move:"O-O-O"}]},
					{move: "Be3",   freq:   108,book:[{move:"Nxe5"}]},
				]}]},
			]}]},
			{move: "c3",    freq:  1368,book:[{move:"Nd7",replies:[
				{move: "f4",    freq:  525,book:[{move:"f6",replies:[
					{move: "exf6",   freq:  48,book:[{move:"Nxf6"}]},
				]}]},
				{move: "Bf4",   freq:  469,book:[{move:"O-O-O"}]},
			]}]},
			{move: "Nc3",   freq:   427,book:[]},
			{move: "Bb5+",  freq:   262,book:[]},
		]}]},
	]}]},
]}

const kholmov = {move:"d6",replies:[
	{move: "d4",     freq:  30593,book:[kholmov_mainline]},
	{move: "Qa4+",   freq:   3370,book:[{move:"Bd7",replies:[
		{move: "Qe4",    freq:  770,book:[{move:"Nc6",replies:[
			{move: "d4",      freq:   58,book:[{move:"dxe5"}]},
			{move: "Bb5",     freq:   44,book:[{move:"dxe5"}]},
			{move: "Nc3",     freq:   17,book:[{move:"dxe5"}]},
			{move: "Be2",     freq:   14,book:[{move:"f5"}]},
		]}]},
		{move: "Qb3",    freq:  768,book:[{move:"Qxe5+",replies:[
			{move: "Be2",    freq:  648,book:[{move:"Nc6",replies:[
				{move: "Qxb7",    freq:  57,book:[{move:"Rb8",replies:[
					{move: "Qxc7",    freq:  38,book:[{move:"Rc8",replies:[
						{move: "Qb7",     freq:  22,book:[{move:"Nd4",replies:[
							{move: "Nc3",     freq:  12,book:[{move:"Rxc3",replies:[
								{move: "O-O",   freq:  4,book:[{move:"Nxe2+"}]},
								{move: "Qa6",   freq:  3,book:[{move:"Rc6"}]},
							]}]},
							{move: "Qa6",     freq:   5,book:[{move:"Rc6"}]},
						]}]},
					]}]},
					{move: "Qa6",     freq:  23,book:[{move:"Nd4",replies:[
						{move: "Nc3",    freq:   5,book:[{move:"Nxc2+"}]},
					]}]},
				]}]},
				{move: "Nc3",    freq:   21,book:[{move:"Nd4"}]},
			]}]},
			{move: "Qe3",    freq:   32,book:[{move:"Nc6"}]},
			{move: "Kd1",    freq:   10,book:[{move:"Nc6"}]},
		]}]},
		{move: "Qb4",    freq:  272,book:[{move:"Nc6"}]},
		{move: "Qxd7+",  freq:  269,book:[{move:"Nxd7"}]},
		{move: "Bb5",    freq:  246,book:[{move:"Qxe5+"}]},
		{move: "Qd4",    freq:   68},
	]}]},
	{move: "Bb5+",   freq:   2259,book:[{move:"c6",replies:[
		{move: "Ba4",      freq:   547,book:[{move:"Qxe5",replies:[
			{move: "Qxe5+",      freq:   258,book:[{move:"dxe5",replies:[
				{move: "O-O",    freq:  211,book:[{move:"a5",replies:[
					{move: "Re1",    freq:  5,book:[{move:"b5",replies:[
						{move: "Rxe5+",  freq:  2,book:[{move:"Be7"}]},
						{move: "Bb3",    freq:  1,book:[{move:"a4",replies:[
							{move: "Rxe5+",  freq:  2,book:[{move:"Be7"}]},
						]}]},
					]}]},
					{move: "Nc3",    freq:  2,book:[{move:"b5"}]},
				]}]},
				{move: "Nc3",    freq:   35,book:[{move:"Nd7"}]},
			]}]},
			{move: "Nc3",        freq:    30,book:[{move:"Qxe4+"}]},
		]}]},
		{move: "Bd3",      freq:   337,book:[{move:"Qxe5",replies:[
			{move: "Qxe5+",    freq: 114,book:[{move:"dxe5",replies:[
				{move: "O-O",    freq:   93,book:[{move:"Be6",replies:[
					{move: "Re1",     freq:    9,book:[{move:"f6"}]},
					{move: "Nc3",     freq:    4},
					{move: "b3",      freq:    3},
				]}]},
				{move: "Nc3",    freq:   12,book:[{move:"Be6"}]},
			]}]},
			{move: "O-O",      freq:  47,book:[{move:"Qxe4"}]},
		]}]},
		{move: "Bxc6+",    freq:   236,book:[{move:"Nxc6"}]},
		{move: "Bc4",      freq:   220,book:[{move:"Qxe5"}]},
		{move: "O-O",      freq:   107,book:[{move:"cxb5"}]},
		{move: "Be2",      freq:   104,book:[{move:"Qxe5"}]},
		{move: "Nxc6",     freq:    37,book:[{move:"Qxe4+"}]},
	]}]},
	{move: "Nc3",    freq:   1548,book:[{move:"Qxe5",replies:[
		{move: "Qxe5+",    freq:   566,book:[{move:"dxe5",replies:[
			{move: "Bc4",       freq:   308,book:[{move:"Bd7"}]},
			{move: "Nd5",       freq:   130,book:[{move:"Bd6",replies:[
				{move: "Bc4",       freq:    70,book:[{move:"Nc6"}]},
				{move: "d3",        freq:    22,book:[{move:"Nc6",replies:[
				]}]},
				{move: "c4",        freq:    14},
			]}]},
			{move: "d3",        freq:    63},
			{move: "Nb5",       freq:    27},
			{move: "Bb50",      freq:    22},
		]}]},
		{move: "d4",       freq:    97},
		{move: "Bc4",      freq:    77},
		{move: "d3",       freq:    12},
		{move: "Bb5+",     freq:    12},
	]}]},
	{move: "f4",     freq:   1438,book:[{move:"f5",replies:[//dangerous sideline
		{move: "Qe3",    freq:  54,book:[{move:"dxe5",replies:[
			{move: "fxe5",    freq:  27,book:[{move:"Nc6",replies:[
				{move: "d4",       freq:    97,book:[{move:"Qh4+",replies:[
					{move: "g3",      freq:    38,book:[{move:"Qxd4",replies:[
						{move: "Qxd4",     freq:   21,book:[{move:"Nxd4",replies:[
							{move: "Bd3",   freq:   25,book:[{move:"Nf3+",result:[
								{move: "Kf2",   freq:   8,book:[{move:"Be6"}]},
							]}]},
						]}]},
						{move: "Bb5",      freq:   10,book:[{move:"Qd5"}]},
						{move: "Bg2",      freq:    5},
					]}]},
					{move: "Qf2",     freq:     7,book:[{move:"Qxf2+",replies:[
						{move: "Kxf2",   freq:  5,book:[{move:"Nxd4",replies:[
							{move: "Bd3",      freq:   5,book:[{move:"Bc5"}]},
						]}]},
					]}]},
				]}]},
				{move: "Bb5",      freq:    11},
				{move: "Nc3",      freq:     3},
			]}]},
			{move: "Qxe5",    freq:  24,book:[{move:"Be6"}]},
		]}]},
		{move: "Qe2",    freq:  30,book:[{move:"dxe5"}]},
		{move: "Qa4+",   freq:   6,book:[{move:"Nc6"}]},
	]}]},
	{move: "Bc4",    freq:   1051,book:[{move:"dxe5"}]},
	{move: "Bd3",    freq:    223,book:[{move:"dxe5"}]},
	{move: "d3",     freq:    184,book:[{move:"dxe5"}]},
	{move: "Be2",    freq:    174,book:[{move:"dxe5"}]},
	{move: "Qe2",    freq:    145,book:[{move:"dxe5"}]},
]}

const damiano_russian = {move: "Nxe4",replies:[
	{move: "Qe2", freq:  104278,book:[{move:"Qe7",replies:[
		{move: "Qxe4",   freq: 43143,book:[kholmov]},
		{move: "d4",     freq:  3867,book:[{move:"d6",replies:[//d5 is better, but this transposes
			{move: "Qxe4",    freq:  2364,book:[kholmov_mainline]},
			{move: "Nf3",     freq:   729,book:[{move:"g6"}]},
			{move: "Nd3",     freq:   231},
		]}]},
		{move: "Nf3",    freq:  2432,book:[{move:"d5"}]},
		{move: "d3",     freq:  1581,book:[{move:"Nf6"}]},
	]}]},
	{move: "d4",  freq:   13107,book:[dami_cube]},
	{move: "d3",  freq:    9715,book:[{move:"Nf6",replies:[
		{move: "Be2",    freq:  876,book:[{move:"d5"}]},
		{move: "Bg5",    freq:  862,book:[{move:"d6"}]},
		{move: "d4",     freq:  724,book:[{move:"d5"}]},
		{move: "Nf3",    freq:  525,book:[{move:"d5"}]},
		{move: "Qe2",    freq:  516,book:[{move:"Be7"}]},
		{move: "Nc3",    freq:  437,book:[{move:"Bb4"}]},
		{move: "g3",     freq:   63},
	]}]},
	{move: "Qf3",  freq:   8703,book:[{move:"Ng5",replies:[
		{move: "Qe3",     freq: 295,book:[{move:"Be7"}]},
		{move: "Qf4",     freq: 222,book:[{move:"d6"}]},
		{move: "Qb3",     freq: 173,book:[{move:"Bc5",replies:[
			{move: "d4",  freq:  4,book:[{move:"Bxd4",replies:[
				{move: "Bxg5",   freq:  3,book:[{move:"Qxg5",replies:[
					{move: "Qxf7+",   freq:  1,book:[{move:"Kd8",replies:[
						{move: "Nf3",     freq:  1,book:[{move:"Qc1+",replies:[
							{move: "Ke2",  freq:  1,book:[{move:"Bxb2"}]},
						]}]},
					]}]},
				]}]},
			]}]},
		]}]},
		{move: "Qe2",     freq:  74},
	]}]},
	{move: "Bc4",  freq:   8353,book:[bish_rus]},
	{move: "Nf3",  freq:   7481,book:[{move:"d5",replies:[
		{move: "d4",    freq:   862,book:[{move:"Nc6"}]},
		{move: "d3",    freq:   674,book:[{move:"Nf6"}]},
		{move: "Nc3",   freq:   507,book:[{move:"Bc5"}]},
		{move: "Qe2",   freq:   309,book:[{move:"Be7"}]},
		{move: "Be2",   freq:   269,book:[{move:"Bd6"}]},
	]}]},
	{move: "Nxf7",  freq:  4721,book:[{move:"Qe7",replies:[
		{move: "Qe2",   freq:  570,book:[{move:"Kxf7"}]},
		{move: "Nxh8",  freq:  274,book:[{move:"Nc3+"}]},
		{move: "Be2",   freq:  128,book:[{move:"Qxf7"}]},
		{move: "Qf3",   freq:   48},
	]}]},
	{move: "Nc3",   freq:  4001,book:[{move:"Nxc3"}]},
	{move: "Bd3",   freq:  1679,book:[{move:"d5"}]},
]}

const mirror_staff = {move:"Nxe4",replies:[
	{move: "Nxe5", freq:  136808,book:[bish_rus]},
	{move: "O-O", freq:    69782,book:[{move:"d5",replies:[
		{move: "Bb3",    freq: 37179,book:[{move:"Nc6",replies:[
			{move: "Re1",    freq:  7890,book:[{move:"Bc5",replies:[
				{move: "d4",     freq:  6692,book:[{move:"Nxd4"}]},
				{move: "Re2",    freq:  2553,book:[{move:"Nxf2"}]},
				{move: "d3",     freq:  2027,book:[{move:"Nxf2"}]},
				{move: "Rf1",    freq:   593,book:[{move:"Nxf2"}]},
			]}]},
			{move: "d3",     freq:  3637,book:[{move:"Nc5"}]},
			{move: "d4",     freq:  2672,book:[{move:"exd4"}]},
			{move: "c3",     freq:   374},
			{move: "Ba4",    freq:   284},
			{move: "Nc3",    freq:   248},
		]}]},
		{move: "Re1",    freq:  8982},
		{move: "Bb5+",   freq:  2714},
		{move: "Bd3",    freq:  2331},
	]}]},
	{move: "Qe2", freq:    61500,book:[{move:"d5",replies:[
		{move: "Bb3",    freq:  22319,book:[{move:"Nc6",replies:[
			{move: "d3",     freq:   7217,book:[{move:"Nc5",replies:[
				{move: "Nxe5",   freq:   3113,book:[{move:"Nd4",replies:[
					{move: "Qe3",    freq:    390,book:[{move:"Nc5xb3",replies:[
						{move: "Nc6+",    freq:    240,book:[{move:"Be7",replies:[
							{move: "Nxd8",    freq:    121,book:[{move:"Nxc2+",replies:[
								{move: "Ke2",    freq:   75,book:[{move:"Nxe3"}]},
								{move: "Kd1",    freq:   34,book:[{move:"Nxe3+"}]},
								{move: "Kf1",    freq:   11,book:[{move:"Nxe3+"}]},
							]}]},
							{move: "Nxd4",    freq:     74,book:[{move:"Nxa1"}]},
						]}]},
						{move: "axb3",    freq:     69,book:[{move:"Nxc2+"}]},
						{move: "Nf3+",    freq:     17,book:[{move:"Be7"}]},
					]}]},
					{move: "Qh5",    freq:    141,book:[{move:"Be6"}]},
					{move: "Qd1",    freq:     70,book:[{move:"Bd6"}]},
					{move: "Qd2",    freq:     66,book:[{move:"Nc5xb3",replies:[
						{move: "axb3",   freq:   45,book:[{move:"Bb4",replies:[
							{move: "c3",    freq:    4,book:[{move:"Nxb3"}]},
							{move: "Nc3",    freq:   1,book:[{move:"f6"}]},
						]}]},
					]}]},
					{move: "Nc6+",   freq:     56,book:[{move:"Nxe2"}]},
					{move: "Nxf7+",  freq:     39,book:[{move:"Nxe2"}]},
				]}]},
				{move: "O-O",    freq:    171},
			]}]},
			{move: "O-O",    freq:    456},
			{move: "Ba4",    freq:    286},
		]}]},
		{move: "Nxe5",   freq:  13197,book:[{move:"Bc5"}]},
		{move: "d3",     freq:   5817,book:[{move:"Nc5"}]},
		{move: "Bd3",    freq:   5619,book:[{move:"Bd6"}]},
		{move: "Bb5+",   freq:   3368,book:[{move:"c6"}]},
		{move: "O-O",    freq:   1002},
	]}]},
	{move: "d3",  freq:    41869,book:[{move:"Nc5",replies:[
		{move: "Nxe5",   freq:  1403,book:[{move:"d5",replies:[
			{move: "Bb3",    freq:   533,book:[{move:"Bd6"}]},
			{move: "Qf3",    freq:   345,book:[{move:"Qe7",replies:[
				{move: "Qxd5",    freq:   69,book:[{move:"Be6",replies:[
					{move: "Qd4",    freq:   32,book:[{move:"Bxc4",replies:[
						{move: "dxc4",    freq:    26,book:[{move:"Nc6"}]},
					]}]},
					{move: "Qxb7",    freq:  15,book:[{move:"Nxb7"}]},
					{move: "Qf3",    freq:    9},
				]}]},
				{move: "Bxd5",    freq:   28},
				{move: "O-O",    freq:    13},
			]}]},
			{move: "Bb5+",   freq:   116},
			{move: "Nxf7",   freq:    91},
			{move: "Qe2",    freq:    72},
		]}]},
		{move: "O-O",    freq:   306},
		{move: "Ng5",    freq:   281},
		{move: "Nc3",    freq:   128},
	]}]},
	{move: "Nc3", freq:    36888,book:[{move:"Nxc3",replies:[
		{move: "dxc3",    freq:  24897,book:[{move:"f6",replies:[
			{move: "Nh4",    freq:  2725,book:[{move:"g6",replies:[
				{move: "f4",     freq:  1518,book:[{move:"Qe7",replies:[
					{move: "f5",     freq:   565,book:[{move:"Qg7",replies:[
						{move: "O-O",    freq:   243,book:[{move:"Nc6"}]},
						{move: "fxg6",   freq:   117,book:[{move:"hxg6"}]},
						{move: "Qg4",    freq:    49,book:[{move:"Nc6",replies:[
							{move: "fxg6",   freq:   4,book:[{move:"d5",replies:[
								{move: "Qh5",    freq:   3,book:[{move:"dxc4",replies:[
									{move: "gxh7+",    freq:   2,book:[{move:"Qf7"}]},
								]}]},
							]}]},
							{move: "O-O",    freq:   3},
						]}]},
						{move: "Be3",    freq:    24,book:[{move:"c6"}]},
					]}]},
					{move: "O-O",    freq:   201,book:[{move:"Qc5+"}]},
				]}]},
				{move: "O-O",    freq:   524,book:[{move:"c6"}]},
			]}]},
			{move: "O-O",    freq:  2349,book:[{move:"Qe7"}]},
			{move: "Nxe5",   freq:   712,book:[{move:"Qe7"}]},
			{move: "Qd5",    freq:   326,book:[{move:"Qe7"}]},
			{move: "Be3",    freq:   162,book:[{move:"Qe7"}]},
		]}]},
		{move: "bxc3",    freq:    989,book:[{move:"d5"}]},
	]}]},
	{move: "Bxf7+", freq:  21756,book:[{move:"Kxf7"}]},
	{move: "d4",    freq:  15970},
	{move: "c3",    freq:   1819},
]}

const pass_russ = [
	{move: "Be2",     freq:  112138,book:[{move:"d5",replies:[
		{move: "exd5",     freq:  24504,book:[{move:"Nxd5"}]},
		{move: "O-O",      freq:   9629},
		{move: "Nb1d2",    freq:   5937},
		{move: "Bg5",      freq:   2264},
		{move: "Nc3",      freq:   2087},
	]}]},
	{move: "Nc3",     freq:   77860,book:[{move:"d5",replies:[
		{move: "exd5",     freq:  28218,book:[{move:"Nxd5",replies:[
			{move: "Nxd5",     freq:  16818,book:[{move:"Qxd5",replies:[
				{move: "Be2",      freq:  16463,book:[{move:"Bf5",replies:[
					{move: "O-O",      freq:   3767,book:[{move:"O-O-O"}]},
					{move: "Be3",      freq:    540},
					{move: "c4",       freq:    230},
				]}]},
				{move: "Be3",      freq:   5100},
				{move: "c4",       freq:   3628},
			]}]},
			{move: "Bd2",      freq:   5656,book:[{move:"f6"}]},
			{move: "Be2",      freq:   3173,book:[{move:"Nxc3"}]},
		]}]},
		{move: "Bg5",      freq:  12419,book:[{move:"Bb4"}]},
		{move: "Be2",      freq:   7448,book:[{move:"d4"}]},
		{move: "Be3",      freq:   3029},
	]}]},
	{move: "Bg5",     freq:   69835,book:[{move:"d5",replies:[
		{move: "exd5",      freq:  1586,book:[{move:"Qxd5",replies:[
			{move: "Bxf6",      freq:  782,book:[{move:"gxf6"}]},
			{move: "Nc3",       freq:  540,book:[{move:"Bb4",replies:[
				{move: "Bxf6",  freq:  488,book:[{move:"gxf6"}]},
				{move: "Be2",   freq:  179,book:[{move:"e4",replies:[
					{move: "dxe4",   freq:  12,book:[{move:"Qxd1+",reolies:[
						{move:"Rxd1",book:[{move:"Bxc3+",replies:[
							{move: "bxc3",   freq:  3,book:[{move:"Nxe4",replies:[
								{move: "Bd2",    freq:   4,book:[{move:"Bd7"}]},
								{move: "O-O",    freq:   3,book:[{move:"Nxc3"}]},
							]}]},
						]}]}
					]}]},
					{move: "Bxf6",   freq:  11},
					{move: "O-O",    freq:   4},
				]}]},
				{move: "Bd2",   freq:  128},
				{move: "a3",    freq:   88},
				{move: "Qd2",   freq:   79},
			]}]},
			{move: "Be2",       freq:   76},
		]}]},
		{move: "Bxf6",      freq:  1416,book:[{move:"gxf6",replies:[
			{move: "exd5",     freq:    555,book:[{move:"Qxd5",replies:[
				{move: "Nc3",      freq:    869,book:[{move:"Qc5",replies:[
					{move: "Ne4",      freq:   38,book:[{move:"Qe7"}]},
					{move: "Be2",      freq:   23},
					{move: "Qd2",      freq:    9},
				]}]},
				{move: "Be2",      freq:    245},
				{move: "c4",       freq:     75},
			]}]},
			{move: "Nc3",      freq:    135},
			{move: "Be2",      freq:     51},
			{move: "Nb1d2",    freq:     41},
		]}]},
		{move: "Nc3",      freq:    480},
	]}]},
	{move: "c3",      freq:   41657,book:[{move:"d5"}]},
	{move: "g3",      freq:   40150,book:[{move:"d5"}]},
	{move: "h3",      freq:   19589,book:[{move:"d5"}]},
	{move: "Nb1d2",   freq:   16144,book:[{move:"d5"}]},
	{move: "c4",      freq:   15124,book:[{move:"Bc5"}]},
	{move: "Be3",     freq:   13725,book:[{move:"d5"}]},
	{move: "a3",      freq:   10339,book:[{move:"d5"}]},
]

const russian = {move:"Nf6",replies:[
	{move: "Nxe5",freq:1973637,book:[damiano_russian,{move:"d6",replies:[
		{move: "Nf3",  freq: 683975,book:[{move:"Nxe4",replies:[
			{move: "d4", freq:  197722,book:[{move:"d5"}]},
			{move: "Nc3", freq: 177118,book:[{move:"Nxc3",replies:[
				{move: "dxc3",  freq: 133081,book:[{move:"Be7"}]},
				{move: "bxc3",  freq:   5825},
			]}]},
			{move: "Qe2", freq: 152249,book:[{move:"Qe7"}]},
			{move: "d3",  freq:  70680,book:[{move:"Nf6"}]},
			{move: "Bc4", freq:  37988,book:[{move:"d5"}]},
			{move: "Bd3", freq:  17005},
			{move: "Be2", freq:  15898},
			{move: "c4",  freq:   7155},
		]}]},
		{move: "Nxf7", freq:  59249,book:[{move:"Kxf7"}]},
		{move: "Nc4",  freq:  27333,book:[{move:"Nxe4"}]},
		{move: "Nd3",  freq:  15248,book:[{move:"Nxe4"}]},
	]}]},
	{move: "Nc3",freq: 1722517,book:[{move:"Nc6",replies:four_knights}]},
	{move: "Bc4",freq: 1002941,book:[mirror_staff]},
	{move: "d4",freq:   462565,book:[{move:"Nxe4",replies:[
		{move: "dxe5",    freq: 82248,book:[{move:"Bc5",replies:[
			{move: "Be3",  freq:  12582,book:[{move:"Bxe3",replies:[
				{move: "fxe3",     freq:  11026,book:[{move:"d5",replies:[
					{move: "exd6",     freq:  1215,book:[{move:"Nc6",replies:[
						{move: "Bd3",  freq:   83,book:[{move:"Nxd6",replies:[
							{move: "O-O",  freq:  171,book:[{move:"O-O"}]},
							{move: "Nc3",  freq:   18},
						]}]},
						{move: "dxc7", freq:   36},
						{move: "Bb5",  freq:   22},
						{move: "Bc4",  freq:   11},
						{move: "Nc3",  freq:   10},
					]}]},
					{move: "Bd3",      freq:   852,book:[{move:"O-O"}]},
					{move: "Nc3",      freq:   135},
					{move: "Nb1d2",    freq:   134},
					{move: "c4",       freq:    68},
				]}]},
			]}]},
			{move: "Nd4",  freq:   2977,book:[{move:"Nxf2",replies:[
				{move: "Kxf2",  freq:  927,book:[{move:"Qh4+",replies:[
					{move: "g3",  freq:  608,book:[{move:"Qxd4+"}]},
					{move: "Ke3", freq:  229,book:[{move:"Bxd4+"}]},
					{move: "Ke2", freq:   53,book:[{move:"Bxd4"}]},
					{move: "Kf3", freq:   20,book:[{move:"d5"}]},
					{move: "Kg1", freq:    7,book:[{move:"Bxd4+",replies:[{move:"Qxd4",freq:1,book:[{move:"Qxd4+",replies:[{move: "Be3", freq: 1,book:[{move:"Qxe3#"}]}]}]}]}]},
				]}]},
			]}]},
			{move: "Bc4",  freq:   2107,book:[{move:"Nxf2"}]},
			{move: "Qd5",  freq:   1866,book:[{move:"Bxf2+"}]},
			{move: "Bd3",  freq:   1143,book:[{move:"Nxf2"}]},
		]}]},
		{move: "Bd3",     freq: 51645,book:[{move:"Nc6",replies:[
			{move: "Bxe4",   freq:  1252,book:[{move:"d5",replies:[
				{move: "Bd3",     freq:  358,book:[{move:"e4"}]},
				{move: "dxe5",    freq:  257,book:[{move:"dxe4"}]},
				{move: "Nxe5",    freq:  236,book:[{move:"dxe4"}]},
				{move: "Bxd5",    freq:  232,book:[{move:"Qxd5"}]},
				{move: "Bg5",     freq:   93,book:[{move:"Qd7"}]},
				{move: "Bxh7",    freq:   47,book:[{move:"Rxh7"}]},
			]}]},
			{move: "d5",     freq:   610},
			{move: "dxe5",   freq:   590},
			{move: "Nxe5",   freq:   346},
			{move: "O-O",    freq:   163},
		]}]},
		{move: "Nxe5",    freq: 45723,book:[dami_cube]},
		{move: "Qe2",     freq:  8772},
		{move: "Bc4",     freq:  5189},
	]}]},
	{move: "d3",freq:   364408,book:[{move:"Nc6",replies:pass_russ}]},
	{move: "c3",freq:    41274,book:[{move:"Nxe4"}]},
	{move: "Bd3", freq:  29731,book:[{move:"d5",replies:[
			{move: "exd5",     freq:   1703,book:[{move:"e4",replies:[
				{move: "Qe2",      freq:   527,book:[{move:"Qe7",replies:[
					{move: "Bb5+",      freq:  256,book:[{move:"c6",replies:[
						{move: "dxc6",    freq:    200,book:[{move:"bxc6",replies:[
							{move: "Nd4",      freq:  83,book:[{move:"cxb5",replies:[
								{move: "Qxb5+",      freq:   50,book:[{move:"Bd7",replies:[
									{move: "Qb7",      freq:   12,book:[{move:"Qe5",replies:[
										{move: "Qxa8",      freq:   1,book:[{move:"Bc5",replies:[
											{move: "c3",       freq:    2,book:[{move:"Qc7"}]},
											{move: "Nb3",      freq:    1,book:[{move:"Bb6"}]},
											{move: "Ne2",      freq:    1,book:[{move:"Bc6"}]},
											{move: "Nc3",      freq:    1,book:[{move:"Bxd4"}]},
											{move: "Na3",      freq:    1,book:[{move:"Bxd4"}]},
											{move: "Qb7",      freq:    1,book:[{move:"Bxd4"}]},
											{move: "Nf5",      freq:    1,book:[{move:"O-O"}]},
											{move: "d3",       freq:    1,book:[{move:"exd3+"}]},
											{move: "a4",       freq:    1,book:[{move:"Bxd4"}]},
											{move: "f4",       freq:    1,book:[{move:"exf3+"}]},
											{move: "f3",       freq:    1,book:[{move:"Bxd4"}]},
										]}]},
									]}]},
								]}]},
								{move: "Nxb5",      freq:    24,book:[{move:"Nc6"}]},
							]}]},
							{move: "Bxc6+",    freq:  30,book:[{move:"Nxc6"}]},
							{move: "O-O",      freq:  24,book:[{move:"cxb5"}]},
							{move: "Ba4",      freq:  20,book:[{move:"exf3"}]},
							{move: "Bc4",      freq:  14,book:[{move:"exf3"}]},
						]}]},
						{move: "d6",      freq:     10,book:[{move:"Qxd6"}]},
					]}]},
					{move: "d6",        freq:   27,book:[{move:"cxd6"}]},
					{move: "Bxe4",      freq:   22,book:[{move:"Qxe4"}]},
					{move: "O-O",      freq:    20,book:[{move:"exf3"}]},
				]}]},
				{move: "Bb5+",     freq:   242,book:[{move:"c6"}]},
				{move: "Bxe4",     freq:   138,book:[{move:"Nxe4"}]},
				{move: "O-O",      freq:    21,book:[{move:"exd3"}]},
			]}]},
			{move: "Qe2",      freq:   1007},
			{move: "Nxe5",     freq:    862},
			{move: "Nc3",      freq:    515},
			{move: "O-O",      freq:    243},
			{move: "c3",       freq:    117},
	]}]},
	{move: "Bb5", freq:  21981,book:[{move:"Nxe4"}]},
	{move: "Be2", freq:  10065,book:[{move:"Nc6"}]},
	{move: "Qe2", freq:   9156,book:[{move:"Nc6"}]},
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
					{move: "Kf1",  req:  40,book:[{move:"c6",replies:[
						{move: "d3",   freq:  12,book:[{move:"a5",replies:[
							{move: "Be3",   freq:   4,book:[{move:"b5",replies:[
								{move: "a4",    freq:   6,book:[{move:"Nxb3",replies:[
									{move: "cxb3",    freq:   2,book:[{move:"Bxe3",replies:[
										{move: "fxe3",    freq:   2,book:[{move:"b4"}]},
									]}]},
								]}]},
								{move: "a3",    freq:   1},
							]}]},
							{move: "a4",    freq:   2},
							{move: "Na4",   freq:   2},
						]}]},
						{move: "Ng1e2",freq:   3},
						{move: "h3",   freq:   2},
					]}]},
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
	{move: "Nf3",  freq:44032,book:[{move:"Nf6",replies:[
		{move: "d3",   freq:  632642,book:[{move:"d6",replies:[
			{move: "Bg5",  freq:   119935,book:[{move:"h6"}]},
			{move: "h3",  freq:     88264,book:[{move:"h6"}]},
			{move: "Be3",  freq:    38668},
			{move: "O-O",  freq:    37006},
		]}]},
		{move: "O-O",  freq:  363529,book:[{move:"d6"}]},
		{move: "h3",  freq:    87940},
		{move: "Ng5",  freq:   77312},
		{move: "a3",  freq:    52310},
	]}]},
	{move: "a3",   freq:14611,book:[{move:"Qg5"}]},
	{move: "Ng1e2",freq:10121,book:[{move:"Qh4"}]},
]}

const passive_vienna = {move: "Nf6",replies:[
	{move: "Nf3",   freq: 47833,book:[{move:"d5"}]},
	{move: "f4",    freq: 32394,book:[{move:"exf4",replies:[
		{move: "Bxf4",  freq: 6962,book:[{move:"d5",replies:[
			{move: "e5",    freq: 676,book:[{move:"d4",replies:[
				{move: "exf6",   freq: 116,book:[{move:"dxc3",replies:[
					{move: "fxg7",    freq:  53,book:[{move:"Bxg7",replies:[
						{move: "b3",    freq:  34,book:[{move:"O-O"}]},
						{move: "Qe2+",  freq:  12,book:[{move:"Be6"}]},
						{move: "bxc3",  freq:   3,book:[{move:"Bxc3+"}]},
					]}]},
					{move: "bxc3",    freq:  43,book:[{move:"Qxf6"}]},
					{move: "Qe20",    freq:  15},
				]}]},
				{move: "Nc3e2",  freq:  25},
				{move: "Ne4",    freq:  21},
				{move: "Nb5",    freq:  14},
			]}]},
			{move: "exd5",  freq: 387,book:[{move:"Nxd5",replies:[
				{move: "Nxd5",   freq: 308,book:[{move:"Qxd5"}]},
				{move: "Bd2",    freq:  27},
				{move: "Qe2+",   freq:  21},
				{move: "Nf3",    freq:  13},
			]}]},
			{move: "Nf3",   freq: 325},
			{move: "Bg3",   freq:  57},
			{move: "Nb5",   freq:  41},
			{move: "Nxd5",  freq:  40},
		]}]},
		{move: "Nf3",   freq: 1908},
	]}]},
	{move: "Be3",   freq: 23760},
	{move: "Bg5",   freq: 21541},
	{move: "Bd2",   freq: 12103},
	{move: "g3",    freq:  9118},
	{move: "Be2",   freq:  6756},
	{move: "h3",    freq:  4375},
	{move: "Ng1e2", freq:  4024},
]}

const vienna = {move:"Nc6",replies:[
	{move: "Nf3",   freq: 730593,book:[{move:"Nf6",replies:four_knights}]},
	{move: "Bc4",   freq: 551035,book:[copy_cat]},
	{move: "f4",   freq:  343951,book:[{move:"exf4",replies:[
		{move: "Nf3",   freq:  127438,book:[{move:"g5",replies:[
			{move: "d4",    freq:   13916,book:[{move:"g4",replies:[
				{move: "Ne5",    freq:   1846,book:[{move:"Qh4+"}]},
				{move: "Bc4",    freq:   1620,book:[{move:"gxf3"}]},
				{move: "d5",     freq:    799,book:[{move:"gxf3"}]},
				{move: "Bxf4",   freq:    672,book:[{move:"gxf3"}]},
				{move: "Ng1",    freq:    392,book:[{move:"Qh4+"}]},
				{move: "Nd2",    freq:    123,book:[{move:"Qh4+"}]},
			]}]},
			{move: "Bc4",   freq:   12170,book:[{move:"g4",replies:[
				{move: "O-O",    freq:   3684,book:[{move:"gxf3",replies:[
					{move: "Qxf3",     freq:  3532,book:[{move:"Qh4",replies:[
						{move: "Nd5",     freq:   106,book:[{move:"Bc5+",replies:[
							{move: "Kh1",   freq:    58,book:[{move:"Ne5",replies:[
								{move: "Qc3",   freq:  40,book:[{move:"Ng4"}]},
								{move: "Qb3",   freq:  30,book:[{move:"Ng4"}]},
								{move: "Qxf4",  freq:  26,book:[{move:"Qxf4",replies:[
									{move: "Rxf4",   freq:  27,book:[{move:"Kd8"}]},
								]}]},
								{move: "Nxc7+", freq:  11,book:[{move:"Kd8",replies:[
									{move: "Qc3",   freq:  9,book:[{move:"Ng4",replies:[
										{move: "h3",  freq:  8,book:[{move:"Nf2+",replies:[
											{move: "Kh2",   freq: 4,book:[{move:"Nf6",replies:[
												{move: "d4",   freq: 2,book:[{move:"Ng6g4+",replies:[
													{move: "Kg1",   freq: 1,book:[{move:"Bxd4",replies:[
														{move: "Qxd4",  freq: 1,book:[{move:"Nxh3+",replies:[
															{move: "gxh3",   freq: 1,book:[{move:"Qg3+",replies:[
																{move: "Kh1",   freq:  1,book:[{move:"Qh2#"}]},
															]}]},
														]}]},
													]}]},
												]}]},
											]}]},
											{move: "Rxf2",  freq: 3,book:[{move:"Qxf2"}]},
										]}]},
									]}]},
								]}]},
							]}]},
						]}]},
						{move: "g3",      freq:    86},
						{move: "d3",      freq:    41},
						{move: "d4",      freq:    28},
						{move: "Nb5",     freq:    20},
					]}]},
					{move: "Bxf7+",    freq:   179,book:[{move:"Kxf7"}]},
					{move: "d4",       freq:   140,book:[{move:"Bg7"}]},
					{move: "Rxf3",     freq:    83},
				]}]},
				{move: "Ng1",    freq:    620,book:[{move:"Qh4+"}]},
				{move: "d4",     freq:    216},
			]}]},
			{move: "h4",    freq:    6860},
			{move: "h3",    freq:    2334},
			{move: "Bb5",   freq:    1464},
			{move: "g3",    freq:     948},
		]}]},
		{move: "d4",    freq:   16170,book:[{move:"Qh4+"}]},
		{move: "Bc4",   freq:    3067},
		{move: "d3",    freq:    1668},
	]}]},
	{move: "d3",   freq:  147692,book:[passive_vienna]},
	{move: "g3",   freq:  112458,book:[{move:"Bc5",replies:[
		{move: "Bg2",   freq: 35115,book:[{move:"Qf6",replies:[
			{move: "Nf3",    freq:  1403,book:[{move:"Ng8e7",replies:[
				{move: "O-O",    freq:  445,book:[{move:"d6"}]},
				{move: "d3",     freq:  144},
				{move: "dh",     freq:   38},
			]}]},
			{move: "Qf3",    freq:   285,book:[{move:"Nd4",replies:[
				{move: "Qxf6",    freq:   136,book:[{move:"Nxf6"}]},
			]}]},
			{move: "Ng1e2",  freq:   273,book:[{move:"Qxf2#"}]},
			{move: "Qe2",    freq:   103},
			{move: "Nh3",    freq:    94},
			{move: "d3",     freq:    85,book:[{move:"Qxf2#"}]},
			{move: "f3",     freq:    52},
			{move: "h3",     freq:    15,book:[{move:"Qxf2#"}]},
		]}]},
		{move: "Ng1e2", freq:   242},
		{move: "d3",    freq:   237},
	]}]},
	{move: "Bb5",   freq:  55740,book:[{move:"a6",replies:[
		{move: "Bxc6",  freq:  4713,book:[{move:"dxc6"}]},
		{move: "Ba4",   freq:  2068,book:[{move:"Bc5"}]},
		{move: "Bc4",   freq:   328},
	]}]},
	{move: "d4",    freq:  22743,book:[{move:"Nxd4"}]},
	{move: "a3",    freq:  21340,book:[{move:"Nf6"}]},
	{move: "Ng1e2", freq:  15420,book:[{move:"Bc5"}]},
	{move: "b3",    freq:  14453,book:[{move:"Nf6"}]},
]}

const stanley = [
	{move: "Bg5",    freq:  2357,book:[{move:"h6"}]},
	{move: "h3",    freq:   1453,book:[{move:"O-O"}]},
	{move: "O-O",    freq:  1366,book:[{move:"a5"}]},
	{move: "Be3",    freq:   683},
	{move: "a3",    freq:    563},
	{move: "Ng5",    freq:   404},
]

const napoleon = {move:"c6",replies:[
	{move: "d3",    freq:   11739,book:[{move:"d5",replies:[
		{move: "exd5",   freq:    7760,book:[{move:"cxd5"}]},
		{move: "Bb3",    freq:     995},
	]}]},
	{move: "Nc3",   freq:    5899,book:[{move:"b5"}]},
	{move: "h3",    freq:    3031,book:[{move:"d5"}]},
	{move: "Nh3",   freq:    2320},
	{move: "g4",    freq:    1763},
	{move: "Ne2",   freq:    1509},
	{move: "c3",    freq:    1465},
	{move: "Qb3",   freq:    1297},
]}

const thisshit = {move:"c6",replies:[
	{move: "Nf3",   freq: 35779,book:[{move:"d5",replies:[
		{move: "exd5",   freq: 21943,book:[{move:"cxd5",replies:[
			{move: "Bb3",    freq:   10949,book:[{move:"a5",replies:[
				{move: "a4",    freq:   47,book:[{move:"Nc6"}]},
				{move: "Nxe5",    freq: 33,book:[{move:"a4",replies:[
					{move: "Bxa4+",  freq:   12,book:[{move:"Rxa4"}]},
					{move: "Bxd5",   freq:   11,book:[{move:"Qxd5"}]},
					{move: "Qe2",    freq:    6,book:[{move:"Be7"}]},
				]}]},
				{move: "a3",    freq:   32,book:[{move:"a4",replies:[
					{move: "Ba2",    freq:   22,book:[{move:"Nc6"}]},
				]}]},
				{move: "c3",    freq:   18,book:[{move:"Bd6"}]},
				{move: "Ba4+",    freq:  8,book:[{move:"Bd7"}]},
			]}]},
			{move: "Bb5+",    freq:  10357,book:[{move:"Bd7",replies:[
				{move: "Bxd7+",  freq:  7314,book:[{move:"Nb8xd7",replies:[
					{move: "O-O",     freq:  5057,book:[{move:"Bd6"}]},
					{move: "Bg5",     freq:  1733,book:[{move:"Qb6"}]},
					{move: "Qe2",     freq:   469,book:[{move:"Bd6"}]},
					{move: "Nc3",     freq:   402,book:[{move:"Bb4"}]},
				]}]},
				{move: "a4",     freq:   385},
				{move: "Nc3",    freq:   373},
			]}]},
		]}]},
		{move: "Bb3",    freq:  9135,book:[{move:"a5",replies:[
			{move: "a4",     freq:   456,book:[{move:"Bb4+",replies:[
				{move: "c3",   freq:   250,book:[{move:"Bd6"}]},
				{move: "Bd2",  freq:    88,book:[{move:"O-O"}]},
			]}]},
			{move: "a3",     freq:   408,book:[{move:"Bd6"}]},
			{move: "Nc3",    freq:    60,book:[{move:"Bb4"}]},
			{move: "c3",     freq:    51,book:[{move:"Bd6"}]},
			{move: "exd4",   freq:    26},
			{move: "Nxe5",   freq:    13},
		]}]},
	]}]},
	{move: "Bg5",   freq: 23160,book:[{move:"d5",replies:[
		{move: "exd5",    freq:  7856,book:[{move:"cxd5",replies:[
			{move: "Bb3",    freq:  3529,book:[{move:"Nc6"}]},
			{move: "Bb5+",    freq: 2228,book:[{move:"Nc6"}]},
			{move: "Bxf6",    freq: 1949,book:[{move:"gxf6"}]},
		]}]},
		{move: "Bxf6",    freq:  1685,book:[{move:"gxf6"}]},
		{move: "Bb3",     freq:   202,book:[{move:"dxe4"}]},
	]}]},
	{move: "Nc3",   freq: 18481,book:[{move:"d5",replies:[
		{move: "exd5",    freq:  40610,book:[{move:"cxd5",replies:[
			{move: "Bb3",     freq: 27532,book:[{move:"Bb4",replies:[
				{move: "Bd2",   freq:  6396,book:[{move:"Nc6",replies:[
					{move: "Ng1e2", freq:   477,book:[{move:"h6"}]},
					{move: "a3",    freq:   394,book:[{move:"Ba5"}]},
					{move: "Nf3",   freq:   243,book:[{move:"h6"}]},
					{move: "h3",    freq:    76,book:[{move:"Be6"}]},
					{move: "Qf3",   freq:    39},
					{move: "Nc3e2", freq:    26},
					{move: "Qe2",   freq:    24},
					{move: "Ba4",   freq:    13},
				]}]},
				{move: "Ne2",   freq:   632,book:[{move:"d4"}]},
				{move: "Bg5",   freq:   579,book:[{move:"d4"}]},
				{move: "a3",    freq:   515,book:[{move:"Ba5"}]},
				{move: "Nf3",   freq:   133,book:[{move:"d4"}]},
			]}]},
			{move: "Bb5+",    freq: 11886,book:[{move:"Nc6"}]},
		]}]},
		{move: "Bb3",    freq:    3375,book:[{move:"dxe4"}]},
	]}]},
	{move: "a3",    freq: 12896,book:[{move:"d5",replies:[
		{move: "exd5",  freq: 11159,book:[{move:"cxd5",replies:[
			{move: "Ba2",   freq:  7694,book:[{move:"h6",replies:[
				{move: "h3",    freq:   252,book:[{move:"Nc6",replies:[
					{move: "Nf3",   freq:   180,book:[{move:"Bd6"}]},
					{move: "Ne2",   freq:    92,book:[{move:"Bc5"}]},
					{move: "Nc3",   freq:    52,book:[{move:"Bc5"}]},
					{move: "c3",    freq:    38,book:[{move:"Bf5"}]},
				]}]},
				{move: "Nf3",   freq:   126,book:[{move:"Bd6"}]},
				{move: "Ne2",   freq:   109,book:[{move:"Bc5"}]},
				{move: "Nc3",   freq:    59,book:[{move:"Nc6"}]},
				{move: "Qf3",   freq:    11},
			]}]},
			{move: "Bb3",   freq:  2077,book:[{move:"h6"}]},
			{move: "Bb5+",  freq:  1162,book:[{move:"Nc6"}]},
		]}]},
		{move: "Ba2",   freq:   269,book:[{move:"dxe4"}]},
		{move: "Bb3",   freq:    51},
	]}]},
	{move: "c3",    freq:  7442,book:[{move:"d5"}]},
	{move: "h3",    freq:  6931,book:[{move:"d5"}]},
	{move: "f4",    freq:  5711,book:[{move:"exf4"}]},
	{move: "Bb3",   freq:  4872,book:[{move:"a5"}]},
	{move: "Ne2",   freq:  4607,book:[{move:"d5"}]},
	{move: "a4",    freq:  2858,book:[{move:"d5"}]},
	{move: "Qf3",   freq:  1368},
	{move: "Be3",   freq:  1332},
]}

const opebish = {move:"Nf6",replies:[
	{move: "d3",  freq:  1048456,book:[thisshit]},//c6
	{move: "Nf3",  freq: 569414,book:[mirror_staff]},
	{move: "Nc3",  freq: 533210,book:[{move:"Bc5",replies:[
		{move: "d3",   freq: 147398,book:[{move:"c6",replies:[
			{move: "Bg5",    freq:  5434,book:[{move:"b5"}]},
			{move: "Nf3",    freq:  4817,book:[{move:"d6",replies:stanley}]},
			{move: "f4",     freq:  2819,book:[{move:"exf4"}]},
			{move: "h3",     freq:  2644,book:[{move:"d5",replies:[
				{move: "exd5",     freq: 2661,book:[{move:"cxd5"}]},
				{move: "Bb3",     freq:   157},
			]}]},	
			{move: "a3",     freq:  1633},
			{move: "Be3",    freq:  1543},
			{move: "Ng1e2",  freq:  1251},
			{move: "Qf3",    freq:   670},
			{move: "Bb3",    freq:   320},
		]}]},
		{move: "Nf3",  freq: 104638,book:[{move:"d6",replies:[
			{move: "d3",   freq:  33936,book:[{move:"c6",replies:stanley}]},
			{move: "O-O",  freq:  33683,book:[{move:"O-O"}]},
			{move: "h3",   freq:  30003,book:[{move:"O-O"}]},
			{move: "d4",   freq:  10752,book:[{move:"exd4"}]},
			{move: "Ng5",  freq:   7779},
		]}]},
		{move: "h3",   freq:  40732,book:[{move:"O-O"}]},
		{move: "f4",   freq:  15674},
		{move: "Ng1e2",freq:  11012},
	]}]},
	{move: "d4",   freq: 257141,book:[{move:"exd4",replies:[
		{move: "Nf3",   freq: 104460,book:[{move:"Bb4+",replies:[
			{move: "c3",   freq:   9230,book:[{move:"dxc3",replies:[
				{move: "bxc3",   freq:  6432,book:[{move:"d5",replies:[
					{move: "exd5",   freq:   349,book:[{move:"Bd6",replies:[
						{move: "O-O",   freq:   302,book:[{move:"O-O",replies:[
							{move: "Bg5",   freq:   247,book:[{move:"Bg4",replies:[
								{move: "Nb1d2",  freq:    53,book:[{move:"Nb8d7"}]},
								{move: "h3",     freq:    25,book:[{move:"Bh5"}]},
								{move: "Qd3",    freq:    13},
							]}]},
							{move: "h3",    freq:    51},
							{move: "Re1",   freq:    19},
							{move: "Bb3",   freq:    19},
						]}]},
						{move: "Qe2+",  freq:    33},
						{move: "Bg5",   freq:    19},
					]}]},
					{move: "cxb4",   freq:    51,book:[{move:"dxc4",replies:[
						{move: "Qxd8+",   freq:   50,book:[{move:"Kxd8"}]},
					]}]},
				]}]},
				{move: "O-O",   freq:   1919},
				{move: "Nxc3",   freq:  1262},
				{move: "Bxf7+",   freq:  515},
			]}]},
			{move: "Bd2",   freq:  1259},
		]}]},
		{move: "e5",   freq:   41468},
		{move: "Qxd4",   freq: 15496},
	]}]},
	{move: "Qf3",   freq:152724,book:[napoleon]},
	{move: "Bxf7+", freq: 45476,book:[{move:"Kxf7"}]},
	{move: "c3", freq:    18531,book:[{move:"Nxe4"}]},
]}

const regular = {move: "e5",replies:[
	{move: "Nf3", freq: 43972247,book:[russian,gundam]},
	{move: "Bc4", freq:  6438338,book:[opebish]},
	{move: "f4", freq:   5255846,book:[falkbeer,kings_gambit]},
	{move: "d4", freq:   4159531,book:[danish]},
	{move: "Nc3", freq:  3871880,book:[vienna]},
	{move: "d3", freq:   1293745,book:[{move:"Nc6",replies:[
		{move: "Nf3",   freq:  168375,book:[{move:"Nf6",replies:pass_russ}]},
		{move: "Nc3",   freq:  126728,book:[passive_vienna]},
		{move: "f4",    freq:   91481},
		{move: "c3",    freq:   70032},
		{move: "Be3",   freq:   34739},
		{move: "Nd2",   freq:   32083},
		{move: "Be2",   freq:   31327},
		{move: "c4",    freq:   23469},
	]}]},
	{move: "Qh5", freq:   565421,book:[{move:"Nf6",replies:[
		{move: "Qxe5+", freq:  59573,book:[{move:"Be7",replies:[
			{move: "d3", freq:  16218,book:[{move:"Nc6",replies:[
				{move: "Qg3", freq:  5497,book:[{move:"d5",replies:[
					{move: "e5",  freq: 186,book:[{move:"Ng4",replies:[
						{move: "Nf3",freq: 22,book:[{move: "Nd4",replies:[
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
						{move: "h3",freq:   9,book:[{move:"Bh4",replies:[
							{move: "Qf3",freq: 1,book:[{move:"Nxf2",replies:[
								{move: "Rh2",freq: 1,book:[{move:"Nxd3"}]},
							]}]},
							{move: "Qf4",freq: 1,book:[{move:"g5"}]},
						]}]},
						{move: "f4",freq:   6},
						{move: "d4",freq:   4},
						{move: "Bf4",freq:  4},
						{move: "Be2",freq:  2,book:[{move:"Bh4"}]},
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
	{move: "Qf3", freq:   343339,book:[{move:"Nf6",replies:[
		{move: "Bc4", freq:   77479,book:[napoleon]},
		{move: "d3", freq:    20986},
		{move: "h3", freq:    14825},
	]}]},
	{move: "c4", freq:    246194},
	{move: "g3", freq:    166902},
	{move: "b3", freq:    117231},
	{move: "Be2", freq:    40294,book:[{move:"Nf6",replies:[//ahmed opening
		{move: "d3", freq:     6820,book:[{move:"d5",replies:[
			{move: "exd5", freq:  3862,book:[{move:"Nxd5"}]},
			{move: "Nf3", freq:   1398},
			{move: "Nd2", freq:   1014},
			{move: "f3", freq:     864},
			{move: "Bg5", freq:    679},
			{move: "Nc3", freq:    529},
		]}]},
		{move: "Bf3", freq:    2379},
		{move: "Nf3", freq:    1503},
		{move: "Nc3", freq:    1489},
	]}]},
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
		{move: "e3", freq:   10205,book:[{move:"O-O",replies:[
			{move: "Bd3", freq:   10507,book:[{move:"Nc6"}]},
			{move: "Be2", freq:    6527,book:[{move:"c5"}]},
			{move: "h4", freq:      924},
		]}]},
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
		{move: "Bh2",  freq: 511,book:[{move:"Bg7",replies:[
			{move: "Bd3", freq:   110,book:[{move:"O-O",replies:[
				{move: "c3",   freq: 17,book:[{move:"Nc6"}]},
				{move: "c4",   freq: 12},
				{move: "Nb1d2",freq: 12},
				{move: "O-O",  freq: 11},
			]}]},
			{move: "Be2", freq:    85,book:[{move:"O-O"}]},
			{move: "c4",  freq:    81,book:[{move:"O-O"}]},
			{move: "Bc4", freq:    72,book:[{move:"Nc6"}]},
			{move: "c3",  freq:    61},
			{move: "Nb1d2",  freq: 49},
			{move: "Nc3", freq:    15},
		]}]},
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

const reti_dutch = {move:"Nf6",replies:[
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
	{move: "Bg5", freq: 58400,book:[{move:"e6",replies:[
		{move: "e3",  freq:    18858,book:[{move:"h6"}]},
		{move: "Bxf6",  freq:  16468},
		{move: "Nb1d2",  freq: 11583},
		{move: "Nc3",  freq:    5520},
		{move: "c4",   freq:    2952},
	]}]},
	{move: "e3",  freq: 43848,book:[{move:"b6"}]},
	{move: "Nc3", freq: 25593},
	{move: "c3",  freq: 12231},
	{move: "h3",  freq:  7011},
	{move: "b3",  freq:  3629},
	{move: "Nb1d2",freq: 3401},
]}

const c4_dutch = {move:"Nf6",replies:[
	{move: "Nc3", freq: 461713,book:[dutch_c4_nc3]},
	{move: "Nf3", freq:  73874,book:[dutch_c4_nf3]},
	{move: "g3",  freq:  38932,book:[{move:"e6"}]},
	{move: "e3",  freq:  27874,book:[{move:"d6"}]},
	{move: "Bg5",  freq: 18218,book:[{move:"Ne4"}]},
	{move: "Bf4",  freq:  6739},
]};

const dutch = {move:"f5",replies:[
	{move: "c4", freq:  798445,book:[c4_dutch]},
	{move: "Nf3", freq: 404558,book:[reti_dutch]},
	{move: "Bf4", freq: 250999,book:[{move:"Nf6",replies:[
		{move: "e3",  freq: 115785,book:[dutch_london]},
		{move: "Nf3", freq:  37350,book:[{move:"d6",replies:[
			{move: "e3",  freq: 15044,book:[dutch_full_london]},
			{move: "h3",  freq:  2421},
		]}]},
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
			{move: "Bg5",  freq: 60237,book:[{move:"g6",replies:[
				{move: "Bxf6",  freq: 6037,book:[{move:"exf6"}]},
				{move: "f3",  freq:   3191,book:[{move:"d5"}]},
				{move: "h4",  freq:   1614},
				{move: "Bc4",  freq:   990},
				{move: "Qd2",  freq:   362},
			]}]},
			{move: "f3",   freq: 16700,book:[{move:"d5"}]},
			{move: "g4",   freq:  1748},
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

const georg_Qe2 = {move:"c5",replies:[
	{move: "c3", freq: 1520,book:[{move:"Nf6",replies:[
		{move: "O-O",  freq: 1126,book:[{move:"cxd4",replies:[
			{move: "cxd4", freq:  1468,book:[{move:"Be7"}]},
			{move: "Nxd4", freq:    14,book:[]},
		]}]},
		{move: "Bg5",  freq:  381,book:[]},
		{move: "e5",   freq:  322,book:[]},
		{move: "Nb1d2",freq:  184,book:[]},
		{move: "dxc5", freq:   70,book:[]},
		{move: "a3",   freq:   64,book:[]},
	]}]},
	{move: "dxc5", freq:552,book:[{move:"Bxc5"}]},
	{move: "O-O", freq: 200,book:[]},
	{move: "d5", freq:  114,book:[]},
	{move: "c4", freq:   50,book:[]},
	{move: "Be3", freq:  32,book:[]},
]}

const georg_deep_deep = [
	{move: "Nb1d2",   freq:  104,book:[{move:"h6",replies:[
		{move: "Bh4",   freq: 13,book:[{move:"cxd4",replies:[
			{move: "cxd4",  freq: 1,book:[{move:"O-O",replies:[
				{move: "Rc1",      freq:   5,book:[{move:"Nb8d7",replies:[
					{move: "Bb1", freq:  4,book:[{move:"Rc8"}]},
					{move: "h3",  freq:  4,book:[{move:"Qb6"}]},
					{move: "Qe2", freq:  3,book:[]},
					{move: "a3", freq:   2,book:[]},
					{move: "Nb3", freq:  2,book:[]},
				]}]},
				{move: "Bg3",      freq:   2,book:[{move:"Nh5"}]},
				{move: "Qe2",      freq:   1,book:[{move:"Qb6"}]},
				{move: "a4",       freq:   1,book:[{move:"Nc6"}]},
			]}]},
		]}]},
	]}]},
	{move: "e5",      freq:   11,book:[]},
	{move: "a4",      freq:    8,book:[]},
]

const georg_mainline_continues = {move:"e6",replies:[
	{move: "O-O",  freq:  29903,book:[{move:"c5",replies:[
		{move: "c3",   freq: 7937,book:[{move:"Nf6",replies:[
			{move: "Re1",   freq: 1886,book:[{move:"d6",replies:[
				{move: "Bg5",   freq:  115,book:[{move:"Be7",replies:georg_deep_deep}]},
				{move: "Nb1d2", freq:   66,book:[{move:"Be7"}]},
				{move: "a4",    freq:   34,book:[{move:"c4"}]},
				{move: "e5",    freq:   28,book:[{move:"dxe5"}]},
				{move: "Qe2",   freq:   12,book:[]},
				{move: "h3",    freq:   11,book:[]},
			]}]},
			{move: "e5",   freq:   754,book:[{move:"Nd5",replies:[
				{move: "Nb1d2",    freq:  346,book:[{move:"cxd4"}]},
				{move: "Bg5",    freq:    243,book:[{move:"Qc7"}]},
				{move: "Re1",    freq:    200,book:[{move:"cxd4"}]},
				{move: "a4",     freq:    115,book:[{move:"cxd4"}]},
				{move: "Be4",    freq:    111,book:[{move:"cxd4"}]},
				{move: "dxc5",   freq:    102,book:[{move:"Bxc5"}]},
				{move: "Be3",    freq:     85,book:[]},
				{move: "Bg5",    freq:     76,book:[]},
				{move: "a3",    freq:      67,book:[]},
			]}]},
			{move: "Bg5",   freq:  673,book:[{move:"Be7",replies:[
				{move: "Nb1d2",    freq:  167,book:[{move:"d6"}]},
				{move: "e5",       freq:   72,book:[{move:"Nd5"}]},
				{move: "Re1",      freq:   66,book:[{move:"d6",replies:georg_deep_deep}]},
				{move: "Bxf6",     freq:   60,book:[{move:"Bxf6"}]},
				{move: "dxc5",     freq:   23,book:[{move:"Nxe4"}]},
				{move: "Qe2",      freq:   10,book:[{move:"cxd4"}]},
			]}]},
			{move: "Qe2",   freq:  553,book:[{move:"cxd4"}]},
			{move: "Nb1d2", freq:  213,book:[{move:"d6"}]},
			{move: "Be3",   freq:   17,book:[]},
		]},{move:"c4",replies:[
			{move: "Bc2", freq: 2446,book:[{move: "d6",replies:[
			]},{move:"Nf6",replies:[
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
		{move: "dxc5", freq: 2612,book:[{move:"Bxc5",replies:[
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
		{move: "d5", freq:   1095,book:[{move:"c4",replies:[
			{move: "Be2",freq:  439,book:[{move:"Nf6",replies:[
				{move: "dxe6",freq:   119,book:[]},
				{move: "Bg5",freq:    75,book:[]},
			]}]},
			{move: "dxe6",freq:  86,book:[{move:"dxe6"}]},
		]}]},
		{move: "Re1", freq:   613,book:[{move:"cxd4",replies:[
			{move: "Nxd4",freq:  1,book:[{move:"Nc6"}]},
		]}]},
		{move: "Be3",freq:    428,book:[{move:"c4"}]},
		{move: "c4", freq:    377,book:[{move:"bxc4"}]},
		{move: "b3", freq:    193,book:[{move:"cxd4"}]},
	]}]},
	{move: "Qe2",  freq:   3821,book:[georg_Qe2]},
	{move: "c3",   freq:   3756,book:[{move:"Nf6",replies:[
		{move: "Qe2", freq:  698,book:[{move:"c5"}]},
		{move: "Bg5", freq:  481,book:[{move:"c5"}]},
		{move: "e5",  freq:  442,book:[{move:"Nd5"}]},
		{move: "Nb1d2", freq:434,book:[{move:"c5"}]},
		{move: "O-O",   freq:333,book:[{move:"Bxe4"}]},
		{move: "Qc2",   freq:127,book:[]},
		{move: "Be3",   freq: 68,book:[]},
	]}]},
	{move: "Be3",   freq:  2932,book:[{move:"d6",replies:[
		{move: "Nb1d2", freq:  195,book:[{move:"Nf6"}]},
		{move: "O-O",   freq:  146,book:[]},
		{move: "Nc3",   freq:   65,book:[]},
		{move: "c3",    freq:   45,book:[]},
		{move: "a3",    freq:   36,book:[]},
	]}]},
	{move: "Bf4",   freq:  1613,book:[{move:"c5"}]},
	{move: "a3",   freq:   1423,book:[{move:"c5"}]},
	{move: "a4",   freq:   1122,book:[{move:"c5"}]},
	{move: "Nb1d2", freq:   967,book:[]},
	{move: "Nc3",   freq:   914,book:[]},
]}

const georg_rainbow = {move:"b4",replies:[
	{move: "Nd5",  freq:  7923,book:[{move:"e6",replies:[
		{move: "Nf4",  freq:  3294,book:[{move:"Bxe4",replies:[
			{move: "Bd3",  freq:  1912,book:[{move:"Bxd3",replies:[
				{move: "Qxd3",  freq: 390,book:[{move:"Nf6",replies:[
					{move: "O-O",  freq:  174,book:[{move:"Be7",replies:[
						{move: "Re1",  freq:   37,book:[{move:"O-O"}]},
						{move: "Ne5",  freq:   24,book:[{move:"d6"}]},
						{move: "d5",   freq:   15,book:[{move:"Bd6"}]},
					]}]},
					{move: "Ne5",  freq:   28},
					{move: "Be3",  freq:   21},
					{move: "d5",   freq:   18},
					{move: "Bd2",  freq:   17},
				]}]},
				{move: "Nxd3",  freq:  43,book:[{move:"Nf6"}]},
			]}]},
			{move: "Qe2",  freq:   360,book:[{move:"Nf6"}]},
			{move: "Bc4",  freq:   327,book:[{move:"Nf6"}]},
			{move: "Be2",  freq:   173,book:[{move:"Nf6"}]},
		]}]},
		{move: "Ne3",  freq:  2281,book:[{move:"Bxe4",replies:[
			{move: "Bd3",  freq:  1496,book:[{move:"Bxd3",replies:[
				{move: "Qxd3",  freq:  311,book:[{move:"Nf6",replies:[
					{move: "O-O",  freq:  140,book:[{move:"Be7",replies:[
						{move: "Ne5",  freq:  13,book:[{move:"d6"}]},
						{move: "d5",   freq:  13,book:[{move:"Bd6"}]},
						{move: "c3",   freq:  10,book:[{move:"bxc3"}]},
						{move: "Re1",  freq:   5},
						{move: "c4",   freq:   5},
					]}]},
					{move: "Bd2",  freq:   28},
					{move: "d5",   freq:   21},
					{move: "Ne5",  freq:   13},
				]}]},
				{move: "cxd3",  freq:   16},
			]}]},
			{move: "Be2",  freq:   207},
			{move: "Bc4",  freq:   194},
			{move: "Bd2",  freq:   166},
		]}]},
		{move: "Nxb4",  freq: 1520,book:[{move:"Bxb4+",replies:[
			{move: "c3",  freq:  1186,book:[{move:"Be7",replies:[
				{move: "Bd3",  freq:  507,book:[{move:"c5",replies:[
					{move: "O-O",  freq: 25,book:[{move:"cxd4",replies:[
						{move: "cxd4",   freq:  13,book:[{move:"Nf6",replies:[
							{move: "e5",   freq:  4,book:[{move:"Nd5"}]},
							{move: "Re1",  freq:  3,book:[{move:"O-O"}]},
						]}]},
					]}]},
					{move: "d5",   freq:  4},
				]}]},
				{move: "e5",   freq:  170,book:[{move:"c5"}]},
				{move: "d5",   freq:   50,book:[{move:"Nf6"}]},
			]}]},
			{move: "Bd2",  freq:  279,book:[{move:"Bxd2+",replies:[
				{move: "Qxd2",  freq:  156,book:[{move:"Bxe4",replies:[
					{move: "Bd3",   freq:   34,book:[{move:"Bxf3",replies:[
						{move: "gxf3",  freq: 10,book:[{move:"Nc6",replies:[
							{move: "c3",   freq: 1,book:[{move:"Qf6",replies:[
								{move: "O-O-O",freq: 1,book:[{move:"Ng8e7"}]},
							]}]},
							{move: "O-O-O",freq: 1,book:[{move:"Qf6"}]},
						]}]},
					]}]},
					{move: "O-O-O", freq:   33,book:[{move:"Bxf3"}]},
					{move: "Be2",   freq:   16,book:[{move:"Bxf3"}]},
					{move: "Ne5",   freq:   13,book:[{move:"d6"}]},
					{move: "Ng5",   freq:   12,book:[{move:"Bxc2"}]},
					{move: "Bc4",   freq:   10,book:[{move:"Bxf3"}]},
					{move: "Qe3",   freq:    6,book:[{move:"Bxf3"}]},
					{move: "Qf4",   freq:    4,book:[{move:"Bxc2"}]},
				]}]},
				{move: "Nxd2",  freq:   29,book:[{move:"Ne7"}]},
			]}]},
		]}]},
		{move: "Bg5",  freq:   168,book:[{move:"f6"}]},
	]}]},
	{move: "Ne2",  freq:  1815,book:[{move:"Bxe4",replies:[
		{move: "Ng3",  freq:  863,book:[{move:"Bxf3",replies:[
			{move: "Qxf3",   freq:  31,book:[{move:"d5",replies:[
				{move: "c4",    freq:  2,book:[{move:"bxc3"}]},
				{move: "Bf4",   freq:  2,book:[{move:"h6"}]},
				{move: "Bd3",   freq:  2,book:[{move:"e6"}]},
			]}]},
		]}]},
		{move: "c3",   freq:  234,book:[{move:"Bxf3",replies:[
			{move: "gxf3",  freq:  66,book:[{move:"bxc3",replies:[
				{move: "Nxc3",  freq:  27,book:[{move:"Nf6"}]},
				{move: "bxc3",  freq:   7,book:[{move:"e6"}]},
			]}]},
		]}]},
		{move: "Be3",  freq:  141,book:[{move:"Bxf3",replies:[
			{move: "gxf3",  freq:  38,book:[{move:"d5"}]},
		]}]},
	]}]},
	{move: "Na4",  freq:  1044,book:[{move:"Bxe4",replies:[
		{move: "Nc5",  freq: 393,book:[{move:"Bd5",replies:[
			{move: "Bd3",  freq:   14,book:[{move:"e6"}]},
			{move: "c4",   freq:   14,book:[{move:"bxc3"}]},
			{move: "Ne5",  freq:    7,book:[]},
			{move: "Bf4",  freq:    7,book:[]},
		]}]},
		{move: "Bd3",  freq: 156,book:[{move:"Bxd3"}]},
		{move: "Bc4",  freq: 123,book:[{move:"e6"}]},
		{move: "Qe2",  freq:  87,book:[]},
	]}]},
	{move: "d5",   freq:   288,book:[{move:"bxc3"}]},
	{move: "Nb1",  freq:   281,book:[]},
	{move: "Bd3",  freq:   208,book:[]},
]}

const georg_killer = {move: "b4",replies:[
	{move: "Bd3",  freq:  333,book:[{move:"c5",replies:[
		{move: "O-O",  freq:  76,book:[{move:"cxd4",replies:[
			{move: "Nxd4",   freq:   38,book:[{move:"Nf6",replies:[
				{move: "e5",  freq:   62,book:[{move:"Nd5"}]},
				{move: "Qe2",  freq:  47,book:[]},
				{move: "Re1",  freq:  21,book:[]},
			]}]},
		]}]},
		{move: "c3",   freq:  51,book:[{move:"d5"}]},
		{move: "dxc5", freq:  27,book:[{move:"Bxc5"}]},
	]}]},
	{move: "c3",  freq:    48,book:[{move:"c5"}]},
	{move: "a5",  freq:    36,book:[{move:"c5"}]},
	{move: "Bc4",  freq:   33,book:[{move:"Nf6"}]},
	{move: "c4",   freq:   24,book:[]},
	{move: "b3",   freq:   19,book:[]},
]}

const georg_mainline = {move:"Bb7",replies:[
	{move: "Bd3",   freq:  68563,book:[georg_mainline_continues]},
	{move: "d5",    freq:  17682,book:[{move:"Nf6",replies:[
		{move: "Bd3",   freq:  2774,book:[{move:"e6",replies:[
			{move: "dxe6",   freq:  1289,book:[{move:"dxe6",replies:[
				{move: "O-O",   freq:    245,book:[{move:"Nxe4"}]},
				{move: "Bg5",   freq:    231,book:[{move:"h6"}]},
				{move: "Qe2",   freq:    184,book:[{move:"c5",replies:[
					{move: "c3",    freq:  34,book:[{move:"c4",replies:[
						{move: "Bc2",    freq:  23,book:[{move:"Nb8d7",replies:[
							{move: "Bg5",    freq:  4,book:[{move:"Qc7"}]},
						]}]},
					]}]},
					{move: "b3",    freq:  31,book:[{move:"Nc6"}]},
					{move: "c4",    freq:  18,book:[{move:"Nc6"}]},
					{move: "e5",    freq:  10,book:[{move:"Nd5"}]},
					{move: "O-O",   freq:   9,book:[{move:"c4"}]},
					{move: "Bg5",   freq:   8,book:[{move:"c4"}]},
				]}]},
				{move: "e5",    freq:    146,book:[{move:"Nf6d7"}]},
			]}]},
			{move: "Bg5",   freq:    277,book:[{move:"h6"}]},
			{move: "O-O",   freq:    176,book:[{move:"exd5"}]},
			{move: "c4",   freq:     173,book:[{move:"bxc4"}]},
			{move: "e5",   freq:     108,book:[{move:"Nxd5"}]},
		]}]},
		{move: "Nc3",   freq:   804,book:[{move:"d6"}]},
		{move: "Nb1d2",   freq: 486,book:[{move:"e6"}]},
		{move: "c4",   freq:    469,book:[{move:"Nxe4"}]},
	]}]},
	{move: "Nc3",    freq:  9108,book:[georg_rainbow]},
	{move: "Nb1d2",  freq:  5354,book:[{move:"e6",replies:[
		{move: "Bd3",  freq:  1879,book:[{move:"c5"}]},
		{move: "c4",   freq:  1039,book:[{move:"bxc4"}]},
		{move: "c3",   freq:   503,book:[{move:"c5"}]},
		{move: "b3",   freq:   360,book:[{move:"c5"}]},
		{move: "a4",   freq:   341,book:[georg_killer]},
		{move: "Be2",  freq:   205,book:[]},
		{move: "g3",   freq:   133,book:[]},
		{move: "a3",   freq:   110,book:[]},
	]}]},
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

const georg_early_knights = {move:"Bb7",replies:[
	{move: "d4",  freq:  6209,book:[georg_rainbow]},
	{move: "a3",  freq:  3099,book:[{move:"c5"}]},
	{move: "d3",  freq:  2896,book:[{move:"e6",replies:[
		{move: "Be2",  freq:  682,book:[{move:"c5"}]},
		{move: "Be3",  freq:  466,book:[{move:"c5"}]},
		{move: "Ne2",  freq:  366,book:[{move:"c5"}]},
		{move: "Bg5",  freq:  259,book:[{move:"Be7"}]},
		{move: "a3",   freq:  245,book:[{move:"c5"}]},
		{move: "g3",   freq:  238,book:[{move:"d6"}]},
		{move: "Bf4",  freq:  236,book:[{move:"Be7"}]},
		{move: "Bd2",  freq:   62,book:[]},
		{move: "a4",  freq:    57,book:[]},
		{move: "d4",  freq:    57,book:[]},
	]}]},
	{move: "a4",  freq:   644,book:[{move:"b4"}]},
	{move: "Be2",  freq:  419,book:[]},
	{move: "Nd5",  freq:  366,book:[{move:"e6"}]},
	{move: "Bd3",  freq:  355,book:[]},
	{move: "Be2",  freq:  336,book:[]},
]};

const georg_vienna = {move:"Bb7",replies:[
	{move: "Bd3",  freq:  7339,book:[{move:"c5",replies:[
		{move: "dxc5",  freq:  90,book:[{move:"e6",replies:[
			{move: "Be3",   freq:   20,book:[{move:"Qc7",replies:[
				{move: "b4",   freq:   20,book:[{move:"d6"}]},
				{move: "Nf3",  freq:   10,book:[{move:"Bxc5"}]},
			]}]},
			{move: "Nf3",   freq:   15,book:[{move:"Bxc5",replies:[
				{move: "O-O", freq:   2036,book:[{move:"Qc7"}]},
				{move: "Qe2", freq:    308,book:[{move:"Qc7"}]},
				{move: "Be3", freq:    301,book:[{move:"Bxe3",replies:[
					{move: "fxe3",  freq:   181,book:[{move:"Nf6"}]},
				]}]},
				{move: "a3",  freq:    198,book:[]},
			]}]},
			{move: "b4",    freq:    6,book:[{move:"d6"}]},
			{move: "Qe2",   freq:    3,book:[]},
		]}]},
		{move: "d5",    freq:  24,book:[{move:"g6"}]},
		{move: "Nf3",   freq:   6,book:[]},
		{move: "Ng1e2", freq:   4,book:[]},
	]}]},
	{move: "a3",  freq:   3913,book:[{move:"d6"}]},
	{move: "f3",  freq:   2887,book:[{move:"e6"}]},
	{move: "Nf3",  freq:  2844,book:[georg_rainbow]},
	{move: "d5",  freq:   2411,book:[{move:"c6"}]},
	{move: "Be3",  freq:   646,book:[{move:"b4"}]},
	{move: "f4",  freq:    578,book:[{move:"b4"}]},
]}

const georg_triplepawn = {move:"Bb7",replies:[
	{move: "d5",  freq:   7087,book:[{move:"e6",replies:[
		{move: "cxb5",  freq: 698,book:[{move:"exd5",replies:[
			{move: "exd5",   freq: 197,book:[{move:"Nf6"}]},
			{move: "bxa6",   freq:  79,book:[{move:"Nxa6"}]},
		]}]},
		{move: "Nc3",   freq: 398,book:[{move:"exd5"}]},
		{move: "Nf3",   freq: 200,book:[{move:"Nf6"}]},
		{move: "b3",   freq:   76,book:[]},
		{move: "dxe6", freq:   63,book:[{move:"dxe6",replies:[
			{move: "Qxd8+",   freq:  8,book:[{move:"Kxd8"}]},
			{move: "cxb4",   freq:   4,book:[{move:"Qxd1+"}]},
		]}]},
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
		{move: "Bxc4",  freq:  2527,book:[{move:"e6"}]},
	]}]},
	{move: "Nc3",  freq:  2915,book:[{move:"b4"}]},
	{move: "Nd2",  freq:   867,book:[]},
	{move: "Qc2",  freq:   544,book:[]},
]};

const georg_doublepawn_passive = {move:"Bb7",replies:[
	{move: "Bd3",  freq:  4569,book:[{move:"Nf6"}]},
	{move: "f3",   freq:   787,book:[]},
	{move: "Nd2",  freq:   414,book:[]},
	{move: "Nf3",  freq:   409,book:[]},
	{move: "e5",   freq:   314,book:[]},
]}

const georg_double_f4 = {move:"Bb7",replies:[
	{move: "Bd3",  freq: 12761,book:[{move:"Nf6",replies:[
		{move: "Qe2",  freq: 2912,book:[{move:"c5",replies:[
			{move: "c3",   freq:  84,book:[{move:"cxd4",replies:[
				{move: "cxd4", freq:  52,book:[{move:"Nc6",replies:[
					{move: "Nf3",  freq: 46,book:[{move:"Nb4",replies:[
						{move: "Nc3",  freq:  15,book:[{move:"Nxd3+",replies:[
							{move: "Qxd3",  freq:  15,book:[{move:"b4",replies:[
								{move: "e5",   freq:  12,book:[{move:"bxc3",replies:[
									{move: "exf6",  freq:  11,book:[{move:"cxb2",replies:[
										{move: "Bxb2",  freq:   10,book:[{move:"gxf6",replies:[
											{move: "O-O",  freq:   6,book:[{move:"e6"}]},
										]}]},
									]}]},
								]}]},
								{move: "Nd5",  freq:   3,book:[]},
							]}]},
						]}]},
						{move: "e5",   freq:  15,book:[{move:"Nxd3+",replies:[
							{move: "Qxd3",   freq:  11,book:[{move:"Nd5"}]},
						]}]},
						{move: "Nb1d2",freq:  4,book:[]},
					]}]},
					{move: "e5",   freq:  4,book:[]},
					{move: "Be3",  freq:  2,book:[]},
				]}]},
			]}]},
			{move: "dxc5", freq:  41,book:[]},
			{move: "e5",   freq:  13,book:[]},
			{move: "d5",   freq:  13,book:[]},
		]}]},
		{move: "Nd2",  freq: 1290,book:[{move:"c5"}]},
		{move: "e5",   freq:  303,book:[{move:"Bxg2"}]},
	]}]},
	{move: "Nf3",  freq:  1516,book:[{move:"Bxe4"}]},
	{move: "d5",  freq:   1313,book:[{move:"c6"}]},
]}

const georg_doublepawn = {move:"b5",replies:[
	{move: "Nf3",  freq: 57185,book:[georg_mainline]},
	{move: "Bd3",  freq: 34428,book:[{move:"Bb7",replies:[
		{move: "Nf3",  freq:  13172,book:[georg_mainline_continues]},
		{move: "Qe2",  freq:   5443,book:[{move:"e6",replies:[
			{move: "Nf3",  freq:  1675,book:[georg_Qe2]},
			{move: "f4",   freq:   471,book:[{move:"c5"}]},
			{move: "c3",   freq:   383,book:[{move:"c5"}]},
			{move: "a4",   freq:   160,book:[]},
		]}]},
		{move: "Ne2",  freq:   3837,book:[{move:"c5"}]},
		{move: "c3",  freq:    2949,book:[{move:"Nf6"}]},
		{move: "f4",  freq:    2459,book:[{move:"Nf6"}]},
		{move: "Be3",  freq:   1972,book:[{move:"Nf6"}]},
	]}]},
	{move: "c4",  freq:  30982,book:[georg_triplepawn]},
	{move: "f4",  freq:  17931,book:[georg_double_f4]},
	{move: "a4",  freq:  17254,book:[{move:"Bb7",replies:[
		{move: "axb5",  freq: 5657,book:[{move:"Bxe4",replies:[
			{move: "bxa6",  freq:  1050,book:[{move:"Nxa6",replies:[
				{move: "Rxa6",   freq:  369,book:[{move:"Rxa6",replies:[
					{move: "Bxa6",   freq:  339,book:[{move:"Bxg2",replies:[
						{move: "f3",   freq:  105,book:[{move:"e6"}]},
						{move: "Nf3",  freq:   48,book:[{move:"Bxh1"}]},
						{move: "Ne2",  freq:   36,book:[{move:"Bxh1"}]},
						{move: "Bb7",  freq:   34,book:[{move:"c6"}]},
						{move: "Qg4",  freq:   30,book:[{move:"Bxh1"}]},
						{move: "Bc4",  freq:   21,book:[{move:"e6"}]},
						{move: "Nc3",  freq:   18,book:[{move:"Bxh1"}]},
					]}]},
					{move: "f3",     freq:   25,book:[{move:"Ra1",replies:[
						{move: "fxe4",  freq:  5,book:[{move:"Rxb1",replies:[
							{move: "Nf3",     freq:   3,book:[{move:"g6"}]},
						]}]},
						{move: "Nc3",  freq:   2},
						{move: "Na3",  freq:   1},
					]}]},
				]}]},
				{move: "f3",     freq:   92,book:[{move:"Bxc2",replies:[
					{move: "Qxc2",    freq:   6,book:[{move:"Nb4",replies:[
						{move: "Qb3",  freq:   4,book:[{move:"Rxa1"}]},
						{move: "Qc3",  freq:   1,book:[{move:"Rxa1"}]},
						{move: "Rxa8", freq:   1,book:[{move:"Nxc2+"}]},
					]}]},
					{move: "Qd2",     freq:   1,book:[{move:"e6"}]},
				]}]},
				{move: "Nc3",    freq:   86,book:[{move:"Nb4",replies:[
					{move: "Rxa8",    freq:  6,book:[{move:"Qxa8",replies:[
						{move: "Nxe4",  freq: 8,book:[{move:"Qxe4"}]},
						{move: "Nb5",  freq:  2,book:[{move:"Qa5"}]},
					]}]},
					{move: "Nxe4",    freq:  1,book:[{move:"Rxa1"}]},
				]}]},
				{move: "Nf3",    freq:   61,book:[{move:"Bxc2"}]},
				{move: "Bxa6",    freq:  46,book:[{move:"Bxg2"}]},
				{move: "Qe2",     freq:  14,book:[{move:"Bxc2"}]},
				{move: "d5",      freq:   6,book:[{move:"Bxc2"}]},
				{move: "Qg4",     freq:   6,book:[{move:"Nb4"}]},
				{move: "Bd3",     freq:   3,book:[{move:"Bxg2"}]},
			]}]},
			{move: "Nc3",   freq:   299,book:[{move:"Bb7",replies:[
				{move: "bxa6",   freq: 138,book:[{move:"Nxa6",replies:[
					{move: "Nf3",    freq: 167,book:[{move:"Nf6"}]},
					{move: "Bf4",    freq:  14},
					{move: "Bc4",    freq:  13},
				]}]},
				{move: "Nf3",    freq: 107,book:[{move:"Nf6"}]},
				{move: "Bf4",    freq:   9},
			]}]},
			{move: "Nf3",   freq:    71},
		]}]},
		{move: "Bd3",  freq:  2400,book:[{move:"e6"}]},
		{move: "f3",  freq:   1291,book:[{move:"b4"}]},
		{move: "Nd2",  freq:   574,book:[{move:"b4"}]},
		{move: "d5",  freq:    460,book:[{move:"Nf6"}]},
	]}]},
	{move: "Nc3",  freq: 12883,book:[georg_vienna]},
	{move: "d5",  freq:   7146,book:[{move:"e6",replies:[
		{move: "dxe6", freq:  461,book:[{move:"dxe6"}]},
		{move: "c4", freq:    194,book:[{move:"exd5"}]},
		{move: "Nf3", freq:   100,book:[{move:"exd5"}]},
		{move: "Nc3", freq:    62,book:[{move:"b4"}]},
		{move: "a4", freq:     33},
	]}]},
	{move: "c3",    freq:  6223,book:[georg_doublepawn_passive]},
	{move: "a3",    freq:  5239,book:[{move:"e6"}]},
	{move: "g3",    freq:  3475,book:[{move:"Bb7"}]},
	{move: "e5",    freq:  2854,book:[{move:"Bb7",replies:[
		{move: "Nf3", freq:  1537,book:[{move:"e6"}]},
		{move: "f4",  freq:   578,book:[{move:"e6"}]},
		{move: "d5",  freq:   270},
		{move: "c3",  freq:   220},
		{move: "Nc3", freq:   130},
		{move: "f3",  freq:   116,book:[{move:"c5"}]},
	]}]},
]}

const queen_georg_passive_c4 = {move:"bxc4"};

const queen_georg_e3c4 = {move:"Bb7",replies:[
	{move: "cxb5", freq:   1566,book:[{move:"axb5",replies:[
		{move: "Bxb5",   freq:  1,book:[{move:"Bxg2"}]},
		{move: "Qb3",    freq:  1,book:[{move:"c6"}]},
	]}]},
	{move: "Nf3",  freq:   1281,book:[queen_georg_passive_c4]},
	{move: "c5",   freq:    199},
	{move: "Nc3",  freq:    178},
	{move: "f3",   freq:     44},
]}

const london_georg_continues = {move:"Nf6",replies:[
	{move: "Nb1d2",   freq:  1522,book:[{move:"e6",replies:[
		{move: "Bd3",     freq:  1276,book:[{move:"c5",replies:[
			{move: "c3",      freq:   911,book:[{move:"Be7",replies:[
				{move: "O-O",      freq: 300,book:[{move:"c4",replies:[
					{move: "Bc2",    freq: 19,book:[{move:"Nh5",replies:[
						{move: "Bg3",    freq:  2,book:[{move:"O-O",replies:[
							{move: "Ne5",    freq:  1,book:[{move:"g6"}]},
						]}]},
						{move: "Bxb8",   freq:  1,book:[{move:"Rxb8"}]},
					]}]},
					{move: "Bb1",    freq:  2},
				]}]},
				{move: "Qe2",      freq: 117},
				{move: "h3",       freq: 111},
				{move: "Qc2",      freq:  43},
				{move: "h4",       freq:  34},
			]}]},
			{move: "O-O",     freq:    55,book:[{move:"c4"}]},
			{move: "dxc5",    freq:    37},
		]}]},
		{move: "c3",      freq:   583,book:[{move:"Be7"}]},
		{move: "h3",      freq:   324,book:[{move:"c5"}]},
		{move: "c4",      freq:   312,book:[{move:"bxc4"}]},
		{move: "Be2",     freq:   292,book:[{move:"c5"}]},
		{move: "a4",      freq:   200,book:[{move:"b4"}]},
		{move: "a3",      freq:    49},
	]}]},
	{move: "Bd3",     freq:  1486,book:[{move:"Nh5",replies:[
		{move: "Bg3",     freq:   29,book:[{move:"Nxg3",replies:[
			{move: "hxg3",     freq:  27,book:[{move:"e6"}]},
		]}]},
		{move: "Bg5",     freq:   13,book:[{move:"h6",replies:[
			{move: "Bh4",     freq:  11,book:[{move:"g5",replies:[
				{move: "Bg3",     freq:    6,book:[{move:"Nxg3",replies:[
					{move: "hxg3",     freq:    5,book:[{move:"e6"}]},
				]}]},
			]}]},
		]}]},
		{move: "Be5",     freq:    6},
	]}]},
	{move: "Be2",     freq:  1124,book:[{move:"e6"}]},
	{move: "c4",      freq:   989,book:[{move:"Nh5",replies:[
		{move: "Bg3",      freq:   8,book:[{move:"Nxg3",replies:[
			{move: "hxg3",      freq:   7,book:[{move:"bxc4",replies:[
				{move: "Bxc4",      freq:   4,book:[{move:"d5"}]},
			]}]},
			{move: "fxg3",      freq:   1},
		]}]},
		{move: "Bg5",      freq:   3,book:[{move:"h6",replies:[
			{move: "Bh4",     freq:   2,book:[{move:"g5",replies:[
				{move: "Bg3",     freq:   2,book:[{move:"Nxg3",replies:[
					{move: "hxg3",      freq:   2,book:[{move:"c5"}]},
				]}]},
				{move: "Nxg5",     freq:  1,book:[{move:"hxg5",replies:[
					{move: "Bxg5",     freq:   1,book:[{move:"c5"}]},
				]}]},
			]}]},
		]}]},
		{move: "cxb5",     freq:   2,book:[{move:"Nxf4",replies:[
			{move: "exf4",      freq:   2,book:[{move:"e6"}]},
		]}]},
		{move: "Be5",      freq:   1},
	]}]},
	{move: "c3",      freq:   831,book:[{move:"e6"}]},
	{move: "a4",      freq:   828,book:[{move:"b4"}]},
	{move: "h3",      freq:   616,book:[{move:"e6"}]},
]}

const london_georg = {move:"Bb7",replies:[
	{move: "Nf3",  freq: 6363,book:[london_georg_continues]},
	{move: "c3",   freq:  817,book:[{move:"Nf6"}]},
	{move: "Nd2",  freq:  467,book:[{move:"Nf6"}]},
	{move: "a4",   freq:  261,book:[{move:"b4"}]},
	{move: "c4",   freq:  232,book:[{move:"bxc4",replies:[
		{move: "Bxc4",  freq:  45,book:[{move:"Bxg2",replies:[
			{move: "Qb3",  freq:  7,book:[{move:"e6"}]},
			{move: "Qh5",  freq:  6,book:[{move:"e6"}]},
			{move: "Nf3",  freq:  6,book:[{move:"Bxh1"}]},
		]}]},
		{move: "Nf3",   freq:  41,book:[{move:"d5"}]},
		{move: "Nc3",   freq:  12,book:[{move:"d5"}]},
	]}]},
	{move: "Bd3",  freq:  223},
	{move: "Nc3",  freq:  120},
	{move: "a3",   freq:  118},
	{move: "f3",   freq:  115},
]}

const queen_georg_passive = {move:"Bb7",replies:[
	{move: "c4",   freq:  5627,replies:[queen_georg_passive_c4]},
	{move: "Be2",  freq:  4910,book:[{move:"e6"}]},
	{move: "Bd3",  freq:  4430,book:[{move:"e6"}]},
	{move: "a4",   freq:  3034,book:[{move:"b4"}]},
	{move: "Nb1d2",freq:   948},
	{move: "a3",   freq:   868},
	{move: "b3",   freq:   800},
	{move: "c3",   freq:   646},
	{move: "g3",   freq:   606},
	{move: "Nc3",  freq:   531},
]}

const queen_georg_Nf3c3 = {move:"Bb7"}

const adapted_trap = {move:"h5",replies:[
	{move: "e3",   freq:  101,book:[{move:"e5",replies:[
		{move: "dxe5",   freq:  1,book:[{move:"g5"}]},
		{move: "Bxe5",   freq:  1,book:[{move:"d6"}]},
		{move: "Bg3",    freq:  1,book:[{move:"h4"}]},
	]}]},
	{move: "Nf3",   freq:  57,book:[{move:"d5",replies:[
		{move: "e3",   freq:  50,book:[{move:"Bg4",replies:[
			{move: "h3",   freq:  16,book:[{move:"Bxf3",replies:[
				{move: "Qxf3",  freq:  11,book:[{move:"e6",replies:[
					{move: "c3",   freq:  4,book:[{move:"g5",replies:[
						{move: "Bh2",  freq:  4,book:[{move:"Bd6",replies:[
							{move: "Bd3",  freq:  1,book:[{move:"Bxh2",replies:[
								{move: "Rxh2",  freq:  1,book:[{move:"e5",replies:[
									{move: "dxe5",  freq:  1,book:[{move:"Nd7",replies:[
										{move: "Qxd5",  freq:  1,book:[{move:"Ne7"}]},
									]}]},
								]}]},
							]}]},
							{move: "Qd1",  freq:  1,book:[{move:"Bxh2",replies:[
								{move: "Rxh2",  freq:  1,book:[{move:"Nd7"}]},
							]}]},
							{move: "Bxd6", freq:  1,book:[{move:"Qxd6"}]},
						]}]},
					]}]},
					{move: "Bd3",  freq:  3,book:[{move:"g5"}]},
					{move: "Qg3",  freq:  1,book:[{move:"h4"}]},
					{move: "c4",   freq:  1,book:[{move:"c6"}]},
				]}]},
				{move: "gxf3",  freq:   1,book:[{move:"c5",replies:[
					{move: "dxc5",  freq:  1,book:[{move:"Nc6"}]},
				]}]},
			]}]},
			{move: "Bd3",  freq:  15,book:[{move:"e6",replies:[
				{move: "Nb1d2", freq:  3,book:[{move:"Bd6",replies:[
					{move: "h3",  freq:   1,book:[{move:"Bxf3"}]},
					{move: "Bxd6",  freq: 1,book:[{move:"cxd6"}]},
				]}]},
			]}]},
			{move: "Be2",  freq:   8,book:[{move:"e6",replies:[
				{move: "h3",   freq:   1,book:[{move:"Bxf3",replies:[
					{move: "Bxf3",   freq:   1,book:[{move:"g5"}]},
				]}]},
				{move: "c3",   freq:   1,book:[{move:"Bd6",replies:[
					{move: "Bxd6",  freq: 1,book:[{move:"Qxd6"}]},
				]}]},
			]}]},
			{move: "c3",   freq:   7,book:[{move:"e6"}]},
			{move: "Nb1d2", freq:  6,book:[{move:"e6"}]},
		]}]},
		{move: "h3",   freq:  18,book:[{move:"Bf5",replies:[
			{move: "e3",  freq:   12,book:[{move:"e6",replies:[
				{move: "Bd3",  freq:   21,book:[{move:"Bxd3"}]},
				{move: "Be2",  freq:   13},
				{move: "c3",   freq:   12},
				{move: "a3",   freq:    9},
				{move: "Nb1d2",freq:    6},
				{move: "c4",   freq:    5},
				{move: "Nh4",  freq:    4},
			]}]},
			{move: "Nc3",  freq:   2,book:[{move:"e6"}]},
		]}]},
		{move: "Nc3",  freq:   7},
		{move: "c3",   freq:   6},
		{move: "Nb1d2",freq:   3},
	]}]},
	{move: "h3",    freq:  31,book:[{move:"d5",replies:[
		{move: "e3",   freq:  22,book:[{move:"e6",replies:[
			{move: "Nf3",  freq:  25,book:[{move:"c5",replies:[
				{move: "c4",   freq:   4,book:[{move:"cxd4",replies:[
					{move: "Nxd4",   freq:   1,book:[{move:"Bb4+"}]},
				]}]},
				{move: "c3",   freq:   1},
			]}]},
			{move: "c3",   freq:   8},
			{move: "c4",   freq:   5},
			{move: "Bd3",  freq:   5},
			{move: "Be2",  freq:   4},
		]}]},
		{move: "Nf3",  freq:   5,book:[{move:"Nf6"}]},
	]}]},
	{move: "e4",    freq:  20,book:[{move:"e6",replies:[
		{move: "Nf3",   freq:   6,book:[{move:"d5"}]},
		{move: "h4",    freq:   2,book:[{move:"d5"}]},
		{move: "Nc3",   freq:   2,book:[{move:"b5"}]},
		{move: "c4",    freq:   2,book:[{move:"d5"}]},
	]}]},
	{move: "Nc3",   freq:  12,book:[{move:"d5"}]},
	{move: "h4",    freq:   8,book:[{move:"d5"}]},
	{move: "c4",    freq:   4,book:[{move:"e6"}]},
]}

const qg_d4c4Nf = {move: "Bb7",replies:[
	{move: "cxb5",  freq:  1842,book:[{move:"axb5",replies:[
		{move: "e3",    freq:  1241,book:[{move:"b4"}]},
		{move: "Nc3",   freq:   447,book:[{move:"b4",replies:[
			{move: "Nb1",    freq:   296,book:[{move:"e6"}]},
			{move: "Nb5",    freq:    40,book:[]},
			{move: "Na4",    freq:    34,book:[]},
			{move: "Ne4",    freq:    12,book:[]},
			{move: "Nd5",    freq:     9,book:[]},
		]}]},
		{move: "g3",    freq:   261,book:[]},
		{move: "e4",    freq:   205,book:[]},
		{move: "a3",    freq:   115,book:[]},
		{move: "Bf4",   freq:   105,book:[]},
	]}]},
	{move: "e3",    freq:   911,book:[{move:"bxc4",replies:[
		{move: "Bxc4",   freq:  3630,book:[{move:"e6"}]},
		{move: "Nc3",    freq:    69,book:[]},
	]}]},
	{move: "Nc3",   freq:   533,book:[{move:"b4"}]},
	{move: "c5",    freq:   363,book:[{move:"d6"}]},
	{move: "e4",    freq:   247,book:[]},
]}

const queen_georg = {move: "a6",replies:[//entrypoint
	{move: "c4",   freq:  78746,book:[{move:"b5",replies:[
		{move: "cxb5",   freq:  12029,book:[{move:"axb5",replies:[
			{move: "e4",    freq:  6395,book:[{move:"Bb7",replies:[
				{move: "Bxb5",    freq:  1967,book:[{move:"Bxb4"}]},
				{move: "f3",      freq:  1869,book:[{move:"b4"}]},
				{move: "d5",      freq:  1105,book:[{move:"Nf6"}]},
				{move: "Bd3",     freq:   997,book:[]},
				{move: "Nc3",     freq:   723,book:[{move:"b4",replies:[
					{move: "Nd5",  freq:   541,book:[{move:"e6",replies:[
						{move: "Nf4",  freq:  173,book:[{move:"Bxe4"}]},
						{move: "Ne3",  freq:  171,book:[{move:"Bxe4"}]},
						{move: "Nxb4", freq:  163,book:[{move:"Bxb4"}]},
					]}]},
					{move: "Nb5",  freq:    62,book:[]},
					{move: "Nc3e2",  freq:  30,book:[]},
					{move: "Nb1",  freq:    22,book:[]},
					{move: "Qb3",  freq:    22,book:[]},
				]}]},
				{move: "Nd2",     freq:   339,book:[]},
			]}]},
			{move: "e3",    freq:  2149,book:[{move:"b4",replies:[
				{move: "Nf3",     freq:   262,book:[{move:"e6"}]},
				{move: "Bd2",     freq:   106,book:[{move:"e6"}]},
				{move: "Qb3",     freq:    56,book:[{move:"e6"}]},
				{move: "Bc4",     freq:    49,book:[{move:"d5"}]},
				{move: "a3",      freq:    43,book:[{move:"e6"}]},
				{move: "b3",      freq:    34,book:[{move:"e6"}]},
				{move: "Nd2",     freq:    12,book:[{move:"e6"}]},
			]}]},
			{move: "Nf3",   freq:   917,book:[{move:"Nf6"}]},
			{move: "Nc3",   freq:   908,book:[{move:"b4"}]},
			{move: "a3",    freq:   373,book:[]},
		]}]},
		{move: "Nc3",    freq:   8439,book:[{move:"b4",replies:[
			{move: "Ne4",   freq:   1387,book:[{move:"a5",replies:[
				{move: "Ng3",  freq:   10,book:[{move:"c5"}]},
				{move: "e3",   freq:    6,book:[]},
				{move: "Nf3",  freq:    5,book:[]},
				{move: "a3",   freq:    5,book:[]},
			]}]},
			{move: "Nd5",   freq:   1383,book:[{move:"e6",replies:[
				{move: "Ne3",   freq: 545,book:[{move:"Bb7"}]},
				{move: "Nf4",   freq: 539,book:[{move:"Bb7"}]},
				{move: "Nxb4",  freq: 111,book:[{move:"Bxb4+"}]},
			]}]},
			{move: "Nb1",   freq:   1089,book:[{move:"Bb7"}]},
			{move: "e4",    freq:    378,book:[{move:"bxc3"}]},
			{move: "Na4",   freq:    286,book:[{move:"Nf6"}]},
			{move: "e3",    freq:    271,book:[{move:"bxc3"}]},
			{move: "Nf3",    freq:   104,book:[{move:"bxc3"}]},
		]}]},
		{move: "c5",     freq:   4744,book:[{move:"e5",replies:[
			{move: "e3",     freq:  45,book:[{move:"exd4"}]},
			{move: "d5",     freq:  31,book:[{move:"Bxc5"}]},
			{move: "dxe5",   freq:  19,book:[{move:"Bxc5"}]},
			{move: "Nf3",    freq:   6,book:[{move:"exd4"}]},
		]}]},
		{move: "e4",     freq:   4670,book:[georg_triplepawn]},
		{move: "e3",     freq:   3476,book:[queen_georg_e3c4]},
		{move: "Nf3",    freq:   2495,book:[qg_d4c4Nf]},
		{move: "b3",     freq:    921,book:[]},
	]}]},
	{move: "Nf3",  freq:  42526,book:[{move:"b5",replies:[
		{move: "e4",     freq: 6712,book:[georg_mainline]},
		{move: "Bf4",    freq: 6233,book:[{move:"Bb7",replies:[
			{move: "e3",     freq: 7279,book:[london_georg_continues]},
			{move: "Nb1d2",  freq: 1033,book:[{move:"Nf6"}]},
			{move: "c3",     freq:  352,book:[]},
			{move: "Bg3",    freq:  215,book:[]},
			{move: "Nc3",    freq:  171,book:[]},
		]}]},
		{move: "g3",     freq: 5708,book:[{move:"Bb7",replies:[
			{move: "Bg2",    freq: 6483,book:[{move:"e6",replies:[
				{move: "O-O",     freq:  3200,book:[{move:"Nf6",replies:[
					{move: "a4",     freq:  1133,book:[{move:"Be7",replies:[
						{move: "axb5",     freq:   385,book:[{move:"axb5",replies:[
							{move: "Rxa8",    freq:  378,book:[{move:"Bxa8"}]},
						]}]},
						{move: "c4",       freq:    36,book:[]},
						{move: "Nb1d2",    freq:    30,book:[]},
						{move: "c3",       freq:    26,book:[]},
						{move: "b3",       freq:    20,book:[]},
					]}]},
					{move: "b3",     freq:   748,book:[]},
					{move: "c3",     freq:   560,book:[]},
					{move: "Nb1d2",  freq:   512,book:[]},
					{move: "c4",     freq:   448,book:[]},
				]}]},
				{move: "Nh4",     freq:   107,book:[{move:"Bxg2",replies:[
					{move: "Nxg2",     freq:   54,book:[{move:"d5"}]},
				]}]},
			]}]},
			{move: "a4",     freq:   28,book:[]},
		]}]},
		{move: "e3",     freq: 5035,book:[queen_georg_passive]},
		{move: "c4",     freq: 4095,book:[qg_d4c4Nf]},
		{move: "Bg5",    freq: 2679,book:[{move:"h6"}]},
		{move: "c3",     freq: 1478,book:[queen_georg_Nf3c3]},
		{move: "a4",     freq: 1417,book:[]},
		{move: "Nc3",    freq:  861,book:[]},
	]}]},
	{move: "e4",   freq:  35441,book:[georg_doublepawn]},
	{move: "Bf4",  freq:  24076,book:[{move:"b5",replies:[
		{move: "e3",   freq: 8101,book:[london_georg]},
		{move: "Nf3",  freq: 2965,book:[{move:"Bb7",replies:[
			{move: "e3",   freq:  7279,book:[london_georg_continues]},
			{move: "Nb1d2",freq:  1033,book:[{move:"Bb7"}]},
			{move: "c3",   freq:   352,book:[]},
			{move: "Bg3",  freq:   215,book:[]},
			{move: "Nc3",  freq:   171,book:[]},
		]}]},
		{move: "e4",   freq: 1279,book:[{move:"Bb7"}]},
		{move: "Nc3",  freq:  454,book:[{move:"Bb7"}]},
	]},adapted_trap]},
	{move: "e3",   freq:  17277,book:[{move:"b5",replies:[
		{move: "Nf3",  freq:   6792,book:[queen_georg_passive]},
		{move: "c4",   freq:   2618,book:[queen_georg_e3c4]},
		{move: "f4",   freq:   2225,book:[{move:"e6"}]},
		{move: "Bd3",  freq:   2000,book:[{move:"Bb7"}]},
		{move: "c3",   freq:    702,book:[]},
		{move: "Be2",  freq:    696,book:[]},
		{move: "a4",   freq:    625,book:[]},
		{move: "a3",   freq:    473,book:[]},
		{move: "Qf3",  freq:    394,book:[]},
		{move: "Nc3",  freq:    353,book:[]},
	]}]},
	{move: "Nc3",  freq:   8599,book:[{move:"b5",replies:[
		{move: "e4",   freq:  3486,book:[georg_vienna]},
		{move: "Bf4",  freq:  1165,book:[{move:"Bb7"}]},
		{move: "a3",   freq:   947,book:[]},
		{move: "Nf3",  freq:   659,book:[]},
		{move: "e3",   freq:   200,book:[]},
		{move: "a4",   freq:   174,book:[]},
		{move: "Bg5",  freq:   161,book:[]},
	]}]},
	{move: "c3",   freq:   6190,book:[{move:"b5",replies:[
		{move: "Nf3",  freq:  1989,book:[queen_georg_Nf3c3]},
		{move: "e4",   freq:   683,book:[georg_doublepawn_passive]},
		{move: "Bf4",  freq:   543,book:[{move:"Bb7"}]},
		{move: "e3",   freq:   462,book:[]},
		{move: "Nd2",  freq:   336,book:[]},
		{move: "Bg5",  freq:   188,book:[]},
		{move: "g3",   freq:   174,book:[]},
	]}]},
	{move: "Bg5",   freq:  4737,book:[{move:"h6"}]},
	{move: "g3",    freq:  2825,book:[{move:"d5"}]},
]}

const georg = {move: "a6",replies:[
	{move: "d4",  freq:  278905,book:[georg_doublepawn]},
	{move: "Nf3",  freq: 163077,book:[{move:"b5",replies:[
		{move: "d4",  freq: 67388,book:[georg_mainline]},
		{move: "Nc3", freq:  9002,book:[georg_early_knights]},
		{move: "c4",  freq:  7019,book:[{move:"Bb7",replies:[
			{move: "cxb5",  freq:  2741,book:[{move:"Bxe4",replies:[
				{move: "bxa6",   freq: 616,book:[{move:"Nxa6"}]},
				{move: "Nc3",   freq:  202,book:[]},
				{move: "Bc4",   freq:   52,book:[]},
				{move: "d3",    freq:   41,book:[]},
			]}]},
			{move: "Nc3",   freq:   617,book:[{move:"b4",replies:[
				{move: "Nd5",    freq:  453,book:[{move:"e6",replies:[
					{move: "Ne3",    freq:  147,book:[{move:"Bxe4"}]},
					{move: "Nf4",    freq:  133,book:[{move:"Bxe4"}]},
					{move: "Nxb4",   freq:  132,book:[{move:"Bxb4"}]},
				]}]},
				{move: "Na4",    freq:   30,book:[{move:"Bxe4"}]},
			]}]},
			{move: "d3",    freq:   220,book:[]},
			{move: "Qc2",   freq:   199,book:[]},
			{move: "e5",    freq:    90,book:[]},
		]}]},
		{move: "a4",  freq:  5526,book:[{move:"Bb7",replies:[
			{move: "axb5",  freq:2869,book:[{move:"axb5",replies:[
				{move: "Rxa8",  freq: 1995,book:[{move:"Bxa8",replies:[
					{move: "Bxb5",  freq: 1379,book:[{move:"Bxe4"}]},
					{move: "d3",    freq:  317,book:[]},
					{move: "Nc3",   freq:  142,book:[]},
					{move: "e5",    freq:   86,book:[]},
				]}]},
			]}]},
			{move: "d3",    freq: 273,book:[]},
			{move: "e5",    freq:  69,book:[]},
			{move: "Nc3",   freq:  56,book:[]},
		]}]},
		{move: "d3",  freq:  4112,book:[{move:"Bb7"}]},
		{move: "a3",  freq:  3055,book:[{move:"Bb7"}]},
		{move: "c3",  freq:  2719,book:[{move:"Bb7"}]},
		{move: "Be2", freq:  2292,book:[{move:"Bb7"}]},
		{move: "g3",  freq:  1688,book:[{move:"Bb7"}]},
		{move: "Bd3", freq:  1348,book:[{move:"Bb7"}]},
		{move: "b3",  freq:  1078,book:[{move:"Bb7"}]},
		{move: "e5",  freq:   886,book:[{move:"Bb7"}]},
		{move: "b4",  freq:   597,book:[{move:"Bb7",replies:[
			{move: "Nc3",   freq: 234,book:[{move:"e6"}]},
			{move: "d3",    freq: 137,book:[{move:"e6"}]},
		]}]},
	]}]},
	{move: "Nc3",  freq:  43979,book:[{move:"b5",replies:[
		{move: "d4",  freq: 8905,book:[georg_vienna]},
		{move: "Nf3", freq: 7083,book:[georg_early_knights]},
		{move: "a3", freq:  4172,book:[{move:"c5"}]},
		{move: "f4", freq:  2846,book:[{move:"Bb7"}]},
		{move: "d3", freq:  2295,book:[{move:"Bb7"}]},
		{move: "a4", freq:  1897,book:[{move:"b4"}]},
		{move: "g3", freq:  1617,book:[{move:"Bb7"}]},
	]}]},
	{move: "Bc4",  freq:  41041,book:[{move:"c5",replies:[
		{move: "Nf3", freq: 22707,book:[{move:"e6",replies:[
			{move: "a4",   freq:  85143,book:[{move:"d5"}]},
			{move: "d4",   freq:  61953,book:[{move:"b5"}]},
			{move: "a3",   freq:  58150,book:[{move:"d5"}]},
			{move: "O-O",  freq:  52364,book:[{move:"b5"}]},
			{move: "c3",   freq:  36466,book:[{move:"d5"}]},
			{move: "Nc3",  freq:  26909,book:[{move:"b5"}]},
			{move: "d3",   freq:  22243,book:[{move:"d5"}]},
			{move: "e5",   freq:   4509},
		]}]},
		{move: "a3", freq:  21562,book:[{move:"e6",replies:[
			{move: "d3",   freq:  12595,book:[{move:"d5",replies:[
				{move: "exd5",  freq:   3659,book:[{move:"exd5",replies:[
					{move: "Ba2",   freq:   2769,book:[{move:"Nf6"}]},
					{move: "Bb3",   freq:    612},
					{move: "Qe2+",  freq:    261},
				]}]},
				{move: "Ba2",   freq:    173},
			]}]},
			{move: "Nc3",  freq:   7363},
			{move: "Nf3",  freq:   6578},
			{move: "Ba2",  freq:   3687},
			{move: "h3",   freq:   1805},
			{move: "c3",   freq:   1328},
			{move: "Ne2",  freq:   1141},
			{move: "d4",   freq:    930},
		]}]},
		{move: "a4", freq:  20772,book:[{move:"e6"}]},
		{move: "Qf3", freq:  9532,book:[{move:"e6"}]},
		{move: "d3", freq:   9137,book:[{move:"e6"}]},
		{move: "Qh5", freq:  8695,book:[{move:"e6"}]},
		{move: "Nc3", freq:  7611,book:[{move:"e6"}]},
	]}]},
	{move: "f4",  freq:   23164,book:[{move:"b5",replies:[
		{move: "Nf3",  freq:  11190,book:[{move:"Bb7",replies:[
			{move: "d3",  freq:  5503,book:[{move:"e6",replies:[
				{move: "Be2",  freq:  2124,book:[{move:"Bc5"}]},
				{move: "Be3",  freq:   597},
				{move: "g3",   freq:   367},
				{move: "Nc3",  freq:   324},
				{move: "c3",   freq:   171},
			]}]},
			{move: "Nc3",  freq: 1480,book:[{move:"b4"}]},
			{move: "e5",  freq:  1429,book:[{move:"e6"}]},
			{move: "d4",  freq:  1082,book:[{move:"Bxe4"}]},
			{move: "Bd3",  freq:  457},
		]}]},
		{move: "d4",  freq:    2200,book:[georg_double_f4]},
		{move: "e5",  freq:     544,book:[]},
		{move: "d3",  freq:     469,book:[]},
	]}]},
	{move: "d3",  freq:   13432,book:[{move:"b5",replies:[
		{move: "Nf3",  freq:  1972,book:[{move:"Bb7"}]},
		{move: "Nc3",  freq:  1721,book:[{move:"Bb7"}]},
		{move: "Nd2",  freq:  1301,book:[{move:"c5"}]},
		{move: "f4",   freq:  1266,book:[{move:"e6"}]},
		{move: "c3",   freq:   551,book:[]},
		{move: "Be2",  freq:   472,book:[]},
		{move: "g3",   freq:   458,book:[]},
		{move: "Be3",  freq:   409,book:[]},
		{move: "f3",   freq:   202,book:[]},
		{move: "c4",   freq:   189,book:[]},
		{move: "a3",   freq:   160,book:[]},
		{move: "h3",   freq:   134,book:[]},
	]}]},
	{move: "a4",  freq:    7048,book:[{move:"e6"}]},
	{move: "c4",  freq:    6220,book:[{move:"e5"}]},
	{move: "e5",  freq:    4744,book:[{move:"d6",replies:[
		{move: "exd6",   freq:   125,book:[{move:"Qxd6"}]},
		{move: "Nf3",   freq:    103,book:[{move:"Nc6",replies:[
			{move: "exd6", freq:  64,book:[{move:"Qxd6"}]},
			{move: "d4",   freq:  37,book:[{move:"dxe5",replies:[
				{move: "d5",   freq:   18,book:[{move:"e4",replies:[
					{move: "Ng5",   freq:  3,book:[{move:"Nb4",replies:[
						{move: "Nxe4", freq: 1,book:[{move:"Qxd5"}]},
						{move: "c4",   freq: 1,book:[{move:"e6"}]},
					]}]},
					{move: "dxc6",  freq:  1,book:[{move:"Qxd1+"}]},
				]}]},
				{move: "dxe5", freq:   12,book:[{move:"Qxd1+",replies:[
					{move: "Kxd1",   freq:  12,book:[{move:"Bg4"}]},
				]}]},
				{move: "Nxe5", freq:    6,book:[{move:"Qxd4"}]},
			]}]},
			{move: "Bc4",  freq:  12,book:[]},
		]}]},
		{move: "f4",   freq:      75,book:[{move:"c5"}]},
		{move: "d4",   freq:      57,book:[]},
		{move: "e6",   freq:      18,book:[]},
	]}]},
	{move: "Qf3", freq:    4567,book:[{move:"c5"}]},
	{move: "g3",  freq:    3650,book:[{move:"d5"}]},
	{move: "c3",  freq:    2338,book:[{move:"d5"}]},
]}

const anti_london = {move:"h5",replies:[
	{move: "e3",   freq:   12609,book:[{move:"e5",replies:[
		{move: "Bxe5",  freq:    5150,book:[{move:"f6",replies:[
			{move: "Bg3",   freq:   2047,book:[{move:"h4",replies:[
				{move: "Bf4",   freq:  1224,book:[{move:"g5"}]},
				{move: "Bxh4",   freq:  179,book:[{move:"Rxh4"}]},
				{move: "Bb5+",   freq:  174,book:[{move:"c6"}]},
			]}]},
			{move: "Bf4",   freq:   1566,book:[{move:"g5"}]},
			{move: "Be2",   freq:    375,book:[{move:"fxe5"}]},
			{move: "Bb5+",  freq:    354,book:[{move:"c6"}]},
			{move: "Bd3",   freq:    297,book:[{move:"fxe5"}]},
			{move: "Qd3",   freq:    208,book:[{move:"Ne7"}]},
			{move: "Nf3",   freq:    133,book:[{move:"fxe5"}]},
		]}]},
		{move: "dxe5",  freq:    4079,book:[{move:"g5",replies:[
			{move: "Bxg5",  freq:   1151,book:[{move:"Qxg5"}]},
			{move: "Bg3",   freq:   1144,book:[{move:"h4"}]},
			{move: "e6",   freq:     911,book:[{move:"hxg3"}]},
			{move: "Nc3",   freq:    158,book:[]},
			{move: "Be2",   freq:    155,book:[]},
		]}]},
		{move: "Bg3",   freq:     243,book:[{move:"h4"}]},
	]}]},
	{move: "Nf3",  freq:    6642,book:[{move:"Bg4",replies:[
		{move: "e3",  freq:   295,book:[{move:"Bxf3"}]},
		{move: "h3",  freq:   165,book:[{move:"Bxf3"}]},
		{move: "Nb1d2", freq: 123,book:[{move:"Bxf3"}]},
		{move: "Ne5",  freq:   62,book:[{move:"Bf5"}]},
	]}]},
	{move: "h3",   freq:    4518,book:[{move:"c5"}]},
	{move: "h4",   freq:    2616,book:[{move:"c5"}]},
	{move: "Nc3",  freq:    1575,book:[{move:"Bf5"}]},
	{move: "c4",   freq:     372,book:[]},
	{move: "c3",   freq:     239,book:[]},
	{move: "Nd2",  freq:     161,book:[]},
]};

const accepted = {move: "dxc4",replies:[
	{move: "Nc3",  freq:  1228718,book:[{move:"a6",replies:[
		{move: "a4",    freq:   45345,book:[{move:"Nc6"}]},
		{move: "e4",    freq:   22171,book:[{move:"b5"}]},
		{move: "e3",    freq:   12973,book:[{move:"b5"}]},
		{move: "Bf4",   freq:    3565,book:[]},
		{move: "Qa4+",  freq:    2002,book:[]},
	]}]},
	{move: "e3",  freq:    878954,book:[{move:"e5",replies:[
		{move: "Bxc4",    freq:  98542,book:[{move:"exd4",replies:[
			{move: "exd5",   freq:   54468,book:[{move:"Bd6",replies:[
				{move: "Nf3",    freq:    6813,book:[{move:"Nf6",replies:[
					{move: "O-O",    freq:   20574,book:[{move:"O-O"}]},
					{move: "Nc3",    freq:    5157,book:[]},
					{move: "Bg5",    freq:    2210,book:[]},
					{move: "Qe2+",   freq:    2119,book:[]},
					{move: "h3",     freq:    1130,book:[]},
				]}]},
				{move: "Nc3",    freq:    2175,book:[{move:"Nf6"}]},
				{move: "Qb3",    freq:     542,book:[]},
				{move: "Ne2",    freq:     521,book:[]},
				{move: "Qf3",    freq:     409,book:[]},
			]}]},
			{move: "Qxd4",   freq:   14583,book:[{move:"Qxd4"}]},
			{move: "Nf3",    freq:   10766,book:[{move:"Bb4+"}]},
			{move: "Qb3",    freq:    4401,book:[{move:"Qe7"}]},
			{move: "Qf3",    freq:    2394,book:[{move:"Bb4+"}]},
		]}]},
		{move: "Nf3",    freq:   11295,book:[{move:"exd4"}]},
		{move: "d5",    freq:     6423,book:[{move:"Nf6"}]},
		{move: "dxe5",    freq:   2882,book:[{move:"Qxd1+"}]},
		{move: "Nc3",    freq:    2816,book:[]},
		{move: "Qa4+",    freq:   1431,book:[]},
	]}]},
	{move: "e4",  freq:    643974,book:[{move:"e5"}]},
	{move: "Nf3",  freq:   390263,book:[{move:"a6"}]},
	{move: "Qa4+",  freq:   61784,book:[{move:"Nd7",replies:[
		{move: "Qxc4",    freq:   1329,book:[{move:"e5"}]},
	]}]},
	{move: "Bf4",   freq:   22561,book:[{move:"Nf6"}]},
	{move: "g3",    freq:   12244,book:[]},
	{move: "a4",    freq:    8996,book:[]},
	{move: "d5",    freq:    6268,book:[]},
]}

const rare_anglo = {move:"e6",replies:[
	{move: "g3",    freq:   10430,book:[{move:"Bb4"}]},
	{move: "d4",    freq:    8333,book:[{move:"Bb4"}]},
	{move: "d3",    freq:    4286,book:[{move:"Bb4"}]},
	{move: "e3",    freq:    2728,book:[{move:"Bb4"}]},
]}

const grob = {move: "d5",replies:[
	{move: "Bg2",   freq:  336458,book:[{move: "Bxg4",replies:[
		{move: "c4",    freq:  133638,book:[{move: "c6",replies:[
			{move: "cxd5",    freq:   42273,book:[{move: "cxd5",replies:[
				{move: "Qb3",    freq:  28581,book:[{move: "Nf6",replies:[
					{move: "Qxb7",    freq:  2959,book:[{move: "Nb1d7",replies:[
						{move: "Nc3",    freq:   2200,book:[{move: "Rb8",replies:[
							{move: "Qxa7",     freq:   360,book:[{move: "e5",replies:[
								{move: "Nxd5",     freq:     30,book:[{move: "Nxd5",replies:[
									{move: "Bxd5",     freq:   21,book:[{move: "Bc5",replies:[
										{move: "Qa4",     freq:   34,book:[{move: "Bf5",replies:[
											{move: "Nf3",     freq: 8,book:[{move: "O-O"}]},
										]}]},
									]}]},
								]}]},
								{move: "Bxd5",   freq:      7},
							]}]},
							{move: "Qc6",     freq:     19},
							{move: "Qa6",     freq:     10},
						]}]},
						{move: "Bxd5",   freq:    594},
						{move: "d4",     freq:    208},
					]}]},
					{move: "Nc3",    freq:   2859,book:[{move: "e6",replies:[
						{move: "Qxb7",  freq:  2638,book:[{move: "Nb8d7",replies:[
							{move: "Nb5",    freq:  1956,book:[{move: "Rc8"}]},
							{move: "d4",     freq:  1154,book:[{move: "Rb8"}]},
							{move: "d3",     freq:   496},
							{move: "Nf3",    freq:   327},
							{move: "h3",     freq:   304},
						]}]},
						{move: "d3",    freq:   266},
						{move: "h3",    freq:   114},
						{move: "d4",    freq:   101},
					]}]},
				]}]},
				{move: "Nc3",    freq:   6340},
				{move: "Qa4+",   freq:   2145},
			]}]},
			{move: "Qb3",     freq:   20308,book:[{move: "e6",replies:[
				{move: "Qxb7",    freq:   1417,book:[{move: "Nd7",replies:[
					{move: "Qxc6",    freq:    781,book:[{move: "Rc8"}]},
					{move: "cxd5",    freq:    311,book:[{move: "cxd5"}]},
					{move: "Nc3",     freq:    163},
				]}]},
				{move: "cxd5",    freq:    972},
			]}]},
		]}]},
	]}]},
	{move: "g5",    freq:   42203,book:[{move: "e5"}]},
	{move: "h3",    freq:   19772,book:[{move: "h5"}]},
]}

const lasker = {move: "h5",replies:[
	{move: "Bg2",    freq:  172882,book:[{move: "h4",replies:[
		{move: "Nf3",     freq:   50196,book:[{move: "h3",replies:[
			{move: "Bf1",      freq:   26238,book:[{move: "Nf6",replies:[
				{move: "e3",     freq:   509,book:[{move: "d5"}]},
				{move: "d4",     freq:   415,book:[{move: "d5"}]},
				{move: "d3",     freq:   409,book:[{move: "d5"}]},
				{move: "e4",     freq:   172,book:[{move: "Nxe4"}]},
				{move: "Ng5",    freq:    97},
				{move: "Ng1",    freq:    85},
				{move: "b3",     freq:    74},
			]}]},
			{move: "Bxh3",      freq:   3388,book:[{move: "Rxh3"}]},
			{move: "O-O",      freq:    1130,book:[{move: "hxg2"}]},
		]}]},
		{move: "gxh4",    freq:   41432,book:[{move: "e5",replies:[
			{move: "Nf3",    freq:  5504,book:[{move: "e4"}]},
			{move: "d4",     freq:  1384},
			{move: "d3",     freq:   613},
		]}]},
		{move: "g4",      freq:   12273,book:[{move: "h3"}]},
	]}]},
	{move: "Nf3",    freq:   16458},
	{move: "h4",     freq:    9575},
]}

const blackBook = {
	replies:[
		{move: "e4",   freq: 239073628,book:[regular,georg,french]},
		{move: "d4",   freq: 118737624,book:[queen_georg,dutch,englund,{move: "d5",replies:[
			{move: "c4",  freq:  18992111,book:[accepted,{move: "c6",replies:[
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
			{move: "Bf4",  freq: 6181582,book:[{move: "c5",replies:[
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
			]},anti_london]},//london
			{move: "Nf3",  freq: 8006088},
			{move: "e3",  freq:  3378052},
			{move: "Nc3",  freq: 1910588},
			{move: "Bg5",  freq:  955563},
			{move: "f4",  freq:   243962,book:[antistonewall]},
		]}]},
		{move: "Nf3",  freq:  22804836,book:[{move:"f5",replies:[
			{move: "g3",  freq:  103730,book:[{move: "Nf6",replies:[
				{move: "Bg2",  freq: 75508,book:[{move: "d6",replies:[
					{move: "O-O", freq: 12858,book:[{move: "e5",replies:[
						{move: "d3",  freq: 9583,book:[{move: "a5"}]},
						{move: "d4",  freq: 5175},
						{move: "c4",  freq: 2440},
					]}]},
					{move: "d4",  freq:  3147},
					{move: "d3",  freq:  2075},
				]}]},
				{move: "d3",   freq:  2855},
				{move: "d4",   freq:  2461},
			]}]},
			{move: "d4",  freq:   94160,book:[reti_dutch]},
			{move: "c4",  freq:   42989,book:[{move: "Nf6",replies:[
				{move: "Nc3",  freq:  17234,book:[rare_anglo]},
				{move: "g3",   freq:  15096,book:[{move: "g6"}]},
				{move: "d4",   freq:   9202},
				{move: "b3",   freq:   2794},
				{move: "e3",   freq:   2632},
				{move: "d3",   freq:   1987},
			]}]},
			{move: "d3",  freq:   37119,book:[{move: "d6"}]},
			{move: "e4",  freq:   22466,book:[{move: "fxe4"}]},
			{move: "b3",  freq:   19390,book:[{move: "Nf6"}]},
			{move: "e3",  freq:   16813,book:[{move: "Nf6"}]},
			{move: "Nc3", freq:   11826},
		]}]},
		{move: "c4",  freq:   18379986,book:[{move:"f5",replies:[
			{move: "Nc3", freq:  197316,book:[{move: "Nf6",replies:[
				{move: "g3",  freq:  60566,book:[{move: "e5",replies:[
					{move: "Bg2",  freq:  63888,book:[{move: "Bb4",replies:[
						{move: "e3",   freq:   2986,book:[{move: "Bxc3",replies:[
							{move: "bxc3",  freq: 1097,book:[{move: "d6"}]},
							{move: "dxc3",  freq:  207,book:[{move: "Qe7"}]},
						]}]},
						{move: "Nd5",  freq:   2095,book:[{move: "Nxd5",replies:[
							{move: "cxd5",   freq:  1110,book:[{move: "O-O"}]},
							{move: "Bxd5",   freq:   226,book:[{move: "e4"}]},
						]}]},
						{move: "d3",   freq:   1799},
						{move: "Nf3",  freq:   1147},
						{move: "a3",   freq:    990},
						{move: "Qb3",  freq:    888},
						{move: "Qc2",  freq:    761},
					]}]},
					{move: "d3",   freq:   2803},
				]}]},
				{move: "d4",  freq:  32251,book:[{move: "e6"}]},
				{move: "Nf3", freq:  21826,book:[rare_anglo]},
				{move: "d3",  freq:  19590,book:[{move: "e5"}]},
				{move: "e3", freq:   11224},
			]}]},
			{move: "g3",  freq:   62122,book:[{move: "Nf6",replies:[
				{move: "Bg2", freq:  45490,book:[{move: "e5",replies:[
					{move: "Nc3", freq:  26759,book:[{move: "Bb4"}]},
					{move: "e3",  freq:   6015},
					{move: "d3",  freq:   4867},
					{move: "d4",  freq:   3465},
					{move: "Nf3", freq:   2389},
				]}]},
				{move: "Nc3", freq:   2371},
			]}]},
			{move: "d4",  freq:   37669,book:[c4_dutch]},
			{move: "Nf3", freq:   19424},
			{move: "e3",  freq:   18463},
		]}]},
		{move: "g3",  freq:   9688918,book:[lasker,{move: "h6",replies:[
			{move: "Bg2",  freq:   9336,book:[{move: "e5",replies:[
				{move: "d3",   freq:  160,book:[{move: "d5"}]},
				{move: "Nf3",  freq:  107,book:[{move: "e4",replies:[
					{move: "O-O",   freq:  23,book:[{move: "exf3"}]},
					{move: "Nd4",   freq:  14,book:[{move: "d5"}]},
					{move: "Ng1",   freq:   8,book:[{move: "d5"}]},
				]}]},
				{move: "b3",   freq:  102},
				{move: "e3",   freq:   94},
				{move: "e4",   freq:   60},
				{move: "d4",   freq:   54},
				{move: "c4",   freq:   49},
				{move: "c3",   freq:   47},
				{move: "Nc3",  freq:   25},
			]}]},
			{move: "Nf3",  freq:    447,book:[]},
			{move: "f3",   freq:    248,book:[]},
		]}]},
		{move: "e3",  freq:   9190645,book:[{move: "e6",replies:[
			{move: "d4",  freq:   317496,book:[{move: "d5",replies:[
				{move: "Nf3",   freq:  449960,book:[{move: "Nf6"}]},
				{move: "Bd3",   freq:  284845},
				{move: "c4",    freq:  244294},
				{move: "f4",    freq:  145197},
			]}]},
			{move: "Be2",  freq:  122758,book:[{move: "d5"}]},
			{move: "d3",   freq:  103475,book:[{move: "d5"}]},
			{move: "b3",   freq:  101209,book:[{move: "c5"}]},
			{move: "Nf3",  freq:   81687,book:[{move: "Nf6"}]},
			{move: "c4",   freq:   49790,book:[{move: "d5"}]},
			{move: "Ne2",   freq:  46384,book:[{move: "Nf6"}]},
			{move: "Bc4",   freq:  34918,book:[{move: "d5"}]},
			{move: "Nc3",   freq:  32618,book:[{move: "d5"}]},
			{move: "Qf3",   freq:  31335,book:[{move: "d5"}]},
			{move: "c3",   freq:   29270,book:[{move: "d5"}]},
			{move: "g3",   freq:   25455,book:[{move: "d5"}]},
		]}]},
		{move: "b3",  freq:   8596629,book:[{move: "e5",replies:[
			{move: "Bb2",  freq:  1668550,book:[{move: "Nc6",replies:[
				{move: "e3",   freq:  546756,book:[{move: "d5",replies:[
					{move: "Bb5",   freq: 278402,book:[{move: "Bd6",replies:[
						{move: "f4",   freq:  74248,book:[{move: "Qh4+",replies:[
							{move: "g3",  freq:  5367,book:[{move: "Qe7"}]},
							{move: "Kf1", freq:   331},
						]}]},
						{move: "Nf3",  freq:  57158},
						{move: "Bxc6+",freq:  26658},
						{move: "Ne2",  freq:   5778},
					]}]},
					{move: "Nf3",   freq:  62576,book:[{move: "e4"}]},
					{move: "d4",    freq:  17082},
					{move: "Nc3",   freq:  15775},
					{move: "Ne2",   freq:  12580},
					{move: "g3",    freq:  11712},
					{move: "c4",    freq:  10891},
					{move: "Be2",   freq:  10222},
				]}]},
				{move: "g3",   freq:  122334,book:[{move: "d5",replies:[
					{move: "Bg2",   freq: 1,book:[{move: "h5"}]},
				]}]},
				{move: "Nf3",   freq: 113568},
				{move: "d3",    freq:  59246},
				{move: "e4",    freq:  38772},
				{move: "c4",    freq:  38333},
				{move: "Nc3",   freq:  30759},
				{move: "d4",    freq:  16084},
			]}]},
			{move: "e3",   freq:    29645},
			{move: "Ba3",   freq:   14726},
			{move: "g3",  freq:     14232},
		]}]},
		{move: "d3",  freq:   4902794,book:[{move: "d5",replies:[
			{move: "e4",   freq:  223576,book:[{move: "dxe4",replies:[
				{move: "dxe4",  freq:  261480,book:[{move: "Qxd1+",replies:[
					{move: "Kxd1",  freq:  232305,book:[{move: "e5"}]},
				]}]},
				{move: "Nc3",   freq:  101166},
				{move: "d4",    freq:   20494},
			]}]},
			{move: "Nf3",  freq:  213700,book:[{move: "Nf6"}]},
			{move: "Nd2",  freq:  170496,book:[{move: "c5"}]},
			{move: "e3",  freq:   162083},
			{move: "g3",  freq:   129353},
			{move: "c3",  freq:   109697},
			{move: "Bd2",  freq:   56007},
		]}]},
		{move: "f4",  freq:   4796885,book:[{move: "Nf6",replies:[
			{move: "Nf3",  freq:  268623,book:[{move: "c5",replies:[
				{move: "e3",   freq: 10414,book:[{move: "g6"}]},
				{move: "g3",   freq:  3099},
				{move: "d3",   freq:  1590},
				{move: "b3",   freq:  1265},
			]}]},
			{move: "e3",   freq:   29973},
			{move: "d4",   freq:   19789},
			{move: "d3",   freq:   15261},
		]}]},
		{move: "Nc3", freq:   3510905,book:[{move: "d5",replies:[
			{move: "e4",   freq:   320976,book:[{move: "d4"}]},
			{move: "d4",   freq:   273334,book:[{move: "Nf6"}]},
			{move: "Nf3",  freq:    87726},
			{move: "d3",   freq:    54107},
			{move: "e3",   freq:    49160},
			{move: "b3",   freq:    33180},
		]}]},
		{move: "b4",  freq:   1967253,book:[{move: "e5"}]},
		{move: "g4",   freq:  1098601,book:[grob]},
	]
}
