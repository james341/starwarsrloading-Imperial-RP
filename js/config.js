//       _           _    _                     _ 
//      | |         | |  | |                   | |
//   ___| | ___  ___| | _| |     ___   __ _  __| |
//  / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
//  \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
//  |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
//     version 2.16

// URL for the server logo
// Leave it blank to use text instead
// (Put the files in the images folder)
// (You can also use external URL)
var l_serverImage = "logo.png";

// Center logo?
// 'true' or 'false'
var l_centerLogo = false;

// Display current map and gamemode?
// 'true' or 'false'
var l_displayMapGamemode = true;

// Custom server name configuration
// Leave it blank for automatic server name
var l_serverName = "sleekLoad 2";

// Use a video for the background?
// Otherwise it will use images
// 'true' or 'false'
var l_bgVideo = false;

// Default available videos:
// "aurora.webm"
// "bluefall.webm"
// "bluetilefloor.webm"
// "bluewhitecircles.webm"
// "bokehlens.webm"
// "cleanbokeh.webm"
// "coldnight.webm"
// "colorfulburst.webm"
// "dancingstars.webm"
// "dropsflares.webm"
// "focusorangebokeh.webm"
// "glimmering.webm"
// "glowingrings.webm"
// "greencircles.webm"
// "hues.webm"
// "inthedeep.webm"
// "modernflourish.webm"
// "orangeaura.webm"
// "warminside.webm"
// "yellowgreen.webm"
//
// You can add your own video backgrounds
// Just make sure they are using webm VP8 format 
// (Place the videos in the backgrounds/videos folder)
// (You can also use external URL)
var l_background = "bluefall.webm";

// (Image-background only)
// Enable map-based background image?
// If enabled, the background will be an image based on the server current map
// You need to have a background image with the same name as the map
// Also, the image needs to be in .jpg format
// E.g: gm_flatgrass.jpg, gm_construct.jpg, rp_downtown_v4c_v2.jpg
// 'true' or 'false'
var l_bgImageMapBased = false;

// (Image-background only)
// Place one or more images
// Multiple images will automatically shuffle between them
// (Place the files in the backgrounds/images folder)
// (You can also use external URL)
var l_bgImages = [
	"image1.jpg",
        "image2.jpg",
        "image3.jpg",
        "image4.jpg",
        "image5.jpg",
        "image6.jpg",
        "image7.jpg",
        "image8.jpg",
        "image9.jpg",
        "image10.jpg",
        "image11.jpg",
        "image12.jpg",
        "image13.jpg",
		"image14.jpg",

];

// (Image-background only)
// Random background images order?
// 'true' or 'false'
var l_bgImagesRandom = true;

// (Image-background only)
// Delay between background images changes
// in milliseconds
var l_bgImageDuration = 5000;

// (Image-background only)
// Image background fade velocity
// in milliseconds
var l_bgImageFadeVelocity = 2000;

// Enable background overlay?
// 'true' or 'false'
var l_bgOverlay = true;

// Background darkening amount
// 0 for none (0%), 100 for pitch black (100%)
var l_bgDarkening = 50;

// Play music during the loading screen?
// 'true' or 'false'
var l_music = true;

// Display current music name?
// 'true' or 'false'
var l_musicDisplay = true;

// Music playlist
// Add as many youtube ids/urls or ogg files you want
// (Place the ogg files in the music folder)
// (You can also use external URL for the ogg files)
var l_musicPlaylist = [
	{ogg: "viccecitymall.ogg", name: "Nations - Installation Music"},
	{ogg: "starwarsmaintheme.ogg", name: "Nations - Installation Music"},
];

// Random music order?
// 'true' or 'false'
var l_musicRandom = true;

// Music volume
// Choose a value between 0 (quietest) and 100 (loudest)
var l_musicVolume = 15;

// Enable custom messages?
// 'true' or 'false'
var l_messagesEnabled = true;

// Enter your custom messages below
var l_messages = [
	"Self Promoting The act of handing yourself a promotion which was not given to you by command. This is heavily against the rules & if done it then you will receive an additional demotion from original rank + a warning!",
	"No Lore characters, unless given specific permission for future events/activities!",
	"Jedi takes priority in Sith fights/Lightsaber duels. Clones should NOT fire when a Sith and Jedi are Fighting!",
        "Do not disconnect, suicide, change jobs, change names, etc. to get out of a roleplay/staff situation. This will result in a harsher or additional punishment!",
        "NEVER hurt a brother in any way. Never shoot or handcuff another clone trooper, Unless given orders from a commander you may cuff a “rogue” clone!",
        "An individual may opt out of an event if they do not wish to participate, but may not actively attempt to stop the event outside of roleplay. No one can be forced to sit out of an event!",
        "All donations are subject to all regular server rules, donations will in no way grant any form of immunity against punishment and can be retracted if the transgressions have been sufficiently deemed as requiring such!", 
        "Fail Fear RP The concept of role playing fear for your character's life in situations where your attacker is able to quickly end your life at will!",
        "No RDM [Random Death Match]: The act of killing or attempting to kill a player with no roleplay reasoning behind said act!",
        "Never assault an innocent/ally. If attacked you may defend yourself. NOTE: You must be DAMAGED! (not just blinded/pushed) in order to defend yourself!",
        "Please Don't be a dick to people. Being an 'edgy cool teenager' won't get you far on this server. You will be banned. Toxicity is not tolerated!",
        "Mingeing means purposefully harming the roleplay of the server, breaking or attempting to break the server's rules in any way and generally acting like an idiot!",
        "Neutral jobs have only open comms. In addition to that maintenance droids, medical droids and bounty hunters working for the republic have secured comms  It is FailRP to ‘steal’ comms unless the staff has granted Permission!",
        "You need to listen to people that are higher rank than you. If that person is abusing their rank, let a staff member know!",
        "Donations can not be refunded, swapped or exchanged unless with explicit circumstances and discussion with the executive members of the staff team, such situations (an unforeseen issue has appeared with the product, such as a broken model!",
        "Cheating will result in an automatic or manual permanent ban. This includes abusing Gmod/source exploits with client-side scripts and convars!",
        "You must follow all Jedi Guidelines and Rules within the Jedi Order!",
        "The use of force abilities on the Venator / Base Maps is prohibited unless in training, this rule is voided if in combat or DEFCON is at III or Lower!",
        "Metagame The act of using out of character gained knowledge to assist in determining your character’s decision!",
        "You are not to switch classes in front of other players. Should you need to switch, go to bunks or an empty room and switch!",
        "Certain Fleet Ranks can demote and promote anyone except Jedi and only Jedi. Inform a troopers commander about a demotion or promotion every time!",
        "Regimental higher-ups may hand out regimental discords however it is not a requirement for players to join them. Any discord relating to MVG which is handed out in-game to players i.e - regimental discords, must abide by MVG’s rules!",
        "No Intent To Roleplay (NITRP) When one fails to even attempt at roleplaying out a scenario or situation!",
        "Random Death Match (RDM) The act of murdering someone or something without a valid roleplay reason!"
];

// Random message order?
// 'true' or 'false'
var l_messagesRandom = true;

// Delay between message changes
// in milliseconds
var l_messagesDelay = 5000;

// Messages fade time
// in milliseconds
var l_messagesFade = 1000;

// Show errors inside Garry's Mod?
// Can be useful for finding errors
// 'true' or 'false'
var l_showErrorsIngame = true;

//==============================================================
//========================== WARNING ===========================
//==============================================================
//============ Do not edit anything below this line ============
//==============================================================
var checkConfigFile = function() {
	return true;
};
