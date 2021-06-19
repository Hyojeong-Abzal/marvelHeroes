import React from 'react'
import { v1 } from 'uuid'

const initialState = {
  characters: [
    {
      id: v1(),
      name: 'Iron Man',
      description:
        "Ultimate Iron Man  reveals that Tony Stark's genius is the result of an accident his mother (brilliant scientist Maria Cerrera, who is the second wife of Tony Stark's father, Howard, and works for him in research and development before Tony was born) suffered while she was carrying him in her womb. The accident changed the genetic structure of both her and her unborn child, but culminated in her death during childbirth. The child, named Antonio (Tony for short), developed neural tissue normally found only in the brain all throughout his body, causing his entire body to act as one massive brain, giving him tremendous mental capacity. However, one of the side effects of the accident from the minute he was born was an extreme dermal sensitivity, making even the sensation of air on his skin feel like severe burns due to the overstimulation of neural cells in his skin. Howard Stark, a master inventor and owner and CEO of his own billion dollar tech company, used a newly invented liquid, biological armour to ease Tony's agony; a buffer allowing him to interact with the world normally, but one he would have to wear for the rest of his life.",
      tags: ['Rich', 'Smart'],
      smallPicture:
        'https://kvmarvel.ru/wp-content/uploads/1970/05/ironman-1-286x400.png',
      largePicture:
        'https://kvmarvel.ru/wp-content/uploads/1970/05/iron-man-mark-lxxxv-hot-toys-promo.png',
      wiki: 'https://en.wikipedia.org/wiki/Ultimate_Iron_Man',
    },
    {
      id: v1(),
      name: 'Hulk',
      description:
        'Caught in a gamma bomb explosion while trying to save the life of a teenager, Dr. Bruce Banner was transformed into the incredibly powerful creature called the Hulk. An all too often misunderstood hero, the angrier the Hulk gets, the stronger the Hulk gets',
      tags: ['Strenght', 'Green'],
      smallPicture:
        'https://kvmarvel.ru/wp-content/uploads/1969/12/hulk-286x400.png',
      largePicture:
        'https://kvmarvel.ru/wp-content/uploads/1969/12/hulkbuster-iron-studios-promo.png',
      wiki: 'https://en.wikipedia.org/wiki/Hulk',
    },
    {
      id: v1(),
      name: 'Thor',
      description:
        "As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate. He's self-assured, and he would never, ever stop fighting for a worthwhile cause.",
      tags: ['Rich', 'Smart'],
      smallPicture:
        'https://kvmarvel.ru/wp-content/uploads/1015/03/thor-2-286x400.png',
      largePicture:
        'https://kvmarvel.ru/wp-content/uploads/2019/03/gladiator-thor-deluxe-version.png',
      wiki: 'https://en.wikipedia.org/wiki/Thor_(Marvel_Comics)',
    },
    {
      id: v1(),
      name: 'Captain Marvel',
      description:
        'Carol Danvers is a fictional character that appears in comic books published by Marvel Comics.',
      tags: ['Rich', 'Smart'],
      smallPicture:
        'https://kvmarvel.ru/wp-content/uploads/2018/03/captain-marvel-photo-286x400.png',
      largePicture:
        'https://kvmarvel.ru/wp-content/uploads/2018/03/captain-marvel-deluxe-version-hot-toys-promo.png',
      wiki: 'https://en.wikipedia.org/wiki/Carol_Danvers',
    },
    {
      id: v1(),
      name: 'Ant-Man',
      description:
        "Eric O'Grady was the main character in the ongoing monthly series The Irredeemable Ant-Man, with the 'Irredeemable' title given to the comic's title to indicate the character's immoral attitude and behavior. The series was canceled after issue #12, though no official cancellation notice was given (as Marvel Comics simply opted to not solicit issues of The Irredeemable Ant-Man beyond #12, though the final issue did mercilessly mock the idea of cancellation, such as having Eric scream in spite towards a massive assault of canceled comic characters).",
      tags: ['Rich', 'Smart'],
      smallPicture:
        'https://kvmarvel.ru/wp-content/uploads/2018/03/f_antman_civilwar-286x400.png',
      largePicture: '',
      wiki: 'https://en.wikipedia.org/wiki/Eric_O%27Grady',
    },
    {
      id: v1(),
      name: 'Spider-Man',
      description:
        'Bitten by a radioactive spider, high school student Peter Parker gained the speed, strength and powers of a spider. Adopting the name Spider-Man, Peter hoped to start a career using his new abilities. Taught that with great power comes great responsibility, Spidey has vowed to use his powers to help people.',
      tags: ['Rich', 'Smart'],
      smallPicture:
        'https://kvmarvel.ru/wp-content/uploads/2018/03/spider-man-286x400.png',
      largePicture: '',
      wiki: 'https://en.wikipedia.org/wiki/Spider-Man',
    },
    {
      id: v1(),
      name: 'Loki',
      description:
        "A version of Loki made his first Marvel Comics appearance in Timely Comics' publication Venus No. 6 (August 1949), where Loki was depicted as a member of the Olympian gods exiled to the Underworld, and here resembled the traditional image of the Devil.[original research?] Planning to spread hate, he convinced Jupiter to let him travel to the realm of Earth, using Venus already being allowed onto it as his justification. Venus pledged herself to Loki's service in order to stop his plans, with Jupiter seeing her unselfish act and freeing her from the pledge, with Loki subsequently being sent back to the Underworld. The modern-age Loki made his first official Marvel appearance in Journey into Mystery No. 85 (October 1962), where Loki was reintroduced as Thor's sworn enemy. The modern age Loki was introduced by brothers and co-writers Stan Lee and Larry Lieber and was redesigned by Jack Kirby.As one of Thor's arch-nemese",
      tags: ['Rich', 'Smart'],
      smallPicture:
        'https://kvmarvel.ru/wp-content/uploads/0965/03/loki-286x400.png',
      largePicture:
        'https://kvmarvel.ru/wp-content/uploads/0965/03/loki-hot-toys-promo.png',
      wiki: 'https://en.wikipedia.org/wiki/Loki_(character)',
    },
    {
      id: v1(),
      name: 'Doctor Strange',
      description:
        'Doctor Stephen Strange is a fictional character appearing in American comic books published by Marvel Comics. Created by Steve Ditko, the character first appeared in Strange Tales #110 (cover-dated July 1963). Doctor Strange serves as the Sorcerer Supreme, the primary protector of Earth against magical and mystical threats. Inspired by stories of black magic and Chandu the Magician, Strange was created during the Silver Age of Comic Books to bring a different kind of character and themes of mysticism to Marvel Comics.The character begins as an extremely talented but egotistical surgeon who loses the ability to operate after a car crash severely damages his hands beyond repair. Searching the globe for healing, he encounters the Ancient One, the Sorcerer Supreme. Strange becomes his student, and learns to be a master of both the mystical and the martial arts. He acquires an assortment of mystical objects, including the powerful Eye of Agamotto and Cloak of Levitation, and takes up residence in a mansion referred to as the Sanctum Sanctorum, located in 177A Bleecker Street, Greenwich Village, New York City. Strange assumes the title of Sorcerer Supreme and, with his friend and valet Wong, defends the world from mystical threats.',
      tags: ['Rich', 'Smart'],
      smallPicture:
        'https://kvmarvel.ru/wp-content/uploads/2018/03/doctor-strange-286x400.png',
      largePicture: '',
      wiki: 'https://en.wikipedia.org/wiki/Doctor_Strange',
    },
    {
      id: v1(),
      name: 'Vision',
      description:
        "The Vision is a fictional superhero appearing in American comic books published by Marvel Comics. Created by Roy Thomas and artist John Buscema,[1][2] the character first appeared in Avengers Volume 1 #57 (published in August 1968, with a cover date of October 1968), and is loosely based on the Timely Comics character of the same name who was an alien from another dimension. The Vision is an android  built by the villainous robot Ultron created by Hank Pym. Originally intended to act as Ultron's 'son' and destroy the Avengers, Vision instead turned on his creator and joined the Avengers to fight for the forces of good. Since then, he has been depicted as a frequent member of the team, and for a time was married to his teammate, the Scarlet Witch. He also served as a member of the Defenders.",
      tags: ['Rich', 'Smart'],
      smallPicture:
        'https://kvmarvel.ru/wp-content/uploads/2018/03/vision-286x400.png',
      largePicture: '',
      wiki: 'https://en.wikipedia.org/wiki/Vision_(Marvel_Comics)',
    },
    {
      id: v1(),
      name: 'Black Widow',
      description:
        "Natalia Alianovna 'Natasha Romanoff' Romanova[1] (Black Widow) is a fictional character appearing in American comic books published by Marvel Comics. Created by editor and plotter Stan Lee, scripter Don Rico, and artist Don Heck, the character debuted in Tales of Suspense #52 (April 1964). The character was introduced as a Russian spy, an antagonist of the superhero Iron Man. She later defected to the United States, becoming an agent of the fictional spy agency S.H.I.E.L.D. and a member of the superhero team the Avengers.",
      tags: ['Rich', 'Smart'],
      smallPicture:
        'https://kvmarvel.ru/wp-content/uploads/1984/11/black-widow-1-286x400.png',
      largePicture:
        'https://kvmarvel.ru/wp-content/uploads/2019/04/black-widow-hot-toys-endgame-promo.png',
      wiki: 'https://en.wikipedia.org/wiki/Black_Widow_(Natasha_Romanova)',
    },
    {
      id: v1(),
      name: 'Hawkeye',
      description:
        "Hawkeye (Clinton Francis Barton) is a fictional superhero appearing in American comic books published by Marvel Comics. Created by writer Stan Lee and artist Don Heck, the character first appeared as a villain in Tales of Suspense #57 (Sept. 1964) and later joined the Avengers in The Avengers #16 (May 1965). He has been a prominent member of the team ever since. He was also ranked at #44 on IGN's Top 100 Comic Book Heroes list.",
      tags: ['Rich', 'Smart'],
      smallPicture:
        'https://kvmarvel.ru/wp-content/uploads/1971/01/hawkeye-sokoliniy-glaz-286x400.png',
      largePicture:
        'https://kvmarvel.ru/wp-content/uploads/1971/01/hawkeye-deluxe-hot-toys-promo.png',
      wiki: 'https://en.wikipedia.org/wiki/Hawkeye#Book_and_comic_characters',
    },
    {
      id: v1(),
      name: 'Black Panther',
      description:
        "Black Panther is a fictional superhero appearing in American comic books published by Marvel Comics. The character was created by writer-editor Stan Lee and writer-artist Jack Kirby, first appearing in Fantastic Four #52 (cover-dated July 1966) in the Silver Age of Comic Books. Black Panther's real name is T'Challa, and he is depicted as the king and protector of the fictional African nation of Wakanda. Along with possessing enhanced abilities achieved through ancient Wakandan rituals of drinking the essence of the heart-shaped herb, T'Challa also relies on his proficiency in science, rigorous physical training, hand-to-hand combat skills, and access to wealth and advanced Wakandan technology to combat his enemies.",
      tags: ['Rich', 'Smart'],
      smallPicture:
        'https://kvmarvel.ru/wp-content/uploads/2018/03/black-panther-286x400.png',
      largePicture: '',
      wiki: 'https://en.wikipedia.org/wiki/Black_Panther_(character)',
    },
    {
      id: v1(),
      name: 'Winter Soldier',
      description:
        "Sergeant James Buchanan 'Bucky' Barnes is a World War II veteran, a former officer of the 107th Infantry Regiment and best friend of Steve Rogers since childhood. Barnes enlisted in the army and assigned into the 107th in 1943. His regiment was captured by HYDRA, where Barnes was given a variant of the Super Soldier Serum by Arnim Zola. Barnes, along with whoever still remained from his regiment, were later rescued by Rogers, who had become Captain America during Barnes' absence. Upon joining forces with the continuing war, Barnes and Rogers formed their Howling Commandos, to battle Red Skull's forces. However, during their attempt to finally capture Zola, in the Austrian Alps, Barnes was caught in their ambush and plummeted hundreds of feet from a train. As no body was ever recovered, Barnes had then been presumed deceased.",
      tags: ['Rich', 'Smart'],
      smallPicture:
        'https://kvmarvel.ru/wp-content/uploads/1917/03/bucky-barnes-winter-soldier-286x400.png',
      largePicture: '',
      wiki: 'https://en.wikipedia.org/wiki/Bucky',
    },
    {
      id: v1(),
      name: 'War Machine',
      description:
        "War Machine (James Rupert 'Rhodey' Rhodes) is a fictional superhero appearing in American comic books published by Marvel Comics. James Rhodes first appeared in Iron Man #118 (January 1979) by David Michelinie and John Byrne. The War Machine armor (Iron Man Armor Model 11) which first appeared in Iron Man #281 (June 1992) became his signature exosuit, created by Len Kaminski and Kevin Hopgood.",
      tags: ['Rich', 'Smart'],
      smallPicture:
        'https://kvmarvel.ru/wp-content/uploads/1968/10/war-machine-286x400.png',
      largePicture:
        'https://kvmarvel.ru/wp-content/uploads/2019/04/war-machine-mark-6-hot-toys-promo.png',
      wiki: 'https://en.wikipedia.org/wiki/War_Machine',
    },
    {
      id: v1(),
      name: 'Scarlet Witch',
      description:
        " The Scarlet Witch (Wanda Maximoff) is a fictional character appearing in American comic books published by Marvel Comics. The character was created by writer Stan Lee and artist Jack Kirby. Her first appearance was in The X-Men #4 (March 1964) in the Silver Age of Comic Books. Originally said to have the ability to alter probability, the Scarlet Witch has been depicted as a powerful sorceress since the 1980s and was later said to be powerful enough to alter reality. For most of her comic book history, she is portrayed as a mutant, a member of a fictional subspecies of humans born with an 'X-gene' that grants superhuman abilities and traits. This was revised via a 2015 storyline establishing that her superhuman traits are a result of experimentation done by High Evolutionary when she was a child",
      tags: ['Rich', 'Smart'],
      smallPicture:
        'https://kvmarvel.ru/wp-content/uploads/1990/03/scarlet-witch-286x400.png',
      largePicture: '',
      wiki: 'https://en.wikipedia.org/wiki/Scarlet_Witch',
    },
    {
      id: v1(),
      name: 'Quicksilver',
      description:
        " The Scarlet Witch (Wanda Maximoff) is a fictional character appearing in American comic books published by Marvel Comics. The character was created by writer Stan Lee and artist Jack Kirby. Her first appearance was in The X-Men #4 (March 1964) in the Silver Age of Comic Books. Originally said to have the ability to alter probability, the Scarlet Witch has been depicted as a powerful sorceress since the 1980s and was later said to be powerful enough to alter reality. For most of her comic book history, she is portrayed as a mutant, a member of a fictional subspecies of humans born with an 'X-gene' that grants superhuman abilities and traits. This was revised via a 2015 storyline establishing that her superhuman traits are a result of experimentation done by High Evolutionary when she was a childQuicksilver (Pietro Maximoff) is a fictional character appearing in American comic books published by Marvel Comics. The character first appeared in the comic book Uncanny X-Men #4 (March 1964) and was created by Stan Lee and Jack Kirby. The character has since starred in two self-titled limited series and has historically been depicted as a regular team member in superhero title The Avengers. Quicksilver has the superhuman ability to move at great speeds. In most depictions, he is a mutant, a human born with innate superhuman powers. In comic book stories beginning in 2015, he is the product of genetic experimentation by the High Evolutionary.[1] Quicksilver most commonly appears in fiction associated with the X-Men, having been introduced as an adversary for the superhero team. In later stories, he became a superhero himself. He is the twin brother of the Scarlet Witch and, in most depictions, the son of Magneto and the half-brother of Polaris.",
      tags: ['Rich', 'Smart'],
      smallPicture:
        'https://kvmarvel.ru/wp-content/uploads/2018/03/quicksilver-marvel-286x400.png',
      largePicture: '',
      wiki: 'https://en.wikipedia.org/wiki/Quicksilver_(Marvel_Comics)',
    },
    {
      id: v1(),
      name: 'Star-Lord',
      description:
        'Peter Jason Quill is a Celestial-Human hybrid who was abducted from Earth in 1988 by the Yondu Ravager Clan, and afterwards began building a reputation as the notorious intergalactic outlaw Star-Lord. In 2014, he decided to leave the Ravagers and operate individually, unintentionally becoming a key player in the quest for a precious artifact known as the Orb after stealing it from Morag. Following his arrest, he forged an uneasy alliance with fellow inmates Gamora, Drax the Destroyer, Rocket Raccoon, and Groot, who together formed the Guardians of the Galaxy. They first rallied as a team by stopping Ronan the Accuser from destroying Xandar with the Power Stone.',
      tags: ['Rich', 'Smart'],
      smallPicture:
        'https://kvmarvel.ru/wp-content/uploads/2018/03/star-lord-286x400.png',
      largePicture: '',
      wiki: 'https://en.wikipedia.org/wiki/Star-Lord',
    },
    {
      id: v1(),
      name: 'Wasp',
      description:
        "When Janet Van Dyne's father died, she convinced her father's associate Hank Pym to give her a supply of 'Pym particles'; Pym also subjected her to a procedure which granted her the ability to, upon shrinking, grow wings and fire blasts of energy, which she called her 'wasp's stings.",
      tags: ['Rich', 'Smart'],
      smallPicture:
        'https://kvmarvel.ru/wp-content/uploads/1980/01/marvel-the-wasp-286x400.png',
      largePicture: '',
      wiki: 'https://en.wikipedia.org/wiki/Wasp_(character)',
    },
    {
      id: v1(),
      name: 'Thanos',
      description:
        'The Mad Titan Thanos, a melancholy, brooding individual, consumed with the concept of death, sought out personal power and increased strength, endowing himself with cybernetic implants until he became more powerful than any of his brethren.',
      tags: ['Rich', 'Smart'],
      smallPicture:
        'https://kvmarvel.ru/wp-content/uploads/2018/03/marvel-avengers-infinity-war-thanos-286x400.png',
      largePicture:
        'https://kvmarvel.ru/wp-content/uploads/2019/04/thanos-hot-toys-endgame.png',
      wiki: 'https://en.wikipedia.org/wiki/Thanos',
    },
    {
      id: v1(),
      name: 'Drax the Destroyer',
      description:
        "The character's origin story relates that Arthur Douglas was a human whose family was attacked and killed by the supervillain Thanos. Needing a champion to combat Thanos, the being known as Kronos took Arthur's spirit and placed it in a powerful new body, and Drax the Destroyer was born. Drax's powers included enhanced strength and resilience, flight, and the ability to project energy blasts from his hands. The character often battled Thanos, and on occasion the superheroes Captain Marvel and Adam Warlock. He was also a member of the group known as the Infinity Watch.",
      tags: ['Rich', 'Smart'],
      smallPicture:
        'https://kvmarvel.ru/wp-content/uploads/2018/03/drax-286x400.png',
      largePicture: '',
      wiki: 'https://en.wikipedia.org/wiki/Drax_the_Destroyer',
    },
    {
      id: v1(),
      name: 'Gamora',
      description:
        "Gamora Zen Whoberi Ben Titan is a fictional character appearing in American comic books published by Marvel Comics. Created by writer/artist Jim Starlin, the character first appeared in Strange Tales #180 (June 1975). Gamora is the adopted daughter of Thanos, and the last of her species. Her powers include superhuman strength and agility and an accelerated healing factor. She also is an elite combatant, being able to beat most of the opponents in the galaxy. She is a member of the group known as the Infinity Watch. The character played a role in the 2007 crossover comic book event 'Annihilation: Conquest', and became a member of the titular team in its spin-off comic, Guardians of the Galaxy.",
      tags: ['Rich', 'Smart'],
      smallPicture:
        'https://kvmarvel.ru/wp-content/uploads/2018/03/gamora-286x400.png',
      largePicture: '',
      wiki: 'https://en.wikipedia.org/wiki/Gamora',
    },
    {
      id: v1(),
      name: 'Nebula',
      description:
        "A brutal space pirate and mercenary, Nebula seized control of Sanctuary II, a massive spaceship previously under the command of Thanos. Thanos was believed to be dead at this point, and Nebula claimed that he had been her grandfather. Nebula's band of mercenaries and pirates consisted of Skunge, Kehl, Gunthar and Levan.Nebula asked the second Captain Marvel to join her mercenary band and aid them in conquering the Skrull Empire, but she only pretended to go along with her plan. However, Firelord learned that Nebula had massacred the Xandarians. Eventually Nebula used her space fleet to attack the Skrull space armada and the Avengers.",
      tags: ['Rich', 'Smart'],
      smallPicture:
        'https://kvmarvel.ru/wp-content/uploads/2019/01/nebula-marvel-286x400.png',
      largePicture:
        'https://kvmarvel.ru/wp-content/uploads/2019/01/nebula-hot-toys-promo.png',
      wiki: 'https://en.wikipedia.org/wiki/Nebula_(character)',
    },
    {
      id: v1(),
      name: 'Rocket Raccoon',
      description:
        "The character was created by Bill Mantlo and Keith Giffen, and inspired by the Beatles song 'Rocky Raccoon'. Other references to the song were featured in Rocket's appearance in The Incredible Hulk #271 (May 1982), which was titled 'Now Somewhere In the Black Holes of Sirius Major There Lived a Young Boy Named Rocket Raccoon' and saw the Hulk help Rocket stop a villain trying to steal 'Gideon's Bible', which in the Marvel Universe was a book that contained the sum of all knowledge on the Loonies colony.",
      tags: ['Rich', 'Smart'],
      smallPicture:
        'https://kvmarvel.ru/wp-content/uploads/2018/03/rocket-286x400.png',
      largePicture: '',
      wiki: 'https://en.wikipedia.org/wiki/Rocket_Raccoon',
    },
    {
      id: v1(),
      name: 'Groot',
      description:
        "Groot is a Flora colossus from Planet X, the capital of the branch worlds. The Flora colossi are tree-like beings whose language is almost impossible to understand due to the stiffness of their larynxes, causing their speech to sound like they are repeating the phrase 'I am Groot'. Other beings try to be friendly but become angry with the Flora colossi for not being able to speak. (Groot was shown to be capable of speaking not just understandably but eloquently throughout Annihilation: Conquest.) The Flora colossi are ruled over by the 'Arbor Masters' and teach the children of the species with 'Photonic Knowledge', which is the collected knowledge of the Arbor Masters of the generations and is absorbed through photosynthesis; this is a highly advanced education method, making the Flora colossi geniuses. Planet X's biome is managed by 'Maintenance Mammals' which are small raccoon-like beings",
      tags: ['Rich', 'Smart'],
      smallPicture:
        'https://kvmarvel.ru/wp-content/uploads/2018/03/groot-286x400.png',
      largePicture: '',
      wiki: 'https://en.wikipedia.org/wiki/Groot',
    },
    {
      id: v1(),
      name: 'Nick Fury',
      description:
        "Fury initially appeared in the World War II combat series Sgt. Fury and his Howling Commandos, as the cigar-chomping NCO who led a racially and ethnically integrated elite unit. The series ran 167 issues (May 1963 – Dec. 1981), though only in reprints after issue #120 (July 1974). Following several issues by creators Lee and Kirby, penciller Dick Ayers began his long stint on what would be his signature series; John Severin later joined as inker, forming a long-running, critically acclaimed team. Roy Thomas succeeded Lee as writer, followed by Gary Friedrich, for whom this became a signature series as well. Annuals featured the 'Howlers' called back to fight in the Korean War and Vietnam War.",
      tags: ['Rich', 'Smart'],
      smallPicture:
        'https://kvmarvel.ru/wp-content/uploads/2018/03/nick_fury-286x400.png',
      largePicture: '',
      wiki: 'https://en.wikipedia.org/wiki/Nick_Fury',
    },
  ],
}

export const charactersListReducer = (
  state: InitialStateType = initialState,
  action: any
): InitialStateType => {
  switch (action.type) {
    default:
      return { ...state }
  }
}

export type InitialStateType = typeof initialState

export type CharacterType = {
  id: string
  name: string
  description: string
  tags: string[]
  smallPicture: string
  largePicture: string
  wiki: string
}
