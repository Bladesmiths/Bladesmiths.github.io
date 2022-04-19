---
layout: post
title: "Sprint 14 Update (Week 9)"
subtitle: "Lots of Progress, Prepping for GDC"
date: 2022-3-22 12:00:00
author: Trent
background: '/img/post-covers/spring-9-cover.png'
tags: 
    - Weekly Post
---

With the semester progressing extremely quickly, we’re already reporting our progress from Week 9. With the next week being GDC, most of our progress for this week was just getting our game ready for that. We had a lot to do to make the experience as fleshed out and finished as possible. For those who don’t know, GDC is the Game Developers Conference, an expo typically held in San Francisco that draws game developers, designers, and enthusiasts from around the world to listen to talks and test games. Usually, IGM sends some students there to present their own games, but with COVID still being an issue and GDC being hybrid this year, we aren’t able to actually send any of our own representatives this year. However, we were able to get a virtual pass for one of our team members so we can at least have some presence there. One of the faculty members from IGM is also going to take recent builds of all of the IGM Capstone projects there so they can still get some tests. In any case, again, this week we mostly focused on fleshing out the experience, adding some more of the last few mechanics we were still missing and fixing some bugs. 

Our artists, as always, did some incredible work this week. John has now started working on a main battle track for the game. This will allow us to switch between it and our main music track when the player transitions between being in and out of combat. Kesavan worked on creating a visual effect for fire that we’re hoping to be able to use to create a boundary for the boss fight. Sofia made more progress on the opening cutscene, creating more sketches and starting on some coloring. Xy started working on modelling the boss, and Effy updated the enemy’s rig so we can continue working on implementing enemy animations. 

And with that, let’s move on to the detailed progress report:

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
                <img class="d-block mx-auto" src="/img/posts/week9-spring/22_RunningToShrine.png"
                    alt="Running To Shrine Sketch">
                <div class="carousel-caption d-none d-md-block">
                    <p>Running To Shrine Sketch</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block mx-auto" src="/img/posts/week9-spring/22_TopazInBracer.png"
                    alt="Topaz In Bracer Sketch">
                <div class="carousel-caption d-none d-md-block">
                    <p>Topaz In Bracer Sketch</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block mx-auto" src="/img/posts/week9-spring/22_RaiseSword.png"
                    alt="Raising Sword Sketch">
                <div class="carousel-caption d-none d-md-block">
                    <p>Raising Sword Sketch</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block mx-auto" src="/img/posts/week9-spring/22_ColorTest.png"
                    alt="Cutscene Color Test">
                <div class="carousel-caption d-none d-md-block">
                    <p>Cutscene Color Test</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block mx-auto" src="/img/posts/week9-spring/22_BossBoots.png"
                    alt="Boss Boots">
                <div class="carousel-caption d-none d-md-block">
                    <p>Boss Boots</p>
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
    <li>John worked more on the main battle track</li> 
    <li>Sofia worked on the opening cutscene more, creating and updating some sketches and starting coloring with a color test</li>
    <li>Xy started modeling the boss with their boots</li>
    <li>Effy worked on updating the enemy’s rig so we can continue with animations</li>
</ul>

<div class="embed-responsive embed-responsive-16by9">
    <iframe width="1250" height="703" 
        src="https://www.youtube.com/embed/xsbx_bNrXf0" title="YouTube video player" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
        gyroscope; picture-in-picture" allowfullscreen>
    </iframe>
</div>

<ul class="section-body mt-4">
    <li>Kesavan created a super cool visual effect for a fire volume</li>
</ul>

## Development

<ul class="section-body mt-4">
    <li>John added the crystal walls to stop players from progressing until they defeat enemies</li>
    <li>John also did a bunch of work improving and refining enemy behavior</li>
    <li>Kyle made a bunch of updates to the level environment, adding more shrubs and new houses</li>
    <li>Nick started working on animating the boss, finding a model and some of the required animations on mixamo</li>
    <li>Rudy helped John with the gem wall implementation and Kyle with the new houses</li>
    <li>I fixed some bugs related to blocking and target lock</li>
    <li>Rudy started working on implementing a new camera behavior that will allow the player to remain visible in some form when behind an object</li>
    <li>Nick fixed some issues with the camera, tweaking it to make it more player-friendly</li>
    <li>John started working on getting the enemy animated with the new animations we recevied</li>
</ul>

## Management

<ul class="section-body mt-4">
    <li>I did a bunch of work reorganizing the Assets folder in our game, moving things to new folders to make them easier to find and deleting all of the placeholder assets we’re no longer using</li>
    <li>Rudy met with Kesavan and worked on the logistics of VFX implementation</li>
</ul>

## Documentation

<ul class="section-body mt-4">
    <li>I did a bunch of work on my individual research, writing the documentation I’ll need to actually collect data from other students and starting on the survey I’ll use to collect that data</li>
</ul>

<br>

That’s everything for this week. Thanks again! 

<br>