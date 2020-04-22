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
                18490,
                "Insightful Hood"
            ),
            new WowheadLink(
                13102,
                "Cassandra's Grace"
            ),
            new WowheadLink(
                18330,
                "Arcanum of Focus"
            ),
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
                18810,
                "Wild Growth Spaulders"
            ),
            new WowheadLink(
                15061,
                "Living Shoulders"
            ),
            new WowheadLink(
                18681,
                "Burial shawl"
            ),
            new WowheadLink(
                18182,
                "Chromatic Mantle of the Dawn"
            ),
        ),
        new ItemSlotRow( //Back
            itemSlots.back,
            new WowheadLink(
                18510,
                "Hide of the Wild"
            ),
            new WowheadLink(
                13386,
                "Archivist Cape",
                linkType.item,
                "of Healing"
            ),
            new WowheadLink(
                18389,
                "Cloak of the Cosmos"
            ),
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
                18525,
                "Bracers of Prosperity"
            ),
            new WowheadLink(
                18263,
                "Flarecore Wraps"
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
            //Not available until phase 3!
            // new WowheadLink(
            //     23802,
            //     "Enchant Bracer - Healing Power",
            //     linkType.spell
            // ),
        ),
        new ItemSlotRow( //Hands
            itemSlots.hands,
            new WowheadLink(
                10787,
                "Atal'ai Gloves",
                linkType.item,
                "of Healing"
            ),
            new WowheadLink(
                18309,
                "Gloves of Restoration"
            ),
            new WowheadLink(
                12554,
                "Hands of the Exalted Herald"
            ),
            null
        ),
        new ItemSlotRow( //Belt
            itemSlots.belt,
            new WowheadLink(
                19162,
                "Corehound Belt"
            ),
            new WowheadLink(
                18327,
                "Whipvine Cord"
            ),
            new WowheadLink(
                14553,
                "Sash of Mercy"
            ),
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
                18386,
                "Padre's Trousers"
            ),
            new WowheadLink(
                18330,
                "Arcanum of Focus"
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
            new WowheadLink(
                18507,
                "Boots of the Full Moon"
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
                19140,
                "Cauterizing Band",
                linkType.item,
                "2 of these"
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
                18470,
                "Royal Seal of Eldre'Thalas"
            ),
            new WowheadLink(
                17064,
                "Shard of the Scale",
                linkType.item,
                "or Mindtap Talism"
            ),
            new WowheadLink(
                12930,
                "Briarwood Reed"
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
            new WowheadLink(
                18321,
                "Energetic Rod"
            ),
            new WowheadLink(
                22750,
                "Enchant Weapon - Healing Power",
                linkType.spell
            ),
        ),
        new ItemSlotRow( //OH
            itemSlots.offHand,
            new WowheadLink(
                18523,
                "Brightly Glowing Stone"
            ),
            new WowheadLink(
                11928,
                "Thaurissan's Royal Scepter"
            ),
            new WowheadLink(
                10796,
                "Drakestone of Healing"
            ),
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
            new WowheadLink(
                18534,
                "Rod of the Ogre Magi"
            ),
            new WowheadLink(
                22750,
                "Enchant Weapon - Healing Power",
                linkType.spell
            ),
        ),
    ]
);

let tierTwoDruidResto = new TableList(
    classes.druid,
    [
        new ItemSlotRow( //Head
            itemSlots.head,
            new WowheadLink(
                19375,
                "Mish'undare, Circlet of the Mind Flayer",
                linkType.item,
                "Crit build"
            ),
            new WowheadLink(
                19132,
                "Crystal Adorned Crown",
                linkType.item,
                "Non-Crit build"
            ),
            new WowheadLink(
                16900,
                "Stormrage Cover"
            ),
            new WowheadLink(
                18330,
                "Arcanum of Focus"
            ),
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
                19371,
                "Pendant of the Fallen Dragon"
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
                16902,
                "Cenarion Spaulders"
            ),
            new WowheadLink(
                16836,
                "Cenarion Spaulders"
            ),
            new WowheadLink(
                18182,
                "Chromatic Mantle of the Dawn"
            ),
        ),
        new ItemSlotRow( //Back
            itemSlots.back,
            new WowheadLink(
                19430,
                "Shroud of Pure Thought"
            ),
            new WowheadLink(
                18510,
                "Hide of the Wild"
            ),
            new WowheadLink(
                18208,
                "Drape of Benediction"
            ),
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
                16897,
                "Stormrage Chestguard"
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
                16904,
                "Stormrage Bracers"
            ),
            new WowheadLink(
                18263,
                "Flarecore Wraps"
            ),
            new WowheadLink(
                18525,
                "Bracers of Prosperity"
            ),
            new WowheadLink(
                23802,
                "Enchant Bracer - Healing Power",
                linkType.spell
            ),
        ),
        new ItemSlotRow( //Hands
            itemSlots.hands,
            new WowheadLink(
                16899,
                "Stormrage Handguards"
            ),
            new WowheadLink(
                19390,
                "Taut Dragonhide Gloves",
                linkType.item,
                "Crit Build"
            ),
            new WowheadLink(
                18309,
                "Gloves of Restoration"
            ), null
        ),
        new ItemSlotRow( //Belt
            itemSlots.belt,
            new WowheadLink(
                19162,
                "Corehound Belt"
            ),
            new WowheadLink(
                18327,
                "Whipvine Cord"
            ),
            new WowheadLink(
                19400,
                "Firemaw's Clutch"
            ),
            null
        ),
        new ItemSlotRow( //Legs
            itemSlots.legs,
            new WowheadLink(
                19385,
                "Empowered Leggings"
            ),
            new WowheadLink(
                18875,
                "Salamander Scale Pants"
            ),
            new WowheadLink(
                16901,
                "Stormrage Legguards"
            ),
            new WowheadLink(
                18330,
                "Arcanum of Focus"
            )
        ),
        new ItemSlotRow( //Feet
            itemSlots.feet,
            new WowheadLink(
                19437,
                "Boots of Pure Thought"
            ),
            new WowheadLink(
                16898,
                "Stormrage Boots",
                linkType.item,
                "Crit Build"
            ),
            new WowheadLink(
                19131,
                "Snowblind Shoes"
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
                19382,
                "Pure Elementium Band"
            ),
            new WowheadLink(
                19140,
                "Cauterizing Band"
            ),
            new WowheadLink(
                19397,
                "Ring of Blackrock"
            ),
            null
        ),
        new ItemSlotRow( //Trinkets
            itemSlots.trinkets,
            new WowheadLink(
                19395,
                "Rejuvenating Gem"
            ),
            new WowheadLink(
                19288,
                "Darkmoon Card: Blue Dragon"
            ),
            new WowheadLink(
                17064,
                "Shard of the Scale"
            ),
            null
        ),
        new ItemSlotRow( //MH
            itemSlots.mainHand,
            new WowheadLink(
                19360,
                "Lok'amir il Romathis"
            ),
            new WowheadLink(
                17070,
                "Fang of the Mystics",
                linkType.item,
                "Crit Build"
            ),
            new WowheadLink(
                19347,
                "Claw of Chromaggus"
            ),
            new WowheadLink(
                22750,
                "Enchant Weapon - Healing Power",
                linkType.spell
            ),
        ),
        new ItemSlotRow( //OH
            itemSlots.offHand,
            new WowheadLink(
                19312,
                "Lei of the Lifegiver"
            ),
            new WowheadLink(
                18523,
                "Brightly Glowing Stone"
            ),
            new WowheadLink(
                19366,
                "Master Dragonslayer's Orb"
            ),
            null
        ),
        new ItemSlotRow( //2h
            itemSlots.twoHand,
            new WowheadLink(
                19356,
                "Staff of the Shadow Flame",
                linkType.item,
                "Crit-Build"
            ),
            new WowheadLink(
                17113,
                "Amberseal Keeper"
            ),
            new WowheadLink(
                18842,
                "Staff of Dominance",
                linkType.item,
                "Crit-Build"
            ),
            new WowheadLink(
                22750,
                "Enchant Weapon - Healing Power",
                linkType.spell
            ),
        ),
    ],
    "Healer"
);

