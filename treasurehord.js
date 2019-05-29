/* 
Roll20 API
Dungeons and Dragons 5e treasure generator
by Spaceweasels
v0.1

Roll20 Macro
 ?{treasure|
   Independant treasure, !sitg @{selected|npc_challenge} | 
   Treasure horde,!sthg @{selected|npc_challenge} 
 }
*/

function mystyle() {
        var colour = '#D4AF37';
        var divstyle = 'style="width: 189px; border: 1px solid orange; background-color: #FAF0E6; padding: 5px; font-size: 12px;"'
        var astyle1 = 'style="text-align:center; border: 1px solid black; margin: 1px; padding: 2px; background-color: ' + colour + '; border-radius: 4px;  box-shadow: 1px 1px 1px #707070; width: 100px;';
        var astyle2 = 'style="text-align:center; border: 1px solid black; margin: 1px; padding: 2px; background-color: ' + colour + '; border-radius: 4px;  box-shadow: 1px 1px 1px #707070; width: 150px;';
        var tablestyle = 'style="border: none;"';
        var arrowstyle = 'style="border: none; border-top: 3px solid transparent; border-bottom: 3px solid transparent; border-left: 195px solid ' + colour + '; margin-bottom: 2px; margin-top: 2px;"';
        var headstyle = 'style="color: ' + colour + '; font-size: 18px; text-align: center; font-variant: small-caps; font-family: Times, serif;"';
        var substyle = 'style="font-size: 11px; line-height: 13px; margin-top: -3px; font-style: italic;"';
        var tdstyle = 'style="padding: 2px; padding-left: 5px; border: none;"';
        var creditstyle = 'style="color: ' + colour + '; font-size: 10px; text-align: center;"';
        
        var styles = colour + '|' + divstyle + '|' + astyle1 + '|' + astyle2 + '|' + tablestyle + '|' + arrowstyle + '|' + headstyle + '|' + substyle + '|' + tdstyle + '|' + creditstyle;
        return styles;
    }
	
function sword() {
	var swords = ['dagger', 'shortsword', 'longsword', 'greatsword', 'rapier', 'scimitar']
	i = randomInteger(6) - 1
	return swords[i]
}


function weapon() {
      weapon_roll = randomInteger(100)
		if (weapon_roll <  4 ) { weapon_result = ' club '}
		 else if (weapon_roll < 8 ) { weapon_result = ' dagger ' }
		 else if (weapon_roll < 10 ) { weapon_result = ' greatclub ' }
		 else if (weapon_roll < 14 ) { weapon_result = ' handaxe ' }
		 else if (weapon_roll < 18 ) { weapon_result = ' javelin ' }
		 else if (weapon_roll < 21 ) { weapon_result = ' light hammer ' }
		 else if (weapon_roll < 25 ) { weapon_result = ' mace ' }
		 else if (weapon_roll < 29 ) { weapon_result = ' quarterstaff ' }
		 else if (weapon_roll < 31 ) { weapon_result = ' sickle ' }
		 else if (weapon_roll < 35) { weapon_result = ' spear ' }
		 else if (weapon_roll < 39 ) { weapon_result = ' light crossbow ' }
		 else if (weapon_roll < 42 ) { weapon_result = ' dart ' }
		 else if (weapon_roll < 46 ) { weapon_result = ' shortbow ' }
		 else if (weapon_roll < 50 ) { weapon_result = ' sling ' }
		 else if (weapon_roll < 53 ) { weapon_result = ' Battleaxe ' }
		 else if (weapon_roll < 55 ) { weapon_result = ' Flail ' }
		 else if (weapon_roll < 57 ) { weapon_result = ' Glaive ' }
		 else if (weapon_roll < 59 ) { weapon_result = ' Greataxe ' }
		 else if (weapon_roll < 63 ) { weapon_result = ' Greatsword '}
		 else if (weapon_roll < 65 ) { weapon_result = ' Halberd ' }
		 else if (weapon_roll < 66 ) { weapon_result = ' Lance ' }
		 else if (weapon_roll < 70 ) { weapon_result = ' Longsword ' }
		 else if (weapon_roll < 72 ) { weapon_result = ' Maul ' }
		 else if (weapon_roll < 74 ) { weapon_result = ' Morningstar ' }
		 else if (weapon_roll < 76 ) { weapon_result = ' Pike ' }
		 else if (weapon_roll < 78 ) { weapon_result = ' Rapier ' }
		 else if (weapon_roll < 80 ) { weapon_result = ' Scimitar ' }
		 else if (weapon_roll < 84 ) { weapon_result = ' Shortsword ' }
		 else if (weapon_roll < 86 ) { weapon_result = ' trident ' }
		 else if (weapon_roll < 88 ) { weapon_result = ' War pick ' }
		 else if (weapon_roll < 90 ) { weapon_result = ' Warhammer ' }
		 else if (weapon_roll < 91 ) { weapon_result = ' whip ' }
		 else if (weapon_roll < 92 ) { weapon_result = ' blowgun ' }
		 else if (weapon_roll < 94 ) { weapon_result = ' hand crossbow ' }
		 else if (weapon_roll < 97 ) { weapon_result = ' heavy crossbow ' }
		 else if (weapon_roll < 100 ) { weapon_result = ' Longbow ' }
		else { weapon_result = ' Net'  }
	return weapon_result
}	

function ammunition() {
    var ammo = [' Bullets', ' Arrows', ' Bolts', ' Blowgun darts', ' Throwing darts']
    ammo_roll = randomInteger(5) - 1
    ammo_result = randomInteger(6) + randomInteger(6) + ammo[ammo_roll]
    return ammo_result
}

function table_a() {
      ta_roll = randomInteger(100)
      if(ta_roll < 51) { ta_result = 'a Potion of healing' }
      else if (ta_roll < 61) { ta_result = 'a Spell scroll - cantrip' }
      else if (ta_roll < 71) { ta_result = 'a Potion of Climbing' }
      else if (ta_roll < 91) { ta_result = 'a Spell Scroll - 1st level' }
      else if (ta_roll < 95) { ta_result = 'a Spell Scroll - 2nd level' }
      else if (ta_roll < 99) { ta_result = 'a Potion of greater healing' }
      else if (ta_roll == 99) { ta_result = 'a Bag of Holding' }
      else { ta_result = 'a Driftglobe' }
      return ta_result
}

