const framrykk = {move: "e6",replies:[
	{move: "Bd3",   freq:    238587,book:[{move: "Bg6",replies:[
		{move: "O-O",  freq:    17452,book:[{move: "Ne7"}]},
		{move: "Bxg6", freq:    14673,book:[{move: "hxg6"}]},
		{move: "Nc3",  freq:     3894},
		{move: "Bg5",  freq:     3570},
		{move: "c3",   freq:     3024},
		{move: "h4",   freq:     2604},
	]}]},
	{move: "Be2",   freq:    218910,book:[{move: "Ne7",replies:[
		{move: "O-O",   freq:     28966,book:[{move: "Nd7"}]},
		{move: "Nb1d2", freq:      1435},
		{move: "Be3",   freq:      1114},
	]}]},
	{move: "Nc3",   freq:     78379},
	{move: "c3",    freq:     62689},
	{move: "c4",    freq:     55054},
	{move: "h3",    freq:     30474},
	{move: "Bg5",   freq:     24808},
	{move: "a3",    freq:     17358},
]}

const carohest = {move: "Bg4",replies:[
	{move: "h3",    freq:    183765,book:[{move: "Bxf3",replies:[
		{move: "Qxf3",  freq:    126123,book:[{move: "e6",replies:[
			{move: "d4",  freq:     26996,book:[{move: "Nf6",replies:[
				{move: "e5",   freq:     5596,book:[{move: "Nf6d7"}]},
				{move: "Bd3",  freq:     3548},
				{move: "Bg5",  freq:     1963},
				{move: "exd5", freq:      843},
				{move: "Be3",  freq:      496},
			]}]},
			{move: "d3",  freq:     22389},
			{move: "exd5",freq:     11205},
			{move: "Be2", freq:      8179},
			{move: "g3",  freq:      6171},
		]}]},
		{move: "gxf3",  freq:      3330},
	]}]},
	{move: "exd5",  freq:     63484},
	{move: "Be2",   freq:     32649},
	{move: "d4",    freq:     23156},
]}

const djup = [
	{move: "h5",     freq:     25049,book:[{move: "Bh7"}]},
	{move: "Ne5",    freq:     14140},
	{move: "Bd3",    freq:      5842},
	{move: "Bc4",    freq:      1043},
]

const slagfisher = {move: "Bf5",replies:[
	{move: "Bd3",   freq:    91990,book:[{move: "Bxd3",replies:[
		{move: "Qxd3",   freq:   61722,book:[{move: "Nf6",replies:[
			{move: "O-O",   freq:  8967,book:[{move: "e6"}]},
		]}]},
	]}]},
	{move: "Nc3",   freq:    76756},
	{move: "c4",    freq:    34295},
	{move: "Bb5+",  freq:    32105},
	{move: "c3",    freq:    20613},
	{move: "Be2",   freq:    17660},
]}

const hovudcaro = {move: "d5",replies:[
	{move: "e5",    freq:   3633647,book:[{move: "Bf5",replies:[
		{move: "Nf3",  freq:    644644,book:[framrykk]},
		{move: "Bd3",  freq:    524674},
		{move: "h4",   freq:    324292},
		{move: "g4",   freq:    209325},
		{move: "Nc3",  freq:    202640},
		{move: "f4",   freq:    198058},
		{move: "c3",   freq:    151806},
		{move: "c4",   freq:     99740},
		{move: "Ne2",  freq:     75115},
	]}]},
	{move: "exd5",  freq:   3096761,book:[{move: "cxd5",replies:[
		{move: "c4",   freq:    980757,book:[{move: "Nf6"}]},
		{move: "Nf3",  freq:    870130,book:[slagfisher]},
		{move: "Bd3",  freq:    783221,book:[{move: "Nf6"}]},
		{move: "Nc3",  freq:    366372},
		{move: "c3",   freq:    182882},
	]}]},
	{move: "Nc3",   freq:   2359549,book:[{move: "dxe4",replies:[
		{move: "Nxe4", freq:   2180145,book:[{move: "Bf5",replies:[
			{move: "Ng3",  freq:    984721,book:[{move: "Bg6",replies:[
				{move: "Nf3",  freq:   444842,book:[{move: "e6",replies:[
					{move: "Bd3",  freq:     29132},
					{move: "h4",   freq:     26826,book:[{move: "h6",replies:djup}]},
					{move: "Ne5",  freq:     13825},
					{move: "Bc4",  freq:      7125},
					{move: "c3",   freq:      6524},
				]}]},
				{move: "h4",   freq:   340565,book:[{move: "h6",replies:[
					{move: "Nf3",  freq:    145005,book:[{move: "e6",replies:djup}]},
					{move: "h5",   freq:    107866},
					{move: "Nh3",  freq:     21789},
					{move: "Ng1e2",freq:     10231},
				]}]},
			]}]},
			{move: "Bd3",  freq:     54596},
		]}]},
		{move: "f3",   freq:    150494,book:[{move: "Nf6"}]},
		{move: "Bc3",  freq:     35985},
	]}]},
	{move: "Nd2",   freq:    544429,book:[{move: "dxe4"}]},
	{move: "f3",    freq:    354017,book:[{move: "dxe4"}]},
]}

