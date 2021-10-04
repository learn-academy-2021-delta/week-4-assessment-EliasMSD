# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

def check(num)
    if num%2==0
        p "#{num} is even"
    else p"#{num} is odd"
    end
end
 check(num1)
 check(num2)
 check(num3)


# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def removeVowels(string)
    string.delete"a" "e" "i" "o" "u"
end
puts removeVowels(album1)
puts removeVowels(album2)
puts removeVowels(album3)




# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forwards or backwards. Use the test variables provided.

is_palindrome1 = 'racecar'
# Expected output: 'Racecar is a palindrome'
is_palindrome2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
is_palindrome3 = 'rotator'
# Expected output: 'Rotator is a palindrome'
def checkPalindrome(string)
    if string == string.reverse
      return "#{string} is a palindrome"
    else
      return "#{string} is not a palindrome"
    end
   end
   puts checkPalindrome(is_palindrome1)
   puts checkPalindrome(is_palindrome2)
   puts checkPalindrome(is_palindrome3)

   #Actually palindrome is case sensitive,
   #"racecar" is palindrom but "Racecar" is not palindrome