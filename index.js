// index.js

function calculateAge(birthDate) {
    const currentDate = new Date();
    const birthDateTime = new Date(birthDate);
    
    const age = currentDate.getFullYear() - birthDateTime.getFullYear();
    const monthDiff = currentDate.getMonth() - birthDateTime.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthDateTime.getDate())) {
      return age - 1;
    }
    
    return age;
  }
  
  module.exports = calculateAge;
  