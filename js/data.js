// #region Druid
let preRaidDruid = new TableList(
    classes.druid,
    [
        new ItemSlotRow( //Head
            itemSlots.head,
            new WowheadLink(
                10504,
                "Green Lens"
            ),
            new WowheadLink(
                13102,
                "Cassandra's Grace"
            ),
            null,
            new WowheadLink(
                11622,
                "Lesser Arcanum of Rumination"
            ),
        ),
        new ItemSlotRow( //Neck
            itemSlots.neck,
            new WowheadLink(
                18723,
                "Animated Chain Necklace"
            ),
            new WowheadLink(
                13141,
                "Tooth of Gnarr"
            ),
            null,
            null
        ),
        new ItemSlotRow( //Shoulder
            itemSlots.shoulder,
            new WowheadLink(
                15061,
                "Living Shoulders"
            ),
            null,
            null,
            new WowheadLink(
                18182,
                "Chromatic Mantle of the Dawn"
            ),
        ),
        new ItemSlotRow( //Back
            itemSlots.back,
            new WowheadLink(
                13386,
                "Archivist Cape"
            ),
            null,
            null,
            new WowheadLink(
                20014,
                "Enchant Cloak - Greater Resistance",
                linkType.spell
            ),
        ),
        new ItemSlotRow( //Chest
            itemSlots.chest,
            new WowheadLink(
                13346,
                "Robes of the Exalted"
            ),
            null,
            null,
            new WowheadLink(
                20025,
                "Enchant Chest - Greater Stats",
                linkType.spell
            ),
        ),
        new ItemSlotRow( //Wrist
            itemSlots.wrist,
            new WowheadLink(
                18263,
                "Flarecore Wraps"
            ),
            new WowheadLink(
                13208,
                "Bleak Howler Armguards"
            ),
            null,
            new WowheadLink(
                20009,
                "Enchant Bracer - Superior Spirit",
                linkType.spell
            ),
        ),
        new ItemSlotRow( //Hands
            itemSlots.hands,
            new WowheadLink(
                12554,
                "Hands of ther Exalted Herald"
            ),
            new WowheadLink(
                13253,
                "Hands of Power"
            ),
            null,
            null
        ),
        new ItemSlotRow( //Belt
            itemSlots.belt,
            new WowheadLink(
                14553,
                "Sash of Mercy"
            ),
            null,
            null,
            null
        ),
        new ItemSlotRow( //Legs
            itemSlots.legs,
            new WowheadLink(
                11841,
                "Senior Designer's Pantaloons"
            ),
            new WowheadLink(
                18682,
                "Ghoul Skin Leggings"
            ),
            null,
            new WowheadLink(
                11622,
                "Lesser Arcanum of Rumination"
            ),
        ),
        new ItemSlotRow( //Feet
            itemSlots.feet,
            new WowheadLink(
                13954,
                "Verdant Footpads"
            ),
            null,
            null,
            new WowheadLink(
                13890,
                "Enchant Boots - Minor Speed",
                linkType.spell
            ),
        ),
        new ItemSlotRow( //Rings
            itemSlots.rings,
            new WowheadLink(
                13143,
                "Mark of the Dragon Lord"
            ),
            new WowheadLink(
                13178,
                "Rosewine Circle"
            ),
            new WowheadLink(
                16058,
                "Fordring's Seal"
            ),
            null
        ),
        new ItemSlotRow( //Trinkets
            itemSlots.trinkets,
            new WowheadLink(
                11819,
                "Second Wind"
            ),
            new WowheadLink(
                12930,
                "Briarwood Reed"
            ),
            null,
            null
        ),
        new ItemSlotRow( //MH
            itemSlots.mainHand,
            new WowheadLink(
                11923,
                "The Hammer of Grace"
            ),
            null,
            null,
            new WowheadLink(
                22750,
                "Enchant Weapon - Healing Power",
                linkType.spell
            ),
        ),
        new ItemSlotRow( //OH
            itemSlots.offHand,
            new WowheadLink(
                11928,
                "Thaurissan's Royal Scepter"
            ),
            null,
            null,
            null,
        ),
        new ItemSlotRow( //2H
            itemSlots.twoHand,
            new WowheadLink(
                11932,
                "Guiding Stave of Wisdom"
            ),
            null,
            null,
            null
        ),
    ]
);

let tierOneDruid = new TableList(
    classes.druid,
    [
        new ItemSlotRow( //Head
            itemSlots.head,
            new WowheadLink(
                16900,
                "Stormrage Cover"
            ),
            new WowheadLink(
                13102,
                "Cassandra's Grace"
            ),
            null,
            new WowheadLink(
                11622,
                "Lesser Arcanum of Rumination"
            ),
        ),
        new ItemSlotRow( //Neck
            itemSlots.neck,
            new WowheadLink(
                18814,
                "Choker of the Fire Lord"
            ),
            new WowheadLink(
                17109,
                "Choker of Enlightenment"
            ),
            new WowheadLink(
                18723,
                "Animated Chain Necklace"
            ),
            null
        ),
        new ItemSlotRow( //Shoulder
            itemSlots.shoulder,
            new WowheadLink(
                18810,
                "Wild Growth Spaulders"
            ),
            new WowheadLink(
                16836,
                "Cenarion Spaulders"
            ),
            new WowheadLink(
                15061,
                "Living Shoulders"
            ),
            new WowheadLink(
                18182,
                "Chromatic Mantle of the Dawn"
            ),
        ),
        new ItemSlotRow( //Back
            itemSlots.back,
            new WowheadLink(
                13386,
                "Archivist Cape"
            ),
            new WowheadLink(
                17078,
                "Sapphiron Drape"
            ),
            null,
            new WowheadLink(
                20014,
                "Enchant Cloak - Greater Resistance",
                linkType.spell
            ),
        ),
        new ItemSlotRow( //Chest
            itemSlots.chest,
            new WowheadLink(
                13346,
                "Robes of the Exalted"
            ),
            new WowheadLink(
                19145,
                "Robe of Volatile Power"
            ),
            new WowheadLink(
                16833,
                "Cenarion Vestments"
            ),
            new WowheadLink(
                20025,
                "Enchant Chest - Greater Stats",
                linkType.spell
            ),
        ),
        new ItemSlotRow( //Wrist
            itemSlots.wrist,
            new WowheadLink(
                18263,
                "Flarecore Wraps"
            ),
            new WowheadLink(
                13208,
                "Bleak Howler Armguards"
            ),
            new WowheadLink(
                16830,
                "Cenarion Bracers"
            ),
            new WowheadLink(
                20009,
                "Enchant Bracer - Superior Spirit",
                linkType.spell
            ),
        ),

        new ItemSlotRow( //Hands
            itemSlots.hands,
            new WowheadLink(
                12554,
                "Hands of the Exalted Herald"
            ),
            new WowheadLink(
                13253,
                "Hands of Power"
            ),
            new WowheadLink(
                16831,
                "Cenarion Gloves"
            ),
            null
        ),
        new ItemSlotRow( //Belt
            itemSlots.belt,
            new WowheadLink(
                14553,
                "Sash of Mercy"

            ),
            new WowheadLink(
                19136,
                "Mana Igniting Cord"
            ),
            null,
            null
        ),
        new ItemSlotRow( //Legs
            itemSlots.legs,
            new WowheadLink(
                18875,
                "Salamander Scale Pants"
            ),
            new WowheadLink(
                16901,
                "Stormrage Legguards"
            ),
            new WowheadLink(
                16835,
                "Cenarion Leggings"
            ),
            new WowheadLink(
                11622,
                "Lesser Arcanum of Rumination"
            )
        ),
        new ItemSlotRow( //Feet
            itemSlots.feet,
            new WowheadLink(
                16829,
                "Cenarion Boots"
            ),
            new WowheadLink(
                13954,
                "Verdant Footpads"
            ),
            null,
            new WowheadLink(
                13890,
                "Enchant Boots - Minor Speed",
                linkType.spell
            )
        ),
        new ItemSlotRow( //Rings
            itemSlots.rings,
            new WowheadLink(
                13143,
                "Mark of the Dragon Lord"
            ),
            new WowheadLink(
                19140,
                "Cauterizing Band"
            ),
            new WowheadLink(
                16058,
                "Fordring's Seal"
            ),
            null
            // new WowheadLink(
            //     13178,
            //     "Rosewine Circle"
            // ),
        ),
        new ItemSlotRow( //Trinkets
            itemSlots.trinkets,
            new WowheadLink(
                17064,
                "Shard of the Scale"
            ),
            new WowheadLink(
                12930,
                "Briarwood Reed"
            ),
            new WowheadLink(
                11819,
                "Second Wind"
            ),
            null
        ),
        new ItemSlotRow( //MH
            itemSlots.mainHand,
            new WowheadLink(
                17105,
                "Aurastone Hammer"
            ),
            new WowheadLink(
                11923,
                "The Hammer of Grace"
            ),
            null,
            new WowheadLink(
                22750,
                "Enchant Weapon - Healing Power",
                linkType.spell
            ),
        ),
        new ItemSlotRow( //OH
            itemSlots.offHand,
            new WowheadLink(
                11928,
                "Thaurissan's Royal Scepter"
            ),
            null,
            null,
            null
        ),
        new ItemSlotRow( //2h
            itemSlots.twoHand,
            new WowheadLink(
                18842,
                "Staff of Dominance"
            ),
            new WowheadLink(
                11932,
                "Guiding Stave of Wisdom"
            ),
            null,
            new WowheadLink(
                22750,
                "Enchant Weapon - Healing Power",
                linkType.spell
            ),
        ),
    ]
);

// #endregion Druid

