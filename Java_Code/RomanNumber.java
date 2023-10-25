import java.util.HashMap;

public class RomanToInteger {
    public static int romanToInt(String s) {
        // Create a HashMap to store Roman numeral symbols and their corresponding values.
        HashMap<Character, Integer> romanValues = new HashMap<>();
        romanValues.put('I', 1);
        romanValues.put('V', 5);
        romanValues.put('X', 10);
        romanValues.put('L', 50);
        romanValues.put('C', 100);
        romanValues.put('D', 500);
        romanValues.put('M', 1000);

        int result = 0;
        int prevValue = 0; // To keep track of the previous Roman numeral value.

        // Iterate through the Roman numeral characters from right to left.
        for (int i = s.length() - 1; i >= 0; i--) {
            char currentChar = s.charAt(i);
            int currentValue = romanValues.get(currentChar);

            // If the current value is less than the previous value, subtract it.
            if (currentValue < prevValue) {
                result -= currentValue;
            } else {
                result += currentValue;
            }

            // Update the previous value for the next iteration.
            prevValue = currentValue;
        }

        return result;
    }

    public static void main(String[] args) {
        String romanNumeral = "IX"; // Replace with your Roman numeral input.
        int intValue = romanToInt(romanNumeral);
        System.out.println("The integer value of " + romanNumeral + " is: " + intValue);
    }
}
