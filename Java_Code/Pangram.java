public class PangramChecker {
    public static boolean isPangram(String str) {
        // Create a boolean array to mark the presence of each letter (a to z).
        boolean[] alphabet = new boolean[26];
        
        // Convert the input string to lowercase for case-insensitive comparison.
        str = str.toLowerCase();
        
        // Iterate through the characters of the input string.
        for (int i = 0; i < str.length(); i++) {
            char c = str.charAt(i);
            
            // Check if the character is a lowercase letter.
            if (c >= 'a' && c <= 'z') {
                alphabet[c - 'a'] = true; // Mark the letter as present.
            }
        }
        
        // Check if all letters (a to z) are marked as present.
        for (boolean present : alphabet) {
            if (!present) {
                return false; // If any letter is missing, it's not a pangram.
            }
        }
        
        return true; // All letters are present, so it's a pangram.
    }
    
    public static void main(String[] args) {
        String input = "The quick brown fox jumps over the lazy dog"; // Replace with your input string.
        boolean isPangram = isPangram(input);
        
        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }
}
