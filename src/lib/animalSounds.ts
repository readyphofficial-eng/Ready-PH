const SOUND_URLS: Record<string, string> = {
  'Dog': 'https://soundbible.com/mp3/Growling_Snarling_Dogs-Lisa_Redfern-570128669.mp3',
  'Cat': 'https://soundbible.com/mp3/Cat Meow-SoundBible.com-1453940411.mp3',
  'Cow': 'https://soundbible.com/mp3/Cow-SoundBible.com-868293659.mp3',
  'Pig': 'https://soundbible.com/mp3/Pig Oink-SoundBible.com-1424738584.mp3',
  'Chicken': 'https://soundbible.com/mp3/Rooster-SoundBible.com-1114473528.mp3',
  'Duck': 'https://soundbible.com/mp3/Quack Quack-SoundBible.com-620056916.mp3',
  'Sheep': 'https://soundbible.com/mp3/Alpaca_Mating_Call-Stephan_Schutze-949103590.mp3',
  'Horse': 'https://soundbible.com/mp3/Horse Neigh-SoundBible.com-1740540960.mp3',
  'Lion': 'https://soundbible.com/mp3/Lion Roar-SoundBible.com-718441804.mp3',
  'Tiger': 'https://soundbible.com/mp3/Roaring Lion-SoundBible.com-527774719.mp3',
  'Elephant': 'https://soundbible.com/mp3/Stampede_Large-Mike_Koenig-829800776.mp3',
  'Frog': 'https://soundbible.com/mp3/Frogs-Lisa_Redfern-1150052170.mp3',
  'Bird': 'https://soundbible.com/mp3/bluejay_call-Mike_Koenig-591302150.mp3',
  'Bee': 'https://soundbible.com/mp3/Bee Buzz-SoundBible.com-2039656469.mp3',
  'Owl': 'https://soundbible.com/mp3/Owl Hooting-SoundBible.com-1155496330.mp3',
  'Wolf': 'https://soundbible.com/mp3/Growling_Snarling_Dogs-Lisa_Redfern-570128669.mp3',
  'Bear': 'https://soundbible.com/mp3/Growling_Snarling_Dogs-Lisa_Redfern-570128669.mp3',
  'Mouse': 'https://soundbible.com/mp3/Angry Chipmunk-SoundBible.com-980210050.mp3',
  'Rabbit': 'https://soundbible.com/mp3/Angry Chipmunk-SoundBible.com-980210050.mp3',
  'Snake': 'https://soundbible.com/mp3/Rattlesnake-SoundBible.com-2003607351.mp3',
  'Zebra': 'https://soundbible.com/mp3/Zebra Call-SoundBible.com-1950273764.mp3',
  'Panda': 'https://soundbible.com/mp3/Bear-SoundBible.com-1200185340.mp3',
  'Koala': 'https://soundbible.com/mp3/Bear-SoundBible.com-1200185340.mp3',
  'Turtle': 'https://soundbible.com/mp3/Frogs-Lisa_Redfern-1150052170.mp3',
  'Giraffe': 'https://soundbible.com/mp3/Stampede_Large-Mike_Koenig-829800776.mp3',
  'Rhinoceros': 'https://soundbible.com/mp3/Stampede_Large-Mike_Koenig-829800776.mp3',
  'Hippo': 'https://soundbible.com/mp3/Stampede_Large-Mike_Koenig-829800776.mp3',
  'Crocodile': 'https://soundbible.com/mp3/Rattlesnake-SoundBible.com-2003607351.mp3',
  'Eagle': 'https://soundbible.com/mp3/Roaring Lion-SoundBible.com-527774719.mp3',
  'Parrot': 'https://soundbible.com/mp3/Parots Talking-SoundBible.com-587469366.mp3',
  'Swan': 'https://soundbible.com/mp3/bluejay_call-Mike_Koenig-591302150.mp3',
  'Flamingo': 'https://soundbible.com/mp3/bluejay_call-Mike_Koenig-591302150.mp3',
  'Penguin': 'https://soundbible.com/mp3/Angry Chipmunk-SoundBible.com-980210050.mp3',
  'Dolphin': 'https://soundbible.com/mp3/Quack Quack-SoundBible.com-620056916.mp3',
  'Whale': 'https://soundbible.com/mp3/Lion Roar-SoundBible.com-718441804.mp3',
  'Shark': 'https://soundbible.com/mp3/Roaring Lion-SoundBible.com-527774719.mp3',
  'Butterfly': 'https://soundbible.com/mp3/Bee Buzz-SoundBible.com-2039656469.mp3',
  'Snail': 'https://soundbible.com/mp3/Frogs-Lisa_Redfern-1150052170.mp3',
  'Ladybug': 'https://soundbible.com/mp3/Bee Buzz-SoundBible.com-2039656469.mp3',
  'Cricket': 'https://soundbible.com/mp3/killdeer_song-Mike_Koenig-1144525481.mp3',
  'Spider': 'https://soundbible.com/mp3/Rattlesnake-SoundBible.com-2003607351.mp3',
  'Scorpion': 'https://soundbible.com/mp3/Rattlesnake-SoundBible.com-2003607351.mp3',
  'Seal': 'https://soundbible.com/mp3/Quack Quack-SoundBible.com-620056916.mp3',
  'Kangaroo': 'https://soundbible.com/mp3/Stampede_Large-Mike_Koenig-829800776.mp3',
  'Badger': 'https://soundbible.com/mp3/Growling_Snarling_Dogs-Lisa_Redfern-570128669.mp3',
  'Lizard': 'https://soundbible.com/mp3/Rattlesnake-SoundBible.com-2003607351.mp3',
  'Octopus': 'https://soundbible.com/mp3/Frogs-Lisa_Redfern-1150052170.mp3',
  'Fish': 'https://soundbible.com/mp3/Frogs-Lisa_Redfern-1150052170.mp3',
  'Bat': 'https://soundbible.com/mp3/Bee Buzz-SoundBible.com-2039656469.mp3',
  'Fox': 'https://soundbible.com/mp3/Growling_Snarling_Dogs-Lisa_Redfern-570128669.mp3',
};

const audioCache: Record<string, HTMLAudioElement> = {};

export function playAnimalByName(name: string): void {
  const url = SOUND_URLS[name];
  if (!url) return;
  try {
    if (!audioCache[name]) {
      audioCache[name] = new Audio(url);
      audioCache[name].crossOrigin = 'anonymous';
    }
    const audio = audioCache[name];
    audio.currentTime = 0;
    audio.play().catch(() => {});
  } catch {}
}

export function playAnimalSound(sound: string): void {
  playAnimalByName(sound);
}
