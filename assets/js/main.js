// custom button active name="professional-experience"
document
  .querySelectorAll('input[name="professional-experience"]')
  .forEach((input) => {
    input.addEventListener("change", (event) => {
      document.querySelectorAll(".btn").forEach((btn) => {
        btn.classList.remove("active-professional-experience-js");
      });
      if (event.target.checked) {
        event.target
          .closest(".btn")
          .classList.add("active-professional-experience-js");
      }
    });
  });

//   name="commitment-type"

document.querySelectorAll('input[name="commitment-type"]').forEach((input) => {
  input.addEventListener("change", (event) => {
    document.querySelectorAll(".btn").forEach((btn) => {
      btn.classList.remove("active-commitment-type-js");
    });
    if (event.target.checked) {
      event.target.closest(".btn").classList.add("active-commitment-type-js");
    }
  });
});

//   name="organization-size"

document
  .querySelectorAll('input[name="organization-size"]')
  .forEach((input) => {
    input.addEventListener("change", (event) => {
      document.querySelectorAll(".btn").forEach((btn) => {
        btn.classList.remove("active-organization-size-js");
      });
      if (event.target.checked) {
        event.target
          .closest(".btn")
          .classList.add("active-organization-size-js");
      }
    });
  });
