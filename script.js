
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

const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const hiddenDiv = document.querySelector('.hidden-div');

menuIcon.addEventListener('click', () => {
    hiddenDiv.style.right = '0';
});

closeIcon.addEventListener('click', () => {
    hiddenDiv.style.right = '-70%';
});

const experiences = {
      
      freelance: {
        title: "MERN Stack Developer",
        company: "@Zcoders Lab Private Limited",
        duration: "July 2024 – Present",
        location: "Remote",
        points: [
          "Developed Adam Exports CRM application using React.js and Redux Toolkit, reducing pageload time by 25% through lazy loading and optimized API calls.","Developed a responsive website to promote and manage a state-level hackathon."
        ]
      },
      salesforce: {
        title: " Developer Intern",
        company: "@Salesforce",
        duration: "October 2022 – December 2022",
        location: "Remote",
        points: [
          "Built and debugged custom flows using Apex and Lightning Web Components",
          "Worked with VS Code & Salesforce CLI, gaining experience in modern Salesforce development tooling."
        ]
      }
    };

    function showExperience(key) {
      const exp = experiences[key];
      const container = document.getElementById('experience-details');
      container.innerHTML = `
        <h2 class="text-2xl font-semibold">${exp.title} <span class="text-purple-400">${exp.company}</span></h2>
        <p class="text-gray-400">${exp.duration}</p>
        <p class="text-gray-400">${exp.location}</p>
        <ul class="list-disc ml-5 space-y-1">
          ${exp.points.map(point => `<li>${point}</li>`).join("")}
        </ul>
      `;

      // Active tab styling
      document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('bg-[#1e1e2f]', 'text-purple-400'));
      event.target.classList.add('bg-[#1e1e2f]', 'text-purple-400');
    }