
// Corrected scuberGreetingForFeet function
function scuberGreetingForFeet(feet) {
  if (feet <= 400) {
    return 'This one is on me!';
  } else if (feet > 2000 && feet <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else {
    return 'No can do.'; 
  }
}


// Function to be tested - ternaryCheckCity
function ternaryCheckCity(city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

// Function to be tested - switchOnCharmFromTip
function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}

module.exports = {
  scuberGreetingForFeet,
  ternaryCheckCity,
  switchOnCharmFromTip
};
