export const managers = [
   {
     "roster": 1,  // ID of the roster that the manager manages
     "name": "Teddyhands",
     "tookOver": 2018, // (optional) used if a manager took over a team, delete this line or change to null otherwise
     "location": "Queens",
     "bio": "Lorem ipsum...",
     "photo": "/managers/name.jpg", // done
     "fantasyStart": 2010, // when did the manager start playing fantasy football
     "favoriteTeam": "nyg", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "mode": "Win Now", // 'Win Now' or 'Rebuild'
     "rival": {
       name: "Rival", // Can be anything (usually your rival's name)
       link: 6, // manager array number within this array, or null to link back to all managers page
       image: "/managers/rival.jpg", // either a specific manager photo or 'everyone' or 'question'
     },
     "favoritePlayer": 1426, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
     "rookieOrVets": "Rookies", // 'Rookies' or 'Vets'
     "philosophy": "Your fantasy team's philosophy",
     "tradingScale": 10, // 1 - 10
     "prefferedContact": "Text", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
   },
   {
      "roster": 2,  // ID of the roster that the manager manages
     "name": "Rjstang",
     "tookOver": 2018, // (optional) used if a manager took over a team, delete this line or change to null otherwise
     "location": "Queens",
     "bio": "Lorem ipsum...",
     "photo": "/managers/name.jpg", // done
     "fantasyStart": 2010, // when did the manager start playing fantasy football
     "favoriteTeam": "nyg", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "mode": "Win Now", // 'Win Now' or 'Rebuild'
     "rival": {
       name: "Rival", // Can be anything (usually your rival's name)
       link: 6, // manager array number within this array, or null to link back to all managers page
       image: "/managers/rival.jpg", // either a specific manager photo or 'everyone' or 'question'
     },
     "favoritePlayer": 1426, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
     "rookieOrVets": "Rookies", // 'Rookies' or 'Vets'
     "philosophy": "Your fantasy team's philosophy",
     "tradingScale": 10, // 1 - 10
     "prefferedContact": "Text", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
]