// #region Hunter
let preRaidHunter = new TableList(
    classes.hunter,
    [
        new ItemSlotRow( //Head
            itemSlots.head,
            new WowheadLink(
                13359,
                "Crown of Tyranny"
            ),
            new WowheadLink(
                16677,
                "Beaststalker's Cap"
            ),
            new WowheadLink(
                13404,
                "Mask of the Unforgiven"
            ),
            new WowheadLink(
                11647,
                "Lesser Arcanum of Voracity"
            ),
        ),
        new ItemSlotRow( //Neck
            itemSlots.neck,
            new WowheadLink(
                15411,
                "Mark of Fordring"
            ),
            new WowheadLink(
                11933,
                "Imperial Jewel"
            ),
            null,
            null
        ),
        new ItemSlotRow( //Shoulder
            itemSlots.shoulder,
            new WowheadLink(
                12927,
                "Truestrike Shoulders"
            ),
            new WowheadLink(
                12082,
                "Wyrmhide Shoulders"
            ),
            new WowheadLink(
                13358,
                "Wyrmtongue Shoulders"
            ),
            new WowheadLink(
                18182,
                "Chromatic Mantle of the Dawn"
            ),
        ),
        new ItemSlotRow( //Back
            itemSlots.back,
            new WowheadLink(
                13340,
                "Cape of the Black Baron"
            ),
            new WowheadLink(
                13397,
                "Stoneskin Gargoyle Cape"
            ),
            null,
            new WowheadLink(
                13882,
                "Enchant Cloak - Lesser Agility",
                linkType.spell
            ),
        ),
        new ItemSlotRow( //Chest
            itemSlots.chest,
            new WowheadLink(
                11726,
                "Savage Gladiator Chain"
            ),

            new WowheadLink(
                14637,
                "Cadaverous Armour"
            ),

            new WowheadLink(
                12603,
                "Nightbrace Tunic"
            ),

            new WowheadLink(
                20025,
                "Enchant Chest - Greater Stats",
                linkType.spell
            ),
        ),
        new ItemSlotRow( //Wrist
            itemSlots.wrist,
            new WowheadLink(
                13211,
                "Slashclaw Bracers"
            ),
            new WowheadLink(
                16710,
                "Shadowcraft Bracers"
            ),
            new WowheadLink(
                16681,
                "Beaststalker's Bindings"
            ),
            new WowheadLink(
                7779,
                "Enchant Bracer - Minor Agility",
                linkType.spell
            ),
        ),

        new ItemSlotRow( //Hands
            itemSlots.hands,
            new WowheadLink(
                15063,
                "Devilsaur Gauntlets"
            ),
            null,
            null,
            new WowheadLink(
                20012,
                "Enchant Gloves - Greater Agility",
                linkType.spell
            )
        ),
        new ItemSlotRow( //Belt
            itemSlots.belt,
            new WowheadLink(
                12634,
                "Chiselbrand Girdle"
            ),
            new WowheadLink(
                16713,
                "Shadowcraft Belt"
            ),
            new WowheadLink(
                14502,
                "Frostbite Girdle"
            ),
            null
        ),
        new ItemSlotRow( //Legs
            itemSlots.legs,
            new WowheadLink(
                15062,
                "Devilsaur Leggings"
            ),
            null,
            null,
            new WowheadLink(
                11647,
                "Lesser Arcanum of Voracity"
            )
        ),
        new ItemSlotRow( //Feet
            itemSlots.feet,
            new WowheadLink(
                16675,
                "Beaststalker's Boots"
            ),
            new WowheadLink(
                16711,
                "Shadowcraft Boots"
            ),
            new WowheadLink(
                13967,
                "Windreaver Greaves"
            ),
            new WowheadLink(
                20023,
                "Enchant Boots - Greater Agility",
                linkType.spell
            )
        ),
        new ItemSlotRow( //Rings
            itemSlots.rings,
            new WowheadLink(
                13098,
                "Painweaver Brand"
            ),
            new WowheadLink(
                17713,
                "Blackstone Ring"
            ),
            new WowheadLink(
                12548,
                "Magni's Will"
            ),
            null
        ),
        new ItemSlotRow( //Trinkets
            itemSlots.trinkets,
            new WowheadLink(
                11815,
                "Hand of Justice"
            ),
            new WowheadLink(
                13965,
                "Blackhand's Breadth"
            ),
            null,
            null
        ),
        new ItemSlotRow( //MH
            itemSlots.mainHand,
            new WowheadLink(
                12940,
                "Dal'Rend's Sacred Charge"
            ),
            new WowheadLink(
                18737,
                "Bone Slicing Hatchet"
            ),
            null,
            new WowheadLink(
                20031,
                "Enchant Weapon - Superior Striking",
                linkType.spell
            )
        ),
        new ItemSlotRow( //OH
            itemSlots.offHand,
            new WowheadLink(
                12939,
                "Dal'Rend's Tribal Guardian"
            ),
            new WowheadLink(
                18737,
                "Bone Slicing Hatchet"
            ),
            null,
            new WowheadLink(
                20031,
                "Enchant Weapon - Superior Striking",
                linkType.spell
            ),
        ),
        new ItemSlotRow( //2H
            itemSlots.twoHand,
            new WowheadLink(
                18725,
                "Peacemaker"
            ),
            new WowheadLink(
                13052,
                "Warmonger"
            ),
            null,
            new WowheadLink(
                20036,
                "Enchant 2H Weapon - Major Intellect",
                linkType.spell
            ),
        ),
        new ItemSlotRow( //Ranged
            itemSlots.ranged,
            new WowheadLink(
                2099,
                "Dwarven Hand Cannon"
            ),
            new WowheadLink(
                12651,
                "Blackcrow"
            ),
            null,
            new WowheadLink(
                10548,
                "Sniper Scope"
            ),
        ),
    ]
);
let tierOneHunter = new TableList(
    classes.hunter,
    [
        new ItemSlotRow( //Head
            itemSlots.head,
            new WowheadLink(
                16846,
                "Giantstalker's Helmet"
            ),
            null,
            null,
            new WowheadLink(
                11647,
                "Lesser Arcanum of Voracity"
            ),
        ),
        new ItemSlotRow( //Neck
            itemSlots.neck,
            new WowheadLink(
                18404,
                "Onyxia Tooth Pendant"
            ),
            null,
            null,
            null
        ),
        new ItemSlotRow( //Shoulder
            itemSlots.shoulder,
            new WowheadLink(
                16848,
                "Giantstalker's Epaulets"
            ),
            null,
            null,
            new WowheadLink(
                18182,
                "Chromatic Mantle of the Dawn"
            ),
        ),
        new ItemSlotRow( //Back
            itemSlots.back,
            new WowheadLink(
                17102,
                "Cloak of the Shrouded Mists"
            ),
            null,
            null,
            new WowheadLink(
                13882,
                "Enchant Cloak - Lesser Agility",
                linkType.spell
            ),
        ),
        new ItemSlotRow( //Chest
            itemSlots.chest,
            new WowheadLink(
                16845,
                "Giantstalker's Breastplate"
            ),
            null,
            null,
            new WowheadLink(
                20025,
                "Enchant Chest - Greater Stats",
                linkType.spell
            ),
        ),
        new ItemSlotRow( //Wrist
            itemSlots.wrist,
            new WowheadLink(
                16850,
                "Giantstalker's Bracers"
            ),
            null,
            null,
            new WowheadLink(
                7779,
                "Enchant Bracer - Minor Agility",
                linkType.spell
            ),
        ),

        new ItemSlotRow( //Hands
            itemSlots.hands,
            new WowheadLink(
                16852,
                "Giantstalker's Gloves"
            ),
            null,
            null,
            new WowheadLink(
                20012,
                "Enchant Gloves - Greater Agility",
                linkType.spell
            ),
        ),
        new ItemSlotRow( //Belt
            itemSlots.belt,
            new WowheadLink(
                16851,
                "Giantstalker's Belt"
            ),
            null,
            null,
            null
        ),
        new ItemSlotRow( //Legs
            itemSlots.legs,
            new WowheadLink(
                16847,
                "Giantstalker's Leggings"
            ),
            null,
            null,
            new WowheadLink(
                11647,
                "Lesser Arcanum of Voracity"
            )
        ),
        new ItemSlotRow( //Feet
            itemSlots.feet,
            new WowheadLink(
                16849,
                "Giantstalker's Boots"
            ),
            null,
            null,
            new WowheadLink(
                20023,
                "Enchant Boots - Greater Agility",
                linkType.spell
            )
        ),
        new ItemSlotRow( //Rings
            itemSlots.rings,
            new WowheadLink(
                18821,
                "Quick Strike Ring"
            ),
            new WowheadLink(
                17063,
                "Band of Accuria"
            ),
            null,
            null
        ),
        new ItemSlotRow( //Trinkets
            itemSlots.trinkets,
            new WowheadLink(
                11815,
                "Hand of Justice"
            ),
            new WowheadLink(
                13965,
                "Blackhand's Breadth"
            ),
            null,
            null
        ),
        new ItemSlotRow( //MH
            itemSlots.mainHand,
            new WowheadLink(
                18832,
                "Brutality Blade"
            ),
            null,
            null,
            new WowheadLink(
                20031,
                "Enchant Weapon - Superior Striking",
                linkType.spell
            )
        ),
        new ItemSlotRow( //OH
            itemSlots.offHand,
            new WowheadLink(
                18805,
                "Core Hound Tooth"
            ),
            null,
            null,
            new WowheadLink(
                20031,
                "Enchant Weapon - Superior Striking",
                linkType.spell
            ),
        ),
        new ItemSlotRow( //2h
            itemSlots.twoHand,
            new WowheadLink(
                18715,
                "Lok'delar, Stave of the Ancient Keepers"
            ),
            null,
            null,
            new WowheadLink(
                20036,
                "Enchant 2H Weapon - Major Intellect",
                linkType.spell
            )
        ),
        new ItemSlotRow( //Ranged
            itemSlots.ranged,
            new WowheadLink(
                18713,
                "Rhok'delar, Longbow of the Ancient Keepers"
            ),
            null,
            null,
            new WowheadLink(
                18283,
                "Biznicks 247x128 Accurascope"
            ),
        ),
    ]
);
// #endregion Hunter

// #region Mage
let preRaidMage = new TableList(
    classes.mage,
    [
        new ItemSlotRow( //Head
            itemSlots.head,
            new WowheadLink(
                10504,
                "Green Lens of Frozen Wrath"
            ),
            new WowheadLink(
                18727,
                "Crimson Felt Hat"
            ),
            null,
            new WowheadLink(
                11649,
                "Lesser Arcanum of Voracity"
            ),
        ),
        new ItemSlotRow( //Neck
            itemSlots.neck,
            new WowheadLink(
                12103,
                "Star of Mystaria"
            ),
            new WowheadLink(
                13141,
                "Tooth of Gnarr"
            ),
            null,
            null,
        ),
        new ItemSlotRow( //Shoulder
            itemSlots.shoulder,
            new WowheadLink(
                11782,
                "Boreal Mantle"
            ),
            new WowheadLink(
                18681,
                "Burial Shawl"
            ),
            null,
            new WowheadLink(
                18182,
                "Chromatic mantle of the Dawn"
            ),
        ),
        new ItemSlotRow( //Back
            itemSlots.back,
            new WowheadLink(
                13386,
                "Archivist Cape of Frozen Wrath"
            ),
            new WowheadLink(
                11623,
                "Spritecaster Cape"
            ),
            null,
            new WowheadLink(
                20025,
                "Enchant Cloak - Greater Resistance",
                linkType.spell
            ),
        ),
        new ItemSlotRow( //Chest
            itemSlots.chest,
            new WowheadLink(
                14152,
                "Robe of the Archmage"
            ),
            new WowheadLink(
                14136,
                "Robe of Winter Night"
            ),
            null,
            new WowheadLink(

                20028,
                "Enchant Chest - Major Mana",
                linkType.spell
            ),
        ),
        new ItemSlotRow( //Wrist
            itemSlots.wrist,
            new WowheadLink(
                11766,
                "Flameweave Cuffs of Frozen Wrath"
            ),
            new WowheadLink(
                13107,
                "Magiskull Cuffs"
            ),
            null,
            new WowheadLink(
                20008,
                "Enchant Bracer - Greater Intellect",
                linkType.spell
            ),
        ),
        new ItemSlotRow( //Legs
            itemSlots.legs,
            new WowheadLink(
                13170,
                "Skyshroud Leggings"
            ),
            new WowheadLink(
                12965,
                "Spiritshroud Leggings"
            ),
            null,
            new WowheadLink(
                11648,
                "Lesser Arcanum of Voracity"
            ),
        ),
        new ItemSlotRow( //Hands
            itemSlots.hands,
            new WowheadLink(
                13253,
                "Hands of Power"
            ),
            null,
            null,
            null,
        ),
        new ItemSlotRow( //Belt
            itemSlots.belt,
            new WowheadLink(
                11662,
                "Ban'thok Sash"
            ),
            null,
            null,
            null,
        ),
        new ItemSlotRow( //Feet
            itemSlots.feet,
            new WowheadLink(
                10247,
                "Master's Boots of Frozen Wrath"
            ),
            new WowheadLink(
                14136,
                "Omnicast boots"
            ),
            new WowheadLink(
                18102,
                "Dragonrider boots"
            ),
            new WowheadLink(
                13890,
                "Enchant Boots - Minor Speed",
                linkType.spell
            ),
        ),
        new ItemSlotRow( //Rings
            itemSlots.rings,
            new WowheadLink(
                942,
                "Freezing band"
            ),
            new WowheadLink(
                12543,
                "Songstone of Ironforge"
            ),
            new WowheadLink(
                13001,
                "Maiden's Circle"
            ),
            null
        ),
        new ItemSlotRow( //Trinkets
            itemSlots.trinkets,
            new WowheadLink(
                12930,
                "Briarwood Reed"
            ),
            new WowheadLink(
                13968,
                "Eye of the Beast"
            ),
            null,
            null
        ),
        new ItemSlotRow( //Main Hand
            itemSlots.mainHand,
            new WowheadLink(
                13964,
                "Witchblade"
            ),
            null,
            null,
            null, //Winter's Might is best pre-raid but not out till Christmas
        ),
        new ItemSlotRow( //Off-hand
            itemSlots.offHand,
            new WowheadLink(
                10796,
                "Drakestone of Frozen Wrath"
            ),
            new WowheadLink(
                11904,
                "Spirit of Aquementas",
            ),
            null,
            null
        ),
        new ItemSlotRow( //Ranged
            itemSlots.ranged,
            new WowheadLink(
                15283,
                "Lunar Wand of Frozen Wrath"
            ),
            new WowheadLink(
                13938,
                "Spirit of Aquementas",
            ),
            null,
            null
        )
    ]
);

