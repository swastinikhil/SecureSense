// Main.java

//This file runs the entire program.
// The 'main' method is where Java programs start execution.
// Entry point of the behavioural security monitoring system.

public class Main {

    // main() is the starting point of every Java program
    public static void main(String[] args) {

        // Create the baseline behaviour profile
        BaselineProfile baseline = new BaselineProfile();

        // Generate a synthetic user behaviour event
        BehaviorEvent event = SyntheticEventGenerator.generateEvent();

        // Calculate behavioural risk score
        double riskScore = DriftAnalyzer.calculateRisk(baseline, event);

        // Convert score into risk category
        String riskLevel = RiskAssessor.assessRisk(riskScore);

        // Display results
        System.out.println("Weighted Risk Score: " + riskScore);
        System.out.println("Risk Level: " + riskLevel);
    }
}