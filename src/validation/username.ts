/**
 * Validates a username against the following rules:
 * Length: 3-20 characters
 * Must start with a letter
 * Must end with a letter or number
 * Can contain letters, numbers, dots (.), and underscores (_)
 * Dots and underscores cannot appear consecutively
 *
 * @param username - The username string to validate
 * @returns true if the username is valid, false otherwise
 */
function isValidUsername(username: string): boolean {
    const regex = /^(?=.{3,20}$)[A-Za-z](?:[A-Za-z0-9]|[._](?![._]))*[A-Za-z0-9]$/;
    return regex.test(username);
}