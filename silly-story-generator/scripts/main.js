let customName = document.getElementById(`custom-name`);
let randomize = document.querySelector(`.randomize`);
let story = document.querySelector(`.story`);

let storyText = `It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.`;

let insertX = [
  `Willy the Goblin`,
  `Big Daddy`,
  `Father Christmas`
];

let insertY = [
  `the soup kitchen`,
  `Disneyland`,
  `the White House`
];

let insertZ = [
  `spontaneously combusted`,
  `melted into a puddle on the sidewalk`,
  `turned into a slug and crawled away`
];

function randomValueFromArray(array) {
  return array[Math.floor(Math.random()*array.length)];
}

randomize.onclick = function() {
  
  let newStory;

  if(customName.value !== ``) {
    let name = customName.value;
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);

    newStory = storyText;
    newStory = newStory.replace(/Bob/g, name);
    newStory = newStory.replace(/:insertx:/g, xItem);
    newStory = newStory.replace(/:inserty:/g, yItem);
    newStory = newStory.replace(/:insertz:/g, zItem);

  } else {
    alert(`Please enter a Custom Name`);
  }

  if (document.getElementById("uk").checked) {
    let weight = `${Math.round(300 * 0.071429)} stone`;
    let temperature = `${Math.round((94-32) * (5/9))} centigrade`;
    newStory = newStory.replace(/300 pounds/g, weight);
    newStory = newStory.replace(/94 fahrenheit/g, temperature);
  }
  
  story.textContent = newStory;
  story.style.visibility = `visible`;
}
