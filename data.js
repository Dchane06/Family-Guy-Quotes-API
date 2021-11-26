const quotes = [
    {
        quote: 'Shut up Meg.',
        person: 'Peter Griffin'
    },
    {
        quote: "I guess we’ve learned that no matter who you are or where you come from, life is a terrible thing.",
        person: 'Peter Griffin'
    },
    {
        quote: '“Brian, there’s a message in my alphabet [cereal]. It says ‘oooooo.’”',
        person: 'Peter Griffin'
    },
    {
        quote: '“Well, you guys, we did it. We finally went to a restaurant without somebody yelling at us and the rest of the place applauding them.”',
        person: 'Peter Griffin'
    },
    {
        quote: '“Let’s go drink until we can’t feel feelings anymore.”',
        person: 'Peter Griffin'
    },
    {
        quote: '“What? Gosh, it’s not like the internet to go crazy about something small and stupid.”',
        person: 'Peter Griffin'
    },
    {
        quote: '“I got drunk and then got my picture taken. So that way, when I get pulled over for drunk driving I look the same as on my license.”',
        person: 'Peter Griffin'
    },
    {
        quote: '“I can be just as non-competitive as anybody. Matter of fact, I’m the most non-competitive. So, I win.”',
        person: 'Peter Griffin'
    },
    {
        quote: '“There’s always been a lot of tension between Lois and me. And it’s not so much that I want to kill her, it’s just, I want her not to be alive anymore.”',
        person: 'Stewie Griffin'
    },
    {
        quote: '“You know, I always thought I’d make a great Florida whore.”',
        person: 'Stewie Griffin'
    },
    {
        quote: '“Brian, I think we can get John Mayer to stop tweeting again, but we all gotta work together.”',
        person: 'Stewie Griffin'
    },
    {
        quote: '“Damn you, vile woman! You’ve impeded my work since the day I escaped from your wretched womb.”',
        person: 'Stewie Griffin'
    },
    {
        quote: '"Aw youre crazy bitch I didnt say that bitch',
        person: 'Stewie Griffin'
    },
    {
        quote: '“You. Fetch me my copy of the Wall Street Journal. You two, fight to the death.”',
        person: 'Stewie Griffin'
    },
    {
        quote: '“I love God. He’s so deliciously evil.”',
        person: 'Stewie Griffin'
    },
    {
        quote: '“Am I to spend the entire day wallowing around in my own feces? A little service here!”',
        person: 'Stewie Griffin'
    },
    {
        quote: '“So you can cook your own damned turkey, wrap your own damned presents — and while you’re at it, you can all ride a one-horse open sleigh to hell!”',
        person: 'Lois Griffin'
    },
    {
        quote: '“Yes, Tina Fey, you’re better than Jesus.”',
        person: 'Lois Griffin'
    },
    {
        quote: '“Here’s a little tip: If your instinct tells ya to do somethin’, don’t do it. If your instinct tells ya not to do somethin’, it’s probably the right thing to do.”',
        person: 'Lois Griffin'
    },
    {
        quote: '“You can’t sell me, you fat son of a bitch!”',
        person: 'Meg Griffin'
    },
    {
        quote: '“You could kill all the girls who are prettier than me.”',
        person: 'Meg Griffin'
    },
    {
        quote: '“Fine, but this time if a boy calls, please don’t tell him I’m wrist-deep in poopy.”',
        person: 'Meg Griffin'
    },
    {
        quote: '“That show just furthers the stereotype that George Lopez is funny!”',
        person: 'Chris Griffin'
    },
    {
        quote: '“What good is mining ‘nose gold’ if I can’t share it with the townspeople?”',
        person: 'Chris Griffin'
    },
    {
        quote: '“Oh yeah? Well, you’re hogging all the UGLY!”',
        person: 'Chris Griffin'
    },
    {
        quote: '“I don’t have to listen to you, you’re a dog, you don’t have a soul!”',
        person: 'Chris Griffin'
    },
    {
        quote: '“Hey, how about a little less questions and a little more shut the hell up?”',
        person: 'Brian Griffin'
    },
    {
        quote: '“Whose leg do you have to hump to get a dry martini around here?”',
        person: 'Brian Griffin'
    },
    {
        quote: '“You know what, Stewie? If you don’t like it, go on the internet and complain.”',
        person: 'Brian Griffin'
    },
    {
        quote: '“I’m not drunk! I just have speech impediment… and a stomach virus… and an inner ear infection.”',
        person: 'Brian Griffin'
    },
    {
        quote: '“We can make this work, like couples who meet on Craigslist.”',
        person: 'Brian Griffin'
    },
    {
        quote: "You'd better watch who you're calling a child, Lois. Because if I'm a child, you know what that makes you? A pedophile. And I'll be damned if I'm gonna be lectured by a pervert.",
        person: "Peter Griffin"
    },
    {
        quote: 'Giggity giggity giggity',
        person: 'Quagmire'
    },
    {
        quote: 'Woah, woah, woah, woah, woah, woah, woah, woah, woah, woah, woah, woah... Lois, this is not my Batman glass.',
        person: 'Peter Griffin'
    },
    {
        quote: 'Mum mum mum mum mummy mummy mummy mummy Lois... Hi',
        person: 'Stewie Griffin'
    },
    {
        quote: "Hello, 911? It's Quagmire. Yeah it's caught in the window this time.",
        person: "Quagmire"
    },
    {
        quote: 'The life of the wife is ended by the knife.',
        person: 'Stewie Griffin'
    },
    {
        quote: 'Giggity giggity goo',
        person: 'Quagmire'
    },
    {
        quote: "I've got an idea--an idea so smart that my head would explode if I even began to know what I'm talking about.",
        person: 'Peter Griffin'
    },
    {
        quote: "So, is there any tread left on the tires? Or at this point would it be like throwing a hot dog down a hallway?",
        person: "Stewie Griffin"
    },
    {
        quote: "Hey, mother, I come bearing a gift. I'll give you a hint. It's in my diaper and it's not a toaster.",
        person: "Stewie Griffin"
    },
    {
        quote: "Eh, you're overreacting Lois and you can't spell overreacting without ovary... 'cause you're a girl.",
        person: "Peter Griffin"
    },
    {
        quote: 'Excuse me, is your refrigerator running? Because if it is, it probably runs like you - very homosexually.',
        person: 'Peter Griffin'
    },
    {
        quote: 'Buttscratcher! Buttscrather! Buttscratcher!',
        person: 'Peter Griffin'
    },
    {
        quote: "Alright everyone but Chris keep your pants on and let's figure this out.",
        person: 'Herbert the Pervert'
    },
    {
        quote: "No Quagmire, we're not esupposed to!",
        person: "Peter Griffin"
    },
    {
        quote: "Her fists are so dangerous she's not allowed to be a lesbian.",
        person: "Brian Griffin"
    },
    {
        quote: "Lois, men aren't fat, only fat women are fat.",
        person: "Peter Griffin"
    },
    {
        quote: "NONONONONONO!",
        person: "Cleveland Brown"
    },
    {
        quote: "Hey there, you like popscicles? I got a whole cellar full of popscicles.",
        person: "Herbert the Pervert"
    },
    {
        quote: "What the deuce?",
        person: "Stewie Griffin"
    },
    {
        quote: "I'd leave my ass behind if it wasn't so perfectly attached to my sternum.",
        person: "Peter Griffin"
    },
    {
        quote: "Hello there, Kyle. You like nice today. I see you're wearing your big shorts with the baggy leg holes that flutter so carelessly in the breeze. Would like to come in for a glass of wine and a cupcake?",
        person: "Herbert the Pervert"
    },
    {
        quote: "Been working on that novel huh? Been working on that for three years now right? Gonna, gonna get that done? You know that novel, that novel you where making where friends become enemies and enemies become friends. You gonna get that done right?",
        person: "Stewie Griffin"
    },
    {
        quote: "I can't eat this it'll go straight to my vagina. That what girls worry about right? Having big vaginas?- Stewie",
        person: "Stewie Griffin"
    }
];

module.exports = {
    quotes
  };