let tierOneMage = new TableList(
    classes.mage,
    [
        new ItemSlotRow( //Head
            itemSlots.head,
            new WowheadLink(
                16795,
                "Arcanist Crown"
            ),
            new WowheadLink(
                16914,
                "Netherwind Crown"),
            null,
            new WowheadLink(
                11649,
                "Lesser Arcanum of Voracity"
            ),
        ),
        new ItemSlotRow( //Neck
            itemSlots.neck,
            new WowheadLink(
                18814,
                "Choker of the Fire Lord"
            ),
            new WowheadLink(
                17109,
                "Choker of Enlightenment"
            ),
            null,
            null,
        ),
        new ItemSlotRow( //Shoulder
            itemSlots.shoulder,
            new WowheadLink(
                11782,
                "Boreal Mantle"
            ),
            null,
            null,
            new WowheadLink(
                18182,
                "Chromatic mantle of the Dawn"
            ),
        ),
        new ItemSlotRow( //Back
            itemSlots.back,
            new WowheadLink(
                13386,
                "Archivist Cape of Frozen Wrath"
            ),
            new WowheadLink(
                17078,
                "Sapphiron Drape"
            ),
            null,
            new WowheadLink(
                20025,
                "Enchant Cloak - Greater Resistance",
                linkType.spell
            ),
        ),
        new ItemSlotRow( //Chest
            itemSlots.chest,
            new WowheadLink(
                14152,
                "Robe of the Archmage"
            ),
            new WowheadLink(
                19145,
                "Robe of Volatile Power"
            ),
            null,
            new WowheadLink(
                20025,
                "Enchant Chest - Greater Stats",
                linkType.spell
            ),
        ),
        new ItemSlotRow( //Wrist
            itemSlots.wrist,
            new WowheadLink(
                16799,
                "Arcanist Bindings"
            ),
            new WowheadLink(
                11766,
                "Flameweave Cuffs"
            ),
            null,
            new WowheadLink(
                20008,
                "Enchant Bracer - Greater Intellect",
                linkType.spell
            ),
        ),
        new ItemSlotRow( //Legs
            itemSlots.legs,
            new WowheadLink(
                16915,
                "Netherwind Pants"
            ),
            new WowheadLink(
                16796,
                "Arcanist Leggings"
            ),
            null,
            new WowheadLink(
                11648,
                "Lesser Arcanum of Focus"
            ),
        ),
        new ItemSlotRow( //Hands
            itemSlots.hands,
            new WowheadLink(
                13253,
                "Hands of Power"
            ),
            null,
            null,
            null,
        ),
        new ItemSlotRow( //Belt
            itemSlots.belt,
            new WowheadLink(
                11662,
                "Ban'thok Sash"
            ),
            null,
            null,
            null
        ),
        new ItemSlotRow( //Feet
            itemSlots.feet,
            new WowheadLink(
                10247,
                "Arcanist Boots"
            ),
            null,
            null,
            new WowheadLink(
                13890,
                "Enchant Boots - Minor Speed",
                linkType.spell
            ),
        ),
        new ItemSlotRow( //Ring
            itemSlots.rings,
            new WowheadLink(
                19147,
                "Ring of Spell Power"
            ),
            new WowheadLink(
                12543,
                "Songstone of Ironforge"
            ),
            new WowheadLink(
                942,
                "Freezing Band"
            ),
            null
        ),
        new ItemSlotRow( //Trinkets
            itemSlots.trinkets,
            new WowheadLink(
                12930,
                "Briarwood Reed"
            ),
            new WowheadLink(
                13968,
                "Eye of the Beast"
            ),
            null,
            null
        ),
        new ItemSlotRow( //Main Hand
            itemSlots.mainHand,
            new WowheadLink(
                17103,
                "Azuresong Mageblade"
            ),
            new WowheadLink(
                13964,
                "Witchblade"
            ),
            null,
            new WowheadLink(
                22749,
                "Spellpower",
                linkType.spell
            ),
        ),
        new ItemSlotRow( //Off-hand
            itemSlots.offHand,
            new WowheadLink(
                10796,
                "Drakestone of Frozen Wrath"
            ),
            new WowheadLink(
                11904,
                "Spirit of Aquementas",
            ),
            null,
            null
        ),
        new ItemSlotRow( //Ranged
            itemSlots.ranged,
            new WowheadLink(
                15283,
                "Lunar Wand of Frozen Wrath"
            ),
            new WowheadLink(
                13938,
                "Bonecreeper Stylus",
            ),
            null,
            null
        )
    ]
);

// #endregion Mage

// #region Paladin
let preRaidPaladin = new TableList(
    classes.paladin,
    [
        new ItemSlotRow( //Head
            itemSlots.head,
            new WowheadLink(
                10504,
                "Green Lens"
            ),
            new WowheadLink(
                12633,
                "Whitesoul Helm"
            ),
            null,
            new WowheadLink(
                11647,
                "Lesser Arcanum of Voracity"
            ),
        ),
        new ItemSlotRow( //Neck
            itemSlots.neck,
            new WowheadLink(
                18723,
                "Animated Chain Necklace"
            ),
            new WowheadLink(
                13141,
                "Tooth of Gnarr"
            ),
            null,
            null
        ),
        new ItemSlotRow( //Shoulder
            itemSlots.shoulder,
            new WowheadLink(
                12625,
                "Dawnbringer Shoulders"
            ),
            new WowheadLink(
                15061,
                "Living Shoulders"
            ),
            null,
            new WowheadLink(
                18182,
                "Chromatic Mantle of the Dawn"
            ),
        ),
        new ItemSlotRow( //Back
            itemSlots.back,
            new WowheadLink(
                13386,
                "Archivist Cape"
            ),
            new WowheadLink(
                11623,
                "Spritecaster Cape"
            ),
            null,
            new WowheadLink(
                20014,
                "Enchant Cloak - Greater Resistance",
                linkType.spell
            ),
        ),
        new ItemSlotRow( //Chest
            itemSlots.chest,
            new WowheadLink(
                13346,
                "Robes of the Exalted"
            ),
            new WowheadLink(
                13314,
                "Alanna's Embrace"
            ),
            null,
            new WowheadLink(
                20025,
                "Enchant Chest - Greater Stats",
                linkType.spell
            ),
        ),
        new ItemSlotRow( //Wrist
            itemSlots.wrist,
            new WowheadLink(
                13969,
                "Loomguard Armbraces"
            ),
            new WowheadLink(
                12626,
                "Funeral Cuffs"
            ),
            null,
            new WowheadLink(
                20008,
                "Enchant Bracer - Greater Intellect",
                linkType.spell
            ),
        ),
        new ItemSlotRow( //Hands
            itemSlots.hands,
            new WowheadLink(
                10787,
                "Atal'ai Gloves"
            ),
            new WowheadLink(
                12554,
                "Hands of ther Exalted Herald"
            ),
            null,
            null
        ),
        new ItemSlotRow( //Belt
            itemSlots.belt,
            new WowheadLink(
                14553,
                "Sash of Mercy"
            ),
            new WowheadLink(
                18702,
                "Belt of the Ordained"
            ),
            null,
            null
        ),
        new ItemSlotRow( //Legs
            itemSlots.legs,
            new WowheadLink(
                11841,
                "Senior Designer's Pantaloons"
            ),
            new WowheadLink(
                13170,
                "Skyshroud Leggings"
            ),
            null,
            new WowheadLink(
                11647,
                "Lesser Arcanum of Voracity"
            ),
        ),
        new ItemSlotRow( //Feet
            itemSlots.feet,
            new WowheadLink(
                13954,
                "Verdant Footpads"
            ),
            new WowheadLink(
                11822,
                "Omnicast Boots"
            ),
            null,
            new WowheadLink(
                13890,
                "Enchant Boots - Minor Speed",
                linkType.spell
            ),
        ),
        new ItemSlotRow( //Rings
            itemSlots.rings,
            new WowheadLink(
                16058,
                "Fordring's Seal"
            ),
            new WowheadLink(
                13178,
                "Rosewine Circle"
            ),
            null,
            null
        ),
        new ItemSlotRow( //Trinkets
            itemSlots.trinkets,
            new WowheadLink(
                11819,
                "Second Wind"
            ),
            new WowheadLink(
                12930,
                "Briarwood Reed"
            ),
            new WowheadLink(
                11832,
                "Burst of Knowledge"
            ),
            null
        ),
        new ItemSlotRow( //MH
            itemSlots.mainHand,
            new WowheadLink(
                11923,
                "The Hammer of Grace"
            ),
            null,
            null,
            new WowheadLink(
                22750,
                "Enchant Weapon - Healing Power",
                linkType.spell
            ),
        ),
        new ItemSlotRow( //OH
            itemSlots.offHand,
            new WowheadLink(
                11928,
                "Thaurissan's Royal Scepter"
            ),
            null,
            null,
            null
            // new WowheadLink(
            //     20017,
            //     "Enchant Shield - Greater Stamina"
            // ),
        ),
    ]
);

