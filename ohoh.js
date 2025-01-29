// Simulate authentication of the user
function authenticateUser(userId, callback) {
    console.log(`Authenticating user with ID: ${userId}...`);
    setTimeout(() => {
        const isAuthenticated = true; 
        if (isAuthenticated) {
            console.log("User authenticated.");
            callback(null, userId); 
        } else {
            callback("Authentication failed", null);
        }
    }, 1000);
}

function verifyPaymentMethod(paymentMethod, userId, callback) {
    console.log(`Verifying payment method: ${paymentMethod} for user ID: ${userId}...`);
    setTimeout(() => {
        const isValid = true;
        if (isValid) {
            console.log("Payment method verified.");
            callback(null, paymentMethod, userId);
        } else {
            callback("Invalid payment method", null, null);
        }
    }, 1000);
}

function processPayment(paymentMethod, userId, callback) {
    console.log(`Processing payment with method: ${paymentMethod} for user ID: ${userId}...`);
    setTimeout(() => {
        const paymentSuccessful = true; 
        if (paymentSuccessful) {
            console.log("Payment processed successfully.");
            callback(null, userId);
        } else {
            callback("Payment failed", null);
        }
    }, 1000);
}

function updateAccountBalance(userId, callback) {
    console.log(`Updating account balance for user ID: ${userId}...`);
    setTimeout(() => {
        const balanceUpdated = true;
        if (balanceUpdated) {
            console.log("Account balance updated.");
            callback(null); 
        } else {
            callback("Failed to update account balance");
        }
    }, 1000);
}

function notifyUser(userId, callback) {
    console.log(`Notifying user with ID: ${userId} via email...`);
    setTimeout(() => {
        const emailSent = true; 
        if (emailSent) {
            console.log("User notified via email.");
            callback(null);
        } else {
            callback("Failed to send email");
        }
    }, 1000);
}

function processPaymentFlow(userId, paymentMethod) {
    authenticateUser(userId, (authError, userId) => {
        if (authError) {
            console.error(authError);
            return;
        }
        
        verifyPaymentMethod(paymentMethod, userId, (paymentMethodError, paymentMethod, userId) => {
            if (paymentMethodError) {
                console.error(paymentMethodError);
                return;
            }

            processPayment(paymentMethod, userId, (paymentError, userId) => {
                if (paymentError) {
                    console.error(paymentError);
                    return;
                }

                updateAccountBalance(userId, (balanceError) => {
                    if (balanceError) {
                        console.error(balanceError);
                        return;
                    }

                    notifyUser(userId, (emailError) => {
                        if (emailError) {
                            console.error(emailError);
                        } else {
                            console.log("Payment process completed successfully!");
                        }
                    });
                });
            });
        });
    });
}

processPaymentFlow(12345, 'credit_card');
