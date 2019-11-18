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
		img: "YxGZxn7.png",
		opts: {
			base: true,
			dlc: false,
			human: ["hunter"],
			enemy: ["humanoid"]
		}
	},
	{
		name: "Doll",
		img: "YxGZxn7.png",
		opts: {
			base: true,
			dlc: false,
			human: ["nhunter"],
			enemy: []
		}
	},
	{
		name: "Annalise, Queen of the Vilebloods",
		img: "YxGZxn7.png",
		opts: {
			base: true,
			dlc: false,
			human: ["nhunter"],
			enemy: []
		}
	},
	{
		name: "Arianna, Woman of the Night",
		img: "YxGZxn7.png",
		opts: {
			base: true,
			dlc: false,
			human: ["nhunter"],
			enemy: []
		}
	},
	{
		name: "Iosefka",
		img: "YxGZxn7.png",
		opts: {
			base: true,
			dlc: false,
			human: ["nhunter"],
			enemy: []
		}
	},
	{
		name: "Eileen the Crow",
		img: "YxGZxn7.png",
		opts: {
			base: true,
			dlc: false,
			human: ["hunter"],
			enemy: []
		}
	},
	{
		name: "Provost Willem",
		img: "YxGZxn7.png",
		opts: {
			base: true,
			dlc: false,
			human: ["nhunter"],
			enemy: []
		}
	},
	{
		name: "Chapel Samaritan",
		img: "YxGZxn7.png",
		opts: {
			base: true,
			dlc: false,
			human: ["nhunter"],
			enemy: []
		}
	},
	{
		name: "Patches the Spider",
		img: "YxGZxn7.png",
		opts: {
			base: true,
			dlc: false,
			human: ["nhunter"],
			enemy: []
		}
	},
	{
		name: "Retired Hunter Djura",
		img: "YxGZxn7.png",
		opts: {
			base: true,
			dlc: false,
			human: ["hunter"],
			enemy: []
		}
	},
	{
		name: "Adella, Nun of the Healing Church",
		img: "YxGZxn7.png",
		opts: {
			base: true,
			dlc: false,
			human: ["nhunter"],
			enemy: []
		}
	},
	{
		name: "Alfred, Hunter of Vilebloods",
		img: "YxGZxn7.png",
		opts: {
			base: true,
			dlc: false,
			human: ["hunter"],
			enemy: []
		}
	},
	{
		name: "Valtr",
		img: "YxGZxn7.png",
		opts: {
			base: true,
			dlc: false,
			human: ["hunter"],
			enemy: []
		}
	},
	{
		name: "Brador",
		img: "YxGZxn7.png",
		opts: {
			base: false,
			dlc: true,
			human: ["hunter"],
			enemy: ["humanoid"]
		}
	},
	{
		name: "Simon the Harrowed",
		img: "YxGZxn7.png",
		opts: {
			base: false,
			dlc: true,
			human: ["hunter"],
			enemy: []
		}
	},
	{
		name: "Old Hunter Yamamura",
		img: "YxGZxn7.png",
		opts: {
			base: false,
			dlc: true,
			human: ["hunter"],
			enemy: []
		}
	},
	{
		name: "Saint Adeline",
		img: "YxGZxn7.png",
		opts: {
			base: false,
			dlc: true,
			human: ["nhunter"],
			enemy: []
		}
	},
	{
		name: "Blood Starved Beast",
		img: "YxGZxn7.png",
		opts: {
			base: true,
			dlc: false,
			human: [],
			enemy: ["beast"]
		}
	},
	{
		name: "Cleric Beast",
		img: "YxGZxn7.png",
		opts: {
			base: true,
			dlc: false,
			human: [],
			enemy: ["beast"]
		}
	},
	{
		name: "Darkbeast Paarl",
		img: "YxGZxn7.png",
		opts: {
			base: true,
			dlc: false,
			human: [],
			enemy: ["beast"]
		}
	},
	{
		name: "Father Gascoigne",
		img: "YxGZxn7.png",
		opts: {
			base: true,
			dlc: false,
			human: ["hunter"],
			enemy: ["humanoid","beast"]
		}
	},
	{
		name: "Micolash, Host of the Nightmare",
		img: "YxGZxn7.png",
		opts: {
			base: true,
			dlc: false,
			human: ["nhunter"],
			enemy: ["humanoid"]
		}
	},
	{
		name: "Martyr Logarius",
		img: "YxGZxn7.png",
		opts: {
			base: true,
			dlc: false,
			human: ["hunter"],
			enemy: ["humanoid"]
		}
	},
	{
		name: "One Reborn",
		img: "YxGZxn7.png",
		opts: {
			base: true,
			dlc: false,
			human: [],
			enemy: ["beast"]
		}
	},
	{
		name: "Shadow of Yharnam",
		img: "YxGZxn7.png",
		opts: {
			base: true,
			dlc: false,
			human: [],
			enemy: ["humanoid"]
		}
	},
	{
		name: "Vicar Amelia",
		img: "YxGZxn7.png",
		opts: {
			base: true,
			dlc: false,
			human: [],
			enemy: ["beast"]
		}
	},
	{
		name: "Witch of Hemwick",
		img: "YxGZxn7.png",
		opts: {
			base: true,
			dlc: false,
			human: [],
			enemy: ["humanoid"]
		}
	},
	{
		name: "Amygdala",
		img: "YxGZxn7.png",
		opts: {
			base: true,
			dlc: false,
			human: [],
			enemy: ["oldone"]
		}
	},
	{
		name: "Celestial Emissary",
		img: "YxGZxn7.png",
		opts: {
			base: true,
			dlc: false,
			human: [],
			enemy: ["oldone"]
		}
	},
	{
		name: "Ebrietas, Daughter of the Cosmos",
		img: "YxGZxn7.png",
		opts: {
			base: true,
			dlc: false,
			human: [],
			enemy: ["oldone"]
		}
	},
	{
		name: "Mergo's Wet Nurse",
		img: "YxGZxn7.png",
		opts: {
			base: true,
			dlc: false,
			human: [],
			enemy: ["oldone"]
		}
	},
	{
		name: "Moon Presence",
		img: "YxGZxn7.png",
		opts: {
			base: true,
			dlc: false,
			human: [],
			enemy: ["oldone"]
		}
	},
	{
		name: "Rom, the Vacous Spider",
		img: "YxGZxn7.png",
		opts: {
			base: true,
			dlc: false,
			human: [],
			enemy: ["oldone"]
		}
	},
	{
		name: "Yharnam, Pthumerian Queen",
		img: "YxGZxn7.png",
		opts: {
			base: true,
			dlc: false,
			human: ["nhunter"],
			enemy: ["humanoid"]
		}
	},
	{
		name: "Ludwig, the Holy Blade",
		img: "YxGZxn7.png",
		opts: {
			base: false,
			dlc: true,
			human: [],
			enemy: ["beast","humanoid"]
		}
	},
	{
		name: "Orphan of Kos",
		img: "YxGZxn7.png",
		opts: {
			base: false,
			dlc: true,
			human: [],
			enemy: ["humanoid", "oldone"]
		}
	},
	{
		name: "Lady Maria of the Astral Clocktower",
		img: "YxGZxn7.png",
		opts: {
			base: false,
			dlc: true,
			human: ["hunter"],
			enemy: ["humanoid"]
		}
	},
	{
		name: "Living Failures",
		img: "YxGZxn7.png",
		opts: {
			base: false,
			dlc: true,
			human: [],
			enemy: ["oldone"]
		}
	},
	{
		name: "Laurence, the First Vicar",
		img: "YxGZxn7.png",
		opts: {
			base: false,
			dlc: true,
			human: [],
			enemy: ["beast"]
		}
	}
];