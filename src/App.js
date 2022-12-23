import './App.css';
import React from "react";
import Countdown from "react-countdown-simple";
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function App() {

  // setting parameters for countdown timer
  const today = new Date();
  let day = today.getDate();
  let month = today.getMonth();

  var christmas; 

  if (month === 11 && day > 25) {
    christmas = new Date(new Date().getFullYear() + 1, 11, 25).toISOString();
  }

  else {
    christmas = new Date(new Date().getFullYear(), 11, 25).toISOString();
  }

  // setting libraries for sounds, activity images, activity names and wallpapers
  const sounds = ["https://cdn.pixabay.com/download/audio/2022/11/28/audio_4bf44cb14d.mp3?filename=jingle-bells-orchestra-127418.mp3", 
  "https://cdn.pixabay.com/download/audio/2022/11/15/audio_a4c3eb97c5.mp3?filename=we-wish-you-a-merry-christmas-125995.mp3", 
  "https://cdn.pixabay.com/download/audio/2022/11/28/audio_8cc820a6e8.mp3?filename=magical-christmas-127318.mp3", 
  "https://cdn.pixabay.com/download/audio/2022/11/28/audio_f91185fd23.mp3?filename=joyful-snowman-127422.mp3",
"https://cdn.pixabay.com/download/audio/2022/11/29/audio_559a55c337.mp3?filename=christmas-hip-hop-background-music-127549.mp3",
"https://cdn.pixabay.com/download/audio/2022/11/28/audio_4f28ec6062.mp3?filename=happy-santa-127421.mp3",
"https://cdn.pixabay.com/download/audio/2022/12/19/audio_1ca418b7e9.mp3?filename=joy-to-the-world-129908.mp3",
"https://cdn.pixabay.com/download/audio/2022/11/21/audio_e4f08da7ce.mp3?filename=christmas-tree-chillhop-lofi-christmas-background-music-126617.mp3",
"https://cdn.pixabay.com/download/audio/2022/12/10/audio_5a817bde7e.mp3?filename=christmas-journey-128873.mp3",
"https://cdn.pixabay.com/download/audio/2022/11/05/audio_ad54031e00.mp3?filename=family-christmas-orchestral-cinematic-magical-fairy-tale-125109.mp3",
"https://cdn.pixabay.com/download/audio/2022/11/28/audio_1ccca1fe26.mp3?filename=christmas-holidays-127423.mp3",
"https://cdn.pixabay.com/download/audio/2022/11/05/audio_ab14d2836e.mp3?filename=christmas-santa-is-coming-on-winter-holiday-125100.mp3",
"https://cdn.pixabay.com/download/audio/2022/09/16/audio_34334487a1.mp3?filename=happy-holiday-120132.mp3",
"https://cdn.pixabay.com/download/audio/2022/11/21/audio_91d061b560.mp3?filename=magic-christmas-126686.mp3",
"https://cdn.pixabay.com/download/audio/2022/12/08/audio_5a4d9306ce.mp3?filename=silent-nightlofi-christmas-128664.mp3",
"https://cdn.pixabay.com/download/audio/2022/12/13/audio_0c5c38c8d5.mp3?filename=itx27s-christmas-129114.mp3",
"https://cdn.pixabay.com/download/audio/2022/11/25/audio_98a74b222e.mp3?filename=merry-christmas-hip-hop-127092.mp3",
"https://cdn.pixabay.com/download/audio/2022/12/08/audio_f3fdd87bf5.mp3?filename=uplifting-christmas-background-orchestra-128605.mp3",
"https://cdn.pixabay.com/download/audio/2022/11/28/audio_7e172dc477.mp3?filename=christmas-time-127319.mp3",
"https://cdn.pixabay.com/download/audio/2022/11/12/audio_23c53b6c2e.mp3?filename=cinematic-christmas-orchestral-waltz-in-style-home-alone-125674.mp3",
"https://cdn.pixabay.com/download/audio/2022/11/05/audio_54fb673f5a.mp3?filename=merry-christmas-and-happy-new-year-happy-positive-winter-santa-125106.mp3",
"https://cdn.pixabay.com/download/audio/2022/11/05/audio_7cfd7ce187.mp3?filename=christmas-party-and-award-ceremony-corporate-opener-intro-125112.mp3",
"https://cdn.pixabay.com/download/audio/2022/12/13/audio_574f9e8b59.mp3?filename=what-child-is-this-christmas-music-box-129108.mp3",
"https://cdn.pixabay.com/download/audio/2022/11/25/audio_d6fa9a568b.mp3?filename=christmas-hip-hop-127090.mp3",
"https://cdn.pixabay.com/download/audio/2022/11/12/audio_bdb1a845f4.mp3?filename=cheerful-happy-funny-christmas-fairy-tale-orchestra-125672.mp3"];

  var sound;
  if (!(month === 11) || day > 25) {
    sound = "https://cdn.pixabay.com/download/audio/2021/10/15/audio_06ae4a43e1.mp3?filename=christmas-chill-lofi-launge-ig-version-60s-9466.mp3";
  }

  else {
    sound = sounds[day-1];
  }

  const images =["cookies.png", "shopping.png", "movie.png", "wish.png", "book.png", "tree.png", "market.png", "drink.png", "skate.png", "cat.png", "presents.png", "house.png", 
"family.png", "ginger.png", "music.png", "give.png", "ornament.png", "nature.png", "sled.png", "fire.png", "new.png", "outfit.png", "board.png", "dinner.png", "santa.png"];

var image;
if (!(month === 11) || day > 25) {
  image = "owl.png";
}

else {
  image = images[day-1];
}

  const activities=["Make Holiday Treats!", "Go Holiday Shopping!", "Watch a Holiday Movie!", "Write a Wishlist!", "Read a Holiday Book!", "Put up a Christmas Tree!",
"Go to a Holiday Market!", "Have a Holiday Drink!", "Go Ice Skating!", "Look at the Lights!", "Wrap Holiday Presents!", "Decorate your House!", 
"Relax with Loved Ones!", "Make Gingerbread!", "Listen to Christmas Music!", "Donate to Charity!", "Make an Ornament!", 
"Go on a Nature Walk!", "Go Sledding!", "Sit by a Fireplace!", "Write Resolutions!", "Pick a Holiday Outfit!", "Play a Board Game!",
"Have a Holiday Dinner!", "Enjoy Christmas!"];

var activity;
if (!(month === 11) || day > 25) {
  activity = "Wait until December 1st!";
}

else {
  activity = activities[day-1];
}

  const wallpapers =["https://unsplash.com/photos/OlKCes2y1eA/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8c3VnYXIlMjBjb29raWVzfGVufDB8fHx8MTY3MTU2MzAwNA&force=true",
"https://unsplash.com/photos/MMWsEvNK3YQ/download?force=true",
"https://unsplash.com/photos/kD9RgDke_Yw/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8Y2hyaXN0bWFzJTIwbW92aWV8ZW58MHx8fHwxNjcxNTY5NTM0&force=true",
"https://unsplash.com/photos/RcNvt5n6maY/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8d2lzaGxpc3R8ZW58MHx8fHwxNjcxNjI0NDI1&force=true",
"https://unsplash.com/photos/9pw4TKvT3po/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTF8fGNocmlzdG1hcyUyMGJvb2t8ZW58MHx8fHwxNjcxNTc2Nzc0&force=true",
"https://unsplash.com/photos/lsZ30VVJZEE/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MzB8fGNocmlzdG1hcyUyMHRyZWV8ZW58MHx8fHwxNjcxNjE0MDc3&force=true",
"https://unsplash.com/photos/xUg7Wn6bh4I/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8Y2hyaXN0bWFzJTIwbWFya2V0fGVufDB8fHx8MTY3MTY0Mjg4MA&force=true",
"https://unsplash.com/photos/-OD89Biq4KE/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTZ8fGhvdCUyMGNob2NvbGF0ZXxlbnwwfHx8fDE2NzE2MTAzMDU&force=true",
"https://unsplash.com/photos/B8cBKZa9blk/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8OXx8Y2hyaXN0bWFzJTIwc2thdGluZ3xlbnwwfHx8fDE2NzE2NTY0MTY&force=true",
"https://unsplash.com/photos/R7af9oF5iJ0/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8OHx8Y2hyaXN0bWFzJTIwbGlnaHRzfGVufDB8fHx8MTY3MTY0Mzg1OQ&force=true",
"https://unsplash.com/photos/PxM8aeJbzvk/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Nnx8Y2hyaXN0bWFzJTIwc2hvcHBpbmd8ZW58MHx8fHwxNjcxNjMxMzIx&force=true",
"https://unsplash.com/photos/faMVPE56PnU/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTV8fGNocmlzdG1hcyUyMGxpZ2h0c3xlbnwwfHx8fDE2NzE2NDM4NTk&force=true",
"https://unsplash.com/photos/PAykYb-8Er8/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8Y2hyaXN0bWFzJTIwZnJpZW5kc3xlbnwwfHx8fDE2NzE1NzYxMDI&force=true",
"https://unsplash.com/photos/oUy8vm6HS20/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTh8fGdpbmdlcmJyZWFkfGVufDB8fHx8MTY3MTYzNTk3OQ&force=true",
"https://unsplash.com/photos/gOsGgt4olNs/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8M3x8Y2hyaXN0bWFzJTIwbXVzaWN8ZW58MHx8fHwxNjcxNTg0NTI5&force=true",
"https://unsplash.com/photos/SUTfFCAHV_A/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8Y2hyaXN0bWFzJTIwbW92aWV8ZW58MHx8fHwxNjcxNTY5NTM0&force=true",
"https://unsplash.com/photos/jSAGgbDjiEQ/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8M3x8Y2hyaXN0bWFzJTIwb3JuYW1lbnR8ZW58MHx8fHwxNjcxNTc1MjQy&force=true",
"https://unsplash.com/photos/Q1N9vX2Sp1g/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8M3x8Y2hyaXN0bWFzJTIwbmF0dXJlfGVufDB8fHx8MTY3MTY0MDMxMA&force=true",
"https://unsplash.com/photos/rnguvzoG-x8/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8Y2hyaXN0bWFzJTIwc2xlZGRpbmd8ZW58MHx8fHwxNjcxNjYxNzY4&force=true",
"https://unsplash.com/photos/e7fDXFHCvKA/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8OHx8Y2hyaXN0bWFzJTIwZmlyZXxlbnwwfHx8fDE2NzE2MTMyMTY&force=true",
"https://unsplash.com/photos/3I3WVoA-Gks/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8bmV3JTIweWVhciUyMHJlc29sdXRpb25zfGVufDB8fHx8MTY3MTU4NTYzMA&force=true",
"https://unsplash.com/photos/uOS8e3z3YdU/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NXx8Y2hyaXN0bWFzJTIwb3V0Zml0fGVufDB8fHx8MTY3MTY1NDk2Nw&force=true",
"https://unsplash.com/photos/NrS53eUKgiE/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NXx8Ym9hcmQlMjBnYW1lfGVufDB8fHx8MTY3MTYwNzk1MQ&force=true",
"https://unsplash.com/photos/EgG6wcsjFtE/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8Y2hyaXN0bWFzJTIwZGlubmVyfGVufDB8fHx8MTY3MTYzMzc0Mw&force=true",
"https://unsplash.com/photos/7M_Q0DYcI08/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8OXx8Y2hyaXN0bWFzJTIwcHJlc2VudHN8ZW58MHx8fHwxNjcxNjI1Mjc4&force=true"];

var wallpaper;
if (!(month === 11) || day > 25) {
  wallpaper = "https://unsplash.com/photos/xgTMSz6kegE/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8Y3V0ZXxlbnwwfHx8fDE2NzE2NDMzMTQ&force=true";
}

else {
  wallpaper = wallpapers[day-1];
}

  return (
    <div className="App">
      <img src="bg decor.png" class = "background" alt="background"></img>
      <div class = "gif">
      <img src="snow.gif" class = "bg2" alt="snow"></img>
      </div>

      <div class = "inside">
      <h2 class="header">Cute Christmas Countdown </h2>
      <Countdown
        targetDate={christmas}
        // setting the singular and plural words for the countdown
        renderer={({ days, hours, minutes, seconds }) => (
          <div class = "countdown">
          {
            (() => {
              var dmsg;
              var hmsg;
              var mmsg;
              var smsg;

              if (days === 1) {
                dmsg = "Day"
              }

              else {
                dmsg = "Days"
              }

              if (hours === 1) {
                hmsg = "Hour"
              }

              else {
                hmsg = "Hours"
              }    
              
              if (minutes === 1) {
                mmsg = "Minute"
              }

              else {
                mmsg = "Minutes"
              }

              if (seconds === 1) {
                smsg = "Second"
              }

              else {
                smsg = "Seconds"
              }

              return <b> {days} {dmsg} / {hours} {hmsg} / {minutes} {mmsg} / {seconds} {smsg} </b>
            })()
          }
          </div>
        )}
      />
      <br />
      <br />
      <img src = {image} alt="activity"></img>
      <br/>
      <br/>
      <span class="activity"><b class = "a">Today's Activity:</b> {activity}</span>
      <br/>
      <br/>
        <a class = "btn" id="button" href={wallpaper} target="_blank">
          <b>Download Today's Wallpaper!</b></a>
      <br/>
      <br/>
      
      <AudioPlayer
        autoPlay={true}
        loop={true}
        src={sound}
        onPlay={e => console.log("onPlay")}
        customProgressBarSection={
          [
            RHAP_UI.CURRENT_TIME,
            RHAP_UI.PROGRESS_BAR,
            RHAP_UI.CURRENT_LEFT_TIME,
          ]
        }
      />
      </div>
  </div>
  );
}