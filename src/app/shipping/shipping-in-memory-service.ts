import {InMemoryDbService} from 'angular-in-memory-web-api';
import {ShippingContact} from "./shipping.model";


/**
 * An in memory web API that emulates CRUD operations for Shipping Contacts
 * Allows for ShippingService to make http requests like it would if it were calling a production server
 * https://github.com/angular/in-memory-web-api
 *
 * Used https://www.mockaroo.com/ to generate the initial data
 */
export class ShippingInMemoryService implements InMemoryDbService {

  createDb() {
    let shippingContacts: ShippingContact[] = [
      {
        "id": 1,
        "company": "Dynabox",
        "firstName": "Sandy",
        "lastName": "Threadgould",
        "addressLine1": "488 2nd Center",
        "city": "New Orleans",
        "state": "LA",
        "postalCode": "70142",
        "shippingType": "free"
      },
      {
        "id": 2,
        "firstName": "Wynnie",
        "lastName": "Greenrde",
        "addressLine1": "204 Fairfield Street",
        "city": "Denver",
        "state": "CO",
        "postalCode": "80262",
        "shippingType": "free"
      },
      {
        "id": 3,
        "company": "Bubbletube",
        "firstName": "Corabel",
        "lastName": "Soigne",
        "addressLine1": "66622 Eastlawn Crossing",
        "city": "Des Moines",
        "state": "IA",
        "postalCode": "50362",
        "shippingType": "free"
      },
      {
        "id": 4,
        "company": "Tanoodle",
        "firstName": "Revkah",
        "lastName": "Casellas",
        "addressLine1": "741 Huxley Alley",
        "city": "Whittier",
        "state": "CA",
        "postalCode": "90605",
        "shippingType": "nextday"
      },
      {
        "id": 5,
        "firstName": "Elysee",
        "lastName": "Candie",
        "addressLine1": "895 Clarendon Terrace",
        "city": "Wichita",
        "state": "KS",
        "postalCode": "67210",
        "shippingType": "priority"
      },
      {
        "id": 6,
        "company": "Divavu",
        "firstName": "Berget",
        "lastName": "Spain",
        "addressLine1": "851 Sunnyside Trail",
        "city": "Conroe",
        "state": "TX",
        "postalCode": "77305",
        "shippingType": "nextday"
      },
      {
        "id": 7,
        "company": "Kayveo",
        "firstName": "Lana",
        "lastName": "Ferriman",
        "addressLine1": "5 Carberry Alley",
        "city": "Dulles",
        "state": "VA",
        "postalCode": "20189",
        "shippingType": "free"
      },
      {
        "id": 8,
        "company": "Yodo",
        "firstName": "Matty",
        "lastName": "Pretley",
        "addressLine1": "4 Canary Terrace",
        "city": "Spokane",
        "state": "WA",
        "postalCode": "99260",
        "shippingType": "free"
      },
      {
        "id": 9,
        "company": "Eidel",
        "firstName": "Merrill",
        "lastName": "Firminger",
        "addressLine1": "46 Ludington Hill",
        "city": "San Francisco",
        "state": "CA",
        "postalCode": "94137",
        "shippingType": "nextday"
      },
      {
        "id": 10,
        "company": "Flipbug",
        "firstName": "Darryl",
        "lastName": "Speight",
        "addressLine1": "95618 Superior Terrace",
        "city": "Springfield",
        "state": "IL",
        "postalCode": "62794",
        "shippingType": "nextday"
      },
      {
        "id": 11,
        "company": "Quire",
        "firstName": "Kaiser",
        "lastName": "McBrady",
        "addressLine1": "825 Holy Cross Pass",
        "city": "Dallas",
        "state": "TX",
        "postalCode": "75236",
        "shippingType": "free"
      },
      {
        "id": 12,
        "company": "Skynoodle",
        "firstName": "Barri",
        "lastName": "Mellows",
        "addressLine1": "57893 Spohn Alley",
        "city": "Tulsa",
        "state": "OK",
        "postalCode": "74108",
        "shippingType": "priority"
      },
      {
        "id": 13,
        "company": "Omba",
        "firstName": "Arden",
        "lastName": "Girk",
        "addressLine1": "79 Shopko Center",
        "city": "Portsmouth",
        "state": "NH",
        "postalCode": "03804",
        "shippingType": "nextday"
      },
      {
        "id": 14,
        "company": "Ozu",
        "firstName": "Stillmann",
        "lastName": "Demaid",
        "addressLine1": "0726 Grasskamp Court",
        "city": "New York City",
        "state": "NY",
        "postalCode": "10131",
        "shippingType": "free"
      },
      {
        "id": 15,
        "firstName": "Jude",
        "lastName": "Mikalski",
        "addressLine1": "0141 Golden Leaf Center",
        "city": "New Haven",
        "state": "CT",
        "postalCode": "06505",
        "shippingType": "nextday"
      },
      {
        "id": 16,
        "company": "Plambee",
        "firstName": "Fenelia",
        "lastName": "Carter",
        "addressLine1": "9 Charing Cross Street",
        "city": "Fort Wayne",
        "state": "IN",
        "postalCode": "46805",
        "shippingType": "priority"
      },
      {
        "id": 17,
        "company": "Blogtags",
        "firstName": "Wallie",
        "lastName": "Audenis",
        "addressLine1": "3215 Melvin Court",
        "city": "Chattanooga",
        "state": "TN",
        "postalCode": "37450",
        "shippingType": "free"
      },
      {
        "id": 18,
        "company": "Minyx",
        "firstName": "Ermengarde",
        "lastName": "Banaszewski",
        "addressLine1": "039 Oxford Circle",
        "city": "Oklahoma City",
        "state": "OK",
        "postalCode": "73157",
        "shippingType": "nextday"
      },
      {
        "id": 19,
        "company": "Vinte",
        "firstName": "Wendie",
        "lastName": "Walling",
        "addressLine1": "9123 Evergreen Avenue",
        "city": "Honolulu",
        "state": "HI",
        "postalCode": "96825",
        "shippingType": "nextday"
      },
      {
        "id": 20,
        "company": "Edgeclub",
        "firstName": "Ham",
        "lastName": "Siddeley",
        "addressLine1": "4 Forest Run Way",
        "city": "Seattle",
        "state": "WA",
        "postalCode": "98109",
        "shippingType": "nextday"
      },
      {
        "id": 21,
        "company": "Feedmix",
        "firstName": "Garv",
        "lastName": "Mangeon",
        "addressLine1": "8 Oriole Terrace",
        "city": "Sioux Falls",
        "state": "SD",
        "postalCode": "57198",
        "shippingType": "free"
      },
      {
        "id": 22,
        "company": "Chatterbridge",
        "firstName": "Eolande",
        "lastName": "Absolom",
        "addressLine1": "532 Nova Place",
        "city": "Maple Plain",
        "state": "MN",
        "postalCode": "55572",
        "shippingType": "free"
      },
      {
        "id": 23,
        "company": "Twinte",
        "firstName": "Osborne",
        "lastName": "Eagers",
        "addressLine1": "4 Mandrake Lane",
        "city": "Dallas",
        "state": "TX",
        "postalCode": "75387",
        "shippingType": "nextday"
      },
      {
        "id": 24,
        "company": "Yamia",
        "firstName": "Kerwinn",
        "lastName": "Paulet",
        "addressLine1": "005 Duke Park",
        "city": "Houston",
        "state": "TX",
        "postalCode": "77040",
        "shippingType": "nextday"
      },
      {
        "id": 25,
        "company": "Twitternation",
        "firstName": "Rosie",
        "lastName": "Cranefield",
        "addressLine1": "9 Mayer Plaza",
        "city": "Atlanta",
        "state": "GA",
        "postalCode": "30380",
        "shippingType": "priority"
      },
      {
        "id": 26,
        "firstName": "Susanetta",
        "lastName": "Jennings",
        "addressLine1": "649 Sherman Parkway",
        "city": "Saint Paul",
        "state": "MN",
        "postalCode": "55188",
        "shippingType": "nextday"
      },
      {
        "id": 27,
        "company": "Kamba",
        "firstName": "Patricio",
        "lastName": "Lacy",
        "addressLine1": "0 Butterfield Circle",
        "city": "Washington",
        "state": "DC",
        "postalCode": "20520",
        "shippingType": "priority"
      },
      {
        "id": 28,
        "company": "Zoonder",
        "firstName": "Eloisa",
        "lastName": "Orpin",
        "addressLine1": "2424 Southridge Plaza",
        "city": "Indianapolis",
        "state": "IN",
        "postalCode": "46202",
        "shippingType": "free"
      },
      {
        "id": 29,
        "company": "Riffpath",
        "firstName": "Valencia",
        "lastName": "Bisley",
        "addressLine1": "87 Golf Course Hill",
        "city": "Dallas",
        "state": "TX",
        "postalCode": "75277",
        "shippingType": "free"
      },
      {
        "id": 30,
        "company": "Avavee",
        "firstName": "Terrill",
        "lastName": "Drieu",
        "addressLine1": "00163 Oak Valley Plaza",
        "city": "Indianapolis",
        "state": "IN",
        "postalCode": "46202",
        "shippingType": "nextday"
      },
      {
        "id": 31,
        "company": "Fivespan",
        "firstName": "Joeann",
        "lastName": "Smitheram",
        "addressLine1": "0885 Wayridge Alley",
        "city": "Jackson",
        "state": "MS",
        "postalCode": "39210",
        "shippingType": "priority"
      },
      {
        "id": 32,
        "company": "Flipstorm",
        "firstName": "Raddie",
        "lastName": "Heining",
        "addressLine1": "1 Burrows Place",
        "city": "El Paso",
        "state": "TX",
        "postalCode": "88519",
        "shippingType": "nextday"
      },
      {
        "id": 33,
        "company": "Yabox",
        "firstName": "Adey",
        "lastName": "Wheadon",
        "addressLine1": "91 Kedzie Alley",
        "city": "Seattle",
        "state": "WA",
        "postalCode": "98133",
        "shippingType": "nextday"
      },
      {
        "id": 34,
        "company": "Realmix",
        "firstName": "Darwin",
        "lastName": "Augustus",
        "addressLine1": "53657 Schlimgen Lane",
        "city": "Louisville",
        "state": "KY",
        "postalCode": "40256",
        "shippingType": "priority"
      },
      {
        "id": 35,
        "company": "Quatz",
        "firstName": "Susann",
        "lastName": "Lonnon",
        "addressLine1": "87 Northfield Center",
        "city": "Yakima",
        "state": "WA",
        "postalCode": "98907",
        "shippingType": "nextday"
      },
      {
        "id": 36,
        "company": "Browsebug",
        "firstName": "Victoria",
        "lastName": "Mishaw",
        "addressLine1": "1 Surrey Plaza",
        "city": "Salt Lake City",
        "state": "UT",
        "postalCode": "84140",
        "shippingType": "free"
      },
      {
        "id": 37,
        "company": "Pixoboo",
        "firstName": "Leland",
        "lastName": "Geane",
        "addressLine1": "723 Northland Parkway",
        "city": "Greenville",
        "state": "SC",
        "postalCode": "29615",
        "shippingType": "free"
      },
      {
        "id": 38,
        "company": "Zoonoodle",
        "firstName": "Dud",
        "lastName": "Trammel",
        "addressLine1": "985 Gulseth Pass",
        "city": "Roanoke",
        "state": "VA",
        "postalCode": "24014",
        "shippingType": "nextday"
      },
      {
        "id": 39,
        "company": "Skyvu",
        "firstName": "Jeniffer",
        "lastName": "Mathon",
        "addressLine1": "56 Hoffman Road",
        "city": "Fairbanks",
        "state": "AK",
        "postalCode": "99790",
        "shippingType": "free"
      },
      {
        "id": 40,
        "company": "Riffpath",
        "firstName": "Alden",
        "lastName": "Oldroyd",
        "addressLine1": "7 Saint Paul Lane",
        "city": "Santa Barbara",
        "state": "CA",
        "postalCode": "93106",
        "shippingType": "priority"
      },
      {
        "id": 41,
        "company": "Feedfish",
        "firstName": "Auroora",
        "lastName": "Tampin",
        "addressLine1": "744 Iowa Center",
        "city": "Orange",
        "state": "CA",
        "postalCode": "92862",
        "shippingType": "priority"
      },
      {
        "id": 42,
        "firstName": "Krishna",
        "lastName": "Burdess",
        "addressLine1": "121 Hallows Parkway",
        "city": "Oklahoma City",
        "state": "OK",
        "postalCode": "73135",
        "shippingType": "priority"
      },
      {
        "id": 43,
        "company": "Quamba",
        "firstName": "Allys",
        "lastName": "Monteith",
        "addressLine1": "11 Stuart Point",
        "city": "Augusta",
        "state": "GA",
        "postalCode": "30919",
        "shippingType": "priority"
      },
      {
        "id": 44,
        "company": "Eadel",
        "firstName": "Felipa",
        "lastName": "Stayte",
        "addressLine1": "94804 Hovde Parkway",
        "city": "Pasadena",
        "state": "CA",
        "postalCode": "91109",
        "shippingType": "nextday"
      },
      {
        "id": 45,
        "company": "Jatri",
        "firstName": "Orbadiah",
        "lastName": "Brecken",
        "addressLine1": "83 Dixon Way",
        "city": "Cincinnati",
        "state": "OH",
        "postalCode": "45238",
        "shippingType": "nextday"
      },
      {
        "id": 46,
        "company": "Minyx",
        "firstName": "Alphard",
        "lastName": "McMyler",
        "addressLine1": "8377 Garrison Lane",
        "city": "Fairbanks",
        "state": "AK",
        "postalCode": "99709",
        "shippingType": "free"
      },
      {
        "id": 47,
        "company": "Edgepulse",
        "firstName": "Ludwig",
        "lastName": "Rosenbloom",
        "addressLine1": "6 Monica Parkway",
        "city": "Wichita",
        "state": "KS",
        "postalCode": "67260",
        "shippingType": "free"
      },
      {
        "id": 48,
        "firstName": "Janifer",
        "lastName": "Ilieve",
        "addressLine1": "7320 Lakewood Center",
        "city": "New York City",
        "state": "NY",
        "postalCode": "10079",
        "shippingType": "free"
      },
      {
        "id": 49,
        "company": "Zooxo",
        "firstName": "Wakefield",
        "lastName": "Darrel",
        "addressLine1": "23 Grayhawk Hill",
        "city": "Vienna",
        "state": "VA",
        "postalCode": "22184",
        "shippingType": "free"
      },
      {
        "id": 50,
        "company": "Thoughtworks",
        "firstName": "Wye",
        "lastName": "Kellegher",
        "addressLine1": "345 Packers Lane",
        "city": "Manchester",
        "state": "NH",
        "postalCode": "03105",
        "shippingType": "nextday"
      },
      {
        "id": 51,
        "company": "Tekfly",
        "firstName": "Tallie",
        "lastName": "Linnard",
        "addressLine1": "963 Superior Plaza",
        "city": "Shawnee Mission",
        "state": "KS",
        "postalCode": "66215",
        "shippingType": "priority"
      },
      {
        "id": 52,
        "company": "Youspan",
        "firstName": "Addie",
        "lastName": "Versey",
        "addressLine1": "79 Sachtjen Drive",
        "city": "Dallas",
        "state": "TX",
        "postalCode": "75353",
        "shippingType": "nextday"
      },
      {
        "id": 53,
        "company": "Tagpad",
        "firstName": "Jo-anne",
        "lastName": "Spriggen",
        "addressLine1": "3191 Forest Dale Park",
        "city": "Terre Haute",
        "state": "IN",
        "postalCode": "47812",
        "shippingType": "free"
      },
      {
        "id": 54,
        "company": "Topiczoom",
        "firstName": "Stephani",
        "lastName": "Tarney",
        "addressLine1": "88923 Oxford Point",
        "city": "Bridgeport",
        "state": "CT",
        "postalCode": "06606",
        "shippingType": "nextday"
      },
      {
        "id": 55,
        "firstName": "Elsa",
        "lastName": "Tear",
        "addressLine1": "8 Mallard Plaza",
        "city": "Memphis",
        "state": "TN",
        "postalCode": "38168",
        "shippingType": "free"
      },
      {
        "id": 56,
        "company": "Roombo",
        "firstName": "Mata",
        "lastName": "Dawson",
        "addressLine1": "82 Welch Crossing",
        "city": "Lincoln",
        "state": "NE",
        "postalCode": "68583",
        "shippingType": "free"
      },
      {
        "id": 57,
        "company": "Topdrive",
        "firstName": "Benyamin",
        "lastName": "Hubner",
        "addressLine1": "2293 American Ash Junction",
        "city": "Spokane",
        "state": "WA",
        "postalCode": "99215",
        "shippingType": "priority"
      },
      {
        "id": 58,
        "company": "Fatz",
        "firstName": "Carine",
        "lastName": "McCoid",
        "addressLine1": "0021 Crescent Oaks Street",
        "city": "New York City",
        "state": "NY",
        "postalCode": "10120",
        "shippingType": "free"
      },
      {
        "id": 59,
        "company": "Plambee",
        "firstName": "Alfonso",
        "lastName": "Bilofsky",
        "addressLine1": "0 Cascade Alley",
        "city": "Duluth",
        "state": "MN",
        "postalCode": "55805",
        "shippingType": "priority"
      },
      {
        "id": 60,
        "company": "Oyoyo",
        "firstName": "Marys",
        "lastName": "Gasking",
        "addressLine1": "79182 Everett Court",
        "city": "Greensboro",
        "state": "NC",
        "postalCode": "27499",
        "shippingType": "nextday"
      },
      {
        "id": 61,
        "firstName": "Darell",
        "lastName": "Ghidelli",
        "addressLine1": "29 Carpenter Park",
        "city": "Tyler",
        "state": "TX",
        "postalCode": "75799",
        "shippingType": "priority"
      },
      {
        "id": 62,
        "company": "Rooxo",
        "firstName": "Ari",
        "lastName": "Girdlestone",
        "addressLine1": "16086 Banding Court",
        "city": "Springfield",
        "state": "MO",
        "postalCode": "65805",
        "shippingType": "nextday"
      },
      {
        "id": 63,
        "company": "Quinu",
        "firstName": "Uta",
        "lastName": "Bursell",
        "addressLine1": "1 Clyde Gallagher Avenue",
        "city": "Grand Forks",
        "state": "ND",
        "postalCode": "58207",
        "shippingType": "priority"
      },
      {
        "id": 64,
        "company": "Dabtype",
        "firstName": "Madelyn",
        "lastName": "Aujouanet",
        "addressLine1": "70 East Pass",
        "city": "Lynchburg",
        "state": "VA",
        "postalCode": "24515",
        "shippingType": "free"
      },
      {
        "id": 65,
        "company": "Feedfire",
        "firstName": "Orelle",
        "lastName": "Von Der Empten",
        "addressLine1": "6 Northridge Court",
        "city": "Philadelphia",
        "state": "PA",
        "postalCode": "19131",
        "shippingType": "free"
      },
      {
        "id": 66,
        "company": "Pixonyx",
        "firstName": "Mandie",
        "lastName": "Dixon",
        "addressLine1": "83 Esker Avenue",
        "city": "Roanoke",
        "state": "VA",
        "postalCode": "24004",
        "shippingType": "priority"
      },
      {
        "id": 67,
        "firstName": "Gaynor",
        "lastName": "Massingham",
        "addressLine1": "7952 Village Street",
        "city": "Chula Vista",
        "state": "CA",
        "postalCode": "91913",
        "shippingType": "priority"
      },
      {
        "id": 68,
        "company": "Avamba",
        "firstName": "Thomas",
        "lastName": "Fairhead",
        "addressLine1": "96 Magdeline Pass",
        "city": "San Francisco",
        "state": "CA",
        "postalCode": "94169",
        "shippingType": "priority"
      },
      {
        "id": 69,
        "company": "Skyba",
        "firstName": "Leeann",
        "lastName": "Le Provest",
        "addressLine1": "00328 Aberg Street",
        "city": "Lincoln",
        "state": "NE",
        "postalCode": "68531",
        "shippingType": "priority"
      },
      {
        "id": 70,
        "firstName": "Ardine",
        "lastName": "Ericsson",
        "addressLine1": "3154 Independence Center",
        "city": "Newport News",
        "state": "VA",
        "postalCode": "23605",
        "shippingType": "nextday"
      },
      {
        "id": 71,
        "company": "Rhynoodle",
        "firstName": "Benetta",
        "lastName": "Grover",
        "addressLine1": "5521 Sherman Crossing",
        "city": "Boise",
        "state": "ID",
        "postalCode": "83757",
        "shippingType": "nextday"
      },
      {
        "id": 72,
        "company": "Gabcube",
        "firstName": "Pooh",
        "lastName": "Grollmann",
        "addressLine1": "3 Monterey Park",
        "city": "Washington",
        "state": "DC",
        "postalCode": "20599",
        "shippingType": "nextday"
      },
      {
        "id": 73,
        "company": "Skajo",
        "firstName": "Rochelle",
        "lastName": "Killough",
        "addressLine1": "91 Melvin Pass",
        "city": "Birmingham",
        "state": "AL",
        "postalCode": "35215",
        "shippingType": "free"
      },
      {
        "id": 74,
        "company": "Jetwire",
        "firstName": "Robinet",
        "lastName": "Caslake",
        "addressLine1": "851 Becker Lane",
        "city": "Fairfax",
        "state": "VA",
        "postalCode": "22036",
        "shippingType": "priority"
      },
      {
        "id": 75,
        "firstName": "Lindsy",
        "lastName": "McKmurrie",
        "addressLine1": "9181 Meadow Valley Pass",
        "city": "Amarillo",
        "state": "TX",
        "postalCode": "79118",
        "shippingType": "free"
      },
      {
        "id": 76,
        "company": "Cogilith",
        "firstName": "Bartlet",
        "lastName": "Lode",
        "addressLine1": "58060 Pleasure Alley",
        "city": "New York City",
        "state": "NY",
        "postalCode": "10045",
        "shippingType": "priority"
      },
      {
        "id": 77,
        "firstName": "Francesco",
        "lastName": "Mealand",
        "addressLine1": "33 Buell Park",
        "city": "Abilene",
        "state": "TX",
        "postalCode": "79605",
        "shippingType": "nextday"
      },
      {
        "id": 78,
        "company": "Gigazoom",
        "firstName": "Merle",
        "lastName": "Aberkirdo",
        "addressLine1": "6 Messerschmidt Alley",
        "city": "New Bedford",
        "state": "MA",
        "postalCode": "02745",
        "shippingType": "free"
      },
      {
        "id": 79,
        "company": "Dabshots",
        "firstName": "Morten",
        "lastName": "Yoell",
        "addressLine1": "6846 Schlimgen Circle",
        "city": "Topeka",
        "state": "KS",
        "postalCode": "66617",
        "shippingType": "priority"
      },
      {
        "id": 80,
        "firstName": "Halli",
        "lastName": "Stegell",
        "addressLine1": "77 Manitowish Point",
        "city": "El Paso",
        "state": "TX",
        "postalCode": "79989",
        "shippingType": "nextday"
      },
      {
        "id": 81,
        "company": "Plambee",
        "firstName": "Marji",
        "lastName": "Magee",
        "addressLine1": "86515 Corry Point",
        "city": "Tucson",
        "state": "AZ",
        "postalCode": "85720",
        "shippingType": "free"
      },
      {
        "id": 82,
        "company": "Feedspan",
        "firstName": "Madel",
        "lastName": "Eloy",
        "addressLine1": "8562 Jana Avenue",
        "city": "Milwaukee",
        "state": "WI",
        "postalCode": "53210",
        "shippingType": "priority"
      },
      {
        "id": 83,
        "company": "Bluejam",
        "firstName": "Darcie",
        "lastName": "Mallinder",
        "addressLine1": "2 Heffernan Hill",
        "city": "Fort Myers",
        "state": "FL",
        "postalCode": "33913",
        "shippingType": "priority"
      },
      {
        "id": 84,
        "company": "Gabspot",
        "firstName": "Heriberto",
        "lastName": "Pillans",
        "addressLine1": "5 Portage Street",
        "city": "Miami",
        "state": "FL",
        "postalCode": "33124",
        "shippingType": "nextday"
      },
      {
        "id": 85,
        "company": "Zooveo",
        "firstName": "Putnam",
        "lastName": "Olczyk",
        "addressLine1": "38787 Nancy Circle",
        "city": "Newark",
        "state": "NJ",
        "postalCode": "07112",
        "shippingType": "free"
      },
      {
        "id": 86,
        "company": "Demivee",
        "firstName": "Christos",
        "lastName": "Knevet",
        "addressLine1": "72735 Rowland Road",
        "city": "South Bend",
        "state": "IN",
        "postalCode": "46620",
        "shippingType": "priority"
      },
      {
        "id": 87,
        "company": "Babbleset",
        "firstName": "Phip",
        "lastName": "Caveill",
        "addressLine1": "5346 Esch Point",
        "city": "Seattle",
        "state": "WA",
        "postalCode": "98109",
        "shippingType": "free"
      },
      {
        "id": 88,
        "company": "Voonyx",
        "firstName": "Glynis",
        "lastName": "Claughton",
        "addressLine1": "009 Maple Wood Road",
        "city": "Port Washington",
        "state": "NY",
        "postalCode": "11054",
        "shippingType": "free"
      },
      {
        "id": 89,
        "company": "Voonyx",
        "firstName": "Isabella",
        "lastName": "Rodrig",
        "addressLine1": "3569 Knutson Terrace",
        "city": "Houston",
        "state": "TX",
        "postalCode": "77240",
        "shippingType": "nextday"
      },
      {
        "id": 90,
        "company": "Skimia",
        "firstName": "Gunilla",
        "lastName": "Issakov",
        "addressLine1": "33051 Mariners Cove Lane",
        "city": "Sacramento",
        "state": "CA",
        "postalCode": "95838",
        "shippingType": "free"
      },
      {
        "id": 91,
        "company": "Thoughtstorm",
        "firstName": "Alyss",
        "lastName": "Ondricek",
        "addressLine1": "7110 Warrior Alley",
        "city": "Albuquerque",
        "state": "NM",
        "postalCode": "87105",
        "shippingType": "nextday"
      },
      {
        "id": 92,
        "company": "Dabfeed",
        "firstName": "Zabrina",
        "lastName": "Tubble",
        "addressLine1": "17382 Dixon Way",
        "city": "El Paso",
        "state": "TX",
        "postalCode": "88530",
        "shippingType": "priority"
      },
      {
        "id": 93,
        "company": "Fivebridge",
        "firstName": "Pearline",
        "lastName": "Borrowman",
        "addressLine1": "40789 Corben Hill",
        "city": "Des Moines",
        "state": "IA",
        "postalCode": "50335",
        "shippingType": "free"
      },
      {
        "id": 94,
        "company": "Flashspan",
        "firstName": "Iosep",
        "lastName": "MacGee",
        "addressLine1": "151 Logan Circle",
        "city": "Rochester",
        "state": "NY",
        "postalCode": "14604",
        "shippingType": "nextday"
      },
      {
        "id": 95,
        "company": "Shuffledrive",
        "firstName": "Sheela",
        "lastName": "Durrell",
        "addressLine1": "60329 Basil Terrace",
        "city": "Omaha",
        "state": "NE",
        "postalCode": "68124",
        "shippingType": "nextday"
      },
      {
        "id": 96,
        "company": "Oodoo",
        "firstName": "Saraann",
        "lastName": "Somerton",
        "addressLine1": "247 Village Place",
        "city": "El Paso",
        "state": "TX",
        "postalCode": "88589",
        "shippingType": "nextday"
      },
      {
        "id": 97,
        "company": "Yakidoo",
        "firstName": "Xymenes",
        "lastName": "Izod",
        "addressLine1": "48666 Mifflin Hill",
        "city": "Sacramento",
        "state": "CA",
        "postalCode": "94257",
        "shippingType": "free"
      },
      {
        "id": 98,
        "company": "Miboo",
        "firstName": "Walt",
        "lastName": "Tanfield",
        "addressLine1": "73 Tennyson Point",
        "city": "New York City",
        "state": "NY",
        "postalCode": "10045",
        "shippingType": "nextday"
      },
      {
        "id": 99,
        "company": "Skyndu",
        "firstName": "Sena",
        "lastName": "Edelston",
        "addressLine1": "06492 Eastwood Way",
        "city": "Plano",
        "state": "TX",
        "postalCode": "75074",
        "shippingType": "priority"
      },
      {
        "id": 100,
        "company": "Quamba",
        "firstName": "Claudia",
        "lastName": "Emmert",
        "addressLine1": "0668 Atwood Alley",
        "city": "Phoenix",
        "state": "AZ",
        "postalCode": "85083",
        "shippingType": "nextday"
      }
    ];

    return {shippingContacts};
  }
}