let tierOnePaladin = new TableList(
    classes.paladin,
    [
        new ItemSlotRow( //Head
            itemSlots.head,
            new WowheadLink(
                10504,
                "Green Lens"
            ),
            new WowheadLink(
                16955,
                "Judgement Crown"
            ),
            null,
            new WowheadLink(
                11647,
                "Lesser Arcanum of Voracity"
            ),
        ),
        new ItemSlotRow( //Neck
            itemSlots.neck,
            new WowheadLink(
                18814,
                "Choker of the Fire Lord"
            ),
            null,
            null,
            null
        ),
        new ItemSlotRow( //Shoulder
            itemSlots.shoulder,
            new WowheadLink(
                18810,
                "Wild Growth Spaulders"
            ),
            null,
            null,
            new WowheadLink(
                18182,
                "Chromatic Mantle of the Dawn"
            ),
        ),
        new ItemSlotRow( //Back
            itemSlots.back,
            new WowheadLink(
                13386,
                "Archivist Cape"
            ),
            null,
            null,
            new WowheadLink(
                20014,
                "Enchant Cloak - Greater Resistance",
                linkType.spell
            ),
        ),
        new ItemSlotRow( //Chest
            itemSlots.chest,
            new WowheadLink(
                19145,
                "Robe of Volatile Power"
            ),
            null,
            null,
            new WowheadLink(
                20025,
                "Enchant Chest - Greater Stats",
                linkType.spell
            ),
        ),
        new ItemSlotRow( //Wrist
            itemSlots.wrist,
            new WowheadLink(
                13969,
                "Loomguard Armbraces"
            ),
            null,
            null,
            new WowheadLink(
                20008,
                "Enchant Bracer - Greater Intellect",
                linkType.spell
            ),
        ),
        new ItemSlotRow( //Hands
            itemSlots.hands,
            new WowheadLink(
                10787,
                "Atal'ai Gloves"
            ),
            new WowheadLink(
                12554,
                "Hands of the Exalted Herald"
            ),
            null,
            null
        ),
        new ItemSlotRow( //Belt
            itemSlots.belt,
            new WowheadLink(
                19162,
                "Corehound Belt"

            ),
            null,
            null,
            null
        ),
        new ItemSlotRow( //Legs
            itemSlots.legs,
            new WowheadLink(
                18875,
                "Salamander Scale Pants"
            ),
            null,
            null,
            new WowheadLink(
                11647,
                "Lesser Arcanum of Voracity"
            )
        ),
        new ItemSlotRow( //Feet
            itemSlots.feet,
            new WowheadLink(
                13954,
                "Verdant Footpads"
            ),
            null,
            null,
            new WowheadLink(
                13890,
                "Enchant Boots - Minor Speed",
                linkType.spell
            )
        ),
        new ItemSlotRow( //Rings
            itemSlots.rings,
            new WowheadLink(
                19140,
                "Cauterizing Band"
            ),
            null,
            new WowheadLink(
                19140,
                "Cauterizing Band"
            ),
            null
        ),
        new ItemSlotRow( //Trinkets
            itemSlots.trinkets,
            new WowheadLink(
                17064,
                "Shard of the Scale"
            ),
            new WowheadLink(
                12930,
                "Briarwood Reed"
            ),
            null,
            null
        ),
        new ItemSlotRow( //MH
            itemSlots.mainHand,
            new WowheadLink(
                17103,
                "Azuresong Mageblade"
            ),
            new WowheadLink(
                17105,
                "Aurastone Hammer"
            ),
            null,
            new WowheadLink(
                22750,
                "Enchant Weapon - Healing Power",
                linkType.spell
            )
        ),
        new ItemSlotRow( //OH
            itemSlots.offHand,
            new WowheadLink(
                11928,
                "Thaurissan's Royal Scepter"
            ),
            null,
            null,
            null
        ),
    ]
);
// #endregion Paladin

// #region Priest
let preRaidPriest = new TableList(
    classes.priest,
    [
        new ItemSlotRow( //Head
            itemSlots.head,
            new WowheadLink(
                10504,
                "Green Lens of Healing"
            ),
            new WowheadLink(
                13102,
                "Cassandra's Grace"
            ),
            null,
            new WowheadLink(
                11649,
                "Lesser Arcanum of Voracity"
            ),
        ),
        new ItemSlotRow( //Neck
            itemSlots.neck,
            new WowheadLink(
                18723,
                "Animated Chain Necklace"
            ),
            new WowheadLink(
                13141,
                "Tooth of Gnarr"
            ),
            null,
            null
        ),
        new ItemSlotRow( //Shoulder
            itemSlots.shoulder,
            new WowheadLink(
                18681,
                "Burial Shawl"
            ),
            new WowheadLink(
                13013,
                "Elder Wizard's Mantle"
            ),
            null,
            new WowheadLink(
                18182,
                "Chromatic mantle of the Dawn"
            ),
        ),
        new ItemSlotRow( //Back
            itemSlots.back,
            new WowheadLink(
                13386,
                "Archivist Cape of Healing"
            ),
            new WowheadLink(
                11623,
                "Spritecaster Cape"
            ),
            null,
            new WowheadLink(
                20025,
                "Enchant Cloak - Greater Resistance",
                linkType.spell
            ),
        ),
        new ItemSlotRow( //Chest
            itemSlots.chest,
            new WowheadLink(
                14154,
                "Truefaith Vestments"
            ),
            new WowheadLink(
                13346,
                "Robes of the Exalted"
            ),
            null,
            new WowheadLink(
                20025,
                "Enchant Chest - Greater Stats",
                linkType.spell
            ),
        ),
        new ItemSlotRow( //Wrist
            itemSlots.wrist,
            new WowheadLink(
                11766,
                "Flameweave Cuffs of Healing"
            ),
            new WowheadLink(
                13107,
                "Magiskull Cuffs"
            ),
            null,
            new WowheadLink(

                20009,
                "Enchant Bracer - Superior Spirit",
                linkType.spell
            )
        ),
        new ItemSlotRow( //Legs
            itemSlots.legs,
            new WowheadLink(
                11841,
                "Senior Designer's Pantaloons"
            ),
            new WowheadLink(
                13170,
                "Skyshroud leggings"
            ),
            null,
            new WowheadLink(
                11648,
                "Lesser Arcanum of Voracity"
            ),
        ),
        new ItemSlotRow( //Hands
            itemSlots.hands,
            new WowheadLink(
                12554,
                "Hands of the Exalted Herald"
            ),
            new WowheadLink(
                13253,
                "Hands of Power"
            ),
            null,
            null
        ),
        new ItemSlotRow( //Belt
            itemSlots.belt,
            new WowheadLink(
                12589,
                "Dustfeather Sash"
            ),
            new WowheadLink(
                18740,
                "Thuzadin Sash"
            ),
            null,
            null,
        ),
        new ItemSlotRow( //Feet
            itemSlots.feet,
            new WowheadLink(
                14136,
                "Omnicast boots"
            ),
            new WowheadLink(
                18102,
                "Dragonrider boots"
            ),
            null,
            new WowheadLink(
                13890,
                "Enchant Boots - Minor Speed",
                linkType.spell
            )
        ),
        new ItemSlotRow( //Rings
            itemSlots.rings,
            new WowheadLink(
                16058,
                "Fordring's Seal"
            ),
            new WowheadLink(
                12543,
                "Songstone of Ironforge"
            ),
            new WowheadLink(
                13001,
                "Maiden's Circle"
            ),
            null
        ),
        new ItemSlotRow( //Trinkets
            itemSlots.trinkets,
            new WowheadLink(
                12930,
                "Briarwood Reed"
            ),
            new WowheadLink(
                11819,
                "Second Wind"
            ),
            null,
            null
        ),
        new ItemSlotRow( //Main Hand
            itemSlots.mainHand,
            new WowheadLink(
                11923,
                "The Hammer of Grace"
            ),
            null,
            null,
            new WowheadLink(
                22750,
                "Enchant Weapon - Healing Power",
                linkType.spell
            ),
        ),
        new ItemSlotRow( //Off-hand
            itemSlots.offHand,
            new WowheadLink(
                11928,
                "Thaurissan's Royal Scepter"
            ),
            new WowheadLink(
                10796,
                "Drakestone of Healing"
            ),
            null,
            null,
        ),
        new ItemSlotRow( //Ranged
            itemSlots.ranged,
            new WowheadLink(
                13938,
                "Bonecreeper Stylus",
            ),
            null,
            null,
            null,
        )
    ]
);

let tierOnePriest = new TableList(
    classes.priest,
    [
        new ItemSlotRow( //Head
            itemSlots.head,
            new WowheadLink(
                10504,
                "Green Lens of Healing"
            ),
            new WowheadLink(
                13102,
                "Cassandra's Grace"
            ),
            null,
            new WowheadLink(
                11649,
                "Lesser Arcanum of Voracity"
            )
        ),
        new ItemSlotRow( //Neck
            itemSlots.neck,
            new WowheadLink(
                18814,
                "Choker of the Fire Lord"
            ),
            new WowheadLink(
                18723,
                "Animated Chain Necklace"
            ),
            new WowheadLink(
                13141,
                "Tooth of Gnarr"
            ),
            null
        ),
        new ItemSlotRow( //Shoulder
            itemSlots.shoulder,
            new WowheadLink(
                18681,
                "Burial Shawl"
            ),
            new WowheadLink(
                13013,
                "Elder Wizard's Mantle"
            ),
            new WowheadLink(
                16816,
                "Mantle of Prophecy"
            ),
            new WowheadLink(
                18182,
                "Chromatic mantle of the Dawn"
            )
        ),
        new ItemSlotRow( //Back
            itemSlots.back,
            new WowheadLink(
                13386,
                "Archivist Cape of Healing"
            ),
            new WowheadLink(
                17078,
                "Sapphiron Drape"
            ),
            null,
            new WowheadLink(
                20025,
                "Enchant Cloak - Greater Resistance",
                linkType.spell
            )
        ),
        new ItemSlotRow( //Chest
            itemSlots.chest,
            new WowheadLink(
                14154,
                "Truefaith Vestments"
            ),
            new WowheadLink(
                13346,
                "Robes of the Exalted"
            ),
            null,
            new WowheadLink(
                20025,
                "Enchant Chest - Greater Stats",
                linkType.spell
            ),
        ),
        new ItemSlotRow( //Wrist
            itemSlots.wrist,
            new WowheadLink(
                16819,
                "Vambraces of Prophecy"
            ),
            new WowheadLink(
                18263,
                "Flarecore Wraps"
            ),
            null,
            new WowheadLink(
                20009,
                "Enchant Bracer - Superior Spirit",
                linkType.spell
            )
        ),
        new ItemSlotRow( //Legs
            itemSlots.legs,
            new WowheadLink(
                16922,
                "Leggings of Transcendence"
            ),
            new WowheadLink(
                11841,
                "Senior Designer's Pantaloons"
            ),
            null,
            new WowheadLink(
                11648,
                "Lesser Arcanum of Voracity"
            ),
        ),
        new ItemSlotRow( //Hands
            itemSlots.hands,
            new WowheadLink(
                12554,
                "Hands of the Exalted Herald"
            ),
            new WowheadLink(
                16812,
                "Gloves of Prophecy"
            ),
            null,
            null
        ),
        new ItemSlotRow( //Belt
            itemSlots.belt,
            new WowheadLink(
                16817,
                "Girdle of Prophecy"
            ),
            null,
            null,
            null
        ),
        new ItemSlotRow( //Feet
            itemSlots.feet,
            new WowheadLink(
                16811,
                "Boots of Prophecy"
            ),
            new WowheadLink(
                14136,
                "Omnicast boots"
            ),
            new WowheadLink(
                18102,
                "Dragonrider boots"
            ),
            new WowheadLink(
                13890,
                "Enchant Boots - Minor Speed",
                linkType.spell
            ),
        ),
        new ItemSlotRow( //Rings
            itemSlots.rings,
            new WowheadLink(
                19140,
                "Cauterizing Band"
            ),
            new WowheadLink(
                19138,
                "Band of Sulfuras"
            ),
            null,
            null
        ),
        new ItemSlotRow( //Trinkets
            itemSlots.trinkets,
            new WowheadLink(
                18820,
                "Talisman of Ephemeral Power"),
            new WowheadLink(
                12930,
                "Briarwood Reed"
            ),
            new WowheadLink(
                11819,
                "Second Wind"
            ),
            null
        ),
        new ItemSlotRow( //MH
            itemSlots.mainHand,
            new WowheadLink(
                17105,
                "Aurastone Hammer"
            ),
            null,
            null,
            new WowheadLink(
                22750,
                "Enchant Weapon - Healing Power",
                linkType.spell
            )
        ),
        new ItemSlotRow( //OH
            itemSlots.offHand,
            new WowheadLink(
                11928,
                "Thaurissan's Royal Scepter"
            ),
            null,
            null,
            null
        ),
        new ItemSlotRow( //2H
            itemSlots.twoHand,
            new WowheadLink(
                18608,
                "Benediction"
            ),
            null,
            null,
            new WowheadLink(
                22750,
                "Enchant Weapon - Healing Power",
                linkType.spell
            ),
        ),
        new ItemSlotRow( //Ranged
            itemSlots.ranged,
            new WowheadLink(
                13938,
                "Bonecreeper Stylus",
            ),
            null,
            null,
            null
        )
    ]
);