let tierTwoDruidTank = new TableList(
    classes.druid,
    [
        new ItemSlotRow( //Head
            itemSlots.head,
            new WowheadLink(
                16451,
                "Field Marshal's Dragonhide Helmet",
                linkType.item,
                "Rank 13"
            ),
            new WowheadLink(
                13404,
                "Mask of the Unforgiven"
            ),
            new WowheadLink(
                14539,
                "Bone Ring Helm"
            ),
            new WowheadLink(
                11646,
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
                19383,
                "Master Dragonslayer's Medallion"
            ),
            new WowheadLink(
                19377,
                "Prestor's Talisman of Connivery"
            ),
            null
        ),
        new ItemSlotRow( //Shoulder
            itemSlots.shoulder,
            new WowheadLink(
                19389,
                "Taut Dragonhide Shoulderpads"
            ),
            new WowheadLink(
                16449,
                "Field Marshal's Dragonhide Spaulders",
                linkType.item,
                "Rank 13"
            ),
            new WowheadLink(
                19139,
                "Fireguard Shoulders"
            ),
            new WowheadLink(
                18182,
                "Chromatic Mantle of the Dawn",
                linkType.item,
                "Argent Dawn Revered/Exalted"
            )
        ),
        new ItemSlotRow( //Back
            itemSlots.back,
            new WowheadLink(
                19386,
                "Elementium Threaded Cloak"
            ),
            new WowheadLink(
                17107,
                "Dragon's Blood Cape"
            ),
            new WowheadLink(
                17102,
                "Cloak of the Shrouded Mists"
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
                19405,
                "Malfurion's Blessed Bulwark"
            ),
            new WowheadLink(
                16452,
                "Field Marshal's Dragonhide Breastplate",
                linkType.item,
                "Rank 13"
            ),
            new WowheadLink(
                12757,
                "Breastplate of Bloodthirst"
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
                12966,
                "Blackmist Armguards"
            ),
            new WowheadLink(
                19587,
                "Forest Stalker's Bracers"
            ),
            new WowheadLink(
                18700,
                "Malefic Bracers"
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
                13258,
                "Slaghide Gauntlets",
                linkType.item,
                "of the Monkey"
            ),
            new WowheadLink(
                16448,
                "Marshal's Dragonhide Gauntlets",
                linkType.item,
                "Rank 12"
            ),
            new WowheadLink(
                15063,
                "Devilsaur Gauntlets"
            ),
            null
        ),
        new ItemSlotRow( //Belt
            itemSlots.belt,
            new WowheadLink(
                19149,
                "Lava Belt",
                linkType.item,
                "Mitigation"
            ),
            new WowheadLink(
                19163,
                "Molten Belt",
                linkType.item,
                "Threat"
            ),
            new WowheadLink(
                13252,
                "Cloudrunner Girdle"
            ),
            null
        ),
        new ItemSlotRow( //Legs
            itemSlots.legs,
            new WowheadLink(
                12963,
                "Blademaster Leggings"
            ),
            new WowheadLink(
                22740,
                "Outrider's Leather Pants"
            ),
            new WowheadLink(
                16450,
                "Marshal's Dragonhide Legguards",
                linkType.item,
                "Rank 12"
            ),
            new WowheadLink(
                18331,
                "Arcanum of Protection",
                linkType.item,
                "Voracity also an option"
            )
        ),
        new ItemSlotRow( //Feet
            itemSlots.feet,
            new WowheadLink(
                19381,
                "Boots of the Shadow Flame"
            ),
            new WowheadLink(
                16459,
                "Marshal's Dragonhide Boots"
            ),
            new WowheadLink(
                18716,
                "Ash Covered Boots"
            ),
            new WowheadLink(
                13890,
                "Enchant Boots - Minor Speed",
                linkType.spell,
                "Greater Agility also an option"
            )
        ),
        new ItemSlotRow( //Rings
            itemSlots.rings,
            new WowheadLink(
                19376,
                "Archimtiros' Ring of Reckoning"
            ),
            new WowheadLink(
                17063,
                "Band of Accuria"
            ),
            new WowheadLink(
                19384,
                "Master Dragonslayer's Ring"
            ),
            null
        ),
        new ItemSlotRow( //Rings
            itemSlots.rings,
            new WowheadLink(
                19325,
                "Don Julio's Band"
            ),
            new WowheadLink(
                18879,
                "Heavy Dark Iron Ring"
            ),
            null,
            null
        ),
        new ItemSlotRow( //Trinkets
            itemSlots.trinkets,
            new WowheadLink(
                13966,
                "Drake Fang Talisman"
            ),
            new WowheadLink(
                19406,
                "Drake Fang Talisman"
            ),
            new WowheadLink(
                11811,
                "Smoking Heart of the Mountain"
            ),
            null
        ),
        new ItemSlotRow( //Twohand
            itemSlots.twoHand,
            new WowheadLink(
                943,
                "Warden Staff"
            ),
            new WowheadLink(
                18531,
                "Unyielding Maul"
            ),
            new WowheadLink(
                9449,
                "Manual Crowd Pummeler"
            ),
            new WowheadLink(
                27837,
                "Enchant 2H Weapon - Agility",
                linkType.spell
            )
        )
    ],
    "Tank"
)

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

