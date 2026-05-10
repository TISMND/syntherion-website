---
title: "Did you use AI?"
postTypes: [origins, tools]
date: 2026-05-09
order: 2
published: false
cover: /assets/posts/2026-05-09-did-you-use-ai/claude-code-diff.png
coverAlt: "A Claude Code terminal session showing a diff: three lines of a code comment removed in red, three lines added in green, with the surrounding JavaScript visible above and below."
---

"Did you use AI?"

I did, although maybe not how you're picturing it.

Syntherion, even in the rough form it's currently in, could not possibly have been directly vibe-coded. At the same time, it could not possibly have been made without vibe-coding. Claude Code, if you're wondering, is the specific tool.

Let me break it down.

## The music

The music is from [Splice](https://splice.com). To my knowledge, those are all human artists getting paid by my tiny subscription and credit purchases. I'll write more about Splice in the next post; the short version is that Splice is the reason this game exists in its current form. Same answer for SFX. Splice.

## The visuals

Not built from models trained on artists' work. They're all code. Ships, aliens, and definitely the outrun-style grids are shaders, procgen, and a lot of GDScript. Now... could I have written ships purely in code myself? Absolutely not. Thank you, Claude Code. 

Claude plays a heavy role in writing the code that draws the visual assets. It's a process of audition, re-audition, select, build tuning tools, iterate, iterate. If you're wondering how much of the design creativity is mine versus Claude's, Claude definitely plays a role, but it also often generates disembodied grey shapes.

Using this technique, I noticed Claude does inherently understand how to write and place things like "cockpit," "wings," etc. Once a few were made, I could say things like "make one like the Phantom, but sleeker," and it gets me there, roughly. So, code-based and not artist-trained. You could call this a grey area if you view software engineers as artists, which in some ways they are.

## What I knew before LLMs

Here's where my coding background actually sits. I took a class and learned basic C++ in 2022, and spent about a year applying that to my own little embedded systems projects. Starting with the classic Arduino blinking an LED up to a GPS-guided RC car. In the grand scheme, the code was all still early-foundation stuff. Above high school level for sure but not like... far enough above that I don't use high school as a reference point.

After a year of that, I discovered that ChatGPT could handle a lot of the lifting, but it was still a workflow of copying and pasting code into the Arduino IDE and watching it fail much of the time.

Now? Lord no, I don't touch any code. Not even a humble stray bool.

## "AI is not the tool. It's the tool that builds the tool."

I recently started watching Halt and Catch Fire, and there's a Joe MacMillan line that I keep coming back to:

<blockquote class="pullquote">"Computers aren't the thing. They're the thing that gets you to the thing."</blockquote>

<div class="embed-yt">
  <iframe src="https://www.youtube.com/embed/QeY_5n75zPM" title="Halt and Catch Fire — Computers aren't the thing" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
</div>

If I were going to update that quote for the way I work right now, it would be:

<blockquote class="pullquote pullquote--thesis">"AI is not the tool. It's the tool that builds the tool."</blockquote>

That's largely been my approach to building Syntherion, and also, I think, a reason to write this blog. Part because I'm proud of the tools we've made, part because it might be helpful to other indie devs, and part because, honestly, there are people out there who can tell me better ways to do it. (Ahem... [Discord]({{ site.social.discordInvite }}).)

A lot of these posts are going to be deep dives on the dev tools, plus origins and whatever flights of thought I have along the way. For now, here's the menu screen that shows just how many tools have been built directly into the game. They don't ship with public builds.

<figure>
  <img src="/assets/posts/2026-05-09-did-you-use-ai/dev-menu.png" alt="The synthwave-grid dev menu, showing buttons for NPC Ships, Ship Cosmetics, UI, Component Creator, Component Manager, Encounters, Pickups, Clusters, Stages, Haven Ships, Boss Sketcher, Boss Editor, SFX, VFX, Environments, Backgrounds, Music, Buildings, Player Ships, Portals, and Marketing. A glowing planet and ring float to the right.">
  <figcaption>The dev studio menu. Every button is a tool. Most have sub-tools.</figcaption>
</figure>

## ...and did Tim even write this?

I just spent 800 words telling you Claude wrote a lot of code. Fair second question: did Claude write this post?

Absolutely not, I did. If you read my first post, you know that I've written a boat-loada-books, both for myself and for paying clients. I've learned to type fast enough that, I kid you not, anyone sitting next to me at school comments on it. Writing is fun for me. It's natural and it's easy.

That said, do I run my thoughts through Claude for an editing pass? You betcha. Did Claude wire-up all the embedded content and special formatting? Yes, because this is not the kind of writing I enjoy: 

"...figure> img src="/assets/posts/2026-05-09-did-you-use-ai/dev-menu.png" alt=..."

But rest assured: if you're reading these posts, you're reading my words.

If you're playing Syntherion, you're playing a game that I created. I didn't hover over my desk to write a prompt and let a Claude run for a couple days. At the timing of this writing I am, at bare-bones-minimum, 200 hours deep into labor on this thing, and I've barely scratched the surface of what I want to do.

Note, though, that I didn't say "you're playing my game". That's because I honestly hope you'll join the community, and feel like in some ways it's yours too. 


