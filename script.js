const toggleBtn = document.getElementById("themeToggle");
const lightIcon = document.querySelector(".lightIcon");
const darkIcon = document.querySelector(".darkIcon");
const lightBox = document.querySelector(".lightBox");
const darkBox = document.querySelector(".darkBox");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  console.log(body.classList);

  if (body.classList.contains("dark")) {
    body.classList.remove("dark", "bg-gray-900", "text-white");
    body.classList.add("bg-[rgb(227,227,227)]", "text-black");
    lightIcon.classList.remove("hidden");
    darkIcon.classList.add("hidden");
    lightBox.classList.remove("hidden");
    darkBox.classList.add("hidden");
  } else {
    body.classList.add("dark", "bg-gray-900", "text-white");
    body.classList.remove("bg-[rgb(227,227,227)]", "text-black");
    lightIcon.classList.add("hidden");
    darkIcon.classList.remove("hidden");
    lightBox.classList.add("hidden");
    darkBox.classList.remove("hidden");
  }
});

const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const hiddenDiv = document.querySelector(".hidden-div");

menuIcon.addEventListener("click", () => {
  hiddenDiv.style.right = "0";
});

closeIcon.addEventListener("click", () => {
  hiddenDiv.style.right = "-70%";
});

const experiences = {
  freelance: {
    title: "Full Stack Developer",
    company: "@Freelance",
    duration: "Oct 2025 – Sep 2025",
    location: "Remote",
    points: [
      "Designed and developed a responsive freelancing portfolio website to showcase paintings",
      "Built a clean and modern UI using React.js and Tailwind CSS, ensuring mobile-first and cross-browser compatibility.",
      "Implemented component-based architecture for better code reusability and maintainability.",
      "Created a gallery-style layout optimized for high-resolution artwork presentation while maintaining smooth performance.",
      "Developed a responsive website to promote and manage a state-level hackathon.",
    ],
  },
  internship: {
    title: "Full Stack Developer",
    company: "@Nanostack Private Limited",
    duration: "Feb 2025 – Sep 2025",
    location: "Bhopal",
    points: [
      "Developed Adam Exports CRM application using React.js and Redux Toolkit, reducing pageload time by 25% through lazy loading and optimized API calls.",
      "Built dynamic forms with validation using React Hook Form/Formik, improving user experience and reducing input errors. and Integrated REST APIs with Axios.",
      "Implemented interactive dashboards, forms, modals, and data tables with validation, filtering, sorting, and search features."
    ],
  },
  salesforce: {
    title: " Developer Intern",
    company: "@Salesforce",
    duration: "October 2022 – December 2022",
    location: "Remote",
    points: [
      "Built and debugged custom flows using Apex and Lightning Web Components",
      "Worked with VS Code & Salesforce CLI, gaining experience in modern Salesforce development tooling.",
    ],
  },
};

function showExperience(key) {
  const exp = experiences[key];
  const container = document.getElementById("experience-details");
  container.innerHTML = `
        <h2 class="text-2xl font-semibold">${
          exp.title
        } <span class="text-purple-400">${exp.company}</span></h2>
        <p class="text-gray-400">${exp.duration}</p>
        <p class="text-gray-400">${exp.location}</p>
        <ul class="list-disc ml-5 space-y-1">
          ${exp.points.map((point) => `<li>${point}</li>`).join("")}
        </ul>
      `;

  // Active tab styling
  document
    .querySelectorAll(".tab-btn")
    .forEach((btn) => btn.classList.remove("bg-[#1e1e2f]", "text-purple-400"));
  event.target.classList.add("bg-[#1e1e2f]", "text-purple-400");
}
