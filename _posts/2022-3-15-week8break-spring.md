---
layout: post
title: "Sprint 13 Update (Week 8 & Spring Break)"
subtitle: "Small Updates, Spring Break"
date: 2022-3-15 12:00:00
author: Trent
background: '/img/post-covers/spring-8-cover.png'
tags: 
    - Weekly Post
---

Back again after a couple weeks! I decided to hold off on posting this one for an extra week because last week was Spring Break for the members of our team still enrolled at RIT. For the most part we actually took a break, so it was easier to just add-on what we worked on last week to the week before. So for this week we’ve got a bit of a longer post instead. 

Regardless, the week before break was pretty uneventful. We were finally done with extra submissions for a bit so we had a chance to take a breather and actually look over what we’d been working on and make sure everyone knew what the plan was from here on out. We made a ton of progress with the enemies and the boss. They should be vastly improved now over the last time we tested with them. We also did quite a bit of bug fixing. For a lot of the progress we’ve made over the past few weeks, we haven’t really been able to exhaustively test everything because of time constraints, so the pile of bugs to squash was growing faster than we could take care of them. Now though, we should be in a much better place with that and all of our main features should be working again. Moving on, Kyle also did a bunch of work on the environment the past few weeks, splitting it up into different scenes to allow us to unload some if necessary, and adding more vegetation so that our invisible walls aren’t quite so invisible. Finally, for the developers at least, we all finally had a chance over break to work more on our individual research. It’s a required component of the class and project since it’s a Master’s degree, and we’re all excited about our topics, but it’s been difficult to find the time up until now. 

As for our artists, they made a bunch of progress the past 2 weeks. Xy finished texturing the enemy and started modelling the boss’s Amethyst sword. They’ll be moving on to the actual boss next. Sofia also created concepts for the Boss’s attacks. Ideally, we’ll be able to use these to help create custom animations for the boss, but with time running out, it’s likely we won’t get there. Even so, the concepts will be nice to have for our final presentation. Michal finished up the rest of the player’s walk and run cycles, passing on the Sapphire and Ruby cycles to us in the 2 weeks since our last update. Something really cool that we’ve also been working on is improving our opening cutscene. Up to now, we’ve been using old concepts for its background images, but they were just vaguely related to what the words were saying, but this week we had Sofia start working on creating some art specifically for the opening cutscene. So we’re really excited to show that off as well. 

And that should be about it. So with that, we’ll move on to more detailed progress:

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
                <img class="d-block mx-auto" src="/img/posts/week8-spring/21_BasicEnemyTextures.png"
                    alt="Basic Enemy Texture Updates">
                <div class="carousel-caption d-none d-md-block">
                    <p>Basic Enemy Texture Updates</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block mx-auto" src="/img/posts/week8-spring/21_BossAttack1.png"
                    alt="Boss Attack Concept 1">
                <div class="carousel-caption d-none d-md-block">
                    <p>Boss Attack Concept 1</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block mx-auto" src="/img/posts/week8-spring/21_BossAttack2.png"
                    alt="Boss Attack Concept 2">
                <div class="carousel-caption d-none d-md-block">
                    <p>Boss Attack Concept 2</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block mx-auto" src="/img/posts/week8-spring/21_BossAttack3.png"
                    alt="Boss Attack Concept 3">
                <div class="carousel-caption d-none d-md-block">
                    <p>Boss Attack Concept 3</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block mx-auto" src="/img/posts/week8-spring/21_BossAttack4.png"
                    alt="Boss Attack Concept 4">
                <div class="carousel-caption d-none d-md-block">
                    <p>Boss Attack Concept 4</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block mx-auto" src="/img/posts/week8-spring/21_AmethystSwordModel.png"
                    alt="Amethyst Sword Model">
                <div class="carousel-caption d-none d-md-block">
                    <p>Amethyst Sword Model</p>
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
    <li>Xy updated the basic enemy textures, adding the more wooden elements</li> 
    <li>Sofia created concepts for the boss’s different attacks</li>
    <li>Xy also started modelling the boss’s Amethyst sword</li>
    <li>Michal finished the animations for the player’s walk and run while wielding the sapphire sword</li>
