function showMethodSelection(answer) {
  if (answer === 'yes') {
    document.getElementById('methodSelection').style.display = 'block';
  } else {
    document.getElementById('methodSelection').style.display = 'none';
    document.getElementById('dateField').style.display = 'none';
    document.getElementById('zodiacSelection').style.display = 'none';
  }
}
function showDateField(method) {
    document.getElementById('methodSelection').style.display = 'none';
  
    if (method === 'year') {
      document.getElementById('dateField').style.display = 'block';
    } else if (method === 'zodiac') {
      showZodiacSelection();
    }
  }
function confirmDate() {
    var birthdate = document.getElementById('birthdate').value;
    var birthYear = new Date(birthdate).getFullYear();
    var animalYear = getAnimalYear(birthYear);
    displayQualities(animalYear);
  }
function getAnimalYear(year) {
    var animals = [
      "Крыса", "Бык", "Тигр", "Кролик", "Дракон", "Змея",
      "Лошадь", "Овца", "Обезьяна", "Петух", "Собака", "Свинья"
    ];
  
    var startYear = 1900;
    var animalIndex = (year - startYear) % animals.length;
  
    return animals[animalIndex];
  }
  function displayQualities(animalYear) {
    var qualities = generateQualities();
    var qualitiesText = "ХАРАКТЕРИСТИКИ:\n";
    for (var i = 0; i < qualities.length; i++) {
      qualitiesText += "- " + qualities[i] + "\n";
    }
  
    document.getElementById('qualities').innerText = qualitiesText;
    document.getElementById('qualities').style.border = '1px solid black';
  }
  
  function generateQualities() {
    var qualitiesArray = [
      ["Добрый", "Трудолюбивый", "Умный"],
      ["Дружелюбный", "Творческий", "Ответственный"],
      ["Веселый", "Честный", "Амбициозный"],
      ["Аккуратность", "Ответственность", "Скромность"],
      ["Оптимизм", "Рассудительность", "Терпеливость"],
      ["Упорство", "Смелость", "Бережливость"]
    ];
  
    return getRandomArray(qualitiesArray);
  }
  
  function getRandomArray(array) {
    var shuffledArray = array
      .map(function (a) { return {sort: Math.random(), value: a}; })
      .sort(function (a, b) { return a.sort - b.sort; })
      .map(function (a) { return a.value; });
  
    return shuffledArray;
  }
  
  function showZodiacSelection() {
    document.getElementById('zodiacSelection').style.display = 'block';
  }
  
  function confirmZodiac() {
    var zodiacSign = document.getElementById('zodiacSign').value;
    var zodiacQualities = getZodiacQualities(zodiacSign);
    displayQualities(zodiacQualities);
  }
  
  function getZodiacQualities(zodiac) {
    var zodiacQualitiesMap = {
      'aries': ["Энергичный", "Независимый", "Стремительный"],
      'taurus': ["Стабильный", "Упрямый", "Чувственный"],
      'gemini': ["Общительный", "Умный", "Адаптивный"],
      'gemini2': ["Оптимизм", "Рассудительность", "Терпеливость"],
      'gemini3': ["Добрый", "Трудолюбивый", "Умный"],
      'gemini4': ["Веселый", "Честный", "Амбициозный"],
      'gemini5': ["Энергичный", "Независимый", "Стремительный"],
      'gemini6': ["Упорство", "Смелость", "Бережливость"],
      'gemini7': ["Юмор", "Щедрость", "Доброта"],
      'gemini8': ["Верность", "Правливость", "Искренность"],
      'gemini9': ["Терпение", "Настойчивость", "Энтузиазм"],
      'gemini9': ["Толерантность", "Бережливость", "Послушание"],
    };
  
    return zodiacQualitiesMap[zodiac] || [];
  }
function restart() {
  location.reload();
}
