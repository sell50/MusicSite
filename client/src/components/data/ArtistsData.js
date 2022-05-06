import * as artists from './ArtistImages';
import * as albums from './AlbumImages.js';

export const Artists = {
    AG: {
        Artist_Name: "Ariana Grande",
        Artist_Picture: artists.arianaGrande,
        Picture_Alt: "Alt Info Here",
        Age: "29",
        Label: "Republic",
        Albums:
        [
            {   
                Album_Picture: albums.ArianaGrande_Positions,
                Album_Name: "Positions",
                Songs: 
                [
                    "song1", "song2"
                ],
                ReleaseDate:"",
                ReviewDate:"January 1, 2022",
                Review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

            },
            {
                Album_Picture: albums.ArianaGrande_Positions,
                Album_Name: "HI",
                Songs: 
                [
                    "song1", "song2"
                ],
                ReleaseDate:"",
                ReviewDate:"January 11, 2022",
                Review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }

        ],
        Awards: "Grammy Nominated - 2016"
    },
    LG: {
        Artist_Picture: artists.ladyGaga,
        Picture_Alt: "Alt Info Here",
        Artist_Name: "Lady Gaga",
        Age: "34",
        Label: "Universal",
        Albums: 
        [
            {
                Album_Picture: albums.LadyGaga_Chromatica,
                Album_Name: "Chromatica",
                Songs:
                [
                    "Song1", "Song2"
                ],
                ReleaseDate: "",
                ReviewDate:"January 30, 2022",
                Review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
        ]
    },
    TS: {
        Artist_Picture: artists.taylorSwift,
        Picture_Alt: "Alt Info Here",
        Artist_Name: "Taylor Swift",
        Age: "30",
        Label: "Universal",
        Albums:
        [
            {
                Album_Picture: albums.TaylorSwift_Evermore,
                Album_Name: "evermore",
                Songs:
                [
                    "song1", "song2"
                ],
                ReleaseDate: "blah",
                ReviewDate:"January, 10, 2022",
                Review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
        ]
    }
};

