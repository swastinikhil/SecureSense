//BehaviorEvent.java

// This class represents ONE USER SESSION.
//Every time a user logs in, a BehaviorEvent object stores
// all behavioural indicators observed during that session.

//These indicators are used by the DriftAnalyzer to calculate
//the Weighted Behavioral Risk Score

public class BehaviorEvent {

    // -----------------------------
    // CONTEXT PARAMETERS
    //These describe the environment from which the user logged in.
    // -----------------------------

    // 'boolean' stores true or false values
    // Indicates if the login IP address changed
    public boolean ipAddressChange;

    // Indicates if the browser/device changed
    public boolean browserChange;

    // -----------------------------
    // AUTHENTICATION BEHAVIOUR
    //These parameters analyze login-related activity.
    // -----------------------------

    // Number of failed login attempts
    //High numbers may indicate password guessing attacks.
    public int failedLoginAttempts;

    // Number of password reset requests
    //Frequent resets may indicate account compromise attempts.
    public int passwordResetFrequency;

    // Number of attempts to bypass Multi-Factor Authentication
    public int mfaBypassAttempts;

    // -----------------------------
    // SESSION BEHAVIOUR
    // These analyze user activity after login.
    // -----------------------------

    // Total session duration (minutes)
    public double sessionDuration;

    // Number of logins within the session period
    public int loginCount;

    // Number of pages visited
    public int pagesVisited;

    // Whether the session stayed connected but inactive
    public boolean longInactiveSession;

    // Delay after login before first navigation action
    public double navigationDelay;

    // Repeated action loops (possible automation)
    public int repeatedActionLoop;

    // -----------------------------
    // SECURITY INDICATORS
    // These represent high-risk events.
    // -----------------------------

    // Access to sensitive files
    public boolean sensitiveFileAccess;

    // Unusual database query pattern
    public boolean databaseQueryChange;

    // Access outside authorized working hours
    public boolean outsideAuthorizedHours;

    // -----------------------------
    // BEHAVIORAL INTERACTION PATTERNS
    // These analyze human interaction style.
    // -----------------------------

    // Change in normal workflow order
    public boolean workflowOrderChange;

    // Change in shortcut usage behaviour
    public boolean shortcutUsageChange;

    // Interaction depth during this session
    public double interactionDepth;

    // Typing speed during this session
    public double typingSpeed;

    // Scroll behaviour variation
    public double scrollVariation;

    // Frequency spike in copy-paste actions
    public int copyPasteSpike;
}