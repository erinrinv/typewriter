const sentence = "hello there from lighthouse labs";
// init the delay amount
let delay = 0; 
//loops through characters of the sentence provided
for (const char of sentence) {
  setTimeout(() => {
    // more control and avoid automatically adding an extra "newline character" at the end each time.
    process.stdout.write(char)
  }, delay)
  // increments the delay by 50 milliseconds for each character. 
  delay += 50;
}