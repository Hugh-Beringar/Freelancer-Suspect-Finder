// Trait records extracted from flamewing/hitman-freelancer-leaders.
// Portraits and original research: Riximilian. See CREDITS.md.
(function (root) {
  const suspects = [
  {
    "id": "patricia",
    "name": "Patricia",
    "hair": "black",
    "traits": [
      "earrings",
      "glasses",
      "necklace"
    ],
    "image": "assets/portraits/leader-BLACK_EGN_Patricia.png"
  },
  {
    "id": "bradley",
    "name": "Bradley",
    "hair": "black",
    "traits": [
      "earrings",
      "glasses",
      "necklace"
    ],
    "image": "assets/portraits/leader-BLACK_EGN_Bradley.png"
  },
  {
    "id": "cathy",
    "name": "Cathy",
    "hair": "blonde",
    "traits": [
      "earrings",
      "glasses",
      "necklace"
    ],
    "image": "assets/portraits/leader-BLONDE_EGN_Cathy.png"
  },
  {
    "id": "anders",
    "name": "Anders",
    "hair": "blonde",
    "traits": [
      "earrings",
      "glasses",
      "necklace"
    ],
    "image": "assets/portraits/leader-BLONDE_EGN_Anders.png"
  },
  {
    "id": "bianca",
    "name": "Bianca",
    "hair": "brown",
    "traits": [
      "earrings",
      "glasses",
      "necklace"
    ],
    "image": "assets/portraits/leader-BROWN_EGN_Bianca.png"
  },
  {
    "id": "keenan",
    "name": "Keenan",
    "hair": "brown",
    "traits": [
      "earrings",
      "glasses",
      "necklace"
    ],
    "image": "assets/portraits/leader-BROWN_EGN_Keenan.png"
  },
  {
    "id": "deri",
    "name": "Deri",
    "hair": "gray",
    "traits": [
      "earrings",
      "glasses",
      "necklace"
    ],
    "image": "assets/portraits/leader-GREY_EGN_Deri.png"
  },
  {
    "id": "riko",
    "name": "Riko",
    "hair": "gray",
    "traits": [
      "earrings",
      "glasses",
      "necklace"
    ],
    "image": "assets/portraits/leader-GREY_EGN_Riko.png"
  },
  {
    "id": "yvonne",
    "name": "Yvonne",
    "hair": "bald",
    "traits": [
      "earrings",
      "glasses",
      "necklace"
    ],
    "image": "assets/portraits/leader-BALD_EGN_Yvonne.png"
  },
  {
    "id": "hugo",
    "name": "Hugo",
    "hair": "bald",
    "traits": [
      "earrings",
      "glasses",
      "necklace"
    ],
    "image": "assets/portraits/leader-BALD_EGN_Hugo.png"
  },
  {
    "id": "gloria",
    "name": "Gloria",
    "hair": "red",
    "traits": [
      "earrings",
      "glasses",
      "necklace"
    ],
    "image": "assets/portraits/leader-RED_EGN_Gloria.png"
  },
  {
    "id": "ronnie",
    "name": "Ronnie",
    "hair": "red",
    "traits": [
      "earrings",
      "glasses",
      "necklace"
    ],
    "image": "assets/portraits/leader-RED_EGN_Ronnie.png"
  },
  {
    "id": "helen",
    "name": "Helen",
    "hair": "black",
    "traits": [
      "earrings",
      "hat",
      "necklace"
    ],
    "image": "assets/portraits/leader-BLACK_EHN_Helen.png"
  },
  {
    "id": "paul",
    "name": "Paul",
    "hair": "black",
    "traits": [
      "earrings",
      "hat",
      "necklace"
    ],
    "image": "assets/portraits/leader-BLACK_EHN_Paul.png"
  },
  {
    "id": "tuesday",
    "name": "Tuesday",
    "hair": "blonde",
    "traits": [
      "earrings",
      "hat",
      "necklace"
    ],
    "image": "assets/portraits/leader-BLONDE_EHN_Tuesday.png"
  },
  {
    "id": "roland",
    "name": "Roland",
    "hair": "blonde",
    "traits": [
      "earrings",
      "hat",
      "necklace"
    ],
    "image": "assets/portraits/leader-BLONDE_EHN_Roland.png"
  },
  {
    "id": "cora",
    "name": "Cora",
    "hair": "brown",
    "traits": [
      "earrings",
      "hat",
      "necklace"
    ],
    "image": "assets/portraits/leader-BROWN_EHN_Cora.png"
  },
  {
    "id": "hiram",
    "name": "Hiram",
    "hair": "brown",
    "traits": [
      "earrings",
      "hat",
      "necklace"
    ],
    "image": "assets/portraits/leader-BROWN_EHN_Hiram.png"
  },
  {
    "id": "tomoko",
    "name": "Tomoko",
    "hair": "gray",
    "traits": [
      "earrings",
      "hat",
      "necklace"
    ],
    "image": "assets/portraits/leader-GREY_EHN_Tomoko.png"
  },
  {
    "id": "arun",
    "name": "Arun",
    "hair": "gray",
    "traits": [
      "earrings",
      "hat",
      "necklace"
    ],
    "image": "assets/portraits/leader-GREY_EHN_Arun.png"
  },
  {
    "id": "sloan",
    "name": "Sloan",
    "hair": "bald",
    "traits": [
      "earrings",
      "hat",
      "necklace"
    ],
    "image": "assets/portraits/leader-BALD_EHN_Sloan.png"
  },
  {
    "id": "mitchell",
    "name": "Mitchell",
    "hair": "bald",
    "traits": [
      "earrings",
      "hat",
      "necklace"
    ],
    "image": "assets/portraits/leader-BALD_EHN_Mitchell.png"
  },
  {
    "id": "rochelle",
    "name": "Rochelle",
    "hair": "red",
    "traits": [
      "earrings",
      "hat",
      "necklace"
    ],
    "image": "assets/portraits/leader-RED_EHN_Rochelle.png"
  },
  {
    "id": "charles",
    "name": "Charles",
    "hair": "red",
    "traits": [
      "earrings",
      "hat",
      "necklace"
    ],
    "image": "assets/portraits/leader-RED_EHN_Charles.png"
  },
  {
    "id": "fiona",
    "name": "Fiona",
    "hair": "black",
    "traits": [
      "glasses",
      "hat",
      "tattoo"
    ],
    "image": "assets/portraits/leader-BLACK_GHT_Fiona.png"
  },
  {
    "id": "steven",
    "name": "Steven",
    "hair": "black",
    "traits": [
      "glasses",
      "hat",
      "tattoo"
    ],
    "image": "assets/portraits/leader-BLACK_GHT_Steven.png"
  },
  {
    "id": "sophie",
    "name": "Sophie",
    "hair": "blonde",
    "traits": [
      "glasses",
      "hat",
      "tattoo"
    ],
    "image": "assets/portraits/leader-BLONDE_GHT_Sophie.png"
  },
  {
    "id": "curtis",
    "name": "Curtis",
    "hair": "blonde",
    "traits": [
      "glasses",
      "hat",
      "tattoo"
    ],
    "image": "assets/portraits/leader-BLONDE_GHT_Curtis.png"
  },
  {
    "id": "felicity",
    "name": "Felicity",
    "hair": "brown",
    "traits": [
      "glasses",
      "hat",
      "tattoo"
    ],
    "image": "assets/portraits/leader-BROWN_GHT_Felicity.png"
  },
  {
    "id": "antonio",
    "name": "Antonio",
    "hair": "brown",
    "traits": [
      "glasses",
      "hat",
      "tattoo"
    ],
    "image": "assets/portraits/leader-BROWN_GHT_Antonio.png"
  },
  {
    "id": "joyce",
    "name": "Joyce",
    "hair": "gray",
    "traits": [
      "glasses",
      "hat",
      "tattoo"
    ],
    "image": "assets/portraits/leader-GREY_GHT_Joyce.png"
  },
  {
    "id": "gary",
    "name": "Gary",
    "hair": "gray",
    "traits": [
      "glasses",
      "hat",
      "tattoo"
    ],
    "image": "assets/portraits/leader-GREY_GHT_Gary.png"
  },
  {
    "id": "kirsten",
    "name": "Kirsten",
    "hair": "bald",
    "traits": [
      "glasses",
      "hat",
      "tattoo"
    ],
    "image": "assets/portraits/leader-BALD_GHT_Kirsten.png"
  },
  {
    "id": "melvin",
    "name": "Melvin",
    "hair": "bald",
    "traits": [
      "glasses",
      "hat",
      "tattoo"
    ],
    "image": "assets/portraits/leader-BALD_GHT_Melvin.png"
  },
  {
    "id": "willow",
    "name": "Willow",
    "hair": "red",
    "traits": [
      "glasses",
      "hat",
      "tattoo"
    ],
    "image": "assets/portraits/leader-RED_GHT_Willow.png"
  },
  {
    "id": "chester",
    "name": "Chester",
    "hair": "red",
    "traits": [
      "glasses",
      "hat",
      "tattoo"
    ],
    "image": "assets/portraits/leader-RED_GHT_Chester.png"
  },
  {
    "id": "lilly",
    "name": "Lilly",
    "hair": "black",
    "traits": [
      "hat",
      "necklace",
      "tattoo"
    ],
    "image": "assets/portraits/leader-BLACK_HNT_Lilly.png"
  },
  {
    "id": "ibrahim",
    "name": "Ibrahim",
    "hair": "black",
    "traits": [
      "hat",
      "necklace",
      "tattoo"
    ],
    "image": "assets/portraits/leader-BLACK_HNT_Ibrahim.png"
  },
  {
    "id": "mimi",
    "name": "Mimi",
    "hair": "blonde",
    "traits": [
      "hat",
      "necklace",
      "tattoo"
    ],
    "image": "assets/portraits/leader-BLONDE_HNT_Mimi.png"
  },
  {
    "id": "jefferson",
    "name": "Jefferson",
    "hair": "blonde",
    "traits": [
      "hat",
      "necklace",
      "tattoo"
    ],
    "image": "assets/portraits/leader-BLONDE_HNT_Jefferson.png"
  },
  {
    "id": "tasha",
    "name": "Tasha",
    "hair": "brown",
    "traits": [
      "hat",
      "necklace",
      "tattoo"
    ],
    "image": "assets/portraits/leader-BROWN_HNT_Tasha.png"
  },
  {
    "id": "zhao",
    "name": "Zhao",
    "hair": "brown",
    "traits": [
      "hat",
      "necklace",
      "tattoo"
    ],
    "image": "assets/portraits/leader-BROWN_HNT_Zhao.png"
  },
  {
    "id": "mariam",
    "name": "Mariam",
    "hair": "gray",
    "traits": [
      "hat",
      "necklace",
      "tattoo"
    ],
    "image": "assets/portraits/leader-GREY_HNT_Mariam.png"
  },
  {
    "id": "vincent",
    "name": "Vincent",
    "hair": "gray",
    "traits": [
      "hat",
      "necklace",
      "tattoo"
    ],
    "image": "assets/portraits/leader-GREY_HNT_Vincent.png"
  },
  {
    "id": "siabhan",
    "name": "Siabhan",
    "hair": "bald",
    "traits": [
      "hat",
      "necklace",
      "tattoo"
    ],
    "image": "assets/portraits/leader-BALD_HNT_Siabhan.png"
  },
  {
    "id": "murray",
    "name": "Murray",
    "hair": "bald",
    "traits": [
      "hat",
      "necklace",
      "tattoo"
    ],
    "image": "assets/portraits/leader-BALD_HNT_Murray.png"
  },
  {
    "id": "alexandra",
    "name": "Alexandra",
    "hair": "red",
    "traits": [
      "hat",
      "necklace",
      "tattoo"
    ],
    "image": "assets/portraits/leader-RED_HNT_Alexandra.png"
  },
  {
    "id": "mack",
    "name": "Mack",
    "hair": "red",
    "traits": [
      "hat",
      "necklace",
      "tattoo"
    ],
    "image": "assets/portraits/leader-RED_HNT_Mack.png"
  },
  {
    "id": "achieng",
    "name": "Achieng",
    "hair": "black",
    "traits": [
      "earrings",
      "glasses",
      "hat",
      "tattoo"
    ],
    "image": "assets/portraits/leader-BLACK_EGHT_Achieng.png"
  },
  {
    "id": "rajat",
    "name": "Rajat",
    "hair": "black",
    "traits": [
      "earrings",
      "glasses",
      "hat",
      "tattoo"
    ],
    "image": "assets/portraits/leader-BLACK_EGHT_Rajat.png"
  },
  {
    "id": "antoinette",
    "name": "Antoinette",
    "hair": "blonde",
    "traits": [
      "earrings",
      "glasses",
      "hat",
      "tattoo"
    ],
    "image": "assets/portraits/leader-BLONDE_EGHT_Antoinette.png"
  },
  {
    "id": "howard",
    "name": "Howard",
    "hair": "blonde",
    "traits": [
      "earrings",
      "glasses",
      "hat",
      "tattoo"
    ],
    "image": "assets/portraits/leader-BLONDE_EGHT_Howard.png"
  },
  {
    "id": "dara",
    "name": "Dara",
    "hair": "brown",
    "traits": [
      "earrings",
      "glasses",
      "hat",
      "tattoo"
    ],
    "image": "assets/portraits/leader-BROWN_EGHT_Dara.png"
  },
  {
    "id": "rodrigo",
    "name": "Rodrigo",
    "hair": "brown",
    "traits": [
      "earrings",
      "glasses",
      "hat",
      "tattoo"
    ],
    "image": "assets/portraits/leader-BROWN_EGHT_Rodrigo.png"
  },
  {
    "id": "lisa",
    "name": "Lisa",
    "hair": "gray",
    "traits": [
      "earrings",
      "glasses",
      "hat",
      "tattoo"
    ],
    "image": "assets/portraits/leader-GREY_EGHT_Lisa.png"
  },
  {
    "id": "malcolm",
    "name": "Malcolm",
    "hair": "gray",
    "traits": [
      "earrings",
      "glasses",
      "hat",
      "tattoo"
    ],
    "image": "assets/portraits/leader-GREY_EGHT_Malcolm.png"
  },
  {
    "id": "angel",
    "name": "Angel",
    "hair": "bald",
    "traits": [
      "earrings",
      "glasses",
      "hat",
      "tattoo"
    ],
    "image": "assets/portraits/leader-BALD_EGHT_Angel.png"
  },
  {
    "id": "gonzales",
    "name": "Gonzales",
    "hair": "bald",
    "traits": [
      "earrings",
      "glasses",
      "hat",
      "tattoo"
    ],
    "image": "assets/portraits/leader-BALD_EGHT_Gonzales.png"
  },
  {
    "id": "gabrielle",
    "name": "Gabrielle",
    "hair": "red",
    "traits": [
      "earrings",
      "glasses",
      "hat",
      "tattoo"
    ],
    "image": "assets/portraits/leader-RED_EGHT_Gabrielle.png"
  },
  {
    "id": "nathaniel",
    "name": "Nathaniel",
    "hair": "red",
    "traits": [
      "earrings",
      "glasses",
      "hat",
      "tattoo"
    ],
    "image": "assets/portraits/leader-RED_EGHT_Nathaniel.png"
  },
  {
    "id": "navaeh",
    "name": "Navaeh",
    "hair": "black",
    "traits": [
      "earrings",
      "glasses",
      "necklace",
      "tattoo"
    ],
    "image": "assets/portraits/leader-BLACK_EGNT_Navaeh.png"
  },
  {
    "id": "sidney",
    "name": "Sidney",
    "hair": "black",
    "traits": [
      "earrings",
      "glasses",
      "necklace",
      "tattoo"
    ],
    "image": "assets/portraits/leader-BLACK_EGNT_Sidney.png"
  },
  {
    "id": "netta",
    "name": "Netta",
    "hair": "blonde",
    "traits": [
      "earrings",
      "glasses",
      "necklace",
      "tattoo"
    ],
    "image": "assets/portraits/leader-BLONDE_EGNT_Netta.png"
  },
  {
    "id": "wendell",
    "name": "Wendell",
    "hair": "blonde",
    "traits": [
      "earrings",
      "glasses",
      "necklace",
      "tattoo"
    ],
    "image": "assets/portraits/leader-BLONDE_EGNT_Wendell.png"
  },
  {
    "id": "kyra",
    "name": "Kyra",
    "hair": "brown",
    "traits": [
      "earrings",
      "glasses",
      "necklace",
      "tattoo"
    ],
    "image": "assets/portraits/leader-BROWN_EGNT_Kyra.png"
  },
  {
    "id": "alfred",
    "name": "Alfred",
    "hair": "brown",
    "traits": [
      "earrings",
      "glasses",
      "necklace",
      "tattoo"
    ],
    "image": "assets/portraits/leader-BROWN_EGNT_Alfred.png"
  },
  {
    "id": "petunia",
    "name": "Petunia",
    "hair": "gray",
    "traits": [
      "earrings",
      "glasses",
      "necklace",
      "tattoo"
    ],
    "image": "assets/portraits/leader-GREY_EGNT_Petunia.png"
  },
  {
    "id": "manny",
    "name": "Manny",
    "hair": "gray",
    "traits": [
      "earrings",
      "glasses",
      "necklace",
      "tattoo"
    ],
    "image": "assets/portraits/leader-GREY_EGNT_Manny.png"
  },
  {
    "id": "stephanie",
    "name": "Stephanie",
    "hair": "bald",
    "traits": [
      "earrings",
      "glasses",
      "necklace",
      "tattoo"
    ],
    "image": "assets/portraits/leader-BALD_EGNT_Stephanie.png"
  },
  {
    "id": "morales",
    "name": "Morales",
    "hair": "bald",
    "traits": [
      "earrings",
      "glasses",
      "necklace",
      "tattoo"
    ],
    "image": "assets/portraits/leader-BALD_EGNT_Morales.png"
  },
  {
    "id": "ruby",
    "name": "Ruby",
    "hair": "red",
    "traits": [
      "earrings",
      "glasses",
      "necklace",
      "tattoo"
    ],
    "image": "assets/portraits/leader-RED_EGNT_Ruby.png"
  },
  {
    "id": "eoin",
    "name": "Eoin",
    "hair": "red",
    "traits": [
      "earrings",
      "glasses",
      "necklace",
      "tattoo"
    ],
    "image": "assets/portraits/leader-RED_EGNT_Eoin.png"
  }
];
  if (typeof module !== "undefined" && module.exports) module.exports = suspects;
  else root.SUSPECTS = suspects;
})(typeof window !== "undefined" ? window : globalThis);
