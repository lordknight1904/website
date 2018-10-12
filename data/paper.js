import fs from 'fs';

function base64_encode(file) {
    return fs.readFileSync(__dirname + `/paperPDF/${file}`, {encoding: 'base64'});
}

const conferenceArr = [
    38,
];
const zipArr = [
    33, 34, 36, 40, 54,
];
const jounalArr = [
    3, 6, 7, 8, 9,
    10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
    30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
    40, 41, 42, 43, 44, 46, 47, 48, 49,
    50, 51, 52, 53, 54, 55, 56, 57, 58,
];
let journal = {}, zip = {}, conference = {};
jounalArr.map((a) => {
    journal[`journal${a}`] = base64_encode(`journal${a}.pdf`);
});
zipArr.map((a) => {
    zip[`zip${a}`] = base64_encode(`journal${a}.zip`);
});
conferenceArr.map((a) => {
    conference[`conference${a}`] = base64_encode(`conference${a}.pdf`);
});

const paper = [
    {
        type: 'Journal',
        name: 'Joint Sparse Recovery Using Signal Space Matching Pursuit',
        authors: [
            'J. Kim',
            'L. Nguyen',
            'J. Wang',
            'B. Shim',
        ],
        submittedTo: 'IEEE Transactions on Information Theory',
        published: '2',
        detail: '',
        dateCreated: '2018-08-09 09:01:03.062Z'
    },
    {
        type: 'Journal',
        name: 'Service Multiplexing and Revenue Maximization in Sliced C-RAN Incorporated with URLLC and Multicast eMBB',
        authors: [
            'J. Tang',
            'B. Shim',
            'T. Chang',
            'T. Q. S. Quek',
        ],
        submittedTo: 'IEEE Journal on Selected Areas in Communications (JSAC)',
        published: '2',
        detail: '',
        dateCreated: '2018-08-09 08:59:03.062Z'
    },
    {
        type: 'Journal',
        name: 'Efficient Beam Training and Channel Estimation for Millimeter Wave Communications Under Mobility',
        authors: [
            'S. Lim',
            'J. Bae',
            'S. Kim',
            'B. Shim',
            'J. Choi',
        ],
        submittedTo: 'IEEE Transactions on Signal Processing',
        published: '2',
        detail: '',
        pdf: journal['journal3'],
        dateCreated: '2018-08-09 08:58:03.062Z'
    },
    {
        type: 'Journal',
        name: 'Tonal Signal Detection in Passive Sonar Systems Using Atomic Norm Minimization',
        authors: [
            'J. Kim',
            'L. Nguyen',
            'B. Shim',
            'W. Hong',
        ],
        submittedTo: 'IEEE Signal Processing Letters',
        published: '2',
        detail: '',
        dateCreated: '2018-08-09 08:57:03.062Z'
    },
    {
        type: 'Journal',
        name: 'Systematic resource allocation in cloud RAN with caching as a service under two timescale',
        authors: [
            'J. Tang',
            'T. Q. S. Quek',
            'T-H. Chang',
            'B. Shim',
        ],
        submittedTo: 'IEEE Journal on Selected Areas in Communications (JSAC)',
        published: '2',
        detail: '',
        dateCreated: '2018-08-09 08:56:03.062Z'
    },
    {
        type: 'Journal',
        name: 'Sparse Vector Coding for Ultra-Reliable and Low Latency Communications',
        authors: [
            'H. Ji',
            'S. Park',
            'B. Shim',
        ],
        submittedTo: 'IEEE Transactions on Wireless Communications',
        published: '2',
        pdf: journal['journal6'],
        dateCreated: '2018-08-09 08:55:03.062Z'
    },
    {
        type: 'Journal',
        name: 'MAP-based Active User and Data Detection for Massive Machine-Type Communications',
        authors: [
            'B. K. Jeong',
            'B. Shim',
            'K. B. Lee',
        ],
        submittedTo: 'IEEE Transactions on Vehicular Technology',
        published: '2',
        pdf: journal['journal7'],
        dateCreated: '2018-08-09 08:54:03.062Z'
    },
    {
        type: 'Journal',
        name: 'Channel Feedback Based on AoD-Adaptive Subspace Codebook in FDD Massive MIMO Systems',
        authors: [
            'W. Shen',
            'L. Dai',
            'B. Shim',
            'Z. Wang',
            'R. Heath',
        ],
        submittedTo: 'IEEE Transactions on Communications',
        published: '2',
        pdf: journal['journal8'],
        dateCreated: '2018-08-09 08:53:03.062Z'
    },
    {
        type: 'Journal',
        name: 'Ultra Reliable and Low Latency Communications in 5G Downlink: Physical Layer Aspects',
        authors: [
            'H. Ji',
            'S. Park',
            'J. Yeo',
            'Y. Kim',
            'J. Lee',
            'B. Shim',
        ],
        submittedTo: 'IEEE Wireless Communications',
        published: '2',
        detail: 'vol. 25, no. 3, pp. 124-130 , June. 2018',
        pdf: journal['journal9'],
        dateCreated: '2018-08-09 08:52:03.062Z'
    },
    {
        type: 'Journal',
        name: 'Sparsity-Aware Ordered Successive Interference Cancellation for Massive Machine-Type Communications',
        authors: [
            'J. Ahn',
            'B. Shim',
            'K. B. Lee',
        ],
        submittedTo: 'IEEE Wireless Communications Letters',
        published: '2',
        detail: 'vol. 7, no. 1, pp. 2162-2337, Feb. 2018',
        pdf: journal['journal10'],
        dateCreated: '2018-08-09 08:51:03.062Z'
    },
    {
        type: 'Journal',
        name: 'Packet structure and receiver design for low latency wireless communications with ultra short packets',
        authors: [
            'B. Lee',
            'S. Park',
            'D. Love',
            'H. Ji',
            'B. Shim',
        ],
        submittedTo: 'IEEE Transactions on Communications',
        published: '2',
        detail: 'vol. 66, no. 2, pp. 796-807, Feb. 2018',
        pdf: journal['journal11'],
        dateCreated: '2018-08-09 08:50:03.062Z'
    },
    {
        type: 'Journal',
        name: 'Optimal Power Allocation for Transmitting Correlated Sources with Energy Harvesting Constraints',
        authors: [
            'Y. Dong',
            'Z. Chen',
            'J. Wang',
            'B. Shim',
        ],
        submittedTo: 'IEEE Transactions on Wireless Communications',
        published: '2',
        detail: 'vol. 17, no. 1, pp. 461-476, Jan. 2018',
        pdf: journal['journal12'],
        dateCreated: '2018-08-09 08:49:03.062Z'
    },
    {
        type: 'Journal',
        name: 'Detection of Large-Scale Wireless Systems via Sparse Error Recovery',
        authors: [
            'J. Choi',
            'B. Shim',
        ],
        submittedTo: 'IEEE Transactions on Signal Processing',
        published: '2',
        detail: 'vol. 65, no. 22, pp. 6038-6052 , Nov. 2017',
        pdf: journal['journal13'],
        dateCreated: '2018-08-09 08:48:03.062Z'
    },
    {
        type: 'Journal',
        name: 'Oblique projection matching pursuit',
        authors: [
            'J. Wang',
            'F. Wang',
            'Y. Dong',
            'B. Shim',
        ],
        submittedTo: 'ACM Mobile Networks & Applications (MONET)',
        published: '2',
        detail: 'vol. 22, pp. 377-382, June. 2017',
        pdf: journal['journal14'],
        dateCreated: '2018-08-09 08:47:03.062Z'
    },
    {
        type: 'Journal',
        name: 'Compressed sensing for wireless communications: useful tips and tricks',
        authors: [
            'J. Choi',
            'B. Shim',
            'Y. Ding',
            'B. Rao',
            'D. Kim',
        ],
        submittedTo: 'IEEE Communications Survey and Tutorials',
        published: '2',
        detail: 'vol. 19, no. 3, pp. 1527-1550, 2017',
        pdf: journal['journal15'],
        dateCreated: '2018-08-09 08:46:03.062Z'
    },
    {
        type: 'Journal',
        name: 'Expectation-Maximization-based Channel Estimation for Multiuser MIMO Systems',
        authors: [
            'S. Park',
            'J. Choi',
            'J. Seol',
            'B. Shim',
        ],
        submittedTo: 'IEEE Transactions on Communications',
        published: '2',
        detail: 'vol. 65, no. 6, pp. 2397-2410, June. 2017',
        pdf: journal['journal16'],
        dateCreated: '2018-08-09 08:45:03.062Z'
    },
    {
        type: 'Journal',
        name: 'Overview of Full-Dimension MIMO in LTE-Advanced Pro',
        authors: [
            'H. Ji',
            'Y. Kim',
            'J. Lee',
            'E. Onggosanusi',
            'Y. Nam',
            'J. Zhang',
            'B. Lee',
            'B. Shim',
        ],
        submittedTo: 'IEEE Communications Magazine',
        published: '2',
        detail: 'vol. 55, pp. 176-184, Feb. 2017',
        pdf: journal['journal17'],
        dateCreated: '2018-08-09 08:44:03.062Z'
    },
    {
        type: 'Journal',
        name: 'DEARER: A Distance-and-Energy-Aware Routing with Energy Reservation for Energy Harvesting Wireless Sensor Networks',
        authors: [
            'Y. Dong',
            'J. Wang',
            'B. Shim',
        ],
        submittedTo: 'IEEE Journal on Selected Areas in Communications (JSAC)',
        published: '2',
        detail: 'vol. 34, no. 12, pp. 3798-3713, Dec. 2016',
        pdf: journal['journal18'],
        dateCreated: '2018-08-09 08:43:03.062Z'
    },
    {
        type: 'Journal',
        name: 'A MIMO relay with delayed feedback can improve DoF in the K-user MISO interference channel with no CSIT',
        authors: [
            'W. Shin',
            'B. Lee',
            'B. Shim',
            'J. Lee',
        ],
        submittedTo: 'IEEE Transactions on Vehicular Technology',
        published: '2',
        detail: 'vol. 65, no. 12, pp. 10188-10192, Dec. 2016',
        pdf: journal['journal19'],
        dateCreated: '2018-08-09 08:42:03.062Z'
    },
    {
        type: 'Journal',
        name: 'Sparse Signal Recovery via Tree Search Matching Pursuit',
        authors: [
            'J. Lee',
            'J. Choi',
            'B. Shim',
        ],
        submittedTo: 'Journal of Communications and Networks',
        published: '2',
        detail: 'vol. 18, no. 5, pp. 699-712, Oct. 2016',
        pdf: journal['journal20'],
        dateCreated: '2018-08-09 08:41:03.062Z'
    },
    {
        type: 'Journal',
        name: 'Joint Channel Training and Feedback for FDD Massive MIMO Systems',
        authors: [
            'W. Shen',
            'L. Dai',
            'Y. Shi',
            'B. Shim',
            'Z. Wang',
        ],
        submittedTo: 'IEEE Transactions on Vehicular Technology',
        published: '2',
        detail: 'vol. 65, no. 10, pp. 8762-8767, Oct. 2016',
        pdf: journal['journal21'],
        dateCreated: '2018-08-09 08:40:03.062Z'
    },
    {
        type: 'Journal',
        name: 'Exact Recovery of Sparse Signals Using Orthogonal Matching Pursuit: How Many Iterations Do We Need?',
        authors: [
            'J. Wang',
            'B. Shim',
        ],
        submittedTo: 'IEEE Transactions on Signal Processing',
        published: '2',
        detail: 'vol. 64, no. 16, pp. 4194-4202, Aug. 2016',
        pdf: journal['journal22'],
        dateCreated: '2018-08-09 08:39:03.062Z'
    },
    {
        type: 'Journal',
        name: 'Structured compressive sensing based spatio-temporal joint channel estimation for FDD massive MIMO',
        authors: [
            'Z. Gao',
            'L. Dai',
            'W. Dai',
            'B. Shim',
            'Z. Wang',
        ],
        submittedTo: 'IEEE Transactions on Communications',
        published: '2',
        detail: 'vol. 64, no. 2, pp. 601-617, Feb. 2016',
        pdf: journal['journal23'],
        dateCreated: '2018-08-09 08:38:03.062Z'
    },
    {
        type: 'Journal',
        name: 'Recovery of sparse signals via generalized orthogonal matching pursuit: A new analysis',
        authors: [
            'J. Wang',
            'S. Kwon',
            'P. Li',
            'B. Shim',
        ],
        submittedTo: 'IEEE Transactions on Signal Processing',
        published: '2',
        detail: 'vol. 64, no. 4, pp. 1076-1089, Feb. 2016',
        pdf: journal['journal24'],
        dateCreated: '2018-08-09 08:37:03.062Z'
    },
    {
        type: 'Journal',
        name: 'Joint CSIT acquisition based on low-rank matrix completion for FDD massive MIMO systems',
        authors: [
            'W. Shen',
            'L. Dai',
            'B. Shim',
            'S. Mumtaz',
            'Z. Wang',
        ],
        submittedTo: 'IEEE Communications Letters',
        published: '2',
        detail: 'vol. 19, no. 12, pp. 2178-2181, Dec. 2015',
        pdf: journal['journal25'],
        dateCreated: '2018-08-09 08:36:03.062Z'
    },
    {
        type: 'Journal',
        name: 'Iterative group detection and decoding for large MIMO systems',
        authors: [
            'J. Choi',
            'B. Lee',
            'B. Shim',
        ],
        submittedTo: 'Journal of Communications and Networks',
        published: '2',
        detail: 'vol 17. no. 6, pp. 609-621, Dec. 2015',
        pdf: journal['journal26'],
        dateCreated: '2018-08-09 08:35:03.062Z'
    },
    {
        type: 'Journal',
        name: 'Downlink pilot reduction for massive MIMO systems via compressed sensing',
        authors: [
            'S. Chang',
            'B. Shim',
            'J. Choi',
        ],
        submittedTo: 'IEEE Communications Letters',
        published: '2',
        detail: 'vol. 19, no. 11, pp. 1889-1892, Nov. 2015',
        pdf: journal['journal27'],
        dateCreated: '2018-08-09 08:34:03.062Z'
    },
    {
        type: 'Journal',
        name: 'Guest Editorial: Location-Awareness for Radios and Networks, Part II',
        authors: [
            'T. Q. Duong',
            'M. Elkashlan',
            'G. K. Karagiannidis',
            'H. Wymeersch',
            'Y. Mostofi',
            'B. Shim',
        ],
        submittedTo: 'IEEE Journal on Selected Areas in Communications (JSAC)',
        published: '2',
        detail: 'vol. 33, no. 11, pp. 2269-2271, Nov. 2015',
        pdf: journal['journal28'],
        dateCreated: '2018-08-09 08:33:03.062Z'
    },
    {
        type: 'Journal',
        name: 'Statistical recovery of block-sparse time-varying signals from multiple measurement vectors',
        authors: [
            'J. Choi',
            'B. Shim',
        ],
        submittedTo: 'IEEE Transactions on Signal Processing',
        published: '2',
        detail: 'vol. 63, no. 22, pp. 6136-6148, Nov. 2015',
        pdf: journal['journal29'],
        dateCreated: '2018-08-09 08:32:03.062Z'
    },
    {
        type: 'Journal',
        name: 'Antenna grouping based feedback compression for FDD-based massive MIMO systems',
        authors: [
            'B. Lee',
            'J. Choi',
            'J. Seol',
            'D. Love',
            'B. Shim',
        ],
        submittedTo: 'IEEE Transactions on Communications',
        published: '2',
        detail: 'vol. 63, no. 9, pp. 3261-3274, Sept. 2015',
        pdf: journal['journal30'],
        dateCreated: '2018-08-09 08:31:03.062Z'
    },
    {
        type: 'Journal',
        name: 'Guest Editorial: Location-Awareness for Radios and Networks, Part I',
        authors: [
            'T. Q. Duong',
            'M. Elkashlan',
            'G. K. Karagiannidis',
            'H. Wymeersch',
            'Y. Mostofi',
            'B. Shim',
        ],
        submittedTo: 'IEEE Journal on Selected Areas in Communications (JSAC)',
        published: '2',
        detail: 'vol. 33, no. 7, pp. 1285-1287, July. 2015',
        pdf: journal['journal31'],
        dateCreated: '2018-08-09 08:30:03.062Z'
    },
    {
        type: 'Journal',
        name: 'Iterative channel estimation using virtual pilot signals for MIMO-OFDM systems',
        authors: [
            'S. Park',
            'B. Shim',
            'J. Choi',
        ],
        submittedTo: 'IEEE Transactions on Signal Processing',
        published: '2',
        detail: 'vol. 63, no. 12, pp. 3032-3045, June. 2015',
        pdf: journal['journal32'],
        dateCreated: '2018-08-09 08:29:03.062Z'
    },
    {
        type: 'Journal',
        name: 'Sparse detection with integer constraint using multipath matching pursuit',
        authors: [
            'B. Shim',
            'S. Kwon',
            'B. Song',
        ],
        submittedTo: 'IEEE Communications Letters',
        published: '2',
        detail: 'vol. 18, no. 10, pp. 1851-1854, Oct. 2014',
        pdf: journal['journal33'],
        zip: zip['zip33'],
        dateCreated: '2018-08-09 08:29:03.062Z'
    },
    {
        type: 'Journal',
        name: 'Multipath matching pursuit',
        authors: [
            'S. Kwon',
            'J. Wang',
            'B. Shim',
        ],
        submittedTo: 'IEEE Transactions on Information Theory',
        published: '2',
        detail: 'vol. 60, no. 5, pp. 2986-3001, May 2014',
        pdf: journal['journal34'],
        zip: zip['zip34'],
        dateCreated: '2018-08-09 08:27:03.062Z'
    },
    {
        type: 'Journal',
        name: 'Recent trend of multiuser MIMO in LTE-Advanced',
        authors: [
            'C. Lim',
            'T. Yoo',
            'B. Clercks',
            'B. Lee',
            'B. Shim',
        ],
        submittedTo: 'IEEE Communications Magazine',
        published: '2',
        detail: 'pp 127-135, March 2013',
        pdf: journal['journal35'],
        dateCreated: '2018-08-09 08:26:03.062Z'
    },
    {
        type: 'Journal',
        name: 'Generalized orthogonal matching pursuit',
        authors: [
            'J. Wang',
            'S. Kwon',
            'B. Shim',
        ],
        submittedTo: 'IEEE Transactions on Signal Processing',
        published: '2',
        detail: 'vol. 60, no. 12, pp. 6202-6216, Dec. 2012',
        pdf: journal['journal36'],
        zip: zip['zip36'],
        dateCreated: '2018-08-09 08:25:03.062Z'
    },
    {
        type: 'Journal',
        name: 'A vector perturbation with user selection for multiuser MIMO downlink',
        authors: [
            'B. Lee',
            'B. Shim',
        ],
        submittedTo: 'IEEE Transactions on Communications',
        published: '2',
        detail: 'vol. 60, no. 11, pp. 3322-3331, Nov. 2012',
        pdf: journal['journal37'],
        dateCreated: '2018-08-09 08:24:03.062Z'
    },
    {
        type: 'Journal',
        name: 'On the Beamforming design for MIMO multi-pair two-way relay channels',
        authors: [
            'H. Chung',
            'N. Lee',
            'B. Shim',
            'T. Oh',
        ],
        submittedTo: 'IEEE Transactions on Vehicular Technology',
        published: '2',
        detail: 'vol. 61, no. 7, pp. 3301-3306, Sept. 2012',
        pdf: journal['journal38'],
        dateCreated: '2018-08-09 08:23:03.062Z'
    },
    {
        type: 'Journal',
        name: 'On the recovery limit of sparse signals using orthogonal matching pursuit',
        authors: [
            'J. Wang',
            'B. Shim',
        ],
        submittedTo: 'IEEE Transactions on Signal Processing',
        published: '2',
        detail: 'vol. 60, no. 9, pp. 4973-4976, Sept. 2012',
        pdf: journal['journal39'],
        dateCreated: '2018-08-09 08:22:03.062Z'
    },
    {
        type: 'Journal',
        name: 'Soft-input soft-output list sphere detection with a probabilistic radius tightening',
        authors: [
            'J. Lee',
            'B. Shim',
            'I. Kang',
        ],
        submittedTo: 'IEEE Transactions on Wireless Communications',
        published: '2',
        detail: 'vol. 60, no. 9, pp. 4973-4976, Sept. 2012',
        pdf: journal['journal40'],
        zip: zip['zip40'],
        dateCreated: '2018-08-09 08:21:03.062Z'
    },
    {
        type: 'Journal',
        name: 'Towards the performance of ML and the complexity of MMSE - A hybrid approach for multiuser detection',
        authors: [
            'B. Shim',
            'J. Choi',
            'I. Kang',
        ],
        submittedTo: 'IEEE Transactions on Wireless Communications',
        published: '2',
        detail: 'vol. 11, no. 7, pp. 2508-2519, July 2012',
        pdf: journal['journal41'],
        dateCreated: '2018-08-09 08:20:03.062Z'
    },
    {
        type: 'Journal',
        name: 'Multiuser detection via compressive sensing',
        authors: [
            'B. Shim',
            'B. Song',
        ],
        submittedTo: 'IEEE Communications Letters',
        published: '2',
        detail: 'vol. 16, no. 7, pp. 972-974, July 2012',
        pdf: journal['journal42'],
        dateCreated: '2018-08-09 08:19:03.062Z'
    },
    {
        type: 'Journal',
        name: 'Iterative interstream interference cancellation for HSPA+ System',
        authors: [
            'H. Yoo',
            'B. Shim',
            'T. Oh',
        ],
        submittedTo: 'Journal of Communications and Networks',
        published: '2',
        detail: 'vol. 14, no. 3, pp 273-279, June 2012',
        pdf: journal['journal43'],
        dateCreated: '2018-08-09 08:18:03.062Z'
    },
    {
        type: 'Journal',
        name: 'Efficient soft-input soft-output tree detection via an improved path metric',
        authors: [
            'J. Choi',
            'B. Shim',
            'A. Singer',
        ],
        submittedTo: 'IEEE Transactions on Information Theory',
        published: '2',
        detail: 'vol. 58, no. 3, pp. 1518-1533, March 2012',
        pdf: journal['journal44'],
        dateCreated: '2018-08-09 08:17:03.062Z'
    },
    {
        type: 'Journal',
        name: 'Near optimal bound of orthogonal matching pursuit using restricted isometric constant',
        authors: [
            'J. Wang',
            'S. Kwon',
            'B. Shim',
        ],
        submittedTo: 'Eurasip Journal on Advances in Signal Processing',
        published: '2',
        detail: 'Jan. 2012',
        dateCreated: '2018-08-09 08:16:03.062Z'
    },
    {
        type: 'Journal',
        name: 'A MMSE vector precoding with block diagonalization for multiuser MIMO downlink',
        authors: [
            'J. Park',
            'B. Lee',
            'B. Shim',
        ],
        submittedTo: 'IEEE Transactions on Communications',
        published: '2',
        detail: 'vol. 60, pp. 569-577, Feb. 2012',
        pdf: journal['journal46'],
        dateCreated: '2018-08-09 08:15:03.062Z'
    },
    {
        type: 'Journal',
        name: 'Fast high-quality volume ray-casting with virtual samplings',
        authors: [
            'B. Lee',
            'J. Yun',
            'J. Seo',
            'B. Shim',
            'Y. Shin',
            'B. Kim',
        ],
        submittedTo: 'IEEE Transactions on Visualization and Computer Graphics',
        published: '2',
        detail: 'vol. 16, no. 6, pp. 1525-1532, Dec. 2010',
        pdf: journal['journal47'],
        dateCreated: '2018-08-09 08:14:03.062Z'
    },
    {
        type: 'Journal',
        name: 'A low-complexity decoding via reduced dimension maximum likelihood search',
        authors: [
            'J. Choi',
            'B. Shim',
            'A. Singer',
            'N. Cho',
        ],
        submittedTo: 'IEEE Transactions on Signal Processing',
        published: '2',
        detail: 'vol. 58, no. 3, pp. 1780-1793, March 2010',
        pdf: journal['journal48'],
        dateCreated: '2018-08-09 08:13:03.062Z'
    },
    {
        type: 'Journal',
        name: 'On further reduction of complexity in tree pruning based sphere search',
        authors: [
            'B. Shim',
            'I. Kang',
        ],
        submittedTo: 'IEEE Transactions on Communications',
        published: '2',
        detail: 'vol. 58, no. 2, pp. 417-422, Feb. 2010',
        pdf: journal['journal49'],
        dateCreated: '2018-08-09 08:12:03.062Z'
    },
    {
        type: 'Journal',
        name: 'Decision-feedback closest lattice point search for UMTS HSPA system',
        authors: [
            'B. Shim',
            'F. Abrishamkar',
            'I. Kang',
        ],
        submittedTo: 'IEEE Signal Processing Letters',
        published: '2',
        detail: 'vol. 16, pp. 1035-1038, Dec. 2009',
        pdf: journal['journal50'],
        dateCreated: '2018-08-09 08:11:03.062Z'
    },
    {
        type: 'Journal',
        name: 'Nonlinear preprocessing method for detecting peaks from gas chromatograms',
        authors: [
            'B. Shim',
            'H. Min',
            'S. Yoon',
        ],
        submittedTo: 'BMC Bioinformatics',
        published: '2',
        detail: 'pp. 1-10, Nov. 2009',
        pdf: journal['journal51'],
        dateCreated: '2018-08-09 08:10:03.062Z'
    },
    {
        type: 'Journal',
        name: 'Joint modulation classification and detection using sphere decoding',
        authors: [
            'B. Shim',
            'I. Kang',
        ],
        submittedTo: 'IEEE Signal Processing Letters',
        published: '2',
        detail: 'vol. 16, no. 9, pp. 778-781, Sept. 2009',
        pdf: journal['journal52'],
        dateCreated: '2018-08-09 08:09:03.062Z'
    },
    {
        type: 'Journal',
        name: 'A robust peak detection method for RNA structure inference by high-throughput contact mapping',
        authors: [
            'J. Kim',
            'S. Yu',
            'B. Shim',
            'H. Kim',
            'H. Min',
            'E. Chung',
            'R. Das',
            'S. Yoon',
        ],
        submittedTo: 'Bioinformatics',
        published: '2',
        detail: 'vol. 25, no. 9, pp. 1137-1144, Sept. 2009',
        pdf: journal['journal53'],
        dateCreated: '2018-08-09 08:08:03.062Z'
    },
    {
        type: 'Journal',
        name: 'Sphere decoding with a probabilistic tree pruning',
        authors: [
            'B. Shim',
            'I. Kang',
        ],
        submittedTo: 'IEEE Transactions on Signal Processing',
        published: '2',
        detail: 'vol. 56, no. 10, pp. 4867-4878, Oct. 2008',
        pdf: journal['journal54'],
        zip: zip['zip54'],
        dateCreated: '2018-08-09 08:07:03.062Z'
    },
    {
        type: 'Journal',
        name: 'Low-power filtering via minimum power soft error cancellation (MP-SEC)',
        authors: [
            'J. Choi',
            'B. Shim',
            'A. Singer',
            'N. Cho',
        ],
        submittedTo: 'IEEE Transactions on Signal Processing',
        published: '2',
        detail: 'vol. 55, no. 10, pp. 5084-5096, Oct., 2007',
        pdf: journal['journal55'],
        dateCreated: '2018-08-09 08:06:03.062Z'
    },
    {
        type: 'Journal',
        name: 'Energy-efficient soft error-tolerant digital signal processing',
        authors: [
            'B. Shim',
            'N. Shanbhag',
        ],
        submittedTo: 'IEEE Transactions on VLSI systems',
        published: '2',
        detail: 'vol. 14, no. 4, pp. 336-348, April, 2006',
        pdf: journal['journal56'],
        dateCreated: '2018-08-09 08:05:03.062Z'
    },
    {
        type: 'Journal',
        name: 'Reliable low-Power digital signal processing via reduced precision redundancy',
        authors: [
            'B. Shim',
            'S. Sridhara',
            'N. Shanbhag',
        ],
        submittedTo: 'IEEE Transactions on VLSI systems',
        published: '2',
        detail: 'vol. 12, no. 5, pp.497-510, May 2004',
        pdf: journal['journal57'],
        dateCreated: '2018-08-09 08:04:03.062Z'
    },
    {
        type: 'Journal',
        name: 'Complexity analysis of multi-carrier single-carrier systems for Very-high-speed digital subscriber line',
        authors: [
            'B. Shim',
            'N. Shanbhag',
        ],
        submittedTo: 'IEEE Transactions on Signal Processing',
        published: '2',
        detail: 'vol. 50, no. 1, pp.282-293, Jan. 2003',
        pdf: journal['journal58'],
        dateCreated: '2018-08-09 08:03:03.062Z'
    },

    {
        type: 'Conference',
        name: 'FDD-based Cell-Free massive MIMO Systems',
        authors: [
            'S. Kim',
            'B. Shim',
        ],
        submittedTo: 'IEEE workshop on signal processing advances in wireless communications (SPAWC) 2018',
        published: '0',
        dateCreated: '2018-08-09 08:02:03.062Z'
    },
    {
        type: 'Conference',
        name: 'Multiple Orthogonal Least Squares for Joint Sparse Recovery',
        authors: [
            'J. Kim',
            'B. Shim',
        ],
        submittedTo: 'IEEE international symposium on information theory (ISIT) 2018',
        published: '0',
        dateCreated: '2018-08-09 08:01:03.062Z'
    },
    {
        type: 'Conference',
        name: 'A compressive sensing-based active user and symbol detection technique for massive machine-type communications',
        authors: [
            'B. K. Jeong',
            'B. Shim',
            'K. B. Lee',
        ],
        submittedTo: 'Proc. of International conf. on acoustics, speech, and signal processing (ICASSP) 2018',
        published: '2',
        detail: '',
        dateCreated: '2018-08-09 08:00:03.062Z'
    },
    {
        type: 'Conference',
        name: 'Joint Active User Detection and Channel Estimation for Massive Machine-Type Communications',
        authors: [
            'S. Park',
            'H. Seo',
            'H. Ji',
            'B. Shim',
        ],
        submittedTo: 'Proc. of IEEE workshop on signal processing advances in wireless communications (SPAWC) 2017',
        published: '2',
        detail: '',
        dateCreated: '2018-08-09 07:58:03.062Z'
    },
    {
        type: 'Conference',
        name: 'Exploring the Interactions of Communication, Computing and Caching in Cloud RAN under Two Timescale',
        authors: [
            'J. Tang',
            'L. Teng',
            'T. Q. S. Quek',
            'T. Chang',
            'B. Shim',
        ],
        submittedTo: 'Proc. of IEEE workshop on signal processing advances in wireless communications (SPAWC) 2017Proc. of IEEE workshop on signal processing advances in wireless communications (SPAWC) 2017',
        published: '2',
        detail: '',
        dateCreated: '2018-08-09 07:57:03.062Z'
    },
    {
        type: 'Conference',
        name: 'Sampling-based Tracking of Time-varying Channels for Millimeter Wave-band Communications',
        authors: [
            'J. Yoo',
            'J. Bae',
            'S. Lim',
            'S. Kim',
            'J. Choi',
            'B. Shim',
        ],
        submittedTo: 'Proc. of IEEE international conf. on communications (ICC) 2017',
        published: '2',
        detail: '',
        pdfPath: 'https://ieeexplore.ieee.org/document/7996518/',
        dateCreated: '2018-08-09 07:56:03.062Z'
    },
    {
        type: 'Conference',
        name: 'Channel Sparsification Beamforming for Internet-of-Things Systems',
        authors: [
            'H. Ji',
            'J. Choi',
            'B. Shim',
        ],
        submittedTo: 'Proc. of IEEE international conf. on communications (ICC) 2017',
        published: '2',
        detail: '',
        pdfPath: 'https://ieeexplore.ieee.org/document/7996952/',
        dateCreated: '2018-08-09 07:55:03.062Z'
    },
    {
        type: 'Conference',
        name: 'Multiple subspace matching pursuit for spectrum sensing',
        authors: [
            'W. Kim',
            'J. Kim',
            'B. Shim',
            'D. Park',
        ],
        submittedTo: 'Proc. of International conf. on acoustics, speech, and signal processing (ICASSP) 2017',
        published: '2',
        detail: '',
        pdfPath: 'https://ieeexplore.ieee.org/document/7952826/',
        dateCreated: '2018-08-09 07:54:03.062Z'
    },
    {
        type: 'Conference',
        name: 'Kalman-based time-varying sparse channel estimation',
        authors: [
            'J. Yoo',
            'A. Sayed',
            'J. Choi',
            'B. Shim',
        ],
        submittedTo: 'Proc. of IEEE international conf. on communication systems (ICCS) 2016',
        published: '2',
        detail: '',
        pdfPath: 'https://ieeexplore.ieee.org/document/7833599/',
        dateCreated: '2018-08-09 07:53:03.062Z'
    },
    {
        type: 'Conference',
        name: 'Packet structure and receiver design for low-latency communications with ultra-small packets',
        authors: [
            'B. Lee',
            'S. Park',
            'D. Love',
            'H. Ji',
            'B. Shim',
        ],
        submittedTo: 'Proc. of IEEE GLOBECOM conference 2016',
        published: '2',
        detail: '',
        pdfPath: 'https://ieeexplore.ieee.org/document/7842122/',
        dateCreated: '2018-08-09 07:52:03.062Z'
    },
    {
        type: 'Conference',
        name: 'Transmitting correlated sources using energy harvesting transmitter',
        authors: [
            'Y. Dong',
            'J. Wang',
            'B. Shim',
        ],
        submittedTo: 'Proc. of IEEE/CIC international conf. on communications in China (CIC/ICCC) 2016',
        published: '2',
        detail: '',
        pdfPath: 'https://ieeexplore.ieee.org/document/7636900/',
        dateCreated: '2018-08-09 07:51:03.062Z'
    },
    {
        type: 'Conference',
        name: 'Virtual pilot-based channel estimation and multiuser detection for multiuser MIMO in LTE-Advanced',
        authors: [
            'S. Park',
            'J. Choi',
            'J. Seol',
            'B. Shim',
        ],
        submittedTo: 'Proc. of Vehicular technology conference (VTC) 2016',
        published: '2',
        detail: '',
        pdfPath: 'https://ieeexplore.ieee.org/document/7881966/',
        dateCreated: '2018-08-09 07:50:03.062Z'
    },
    {
        type: 'Conference',
        name: 'Exploiting dominant eigendirections for feedbck compression for FDD-based massive MIMO systems',
        authors: [
            'B. Lee',
            'D. Love',
            'B. Shim',
        ],
        submittedTo: 'Proc. of IEEE international conf. on communications (ICC) 2016',
        published: '2',
        detail: '',
        pdfPath: 'https://ieeexplore.ieee.org/document/7511519/',
        dateCreated: '2018-08-09 07:49:03.062Z'
    },
    {
        type: 'Conference',
        name: 'Perfect error compensation via algorithmic error cancellation',
        authors: [
            'S. K. Gonugondla',
            'B. Shim',
            'N. Shanbhag',
        ],
        submittedTo: 'Proc. of IEEE international conf. on acoustics, speech, and signal processing (ICASSP) 2016',
        published: '2',
        detail: '',
        pdfPath: 'https://ieeexplore.ieee.org/document/7471819/',
        dateCreated: '2018-08-09 07:48:03.062Z'
    },
    {
        type: 'Conference',
        name: 'Localization of Internet of Things Networks: Matrix Completion Approach',
        authors: [
            'L. Nguyen',
            'S. Kim',
            'B. Shim',
        ],
        submittedTo: 'Proc. of information theory and application workshop (ITA) 2016',
        published: '2',
        detail: '',
        pdfPath: 'https://ieeexplore.ieee.org/document/7888154/',
        dateCreated: '2018-08-09 07:47:03.062Z'
    },
    {
        type: 'Conference',
        name: 'Greedy Tree Search for Internet of Things (IoT) Signal Detection',
        authors: [
            'J. Lee',
            'B. Shim',
        ],
        submittedTo: 'Proc. of IEEE international symposium on information theory (ISIT) 2015',
        published: '2',
        detail: '',
        pdfPath: 'https://ieeexplore.ieee.org/document/7282919/',
        dateCreated: '2018-08-09 07:46:03.062Z'
    },
    {
        type: 'Conference',
        name: '3D beamforming for capacity boosting in LTE-Advanced system',
        authors: [
            'H. Ji',
            'B. Lee',
            'B. Shim',
            'Y. Nam',
            'Y. Kwak',
            'H. Noh',
            'C. Shin',
        ],
        submittedTo: 'Proc. of IEEE personal indoor mobile radio communications (PIMRC) symposium 2015',
        published: '2',
        detail: '',
        pdfPath: 'https://ieeexplore.ieee.org/document/7343690/',
        dateCreated: '2018-08-09 07:45:03.062Z'
    },
    {
        type: 'Conference',
        name: 'Soft decision-directed channel estimation for multiuser MIMO systems',
        authors: [
            'S. Park',
            'J. Choi',
            'K. Lee',
            'B. Shim',
        ],
        submittedTo: 'Proc. of IEEE personal indoor mobile radio communications (PIMRC) symposium 2015',
        published: '2',
        detail: '',
        pdfPath: 'https://ieeexplore.ieee.org/document/7343275/',
        dateCreated: '2018-08-09 07:44:03.062Z'
    },
    {
        type: 'Conference',
        name: 'Sparse symbol detection by a greedy tree search',
        authors: [
            'J. Lee',
            'B. Shim',
        ],
        submittedTo: 'Proc. of IEEE international conf. on acoustics, speech, and signal processing (ICASSP) 2015',
        published: '2',
        detail: '',
        pdfPath: 'https://ieeexplore.ieee.org/document/7178526/',
        dateCreated: '2018-08-09 07:43:03.062Z'
    },
    {
        type: 'Conference',
        name: 'Compressive sensing based pilot reduction technique for massive MIMO systems',
        authors: [
            'J. Choi',
            'B. Shim',
        ],
        submittedTo: 'Proc. of information theory and application workshop (ITA) 2015',
        published: '2',
        detail: '',
        pdfPath: 'https://ieeexplore.ieee.org/document/7308974/',
        dateCreated: '2018-08-09 07:42:03.062Z'
    },
    {
        type: 'Conference',
        name: 'An efficient feedback compression for large-scale MIMO systems',
        authors: [
            'B. Lee',
            'B. Shim',
        ],
        submittedTo: 'Proc. of IEEE Vehicular technology conference (VTC) 2014',
        published: '2',
        detail: '',
        pdfPath: 'https://ieeexplore.ieee.org/document/7022817/',
        dateCreated: '2018-08-09 07:41:03.062Z'
    },
    {
        type: 'Conference',
        name: 'New approach for massive MIMO detection using sparse error recovery',
        authors: [
            'J. Choi',
            'B. Shim',
        ],
        submittedTo: 'Proc. of IEEE GLOBECOM conference 2014',
        published: '2',
        detail: '',
        pdfPath: 'https://ieeexplore.ieee.org/document/7037392/',
        dateCreated: '2018-08-09 07:40:03.062Z'
    },
    {
        type: 'Conference',
        name: 'Antenna group selection based user scheduling for massive MIMO systems',
        authors: [
            'B. Lee',
            'L. Ngo',
            'B. Shim',
        ],
        submittedTo: 'Proc. of IEEE GLOBECOM conference 2014',
        published: '2',
        detail: '',
        pdfPath: 'https://ieeexplore.ieee.org/document/7037316/',
        dateCreated: '2018-08-09 07:39:03.062Z'
    },
    {
        type: 'Conference',
        name: 'A greedy search algorithm with tree pruning for sparse signal recovery',
        authors: [
            'J. Lee',
            'S. Kwon',
            'B. Shim',
        ],
        submittedTo: 'Proc. of IEEE international symposium on information theory (ISIT) 2014',
        published: '2',
        detail: '',
        pdfPath: 'https://ieeexplore.ieee.org/document/6875153/?arnumber=6875153',
        dateCreated: '2018-08-09 07:38:03.062Z'
    },
    {
        type: 'Conference',
        name: 'Antenna Grouping based Feedback Reduction Technique for FDD-based Massive MIMO Systems',
        authors: [
            'B. Lee',
            'J. Choi',
            'D. Love',
            'J. Seol',
            'B. Shim',
        ],
        submittedTo: 'Proc. of IEEE international conf. on communications (ICC) 2014',
        published: '2',
        detail: '',
        pdfPath: 'https://ieeexplore.ieee.org/document/7166317/',
        dateCreated: '2018-08-09 07:37:03.062Z'
    },
    {
        type: 'Conference',
        name: 'Virtual pilot signal for massive MIMO-OFDM systems',
        authors: [
            'S. Park',
            'J. Choi',
            'J. Seol',
            'B. Shim',
        ],
        submittedTo: 'Proc. of Information Theory and Application Workshop (ITA) 2014',
        published: '2',
        detail: '',
        pdfPath: 'https://ieeexplore.ieee.org/document/6804285/',
        dateCreated: '2018-08-09 07:36:03.062Z'
    },
    {
        type: 'Conference',
        name: 'Interference aware node activation for wireless ad hoc networks',
        authors: [
            'S. Park',
            'B. Lee',
            'B. Shim',
        ],
        submittedTo: 'Proc. of IEEE GLOBECOM conference 2013',
        published: '2',
        detail: '',
        pdfPath: 'https://ieeexplore.ieee.org/document/6831647/',
        dateCreated: '2018-08-09 07:35:03.062Z'
    },
    {
        type: 'Conference',
        name: 'Sparse signal recovery via multipath matching pursuit',
        authors: [
            'S. Kwon',
            'J. Wang',
            'B. Shim',
        ],
        submittedTo: 'Proc. of IEEE international symposium on information theory (ISIT) 2013',
        published: '2',
        detail: '',
        pdfPath: 'https://ieeexplore.ieee.org/document/6620347/',
        dateCreated: '2018-08-09 07:34:03.062Z'
    },
    {
        type: 'Conference',
        name: 'Low complexity soft-input soft-output group detection for massive MIMO systems',
        authors: [
            'J. Choi',
            'B. Lee',
            'B. Shim',
            'I. Kang',
        ],
        submittedTo: 'Proc. of IEEE international conference on communications (ICC) 2013',
        published: '2',
        detail: '',
        pdfPath: 'https://ieeexplore.ieee.org/document/6655332/',
        dateCreated: '2018-08-09 07:33:03.062Z'
    },
    {
        type: 'Conference',
        name: 'Low complexity detection and precoding for massive MIMO systems',
        authors: [
            'J. Choi',
            'B. Lee',
            'I. Kang',
            'B. Shim',
        ],
        submittedTo: 'Proc. of IEEE wireless communications and networking conference (WCNC) 2013',
        published: '2',
        detail: '',
        pdfPath: 'https://ieeexplore.ieee.org/document/6555014/',
        dateCreated: '2018-08-09 07:32:03.062Z'
    },
    {
        type: 'Conference',
        name: 'An efficient linear MMSE receiver for wireless Ad Hoc networks',
        authors: [
            'S. Park',
            'B. Lee',
            'J. Wang',
            'B. Shim',
        ],
        submittedTo: 'Proc. of IEEE international conference on communications (ICC) 2012',
        published: '2',
        detail: '',
        pdfPath: 'https://ieeexplore.ieee.org/document/6364376/',
        dateCreated: '2018-08-09 07:31:03.062Z'
    },
    {
        type: 'Conference',
        name: 'Joint transceiver and relay beamforming design for multi-pair two-way relay systems',
        authors: [
            'H. Chung',
            'N. Lee',
            'B. Shim',
            'T. Oh',
        ],
        submittedTo: 'Proc. of IEEE international conference on communications (ICC) 2012',
        published: '2',
        detail: '',
        pdfPath: 'https://ieeexplore.ieee.org/document/6364260/',
        dateCreated: '2018-08-09 07:30:03.062Z'
    },
    {
        type: 'Conference',
        name: 'Transmission capacity of wireless ad hoc network with non-parametric linear MMSE receiver',
        authors: [
            'B. Lee',
            'S. Park',
            'B. Shim',
        ],
        submittedTo: 'Proc. of Information Theory and Application Workshop (ITA) 2012',
        published: '2',
        detail: '',
        pdfPath: 'https://ieeexplore.ieee.org/document/6181806/',
        dateCreated: '2018-08-09 07:29:03.062Z'
    },
    {
        type: 'Conference',
        name: 'Exact reconstruction of sparse signals via generalized orthogonal matching pursuit',
        authors: [
            'J. Wang',
            'B. Shim',
        ],
        submittedTo: 'Proc. of Asilomar conference on signals, systems, and computers 2011',
        published: '2',
        detail: '',
        pdfPath: 'https://ieeexplore.ieee.org/document/6190192/',
        dateCreated: '2018-08-09 07:28:03.062Z'
    },
    {
        type: 'Conference',
        name: 'Near optimum multiuser detection with closest lattice point search',
        authors: [
            'B. Shim',
            'I. Kang',
        ],
        submittedTo: 'Proc. of IEEE international conference on communications (ICC) 2011',
        published: '2',
        detail: '',
        pdfPath: 'https://ieeexplore.ieee.org/document/5963308/',
        dateCreated: '2018-08-09 07:27:03.062Z'
    },
    {
        type: 'Conference',
        name: 'A MMSE vector precoding with block diagonalization for multiuser MIMO downlink',
        authors: [
            'J. Park',
            'B. Lee',
            'B. Shim',
        ],
        submittedTo: 'Proc. of IEEE international conference on communications (ICC) 2011',
        published: '2',
        detail: '',
        pdfPath: 'https://ieeexplore.ieee.org/document/5962966/',
        dateCreated: '2018-08-09 07:26:03.062Z'
    },
    {
        type: 'Conference',
        name: 'A vector perturbation based user selection for multi-antenna downlink channels',
        authors: [
            'B. Lee',
            'B. Shim',
        ],
        submittedTo: 'Proc. of Information Theory and Application Workshop (ITA) 2011',
        published: '2',
        detail: '',
        pdfPath: 'https://ieeexplore.ieee.org/document/5743603/',
        dateCreated: '2018-08-09 07:25:03.062Z'
    },
    {
        type: 'Conference',
        name: 'Camera network using MIMO Y channel and its application to sports activity',
        authors: [
            'S. Jeong',
            'B. Lee',
            'B. Shim',
            'S. Ko',
        ],
        submittedTo: 'Proc. of Summer school \'Ensage\' - Immersive and engaging interaction with VH on internet (LNCS) 2010',
        published: '2',
        detail: '',
        pdf: conference['conference38'],
        dateCreated: '2018-08-09 07:24:03.062Z'
    },
    {
        type: 'Conference',
        name: 'List sphere decoding with a probabilistic radius tightening',
        authors: [
            'J. Lee',
            'B. Shim',
            'I. Kang',
        ],
        submittedTo: 'Proc. of IEEE GLOBECOM conference 2010',
        published: '2',
        detail: '',
        pdfPath: 'https://ieeexplore.ieee.org/document/5684113/',
        dateCreated: '2018-08-09 07:23:03.062Z'
    },
    {
        type: 'Conference',
        name: 'On the improved path metric for soft-input soft-output tree detection',
        authors: [
            'J. Choi',
            'B. Shim',
            'A. Singer',
        ],
        submittedTo: 'Proc. of Information Theory and Applications Workshop (ITA) 2010',
        published: '2',
        detail: '',
        pdfPath: 'https://ieeexplore.ieee.org/document/5454143/',
        dateCreated: '2018-08-09 07:22:03.062Z'
    },
    {
        type: 'Conference',
        name: 'Low complexity soft sphere decoding via optimal radius control',
        authors: [
            'J. Lee',
            'B. Shim',
        ],
        submittedTo: 'Proc. of IEEE Personal indoor mobile radio communications (PIMRC) symposium 2010',
        published: '2',
        detail: '',
        pdfPath: 'https://ieeexplore.ieee.org/document/5671878/',
        dateCreated: '2018-08-09 07:21:03.062Z'
    },
    {
        type: 'Conference',
        name: 'Efficient soft-input soft-output MIMO detection via improved M-algorithm',
        authors: [
            'J. Choi',
            'B. Shim',
            'J. Nelson',
            'A. Singer',
        ],
        submittedTo: 'Proc. of IEEE international conference on communications (ICC) 2010',
        published: '2',
        detail: '',
        pdfPath: 'https://ieeexplore.ieee.org/document/5502570/',
        dateCreated: '2018-08-09 07:20:03.062Z'
    },
    {
        type: 'Conference',
        name: 'A vector perturbation with virtual users for multiuser MIMO downlink',
        authors: [
            'B. Lee',
            'B. Shim',
        ],
        submittedTo: 'Proc. of IEEE International conf. on acoustics, speech, and signal processing (ICASSP) 2010',
        published: '2',
        detail: '',
        pdfPath: 'https://ieeexplore.ieee.org/document/5449968/',
        dateCreated: '2018-08-09 07:19:03.062Z'
    },
    {
        type: 'Conference',
        name: 'On the improved path metric for soft-input soft-output tree detection',
        authors: [
            'J. Choi',
            'B. Shim',
            'A. Singer',
        ],
        submittedTo: 'Proc. of Information Theory and Application Workshop (ITA) 2010',
        published: '2',
        detail: '',
        pdfPath: 'https://ieeexplore.ieee.org/document/5454143/',
        dateCreated: '2018-08-09 07:18:03.062Z'
    },
    {
        type: 'Conference',
        name: 'A vector perturbation based transmit diversity scheme for multi user MIMO systems',
        authors: [
            'J. Park',
            'B. Shim',
        ],
        submittedTo: 'Proc. of IEEE Personal indoor mobile radio communications (PIMRC) symposium 2009',
        published: '2',
        detail: '',
        pdfPath: 'https://ieeexplore.ieee.org/document/5449968/',
        dateCreated: '2018-08-09 07:17:03.062Z'
    },
    {
        type: 'Conference',
        name: 'Near-ML detection over a reduced dimension hypersphere',
        authors: [
            'J. Choi',
            'B. Shim',
            'A. Singer',
        ],
        submittedTo: 'Proc. of IEEE GLOBECOM conference 2009',
        published: '2',
        detail: '',
        pdfPath: 'https://ieeexplore.ieee.org/document/5426075/',
        dateCreated: '2018-08-09 07:16:03.062Z'
    },
    {
        type: 'Conference',
        name: 'On radius control of tree-pruned sphere decoding',
        authors: [
            'B. Shim',
            'I. Kang',
        ],
        submittedTo: 'Proc. of International conf. on acoustics, speech, and signal processing (ICASSP)',
        published: '2',
        detail: 'vol. 1, pp. 2469-2472, April 2009',
        pdfPath: 'https://ieeexplore.ieee.org/document/4960122/',
        dateCreated: '2018-08-09 07:15:03.062Z'
    },
    {
        type: 'Conference',
        name: 'Joint modulation classification and multi-user detection using multi-modulation sphere decoding',
        authors: [
            'B. Shim',
            'I. Kang',
        ],
        submittedTo: 'Proc. of IEEE workshop on signal processing advances in wireless communications (SPAWC)',
        published: '2',
        detail: 'vol. 1, pp. 668-671, June 2009',
        pdfPath: 'https://ieeexplore.ieee.org/document/5161869/',
        dateCreated: '2018-08-09 07:14:03.062Z'
    },
    {
        type: 'Conference',
        name: 'Towards the Performance of ML and the Complexity of MMSE - A Hybrid Approach',
        authors: [
            'B. Shim',
            'J. Choi',
            'I. Kang',
        ],
        submittedTo: 'Proc. of IEEE GLOBECOM conference, vol. 1, pp. 1-5, Dec. 2008', published: '2',
        detail: '',
        pdfPath: 'https://ieeexplore.ieee.org/document/4698438/',
        dateCreated: '2018-08-09 07:13:03.062Z'
    },
    {
        type: 'Conference',
        name: 'Near ML-achieving Lattice Search for Multiple Antenna Systems',
        authors: [
            'B. Shim',
            'B. Lee',
            'S. Park',
        ],
        submittedTo: 'Proc. of International conf. on electronics and information, and communication (ICEIC)',
        published: '2',
        detail: 'vol. 1, pp. 11-14, June 2008',
        dateCreated: '2018-08-09 07:12:03.062Z'
    },
    {
        type: 'Conference',
        name: 'A low-complexity near-ML decoding technique via reduced dimension list stack algorithm',
        authors: [
            'J. Choi',
            'B. Shim',
            'A. Singer',
            'N. Cho',
        ],
        submittedTo: 'Proc. of IEEE sensor array and multichannel signal processing workshop (SAM)',
        published: '2',
        detail: 'vol. 1, pp. 41-44, July 2008',
        pdfPath: 'https://ieeexplore.ieee.org/document/4606820/',
        dateCreated: '2018-08-09 07:11:03.062Z'
    },
    {
        type: 'Conference',
        name: 'Radius adaptive sphere decoding via probabilistic tree pruning',
        authors: [
            'B. Shim',
            'I. Kang',
        ],
        submittedTo: 'Proc. of IEEE workshop on signal processing advances in wireless communications (SPAWC)',
        published: '2',
        detail: 'vol. 1, pp. 1012-105, June 2007',
        pdfPath: 'https://ieeexplore.ieee.org/document/4401321/',
        dateCreated: '2018-08-09 07:10:03.062Z'
    },
    {
        type: 'Conference',
        name: 'A novel metric representation for low-complexity log-MAP decoder',
        authors: [
            'B. Shim',
            'H. Myung',
        ],
        submittedTo: 'Proc. of International symposium on circuits and systems (ISCAS)',
        published: '2',
        detail: 'vol. 1, pp. 158-161, May 2005',
        pdfPath: 'https://ieeexplore.ieee.org/document/1465964/',
        dateCreated: '2018-08-09 07:09:03.062Z'
    },
    {
        type: 'Conference',
        name: 'Energy-efficient digital filtering using ML-based error correction technique',
        authors: [
            'J. Choi',
            'B. Shim',
            'A. Singer',
            'N. Cho',
        ],
        submittedTo: 'Proc. of International conf. on acoustics, speech, and signal processing (ICASSP)',
        published: '2',
        detail: 'vol. 2, pp. 238-241, April 2005',
        pdfPath: 'https://ieeexplore.ieee.org/document/1416113/',
        dateCreated: '2018-08-09 07:08:03.062Z'
    },
    {
        type: 'Conference',
        name: 'A novel forward-backward predictor based low-power DSP system',
        authors: [
            'B. Shim',
            'M. Zhang',
            'N. Shanbhag',
        ],
        submittedTo: 'Proc. of IEEE workshop on signal processing systems and implementation (SiPS)',
        published: '2',
        detail: 'vol. 1, pp. 331-336, Oct. 2004',
        pdfPath: 'https://ieeexplore.ieee.org/document/1363072/',
        dateCreated: '2018-08-09 07:07:03.062Z'
    },
    {
        type: 'Conference',
        name: 'Energy-efficient soft error-tolerant digital signal processing',
        authors: [
            'B. Shim',
            'N. Shanbhag',
            'S. Lee',
        ],
        submittedTo: 'Proc. of Asilomar conference',
        published: '2',
        detail: 'pp. 1493-1497, Nov. 2003',
        pdfPath: 'https://ieeexplore.ieee.org/document/1292234/',
        dateCreated: '2018-08-09 07:06:03.062Z'
    },
    {
        type: 'Conference',
        name: 'Performance analysis of algorithmic noise-tolerance techniques',
        authors: [
            'B. Shim',
            'N. Shanbhag',
        ],
        submittedTo: 'Proc. of international symp. on circuits and systems (ISCAS)',
        published: '2',
        detail: 'vol. 3, pp. 357-400, May 2003',
        pdfPath: 'https://ieeexplore.ieee.org/document/1205786/',
        dateCreated: '2018-08-09 07:05:03.062Z'
    },
    {
        type: 'Conference',
        name: 'Reduced-precision redundancy for low-power digital filtering',
        authors: [
            'B. Shim',
            'N. Shanbhag',
        ],
        submittedTo: 'Proc. of Asilomar conference on signals, systems, and computers',
        published: '2',
        detail: 'vol. 1, pp. 148-152, Nov. 2001 (Invited)',
        pdfPath: 'https://ieeexplore.ieee.org/document/986896/',
        dateCreated: '2018-08-09 07:04:03.062Z'
    },
    {
        type: 'Conference',
        name: 'An improved VLSI architecture for Viterbi decoder',
        authors: [
            'B. Shim',
            'S. Cho',
        ],
        submittedTo: 'Proc. of IEEE TENCON',
        published: '2',
        detail: 'vol. 1, pp. 259-262, 1999',
        pdfPath: 'https://ieeexplore.ieee.org/document/818399/',
        dateCreated: '2018-08-09 07:03:03.062Z'
    },
    {
        type: 'Conference',
        name: 'Pipelined VLSI architecture of the Viterbi decoder for IMT-2000',
        authors: [
            'B. Shim',
            'J. Suh',
        ],
        submittedTo: 'Proc. of IEEE GLOBECOM conference',
        published: '2',
        detail: 'v',
        pdfPath: 'https://ieeexplore.ieee.org/document/831627/',
        dateCreated: '2018-08-09 07:02:03.062Z'
    },
    {
        type: 'Conference',
        name: 'Adaptive threshold error diffusion technique for color inkjet printing',
        authors: [
            'B. Shim',
            'W. Sung',
        ],
        submittedTo: 'Proc. of international conf. on image proc. (ICIP)',
        published: '2',
        detail: 'vol. 1, pp. 779-782, 1997',
        pdfPath: 'https://ieeexplore.ieee.org/document/648078/',
        dateCreated: '2018-08-09 07:01:03.062Z'
    },
];

export default paper;