function table_b() {
      ta_roll = randomInteger(100)
      if (ta_roll < 16) { ta_result = 'a Potion of greater healing' }
      else if (ta_roll < 23) { ta_result = 'a Potion of Fire Breath' }
      else if (ta_roll < 30) { ta_result = 'a Potion of Resistance' }
      else if (ta_roll < 35) { ta_result = ammunition() + ' +1' }
      else if (ta_roll < 40) { ta_result = 'a Potion of Animal Friendship' }
      else if (ta_roll < 45) { ta_result = 'a Potion of hill giant strength' }
      else if (ta_roll < 50) { ta_result = 'a Potion of growth' }
      else if (ta_roll < 55) { ta_result = 'a Potion of water breathing' }
      else if (ta_roll < 60) { ta_result = 'a Spell Scroll - 2nd level ' }
      else if (ta_roll < 65) { ta_result = 'a Spell Scroll - 3rd level' }
      else if (ta_roll < 68) { ta_result = 'a Bag of Holding' }
      else if (ta_roll < 71) { ta_result = 'Keoghtoms ointment' }
      else if (ta_roll < 74) { ta_result = 'an Oil of Slipperiness' }
      else if (ta_roll < 76) { ta_result = 'a Dust of disappearance' }
      else if (ta_roll < 78) { ta_result = 'a Dust of dryness' }
      else if (ta_roll < 80) { ta_result = 'a Dust of sneezing and choking' }
      else if (ta_roll < 82) { ta_result = 'an Elemental gem' }
      else if (ta_roll < 84) { ta_result = 'a Philter of Love' }
      else if (ta_roll == 84) { ta_result = 'an Alchemy Jug' }
      else if (ta_roll == 85) { ta_result = 'a Cap of water breathing' }
      else if (ta_roll == 86) { ta_result = 'a Cloak of the Manta Ray' }
      else if (ta_roll == 87) { ta_result = 'a Driftglobe' }
      else if (ta_roll == 88) { ta_result = 'a Goggles of night' }
      else if (ta_roll == 89) { ta_result = 'a Helm of comprehend languages' }
      else if (ta_roll == 90) { ta_result = 'an Immovable Rod' }
      else if (ta_roll == 91) { ta_result = 'a Lantern of revealing' }
      else if (ta_roll == 92) { ta_result = 'Mariners Armor' }
      else if (ta_roll == 93) { ta_result = 'Mithral Armor' }
      else if (ta_roll == 94) { ta_result = 'a Potion of Poison' }
      else if (ta_roll == 95) { ta_result = 'a Ring of swimming' }
      else if (ta_roll == 96) { ta_result = 'a Robe of useful items' }
      else if (ta_roll == 97) { ta_result = 'a Rope of climbing' }
      else if (ta_roll == 98) { ta_result = 'a Saddle of the cavalier' }
      else if (ta_roll == 99) { ta_result = 'a Wand of magic detection' }
      else { ta_result = 'a Wand of secrets' }
      return ta_result
}

function table_c() {
      ta_roll = randomInteger(100)
      if (ta_roll < 16) { ta_result = 'a Potion of superior healing' }
      else if (ta_roll < 23) { ta_result = 'a Spell Scroll - 4th level' }
      else if (ta_roll < 28) { ta_result = ammunition() + ' +2' }
      else if (ta_roll < 33) { ta_result = 'a Potion of clairvoyance' }
      else if (ta_roll < 38) { ta_result = 'a Potion of diminution' }
      else if (ta_roll < 43) { ta_result = 'a Potion of gaseous form' }
      else if (ta_roll < 48) { ta_result = 'a Potion of frost giant strength' }
      else if (ta_roll < 53) { ta_result = 'a Potion of stone giant strength' }
      else if (ta_roll < 58) { ta_result = 'a Potion of heroism' }
      else if (ta_roll < 63) { ta_result = 'a Potion of invulnerability' }
      else if (ta_roll < 68) { ta_result = 'a Potion of mind reading' }
      else if (ta_roll < 73) { ta_result = 'a Spell Scroll - 5th level' }
      else if (ta_roll < 76) { ta_result = 'an Elixir of health' }
      else if (ta_roll < 79) { ta_result = 'an Oil of Etherealness' }
      else if (ta_roll < 82) { ta_result = 'a Potion of fire giant strength' }
      else if (ta_roll < 85) { ta_result = 'Quaals feather token' }
      else if (ta_roll < 88) { ta_result = 'a Scroll of protection' }
      else if (ta_roll < 90) { ta_result = 'a Bag of beans' }
      else if (ta_roll < 92) { ta_result = 'a Bead of Force' }
      else if (ta_roll == 92) { ta_result = 'a Chime of opening' }
      else if (ta_roll == 93) { ta_result = 'a Decanter of endless water' }
      else if (ta_roll == 94) { ta_result = 'an Eyes of minute seeing' }
      else if (ta_roll == 95) { ta_result = 'a Folding boat' }
      else if (ta_roll == 96) { ta_result = 'Hewards handy haversack'}
      else if (ta_roll == 97) { ta_result = 'Horseshoes of speed' }
      else if (ta_roll == 98) { ta_result = 'a Necklace of Fireballs' }
      else if (ta_roll == 99) { ta_result = 'a Periapt of health' }
      else { ta_result = 'Sending stones' }
      return ta_result
}

function table_d() {
      ta_roll = randomInteger(100)
      if (ta_roll < 21) { ta_result = 'a Potion of supreme healing' }
      else if (ta_roll < 31) { ta_result = 'a Potion of invisibility' }
      else if (ta_roll < 41) { ta_result = 'a Potion of speed' }
      else if (ta_roll < 51) { ta_result = 'a Spell scroll - 6th level' }
      else if (ta_roll < 58) { ta_result = 'a Spell scroll - 7th level' }
      else if (ta_roll < 63) { ta_result = ammunition() + ' +3' }
      else if (ta_roll < 68) { ta_result = 'an Oil of sharpness' }
      else if (ta_roll < 73) { ta_result = 'a Potion of flying' }
      else if (ta_roll < 78) { ta_result = 'a Potion of cloud giant strength ' }
      else if (ta_roll < 82) { ta_result = 'a Potion of longevity' }
      else if (ta_roll < 88) { ta_result = 'a Potion of vitality' }
      else if (ta_roll < 93) { ta_result = 'a Spell scroll - 8th level' }
      else if (ta_roll < 96) { ta_result = 'Horseshoes of a zephyr' }
      else if (ta_roll < 99) { ta_result = 'Nolzurs marvelous pigments' }
      else if (ta_roll == 99) { ta_result = 'a Bag of devouring' }
      else { ta_result = 'a Portable hole' }
      return ta_result
}

function table_e() {
      ta_roll = randomInteger(100)
      if (ta_roll < 31) { ta_result = 'a Spell scroll - 8th level' }
      else if (ta_roll < 56) { ta_result = 'a Potion of storm giant strength' }
      else if (ta_roll < 71) { ta_result = 'a Potion of supreme healing' }
      else if (ta_roll < 86) { ta_result = 'a Spell scroll - 9th level' }
      else if (ta_roll < 94) { ta_result = 'the Universal solvent' }
      else if (ta_roll < 99) { ta_result = 'an Arrow of slaying' }
      else { ta_result = 'the Sovereign glue' }
      return ta_result
}

