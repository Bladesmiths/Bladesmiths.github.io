---
layout: post
title: "Sprint 11 Update (Week 3)"
subtitle: "First Playtest of Spring"
date: 2022-2-1 12:00:00
author: Trent
background: '/img/post-covers/spring-3-cover.png'
tags: 
    - Weekly Post
---

This week marked our first playtest of the spring semester. As a result, we didn’t make as much progress on development as we typically would. Instead, we spent a lot of the week testing, fixing bugs, and making sure we were ready for a playtest with a new build and a new survey. Our focus for this playtest was gauging reaction to our new inputs, new sword selection method, new onboarding, and our first pass at sounds, and overall, the reaction seemed to be pretty positive. We got a lot of great feedback, especially regarding input, so we still have some work to do there, but really a lot of the feedback we received had to do with parts of the project that we knew were problems, but we just hadn’t had time to address yet because they weren’t top priority. However, now that we’ve started getting feedback about these things, that means it’s time to address them. So for our next playtest we’ll probably have some progress on things like level design, input, and camera implementation. 

Anyway, moving on to art, we got a lot of great work from our artists this week. Sofia’s starting on boss designs, and they’re looking great, so hopefully we’ll be seeing some progress on a boss model within the month. Xy has made what will hopefully turn out to be the final update to our enemy model, and they also started on the player’s mask, which should really help finalize the player’s silhouette. Michal did some really great work on player animations this week as well, and you can see more about that below. 

With that, we’ll move on to detailed progress notes:

## Art

<div class="row my-5">
    <div id="carouselExampleIndicators" class="carousel slide shadow rounded" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-block mx-auto" src="/img/posts/week3-spring/16_BossConcepts.png"
                    alt="Initial Boss Concepts">
                <div class="carousel-caption d-none d-md-block">
                    <p>Initial Boss Concepts</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block mx-auto" src="/img/posts/week3-spring/16_AmethystSwordConcepts.png"
                    alt="Initial Amethyst Sword Concepts">
                <div class="carousel-caption d-none d-md-block">
                    <p>Initial Amethyst Sword Concepts</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block mx-auto" src="/img/posts/week3-spring/16_UpdatedEnemyModel.png"
                    alt="Updated Enemy Model">
                <div class="carousel-caption d-none d-md-block">
                    <p>Updated Enemy Model</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block mx-auto" src="/img/posts/week3-spring/16_InitialMaskModel.png"
                    alt="Initial Mask Model">
                <div class="carousel-caption d-none d-md-block">
                    <p>Initial Mask Model</p>
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
    <li>Sofia started working on concept art for the boss and their sword</li>
    <ul class="mt-2">
        <li>The boss is from a more militaristic village than the player and their sword is based off of an Aztec sword with replaceable blades</li>
    </ul>
    <li>Xy updated our enemy model with a new axe</li>
    <ul class="mt-2">
        <li>It’s now made of amethyst with more irregular chunks</li>
    </ul>
    <li>Xy also started working on the model for the player’s mask</li>
    <li>Michal started on the custom animations we’ll be using for the player</li>
    <ul class="mt-2">
        <li>This week, she finished the topaz and sapphire idle poses</li>
    </ul>
</ul>

<!-- 16:9 aspect ratio -->
<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="/img/posts/week3-spring/16_TopazIdle.mp4" allowfullscreen></iframe>
</div>

<!-- 16:9 aspect ratio -->
<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="/img/posts/week3-spring/16_SapphireIdle.mp4" allowfullscreen></iframe>
</div>

## Design
<ul class="section-body mt-4">
    <li>Rudy made a new map and design for a final level</li>
</ul>

## Development

<ul class="section-body mt-4">
    <li>John implemented a bunch of sounds for our first playtest of the semester</li>
    <li>Kyle made a bunch of updates to onboarding</li>
    <li>Nick finished up initial work on a settings menu</li>
    <ul class="mt-2">
        <li>This will have things like volume & graphics settings, as well as rebindable controls</li>
    </ul>
    <li>I finished adding the Sapphire’s dash ability</li>
    <li>I also updated our sword and player model to the current version</li>
    <ul class="mt-2">
        <li>John later went through and fixed some rotations so that the blade of the sword is facing the right direction</li>
    </ul>
    <li>And I fixed a bug where the player wouldn’t perform the take damage or death animations</li>
    <ul class="mt-2">
        <li>They also wouldn’t die</li>
    </ul>
</ul>

## Management

<ul class="section-body mt-4">
    <li>Kyle created a new survey for players to take after testing our project</li>
    <li>We all had a playtest on Thursday, the 27th</li>
</ul>

<br>

And that’s it for the week. Thanks for hanging in with us folks. 

<br>