let tierTwoHunter = new TableList(
    classes.hunter,
    [
        new ItemSlotRow( //Head
            itemSlots.head,
            new WowheadLink(
                16939,
                "Dragonstalker’s Helm"
            ),
            new WowheadLink(
                16846,
                "Giantstalker's Helmet"
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
                19377,
                "Prestor’s Talisman of Connivery"
            ),
            new WowheadLink(
                18404,
                "Onyxia Tooth Pendant"
            ),
            null,
            null
        ),
        new ItemSlotRow( //Shoulder
            itemSlots.shoulder,
            new WowheadLink(
                16937,
                "Dragonstalker’s Spaulders"
            ),
            new WowheadLink(
                16848,
                "Giantstalker's Epaulets"
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
                16942,
                "Dragonstalker’s Breastplate"
            ),
            new WowheadLink(
                16845,
                "Giantstalker's Breastplate"
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
                16935,
                "Dragonstalker’s Bracers"
            ),
            new WowheadLink(
                16850,
                "Giantstalker's Bracers"
            ),
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
                16940,
                "Dragonstalker’s Gauntlets"
            ),
            new WowheadLink(
                16852,
                "Giantstalker's Gloves"
            ),
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
                16936,
                "Dragonstalker’s Belt"
            ),
            new WowheadLink(
                16851,
                "Giantstalker's Belt"
            ),
            null,
            null
        ),
        new ItemSlotRow( //Legs
            itemSlots.legs,
            new WowheadLink(
                16938,
                "Dragonstalker’s Legguards"
            ),
            new WowheadLink(
                16847,
                "Giantstalker's Leggings"
            ),
            null,
            new WowheadLink(
                11647,
                "Lesser Arcanum of Voracity"
            )
        ),
        new ItemSlotRow( //Feet
            itemSlots.feet,
            new WowheadLink(
                16941,
                "Dragonstalker’s Greaves"
            ),
            new WowheadLink(
                16849,
                "Giantstalker's Boots"
            ),
            null,
            new WowheadLink(
                13890,
                "Enchant Boots – Minor Speed",
                linkType.spell
            )
            // new WowheadLink(
            //     20023,
            //     "Enchant Boots - Greater Agility",
            //     linkType.spell
            // )
        ),
        new ItemSlotRow( //Rings
            itemSlots.rings,
            new WowheadLink(
                17063,
                "Band of Accuria"
            ),
            new WowheadLink(
                19325,
                "Don Julio’s Band"
            ),
            new WowheadLink(
                18821,
                "Quick Strike Ring"
            ),
            null
        ),
        new ItemSlotRow( //Trinkets
            itemSlots.trinkets,
            new WowheadLink(
                19406,
                "Drake Fang Talisman"
            ),
            new WowheadLink(
                18473,
                "Royal Seal of Eldre’Thalas"
            ),
            new WowheadLink(
                13965,
                "Blackhand's Breadth"
            ),
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
                23800,
                "Enchant Weapon – Agility",
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
                23800,
                "Enchant Weapon – Agility",
                linkType.spell
            )
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
                19361,
                "Ashjre’thul, Crossbow of Smiting"
            ),
            new WowheadLink(
                18713,
                "Rhok'delar, Longbow of the Ancient Keepers"
            ),
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
                18330,
                "Arcanum of Focus"
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
                18330,
                "Arcanum of Focus"
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
                "Netherwind Crown"
            ),
            new WowheadLink(
                18727,
                "Crimsom Felt Hat"
            ),
            new WowheadLink(
                18330,
                "Arcanum of Focus"
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
                12103,
                "Star of Mystaria"
            ),
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
            new WowheadLink(
                16797,
                "Arcanist Mantle"
            ),
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
            new WowheadLink(
                11623,
                "Spritecaster Drape"
            ),
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
            new WowheadLink(
                18497,
                "Sublime Wristguards"
            ),
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
                18330,
                "Arcanum of Focus"
            ),
        ),
        new ItemSlotRow( //Hands
            itemSlots.hands,
            new WowheadLink(
                13253,
                "Hands of Power"
            ),
            new WowheadLink(
                16801,
                "Arcanist Gloves"
            ),
            new WowheadLink(
                18693,
                "Shivery Handwraps"
            ),
            null,
        ),
        new ItemSlotRow( //Belt
            itemSlots.belt,
            new WowheadLink(
                19136,
                "Mana Igniting Cord"
            ),
            new WowheadLink(
                11662,
                "Ban'thok Sash"
            ),
            null,
            null
        ),
        new ItemSlotRow( //Feet
            itemSlots.feet,
            new WowheadLink(
                16800,
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
                18878,
                "Sorcerous Dagger"
            ),
            new WowheadLink(
                13964,
                "Witchblade"
            ),
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
            new WowheadLink(
                19142,
                "Fire Runed Grimoire"
            ),
            null
        ),
        new ItemSlotRow( //Main Hand
            itemSlots.twoHand,
            new WowheadLink(
                18842,
                "Staff of Dominance"
            ),
            new WowheadLink(
                18534,
                "Rod of the Ogre Magi"
            ),
            new WowheadLink(
                15276,
                "Magus Long Staff"
            ),
            new WowheadLink(
                22749,
                "Spellpower",
                linkType.spell
            ),
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

let tierTwoMage = new TableList(
    classes.mage,
    [
        new ItemSlotRow( //Head
            itemSlots.head,
            new WowheadLink(
                19375,
                "Mish'undare, Circlet of the Mind Flayer"
            ),
            new WowheadLink(
                16795,
                "Arcanist Crown",
                linkType.item,
                "For 3-set Bonus "
            ),
            new WowheadLink(
                16914,
                "Netherwind Crown"
            ),
            new WowheadLink(
                19787,
                "Presence of Sight"
            )
        ),
        new ItemSlotRow( //Neck
            itemSlots.neck,
            new WowheadLink(
                18814,
                "Choker of the Fire Lord"
            ),
            new WowheadLink(
                19426,
                "Orb of the Darkmoon"
            ),
            new WowheadLink(
                17109,
                "Choker of enlightenment"
            ),
            null
        ),
        new ItemSlotRow( //Shoulder
            itemSlots.shoulder,
            new WowheadLink(
                19370,
                "Mantle of the Blackwing Cabal"
            ),
            new WowheadLink(
                11782,
                "Boreal Mantle"
            ),
            new WowheadLink(
                16797,
                "Arcanist Mantle",
                linkType.item,
                "For 3-set Bonus"
            ),
            new WowheadLink(
                20076,
                "Zandalar Signet of Mojo"
            )
        ),
        new ItemSlotRow( //Back
            itemSlots.back,
            new WowheadLink(
                19378,
                "Cloak of the Brood Lord"
            ),
            new WowheadLink(
                19857,
                "Cloak of Consumption"
            ),
            new WowheadLink(
                17078,
                "Sapphiron Drape",
                linkType.item,
                "For stats/ or use any cloak with +21 frost damage."
            ),
            new WowheadLink(
                20014,
                "Enchant cloak - Greater Resistances",
                linkType.spell
            )
        ),
        new ItemSlotRow( //Chest
            itemSlots.chest,
            new WowheadLink(
                19682,
                "Bloodvine Vest"
            ),
            new WowheadLink(
                14152,
                "Robe of the Archmage"
            ),
            new WowheadLink(
                16916,
                "Netherwind Robes"
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
                19374,
                "Bracers of Arcane Accuracy"
            ),
            new WowheadLink(
                16918,
                "Netherwind Bindings"
            ),
            new WowheadLink(
                16799,
                "Arcanist Bindings",
                linkType.item,
                "For 3-set bonus"
            ),
            null
        ),
        new ItemSlotRow( //Hands
            itemSlots.hands,
            new WowheadLink(
                16913,
                "Netherwind Gloves"
            ),
            new WowheadLink(
                16801,
                "Arcanist Gloves",
                linkType.item,
                "For 3-set Bonus"
            ),
            new WowheadLink(
                23290,
                "Knight-Lieutenant's Silk Handwraps",
                linkType.item,
                "For 2-set Bonus if R7"
            ),
            new WowheadLink(
                13947,
                "Enchant Gloves - Riding skill",
                linkType.spell
            )
        ),
        new ItemSlotRow( //Belt
            itemSlots.belt,
            new WowheadLink(
                19136,
                "Mana Igniting Cord"
            ),
            new WowheadLink(
                19400,
                "Firemaw's Clutch"
            ),
            new WowheadLink(
                11662,
                "Ban'thok Sash"
            ),
            null
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
            new WowheadLink(
                13170,
                "Skyshroud Leggings"
            ),
            new WowheadLink(
                19787,
                "Presence of Sight"
            )
        ),
        new ItemSlotRow( //Feet
            itemSlots.feet,
            new WowheadLink(
                19684,
                "Bloodvine Boots"
            ),
            new WowheadLink(
                19438,
                "Ringo's Blizzard Boots"
            ),
            new WowheadLink(
                23291,
                "Knight-Lieutenant's Silk Walkers",
                linkType.item,
                "For 2-set Bonus if R7"
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
                19147,
                "Ring of Spell power",
                linkType.item,
                "You want 2 of these"
            ),
            new WowheadLink(
                20632,
                "Mindtear Band"
            ),
            new WowheadLink(
                19403,
                "Band of Forced Concentration",
                linkType.item,
            ),
            null
        ),
        new ItemSlotRow( //Rings
            itemSlots.rings,
            new WowheadLink(
                12543,
                "Songstone of Ironforge"
            ),
            new WowheadLink(
                19905,
                "Zanzil's Band",
                linkType.item,
                "Good set for 3% hit 17sp"
            ),
            new WowheadLink(
                19893,
                "Zanzil's Seal"
            ),
            null
        ),
        new ItemSlotRow( //Trinkets
            itemSlots.trinkets,
            new WowheadLink(
                19950,
                "Zandalarian Hero Charm",
                linkType.item,
                "Talisman is mostly equal"
            ),
            new WowheadLink(
                19379,
                "Neltharion's Tear"
            ),
            new WowheadLink(
                19339,
                "Mind Quickening Gem"
            ),
            null
        ),
        new ItemSlotRow( //Mainhand
            itemSlots.mainHand,
            new WowheadLink(
                19347,
                "Claw of Chromaggus"
            ),
            new WowheadLink(
                17103,
                "Azuresong Mageblade"
            ),
            new WowheadLink(
                17070,
                "Fang of the Mystics",
                linkType.item,
                "Do not count on ever seeing this drop."
            ),
            new WowheadLink(
                22749,
                "Enchant Weapon - Spellpower",
                linkType.spell
            )
        ),
        new ItemSlotRow( //Offhand
            itemSlots.offHand,
            new WowheadLink(
                19310,
                "Tome of the Ice Lord"
            ),
            new WowheadLink(
                19366,
                "Master Dragonslayer's Orb"
            ),
            new WowheadLink(
                10796,
                "Drakestone Of Frozen Wrath"
            ),
            null
        ),
        new ItemSlotRow( //Twohand
            itemSlots.twoHand,
            new WowheadLink(
                19356,
                "Staff of the Shadow Flame",
                linkType.item,
                "Better than MH+OH"
            ),
            new WowheadLink(
                18842,
                "Staff of Dominance"
            ),
            new WowheadLink(
                19355,
                "Shadow Wing Focus Staff"
            ),
            new WowheadLink(
                22749,
                "Enchant Weapon - Spellpower",
                linkType.spell
            )
        ),
        new ItemSlotRow( //Ranged
            itemSlots.ranged,
            new WowheadLink(
                19130,
                "Cold Snap",
                linkType.item,
                "From Azuregos. 20 frost damage"
            ),
            new WowheadLink(
                19861,
                "Touch of Chaos",
                linkType.item,
                "Fire BiS"
            ),
            new WowheadLink(
                19108,
                "Wand of Biting Cold",
                linkType.item,
                "From Alterac Valley quest. 16 frost damage"
            ),
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
                11648,
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
                11648,
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
                18490,
                "Insightful Hood"
            ),
            new WowheadLink(
                16955,
                "Judgement Crown"
            ),
            null,
            new WowheadLink(
                18330,
                "Arcanum of Focus"
            ),
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
                18317,
                "Tempest Talisman"
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
                12625,
                "Dawnbringer Shoulders"
            ),
            new WowheadLink(
                14548,
                "Royal Cap Spaulders"
            ),
            new WowheadLink(
                18182,
                "Chromatic Mantle of the Dawn"
            ),
        ),
        new ItemSlotRow( //Back
            itemSlots.back,
            new WowheadLink(
                18510,
                "Hide of the Wild"
            ),
            new WowheadLink(
                13386,
                "Archivist Cape",
                linkType.item,
                "of Healing"
            ),
            new WowheadLink(
                18389,
                "Cloak of the Cosmos"
            ),
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
            new WowheadLink(
                13346,
                "Robes of the Exalted"
            ),
            new WowheadLink(
                15047,
                "Red Dragonscale Breastplate"
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
                18459,
                "Gallant's Wristguards"
            ),
            new WowheadLink(
                13969,
                "Loomguard Armbraces"
            ),
            new WowheadLink(
                18525,
                "Bracers of Prosperity"
            ),
            new WowheadLink(
                20008,
                "Enchant Bracer - Greater Intellect",
                linkType.spell
            ),
        ),
        new ItemSlotRow( //Hands
            itemSlots.hands,
            new WowheadLink(
                18527,
                "Harmonious Gauntlets"
            ),
            new WowheadLink(
                18309,
                "Gloves of Restoration"
            ),
            new WowheadLink(
                12554,
                "Hands of the Exalted Herald"
            ),
            null
        ),
        new ItemSlotRow( //Belt
            itemSlots.belt,
            new WowheadLink(
                19162,
                "Corehound Belt"
            ),
            new WowheadLink(
                18702,
                "Belt of the Ordained"
            ),
            new WowheadLink(
                18327,
                "Whipvine Cord"
            ),
            null
        ),
        new ItemSlotRow( //Legs
            itemSlots.legs,
            new WowheadLink(
                18875,
                "Salamander Scale Pants"
            ),
            new WowheadLink(
                18386,
                "Padre's Trousers"
            ),
            new WowheadLink(
                18682,
                "Ghoul Skin Leggings"
            ),
            new WowheadLink(
                18330,
                "Arcanum of Focus"
            )
        ),
        new ItemSlotRow( //Feet
            itemSlots.feet,
            new WowheadLink(
                13954,
                "Verdant Footpads"
            ),
            new WowheadLink(
                18507,
                "Boots of the Full Moon"
            ),
            new WowheadLink(
                11822,
                "Omnicast Boots"
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
                19140,
                "Cauterizing Band",
                linkType.item,
                "2 of these"
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
                17064,
                "Shard of the Scale"
            ),
            new WowheadLink(
                12930,
                "Briarwood Reed"
            ),
            new WowheadLink(
                18472,
                "Royal Seal of Eldre'Thalas"
            ),
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
            new WowheadLink(
                11923,
                "The Hammer of Grace"
            ),
            new WowheadLink(
                22750,
                "Enchant Weapon - Healing Power",
                linkType.spell
            )
        ),
        new ItemSlotRow( //OH
            itemSlots.offHand,
            new WowheadLink(
                18523,
                "Brightly Glowing Stone"
            ),
            new WowheadLink(
                11928,
                "Thaurissan's Royal Scepter"
            ),
            new WowheadLink(
                10796,
                "Drakestone of Healing",
                linkType.item,
                "of Healing"
            ),
            null
        ),
    ]
);

