---
layout: post
title: "Sprint 6 Update (Week 11)"
subtitle: "Big Pitches & Tons of Updates"
date: 2021-11-9 12:00:00
author: Trent & Rudy
background: '/img/post-covers/cover-week-9.png'
tags: 
    - Weekly Post
---

Alright, so it’s been a while. Sorry for the long wait everyone, but it’s been a busy couple weeks. On Thursday, the 28th, we presented a new, longer pitch to department faculty. As you’ll see below, this won’t be our last faculty pitch by any means, but it’s primarily to start familiarizing faculty with our projects and so we can get some practice in and see what to expect from a faculty pitch. Some teams in the class don’t have full committees yet, so this was also for them so they could hopefully hook some interested parties to fill those spots. After that, over half of our team also had a midterm to study for/work on, which took quite a bit of time, and I had some other commitments in my role as a department ambassador. Coming up though, and this is the exciting bit, we, along with the rest of our capstone class, will be presenting our pitches to some employees of Rockstar Games. We have to update our pitch again so that it’s shorter and fits in the time frame provided for this, but we’re very excited. 

However, because of it, we wanted to finish up development on some features we’ve been working on so that we could record them in action and include them in the pitch. As a result, we’ve done quite a bit of development work in the past couple weeks. It’s all summarized in the details below to avoid taking up too much space. We also did a bunch of work on better defining our enemy design in the past few weeks. We got some faculty feedback during our pitch and I’m excited to finally show some concepts of those down below. 

On that note, art. There’s a ton of updates here. I don’t have space to really mention all of them, but all or most of them should be included below. 

Hope everyone’s had a great few weeks. We’ll let you know next week how this next pitch went. Now, on to detailed progress: 

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
                <img class="d-block mx-auto" src="/img/posts/week11-fall/12_BasicEnemyConcepts.png"
                    alt="Basic Enemy Concepts">
                <div class="carousel-caption d-none d-md-block">
                    <p>Basic Enemy Concepts</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block mx-auto" src="/img/posts/week11-fall/12_ShieldEnemyConcepts.png"
                    alt="Shield Enemy Concepts">
                <div class="carousel-caption d-none d-md-block">
                    <p>Shield Enemy Concepts</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block mx-auto" src="/img/posts/week11-fall/12_PolearmEnemyConcepts.png"
                    alt="Polearm Enemy Concepts">
                <div class="carousel-caption d-none d-md-block">
                    <p>Polearm Enemy Concepts</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block mx-auto" src="/img/posts/week11-fall/12_EnemyDamageConcepts.png"
                    alt="Enemey Damage Concepts">
                <div class="carousel-caption d-none d-md-block">
                    <p>Enemey Damage Concepts</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block mx-auto" src="/img/posts/week11-fall/12_ShrineArea.png"
                    alt="Shrine Area Model">
                <div class="carousel-caption d-none d-md-block">
                    <p>Shrine Area Model</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block mx-auto" src="/img/posts/week11-fall/12_PlayerSwordModels.png"
                    alt="Player Sword Models & Hilt">
                <div class="carousel-caption d-none d-md-block">
                    <p>Player Sword Models & Hilt</p>
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
    <li>Sofia did a ton of work on enemy concepts</li>
    <ul class="mt-2">
        <li>We have a few different designs for the different enemy types we’ll have in-game, but we’re really excited about them</li>
    </ul>
    <li>Sofia also updated sword concepts again</li>
    <ul class="mt-2">
        <li>This should be the final version of these</li>
    </ul>
    <li>Xy updated our character model again with some guidance from one of our faculty committee members, David Sanchez</li>
    <ul class="mt-2">
        <li>This also includes updates to the player’s belt and bracer models</li>
    </ul>
    <li>Xy also started working on an arch model, one of the few environmental assets, we know we want in-game</li>
    <li>Xy also started on creating the models for the player’s swords and they are looking great</li>
    <li>Effy M. did some more work on walking animations for the player</li>
</ul>