// #endregion Priest

// #region Rogue
let preRaidRogue = new TableList(
    classes.rogue,
    [
        new ItemSlotRow( //Head
            itemSlots.head,
            new WowheadLink(
                13404,
                "Mask of the Unforgiven"
            ),
            new WowheadLink(
                12587,
                "Eye of Rend"
            ),
            null,
            new WowheadLink(
                11645,
                "Lesser Arcanum of Voracity"
            )
        ),
        new ItemSlotRow( //Neck
            itemSlots.neck,
            new WowheadLink(
                15411,
                "Mark of Fordring"
            ),
            new WowheadLink(
                11933,
                "Imperial Jewel"
            ),
            null,
            null
        ),
        new ItemSlotRow( //Shoulder
            itemSlots.shoulder,
            new WowheadLink(
                12927,
                "Truestrike Shoulders"
            ),
            new WowheadLink(
                12082,
                "Wyrmhide Spaulders"
            ),
            null,
            new WowheadLink(
                18182,
                "Chromatic Mantle of the Dawn"
            )
        ),
        new ItemSlotRow( //Back
            itemSlots.back,
            new WowheadLink(
                13340,
                "Cape of the Black Baron"
            ),
            new WowheadLink(
                13397,
                "Stoneskin Gargoyle Cape"
            ),
            null,
            new WowheadLink(
                13882,
                "Enchant Cloak - Lesser Agility",
                linkType.spell
            )
        ),
        new ItemSlotRow( //Chest
            itemSlots.chest,
            new WowheadLink(
                14637,
                "Cadaverous Armor"
            ),
            new WowheadLink(
                12603,
                "Nightbrace Tunic"
            ),
            null,
            new WowheadLink(
                20025,
                "Enchant Chest - Greater Stats",
                linkType.spell
            )
        ),
        new ItemSlotRow( //Wrist
            itemSlots.wrist,
            new WowheadLink(
                13120,
                "Deepfury Bracers"
            ),
            new WowheadLink(
                12966,
                "Blackmist Armguards"
            ),
            null,
            new WowheadLink(
                20010,
                "Enchant Bracer - Superior Strength",
                linkType.spell
            )
        ),
        new ItemSlotRow( //Hands
            itemSlots.hands,
            new WowheadLink(
                15063,
                "Devilsaur Gauntlets"
            ),
            null,
            null,
            new WowheadLink(
                20012,
                "Enchant Gloves - Greater Agility",
                linkType.spell
            )
        ),
        new ItemSlotRow( //Belt
            itemSlots.belt,
            new WowheadLink(
                13252,
                "Cloudrunner Girdle"
            ),
            null,
            null,
            null
        ),
        new ItemSlotRow( //Legs
            itemSlots.legs,
            new WowheadLink(
                15062,
                "Devilsaur Leggings"
            ),
            null,
            null,
            new WowheadLink(
                11645,
                "Lesser Arcanum of Voracity"
            )
        ),
        new ItemSlotRow( //Feet
            itemSlots.feet,
            new WowheadLink(
                12553,
                "Swiftwalker Boots"
            ),
            new WowheadLink(
                13210,
                "Pads of the Dread Wolf"
            ),
            null,
            new WowheadLink(
                20023,
                "Enchant Boots - Greater Agility",
                linkType.spell
            )
        ),
        new ItemSlotRow( //Rings
            itemSlots.rings,
            new WowheadLink(
                17713,
                "Blackstone Ring"
            ),
            new WowheadLink(
                13098,
                "Painweaver Band"
            ),
            new WowheadLink(
                12548,
                "Magni's Will"
            ),
            null
        ),
        new ItemSlotRow( //Trinkets
            itemSlots.trinkets,
            new WowheadLink(
                11815,
                "Hand of Justice"
            ),
            new WowheadLink(
                13965,
                "Blackhand's Breadth"
            ),
            new WowheadLink(
                12065,
                "Ward of the Elements"
            ),
            null
        ),
        new ItemSlotRow( //MH
            itemSlots.mainHand,
            new WowheadLink(
                12940,
                "Dal'Rend's Sacred Charge"
            ),
            new WowheadLink(
                15806,
                "Mirah's Song"
            ),
            null,
            new WowheadLink(
                20034,
                "Enchant Weapon - Crusader",
                linkType.spell
            )
        ),
        new ItemSlotRow( //OH
            itemSlots.offHand,
            new WowheadLink(
                12939,
                "Dal'Rend's Tribal Guardian"
            ),
            new WowheadLink(
                15806,
                "Mirah's Song"
            ),
            null,
            new WowheadLink(
                20034,
                "Enchant Weapon - Crusader",
                linkType.spell
            )
        ),
        new ItemSlotRow( //Ranged
            itemSlots.ranged,
            new WowheadLink(
                2100,
                "Precisely Calibrated Boomstick"
            ),
            new WowheadLink(
                12651,
                "Blackcrow"
            ),
            new WowheadLink(
                12653,
                "Riphook"
            ),
            new WowheadLink(
                10548,
                "Sniper Scope"
            )
        )
    ]
);

let tierOneRogue = new TableList(
    classes.rogue,
    [
        new ItemSlotRow( //Head
            itemSlots.head,
            new WowheadLink(
                16908,
                "Bloodfang Hood"
            ),
            new WowheadLink(
                13404,
                "Mask of the Unforgiven"
            ),
            null,
            new WowheadLink(
                11645,
                "Lesser Arcanum of Voracity"
            )
        ),
        new ItemSlotRow( //Neck
            itemSlots.neck,
            new WowheadLink(
                18404,
                "Onyxia Tooth Pendant"
            ),
            new WowheadLink(
                15411,
                "Mark of Fordring"
            ),
            new WowheadLink(
                11933,
                "Imperial Jewel"
            ),
            null
        ),
        new ItemSlotRow( //Shoulder
            itemSlots.shoulder,
            new WowheadLink(
                16823,
                "Nightslayer Shoulders Pads"
            ),
            new WowheadLink(
                12927,
                "Truestrike Shoulders"
            ),
            new WowheadLink(
                12082,
                "Wyrmhide Spaulders"
            ),
            new WowheadLink(
                18182,
                "Chromatic Mantle of the Dawn"
            )
        ),
        new ItemSlotRow( //Back
            itemSlots.back,
            new WowheadLink(
                13340,
                "Cape of the Black Baron"
            ),
            new WowheadLink(
                17102,
                "Cloak of the Shrouded Mists"
            ),
            new WowheadLink(
                13397,
                "Stoneskin Gargoyle Cape"
            ),
            new WowheadLink(
                13882,
                "Enchant Cloak - Lesser Agility",
                linkType.spell
            )
        ),
        new ItemSlotRow( //Chest
            itemSlots.chest,
            new WowheadLink(
                16820,
                "Nightslayer Chestpiece"
            ),
            new WowheadLink(
                14637,
                "Cadaverous Armor"
            ),
            new WowheadLink(
                12603,
                "Nightbrace Tunic"
            ),
            new WowheadLink(
                20025,
                "Enchant Chest - Greater Stats",
                linkType.spell
            )
        ),
        new ItemSlotRow( //Wrist
            itemSlots.wrist,
            new WowheadLink(
                16825,
                "Nightslayer Bracers"
            ),
            new WowheadLink(
                13120,
                "Deepfury Bracers"
            ),
            new WowheadLink(
                12966,
                "Blackmist Armguards"
            ),
            new WowheadLink(
                20010,
                "Enchant Bracer - Superior Strength",
                linkType.spell
            )
        ),
        new ItemSlotRow( //Hands
            itemSlots.hands,
            new WowheadLink(
                16826,
                "Nightslayer Gloves"
            ),
            new WowheadLink(
                15063,
                "Devilsaur Gauntlets"
            ),
            null,
            new WowheadLink(
                20012,
                "Enchant Gloves - Greater Agility",
                linkType.spell
            )
        ),
        new ItemSlotRow( //Belt
            itemSlots.belt,
            new WowheadLink(
                16827,
                "Nightslayer Belt"
            ),
            new WowheadLink(
                13252,
                "Cloudrunner Girdle"
            ),
            null,
            null
        ),
        new ItemSlotRow( //Legs
            itemSlots.legs,
            new WowheadLink(
                16909,
                "Bloodfang Pants"
            ),
            new WowheadLink(
                15062,
                "Devilsaur Leggings"
            ),
            null,
            new WowheadLink(
                11645,
                "Lesser Arcanum of Voracity"
            )
        ),
        new ItemSlotRow( //Feet
            itemSlots.feet,
            new WowheadLink(
                16824,
                "Nightslayer Boots"
            ),
            new WowheadLink(
                12553,
                "Swiftwalker Boots"
            ),
            new WowheadLink(
                13210,
                "Pads of the Dread Wolf"
            ),
            new WowheadLink(
                20023,
                "Enchant Boots - Greater Agility",
                linkType.spell
            )
        ),
        new ItemSlotRow( //Rings
            itemSlots.rings,
            new WowheadLink(
                17063,
                "Band of Accuria"
            ),
            new WowheadLink(
                17713,
                "Blackstone Ring"
            ),
            new WowheadLink(
                13098,
                "Painweaver Band"
            ),
            null
        ),
        new ItemSlotRow( //Trinkets
            itemSlots.trinkets,
            new WowheadLink(
                11815,
                "Hand of Justice"
            ),
            new WowheadLink(
                13965,
                "Blackhand's Breadth"
            ),
            new WowheadLink(
                12065,
                "Ward of the Elements"
            ),
            null
        ),
        new ItemSlotRow( //MH
            itemSlots.mainHand,
            new WowheadLink(
                17075,
                "Vis'kag the Bloodletter"
            ),
            new WowheadLink(
                12940,
                "Dal'Rend's Sacred Charge"
            ),
            null,
            new WowheadLink(
                20034,
                "Enchant Weapon - Crusader",
                linkType.spell
            )
        ),
        new ItemSlotRow( //OH
            itemSlots.offHand,
            new WowheadLink(
                18832,
                "Brutality Blade"
            ),
            new WowheadLink(
                12939,
                "Dal'Rend's Tribal Guardian"
            ),
            new WowheadLink(
                15806,
                "Mirah's Song"
            ),
            new WowheadLink(
                20034,
                "Enchant Weapon - Crusader",
                linkType.spell
            )
        ),
        new ItemSlotRow( //Ranged
            itemSlots.ranged,
            new WowheadLink(
                17069,
                "Striker's Mark"
            ),
            new WowheadLink(
                2100,
                "Precisely Calibrated Boomstick"
            ),
            new WowheadLink(
                12651,
                "Blackcrow"
            ),
            new WowheadLink(
                10548,
                "Sniper Scope"
            )
        )
    ]
);
// #endregion Rogue

