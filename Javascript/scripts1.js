// 1. Initialize the lunches array
const lunches = [];

// 2. Add lunch to end
function addLunchToEnd(arr, lunchItem) {
  arr.push(lunchItem);
  console.log(`${lunchItem} added to the end of the lunch menu.`);
  return arr;
}

// 3. Add lunch to start
function addLunchToStart(arr, lunchItem) {
  arr.unshift(lunchItem);
  console.log(`${lunchItem} added to the start of the lunch menu.`);
  return arr;
}

// 4. Remove last lunch
function removeLastLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches to remove.");
    return arr;
  }
  const removed = arr.pop();
  console.log(`${removed} removed from the end of the lunch menu.`);
  return arr;
}

// 5. Remove first lunch
function removeFirstLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches to remove.");
    return arr;
  }
  const removed = arr.shift();
  console.log(`${removed} removed from the start of the lunch menu.`);
  return arr;
}

// 6. Get random lunch
function getRandomLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches available.");
    return;
  }
  const index = Math.floor(Math.random() * arr.length);
  console.log(`Randomly selected lunch: ${arr[index]}`);
}

// 7. Show full menu
function showLunchMenu(arr) {
  if (arr.length === 0) {
    console.log("The menu is empty.");
  } else {
    console.log(`Menu items: ${arr.join(", ")}`);
  }
}

addLunchToEnd(lunches, "Burger");      // Burger added to the end...
addLunchToStart(lunches, "Pizza");     // Pizza added to the start...
removeLastLunch(lunches);              // Burger removed from the end...
removeFirstLunch(lunches);             // Pizza removed from the start...
getRandomLunch(["Sushi", "Salad"]);    // Randomly selected lunch: ...
showLunchMenu(["Greens", "Beans"]);    // Menu items: Greens, Beans