const panov = {move: "d5"}

const caro_kann = {move: "c6",replies:[
	{move: "d4",    freq:  10608683,book:[hovudcaro]},
	{move: "Nf3",   freq:   5453040,book:[{move: "d5",replies:[
		{move: "exd5",  freq:   3222309,book:[{move: "cxd5",replies:[
			{move: "d4",    freq:   2551509,book:[slagfisher]},
			{move: "Bb5+",  freq:    169735},
			{move: "Nc3",   freq:    147023},
			{move: "c4",    freq:     91912},
			{move: "Be2",   freq:     72887},
		]}]},
		{move: "e5",    freq:    750850,book:[{move: "Bf5",replies:[
			{move: "d4",    freq:    240706,book:[framrykk]},
			{move: "c3",    freq:      9197},
		]}]},
		{move: "Nc3",   freq:    720536,book:[carohest]},
		{move: "d3",    freq:    131640},
		{move: "d4",    freq:    110964},
	]}]},
	{move: "Nc3",   freq:   2196004,book:[{move: "d5",replies:[
		{move: "Nf3",   freq:   678825,book:[carohest]},
		{move: "exd5",  freq:   650184},
		{move: "d4",    freq:   356066},
		{move: "d3",    freq:   109212},
	]}]},
	{move: "Bc4",   freq:   1045234},
	{move: "f4",    freq:    812117},
	{move: "d3",    freq:    684885},
	{move: "c4",    freq:    593403,book:[panov]},//d5
	{move: "e5",    freq:    252221},
	{move: "c3",    freq:    125342},
	{move: "Qf3",   freq:    104264},
	{move: "b3",    freq:     75851},
	{move: "g3",    freq:     74923},
]}

const queenspawn = {move: "d5"}

const slavNf3 = {move: "Nf6"}

const samanreti = {move: "d5",replies:[
	{move: "c4",    freq:     700339,book:[slavNf3]},
	{move: "Bf4",   freq:     574197},
	{move: "e3",    freq:     402045},
	{move: "g3",    freq:     308465},
	{move: "Bg5",   freq:     221165},
	{move: "c3",    freq:     111145},
	{move: "Nc3",   freq:      99213},
]}

const kameleon = {move: "a6",replies:[
	{move: "Bg5",   freq:    36047,book:[{move: "Ne4",replies:[
		{move: "Nxe4",   freq:    3873,book:[{move: "dxe4",replies:[
			{move: "Nd2",    freq:    2558,book:[{move: "Qxd4",replies:[
				{move: "e3",     freq:     834,book:[{move: "Qxb2",replies:[
					{move: "Nxe4",   freq:     285,book:[{move: "f6",replies:[
						{move: "Bf4",    freq:     23,book:[{move: "e5",replies:[
							{move: "Bg3",    freq:     21,book:[{move: "Bb4+",replies:[
								{move: "Nd2",    freq:    21,book:[{move: "Bxd2+",replies:[
									{move: "Qxd2",    freq:     13,book:[{move: "Qxa1+"}]},
								]}]},
							]}]},
						]}]},
						{move: "Bh4",    freq:     13},
					]}]},
					{move: "Be2",    freq:     141},
					{move: "Rb1",    freq:     126},
				]}]},
				{move: "Be3",    freq:     286},
				{move: "Qc2",    freq:     214},
			]}]},
			{move: "Ng1",    freq:     766},
			{move: "Ne5",    freq:     375,book:[{move: "f6"}]},
			{move: "Nh4",    freq:      81},
		]}]},
		{move: "Bf4",    freq:    2754},
		{move: "Bh4",    freq:    2290},
		{move: "e3",     freq:    1176},
		{move: "cxd5",   freq:     975},
		{move: "Bd2",    freq:     454},
	]}]},
	{move: "e3",    freq:    35709},
	{move: "cxd5",  freq:    33862},
	{move: "c5",    freq:    22913},
	{move: "a4",    freq:    18553},
	{move: "Bf4",   freq:    17415},
	{move: "g3",    freq:    11246},
]}

