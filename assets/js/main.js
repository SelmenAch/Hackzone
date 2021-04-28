
  document.addEventListener('DOMContentLoaded', () => {

  // Unix timestamp (in seconds) to count down to
  var timeremaining = (new Date().getTime() / 1000) + ((new Date("May 1 2021 22:00").getTime() / 1000) - (new Date().getTime() / 1000)) + 1;

  // Set up FlipDown
  var flipdown = new FlipDown(timeremaining, {
  theme: "light",
})

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
      console.log('The countdown has ended!');
    });
  
});
