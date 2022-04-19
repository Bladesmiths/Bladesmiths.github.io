---
layout: post
title: "Sprint 15 Update (Week 11)"
subtitle: "Boss Appearance Progress"
date: 2022-4-5 12:00:00
author: Trent
background: '/img/post-covers/spring-11-cover.png'
tags: 
    - Weekly Post
---

Another week, another update. This week we spent a lot of time going over feedback from GDC and reevaluating our priorities once again. After doing that, we were able to make quite a bit of progress though, with quite a bit of progress getting made on pretty much every aspect of the game. Nick updated more of the boss’ behaviors  so they make more sense and work more effectively. I worked on updating the level to hopefully make it easier to navigate, since this continues to be an issue in playtests, and I also worked on adding in our new movement animations. Kyle worked on updating our health bar UI systems, both the boss’ and the player’s so that they can be updated more easily at runtime. John made a bunch of progress on the enemy, finally starting to make more progress on enemy animations and getting started on enemy shattering as well. And we all also worked on bug fixing as we went. 

Our artists continued to make some great progress this week, with more updates to the opening cutscene sketches and more updates to the boss coming down the line from Sofia and Xy. Effy also updated the enemy rig again in an effort to solve some more issues with enemy animations. And Michal gave us the first iteration of the custom topaz attack animations, while Kesavan worked on the visual effects for the explosion that’s part of the boss’ attacks. 

Now, on to more specific progress:

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
                <img class="d-block mx-auto" src="/img/posts/week11-spring/24_ColoredWar.png"
                    alt="Colored War Sketch">
                <div class="carousel-caption d-none d-md-block">
                    <p>Colored War Sketch</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block mx-auto" src="/img/posts/week11-spring/24_ColoredEnemyAttack.png"
                    alt="Colored Enemy Attack">
                <div class="carousel-caption d-none d-md-block">
                    <p>Colored Enemy Attack</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block mx-auto" src="/img/posts/week11-spring/24_ColoredRunningToShrine.png"
                    alt="Colored Running to Shrine Sketch">
                <div class="carousel-caption d-none d-md-block">
                    <p>Colored Running to Shrine Sketch</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block mx-auto" src="/img/posts/week11-spring/24_BossWIPUpdate.png"
                    alt="Boss WIP Update">
                <div class="carousel-caption d-none d-md-block">
                    <p>Boss WIP Update</p>
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
    <li>Sofia continued working on the opening cutscene, coloring a few more of the original sketches</li>
    <li>Xy continued working on the boss, adding more to the boots from the week prior</li>
    <li>Effy updated the enemy rig to help with animation</li>
</ul>

<!-- 16:9 aspect ratio -->
<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="/img/posts/week11-spring/24_TopazAttackWIP.mp4" allowfullscreen></iframe>
</div>

<ul class="section-body mt-4">
    <li>Michal worked on a custom attack animation for the Topaz sword</li>
</ul>

<!-- 16:9 aspect ratio -->
<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="/img/posts/week11-spring/24_BossExplosionWIP.mp4" allowfullscreen></iframe>
</div>

<ul class="section-body mt-4">
    <li>Kesavan worked on the VFX for the explosion that’s part of the boss’ attacks</li>
</ul>

## Development

<ul class="section-body mt-4">
    <li>JNick updated the boss’ backup behavior so that their sweep attack works better</li>
    <li>I worked on adding even more stuff to the level environment to try to make it easier to navigate by giving more unique landmarks</li>
    <li>John updated the enemy’s NavMesh so that they hopefully stop walking through houses</li>
    <li>Kyle worked on the boss’ health bar implementation</li> 
    <li>Nick and I worked on fixing some bugs related to player respawn and the swords’ hitboxes</li>
    <li>John worked on implementing enemy animations now that the enemy’s rig is finally fixed</li>
    <li>John also worked on getting enemy shattering to work again now that the enemies are animated</li>
    <ul class="mt-2">
        <li>We really wanted to keep this in since it’s been really well received and it’s a really effective way to show enemy health</li>
    </ul>
    <li>Nick finished finding animations for the boss on mixamo and implemented them</li>
    <li>Kyle updated the player health bar so that it can be in any color, allowing us to change the color based on the player’s currently selected sword</li>
    <li>I fixed some bugs related to sword switching input and a sapphire form specific bug</li> 
    <li>I also started working on implementing the new custom movement animations our artists made for us</li>
</ul>

## Management

<ul class="section-body mt-4">
    <li>I worked on some backlog refinement, adding new tasks for the things we decided were priority going forward since we have so little time left</li>
</ul>

## Documentation

<ul class="section-body mt-4">
    <li>John continued working on his individual research</li>
    <li>I continued working on my individual research, updating my survey so it makes more sense and continuing to refine the other documents so I can submit for IRB approval</li>
    <ul class="mt-2">
        <li>The IRB is the Institutional Review Board, they need to review anything related to human-subject research</li>
    </ul>
</ul>

<br>

That’s all for now folks!

<br>