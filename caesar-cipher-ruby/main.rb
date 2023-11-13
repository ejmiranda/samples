def caesar_cipher (string, key)
  string.gsub(/[a-zA-Z]/) do |char|
    base = char.ord < 97 ? 65 : 97 # Uppercase (65-90) or lowercase (97-122)
    shift_code = char.ord + key
    adjusted_code = shift_code - 26 * ((shift_code - base) / 26).floor
    adjusted_code.chr
  end
end

puts ("What a string!") # Original
puts ("Bmfy f xywnsl!") # Expected
puts caesar_cipher("What a string!", 5)
