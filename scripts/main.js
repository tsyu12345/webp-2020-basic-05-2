const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

let insertx = ["willy the Goblin", "Big Daddy", "Father Christmas"];
let inserty = ["the soupe kitchen", "Disney land", "the White house"];
let insertz = ["spontaneously combusted", "melted into a pubble on the sidewalk", "turned into a slug and crawled away"];

randomize.addEventListener('click', result);

function result() {
let newStory = storyText;
let xItem = randomValueFromArray(insertx);
let yItem = randomValueFromArray(inserty);
let zItem = randomValueFromArray(insertz);

newStory = newStory.replace(':insertx:', xItem);
newStory = newStory.replace(':inserty:', yItem);
newStory = newStory.replace(':insertz:', zItem);
  if(customName.value !== 'Bob') {
    let name = customName.value;
    newStory = newStory.replace("Bob", name);
  }

  if(document.getElementById("uk").checked) {
    let weight = Math.round(21.4286) + " stone";
    let temperature =  Math.round(34.4444) + " centigrade";   
    newStory = newStory.replace("94 fahrenheit", temperature);
    newStory = newStory.replace("300 pounds", weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
