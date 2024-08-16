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

// filter slider range
// range slider js
document.addEventListener("DOMContentLoaded", function () {
  const minRange = document.getElementById("minBudgetRange");
  const maxRange = document.getElementById("maxBudgetRange");
  const minBudget = document.getElementById("minBudget");
  const maxBudget = document.getElementById("maxBudget");

  minRange.addEventListener("input", updateBudgetsFromSlider);
  maxRange.addEventListener("input", updateBudgetsFromSlider);
  minBudget.addEventListener("input", updateSlidersFromInput);
  maxBudget.addEventListener("input", updateSlidersFromInput);

  function updateBudgetsFromSlider() {
    let minValue = parseInt(minRange.value);
    let maxValue = parseInt(maxRange.value);

    if (minValue > maxValue) {
      minValue = maxValue;
      minRange.value = minValue;
    }

    minBudget.value = `$${minValue}.00`;
    maxBudget.value = `$${maxValue}.00`;
  }

  function updateSlidersFromInput() {
    let minValue = parseInt(
      minBudget.value.replace("$", "").replace(".00", "")
    );
    let maxValue = parseInt(
      maxBudget.value.replace("$", "").replace(".00", "")
    );

    if (isNaN(minValue)) minValue = 0;
    if (isNaN(maxValue)) maxValue = 100;

    if (minValue > maxValue) {
      minValue = maxValue;
    }

    minRange.value = minValue;
    maxRange.value = maxValue;

    minBudget.value = `$${minValue}.00`;
    maxBudget.value = `$${maxValue}.00`;
  }

  updateBudgetsFromSlider();
});

// view more button for filter js
document.addEventListener("DOMContentLoaded", function () {
  const viewMoreBtn = document.querySelector(".view-more-btn");
  const viewMoreBtnCategory = document.querySelector(".view-more-btn-category");
  const viewMoreBtnTime = document.querySelector(".view-more-btn-time");
  const hiddenContent = document.querySelector(".hidden-content");
  const hiddenContentCategory = document.querySelector(
    ".hidden-content-category"
  );
  const hiddenContentTime = document.querySelector(".hidden-content-time");
  // skils view more button
  viewMoreBtn.addEventListener("click", function () {
    hiddenContent.style.transition = "all 0.5s ease";
    console.log("this is clicked");
    if (
      hiddenContent.style.display === "none" ||
      hiddenContent.style.display === ""
    ) {
      hiddenContent.style.display = "block";
      viewMoreBtn.textContent = "View Less";
    } else {
      hiddenContent.style.display = "none";
      viewMoreBtn.textContent = "+10 More";
    }
  });
  // category view more button
  viewMoreBtnCategory.addEventListener("click", function () {
    hiddenContentCategory.style.transition = "all 0.5s ease";
    console.log("this is clicked");
    if (
      hiddenContentCategory.style.display === "none" ||
      hiddenContentCategory.style.display === ""
    ) {
      hiddenContentCategory.style.display = "block";
      viewMoreBtnCategory.textContent = "View Less";
    } else {
      hiddenContentCategory.style.display = "none";
      viewMoreBtnCategory.textContent = "+10 More";
    }
  });
  // time view more button
  viewMoreBtnTime.addEventListener("click", function () {
    hiddenContentTime.style.transition = "all 0.5s ease";
    console.log("this is clicked");
    if (
      hiddenContentTime.style.display === "none" ||
      hiddenContentTime.style.display === ""
    ) {
      hiddenContentTime.style.display = "block";
      viewMoreBtnTime.textContent = "View Less";
    } else {
      hiddenContentTime.style.display = "none";
      viewMoreBtnTime.textContent = "+10 More";
    }
  });
});

// comments show/hide buttons on click js
