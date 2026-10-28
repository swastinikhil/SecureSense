//BaselineProfile.java

// This class stores the NORMAL behaviour pattern of a user. (Drift Parameters)
//These values act as the "baseline" refrences.
// Future user sessions will be compared with these baseline values,
//to detect abnormal behaviour (called behavioral drift).

//'public' means this class can be accessed from other files.
// 'class' is used to define a blueprint for objects.
public class BaselineProfile {

    // 'public double' means a decimal number variable
    // These variables store baseline behavioral metrics  
    // Average session duration in minutes
    public double sessionDuration = 25;

    // Normal number of logins in a typical period
    // 'int' stores whole numbers
    public int loginCount = 2;

    // Average number of pages a user usually visits
    public int pagesVisited = 5;

    // Normal delay between navigation actions (in seconds)
    public double navigationDelay = 2;

    // Average interaction depth (how deeply a user navigates in the system)
    public double interactionDepth = 5;

    // Normal typing speed of the user (characters per minute)
    public double typingSpeed = 1;

    // Typical scroll behaviour variation
    public double scrollVariation = 1;
}