<div class="row my-5">
    <div id="carouselExampleIndicators1" class="carousel slide shadow rounded" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators1" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators1" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators1" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators1" data-slide-to="3"></li>
            <li data-target="#carouselExampleIndicators1" data-slide-to="4"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item">
                <img class="d-block mx-auto" src="/img/posts/week11-fall/12_UI_UpdatedDesignSystem.png"
                    alt="Updated UI Design System">
                <div class="carousel-caption d-none d-md-block">
                    <p>Updated UI Design System</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block mx-auto" src="/img/posts/week11-fall/12_UI_UpdatedTitleScreenDesign.png"
                    alt="Updated Title Screen Design">
                <div class="carousel-caption d-none d-md-block">
                    <p>Updated Title Screen Design</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block mx-auto" src="/img/posts/week11-fall/12_UI_SettingsMenuDesign.png"
                    alt="UI Settings Menu Design">
                <div class="carousel-caption d-none d-md-block">
                    <p>UI Settings Menu Design</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block mx-auto" src="/img/posts/week11-fall/12_UI_ExampleSettingOptionsDesign.png"
                    alt="Example Setting Options Design">
                <div class="carousel-caption d-none d-md-block">
                    <p>Example Setting Options with UI Components Design</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block mx-auto" src="/img/posts/week11-fall/12_UI_UpdatedHealthBarDesign.png"
                    alt="Updated Health Bar Design">
                <div class="carousel-caption d-none d-md-block">
                    <p>Updated Health Bar Design</p>
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

<ul class="section-body mt-4">
    <li>Rudy & Effie W. worked on updating the health bar UI</li>
    <li>Rudy & Effie W. also worked on updating our UI designs in general</li>
    <ul class="mt-2">
        <li>We have a new UI scheme and some new examples of how we want things like settings to look in-game</li>
    </ul>
    <li>Kyle & Nick worked on getting some reference videos to Effy to help with player animations</li>
</ul>

## Design

<ul class="section-body mt-4">
    <li>Everyone worked on brainstorming some new ideas for our enemies.</li>
    <ul class="mt-2">
        <li>Hopefully we have some concepts for these next week, but we’re excited for the new idea.</li>
    </ul>
    <li>Connected to the above, but we also did some brainstorming on boss mechanics and design.</li>
    <ul class="mt-2">
        <li>Hopefully we’ll be able to share more soon on that front as well.</li>
    </ul>
</ul>

## Development

<ul class="section-body mt-4">
    <li>Rudy did quite a bit of research this week on cross scene references in Unity.</li>
    <li>Nick & John both worked on cleaning up our GitHub Repository and Unity Project.</li>
    <ul class="mt-2">
        <li>We had a lot of remnants from previous sprints and playtests that hadn’t been deleted yet.</li>
    </ul>
    <div class="row my-5">
        <img src="/img/posts/week9-fall/10_Dev_CapeSimInitialTest.gif" class="rounded mx-auto d-block shadow rounded w-80"
            alt="Initial Simulation Test of the Player Character's Cape">
    </div>
    <li>Rudy and Effy worked on the cape simulation for our Player Character.</li>
    <li>Nick started working on a bug we’ve been seeing with how the player turns.</li>
    <li>Trent worked on programming a new system that would allow us to balance a lot of the data we need in the editor instead of in the code.</li>
    <li>John worked on updating our camera to a new system.</li>
    <ul class="mt-2">
        <li>It’s looking like it’s going to take a lot of tweaking, but it should work much better in the end.</li>
    </ul>
</ul>

## Management

<ul class="section-body mt-4">
    <li>Sprint Retrospective this week.</li>
    <ul class="mt-2">
        <li>We had more changes than usual this time.</li>
    </ul>
</ul>

## Documentation

<ul class="section-body mt-4">
    <li>Kyle wrote up an explanation of our health bar UI for our UI artist.</li>
    <li>Kyle also worked a lot on documenting our last 2 playtests.</li>
    <ul class="mt-2">
        <li>Both by creating spreadsheets documenting survey data and writing summaries of what happened and what we learned.</li>
    </ul>
    <li>Everyone also worked on our presentation quite a bit.</li>
    <ul class="mt-2">
        <li>We’re pitching to faculty on Thursday, the 28th.</li>
    </ul>
</ul>

<br>

And that’s everything for the week. Thanks again, everyone!

<br>