// #region Warlock
let preRaidWarlock = new TableList(
    classes.warlock,
    [
        new ItemSlotRow( //Head
            itemSlots.head,
            new WowheadLink(
                12752,
                "Cap of the Scarlet Savant"
            ),
            new WowheadLink(
                14332,
                "Eternal Crown of Shadow Wrath"
            ),
            new WowheadLink(
                14111,
                "Felcloth Hood"
            ),
            new WowheadLink(
                11649,
                "Lesser Arcanum of Voracity"
            ),
        ),
        new ItemSlotRow( //Neck
            itemSlots.neck,
            new WowheadLink(
                12103,
                "Star of Mystaria"
            ),
            new WowheadLink(
                13141,
                "Tooth of Gnarr"
            ),
            null,
            null,
        ),
        new ItemSlotRow( //Shoulder
            itemSlots.shoulder,
            new WowheadLink(
                14335,
                "Eternal Spaulders"
            ),
            new WowheadLink(
                14112,
                "Felcloth Shoulders"
            ),
            null,
            new WowheadLink(
                18182,
                "Chromatic mantle of the Dawn"
            ),
        ),
        new ItemSlotRow( //Back
            itemSlots.back,
            new WowheadLink(
                13386,
                "Archivist Cape of Shadow Wrath"
            ),
            new WowheadLink(
                11623,
                "Master's Cloak of Shadow Wrath"
            ),
            new WowheadLink(
                11623,
                "Spritecaster Cape",
            ),
            new WowheadLink(
                20025,
                "Enchant Cloak - Greater Resistance",
                linkType.spell
            )
        ),
        new ItemSlotRow( //Chest
            itemSlots.chest,
            new WowheadLink(
                14153,
                "Robe of the Void"
            ),
            new WowheadLink(
                14136,
                "Robe of Winter Night"
            ),
            null,
            new WowheadLink(
                20025,
                "Enchant Chest - Greater Stats",
                linkType.spell
            ),
        ),
        new ItemSlotRow( //Wrist
            itemSlots.wrist,
            new WowheadLink(
                11766,
                "Flameweave Cuffs of Shadow Wrath"
            ),
            new WowheadLink(
                13409,
                "Tearfall Bracers of Shadow Wrath"
            ),
            null,
            new WowheadLink(
                20008,
                "Enchant Bracer - Greater intellect",
                linkType.spell
            ),
        ),
        new ItemSlotRow( //Legs
            itemSlots.legs,
            new WowheadLink(
                13170,
                "Skyshroud leggings"
            ),
            new WowheadLink(
                14107,
                "Felcloth Pants"
            ),
            null,
            new WowheadLink(
                11648,
                "Lesser Arcanum of Voracity",
                linkType.item
            ),
        ),
        new ItemSlotRow( //Hands
            itemSlots.hands,
            new WowheadLink(
                14146,
                "Gloves of Spell Mastery"
            ),
            new WowheadLink(
                13253,
                "Hands of Power"
            ),
            null,
            null,
        ),
        new ItemSlotRow( //Belt
            itemSlots.belt,
            new WowheadLink(
                11662,
                "Bhan'thok Sash"
            ),
            new WowheadLink(
                18740,
                "Clutch of Andros"
            ),
            null,
            null,
        ),
        new ItemSlotRow( //Feet
            itemSlots.feet,
            new WowheadLink(
                10247,
                "Master's Boots of Shadow Wrath"
            ),
            new WowheadLink(
                14136,
                "Omnicast boots"
            ),
            null,
            new WowheadLink(
                13890,
                "Enchant Boots - Minor Speed",
                linkType.spell
            ),
        ),
        new ItemSlotRow( //Rings
            itemSlots.rings,
            new WowheadLink(
                12543,
                "Songstone of Ironforge"
            ),
            new WowheadLink(
                13001,
                "Maiden's Circle"
            ),
            new WowheadLink(
                1980,
                "Underworld Band"
            ),
            null
        ),
        new ItemSlotRow( //Trinkets
            itemSlots.trinkets,
            new WowheadLink(
                12930,
                "Briarwood Reed"
            ),
            new WowheadLink(
                13968,
                "Eye of the Beast"
            ),
            new WowheadLink(
                11832,
                "Burst of Knowledge"
            ),
            null
        ),
        new ItemSlotRow( //Main Hand
            itemSlots.mainHand,
            new WowheadLink(
                17719,
                "Inventor's Focal Sword"
            ),
            new WowheadLink(
                13964,
                "Witchblade"
            ),
            null,
            null
        ),
        new ItemSlotRow( //Off-hand
            itemSlots.offHand,
            new WowheadLink(
                10796,
                "Drakestone of Shadow Wrath"
            ),
            new WowheadLink(
                11904,
                "Spirit of Aquementas"
            ),
            null,
            null,
        ),
        new ItemSlotRow( //Ranged
            itemSlots.ranged,
            new WowheadLink(
                15283,
                "Lunar Wand of Shadow Wrath"
            ),
            new WowheadLink(
                13396,
                "Skul's Ghastly Touch",
            ),
            null,
            null
        )
    ]
);
let tierOneWarlock = new TableList(
    classes.warlock,
    [
        new ItemSlotRow( //Head
            itemSlots.head,
            new WowheadLink(
                16929,
                "Nemesis Skullcap"
            ),
            new WowheadLink(
                12752,
                "Cap of the Scarlet Savant"
            ),
            new WowheadLink(
                14332,
                "Eternal Crown of Shadow Wrath"
            ),
            new WowheadLink(
                11649,
                "Lesser Arcanum of Voracity"
            ),
        ),
        new ItemSlotRow( //Neck
            itemSlots.neck,
            new WowheadLink(
                18814,
                "Choker of the Firelord"
            ),
            new WowheadLink(
                17109,
                "Choker of Enlightenment"
            ),
            new WowheadLink(
                13141,
                "Tooth of Gnarr"
            ),
            null,
        ),
        new ItemSlotRow( //Shoulder
            itemSlots.shoulder,
            new WowheadLink(
                14335,
                "Eternal Spaulders"
            ),
            new WowheadLink(
                14112,
                "Felcloth Shoulders"
            ),
            null,
            new WowheadLink(
                18182,
                "Chromatic mantle of the Dawn"
            ),
        ),
        new ItemSlotRow( //Back
            itemSlots.back,
            new WowheadLink(
                13386,
                "Archivist Cape of Shadow Wrath"
            ),
            new WowheadLink(
                11623,
                "Master's Cloak of Shadow Wrath"
            ),
            null,
            new WowheadLink(
                20025,
                "Enchant Cloak - Greater Resistance",
                linkType.spell
            ),
        ),
        new ItemSlotRow( //Chest
            itemSlots.chest,
            new WowheadLink(
                14153,
                "Robe of the Void"
            ),
            new WowheadLink(
                16809,
                "Felheart Robes"
            ),
            null,
            new WowheadLink(
                20025,
                "Enchant Chest - Greater Stats",
                linkType.spell
            ),
        ),
        new ItemSlotRow( //Wrist
            itemSlots.wrist,
            new WowheadLink(
                13409,
                "Tearfall Bracers of Shadow Wrath"
            ),
            null,
            null,
            new WowheadLink(
                20008,
                "Enchant Bracer - Greater intellect",
                linkType.spell
            ),
        ),
        new ItemSlotRow( //Legs
            itemSlots.legs,
            new WowheadLink(
                16930,
                "Nemesis Leggings"
            ),
            new WowheadLink(
                13170,
                "Skyshroud leggings"
            ),
            null,
            new WowheadLink(
                11648,
                "Lesser Arcanum of Voracity"
            ),
        ),
        new ItemSlotRow( //Hands
            itemSlots.hands,
            new WowheadLink(
                14146,
                "Gloves of Spell Mastery"
            ),
            new WowheadLink(
                16805,
                "Felheart Gloves"
            ),
            new WowheadLink(
                13253,
                "Hands of Power"
            ),
            null,
        ),
        new ItemSlotRow( //Belt
            itemSlots.belt,
            new WowheadLink(
                1162,
                "Bhan'thok Sash"
            ),
            new WowheadLink(
                13956,
                "Clutch of Andros"
            ),
            new WowheadLink(
                16806,
                "Felheart Belt"
            ),
            null
        ),
        new ItemSlotRow( //Feet
            itemSlots.feet,
            new WowheadLink(
                10247,
                "Master's Boots of Shadow Wrath"
            ),
            new WowheadLink(
                14136,
                "Omnicast boots"
            ),
            new WowheadLink(
                16803,
                "Felheart Slippers"
            ),
            new WowheadLink(
                13890,
                "Enchant Boots - Minor Speed",
                linkType.spell
            ),
        ),
        new ItemSlotRow( //Rings
            itemSlots.rings,
            new WowheadLink(
                19147,
                "Ring of Spell Power"
            ),
            new WowheadLink(
                13001,
                "Maiden's Circle"
            ),
            new WowheadLink(
                1980,
                "Songstone of Ironforge"
            ),
            null
        ),
        new ItemSlotRow( //Trinkets
            itemSlots.trinkets,
            new WowheadLink(
                18820,
                "Talisman of Ephemeral Power"
            ),
            new WowheadLink(
                12930,
                "Briarwood Reed"
            ),
            new WowheadLink(
                13968,
                "Eye of the Beast"
            ),
            null
        ),
        new ItemSlotRow( //Main Hand
            itemSlots.mainHand,
            new WowheadLink(
                17103,
                "Azuresong Mageblade"
            ),
            new WowheadLink(
                17103,
                "Staff of Dominance"
            ),
            new WowheadLink(
                13964,
                "Witchblade"
            ),
            null
        ),
        new ItemSlotRow( //Off-hand
            itemSlots.offHand,
            new WowheadLink(
                10796,
                "Drakestone of Shadow Wrath"
            ),
            new WowheadLink(
                11904,
                "Spirit of Aquementas"
            ),
            null,
            null,
        ),
        new ItemSlotRow( //Ranged
            itemSlots.ranged,
            new WowheadLink(
                15283,
                "Lunar Wand of Shadow Wrath"
            ),
            new WowheadLink(
                13396,
                "Skul's Ghastly Touch",
            ),
            null,
            null
        )
    ]
);

// #endregion Warlock

