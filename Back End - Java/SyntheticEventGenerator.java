// SyntheticEventGenerator.java

// This class generates synthetic user behaviour data for testing
//because we don't have real user data.

// Import Random class from Java library
import java.util.Random;

public class SyntheticEventGenerator {

    public static BehaviorEvent generateEvent() {

        // Create Random object
        Random rand = new Random();
        // Create new BehaviorEvent object
        BehaviorEvent event = new BehaviorEvent();

        // CONTEXT SIMULATION
        // nextBoolean() → returns true or false randomly
        event.ipAddressChange = rand.nextBoolean();
        event.browserChange = rand.nextBoolean();

        // AUTHENTICATION BEHAVIOUR SIMULATION
        // nextInt(n) → generates number between 0 and n-1
        event.failedLoginAttempts = rand.nextInt(5);
        event.passwordResetFrequency = rand.nextInt(3);
        event.mfaBypassAttempts = rand.nextInt(2);

        // SESSION BEHAVIOUR SIMULATION
        // nextDouble() → generates decimal between 0 and 1
        event.sessionDuration = 10 + rand.nextInt(60);
        event.loginCount = 1 + rand.nextInt(5);
        event.pagesVisited = 5 + rand.nextInt(30);
        event.longInactiveSession = rand.nextBoolean();
        event.navigationDelay = rand.nextDouble() * 10;
        event.repeatedActionLoop = rand.nextInt(3);

        // SECURITY INDICATORS
        event.sensitiveFileAccess = rand.nextBoolean();
        event.databaseQueryChange = rand.nextBoolean();
        event.outsideAuthorizedHours = rand.nextBoolean();

        // BEHAVIOURAL PATTERNS
        event.workflowOrderChange = rand.nextBoolean();
        event.shortcutUsageChange = rand.nextBoolean();
        event.interactionDepth = rand.nextDouble() * 10;
        event.typingSpeed = 150 + rand.nextInt(150);
        event.scrollVariation = rand.nextDouble() * 5;
        event.copyPasteSpike = rand.nextInt(5);

        return event;
    }
}