# Rock | Paper | Scissors | Spock | Lizard

A game based on rock paper scissors, but with a twist.

## Credits

First of all, I want to give credit where credit is due. Some of the code snippets I have in my JS code have been taken and/or modified from DevEd's channel on youtube.
I will provide a link to the video in this readme file, accompanied with comments in the JS file.

[Link to Ed's video on rock paper scissors](https://www.youtube.com/watch?v=qWPtKtYEsN4 "here")

Besides from that, I used google and stackOverFlow to find out what my code should look like.

Thanks Ed!

## Purpose of this app

- The site’s users want to play an online game that has elements of chance.
- The site’s goal is to provide a fun experience playing rock, paper, scissors, but with some additions.
- The game features two additional (but not optional) choices called "Spock" and "Lizard", which makes it a bit harder to win than the usual rules.

The game features two additional (but not optional) choices called "Spock" and "Lizard", which makes it a bit harder to win than the usual rules.

## Development

The idea for this project had it's inception when I was reading through the CI assessment project ideas. I went with project example idea #1.

The first thing was to write the HTML.
it consists of two main elements ('Main Page' and 'Game'), filled with subelements.

### Main Page

![screencapture-127-0-0-1-5500-index-html-2021-04-22-17_34_07](https://user-images.githubusercontent.com/74976915/115743637-22d6fe80-a392-11eb-9bfe-844b124fd065.png)

### Game page

![screencapture-127-0-0-1-5500-index-html-2021-04-22-17_34_22](https://user-images.githubusercontent.com/74976915/115743226-c1169480-a391-11eb-8ff7-972d27894d2d.png)

Once I had my basic HTML structure setup, I started adding the CSS. Much trial and error here!
I wanted to have everything on one single page so I had to put a class of 'hide' on all the elements I wanted to hide while writing the stylesheet.

Once the basics of the CSS were there, I started looking into the JS part.

The JS consists of functions to

- hide
- update
- disable and change elements.
  What those functions are can be found in the JS file comments.

I then started finding bugs, errors, bad practice etc. So I started refactoring some of the HTML and CSS to be more flexible and accessible when writing in JS.

Last thing I did (but should have done earlier, I admit) was to add media queries for larger/smaller computer screens, and finally iPad and phone screens.

## What I learned

Was the beauty of using functions, for pretty much everything! Without well though-out functions, this wouldn't be possible.
I did struggle sometimes with the logic, but that's just part of the game.