// #region Warrior
let preRaidWarriorTank = new TableList(
    classes.warrior,
    [
        new ItemSlotRow( //Head
            itemSlots.head,
            new WowheadLink(
                12640,
                "Lionheart Helm"
            ),
            new WowheadLink(
                11746,
                "Golem Skull Helm"
            ),
            new WowheadLink(
                12952,
                "Gyth's Skull"
            ),
            new WowheadLink(
                11642,
                "Lesser Arcanum of Constitution"
            )
        ),
        new ItemSlotRow( //Neck
            itemSlots.neck,
            new WowheadLink(
                13091,
                "Medallion of Grand Marshal Morris"
            ),
            new WowheadLink(
                11755,
                "Verek's Collar"
            ),
            null,
            null
        ),
        new ItemSlotRow( //Shoulder
            itemSlots.shoulder,
            new WowheadLink(
                16733,
                "Spaulders of Valor"
            ),
            new WowheadLink(
                14552,
                "Stockade Pauldrons"
            ),
            new WowheadLink(
                13405,
                "Wailing Nightbane Pauldrons"
            ),
            new WowheadLink(
                18182,
                "Chromatic Mantle of the Dawn"
            )
        ),
        new ItemSlotRow( //Back
            itemSlots.back,
            new WowheadLink(
                13397,
                "Stoneskin Gargoyle Cape"
            ),
            new WowheadLink(
                11930,
                "The Emperor's new Cape"
            ),
            null,
            new WowheadLink(
                20015,
                "Enchant Cloak - Superior Defense",
                linkType.spell
            )
        ),
        new ItemSlotRow( //Chest
            itemSlots.chest,
            new WowheadLink(
                12895,
                "Breastplate of the Chromatic Flight"
            ),
            new WowheadLink(
                15413,
                "Ornate Adamantium Breastplate"
            ),
            new WowheadLink(
                14624,
                "Deathbone Chestplate"
            ),
            new WowheadLink(
                20025,
                "Enchant Chest - Greater Stats",
                linkType.spell
            )
        ),
        new ItemSlotRow( //Wrist
            itemSlots.wrist,
            new WowheadLink(
                16735,
                "Bracers of Valor"
            ),
            new WowheadLink(
                13951,
                "Vigorsteel Vambraces"
            ),
            new WowheadLink(
                13400,
                "Vambraces of the Sadist"
            ),
            new WowheadLink(
                20011,
                "Enchant Bracer - Superior Stamina",
                linkType.spell
            )
        ),
        new ItemSlotRow( //Hands
            itemSlots.hands,
            new WowheadLink(
                14525,
                "Boneclenched Gauntlets"
            ),
            new WowheadLink(
                13072,
                "Stonegrip Gauntlets"
            ),
            new WowheadLink(
                13963,
                "Voone's Vice Grips"
            ),
            new WowheadLink(
                20012,
                "Enchant Gloves - Greater Agility",
                linkType.spell
            )
        ),
        new ItemSlotRow( //Belt
            itemSlots.belt,
            new WowheadLink(
                13142,
                "Brigam Girdle"
            ),
            new WowheadLink(
                13502,
                "Handcrafted Mastersmith Girdle"
            ),
            new WowheadLink(
                14620,
                "Deathbone Girdle"
            ),
            null
        ),
        new ItemSlotRow( //Legs
            itemSlots.legs,
            new WowheadLink(
                14554,
                "Cloudkeeper Legplates"
            ),
            new WowheadLink(
                12935,
                "Warmaster Legguards"
            ),
            new WowheadLink(
                14623,
                "Deathbone Legguards"
            ),
            new WowheadLink(
                11624,
                "Lesser Arcanum of Constitution"
            )
        ),
        new ItemSlotRow( //Rings
            itemSlots.feet,
            new WowheadLink(
                14616,
                "Bloodmail Boots"
            ),
            new WowheadLink(
                13259,
                "Ribsteel Footguards"
            ),
            new WowheadLink(
                12555,
                "Battlechaser's Greaves"
            ),
            new WowheadLink(
                13890,
                "Enchant Boots - Minor Speed",
                linkType.spell
            )
        ),
        new ItemSlotRow( //Rings
            itemSlots.rings,
            new WowheadLink(
                2246,
                "Myrmidon's Signet"
            ),
            new WowheadLink(
                17713,
                "Blackstone Ring"
            ),
            new WowheadLink(
                13373,
                "Band of Flesh"
            ),
            null
        ),
        new ItemSlotRow( //Trinkets
            itemSlots.trinkets,
            new WowheadLink(
                11815,
                "Hand of Justice"
            ),
            new WowheadLink(
                13965,
                "Blackhand's Breadth"
            ),
            new WowheadLink(
                11810,
                "Force of Will"
            ),
            null
        ),
        new ItemSlotRow( //MH
            itemSlots.mainHand,
            new WowheadLink(
                15806,
                "Mirah's Song"
            ),
            new WowheadLink(
                11684,
                "Ironfoe"
            ),
            new WowheadLink(
                13015,
                "Serathil"
            ),
            new WowheadLink(
                20034,
                "Enchant Weapon - Crusader",
                linkType.spell
            )
        ),
        new ItemSlotRow( //OH
            itemSlots.offHand,
            new WowheadLink(
                12602,
                "Draconian Deflector"
            ),
            new WowheadLink(
                1168,
                "Skullflame Shield"
            ),
            new WowheadLink(
                13529,
                "Husk of Nerub'enkan"
            ),
            null
        ),
        new ItemSlotRow( //Ranged
            itemSlots.ranged,
            new WowheadLink(
                12651,
                "Blackcrow"
            ),
            new WowheadLink(
                16996,
                "Gorewood Bow"
            ),
            new WowheadLink(
                12653,
                "Riphook"
            ),
            new WowheadLink(
                10548,
                "Sniper Scope"
            )
        )
    ],
    "Tank"
);

let preRaidWarriorDPS = new TableList(
    classes.warrior,
    [
        new ItemSlotRow( //Head
            itemSlots.head,
            new WowheadLink(
                12640,
                "Lionheart Helm"
            ),
            new WowheadLink(
                12587,
                "Eye of Rend"
            ),
            new WowheadLink(
                13404,
                "Mask of the Unforgiven"
            ),
            new WowheadLink(
                11645,
                "Lesser Arcanum of Voracity"
            )
        ),
        new ItemSlotRow( //Neck
            itemSlots.neck,
            new WowheadLink(
                15411,
                "Mark of Fordring"
            ),
            new WowheadLink(
                11933,
                "Imperial Jewel"
            ),
            null,
            null
        ),
        new ItemSlotRow( //Shoulder
            itemSlots.shoulder,
            new WowheadLink(
                12927,
                "Truestrike Shoulders"
            ),
            new WowheadLink(
                12082,
                "Wyrmhide Spaulders"
            ),
            null,
            new WowheadLink(
                18182,
                "Chromatic Mantle of the Dawn"
            )
        ),
        new ItemSlotRow( //Back
            itemSlots.back,
            new WowheadLink(
                13340,
                "Cape of the Black Baron"
            ),
            new WowheadLink(
                13397,
                "Stoneskin Gargoyle Cape"
            ),
            null,
            new WowheadLink(
                13882,
                "Enchant Cloak - Lesser Agility",
                linkType.spell
            )
        ),
        new ItemSlotRow( //Chest
            itemSlots.chest,
            new WowheadLink(
                11726,
                "Savage Gladiator Chain"
            ),
            new WowheadLink(
                14637,
                "Cadaverous Armor"
            ),
            new WowheadLink(
                11926,
                "Deathdealer Breastplate"
            ),
            new WowheadLink(
                20025,
                "Enchant Chest - Greater Stats",
                linkType.spell
            )
        ),
        new ItemSlotRow( //Wrist
            itemSlots.wrist,
            new WowheadLink(
                12936,
                "Battleborn Armbraces"
            ),
            new WowheadLink(
                13400,
                "Vambraces of the Sadist"
            ),
            new WowheadLink(
                12966,
                "Blackmist Armguards"
            ),
            new WowheadLink(
                20010,
                "Enchant Bracer - Superior Strength",
                linkType.spell
            )
        ),
        new ItemSlotRow( //Hands
            itemSlots.hands,
            new WowheadLink(
                15063,
                "Devilsaur Gauntlets"
            ),
            new WowheadLink(
                13957,
                "Gargoyle Slasher"
            ),
            null,
            new WowheadLink(
                20013,
                "Enchant Gloves - Greater Strength",
                linkType.spell
            )
        ),
        new ItemSlotRow( //Belt
            itemSlots.belt,
            new WowheadLink(
                13142,
                "Brigam Girdle"
            ),
            new WowheadLink(
                13959,
                "Omokk's Girth Restrainer"
            ),
            null,
            null
        ),
        new ItemSlotRow( //Legs
            itemSlots.legs,
            new WowheadLink(
                15062,
                "Devilsaur Leggings"
            ),
            new WowheadLink(
                14554,
                "Cloudkeeper Legplates"
            ),
            null,
            new WowheadLink(
                11645,
                "Lesser Arcanum of Voracity"
            )
        ),
        new ItemSlotRow( //Feet
            itemSlots.feet,
            new WowheadLink(
                14616,
                "Bloodmail Boots"
            ),
            new WowheadLink(
                13967,
                "Windreaver Greaves"
            ),
            new WowheadLink(
                12555,
                "Battlechaser's Greaves"
            ),
            new WowheadLink(
                13890,
                "Enchant Boots - Minor Speed",
                linkType.spell
            )
        ),
        new ItemSlotRow( //Rings
            itemSlots.rings,
            new WowheadLink(
                17713,
                "Blackstone Ring"
            ),
            new WowheadLink(
                13098,
                "Painweaver Band"
            ),
            new WowheadLink(
                12548,
                "Magni's Will"
            ),
            null
        ),
        new ItemSlotRow( //Trinkets
            itemSlots.trinkets,
            new WowheadLink(
                11815,
                "Hand of Justice"
            ),
            new WowheadLink(
                13965,
                "Blackhand's Breadth"
            ),
            new WowheadLink(
                12065,
                "Ward of the Elements"
            ),
            null
        ),
        new ItemSlotRow( //MH
            itemSlots.mainHand,
            new WowheadLink(
                12940,
                "Dal'Rend's Sacred Charge"
            ),
            new WowheadLink(
                11684,
                "Ironfoe"
            ),
            new WowheadLink(
                811,
                "Axe of the Deep Woods"
            ),
            new WowheadLink(
                20034,
                "Enchant Weapon - Crusader",
                linkType.spell
            )
        ),
        new ItemSlotRow( //OH
            itemSlots.offHand,
            new WowheadLink(
                12939,
                "Dal'Rend's Tribal Guardian"
            ),
            new WowheadLink(
                15806,
                "Mirah's Song"
            ),
            new WowheadLink(
                12535,
                "Doomforged Straightedge"
            ),
            new WowheadLink(
                20034,
                "Enchant Weapon - Crusader",
                linkType.spell
            )
        ),
        new ItemSlotRow( //2H
            itemSlots.twoHand,
            new WowheadLink(
                12592,
                "Blackblade of Shahram"
            ),
            new WowheadLink(
                12784,
                "Arcanite Reaper"
            ),
            new WowheadLink(
                11931,
                "Dreadforge Retaliator"
            ),
            new WowheadLink(
                20034,
                "Enchant Weapon - Crusader",
                linkType.spell
            )
        ),
        new ItemSlotRow( //Ranged
            itemSlots.ranged,
            new WowheadLink(
                12651,
                "Blackcrow"
            ),
            new WowheadLink(
                12653,
                "Riphook"
            ),
            new WowheadLink(
                16996,
                "Gorewood Bow"
            ),
            new WowheadLink(
                10548,
                "Sniper Scope"
            )
        )
    ],
    "DPS"
);

