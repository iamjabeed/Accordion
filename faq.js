const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
  {
    id: 4,
    question: "Is it open source ?",
    answer: "Yep, We support open source widely !!",
  },
];

const accordianBody = document.querySelector(".accordian_body");
const faqs = [];

faqData.forEach((description) => {
  // creating elements
  let faqEl = document.createElement("div");
  let headingEl = document.createElement("div");
  let h3El = document.createElement("h3");
  let pEl = document.createElement("p");
  let showBtn = document.createElement("span");
  // adding text
  h3El.innerText = description.question;
  pEl.innerText = description.answer;
  showBtn.innerText = "+";
  // adding element to document
  accordianBody.appendChild(faqEl);
  faqEl.appendChild(headingEl);
  headingEl.appendChild(h3El);
  headingEl.appendChild(pEl);
  headingEl.appendChild(showBtn);
  // adding classes
  faqEl.classList.toggle("faq");
  headingEl.classList.add("faq_header");
  showBtn.classList.add("show_btn");
  pEl.classList.toggle("hidden");

  showBtn.addEventListener("click", () => {
    pEl.classList.toggle("hidden");
    // showBtn.innerText = "+";
    pEl.classList.add("show");
    // showBtn.innerText = "-";
  });
});

function showFaq() {}

function createFaq() {}

function btnStatusUpdate() {}
