require 'prime'

def prime_factorization number
  
  prime_factors = []

  Prime.each(number) do |prime|
    if number % prime == 0
      prime_factors << prime
      prime_factors += prime_factorization(number / prime)
      break
    end
  end

  prime_factors

end

puts prime_factorization(600851475143).max