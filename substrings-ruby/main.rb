def substrings(string, dictionary)
  adj_str = string.downcase
  dictionary.reduce({}) do |total_count, entry|
    str_count = adj_str.scan(entry).length
    total_count[entry] = str_count if str_count > 0
    total_count
  end
end

dictionary = ["below","down","go","going","horn","how","howdy","it","i","low","own","part","partner","sit"]
puts "#{substrings("Howdy partner, sit down! How's it going?", dictionary)} <- Result"
puts '{"down"=>1, "go"=>1, "going"=>1, "how"=>2, "howdy"=>1, "it"=>2, "i"=>3, "own"=>1, "part"=>1, "partner"=>1, "sit"=>1} <- Expected'
