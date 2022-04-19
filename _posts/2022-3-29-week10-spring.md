---
layout: post
title: "Sprint 14 Update (Week 10)"
subtitle: "GDC Week, Continued Progress"
date: 2022-3-29 12:00:00
author: Trent
background: '/img/post-covers/spring-10-cover.png'
tags: 
    - Weekly Post
---

We’ve finally made it to GDC week. We’ve been planning where we want to be in development for this event basically since the beginning of the fall semester, and for the most part we reached our goals. It was a big week with everything going on with that, so progress is a little lighter, but we still accomplished quite a bit. Nick worked on boss animations, continuing to improve its appearance, Rudy continued working on camera phasing, and John and I both added some of the progression elements to the game, John adding sword gem pickups, allowing the player to gain the sword forms as they progress through the game rather than starting with all 3, and me adding health pickups, allowing the player to not be quite so reliant on the Topaz sword for healing. Kyle wasn’t able to make a lot of development progress this week because he was our GDC representative, but he did a great job representing us there, a fact we greatly appreciate. 

Again, our artists did a fantastic job this week. Sofia made a ton of progress on the opening cutscene, coloring more of the sketches and updating some of the others accordion to new clarifications we’ve made about the narrative. And Kesavan started working on visual effects for the enemy and boss projectiles. 

That’s about it for that so we’ll move on to detailed progress:

## Art

<div class="row my-5">
    <div id="carouselExampleIndicators" class="carousel slide shadow rounded" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-block mx-auto" src="/img/posts/week10-spring/23_VillageScene.png"
                    alt="Village Scene Sketch">
                <div class="carousel-caption d-none d-md-block">
                    <p>Village Scene Sketch</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block mx-auto" src="/img/posts/week10-spring/23_UpdatedMentorLeaving.png"
                    alt="Updated Mentor Leaving Sketch">
                <div class="carousel-caption d-none d-md-block">
                    <p>Updated Mentor Leaving Sketch</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block mx-auto" src="/img/posts/week10-spring/23_UpdatedRunningToShrine.png"
                    alt="Updated Running to Shrine Sketch">
                <div class="carousel-caption d-none d-md-block">
                    <p>Updated Running to Shrine Sketch</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block mx-auto" src="/img/posts/week10-spring/23_ColoredGrabbingHilt.png"
                    alt="Colored Grabbing Hilt Sketch">
                <div class="carousel-caption d-none d-md-block">
                    <p>Colored Grabbing Hilt Sketch</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block mx-auto" src="/img/posts/week10-spring/23_ColoredTopazInBracer.png"
                    alt="Colored Topaz In Bracer Sketch">
                <div class="carousel-caption d-none d-md-block">
                    <p>Colored Topaz In Bracer Sketch</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block mx-auto" src="/img/posts/week10-spring/23_ColoredRaiseSword.png"
                    alt="Colored Raise Sword Sketch">
                <div class="carousel-caption d-none d-md-block">
                    <p>Colored Raise Sword Sketch</p>
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
    <li>John continued working on the main battle track</li> 
    <li>Sofia did a ton more work on the opening cutscene, updating a bunch of the sketches and starting on coloring more of them</li>
    <ul class="mt-2">
        <li>The idea is that they should look hand-drawn as if they’re party of a book about a legend</li>
    </ul>
</ul>

<!-- 16:9 aspect ratio -->
<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="/img/posts/week10-spring/23_EnemyProjectileVFXWIP.mp4" allowfullscreen></iframe>
</div>

<ul class="section-body mt-4">
    <li>Kesavan started working on the VFX for the enemy and boss projectiles</li>
</ul>

## Design

<ul class="section-body mt-4">
    <li>Kyle worked on updating our cutscene’s narrative so we have a better idea of what it’s going to say and what it should look like</li>
</ul>

## Development

<ul class="section-body mt-4">
    <li>Nick finished implementing the textures for the boss model and got more of the boss’ animations working</li>
    <li>Rudy worked on researching camera phasing in the beginning of the week and started on implementation towards the end</li>
    <li>John created the gem pickup for swords so that there is actual progression and the player doesn’t start with all 3 swords</li>
    <li>Nick also worked on improving the boss’ behavior as he was porting it over from the old version</li>
    <li>I worked on creating a new health pickup so that the player isn’t totally reliant on the topaz sword’s ability to stay alive</li>
    <li>Nick implemented the boss’ new sword model with the boss’s behaviors</li>
    <li>Kyle started working on designing the boss’ health bar</li>
</ul>

## Management

<ul class="section-body mt-4">
    <li>This week was GDC week so Kyle did a bunch of stuff with that as our team’s representative</li>
    <ul class="mt-2">
        <li>GDC is the Game Developers Conference, typically held in San Francisco in the spring, but this year it was hybrid, held both there and in virtually</li>
    </ul>
</ul>

## Documentation

<ul class="section-body mt-4">
    <li>I continued working on the survey and other documentation for my individual research</li>
    <li>John worked on his individual research, looking into other examples in games</li>
</ul>

<br>

That’s all for this week folks! 

<br>