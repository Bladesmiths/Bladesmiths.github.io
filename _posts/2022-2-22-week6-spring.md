---
layout: post
title: "Sprint 12 Update (Week 6)"
subtitle: "Playtest 5"
date: 2022-2-22 12:00:00
author: Trent
background: '/img/post-covers/spring-6-cover.png'
tags: 
    - Weekly Post
---

Well we’re finally back for another weekly update. Sorry it’s a bit late, but I was out last week for some personal business so even though most of this was written, I didn’t have time to put it together before I left. As a result, I’ll be posting both this and week 7’s post together. 

It was another pretty big week with quite a few updates on the dev side and a playtest on Thursday and Friday. Thursday we conducted an in-person playtest with the people that could make it during class, and on Friday we sent out a link to our build and survey so people who couldn’t make it could test it. Overall, the playtest seemed to be pretty successful. People seemed to like the changes we made, and quite a few people commented on how much more visible our progress was for this playtest. 

As for what that progress actually was, the goal for the playtest was to have some version of pretty much everything in our MVP, and I think we managed to hit that goal or at least get pretty close. We added a couple more enemy types and a new level with a lot of new scenery. We also started designing encounters with the enemies to place in the new level. Beyond that, we did a bunch of tweaking for balancing and just game feel in general. 

Looping around to art, we didn’t have as much progress this week, but there’s some cool stuff in the works, so hopefully we’ll be able to see more of that soon. 

And now, on to specific progress: 

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
                <img class="d-block mx-auto" src="/img/posts/week6-spring/19_PlayerTextureUpdate.jpg"
                    alt="Player Texture Updates">
                <div class="carousel-caption d-none d-md-block">
                    <p>Player Texture Updates</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block mx-auto" src="/img/posts/week6-spring/19_AmethystSwordColorConcept.jpg"
                    alt="Colored Concept of Amethyst Sword">
                <div class="carousel-caption d-none d-md-block">
                    <p>Colored Concept of Amethyst Sword</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block mx-auto" src="/img/posts/week6-spring/19_BossColoredConceptSheet.jpg"
                    alt="Colored Concept Sheet of Boss">
                <div class="carousel-caption d-none d-md-block">
                    <p>Colored Concept Sheet of Boss</p>
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
    <li>Xy updated the player character’s textures</li>
    <li>Sofia made some updated colored concepts for the boss’s Amethyst sword and a colored concept sheet for the boss itself</li>
</ul>

## Development

<ul class="section-body mt-4">
    <li>John finished implementing basic versions of 2 new enemy types and looked into Unity’s Navmesh system for the new level</li>
    <ul class="mt-2">
        <li>A navmesh is a way of telling objects where they can move to</li>
    </ul>
    <li>Kyle added fog to our new level</li> 
    <li>Nick finished adding the boss to the new level and started on the boss’s projectile attack</li>
    <li>Rudy started adding the crystal walls we’ll be using to separate encounters and added another shader for swords</li>
    <li>I finished adding in the player’s idle animations and started working on importing the walk and run animations for topaz</li>
    <li>John placed a bunch of enemies in the new level so we have actual encounters now</li>
    <li>Nick placed respawn points throughout the level so players don’t have to restart the entire level if they die</li>
    <li>Rudy imported and tweaked a bunch of aesthetic stuff including a color manager and the sword trail vfx Kesavan’s been working on</li>
    <li>Kyle added onboarding to the new level</li> 
    <li>Nick fixed a settings bug in the main menu</li>
    <li>Kyle tweaked the player’s sword hitboxes again so that it’s easier to hit things</li>
    <li>Post-playtest, John started working on trying to solve some issues with enemies we found during the playtest that were causing huge amounts of lag</li>
</ul>

## Management
<ul class="section-body mt-4">
    <li>On Thursday, we all helped conduct a playtest for our game</li>
</ul>

## Documentation

<ul class="section-body mt-4">
    <li>I made the release on GitHub for the new playtest and started compiling stuff for our IGM Showcase submission</li>
    <li>Kyle worked on storyboarding and scripting the video he’ll be recording for our IGM Showcase submission</li>
</ul>

<br>

That’s all for this week folks. Hope you enjoyed!

<br>