let tierOneWarriorTank = new TableList(
    classes.warrior,
    [
        new ItemSlotRow( //Head
            itemSlots.head,
            new WowheadLink(
                16963,
                "Helm of Wrath"
            ),
            new WowheadLink(
                12640,
                "Lionheart Helm"
            ),
            new WowheadLink(
                16866,
                "Helm of Might"
            ),
            new WowheadLink(
                11642,
                "Lesser Arcanum of Constitution"
            )
        ),
        new ItemSlotRow( //Neck
            itemSlots.neck,
            new WowheadLink(
                18404,
                "Onyxia Tooth Pendant"
            ),
            new WowheadLink(
                17065,
                "Medallion of Steadfast Might"
            ),
            new WowheadLink(
                13091,
                "Medallion of Grand Marshal Morris"
            ),
            null
        ),
        new ItemSlotRow( //Shoulder
            itemSlots.shoulder,
            new WowheadLink(
                16868,
                "Pauldrons of Might"
            ),
            new WowheadLink(
                16733,
                "Spaulders of Valor"
            ),
            new WowheadLink(
                14552,
                "Stockade Pauldrons"
            ),
            new WowheadLink(
                18182,
                "Chromatic Mantle of the Dawn"
            )
        ),
        new ItemSlotRow( //Back
            itemSlots.back,
            new WowheadLink(
                17102,
                "Cloak of the Shrouded Mists"
            ),
            new WowheadLink(
                17107,
                "Dragon's Blood Cape"
            ),
            new WowheadLink(
                13397,
                "Stoneskin Gargoyle Cape"
            ),
            new WowheadLink(
                20015,
                "Enchant Cloak - Superior Defense",
                linkType.spell
            )
        ),
        new ItemSlotRow( //Chest
            itemSlots.chest,
            new WowheadLink(
                16865,
                "Breastplate of Might"
            ),
            new WowheadLink(
                11726,
                "Savage Gladiator Chain"
            ),
            new WowheadLink(
                12895,
                "Breastplate of the Chromatic Flight"
            ),
            new WowheadLink(
                20025,
                "Enchant Chest - Greater Stats",
                linkType.spell
            )
        ),
        new ItemSlotRow( //Wrist
            itemSlots.wrist,
            new WowheadLink(
                16861,
                "Bracers of Might"
            ),
            new WowheadLink(
                18812,
                "Wristguards of True Flight"
            ),
            new WowheadLink(
                16735,
                "Bracers of Valor"
            ),
            new WowheadLink(
                20011,
                "Enchant Bracer - Superior Stamina",
                linkType.spell
            )
        ),
        new ItemSlotRow( //Hands
            itemSlots.hands,
            new WowheadLink(
                16863,
                "Gauntlets of Might"
            ),
            new WowheadLink(
                14525,
                "Boneclenched Gauntlets"
            ),
            new WowheadLink(
                13072,
                "Stonegrip Gauntlets"
            ),
            new WowheadLink(
                20012,
                "Enchant Gloves - Greater Agility",
                linkType.spell
            )
        ),
        new ItemSlotRow( //Belt
            itemSlots.belt,
            new WowheadLink(
                19137,
                "Onslaught Girdle"
            ),
            new WowheadLink(
                16864,
                "Belt of Might"
            ),
            new WowheadLink(
                13142,
                "Brigam Girdle"
            ),
            null
        ),
        new ItemSlotRow( //Legs
            itemSlots.legs,
            new WowheadLink(
                16962,
                "Legplates of Wrath"
            ),
            new WowheadLink(
                16867,
                "Legplates of Might"
            ),
            new WowheadLink(
                14554,
                "Cloudkeeper Legplates"
            ),
            new WowheadLink(
                11624,
                "Lesser Arcanum of Constitution"
            )
        ),
        new ItemSlotRow( //Feet
            itemSlots.feet,
            new WowheadLink(
                16862,
                "Sabatons of Might"
            ),
            new WowheadLink(
                14616,
                "Bloodmail Boots"
            ),
            new WowheadLink(
                13259,
                "Ribsteel Footguards"
            ),
            new WowheadLink(
                13890,
                "Enchant Boots - Minor Speed",
                linkType.spell
            )
        ),
        new ItemSlotRow( //Rings
            itemSlots.rings,
            new WowheadLink(
                17063,
                "Band of Accuria"
            ),
            new WowheadLink(
                2246,
                "Myrmidon's Signet"
            ),
            new WowheadLink(
                17713,
                "Blackstone Ring"
            ),
            null
        ),
        new ItemSlotRow( //Trinkets
            itemSlots.trinkets,
            new WowheadLink(
                11815,
                "Hand of Justice"
            ),
            new WowheadLink(
                13965,
                "Blackhand's Breadth"
            ),
            new WowheadLink(
                11810,
                "Force of Will"
            ),
            null
        ),
        new ItemSlotRow( //MH
            itemSlots.mainHand,
            new WowheadLink(
                18203,
                "Eskhandar's Right Claw"
            ),
            new WowheadLink(
                15806,
                "Mirah's Song"
            ),
            new WowheadLink(
                11684,
                "Ironfoe"
            ),
            new WowheadLink(
                20034,
                "Enchant Weapon - Crusader",
                linkType.spell
            )
        ),
        new ItemSlotRow( //OH
            itemSlots.offHand,
            new WowheadLink(
                18805,
                "Core Hound Tooth"
            ),
            new WowheadLink(
                18832,
                "Brutality Blade"
            ),
            new WowheadLink(
                12939,
                "Dal'Rend's Tribal Guardian"
            ),
            new WowheadLink(
                20034,
                "Enchant Weapon - Crusader",
                linkType.spell
            )
        ),
        new ItemSlotRow( //Shield
            itemSlots.shield,
            new WowheadLink(
                17066,
                "Drillborer Disk"
            ),
            new WowheadLink(
                12602,
                "Draconian Deflector"
            ),
            new WowheadLink(
                1168,
                "Skullflame Shield"
            ),
            new WowheadLink(
                20017,
                "Enchant Shield - Greater Stamina",
                linkType.spell
            )
        ),
        new ItemSlotRow( //Ranged
            itemSlots.ranged,
            new WowheadLink(
                17072,
                "Blastershot Launcher"
            ),
            new WowheadLink(
                12651,
                "Blackcrow"
            ),
            new WowheadLink(
                16996,
                "Gorewood Bow"
            ),
            new WowheadLink(
                10548,
                "Sniper Scope"
            )
        )
    ],
    "Tank"
);

let tierOneWarriorDPS = new TableList(
    classes.warrior,
    [
        new ItemSlotRow( //Head
            itemSlots.head,
            new WowheadLink(
                12640,
                "Lionheart Helm"
            ),
            new WowheadLink(
                12587,
                "Eye of Rend"
            ),
            new WowheadLink(
                13404,
                "Mask of the Unforgiven"
            ),
            new WowheadLink(
                11645,
                "Lesser Arcanum of Voracity"
            )
        ),
        new ItemSlotRow( //Neck
            itemSlots.neck,
            new WowheadLink(
                18404,
                "Onyxia Tooth Pendant"
            ),
            new WowheadLink(
                15411,
                "Mark of Fordring"
            ),
            new WowheadLink(
                11933,
                "Imperial Jewel"
            ),
            null
        ),
        new ItemSlotRow( //Shoulder
            itemSlots.shoulder,
            new WowheadLink(
                12927,
                "Truestrike Shoulders"
            ),
            new WowheadLink(
                12082,
                "Wyrmhide Spaulders"
            ),
            null,
            new WowheadLink(
                18182,
                "Chromatic Mantle of the Dawn"
            )
        ),
        new ItemSlotRow( //Back
            itemSlots.back,
            new WowheadLink(
                13340,
                "Cape of the Black Baron"
            ),
            new WowheadLink(
                13397,
                "Stoneskin Gargoyle Cape"
            ),
            null,
            new WowheadLink(
                13882,
                "Enchant Cloak - Lesser Agility",
                linkType.spell
            )
        ),
        new ItemSlotRow( //Chest
            itemSlots.chest,
            new WowheadLink(
                11726,
                "Savage Gladiator Chain"
            ),
            new WowheadLink(
                14637,
                "Cadaverous Armor"
            ),
            new WowheadLink(
                11926,
                "Deathdealer Breastplate"
            ),
            new WowheadLink(
                20025,
                "Enchant Chest - Greater Stats",
                linkType.spell
            )
        ),
        new ItemSlotRow( //Wrist
            itemSlots.wrist,
            new WowheadLink(
                19146,
                "Wristguards of Stability"
            ),
            new WowheadLink(
                12936,
                "Battleborn Armbraces"
            ),
            new WowheadLink(
                13400,
                "Vambraces of the Sadist"
            ),
            new WowheadLink(
                20010,
                "Enchant Bracer - Superior Strength",
                linkType.spell
            )
        ),
        new ItemSlotRow( //Hands
            itemSlots.hands,
            new WowheadLink(
                15063,
                "Devilsaur Gauntlets"
            ),
            new WowheadLink(
                19143,
                "Flameguard Gauntlets"
            ),
            new WowheadLink(
                13957,
                "Gargoyle Slasher"
            ),
            new WowheadLink(
                20013,
                "Enchant Gloves - Greater Strength",
                linkType.spell
            )
        ),
        new ItemSlotRow( //Belt
            itemSlots.belt,
            new WowheadLink(
                19137,
                "Onslaught Girdle"
            ),
            new WowheadLink(
                13142,
                "Brigam Girdle"
            ),
            new WowheadLink(
                13959,
                "Omokk's Girth Restrainer"
            ),
            null
        ),
        new ItemSlotRow( //Legs
            itemSlots.legs,
            new WowheadLink(
                15062,
                "Devilsaur Leggings"
            ),
            new WowheadLink(
                14554,
                "Cloudkeeper Legplates"
            ),
            null,
            new WowheadLink(
                11645,
                "Lesser Arcanum of Voracity"
            )
        ),
        new ItemSlotRow( //Feet
            itemSlots.feet,
            new WowheadLink(
                14616,
                "Bloodmail Boots"
            ),
            new WowheadLink(
                13967,
                "Windreaver Greaves"
            ),
            new WowheadLink(
                12555,
                "Battlechaser's Greaves"
            ),
            new WowheadLink(
                13890,
                "Enchant Boots - Minor Speed",
                linkType.spell
            )
        ),
        new ItemSlotRow( //Rings
            itemSlots.rings,
            new WowheadLink(
                17713,
                "Blackstone Ring"
            ),
            new WowheadLink(
                18821,
                "Quick Strike Ring"
            ),
            new WowheadLink(
                13098,
                "Painweaver Band"
            ),
            null
        ),
        new ItemSlotRow( //Trinkets
            itemSlots.trinkets,
            new WowheadLink(
                11815,
                "Hand of Justice"
            ),
            new WowheadLink(
                13965,
                "Blackhand's Breadth"
            ),
            new WowheadLink(
                12065,
                "Ward of the Elements"
            ),
            null
        ),
        new ItemSlotRow( //MH
            itemSlots.mainHand,
            new WowheadLink(
                17068,
                "Deathbringer"
            ),
            new WowheadLink(
                17075,
                "Vis'kag the Bloodletter"
            ),
            new WowheadLink(
                11684,
                "Ironfoe"
            ),
            new WowheadLink(
                20034,
                "Enchant Weapon - Crusader",
                linkType.spell
            )
        ),
        new ItemSlotRow( //OH
            itemSlots.offHand,
            new WowheadLink(
                18832,
                "Brutality Blade"
            ),
            new WowheadLink(
                15806,
                "Mirah's Song"
            ),
            new WowheadLink(
                12535,
                "Doomforged Straightedge"
            ),
            new WowheadLink(
                20034,
                "Enchant Weapon - Crusader",
                linkType.spell
            )
        ),
        new ItemSlotRow( //2H
            itemSlots.twoHand,
            new WowheadLink(
                17076,
                "Bonereaver's Edge"
            ),
            new WowheadLink(
                17104,
                "Spinal Reaper"
            ),
            new WowheadLink(
                12592,
                "Blackblade of Shahram"
            ),
            new WowheadLink(
                20034,
                "Enchant Weapon - Crusader",
                linkType.spell
            )
        ),
        new ItemSlotRow( //Ranged
            itemSlots.ranged,
            new WowheadLink(
                17069,
                "Striker's Mark"
            ),
            new WowheadLink(
                17072,
                "Blastershot Launcher"
            ),
            new WowheadLink(
                12651,
                "Blackcrow"
            ),
            new WowheadLink(
                10548,
                "Sniper Scope"
            )
        )
    ],
    "DPS"
);

// #endregion Warrior

var preRaidPhaseOne = [
    preRaidDruid,
    preRaidHunter,
    preRaidMage,
    preRaidPaladin,
    preRaidPriest,
    preRaidRogue,
    preRaidWarlock,
    preRaidWarriorDPS,
    preRaidWarriorTank
];

var tierOnePhaseOne = [
    tierOneDruid,
    tierOneHunter,
    tierOneMage,
    tierOnePaladin,
    tierOnePriest,
    tierOneRogue,
    tierOneWarlock,
    tierOneWarriorDPS,
    tierOneWarriorTank
];