def stock_picker(prices)
  picker = { d_buy: 0, d_sell: 0, profit: 0}
  prices.each_with_index do |price, day|
    next_prices = prices.slice(day + 1, prices.length)
    next_prices.each_with_index do |next_price, next_day|
      if next_price - price > picker[:profit]
        picker[:profit] = next_price - price
        picker[:d_buy] = day
        picker[:d_sell] = day + next_day + 1
      end
    end
  end
  [picker[:d_buy], picker[:d_sell]]
end

p stock_picker([17,3,6,9,15,8,6,1,10])
