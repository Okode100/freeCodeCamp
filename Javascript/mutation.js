function mutation(arr) {
  // Step 1: Convert both strings to lowercase
  let str1 = arr[0].toLowerCase();
  let str2 = arr[1].toLowerCase();

  // Step 2: Loop through each letter in str2
  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];

    // Step 3: Check if str1 includes the letter
    if (!str1.includes(letter)) {
      return false; // if even one letter is not found, return false
    }
  }

  // Step 4: All letters found
  return true;
}
