---
layout: post
title: "Sprint 16 Update (Week 13)"
subtitle: "Playtest 7 Prep, IGM Showcase Results"
date: 2022-4-19 12:00:00
author: Trent
background: '/img/post-covers/spring-13-cover.png'
tags: 
    - Weekly Post
---

With the semester wrapping up the weeks are starting to get really really busy. This past week we had a lot of stuff going on so progress is a little lighter than some other weeks. First, on Thursday the 14th, the Capstone class presented our games to representatives from Rockstar Games once again, giving them updates on the pitches they saw back in the spring semester. They seemed pretty impressed with our progress and the visuals of the game, mostly limiting their comments to critiques about the lighting in the game. On the night of Friday the 15th, we conducted our 7th playtest for faculty and students in IGM, and there were also a few people from outside the college that were invited, so we spent quite a bit of time prepping for that as well. That also seemed to go pretty well, with most people being pretty impressed with our game. However, we did find some pretty obvious bugs during the playtest that we’re hoping to squash before the final build. And on Saturday, Kyle attended the IGM Showcase as our representative because we were selected as finalists in that competition. To recap, the IGM Showcase is an award show for student games from the Department of Interactive Games and Media at RIT. We ended up winning an award in the Showcase for Tehnical Excellence, so we’re pretty pumped about that. Now, we move on to prepping for Imagine RIT, another expo, this one held at RIT this Saturday, where we’ll be presenting and testing our game. 

As for actual progress this past week, we were still able to get quite a bit done. John finished updating the UI for gaining a new sword so it’s now more noticeable. Kyle made updates to the opening cutscene and the text on it. I also made some UI updates in the pause menu and the win scene. Nick continued working on the boss, connecting the behaviors and making them more than just random, and Rudy worked more on the camera phasing shader.

Our artists are starting to wrap up now so there isn’t as much art progress to report, but they’re still doing great work. Sofia created some initial sketches for the second planned cutscene I mentioned last week, and Kesavan created some new visual effects for the boss fight and the sapphire sword. Hopefully, we’ll be able to implement all of this quickly before our final build, if not before Imagine. 

And with that, we’ll move on to detailed progress:

## Art

<div class="row my-5">
    <div id="carouselExampleIndicators" class="carousel slide shadow rounded" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-block mx-auto" src="/img/posts/week13-spring/26_FallenBoss.png"
                    alt="Fallen Boss Sketch">
                <div class="carousel-caption d-none d-md-block">
                    <p>Fallen Boss Sketch</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block mx-auto" src="/img/posts/week13-spring/26_ArrivingInAmethyst.png"
                    alt="Arriving in Amethyst Village Sketch">
                <div class="carousel-caption d-none d-md-block">
                    <p>Arriving in Amethyst Village Sketch</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block mx-auto" src="/img/posts/week13-spring/26_MentorSpeaksToBoss.png"
                    alt="Mentor Speaks to Boss Sketch">
                <div class="carousel-caption d-none d-md-block">
                    <p>Mentor Speaks to Boss Sketch</p>
                </div>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</div>

<ul class="section-body mt-4">
    <li>Sofia started working on creating some initial sketches for our second planned cutscene before the boss fight</li>
</ul>

<!-- 16:9 aspect ratio -->
<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="/img/posts/week13-spring/26_AmethystSwordTrail.mp4" allowfullscreen></iframe>
</div>

<!-- 16:9 aspect ratio -->
<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="/img/posts/week13-spring/26_BossDash.mp4" allowfullscreen></iframe>
</div>

<!-- 16:9 aspect ratio -->
<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="/img/posts/week13-spring/26_SapphireDash.mp4" allowfullscreen></iframe>
</div>

<ul class="section-body mt-4">
    <li>Kesavan created some new VFX for the boss fight and the sapphire’s dash ability</li>
</ul>

## Design

<ul class="section-body mt-4">
    <li>Kyle made more updates to cutscene text</li>
</ul>

## Development

<ul class="section-body mt-4">
    <li>John finished the sword switching UI updates so that there’s more notice when the player gets a new sword form</li>
    <li>John also started working on implementing new sound effects for things</li>
    <li>Kyle updated the opening cutscene in the game to the new sketches</li>
    <li>Nick finished the boss’ enemy spawning behavior and added in VFX for the boss’ attacks</li>
    <li>Rudy finished the initial implementation of the camera phasing shader and worked on fixing some bugs in it</li>
    <li>I updated the pause menu in the game, bringing its style more inline with the rest of the UI in the game</li>
    <li>I also updated the text in the win scene to actually go with the new story in the game</li>
    <li>Kyle made some more changes to the swords stats, trying to balance them against the enemies better</li>
    <li>I finished an initial implementation of using the custom topaz attack animations, there are 3 so they should ideally play in a series</li>
    <li>Nick updated the implementation of the boss’ behaviors, connecting them in a more intelligent way to make them more complex</li>
</ul>

## Management

<ul class="section-body mt-4">
    <li>Kyle recorded gameplay footage for our class’ meeting with Rockstar on Thursday</li>
    <li>I created a new survey for our 7th playtest</li>
    <li>Kyle attended the IGM Showcase as our team’s representative</li>
</ul>

## Documentation

<ul class="section-body mt-4">
    <li>Everyone worked some on individual research, trying to make more progress on it as much as possible</li>
</ul>

<br>

That’s it for now! 

<br>