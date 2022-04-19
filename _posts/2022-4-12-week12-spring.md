---
layout: post
title: "Sprint 15 Update (Week 12)"
subtitle: "Enemy Progress, UI Updates"
date: 2022-4-12 12:00:00
author: Trent
background: '/img/post-covers/spring-12-cover.png'
tags: 
    - Weekly Post
---

With our time left in the semester really getting down to the wire, we decided to make this sprint our final development sprint. Any progress after this sprint should be limited to bug fixing or implementing art assets given to us by our artists. The reasonin for this is mostly just because we have so many updates to do in our Design Doc and other parts of documentation, and we want to make sure we have those done since we’ll need those to graduate too. But for now, we continue to make progress since we have one last playtest on Friday the 15th. We want to get as much as possible in, especially of the things that really should be tested at least once before we submit our final build for the semester. What a lot of this came down to was finishing up the work on enemy animations and making more UI updates. Nick also continued to make updates to the boss. It’s starting to really feel like a end-game boss now and we’re pretty happy with how it behaves. In addition to that, we also started working on updating our documentation this week. Just because we’re saving time for it at the end, doesn’t mean we can’t start now. 

As usual, our artists also made some really great progress this week. Kesavan made more updates to the boss’ explosion VFX. Sofia continued work on the opening cutscene, coloring the final few scenes that were left. This should be the final batch for now, as we’re hoping she can finish another series of sketches before end of the semester for a second “cutscen.” Xy finished working on the boss model this week as well, and Michal updated the Topaz attack animations, so next week we’ll be able to hopefully start getting those in. 

With that, let’s move on to another detailed report:

## Art

<div class="row my-5">
    <div id="carouselExampleIndicators" class="carousel slide shadow rounded" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-block mx-auto" src="/img/posts/week12-spring/25_ColoredMentorLeaving.png"
                    alt="Colored Mentor Leaving Sketch">
                <div class="carousel-caption d-none d-md-block">
                    <p>Colored Mentor Leaving Sketch</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block mx-auto" src="/img/posts/week12-spring/25_ColoredVillageScene.png"
                    alt="Colored Village Scene Sketch">
                <div class="carousel-caption d-none d-md-block">
                    <p>Colored Village Scene Sketch</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block mx-auto" src="/img/posts/week12-spring/25_ColoredEnemiesAttack.png"
                    alt="Colored Enemies Attack Sketch">
                <div class="carousel-caption d-none d-md-block">
                    <p>Colored Enemies Attack Sketch</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block mx-auto" src="/img/posts/week12-spring/25_ColoredRunningToShrine.png"
                    alt="Colored Running to Shrine Sketch">
                <div class="carousel-caption d-none d-md-block">
                    <p>Colored Running to Shrine Sketch</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block mx-auto" src="/img/posts/week12-spring/25_BossModel.png"
                    alt="Boss Model">
                <div class="carousel-caption d-none d-md-block">
                    <p>Boss Model</p>
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
    <li>Sofia continued coloring the sketches for the opening cutscene, this should be the final batch for now</li>
    <li>Xy finished working on the boss model, also texturing it</li>
</ul>

<!-- 16:9 aspect ratio -->
<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="/img/posts/week12-spring/25_BossExplosionVFX.mp4" allowfullscreen></iframe>
</div>

<ul class="section-body mt-4">
    <li>Kesavan updated the boss explosion VFX again</li>
</ul>

<!-- 16:9 aspect ratio -->
<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="/img/posts/week12-spring/25_TopazAttack.mp4" allowfullscreen></iframe>
</div>

<ul class="section-body mt-4">
    <li>Michal updated the custom attack animation for the topaz sword again</li>
</ul>

## Design

<ul class="section-body mt-4">
    <li>Kyle worked on updating more of the cutscene information, adding details for a second cutscene before the boss fight</li>
</ul>

## Development

<ul class="section-body mt-4">
    <li>John continued working on enemy animations and breakable enemies, finally getting them working towards the end of the week</li>
    <li>Kyle finished up the last of the healthbar implementation </li>
    <li>Nick fixed some issues with the current boss behavior, specifically its backup behavior</li>
    <li>Rudy continued working on the camera phasing shader to make our player visibility when behind things</li>
    <li>John started working on adding UI behavior for when the player gets a new sword</li>
    <li>Kyle added new UI elements to the level that show “tips and tricks” about the swords giving additional info that’s not immediately apparent</li>
    <li>I worked on changing the implementation of our target lock system so it doesn’t target an object but rather a specific point in the object</li>
    <ul class="mt-2">
        <li>This should allow us to have more customization in what we’re targeting</li>
    </ul>
    <li>I also fixed an issue with our pause implementation so we can actually pause the game now!</li>
    <li>Nick started adding another new behavior to the boss, giving it the ability to spawn enemies</li>
</ul>

## Documentation

<ul class="section-body mt-4">
    <li>Again, I spent quite a bit of time this week working on my individual research, this week I sent it to faculty to approve and then on to the IRB</li>
    <li>After making some progress on that, I also worked on updating one of my sections of the Design Doc</li>
    <li>Kyle also worked on updating the Design Doc, starting to get us back up to date with playtest summaries</li>
</ul>

<br>

Again, that’s it for now. Hope everyone’s having a great day!

<br>