function table_f() {
      ta_roll = randomInteger(100)
      if (ta_roll < 16) { ta_result = 'a ' +  weapon() + ' +1' }
      else if (ta_roll < 19) { ta_result = 'a Shield +1' }
      else if (ta_roll < 22) { ta_result = 'a Sentinel Shield' }
      else if (ta_roll < 24) { ta_result = 'an Amulet of proof against detection and location' }
      else if (ta_roll < 26) { ta_result = 'Boots of Elvenkind' }
      else if (ta_roll < 28) { ta_result = 'Boots of striding and springing' }
      else if (ta_roll < 30) { ta_result = 'Bracers of Archery' }
      else if (ta_roll < 32) { ta_result = 'a Brooch of shielding' }
      else if (ta_roll < 34) { ta_result = 'a Broom of Flying' }
      else if (ta_roll < 36) { ta_result = 'a Cloak of elvenkind' }
      else if (ta_roll < 38) { ta_result = 'a Cloak of Protection' }
      else if (ta_roll < 40) { ta_result = 'Gauntlets of Ogre Power' }
      else if (ta_roll < 42) { ta_result = 'a Hat of Disguise' }
      else if (ta_roll < 44) { ta_result = 'a Javelin of lightning' }
      else if (ta_roll < 46) { ta_result = 'a Pearl of Power' }
      else if (ta_roll < 48) { ta_result = 'a Rod of the Pact Keeper +1' }
      else if (ta_roll < 50) { ta_result = 'Slippers of spider climbing' }
      else if (ta_roll < 52) { ta_result = 'a Staff of the Adder' }
      else if (ta_roll < 54) { ta_result = 'a Staff of the Python' }
      else if (ta_roll < 56) { ta_result = 'a ' + sword() + ' of Vengence' }
      else if (ta_roll < 58) { ta_result = 'a Trident of fish command' }
      else if (ta_roll < 60) { ta_result = 'a Wand of Magic Missiles' }
      else if (ta_roll < 62) { ta_result = 'a Wand of the War Mage +1' }
      else if (ta_roll < 64) { ta_result = 'a Wand of Web' }
      else if (ta_roll < 66) { ta_result = 'a ' + weapon() + ' of Warning' }
      else if (ta_roll == 66) { ta_result = 'Adamantine Armor - Chain Mail' }
      else if (ta_roll == 67) { ta_result = 'Adamantine Armor - Chain Shirt' }
      else if (ta_roll == 68) { ta_result = 'Adamantine Armor - Scale Mail' }
      else if (ta_roll == 69) { ta_result = 'a Bag of Tricks - Gray' }
      else if (ta_roll == 70) { ta_result = 'a Bag of Tricks - Rust'}
      else if (ta_roll == 71) { ta_result = 'a Bag of Tricks - Tan' }
      else if (ta_roll == 72) { ta_result = 'Boots of the Winterlands' }
      else if (ta_roll == 73) { ta_result = 'a Circlet of Blasting' }
      else if (ta_roll == 74) { ta_result = 'a Deck of Illusions' }
      else if (ta_roll == 75) { ta_result = 'an Eversmoking bottle' }
      else if (ta_roll == 76) { ta_result = 'Eyes of Charming' }
      else if (ta_roll == 77) { ta_result = 'Eyes of the Eagle' }
      else if (ta_roll == 78) { ta_result = 'a Figuring of Wonderous Power - silver raven'}
      else if (ta_roll == 79) { ta_result = 'a Gem of Brightness' }
      else if (ta_roll == 80) { ta_result = 'Gloves of Missile Snaring' }
      else if (ta_roll == 81) { ta_result = 'Gloves of swimming and climbing' }
      else if (ta_roll == 82) { ta_result = 'Gloves of thievery' }
      else if (ta_roll == 83) { ta_result = 'a Headband of intellect' }
      else if (ta_roll == 84) { ta_result = 'a Helm of telepathy' }
      else if (ta_roll == 85) { ta_result = 'an Instrument of the bards - Doss Lute' }
      else if (ta_roll == 86) { ta_result = 'an Instruments of the bards - Bandore' }
      else if (ta_roll == 87) { ta_result = 'an Instruments of the bards - Cittern' }
      else if (ta_roll == 88) { ta_result = 'a Medallion of thoughts'}
      else if (ta_roll == 89) { ta_result = 'a Necklace of Adaptation' }
      else if (ta_roll == 90) { ta_result = 'a Periapt of Wound closure' }
      else if (ta_roll == 91) { ta_result = 'a Pipes of haunting' }
      else if (ta_roll == 92) { ta_result = 'a Pipes of the sewers' }
      else if (ta_roll == 93) { ta_result = 'a Ring of Jumping' }
      else if (ta_roll == 94) { ta_result = 'a Ring of mind shielding' }
      else if (ta_roll == 95) { ta_result = 'a Ring of warmth' }
      else if (ta_roll == 96) { ta_result = 'a Ring of water walking' }
      else if (ta_roll == 97) { ta_result = 'a Quiver of Ehlonna' }
      else if (ta_roll == 98) { ta_result = 'a Stone of good luck'}
      else if (ta_roll == 99) { ta_result = 'a Wind Fan' }
      else { ta_result = 'Winged boots' }
      return ta_result
}

