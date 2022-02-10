---
layout: post
title: "Sprint 11 Update (Week 4)"
subtitle: "Incremental Updates"
date: 2022-2-8 12:00:00
author: Trent
background: '/img/post-covers/spring-4-cover.png'
tags: 
    - Weekly Post
---

This week was a bit lighter again in terms of volume of work. After our playtest and looking towards the next playtest, we had to reevaluate some things and decide what our top priorities were moving forward. Once we’d done that, the week was already partially over, so we took the rest of the week to focus mostly on incremental changes that needed to be made such as balancing, bug fixing in the settings menu, and updating some parts of the documentation. We also did a bunch of work on designing a new level so we can test everything in a more finished environment. 

In terms of art, Sofia’s continuing with the boss designs, and she’s also started on some more buildings. We may or may not get to these, it really depends on how much time we have left after other, more important, things like enemy models are finished. And speaking of enemy models, Effy has also started working on animations for the basic enemy, and Michal has continued to work on player animations. So, it was a productive week all around for the art team. 

In any case, let’s move on to specific progress. 

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
                <img class="d-block mx-auto" src="/img/posts/week4-spring/17_AmethystSwordRevised.png"
                    alt="Iteration on the Boss’s Amethyst Sword">
                <div class="carousel-caption d-none d-md-block">
                    <p>Iteration on the Boss’s Amethyst Sword</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block mx-auto" src="/img/posts/week4-spring/17_BossConceptRevised.png"
                    alt="Iteration on the Boss Concept">
                <div class="carousel-caption d-none d-md-block">
                    <p>Iteration on the Boss Concept</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block mx-auto" src="/img/posts/week4-spring/17_BuildingConcepts.png"
                    alt="New Building Concepts">
                <div class="carousel-caption d-none d-md-block">
                    <p>New Building Concepts</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block mx-auto" src="/img/posts/week4-spring/17_PlayerMask.png"
                    alt="Player Mask Model Textured">
                <div class="carousel-caption d-none d-md-block">
                    <p>Player Mask Model Textured</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block mx-auto" src="/img/posts/week4-spring/17_PlayerTexturesWIP.png"
                    alt="Work in Progress Player Textures">
                <div class="carousel-caption d-none d-md-block">
                    <p>Work in Progress Player Textures</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block mx-auto" src="/img/posts/week4-spring/17_PlayerCapeTextures.png"
                    alt="Player Cape Textures">
                <div class="carousel-caption d-none d-md-block">
                    <p>Player Cape Textures</p>
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
    <li>Sofia iterated on the concepts for the Boss’s Amethyst Sword and the Boss</li>
    <li>She also made some more concepts for buildings</li>
    <ul class="mt-2">
        <li>We may or may not get to these</li>
    </ul>
    <li>Xy finished the player’s mask and continued iterating on player textures</li>
    <li>Michal started working on walk/run animations for the player</li>
    <li>Effy worked on animating the enemy, starting with the idle animation</li>
</ul>

<!-- 16:9 aspect ratio -->
<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="/img/posts/week4-spring/17_EnemyIdle.mp4" allowfullscreen></iframe>
</div>

<ul class="section-body mt-4">
    <li>Rudy & Kesavan started working on implementing a trail on the sword in-game</li>
</ul>

<!-- 16:9 aspect ratio -->
<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="/img/posts/week4-spring/17_InGameSwordTrail.gif" allowfullscreen></iframe>
</div>

## Design
<ul class="section-body mt-4">
    <li>We all worked on designing the new level map, but Rudy did most of the actual work of editing it and drawing it up</li>
</ul>

## Development

<ul class="section-body mt-4">
    <li>John developed a better system for visualizing enemy health</li>
    <ul class="mt-2">
        <li>The enemies’ bodies now chip away as they’re damaged</li>
    </ul>
    <li>Kyle worked further balancing the player’s attacks and swords</li>
    <ul class="mt-2">
        <li>Both in terms of damage and feel of animations</li>
    </ul>
    <li>John switched enemy behavior system to a behavior tree</li>
    <li>Nick fixed a bunch of bugs with the settings menu</li>
    <ul class="mt-2">
        <li>Including an issue with scaling, unnecessary rebindings, and making it possible to navigate with a controller</li>
    </ul>
    <li>Rudy started looking into a new asset pack for vegetation and level streaming</li>
    <li>I fixed our target lock action again, adding logic so that it works when enemies are destroyed by the player</li>
    <li>Kyle fixed some issues with root motion and the walk animations while wielding the ruby sword</li>
</ul>

## Documentation

<ul class="section-body mt-4">
    <li>I worked on my individual research and added summaries of the past few sprints to catch up on documentation</li>
    <li>I also added summaries for a few milestones that we hadn’t wrote up yet like major presentations and playtests and updated the production section of our Design Doc</li>
    <li>Kyle wrote up a review of the previous playtest and its linked data</li>
</ul>

<br>

And that’s all for this week. 

<br>