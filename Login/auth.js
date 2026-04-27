/* ===== Shared auth utilities ===== */

const USERS_KEY = "aich_users";
const SESSION_KEY = "aich_user";
const COURSE_PAGE = "../Course/index.html";

/* Seed default admin if not exists */
(function seedAdmin() {
  const users = JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
  if (!users.find(u => u.email === "admin@aicourse.hub")) {
    users.unshift({ name: "Admin", email: "admin@aicourse.hub", password: "admin1234", role: "admin" });
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }
})();

function saveSession(user) {
  sessionStorage.setItem(SESSION_KEY, JSON.stringify({ name: user.name, email: user.email, role: user.role || "user" }));
}

function skipLogin() {
  sessionStorage.setItem(SESSION_KEY, JSON.stringify({ name: "Guest", email: "", guest: true }));
  window.location.href = COURSE_PAGE;
}

function socialLogin(provider) {
  const mockUser = { name: provider + " User", email: "user@" + provider.toLowerCase() + ".com" };
  saveSession(mockUser);
  window.location.href = COURSE_PAGE;
}

/* ===== Sign-In logic ===== */
function initSignIn() {
  const form = document.getElementById("signinForm");
  if (!form) return;

  /* Password toggle */
  document.getElementById("togglePwd").addEventListener("click", () => {
    const input = document.getElementById("password");
    const btn   = document.getElementById("togglePwd");
    input.type  = input.type === "password" ? "text" : "password";
    btn.innerHTML = input.type === "password" ? eyeIcon() : eyeOffIcon();
  });

  form.addEventListener("submit", e => {
    e.preventDefault();
    let valid = true;

    const emailEl  = document.getElementById("email");
    const pwdEl    = document.getElementById("password");
    const emailErr = document.getElementById("emailError");
    const pwdErr   = document.getElementById("passwordError");

    emailErr.textContent = "";
    pwdErr.textContent   = "";
    emailEl.classList.remove("error");
    pwdEl.classList.remove("error");

    if (!emailEl.value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailEl.value)) {
      emailErr.textContent = "กรุณากรอกอีเมลให้ถูกต้อง";
      emailEl.classList.add("error"); valid = false;
    }

    if (!pwdEl.value || pwdEl.value.length < 6) {
      pwdErr.textContent = "รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร";
      pwdEl.classList.add("error"); valid = false;
    }

    if (!valid) return;

    const users = JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
    const user  = users.find(u => u.email === emailEl.value && u.password === pwdEl.value);

    if (!user) {
      emailErr.textContent = "อีเมลหรือรหัสผ่านไม่ถูกต้อง";
      emailEl.classList.add("error");
      pwdEl.classList.add("error");
      return;
    }

    saveSession(user);
    window.location.href = COURSE_PAGE;
  });
}

/* ===== Sign-Up logic ===== */
function initSignUp() {
  const form = document.getElementById("signupForm");
  if (!form) return;

  /* Password toggles */
  makeToggle("togglePwd", "password");
  makeToggle("toggleConfirm", "confirm");

  /* Strength meter */
  document.getElementById("password").addEventListener("input", function () {
    const val  = this.value;
    const fill = document.getElementById("strengthFill");
    let score  = 0;
    if (val.length >= 8)           score++;
    if (/[A-Z]/.test(val))         score++;
    if (/[0-9]/.test(val))         score++;
    if (/[^A-Za-z0-9]/.test(val)) score++;

    const colors = ["#ef4444", "#f97316", "#eab308", "#22c55e"];
    const widths  = ["25%", "50%", "75%", "100%"];
    fill.style.width      = score > 0 ? widths[score - 1] : "0%";
    fill.style.background = score > 0 ? colors[score - 1] : "transparent";
  });

  form.addEventListener("submit", e => {
    e.preventDefault();
    let valid = true;

    const nameEl    = document.getElementById("name");
    const emailEl   = document.getElementById("email");
    const pwdEl     = document.getElementById("password");
    const confirmEl = document.getElementById("confirm");

    const nameErr    = document.getElementById("nameError");
    const emailErr   = document.getElementById("emailError");
    const pwdErr     = document.getElementById("passwordError");
    const confirmErr = document.getElementById("confirmError");

    [nameErr, emailErr, pwdErr, confirmErr].forEach(el => el.textContent = "");
    [nameEl, emailEl, pwdEl, confirmEl].forEach(el => el.classList.remove("error"));

    if (!nameEl.value.trim() || nameEl.value.trim().length < 2) {
      nameErr.textContent = "กรุณากรอกชื่ออย่างน้อย 2 ตัวอักษร";
      nameEl.classList.add("error"); valid = false;
    }

    if (!emailEl.value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailEl.value)) {
      emailErr.textContent = "กรุณากรอกอีเมลให้ถูกต้อง";
      emailEl.classList.add("error"); valid = false;
    }

    if (!pwdEl.value || pwdEl.value.length < 8) {
      pwdErr.textContent = "รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร";
      pwdEl.classList.add("error"); valid = false;
    }

    if (confirmEl.value !== pwdEl.value) {
      confirmErr.textContent = "รหัสผ่านไม่ตรงกัน";
      confirmEl.classList.add("error"); valid = false;
    }

    if (!valid) return;

    const users = JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
    if (users.find(u => u.email === emailEl.value)) {
      emailErr.textContent = "อีเมลนี้ถูกใช้งานแล้ว";
      emailEl.classList.add("error"); return;
    }

    users.push({ name: nameEl.value.trim(), email: emailEl.value, password: pwdEl.value });
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    saveSession({ name: nameEl.value.trim(), email: emailEl.value });
    window.location.href = COURSE_PAGE;
  });
}

function makeToggle(btnId, inputId) {
  const btn   = document.getElementById(btnId);
  const input = document.getElementById(inputId);
  btn.innerHTML = eyeIcon();
  btn.addEventListener("click", () => {
    input.type  = input.type === "password" ? "text" : "password";
    btn.innerHTML = input.type === "password" ? eyeIcon() : eyeOffIcon();
  });
}

function eyeIcon() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>`;
}

function eyeOffIcon() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/></svg>`;
}

document.addEventListener("DOMContentLoaded", () => {
  initSignIn();
  initSignUp();
});
