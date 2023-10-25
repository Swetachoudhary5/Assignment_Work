import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class ShuffleArray {
    public static void main(String[] args) {
        // Create an ArrayList with the values
        List<Integer> arrayList = new ArrayList<>();
        arrayList.add(1);
        arrayList.add(2);
        arrayList.add(3);
        arrayList.add(4);
        arrayList.add(5);
        arrayList.add(6);
        arrayList.add(7);

        // Shuffle the ArrayList
        Collections.shuffle(arrayList);

        // Convert the shuffled ArrayList back to an array (if needed)
        Integer[] shuffledArray = arrayList.toArray(new Integer[0]);

        // Print the shuffled array
        for (Integer value : shuffledArray) {
            System.out.print(value + " ");
        }
    }
}
