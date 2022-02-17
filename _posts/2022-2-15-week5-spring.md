---
layout: post
title: "Sprint 12 Update (Week 5)"
subtitle: "Sprint End, Prepping for Playtest 5"
date: 2022-2-15 12:00:00
author: Trent
background: '/img/post-covers/spring-5-cover.png'
tags: 
    - Weekly Post
---

Back for week 5, this week was the start of our 12th sprint, and our 11th sprint didn’t go exactly as planned. We really overscoped for Sprint 11 and missed quite a few of our goals, but we took a hard look at our current priorities and really tried to give a better estimate of the number of tasks we could accomplish this time. Mainly, we want to prioritize things for the playtest this week, such as our new level, new player animations, sword trails, and the boss. And so far, we seem to be on track to meet those goals. Last sprint we made a change to our process to attempt to fix the problem of pull requests being reviewed too slowly, and that seems to be working. Specifically, we decided to implement Pull Request Points that can be used in the D&D campaign we’ve been running as a team. Every time someone reviews a pull request, they get a point, and that seems to be providing sufficient motivation. This sprint, we want to focus on making better pull request descriptions and working together more in the labs, and we’re also going to start utilizing Discord’s event feature so we have more visible reminders of deadlines. 

In terms of progress, most of our work as devs this week was working on the priorities I mentioned above. We made a bunch of updates to enemies, adding 2 new types that function differently, and we also actually implemented the level we’ve been working on the past few weeks. We also fixed some of the bugs in the settings menu and upgraded some of the custom tools we’ve made to assist in development. 

As for art, our artists gave us a TON of stuff this week. Michal gave us 2 new animations for the player: the walk animation and the run animation while the player character is wielding the Topaz sword. She also updated some other animations so we could actually implement them. Sofia did a bunch of work with various boss concepts, coloring both the boss itself and the boss’s Amethyst sword. She also worked on creating another concept for a house to maybe use in the future. Xy continued working on texturing the player. The player’s textures (both the player model itself and their mask) are now basically completed. There’s just a little bit of cleanup and fine tuning left to do in-engine on the shader. Finally, Kesavan sent us updated sword trail VFX for all 3 swords. We’re also really happy with how these look, there’s just a few more updates we’ve asked for with additional effects. 

And with that, we’ll move on to specific progress: 

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
                <img class="d-block mx-auto" src="/img/posts/week5-spring/18_ColoredBossConcept.jpg"
                    alt="Colored Boss Concept">
                <div class="carousel-caption d-none d-md-block">
                    <p>Colored Boss Concept</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block mx-auto" src="/img/posts/week5-spring/18_ColoredAmethystSword.jpg"
                    alt="Colored Amethyst Sword Concept">
                <div class="carousel-caption d-none d-md-block">
                    <p>Colored Amethyst Sword Concept</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block mx-auto" src="/img/posts/week5-spring/18_StrawRoofHouseConcept.png"
                    alt="Straw Roof House Concept">
                <div class="carousel-caption d-none d-md-block">
                    <p>Straw Roof House Concept</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block mx-auto" src="/img/posts/week5-spring/18_PlayerTextureUpdates.jpg"
                    alt="Player Texture Updates">
                <div class="carousel-caption d-none d-md-block">
                    <p>Player Texture Updates</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block mx-auto" src="/img/posts/week5-spring/18_TopazMaskUpdates.jpg"
                    alt="Player Mask Texture Updates">
                <div class="carousel-caption d-none d-md-block">
                    <p>Player Mask Texture Updates</p>
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
    <li>Sofia colored the boss concept and updated the Amethyst sword concept and started working on preliminary colors for it too</li>
    <li>Sofia also created a concept for another house</li> 
    <ul class="mt-2">
        <li>Once again, we may or may not use this. Custom houses are a stretch goal</li>
    </ul>
    <li>Xy updated the player character’s textures and the texture for the player character’s mask</li>
    <ul class="mt-2">
        <li>There’s still some cleanup to do, but these are mostly done now</li>
    </ul>
</ul>

<ul class="section-body mt-4">
    <li>Michal continued working on the movement animations for the Topaz sword, making updates to both the walk and run animations</li>
</ul>

<!-- 16:9 aspect ratio -->
<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="/img/posts/week5-spring/18_TopazWalkAnimation.mov" allowfullscreen></iframe>
</div>

<!-- 16:9 aspect ratio -->
<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="/img/posts/week5-spring/18_TopazRunAnimation.mov" allowfullscreen></iframe>
</div>

<ul class="section-body mt-4">
    <li>Kesavan continued iterating on all three sword trails</li>
    <ul class="mt-2">
        <li>The actual trails are mostly done now, there’s just some work to do with other effects (especially for the Ruby sword</li>
    </ul>
</ul>

<!-- 16:9 aspect ratio -->
<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="/img/posts/week5-spring/18_TopazSwordTrailUpdate.mp4" allowfullscreen></iframe>
</div>

<!-- 16:9 aspect ratio -->
<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="/img/posts/week5-spring/18_RubySwordTrailUpdate.mp4" allowfullscreen></iframe>
</div>

<!-- 16:9 aspect ratio -->
<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="/img/posts/week5-spring/18_SapphireSwordTrailUpdate.mp4" allowfullscreen></iframe>
</div>

## Development

<ul class="section-body mt-4">
    <li>John continued working on creating a couple new enemy types</li>
    <ul class="mt-2">
        <li>When this is done, we’ll have 3 different enemy types (Basic, Shield, Ranged) that all behave slightly differently</li>
    </ul>
    <li>Kyle worked on creating some custom animation curves for our attacks so they look more impactful</li>
    <li>Nick worked on fixing bugs with the settings menu</li>
    <ul class="mt-2">
        <li>It’s now possible to navigate with a controller</li>
    </ul>
    <li>Rudy worked on a custom shader for the sword blades</li>
</ul>

<!-- 16:9 aspect ratio -->
<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="/img/posts/week5-spring/18_SwordShader.gif" allowfullscreen></iframe>
</div>

<ul class="section-body mt-4">
    <li>Kyle blocked out and finished creating the first pass at our new level</li>
    <ul class="mt-2">
        <li>It’s now much bigger and looks much more like an actual game</li>
    </ul>
    <li>Rudy upgraded our Multi-Scene Editor tool</li> 
    <ul class="mt-2">
        <li>This tool allows us to setup specific sets of scenes that should be loaded together</li>
        <li>It’s now much easier to navigate and functions more predictably</li>
    </ul>
    <li>John made some updates to enemy movement</li>
    <ul class="mt-2">
        <li>Mostly this is just working to make them feel smarter overall</li>
    </ul>
    <li>Nick moved the boss over from his older boss development branch to the current setup</li>
    <ul class="mt-2">
        <li>This took a bit because it was so old and there were a lot of bugs to fix</li>
    </ul>
    <li>Nick also started working on developing the boss’s projectile attack</li>
    <ul class="mt-2">
        <li>This probably won’t make it in to the playtest this week though</li>
    </ul>
    <li>I imported the custom idle animations Michal created for our player character</li>
</ul>

## Management
<ul class="section-body mt-4">
    <li>Kyle worked on defining our MVP a bit better in terms of artists so they understand exactly what our goals are for the end of the semester</li>
    <li>We conducted our usual sprint review/retrospective meeting</li>
</ul>

## Documentation

<ul class="section-body mt-4">
    <li>I updated a bunch of old blog posts and documentation, getting us back on track with that</li>
    <li>We all worked on individual research, writing our abstracts so we can better define what we’ll be doing specifically</li>
</ul>

<br>

And that should be it for this week. Thanks again everyone!

<br>