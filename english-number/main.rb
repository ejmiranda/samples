def english_number number
 
  units = [
    "zero", "one", "two", "three", "four",
    "five", "six", "seven", "eight", "nine"
  ]

  teens = [
    "eleven", "twelve", "thirteen", "fourteen", "fifteen",
    "sixteen", "seventeen", "eighteen", "nineteen"
  ]

  tens = [
    "ten", "twenty", "thirty", "forty", "fifty",
    "sixty", "seventy", "eighty", "ninety"
  ]

  if number < 0 || number > 1000000
    text = "Please enter a number between 0 and 1,000,000"
  elsif number < 10
    text = units[number]
  elsif number > 10 && number < 20
    text = teens[number - 11]
  elsif number <= 99
    text = tens[(number - 10) / 10]
    if number % 10 > 0
      text = text + "-" + english_number(number % 10)
    end
  elsif number <= 999
    text = english_number(number / 100) + " hundred"
    if number % 100 > 0
      text = text + " and " + english_number(number % 100)
    end
  elsif number <= 999999
    text = english_number(number / 1000) + " thousand"
    if number % 1000 > 0
      text = text + " " + english_number(number % 1000)
    end
  else 
    text = english_number(number / 1000000) + " million"
  end

  text

end
