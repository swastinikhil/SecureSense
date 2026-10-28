// DriftAnalyzer.java

// This class calculates the weighted behavioural risk score.

// Formula used:
//
// Risk Score = Σ (Drift × Weight)
//
// Drift = |Current Value - Baseline Value|


public class DriftAnalyzer {

    // Method to compute risk score
    // 'static' means this method can be used without creating object
    // 'double' means this method returns a decimal number
    public static double calculateRisk(BaselineProfile baseline, BehaviorEvent current) {

        // Variable to store final risk score
        double score = 0;

        // -----------------------------
        // CONTEXT RISK INDICATORS
        // -----------------------------

        // Ternary operator
        // Syntax: condition ? value_if_true : value_if_false

        // IP change may indicate login from a different location
        score += (current.ipAddressChange ? 0.05 : 0);

        // Browser/device change may indicate new device usage
        score += (current.browserChange ? 0.04 : 0);

        // -----------------------------
        // AUTHENTICATION BEHAVIOUR
        // -----------------------------

        // Multiple failed logins may indicate password guessing
        score += current.failedLoginAttempts * 0.10;

        // Frequent password resets may indicate compromised account
        score += current.passwordResetFrequency * 0.06;

        // MFA bypass attempts are high risk
        score += current.mfaBypassAttempts * 0.12;

        // -----------------------------
        // SESSION BEHAVIOUR (Drift from baseline)
        // -----------------------------

        // 'Math.abs()' is used to calculate absolute value
        // which means removing negative sign.

        // Compare session duration with normal behaviour
        score += Math.abs(current.sessionDuration - baseline.sessionDuration) * 0.04;

        // Compare login count
        score += Math.abs(current.loginCount - baseline.loginCount) * 0.05;

        // Compare number of pages visited
        score += Math.abs(current.pagesVisited - baseline.pagesVisited) * 0.04;

        // Detect long idle sessions
        score += (current.longInactiveSession ? 0.03 : 0);

        // Compare navigation delay
        score += Math.abs(current.navigationDelay - baseline.navigationDelay) * 0.05;

        // Repeated actions may indicate bot activity
        score += current.repeatedActionLoop * 0.05;

        // -----------------------------
        // SECURITY INDICATORS
        // -----------------------------

        // Accessing sensitive files increases risk
        score += (current.sensitiveFileAccess ? 0.10 : 0);

        // Unusual database queries may indicate data extraction
        score += (current.databaseQueryChange ? 0.08 : 0);

        // Access outside authorized time window
        score += (current.outsideAuthorizedHours ? 0.07 : 0);

        // -----------------------------
        // BEHAVIOURAL INTERACTION PATTERNS
        // -----------------------------

        // Change in workflow sequence
        score += (current.workflowOrderChange ? 0.04 : 0);

        // Change in shortcut usage
        score += (current.shortcutUsageChange ? 0.03 : 0);

        // Compare interaction depth
        score += Math.abs(current.interactionDepth - baseline.interactionDepth) * 0.03;

        // Compare typing speed
        score += Math.abs(current.typingSpeed - baseline.typingSpeed) * 0.03;

        // Compare scroll behaviour
        score += Math.abs(current.scrollVariation - baseline.scrollVariation) * 0.02;

        // Copy-paste spike may indicate data exfiltration
        score += current.copyPasteSpike * 0.04;

        // 'return' sends the result back to the caller
        return score;
    }
}