function table_g() {
      ta_roll = randomInteger(100)
      if (ta_roll < 12) { ta_result = 'a ' +  weapon() + ' +2' }
      else if (ta_roll < 15) { ta_result = 'a Figurine of Wonderous Power' }
      else if (ta_roll == 15) { ta_result = 'Adamantine Armor - Breast Plate' }
      else if (ta_roll == 16) { ta_result = 'Adamantine Armor - Splint' }
      else if (ta_roll == 17) { ta_result = 'an Amulet of Health' }
      else if (ta_roll == 18) { ta_result = 'Armor of health' }
      else if (ta_roll == 19) { ta_result = 'Armor of Vulnerability' }
      else if (ta_roll == 20) { ta_result = 'an Arrow-catching Shield' }
      else if (ta_roll == 21) { ta_result = 'a Belt of Dwarvenkind' }
      else if (ta_roll == 22) { ta_result = 'a Belt of Hill Giant Strength' }
      else if (ta_roll == 23) { ta_result = 'Boots of levitation' }
      else if (ta_roll == 24) { ta_result = 'Boots of Speed' }
      else if (ta_roll == 25) { ta_result = 'a Bowl of Command water elementals' }
      else if (ta_roll == 26) { ta_result = 'Bracers of defense' }
      else if (ta_roll == 27) { ta_result = 'a Brazier of commanding fire elementals' }
      else if (ta_roll == 28) { ta_result = 'a Cape of the mountbank' }
      else if (ta_roll == 29) { ta_result = 'a Censer of controlling air elementals' }
      else if (ta_roll == 30) { ta_result = 'Armor +1 - Chain Mail' }
      else if (ta_roll == 31) { ta_result = 'Armor of Resistance - Chain Mail' }
      else if (ta_roll == 32) { ta_result = 'Armor +1 - Chain Shirt' }
      else if (ta_roll == 33) { ta_result = 'Armor of Resistance - Chain Shirt' }
      else if (ta_roll == 34) { ta_result = 'a Cloak of Displacement' }
      else if (ta_roll == 35) { ta_result = 'a Cloak of the Bat' }
      else if (ta_roll == 36) { ta_result = 'a Cube of Force' }
      else if (ta_roll == 37) { ta_result = 'Daerns Instant Fortress' }
      else if (ta_roll == 38) { ta_result = 'a Dagger of Venom' }
      else if (ta_roll == 39) { ta_result = 'Dimensional Shackles' }
      else if (ta_roll == 40) { ta_result = 'A ' + sword() + ' Dragon Slayer' }
      else if (ta_roll == 41) { ta_result = 'an Elven Chain' }
      else if (ta_roll == 42) { ta_result = 'a ' + sword() + ' Flame Tongue' }
      else if (ta_roll == 43) { ta_result = 'a Gem of Seeing' }
      else if (ta_roll == 44) { ta_result = 'a ' + sword() + ' Giant Slayer' }
      else if (ta_roll == 45) { ta_result = 'a Glamoured Studded Leather' }
      else if (ta_roll == 46) { ta_result = 'a Helm of teleportation' }
      else if (ta_roll == 47) { ta_result = 'a Horn of Blasting' }
      else if (ta_roll == 48) { ta_result = 'a Horn of Valhalla - Silver or Brass' }
      else if (ta_roll == 49) { ta_result = 'an Instrument of the Bards - Mandolin' }
      else if (ta_roll == 50) { ta_result = 'an Instrument of the Bards - Cli Lyre' }
      else if (ta_roll == 51) { ta_result = 'an Ioun stone - Awarness' }
      else if (ta_roll == 52) { ta_result = 'an Ioun stone - Protection' }
      else if (ta_roll == 53) { ta_result = 'an Ioun stone - Reserve' }
      else if (ta_roll == 54) { ta_result = 'an Ioun stone - Sustenance' }
      else if (ta_roll == 55) { ta_result = 'an Iron bands of Bilarro' }
      else if (ta_roll == 56) { ta_result = 'Armor +1 - leather' }
      else if (ta_roll == 57) { ta_result = 'Armor of Resistance - leather' }
      else if (ta_roll == 58) { ta_result = 'a Mace of Dispruption' }
      else if (ta_roll == 59) { ta_result = 'a Mace of Smiting' }
      else if (ta_roll == 60) { ta_result = 'a Mace of Terror' }
      else if (ta_roll == 61) { ta_result = 'a Mantle of Spell Resistance' }
      else if (ta_roll == 62) { ta_result = 'a Necklace of Prayer Beads' }
      else if (ta_roll == 63) { ta_result = 'a Periapt of proof against poison' }
      else if (ta_roll == 64) { ta_result = 'a Ring of animal influence' }
      else if (ta_roll == 65) { ta_result = 'a Ring of Evasion' }
      else if (ta_roll == 66) { ta_result = 'a Ring of Feather Falling' }
      else if (ta_roll == 67) { ta_result = 'a Ring of free action' }
      else if (ta_roll == 68) { ta_result = 'a Ring of protection' }
      else if (ta_roll == 69) { ta_result = 'a Ring of resistance' }
      else if (ta_roll == 70) { ta_result = 'a Ring of spell storing'}
      else if (ta_roll == 71) { ta_result = 'a Ring of the ram' }
      else if (ta_roll == 72) { ta_result = 'a Ring of x-ray vision' }
      else if (ta_roll == 73) { ta_result = 'a Robe of Eyes' }
      else if (ta_roll == 74) { ta_result = 'a Rod of Rulership' }
      else if (ta_roll == 75) { ta_result = 'a Rod of the pact keeper +2' }
      else if (ta_roll == 76) { ta_result = 'a Rope of entanglements' }
      else if (ta_roll == 77) { ta_result = 'Armor +1 - Scale Mail' }
      else if (ta_roll == 78) { ta_result = 'Armor of Resistance - Scale Mail'}
      else if (ta_roll == 79) { ta_result = 'a Shield +2' }
      else if (ta_roll == 80) { ta_result = 'a Shield of Missile Attraction' }
      else if (ta_roll == 81) { ta_result = 'a Staff of Charming' }
      else if (ta_roll == 82) { ta_result = 'a Staff of Healing' }
      else if (ta_roll == 83) { ta_result = 'a Staff of swarming inspects' }
      else if (ta_roll == 84) { ta_result = 'a Staff of the woodlands' }
      else if (ta_roll == 85) { ta_result = 'a Staff of withering' }
      else if (ta_roll == 86) { ta_result = 'a Stone of controlling earth elementals' }
      else if (ta_roll == 87) { ta_result = 'a ' + sword() + ' Sun Blade' }
      else if (ta_roll == 88) { ta_result = 'a ' + sword() + ' of Life Stealing'}
      else if (ta_roll == 89) { ta_result = 'a ' + sword() + ' of wounding' }
      else if (ta_roll == 90) { ta_result = 'a Tentacle Rod' }
      else if (ta_roll == 91) { ta_result = 'a Vicious ' + weapon() }
      else if (ta_roll == 92) { ta_result = 'a Wand of Binding' }
      else if (ta_roll == 93) { ta_result = 'a Wand of Enemy Detection' }
      else if (ta_roll == 94) { ta_result = 'a Wand of fear' }
      else if (ta_roll == 95) { ta_result = 'a Wand of fireballs' }
      else if (ta_roll == 96) { ta_result = 'a Wand of lightning bolts' }
      else if (ta_roll == 97) { ta_result = 'a Wand of paralysis' }
      else if (ta_roll == 98) { ta_result = 'a Wand of the war mage +2'}
      else if (ta_roll == 99) { ta_result = 'a Wand of wonder' }
      else { ta_result = 'Wings of flying' }
      return ta_result
}

function table_h() {
      ta_roll = randomInteger(100)
      if (ta_roll < 11) { ta_result = 'a ' +  weapon() + ' +3' }
      else if (ta_roll < 13) { ta_result = 'an Amulet of the planes' }
      else if (ta_roll < 15) { ta_result = 'a Carpet of flying' }
      else if (ta_roll < 17) { ta_result = 'a Crystal Ball - very rare version' }
      else if (ta_roll < 19) { ta_result = 'a Ring of regeneration' }
      else if (ta_roll < 21) { ta_result = 'a Ring of shooting stars' }
      else if (ta_roll < 23) { ta_result = 'a Ring of telekinesis' }
      else if (ta_roll < 25) { ta_result = 'a Robe of scintillating colors' }
      else if (ta_roll < 27) { ta_result = 'a Robe of stars' }
      else if (ta_roll < 29) { ta_result = 'a Rod of absorption' }
      else if (ta_roll < 31) { ta_result = 'a Rod of Alterness' }
      else if (ta_roll < 33) { ta_result = 'a Rod of security' }
      else if (ta_roll < 35) { ta_result = 'a Rod of the pact keeper +3' }
      else if (ta_roll < 37) { ta_result = 'a Scimitar of Speed' }
      else if (ta_roll < 39) { ta_result = 'a Shield +3' }
      else if (ta_roll < 41) { ta_result = 'a Staff of fire' }
      else if (ta_roll < 43) { ta_result = 'a Staff of frost' }
      else if (ta_roll < 45) { ta_result = 'a Staff of power' }
      else if (ta_roll < 47) { ta_result = 'a Staff of Striking' }
      else if (ta_roll < 49) { ta_result = 'a Staff of Thunder and Lightning' }
      else if (ta_roll < 51) { ta_result = 'a Sword of Sharpness' }
      else if (ta_roll < 53) { ta_result = 'a Wand of Polymorph' }
      else if (ta_roll < 55) { ta_result = 'a Wand of the war mage +3' }
      else if (ta_roll == 55) { ta_result = 'Adamantine armor - half plate' }
      else if (ta_roll == 56) { ta_result = 'Adamantine armor - plate' }
      else if (ta_roll == 57) { ta_result = 'an Animated shield' }
      else if (ta_roll == 58) { ta_result = 'a Belt of fire giant strength' }
	  else if (ta_roll == 59) { ta_result = 'a Belt of frost giant strength' }
      else if (ta_roll == 60) { ta_result = 'Amor +1 - breastplate' }
      else if (ta_roll == 61) { ta_result = 'Armor of resistance - breastplate' }
      else if (ta_roll == 62) { ta_result = 'a Candle of evocation' }
      else if (ta_roll == 63) { ta_result = 'Armor +2 - Chain mail' }
      else if (ta_roll == 64) { ta_result = 'Armor +2 - Chain shirt' }
      else if (ta_roll == 65) { ta_result = 'a Cloak of arachnida' }
      else if (ta_roll == 66) { ta_result = 'a Dancing sword' }
      else if (ta_roll == 67) { ta_result = 'Demon armor' }
      else if (ta_roll == 68) { ta_result = 'Dragon Scale armor' }
      else if (ta_roll == 69) { ta_result = 'Dwarven plate' }
      else if (ta_roll == 70) { ta_result = 'a Dwarven thrower' }
      else if (ta_roll == 71) { ta_result = 'an Efreeti bottle' }
      else if (ta_roll == 72) { ta_result = 'a Figurine of wonderous power - Steed' }
      else if (ta_roll == 73) { ta_result = 'a Frost brand' }
      else if (ta_roll == 74) { ta_result = 'a Helm of brilliance' }
      else if (ta_roll == 75) { ta_result = 'a Horn of Valhalla - bronze' }
      else if (ta_roll == 76) { ta_result = 'an Instrument of the bards - harp' }
      else if (ta_roll == 77) { ta_result = 'an Ioun stone - absorption' }
      else if (ta_roll == 78) { ta_result = 'an Ioun stone - agility' }
      else if (ta_roll == 79) { ta_result = 'an Ioun stone - fortitude' }
      else if (ta_roll == 80) { ta_result = 'an Ioun stone - insight' }
      else if (ta_roll == 81) { ta_result = 'an Ioun stone - intellect' }
      else if (ta_roll == 82) { ta_result = 'an Ioun stone - leadership' }
      else if (ta_roll == 83) { ta_result = 'an Ioun stone - strength' }
      else if (ta_roll == 84) { ta_result = 'Armor +2 - leather' }
      else if (ta_roll == 85) { ta_result = 'a Manual of bodily health' }
      else if (ta_roll == 86) { ta_result = 'a Manual of gainful exercise' }
      else if (ta_roll == 87) { ta_result = 'a Manual of golems' }
      else if (ta_roll == 88) { ta_result = 'a Manual of quickness of action' }
      else if (ta_roll == 89) { ta_result = 'a Mirror of life trapping' }
      else if (ta_roll == 90) { ta_result = 'a Nine lives stealer'}
      else if (ta_roll == 91) { ta_result = 'an Oathbow' }
      else if (ta_roll == 92) { ta_result = 'Armor +2 - Scale mail' }
      else if (ta_roll == 93) { ta_result = 'a Spellguard shield' }
      else if (ta_roll == 94) { ta_result = 'Armor +1 - splint' }
      else if (ta_roll == 95) { ta_result = 'Armor of resistance - splint' }
      else if (ta_roll == 96) { ta_result = 'Armor +1 studded leather' }
      else if (ta_roll == 97) { ta_result = 'Armor of resistance - studded' }
      else if (ta_roll == 98) { ta_result = 'a Tome of clear thought' }
      else if (ta_roll == 99) { ta_result = 'a Tome of leadership and influence'}
      else { ta_result = 'a Tome of understanding' }
      return ta_result
}

