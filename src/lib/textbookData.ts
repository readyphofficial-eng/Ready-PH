// ---------------------------------------------------------------------------
// Interactive Textbook data: levels → subjects → chapters → pages → blocks
// Covers Preschool, Elementary, Junior High, Senior High, Senior High Specialized
// Each page has interactive content blocks (text, key terms, diagrams, quizzes)
// ---------------------------------------------------------------------------

export type BlockType =
  | 'heading'
  | 'paragraph'
  | 'example'
  | 'keyterm'
  | 'diagram'
  | 'quiz'
  | 'summary'
  | 'funfact'
  | 'tip';

export interface TextbookBlock {
  type: BlockType;
  text?: string;
  term?: string;
  definition?: string;
  emoji?: string;
  question?: string;
  options?: string[];
  answer?: number;
}

export interface TextbookPage {
  title: string;
  blocks: TextbookBlock[];
}

export interface TextbookChapter {
  id: string;
  title: string;
  emoji: string;
  pages: TextbookPage[];
}

export interface TextbookSubject {
  id: string;
  name: string;
  emoji: string;
  color: string;
  chapters: TextbookChapter[];
}

export interface TextbookLevel {
  id: string;
  name: string;
  emoji: string;
  color: string;
  subjects: TextbookSubject[];
}

// Helpers for concise block creation
function h(text: string): TextbookBlock { return { type: 'heading', text }; }
function p(text: string): TextbookBlock { return { type: 'paragraph', text }; }
function ex(text: string): TextbookBlock { return { type: 'example', text }; }
function kt(term: string, definition: string): TextbookBlock { return { type: 'keyterm', term, definition }; }
function d(emoji: string, text: string): TextbookBlock { return { type: 'diagram', emoji, text }; }
function q(question: string, options: string[], answer: number): TextbookBlock { return { type: 'quiz', question, options, answer }; }
function s(text: string): TextbookBlock { return { type: 'summary', text }; }
function ff(text: string): TextbookBlock { return { type: 'funfact', text }; }
function tip(text: string): TextbookBlock { return { type: 'tip', text }; }

// ===================== PRESCHOOL ============================================

