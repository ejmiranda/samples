class Test
  def output
    hours_per_year = 24 * 365
    puts "A year has #{hours_per_year} hours."
    minutes_per_decade = hours_per_year * 60 * 10
    puts "A decade has #{minutes_per_decade} minutes."
    birth_date = Time.new(1984, 12, 21, 7, 0, 0)
    puts "I am #{Time.now - birth_date} seconds old."
    age = 1298000000/60/60/24/365
    puts "If you are 1,298,000,000 seconds old, your age is #{age}."
  end
end

a = Test.new
a.output