// RiskAssessor.java

// This class converts numeric risk score into risk category.

public class RiskAssessor {

    public static String assessRisk(double score) {

        // 'if' checks a condition

        // Very small risk score
        if(score < 7)
            return "NORMAL";

        // 'else if' checks another condition

        // Moderate risk
        else if(score < 10)
            return "WARNING";

        //'else' runs if all above conditions are false.
        
        // High probability of suspicious behaviour
        else
            return "HIGH RISK";
    }
}