// One Pace Extension - Built with esbuild
"use strict";
(() => {
  // src/constants.ts
  var ONE_PIECE_ANILIST_ID = 21;

  // data/episodes.json
  var episodes_default = {
    arcs: {
      "Romance Dawn": {
        paceEpisodeCount: 4
      },
      "Orange Town": {
        paceEpisodeCount: 3
      },
      "Syrup Village": {
        paceEpisodeCount: 7
      },
      Gaimon: {
        paceEpisodeCount: 1
      },
      Baratie: {
        paceEpisodeCount: 8
      },
      "Arlong Park": {
        paceEpisodeCount: 10
      },
      "The Adventures of Buggy's Crew": {
        paceEpisodeCount: 1
      },
      Loguetown: {
        paceEpisodeCount: 3
      },
      "Reverse Mountain": {
        paceEpisodeCount: 2
      },
      "Whisky Peak (TBR)": {
        paceEpisodeCount: 2
      },
      "The Trials of Koby-Meppo": {
        paceEpisodeCount: 1
      },
      "Little Garden": {
        paceEpisodeCount: 5
      },
      "Drum Island": {
        paceEpisodeCount: 8
      },
      Alabasta: {
        paceEpisodeCount: 21
      },
      Jaya: {
        paceEpisodeCount: 8
      },
      Skypiea: {
        paceEpisodeCount: 25
      },
      "Long Ring Long Land (TBR)": {
        paceEpisodeCount: 6
      },
      "Water Seven": {
        paceEpisodeCount: 20
      },
      "Enies Lobby": {
        paceEpisodeCount: 25
      },
      "Post-Enies Lobby (TBR)": {
        paceEpisodeCount: 5
      },
      "Thriller Bark  (TBR)": {
        paceEpisodeCount: 22
      },
      "Sabaody Archipelago (TBR)": {
        paceEpisodeCount: 11
      },
      "Amazon Lily (TBR)": {
        paceEpisodeCount: 5
      },
      "Impel Down (TBR)": {
        paceEpisodeCount: 10
      },
      "The Adventures of the Straw Hats": {
        paceEpisodeCount: 1
      },
      Marineford: {
        paceEpisodeCount: 17
      },
      "Post-War": {
        paceEpisodeCount: 8
      },
      "Return to Sabaody": {
        paceEpisodeCount: 3
      },
      "Fishman Island (TBR)": {
        paceEpisodeCount: 24
      },
      "Punk Hazard (TBR)": {
        paceEpisodeCount: 22
      },
      "Dressrosa (TBR)": {
        paceEpisodeCount: 48
      },
      "Zou (TBR)": {
        paceEpisodeCount: 10
      },
      "Whole Cake Island": {
        paceEpisodeCount: 39
      },
      Reverie: {
        paceEpisodeCount: 3
      },
      "Wano (WIP)": {
        paceEpisodeCount: 61
      },
      "Egghead (WIP)": {
        paceEpisodeCount: 21
      },
      Totals: {
        paceEpisodeCount: 0
      }
    },
    episodes: [
      {
        arc: "Romance Dawn",
        paceEpisode: "Romance Dawn 01",
        chapters: [
          {
            from: "Ch.1",
            to: "Ch.1"
          }
        ],
        chaptersRaw: "Ch. 1",
        opStart: 312,
        opEnd: 312,
        opEpisodesRaw: "Episode of East Blue, \nEp. 312 (Intro)",
        lengthMinutes: 17.9
      },
      {
        arc: "Romance Dawn",
        paceEpisode: "Romance Dawn 02",
        chapters: [
          {
            from: "Ch.2",
            to: "Ch.2"
          }
        ],
        chaptersRaw: "Ch. 2",
        opStart: 1,
        opEnd: 1,
        opEpisodesRaw: "Ep. 1",
        lengthMinutes: 21
      },
      {
        arc: "Romance Dawn",
        paceEpisode: "Romance Dawn 03",
        chapters: [
          {
            from: "Ch.3",
            to: "4"
          }
        ],
        chaptersRaw: "Ch. 3-4",
        opStart: 2,
        opEnd: 19,
        opEpisodesRaw: "Ep. 2, 19",
        lengthMinutes: 28.7
      },
      {
        arc: "Romance Dawn",
        paceEpisode: "Romance Dawn 04",
        chapters: [
          {
            from: "Ch.5",
            to: "7"
          }
        ],
        chaptersRaw: "Ch. 5-7",
        opStart: 3,
        opEnd: 3,
        opEpisodesRaw: "Ep. 3",
        lengthMinutes: 18.1
      },
      {
        arc: "Orange Town",
        paceEpisode: "Orange Town 01",
        chapters: [
          {
            from: "Ch.8",
            to: "11"
          }
        ],
        chaptersRaw: "Ch. 8-11",
        opStart: 4,
        opEnd: 6,
        opEpisodesRaw: "Ep. 4-6",
        lengthMinutes: 28.6
      },
      {
        arc: "Orange Town",
        paceEpisode: "Orange Town 02",
        chapters: [
          {
            from: "Ch.12",
            to: "19"
          }
        ],
        chaptersRaw: "Ch. 12-19",
        opStart: 6,
        opEnd: 7,
        opEpisodesRaw: "Ep. 6-7",
        lengthMinutes: 36.9
      },
      {
        arc: "Orange Town",
        paceEpisode: "Orange Town 03",
        chapters: [
          {
            from: "Ch.19",
            to: "21"
          }
        ],
        chaptersRaw: "Ch. 19-21",
        opStart: 8,
        opEnd: 8,
        opEpisodesRaw: "Ep. 8",
        lengthMinutes: 22.7
      },
      {
        arc: "Syrup Village",
        paceEpisode: "Syrup Village 01",
        chapters: [
          {
            from: "Ch.23",
            to: "25"
          }
        ],
        chaptersRaw: "Ch. 23-25",
        opStart: 9,
        opEnd: 10,
        opEpisodesRaw: "Ep. 9-10",
        lengthMinutes: 30
      },
      {
        arc: "Syrup Village",
        paceEpisode: "Syrup Village 02",
        chapters: [
          {
            from: "Ch.26",
            to: "27"
          }
        ],
        chaptersRaw: "Ch. 26-27",
        opStart: 10,
        opEnd: 11,
        opEpisodesRaw: "Ep. 10-11",
        lengthMinutes: 23.4
      },
      {
        arc: "Syrup Village",
        paceEpisode: "Syrup Village 03",
        chapters: [
          {
            from: "Ch.28",
            to: "30"
          }
        ],
        chaptersRaw: "Ch. 28-30",
        opStart: 12,
        opEnd: 13,
        opEpisodesRaw: "Ep. 12-13",
        lengthMinutes: 25.6
      },
      {
        arc: "Syrup Village",
        paceEpisode: "Syrup Village 04",
        chapters: [
          {
            from: "Ch.31",
            to: "34"
          }
        ],
        chaptersRaw: "Ch. 31-34",
        opStart: 13,
        opEnd: 14,
        opEpisodesRaw: "Ep. 13-14",
        lengthMinutes: 31.7
      },
      {
        arc: "Syrup Village",
        paceEpisode: "Syrup Village 05",
        chapters: [
          {
            from: "Ch.35",
            to: "37"
          }
        ],
        chaptersRaw: "Ch. 35-37",
        opStart: 15,
        opEnd: 16,
        opEpisodesRaw: "Ep. 15-16",
        lengthMinutes: 23.7
      },
      {
        arc: "Syrup Village",
        paceEpisode: "Syrup Village 06",
        chapters: [
          {
            from: "Ch.38",
            to: "39"
          }
        ],
        chaptersRaw: "Ch. 38-39",
        opStart: 16,
        opEnd: 17,
        opEpisodesRaw: "Ep. 16-17",
        lengthMinutes: 17.7
      },
      {
        arc: "Syrup Village",
        paceEpisode: "Syrup Village 07",
        chapters: [
          {
            from: "Ch.40",
            to: "41"
          }
        ],
        chaptersRaw: "Ch. 40-41",
        opStart: 17,
        opEnd: 17,
        opEpisodesRaw: "Ep. 17",
        lengthMinutes: 19.3
      },
      {
        arc: "Gaimon",
        paceEpisode: "Gaimon 01",
        chapters: [
          {
            from: "Ch.42",
            to: "Ch.42"
          },
          {
            from: "22",
            to: "22"
          }
        ],
        chaptersRaw: "Ch. 42,22",
        opStart: 18,
        opEnd: 18,
        opEpisodesRaw: "Ep. 18",
        lengthMinutes: 21.5
      },
      {
        arc: "Baratie",
        paceEpisode: "Baratie 01",
        chapters: [
          {
            from: "Ch.42",
            to: "44"
          }
        ],
        chaptersRaw: "Ch. 42-44",
        opStart: 19,
        opEnd: 21,
        opEpisodesRaw: "Ep. 19-21",
        lengthMinutes: 30.3
      },
      {
        arc: "Baratie",
        paceEpisode: "Baratie 02",
        chapters: [
          {
            from: "Ch.45",
            to: "47"
          }
        ],
        chaptersRaw: "Ch. 45-47",
        opStart: 21,
        opEnd: 23,
        opEpisodesRaw: "Ep. 21-23",
        lengthMinutes: 31.5
      },
      {
        arc: "Baratie",
        paceEpisode: "Baratie 03",
        chapters: [
          {
            from: "Ch.48",
            to: "52"
          }
        ],
        chaptersRaw: "Ch. 48-52",
        opStart: 23,
        opEnd: 135,
        opEpisodesRaw: "Ep. 23-24, 29, 135",
        lengthMinutes: 38
      },
      {
        arc: "Baratie",
        paceEpisode: "Baratie 04",
        chapters: [
          {
            from: "Ch.53",
            to: "55"
          }
        ],
        chaptersRaw: "Ch. 53-55",
        opStart: 25,
        opEnd: 25,
        opEpisodesRaw: "Ep. 25",
        lengthMinutes: 20.4
      },
      {
        arc: "Baratie",
        paceEpisode: "Baratie 05",
        chapters: [
          {
            from: "Ch.56",
            to: "59"
          }
        ],
        chaptersRaw: "Ch. 56-59",
        opStart: 26,
        opEnd: 26,
        opEpisodesRaw: "Ep. 26",
        lengthMinutes: 21.8
      },
      {
        arc: "Baratie",
        paceEpisode: "Baratie 06",
        chapters: [
          {
            from: "Ch.59",
            to: "63"
          }
        ],
        chaptersRaw: "Ch. 59-63",
        opStart: 27,
        opEnd: 28,
        opEpisodesRaw: "Ep. 27-28",
        lengthMinutes: 28
      },
      {
        arc: "Baratie",
        paceEpisode: "Baratie 07",
        chapters: [
          {
            from: "Ch.63",
            to: "67"
          }
        ],
        chaptersRaw: "Ch. 63-67",
        opStart: 28,
        opEnd: 29,
        opEpisodesRaw: "Ep. 28-29",
        lengthMinutes: 27.8
      },
      {
        arc: "Baratie",
        paceEpisode: "Baratie 08",
        chapters: [
          {
            from: "Ch.67",
            to: "68"
          }
        ],
        chaptersRaw: "Ch. 67-68",
        opStart: 30,
        opEnd: 30,
        opEpisodesRaw: "Ep. 30",
        lengthMinutes: 0
      },
      {
        arc: "Arlong Park",
        paceEpisode: "Arlong Park 01",
        chapters: [
          {
            from: "Ch.69",
            to: "71"
          }
        ],
        chaptersRaw: "Ch. 69-71",
        opStart: 31,
        opEnd: 32,
        opEpisodesRaw: "Ep. 31-32",
        lengthMinutes: 30.8
      },
      {
        arc: "Arlong Park",
        paceEpisode: "Arlong Park 02",
        chapters: [
          {
            from: "Ch.71",
            to: "73"
          }
        ],
        chaptersRaw: "Ch. 71-73",
        opStart: 32,
        opEnd: 33,
        opEpisodesRaw: "Ep. 32-33",
        lengthMinutes: 22
      },
      {
        arc: "Arlong Park",
        paceEpisode: "Arlong Park 03",
        chapters: [
          {
            from: "Ch.74",
            to: "76"
          }
        ],
        chaptersRaw: "Ch. 74-76",
        opStart: 33,
        opEnd: 34,
        opEpisodesRaw: "Ep. 33-34",
        lengthMinutes: 24.6
      },
      {
        arc: "Arlong Park",
        paceEpisode: "Arlong Park 04",
        chapters: [
          {
            from: "Ch.77",
            to: "78"
          }
        ],
        chaptersRaw: "Ch. 77-78",
        opStart: 34,
        opEnd: 36,
        opEpisodesRaw: "Ep. 34-36",
        lengthMinutes: 26.9
      },
      {
        arc: "Arlong Park",
        paceEpisode: "Arlong Park 05",
        chapters: [
          {
            from: "Ch.79",
            to: "81"
          }
        ],
        chaptersRaw: "Ch. 79-81",
        opStart: 36,
        opEnd: 37,
        opEpisodesRaw: "Ep. 36-37",
        lengthMinutes: 30.5
      },
      {
        arc: "Arlong Park",
        paceEpisode: "Arlong Park 06",
        chapters: [
          {
            from: "Ch.82",
            to: "84"
          }
        ],
        chaptersRaw: "Ch. 82-84",
        opStart: 38,
        opEnd: 39,
        opEpisodesRaw: "Ep. 38-39",
        lengthMinutes: 26
      },
      {
        arc: "Arlong Park",
        paceEpisode: "Arlong Park 07",
        chapters: [
          {
            from: "Ch.85",
            to: "88"
          }
        ],
        chaptersRaw: "Ch. 85-88",
        opStart: 39,
        opEnd: 40,
        opEpisodesRaw: "Ep. 39-40",
        lengthMinutes: 27
      },
      {
        arc: "Arlong Park",
        paceEpisode: "Arlong Park 08",
        chapters: [
          {
            from: "Ch.88",
            to: "91"
          }
        ],
        chaptersRaw: "Ch. 88-91",
        opStart: 39,
        opEnd: 42,
        opEpisodesRaw: "Ep. 39-42",
        lengthMinutes: 30
      },
      {
        arc: "Arlong Park",
        paceEpisode: "Arlong Park 09",
        chapters: [
          {
            from: "Ch.91",
            to: "94"
          }
        ],
        chaptersRaw: "Ch. 91-94",
        opStart: 42,
        opEnd: 43,
        opEpisodesRaw: "Ep. 42-43",
        lengthMinutes: 20.7
      },
      {
        arc: "Arlong Park",
        paceEpisode: "Arlong Park 10",
        chapters: [
          {
            from: "Ch.94",
            to: "95"
          }
        ],
        chaptersRaw: "Ch. 94-95",
        opStart: 43,
        opEnd: 44,
        opEpisodesRaw: "Ep. 43-44",
        lengthMinutes: 22.2
      },
      {
        arc: "The Adventures of Buggys Crew",
        paceEpisode: "The Adventures of Buggy's Crew",
        chapters: [
          {
            from: "Ch.35",
            to: "75"
          }
        ],
        chaptersRaw: "Ch. 35-75",
        opStart: 46,
        opEnd: 47,
        opEpisodesRaw: "Ep. 46-47",
        lengthMinutes: 23.6
      },
      {
        arc: "Loguetown",
        paceEpisode: "Loguetown 01",
        chapters: [
          {
            from: "Ch.96",
            to: "97"
          }
        ],
        chaptersRaw: "Ch. 96-97",
        opStart: 45,
        opEnd: 49,
        opEpisodesRaw: "Ep. 45,48-49",
        lengthMinutes: 27.5
      },
      {
        arc: "Loguetown",
        paceEpisode: "Loguetown 02",
        chapters: [
          {
            from: "Ch.97",
            to: "Ch.97"
          }
        ],
        chaptersRaw: "Ch. 97",
        opStart: 48,
        opEnd: 50,
        opEpisodesRaw: "Ep. 48, 50",
        lengthMinutes: 31.4
      },
      {
        arc: "Loguetown",
        paceEpisode: "Loguetown 03",
        chapters: [
          {
            from: "Ch.98",
            to: "100"
          }
        ],
        chaptersRaw: "Ch. 98-100",
        opStart: 52,
        opEnd: 53,
        opEpisodesRaw: "Ep. 52-53",
        lengthMinutes: 36.2
      },
      {
        arc: "Reverse Mountain",
        paceEpisode: "Reverse Mountain 01",
        chapters: [
          {
            from: "Ch.101",
            to: "102"
          }
        ],
        chaptersRaw: "Ch. 101-102",
        opStart: 54,
        opEnd: 62,
        opEpisodesRaw: "Ep. 54-55,61-62",
        lengthMinutes: 21.4
      },
      {
        arc: "Reverse Mountain",
        paceEpisode: "Reverse Mountain 02",
        chapters: [
          {
            from: "Ch.103",
            to: "105"
          }
        ],
        chaptersRaw: "Ch. 103-105",
        opStart: 62,
        opEnd: 63,
        opEpisodesRaw: "Ep. 62-63",
        lengthMinutes: 33.8
      },
      {
        arc: "Whisky Peak",
        paceEpisode: "Whisky Peak 01",
        chapters: [
          {
            from: "Ch.106",
            to: "109"
          }
        ],
        chaptersRaw: "Ch. 106-109",
        opStart: 64,
        opEnd: 65,
        opEpisodesRaw: "Ep. 64-65",
        lengthMinutes: 31
      },
      {
        arc: "Whisky Peak",
        paceEpisode: "Whisky Peak 02",
        chapters: [
          {
            from: "Ch.110",
            to: "114"
          }
        ],
        chaptersRaw: "Ch. 110-114",
        opStart: 65,
        opEnd: 67,
        opEpisodesRaw: "Ep. 65-67",
        lengthMinutes: 40.3
      },
      {
        arc: "The Trials of Koby-Meppo",
        paceEpisode: "The Trials of Koby-Meppo",
        chapters: [
          {
            from: "Ch.83",
            to: "119"
          }
        ],
        chaptersRaw: "Ch. 83-119",
        opStart: 68,
        opEnd: 69,
        opEpisodesRaw: "Ep. 68-69",
        lengthMinutes: 15.2
      },
      {
        arc: "Little Garden",
        paceEpisode: "Little Garden 01",
        chapters: [
          {
            from: "Ch.115",
            to: "117"
          }
        ],
        chaptersRaw: "Ch. 115-117",
        opStart: 70,
        opEnd: 71,
        opEpisodesRaw: "Ep. 70-71",
        lengthMinutes: 30.1
      },
      {
        arc: "Little Garden",
        paceEpisode: "Little Garden 02",
        chapters: [
          {
            from: "Ch.117",
            to: "118"
          }
        ],
        chaptersRaw: "Ch. 117-118",
        opStart: 71,
        opEnd: 72,
        opEpisodesRaw: "Ep. 71-72",
        lengthMinutes: 27.8
      },
      {
        arc: "Little Garden",
        paceEpisode: "Little Garden 03",
        chapters: [
          {
            from: "Ch.119",
            to: "122"
          }
        ],
        chaptersRaw: "Ch. 119-122",
        opStart: 73,
        opEnd: 74,
        opEpisodesRaw: "Ep. 73-74",
        lengthMinutes: 29.2
      },
      {
        arc: "Little Garden",
        paceEpisode: "Little Garden 04",
        chapters: [
          {
            from: "Ch.123",
            to: "126"
          }
        ],
        chaptersRaw: "Ch. 123-126",
        opStart: 75,
        opEnd: 76,
        opEpisodesRaw: "Ep. 75-76",
        lengthMinutes: 34.3
      },
      {
        arc: "Little Garden",
        paceEpisode: "Little Garden 05",
        chapters: [
          {
            from: "Ch.127",
            to: "129"
          }
        ],
        chaptersRaw: "Ch. 127-129",
        opStart: 77,
        opEnd: 79,
        opEpisodesRaw: "Ep. 77-79",
        lengthMinutes: 27
      },
      {
        arc: "Drum Island",
        paceEpisode: "Drum Island 01",
        chapters: [
          {
            from: "Ch.129",
            to: "132"
          }
        ],
        chaptersRaw: "Ch. 129-132",
        opStart: 78,
        opEnd: 80,
        opEpisodesRaw: "Ep. 78-80",
        lengthMinutes: 29.6
      },
      {
        arc: "Drum Island",
        paceEpisode: "Drum Island 02",
        chapters: [
          {
            from: "Ch.132",
            to: "135"
          }
        ],
        chaptersRaw: "Ch. 132-135",
        opStart: 80,
        opEnd: 81,
        opEpisodesRaw: "Ep. 80-81",
        lengthMinutes: 32
      },
      {
        arc: "Drum Island",
        paceEpisode: "Drum Island 03",
        chapters: [
          {
            from: "Ch.136",
            to: "139"
          }
        ],
        chaptersRaw: "Ch. 136-139",
        opStart: 82,
        opEnd: 83,
        opEpisodesRaw: "Ep. 82-83",
        lengthMinutes: 34.5
      },
      {
        arc: "Drum Island",
        paceEpisode: "Drum Island 04",
        chapters: [
          {
            from: "Ch.139",
            to: "140"
          }
        ],
        chaptersRaw: "Ch. 139-140",
        opStart: 83,
        opEnd: 84,
        opEpisodesRaw: "Ep. 83-84",
        lengthMinutes: 20.2
      },
      {
        arc: "Drum Island",
        paceEpisode: "Drum Island 05",
        chapters: [
          {
            from: "Ch.140",
            to: "145"
          }
        ],
        chaptersRaw: "Ch. 140-145",
        opStart: 85,
        opEnd: 86,
        opEpisodesRaw: "Ep. 85-86",
        lengthMinutes: 39.4
      },
      {
        arc: "Drum Island",
        paceEpisode: "Drum Island 06",
        chapters: [
          {
            from: "Ch.145",
            to: "148"
          }
        ],
        chaptersRaw: "Ch. 145-148",
        opStart: 83,
        opEnd: 88,
        opEpisodesRaw: "Ep. 83, 86-88",
        lengthMinutes: 25.6
      },
      {
        arc: "Drum Island",
        paceEpisode: "Drum Island 07",
        chapters: [
          {
            from: "Ch.149",
            to: "152"
          }
        ],
        chaptersRaw: "Ch. 149-152",
        opStart: 88,
        opEnd: 90,
        opEpisodesRaw: "Ep. 88-90",
        lengthMinutes: 33.5
      },
      {
        arc: "Drum Island",
        paceEpisode: "Drum Island 08",
        chapters: [
          {
            from: "Ch.153",
            to: "156"
          }
        ],
        chaptersRaw: "Ch. 153-156",
        opStart: 90,
        opEnd: 91,
        opEpisodesRaw: "Ep. 90-91",
        lengthMinutes: 29.8
      },
      {
        arc: "Alabasta",
        paceEpisode: "Alabasta 01",
        chapters: [
          {
            from: "Ch.155",
            to: "157"
          }
        ],
        chaptersRaw: "Ch. 155-157",
        opStart: 92,
        opEnd: 92,
        opEpisodesRaw: "Ep. 92",
        lengthMinutes: 20.5
      },
      {
        arc: "Alabasta",
        paceEpisode: "Alabasta 02",
        chapters: [
          {
            from: "Ch.157",
            to: "159"
          }
        ],
        chaptersRaw: "Ch. 157-159",
        opStart: 93,
        opEnd: 95,
        opEpisodesRaw: "Ep. 93-95",
        lengthMinutes: 28.4
      },
      {
        arc: "Alabasta",
        paceEpisode: "Alabasta 03",
        chapters: [
          {
            from: "Ch.159",
            to: "Ch.159"
          },
          {
            from: "161",
            to: "162"
          }
        ],
        chaptersRaw: "Ch. 159, 161-162",
        opStart: 96,
        opEnd: 98,
        opEpisodesRaw: "Ep.\xA096-98",
        lengthMinutes: 26
      },
      {
        arc: "Alabasta",
        paceEpisode: "Alabasta 04",
        chapters: [
          {
            from: "Ch.\xA0159",
            to: "164"
          }
        ],
        chaptersRaw: "Ch.\xA0159-164",
        opStart: 98,
        opEnd: 103,
        opEpisodesRaw: "Ep.\xA098, 100-101, 103",
        lengthMinutes: 25.2
      },
      {
        arc: "Alabasta",
        paceEpisode: "Alabasta 05",
        chapters: [
          {
            from: "Ch.164",
            to: "166"
          }
        ],
        chaptersRaw: "Ch. 164-166",
        opStart: 100,
        opEnd: 104,
        opEpisodesRaw: "Ep. 100, 103-104",
        lengthMinutes: 32.1
      },
      {
        arc: "Alabasta",
        paceEpisode: "Alabasta 06",
        chapters: [
          {
            from: "Ch.167",
            to: "168"
          }
        ],
        chaptersRaw: "Ch. 167-168",
        opStart: 105,
        opEnd: 105,
        opEpisodesRaw: "Ep. 105",
        lengthMinutes: 20.2
      },
      {
        arc: "Alabasta",
        paceEpisode: "Alabasta 07",
        chapters: [
          {
            from: "Ch.169",
            to: "170"
          }
        ],
        chaptersRaw: "Ch. 169-170",
        opStart: 106,
        opEnd: 106,
        opEpisodesRaw: "Ep. 106",
        lengthMinutes: 18
      },
      {
        arc: "Alabasta",
        paceEpisode: "Alabasta 08",
        chapters: [
          {
            from: "Ch.171",
            to: "174"
          }
        ],
        chaptersRaw: "Ch. 171-174",
        opStart: 107,
        opEnd: 108,
        opEpisodesRaw: "Ep. 107-108",
        lengthMinutes: 35.6
      },
      {
        arc: "Alabasta",
        paceEpisode: "Alabasta 09",
        chapters: [
          {
            from: "Ch.175",
            to: "178"
          }
        ],
        chaptersRaw: "Ch. 175-178",
        opStart: 109,
        opEnd: 110,
        opEpisodesRaw: "Ep. 109-110",
        lengthMinutes: 36.4
      },
      {
        arc: "Alabasta",
        paceEpisode: "Alabasta 10",
        chapters: [
          {
            from: "Ch.179",
            to: "182"
          }
        ],
        chaptersRaw: "Ch. 179-182",
        opStart: 111,
        opEnd: 112,
        opEpisodesRaw: "Ep. 111-112",
        lengthMinutes: 36.6
      },
      {
        arc: "Alabasta",
        paceEpisode: "Alabasta 11",
        chapters: [
          {
            from: "Ch.183",
            to: "186"
          }
        ],
        chaptersRaw: "Ch. 183-186",
        opStart: 113,
        opEnd: 114,
        opEpisodesRaw: "Ep. 113-114",
        lengthMinutes: 35.3
      },
      {
        arc: "Alabasta",
        paceEpisode: "Alabasta 12",
        chapters: [
          {
            from: "Ch.187",
            to: "189"
          }
        ],
        chaptersRaw: "Ch. 187-189",
        opStart: 115,
        opEnd: 116,
        opEpisodesRaw: "Ep. 115-116",
        lengthMinutes: 25.9
      },
      {
        arc: "Alabasta",
        paceEpisode: "Alabasta 13",
        chapters: [
          {
            from: "Ch.189",
            to: "192"
          }
        ],
        chaptersRaw: "Ch. 189-192",
        opStart: 113,
        opEnd: 118,
        opEpisodesRaw: "Ep. 113, 116-118",
        lengthMinutes: 24.6
      },
      {
        arc: "Alabasta",
        paceEpisode: "Alabasta 14",
        chapters: [
          {
            from: "Ch.192",
            to: "195"
          }
        ],
        chaptersRaw: "Ch. 192-195",
        opStart: 118,
        opEnd: 119,
        opEpisodesRaw: "Ep. 118-119",
        lengthMinutes: 32.4
      },
      {
        arc: "Alabasta",
        paceEpisode: "Alabasta 15",
        chapters: [
          {
            from: "Ch.196",
            to: "198"
          }
        ],
        chaptersRaw: "Ch. 196-198",
        opStart: 120,
        opEnd: 121,
        opEpisodesRaw: "Ep. 120-121",
        lengthMinutes: 29.2
      },
      {
        arc: "Alabasta",
        paceEpisode: "Alabasta 16",
        chapters: [
          {
            from: "Ch.199",
            to: "201"
          }
        ],
        chaptersRaw: "Ch. 199-201",
        opStart: 121,
        opEnd: 122,
        opEpisodesRaw: "Ep. 121-122",
        lengthMinutes: 22.6
      },
      {
        arc: "Alabasta",
        paceEpisode: "Alabasta 17",
        chapters: [
          {
            from: "Ch.202",
            to: "205"
          }
        ],
        chaptersRaw: "Ch. 202-205",
        opStart: 123,
        opEnd: 124,
        opEpisodesRaw: "Ep. 123-124",
        lengthMinutes: 32.6
      },
      {
        arc: "Alabasta",
        paceEpisode: "Alabasta 18",
        chapters: [
          {
            from: "Ch.206",
            to: "210"
          }
        ],
        chaptersRaw: "Ch. 206-210",
        opStart: 125,
        opEnd: 126,
        opEpisodesRaw: "Ep. 125-126",
        lengthMinutes: 34.6
      },
      {
        arc: "Alabasta",
        paceEpisode: "Alabasta 19",
        chapters: [
          {
            from: "Ch.211",
            to: "213"
          }
        ],
        chaptersRaw: "Ch. 211-213",
        opStart: 127,
        opEnd: 128,
        opEpisodesRaw: "Ep. 127-128",
        lengthMinutes: 29.4
      },
      {
        arc: "Alabasta",
        paceEpisode: "Alabasta 20",
        chapters: [
          {
            from: "Ch.214",
            to: "216"
          }
        ],
        chaptersRaw: "Ch. 214-216",
        opStart: 128,
        opEnd: 129,
        opEpisodesRaw: "Ep. 128-129",
        lengthMinutes: 31.4
      },
      {
        arc: "Alabasta",
        paceEpisode: "Alabasta 21",
        chapters: [
          {
            from: "Ch.217",
            to: "218"
          }
        ],
        chaptersRaw: "Ch. 217-218",
        opStart: 130,
        opEnd: 130,
        opEpisodesRaw: "Ep. 130",
        lengthMinutes: 17.3
      },
      {
        arc: "Jaya",
        paceEpisode: "Jaya 01",
        chapters: [
          {
            from: "Ch.218",
            to: "220"
          }
        ],
        chaptersRaw: "Ch. 218-220",
        opStart: 143,
        opEnd: 144,
        opEpisodesRaw: "Ep.143-144",
        lengthMinutes: 21.1
      },
      {
        arc: "Jaya",
        paceEpisode: "Jaya 02",
        chapters: [
          {
            from: "Ch.221",
            to: "224"
          }
        ],
        chaptersRaw: "Ch. 221-224",
        opStart: 145,
        opEnd: 146,
        opEpisodesRaw: "Ep.145-146",
        lengthMinutes: 32.6
      },
      {
        arc: "Jaya",
        paceEpisode: "Jaya 03",
        chapters: [
          {
            from: "Ch.225",
            to: "226"
          }
        ],
        chaptersRaw: "Ch. 225-226",
        opStart: 147,
        opEnd: 147,
        opEpisodesRaw: "Ep.147",
        lengthMinutes: 20.1
      },
      {
        arc: "Jaya",
        paceEpisode: "Jaya 04",
        chapters: [
          {
            from: "Ch.227",
            to: "228"
          }
        ],
        chaptersRaw: "Ch. 227-228",
        opStart: 148,
        opEnd: 148,
        opEpisodesRaw: "Ep.148",
        lengthMinutes: 20.1
      },
      {
        arc: "Jaya",
        paceEpisode: "Jaya 05",
        chapters: [
          {
            from: "Ch.229",
            to: "230"
          }
        ],
        chaptersRaw: "Ch. 229-230",
        opStart: 149,
        opEnd: 149,
        opEpisodesRaw: "Ep.149",
        lengthMinutes: 21.6
      },
      {
        arc: "Jaya",
        paceEpisode: "Jaya 06",
        chapters: [
          {
            from: "Ch.231",
            to: "232"
          }
        ],
        chaptersRaw: "Ch. 231-232",
        opStart: 150,
        opEnd: 150,
        opEpisodesRaw: "Ep.150",
        lengthMinutes: 17.2
      },
      {
        arc: "Jaya",
        paceEpisode: "Jaya 07",
        chapters: [
          {
            from: "Ch.232",
            to: "234"
          }
        ],
        chaptersRaw: "Ch. 232-234",
        opStart: 145,
        opEnd: 151,
        opEpisodesRaw: "Ep.145,151",
        lengthMinutes: 24.7
      },
      {
        arc: "Jaya",
        paceEpisode: "Jaya 08",
        chapters: [
          {
            from: "Ch.235",
            to: "236"
          }
        ],
        chaptersRaw: "Ch. 235-236",
        opStart: 152,
        opEnd: 152,
        opEpisodesRaw: "Ep.152",
        lengthMinutes: 19.1
      },
      {
        arc: "Skypiea",
        paceEpisode: "Skypiea 01",
        chapters: [
          {
            from: "Ch.237",
            to: "238"
          }
        ],
        chaptersRaw: "Ch. 237-238",
        opStart: 153,
        opEnd: 153,
        opEpisodesRaw: "Ep. 153",
        lengthMinutes: 19.9
      },
      {
        arc: "Skypiea",
        paceEpisode: "Skypiea 02",
        chapters: [
          {
            from: "Ch.239",
            to: "240"
          }
        ],
        chaptersRaw: "Ch. 239-240",
        opStart: 154,
        opEnd: 154,
        opEpisodesRaw: "Ep. 154",
        lengthMinutes: 21
      },
      {
        arc: "Skypiea",
        paceEpisode: "Skypiea 03",
        chapters: [
          {
            from: "Ch.241",
            to: "242"
          }
        ],
        chaptersRaw: "Ch. 241-242",
        opStart: 155,
        opEnd: 156,
        opEpisodesRaw: "Ep. 155-156",
        lengthMinutes: 24.5
      },
      {
        arc: "Skypiea",
        paceEpisode: "Skypiea 04",
        chapters: [
          {
            from: "Ch.243",
            to: "244"
          }
        ],
        chaptersRaw: "Ch. 243-244",
        opStart: 157,
        opEnd: 158,
        opEpisodesRaw: "Ep. 157-158",
        lengthMinutes: 29.2
      },
      {
        arc: "Skypiea",
        paceEpisode: "Skypiea 05",
        chapters: [
          {
            from: "Ch.245",
            to: "246"
          }
        ],
        chaptersRaw: "Ch. 245-246",
        opStart: 159,
        opEnd: 160,
        opEpisodesRaw: "Ep. 159-160",
        lengthMinutes: 23.3
      },
      {
        arc: "Skypiea",
        paceEpisode: "Skypiea 06",
        chapters: [
          {
            from: "Ch.247",
            to: "249"
          }
        ],
        chaptersRaw: "Ch. 247-249",
        opStart: 161,
        opEnd: 163,
        opEpisodesRaw: "Ep. 161-163",
        lengthMinutes: 34.4
      },
      {
        arc: "Skypiea",
        paceEpisode: "Skypiea 07",
        chapters: [
          {
            from: "Ch.250",
            to: "251"
          }
        ],
        chaptersRaw: "Ch. 250-251",
        opStart: 163,
        opEnd: 164,
        opEpisodesRaw: "Ep. 163-164",
        lengthMinutes: 20.5
      },
      {
        arc: "Skypiea",
        paceEpisode: "Skypiea 08",
        chapters: [
          {
            from: "Ch.252",
            to: "254"
          }
        ],
        chaptersRaw: "Ch. 252-254",
        opStart: 165,
        opEnd: 167,
        opEpisodesRaw: "Ep. 165-167",
        lengthMinutes: 36.9
      },
      {
        arc: "Skypiea",
        paceEpisode: "Skypiea 09",
        chapters: [
          {
            from: "Ch.255",
            to: "257"
          }
        ],
        chaptersRaw: "Ch. 255-257",
        opStart: 168,
        opEnd: 169,
        opEpisodesRaw: "Ep. 168-169",
        lengthMinutes: 34.9
      },
      {
        arc: "Skypiea",
        paceEpisode: "Skypiea 10",
        chapters: [
          {
            from: "Ch.258",
            to: "260"
          }
        ],
        chaptersRaw: "Ch. 258-260",
        opStart: 170,
        opEnd: 171,
        opEpisodesRaw: "Ep. 170-171",
        lengthMinutes: 18.9
      },
      {
        arc: "Skypiea",
        paceEpisode: "Skypiea 11",
        chapters: [
          {
            from: "Ch.261",
            to: "263"
          }
        ],
        chaptersRaw: "Ch. 261-263",
        opStart: 171,
        opEnd: 173,
        opEpisodesRaw: "Ep. 171-173",
        lengthMinutes: 32.4
      },
      {
        arc: "Skypiea",
        paceEpisode: "Skypiea 12",
        chapters: [
          {
            from: "Ch.264",
            to: "266"
          },
          {
            from: "268",
            to: "268"
          }
        ],
        chaptersRaw: "Ch. 264-266,268",
        opStart: 172,
        opEnd: 174,
        opEpisodesRaw: "Ep. 172-174",
        lengthMinutes: 28.4
      },
      {
        arc: "Skypiea",
        paceEpisode: "Skypiea 13",
        chapters: [
          {
            from: "Ch.266",
            to: "269"
          }
        ],
        chaptersRaw: "Ch. 266-269",
        opStart: 175,
        opEnd: 176,
        opEpisodesRaw: "Ep. 175-176",
        lengthMinutes: 33.1
      },
      {
        arc: "Skypiea",
        paceEpisode: "Skypiea 14",
        chapters: [
          {
            from: "Ch.270",
            to: "273"
          }
        ],
        chaptersRaw: "Ch. 270-273",
        opStart: 177,
        opEnd: 179,
        opEpisodesRaw: "Ep. 177-179",
        lengthMinutes: 29
      },
      {
        arc: "Skypiea",
        paceEpisode: "Skypiea 15",
        chapters: [
          {
            from: "Ch.273",
            to: "276"
          }
        ],
        chaptersRaw: "Ch. 273-276",
        opStart: 179,
        opEnd: 181,
        opEpisodesRaw: "Ep. 179-181",
        lengthMinutes: 36.2
      },
      {
        arc: "Skypiea",
        paceEpisode: "Skypiea 16",
        chapters: [
          {
            from: "Ch.277",
            to: "279"
          }
        ],
        chaptersRaw: "Ch. 277-279",
        opStart: 181,
        opEnd: 182,
        opEpisodesRaw: "Ep. 181-182",
        lengthMinutes: 26.6
      },
      {
        arc: "Skypiea",
        paceEpisode: "Skypiea 17",
        chapters: [
          {
            from: "Ch.280",
            to: "283"
          }
        ],
        chaptersRaw: "Ch. 280-283",
        opStart: 183,
        opEnd: 185,
        opEpisodesRaw: "Ep. 183-185",
        lengthMinutes: 31.6
      },
      {
        arc: "Skypiea",
        paceEpisode: "Skypiea 18",
        chapters: [
          {
            from: "Ch.283",
            to: "286"
          }
        ],
        chaptersRaw: "Ch. 283-286",
        opStart: 185,
        opEnd: 186,
        opEpisodesRaw: "Ep. 185-186",
        lengthMinutes: 33.6
      },
      {
        arc: "Skypiea",
        paceEpisode: "Skypiea 19",
        chapters: [
          {
            from: "Ch.286",
            to: "289"
          }
        ],
        chaptersRaw: "Ch. 286-289",
        opStart: 187,
        opEnd: 188,
        opEpisodesRaw: "Ep. 187-188",
        lengthMinutes: 28.4
      },
      {
        arc: "Skypiea",
        paceEpisode: "Skypiea 20",
        chapters: [
          {
            from: "Ch.290",
            to: "291"
          }
        ],
        chaptersRaw: "Ch. 290-291",
        opStart: 188,
        opEnd: 189,
        opEpisodesRaw: "Ep. 188-189",
        lengthMinutes: 23.8
      },
      {
        arc: "Skypiea",
        paceEpisode: "Skypiea 21",
        chapters: [
          {
            from: "Ch.292",
            to: "295"
          }
        ],
        chaptersRaw: "Ch. 292-295",
        opStart: 189,
        opEnd: 190,
        opEpisodesRaw: "Ep. 189-190",
        lengthMinutes: 29.4
      },
      {
        arc: "Skypiea",
        paceEpisode: "Skypiea 22",
        chapters: [
          {
            from: "Ch.295",
            to: "298"
          }
        ],
        chaptersRaw: "Ch. 295-298",
        opStart: 191,
        opEnd: 192,
        opEpisodesRaw: "Ep. 191-192",
        lengthMinutes: 32.9
      },
      {
        arc: "Skypiea",
        paceEpisode: "Skypiea 23",
        chapters: [
          {
            from: "Ch.299",
            to: "300"
          }
        ],
        chaptersRaw: "Ch. 299-300",
        opStart: 193,
        opEnd: 193,
        opEpisodesRaw: "Ep. 193",
        lengthMinutes: 20.2
      },
      {
        arc: "Skypiea",
        paceEpisode: "Skypiea 24",
        chapters: [
          {
            from: "Ch.301",
            to: "Ch.301"
          }
        ],
        chaptersRaw: "Ch. 301",
        opStart: 194,
        opEnd: 194,
        opEpisodesRaw: "Ep. 194",
        lengthMinutes: 19.9
      },
      {
        arc: "Skypiea",
        paceEpisode: "Skypiea 25",
        chapters: [
          {
            from: "Ch.302",
            to: "303"
          }
        ],
        chaptersRaw: "Ch. 302-303",
        opStart: 195,
        opEnd: 207,
        opEpisodesRaw: "Ep. 195, 203, 207",
        lengthMinutes: 20.8
      },
      {
        arc: "Skypiea",
        paceEpisode: "Skypiea 25 (G8)",
        chapters: [
          {
            from: "Ch.302",
            to: "303"
          }
        ],
        chaptersRaw: "Ch. 302-303",
        opStart: 195,
        opEnd: 207,
        opEpisodesRaw: "Ep. 195, 207",
        lengthMinutes: 84.2
      },
      {
        arc: "Long Ring Long Land",
        paceEpisode: "Long Ring Long Land 00",
        chapters: [
          {
            from: "Ch.303",
            to: "Ch.303"
          }
        ],
        chaptersRaw: "Ch. 303",
        opStart: 207,
        opEnd: 225,
        opEpisodesRaw: "Ep. 207,225",
        lengthMinutes: 2.1
      },
      {
        arc: "Long Ring Long Land",
        paceEpisode: "Long Ring Long Land 01",
        chapters: [
          {
            from: "Ch.304",
            to: "306"
          }
        ],
        chaptersRaw: "Ch. 304-306",
        opStart: 207,
        opEnd: 209,
        opEpisodesRaw: "Ep. 207-209",
        lengthMinutes: 32.9
      },
      {
        arc: "Long Ring Long Land",
        paceEpisode: "Long Ring Long Land 02",
        chapters: [
          {
            from: "Ch.307",
            to: "309"
          }
        ],
        chaptersRaw: "Ch. 307-309",
        opStart: 209,
        opEnd: 210,
        opEpisodesRaw: "Ep. 209-210",
        lengthMinutes: 24.6
      },
      {
        arc: "Long Ring Long Land",
        paceEpisode: "Long Ring Long Land 03",
        chapters: [
          {
            from: "Ch.310",
            to: "312"
          }
        ],
        chaptersRaw: "Ch. 310-312",
        opStart: 211,
        opEnd: 212,
        opEpisodesRaw: "Ep. 211-212",
        lengthMinutes: 25.5
      },
      {
        arc: "Long Ring Long Land",
        paceEpisode: "Long Ring Long Land 04",
        chapters: [
          {
            from: "Ch.313",
            to: "316"
          }
        ],
        chaptersRaw: "Ch. 313-316",
        opStart: 212,
        opEnd: 218,
        opEpisodesRaw: "Ep. 212,215,217-218",
        lengthMinutes: 36.3
      },
      {
        arc: "Long Ring Long Land",
        paceEpisode: "Long Ring Long Land 05",
        chapters: [
          {
            from: "Ch.317",
            to: "318"
          }
        ],
        chaptersRaw: "Ch. 317-318",
        opStart: 219,
        opEnd: 226,
        opEpisodesRaw: "Ep. 219,226",
        lengthMinutes: 15.5
      },
      {
        arc: "Long Ring Long Land",
        paceEpisode: "Long Ring Long Land 06",
        chapters: [
          {
            from: "Ch.319",
            to: "321"
          }
        ],
        chaptersRaw: "Ch. 319-321",
        opStart: 227,
        opEnd: 228,
        opEpisodesRaw: "Ep. 227-228",
        lengthMinutes: 30.6
      },
      {
        arc: "Water Seven",
        paceEpisode: "Water Seven 01",
        chapters: [
          {
            from: "Ch.322",
            to: "324"
          }
        ],
        chaptersRaw: "Ch. 322-324",
        opStart: 228,
        opEnd: 230,
        opEpisodesRaw: "Ep. 228-230",
        lengthMinutes: 28.6
      },
      {
        arc: "Water Seven",
        paceEpisode: "Water Seven 02",
        chapters: [
          {
            from: "Ch.324",
            to: "326"
          }
        ],
        chaptersRaw: "Ch. 324-326",
        opStart: 229,
        opEnd: 231,
        opEpisodesRaw: "Ep. 229-231",
        lengthMinutes: 30.8
      },
      {
        arc: "Water Seven",
        paceEpisode: "Water Seven 03",
        chapters: [
          {
            from: "Ch.326",
            to: "329"
          }
        ],
        chaptersRaw: "Ch. 326-329",
        opStart: 232,
        opEnd: 234,
        opEpisodesRaw: "Ep. 232-234",
        lengthMinutes: 43
      },
      {
        arc: "Water Seven",
        paceEpisode: "Water Seven 04",
        chapters: [
          {
            from: "Ch.330",
            to: "332"
          }
        ],
        chaptersRaw: "Ch. 330-332",
        opStart: 234,
        opEnd: 235,
        opEpisodesRaw: "Ep. 234-235",
        lengthMinutes: 25.3
      },
      {
        arc: "Water Seven",
        paceEpisode: "Water Seven 05",
        chapters: [
          {
            from: "Ch.332",
            to: "333"
          }
        ],
        chaptersRaw: "Ch. 332-333",
        opStart: 235,
        opEnd: 236,
        opEpisodesRaw: "Ep. 235-236",
        lengthMinutes: 20.5
      },
      {
        arc: "Water Seven",
        paceEpisode: "Water Seven 06",
        chapters: [
          {
            from: "Ch.334",
            to: "337"
          }
        ],
        chaptersRaw: "Ch. 334-337",
        opStart: 237,
        opEnd: 239,
        opEpisodesRaw: "Ep. 237-239",
        lengthMinutes: 36.9
      },
      {
        arc: "Water Seven",
        paceEpisode: "Water Seven 07",
        chapters: [
          {
            from: "Ch.338",
            to: "339"
          }
        ],
        chaptersRaw: "Ch. 338-339",
        opStart: 239,
        opEnd: 240,
        opEpisodesRaw: "Ep. 239-240",
        lengthMinutes: 23.9
      },
      {
        arc: "Water Seven",
        paceEpisode: "Water Seven 08",
        chapters: [
          {
            from: "Ch.340",
            to: "342"
          }
        ],
        chaptersRaw: "Ch. 340-342",
        opStart: 240,
        opEnd: 241,
        opEpisodesRaw: "Ep. 240-241",
        lengthMinutes: 28.1
      },
      {
        arc: "Water Seven",
        paceEpisode: "Water Seven 09",
        chapters: [
          {
            from: "Ch.342",
            to: "345"
          }
        ],
        chaptersRaw: "Ch. 342-345",
        opStart: 242,
        opEnd: 243,
        opEpisodesRaw: "Ep. 242-243",
        lengthMinutes: 36.2
      },
      {
        arc: "Water Seven",
        paceEpisode: "Water Seven 10",
        chapters: [
          {
            from: "Ch.346",
            to: "348"
          }
        ],
        chaptersRaw: "Ch. 346-348",
        opStart: 244,
        opEnd: 246,
        opEpisodesRaw: "Ep. 244-246",
        lengthMinutes: 30.4
      },
      {
        arc: "Water Seven",
        paceEpisode: "Water Seven 11",
        chapters: [
          {
            from: "Ch.349",
            to: "352"
          }
        ],
        chaptersRaw: "Ch. 349-352",
        opStart: 246,
        opEnd: 248,
        opEpisodesRaw: "Ep. 246-248",
        lengthMinutes: 38.4
      },
      {
        arc: "Water Seven",
        paceEpisode: "Water Seven 12",
        chapters: [
          {
            from: "Ch.353",
            to: "355"
          }
        ],
        chaptersRaw: "Ch. 353-355",
        opStart: 248,
        opEnd: 249,
        opEpisodesRaw: "Ep. 248-249",
        lengthMinutes: 27.1
      },
      {
        arc: "Water Seven",
        paceEpisode: "Water Seven 13",
        chapters: [
          {
            from: "Ch.355",
            to: "357"
          }
        ],
        chaptersRaw: "Ch. 355-357",
        opStart: 249,
        opEnd: 250,
        opEpisodesRaw: "Ep. 249-250",
        lengthMinutes: 23.4
      },
      {
        arc: "Water Seven",
        paceEpisode: "Water Seven 14",
        chapters: [
          {
            from: "Ch.358",
            to: "359"
          }
        ],
        chaptersRaw: "Ch. 358-359",
        opStart: 250,
        opEnd: 320,
        opEpisodesRaw: "Ep. 250-251, 256, 320",
        lengthMinutes: 25.1
      },
      {
        arc: "Water Seven",
        paceEpisode: "Water Seven 15",
        chapters: [
          {
            from: "Ch.360",
            to: "362"
          }
        ],
        chaptersRaw: "Ch. 360-362",
        opStart: 252,
        opEnd: 254,
        opEpisodesRaw: "Ep. 252-254",
        lengthMinutes: 33.6
      },
      {
        arc: "Water Seven",
        paceEpisode: "Water Seven 16",
        chapters: [
          {
            from: "Ch.363",
            to: "365"
          }
        ],
        chaptersRaw: "Ch. 363-365",
        opStart: 254,
        opEnd: 255,
        opEpisodesRaw: "Ep. 254-255",
        lengthMinutes: 31.7
      },
      {
        arc: "Water Seven",
        paceEpisode: "Water Seven 17",
        chapters: [
          {
            from: "Ch.366",
            to: "367"
          }
        ],
        chaptersRaw: "Ch. 366-367",
        opStart: 256,
        opEnd: 257,
        opEpisodesRaw: "Ep. 256-257",
        lengthMinutes: 25.1
      },
      {
        arc: "Water Seven",
        paceEpisode: "Water Seven 18",
        chapters: [
          {
            from: "Ch.368",
            to: "369"
          }
        ],
        chaptersRaw: "Ch. 368-369",
        opStart: 258,
        opEnd: 259,
        opEpisodesRaw: "Ep. 258-259",
        lengthMinutes: 21.6
      },
      {
        arc: "Water Seven",
        paceEpisode: "Water Seven 19",
        chapters: [
          {
            from: "Ch.370",
            to: "371"
          }
        ],
        chaptersRaw: "Ch. 370-371",
        opStart: 259,
        opEnd: 261,
        opEpisodesRaw: "Ep. 259-261",
        lengthMinutes: 24.6
      },
      {
        arc: "Water Seven",
        paceEpisode: "Water Seven 20",
        chapters: [
          {
            from: "Ch.372",
            to: "374"
          }
        ],
        chaptersRaw: "Ch. 372-374",
        opStart: 262,
        opEnd: 263,
        opEpisodesRaw: "Ep. 262-263",
        lengthMinutes: 31.4
      },
      {
        arc: "Enies Lobby",
        paceEpisode: "Enies Lobby 01",
        chapters: [
          {
            from: "Ch.375",
            to: "376"
          }
        ],
        chaptersRaw: "Ch. 375-376",
        opStart: 263,
        opEnd: 264,
        opEpisodesRaw: "Ep. 263-264",
        lengthMinutes: 26.4
      },
      {
        arc: "Enies Lobby",
        paceEpisode: "Enies Lobby 02",
        chapters: [
          {
            from: "Ch.376",
            to: "378"
          }
        ],
        chaptersRaw: "Ch. 376-378",
        opStart: 265,
        opEnd: 266,
        opEpisodesRaw: "Ep. 265-266",
        lengthMinutes: 20.9
      },
      {
        arc: "Enies Lobby",
        paceEpisode: "Enies Lobby 03",
        chapters: [
          {
            from: "Ch.379",
            to: "380"
          }
        ],
        chaptersRaw: "Ch. 379-380",
        opStart: 266,
        opEnd: 267,
        opEpisodesRaw: "Ep. 266-267",
        lengthMinutes: 23.1
      },
      {
        arc: "Enies Lobby",
        paceEpisode: "Enies Lobby 04",
        chapters: [
          {
            from: "Ch.381",
            to: "382"
          }
        ],
        chaptersRaw: "Ch. 381-382",
        opStart: 268,
        opEnd: 269,
        opEpisodesRaw: "Ep. 268-269",
        lengthMinutes: 25.6
      },
      {
        arc: "Enies Lobby",
        paceEpisode: "Enies Lobby 05",
        chapters: [
          {
            from: "Ch.383",
            to: "385"
          }
        ],
        chaptersRaw: "Ch. 383-385",
        opStart: 269,
        opEnd: 271,
        opEpisodesRaw: "Ep. 269-271",
        lengthMinutes: 32.3
      },
      {
        arc: "Enies Lobby",
        paceEpisode: "Enies Lobby 06",
        chapters: [
          {
            from: "Ch.385",
            to: "387"
          }
        ],
        chaptersRaw: "Ch. 385-387",
        opStart: 272,
        opEnd: 273,
        opEpisodesRaw: "Ep. 272-273",
        lengthMinutes: 22.3
      },
      {
        arc: "Enies Lobby",
        paceEpisode: "Enies Lobby 07",
        chapters: [
          {
            from: "Ch.388",
            to: "390"
          }
        ],
        chaptersRaw: "Ch. 388-390",
        opStart: 273,
        opEnd: 274,
        opEpisodesRaw: "Ep. 273-274",
        lengthMinutes: 29.3
      },
      {
        arc: "Enies Lobby",
        paceEpisode: "Enies Lobby 08",
        chapters: [
          {
            from: "Ch.391",
            to: "393"
          }
        ],
        chaptersRaw: "Ch. 391-393",
        opStart: 275,
        opEnd: 276,
        opEpisodesRaw: "Ep. 275-276",
        lengthMinutes: 32.2
      },
      {
        arc: "Enies Lobby",
        paceEpisode: "Enies Lobby 09",
        chapters: [
          {
            from: "Ch.394",
            to: "396"
          }
        ],
        chaptersRaw: "Ch. 394-396",
        opStart: 276,
        opEnd: 277,
        opEpisodesRaw: "Ep. 276-277",
        lengthMinutes: 32.3
      },
      {
        arc: "Enies Lobby",
        paceEpisode: "Enies Lobby 10",
        chapters: [
          {
            from: "Ch.397",
            to: "398"
          }
        ],
        chaptersRaw: "Ch. 397-398",
        opStart: 278,
        opEnd: 278,
        opEpisodesRaw: "Ep. 278",
        lengthMinutes: 22.3
      },
      {
        arc: "Enies Lobby",
        paceEpisode: "Enies Lobby 11",
        chapters: [
          {
            from: "Ch.399",
            to: "400"
          }
        ],
        chaptersRaw: "Ch. 399-400",
        opStart: 284,
        opEnd: 285,
        opEpisodesRaw: "Ep. 284-285",
        lengthMinutes: 27.8
      },
      {
        arc: "Enies Lobby",
        paceEpisode: "Enies Lobby 12",
        chapters: [
          {
            from: "Ch.401",
            to: "402"
          }
        ],
        chaptersRaw: "Ch. 401-402",
        opStart: 286,
        opEnd: 287,
        opEpisodesRaw: "Ep. 286-287",
        lengthMinutes: 21.3
      },
      {
        arc: "Enies Lobby",
        paceEpisode: "Enies Lobby 13",
        chapters: [
          {
            from: "Ch.403",
            to: "404"
          }
        ],
        chaptersRaw: "Ch. 403-404",
        opStart: 287,
        opEnd: 288,
        opEpisodesRaw: "Ep. 287-288",
        lengthMinutes: 24.2
      },
      {
        arc: "Enies Lobby",
        paceEpisode: "Enies Lobby 14",
        chapters: [
          {
            from: "Ch.405",
            to: "406"
          }
        ],
        chaptersRaw: "Ch. 405-406",
        opStart: 289,
        opEnd: 290,
        opEpisodesRaw: "Ep. 289-290",
        lengthMinutes: 20.6
      },
      {
        arc: "Enies Lobby",
        paceEpisode: "Enies Lobby 15",
        chapters: [
          {
            from: "Ch.407",
            to: "408"
          }
        ],
        chaptersRaw: "Ch. 407-408",
        opStart: 290,
        opEnd: 293,
        opEpisodesRaw: "Ep. 290,293",
        lengthMinutes: 23
      },
      {
        arc: "Enies Lobby",
        paceEpisode: "Enies Lobby 16",
        chapters: [
          {
            from: "Ch.409",
            to: "411"
          }
        ],
        chaptersRaw: "Ch. 409-411",
        opStart: 294,
        opEnd: 295,
        opEpisodesRaw: "Ep. 294-295",
        lengthMinutes: 26.5
      },
      {
        arc: "Enies Lobby",
        paceEpisode: "Enies Lobby 17",
        chapters: [
          {
            from: "Ch.412",
            to: "413"
          }
        ],
        chaptersRaw: "Ch. 412-413",
        opStart: 296,
        opEnd: 297,
        opEpisodesRaw: "Ep. 296-297",
        lengthMinutes: 21.1
      },
      {
        arc: "Enies Lobby",
        paceEpisode: "Enies Lobby 18",
        chapters: [
          {
            from: "Ch.414",
            to: "415"
          }
        ],
        chaptersRaw: "Ch. 414-415",
        opStart: 297,
        opEnd: 298,
        opEpisodesRaw: "Ep. 297-298",
        lengthMinutes: 19.9
      },
      {
        arc: "Enies Lobby",
        paceEpisode: "Enies Lobby 19",
        chapters: [
          {
            from: "Ch.416",
            to: "418"
          }
        ],
        chaptersRaw: "Ch. 416-418",
        opStart: 299,
        opEnd: 301,
        opEpisodesRaw: "Ep. 299-301",
        lengthMinutes: 31.6
      },
      {
        arc: "Enies Lobby",
        paceEpisode: "Enies Lobby 20",
        chapters: [
          {
            from: "Ch.419",
            to: "420"
          }
        ],
        chaptersRaw: "Ch. 419-420",
        opStart: 301,
        opEnd: 302,
        opEpisodesRaw: "Ep. 301-302",
        lengthMinutes: 26.4
      },
      {
        arc: "Enies Lobby",
        paceEpisode: "Enies Lobby 21",
        chapters: [
          {
            from: "Ch.421",
            to: "422"
          }
        ],
        chaptersRaw: "Ch. 421-422",
        opStart: 302,
        opEnd: 305,
        opEpisodesRaw: "Ep. 302,304-305",
        lengthMinutes: 24.3
      },
      {
        arc: "Enies Lobby",
        paceEpisode: "Enies Lobby 22",
        chapters: [
          {
            from: "Ch.423",
            to: "424"
          }
        ],
        chaptersRaw: "Ch. 423-424",
        opStart: 306,
        opEnd: 307,
        opEpisodesRaw: "Ep. 306-307",
        lengthMinutes: 26.9
      },
      {
        arc: "Enies Lobby",
        paceEpisode: "Enies Lobby 23",
        chapters: [
          {
            from: "Ch.425",
            to: "427"
          }
        ],
        chaptersRaw: "Ch. 425-427",
        opStart: 307,
        opEnd: 309,
        opEpisodesRaw: "Ep. 307-309",
        lengthMinutes: 34.4
      },
      {
        arc: "Enies Lobby",
        paceEpisode: "Enies Lobby 24",
        chapters: [
          {
            from: "Ch.428",
            to: "429"
          }
        ],
        chaptersRaw: "Ch. 428-429",
        opStart: 310,
        opEnd: 311,
        opEpisodesRaw: "Ep. 310-311",
        lengthMinutes: 33.3
      },
      {
        arc: "Enies Lobby",
        paceEpisode: "Enies Lobby 25",
        chapters: [
          {
            from: "Ch.430",
            to: "Ch.430"
          }
        ],
        chaptersRaw: "Ch. 430",
        opStart: 312,
        opEnd: 312,
        opEpisodesRaw: "Ep. 312",
        lengthMinutes: 16.8
      },
      {
        arc: "Post-Enies Lobby",
        paceEpisode: "Post-Enies Lobby 01",
        chapters: [
          {
            from: "Ch.431",
            to: "432"
          }
        ],
        chaptersRaw: "Ch. 431-432",
        opStart: 313,
        opEnd: 314,
        opEpisodesRaw: "Ep. 313-314",
        lengthMinutes: 27
      },
      {
        arc: "Post-Enies Lobby",
        paceEpisode: "Post-Enies Lobby 02",
        chapters: [
          {
            from: "Ch.433",
            to: "435"
          }
        ],
        chaptersRaw: "Ch. 433-435",
        opStart: 315,
        opEnd: 325,
        opEpisodesRaw: "Ep. 315-316, 319-320,325",
        lengthMinutes: 39.4
      },
      {
        arc: "Post-Enies Lobby",
        paceEpisode: "Post-Enies Lobby 03",
        chapters: [
          {
            from: "Ch.436",
            to: "437"
          }
        ],
        chaptersRaw: "Ch. 436-437",
        opStart: 321,
        opEnd: 322,
        opEpisodesRaw: "Ep. 321-322",
        lengthMinutes: 29.6
      },
      {
        arc: "Post-Enies Lobby",
        paceEpisode: "Post-Enies Lobby 04",
        chapters: [
          {
            from: "Ch.438",
            to: "439"
          }
        ],
        chaptersRaw: "Ch. 438-439",
        opStart: 323,
        opEnd: 324,
        opEpisodesRaw: "Ep. 323-324",
        lengthMinutes: 27
      },
      {
        arc: "Post-Enies Lobby",
        paceEpisode: "Post-Enies Lobby 05",
        chapters: [
          {
            from: "Ch.440",
            to: "441"
          }
        ],
        chaptersRaw: "Ch. 440-441",
        opStart: 324,
        opEnd: 325,
        opEpisodesRaw: "Ep. 324-325",
        lengthMinutes: 23.1
      },
      {
        arc: "Thriller Bark",
        paceEpisode: "Thriller Bark 01",
        chapters: [
          {
            from: "Ch.442",
            to: "443"
          }
        ],
        chaptersRaw: "Ch. 442-443",
        opStart: 326,
        opEnd: 339,
        opEpisodesRaw: "Ep. 326,337-339",
        lengthMinutes: 28.5
      },
      {
        arc: "Thriller Bark",
        paceEpisode: "Thriller Bark 02",
        chapters: [
          {
            from: "Ch.444",
            to: "445"
          }
        ],
        chaptersRaw: "Ch. 444-445",
        opStart: 339,
        opEnd: 340,
        opEpisodesRaw: "Ep. 339-340",
        lengthMinutes: 24.6
      },
      {
        arc: "Thriller Bark",
        paceEpisode: "Thriller Bark 03",
        chapters: [
          {
            from: "Ch.446",
            to: "448"
          }
        ],
        chaptersRaw: "Ch. 446-448",
        opStart: 340,
        opEnd: 342,
        opEpisodesRaw: "Ep. 340-342",
        lengthMinutes: 34.4
      },
      {
        arc: "Thriller Bark",
        paceEpisode: "Thriller Bark 04",
        chapters: [
          {
            from: "Ch.449",
            to: "450"
          }
        ],
        chaptersRaw: "Ch. 449-450",
        opStart: 342,
        opEnd: 344,
        opEpisodesRaw: "Ep. 342-344",
        lengthMinutes: 23.9
      },
      {
        arc: "Thriller Bark",
        paceEpisode: "Thriller Bark 05",
        chapters: [
          {
            from: "Ch.451",
            to: "452"
          }
        ],
        chaptersRaw: "Ch. 451-452",
        opStart: 345,
        opEnd: 346,
        opEpisodesRaw: "Ep. 345-346",
        lengthMinutes: 18.1
      },
      {
        arc: "Thriller Bark",
        paceEpisode: "Thriller Bark 06",
        chapters: [
          {
            from: "Ch.453",
            to: "454"
          }
        ],
        chaptersRaw: "Ch. 453-454",
        opStart: 347,
        opEnd: 348,
        opEpisodesRaw: "Ep. 347-348",
        lengthMinutes: 21.8
      },
      {
        arc: "Thriller Bark",
        paceEpisode: "Thriller Bark 07",
        chapters: [
          {
            from: "Ch.455",
            to: "456"
          }
        ],
        chaptersRaw: "Ch. 455-456",
        opStart: 349,
        opEnd: 350,
        opEpisodesRaw: "Ep. 349-350",
        lengthMinutes: 24.7
      },
      {
        arc: "Thriller Bark",
        paceEpisode: "Thriller Bark 08",
        chapters: [
          {
            from: "Ch.457",
            to: "458"
          }
        ],
        chaptersRaw: "Ch. 457-458",
        opStart: 351,
        opEnd: 353,
        opEpisodesRaw: "Ep. 351-353",
        lengthMinutes: 21.6
      },
      {
        arc: "Thriller Bark",
        paceEpisode: "Thriller Bark 09",
        chapters: [
          {
            from: "Ch.459",
            to: "460"
          }
        ],
        chaptersRaw: "Ch. 459-460",
        opStart: 353,
        opEnd: 355,
        opEpisodesRaw: "Ep. 353-355",
        lengthMinutes: 26.2
      },
      {
        arc: "Thriller Bark",
        paceEpisode: "Thriller Bark 10",
        chapters: [
          {
            from: "Ch.461",
            to: "462"
          }
        ],
        chaptersRaw: "Ch. 461-462",
        opStart: 356,
        opEnd: 357,
        opEpisodesRaw: "Ep. 356-357",
        lengthMinutes: 22.6
      },
      {
        arc: "Thriller Bark",
        paceEpisode: "Thriller Bark 11",
        chapters: [
          {
            from: "Ch.463",
            to: "464"
          }
        ],
        chaptersRaw: "Ch. 463-464",
        opStart: 357,
        opEnd: 359,
        opEpisodesRaw: "Ep. 357-359",
        lengthMinutes: 22.6
      },
      {
        arc: "Thriller Bark",
        paceEpisode: "Thriller Bark 12",
        chapters: [
          {
            from: "Ch.465",
            to: "466"
          }
        ],
        chaptersRaw: "Ch. 465-466",
        opStart: 360,
        opEnd: 362,
        opEpisodesRaw: "Ep. 360-362",
        lengthMinutes: 20.9
      },
      {
        arc: "Thriller Bark",
        paceEpisode: "Thriller Bark 13",
        chapters: [
          {
            from: "Ch.467",
            to: "468"
          }
        ],
        chaptersRaw: "Ch. 467-468",
        opStart: 362,
        opEnd: 363,
        opEpisodesRaw: "Ep. 362-363",
        lengthMinutes: 19.1
      },
      {
        arc: "Thriller Bark",
        paceEpisode: "Thriller Bark 14",
        chapters: [
          {
            from: "Ch.469",
            to: "470"
          }
        ],
        chaptersRaw: "Ch. 469-470",
        opStart: 364,
        opEnd: 365,
        opEpisodesRaw: "Ep. 364-365",
        lengthMinutes: 19.2
      },
      {
        arc: "Thriller Bark",
        paceEpisode: "Thriller Bark 15",
        chapters: [
          {
            from: "Ch.471",
            to: "472"
          }
        ],
        chaptersRaw: "Ch. 471-472",
        opStart: 365,
        opEnd: 367,
        opEpisodesRaw: "Ep. 365-367",
        lengthMinutes: 20.6
      },
      {
        arc: "Thriller Bark",
        paceEpisode: "Thriller Bark 16",
        chapters: [
          {
            from: "Ch.473",
            to: "474"
          }
        ],
        chaptersRaw: "Ch. 473-474",
        opStart: 368,
        opEnd: 369,
        opEpisodesRaw: "Ep. 368-369",
        lengthMinutes: 23
      },
      {
        arc: "Thriller Bark",
        paceEpisode: "Thriller Bark 17",
        chapters: [
          {
            from: "Ch.475",
            to: "476"
          }
        ],
        chaptersRaw: "Ch. 475-476",
        opStart: 370,
        opEnd: 371,
        opEpisodesRaw: "Ep. 370-371",
        lengthMinutes: 23.3
      },
      {
        arc: "Thriller Bark",
        paceEpisode: "Thriller Bark 18",
        chapters: [
          {
            from: "Ch.477",
            to: "479"
          }
        ],
        chaptersRaw: "Ch. 477-479",
        opStart: 371,
        opEnd: 372,
        opEpisodesRaw: "Ep. 371-372",
        lengthMinutes: 24
      },
      {
        arc: "Thriller Bark",
        paceEpisode: "Thriller Bark 19",
        chapters: [
          {
            from: "Ch.480",
            to: "482"
          }
        ],
        chaptersRaw: "Ch. 480-482",
        opStart: 373,
        opEnd: 374,
        opEpisodesRaw: "Ep. 373-374",
        lengthMinutes: 28.9
      },
      {
        arc: "Thriller Bark",
        paceEpisode: "Thriller Bark 20",
        chapters: [
          {
            from: "Ch.483",
            to: "485"
          }
        ],
        chaptersRaw: "Ch. 483-485",
        opStart: 375,
        opEnd: 377,
        opEpisodesRaw: "Ep. 375-377",
        lengthMinutes: 34
      },
      {
        arc: "Thriller Bark",
        paceEpisode: "Thriller Bark 21",
        chapters: [
          {
            from: "Ch.486",
            to: "487"
          }
        ],
        chaptersRaw: "Ch. 486-487",
        opStart: 378,
        opEnd: 380,
        opEpisodesRaw: "Ep. 378-380",
        lengthMinutes: 33
      },
      {
        arc: "Thriller Bark",
        paceEpisode: "Thriller Bark 22",
        chapters: [
          {
            from: "Ch.488",
            to: "489"
          }
        ],
        chaptersRaw: "Ch. 488-489",
        opStart: 380,
        opEnd: 381,
        opEpisodesRaw: "Ep. 380-381",
        lengthMinutes: 24.4
      },
      {
        arc: "Sabaody Archipelago",
        paceEpisode: "Sabaody Archipelago 01",
        chapters: [
          {
            from: "Ch.490",
            to: "491"
          }
        ],
        chaptersRaw: "Ch. 490-491",
        opStart: 385,
        opEnd: 386,
        opEpisodesRaw: "Ep. 385-386",
        lengthMinutes: 28.4
      },
      {
        arc: "Sabaody Archipelago",
        paceEpisode: "Sabaody Archipelago 02",
        chapters: [
          {
            from: "Ch.492",
            to: "493"
          }
        ],
        chaptersRaw: "Ch. 492-493",
        opStart: 387,
        opEnd: 388,
        opEpisodesRaw: "Ep. 387-388",
        lengthMinutes: 24.3
      },
      {
        arc: "Sabaody Archipelago",
        paceEpisode: "Sabaody Archipelago 03",
        chapters: [
          {
            from: "Ch.494",
            to: "495"
          }
        ],
        chaptersRaw: "Ch. 494-495",
        opStart: 388,
        opEnd: 389,
        opEpisodesRaw: "Ep. 388-389",
        lengthMinutes: 23.4
      },
      {
        arc: "Sabaody Archipelago",
        paceEpisode: "Sabaody Archipelago 04",
        chapters: [
          {
            from: "Ch.496",
            to: "497"
          }
        ],
        chaptersRaw: "Ch. 496-497",
        opStart: 390,
        opEnd: 391,
        opEpisodesRaw: "Ep. 390-391",
        lengthMinutes: 31.2
      },
      {
        arc: "Sabaody Archipelago",
        paceEpisode: "Sabaody Archipelago 05",
        chapters: [
          {
            from: "Ch.498",
            to: "500"
          }
        ],
        chaptersRaw: "Ch. 498-500",
        opStart: 392,
        opEnd: 394,
        opEpisodesRaw: "Ep. 392-394",
        lengthMinutes: 44
      },
      {
        arc: "Sabaody Archipelago",
        paceEpisode: "Sabaody Archipelago 06",
        chapters: [
          {
            from: "Ch.501",
            to: "502"
          }
        ],
        chaptersRaw: "Ch. 501-502",
        opStart: 395,
        opEnd: 396,
        opEpisodesRaw: "Ep. 395-396",
        lengthMinutes: 27.9
      },
      {
        arc: "Sabaody Archipelago",
        paceEpisode: "Sabaody Archipelago 07",
        chapters: [
          {
            from: "Ch.503",
            to: "504"
          }
        ],
        chaptersRaw: "Ch. 503-504",
        opStart: 397,
        opEnd: 398,
        opEpisodesRaw: "Ep. 397-398",
        lengthMinutes: 23.9
      },
      {
        arc: "Sabaody Archipelago",
        paceEpisode: "Sabaody Archipelago 08",
        chapters: [
          {
            from: "Ch.505",
            to: "506"
          }
        ],
        chaptersRaw: "Ch. 505-506",
        opStart: 399,
        opEnd: 400,
        opEpisodesRaw: "Ep. 399-400",
        lengthMinutes: 23.6
      },
      {
        arc: "Sabaody Archipelago",
        paceEpisode: "Sabaody Archipelago 09",
        chapters: [
          {
            from: "Ch.507",
            to: "508"
          }
        ],
        chaptersRaw: "Ch. 507-508",
        opStart: 400,
        opEnd: 401,
        opEpisodesRaw: "Ep. 400-401",
        lengthMinutes: 22.5
      },
      {
        arc: "Sabaody Archipelago",
        paceEpisode: "Sabaody Archipelago 10",
        chapters: [
          {
            from: "Ch.509",
            to: "511"
          }
        ],
        chaptersRaw: "Ch. 509-511",
        opStart: 402,
        opEnd: 404,
        opEpisodesRaw: "Ep. 402-404",
        lengthMinutes: 30.1
      },
      {
        arc: "Sabaody Archipelago",
        paceEpisode: "Sabaody Archipelago 11",
        chapters: [
          {
            from: "Ch.512",
            to: "513"
          }
        ],
        chaptersRaw: "Ch. 512-513",
        opStart: 404,
        opEnd: 405,
        opEpisodesRaw: "Ep. 404-405",
        lengthMinutes: 23.8
      },
      {
        arc: "Amazon Lily",
        paceEpisode: "Amazon Lily 01",
        chapters: [
          {
            from: "Ch.514",
            to: "515"
          }
        ],
        chaptersRaw: "Ch. 514-515",
        opStart: 408,
        opEnd: 409,
        opEpisodesRaw: "Ep. 408-409",
        lengthMinutes: 26.3
      },
      {
        arc: "Amazon Lily",
        paceEpisode: "Amazon Lily 02",
        chapters: [
          {
            from: "Ch.516",
            to: "517"
          }
        ],
        chaptersRaw: "Ch. 516-517",
        opStart: 410,
        opEnd: 411,
        opEpisodesRaw: "Ep. 410-411",
        lengthMinutes: 25.9
      },
      {
        arc: "Amazon Lily",
        paceEpisode: "Amazon Lily 03",
        chapters: [
          {
            from: "Ch.518",
            to: "519"
          }
        ],
        chaptersRaw: "Ch. 518-519",
        opStart: 412,
        opEnd: 413,
        opEpisodesRaw: "Ep. 412-413",
        lengthMinutes: 23
      },
      {
        arc: "Amazon Lily",
        paceEpisode: "Amazon Lily 04",
        chapters: [
          {
            from: "Ch.520",
            to: "522"
          }
        ],
        chaptersRaw: "Ch. 520-522",
        opStart: 414,
        opEnd: 417,
        opEpisodesRaw: "Ep. 414-417",
        lengthMinutes: 37.8
      },
      {
        arc: "Amazon Lily",
        paceEpisode: "Amazon Lily 05",
        chapters: [
          {
            from: "Ch.523",
            to: "524"
          }
        ],
        chaptersRaw: "Ch. 523-524",
        opStart: 417,
        opEnd: 421,
        opEpisodesRaw: "Ep. 417-421",
        lengthMinutes: 27.6
      },
      {
        arc: "Impel Down",
        paceEpisode: "Impel Down 01",
        chapters: [
          {
            from: "Ch.525",
            to: "526"
          }
        ],
        chaptersRaw: "Ch. 525-526",
        opStart: 422,
        opEnd: 454,
        opEpisodesRaw: "Ep. 422-423,454",
        lengthMinutes: 27.6
      },
      {
        arc: "Impel Down",
        paceEpisode: "Impel Down 02",
        chapters: [
          {
            from: "Ch.527",
            to: "528"
          }
        ],
        chaptersRaw: "Ch. 527-528",
        opStart: 424,
        opEnd: 430,
        opEpisodesRaw: "Ep. 424-425,430",
        lengthMinutes: 25.2
      },
      {
        arc: "Impel Down",
        paceEpisode: "Impel Down 03",
        chapters: [
          {
            from: "Ch.529",
            to: "531"
          }
        ],
        chaptersRaw: "Ch. 529-531",
        opStart: 425,
        opEnd: 432,
        opEpisodesRaw: "Ep. 425,430-432",
        lengthMinutes: 39.2
      },
      {
        arc: "Impel Down",
        paceEpisode: "Impel Down 04",
        chapters: [
          {
            from: "Ch.532",
            to: "533"
          }
        ],
        chaptersRaw: "Ch. 532-533",
        opStart: 433,
        opEnd: 434,
        opEpisodesRaw: "Ep. 433-434",
        lengthMinutes: 26.9
      },
      {
        arc: "Impel Down",
        paceEpisode: "Impel Down 05",
        chapters: [
          {
            from: "Ch.534",
            to: "536"
          }
        ],
        chaptersRaw: "Ch. 534-536",
        opStart: 435,
        opEnd: 446,
        opEpisodesRaw: "Ep. 435-438,446",
        lengthMinutes: 35.1
      },
      {
        arc: "Impel Down",
        paceEpisode: "Impel Down 06",
        chapters: [
          {
            from: "Ch.537",
            to: "538"
          }
        ],
        chaptersRaw: "Ch. 537-538",
        opStart: 438,
        opEnd: 440,
        opEpisodesRaw: "Ep. 438-440",
        lengthMinutes: 32.2
      },
      {
        arc: "Impel Down",
        paceEpisode: "Impel Down 07",
        chapters: [
          {
            from: "Ch.539",
            to: "540"
          }
        ],
        chaptersRaw: "Ch. 539-540",
        opStart: 440,
        opEnd: 443,
        opEpisodesRaw: "Ep. 440-443",
        lengthMinutes: 28.7
      },
      {
        arc: "Impel Down",
        paceEpisode: "Impel Down 08",
        chapters: [
          {
            from: "Ch.541",
            to: "543"
          }
        ],
        chaptersRaw: "Ch. 541-543",
        opStart: 443,
        opEnd: 446,
        opEpisodesRaw: "Ep. 443-446",
        lengthMinutes: 37.5
      },
      {
        arc: "Impel Down",
        paceEpisode: "Impel Down 09",
        chapters: [
          {
            from: "Ch.544",
            to: "546"
          }
        ],
        chaptersRaw: "Ch. 544-546",
        opStart: 446,
        opEnd: 450,
        opEpisodesRaw: "Ep. 446-450",
        lengthMinutes: 37.7
      },
      {
        arc: "Impel Down",
        paceEpisode: "Impel Down 10",
        chapters: [
          {
            from: "Ch.547",
            to: "548"
          }
        ],
        chaptersRaw: "Ch. 547-548",
        opStart: 450,
        opEnd: 451,
        opEpisodesRaw: "Ep. 450-451",
        lengthMinutes: 27.1
      },
      {
        arc: "The Adventures of the Straw Hat",
        paceEpisode: "The Adventures of the Straw Hats",
        chapters: [
          {
            from: "Ch.543",
            to: "560"
          }
        ],
        chaptersRaw: "Ch. 543-560",
        opStart: 453,
        opEnd: 456,
        opEpisodesRaw: "Ep. 453-456",
        lengthMinutes: 23.1
      },
      {
        arc: "Marineford",
        paceEpisode: "Marineford 01",
        chapters: [
          {
            from: "Ch.549",
            to: "550"
          }
        ],
        chaptersRaw: "Ch. 549-550",
        opStart: 452,
        opEnd: 459,
        opEpisodesRaw: "Ep. 452,459",
        lengthMinutes: 31.2
      },
      {
        arc: "Marineford",
        paceEpisode: "Marineford 02",
        chapters: [
          {
            from: "Ch.551",
            to: "552"
          }
        ],
        chaptersRaw: "Ch. 551-552",
        opStart: 459,
        opEnd: 462,
        opEpisodesRaw: "Ep. 459-462",
        lengthMinutes: 34.3
      },
      {
        arc: "Marineford",
        paceEpisode: "Marineford 03",
        chapters: [
          {
            from: "Ch.553",
            to: "554"
          }
        ],
        chaptersRaw: "Ch. 553-554",
        opStart: 462,
        opEnd: 463,
        opEpisodesRaw: "Ep. 462-463",
        lengthMinutes: 16.2
      },
      {
        arc: "Marineford",
        paceEpisode: "Marineford 04",
        chapters: [
          {
            from: "Ch.555",
            to: "556"
          }
        ],
        chaptersRaw: "Ch. 555-556",
        opStart: 464,
        opEnd: 465,
        opEpisodesRaw: "Ep. 464-465",
        lengthMinutes: 24.4
      },
      {
        arc: "Marineford",
        paceEpisode: "Marineford 05",
        chapters: [
          {
            from: "Ch.557",
            to: "558"
          }
        ],
        chaptersRaw: "Ch. 557-558",
        opStart: 466,
        opEnd: 468,
        opEpisodesRaw: "Ep. 466-468",
        lengthMinutes: 27.3
      },
      {
        arc: "Marineford",
        paceEpisode: "Marineford 06",
        chapters: [
          {
            from: "Ch.559",
            to: "560"
          }
        ],
        chaptersRaw: "Ch. 559-560",
        opStart: 468,
        opEnd: 469,
        opEpisodesRaw: "Ep. 468-469",
        lengthMinutes: 27.4
      },
      {
        arc: "Marineford",
        paceEpisode: "Marineford 07",
        chapters: [
          {
            from: "Ch.561",
            to: "562"
          }
        ],
        chaptersRaw: "Ch. 561-562",
        opStart: 470,
        opEnd: 471,
        opEpisodesRaw: "Ep. 470-471",
        lengthMinutes: 28.8
      },
      {
        arc: "Marineford",
        paceEpisode: "Marineford 08",
        chapters: [
          {
            from: "Ch.563",
            to: "564"
          }
        ],
        chaptersRaw: "Ch. 563-564",
        opStart: 472,
        opEnd: 473,
        opEpisodesRaw: "Ep. 472-473",
        lengthMinutes: 28.5
      },
      {
        arc: "Marineford",
        paceEpisode: "Marineford 09",
        chapters: [
          {
            from: "Ch.565",
            to: "566"
          }
        ],
        chaptersRaw: "Ch. 565-566",
        opStart: 474,
        opEnd: 475,
        opEpisodesRaw: "Ep. 474-475",
        lengthMinutes: 26.7
      },
      {
        arc: "Marineford",
        paceEpisode: "Marineford 10",
        chapters: [
          {
            from: "Ch.567",
            to: "Ch.567"
          }
        ],
        chaptersRaw: "Ch. 567",
        opStart: 476,
        opEnd: 476,
        opEpisodesRaw: "Ep. 476",
        lengthMinutes: 14.8
      },
      {
        arc: "Marineford",
        paceEpisode: "Marineford 11",
        chapters: [
          {
            from: "Ch.568",
            to: "569"
          }
        ],
        chaptersRaw: "Ch. 568-569",
        opStart: 477,
        opEnd: 478,
        opEpisodesRaw: "Ep. 477-478",
        lengthMinutes: 26
      },
      {
        arc: "Marineford",
        paceEpisode: "Marineford 12",
        chapters: [
          {
            from: "Ch.570",
            to: "571"
          }
        ],
        chaptersRaw: "Ch. 570-571",
        opStart: 479,
        opEnd: 480,
        opEpisodesRaw: "Ep. 479-480",
        lengthMinutes: 24.5
      },
      {
        arc: "Marineford",
        paceEpisode: "Marineford 13",
        chapters: [
          {
            from: "Ch.572",
            to: "573"
          }
        ],
        chaptersRaw: "Ch. 572-573",
        opStart: 481,
        opEnd: 482,
        opEpisodesRaw: "Ep. 481-482",
        lengthMinutes: 26.8
      },
      {
        arc: "Marineford",
        paceEpisode: "Marineford 14",
        chapters: [
          {
            from: "Ch.574",
            to: "Ch.574"
          }
        ],
        chaptersRaw: "Ch. 574",
        opStart: 483,
        opEnd: 484,
        opEpisodesRaw: "Ep. 483-484",
        lengthMinutes: 18.9
      },
      {
        arc: "Marineford",
        paceEpisode: "Marineford 15",
        chapters: [
          {
            from: "Ch.575",
            to: "576"
          }
        ],
        chaptersRaw: "Ch. 575-576",
        opStart: 484,
        opEnd: 485,
        opEpisodesRaw: "Ep. 484-485",
        lengthMinutes: 29.7
      },
      {
        arc: "Marineford",
        paceEpisode: "Marineford 16",
        chapters: [
          {
            from: "Ch.577",
            to: "578"
          }
        ],
        chaptersRaw: "Ch. 577-578",
        opStart: 486,
        opEnd: 487,
        opEpisodesRaw: "Ep. 486-487",
        lengthMinutes: 26.4
      },
      {
        arc: "Marineford",
        paceEpisode: "Marineford 17",
        chapters: [
          {
            from: "Ch.579",
            to: "580"
          }
        ],
        chaptersRaw: "Ch. 579-580",
        opStart: 488,
        opEnd: 489,
        opEpisodesRaw: "Ep. 488-489",
        lengthMinutes: 26.5
      },
      {
        arc: "Post-War",
        paceEpisode: "Post-War 01",
        chapters: [
          {
            from: "Ch.581",
            to: "582"
          }
        ],
        chaptersRaw: "Ch. 581-582",
        opStart: 490,
        opEnd: 491,
        opEpisodesRaw: "Ep. 490-491",
        lengthMinutes: 30.1
      },
      {
        arc: "Post-War",
        paceEpisode: "Post-War 02",
        chapters: [
          {
            from: "Ch.583",
            to: "584"
          }
        ],
        chaptersRaw: "Ch. 583-584",
        opStart: 493,
        opEnd: 495,
        opEpisodesRaw: "Ep. 493-495",
        lengthMinutes: 40
      },
      {
        arc: "Post-War",
        paceEpisode: "Post-War 03",
        chapters: [
          {
            from: "Ch.585",
            to: "586"
          }
        ],
        chaptersRaw: "Ch. 585-586",
        opStart: 496,
        opEnd: 501,
        opEpisodesRaw: "Ep. 496-498,500-501, Episode of Sabo",
        lengthMinutes: 42.5
      },
      {
        arc: "Post-War",
        paceEpisode: "Post-War 04",
        chapters: [
          {
            from: "Ch.587",
            to: "588"
          }
        ],
        chaptersRaw: "Ch. 587-588",
        opStart: 501,
        opEnd: 503,
        opEpisodesRaw: "Ep. 501-503",
        lengthMinutes: 36.1
      },
      {
        arc: "Post-War",
        paceEpisode: "Post-War 05",
        chapters: [
          {
            from: "Ch.589",
            to: "590"
          }
        ],
        chaptersRaw: "Ch. 589-590",
        opStart: 503,
        opEnd: 505,
        opEpisodesRaw: "Ep. 503-505",
        lengthMinutes: 41.2
      },
      {
        arc: "Post-War",
        paceEpisode: "Post-War 06",
        chapters: [
          {
            from: "Ch.591",
            to: "592"
          }
        ],
        chaptersRaw: "Ch. 591-592",
        opStart: 507,
        opEnd: 510,
        opEpisodesRaw: "Ep. 507-510",
        lengthMinutes: 39.7
      },
      {
        arc: "Post-War",
        paceEpisode: "Post-War 07",
        chapters: [
          {
            from: "Ch.593",
            to: "594"
          }
        ],
        chaptersRaw: "Ch. 593-594",
        opStart: 510,
        opEnd: 512,
        opEpisodesRaw: "Ep. 510-512",
        lengthMinutes: 36.8
      },
      {
        arc: "Post-War",
        paceEpisode: "Post-War 08",
        chapters: [
          {
            from: "Ch.595",
            to: "597"
          }
        ],
        chaptersRaw: "Ch. 595-597",
        opStart: 513,
        opEnd: 516,
        opEpisodesRaw: "Ep. 513-516",
        lengthMinutes: 60
      },
      {
        arc: "Return to Sabaody",
        paceEpisode: "Return to Sabaody 01",
        chapters: [
          {
            from: "Ch.598",
            to: "599"
          }
        ],
        chaptersRaw: "Ch. 598-599",
        opStart: 517,
        opEnd: 519,
        opEpisodesRaw: "Ep. 517-519",
        lengthMinutes: 34.1
      },
      {
        arc: "Return to Sabaody",
        paceEpisode: "Return to Sabaody 02",
        chapters: [
          {
            from: "Ch.599",
            to: "600"
          }
        ],
        chaptersRaw: "Ch. 599-600",
        opStart: 518,
        opEnd: 520,
        opEpisodesRaw: "Ep. 518-520",
        lengthMinutes: 31.2
      },
      {
        arc: "Return to Sabaody",
        paceEpisode: "Return to Sabaody 03",
        chapters: [
          {
            from: "Ch.601",
            to: "602"
          }
        ],
        chaptersRaw: "Ch. 601-602",
        opStart: 520,
        opEnd: 522,
        opEpisodesRaw: "Ep. 520-522",
        lengthMinutes: 33.6
      },
      {
        arc: "Fishman Island",
        paceEpisode: "Fishman Island 01",
        chapters: [
          {
            from: "Ch.603",
            to: "604"
          }
        ],
        chaptersRaw: "Ch. 603-604",
        opStart: 523,
        opEnd: 524,
        opEpisodesRaw: "Ep. 523-524",
        lengthMinutes: 26.1
      },
      {
        arc: "Fishman Island",
        paceEpisode: "Fishman Island 02",
        chapters: [
          {
            from: "Ch.605",
            to: "606"
          }
        ],
        chaptersRaw: "Ch. 605-606",
        opStart: 524,
        opEnd: 526,
        opEpisodesRaw: "Ep. 524-526",
        lengthMinutes: 24.2
      },
      {
        arc: "Fishman Island",
        paceEpisode: "Fishman Island 03",
        chapters: [
          {
            from: "Ch.607",
            to: "608"
          }
        ],
        chaptersRaw: "Ch. 607-608",
        opStart: 526,
        opEnd: 527,
        opEpisodesRaw: "Ep. 526-527",
        lengthMinutes: 24.1
      },
      {
        arc: "Fishman Island",
        paceEpisode: "Fishman Island 04",
        chapters: [
          {
            from: "Ch.609",
            to: "610"
          }
        ],
        chaptersRaw: "Ch. 609-610",
        opStart: 528,
        opEnd: 529,
        opEpisodesRaw: "Ep. 528-529",
        lengthMinutes: 28.7
      },
      {
        arc: "Fishman Island",
        paceEpisode: "Fishman Island 05",
        chapters: [
          {
            from: "Ch.611",
            to: "612"
          }
        ],
        chaptersRaw: "Ch. 611-612",
        opStart: 530,
        opEnd: 531,
        opEpisodesRaw: "Ep. 530-531",
        lengthMinutes: 27.1
      },
      {
        arc: "Fishman Island",
        paceEpisode: "Fishman Island 06",
        chapters: [
          {
            from: "Ch.613",
            to: "614"
          }
        ],
        chaptersRaw: "Ch. 613-614",
        opStart: 532,
        opEnd: 533,
        opEpisodesRaw: "Ep. 532-533",
        lengthMinutes: 29.7
      },
      {
        arc: "Fishman Island",
        paceEpisode: "Fishman Island 07",
        chapters: [
          {
            from: "Ch.614",
            to: "615"
          }
        ],
        chaptersRaw: "Ch. 614-615",
        opStart: 533,
        opEnd: 534,
        opEpisodesRaw: "Ep. 533-534",
        lengthMinutes: 34.2
      },
      {
        arc: "Fishman Island",
        paceEpisode: "Fishman Island 08",
        chapters: [
          {
            from: "Ch.616",
            to: "618"
          }
        ],
        chaptersRaw: "Ch. 616-618",
        opStart: 535,
        opEnd: 537,
        opEpisodesRaw: "Ep. 535-537",
        lengthMinutes: 45.2
      },
      {
        arc: "Fishman Island",
        paceEpisode: "Fishman Island 09",
        chapters: [
          {
            from: "Ch.619",
            to: "620"
          }
        ],
        chaptersRaw: "Ch. 619-620",
        opStart: 538,
        opEnd: 541,
        opEpisodesRaw: "Ep. 538-539,541",
        lengthMinutes: 34.6
      },
      {
        arc: "Fishman Island",
        paceEpisode: "Fishman Island 10",
        chapters: [
          {
            from: "Ch.621",
            to: "622"
          }
        ],
        chaptersRaw: "Ch. 621-622",
        opStart: 540,
        opEnd: 541,
        opEpisodesRaw: "Ep. 540-541",
        lengthMinutes: 35.8
      },
      {
        arc: "Fishman Island",
        paceEpisode: "Fishman Island 11",
        chapters: [
          {
            from: "Ch.623",
            to: "624"
          }
        ],
        chaptersRaw: "Ch. 623-624",
        opStart: 543,
        opEnd: 545,
        opEpisodesRaw: "Ep. 543-545",
        lengthMinutes: 36
      },
      {
        arc: "Fishman Island",
        paceEpisode: "Fishman Island 12",
        chapters: [
          {
            from: "Ch.625",
            to: "626"
          }
        ],
        chaptersRaw: "Ch. 625-626",
        opStart: 545,
        opEnd: 546,
        opEpisodesRaw: "Ep. 545-546",
        lengthMinutes: 39.4
      },
      {
        arc: "Fishman Island",
        paceEpisode: "Fishman Island 13",
        chapters: [
          {
            from: "Ch.627",
            to: "629"
          }
        ],
        chaptersRaw: "Ch. 627-629",
        opStart: 547,
        opEnd: 550,
        opEpisodesRaw: "Ep. 547-550",
        lengthMinutes: 35
      },
      {
        arc: "Fishman Island",
        paceEpisode: "Fishman Island 14",
        chapters: [
          {
            from: "Ch.630",
            to: "631"
          }
        ],
        chaptersRaw: "Ch. 630-631",
        opStart: 550,
        opEnd: 551,
        opEpisodesRaw: "Ep. 550-551",
        lengthMinutes: 29
      },
      {
        arc: "Fishman Island",
        paceEpisode: "Fishman Island 15",
        chapters: [
          {
            from: "Ch.632",
            to: "633"
          }
        ],
        chaptersRaw: "Ch. 632-633",
        opStart: 552,
        opEnd: 553,
        opEpisodesRaw: "Ep. 552-553",
        lengthMinutes: 30.3
      },
      {
        arc: "Fishman Island",
        paceEpisode: "Fishman Island 16",
        chapters: [
          {
            from: "Ch.634",
            to: "635"
          }
        ],
        chaptersRaw: "Ch. 634-635",
        opStart: 554,
        opEnd: 556,
        opEpisodesRaw: "Ep. 554-556",
        lengthMinutes: 36.1
      },
      {
        arc: "Fishman Island",
        paceEpisode: "Fishman Island 17",
        chapters: [
          {
            from: "Ch.636",
            to: "637"
          }
        ],
        chaptersRaw: "Ch. 636-637",
        opStart: 556,
        opEnd: 558,
        opEpisodesRaw: "Ep. 556-558",
        lengthMinutes: 28.1
      },
      {
        arc: "Fishman Island",
        paceEpisode: "Fishman Island 18",
        chapters: [
          {
            from: "Ch.638",
            to: "639"
          }
        ],
        chaptersRaw: "Ch. 638-639",
        opStart: 559,
        opEnd: 560,
        opEpisodesRaw: "Ep. 559-560",
        lengthMinutes: 25
      },
      {
        arc: "Fishman Island",
        paceEpisode: "Fishman Island 19",
        chapters: [
          {
            from: "Ch.640",
            to: "641"
          }
        ],
        chaptersRaw: "Ch. 640-641",
        opStart: 561,
        opEnd: 562,
        opEpisodesRaw: "Ep. 561-562",
        lengthMinutes: 35.2
      },
      {
        arc: "Fishman Island",
        paceEpisode: "Fishman Island 20",
        chapters: [
          {
            from: "Ch.642",
            to: "645"
          }
        ],
        chaptersRaw: "Ch. 642-645",
        opStart: 563,
        opEnd: 567,
        opEpisodesRaw: "Ep. 563-567",
        lengthMinutes: 30.4
      },
      {
        arc: "Fishman Island",
        paceEpisode: "Fishman Island 21",
        chapters: [
          {
            from: "Ch.643",
            to: "646"
          }
        ],
        chaptersRaw: "Ch. 643-646",
        opStart: 562,
        opEnd: 567,
        opEpisodesRaw: "Ep. 562-567",
        lengthMinutes: 29.1
      },
      {
        arc: "Fishman Island",
        paceEpisode: "Fishman Island 22",
        chapters: [
          {
            from: "Ch.647",
            to: "649"
          }
        ],
        chaptersRaw: "Ch. 647-649",
        opStart: 567,
        opEnd: 569,
        opEpisodesRaw: "Ep. 567-569",
        lengthMinutes: 42.5
      },
      {
        arc: "Fishman Island",
        paceEpisode: "Fishman Island 23",
        chapters: [
          {
            from: "Ch.650",
            to: "651"
          }
        ],
        chaptersRaw: "Ch. 650-651",
        opStart: 570,
        opEnd: 571,
        opEpisodesRaw: "Ep. 570-571",
        lengthMinutes: 31.5
      },
      {
        arc: "Fishman Island",
        paceEpisode: "Fishman Island 24",
        chapters: [
          {
            from: "Ch.652",
            to: "653"
          }
        ],
        chaptersRaw: "Ch. 652-653",
        opStart: 572,
        opEnd: 573,
        opEpisodesRaw: "Ep. 572-573",
        lengthMinutes: 32.8
      },
      {
        arc: "Punk Hazard",
        paceEpisode: "Punk Hazard 01",
        chapters: [
          {
            from: "Ch.654",
            to: "655"
          }
        ],
        chaptersRaw: "Ch. 654-655",
        opStart: 574,
        opEnd: 579,
        opEpisodesRaw: "Ep. 574,579",
        lengthMinutes: 28.4
      },
      {
        arc: "Punk Hazard",
        paceEpisode: "Punk Hazard 02",
        chapters: [
          {
            from: "Ch.656",
            to: "658"
          }
        ],
        chaptersRaw: "Ch. 656-658",
        opStart: 580,
        opEnd: 583,
        opEpisodesRaw: "Ep. 580-583",
        lengthMinutes: 45.6
      },
      {
        arc: "Punk Hazard",
        paceEpisode: "Punk Hazard 03",
        chapters: [
          {
            from: "Ch.659",
            to: "660"
          }
        ],
        chaptersRaw: "Ch. 659-660",
        opStart: 583,
        opEnd: 585,
        opEpisodesRaw: "Ep. 583-585",
        lengthMinutes: 29.8
      },
      {
        arc: "Punk Hazard",
        paceEpisode: "Punk Hazard 04",
        chapters: [
          {
            from: "Ch.661",
            to: "662"
          }
        ],
        chaptersRaw: "Ch. 661-662",
        opStart: 585,
        opEnd: 587,
        opEpisodesRaw: "Ep. 585-587",
        lengthMinutes: 23.9
      },
      {
        arc: "Punk Hazard",
        paceEpisode: "Punk Hazard 05",
        chapters: [
          {
            from: "Ch.663",
            to: "664"
          }
        ],
        chaptersRaw: "Ch. 663-664",
        opStart: 588,
        opEnd: 589,
        opEpisodesRaw: "Ep. 588-589",
        lengthMinutes: 35.7
      },
      {
        arc: "Punk Hazard",
        paceEpisode: "Punk Hazard 06",
        chapters: [
          {
            from: "Ch.665",
            to: "666"
          }
        ],
        chaptersRaw: "Ch. 665-666",
        opStart: 591,
        opEnd: 592,
        opEpisodesRaw: "Ep. 591-592",
        lengthMinutes: 29.3
      },
      {
        arc: "Punk Hazard",
        paceEpisode: "Punk Hazard 07",
        chapters: [
          {
            from: "Ch.667",
            to: "668"
          }
        ],
        chaptersRaw: "Ch. 667-668",
        opStart: 593,
        opEnd: 594,
        opEpisodesRaw: "Ep. 593-594",
        lengthMinutes: 31
      },
      {
        arc: "Punk Hazard",
        paceEpisode: "Punk Hazard 08",
        chapters: [
          {
            from: "Ch.669",
            to: "670"
          }
        ],
        chaptersRaw: "Ch. 669-670",
        opStart: 595,
        opEnd: 596,
        opEpisodesRaw: "Ep. 595-596",
        lengthMinutes: 27.8
      },
      {
        arc: "Punk Hazard",
        paceEpisode: "Punk Hazard 09",
        chapters: [
          {
            from: "Ch.671",
            to: "672"
          }
        ],
        chaptersRaw: "Ch. 671-672",
        opStart: 597,
        opEnd: 598,
        opEpisodesRaw: "Ep. 597-598",
        lengthMinutes: 26.8
      },
      {
        arc: "Punk Hazard",
        paceEpisode: "Punk Hazard 10",
        chapters: [
          {
            from: "Ch.673",
            to: "674"
          }
        ],
        chaptersRaw: "Ch. 673-674",
        opStart: 599,
        opEnd: 600,
        opEpisodesRaw: "Ep. 599-600",
        lengthMinutes: 27.4
      },
      {
        arc: "Punk Hazard",
        paceEpisode: "Punk Hazard 11",
        chapters: [
          {
            from: "Ch.675",
            to: "676"
          }
        ],
        chaptersRaw: "Ch. 675-676",
        opStart: 601,
        opEnd: 602,
        opEpisodesRaw: "Ep. 601-602",
        lengthMinutes: 26
      },
      {
        arc: "Punk Hazard",
        paceEpisode: "Punk Hazard 12",
        chapters: [
          {
            from: "Ch.677",
            to: "678"
          }
        ],
        chaptersRaw: "Ch. 677-678",
        opStart: 603,
        opEnd: 604,
        opEpisodesRaw: "Ep. 603-604",
        lengthMinutes: 22.2
      },
      {
        arc: "Punk Hazard",
        paceEpisode: "Punk Hazard 13",
        chapters: [
          {
            from: "Ch.679",
            to: "680"
          }
        ],
        chaptersRaw: "Ch. 679-680",
        opStart: 604,
        opEnd: 606,
        opEpisodesRaw: "Ep. 604-606",
        lengthMinutes: 22.2
      },
      {
        arc: "Punk Hazard",
        paceEpisode: "Punk Hazard 14",
        chapters: [
          {
            from: "Ch.681",
            to: "682"
          }
        ],
        chaptersRaw: "Ch. 681-682",
        opStart: 607,
        opEnd: 608,
        opEpisodesRaw: "Ep. 607-608",
        lengthMinutes: 19.2
      },
      {
        arc: "Punk Hazard",
        paceEpisode: "Punk Hazard 15",
        chapters: [
          {
            from: "Ch.683",
            to: "684"
          }
        ],
        chaptersRaw: "Ch. 683-684",
        opStart: 609,
        opEnd: 610,
        opEpisodesRaw: "Ep. 609-610",
        lengthMinutes: 21.2
      },
      {
        arc: "Punk Hazard",
        paceEpisode: "Punk Hazard 16",
        chapters: [
          {
            from: "Ch.685",
            to: "686"
          }
        ],
        chaptersRaw: "Ch. 685-686",
        opStart: 611,
        opEnd: 612,
        opEpisodesRaw: "Ep. 611-612",
        lengthMinutes: 21.6
      },
      {
        arc: "Punk Hazard",
        paceEpisode: "Punk Hazard 17",
        chapters: [
          {
            from: "Ch.687",
            to: "688"
          }
        ],
        chaptersRaw: "Ch. 687-688",
        opStart: 613,
        opEnd: 614,
        opEpisodesRaw: "Ep. 613-614",
        lengthMinutes: 21.8
      },
      {
        arc: "Punk Hazard",
        paceEpisode: "Punk Hazard 18",
        chapters: [
          {
            from: "Ch.689",
            to: "690"
          }
        ],
        chaptersRaw: "Ch. 689-690",
        opStart: 615,
        opEnd: 616,
        opEpisodesRaw: "Ep. 615-616",
        lengthMinutes: 20.5
      },
      {
        arc: "Punk Hazard",
        paceEpisode: "Punk Hazard 19",
        chapters: [
          {
            from: "Ch.691",
            to: "692"
          }
        ],
        chaptersRaw: "Ch. 691-692",
        opStart: 617,
        opEnd: 618,
        opEpisodesRaw: "Ep. 617-618",
        lengthMinutes: 21.6
      },
      {
        arc: "Punk Hazard",
        paceEpisode: "Punk Hazard 20",
        chapters: [
          {
            from: "Ch.693",
            to: "695"
          }
        ],
        chaptersRaw: "Ch. 693-695",
        opStart: 619,
        opEnd: 621,
        opEpisodesRaw: "Ep. 619-621",
        lengthMinutes: 23.6
      },
      {
        arc: "Punk Hazard",
        paceEpisode: "Punk Hazard 21",
        chapters: [
          {
            from: "Ch.696",
            to: "697"
          }
        ],
        chaptersRaw: "Ch. 696-697",
        opStart: 622,
        opEnd: 623,
        opEpisodesRaw: "Ep. 622-623",
        lengthMinutes: 23.9
      },
      {
        arc: "Punk Hazard",
        paceEpisode: "Punk Hazard 22",
        chapters: [
          {
            from: "Ch.698",
            to: "699"
          }
        ],
        chaptersRaw: "Ch. 698-699",
        opStart: 624,
        opEnd: 628,
        opEpisodesRaw: "Ep. 624-626,628",
        lengthMinutes: 24.6
      },
      {
        arc: "Dressrosa",
        paceEpisode: "Dressrosa 01",
        chapters: [
          {
            from: "Ch.700",
            to: "701"
          }
        ],
        chaptersRaw: "Ch. 700-701",
        opStart: 628,
        opEnd: 631,
        opEpisodesRaw: "Ep. 628-631",
        lengthMinutes: 29.8
      },
      {
        arc: "Dressrosa",
        paceEpisode: "Dressrosa 02",
        chapters: [
          {
            from: "Ch.702",
            to: "703"
          }
        ],
        chaptersRaw: "Ch. 702-703",
        opStart: 631,
        opEnd: 633,
        opEpisodesRaw: "Ep. 631-633",
        lengthMinutes: 21.8
      },
      {
        arc: "Dressrosa",
        paceEpisode: "Dressrosa 03",
        chapters: [
          {
            from: "Ch.704",
            to: "705"
          }
        ],
        chaptersRaw: "Ch. 704-705",
        opStart: 633,
        opEnd: 635,
        opEpisodesRaw: "Ep. 633-635",
        lengthMinutes: 27
      },
      {
        arc: "Dressrosa",
        paceEpisode: "Dressrosa 04",
        chapters: [
          {
            from: "Ch.706",
            to: "707"
          }
        ],
        chaptersRaw: "Ch. 706-707",
        opStart: 634,
        opEnd: 637,
        opEpisodesRaw: "Ep. 634-637",
        lengthMinutes: 18.1
      },
      {
        arc: "Dressrosa",
        paceEpisode: "Dressrosa 05",
        chapters: [
          {
            from: "Ch.708",
            to: "709"
          }
        ],
        chaptersRaw: "Ch. 708-709",
        opStart: 637,
        opEnd: 638,
        opEpisodesRaw: "Ep. 637-638",
        lengthMinutes: 21.2
      },
      {
        arc: "Dressrosa",
        paceEpisode: "Dressrosa 06",
        chapters: [
          {
            from: "Ch.710",
            to: "711"
          }
        ],
        chaptersRaw: "Ch. 710-711",
        opStart: 639,
        opEnd: 642,
        opEpisodesRaw: "Ep. 639-642",
        lengthMinutes: 26.4
      },
      {
        arc: "Dressrosa",
        paceEpisode: "Dressrosa 07",
        chapters: [
          {
            from: "Ch.712",
            to: "713"
          }
        ],
        chaptersRaw: "Ch. 712-713",
        opStart: 640,
        opEnd: 643,
        opEpisodesRaw: "Ep. 640-643",
        lengthMinutes: 27.6
      },
      {
        arc: "Dressrosa",
        paceEpisode: "Dressrosa 08",
        chapters: [
          {
            from: "Ch.714",
            to: "715"
          }
        ],
        chaptersRaw: "Ch. 714-715",
        opStart: 643,
        opEnd: 645,
        opEpisodesRaw: "Ep. 643-645",
        lengthMinutes: 20.9
      },
      {
        arc: "Dressrosa",
        paceEpisode: "Dressrosa 09",
        chapters: [
          {
            from: "Ch.716",
            to: "717"
          }
        ],
        chaptersRaw: "Ch. 716-717",
        opStart: 646,
        opEnd: 647,
        opEpisodesRaw: "Ep. 646-647",
        lengthMinutes: 21.8
      },
      {
        arc: "Dressrosa",
        paceEpisode: "Dressrosa 10",
        chapters: [
          {
            from: "Ch.718",
            to: "719"
          }
        ],
        chaptersRaw: "Ch. 718-719",
        opStart: 648,
        opEnd: 649,
        opEpisodesRaw: "Ep. 648-649",
        lengthMinutes: 21.5
      },
      {
        arc: "Dressrosa",
        paceEpisode: "Dressrosa 11",
        chapters: [
          {
            from: "Ch.720",
            to: "721"
          }
        ],
        chaptersRaw: "Ch. 720-721",
        opStart: 650,
        opEnd: 651,
        opEpisodesRaw: "Ep. 650-651",
        lengthMinutes: 30.6
      },
      {
        arc: "Dressrosa",
        paceEpisode: "Dressrosa 12",
        chapters: [
          {
            from: "Ch.722",
            to: "723"
          }
        ],
        chaptersRaw: "Ch. 722-723",
        opStart: 652,
        opEnd: 654,
        opEpisodesRaw: "Ep. 652-654",
        lengthMinutes: 27.1
      },
      {
        arc: "Dressrosa",
        paceEpisode: "Dressrosa 13",
        chapters: [
          {
            from: "Ch.724",
            to: "725"
          }
        ],
        chaptersRaw: "Ch. 724-725",
        opStart: 655,
        opEnd: 657,
        opEpisodesRaw: "Ep. 655-657",
        lengthMinutes: 22.4
      },
      {
        arc: "Dressrosa",
        paceEpisode: "Dressrosa 14",
        chapters: [
          {
            from: "Ch.726",
            to: "727"
          }
        ],
        chaptersRaw: "Ch. 726-727",
        opStart: 648,
        opEnd: 659,
        opEpisodesRaw: "Ep. 648,657-659",
        lengthMinutes: 29.1
      },
      {
        arc: "Dressrosa",
        paceEpisode: "Dressrosa 15",
        chapters: [
          {
            from: "Ch.728",
            to: "729"
          }
        ],
        chaptersRaw: "Ch. 728-729",
        opStart: 660,
        opEnd: 661,
        opEpisodesRaw: "Ep. 660-661",
        lengthMinutes: 23.9
      },
      {
        arc: "Dressrosa",
        paceEpisode: "Dressrosa 16",
        chapters: [
          {
            from: "Ch.730",
            to: "731"
          }
        ],
        chaptersRaw: "Ch. 730-731",
        opStart: 657,
        opEnd: 663,
        opEpisodesRaw: "Ep. 657,662-663",
        lengthMinutes: 26.2
      },
      {
        arc: "Dressrosa",
        paceEpisode: "Dressrosa 17",
        chapters: [
          {
            from: "Ch.732",
            to: "733"
          }
        ],
        chaptersRaw: "Ch. 732-733",
        opStart: 664,
        opEnd: 665,
        opEpisodesRaw: "Ep. 664-665",
        lengthMinutes: 21.7
      },
      {
        arc: "Dressrosa",
        paceEpisode: "Dressrosa 18",
        chapters: [
          {
            from: "Ch.734",
            to: "735"
          }
        ],
        chaptersRaw: "Ch. 734-735",
        opStart: 666,
        opEnd: 667,
        opEpisodesRaw: "Ep. 666-667",
        lengthMinutes: 25
      },
      {
        arc: "Dressrosa",
        paceEpisode: "Dressrosa 19",
        chapters: [
          {
            from: "Ch.736",
            to: "737"
          }
        ],
        chaptersRaw: "Ch. 736-737",
        opStart: 668,
        opEnd: 670,
        opEpisodesRaw: "Ep. 668-670",
        lengthMinutes: 20.3
      },
      {
        arc: "Dressrosa",
        paceEpisode: "Dressrosa 20",
        chapters: [
          {
            from: "Ch.738",
            to: "739"
          }
        ],
        chaptersRaw: "Ch. 738-739",
        opStart: 670,
        opEnd: 672,
        opEpisodesRaw: "Ep. 670-672",
        lengthMinutes: 24.7
      },
      {
        arc: "Dressrosa",
        paceEpisode: "Dressrosa 21",
        chapters: [
          {
            from: "Ch.740",
            to: "741"
          }
        ],
        chaptersRaw: "Ch. 740-741",
        opStart: 672,
        opEnd: 675,
        opEpisodesRaw: "Ep. 672-675",
        lengthMinutes: 26.9
      },
      {
        arc: "Dressrosa",
        paceEpisode: "Dressrosa 22",
        chapters: [
          {
            from: "Ch.742",
            to: "743"
          }
        ],
        chaptersRaw: "Ch. 742-743",
        opStart: 675,
        opEnd: 678,
        opEpisodesRaw: "Ep. 675-678",
        lengthMinutes: 28.8
      },
      {
        arc: "Dressrosa",
        paceEpisode: "Dressrosa 23",
        chapters: [
          {
            from: "Ch.744",
            to: "745"
          }
        ],
        chaptersRaw: "Ch. 744-745",
        opStart: 678,
        opEnd: 680,
        opEpisodesRaw: "Ep. 678-680",
        lengthMinutes: 27.9
      },
      {
        arc: "Dressrosa",
        paceEpisode: "Dressrosa 24",
        chapters: [
          {
            from: "Ch.746",
            to: "747"
          }
        ],
        chaptersRaw: "Ch. 746-747",
        opStart: 681,
        opEnd: 683,
        opEpisodesRaw: "Ep. 681-683",
        lengthMinutes: 27.6
      },
      {
        arc: "Dressrosa",
        paceEpisode: "Dressrosa 25",
        chapters: [
          {
            from: "Ch.748",
            to: "749"
          }
        ],
        chaptersRaw: "Ch. 748-749",
        opStart: 683,
        opEnd: 686,
        opEpisodesRaw: "Ep. 683-686",
        lengthMinutes: 21.9
      },
      {
        arc: "Dressrosa",
        paceEpisode: "Dressrosa 26",
        chapters: [
          {
            from: "Ch.750",
            to: "751"
          }
        ],
        chaptersRaw: "Ch. 750-751",
        opStart: 685,
        opEnd: 688,
        opEpisodesRaw: "Ep. 685-688",
        lengthMinutes: 24.9
      },
      {
        arc: "Dressrosa",
        paceEpisode: "Dressrosa 27",
        chapters: [
          {
            from: "Ch.752",
            to: "753"
          }
        ],
        chaptersRaw: "Ch. 752-753",
        opStart: 688,
        opEnd: 691,
        opEpisodesRaw: "Ep. 688-691",
        lengthMinutes: 25.2
      },
      {
        arc: "Dressrosa",
        paceEpisode: "Dressrosa 28",
        chapters: [
          {
            from: "Ch.754",
            to: "755"
          }
        ],
        chaptersRaw: "Ch. 754-755",
        opStart: 691,
        opEnd: 693,
        opEpisodesRaw: "Ep. 691-693",
        lengthMinutes: 25.7
      },
      {
        arc: "Dressrosa",
        paceEpisode: "Dressrosa 29",
        chapters: [
          {
            from: "Ch.756",
            to: "757"
          }
        ],
        chaptersRaw: "Ch. 756-757",
        opStart: 693,
        opEnd: 696,
        opEpisodesRaw: "Ep. 693-696",
        lengthMinutes: 25.7
      },
      {
        arc: "Dressrosa",
        paceEpisode: "Dressrosa 30",
        chapters: [
          {
            from: "Ch.758",
            to: "759"
          }
        ],
        chaptersRaw: "Ch. 758-759",
        opStart: 694,
        opEnd: 698,
        opEpisodesRaw: "Ep. 694,696-698",
        lengthMinutes: 22.7
      },
      {
        arc: "Dressrosa",
        paceEpisode: "Dressrosa 31",
        chapters: [
          {
            from: "Ch.760",
            to: "761"
          }
        ],
        chaptersRaw: "Ch. 760-761",
        opStart: 699,
        opEnd: 700,
        opEpisodesRaw: "Ep. 699-700",
        lengthMinutes: 21.4
      },
      {
        arc: "Dressrosa",
        paceEpisode: "Dressrosa 32",
        chapters: [
          {
            from: "Ch.762",
            to: "763"
          }
        ],
        chaptersRaw: "Ch. 762-763",
        opStart: 701,
        opEnd: 702,
        opEpisodesRaw: "Ep. 701-702",
        lengthMinutes: 28.6
      },
      {
        arc: "Dressrosa",
        paceEpisode: "Dressrosa 33",
        chapters: [
          {
            from: "Ch.764",
            to: "765"
          }
        ],
        chaptersRaw: "Ch. 764-765",
        opStart: 703,
        opEnd: 704,
        opEpisodesRaw: "Ep. 703-704",
        lengthMinutes: 29.6
      },
      {
        arc: "Dressrosa",
        paceEpisode: "Dressrosa 34",
        chapters: [
          {
            from: "Ch.766",
            to: "767"
          }
        ],
        chaptersRaw: "Ch. 766-767",
        opStart: 705,
        opEnd: 706,
        opEpisodesRaw: "Ep. 705-706",
        lengthMinutes: 29
      },
      {
        arc: "Dressrosa",
        paceEpisode: "Dressrosa 35",
        chapters: [
          {
            from: "Ch.768",
            to: "769"
          }
        ],
        chaptersRaw: "Ch. 768-769",
        opStart: 707,
        opEnd: 711,
        opEpisodesRaw: "Ep. 707-711",
        lengthMinutes: 24
      },
      {
        arc: "Dressrosa",
        paceEpisode: "Dressrosa 36",
        chapters: [
          {
            from: "Ch.770",
            to: "771"
          }
        ],
        chaptersRaw: "Ch. 770-771",
        opStart: 708,
        opEnd: 711,
        opEpisodesRaw: "Ep. 708-711",
        lengthMinutes: 26.3
      },
      {
        arc: "Dressrosa",
        paceEpisode: "Dressrosa 37",
        chapters: [
          {
            from: "Ch.772",
            to: "773"
          }
        ],
        chaptersRaw: "Ch. 772-773",
        opStart: 711,
        opEnd: 713,
        opEpisodesRaw: "Ep. 711-713",
        lengthMinutes: 28.3
      },
      {
        arc: "Dressrosa",
        paceEpisode: "Dressrosa 38",
        chapters: [
          {
            from: "Ch.774",
            to: "775"
          }
        ],
        chaptersRaw: "Ch. 774-775",
        opStart: 714,
        opEnd: 716,
        opEpisodesRaw: "Ep. 714-716",
        lengthMinutes: 29.3
      },
      {
        arc: "Dressrosa",
        paceEpisode: "Dressrosa 39",
        chapters: [
          {
            from: "Ch.776",
            to: "778"
          }
        ],
        chaptersRaw: "Ch. 776-778",
        opStart: 716,
        opEnd: 719,
        opEpisodesRaw: "Ep. 716-719",
        lengthMinutes: 42.7
      },
      {
        arc: "Dressrosa",
        paceEpisode: "Dressrosa 40",
        chapters: [
          {
            from: "Ch.779",
            to: "781"
          }
        ],
        chaptersRaw: "Ch. 779-781",
        opStart: 714,
        opEnd: 723,
        opEpisodesRaw: "Ep. 714-715,720-723",
        lengthMinutes: 41.1
      },
      {
        arc: "Dressrosa",
        paceEpisode: "Dressrosa 41",
        chapters: [
          {
            from: "Ch.782",
            to: "783"
          }
        ],
        chaptersRaw: "Ch. 782-783",
        opStart: 723,
        opEnd: 725,
        opEpisodesRaw: "Ep. 723-725",
        lengthMinutes: 28.9
      },
      {
        arc: "Dressrosa",
        paceEpisode: "Dressrosa 42",
        chapters: [
          {
            from: "Ch.784",
            to: "785"
          }
        ],
        chaptersRaw: "Ch. 784-785",
        opStart: 726,
        opEnd: 728,
        opEpisodesRaw: "Ep. 726-728",
        lengthMinutes: 28.6
      },
      {
        arc: "Dressrosa",
        paceEpisode: "Dressrosa 43",
        chapters: [
          {
            from: "Ch.786",
            to: "787"
          }
        ],
        chaptersRaw: "Ch. 786-787",
        opStart: 728,
        opEnd: 730,
        opEpisodesRaw: "Ep. 728-730",
        lengthMinutes: 28.2
      },
      {
        arc: "Dressrosa",
        paceEpisode: "Dressrosa 44",
        chapters: [
          {
            from: "Ch.788",
            to: "790"
          }
        ],
        chaptersRaw: "Ch. 788-790",
        opStart: 730,
        opEnd: 733,
        opEpisodesRaw: "Ep. 730-733",
        lengthMinutes: 39.1
      },
      {
        arc: "Dressrosa",
        paceEpisode: "Dressrosa 45",
        chapters: [
          {
            from: "Ch.791",
            to: "793"
          }
        ],
        chaptersRaw: "Ch. 791-793",
        opStart: 734,
        opEnd: 736,
        opEpisodesRaw: "Ep. 734-736",
        lengthMinutes: 40.4
      },
      {
        arc: "Dressrosa",
        paceEpisode: "Dressrosa 46",
        chapters: [
          {
            from: "Ch.794",
            to: "795"
          }
        ],
        chaptersRaw: "Ch. 794-795",
        opStart: 737,
        opEnd: 739,
        opEpisodesRaw: "Ep. 737-739",
        lengthMinutes: 36.1
      },
      {
        arc: "Dressrosa",
        paceEpisode: "Dressrosa 47",
        chapters: [
          {
            from: "Ch.796",
            to: "797"
          }
        ],
        chaptersRaw: "Ch. 796-797",
        opStart: 740,
        opEnd: 742,
        opEpisodesRaw: "Ep. 740-742",
        lengthMinutes: 37
      },
      {
        arc: "Dressrosa",
        paceEpisode: "Dressrosa 48",
        chapters: [
          {
            from: "Ch.798",
            to: "800"
          }
        ],
        chaptersRaw: "Ch. 798-800",
        opStart: 742,
        opEnd: 745,
        opEpisodesRaw: "Ep. 742-745",
        lengthMinutes: 42.9
      },
      {
        arc: "Zou",
        paceEpisode: "Zou 01",
        chapters: [
          {
            from: "Ch.801",
            to: "803"
          }
        ],
        chaptersRaw: "Ch. 801-803",
        opStart: 746,
        opEnd: 753,
        opEpisodesRaw: "Ep. 746-747,751-753",
        lengthMinutes: 38.1
      },
      {
        arc: "Zou",
        paceEpisode: "Zou 02",
        chapters: [
          {
            from: "Ch.804",
            to: "805"
          }
        ],
        chaptersRaw: "Ch. 804-805",
        opStart: 753,
        opEnd: 754,
        opEpisodesRaw: "Ep. 753-754",
        lengthMinutes: 20.6
      },
      {
        arc: "Zou",
        paceEpisode: "Zou 03",
        chapters: [
          {
            from: "Ch.806",
            to: "807"
          }
        ],
        chaptersRaw: "Ch. 806-807",
        opStart: 755,
        opEnd: 757,
        opEpisodesRaw: "Ep. 755-757",
        lengthMinutes: 26.7
      },
      {
        arc: "Zou",
        paceEpisode: "Zou 04",
        chapters: [
          {
            from: "Ch.808",
            to: "809"
          }
        ],
        chaptersRaw: "Ch. 808-809",
        opStart: 757,
        opEnd: 760,
        opEpisodesRaw: "Ep. 757-760",
        lengthMinutes: 24.6
      },
      {
        arc: "Zou",
        paceEpisode: "Zou 05",
        chapters: [
          {
            from: "Ch.810",
            to: "811"
          }
        ],
        chaptersRaw: "Ch. 810-811",
        opStart: 759,
        opEnd: 762,
        opEpisodesRaw: "Ep. 759-762",
        lengthMinutes: 24.1
      },
      {
        arc: "Zou",
        paceEpisode: "Zou 06",
        chapters: [
          {
            from: "Ch.812",
            to: "813"
          }
        ],
        chaptersRaw: "Ch. 812-813",
        opStart: 762,
        opEnd: 764,
        opEpisodesRaw: "Ep. 762-764",
        lengthMinutes: 29.6
      },
      {
        arc: "Zou",
        paceEpisode: "Zou 07",
        chapters: [
          {
            from: "Ch.814",
            to: "815"
          }
        ],
        chaptersRaw: "Ch. 814-815",
        opStart: 764,
        opEnd: 766,
        opEpisodesRaw: "Ep. 764-766",
        lengthMinutes: 30.8
      },
      {
        arc: "Zou",
        paceEpisode: "Zou 08",
        chapters: [
          {
            from: "Ch.816",
            to: "817"
          }
        ],
        chaptersRaw: "Ch. 816-817",
        opStart: 767,
        opEnd: 769,
        opEpisodesRaw: "Ep. 767-769",
        lengthMinutes: 29.2
      },
      {
        arc: "Zou",
        paceEpisode: "Zou 09",
        chapters: [
          {
            from: "Ch.818",
            to: "819"
          }
        ],
        chaptersRaw: "Ch. 818-819",
        opStart: 769,
        opEnd: 772,
        opEpisodesRaw: "Ep. 769-772",
        lengthMinutes: 32.2
      },
      {
        arc: "Zou",
        paceEpisode: "Zou 10",
        chapters: [
          {
            from: "Ch.820",
            to: "822"
          }
        ],
        chaptersRaw: "Ch. 820-822",
        opStart: 772,
        opEnd: 776,
        opEpisodesRaw: "Ep. 772-774,776",
        lengthMinutes: 44.6
      },
      {
        arc: "Whole Cake Island",
        paceEpisode: "Whole Cake Island 01",
        chapters: [
          {
            from: "Ch.823",
            to: "824"
          }
        ],
        chaptersRaw: "Ch. 823-824",
        opStart: 777,
        opEnd: 783,
        opEpisodesRaw: "Ep. 777-779,783",
        lengthMinutes: 31.1
      },
      {
        arc: "Whole Cake Island",
        paceEpisode: "Whole Cake Island 02",
        chapters: [
          {
            from: "Ch.825",
            to: "826"
          }
        ],
        chaptersRaw: "Ch. 825-826",
        opStart: 783,
        opEnd: 785,
        opEpisodesRaw: "Ep. 783-785",
        lengthMinutes: 33.1
      },
      {
        arc: "Whole Cake Island",
        paceEpisode: "Whole Cake Island 03",
        chapters: [
          {
            from: "Ch.827",
            to: "828"
          }
        ],
        chaptersRaw: "Ch. 827-828",
        opStart: 785,
        opEnd: 788,
        opEpisodesRaw: "Ep. 785-788",
        lengthMinutes: 31.9
      },
      {
        arc: "Whole Cake Island",
        paceEpisode: "Whole Cake Island 04",
        chapters: [
          {
            from: "Ch.829",
            to: "830"
          }
        ],
        chaptersRaw: "Ch. 829-830",
        opStart: 788,
        opEnd: 790,
        opEpisodesRaw: "Ep. 788-790",
        lengthMinutes: 31.3
      },
      {
        arc: "Whole Cake Island",
        paceEpisode: "Whole Cake Island 05",
        chapters: [
          {
            from: "Ch.831",
            to: "832"
          }
        ],
        chaptersRaw: "Ch. 831-832",
        opStart: 791,
        opEnd: 793,
        opEpisodesRaw: "Ep. 791-793",
        lengthMinutes: 32.2
      },
      {
        arc: "Whole Cake Island",
        paceEpisode: "Whole Cake Island 06",
        chapters: [
          {
            from: "Ch.833",
            to: "834"
          }
        ],
        chaptersRaw: "Ch. 833-834",
        opStart: 793,
        opEnd: 795,
        opEpisodesRaw: "Ep. 793-795",
        lengthMinutes: 32.3
      },
      {
        arc: "Whole Cake Island",
        paceEpisode: "Whole Cake Island 07",
        chapters: [
          {
            from: "Ch.835",
            to: "836"
          }
        ],
        chaptersRaw: "Ch. 835-836",
        opStart: 796,
        opEnd: 798,
        opEpisodesRaw: "Ep. 796-798",
        lengthMinutes: 31.2
      },
      {
        arc: "Whole Cake Island",
        paceEpisode: "Whole Cake Island 08",
        chapters: [
          {
            from: "Ch.837",
            to: "838"
          }
        ],
        chaptersRaw: "Ch. 837-838",
        opStart: 798,
        opEnd: 800,
        opEpisodesRaw: "Ep. 798-800",
        lengthMinutes: 26.3
      },
      {
        arc: "Whole Cake Island",
        paceEpisode: "Whole Cake Island 09",
        chapters: [
          {
            from: "Ch.839",
            to: "840"
          }
        ],
        chaptersRaw: "Ch. 839-840",
        opStart: 800,
        opEnd: 807,
        opEpisodesRaw: "Ep. 800-803,807",
        lengthMinutes: 32.1
      },
      {
        arc: "Whole Cake Island",
        paceEpisode: "Whole Cake Island 10",
        chapters: [
          {
            from: "Ch.841",
            to: "842"
          }
        ],
        chaptersRaw: "Ch. 841-842",
        opStart: 804,
        opEnd: 806,
        opEpisodesRaw: "Ep. 804-806",
        lengthMinutes: 35.8
      },
      {
        arc: "Whole Cake Island",
        paceEpisode: "Whole Cake Island 11",
        chapters: [
          {
            from: "Ch.843",
            to: "844"
          }
        ],
        chaptersRaw: "Ch. 843-844",
        opStart: 806,
        opEnd: 808,
        opEpisodesRaw: "Ep. 806-808",
        lengthMinutes: 26.3
      },
      {
        arc: "Whole Cake Island",
        paceEpisode: "Whole Cake Island 12",
        chapters: [
          {
            from: "Ch.845",
            to: "846"
          }
        ],
        chaptersRaw: "Ch. 845-846",
        opStart: 809,
        opEnd: 812,
        opEpisodesRaw: "Ep. 809-812",
        lengthMinutes: 34.3
      },
      {
        arc: "Whole Cake Island",
        paceEpisode: "Whole Cake Island 13",
        chapters: [
          {
            from: "Ch.847",
            to: "848"
          }
        ],
        chaptersRaw: "Ch. 847-848",
        opStart: 812,
        opEnd: 815,
        opEpisodesRaw: "Ep. 812-815",
        lengthMinutes: 32.4
      },
      {
        arc: "Whole Cake Island",
        paceEpisode: "Whole Cake Island 14",
        chapters: [
          {
            from: "Ch.849",
            to: "850"
          }
        ],
        chaptersRaw: "Ch. 849-850",
        opStart: 814,
        opEnd: 817,
        opEpisodesRaw: "Ep. 814-817",
        lengthMinutes: 34.8
      },
      {
        arc: "Whole Cake Island",
        paceEpisode: "Whole Cake Island 15",
        chapters: [
          {
            from: "Ch.851",
            to: "852"
          }
        ],
        chaptersRaw: "Ch. 851-852",
        opStart: 817,
        opEnd: 820,
        opEpisodesRaw: "Ep. 817-820",
        lengthMinutes: 35.9
      },
      {
        arc: "Whole Cake Island",
        paceEpisode: "Whole Cake Island 16",
        chapters: [
          {
            from: "Ch.853",
            to: "854"
          }
        ],
        chaptersRaw: "Ch. 853-854",
        opStart: 820,
        opEnd: 822,
        opEpisodesRaw: "Ep. 820-822",
        lengthMinutes: 29.3
      },
      {
        arc: "Whole Cake Island",
        paceEpisode: "Whole Cake Island 17",
        chapters: [
          {
            from: "Ch.855",
            to: "856"
          }
        ],
        chaptersRaw: "Ch. 855-856",
        opStart: 823,
        opEnd: 825,
        opEpisodesRaw: "Ep. 823-825",
        lengthMinutes: 33.8
      },
      {
        arc: "Whole Cake Island",
        paceEpisode: "Whole Cake Island 18",
        chapters: [
          {
            from: "Ch.857",
            to: "858"
          }
        ],
        chaptersRaw: "Ch. 857-858",
        opStart: 826,
        opEnd: 828,
        opEpisodesRaw: "Ep. 826-828",
        lengthMinutes: 36.2
      },
      {
        arc: "Whole Cake Island",
        paceEpisode: "Whole Cake Island 19",
        chapters: [
          {
            from: "Ch.859",
            to: "860"
          }
        ],
        chaptersRaw: "Ch. 859-860",
        opStart: 828,
        opEnd: 830,
        opEpisodesRaw: "Ep. 828-830",
        lengthMinutes: 33.5
      },
      {
        arc: "Whole Cake Island",
        paceEpisode: "Whole Cake Island 20",
        chapters: [
          {
            from: "Ch.861",
            to: "862"
          }
        ],
        chaptersRaw: "Ch. 861-862",
        opStart: 831,
        opEnd: 832,
        opEpisodesRaw: "Ep. 831-832",
        lengthMinutes: 29.5
      },
      {
        arc: "Whole Cake Island",
        paceEpisode: "Whole Cake Island 21",
        chapters: [
          {
            from: "Ch.863",
            to: "864"
          }
        ],
        chaptersRaw: "Ch. 863-864",
        opStart: 831,
        opEnd: 834,
        opEpisodesRaw: "Ep. 831,833-834",
        lengthMinutes: 35.6
      },
      {
        arc: "Whole Cake Island",
        paceEpisode: "Whole Cake Island 22",
        chapters: [
          {
            from: "Ch.865",
            to: "866"
          }
        ],
        chaptersRaw: "Ch. 865-866",
        opStart: 835,
        opEnd: 836,
        opEpisodesRaw: "Ep. 835-836",
        lengthMinutes: 28.2
      },
      {
        arc: "Whole Cake Island",
        paceEpisode: "Whole Cake Island 23",
        chapters: [
          {
            from: "Ch.867",
            to: "868"
          }
        ],
        chaptersRaw: "Ch. 867-868",
        opStart: 837,
        opEnd: 839,
        opEpisodesRaw: "Ep. 837-839",
        lengthMinutes: 34
      },
      {
        arc: "Whole Cake Island",
        paceEpisode: "Whole Cake Island 24",
        chapters: [
          {
            from: "Ch.869",
            to: "870"
          }
        ],
        chaptersRaw: "Ch. 869-870",
        opStart: 839,
        opEnd: 841,
        opEpisodesRaw: "Ep. 839-841",
        lengthMinutes: 28.7
      },
      {
        arc: "Whole Cake Island",
        paceEpisode: "Whole Cake Island 25",
        chapters: [
          {
            from: "Ch.870",
            to: "872"
          }
        ],
        chaptersRaw: "Ch. 870-872",
        opStart: 841,
        opEnd: 843,
        opEpisodesRaw: "Ep. 841-843",
        lengthMinutes: 35.7
      },
      {
        arc: "Whole Cake Island",
        paceEpisode: "Whole Cake Island 26",
        chapters: [
          {
            from: "Ch.873",
            to: "874"
          }
        ],
        chaptersRaw: "Ch. 873-874",
        opStart: 843,
        opEnd: 846,
        opEpisodesRaw: "Ep. 843-846",
        lengthMinutes: 34.2
      },
      {
        arc: "Whole Cake Island",
        paceEpisode: "Whole Cake Island 27",
        chapters: [
          {
            from: "Ch.875",
            to: "876"
          }
        ],
        chaptersRaw: "Ch. 875-876",
        opStart: 846,
        opEnd: 848,
        opEpisodesRaw: "Ep. 846-848",
        lengthMinutes: 33.2
      },
      {
        arc: "Whole Cake Island",
        paceEpisode: "Whole Cake Island 28",
        chapters: [
          {
            from: "Ch.877",
            to: "878"
          }
        ],
        chaptersRaw: "Ch. 877-878",
        opStart: 848,
        opEnd: 850,
        opEpisodesRaw: "Ep. 848-850",
        lengthMinutes: 32.2
      },
      {
        arc: "Whole Cake Island",
        paceEpisode: "Whole Cake Island 29",
        chapters: [
          {
            from: "Ch.879",
            to: "880"
          }
        ],
        chaptersRaw: "Ch. 879-880",
        opStart: 851,
        opEnd: 853,
        opEpisodesRaw: "Ep. 851-853",
        lengthMinutes: 30.4
      },
      {
        arc: "Whole Cake Island",
        paceEpisode: "Whole Cake Island 30",
        chapters: [
          {
            from: "Ch.881",
            to: "883"
          }
        ],
        chaptersRaw: "Ch. 881-883",
        opStart: 853,
        opEnd: 858,
        opEpisodesRaw: "Ep. 853-855,858",
        lengthMinutes: 33.4
      },
      {
        arc: "Whole Cake Island",
        paceEpisode: "Whole Cake Island 31",
        chapters: [
          {
            from: "Ch.883",
            to: "884"
          }
        ],
        chaptersRaw: "Ch. 883-884",
        opStart: 856,
        opEnd: 858,
        opEpisodesRaw: "Ep. 856-858",
        lengthMinutes: 31.1
      },
      {
        arc: "Whole Cake Island",
        paceEpisode: "Whole Cake Island 32",
        chapters: [
          {
            from: "Ch.885",
            to: "886"
          }
        ],
        chaptersRaw: "Ch. 885-886",
        opStart: 858,
        opEnd: 860,
        opEpisodesRaw: "Ep. 858-860",
        lengthMinutes: 32.2
      },
      {
        arc: "Whole Cake Island",
        paceEpisode: "Whole Cake Island 33",
        chapters: [
          {
            from: "Ch.887",
            to: "888"
          }
        ],
        chaptersRaw: "Ch. 887-888",
        opStart: 860,
        opEnd: 862,
        opEpisodesRaw: "Ep. 860-862",
        lengthMinutes: 30.9
      },
      {
        arc: "Whole Cake Island",
        paceEpisode: "Whole Cake Island 34",
        chapters: [
          {
            from: "Ch.889",
            to: "891"
          }
        ],
        chaptersRaw: "Ch. 889-891",
        opStart: 862,
        opEnd: 865,
        opEpisodesRaw: "Ep. 862-865",
        lengthMinutes: 37.8
      },
      {
        arc: "Whole Cake Island",
        paceEpisode: "Whole Cake Island 35",
        chapters: [
          {
            from: "Ch.891",
            to: "893"
          }
        ],
        chaptersRaw: "Ch. 891-893",
        opStart: 865,
        opEnd: 868,
        opEpisodesRaw: "Ep. 865-868",
        lengthMinutes: 36.3
      },
      {
        arc: "Whole Cake Island",
        paceEpisode: "Whole Cake Island 36",
        chapters: [
          {
            from: "Ch.892",
            to: "895"
          }
        ],
        chaptersRaw: "Ch. 892-895",
        opStart: 865,
        opEnd: 870,
        opEpisodesRaw: "Ep. 865,867-870",
        lengthMinutes: 33.8
      },
      {
        arc: "Whole Cake Island",
        paceEpisode: "Whole Cake Island 37",
        chapters: [
          {
            from: "Ch.896",
            to: "897"
          }
        ],
        chaptersRaw: "Ch. 896-897",
        opStart: 871,
        opEnd: 872,
        opEpisodesRaw: "Ep. 871-872",
        lengthMinutes: 28.9
      },
      {
        arc: "Whole Cake Island",
        paceEpisode: "Whole Cake Island 38",
        chapters: [
          {
            from: "Ch.898",
            to: "900"
          }
        ],
        chaptersRaw: "Ch. 898-900",
        opStart: 873,
        opEnd: 875,
        opEpisodesRaw: "Ep. 873-875",
        lengthMinutes: 41.5
      },
      {
        arc: "Whole Cake Island",
        paceEpisode: "Whole Cake Island 39",
        chapters: [
          {
            from: "Ch.901",
            to: "902"
          }
        ],
        chaptersRaw: "Ch. 901-902",
        opStart: 876,
        opEnd: 877,
        opEpisodesRaw: "Ep. 876-877",
        lengthMinutes: 34.5
      },
      {
        arc: "Reverie",
        paceEpisode: "Reverie 01",
        chapters: [
          {
            from: "Ch.903",
            to: "904"
          }
        ],
        chaptersRaw: "Ch. 903-904",
        opStart: 878,
        opEnd: 880,
        opEpisodesRaw: "Ep. 878-880",
        lengthMinutes: 33.5
      },
      {
        arc: "Reverie",
        paceEpisode: "Reverie 02",
        chapters: [
          {
            from: "Ch.905",
            to: "906"
          }
        ],
        chaptersRaw: "Ch. 905-906",
        opStart: 881,
        opEnd: 885,
        opEpisodesRaw: "Ep. 881-885",
        lengthMinutes: 35.1
      },
      {
        arc: "Reverie",
        paceEpisode: "Reverie 03",
        chapters: [
          {
            from: "Ch.907",
            to: "908"
          }
        ],
        chaptersRaw: "Ch. 907-908",
        opStart: 886,
        opEnd: 889,
        opEpisodesRaw: "Ep. 886-889",
        lengthMinutes: 28.6
      },
      {
        arc: "Wano",
        paceEpisode: "Wano 01",
        chapters: [
          {
            from: "Ch.909",
            to: "910"
          }
        ],
        chaptersRaw: "Ch. 909-910",
        opStart: 890,
        opEnd: 891,
        opEpisodesRaw: "Ep. 890-891",
        lengthMinutes: 22.8
      },
      {
        arc: "Wano",
        paceEpisode: "Wano 02",
        chapters: [
          {
            from: "Ch.909",
            to: "911"
          }
        ],
        chaptersRaw: "Ch. 909-911",
        opStart: 892,
        opEnd: 894,
        opEpisodesRaw: "Ep. 892-894",
        lengthMinutes: 29.1
      },
      {
        arc: "Wano",
        paceEpisode: "Wano 03",
        chapters: [
          {
            from: "Ch.911",
            to: "912"
          }
        ],
        chaptersRaw: "Ch. 911-912",
        opStart: 894,
        opEnd: 897,
        opEpisodesRaw: "Ep. 894,897",
        lengthMinutes: 34
      },
      {
        arc: "Wano",
        paceEpisode: "Wano 04",
        chapters: [
          {
            from: "Ch.913",
            to: "Ch.913"
          }
        ],
        chaptersRaw: "Ch. 913",
        opStart: 898,
        opEnd: 899,
        opEpisodesRaw: "Ep. 898-899",
        lengthMinutes: 20.4
      },
      {
        arc: "Wano",
        paceEpisode: "Wano 05",
        chapters: [
          {
            from: "Ch.914",
            to: "915"
          }
        ],
        chaptersRaw: "Ch. 914-915",
        opStart: 900,
        opEnd: 902,
        opEpisodesRaw: "Ep. 900-902",
        lengthMinutes: 33
      },
      {
        arc: "Wano",
        paceEpisode: "Wano 06",
        chapters: [
          {
            from: "Ch.915",
            to: "916"
          }
        ],
        chaptersRaw: "Ch. 915-916",
        opStart: 902,
        opEnd: 903,
        opEpisodesRaw: "Ep. 902-903",
        lengthMinutes: 25.8
      },
      {
        arc: "Wano",
        paceEpisode: "Wano 07",
        chapters: [
          {
            from: "Ch.916",
            to: "917"
          }
        ],
        chaptersRaw: "Ch. 916-917",
        opStart: 904,
        opEnd: 905,
        opEpisodesRaw: "Ep. 904-905",
        lengthMinutes: 31.3
      },
      {
        arc: "Wano",
        paceEpisode: "Wano 08",
        chapters: [
          {
            from: "Ch.918",
            to: "919"
          }
        ],
        chaptersRaw: "Ch. 918-919",
        opStart: 906,
        opEnd: 909,
        opEpisodesRaw: "Ep. 906,908-909",
        lengthMinutes: 38.8
      },
      {
        arc: "Wano",
        paceEpisode: "Wano 09",
        chapters: [
          {
            from: "Ch.919",
            to: "920"
          }
        ],
        chaptersRaw: "Ch. 919-920",
        opStart: 909,
        opEnd: 911,
        opEpisodesRaw: "Ep. 909-911",
        lengthMinutes: 30.9
      },
      {
        arc: "Wano",
        paceEpisode: "Wano 10",
        chapters: [
          {
            from: "Ch.921",
            to: "922"
          }
        ],
        chaptersRaw: "Ch. 921-922",
        opStart: 911,
        opEnd: 913,
        opEpisodesRaw: "Ep. 911-913",
        lengthMinutes: 37
      },
      {
        arc: "Wano",
        paceEpisode: "Wano 11",
        chapters: [
          {
            from: "Ch.922",
            to: "923"
          }
        ],
        chaptersRaw: "Ch. 922-923",
        opStart: 914,
        opEnd: 915,
        opEpisodesRaw: "Ep. 914-915",
        lengthMinutes: 25.5
      },
      {
        arc: "Wano",
        paceEpisode: "Wano 12",
        chapters: [
          {
            from: "Ch.924",
            to: "Ch.924"
          }
        ],
        chaptersRaw: "Ch. 924",
        opStart: 916,
        opEnd: 916,
        opEpisodesRaw: "Ep. 916",
        lengthMinutes: 20.5
      },
      {
        arc: "Wano",
        paceEpisode: "Wano 13",
        chapters: [
          {
            from: "Ch.925",
            to: "926"
          }
        ],
        chaptersRaw: "Ch. 925-926",
        opStart: 917,
        opEnd: 924,
        opEpisodesRaw: "Ep. 917-919,924",
        lengthMinutes: 36.9
      },
      {
        arc: "Wano",
        paceEpisode: "Wano 14",
        chapters: [
          {
            from: "Ch.926",
            to: "927"
          }
        ],
        chaptersRaw: "Ch. 926-927",
        opStart: 919,
        opEnd: 922,
        opEpisodesRaw: "Ep. 919-922",
        lengthMinutes: 38.1
      },
      {
        arc: "Wano",
        paceEpisode: "Wano 15",
        chapters: [
          {
            from: "Ch.928",
            to: "930"
          }
        ],
        chaptersRaw: "Ch. 928-930",
        opStart: 921,
        opEnd: 923,
        opEpisodesRaw: "Ep. 921-923",
        lengthMinutes: 38.9
      },
      {
        arc: "Wano",
        paceEpisode: "Wano 16",
        chapters: [
          {
            from: "Ch.930",
            to: "931"
          }
        ],
        chaptersRaw: "Ch. 930-931",
        opStart: 923,
        opEnd: 926,
        opEpisodesRaw: "Ep. 923-926",
        lengthMinutes: 34.1
      },
      {
        arc: "Wano",
        paceEpisode: "Wano 17",
        chapters: [
          {
            from: "Ch.932",
            to: "933"
          }
        ],
        chaptersRaw: "Ch. 932-933",
        opStart: 926,
        opEnd: 928,
        opEpisodesRaw: "Ep. 926-928",
        lengthMinutes: 39
      },
      {
        arc: "Wano",
        paceEpisode: "Wano 18",
        chapters: [
          {
            from: "Ch.934",
            to: "935"
          }
        ],
        chaptersRaw: "Ch. 934-935",
        opStart: 929,
        opEnd: 931,
        opEpisodesRaw: "Ep. 929-931",
        lengthMinutes: 37.4
      },
      {
        arc: "Wano",
        paceEpisode: "Wano 19",
        chapters: [
          {
            from: "Ch.936",
            to: "938"
          }
        ],
        chaptersRaw: "Ch. 936-938",
        opStart: 931,
        opEnd: 934,
        opEpisodesRaw: "Ep. 931-934",
        lengthMinutes: 37.3
      },
      {
        arc: "Wano",
        paceEpisode: "Wano 20",
        chapters: [
          {
            from: "Ch.938",
            to: "939"
          }
        ],
        chaptersRaw: "Ch. 938-939",
        opStart: 934,
        opEnd: 937,
        opEpisodesRaw: "Ep. 934-937",
        lengthMinutes: 34.7
      },
      {
        arc: "Wano",
        paceEpisode: "Wano 21",
        chapters: [
          {
            from: "Ch.940",
            to: "941"
          }
        ],
        chaptersRaw: "Ch. 940-941",
        opStart: 936,
        opEnd: 938,
        opEpisodesRaw: "Ep. 936-938",
        lengthMinutes: 34.3
      },
      {
        arc: "Wano",
        paceEpisode: "Wano 22",
        chapters: [
          {
            from: "Ch.941",
            to: "943"
          }
        ],
        chaptersRaw: "Ch. 941-943",
        opStart: 939,
        opEnd: 940,
        opEpisodesRaw: "Ep. 939-940",
        lengthMinutes: 29.1
      },
      {
        arc: "Wano",
        paceEpisode: "Wano 23",
        chapters: [
          {
            from: "Ch.943",
            to: "944"
          }
        ],
        chaptersRaw: "Ch. 943-944",
        opStart: 941,
        opEnd: 943,
        opEpisodesRaw: "Ep. 941-943",
        lengthMinutes: 40
      },
      {
        arc: "Wano",
        paceEpisode: "Wano 24",
        chapters: [
          {
            from: "Ch.945",
            to: "Ch.945"
          }
        ],
        chaptersRaw: "Ch. 945",
        opStart: 942,
        opEnd: 944,
        opEpisodesRaw: "Ep. 942-944",
        lengthMinutes: 22.5
      },
      {
        arc: "Wano",
        paceEpisode: "Wano 25",
        chapters: [
          {
            from: "Ch.946",
            to: "947"
          }
        ],
        chaptersRaw: "Ch. 946-947",
        opStart: 945,
        opEnd: 947,
        opEpisodesRaw: "Ep. 945-947",
        lengthMinutes: 33.5
      },
      {
        arc: "Wano",
        paceEpisode: "Wano 26",
        chapters: [
          {
            from: "Ch.948",
            to: "949"
          }
        ],
        chaptersRaw: "Ch. 948-949",
        opStart: 947,
        opEnd: 949,
        opEpisodesRaw: "Ep. 947-949",
        lengthMinutes: 32.6
      },
      {
        arc: "Wano",
        paceEpisode: "Wano 27",
        chapters: [
          {
            from: "Ch.950",
            to: "951"
          }
        ],
        chaptersRaw: "Ch. 950-951",
        opStart: 950,
        opEnd: 951,
        opEpisodesRaw: "Ep. 950-951",
        lengthMinutes: 30.3
      },
      {
        arc: "Wano",
        paceEpisode: "Wano 28",
        chapters: [
          {
            from: "Ch.952",
            to: "953"
          }
        ],
        chaptersRaw: "Ch. 952-953",
        opStart: 952,
        opEnd: 953,
        opEpisodesRaw: "Ep. 952-953",
        lengthMinutes: 27.9
      },
      {
        arc: "Wano",
        paceEpisode: "Wano 29",
        chapters: [
          {
            from: "Ch.953",
            to: "954"
          }
        ],
        chaptersRaw: "Ch. 953-954",
        opStart: 954,
        opEnd: 955,
        opEpisodesRaw: "Ep. 954-955",
        lengthMinutes: 27.4
      },
      {
        arc: "Wano",
        paceEpisode: "Wano 30",
        chapters: [
          {
            from: "Ch.954",
            to: "955"
          }
        ],
        chaptersRaw: "Ch. 954-955",
        opStart: 955,
        opEnd: 956,
        opEpisodesRaw: "Ep. 955-956",
        lengthMinutes: 27.3
      },
      {
        arc: "Wano",
        paceEpisode: "Wano 31",
        chapters: [
          {
            from: "Ch.956",
            to: "Ch.956"
          }
        ],
        chaptersRaw: "Ch. 956",
        opStart: 957,
        opEnd: 957,
        opEpisodesRaw: "Ep. 957",
        lengthMinutes: 18.4
      },
      {
        arc: "Wano",
        paceEpisode: "Wano 32",
        chapters: [
          {
            from: "Ch.957",
            to: "Ch.957"
          }
        ],
        chaptersRaw: "Ch. 957",
        opStart: 958,
        opEnd: 958,
        opEpisodesRaw: "Ep. 958",
        lengthMinutes: 16.4
      },
      {
        arc: "Wano",
        paceEpisode: "Wano 33",
        chapters: [
          {
            from: "Ch.958",
            to: "959"
          }
        ],
        chaptersRaw: "Ch. 958-959",
        opStart: 959,
        opEnd: 960,
        opEpisodesRaw: "Ep. 959-960",
        lengthMinutes: 25.9
      },
      {
        arc: "Wano",
        paceEpisode: "Wano 34",
        chapters: [
          {
            from: "Ch.960",
            to: "961"
          }
        ],
        chaptersRaw: "Ch. 960-961",
        opStart: 960,
        opEnd: 961,
        opEpisodesRaw: "Ep. 960-961",
        lengthMinutes: 23
      },
      {
        arc: "Wano",
        paceEpisode: "Wano 35",
        chapters: [
          {
            from: "Ch.962",
            to: "963"
          }
        ],
        chaptersRaw: "Ch. 962-963",
        opStart: 961,
        opEnd: 963,
        opEpisodesRaw: "Ep. 961-963",
        lengthMinutes: 30.5
      },
      {
        arc: "Wano",
        paceEpisode: "Wano 36",
        chapters: [
          {
            from: "Ch.964",
            to: "965"
          }
        ],
        chaptersRaw: "Ch. 964-965",
        opStart: 963,
        opEnd: 964,
        opEpisodesRaw: "Ep. 963-964",
        lengthMinutes: 28.1
      },
      {
        arc: "Wano",
        paceEpisode: "Wano 37",
        chapters: [
          {
            from: "Ch.965",
            to: "966"
          }
        ],
        chaptersRaw: "Ch. 965-966",
        opStart: 964,
        opEnd: 967,
        opEpisodesRaw: "Ep. 964-967",
        lengthMinutes: 36.9
      },
      {
        arc: "Wano",
        paceEpisode: "Wano 38",
        chapters: [
          {
            from: "Ch.967",
            to: "Ch.967"
          }
        ],
        chaptersRaw: "Ch. 967",
        opStart: 967,
        opEnd: 968,
        opEpisodesRaw: "Ep. 967-968",
        lengthMinutes: 21.8
      },
      {
        arc: "Wano",
        paceEpisode: "Wano 39",
        chapters: [
          {
            from: "Ch.968",
            to: "969"
          }
        ],
        chaptersRaw: "Ch. 968-969",
        opStart: 969,
        opEnd: 971,
        opEpisodesRaw: "Ep. 969-971",
        lengthMinutes: 38
      },
      {
        arc: "Wano",
        paceEpisode: "Wano 40",
        chapters: [
          {
            from: "Ch.970",
            to: "972"
          }
        ],
        chaptersRaw: "Ch. 970-972",
        opStart: 971,
        opEnd: 975,
        opEpisodesRaw: "Ep. 971-975",
        lengthMinutes: 41.9
      },
      {
        arc: "Wano",
        paceEpisode: "Wano 41",
        chapters: [
          {
            from: "Ch.972",
            to: "974"
          }
        ],
        chaptersRaw: "Ch. 972-974",
        opStart: 975,
        opEnd: 977,
        opEpisodesRaw: "Ep. 975-977",
        lengthMinutes: 35.3
      },
      {
        arc: "Wano",
        paceEpisode: "Wano 42",
        chapters: [
          {
            from: "Ch.975",
            to: "976"
          }
        ],
        chaptersRaw: "Ch. 975-976",
        opStart: 978,
        opEnd: 980,
        opEpisodesRaw: "Ep. 978-980",
        lengthMinutes: 33.5
      },
      {
        arc: "Wano",
        paceEpisode: "Wano 43",
        chapters: [
          {
            from: "Ch.977",
            to: "978"
          }
        ],
        chaptersRaw: "Ch. 977-978",
        opStart: 981,
        opEnd: 982,
        opEpisodesRaw: "Ep. 981-982",
        lengthMinutes: 28
      },
      {
        arc: "Wano",
        paceEpisode: "Wano 44",
        chapters: [
          {
            from: "Ch.978",
            to: "979"
          }
        ],
        chaptersRaw: "Ch. 978-979",
        opStart: 983,
        opEnd: 985,
        opEpisodesRaw: "Ep. 983-985",
        lengthMinutes: 27.4
      },
      {
        arc: "Wano",
        paceEpisode: "Wano 45",
        chapters: [
          {
            from: "Ch.980",
            to: "981"
          }
        ],
        chaptersRaw: "Ch. 980-981",
        opStart: 985,
        opEnd: 988,
        opEpisodesRaw: "Ep. 985-988",
        lengthMinutes: 30.3
      },
      {
        arc: "Wano",
        paceEpisode: "Wano 46",
        chapters: [
          {
            from: "Ch.982",
            to: "983"
          }
        ],
        chaptersRaw: "Ch. 982-983",
        opStart: 988,
        opEnd: 991,
        opEpisodesRaw: "Ep. 988-991",
        lengthMinutes: 30.5
      },
      {
        arc: "Wano",
        paceEpisode: "Wano 47",
        chapters: [
          {
            from: "Ch.984",
            to: "985"
          }
        ],
        chaptersRaw: "Ch. 984-985",
        opStart: 991,
        opEnd: 994,
        opEpisodesRaw: "Ep. 991-994",
        lengthMinutes: 33.6
      },
      {
        arc: "Wano",
        paceEpisode: "Wano 48",
        chapters: [
          {
            from: "Ch.986",
            to: "987"
          }
        ],
        chaptersRaw: "Ch. 986-987",
        opStart: 994,
        opEnd: 997,
        opEpisodesRaw: "Ep. 994-997",
        lengthMinutes: 34.9
      },
      {
        arc: "Wano",
        paceEpisode: "Wano 49",
        chapters: [
          {
            from: "Ch.988",
            to: "989"
          }
        ],
        chaptersRaw: "Ch. 988-989",
        opStart: 997,
        opEnd: 1e3,
        opEpisodesRaw: "Ep. 997-1000",
        lengthMinutes: 31.4
      },
      {
        arc: "Wano",
        paceEpisode: "Wano 50",
        chapters: [
          {
            from: "Ch.990",
            to: "991"
          }
        ],
        chaptersRaw: "Ch. 990-991",
        opStart: 1001,
        opEnd: 1003,
        opEpisodesRaw: "Ep. 1001-1003",
        lengthMinutes: 31.2
      },
      {
        arc: "Wano",
        paceEpisode: "Wano 51",
        chapters: [
          {
            from: "Ch.992",
            to: "993"
          }
        ],
        chaptersRaw: "Ch. 992-993",
        opStart: 1003,
        opEnd: 1006,
        opEpisodesRaw: "Ep. 1003-1006",
        lengthMinutes: 29.8
      },
      {
        arc: "Wano",
        paceEpisode: "Wano 52",
        chapters: [
          {
            from: "Ch.994",
            to: "995"
          }
        ],
        chaptersRaw: "Ch. 994-995",
        opStart: 1006,
        opEnd: 1009,
        opEpisodesRaw: "Ep. 1006-1009",
        lengthMinutes: 26.8
      },
      {
        arc: "Wano",
        paceEpisode: "Wano 53",
        chapters: [
          {
            from: "Ch.996",
            to: "997"
          }
        ],
        chaptersRaw: "Ch. 996-997",
        opStart: 1009,
        opEnd: 1011,
        opEpisodesRaw: "Ep. 1009-1011",
        lengthMinutes: 32.2
      },
      {
        arc: "Wano",
        paceEpisode: "Wano 54",
        chapters: [
          {
            from: "Ch.998",
            to: "999"
          }
        ],
        chaptersRaw: "Ch. 998-999",
        opStart: 1012,
        opEnd: 1014,
        opEpisodesRaw: "Ep. 1012-1014",
        lengthMinutes: 32.3
      },
      {
        arc: "Wano",
        paceEpisode: "Wano 55",
        chapters: [
          {
            from: "Ch.1000",
            to: "Ch.1000"
          }
        ],
        chaptersRaw: "Ch. 1000",
        opStart: 1015,
        opEnd: 1015,
        opEpisodesRaw: "Ep. 1015",
        lengthMinutes: 12.7
      },
      {
        arc: "Wano",
        paceEpisode: "Wano 56",
        chapters: [
          {
            from: "Ch.1001",
            to: "1002"
          }
        ],
        chaptersRaw: "Ch. 1001-1002",
        opStart: 1016,
        opEnd: 1017,
        opEpisodesRaw: "Ep. 1016-1017",
        lengthMinutes: 25.2
      },
      {
        arc: "Wano",
        paceEpisode: "Wano 57",
        chapters: [
          {
            from: "Ch.1003",
            to: "1004"
          }
        ],
        chaptersRaw: "Ch. 1003-1004",
        opStart: 1018,
        opEnd: 1020,
        opEpisodesRaw: "Ep. 1018-1020",
        lengthMinutes: 29.1
      },
      {
        arc: "Wano",
        paceEpisode: "Wano 58",
        chapters: [
          {
            from: "Ch.1005",
            to: "1006"
          }
        ],
        chaptersRaw: "Ch. 1005-1006",
        opStart: 1020,
        opEnd: 1022,
        opEpisodesRaw: "Ep. 1020-1022",
        lengthMinutes: 30.6
      },
      {
        arc: "Wano",
        paceEpisode: "Wano 59",
        chapters: [
          {
            from: "Ch.1007",
            to: "1008"
          }
        ],
        chaptersRaw: "Ch. 1007-1008",
        opStart: 1023,
        opEnd: 1025,
        opEpisodesRaw: "Ep. 1023-1025",
        lengthMinutes: 30.6
      },
      {
        arc: "Wano",
        paceEpisode: "Wano 60",
        chapters: [
          {
            from: "Ch.1009",
            to: "1010"
          }
        ],
        chaptersRaw: "Ch. 1009-1010",
        opStart: 1025,
        opEnd: 1028,
        opEpisodesRaw: "Ep. 1025-1028",
        lengthMinutes: 86.1
      },
      {
        arc: "Wano",
        paceEpisode: "Wano 61",
        chapters: [
          {
            from: "Ch.1011",
            to: "1012"
          }
        ],
        chaptersRaw: "Ch. 1011-1012",
        opStart: 1028,
        opEnd: 1032,
        opEpisodesRaw: "Ep. 1028,1031-1032",
        lengthMinutes: 145.2
      },
      {
        arc: "Wano",
        paceEpisode: "Wano 62 Forward",
        chapters: [
          {
            from: "Ch.1013",
            to: "1058"
          }
        ],
        chaptersRaw: "Ch. 1013-1058",
        opStart: 1033,
        opEnd: 1085,
        opEpisodesRaw: "Ep. 1033-1085",
        lengthMinutes: 0
      },
      {
        arc: "Egghead",
        paceEpisode: "Egghead 01",
        chapters: [
          {
            from: "Ch.1058",
            to: "1059"
          }
        ],
        chaptersRaw: "Ch. 1058-1059",
        opStart: 1086,
        opEnd: 1088,
        opEpisodesRaw: "Ep. 1086-1088",
        lengthMinutes: 24.9
      },
      {
        arc: "Egghead",
        paceEpisode: "Egghead 02",
        chapters: [
          {
            from: "Ch.1059",
            to: "1060"
          }
        ],
        chaptersRaw: "Ch. 1059-1060",
        opStart: 1087,
        opEnd: 1088,
        opEpisodesRaw: "Ep. 1087-1088",
        lengthMinutes: 24
      },
      {
        arc: "Egghead",
        paceEpisode: "Egghead 03",
        chapters: [
          {
            from: "Ch.1060",
            to: "1061"
          }
        ],
        chaptersRaw: "Ch. 1060-1061",
        opStart: 1089,
        opEnd: 1090,
        opEpisodesRaw: "Ep. 1089-1090",
        lengthMinutes: 30.5
      },
      {
        arc: "Egghead",
        paceEpisode: "Egghead 04",
        chapters: [
          {
            from: "Ch.1062",
            to: "1063"
          }
        ],
        chaptersRaw: "Ch. 1062-1063",
        opStart: 1091,
        opEnd: 1093,
        opEpisodesRaw: "Ep. 1091-1093",
        lengthMinutes: 31.9
      },
      {
        arc: "Egghead",
        paceEpisode: "Egghead 05",
        chapters: [
          {
            from: "Ch.1064",
            to: "1065"
          }
        ],
        chaptersRaw: "Ch. 1064-1065",
        opStart: 1093,
        opEnd: 1095,
        opEpisodesRaw: "Ep. 1093-1095",
        lengthMinutes: 34.1
      },
      {
        arc: "Egghead",
        paceEpisode: "Egghead 06",
        chapters: [
          {
            from: "Ch.1066",
            to: "Ch.1066"
          }
        ],
        chaptersRaw: "Ch. 1066",
        opStart: 1096,
        opEnd: 1097,
        opEpisodesRaw: "Ep. 1096-1097",
        lengthMinutes: 21.1
      },
      {
        arc: "Egghead",
        paceEpisode: "Egghead 07",
        chapters: [
          {
            from: "Ch.1067",
            to: "1068"
          }
        ],
        chaptersRaw: "Ch. 1067-1068",
        opStart: 1097,
        opEnd: 1099,
        opEpisodesRaw: "Ep. 1097-1099",
        lengthMinutes: 32.4
      },
      {
        arc: "Egghead",
        paceEpisode: "Egghead 08",
        chapters: [
          {
            from: "Ch.1069",
            to: "1070"
          }
        ],
        chaptersRaw: "Ch. 1069-1070",
        opStart: 1099,
        opEnd: 1102,
        opEpisodesRaw: "Ep. 1099-1102",
        lengthMinutes: 35
      },
      {
        arc: "Egghead",
        paceEpisode: "Egghead 09",
        chapters: [
          {
            from: "Ch.1071",
            to: "1072"
          }
        ],
        chaptersRaw: "Ch. 1071-1072",
        opStart: 1102,
        opEnd: 1104,
        opEpisodesRaw: "Ep. 1102-1104",
        lengthMinutes: 36.3
      },
      {
        arc: "Egghead",
        paceEpisode: "Egghead 10",
        chapters: [
          {
            from: "Ch.1073",
            to: "1074"
          }
        ],
        chaptersRaw: "Ch. 1073-1074",
        opStart: 1104,
        opEnd: 1107,
        opEpisodesRaw: "Ep. 1104-1107",
        lengthMinutes: 36.1
      },
      {
        arc: "Egghead",
        paceEpisode: "Egghead 11",
        chapters: [
          {
            from: "Ch.1075",
            to: "1076"
          }
        ],
        chaptersRaw: "Ch. 1075-1076",
        opStart: 1107,
        opEnd: 1109,
        opEpisodesRaw: "Ep. 1107-1109",
        lengthMinutes: 31.6
      },
      {
        arc: "Egghead",
        paceEpisode: "Egghead 12",
        chapters: [
          {
            from: "Ch.1077",
            to: "1078"
          }
        ],
        chaptersRaw: "Ch. 1077-1078",
        opStart: 1108,
        opEnd: 1111,
        opEpisodesRaw: "Ep. 1108, 1110-1111",
        lengthMinutes: 28.6
      },
      {
        arc: "Egghead",
        paceEpisode: "Egghead 13",
        chapters: [
          {
            from: "Ch.1079",
            to: "Ch.1079"
          }
        ],
        chaptersRaw: "Ch. 1079",
        opStart: 1112,
        opEnd: 1112,
        opEpisodesRaw: "Ep. 1112",
        lengthMinutes: 15.9
      },
      {
        arc: "Egghead",
        paceEpisode: "Egghead 14",
        chapters: [
          {
            from: "Ch.1080",
            to: "1081"
          }
        ],
        chaptersRaw: "Ch. 1080-1081",
        opStart: 1113,
        opEnd: 1115,
        opEpisodesRaw: "Ep. 1113-1115",
        lengthMinutes: 39.3
      },
      {
        arc: "Egghead",
        paceEpisode: "Egghead 15",
        chapters: [
          {
            from: "Ch.1082",
            to: "1083"
          }
        ],
        chaptersRaw: "Ch. 1082-1083",
        opStart: 1116,
        opEnd: 1117,
        opEpisodesRaw: "Ep. 1116-1117",
        lengthMinutes: 31.8
      },
      {
        arc: "Egghead",
        paceEpisode: "Egghead 16",
        chapters: [
          {
            from: "Ch.1084",
            to: "1085"
          }
        ],
        chaptersRaw: "Ch. 1084-1085",
        opStart: 1118,
        opEnd: 1119,
        opEpisodesRaw: "Ep. 1118-1119",
        lengthMinutes: 24.8
      },
      {
        arc: "Egghead",
        paceEpisode: "Egghead 17",
        chapters: [
          {
            from: "Ch.1085",
            to: "1086"
          }
        ],
        chaptersRaw: "Ch. 1085-1086",
        opStart: 1119,
        opEnd: 1120,
        opEpisodesRaw: "Ep. 1119-1120",
        lengthMinutes: 20.4
      },
      {
        arc: "Egghead",
        paceEpisode: "Egghead 18",
        chapters: [
          {
            from: "Ch.1087",
            to: "1088"
          }
        ],
        chaptersRaw: "Ch. 1087-1088",
        opStart: 1121,
        opEnd: 1122,
        opEpisodesRaw: "Ep. 1121-1122",
        lengthMinutes: 34.7
      },
      {
        arc: "Egghead",
        paceEpisode: "Egghead 19",
        chapters: [
          {
            from: "Ch.1089",
            to: "1090"
          }
        ],
        chaptersRaw: "Ch. 1089-1090",
        opStart: 1123,
        opEnd: 1124,
        opEpisodesRaw: "Ep. 1123-1124",
        lengthMinutes: 31
      },
      {
        arc: "Egghead",
        paceEpisode: "Egghead 20",
        chapters: [
          {
            from: "Ch.1091",
            to: "1092"
          }
        ],
        chaptersRaw: "Ch. 1091-1092",
        opStart: 1125,
        opEnd: 1126,
        opEpisodesRaw: "Ep. 1125-1126",
        lengthMinutes: 30.4
      },
      {
        arc: "Egghead",
        paceEpisode: "Egghead 21",
        chapters: [
          {
            from: "Ch.1093",
            to: "1094"
          }
        ],
        chaptersRaw: "Ch. 1093-1094",
        opStart: 1127,
        opEnd: 1128,
        opEpisodesRaw: "Ep. 1127-1128",
        lengthMinutes: 88.8
      },
      {
        arc: "Egghead",
        paceEpisode: "Egghead 22 Forward",
        chapters: [
          {
            from: "Ch.1095",
            to: "1125"
          }
        ],
        chaptersRaw: "Ch. 1095-1125",
        opStart: 1129,
        opEnd: 1155,
        opEpisodesRaw: "Ep. 1129\u20141155",
        lengthMinutes: 0
      }
    ]
  };

  // src/mapping/database.ts
  var data = episodes_default;
  function getEpisodes() {
    return data.episodes;
  }

  // src/mapping/engine.ts
  function getEpisodeForOPRange(opStart, opEnd) {
    const episodes = getEpisodes();
    const directMatch = episodes.find((ep) => ep.opStart === opStart && ep.opEnd === opEnd);
    if (directMatch) {
      return directMatch;
    }
    const partialMatch = episodes.find(
      (ep) => ep.opStart !== null && ep.opEnd !== null && ep.opStart <= opStart && ep.opEnd >= opEnd
    );
    if (partialMatch) {
      return partialMatch;
    }
    return episodes.find(
      (ep) => ep.opStart !== null && ep.opEnd !== null && ep.opStart <= opEnd && ep.opEnd >= opStart
    );
  }
  function getDisplayTitle(mapping) {
    return `${mapping.arc} \u2014 ${mapping.paceEp}`;
  }
  function buildOverview(mapping) {
    const chapterStr = mapping.chapters.length > 0 ? `Manga Ch. ${mapping.chapters.map((c) => c.from === c.to ? c.from : `${c.from}-${c.to}`).join(", ")}` : "";
    const epRange = mapping.opStart === mapping.opEnd ? `OP Ep. ${mapping.opStart}` : `OP Eps. ${mapping.opStart}-${mapping.opEnd}`;
    const duration = mapping.lengthMinutes > 0 ? `${Math.round(mapping.lengthMinutes)} min` : "";
    return [epRange, chapterStr, duration].filter(Boolean).join(" \u2022 ");
  }

  // src/hooks/episodes.ts
  function registerEpisodeHooks() {
    console.log("[One Pace] Registering episode hooks");
    $app.onAnimeEpisodeMetadataRequested((e) => {
      if (e.mediaId !== ONE_PIECE_ANILIST_ID) {
        return e.next();
      }
      const files = $database.localFiles.findBy(
        (lf) => lf.mediaId === ONE_PIECE_ANILIST_ID
      );
      const matchingFile = files.find((lf) => {
        const match2 = /\[One Pace\]\[(\d+)-(\d+)\]/i.exec(lf.path);
        if (!match2) return false;
        const fileOpEnd = parseInt(match2[2], 10);
        return fileOpEnd === e.episodeNumber || lf.parsedInfo?.episode && parseInt(lf.parsedInfo.episode, 10) === e.episodeNumber;
      });
      if (!matchingFile) {
        return e.next();
      }
      const match = /\[One Pace\]\[(\d+)-(\d+)\]/i.exec(matchingFile.path);
      if (!match) {
        return e.next();
      }
      const opStart = parseInt(match[1], 10);
      const opEnd = parseInt(match[2], 10);
      const mapping = getEpisodeForOPRange(opStart, opEnd);
      if (!mapping) {
        return e.next();
      }
      const overview = buildOverview(mapping);
      e.animeEpisodeMetadata = {
        anidbId: 0,
        tvdbId: 0,
        title: getDisplayTitle(mapping),
        image: "",
        airDate: "",
        length: Math.round(mapping.lengthMinutes),
        summary: overview,
        overview,
        episodeNumber: e.episodeNumber,
        episode: mapping.paceEp,
        seasonNumber: 1,
        absoluteEpisodeNumber: mapping.opEnd,
        anidbEid: 0,
        hasImage: false
      };
      e.preventDefault();
      return e.next();
    });
  }

  // src/hooks/metadata.ts
  function registerMetadataHooks() {
    console.log("[One Pace] Registering metadata hooks");
    $app.onGetAnime((e) => {
      if (e.anime?.id !== ONE_PIECE_ANILIST_ID) {
        return e.next();
      }
      const title = e.anime?.title;
      if (title) {
        title.english = "One Pace";
        title.userPreferred = "One Pace";
      }
      return e.next();
    });
  }

  // src/hooks/progress.ts
  var PACE_FILE_PATTERN = /\[One Pace\]\[(\d+)-(\d+)\]/i;
  function registerProgressHooks() {
    console.log("[One Pace] Registering progress hooks");
    $app.onPreUpdateEntryProgress((e) => {
      if (e.mediaId !== ONE_PIECE_ANILIST_ID) {
        return e.next();
      }
      if (e.progress === null || e.progress === void 0) {
        return e.next();
      }
      console.log(`[One Pace] Progress update requested: ${e.progress}`);
      const files = $database.localFiles.findBy(
        (lf) => lf.mediaId === ONE_PIECE_ANILIST_ID
      );
      const paceFiles = [];
      for (const lf of files) {
        const match2 = PACE_FILE_PATTERN.exec(lf.path);
        if (!match2) continue;
        const opEnd = parseInt(match2[2], 10);
        const epNum = parseInt(lf.parsedInfo?.episode || "0", 10);
        if (opEnd > 0) {
          paceFiles.push({ file: lf, opEnd, epNum });
        }
      }
      if (paceFiles.length === 0) {
        return e.next();
      }
      paceFiles.sort((a, b) => a.epNum - b.epNum);
      const match = paceFiles.find((pf) => pf.epNum === e.progress);
      if (!match) {
        console.log(`[One Pace] No matching Pace file for progress ${e.progress}, passing through`);
        return e.next();
      }
      const correctedProgress = match.opEnd;
      console.log(`[One Pace] Corrected progress: ${e.progress} -> ${correctedProgress}`);
      try {
        const collection = $anilist.getAnimeCollection(false);
        const entry = collection?.MediaList?.find(
          (m) => m.mediaId === ONE_PIECE_ANILIST_ID
        );
        const currentProgress = entry?.progress || 0;
        if (correctedProgress <= currentProgress) {
          console.log(`[One Pace] Current progress ${currentProgress} >= ${correctedProgress}, skipping update`);
          return e.preventDefault();
        }
        $anilist.updateEntryProgress(ONE_PIECE_ANILIST_ID, correctedProgress, void 0);
        $anilist.refreshAnimeCollection();
        console.log(`[One Pace] AniList progress updated to ${correctedProgress}`);
      } catch (err) {
        console.error("[One Pace] Failed to update AniList:", err);
      }
      e.preventDefault();
      return e.next();
    });
  }

  // src/index.ts
  console.log("[One Pace] Plugin loaded");
  registerEpisodeHooks();
  registerMetadataHooks();
  registerProgressHooks();
  $ui.register((ctx) => {
    const tray = ctx.newTray({
      iconUrl: "https://raw.githubusercontent.com/5rahim/seanime/main/seanime-web/public/icon.png",
      withContent: true,
      width: "280px"
    });
    tray.render(() => {
      tray.stack([
        tray.text("One Pace extension active"),
        tray.button("Rescan Files", { onClick: "rescan" })
      ], { gap: 8 });
    });
    tray.onClick(() => {
      tray.open();
    });
    ctx.registerEventHandler("rescan", () => {
      const count = $database.localFiles.findBy(
        (lf) => lf.mediaId === 2185 && lf.path.includes("[One Pace]")
      ).length;
      console.log(`[One Pace] Rescanned: ${count} files`);
      ctx.toast.success(`Found ${count} One Pace files`);
    });
  });
})();
