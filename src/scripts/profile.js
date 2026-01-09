const form = document.getElementById("profileForm");
const genderButtons = document.querySelectorAll(".gender button");

let selectedGender = null;


genderButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    genderButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    selectedGender = btn.dataset.gender;
  });
});


form.addEventListener("submit", (e) => {
  e.preventDefault();
  

  const data = {
    lastName: lastName.value,
    firstName: firstName.value,
    middleName: middleName.value,
    birthDate: birthDate.value,
    gender: selectedGender,
    email: email.value,
    phone: phone.value
  };

  localStorage.setItem("userProfile", JSON.stringify(data));
  alert("Данные сохранены");
});

const savedData = JSON.parse(localStorage.getItem("userProfile"));

if (savedData) {
  lastName.value = savedData.lastName || "";
  firstName.value = savedData.firstName || "";
  middleName.value = savedData.middleName || "";
  birthDate.value = savedData.birthDate || "";
  email.value = savedData.email || "";
  phone.value = savedData.phone || "";

  if (savedData.gender) {
    selectedGender = savedData.gender;
    document
      .querySelector(`[data-gender="${savedData.gender}"]`)
      ?.classList.add("active");
  }
}

document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("userProfile");
  location.reload();
});

const phoneInput = document.getElementById("phone");

phoneInput.addEventListener("input", phoneMask);
phoneInput.addEventListener("focus", phoneMask);
phoneInput.addEventListener("blur", phoneMask);

function phoneMask(e) {
  let input = e.target;
  let numbers = input.value.replace(/\D/g, "");

  if (!numbers.startsWith("998")) {
    numbers = "998" + numbers;
  }

  let formatted = "+998";

  if (numbers.length > 3) {
    formatted += " (" + numbers.substring(3, 5);
  }
  if (numbers.length >= 5) {
    formatted += ")";
  }
  if (numbers.length > 5) {
    formatted += " " + numbers.substring(5, 8);
  }
  if (numbers.length > 8) {
    formatted += "-" + numbers.substring(8, 10);
  }
  if (numbers.length > 10) {
    formatted += "-" + numbers.substring(10, 12);
  }

  input.value = formatted;
}

form.addEventListener("submit", () => {
  if (phone.value.replace(/\D/g, "").length !== 12) {
    alert("Введите полный номер телефона");
    return;
  }
});