let tierTwoPaladin = new TableList(
    classes.paladin,
    [
        new ItemSlotRow( //Head
            itemSlots.head,
            new WowheadLink(
                19132,
                "Crystal Adorned Crown",
                linkType.item,
                "BiS until P5"
            ),
            new WowheadLink(
                20628,
                "Deviate Growth Cap",
                linkType.item,
                "Crit, +heal and mp5"
            ),
            new WowheadLink(
                19375,
                "Mish'Undare, Circlet of the Mind Flayer",
                linkType.item,
                "Crit"
            ),
            new WowheadLink(
                19783,
                "Syncretist's Sigil"
            )
        ),
        new ItemSlotRow( //Neck
            itemSlots.neck,
            new WowheadLink(
                19885,
                "Jin'do's Evil Eye",
                linkType.item,
                "BiS until P5"
            ),
            new WowheadLink(
                18814,
                "Choker of the Fire Lord"
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
                "Wild Growth Spaulders",
                linkType.item,
                "BiS until P6"
            ),
            new WowheadLink(
                19928,
                "Animist's Spaulders"
            ),
            new WowheadLink(
                19370,
                "Mantle of the Blackwing Cabal"
            ),
            new WowheadLink(
                20078,
                "Zandalar Signet of Serenity",
                linkType.item,
                "Or Mantle of the Dawn"
            )
        ),
        new ItemSlotRow( //Back
            itemSlots.back,
            new WowheadLink(
                19430,
                "Shroud of Pure Thought",
                linkType.item,
                "BiS until P5"
            ),
            new WowheadLink(
                18510,
                "Hide of the Wild",
                linkType.item,
                "Leatherworking crafting"
            ),
            new WowheadLink(
                19378,
                "Cloak of the Brood Lord"
            ),
            new WowheadLink(
                20014,
                "Enchant Cloak - Greater Resistance",
                linkType.spell
            )
        ),
        new ItemSlotRow( //Chest
            itemSlots.chest,
            new WowheadLink(
                19145,
                "Robe of Volatile Power",
                linkType.item,
                "Crit build"
            ),
            new WowheadLink(
                13346,
                "Robes of the Exalted",
                linkType.item,
                "Most +heal"
            ),
            new WowheadLink(
                20635,
                "Jade Inlaid Vestments"
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
                18459,
                "Gallant's Wristguards"
            ),
            new WowheadLink(
                13969,
                "Loomguard Armbraces"
            ),
            new WowheadLink(
                18525,
                "Bracers of Prosperity"
            ),
            new WowheadLink(
                20008,
                "Enchant Bracer - Greater Intellect",
                linkType.spell,
                "or Enchant Bracer - Healing Power"
            )
        ),
        new ItemSlotRow( //Hands
            itemSlots.hands,
            new WowheadLink(
                20264,
                "Peacekeeper Gauntlets",
                linkType.item,
                "BiG"
            ),
            new WowheadLink(
                19390,
                "Taunt Dragonhide Gloves",
                linkType.item,
                "Crit build"
            ),
            new WowheadLink(
                18527,
                "Harmonious Gauntlets",
                linkType.item,
                "most +heal"
            ),
            null
        ),
        new ItemSlotRow( //Belt
            itemSlots.belt,
            new WowheadLink(
                19162,
                "Corehound Belt",
                linkType.item,
                "Leatherworking Crafting"
            ),
            new WowheadLink(
                19136,
                "Mana Igniting Cord"
            ),
            new WowheadLink(
                19400,
                "Firemaw's Clutch"
            ),
            null
        ),
        new ItemSlotRow( //Legs
            itemSlots.legs,
            new WowheadLink(
                19385,
                "Empowered Leggings",
                linkType.item,
                "BiS until P5"
            ),
            new WowheadLink(
                18875,
                "Salamander Scale Pants"
            ),
            new WowheadLink(
                18386,
                "Padre's Trousers"
            ),
            new WowheadLink(
                19783,
                "Syncretist's Sigil"
            )
        ),
        new ItemSlotRow( //Feet
            itemSlots.feet,
            new WowheadLink(
                19437,
                "Boots of Pure Thought",
                linkType.item,
                "BiS until P6"
            ),
            new WowheadLink(
                19131,
                "Snowblind Shoes"
            ),
            new WowheadLink(
                20634,
                "Boots of Fright"
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
                19382,
                "Pure Elementium Band",
                linkType.item,
                "BiG"
            ),
            new WowheadLink(
                19140,
                "Cauterizing Band",
                linkType.item,
                "BiS until P5"
            ),
            new WowheadLink(
                16058,
                "Fordring's Seal"
            ),
            null
        ),
        new ItemSlotRow( //Rings
            itemSlots.rings,
            new WowheadLink(
                13178,
                "Rosewine Circle"
            ),
            new WowheadLink(
                19397,
                "Ring of Blackrock"
            ),
            null,
            null
        ),
        new ItemSlotRow( //Trinkets
            itemSlots.trinkets,
            new WowheadLink(
                19395,
                "Rejuvenating Gem",
                linkType.item,
                "BiG"
            ),
            new WowheadLink(
                19379,
                "Neltharion's Tear",
                linkType.item,
                "Caster prio"
            ),
            new WowheadLink(
                19343,
                "Scrolls of Blinding Light",
                linkType.item,
                "Situational"
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
            new WowheadLink(
                18820,
                "Talisman of Ephemeral Power"
            ),
            null
        ),
        new ItemSlotRow( //Mainhand
            itemSlots.mainHand,
            new WowheadLink(
                19360,
                "Lok'Amir il Romathis",
                linkType.item,
                "BiS until P5"
            ),
            new WowheadLink(
                19890,
                "Jin'do's Hexxer"
            ),
            new WowheadLink(
                17103,
                "Azuresong Mageblade"
            ),
            new WowheadLink(
                22750,
                "Enchant Weapon - Healing Power",
                linkType.spell
            )
        ),
        new ItemSlotRow( //Offhand
            itemSlots.offHand,
            new WowheadLink(
                19312,
                "Lei of the Lifegiver",
                linkType.item,
                "Alterac Valley Exalted"
            ),
            new WowheadLink(
                19348,
                "Red Dragonscale Protector"
            ),
            new WowheadLink(
                19366,
                "Master Dragonslayer's Orb",
                linkType.item,
                "Head of Nefarian"
            ),
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
                11649,
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
                16921,
                "Halo of Trancendence"
            ),
            new WowheadLink(
                13102,
                "Cassandra's Grace",
                linkType.item,
                ""
            ),
            new WowheadLink(
                10504,
                "Green Lens of Healing"
            ),
            new WowheadLink(
                18330,
                "Arcanum of Focus"
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
                16816,
                "Mantle of Prophecy"
            ),
            new WowheadLink(
                18681,
                "Burial Shawl"
            ),
            new WowheadLink(
                11624,
                "Kentic Amice"
            ),
            new WowheadLink(
                18182,
                "Chromatic mantle of the Dawn"
            )
        ),
        new ItemSlotRow( //Back
            itemSlots.back,
            new WowheadLink(
                18510,
                "Hide of the Wild"
            ),
            new WowheadLink(
                13386,
                "Archivist Cape of Healing",
                linkType.item,
                "of Healing"
            ),
            new WowheadLink(
                18389,
                "Cloak of the Cosmos"
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
                14154,
                "Truefaith Vestments"
            ),
            new WowheadLink(
                13346,
                "Robes of the Exalted"
            ),
            new WowheadLink(
                16815,
                "Robes of Prophecy"
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
                16819,
                "Vambraces of Prophecy"
            ),
            new WowheadLink(
                18263,
                "Flarecore Wraps"
            ),
            new WowheadLink(
                18497,
                "Sublime Wristguards"
            ),
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
                18386,
                "Padre's Trousers"
            ),
            new WowheadLink(
                11841,
                "Senior Designer's Pantaloons"
            ),
            new WowheadLink(
                18330,
                "Arcanum of Focus"
            ),
        ),
        new ItemSlotRow( //Hands
            itemSlots.hands,
            new WowheadLink(
                16812,
                "Gloves of Prophecy"
            ),
            new WowheadLink(
                12554,
                "Hands of the Exalted Herald"
            ),
            new WowheadLink(
                13253,
                "Hands of Power"
            ),
            null
        ),
        new ItemSlotRow( //Belt
            itemSlots.belt,
            new WowheadLink(
                18327,
                "Whipvine Cord"
            ),
            new WowheadLink(
                16817,
                "Girdle of Prophecy"
            ),
            new WowheadLink(
                12589,
                "Dustfeather Sash"
            ),
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
                "Cauterizing Band",
                linkType.item,
                "2 of these"
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
                18469,
                "Royal Seal of Eldre'Thalas"
            ),
            new WowheadLink(
                17064,
                "Shard of the Scale"
            ),
            new WowheadLink(
                12930,
                "Briarwood Reed"
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
            new WowheadLink(
                18321,
                "Energetic Rod"
            ),
            new WowheadLink(
                22750,
                "Enchant Weapon - Healing Power",
                linkType.spell
            )
        ),
        new ItemSlotRow( //OH
            itemSlots.offHand,
            new WowheadLink(
                18523,
                "Brightly Glowing Stone"
            ),
            new WowheadLink(
                11928,
                "Thaurissan's Royal Scepter"
            ),
            new WowheadLink(
                10796,
                "Drakestone of Healing",
                linkType.item,
                "of Healing"
            ),
            null
        ),
        new ItemSlotRow( //2H
            itemSlots.twoHand,
            new WowheadLink(
                18608,
                "Benediction"
            ),
            new WowheadLink(
                18842,
                "Staff of Dominance"
            ),
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

let tierTwoPriest = new TableList(
    classes.priest,
    [
        new ItemSlotRow( //Head
            itemSlots.head,
            new WowheadLink(
                19375,
                "Mish'undare, Circlet of the Mind Flayer",
                linkType.item,
                "Crit "
            ),
            new WowheadLink(
                19132,
                "Crystal Adorned Crown",
                linkType.item,
                "Raw Healing "
            ),
            new WowheadLink(
                16921,
                "Halo of Transcendence",
                linkType.item,
                "Set"
            ),
            new WowheadLink(
                19789,
                "Prophetic Aura",
                linkType.item,
                "or Arcanum of Focus"
            )
        ),
        new ItemSlotRow( //Neck
            itemSlots.neck,
            new WowheadLink(
                19885,
                "Jin'do's Evil Eye"
            ),
            new WowheadLink(
                18814,
                "Choker of the Fire Lord"
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
                19370,
                "Mantle of the Blackwing Cabal",
                linkType.item,
                "Raw Healing "
            ),
            new WowheadLink(
                16924,
                "Pauldrons of Transcendence",
                linkType.item,
                "Set "
            ),
            new WowheadLink(
                18681,
                "Burial Shawl"
            ),
            new WowheadLink(
                20078,
                "Zandalar Signet of Serenity",
                linkType.item,
                "or Chromatic Mantle of the Dawn"
            )
        ),
        new ItemSlotRow( //Back
            itemSlots.back,
            new WowheadLink(
                19430,
                "Shroud of Pure Thought",
                linkType.item,
                "MP5"
            ),
            new WowheadLink(
                19378,
                "Cloak of the Brood Lord"
            ),
            new WowheadLink(
                18510,
                "Hide of the Wild",
                linkType.item,
                "Raw Healing"
            ),
            new WowheadLink(
                20014,
                "Enchant Cloak - Greater Resistance",
                linkType.spell
            )
        ),
        new ItemSlotRow( //Chest
            itemSlots.chest,
            new WowheadLink(
                14154,
                "Truefaith Vestments",
                linkType.item,
                "Raw Output / MP5"
            ),
            new WowheadLink(
                16923,
                "Robes of Transcendence",
                linkType.item,
                "Set"
            ),
            new WowheadLink(
                13346,
                "Robes of the Exalted"
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
                16926,
                "Bindings of Transcendence",
                linkType.item,
                "Set"
            ),
            new WowheadLink(
                16819,
                "Vambraces of Prophecy"
            ),
            new WowheadLink(
                18263,
                "Flarecore Wraps",
                linkType.item,
                "MP5 enchanted with H-Power"
            ),
            new WowheadLink(
                20009,
                "Enchant Bracer - Superior Spirit",
                linkType.spell,
                "or Enchant Bracer - Healing Power"
            )
        ),
        new ItemSlotRow( //Hands
            itemSlots.hands,
            new WowheadLink(
                16920,
                "Handguards of Transcendence",
                linkType.item,
                "Set"
            ),
            new WowheadLink(
                20618,
                "Gloves of Delusional Power",
                linkType.item,
                "Emerald Dragon Loot"
            ),
            new WowheadLink(
                12554,
                "Hands of the Exalted Herald"
            ),
            null
        ),
        new ItemSlotRow( //Belt
            itemSlots.belt,
            new WowheadLink(
                16925,
                "Belt of Transcendence",
                linkType.item,
                "Set"
            ),
            new WowheadLink(
                19400,
                "Firemaw's Clutch",
                linkType.item,
                "MP5"
            ),
            new WowheadLink(
                16817,
                "Girdle of Prophecy"
            ),
            null
        ),
        new ItemSlotRow( //Legs
            itemSlots.legs,
            new WowheadLink(
                19385,
                "Empowered Leggings",
                linkType.item,
                "Raw Output"
            ),
            new WowheadLink(
                16922,
                "Leggings of Transcendence",
                linkType.item,
                "Set"
            ),
            new WowheadLink(
                18386,
                "Padre's Trousers",
                linkType.item,
                "MP5"
            ),
            new WowheadLink(
                19789,
                "Prophetic Aura",
                linkType.item,
                "or Arcanum of Focus"
            )
        ),
        new ItemSlotRow( //Feet
            itemSlots.feet,
            new WowheadLink(
                16919,
                "Boots of Transcendence",
                linkType.item,
                "Set"
            ),
            new WowheadLink(
                19437,
                "Boots of Pure Thought",
                linkType.item,
                "Raw Output"
            ),
            new WowheadLink(
                19391,
                "Shimmering Geta",
                linkType.item,
                "MP5"
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
                19382,
                "Pure Elementium Band",
                linkType.item,
                "Raw Output "
            ),
            new WowheadLink(
                19140,
                "Cauterizing Band",
                linkType.item,
                "Raw Output "
            ),
            new WowheadLink(
                19397,
                "Ring of Blackrock",
                linkType.item,
                "MP5"
            ),
            null
        ),
        new ItemSlotRow( //Rings
            itemSlots.rings,
            new WowheadLink(
                22721,
                "Band of Servitude"
            ),
            new WowheadLink(
                16058,
                "Fordring's Seal"
            ),
            new WowheadLink(
                13178,
                "Rosewine Circle",
                linkType.item,
                "MP5"
            ),
            null
        ),
        new ItemSlotRow( //Trinkets
            itemSlots.trinkets,
            new WowheadLink(
                19395,
                "Rejuvenating Gem",
                linkType.item,
                "Raw Output / MP5"
            ),
            new WowheadLink(
                17064,
                "Shard of the Scale",
                linkType.item,
                "MP5"
            ),
            new WowheadLink(
                19379,
                "Neltharion's Tear",
                linkType.item,
                "Raw Output"
            ),
            null
        ),
        new ItemSlotRow( //Trinkets
            itemSlots.trinkets,
            new WowheadLink(
                19288,
                "Darkmoon Card: Blue Dragon",
                linkType.item,
                "MP5 / Beasts Deck"
            ),
            new WowheadLink(
                18820,
                "Talisman of Ephemeral Power",
                linkType.item,
                "Raw Output on CD "
            ),
            new WowheadLink(
                18469,
                "Royal Seal of Eldre'Thalas",
                linkType.item,
                "Raw Output / MP5"
            ),
            null
        ),
        new ItemSlotRow( //Mainhand
            itemSlots.mainHand,
            new WowheadLink(
                19360,
                "Lok'amir il Romathis"
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
        new ItemSlotRow( //Offhand
            itemSlots.offHand,
            new WowheadLink(
                19366,
                "Master Dragonslayer's Orb",
                linkType.item,
                "Head of Nefarian Stat Choice"
            ),
            new WowheadLink(
                19312,
                "Lei of the Lifegiver",
                linkType.item,
                "Stormpike Guard Exalted (AV) Raw Output / MP5"
            ),
            new WowheadLink(
                18523,
                "Brightly Glowing Stone"
            ),
            null
        ),
        new ItemSlotRow( //Twohand
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
            )
        ),
        new ItemSlotRow( //Ranged
            itemSlots.ranged,
            new WowheadLink(
                19367,
                "Dragon's Touch",
                linkType.item,
                "Stat Choice"
            ),
            new WowheadLink(
                19435,
                "Essence Gatherer",
                linkType.item,
                "MP5"
            ),
            new WowheadLink(
                15283,
                "Lunar Wand",
                linkType.item,
                "of Healing Raw Output"
            ),
            null
        ),
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
                11647,
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
                18375,
                "Bracers of the Eclipse"
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
            new WowheadLink(
                13118,
                "Serpentine Sash"
            ),
            new WowheadLink(
                18505,
                "Mugger's Belt",
                linkType.item,
                "BiS for dagger rogues"
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
                12553,
                "Swiftwalker Boots"
            ),
            new WowheadLink(
                18506,
                "Mongoose Boots"
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
                18500,
                "Tarnished Elven Ring",
                linkType.item,
                "2 of these is best"
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
                18537,
                "Counterattack Lodestone"
            ),
            null
        ),
        new ItemSlotRow( //MH Swords
            itemSlots.mainHandSword,
            new WowheadLink(
                12940,
                "Dal'Rend's Sacred Charge"
            ),
            new WowheadLink(
                13246,
                "Argent Avenger"
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
        new ItemSlotRow( //OH Swords
            itemSlots.offHandSword,
            new WowheadLink(
                12939,
                "Dal'Rend's Tribal Guardian"
            ),
            new WowheadLink(
                15806,
                "Mirah's Song"
            ),
            new WowheadLink(
                13246,
                "Argent Avenger"
            ),
            new WowheadLink(
                20034,
                "Enchant Weapon - Crusader",
                linkType.spell
            )
        ),
        new ItemSlotRow( //MH Daggers
            itemSlots.mainHandDagger,
            new WowheadLink(
                12590,
                "Felstriker"
            ),
            new WowheadLink(
                12783,
                "Heartseeker"
            ),
            new WowheadLink(
                12791,
                "Barman Shanker"
            ),
            new WowheadLink(
                20031,
                "Enchant Weapon - Superior Striking",
                linkType.spell
            )
        ),
        new ItemSlotRow( //OH Daggers
            itemSlots.offHandDagger,
            new WowheadLink(
                14555,
                "Alcor's Sunrazor"
            ),
            new WowheadLink(
                13368,
                "Bonescraper",
            ),
            new WowheadLink(
                12783,
                "Heartseeker",
                linkType.item,
                "Only if not in MH"
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
                18323,
                "Satyr's Bow",
            ),
            new WowheadLink(
                12651,
                "Blackcrow"
            ),
            new WowheadLink(
                2100,
                "Precisely Calibrated Boomstick"
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
                16821,
                "Nightslayer Cover"
            ),
            new WowheadLink(
                13404,
                "Mask of the Unforgiven"
            ),
            new WowheadLink(
                11647,
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
            new WowheadLink(
                18505,
                "Mugger's Belt",
                linkType.item,
                "BiS for dagger rogues"
            ),
            null
        ),
        new ItemSlotRow( //Legs
            itemSlots.legs,
            new WowheadLink(
                16909,
                "Bloodfang Pants"
            ),
            new WowheadLink(
                16822,
                "Nightslayer Pants",
            ),
            new WowheadLink(
                15062,
                "Devilsaur Leggings",
                linkType.item,
                "Keep set until you can replace both"
            ),
            new WowheadLink(
                11647,
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
                18821,
                "Quick Strike Ring"
            ),
            new WowheadLink(
                18500,
                "Tarnished Elven Ring"
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
        new ItemSlotRow( //MH Daggers
            itemSlots.mainHandDagger,
            new WowheadLink(
                18816,
                "Perdition's Blade"
            ),
            new WowheadLink(
                12590,
                "Felstriker"
            ),
            new WowheadLink(
                12783,
                "Heartseeker"
            ),
            new WowheadLink(
                20031,
                "Enchant Weapon - Superior Striking",
                linkType.spell
            )
        ),
        new ItemSlotRow( //OH Daggers
            itemSlots.offHandDagger,
            new WowheadLink(
                18805,
                "Corehound Tooth",
            ),
            new WowheadLink(
                14555,
                "Alcor's Sunrazor"
            ),
            new WowheadLink(
                13368,
                "Bonescraper",
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
                12651,
                "Blackcrow"
            ),
            new WowheadLink(
                18323,
                "Satyr's Bow"
            ),
            new WowheadLink(
                10548,
                "Sniper Scope"
            )
        )
    ]
);

let tierTwoRogue = new TableList(
    classes.rogue,
    [
        new ItemSlotRow( //Head
            itemSlots.head,
            new WowheadLink(
                16908,
                "Bloodfang Hood"
            ),
            new WowheadLink(
                16821,
                "Nightslayer Cover"
            ),
            new WowheadLink(
                13404,
                "Mask of the Unforgiven"
            ),
            new WowheadLink(
                11647,
                "Lesser Arcanum of Voracity"
            )
        ),
        new ItemSlotRow( //Neck
            itemSlots.neck,
            new WowheadLink(
                19377,
                "Prestor's Talisman of Connivery"
            ),
            new WowheadLink(
                18404,
                "Onyxia Tooth Pendant"
            ),
            new WowheadLink(
                15411,
                "Mark of Fordring"
            ),
            null
        ),
        new ItemSlotRow( //Shoulder
            itemSlots.shoulder,
            new WowheadLink(
                16832,
                "Bloodfang Spaulders",
                linkType.item,
                "Best with 8 set (sword)"
            ),
            new WowheadLink(
                16823,
                "Nightslayer Shoulders Pads"
            ),
            new WowheadLink(
                12927,
                "Truestrike Shoulders"
            ),
            new WowheadLink(
                18182,
                "Chromatic Mantle of the Dawn"
            )
        ),
        new ItemSlotRow( //Back
            itemSlots.back,
            new WowheadLink(
                19398,
                "Cloak of Firemaw"
            ),
            new WowheadLink(
                13340,
                "Cape of the Black Baron"
            ),
            new WowheadLink(
                17102,
                "Cloak of the Shrouded Mists"
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
                16905,
                "Bloodfang Chestpiece"
            ),
            new WowheadLink(
                16820,
                "Nightslayer Chestpiece"
            ),
            new WowheadLink(
                14637,
                "Cadaverous Armor"
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
                16911,
                "Bloodfang Bracers"
            ),
            new WowheadLink(
                16825,
                "Nightslayer Bracers"
            ),
            new WowheadLink(
                18375,
                "Bracers of the Eclipse"
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
                16907,
                "Bloodfang Gloves",
                linkType.item,
                "(Sword BiS)"
            ),
            new WowheadLink(
                18823,
                "Aged Core Leather Gloves",
                linkType.item,
                "(Dagger BiS)"
            ),
            new WowheadLink(
                16826,
                "Nightslayer Gloves"
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
                16910,
                "Bloodfang Belt"
            ),
            new WowheadLink(
                16827,
                "Nightslayer Belt"
            ),
            new WowheadLink(
                18505,
                "Mugger's Belt",
                linkType.item,
                "(Dagger BiS if you need +5 skill)"
            ),
            null
        ),
        new ItemSlotRow( //Legs
            itemSlots.legs,
            new WowheadLink(
                16909,
                "Bloodfang Pants"
            ),
            new WowheadLink(
                16822,
                "Nightslayer Pants"
            ),
            new WowheadLink(
                15062,
                "Devilsaur Leggings",
                linkType.item,
                "Keep set until you can replace both"
            ),
            new WowheadLink(
                11647,
                "Lesser Arcanum of Voracity"
            )
        ),
        new ItemSlotRow( //Feet
            itemSlots.feet,
            new WowheadLink(
                16906,
                "Bloodfang Boots",
                linkType.item,
                "BiS with 8 set (Sword)"
            ),
            new WowheadLink(
                19381,
                "Boots of the Shadow Flame",
                linkType.item,
                "(Dagger BiS)"
            ),
            new WowheadLink(
                16824,
                "Nightslayer Boots"
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
                19384,
                "Master Dragonslayer's Ring"
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
        new ItemSlotRow( //Rings
            itemSlots.rings,
            new WowheadLink(
                17063,
                "Band of Accuria"
            ),
            new WowheadLink(
                18500,
                "Tarnished Elven Ring"
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
                19406,
                "Drake Fang Talisman"
            ),
            new WowheadLink(
                13965,
                "Blackhand's Breadth"
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
                18465,
                "Royal Seal of Eldre'Thalas",
                linkType.item,
                "If you need the hit"
            ),
            new WowheadLink(
                18537,
                "Counterattack Lodestone"
            ),
            null
        ),
        new ItemSlotRow( //Mainhand
            itemSlots.mainHand,
            new WowheadLink(
                19352,
                "Chromatically Tempered Sword"
            ),
            new WowheadLink(
                17075,
                "Vis'kag the Bloodletter"
            ),
            new WowheadLink(
                12940,
                "Dal'Rend's Sacred Charge"
            ),
            new WowheadLink(
                20034,
                "Enchant Weapon - Crusader",
                linkType.spell
            )
        ),
        new ItemSlotRow( //Offhand
            itemSlots.offHand,
            new WowheadLink(
                19351,
                "Maladath, Runed Blade of the Black Flight"
            ),
            new WowheadLink(
                18832,
                "Brutality Blade"
            ),
            new WowheadLink(
                15806,
                "Mirah's Song",
                linkType.item,
                "Use Dal'Rends OH if using MH"
            ),
            new WowheadLink(
                20034,
                "Enchant Weapon - Crusader",
                linkType.spell
            )
        ),
        new ItemSlotRow( //Mainhanddagger
            itemSlots.mainHandDagger,
            new WowheadLink(
                18816,
                "Perdition's Blade"
            ),
            new WowheadLink(
                19346,
                "Dragonfang Blade"
            ),
            new WowheadLink(
                12590,
                "Felstriker"
            ),
            new WowheadLink(
                20031,
                "Enchant Weapon - Superior Striking",
                linkType.spell
            )
        ),
        new ItemSlotRow( //Offhanddagger
            itemSlots.offHandDagger,
            new WowheadLink(
                18805,
                "Corehound Tooth"
            ),
            new WowheadLink(
                14555,
                "Alcor's Sunrazor"
            ),
            new WowheadLink(
                13368,
                "Bonescraper"
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
                19350,
                "Heartstriker",
                linkType.item,
                "Slightly ahead of +14 agi options"
            ),
            new WowheadLink(
                18323,
                "Satyr's Bow",
                linkType.item,
                "Better if you need hit"
            ),
            null
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
                "Eternal Crown of Shadow Wrath",
                linkType.item,
                "+41 Shadow damage"
            ),
            new WowheadLink(
                14111,
                "Felcloth Hood"
            ),
            new WowheadLink(
                11648,
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
            new WowheadLink(
                18728,
                "Anastari Heirloom"
            ),
            null,
        ),
        new ItemSlotRow( //Shoulder
            itemSlots.shoulder,
            new WowheadLink(
                14335,
                "Eternal Spaulders",
                linkType.item,
                "+30 Shadow damage"
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
                10249,
                "Master's Cloak of Shadow Wrath",
                linkType.item,
                "+21 Shadow Damage"
            ),
            new WowheadLink(
                11623,
                "Spritecaster Cape",
            ),
            new WowheadLink(
                20014,
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
                13956,
                "Clutch of Andros"
            ),
            new WowheadLink(
                18740,
                "Thuzadin Sash"
            ),
            null,
        ),
        new ItemSlotRow( //Feet
            itemSlots.feet,
            new WowheadLink(
                18735,
                "Maleki's Footwraps"
            ),
            new WowheadLink(
                10247,
                "Master's Boots of Shadow Wrath",
                linkType.item,
                "+20 Shadow damage"
            ),
            new WowheadLink(
                11822,
                "Omnicast boots"
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
                "Lunar Wand of Shadow Wrath",
                linkType.item,
                "+20 Shadow damage"
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
                "Eternal Crown of Shadow Wrath",
                linkType.item,
                "+41 Shadow damage"
            ),
            new WowheadLink(
                11648,
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
                19136,
                "Mana Igniting Cord",
                linkType.item,
                "BiS if you can afford losing hit"
            ),
            new WowheadLink(
                11662,
                "Bhan'thok Sash"
            ),
            new WowheadLink(
                13956,
                "Clutch of Andros"
            ),
            null
        ),
        new ItemSlotRow( //Feet
            itemSlots.feet,
            new WowheadLink(
                18735,
                "Maleki's Footwraps"
            ),
            new WowheadLink(
                10247,
                "Master's Boots of Shadow Wrath",
                linkType.item,
                "+30 Shadow damage"
            ),
            new WowheadLink(
                14136,
                "Omnicast boots"
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
                17719,
                "Inventor's Focal Sword"
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
            new WowheadLink(
                19142,
                "Fire Runed Grimiore",
            ),
            null,
        ),
        new ItemSlotRow(//2H
            itemSlots.twoHand,
            new WowheadLink(
                18842,
                "Staff of Dominance"
            ),
            null,
            null,
            null
        ),
        new ItemSlotRow( //Ranged
            itemSlots.ranged,
            new WowheadLink(
                15283,
                "Lunar Wand of Shadow Wrath",
                linkType.item,
                "+20 Shadow damage"
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

let tierTwoWarlock = new TableList(
    classes.warlock,
    [
        new ItemSlotRow( //Head
            itemSlots.head,
            new WowheadLink(
                19375,
                "Mish'undare, Circlet of the Mind Flayer"
            ),
            new WowheadLink(
                23255,
                "Champion's Dreadweave Cowl",
                linkType.item,
                "In combination with PvP Rank 10 Shoulders"
            ),
            new WowheadLink(
                16929,
                "Nemesis Skullcap",
                linkType.item,
                "Only With 3-Set Bonus, one of three Nemesis Pieces"
            ),
            new WowheadLink(
                18330,
                "Arcanum of Focus"
            )
        ),
        new ItemSlotRow( //Neck
            itemSlots.neck,
            new WowheadLink(
                18814,
                "Choker of the Fire Lord"
            ),
            new WowheadLink(
                19426,
                "Orb of the Darkmoon"
            ),
            new WowheadLink(
                18691,
                "Dark Advisor's Pendant"
            ),
            null
        ),
        new ItemSlotRow( //Shoulder
            itemSlots.shoulder,
            new WowheadLink(
                19370,
                "Mantle of the Blackwing Cabal"
            ),
            new WowheadLink(
                23311,
                "Lieutenant Commander's Dreadweave Spaulders",
                linkType.item,
                "In Combination with PvP rank 10 Bonus"
            ),
            new WowheadLink(
                16932,
                "Nemesis Spaulders",
                linkType.item,
                "Only With 3-Set Bonus, one of three Nemesis Pieces"
            ),
            null
        ),
        new ItemSlotRow( //Back
            itemSlots.back,
            new WowheadLink(
                19378,
                "Cloak of the Brood Lord"
            ),
            new WowheadLink(
                13386,
                "Archivist Cape",
                linkType.item,
                "Of Shadow Wrath (+21 Shadow spell damage)"
            ),
            new WowheadLink(
                17078,
                "Sapphiron Drape"
            ),
            new WowheadLink(
                20014,
                "Enchant Cloak - Greater Resistance",
                linkType.spell
            )
        ),
        new ItemSlotRow( //Chest
            itemSlots.chest,
            new WowheadLink(
                19145,
                "Robe of Volatile Power"
            ),
            new WowheadLink(
                14153,
                "Robe of the Void"
            ),
            new WowheadLink(
                16931,
                "Nemesis Robes",
                linkType.item,
                "Only With 3-Set Bonus, one of three Nemesis Pieces"
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
                19374,
                "Bracers of Arcane Accuracy"
            ),
            new WowheadLink(
                19595,
                "Dryad's Wrist Bindings",
                linkType.item,
                "WSG Exalted"
            ),
            new WowheadLink(
                16934,
                "Nemesis Bracers"
            ),
            new WowheadLink(
                20008,
                "Enchant Bracer - Greater Intellect",
                linkType.spell
            )
        ),
        new ItemSlotRow( //Hands
            itemSlots.hands,
            new WowheadLink(
                19407,
                "Ebony Flame Gloves"
            ),
            new WowheadLink(
                14146,
                "Gloves of Spell Mastery",
                linkType.item,
                "Crafted by Tailor w/Pattern"
            ),
            new WowheadLink(
                18407,
                "Felcloth Gloves",
                linkType.item,
                "Crafted by Tailor w/Pattern"
            ),
            null
        ),
        new ItemSlotRow( //Belt
            itemSlots.belt,
            new WowheadLink(
                19388,
                "Angelista's Grasp",
                linkType.item,
                "If lacking Hit"
            ),
            new WowheadLink(
                19136,
                "Mana Igniting Cord"
            ),
            new WowheadLink(
                18809,
                "Sash of Whispered Secrets"
            ),
            null
        ),
        new ItemSlotRow( //Legs
            itemSlots.legs,
            new WowheadLink(
                19133,
                "Fel Infused Leggings",
                linkType.item,
                "Lord Kazzak Drop"
            ),
            new WowheadLink(
                19165,
                "Flarecore Leggings",
                linkType.item,
                "Crafted by Tailor w/Revered Thorium Rep"
            ),
            new WowheadLink(
                16930,
                "Nemesis Leggings",
                linkType.item,
                "Only with 3-Set Bonus, one of three Nemesis Pieces"
            ),
            new WowheadLink(
                18330,
                "Arcanum of Focus"
            )
        ),
        new ItemSlotRow( //Feet
            itemSlots.feet,
            new WowheadLink(
                19131,
                "Snowblind Shoes",
                linkType.item,
                "Azuregos Drop"
            ),
            new WowheadLink(
                16927,
                "Nemesis Boots",
                linkType.item,
                "Only with 3-Set Bonus, one of three Nemesis Pieces"
            ),
            new WowheadLink(
                18735,
                "Maleki's Footwraps"
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
                19434,
                "Band of Dark Dominion",
                linkType.item,
                "2nd BIS if you got 3rd BIS"
            ),
            new WowheadLink(
                19403,
                "Band of Forced Concentration"
            ),
            new WowheadLink(
                19147,
                "Ring of Spell Power"
            ),
            null
        ),
        new ItemSlotRow( //Rings
            itemSlots.rings,
            new WowheadLink(
                19397,
                "Ring of Blackrock"
            ),
            new WowheadLink(
                13001,
                "Maiden's Circle"
            ),
            new WowheadLink(
                12543,
                "Songstone of Ironforge"
            ),
            null
        ),
        new ItemSlotRow( //Trinkets
            itemSlots.trinkets,
            new WowheadLink(
                19379,
                "Neltharion's Tear"
            ),
            new WowheadLink(
                18820,
                "Talisman of Ephemeral Power"
            ),
            new WowheadLink(
                12930,
                "Briarwood Reed"
            ),
            null
        ),
        new ItemSlotRow( //Trinkets
            itemSlots.trinkets,
            new WowheadLink(
                13968,
                "Eye of the Beast"
            ),
            null,
            null,
            null
        ),
        new ItemSlotRow( //Mainhand
            itemSlots.mainHand,
            new WowheadLink(
                19347,
                "Claw of Chromaggus"
            ),
            new WowheadLink(
                17103,
                "Azuresong Mageblade"
            ),
            new WowheadLink(
                18878,
                "Sorcerous Dagger"
            ),
            new WowheadLink(
                22749,
                "Enchant Weapon - Spell Power",
                linkType.spell
            )
        ),
        new ItemSlotRow( //Offhand
            itemSlots.offHand,
            new WowheadLink(
                19309,
                "Tome of Shadow Force",
                linkType.item,
                "Alterac Valley Exalted"
            ),
            new WowheadLink(
                19366,
                "Master Dragonslayer's Orb",
                linkType.item,
                "Head of Nefarian"
            ),
            new WowheadLink(
                10796,
                "Drakestone",
                linkType.item,
                "of Shadow Wrath"
            ),
            null
        ),
        new ItemSlotRow( //Twohand
            itemSlots.twoHand,
            new WowheadLink(
                19356,
                "Staff of the Shadow Flame"
            ),
            new WowheadLink(
                19355,
                "Shadow Wing Focus Staff"
            ),
            new WowheadLink(
                18842,
                "Staff of Dominance"
            ),
            new WowheadLink(
                22749,
                "Enchant Weapon - Spell Power",
                linkType.spell
            )
        ),
        new ItemSlotRow( //Ranged
            itemSlots.ranged,
            new WowheadLink(
                13396,
                "Skul's Ghastly Touch"
            ),
            new WowheadLink(
                15283,
                "Lunar Wand",
                linkType.item,
                "Of Shadow Wrath"
            ),
            new WowheadLink(
                19367,
                "Dragon's Touch"
            ),
            null
        ),
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
                11642,
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
                17774,
                "Mark of the Chosen"
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
                18348,
                "Quel'Serrar"
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
                13944,
                "Tombstone Breastplate"
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
                11642,
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
                17774,
                "Mark of the Chosen"
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
                13944,
                "Tombstone Breastplate"
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
                17063,
                "Band of Accuria"
            ),
            new WowheadLink(
                18821,
                "Quick Strike Ring"
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

let tierTwoWarriorTank = new TableList(
    classes.warrior,
    [
        new ItemSlotRow( //Head
            itemSlots.head,
            new WowheadLink(
                19372,
                "Helm of Endless Rage",
                linkType.item,
                "Best mixed"
            ),
            new WowheadLink(
                12640,
                "Lionheart Helm ",
                linkType.item,
                "Best threat"
            ),
            new WowheadLink(
                16963,
                "Helm of Wrath",
                linkType.item,
                "Best mitigation"
            ),
            new WowheadLink(
                11642,
                "Lesser Arcanum of Constitution",
                linkType.item,
                "+100 HP"
            )
        ),
        new ItemSlotRow( //Neck
            itemSlots.neck,
            new WowheadLink(
                18404,
                "Onyxia Tooth Pendant",
                linkType.item,
                "Best threat"
            ),
            new WowheadLink(
                19383,
                "Master Dragonslayer's Medallion",
                linkType.item,
                "Best mitigation"
            ),
            new WowheadLink(
                18205,
                "Eskhandar's Collar"
            ), null
        ),
        new ItemSlotRow( //Shoulder
            itemSlots.shoulder,
            new WowheadLink(
                19394,
                "Drake Talon Pauldrons",
                linkType.item,
                "Best threat"
            ),
            new WowheadLink(
                16961,
                "Pauldrons of Wrath",
                linkType.item,
                "Best mitigation"
            ),
            new WowheadLink(
                16868,
                "Pauldrons of Might",
                linkType.item,
                "2nd mitigation"
            ),
            new WowheadLink(
                18182,
                "Chromatic Mantle of the Dawn",
                linkType.item,
                "+5 to all resistances"
            )
        ),
        new ItemSlotRow( //Back
            itemSlots.back,
            new WowheadLink(
                17102,
                "Cloak of the Shrouded Mists",
                linkType.item,
                "Best threat"
            ),
            new WowheadLink(
                19386,
                "Elementium Threaded Cloak",
                linkType.item,
                "Best mitigation"
            ),
            new WowheadLink(
                17107,
                "Dragon's Blood Cape"
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
                16966,
                "Breastplate of Wrath",
                linkType.item,
                "Best mitigation"
            ),
            new WowheadLink(
                11726,
                "Savage Gladiator Chain",
                linkType.item,
                "Best threat"
            ),
            new WowheadLink(
                16865,
                "Breastplate of Might",
                linkType.item,
                "2nd mitigation"
            ),
            new WowheadLink(
                20025,
                "Enchant Chest - Greater Stats",
                linkType.spell,
                "+100 HP is acceptable too"
            )
        ),
        new ItemSlotRow( //Wrist
            itemSlots.wrist,
            new WowheadLink(
                16959,
                "Bracelets of Wrath",
                linkType.item,
                "Best mitigation"
            ),
            new WowheadLink(
                18812,
                "Wristguards of True Flight",
                linkType.item,
                "Best threat"
            ),
            new WowheadLink(
                16861,
                "Bracers of Might",
                linkType.item,
                "2nd mitigation"
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
                16964,
                "Gauntlets of Wrath",
                linkType.item,
                "Mitigation"
            ),
            new WowheadLink(
                16863,
                "Gauntlets of Might",
                linkType.item,
                "Mix"
            ),
            new WowheadLink(
                19143,
                "Flameguard Gauntlets",
                linkType.item,
                "Threat"
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
                "Onslaught Girdle",
                linkType.item,
                "Best threat"
            ),
            new WowheadLink(
                16960,
                "Waistband of Wrath",
                linkType.item,
                "Best mitigation"
            ),
            new WowheadLink(
                13142,
                "Brigam Girdle",
                linkType.item,
                "2nd threat"
            ), null
        ),
        new ItemSlotRow( //Legs
            itemSlots.legs,
            new WowheadLink(
                16962,
                "Legplates of Wrath",
                linkType.item,
                "Best mitigation"
            ),
            new WowheadLink(
                19402,
                "Legguards of the Fallen Crusader",
                linkType.item,
                "Best threat"
            ),
            new WowheadLink(
                16867,
                "Legplates of Might",
                linkType.item,
                "2nd mitigation"
            ),
            new WowheadLink(
                11642,
                "Lesser Arcanum of Constitution",
                linkType.item,
                "+100 HP"
            )
        ),
        new ItemSlotRow( //Feet
            itemSlots.feet,
            new WowheadLink(
                16965,
                "Sabatons of Wrath",
                linkType.item,
                "Best mitigation"
            ),
            new WowheadLink(
                19387,
                "Chromatic Boots",
                linkType.item,
                "Best threat"
            ),
            new WowheadLink(
                16862,
                "Sabatons of Might",
                linkType.item,
                "2nd mitigation"
            ),
            new WowheadLink(
                20020,
                "Enchant Boots - Greater Stamina",
                linkType.spell,
                "or +7 agi"
            )
        ),
        new ItemSlotRow( //Rings
            itemSlots.rings,
            new WowheadLink(
                17063,
                "Band of Accuria"
            ),
            new WowheadLink(
                19432,
                "Circle of Applied Force"
            ),
            new WowheadLink(
                19376,
                "Archimtiros' Ring of Reckoning"
            ), null
        ),
        new ItemSlotRow( //Rings
            itemSlots.rings,
            new WowheadLink(
                19325,
                "Don Julio's Band"
            ),
            new WowheadLink(
                19384,
                "Master Dragonslayer's Ring"
            ),
            new WowheadLink(
                18879,
                "Heavy Dark Iron Ring",
                linkType.item,
                "Mitigation"
            ), null
        ),
        new ItemSlotRow( //Trinkets
            itemSlots.trinkets,
            new WowheadLink(
                19341,
                "Lifegiving Gem"
            ),
            new WowheadLink(
                19431,
                "Styleen's Impeding Scarab"
            ),
            new WowheadLink(
                17774,
                "Mark of the Chosen"
            ), null
        ),
        new ItemSlotRow( //Trinkets
            itemSlots.trinkets,
            new WowheadLink(
                19406,
                "Drake Fang Talisman"
            ),
            new WowheadLink(
                11815,
                "Hand of Justice"
            ),
            new WowheadLink(
                13965,
                "Blackhand's Breadth"
            ), null
        ),
        new ItemSlotRow( //Mainhand
            itemSlots.mainHand,
            new WowheadLink(
                19019,
                "Thunderfury, Blessed Blade of the Windseeker"
            ),
            new WowheadLink(
                19352,
                "Chromatically Tempered Sword"
            ),
            new WowheadLink(
                19351,
                "Maladath, Runed Blade of the Black Flight"
            ),
            new WowheadLink(
                20034,
                "Enchant Weapon - Crusader",
                linkType.spell
            )
        ),
        new ItemSlotRow( //Mainhand
            itemSlots.mainHand,
            new WowheadLink(
                19019,
                "Thunderfury, Blessed Blade of the Windseeker",
                linkType.item,
                "Edgemaster"
            ),
            new WowheadLink(
                19363,
                "Crul'shorukh, Edge of Chaos",
                linkType.item,
                "Edgemaster"
            ),
            new WowheadLink(
                18816,
                "Perdition's Blade",
                linkType.item,
                "Edgemaster"
            ),
            new WowheadLink(
                20034,
                "Enchant Weapon - Crusader",
                linkType.spell
            )
        ),
        new ItemSlotRow( //Offhand
            itemSlots.offHand,
            new WowheadLink(
                18832,
                "Brutality Blade"
            ),
            new WowheadLink(
                19351,
                "Maladath, Runed Blade of the Black Flight"
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
        new ItemSlotRow( //Offhand
            itemSlots.offHand,
            new WowheadLink(
                18805,
                "Core Hound Tooth",
                linkType.item,
                "Edgemaster"
            ),
            new WowheadLink(
                19363,
                "Crul'shorukh, Edge of Chaos",
                linkType.item,
                "Edgemaster"
            ),
            new WowheadLink(
                19346,
                "Dragonfang Blade",
                linkType.item,
                "Edgemaster"
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
                19349,
                "Elementium Reinforced Bulwark"
            ),
            new WowheadLink(
                17066,
                "Drillborer Disk"
            ),
            new WowheadLink(
                18168,
                "Force Reactive Disk",
                linkType.item,
                "AoE Threat"
            ),
            new WowheadLink(
                12645,
                "Thorium Shield Spike"
            )
        ),
        new ItemSlotRow( //Ranged
            itemSlots.ranged,
            new WowheadLink(
                19368,
                "Dragonbreath Hand Cannon"
            ),
            new WowheadLink(
                17069,
                "Striker's Mark"
            ),
            new WowheadLink(
                17072,
                "Blastershot Launcher"
            ), null
        ),

    ],
    "Tank"
);

let tierTwoWarriorDPS = new TableList(
    classes.warrior,
    [
        new ItemSlotRow( //Head
            itemSlots.head,
            new WowheadLink(
                12640,
                "Lionheart Helm",
                linkType.item,
                "Crafted"
            ),
            new WowheadLink(
                19372,
                "Helm of Endless Rage"
            ),
            new WowheadLink(
                18817,
                "Crown of Destruction"
            ),
            new WowheadLink(
                18329,
                "Arcanum of Rapidity",
                linkType.item,
                "Voracity can be acceptable"
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
                19491,
                "Amulet of the Darkmoon",
                linkType.item,
                "Don't bother"
            ),
            null
        ),
        new ItemSlotRow( //Shoulder
            itemSlots.shoulder,
            new WowheadLink(
                23315,
                "Lieutenant Commander's Plate Shoulders",
                linkType.item,
                "BIS with 2 set"
            ),
            new WowheadLink(
                19394,
                "Drake Talon Pauldrons"
            ),
            new WowheadLink(
                15051,
                "Black Dragonscale Shoulders",
                linkType.item,
                "Truestrike is acceptable too"
            ),
            new WowheadLink(
                18182,
                "Chromatic Mantle of the Dawn"
            )
        ),
        new ItemSlotRow( //Back
            itemSlots.back,
            new WowheadLink(
                19436,
                "Cloak of Draconic Might"
            ),
            new WowheadLink(
                13340,
                "Cape of the Black Baron"
            ), null,

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
                19405,
                "Malfurion's Blessed Bulwark"
            ),
            new WowheadLink(
                23300,
                "Knight-Captain's Plate Hauberk"
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
                19578,
                "Berserker Bracers"
            ),
            new WowheadLink(
                19146,
                "Wristguards of Stability"
            ),
            new WowheadLink(
                12936,
                "Battleborn Armbraces"
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
                19143,
                "Flameguard Gauntlets",
                linkType.item,
                "Non-humans use Edgemaster's"
            ),
            new WowheadLink(
                16863,
                "Gauntlets of Might"
            ),
            new WowheadLink(
                15063,
                "Devilsaur Gauntlets"
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
                13959,
                "Omokk's Girth Restrainer"
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
                23301,
                "Knight-Captain's Plate Leggings",
                linkType.item,
                "BIS with 2 set"
            ),
            new WowheadLink(
                19402,
                "Legguards of the Fallen Crusader"
            ),
            new WowheadLink(
                15062,
                "Cloudkeeper Legplates"
            ),
            new WowheadLink(
                18329,
                "Arcanum of Rapidity",
                linkType.item,
                "Voracity can be acceptable"
            )
        ),
        new ItemSlotRow( //Feet
            itemSlots.feet,
            new WowheadLink(
                19387,
                "Chromatic Boots"
            ),
            new WowheadLink(
                19381,
                "Boots of the Shadow Flame"
            ),
            new WowheadLink(
                16984,
                "Black Dragonscale Boots",
                linkType.item,
                "Only with 3 set"
            ),
            new WowheadLink(
                13890,
                "Enchant Boots - Minor Speed",
                linkType.spell,
                "7 AGI is acceptable too"
            )
        ),
        new ItemSlotRow( //Rings
            itemSlots.rings,
            new WowheadLink(
                18821,
                "Quick Strike Ring"
            ),
            new WowheadLink(
                19432,
                "Circle of Applied Force"
            ),
            new WowheadLink(
                19325,
                "Don Julio's Band"
            ),
            null
        ),
        new ItemSlotRow( //Rings
            itemSlots.rings,
            new WowheadLink(
                19384,
                "Master Dragonslayer's Ring"
            ),
            new WowheadLink(
                17063,
                "Band of Accuria"
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
                20130,
                "Diamond Flask"
            ),
            new WowheadLink(
                19406,
                "Hand of Justice"
            ),
            new WowheadLink(
                11815,
                "Blackhand's Breadth"
            ),
            null
        ),
        new ItemSlotRow( //Trinkets
            itemSlots.trinkets,
            new WowheadLink(
                13965,
                "Blackhand's Breadth"
            ),
            new WowheadLink(
                19289,
                "Darkmoon Card: Maelstrom"
            ),
            null,
            null
        ),
        new ItemSlotRow( //Mainhand
            itemSlots.mainHand,
            new WowheadLink(
                19352,
                "Chromatically Tempered Sword"
            ),
            new WowheadLink(
                19335,
                "Spineshatter"
            ),
            new WowheadLink(
                17075,
                "Vis'kag the Bloodletter"
            ),
            new WowheadLink(
                20034,
                "Enchant Weapon - Crusader",
                linkType.spell
            )
        ),
        new ItemSlotRow( //Mainhand
            itemSlots.mainHand,
            new WowheadLink(
                17068,
                "Deathbringer"
            ),
            new WowheadLink(
                19363,
                "Crul'shorukh, Edge of Chaos"
            ),
            new WowheadLink(
                18816,
                "Perdition's Blade"
            ),
            new WowheadLink(
                20034,
                "Enchant Weapon - Crusader",
                linkType.spell
            )
        ),
        new ItemSlotRow( //Offhand
            itemSlots.offHand,
            new WowheadLink(
                18832,
                "Brutality Blade"
            ),
            new WowheadLink(
                19351,
                "Maladath, Runed Blade of the Black Flight"
            ),
            new WowheadLink(
                19170,
                "Ebon Hand"
            ),
            new WowheadLink(
                20034,
                "Enchant Weapon - Crusader",
                linkType.spell
            )
        ),
        new ItemSlotRow( //Offhand
            itemSlots.offHand,
            new WowheadLink(
                19363,
                "Crul'shorukh, Edge of Chaos"
            ),
            new WowheadLink(
                18805,
                "Core Hound Tooth"
            ),
            new WowheadLink(
                19362,
                "Doom's Edge"
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
                19107,
                "Bloodseeker"
            ),
            null
        ),
    ],
    "DPS"
);

// #endregion Warrior

var preRaid = [
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

var tierOne = [
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

var tierTwo = [
    tierTwoDruidResto,
    tierTwoDruidTank,
    tierTwoHunter,
    tierTwoMage,
    tierTwoPaladin,
    tierTwoPriest,
    tierTwoRogue,
    tierTwoWarlock,
    tierTwoWarriorDPS,
    tierTwoWarriorTank
]