</ul>

<video class="embed-responsive-item w-100" loop autoplay controls>
  <source src="/img/posts/week8-spring/21_SapphireWalk.mov" type="video/mp4">
Your browser does not support the video tag.
</video>

<video class="embed-responsive-item w-100" loop autoplay controls>
  <source src="/img/posts/week8-spring/21_SapphireRun.mov" type="video/mp4">
Your browser does not support the video tag.
</video>

<ul class="section-body mt-4">
    <li>Sofia also created a bunch of sketches for our opening cutscene</li>
</ul>

<div class="row my-5">
    <div id="carouselExampleIndicators1" class="carousel slide shadow rounded" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators1" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators1" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators1" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators1" data-slide-to="3"></li>
            <li data-target="#carouselExampleIndicators1" data-slide-to="4"></li>
            <li data-target="#carouselExampleIndicators1" data-slide-to="5"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-block mx-auto" src="/img/posts/week8-spring/21_CutsceneSketch_War.png"
                    alt="Cutscene - Coming War">
                <div class="carousel-caption d-none d-md-block">
                    <p>Cutscene - Coming War</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block mx-auto" src="/img/posts/week8-spring/21_CutsceneSketch_Leaving.png"
                    alt="Cutscene - Villagers Leaving">
                <div class="carousel-caption d-none d-md-block">
                    <p>Cutscene - Villagers Leaving</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block mx-auto" src="/img/posts/week8-spring/21_CutsceneSketch_Peace.png"
                    alt="Cutscene - Peace">
                <div class="carousel-caption d-none d-md-block">
                    <p>Cutscene - Peace</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block mx-auto" src="/img/posts/week8-spring/21_CutsceneSketch_Attack.png"
                    alt="Cutscene - Enemies Attack">
                <div class="carousel-caption d-none d-md-block">
                    <p>Cutscene - Enemies Attack</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block mx-auto" src="/img/posts/week8-spring/21_CutsceneSketch_Run.png"
                    alt="Cutscene - Running to Shrine">
                <div class="carousel-caption d-none d-md-block">
                    <p>Cutscene - Running to Shrine</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block mx-auto" src="/img/posts/week8-spring/21_CutsceneSketch_Sword.png"
                    alt="Cutscene - Picking up Sword">
                <div class="carousel-caption d-none d-md-block">
                    <p>Cutscene - Picking up Sword</p>
                </div>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators1" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators1" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</div>

## Design

<ul class="section-body mt-4">
    <li>We all had another discussion about how exactly we want the boss and enemies to behave</li>
</ul>

## Development

<ul class="section-body mt-4">
    <li>John did a bunch of work on improving enemy feel and fixing enemy bugs</li>
    <li>Nick worked on the boss’s shockwave and projectile attacks</li>
    <ul class="mt-2">
        <li>Mostly just tweaking for both of these to make it feel better</li>
    </ul>
    <li>Kyle split our environmental assets into a few different scenes which should help with optimization</li>
    <ul class="mt-2">
        <li>Kyle also added a bunch more vegetation to the scenes to help show invisible walls</li>
    </ul>
    <li>Nick started looking for a model and animation for the boss from Mixamo</li>
    <li>John added a dash ability for some of the enemies</li>
    <li>I fixed some more bugs related to locking on to enemies and the boss</li>
    <ul class="mt-2">
        <li>And another bug related to dodging while locked on</li>
    </ul>
    <li>John created a descructable shield for the shield enemy</li>
    <li>Rudy worked on modifying some new building models so all our buildings don’t look the same</li>
    <li>I also started investigating a bug related to blocking enemy and boss attacks</li>
</ul>

## Documentation

<ul class="section-body mt-4">
    <li>We all did a bunch of work on our individual research over break</li>
</ul>

<br>

And that’s all we've got. Thanks again folks! 

<br>