const slav = {move: "d5",replies:[
	{move: "Nc3",    freq:    3885550,book:[{move: "Nf6",replies:[
		{move: "Nf3",   freq:   1295171,book:[kameleon]},
		{move: "Bg5",   freq:    431007},
		{move: "e3",    freq:    393154},
		{move: "cxd5",  freq:    385383},
		{move: "Bf4",   freq:    235408},
		{move: "f3",    freq:     49818},
		{move: "g3",    freq:     33658},
	]}]},
	{move: "Nf3",    freq:    1496470,book:[slavNf3]},
	{move: "cxd5",   freq:     949110,book:[{move: "cxd5"}]},
	{move: "e3",     freq:     571569,book:[{move: "Bf5"}]},
]}

const c6dronning = {move: "c6",replies:[
	{move: "c4",    freq:    2213413,book:[slav]},//d5
	{move: "Nf3",   freq:    1090752,book:[samanreti]},//d5
	{move: "Bf4",   freq:     613049,book:[{move: "Nf6"}]},
	{move: "e4",    freq:     508778,book:[hovudcaro]},
	{move: "e3",    freq:     440203,book:[{move: "d5"}]},
	{move: "Nc6",   freq:     212933,book:[{move: "d5"}]},
	{move: "c3",    freq:     176940,book:[{move: "d5"}]},
	{move: "Bg5",   freq:     116901},
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

const mannie = {move: "Ne4",replies:[
	{move: "Qc2",  freq:   2,book:[{move: "f5",replies:[
		{move: "Nb1d2", freq:  1,book:[{move: "Bxa1",replies:[
			{move: "Nxe4", freq:  1,book:[{move: "fxe4",replies:[
				{move: "Ng5",   freq:  1,book:[{move: "d5"}]},
				{move: "Qxe4",  freq:  1,book:[{move: "Bf6"}]},
			]}]},
			{move: "h3",   freq:  1,book:[{move: "Nxd2"}]},
		]}]},
		{move: "Nc3",   freq:  1,book:[{move: "Nxc3"}]},
	]}]},
	{move: "Ne5",  freq:   1,book:[{move: "dxe5"}]},
]}

const raven = {move: "d6",replies:[
	{move: "Qe1",  freq:   2620,book:[{move: "Nb4",replies:[
		{move: "Bd1",   freq:   67,book:[{move: "Bf5",replies:[
			{move: "d3",   freq:   42,book:[{move: "Bxd3",replies:[
				{move: "cxd3", freq:   9,book:[{move: "Nxd3",replies:[
					{move: "Qd2",  freq:   5,book:[{move: "Nxb2",replies:[
						{move: "Qxb2",   freq:   5,book:[mannie]},
					]}]},
					{move: "Qe2",  freq:   3,book:[{move: "Nxb2",replies:[
						{move: "Qxb2",  freq:   3,book:[mannie]},
					]}]},
					{move: "Qc3",  freq:   1,book:[{move: "Ne8"}]},
				]}]},
				{move: "Na3",  freq:   1},
				{move: "a3",   freq:   1},
			]}]},
		]}]},
		{move: "Na3",   freq:   28},
	]}]},
	{move: "Bb5",  freq:   2128,book:[{move: "Bd7",replies:[
		{move: "Bxc6",  freq:   502,book:[{move: "Bxc6"}]},
		{move: "d3",    freq:   379,book:[{move: "a6"}]},
		{move: "Qe1",   freq:    76},
		{move: "a4",    freq:    27},
	]}]},
	{move: "d3",   freq:   2088},
	{move: "c4",   freq:   1553},
	{move: "h4",   freq:    900},
	{move: "a4",   freq:    797},
	{move: "Nc3",  freq:    768},
	{move: "d4",   freq:    563},
	{move: "a3",   freq:    465},
]}



const mainbird = {move: "g6",replies:[
	{move: "b3",   freq:  1142,book:[{move: "Bg7",replies:[
		{move: "Bb2",   freq:  1214,book:[{move: "O-O",replies:[
			{move: "Be2",   freq:  4809,book:[{move: "Nc6",replies:[
				{move: "O-O",   freq:  3492,book:[raven]},
			]}]},
			{move: "Bd3",   freq:   487},
			{move: "Nc3",   freq:   427},
			{move: "g3",    freq:   379},
			{move: "c4",    freq:   343},
			{move: "a4",    freq:   234},
			{move: "d3",    freq:   197},
			{move: "d4",    freq:   173},
			{move: "Bc4",   freq:   172},
			{move: "Bb5",   freq:   148},
			{move: "h3",    freq:   114},
		]}]},
		{move: "Nc3",   freq:    54},
	]}]},
	{move: "Be2",  freq:   786,book:[{move: "Bg7",replies:[
		{move: "O-O",  freq:  1791,book:[{move: "O-O",replies:[
			{move: "d3",   freq:   582},
			{move: "c3",   freq:   430},
			{move: "Nc3",  freq:   258},
			{move: "b3",   freq:   203,book:[{move: "Nc6",replies:[
				{move: "Bb2",   freq:   158,book:[raven]},
				{move: "Nc3",   freq:     6},
			]}]},
			{move: "d4",   freq:   186},
			{move: "Qe1",  freq:   123},
			{move: "c4",   freq:   104},
			{move: "h4",   freq:    68},
			{move: "Kh1",  freq:    50},
		]}]},
		{move: "c3",   freq:    96},
	]}]},
	{move: "d4",   freq:   594,book:[{move: "cxd4"}]},
	{move: "c3",   freq:   441,book:[{move: "Bg7"}]},
]}

const bird = {move: "Nf6",replies:[
	{move: "Nf3",  freq:  306370,book:[{move: "c5",replies:[
		{move: "e3",   freq: 10414,book:[mainbird]},
		{move: "g3",   freq:  3099,book:[{move: "g6",replies:[
			{move: "Bg2",   freq:  933,book:[{move: "Bg7",replies:[
				{move: "O-O",   freq: 1964,book:[{move: "O-O",replies:[
					{move: "d3",    freq: 2558,book:[{move: "Nc6"}]},
					{move: "c3",    freq:  166},
					{move: "Nc3",   freq:   94},
				]}]},
				{move: "d3",    freq:  328},
				{move: "c3",    freq:   71},
			]}]},
			{move: "d3",    freq:   11},
		]}]},
		{move: "d3",   freq:  1590},
		{move: "b3",   freq:  1265},
	]}]},
	{move: "e3",   freq:   34479,book:[{move: "c5",replies:[
		{move: "Nf3",  freq:   3010,book:[mainbird]},
		{move: "d4",   freq:    435},
		{move: "b3",   freq:    331},
		{move: "c3",   freq:    240},
	]}]},
	{move: "d4",   freq:   22799,book:[{move: "d5"}]},
	{move: "d3",   freq:   17800},
	{move: "Nc3",  freq:   10848},
	{move: "b3",   freq:    9942},
	{move: "d3",   freq:    7757},
	{move: "g3",   freq:    6989},
	{move: "c4",   freq:    3492},
]}


const lasker = {move: "h5",replies:[
	{move: "Bg2",    freq:  182404,book:[{move: "h4",replies:[
		{move: "Nf3",     freq:   52558,book:[{move: "h3",replies:[
			{move: "Bf1",      freq:   26238,book:[{move: "Nf6",replies:[
				{move: "e3",     freq:   509,book:[{move: "c5",replies:[
					{move: "Be2",    freq:    10,book:[{move: "d5",replies:[
						{move: "d4",    freq:    46,book:[{move: "Nc6"}]},
						{move: "O-O",   freq:    30,book:[{move: "Nc6"}]},
						{move: "d3",    freq:     5},
						{move: "b3",    freq:     5},
					]}]},
					{move: "d4",     freq:     4,book:[{move: "d5"}]},
				]}]},
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
		{move: "gxh4",    freq:   43771,book:[{move: "e5",replies:[
			{move: "Nf3",    freq:  5782,book:[{move: "e4",replies:[
				{move: "Ng5",     freq:  2470,book:[{move: "d5",replies:[
					{move: "d3",    freq:   1312,book:[{move: "f6",replies:[
						{move: "Nh3",      freq:   369,book:[{move: "Rxh4",replies:[
							{move: "Nf4",     freq:  177,book:[{move: "Qd6",repleis:[
								{move: "Ng6",     freq:    5,book:[{move: "Rg4"}]},
								{move: "dxe4",    freq:    2,book:[{move: "Rxf4"}]},
								{move: "e3",      freq:    2,book:[{move: "g5"}]},
							]}]},
							{move: "Ng1",     freq:   82,book:[{move: "f5"}]},
							{move: "dxe4",    freq:   34,book:[{move: "Bxh3"}]},
						]}]},
						{move: "dxe4",     freq:   270,book:[{move: "fxg5"}]},
						{move: "Nxe4",     freq:    29,book:[{move: "dxe4"}]},
					]}]},
					{move: "c4",    freq:    366,book:[{move: "Rxh4"}]},
					{move: "Nxe4",     freq:  47},
					{move: "d4",     freq:    37},
					{move: "e3",     freq:    28},
					{move: "f3",     freq:    28},
					{move: "Nxf7",     freq:  28},
					{move: "Nh3",     freq:   18},
				]}]},
				{move: "Nd4",     freq:  1455,book:[{move: "c5"}]},
				{move: "Ng1",     freq:   276,book:[{move: "Qxh4"}]},
				{move: "Ne5",     freq:    66},
				{move: "d3",      freq:    44},
				{move: "O-O",     freq:    30},
			]}]},
			{move: "d4",     freq:  1482},
			{move: "d3",     freq:   682},
			{move: "e4",     freq:   275},
			{move: "h3",     freq:   271},
			{move: "Nc3",    freq:   228},
		]}]},
		{move: "g4",      freq:  12851,book:[{move: "h3",replies:[
			{move: "Nxh3",    freq:   1,book:[{move: "d5"}]},
			{move: "Bxh3",    freq:   1,book:[{move: "d5"}]},
		]}]},
		{move: "e3",    freq: 10008},
		{move: "d4",    freq:  8452},
		{move: "d3",    freq:  7925},
		{move: "c4",    freq:  6219},
		{move: "b3",    freq:  5942},
		{move: "Nh3",   freq:  5084},
		{move: "e4",    freq:  4378},
		{move: "h3",    freq:  4047},
	]}]},
	{move: "Nf3",    freq:   17245,book:[{move: "c5",replies:[
		{move: "Bg2",    freq:   1543,book:[{move: "Nc6"}]},
		{move: "h4",     freq:    202},
		{move: "d4",     freq:     74},
		{move: "c4",     freq:     50},
		{move: "h3",     freq:     42},
		{move: "d3",     freq:     35},
	]}]},
	{move: "h4",     freq:   10153,book:[{move: "c5"}]},
	{move: "f3",     freq:    6905},
	{move: "h3",     freq:    2811},
]}


const larsen = {move: "e5",replies:[
	{move: "Bb2",  freq:  1668550,book:[{move: "Nc6",replies:[
		{move: "e3",   freq:  546756,book:[{move: "d5",replies:[
			{move: "Bb5",   freq: 278402,book:[{move: "Bd6",replies:[
				{move: "f4",   freq:  74248,book:[{move: "Qh4+",replies:[
					{move: "g3",  freq:  5367,book:[{move: "Qe7",replies:[
						{move: "Nf3",  freq:  4014,book:[{move: "f6",replies:[
							{move: "fxe5", freq:  1098,book:[{move: "fxe5"}]},
							{move: "Nc3",  freq:   640},
							{move: "O-O",  freq:   475},
							{move: "Bxc6+", freq:  182},
						]}]},
						{move: "fxe5", freq:   172},
						{move: "Bxc6+",freq:   142},
						{move: "Nc3",  freq:   132},
					]}]},
					{move: "Kf1", freq:   331},
				]}]},
				{move: "Nf3",  freq:  57158,book:[{move: "f6",replies:[
					{move: "d4",    freq:  4929,book:[{move: "e4"}]},
					{move: "c3",    freq:  3142,book:[{move: "Ne7"}]},
					{move: "O-O",   freq:  2692,book:[{move: "a6"}]},
					{move: "Nh4",   freq:  2439,book:[{move: "Nh6"}]},
					{move: "Bxc6+", freq:  2390,book:[{move: "bxc6"}]},
					{move: "Nc3",   freq:   900},
					{move: "h3",    freq:   612},
					{move: "d3",    freq:   598},
				]}]},
				{move: "Bxc6+",freq:  26658,book:[{move: "bxc6",replies:[
					{move: "Nf3",  freq:  10197,book:[{move: "f6"}]},
					{move: "f4",   freq:   5831,book:[{move: "Qh4+"}]},
					{move: "Ne2",  freq:   3748},
					{move: "d3",   freq:   3190},
					{move: "h3",   freq:   1642},
					{move: "d4",   freq:   1270},
					{move: "Qh5",  freq:   1063},
					{move: "Nc3",  freq:    959},
					{move: "a3",   freq:    907},
					{move: "Qe2",  freq:    708},
				]}]},
				{move: "Ne2",  freq:   5778},
			]}]},
			{move: "Nf3",   freq:  62576,book:[{move: "e4",replies:[
				{move: "Nd4",    freq:  14275,book:[{move: "Nxd4",replies:[
					{move: "Bxd4",    freq:   7473,book:[{move: "Bf5",replies:[
						{move: "c4",     freq:    122,book:[{move: "c5",replies:[
							{move: "Bb2",    freq:     82,book:[{move: "d4",replies:[
								{move: "exd4",   freq:     45,book:[{move: "cxd4",replies:[
									{move: "d3",     freq:     32,book:[{move: "Bb4+",replies:[
										{move: "Nd2",    freq:     16,book:[{move: "e3",replies:[
											{move: "fxe3",   freq:   16,book:[{move: "dxe3",replies:[
												{move: "Qe2",    freq:     10,book:[{move: "Bxd2+"}]},
												{move: "Bxg7",   freq:      4,book:[{move: "exd2+"}]},
												{move: "Qf3",    freq:      2},
												{move: "Be2",    freq:      1},
											]}]},
										]}]},
										{move: "Ke2",    freq:      6,book:[{move: "Qe7"}]},
									]}]},
									{move: "Be2",    freq:      5},
								]}]},
								{move: "d3",     freq:      9},
								{move: "Be2",    freq:      9},
								{move: "Na3",    freq:      7},
							]}]},
							{move: "Be5",    freq:     16},
						]}]},
						{move: "d3",     freq:     96},
						{move: "Be2",    freq:     75},
						{move: "Nc3",    freq:     34},
						{move: "Bb2",    freq:     33},
						{move: "Bb5+",   freq:     15},
					]}]},
					{move: "exd4",    freq:    489},
				]}]},
				{move: "Ne5",    freq:   3159},
				{move: "Ng1",    freq:    905},
				{move: "Bb5",    freq:    331},
			]}]},
			{move: "d4",    freq:  17082},
			{move: "Nc3",   freq:  15775},
			{move: "Ne2",   freq:  12580},
			{move: "g3",    freq:  11712},
			{move: "c4",    freq:  10891},
			{move: "Be2",   freq:  10222},
		]}]},
		{move: "g3",   freq:  122334,book:[{move: "d5",replies:[
			{move: "Bg2",   freq: 111351,book:[{move: "h5",replies:[
				{move: "e3",   freq:   299,book:[{move: "h4",replies:[
					{move: "Ne2",  freq:   110,book:[{move: "h3",replies:[
						{move: "Bf1",  freq:    78,book:[{move: "Bg4"}]},
						{move: "Bf3",  freq:    10,book:[{move: "e4"}]},
					]}]},
					{move: "Nc3",  freq:    76,book:[{move: "Be6"}]},
					{move: "d3",   freq:    76,book:[{move: "h3"}]},
					{move: "gxh4", freq:    48,book:[{move: "Be6"}]},
					{move: "Qe2",  freq:    39},
					{move: "Nf3",  freq:    38},
					{move: "d4",   freq:    27},
					{move: "h3",   freq:    26},
					{move: "g4",   freq:    18},
				]}]},
				{move: "d3",   freq:   240,book:[{move: "h4"}]},
				{move: "h4",   freq:   204,book:[{move: "Bc5"}]},
				{move: "Nf3",  freq:   175,book:[{move: "e4"}]},
				{move: "h3",   freq:   138,book:[{move: "h4"}]},
				{move: "c4",   freq:    55,book:[{move: "d4"}]},
				{move: "Nc3",  freq:    45,book:[{move: "d4"}]},
				{move: "d4",   freq:    25},
				{move: "a3",   freq:    18},
				{move: "e4",   freq:    18},
			]}]},
			{move: "Nf3",   freq:   2673},
			{move: "e3",    freq:   1839},
			{move: "d3",    freq:   1027},
		]}]},
		{move: "Nf3",   freq: 113568,book:[{move: "e4",replies:[
			{move: "Nd4",    freq:  34510,book:[{move: "Qf6",replies:[
				{move: "e3",    freq:   1785,book:[{move: "d5"}]},
				{move: "c3",    freq:    141,book:[{move: "a6"}]},
				{move: "Nxc6",  freq:    140,book:[{move: "Qxb2"}]},
				{move: "Nb5",   freq:     39,book:[{move: "Qxb2",replies:[
					{move: "Nb1c3",     freq:    31,book:[{move: "Nb4",replies:[
						{move: "Rc1",     freq:     7,book:[{move: "Kd8",replies:[
							{move: "a3",     freq:    3,book:[{move: "a6",replies:[
								{move: "Nxc7",     freq:     1,book:[{move: "Na2"}]},
								{move: "Nd4",      freq:     1,book:[{move: "Na2"}]},
								{move: "axb4",     freq:     1,book:[{move: "axb5"}]},
							]}]},
						]}]},
						{move: "Rb1",     freq:     1},
					]}]},
					{move: "Nxc7+",     freq:     4,book:[{move: "Kd8"}]},
				]}]},
				{move: "Qc1",   freq:     13,book:[{move: "Nxd4"}]},
			]}]},
			{move: "Ne5",    freq:   7396},
			{move: "Ng1",    freq:   2701},
			{move: "e3",     freq:    417},
		]}]},
		{move: "d3",    freq:  59246},
		{move: "e4",    freq:  38772},
		{move: "c4",    freq:  38333},
		{move: "Nc3",   freq:  30759},
		{move: "d4",    freq:  16084},
	]}]},
	{move: "e3",   freq:    29645},
	{move: "Ba3",   freq:   14726},
	{move: "g3",  freq:     14232},
]}

const blackBook = {
	replies:[
		{move: "e4",   freq: 239073628,book:[caro_kann]},
		{move: "d4",   freq: 118737624,book:[c6dronning,queenspawn]},
		{move: "Nf3",  freq:  22804836,book:[{move: "c6",replies:[
			{move: "g3",  freq:   469180},
			{move: "d4",  freq:   313477,book:[samanreti]},//d5
			{move: "c4",  freq:   180713},
			{move: "e4",  freq:    94802},
		]}]},
		{move: "c4",  freq:   18379986,book:[{move: "c6",replies:[
			{move: "Nc3", freq:   709370},
			{move: "g3",  freq:   227422},
			{move: "d4",  freq:   163188,book:[slav]},
			{move: "Nf3", freq:   133254},
			{move: "e4",  freq:    83646,book:[panov]},
			{move: "e3",  freq:    79902},
		]}]},
		{move: "g3",  freq:   9688918,book:[lasker]},
		{move: "e3",  freq:   9190645},
		{move: "b3",  freq:   8596629,book:[larsen]},
		{move: "d3",  freq:   4902794},
		{move: "f4",  freq:   4796885,book:[bird]},//Nf6
		{move: "Nc3", freq:   3510905},
		{move: "b4",  freq:   1967253},
		{move: "g4",   freq:  1098601,book:[grob]},//d5
	]
}