function table_i() {
      ta_roll = randomInteger(100)
      if (ta_roll < 6) { ta_result = 'a ' + sword() +' Defender' }
      else if (ta_roll < 11) { ta_result = 'a Hammer of Thunderbolts' }
      else if (ta_roll < 16) { ta_result = 'a ' + sword() + ' Luck blade' }
      else if (ta_roll < 21) { ta_result = 'a ' + sword() + ' of answering' }
      else if (ta_roll < 24) { ta_result = 'a ' + sword() + 'Holy avenger' }
      else if (ta_roll < 27) { ta_result = 'a Ring of djinni summoning' }
      else if (ta_roll < 30) { ta_result = 'a Ring of invisibility' }
      else if (ta_roll < 33) { ta_result = 'a Ring of spell turning' }
      else if (ta_roll < 36) { ta_result = 'a Rod of lordly might' }
      else if (ta_roll < 39) { ta_result = 'a Staff of the magi' }
      else if (ta_roll < 42) { ta_result = 'a Vorpal ' + sword() }
      else if (ta_roll < 44) { ta_result = 'a Belt of cloud giant strength' }
      else if (ta_roll < 46) { ta_result = 'Armor +2 - breastplate' }
      else if (ta_roll < 48) { ta_result = 'Armor +3 - chain mail' }
      else if (ta_roll < 50) { ta_result = 'Armor +3 - chain shirt' }
      else if (ta_roll < 52) { ta_result = 'a Cloak of invisibility' }
      else if (ta_roll < 54) { ta_result = 'a Crystal Ball - legendary' }
      else if (ta_roll < 56) { ta_result = 'Armor +1 - half plate' }
      else if (ta_roll < 58) { ta_result = 'an Iron Flask' }
      else if (ta_roll < 60) { ta_result = 'Armor +3 leather' }
      else if (ta_roll < 62) { ta_result = 'Armor +1 plate' }
      else if (ta_roll < 64) { ta_result = 'a Robe of the archmagi' }
      else if (ta_roll < 66) { ta_result = 'a Rod of resurrection' }
      else if (ta_roll < 68) { ta_result = 'Armor +1 scale mail' }
      else if (ta_roll < 70) { ta_result = 'a Scarab of protection' }
      else if (ta_roll < 72) { ta_result = 'Armor +2 scale mail' }
      else if (ta_roll < 74) { ta_result = 'Armor +2 studded leather' }
      else if (ta_roll < 76) { ta_result = 'a Well of many worlds' }
      else if (ta_roll == 76) { 
		armor_roll = randomInteger(100)
		if (armor_roll < 3) { ta_result = 'Armor +2 - half plate' }
		else if (armor_roll < 5) { ta_result = 'Armor +2 - plate' }
		else if (armor_roll < 7) { ta_result = 'Armor +3 - studded' }
		else if (armor_roll < 9) { ta_result = 'Armor +3 - breastplate' }
		else if (armor_roll < 11) { ta_result = 'Armor +3 - splint' }
		else if (armor_roll == 11) { ta_result = 'Armor +3 - half plate' }
		else { ta_result = 'Armor +3 - plate' }
	  }
      else if (ta_roll == 77) { ta_result = 'an Apparatus of Kwalish' }
      else if (ta_roll == 78) { ta_result = 'Armor of invulnerability' }
      else if (ta_roll == 79) { ta_result = 'a Belt of Storm Giant strength' }
      else if (ta_roll == 80) { ta_result = 'a Cubic gate' }
      else if (ta_roll == 81) { ta_result = 'a Deck of many things' }
      else if (ta_roll == 82) { ta_result = 'an Efreeti chain' }
      else if (ta_roll == 83) { ta_result = 'Armor of resistance - half plate' }
      else if (ta_roll == 84) { ta_result = 'a Horn of Valhalla - iron' }
      else if (ta_roll == 85) { ta_result = 'an Instrument of the bards - harp' }
      else if (ta_roll == 86) { ta_result = 'an Ioun stone - greater absorption' }
      else if (ta_roll == 87) { ta_result = 'an Ioun stone - mastery' }
      else if (ta_roll == 88) { ta_result = 'an Ioun stone - regeneration' }
      else if (ta_roll == 89) { ta_result = 'Plate armor of etherealness' }
      else if (ta_roll == 90) { ta_result = 'Plate armor of resistance'}
      else if (ta_roll == 91) { ta_result = 'a Ring of air elemental command' }
      else if (ta_roll == 92) { ta_result = 'a Ring of earth elemental command' }
      else if (ta_roll == 93) { ta_result = 'a Ring of fire elemental command' }
      else if (ta_roll == 94) { ta_result = 'a Ring of three wishes' }
      else if (ta_roll == 95) { ta_result = 'a Ring of water elemental command' }
      else if (ta_roll == 96) { ta_result = 'a Sphere of annihilation' }
      else if (ta_roll == 97) { ta_result = 'a Talisman of pure good' }
      else if (ta_roll == 98) { ta_result = 'a Talisman of the sphere' }
      else if (ta_roll == 99) { ta_result = 'a Talisman of ultimate evil'}
      else { ta_result = 'a Tome of the stilled tongue' }
      return ta_result
}