const preschoolSubjects: TextbookSubject[] = [
  {
    id: 'ps-letters', name: 'Letters', emoji: '🔤', color: 'from-red-400 to-orange-400',
    chapters: [
      {
        id: 'ps-let-1', title: 'The Alphabet', emoji: '🅰️',
        pages: [
          {
            title: 'Meet the Letters',
            blocks: [
              h('What is the Alphabet?'),
              p('The alphabet is a set of letters that we use to write words. The English alphabet has 26 letters from A to Z.'),
              d('🅰️🅱️🅲️🅳️🅴️', 'These are the first 5 letters of the alphabet'),
              kt('Vowels', 'The letters A, E, I, O, U are special letters called vowels.'),
              kt('Consonants', 'All the other letters that are not vowels are called consonants.'),
              q('How many letters are in the English alphabet?', ['25', '26', '28', '30'], 1),
            ],
          },
          {
            title: 'Vowels and Consonants',
            blocks: [
              h('The Five Vowels'),
              p('There are 5 vowels: A, E, I, O, U. Every word has at least one vowel in it!'),
              d('🅰️🅴️🅸️🅾️🆄', 'A, E, I, O, U — the five vowels'),
              ex('The word "CAT" has the vowel A. The word "DOG" has the vowel O.'),
              q('Which of these is a vowel?', ['B', 'E', 'K', 'T'], 1),
              q('How many vowels are there?', ['3', '4', '5', '6'], 2),
            ],
          },
          {
            title: 'Letter Sounds',
            blocks: [
              h('Letters Make Sounds'),
              p('Every letter makes a sound. When we put letters together, they make words!'),
              ex('A says "ah", B says "buh", C says "cuh"'),
              kt('Phonics', 'Phonics is learning the sounds that letters make.'),
              q('What sound does the letter B make?', ['"ah"', '"buh"', '"cuh"', '"duh"'], 1),
              s('Remember: 26 letters, 5 vowels (A,E,I,O,U), and every letter makes a sound!'),
            ],
          },
        ],
      },
      {
        id: 'ps-let-2', title: 'Writing Letters', emoji: '✏️',
        pages: [
          {
            title: 'Uppercase and Lowercase',
            blocks: [
              h('Big and Small Letters'),
              p('Every letter has two forms: UPPERCASE (big) and lowercase (small).'),
              d('🅰️🅰️', 'A (uppercase) and a (lowercase) are the same letter'),
              ex('APPLE starts with uppercase A. apple starts with lowercase a.'),
              q('What is the lowercase of "B"?', ['b', 'd', 'p', 'q'], 0),
            ],
          },
          {
            title: 'Writing Your Name',
            blocks: [
              h('Names Start with Capital Letters'),
              p('Your name is special! It always starts with an uppercase (capital) letter.'),
              ex('Maria, Juan, Ana — all names start with capital letters!'),
              kt('Capital Letter', 'A big letter used at the start of names and sentences.'),
              q('Which is written correctly?', ['maria', 'Maria', 'MARIA', 'mARIA'], 1),
              s('Always use a capital letter for the first letter of your name!'),
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'ps-numbers', name: 'Numbers', emoji: '🔢', color: 'from-green-400 to-emerald-400',
    chapters: [
      {
        id: 'ps-num-1', title: 'Counting 1-10', emoji: '1️⃣',
        pages: [
          {
            title: 'Numbers 1 to 5',
            blocks: [
              h('Let\'s Count!'),
              p('Numbers help us count things. Let\'s learn numbers 1 to 5!'),
              d('1️⃣2️⃣3️⃣4️⃣5️⃣', 'One, Two, Three, Four, Five'),
              ex('1 apple, 2 bananas, 3 oranges — we use numbers to count!'),
              kt('Counting', 'Counting means saying numbers in order: 1, 2, 3, 4, 5...'),
              q('What comes after 3?', ['2', '4', '5', '1'], 1),
              q('How many fingers on one hand?', ['3', '4', '5', '6'], 2),
            ],
          },
          {
            title: 'Numbers 6 to 10',
            blocks: [
              h('More Numbers!'),
              p('Now let\'s learn 6 to 10!'),
              d('6️⃣7️⃣8️⃣9️⃣🔟', 'Six, Seven, Eight, Nine, Ten'),
              ex('If you have 6 candies and get 1 more, you have 7!'),
              q('What comes after 7?', ['6', '8', '9', '10'], 1),
              q('What comes before 10?', ['8', '9', '7', '11'], 1),
            ],
          },
          {
            title: 'Counting Objects',
            blocks: [
              h('Count What You See'),
              p('We can count anything — toys, fruits, fingers, or stars!'),
              ex('🍎🍎🍎 = 3 apples. 🐱🐱🐱🐱 = 4 cats.'),
              q('How many stars? ⭐⭐⭐⭐⭐', ['3', '4', '5', '6'], 2),
              s('Counting is fun! Practice counting things around you every day!'),
            ],
          },
        ],
      },
      {
        id: 'ps-num-2', title: 'More and Less', emoji: '⚖️',
        pages: [
          {
            title: 'Comparing Numbers',
            blocks: [
              h('Which Has More?'),
              p('When we compare, we look at which group has more and which has less.'),
              d('🍎🍎🍎🍎 (4) vs 🍎🍎 (2)', '4 is MORE than 2'),
              kt('More', 'A bigger number means there are more things.'),
              kt('Less', 'A smaller number means there are fewer things.'),
              q('Which is more: 3 or 7?', ['3', '7', 'They are the same', 'I don\'t know'], 1),
              q('Which is less: 2 or 5?', ['2', '5', 'They are the same', 'I don\'t know'], 0),
              s('Remember: bigger numbers mean MORE, smaller numbers mean LESS!'),
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'ps-colors', name: 'Colors', emoji: '🌈', color: 'from-pink-400 to-rose-400',
    chapters: [
      {
        id: 'ps-col-1', title: 'Rainbow Colors', emoji: '🌈',
        pages: [
          {
            title: 'The Colors of the Rainbow',
            blocks: [
              h('What is a Rainbow?'),
              p('A rainbow has 7 beautiful colors! Let\'s learn them all.'),
              d('🌈', 'Red, Orange, Yellow, Green, Blue, Indigo, Violet'),
              kt('Rainbow', 'A colorful arc that appears in the sky after rain.'),
              ex('The sky is blue, the grass is green, the sun is yellow!'),
              q('How many colors are in a rainbow?', ['5', '6', '7', '8'], 2),
              q('What color is the sky on a sunny day?', ['Red', 'Green', 'Blue', 'Pink'], 2),
            ],
          },
          {
            title: 'Colors Around Us',
            blocks: [
              h('Colors Everywhere!'),
              p('Colors make our world beautiful. Everything has a color!'),
              ex('A banana is yellow, a leaf is green, an apple is red.'),
              d('🔴🟡🟢', 'Red, Yellow, Green — colors we see every day'),
              q('What color is a ripe banana?', ['Red', 'Blue', 'Yellow', 'Green'], 2),
              q('What color is grass?', ['Green', 'Purple', 'Black', 'Orange'], 0),
              s('Colors are everywhere! Look around and name the colors you see!'),
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'ps-shapes', name: 'Shapes', emoji: '🔷', color: 'from-blue-400 to-cyan-400',
    chapters: [
      {
        id: 'ps-shp-1', title: 'Basic Shapes', emoji: '⭐',
        pages: [
          {
            title: 'Circles and Squares',
            blocks: [
              h('Shapes All Around'),
              p('Shapes are everywhere! A ball is a circle, a box is a square.'),
              d('🔵⬜', 'Circle and Square'),
              kt('Circle', 'A round shape with no corners, like a ball.'),
              kt('Square', 'A shape with 4 equal sides and 4 corners, like a box.'),
              q('What shape is a ball?', ['Square', 'Circle', 'Triangle', 'Star'], 1),
              q('How many sides does a square have?', ['3', '4', '5', '6'], 1),
            ],
          },
          {
            title: 'Triangles and Stars',
            blocks: [
              h('More Shapes!'),
              p('A triangle has 3 sides and a star has 5 points!'),
              d('🔺⭐', 'Triangle and Star'),
              kt('Triangle', 'A shape with 3 sides and 3 corners.'),
              ex('A slice of pizza looks like a triangle!'),
              q('How many sides does a triangle have?', ['2', '3', '4', '5'], 1),
              q('What shape has 5 points?', ['Circle', 'Square', 'Star', 'Triangle'], 2),
              s('Shapes are fun! Look for shapes in things around you!'),
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'ps-animals', name: 'Animals', emoji: '🐾', color: 'from-amber-400 to-yellow-400',
    chapters: [
      {
        id: 'ps-ani-1', title: 'Farm Animals', emoji: '🐮',
        pages: [
          {
            title: 'Animals on the Farm',
            blocks: [
              h('Welcome to the Farm!'),
              p('Farms have many animals. Each animal makes a special sound!'),
              d('🐮🐷🐔🐴', 'Cow, Pig, Chicken, Horse'),
              ex('A cow says "Moo!", a pig says "Oink!", a chicken says "Cluck!"'),
              kt('Farm', 'A place where animals live and food is grown.'),
              q('What sound does a cow make?', ['Meow', 'Moo', 'Bark', 'Quack'], 1),
              q('What sound does a pig make?', ['Moo', 'Oink', 'Neigh', 'Baa'], 1),
            ],
          },
          {
            title: 'Animal Babies',
            blocks: [
              h('Baby Animals'),
              p('Just like humans, animals have babies too! Baby animals have special names.'),
              d('🐶🐱🐰', 'Puppy, Kitten, Bunny'),
              ex('A baby dog is a puppy. A baby cat is a kitten.'),
              q('What is a baby dog called?', ['Kitten', 'Puppy', 'Cub', 'Calf'], 1),
              q('What is a baby cat called?', ['Puppy', 'Kitten', 'Foal', 'Chick'], 1),
              s('Animals are our friends! Take care of them and be kind!'),
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'ps-body', name: 'Body', emoji: '👤', color: 'from-teal-400 to-cyan-400',
    chapters: [
      {
        id: 'ps-bod-1', title: 'My Body', emoji: '🧍',
        pages: [
          {
            title: 'Parts of My Body',
            blocks: [
              h('My Amazing Body'),
              p('Our body has many parts, and each part does something special!'),
              d('👀👃👄👂', 'Eyes, Nose, Mouth, Ears'),
              kt('Eyes', 'We use our eyes to see the world around us.'),
              kt('Ears', 'We use our ears to hear sounds.'),
              ex('I use my eyes to see, my ears to hear, my nose to smell, and my mouth to eat!'),
              q('What do we use to see?', ['Ears', 'Eyes', 'Nose', 'Hands'], 1),
              q('What do we use to hear?', ['Eyes', 'Ears', 'Mouth', 'Feet'], 1),
            ],
          },
          {
            title: 'Hands and Feet',
            blocks: [
              h('My Hands and Feet'),
              p('Our hands help us hold and touch things. Our feet help us walk and run!'),
              d('✋🦶', 'Hands have 5 fingers, feet have 5 toes'),
              ex('I have 5 fingers on each hand and 5 toes on each foot!'),
              q('How many fingers on one hand?', ['3', '4', '5', '10'], 2),
              s('Your body is amazing! Take care of it by eating healthy and exercising!'),
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'ps-weather', name: 'Weather', emoji: '☀️', color: 'from-sky-400 to-blue-400',
    chapters: [
      {
        id: 'ps-wea-1', title: 'Weather Words', emoji: '🌤️',
        pages: [
          {
            title: 'Kinds of Weather',
            blocks: [
              h('What is Weather?'),
              p('Weather is what the sky and air are like outside. It can be sunny, rainy, cloudy, or windy!'),
              d('☀️🌧️☁️🌬️', 'Sunny, Rainy, Cloudy, Windy'),
              kt('Sunny', 'When the sun is shining bright and the sky is clear.'),
              kt('Rainy', 'When water falls from the clouds.'),
              ex('On a sunny day, we can play outside. On a rainy day, we use an umbrella!'),
              q('What do we use when it rains?', ['Sunglasses', 'Umbrella', 'Fan', 'Sunscreen'], 1),
              q('What is it called when the sun is shining?', ['Rainy', 'Sunny', 'Cloudy', 'Windy'], 1),
              s('Weather changes every day! Look outside and see what the weather is like!'),
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'ps-days', name: 'Days', emoji: '📅', color: 'from-violet-400 to-purple-400',
    chapters: [
      {
        id: 'ps-day-1', title: 'Days of the Week', emoji: '📆',
        pages: [
          {
            title: 'The 7 Days',
            blocks: [
              h('Days of the Week'),
              p('There are 7 days in a week. Let\'s learn them all!'),
              d('📅', 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday'),
              ex('Monday is the first day of the school week. Sunday is a rest day!'),
              kt('Week', 'A week has 7 days, from Monday to Sunday.'),
              q('How many days are in a week?', ['5', '6', '7', '8'], 2),
              q('What day comes after Monday?', ['Sunday', 'Tuesday', 'Friday', 'Wednesday'], 1),
            ],
          },
          {
            title: 'Weekdays and Weekends',
            blocks: [
              h('School Days and Rest Days'),
              p('Monday to Friday are weekdays — we go to school! Saturday and Sunday are weekends — we rest and play!'),
              d('🏫', 'Monday-Friday: School! Saturday-Sunday: Play!'),
              q('Which day is a weekend?', ['Monday', 'Wednesday', 'Saturday', 'Thursday'], 2),
              s('A week has 7 days. Monday to Friday are for school, Saturday and Sunday are for family and fun!'),
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'ps-fruits', name: 'Fruits', emoji: '🍎', color: 'from-red-400 to-pink-400',
    chapters: [
      {
        id: 'ps-fru-1', title: 'Yummy Fruits', emoji: '🍌',
        pages: [
          {
            title: 'Fruits We Eat',
            blocks: [
              h('Fruits are Healthy!'),
              p('Fruits are sweet and healthy. They give us vitamins to make us strong!'),
              d('🍎🍌🍇🍊🍓', 'Apple, Banana, Grapes, Orange, Strawberry'),
              ex('A banana is yellow and long. An apple is round and red or green.'),
              kt('Vitamins', 'Good things inside fruits that keep our body healthy.'),
              q('What color is a ripe banana?', ['Red', 'Yellow', 'Blue', 'Green'], 1),
              q('Which fruit is round and usually red?', ['Banana', 'Apple', 'Grapes', 'Corn'], 1),
              s('Eat fruits every day to stay healthy and strong!'),
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'ps-transport', name: 'Transport', emoji: '🚗', color: 'from-orange-400 to-red-400',
    chapters: [
      {
        id: 'ps-tra-1', title: 'Vehicles', emoji: '🚙',
        pages: [
          {
            title: 'Vehicles We Ride',
            blocks: [
              h('How We Travel'),
              p('Vehicles help us go places! Some go on roads, some fly in the sky, and some sail on water.'),
              d('🚗✈️⛵', 'Car (road), Airplane (sky), Boat (water)'),
              ex('A car drives on roads. An airplane flies in the sky. A boat sails on water.'),
              kt('Vehicle', 'A machine that carries people or things from one place to another.'),
              q('What flies in the sky?', ['Car', 'Airplane', 'Boat', 'Train'], 1),
              q('What sails on water?', ['Bus', 'Airplane', 'Boat', 'Bicycle'], 2),
              s('Vehicles help us travel! Cars on roads, planes in the sky, boats on water!'),
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'ps-nature', name: 'Nature', emoji: '🌳', color: 'from-green-400 to-teal-400',
    chapters: [
      {
        id: 'ps-nat-1', title: 'The World Around Us', emoji: '🌍',
        pages: [
          {
            title: 'Sun, Moon, and Stars',
            blocks: [
              h('Up in the Sky'),
              p('The sun gives us light during the day. The moon and stars come out at night!'),
              d('☀️🌙⭐', 'Sun (day), Moon and Stars (night)'),
              ex('The sun is bright and hot. The moon is soft and cool. Stars twinkle at night!'),
              kt('Sun', 'The big bright star that gives us light and heat during the day.'),
              kt('Moon', 'The round light we see in the sky at night.'),
              q('What gives us light during the day?', ['Moon', 'Sun', 'Stars', 'Clouds'], 1),
              q('What do we see in the sky at night?', ['Sun', 'Moon and Stars', 'Rainbow', 'Nothing'], 1),
            ],
          },
          {
            title: 'Trees and Flowers',
            blocks: [
              h('Plants Around Us'),
              p('Trees give us shade and clean air. Flowers are beautiful and smell nice!'),
              d('🌳🌸', 'Tree (big and tall) and Flower (small and pretty)'),
              ex('Trees give us fruits to eat and wood to build. Flowers make gardens beautiful!'),
              ff('Did you know? A tree can live for hundreds of years — some trees are older than your grandparents!'),
              q('What do trees give us?', ['Toys', 'Shade and clean air', 'Candy', 'Water'], 1),
              s('Nature is wonderful! The sun lights our day, the moon lights our night, and trees give us fresh air!'),
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'ps-manners', name: 'Good Manners', emoji: '🤝', color: 'from-rose-400 to-pink-400',
    chapters: [
      {
        id: 'ps-man-1', title: 'Being Polite', emoji: '😊',
        pages: [
          {
            title: 'Magic Words',
            blocks: [
              h('Words That Show Respect'),
              p('There are special words we use to show respect and kindness. These are called "magic words"!'),
              kt('Please', 'Say this when you ask for something nicely.'),
              kt('Thank You', 'Say this when someone helps you or gives you something.'),
              kt('Sorry', 'Say this when you make a mistake or hurt someone.'),
              ex('Can I borrow your pencil, please? Thank you!'),
              ff('Did you know? Saying "thank you" makes both you and the other person feel happy!'),
              tip('Practice saying please, thank you, and sorry every day!'),
              q('What do you say when someone gives you a gift?', ['Nothing', 'Thank you', 'Give it back', 'Walk away'], 1),
              q('What do you say when you make a mistake?', ['Nothing', 'Sorry', 'Bye', 'Yes'], 1),
              s('Magic words: Please (asking), Thank you (receiving), Sorry (mistakes). Use them every day!'),
            ],
          },
          {
            title: 'Sharing and Caring',
            blocks: [
              h('Sharing is Caring'),
              p('When we share with others, we show that we care. Sharing makes everyone happy!'),
              ex('You can share your toys, your snacks, or your time with friends.'),
              tip('When you see someone who has no one to play with, invite them to join you!'),
              ff('Did you know? When you share, your brain releases happy chemicals that make you feel good!'),
              q('What is a good thing to do with friends?', ['Take their toys', 'Share with them', 'Ignore them', 'Push them'], 1),
              s('Sharing and caring make you a good friend. Always be kind to others!'),
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'ps-health', name: 'Healthy Habits', emoji: '💪', color: 'from-teal-400 to-green-400',
    chapters: [
      {
        id: 'ps-hea-1', title: 'Taking Care of Myself', emoji: '🪥',
        pages: [
          {
            title: 'Washing Hands',
            blocks: [
              h('Why We Wash Hands'),
              p('Washing our hands keeps us healthy. Germs are tiny things we cannot see, and they can make us sick!'),
              d('🧼', 'Soap + Water = Clean Hands!'),
              kt('Germs', 'Tiny things that can make us sick. We cannot see them!'),
              ex('Wash your hands before eating, after playing, and after using the bathroom!'),
              tip('Wash for 20 seconds — sing the ABC song while you wash!'),
              ff('Did you know? A single sneeze can send germs flying up to 6 meters!'),
              q('When should you wash your hands?', ['Never', 'Before eating', 'Only at night', 'Once a week'], 1),
              q('What do you need to wash hands?', ['Nothing', 'Soap and water', 'Only water', 'Towel only'], 1),
              s('Wash hands with soap and water: before eating, after playing, after using the bathroom! Sing ABC for 20 seconds!'),
            ],
          },
          {
            title: 'Brushing Teeth',
            blocks: [
              h('Keep Your Teeth Clean'),
              p('Brushing your teeth keeps them strong and healthy. Brush twice a day — morning and night!'),
              d('🪥', 'Toothbrush + Toothpaste = Clean Teeth!'),
              kt('Cavity', 'A small hole in your tooth caused by not brushing!'),
              ex('Brush in the morning and before bed. Visit the dentist for check-ups!'),
              tip('Brush for 2 minutes — brush every tooth, front and back!'),
              q('How many times a day should you brush?', ['Never', 'Once', 'Twice', 'Ten'], 2),
              q('What causes holes in teeth?', ['Brushing', 'Not brushing', 'Water', 'Milk'], 1),
              s('Brush twice a day, morning and night. Visit the dentist. Clean teeth = happy smile!'),
            ],
          },
          {
            title: 'Healthy Food and Exercise',
            blocks: [
              h('Eat Healthy, Stay Active'),
              p('Eating healthy food and exercising makes our body strong and happy!'),
              d('🥗🏃', 'Healthy food + Exercise = Strong body!'),
              kt('Healthy Food', 'Food that gives us energy and vitamins — fruits, vegetables, rice, fish.'),
              kt('Exercise', 'Moving your body to stay strong — running, jumping, playing!'),
              ex('Eat fruits and vegetables every day. Play outside and run around!'),
              ff('Did you know? Your heart beats about 100,000 times every day! Exercise makes it stronger!'),
              tip('Drink 8 glasses of water every day to stay healthy!'),
              q('Which is healthy food?', ['Candy', 'Apple', 'Chips', 'Soda'], 1),
              q('What is good for your body?', ['Sitting all day', 'Exercise', 'Eating candy', 'Not sleeping'], 1),
              s('Eat healthy (fruits, vegetables), exercise every day, and drink water. Strong body = happy you!'),
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'ps-time', name: 'Time', emoji: '⏰', color: 'from-indigo-400 to-blue-400',
    chapters: [
      {
        id: 'ps-tim-1', title: 'Telling Time', emoji: '🕐',
        pages: [
          {
            title: 'Morning, Afternoon, and Night',
            blocks: [
              h('Parts of the Day'),
              p('The day has different parts! In the morning, the sun comes up. In the afternoon, the sun is high. At night, the moon and stars come out.'),
              d('🌅☀️🌙', 'Morning (wake up), Afternoon (play), Night (sleep)'),
              kt('Morning', 'The time when we wake up and the sun rises.'),
              kt('Night', 'The time when the moon and stars appear and we go to sleep.'),
              ex('We eat breakfast in the morning, lunch in the afternoon, and dinner at night!'),
              q('When does the sun rise?', ['Night', 'Morning', 'Afternoon', 'Never'], 1),
              q('When do we sleep?', ['Morning', 'Afternoon', 'Night', 'Noon'], 2),
              s('The day has parts: Morning (wake up), Afternoon (play), Night (sleep)!'),
            ],
          },
          {
            title: 'The Clock',
            blocks: [
              h('Reading a Clock'),
              p('A clock has two hands. The short hand tells the hour and the long hand tells the minutes.'),
              d('🕐', 'Short hand = hour, Long hand = minutes'),
              kt('Hour', 'The big number the short hand points to.'),
              kt('Minute', 'What the long hand tells us.'),
              ex('When the short hand is on 3 and the long hand is on 12, it is 3 o\'clock!'),
              q('Which hand tells the hour?', ['Long hand', 'Short hand', 'Both hands', 'Neither'], 1),
              q('What time is it when both hands are on 12?', ['6 o\'clock', '12 o\'clock', '3 o\'clock', '9 o\'clock'], 1),
              s('Clock: short hand = hour, long hand = minutes. When both are on 12, it\'s 12 o\'clock!'),
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'ps-family', name: 'Family', emoji: '👨‍👩‍👧‍👦', color: 'from-pink-400 to-fuchsia-400',
    chapters: [
      {
        id: 'ps-fam-1', title: 'My Family', emoji: '👪',
        pages: [
          {
            title: 'Family Members',
            blocks: [
              h('Who is in My Family?'),
              p('A family is a group of people who love and care for each other. Families can be big or small!'),
              d('👨👩👧👦', 'Father, Mother, Sister, Brother'),
              kt('Father', 'The male parent. Some families call him Papa or Daddy.'),
              kt('Mother', 'The female parent. Some families call her Mama or Mommy.'),
              kt('Siblings', 'Brothers and sisters.'),
              ex('My family has my father, mother, and my little brother!'),
              q('Who is the male parent?', ['Mother', 'Father', 'Sister', 'Grandma'], 1),
              q('What do we call brothers and sisters?', ['Cousins', 'Siblings', 'Friends', 'Parents'], 1),
              s('A family loves and cares for each other. Father, Mother, and Siblings are family members!'),
            ],
          },
          {
            title: 'Grandparents',
            blocks: [
              h('Grandma and Grandpa'),
              p('Grandparents are the parents of our parents. They are older and very wise!'),
              d('👴👵', 'Grandfather and Grandmother'),
              kt('Grandfather', 'The father of your father or mother. Also called Lolo or Grandpa.'),
              kt('Grandmother', 'The mother of your father or mother. Also called Lola or Grandma.'),
              ex('My Lolo tells great stories and my Lola makes delicious food!'),
              q('Who is the father of your parents?', ['Uncle', 'Grandfather', 'Brother', 'Cousin'], 1),
              q('What do we call a grandmother in Filipino?', ['Lolo', 'Lola', 'Tita', 'Tito'], 1),
              s('Grandparents are the parents of our parents. Grandfather = Lolo, Grandmother = Lola!'),
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'ps-opposites', name: 'Opposites', emoji: '🔄', color: 'from-cyan-400 to-teal-400',
    chapters: [
      {
        id: 'ps-opp-1', title: 'Big and Small', emoji: '📏',
        pages: [
          {
            title: 'Opposite Words',
            blocks: [
              h('What are Opposites?'),
              p('Opposites are words that mean the opposite of each other. Like hot and cold, or big and small!'),
              d('🐘🐜', 'Elephant is BIG, Ant is SMALL'),
              kt('Big', 'Something that is large in size.'),
              kt('Small', 'Something that is tiny in size.'),
              ex('An elephant is big, but an ant is small! A mountain is big, but a pebble is small!'),
              q('What is the opposite of "big"?', ['Large', 'Small', 'Tall', 'Wide'], 1),
              q('Which is small?', ['Elephant', 'Whale', 'Ant', 'Mountain'], 2),
              s('Opposites are words that mean the reverse: big ↔ small, hot ↔ cold, up ↔ down!'),
            ],
          },
          {
            title: 'More Opposite Pairs',
            blocks: [
              h('More Opposites!'),
              p('There are many opposite word pairs. Let\'s learn some more!'),
              kt('Hot / Cold', 'Hot feels like the sun. Cold feels like ice.'),
              kt('Up / Down', 'Up is toward the sky. Down is toward the ground.'),
              kt('Fast / Slow', 'Fast is quick like a cheetah. Slow is like a turtle.'),
              kt('Happy / Sad', 'Happy is when you smile. Sad is when you cry.'),
              d('⬆️⬇️', 'Up (sky) and Down (ground)'),
              ex('A cheetah is fast, but a turtle is slow! The sun is hot, but ice is cold!'),
              q('What is the opposite of "hot"?', ['Warm', 'Cold', 'Cool', 'Spicy'], 1),
              q('What is the opposite of "fast"?', ['Quick', 'Slow', 'Speed', 'Stop'], 1),
              q('What is the opposite of "happy"?', ['Glad', 'Sad', 'Angry', 'Tired'], 1),
              s('More opposites: hot↔cold, up↔down, fast↔slow, happy↔sad. Opposites are everywhere!'),
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'ps-music', name: 'Music', emoji: '🎵', color: 'from-fuchsia-400 to-purple-400',
    chapters: [
      {
        id: 'ps-mus-1', title: 'Sounds and Rhythm', emoji: '🥁',
        pages: [
          {
            title: 'Making Sounds',
            blocks: [
              h('What is Sound?'),
              p('Sound is what we hear with our ears! Everything around us makes sounds — birds singing, cars honking, and music playing.'),
              d('🎵🎶', 'Sounds can be loud, soft, high, or low'),
              kt('Sound', 'What we hear with our ears. Sounds can be loud or soft, high or low.'),
              ex('A drum goes "boom!" A bell goes "ding!" A whistle goes "tweet!"'),
              q('What do we use to hear sounds?', ['Eyes', 'Ears', 'Nose', 'Mouth'], 1),
              q('Which animal sings?', ['Fish', 'Bird', 'Rock', 'Table'], 1),
              s('Sounds are everywhere! We hear them with our ears. Sounds can be loud, soft, high, or low!'),
            ],
          },
          {
            title: 'Clapping and Tapping',
            blocks: [
              h('Make Music with Your Body'),
              p('You can make music using your body! Clap your hands, stomp your feet, or snap your fingers to make a beat.'),
              d('👏🦶', 'Clap hands, stomp feet, snap fingers — make a beat!'),
              kt('Beat', 'A steady sound that repeats — like the ticking of a clock.'),
              kt('Rhythm', 'A pattern of beats. Like clap-clap-stomp, clap-clap-stomp!'),
              ex('Try this: clap-clap-stomp, clap-clap-stomp! That is a rhythm pattern!'),
              ff('Did you know? Your heart makes a beat too — it goes "thump-thump" about 80 times every minute!'),
              q('What is a steady repeating sound called?', ['Color', 'Beat', 'Smell', 'Taste'], 1),
              q('What can you use to make music?', ['Your hands', 'A book', 'A shoe', 'Nothing'], 0),
              s('You can make music with your body! Clap, stomp, and snap to make beats and rhythms!'),
            ],
          },
        ],
      },
      {
        id: 'ps-mus-2', title: 'Musical Instruments', emoji: '🎹',
        pages: [
          {
            title: 'Instruments We Play',
            blocks: [
              h('What is a Musical Instrument?'),
              p('A musical instrument is a tool we use to make music. There are many kinds — some you hit, some you blow, and some you pluck!'),
              d('🥁🎹🎺', 'Drum (hit), Piano (press), Trumpet (blow)'),
              kt('Musical Instrument', 'A tool used to make music.'),
              kt('Drum', 'You hit it with your hands or sticks to make a loud sound.'),
              kt('Flute', 'You blow into it to make a soft, pretty sound.'),
              kt('Guitar', 'You pluck the strings with your fingers to make music.'),
              ex('A drum goes "boom!" A flute goes "toot!" A guitar goes "strum!"'),
              q('What do you do to play a drum?', ['Blow', 'Hit', 'Pluck', 'Squeeze'], 1),
              q('What do you do to play a flute?', ['Hit', 'Blow', 'Pluck', 'Kick'], 1),
              q('What do you do to play a guitar?', ['Hit', 'Blow', 'Pluck', 'Squeeze'], 2),
              s('Instruments make music! Drums (hit), Flutes (blow), Guitars (pluck). Music is fun to make!'),
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'ps-occupations', name: 'Jobs', emoji: '👷', color: 'from-orange-400 to-amber-400',
    chapters: [
      {
        id: 'ps-occ-1', title: 'People Who Help Us', emoji: '🧑‍⚕️',
        pages: [
          {
            title: 'Helpers in Our Community',
            blocks: [
              h('Community Helpers'),
              p('Many people in our community help us every day! Let\'s learn about some of them.'),
              d('🧑‍⚕️🧑‍🏫🚒👮', 'Doctor, Teacher, Firefighter, Police Officer'),
              kt('Doctor', 'A person who helps us when we are sick and keeps us healthy.'),
              kt('Teacher', 'A person who helps us learn new things at school.'),
              kt('Firefighter', 'A person who puts out fires and keeps us safe.'),
              kt('Police Officer', 'A person who keeps our community safe and follows the rules.'),
              ex('When you are sick, a doctor helps you feel better. When you are at school, a teacher helps you learn!'),
              q('Who helps you when you are sick?', ['Teacher', 'Doctor', 'Firefighter', 'Baker'], 1),
              q('Who helps you learn at school?', ['Doctor', 'Teacher', 'Police', 'Chef'], 1),
              q('Who puts out fires?', ['Police', 'Doctor', 'Firefighter', 'Teacher'], 2),
              s('Community helpers: Doctor (sick), Teacher (learn), Firefighter (fires), Police (safety). They help us every day!'),
            ],
          },
          {
            title: 'More Jobs',
            blocks: [
              h('Other Jobs People Do'),
              p('There are many jobs people do to help our community!'),
              kt('Chef', 'A person who cooks delicious food at restaurants.'),
              kt('Farmer', 'A person who grows fruits, vegetables, and rice for us to eat.'),
              kt('Driver', 'A person who drives buses, jeepneys, and taxis to take us places.'),
              kt('Nurse', 'A person who helps the doctor take care of sick people.'),
              d('👨‍🍳🧑‍🌾🚌', 'Chef (cooks), Farmer (grows food), Driver (drives)'),
              ex('A chef makes yummy food. A farmer grows the rice we eat. A driver takes us to school in the jeepney!'),
              ff('Did you know? Farmers wake up very early — sometimes before the sun rises — to take care of their crops and animals!'),
              q('Who cooks food at a restaurant?', ['Farmer', 'Chef', 'Driver', 'Nurse'], 1),
              q('Who grows the food we eat?', ['Chef', 'Farmer', 'Driver', 'Police'], 1),
              q('Who helps the doctor?', ['Teacher', 'Nurse', 'Farmer', 'Chef'], 1),
              s('More helpers: Chef (cooks), Farmer (grows food), Driver (drives), Nurse (helps doctor). Every job is important!'),
            ],
          },
        ],
      },
    ],
  },
];

const preschoolExtraSubjects: TextbookSubject[] = [
  {
    id: 'ps-emotions', name: 'Emotions', emoji: '😊', color: 'from-amber-400 to-orange-400',
    chapters: [
      {
        id: 'ps-emo-1', title: 'Feelings', emoji: '😄',
        pages: [
          {
            title: 'Happy, Sad, and Angry',
            blocks: [
              h('What Are Feelings?'),
              p('Feelings are how we feel inside. Sometimes we feel happy, sometimes sad, and sometimes angry. All feelings are okay!'),
              d('😄😢😠', 'Happy, Sad, Angry — all feelings are normal'),
              kt('Happy', 'Feeling good and joyful, like when you play with friends.'),
              kt('Sad', 'Feeling down or unhappy, like when you miss someone.'),
              kt('Angry', 'Feeling upset or mad, like when someone takes your toy.'),
              ex('You feel happy when you get a gift. You feel sad when you lose a toy. You feel angry when someone is mean.'),
              q('How do you feel when you get a gift?', ['Angry', 'Happy', 'Sad', 'Scared'], 1),
              q('Is it okay to feel sad sometimes?', ['No, never', 'Yes, all feelings are okay', 'Only happy is okay', 'Only angry is okay'], 1),
              s('All feelings are okay! Happy, sad, and angry are normal. Talk about your feelings with someone you trust!'),
            ],
          },
          {
            title: 'Scared and Surprised',
            blocks: [
              h('More Feelings'),
              p('There are many more feelings! Let\'s learn about being scared and surprised.'),
              kt('Scared', 'Feeling afraid, like when you hear a loud noise or see something new.'),
              kt('Surprised', 'Feeling amazed or shocked, like when you get an unexpected gift.'),
              d('😱😲', 'Scared (afraid) and Surprised (amazed)'),
              ex('You feel scared during a thunderstorm. You feel surprised at a birthday party!'),
              tip('When you feel scared, talk to a grown-up you trust. They can help you feel safe!'),
              q('How do you feel during a thunderstorm?', ['Happy', 'Scared', 'Bored', 'Angry'], 1),
              q('How do you feel at a surprise party?', ['Sad', 'Surprised', 'Angry', 'Tired'], 1),
              s('Scared (afraid) and Surprised (amazed) are normal feelings too. Talk to a grown-up when you feel scared!'),
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'ps-community', name: 'Community Places', emoji: '🏘️', color: 'from-sky-400 to-indigo-400',
    chapters: [
      {
        id: 'ps-com-1', title: 'Places in My Town', emoji: '🏥',
        pages: [
          {
            title: 'Important Places',
            blocks: [
              h('Places We Visit'),
              p('Our community has many important places. Each place helps us in a different way!'),
              d('🏥🏫🏪🚒', 'Hospital, School, Store, Fire Station'),
              kt('Hospital', 'A place where doctors and nurses help sick people get better.'),
              kt('School', 'A place where teachers help us learn new things.'),
              kt('Store', 'A place where we buy food, clothes, and things we need.'),
              kt('Fire Station', 'A place where firefighters wait to help put out fires.'),
              ex('When you are sick, you go to the hospital. When you want to learn, you go to school!'),
              q('Where do you go when you are sick?', ['Store', 'Hospital', 'School', 'Park'], 1),
              q('Where do you buy food?', ['Fire station', 'Store', 'Hospital', 'School'], 1),
              q('Where do firefighters work?', ['School', 'Store', 'Fire Station', 'Hospital'], 2),
              s('Community places: Hospital (sick people), School (learning), Store (buying), Fire Station (firefighters). Each place helps us!'),
            ],
          },
          {
            title: 'The Park and Library',
            blocks: [
              h('Fun and Learning Places'),
              p('Some places in our community are for fun and learning!'),
              d('🌳📚', 'Park (play and exercise) and Library (read and borrow books)'),
              kt('Park', 'A place with trees, grass, and playground equipment where we play and exercise.'),
              kt('Library', 'A place full of books we can read and borrow for free!'),
              ex('At the park, you can run, swing, and slide. At the library, you can read storybooks!'),
              ff('Did you know? The biggest library in the world has over 170 million books and items!'),
              tip('Always return library books on time so other children can read them too!'),
              q('Where can you play on swings and slides?', ['Library', 'Park', 'Store', 'Hospital'], 1),
              q('Where can you borrow books for free?', ['Park', 'Store', 'Library', 'Fire Station'], 2),
              s('Parks are for playing and exercising. Libraries are for reading and borrowing books. Both are free to use!'),
            ],
          },
        ],
      },
    ],
  },
];
