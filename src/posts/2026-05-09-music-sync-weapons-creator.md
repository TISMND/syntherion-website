---
title: "Building Music-Based Weapons"
postType: tools
date: 2026-05-09
order: 4
published: false
cover: /assets/posts/2026-05-09-music-sync-weapons-creator/weapons-creator-waveform.png
coverAlt: "The weapons creator with the Laser Turret loaded. A waveform fills the upper half of the screen, with red trigger markers placed along it. Snap controls (1/4, 1/8, 1/16, 1/32) sit below."
---

After [Splice](/devlog/2026-05-09-splice-saved-the-game/), the memory is hazy, but I think this was one of the first tools I made. That was back in March, and I'm here catching up on blogging in mid May. I can say for certain that it is the first tool I made that still gets heavy use today. 

I gotta say, every time I open this screen I think of how awesome it is that I get to sit and blend my favorite genre of music with sci-fi gadgets.

## Pure vibes guide the process

The process itself is, to me, exactly what it should be. I click through my current selection of organized, unused loops, find one with potential or one that strikes the right emotion, and then all the visuals and stats are based on the music, not the other way around.

I sit and listen as I click from the waveform-and-music weapon builder over to the projectiles or beams, and let pure vibes guide the process. Initially, if I heard a longer sustained note I would think, "Well obviously this needs to be a beam," but since then I've found some of my favorite weapons are short beam bursts.

The first of these was a weapon unceremoniously called `enemy_double_green`. (Non-player-facing weapons don't get very creative names). It still delights me every time I see and hear it. Since then I've made some bangers like the "Violetess" beam that make me equally happy.

<figure>
  <video controls preload="metadata" playsinline src="https://pub-e52e55062eab45daaa777a6bec1f03ca.r2.dev/Syntherion_weapon_creator.mp4"></video>
  <figcaption>▶ See and hear it in action. Click play, audio on.</figcaption>
</figure>

That visual design process, and the preview window you see, will be covered in a later post about the insane, fist-pounding-on-desk frustration I had getting preview and audition windows to match what was actually rendered in-game. Hard lessons learned there, but that's another story.

## Shocked by how well it worked

You might expect me to say that the first iteration of the waveform trigger screen was buggy, but honestly, I was blown away by how quickly it came together. It wasn't buggy, but it was feature-poor, mostly because I didn't know what I would need. Things like sliders that allow some music loops to fade in and up, in case they have those long opening notes that don't sound good jumping straight into the action as soon as the player pulls the trigger.

Waveform generation was a Claude one-shot, and it correctly assumed I needed the triggers to snap to beat markers. It also just assumed I would want thicker lines dividing each measure. Little quality-of-life things came later. A ruler on the top that I could click to move the play cursor if I wanted to hear or see a specific section of the track. Also: Buttons that auto-populated rapid-fire triggers, because sometimes it's easier to take triggers away than place them all by hand.

<blockquote class="pullquote">Hilariously, for about a month of development I was placing each trigger by hand. I was thinking of it as a sign that this was a labor of love, but really it was a sign of me being stupid.</blockquote>

## Ironic laziness

I've discovered a super weird, ironic kind of laziness during this process. It's being too lazy to prompt Claude to build the thing that would make life way easier. Maybe that's not laziness. Maybe it's just prioritizing progress over improving your own quality of life. Like rooting through a bag of freshly cleaned clothes, trying to find what you want to wear. Putting them away in their drawers would make finding them so much easier, but making things easier requires time and effort.

I wonder if real devs have this problem.

![The same weapons creator with the Stats tab open. Damage, beam DPS, beam fasthrough, beam effects per shot, splash damage settings, enemy damage test, and DPS readouts dominate the right side.](/assets/posts/2026-05-09-music-sync-weapons-creator/weapons-creator-stats.png)

Of all the screens I stare into, this one remains a total playhouse. In the coming posts, I'll get more into things that were Hell on Earth.
