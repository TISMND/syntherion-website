---
title: "Splice saved the game"
postType: origins
date: 2026-05-09
order: 3
published: true
cover: /assets/posts/2026-05-09-splice-saved-the-game/splice-stacks-card.png
coverAlt: "Three rows from the Splice mobile Stacks view — a yellow DRUMS loop, a purple BASS loop, and a pink SYNTH loop, each with a small album-art thumbnail."
---

This was within the first week of the idea of the game. I remembered [those Mario Paint videos](https://www.youtube.com/watch?v=AbO1YtoUqM8&list=PL4IZq7fxXgMp702qe0LVqBXcG_12P6G7t) and thought, everyone will want to do this for their ships. They could place individual notes, make musical lasers, it would be great...

The night I got that tool working was one of the saddest of development, and almost killed the game.

I had heard and imagined amazing synthwave music in my head, but the program I made was going to put work on players to compose utterly discordant garbage that they were forced to hear on repeat. I briefly thought, "Maybe I need to be a musician first," but put that aside because it was too far a leap, even for me.

## The AI music detour

Yes, I did look into AI music generators. Suno and Udio both got a try. But even those, when you have sounds in your head that excite you and then you try to tell AI to generate them, it's just... bad. It wasn't practical, it wasn't good, and artists would probably hate me for it anyway.

## Then I found Splice

My first reaction, even there, was, "I wish this site didn't suck so bad."

![The Splice website's main search page. A huge headline reading "Find your sound. Start creating." sits above a single grey search bar suggesting "Epic string swell," with four genre chips below it. Lots of white space. Not a lot of clues.](/assets/posts/2026-05-09-splice-saved-the-game/splice-search.png)

But basically that was on me, because I was reading its capabilities all wrong. Luckily, and I do mean super lucky I bothered, I downloaded their mobile app and discovered the Stacks feature.

![The Splice mobile app's Stacks view. A stack called "FOX Ruffled Hay" tagged Synthwave, D# min, 120 BPM. A vertical column of colorful loop tiles — DRUMS, BASS, SYNTH, BASS, KEYS, GUITAR, BASS, CHORDS — each with its own album art and a small description.](/assets/posts/2026-05-09-splice-saved-the-game/splice-stacks.png)

It was a total dream. Loops, or what I didn't realize was called a DAW until much later, could be set to a unified BPM and key.

The dream was back alive, and I moved so fast to pick, upload, and implement this beautiful music in a game. I moved so fast, that now I find myself imagining conversations with people where they ask, "Why did you choose 120 BPM and the key of D-sharp minor?" to which, instead of having an answer of creative intention, I'll just have to say, "idk I was like crazy excited."

## What's done, what's next

I have dreams of making in-game environments that trigger key changes and tempo changes, but I also know I tend to get carried away adding new features instead of shipping a solid base of them. Gotta stay focused with this one.

As of this writing, I've made 31 stacks of 8... so 248 tracks to work with. Claude wrote a .py that automatically unzips, renames, and sorts them by instrument. The full stacks don't always sound great, because sometimes I'm looking for variations on something specific. For example, enemies from the verse called "Bioloom" need to have weapons that sound more orchestral. Typically strings. So sometimes I'll get a stack together that sounds nothing like synthwave.

My hope is that, eventually, as much as it's helped, I'll look back on Splice as the early, kickstart days, before I started collaborating directly with synthwave and darkwave artists. Instead of building stacks that serve the utility of bringing me more loops to work with, I'll be able to have artists build complementing sounds that were destined to be together... in space.

-Tim