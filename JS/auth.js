// ==============================
// SPOTSTAR AUTH SCRIPT
// Handles: Login, Signup, OTP, Forgot Password
// ==============================

// Helper: show messages dynamically
function showMessage(elementId, text, color = "red") {
  const msg = document.getElementById(elementId);
  if (msg) {
    msg.textContent = text;
    msg.style.color = color;
  }
}

// Run code after page loads
document.addEventListener("DOMContentLoaded", () => {

  // ============================
  // SIGN UP FORM VALIDATION
  // ============================
  const signupForm = document.getElementById("signup-form");
  if (signupForm) {
    const pass = document.getElementById("password");
    const confirm = document.getElementById("confirm");
    signupForm.addEventListener("submit", (e) => {
      if (pass.value !== confirm.value) {
        e.preventDefault();
        showMessage("signup-msg", "❌ Passwords do not match!");
      } else {
        showMessage("signup-msg", "✅ Account created successfully!", "green");
      }
    });
  }

  // ============================
  // LOGIN FORM VALIDATION
  // ============================
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      const email = document.getElementById("login-email").value;
      const password = document.getElementById("login-password").value;
      if (!email || !password) {
        e.preventDefault();
        showMessage("login-msg", "⚠ Please enter both email and password!");
      } else {
        showMessage("login-msg", "✅ Logged in successfully!", "green");
      }
    });
  }

  // ============================
  // FORGOT PASSWORD VALIDATION
  // ============================
  const forgotForm = document.getElementById("forgot-form");
  if (forgotForm) {
    forgotForm.addEventListener("submit", (e) => {
      const email = document.getElementById("forgot-email").value;
      if (!email) {
        e.preventDefault();
        showMessage("forgot-msg", "⚠ Please enter your email!");
      } else {
        showMessage("forgot-msg", "📩 Reset link sent to your email.", "green");
      }
    });
  }

  // ============================
  // UPDATE PASSWORD VALIDATION
  // ============================
  const updateForm = document.getElementById("update-form");
  if (updateForm) {
    const newPass = document.getElementById("new-password");
    const confirmPass = document.getElementById("confirm-password");
    updateForm.addEventListener("submit", (e) => {
      if (newPass.value !== confirmPass.value) {
        e.preventDefault();
        showMessage("update-msg", "❌ Passwords do not match!");
      } else {
        showMessage("update-msg", "✅ Password updated successfully!", "green");
      }
    });
  }

// ============================
// OTP VERIFICATION HANDLING
// ============================
const otpInputs = document.querySelectorAll(".otp-input");
if (otpInputs.length > 0) {
  otpInputs.forEach((input, index) => {
    input.addEventListener("input", () => {
      if (input.value.length === 1 && index < otpInputs.length - 1) {
        otpInputs[index + 1].focus();
      }
    });
  });

  const otpForm = document.getElementById("otp-form");
  if (otpForm) {
    otpForm.addEventListener("submit", (e) => {
      e.preventDefault(); // stop page reload

      const enteredOTP = Array.from(otpInputs).map(i => i.value).join("");

      // Here you can define your correct OTP for testing
      const correctOTP = "1234";

      if (enteredOTP.length < otpInputs.length) {
        showMessage("otp-msg", "⚠ Please enter the full OTP!");
      } 
      else if (enteredOTP === correctOTP) {
        showMessage("otp-msg", "✅ OTP Verified Successfully!", "green");

        // redirect after short delay
        setTimeout(() => {
          window.location.href = "Verification Successful.html";
        }, 1500);
      } 
      else {
        showMessage("otp-msg", "❌ Incorrect OTP! Please try again.");
      }
    });
  }
}

});