on("chat:message", function(msg) {
  //This allows players to enter !sr <number> to roll a number of d6 dice with a target of 4.
  if(msg.type == "api" && msg.content.indexOf("!sthg ") !== -1) {
    treasure_CR = msg.content.replace("!sthg ", "")
    thcr1 = randomInteger(100)
        var styles = mystyle().split("|")
        var colour = styles[0]
        var divstyle = styles[1]
        var astyle1 = styles[2]
        var astyle2 = styles[3]
        var tablestyle = styles[4]
        var arrowstyle = styles[5]
        var headstyle = styles[6]
        var substyle = styles[7]
        var tdstyle = styles[8]
        var credstyle = styles[9]
	
//    sendChat(msg.who, "/w gm You rolled " + thcr1 + " (d100).")
        if(treasure_CR < 0) {
          sendChat(msg.who, "/w gm ERROR: The value must be a positive integer")
          treasure_CR = 0
          return; }
         else if (treasure_CR < 5) {
          th_cp = Math.floor((randomInteger(6) + randomInteger(6) + randomInteger(6) + randomInteger(6) + randomInteger(6) + randomInteger(6)) * 100)
          th_sp = Math.floor((randomInteger(6) + randomInteger(6) + randomInteger(6)) * 100)
          th_gp = Math.floor((randomInteger(6) + randomInteger(6)) * 10)
          addtreasure = ""
            if (thcr1 <7) { 
			} else if (thcr1 < 17) { 
                gemf = randomInteger(6) + randomInteger(6)
                addtreasure += "You also found " + gemf + " gems each worth 10gp. "
            } else if (thcr1 < 27) {
                gemf = randomInteger(4) + randomInteger(4)
                addtreasure += "You also found " + gemf + " art object each worth 25gp. "
            } else if (thcr1 < 37) {
                gemf = randomInteger(6) + randomInteger(6)
                addtreasure += "You also found " + gemf + " gems each worth 50gp. "
            } else if (thcr1 < 45) {
                gemf = randomInteger(6) + randomInteger(6)
                addtreasure += "You also found " + gemf + " gems each worth 10gp. "
                for (i = 0; i < randomInteger(6); i++) {
                    addtreasure += "You also found " + table_a() + ". "
                }
            } else if (thcr1 < 53) {
                gemf = randomInteger(4) + randomInteger(4)
                addtreasure +=  "You also found " + gemf + " art objects each worth 25gp. "
                for (i = 0; i < randomInteger(6); i++) {
                    addtreasure += "You also found " + table_a() + ". "
                }
            } else if (thcr1 < 61) {
                gemf = randomInteger(6) + randomInteger(6)
                addtreasure +=  "You also found " + gemf + " gems each worth 50gp. "
                for (i = 0; i < randomInteger(6); i++) {
                    addtreasure +=  "You also found " + table_a() + ". "
                }
            } else if (thcr1 < 66) { 
                gemf = randomInteger(6) + randomInteger(6)
                addtreasure +=  "You also found " + gemf + " gems each worth 10gp. "
                for (i = 0; i < randomInteger(4); i++) {
                    addtreasure +=  "You also found " + table_b() + ". "
                }
            } else if (thcr1 < 71) { 
                gemf = randomInteger(4) + randomInteger(4)
                addtreasure +=  "You also found " + gemf + " art objects each worth 25gp. "
                for (i = 0; i < randomInteger(4); i++) {
                    addtreasure +=  "You also found " + table_b() + ". "
                }
            } else if (thcr1 < 76) { 
                gemf = randomInteger(6) + randomInteger(6)
                addtreasure +=  "You also found " + gemf + " gems each worth 50gp. "
                for (i = 0; i < randomInteger(4); i++) {
                    addtreasure +=  "You also found " + table_b() + ". "
                }
            } else if (thcr1 < 79) { 
                gemf = randomInteger(6) + randomInteger(6)
                addtreasure +=  "You also found " + gemf + " gems each worth 10gp. "
                for (i = 0; i < randomInteger(4); i++) {
                    addtreasure +=  "You also found " + table_c() + ". "
                }
            } else if (thcr1 < 81) { 
                gemf = randomInteger(6) + randomInteger(6)
                addtreasure +=  "You also found " + gemf + " art objects each worth 25gp. "
                for (i = 0; i < randomInteger(4); i++) {
                    addtreasure +=  "You also found " + table_c() + ". "
                }
            } else if (thcr1 < 86) { 
                gemf = randomInteger(6) + randomInteger(6)
                addtreasure +=  "You also found " + gemf + " gems each worth 50gp. "
                for (i = 0; i < randomInteger(4); i++) {
                    addtreasure +=  "You also found " + table_c() + ". "
                }
            } else if (thcr1 < 93) { 
                gemf = randomInteger(6) + randomInteger(6)
                addtreasure +=  "You also found " + gemf + " art objects each worth 25gp. "   
                for (i = 0; i < randomInteger(4); i++) {
                    addtreasure +=  "You also found " + table_f() + ". "
                }
            } else if (thcr1 < 98) { 
                gemf = randomInteger(6) + randomInteger(6)
                addtreasure +=  "You also found " + gemf + " gems each worth 50gp. "
                for (i = 0; i < randomInteger(4); i++) {
                    addtreasure +=  "You also found " + table_f() + ". "
                }
            } else if (thcr1 < 100) { 
                gemf = randomInteger(4) + randomInteger(4)
                addtreasure +=  "You also found " + gemf + " art objects each worth 25gp and a " + table_g() + ". "
            } else { 
                gemf = randomInteger(6) + randomInteger(6)
                addtreasure +=  "You also found " + gemf + " gems each worth 50gp and a " + table_g() + ". "
            }
          sendChat(msg.who, "/w gm <div " + divstyle + "><div " + headstyle + '>Loot box!</div>' + "Your treasure Challenge is: " + treasure_CR + ". You found " + th_cp + "cp, " + th_sp + "sp, " + th_gp + "gp. " + addtreasure + '<div ' + credstyle + '>made by Spaceweasels!</div></div>')
        } else if (treasure_CR < 11) {
			th_cp = Math.floor((randomInteger(6) + randomInteger(6)) * 100)
			th_sp = Math.floor((randomInteger(6) + randomInteger(6)) * 1000)
			th_gp = Math.floor((randomInteger(6) + randomInteger(6) + randomInteger(6) + randomInteger(6) + randomInteger(6) + randomInteger(6)) * 100)
			th_pp = Math.floor((randomInteger(6) + randomInteger(6) + randomInteger(6)) * 10)
            addtreasure = "Your treasure Challenge is: " + treasure_CR + ". You found " + th_cp + "cp, " + th_sp + "sp, " + th_gp + "gp, "+ th_pp + "pp. "
            if (thcr1 <5) { 
			} else if (thcr1 < 11) { 
                addtreasure +=  " You also found " + (Math.floor(randomInteger(4) + randomInteger(4))) + " art objects worth 25gp each."
            } else if (thcr1 < 17) {
                addtreasure +=  " You also found " + (Math.floor(randomInteger(6) + randomInteger(6) +  randomInteger(6))) + " gems each worth 50gp."
            } else if (thcr1 < 23) { 
                addtreasure +=  " You also found " + (Math.floor(randomInteger(6) + randomInteger(6) + randomInteger(6))) + " gems each worth 100gp."
            } else if (thcr1 < 29) {
                addtreasure +=  " You also found " + (Math.floor(randomInteger(4) + randomInteger(4))) + " art objects each worth 250gp."
            } else if (thcr1 < 33) {
                addtreasure +=  " You also found " + (Math.floor(randomInteger(4) + randomInteger(4))) + " art objects each worth 25gp"
                for (i = 0; i < randomInteger(6); i++) {
                    addtreasure +=  " You also found " + table_a() + ". "
                }
            } else if (thcr1 < 37) { 
                addtreasure +=  " You also found " + (Math.floor(randomInteger(6) + randomInteger(6) + randomInteger(6))) + " gems each worth 50gp. "
                for (i = 0; i < randomInteger(6); i++) {
                    addtreasure +=  " You also found " + table_a() + ". "
                }
            } else if (thcr1 < 41) { 
                addtreasure +=  " You also found " + (Math.floor(randomInteger(6) + randomInteger(6) + randomInteger(6))) + " gems each worth 100gp. "
                for (i = 0; i < randomInteger(4); i++) {
                    addtreasure +=  " You also found " + table_a() + ". "
                }
            } else if (thcr1 < 45) { 
                addtreasure +=  " You also found " + (Math.floor(randomInteger(4) + randomInteger(4))) + " art objects each worth 250gp. "
                for (i = 0; i < randomInteger(6); i++) {
                    addtreasure +=  " You also found " + table_a() + ". "
                }
            } else if (thcr1 < 50) { 
                gemf = randomInteger(4) + randomInteger(4)
                addtreasure +=  " You also found " + gemf + " art objects each worth 25gp. "
                for (i = 0; i < randomInteger(4); i++) {
                    addtreasure +=  " You also found " + table_b() + ". "
                }
            } else if (thcr1 < 55) { 
                gemf = randomInteger(6) + randomInteger(6) + randomInteger(6)
                addtreasure +=  " You also found " + gemf + " gems each worth 50gp. "
                for (i = 0; i < randomInteger(4); i++) {
                    addtreasure +=  " You also found " + table_b() + ". "
                }
            } else if (thcr1 < 60) { 
                gemf = randomInteger(6) + randomInteger(6) + randomInteger(6)
                addtreasure +=  " You also found " + gemf + " gems each worth 100gp. "    
                for (i = 0; i < randomInteger(4); i++) {
                    addtreasure +=  " You also found " + table_b() + ". "
                }
            } else if (thcr1 < 64) { 
                gemf = randomInteger(4) + randomInteger(4)
                addtreasure +=  " You also found " + gemf + " art objectss each worth 250gp. "
                for (i = 0; i < randomInteger(4); i++) {
                    addtreasure +=  " You also found " + table_b() + ". "
                }
            } else if (thcr1 < 67) { 
                gemf = randomInteger(4) + randomInteger(4)
                addtreasure +=  " You also found " + gemf + " art objects each worth 25gp. " 
                for (i = 0; i < randomInteger(4); i++) {
                    addtreasure +=  " You also found " + table_c() + ". "
                }
            } else if (thcr1 < 70) { 
                gemf = randomInteger(6) + randomInteger(6) + randomInteger(6)
                addtreasure +=  " You also found " + gemf + " gems each worth 50gp. "
                for (i = 0; i < randomInteger(4); i++) {
                    addtreasure +=  " You also found " + table_c() + ". "
                }
            } else if (thcr1 < 73) { 
                gemf = randomInteger(6) + randomInteger(6) + randomInteger(6)
                addtreasure +=  " You also found " + gemf + " gems each worth 100gp. "  
                for (i = 0; i < randomInteger(4); i++) {
                    addtreasure +=  " You also found " + table_c() + ". "
                }
			} else if (thcr1 < 75) { 
                gemf = randomInteger(4) + randomInteger(4)
                addtreasure +=  " You also found " + gemf + " art objects each worth 250gp. "    
                for (i = 0; i < randomInteger(4); i++) {
                    addtreasure +=  " You also found " + table_c() + ". "
                }
            } else if (thcr1 < 77) { 
                gemf = randomInteger(4) + randomInteger(4)
                addtreasure +=  " You also found " + gemf + " art objects each worth 25gp and a " + table_d() + ". "   
            } else if (thcr1 < 79) { 
                gemf = randomInteger(6) + randomInteger(6) + randomInteger(6)
                addtreasure +=  " You also found " + gemf + " gems each worth 50gp and a " + table_d() + ". "		
            } else if (thcr1 == 79) { 
                gemf = randomInteger(6) + randomInteger(6) + randomInteger(6)
                addtreasure +=  " You also found " + gemf + " gems each worth 100gp and a " + table_d() + ". "	
            } else if (thcr1 == 80) { 
                gemf = randomInteger(4) + randomInteger(4)
                addtreasure +=  " You also found " + gemf + " art objects each worth 250gp and a " + table_d() + ". "
			} else if (thcr1 < 85) { 
                gemf = randomInteger(4) + randomInteger(4)
                addtreasure +=  " You also found " + gemf + " art objects each worth 25gp. "  
                for (i = 0; i < randomInteger(4); i++) {
                    addtreasure +=  " You also found " + table_f() + ". "
                }
			} else if (thcr1 < 89) { 
                gemf = randomInteger(6) + randomInteger(6) + randomInteger(6)
                addtreasure +=  " You also found " + gemf + " gems each worth 50gp. "
                for (i = 0; i < randomInteger(4); i++) {
                    addtreasure +=  " You also found " + table_f() + ". "
                }				
			} else if (thcr1 < 92) { 
                gemf = randomInteger(6) + randomInteger(6) + randomInteger(6)
                addtreasure +=  " You also found " + gemf + " gems each worth 100gp. "    
                for (i = 0; i < randomInteger(4); i++) {
                    addtreasure +=  " You also found " + table_f() + ". "
                }				
			} else if (thcr1 < 95) { 
                gemf = randomInteger(4) + randomInteger(4)
                addtreasure +=  " You also found " + gemf + " art objects each worth 250gp. "    
                for (i = 0; i < randomInteger(4); i++) {
                    addtreasure +=  " You also found " + table_f() + ". "
                }
			} else if (thcr1 < 97) { 
                gemf = randomInteger(6) + randomInteger(6) + randomInteger(6)
                addtreasure +=  " You also found " + gemf + " gems each worth 100gp. " 
                for (i = 0; i < randomInteger(4); i++) {
                    addtreasure +=  " You also found " + table_g() + ". "
                }
			} else if (thcr1 < 99) { 
                gemf = randomInteger(4) + randomInteger(4)
                addtreasure +=  " You also found " + gemf + " art objects each worth 250gp. "
                for (i = 0; i < randomInteger(4); i++) {
                    addtreasure +=  " You also found " + table_g() + ". "
                }				
            } else if (thcr1 == 99) { 
                gemf = randomInteger(6) + randomInteger(6) + randomInteger(6)
                addtreasure +=  " You also found " + gemf + " gems each worth 100gp and a " + table_d() + ". "		
			} else { 
                gemf = randomInteger(4) + randomInteger(4)
                addtreasure +=  " You also found " + gemf + " art objects each worth 250gp and a " + table_h() + ". "
            }
			          sendChat(msg.who, "/w gm <div " + divstyle + "><div " + headstyle + '>Loot box!</div>' + addtreasure + '<div ' + credstyle + '>made by Spaceweasels!</div></div>')
		} else if (treasure_CR < 17) {
			th_gp = Math.floor((randomInteger(6) + randomInteger(6) + randomInteger(6) + randomInteger(6)) * 1000)
			th_pp = Math.floor((randomInteger(6) + randomInteger(6) + randomInteger(6) + randomInteger(6) + randomInteger(6)) * 100)
			sendChat(msg.who, "/w gm Your treasure Challenge is: " + treasure_CR + ". You found "  + th_gp + "gp, "+ th_pp + "pp. ")
			if (thcr1 <4) { 
			} else if (thcr1 < 7) { 
                sendChat(msg.who, "/w gm You also found " + (Math.floor(randomInteger(4) + randomInteger(4))) + " art objects worth 250gp each.")
			} else if (thcr1 < 11) { 
                sendChat(msg.who, "/w gm You also found " + (Math.floor(randomInteger(4) + randomInteger(4))) + " art objects worth 750gp each.")
            } else if (thcr1 < 13) {
                sendChat(msg.who, "/w gm You also found " + (Math.floor(randomInteger(6) + randomInteger(6) +  randomInteger(6))) + " gems each worth 500gp.")
            } else if (thcr1 < 16) {
                sendChat(msg.who, "/w gm You also found " + (Math.floor(randomInteger(6) + randomInteger(6) +  randomInteger(6))) + " gems each worth 1000gp.")

            } else if (thcr1 < 77) { 
                gemf = randomInteger(4) + randomInteger(4)
                sendChat(msg.who, "/w gm You also found " + gemf + " art objects each worth 25gp and a " + table_d())  
			}
				
		} else {
			th_gp = Math.floor((randomInteger(6) + randomInteger(6) + randomInteger(6) + randomInteger(6) + randomInteger(6) + randomInteger(6)) * 2000)
			th_pp = Math.floor((randomInteger(6) + randomInteger(6) + randomInteger(6) + randomInteger(6)) * 2000)
			sendChat(msg.who, "/w gm Your treasure Challenge is: " + treasure_CR + ". You found " + th_gp + "gp, "+ th_pp + "pp. ")

		} 
  } else if (msg.type == "api" && msg.content.indexOf("!sitg ") !== -1) { 
		treasure_CR = msg.content.replace("!sitg ", "")
		thcr1 = randomInteger(100)
//    sendChat(msg.who, "/w gm You rolled " + thcr1 + " (d100).")
        if(treasure_CR < 0) {
          sendChat(msg.who, "/w gm ERROR: The value must be a positive integer")
          treasure_CR = 0
          return; }
         else if (treasure_CR < 5) {
			if (thcr1 <31) { 
            sendChat(msg.who, "/w gm Your treasure Challenge is: " + treasure_CR + ". You found " +  Math.floor(randomInteger(6) + randomInteger(6) + randomInteger(6) + randomInteger(6) + randomInteger(6)) + " copper pieces.")
		    } else if (thcr1 <61) { 
            sendChat(msg.who, "/w gm Your treasure Challenge is: " + treasure_CR + ". You found " + Math.floor(randomInteger(6) + randomInteger(6) + randomInteger(6) + randomInteger(6)) + " silver pieces.")
		    } else if (thcr1 <71) {
            sendChat(msg.who, "/w gm Your treasure Challenge is: " + treasure_CR + ". You found " + Math.floor(randomInteger(6) + randomInteger(6) + randomInteger(6)) + " electrum pieces.")
		    } else if (thcr1 <96) {
            sendChat(msg.who, "/w gm Your treasure Challenge is: " + treasure_CR + ". You found " + Math.floor(randomInteger(6) + randomInteger(6) + randomInteger(6)) + " gold pieces.")
		    } else {
		    sendChat(msg.who, "/w gm Your treasure Challenge is: " + treasure_CR + ". You found " + randomInteger(6) + " platinum pieces.")
		    }
		 } else if (treasure_CR < 11) {
			if (thcr1 <31) { 
            sendChat(msg.who, "/w gm Your treasure Challenge is: " + treasure_CR + ". You found " +  Math.floor((randomInteger(6) + randomInteger(6) + randomInteger(6) + randomInteger(6)) * 100) + " copper pieces and " + Math.floor(randomInteger(6) * 10) + " electrum pieces.")
		    } else if (thcr1 <61) { 
            sendChat(msg.who, "/w gm Your treasure Challenge is: " + treasure_CR + ". You found " + Math.floor((randomInteger(6) + randomInteger(6) + randomInteger(6) + randomInteger(6) + randomInteger(6) + randomInteger(6)) * 10) + " silver pieces and " + Math.floor((randomInteger(6) + randomInteger(6)) * 10) + " gold pieces.")
		    } else if (thcr1 <71) {
            sendChat(msg.who, "/w gm Your treasure Challenge is: " + treasure_CR + ". You found " + Math.floor((randomInteger(6) + randomInteger(6) + randomInteger(6)) * 10) + " electrum pieces and " + Math.floor((randomInteger(6) + randomInteger(6)) * 10) + " gold pieces.")
		    } else if (thcr1 <96) {
            sendChat(msg.who, "/w gm Your treasure Challenge is: " + treasure_CR + ". You found " + Math.floor((randomInteger(6) + randomInteger(6) + randomInteger(6) + randomInteger(6)) * 10) + " gold pieces.")
		    } else {
		    sendChat(msg.who, "/w gm Your treasure Challenge is: " + treasure_CR + ". You found " + Math.floor((randomInteger(6) + randomInteger(6)) * 10) + " gold pieces and " + Math.floor(randomInteger(6) + randomInteger(6) + randomInteger(6)) + " platinum pieces.")
		    }
		} else if (treasure_CR < 17) {
			if (thcr1 <21) { 
            sendChat(msg.who, "/w gm Your treasure Challenge is: " + treasure_CR + ". You found " +  Math.floor((randomInteger(6) + randomInteger(6) + randomInteger(6) + randomInteger(6)) * 100) + " silver pieces and " + Math.floor((randomInteger(6) * 100)) + " gold pieces.")
		    } else if (thcr1 <36) { 
            sendChat(msg.who, "/w gm Your treasure Challenge is: " + treasure_CR + ". You found " + Math.floor(randomInteger(6)  * 100) + " electrum pieces and " + Math.floor(randomInteger(6) * 100) + " gold pieces.")
		    } else if (thcr1 <76) {
            sendChat(msg.who, "/w gm Your treasure Challenge is: " + treasure_CR + ". You found " + Math.floor((randomInteger(6) + randomInteger(6))  * 100) + " gold pieces and " + Math.floor(randomInteger(6) * 10) + " platinum pieces.")
		    } else {
		    sendChat(msg.who, "/w gm Your treasure Challenge is: " + treasure_CR + ". You found " + Math.floor((randomInteger(6) + randomInteger(6)) * 100) + " gold pieces and " + Math.floor((randomInteger(6) + randomInteger(6)) * 10) + " platinum pieces.")
		    }
		 } else {
			if (thcr1 <16) { 
            sendChat(msg.who, "/w gm Your treasure Challenge is: " + treasure_CR + ". You found " +  Math.floor((randomInteger(6) + randomInteger(6)) * 1000) + " electrum pieces and " + Math.floor((randomInteger(6) + randomInteger(6)+ randomInteger(6) + randomInteger(6) + randomInteger(6) + randomInteger(6) + randomInteger(6) + randomInteger(6)) * 100) + " gold pieces.")
		    } else if (thcr1 <56) { 
            sendChat(msg.who, "/w gm Your treasure Challenge is: " + treasure_CR + ". You found " + Math.floor((randomInteger(6) + randomInteger(6)) * 1000) + " gold pieces and " + Math.floor(randomInteger(6)  * 100) + " platinum pieces.")
		    } else {
		    sendChat(msg.who, "/w gm Your treasure Challenge is: " + treasure_CR + ". You found " + Math.floor(randomInteger(6) * 1000) + " gold pieces and " + Math.floor((randomInteger(6) + randomInteger(6)) * 100) + " platinum pieces.")
		    }
		 }
  }
});
