const countries = [
  {
    id: "1",
    name: "Indonesia",
    description:
      "Indonesia, dengan nama resmi Republik Indonesia, adalah sebuah negara kepulauan di Asia Tenggara yang dilintasi garis khatulistiwa dan berada di antara daratan benua Asia dan Oseania sehingga dikenal sebagai negara lintas benua, serta antara Samudra Pasifik dan Samudra Hindia.",
    flagImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/250px-Flag_of_Indonesia.svg.png",
    populations: 275344166,
    capital: "Jakarta",
    presidents: [
      { name: "Prabowo Subianto", presidentImage: "" },
      { name: "Joko Widodo", presidentImage: "" },
      { name: "Susilo Bambang Yudhoyono", presidentImage: "" },
      { name: "Megawati Soekarno Putri", presidentImage: "" },
      { name: "Abdurrahman Wahid", presidentImage: "" },
      { name: "Baharuddin Jusuf Habibie", presidentImage: "" },
      { name: "Soeharto", presidentImage: "" },
      { name: "Soekarno", presidentImage: "" },
    ],
  },
  {
    id: "2",
    name: "Malaysia",
    description:
      "Malaysia sebagai negara federal belum pernah ada sampai tahun 1963. Sebelumnya, sekumpulan koloni didirikan oleh Britania Raya pada akhir abad ke-18, dan bagian barat Malaysia modern terdiri dari beberapa kerajaan yang terpisah-pisah. Kumpulan wilayah jajahan itu dikenal sebagai Malaya Britania hingga pembubarannya pada 1946, ketika kumpulan itu disusun kembali sebagai Uni Malaya. Seiring dengan semakin meluasnya tentangan, kumpulan itu lagi-lagi disusun kembali sebagai Federasi Malaya pada tahun 1948 dan kemudian meraih kemerdekaan pada 31 Agustus 1957.",
    flagImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Malaysia.svg/250px-Flag_of_Malaysia.svg.png",
    populations: 34219975,
    capital: "Kuala Lumpur",
    presidents: [
      {
        name: "Anwar Ibrahim",
        presidentImage:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Tun_Abdul_Razak_%28MY_2nd_PM%29.jpg/180px-Tun_Abdul_Razak_%28MY_2nd_PM%29.jpg",
      },
      {
        name: "Ling Liong Sik",
        presidentImage:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Tun_Dr._Ismail.jpg/180px-Tun_Dr._Ismail.jpg",
      },
      {
        name: "V. T. Sambanthan",
        presidentImage:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Tun_V.T._Sambanthan.jpg/180px-Tun_V.T._Sambanthan.jpg",
      },
      {
        name: "Ismail Abdul Rahman",
        presidentImage:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Tun_Abdul_Razak_Universiti_%284to3%29.jpg/180px-Tun_Abdul_Razak_Universiti_%284to3%29.jpg",
      },
      {
        name: "Abdul Razak Hussein",
        presidentImage:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Tunku_Abdul_Rahman_1960.jpg/180px-Tunku_Abdul_Rahman_1960.jpg",
      },
    ],
  },
  {
    id: "3",
    name: "Singapura",
    description:
      "Singapura, dengan nama resmi Republik Singapura, adalah sebuah negara pulau dan negara kota di lepas ujung selatan Semenanjung Malaya, 137 kilometer (85 mi) di utara khatulistiwa di Asia Tenggara. Negara ini terpisah dari Malaysia oleh Selat Johor di utara, dan dari Kepulauan Riau, Indonesia oleh Selat Singapura di selatan. Singapura adalah pusat keuangan terdepan ketiga di dunia dan sebuah kota dunia kosmopolitan yang memainkan peran penting dalam perdagangan dan keuangan internasional. Pelabuhan Singapura adalah satu dari lima pelabuhan tersibuk di dunia.",
    flagImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/250px-Flag_of_Singapore.svg.png",
    populations: 5980352,
    capital: "Singapura",
    presidents: [
      {
        name: "Wong Lawrence Shyun Tsai",
        presidentImage:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Lawrence_Wong_20230526.jpg/200px-Lawrence_Wong_20230526.jpg",
      },
      {
        name: "Lee Hsien Loong",
        presidentImage:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Lee_Hsien_Loong_2016_%28cropped%29.jpg/200px-Lee_Hsien_Loong_2016_%28cropped%29.jpg",
      },
      {
        name: "Goh Chok Tong",
        presidentImage:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/GohChokTong-WashingtonDC-20010614.jpg/200px-GohChokTong-WashingtonDC-20010614.jpg",
      },
      {
        name: "Lee Kuan Yew",
        presidentImage:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Lee_Kuan_Yew_cropped.jpg/200px-Lee_Kuan_Yew_cropped.jpg",
      },
    ],
  },
  {
    id: "4",
    name: "Thailand",
    description:
      "Thailand, dengan nama resmi Kerajaan Thailand dan dulunya bernama Siam (nama resmi hingga tahun 1939), adalah negara di Asia Tenggara yang berbatasan dengan Laos dan Kamboja di timur, Malaysia dan Teluk Siam di selatan, dan Myanmar dan Laut Andaman di barat. Thailand dahulu dikenal sebagai Siam sampai tanggal 11 Mei 1949. Kata 'Thai' (ไทย) berarti 'kebebasan' dalam bahasa Thai, tetapi juga dapat merujuk kepada suku Thai, sehingga menyebabkan nama Siam masih digunakan di kalangan warga Thailand terutama kaum minoritas Tionghoa dan Amerika.",
    flagImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/250px-Flag_of_Thailand.svg.png",
    populations: 69648117,
    capital: "Bangkok",
    presidents: [{ name: "", presidentImage: "" }],
  },
  {
    id: "5",
    name: "Filipina",
    description:
      "Filipina, dengan nama resmi Republik Filipina (Filipina: Republika ng Pilipinas; bahasa Inggris: Republic of the Philippines) adalah sebuah negara kepulauan dan negara kesatuan yang bersistem presidensial dengan berbentuk republik konstitusional di Asia Tenggara, sebelah utara Indonesia, dan timur laut Sabah. Filipina merupakan sebuah negara kepulauan yang terletak di Lingkar Pasifik Barat, negara ini terdiri dari 7.641 pulau. Selama ribuan tahun, warga kepulauan Filipina, dan pekerja keras ini telah mengembangkan sistem cocok tanam padi yang sangat maju, yang menyediakan makanan pokok bagi masyarakatnya.",
    flagImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_the_Philippines.svg/250px-Flag_of_the_Philippines.svg.png",
    populations: 109035343,
    capital: "Manila",
    presidents: [{ name: "", presidentImage: "" }],
  },
  {
    id: "6",
    name: "Brunei Darussalam",
    description:
      "Brunei, dengan nama formal Brunei Darussalam, adalah negara berdaulat di Asia Tenggara yang terletak di pantai utara pulau Kalimantan. Negara ini memiliki wilayah seluas 5.765 km² yang menempati pulau Kalimantan dengan garis pantai seluruhnya menyentuh Laut Tiongkok Selatan. Wilayahnya dipisahkan ke dalam negara bagian di Sarawak, Malaysia.",
    flagImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Brunei.svg/250px-Flag_of_Brunei.svg.png",
    populations: 484345,
    capital: "Bandar Seri Begawan",
    presidents: [{ name: "", presidentImage: "" }],
  },
  {
    id: "7",
    name: "Vietnam",
    description:
      "Vietnam, nama resminya Republik Sosialis Vietnam, adalah sebuah negara di Asia Tenggara Daratan. Vietnam berbatasan dengan Tiongkok di sebelah utara, Laos di barat laut, Kamboja di barat daya dan Laut Tiongkok Selatan di timur. Di Vietnam, Laut Tiongkok Selatan disebut Laut Timur.",
    flagImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/250px-Flag_of_Vietnam.svg.png",
    populations: 103808319,
    capital: "Hanoi",
    presidents: [{ name: "", presidentImage: "" }],
  },
  {
    id: "8",
    name: "Laos",
    description:
      "Laos adalah sebuah negara republik yang dikelilingi oleh daratan dan terletak di bagian utara Semenanjung Indochina. Laos berasal dari kata Lan Xang yang artinya kerajaan gajah. Negara ini adalah satu-satunya Negara di kawasan Asia Tenggara yang tidak memiliki pantai. Laos pernah dijajah oleh Prancis dan memperoleh kemerdekaan pada 22 Oktober 1953 dalam bentuk kerajaan. Sejak 2 Desember 1975 kerajaan Laos berubah menjadi Republik Laos.",
    flagImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Laos.svg/250px-Flag_of_Laos.svg.png",
    populations: 749595,
    capital: "Vientiane",
    presidents: [
      {
        name: "Thongloun Sisoulith",
        presidentImage:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Thongloun_Sisoulith_%282023%29_%28cropped_2%29.jpg/160px-Thongloun_Sisoulith_%282023%29_%28cropped_2%29.jpg",
      },
      {
        name: "Bounnhang Vorachith",
        presidentImage:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Bounnhang_Vorachith_2016_%28cropped%29.jpg/160px-Bounnhang_Vorachith_2016_%28cropped%29.jpg",
      },
      {
        name: "Choummaly Sayasone",
        presidentImage:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Choummaly_Sayasone.jpg/160px-Choummaly_Sayasone.jpg",
      },
      {
        name: "Khamtai Siphandon",
        presidentImage: "",
      },
      {
        name: "Nouhak Phoumsavanh",
        presidentImage: "",
      },
      {
        name: "Kaysone Phomvihane",
        presidentImage:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Kaysone_Phomvihane_1978.jpg/160px-Kaysone_Phomvihane_1978.jpg",
      },
      {
        name: "Pangeran Souphanouvong",
        presidentImage:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Souphanouvong1978.jpg/160px-Souphanouvong1978.jpg",
      },
    ],
  },
  {
    id: "9",
    name: "Myanmar",
    description:
      "Juga dikenal sebagai Burma (nama resmi hingga tahun 1989), adalah sebuah negara berdaulat di Asia Tenggara. Myanmar berbatasan dengan India dan Bangladesh di sebelah barat, Thailand dan Laos di sebelah timur dan Tiongkok di sebelah utara dan timur laut. Negara seluas 676.578 km² ini telah diperintah oleh pemerintahan militer sejak kudeta tahun 1988. Negara ini adalah negara berkembang dan memiliki populasi lebih dari 51 juta jiwa (sensus 2014).",
    flagImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Flag_of_Myanmar.svg/250px-Flag_of_Myanmar.svg.png",
    populations: 57526449,
    capital: "Naypyidaw",
    presidents: [
      { name: "Sao Shwe Thaik", presidentImage: "" },
      { name: "Ba U", presidentImage: "" },
      { name: "Win Maung", presidentImage: "" },
    ],
  },
  {
    id: "10",
    name: "Kamboja",
    description:
      "Kamboja, dengan nama resmi Kerajaan Kamboja (bahasa Khmer: ព្រះរាជាណាចក្រកម្ពុជា, bahasa Prancis: Royaume du Cambodge), adalah sebuah negara berbentuk monarki konstitusional di Asia Tenggara. Negara ini merupakan penerus Kekaisaran Khmer yang pernah menguasai seluruh Semenanjung Indochina dari abad ke-11 hingga ke-14. Kamboja berbatasan dengan Thailand di sebelah barat, Laos di utara, Vietnam di timur, dan Teluk Thailand di selatan. Sungai Mekong dan Danau Tonle Sap melintasi negara ini.",
    flagImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_Cambodia.svg/250px-Flag_of_Cambodia.svg.png",
    populations: 16713015,
    capital: "Phnom Penh",
    presidents: [{ name: "", presidentImage: "" }],
  },
  {
    id: "11",
    name: "Timor Leste",
    description:
      "Timor Timur dijajah oleh Portugal pada abad ke-16, dan dikenal sebagai Timor Portugis sampai 28 November 1975, ketika Front Revolusi Kemerdekaan Timor-Leste (FRETILIN) mengumumkan kemerdekaan wilayah tersebut. Sembilan hari kemudian, Indonesia melakukan invasi dan kemudian menganeksasi Timor Timur. Timor Timur dinyatakan sebagai provinsi ke-27 oleh Indonesia pada tahun berikutnya. Pendudukan Indonesia di Timor Timur ditandai oleh konflik yang sangat keras selama beberapa dasawarsa antara kelompok separatis (khususnya FRETILIN) dan militer Indonesia.",
    flagImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Flag_of_East_Timor.svg/250px-Flag_of_East_Timor.svg.png",
    populations: 1445006,
    capital: "Dili",
    presidents: [
      {
        name: "José Ramos-Horta",
        presidentImage:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/2022-04-19_Jos%C3%A9_Ramos-Horta_%28cropped%29.jpg/160px-2022-04-19_Jos%C3%A9_Ramos-Horta_%28cropped%29.jpg",
      },
      {
        name: "Francisco Guterres",
        presidentImage:
          "https://id.wikipedia.org/wiki/Berkas:President_of_Timor_Leste_Francisco_Guterres.jpg",
      },
      {
        name: "Taur Matan Ruak",
        presidentImage:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Taur_Matan_Ruak_-_Presid%C3%AAncia_da_Rep%C3%BAblica_de_Timor-Leste_%282012%29.jpg/160px-Taur_Matan_Ruak_-_Presid%C3%AAncia_da_Rep%C3%BAblica_de_Timor-Leste_%282012%29.jpg",
      },
      {
        name: "Vicente Guterres",
        presidentImage:
          "https://upload.wikimedia.org/wikipedia/commons/a/a4/Vicente_da_Silva_Guterres_small3.jpg",
      },
    ],
  },
];

export default countries;
