words = []

while words.last != ""
  puts ""
  puts "Please type in a word:"
  words.push gets.chomp
end

puts ""
puts "Sorted Array:"

words.length.times do
  (words.length - 1).times do |j|
    if words[j].downcase > words[j+1].downcase
      temp = words[j]
      words[j] = words[j+1]
      words[j+1] = temp
    end
  end
end

puts words
