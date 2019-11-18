dataSetVersion = "2019-10-08";
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
	{
		name: "Filter by humans",
		key: "human",
		tooltip: "Restricts to humanoid characters",
		checked: false,
		sub: [
			{ name: "Hunters", key: "hunter"},
			{ name: "Non-hunters", key: "nhunter"}
		]
	},
	{
		name: "Filter by enemies",
		key: "enemy",
		tooltip: "Restricts to enemies",
		checked: false,
		sub: [
			{ name: "Humanoids", tooltip: "Filters human and humanoid bosses", key: "humanoid"},
			{ name: "Beasts", tooltip: "Filters beast bosses", key: "beast"},
			{ name: "Great Ones", tooltip: "Filters otherworldly bosses", key: "oldone"}
			]
	},
	{
		name: "Base game content",
		key: "base",
		tooltip: "Filters base game content",
		checked: false
	},
	{
		name: "DLC game content",
		key: "dlc",
		tooltip: "Filters downloadable content",
		checked: false
	}
];

dataSet[dataSetVersion].characterData = [
	{
		name: "The Hunter",
		img: "sgwXY6R.png",
		opts: {
			base: true,
			dlc: false,
			human: ["hunter"],
			enemy: []
		}
	},
	{
		name: "Gehrman, the First Hunter",
		img: "mCYwIoO.jpg",
		opts: {
			base: true,
			dlc: false,
			human: ["hunter"],
			enemy: ["humanoid"]
		}
	},
	{
		name: "The Doll",
		img: "aXhlQsF.jpg",
		opts: {
			base: true,
			dlc: false,
			human: ["nhunter"],
			enemy: []
		}
	},
	{
		name: "Annalise, Queen of the Vilebloods",
		img: "o9exonw.jpg",
		opts: {
			base: true,
			dlc: false,
			human: ["nhunter"],
			enemy: []
		}
	},
	{
		name: "Arianna, Woman of the Night",
		img: "laz3req.jpg",
		opts: {
			base: true,
			dlc: false,
			human: ["nhunter"],
			enemy: []
		}
	},
	{
		name: "Iosefka",
		img: "H0tkN7H.jpg",
		opts: {
			base: true,
			dlc: false,
			human: ["nhunter"],
			enemy: []
		}
	},
	{
		name: "Eileen the Crow",
		img: "CRsQ4s7.jpg",
		opts: {
			base: true,
			dlc: false,
			human: ["hunter"],
			enemy: []
		}
	},
	{
		name: "Provost Willem",
		img: "lQ6byBL.jpg",
		opts: {
			base: true,
			dlc: false,
			human: ["nhunter"],
			enemy: []
		}
	},
	{
		name: "Oedon Chapel Dweller",
		img: "Cg7qpaI.png",
		opts: {
			base: true,
			dlc: false,
			human: ["nhunter"],
			enemy: []
		}
	},
	{
		name: "Patches the Spider",
		img: "yvjEdAN.jpg",
		opts: {
			base: true,
			dlc: false,
			human: ["nhunter"],
			enemy: []
		}
	},
	{
		name: "Retired Hunter Djura",
		img: "RTD2IJn.jpg",
		opts: {
			base: true,
			dlc: false,
			human: ["hunter"],
			enemy: []
		}
	},
	{
		name: "Adella, Nun of the Healing Church",
		img: "MX0lGlu.png",
		opts: {
			base: true,
			dlc: false,
			human: ["nhunter"],
			enemy: []
		}
	},
	{
		name: "Alfred, Hunter of Vilebloods",
		img: "M1VbTZh.png",
		opts: {
			base: true,
			dlc: false,
			human: ["hunter"],
			enemy: []
		}
	},
	{
		name: "Valtr, Master of the League",
		img: "8Emi7V4.jpg",
		opts: {
			base: true,
			dlc: false,
			human: ["hunter"],
			enemy: []
		}
	},
	{
		name: "Brador",
		img: "cwKIA9i.jpg",
		opts: {
			base: false,
			dlc: true,
			human: ["hunter"],
			enemy: ["humanoid"]
		}
	},
	{
		name: "Simon the Harrowed",
		img: "Ci68alD.jpg",
		opts: {
			base: false,
			dlc: true,
			human: ["hunter"],
			enemy: []
		}
	},
	{
		name: "Old Hunter Yamamura",
		img: "H2dEMV3.png",
		opts: {
			base: false,
			dlc: true,
			human: ["hunter"],
			enemy: []
		}
	},
	{
		name: "Saint Adeline",
		img: "JZ0LMsG.jpg",
		opts: {
			base: false,
			dlc: true,
			human: ["nhunter"],
			enemy: []
		}
	},
	{
		name: "Blood Starved Beast",
		img: "mPml3vU.jpg",
		opts: {
			base: true,
			dlc: false,
			human: [],
			enemy: ["beast"]
		}
	},
	{
		name: "Cleric Beast",
		img: "v9Z4pDs.jpg",
		opts: {
			base: true,
			dlc: false,
			human: [],
			enemy: ["beast"]
		}
	},
	{
		name: "Darkbeast Paarl",
		img: "gs6iIVP.jpg",
		opts: {
			base: true,
			dlc: false,
			human: [],
			enemy: ["beast"]
		}
	},
	{
		name: "Father Gascoigne",
		img: "6ms7grZ.png",
		opts: {
			base: true,
			dlc: false,
			human: ["hunter"],
			enemy: ["humanoid","beast"]
		}
	},
	{
		name: "Micolash, Host of the Nightmare",
		img: "Es2ZrH6.jpg",
		opts: {
			base: true,
			dlc: false,
			human: ["nhunter"],
			enemy: ["humanoid"]
		}
	},
	{
		name: "Martyr Logarius",
		img: "baKEbgQ.jpg",
		opts: {
			base: true,
			dlc: false,
			human: ["hunter"],
			enemy: ["humanoid"]
		}
	},
	{
		name: "One Reborn",
		img: "nwDMF1V.jpg",
		opts: {
			base: true,
			dlc: false,
			human: [],
			enemy: ["beast"]
		}
	},
	{
		name: "Shadow of Yharnam",
		img: "Cu6rS5P.jpg",
		opts: {
			base: true,
			dlc: false,
			human: [],
			enemy: ["humanoid"]
		}
	},
	{
		name: "Vicar Amelia",
		img: "tcL3vL6.jpg",
		opts: {
			base: true,
			dlc: false,
			human: [],
			enemy: ["beast"]
		}
	},
	{
		name: "Witch of Hemwick",
		img: "85nOqJn.jpg",
		opts: {
			base: true,
			dlc: false,
			human: [],
			enemy: ["humanoid"]
		}
	},
	{
		name: "Amygdala",
		img: "iaMZ2RL.jpg",
		opts: {
			base: true,
			dlc: false,
			human: [],
			enemy: ["oldone"]
		}
	},
	{
		name: "Celestial Emissary",
		img: "0talcJH.png",
		opts: {
			base: true,
			dlc: false,
			human: [],
			enemy: ["oldone"]
		}
	},
	{
		name: "Ebrietas, Daughter of the Cosmos",
		img: "YNvFWri.jpg",
		opts: {
			base: true,
			dlc: false,
			human: [],
			enemy: ["oldone"]
		}
	},
	{
		name: "Mergo's Wet Nurse",
		img: "6myOcrf.jpg",
		opts: {
			base: true,
			dlc: false,
			human: [],
			enemy: ["oldone"]
		}
	},
	{
		name: "Moon Presence",
		img: "NINb90e.jpg",
		opts: {
			base: true,
			dlc: false,
			human: [],
			enemy: ["oldone"]
		}
	},
	{
		name: "Rom, the Vacous Spider",
		img: "PXGlhOT.jpg",
		opts: {
			base: true,
			dlc: false,
			human: [],
			enemy: ["oldone"]
		}
	},
	{
		name: "Yharnam, Pthumerian Queen",
		img: "ZH4uNSR.jpg",
		opts: {
			base: true,
			dlc: false,
			human: ["nhunter"],
			enemy: ["humanoid"]
		}
	},
	{
		name: "Ludwig, the Holy Blade",
		img: "LQQxYXU.jpg",
		opts: {
			base: false,
			dlc: true,
			human: [],
			enemy: ["beast","humanoid"]
		}
	},
	{
		name: "Orphan of Kos",
		img: "9QXlZBp.png",
		opts: {
			base: false,
			dlc: true,
			human: [],
			enemy: ["humanoid", "oldone"]
		}
	},
	{
		name: "Lady Maria of the Astral Clocktower",
		img: "IlCqo4s.jpg",
		opts: {
			base: false,
			dlc: true,
			human: ["hunter"],
			enemy: ["humanoid"]
		}
	},
	{
		name: "Living Failures",
		img: "T3ZWXGc.png",
		opts: {
			base: false,
			dlc: true,
			human: [],
			enemy: ["oldone"]
		}
	},
	{
		name: "Laurence, the First Vicar",
		img: "XexfLBF.jpg",
		opts: {
			base: false,
			dlc: true,
			human: [],
			enemy: ["beast"]
		}
	}
];