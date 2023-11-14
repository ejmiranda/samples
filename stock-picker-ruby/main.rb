def stock_picker(prices)
  days = []
  profit = 0
  prices.each_with_index do |price, day|
    next_prices = prices.slice(day + 1, prices.length)
    next_prices.each_with_index do |next_price, next_day|
      if next_price - price > profit
        profit = next_price - price
        days = [] << day << day + next_day + 1 # Because next_day always starts with 0.
      end
    end
  end
  days
end

puts "#{stock_picker([17,3,6,9,15,8,6,1,10])} <- Result"
puts '[1, 4] <- Expected'
