def bubble_sort (arr)
  arr.length.times do |iteration| # Times the array gets iterated in worst case scenario.
    sorted = true
    arr.each_with_index do |num, idx|
      break if idx + 1 + iteration == arr.length # Skip the sorted elements at the end of the array.
      if arr[idx] > arr[idx + 1]
        arr[idx], arr[idx + 1] = arr[idx + 1], arr[idx]
        sorted = false
      end
      puts "#{arr} <- #{iteration} #{idx}"
    end
    break if sorted # If no element was moved in the last iteration, the array is sorted.
  end
  arr
end

puts '[4, 3, 78, 2, 0, 2] <- Original'
puts "#{bubble_sort([4,3,78,2,0,2])} <- Result"
puts '[0, 2, 2, 3, 4, 78] <- Expected'
