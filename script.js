// =====================================================
// ELEMENTS
// =====================================================

const output =
    document.getElementById("output");

const commandInput =
    document.getElementById("commandInput");

const terminalBody =
    document.getElementById("terminalBody");


// =====================================================
// PORTFOLIO DATA
// =====================================================

const portfolio = {

    name: "Utkarsh Gupta",

    role: "Software Engineer | Java Developer",

    location: "Bangalore, India",

    email: "utkarshgupta933@outlook.com",

    github:
        "https://github.com/Utkarsh-UG",

    linkedin:
        "https://www.linkedin.com/in/utk2003",

    leetcode:
        "https://leetcode.com/u/GRANDx47/",


    // =================================================
    // ABOUT
    // =================================================

    about: `

<div class="bright">ABOUT ME</div>

I am Utkarsh Gupta, a Software Engineer and Java
Developer focused on backend development, automation
testing and building reliable software solutions.

I work with Java, Spring Boot, REST APIs, Selenium,
Cucumber, CI/CD and modern development tools.

I enjoy solving problems, learning new technologies
and turning ideas into working software.

Location: Bangalore, India
`,


    // =================================================
    // EXPERIENCE
    // =================================================

    experience: `

<div class="bright">PROFESSIONAL EXPERIENCE</div>


<div class="bright">Software Engineer – Automation Testing</div>

Capgemini, Bangalore
September 2025 – Present

• Developed an end-to-end BDD Cucumber automation
  framework for a payments automation project,
  validating payment files generated across
  two applications.

• Built a file comparison tool for line-by-line
  validation, identifying position mismatches,
  missing data, missing fields, blank values and
  other discrepancies between input and generated
  files, reducing manual testing effort and
  improving validation accuracy.

• Integrated the comparison tool with automated
  BDD test scenarios and Cucumber reporting,
  generating detailed step-level results and
  screenshots for failures.

• Worked with Finastra applications, performing
  daily sanity and regression testing to validate
  payment workflows and identify defects before
  release.

• Developed an Azure DevOps pipeline and standalone
  test execution program, enabling automated test
  cases to execute independently through CI/CD.

• Maintained and enhanced Selenium automation
  frameworks, including dynamic XPath maintenance
  and optimization.

• Leveraged AI models for automation development,
  test-case analysis, XPath optimization, debugging
  and reusable automation components.


--------------------------------------------------


<div class="bright">Software Engineering Intern</div>

Altysys, Pune
December 2024 – February 2025

• Developed backend services using Java and
  Spring Boot, implementing business logic and
  modular components.

• Designed and integrated RESTful APIs for
  communication between backend services and
  frontend components.

• Implemented request validation, exception
  handling and structured API responses.

• Worked with Git-based development workflows,
  code reviews, debugging and integration of Java
  backend components with React-based frontend
  applications.
`,


    // =================================================
    // SKILLS
    // =================================================

    skills: `

<div class="bright">TECHNICAL SKILLS</div>


LANGUAGES

Java
Python


AUTOMATION & TESTING

Selenium
TestNG
JUnit
Postman
TDD
BDD
Cucumber


BACKEND & DEVOPS

Spring Boot
REST APIs
Microservices
AWS
Docker
Jenkins
CI/CD


FRONTEND

HTML
CSS
React
Tailwind


DATABASES & TOOLS

MySQL
PostgreSQL
MongoDB
Git
GitHub
Jira
SonarQube
`,


    // =================================================
    // PROJECTS
    // =================================================

    projects: `

<div class="bright">PROJECTS</div>


[1] Ixigo Bus Booking Automation

    October 2025 – December 2025

    Java | Selenium | Automation


[2] SkyCast – Weather App

    May 2025 – June 2025

    Java | Spring Boot | React | REST APIs


Use:

projects 1

or

projects 2

for detailed information.
`,


    // =================================================
    // EDUCATION
    // =================================================

    education: `

<div class="bright">EDUCATION</div>


B.Tech CSE (Cloud Computing)

SRM University, Chennai

2021 – 2025


--------------------------------------------------


Class XII

The Millennium School, Lucknow

2020 – 2021


--------------------------------------------------


Class X

La Martiniere College, Lucknow

2018 – 2019
`,


    // =================================================
    // CERTIFICATIONS
    // =================================================

    certifications: `

<div class="bright">CERTIFICATIONS</div>


✓ ISTQB - Certified Tester Foundation Level (CTFL)

✓ Anthropic - Claude Certified Architect

✓ Zscaler - Zero Trust Certified Associate
`

};


// =====================================================
// COMMAND LIST
// =====================================================

const commandNames = [

    "help",
    "about",
    "experience",
    "projects",
    "skills",
    "education",
    "certifications",
    "contact",
    "contact-form",
    "github",
    "linkedin",
    "leetcode",
    "resume",
    "whoami",
    "ls",
    "cat about.txt",
    "neofetch",
    "coffee",
    "sudo hire-utkarsh",
    "clear"

];


// =====================================================
// COMMAND HISTORY
// =====================================================

let commandHistory = [];

let historyIndex = -1;


// =====================================================
// TYPING SPEED
// =====================================================

const normalTypingSpeed = 15;

const slowTypingSpeed = 28;


// =====================================================
// DELAY
// =====================================================

function sleep(ms) {

    return new Promise(
        resolve => setTimeout(resolve, ms)
    );

}


// =====================================================
// SCROLL
// =====================================================

function scrollToBottom() {

    terminalBody.scrollTop =
        terminalBody.scrollHeight;

}


// =====================================================
// ESCAPE HTML
// =====================================================

function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


// =====================================================
// CONTACT FORM SETUP
// =====================================================

function setupContactForm() {

    const form =
        document.getElementById("contact-form");

    if (
        !form ||
        form.dataset.initialized === "true"
    ) {
        return;
    }

    form.dataset.initialized = "true";

    const submitButton =
        document.getElementById("contact-submit");

    const status =
        document.getElementById("contact-status");


    form.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();


            submitButton.disabled = true;

            submitButton.textContent =
                "[ SENDING... ]";


            status.className =
                "contact-status sending";

            status.textContent =
                "[SENDING...]";


            try {

                const response =
                    await fetch(
                        "https://formspree.io/f/mppzjenb",
                        {
                            method: "POST",
                            body: new FormData(form),
                            headers: {
                                Accept: "application/json"
                            }
                        }
                    );


                let result = {};


                try {

                    result =
                        await response.json();

                } catch (_) {}


                if (response.ok) {

                    form.innerHTML = `

<div class="contact-success">

    <div>[SENDING...]</div>

    <br>

    <div>✓ MESSAGE SENT SUCCESSFULLY</div>

    <br>

    <div>Thank you for reaching out.</div>

    <br>

    <div class="dim">
        I will get back to you as soon as possible.
    </div>

</div>

                    `;

                }

                else {

                    status.className =
                        "contact-status error";

                    status.textContent =
                        result?.errors?.[0]?.message ||
                        "[ERROR] Message could not be sent.";

                    submitButton.disabled = false;

                    submitButton.textContent =
                        "[ SEND MESSAGE ]";

                }

            }

            catch (error) {

                status.className =
                    "contact-status error";

                status.textContent =
                    "[ERROR] Network error. Please try again.";

                submitButton.disabled = false;

                submitButton.textContent =
                    "[ SEND MESSAGE ]";

            }

        }
    );

}


// =====================================================
// TYPE TEXT
// =====================================================

async function typeText(
    element,
    text,
    speed = normalTypingSpeed
) {

    for (
        let i = 0;
        i < text.length;
        i++
    ) {

        element.innerHTML =
            text.substring(0, i + 1);

        scrollToBottom();

        await sleep(speed);

    }

}


// =====================================================
// ADD TYPED OUTPUT
// =====================================================

async function addTypedOutput(
    text,
    speed = normalTypingSpeed
) {

    const div =
        document.createElement("div");

    div.className =
        "output";

    output.appendChild(div);


    await typeText(
        div,
        text,
        speed
    );


    scrollToBottom();

}


// =====================================================
// ADD INSTANT OUTPUT
// =====================================================

function addOutput(text) {

    const div =
        document.createElement("div");

    div.className =
        "output";

    div.innerHTML =
        text;

    output.appendChild(div);

    scrollToBottom();

}


// =====================================================
// PRINT PROMPT
// =====================================================

async function typePrompt(
    command
) {

    const div =
        document.createElement("div");

    div.className =
        "output";

    output.appendChild(div);


    const prefix =
        `<span class="green">` +
        `utkarsh@portfolio:~$` +
        `</span> `;


    div.innerHTML =
        prefix;


    const commandSpan =
        document.createElement("span");


    div.appendChild(commandSpan);


    for (
        let i = 0;
        i < command.length;
        i++
    ) {

        commandSpan.textContent =
            command.substring(0, i + 1);

        scrollToBottom();

        await sleep(slowTypingSpeed);

    }


    return div;

}


// =====================================================
// COMMAND EXECUTION
// =====================================================

async function executeCommand(
    input,
    animated = true
) {

    const trimmed =
        input.trim();


    if (!trimmed) {

        return;

    }


    const command =
        trimmed.toLowerCase();


    // -----------------------------------------------
    // HISTORY
    // -----------------------------------------------

    if (
        commandHistory.length === 0 ||
        commandHistory[
            commandHistory.length - 1
        ] !== trimmed
    ) {

        commandHistory.push(trimmed);

    }


    historyIndex =
        commandHistory.length;


    // -----------------------------------------------
    // PRINT COMMAND
    // -----------------------------------------------

    if (animated) {

        await typePrompt(trimmed);

    }

    else {

        addOutput(
            `<span class="green">
            utkarsh@portfolio:~$
            </span> ${escapeHTML(trimmed)}`
        );

    }


    // -----------------------------------------------
    // DIRECT COMMAND
    // -----------------------------------------------

    if (commands[command]) {

        const result =
            await commands[command]();


        if (result) {

            if (
                typeof result === "string"
            ) {

                await addTypedOutput(
                    result
                );

            }

        }


        // IMPORTANT:
        // Contact form is inserted dynamically,
        // so initialize it after rendering.

        if (
            command === "contact-form"
        ) {

            setupContactForm();

        }


        return;

    }


    // -----------------------------------------------
    // COMMAND WITH ARGUMENTS
    // -----------------------------------------------

    const parts =
        command.split(" ");


    const baseCommand =
        parts[0];


    const args =
        parts.slice(1).join(" ");


    if (commands[baseCommand]) {

        const result =
            await commands[baseCommand](args);


        if (result) {

            await addTypedOutput(
                result
            );

        }

        return;

    }


    // -----------------------------------------------
    // UNKNOWN COMMAND
    // -----------------------------------------------

    await addTypedOutput(`

<span class="error">
Command not found: ${escapeHTML(trimmed)}
</span>

Type <span class="bright">'help'</span>
to see available commands.

`);

}


// =====================================================
// COMMANDS
// =====================================================

const commands = {


    // =================================================
    // HELP
    // =================================================

    help: async function () {

        return `

<div class="bright">Available commands:</div>


help
    Show this help message


about
    Learn about Utkarsh


experience
    View professional experience


projects
    View projects


skills
    Display technical skills


education
    View education


certifications
    View certifications


contact
    Contact information


contact-form
    Send a message directly to Utkarsh


github
    Open GitHub


linkedin
    Open LinkedIn


leetcode
    Open LeetCode


resume
    Download resume


whoami
    Quick introduction


ls
    List portfolio files


cat about.txt
    Read about me


neofetch
    System-style introduction


clear
    Clear terminal


Fun commands:

coffee
sudo hire-utkarsh


Use ↑ / ↓ for command history.

Use TAB for autocomplete.

`;

    },


    // =================================================
    // ABOUT
    // =================================================

    about: async function () {

        return portfolio.about;

    },


    // =================================================
    // WHOAMI
    // =================================================

    whoami: async function () {

        return `

<div class="bright">
${portfolio.name}
</div>

${portfolio.role}

Backend Development
Automation Testing
Spring Boot
CI/CD

Location:
${portfolio.location}

`;

    },


    // =================================================
    // EXPERIENCE
    // =================================================

    experience: async function () {

        return portfolio.experience;

    },


    // =================================================
    // SKILLS
    // =================================================

    skills: async function () {

        return portfolio.skills;

    },


    // =================================================
    // PROJECTS
    // =================================================

    projects: async function (args) {


        if (!args) {

            return portfolio.projects;

        }


        // ---------------------------------------------
        // PROJECT 1
        // ---------------------------------------------

        if (args === "1") {

            return `

<div class="bright">
IXIGO BUS BOOKING AUTOMATION
</div>


October 2025 – December 2025


Developed an automation framework for bus
booking workflows including:

• Search
• Filtering
• Seat selection
• Checkout


Implemented dynamic element handling and
reusable components to improve maintainability
and reliability.


Reduced manual testing effort and improved
execution efficiency through automation.


Technologies:

Java
Selenium
Automation

`;

        }


        // ---------------------------------------------
        // PROJECT 2
        // ---------------------------------------------

        if (args === "2") {

            return `

<div class="bright">
SKYCAST – WEATHER APP
</div>


May 2025 – June 2025


Built a full-stack weather application using
Spring Boot and React with scalable architecture.


• Designed and consumed RESTful APIs
• Processed real-time weather data
• Developed a responsive UI for smooth
  interaction across devices


Technologies:

Java
Spring Boot
React
REST APIs

`;

        }


        return `

<span class="error">
Project not found.
</span>


Available:

projects 1

projects 2

`;

    },


    // =================================================
    // EDUCATION
    // =================================================

    education: async function () {

        return portfolio.education;

    },


    // =================================================
    // CERTIFICATIONS
    // =================================================

    certifications: async function () {

        return portfolio.certifications;

    },


    // =================================================
    // CONTACT
    // =================================================

    contact: async function () {

        return `

<div class="bright">
CONTACT
</div>


Email:

${portfolio.email}


GitHub:

${portfolio.github}


LinkedIn:

${portfolio.linkedin}


LeetCode:

${portfolio.leetcode}


Type:

contact-form

to send me a message.

`;

    },


    // =================================================
    // CONTACT FORM
    // =================================================

    "contact-form": async function () {

        return `

<div class="contact-form">

    <div class="contact-title">
        [ CONTACT TERMINAL ]
    </div>


    <div class="contact-subtitle">
        Send me a message directly from this terminal.
    </div>


    <form id="contact-form">


        <label for="contact-name">
            Name
        </label>


        <input
            type="text"
            id="contact-name"
            name="name"
            placeholder="Enter your name"
            required
        >


        <label for="contact-email">
            Email
        </label>


        <input
            type="email"
            id="contact-email"
            name="email"
            placeholder="Enter your email"
            required
        >


        <label for="contact-message">
            Message
        </label>


        <textarea
            id="contact-message"
            name="message"
            placeholder="Type your message..."
            required
        ></textarea>


        <div
            id="contact-status"
            class="contact-status"
        ></div>


        <button
            type="submit"
            id="contact-submit"
        >
            [ SEND MESSAGE ]
        </button>


    </form>

</div>

`;

    },


    // =================================================
    // GITHUB
    // =================================================

    github: async function () {

        window.open(
            portfolio.github,
            "_blank"
        );


        return `

<span class="bright">
Opening GitHub...
</span>

`;

    },


    // =================================================
    // LINKEDIN
    // =================================================

    linkedin: async function () {

        window.open(
            portfolio.linkedin,
            "_blank"
        );


        return `

<span class="bright">
Opening LinkedIn...
</span>

`;

    },


    // =================================================
    // LEETCODE
    // =================================================

    leetcode: async function () {

        window.open(
            portfolio.leetcode,
            "_blank"
        );


        return `

<span class="bright">
Opening LeetCode...
</span>

`;

    },


    // =================================================
    // RESUME
    // =================================================

    resume: async function () {

        const link =
            document.createElement("a");


        link.href =
            "assets/resume.pdf";


        link.download =
            "Utkarsh_Gupta_Resume.pdf";


        document.body.appendChild(link);


        link.click();


        document.body.removeChild(link);


        return `

<span class="bright">
Downloading resume...
</span>

`;

    },


    // =================================================
    // LS
    // =================================================

    ls: async function () {

        return `

about.txt

experience.txt

projects/

skills.txt

education.txt

certifications.txt

resume.pdf

contact.txt

`;

    },


    // =================================================
    // CAT
    // =================================================

    "cat about.txt": async function () {

        return portfolio.about;

    },


    // =================================================
    // NEOFETCH
    // =================================================

    neofetch: async function () {

        return `

<div class="bright">

 ██████╗ ███████╗███████╗
██╔════╝ ██╔════╝██╔════╝
██║  ███╗█████╗  █████╗
██║   ██║██╔══╝  ██╔══╝
╚██████╔╝███████╗███████╗
 ╚═════╝ ╚══════╝╚══════╝

</div>


<div class="bright">
UTKARSH GUPTA
</div>


OS         : PortfolioOS

Role       : Software Engineer

Focus      : Java & Backend Development

Language   : Java

Framework  : Spring Boot

Automation : Selenium / Cucumber

Database   : SQL / MongoDB

DevOps     : Docker / Jenkins / CI/CD

Cloud      : AWS

Location   : Bangalore, India

`;

    },


    // =================================================
    // COFFEE
    // =================================================

    coffee: async function () {

        return `

       ( (
        ) )
      ........
      |      |]
      \\      /
       \`----'

<span class="bright">
Coffee loaded.

Productivity +100 ☕
</span>

`;

    },


    // =================================================
    // SUDO
    // =================================================

    "sudo hire-utkarsh": async function () {

        return `

<span class="bright">
[sudo] password for recruiter:

Access granted.

Excellent decision.

Contact:

${portfolio.email}
</span>

`;

    },


    // =================================================
    // CLEAR
    // =================================================

    clear: async function () {

        output.innerHTML = "";

        return "";

    }

};


// =====================================================
// TAB AUTOCOMPLETE
// =====================================================

commandInput.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Tab") {

            event.preventDefault();


            const current =
                commandInput.value
                    .toLowerCase()
                    .trim();


            if (!current) {

                return;

            }


            const matches =
                commandNames.filter(
                    command =>
                        command.startsWith(current)
                );


            if (
                matches.length === 1
            ) {

                commandInput.value =
                    matches[0];

            }


            else if (
                matches.length > 1
            ) {

                addOutput(`

<span class="dim">
Possible commands:
</span>

${matches.join("    ")}

`);

            }

        }

    }
);


// =====================================================
// ENTER / HISTORY
// =====================================================

commandInput.addEventListener(
    "keydown",
    async function (event) {


        // ---------------------------------------------
        // ENTER
        // ---------------------------------------------

        if (event.key === "Enter") {

            const command =
                commandInput.value;


            commandInput.value = "";


            commandInput.disabled = true;


            await executeCommand(
                command,
                true
            );


            commandInput.disabled = false;


            commandInput.focus();


            return;

        }


        // ---------------------------------------------
        // UP
        // ---------------------------------------------

        if (event.key === "ArrowUp") {

            event.preventDefault();


            if (
                commandHistory.length === 0
            ) {

                return;

            }


            if (historyIndex > 0) {

                historyIndex--;

            }


            commandInput.value =
                commandHistory[historyIndex];

        }


        // ---------------------------------------------
        // DOWN
        // ---------------------------------------------

        if (event.key === "ArrowDown") {

            event.preventDefault();


            if (
                commandHistory.length === 0
            ) {

                return;

            }


            if (
                historyIndex <
                commandHistory.length - 1
            ) {

                historyIndex++;


                commandInput.value =
                    commandHistory[historyIndex];

            }

            else {

                historyIndex =
                    commandHistory.length;


                commandInput.value = "";

            }

        }

    }
);


// =====================================================
// KEEP CLI INPUT FOCUSED
// =====================================================

document.addEventListener("click", function (event) {

    // If user clicked inside the contact form,
    // do NOT move focus back to the CLI.
    if (event.target.closest("#contact-form")) {
        return;
    }

    if (!commandInput.disabled) {
        commandInput.focus();
    }

});


// =====================================================
// STARTUP ANIMATION
// =====================================================

async function startup() {


    // Hide input initially

    commandInput.style.display =
        "none";


    // -----------------------------------------------
    // Boot message
    // -----------------------------------------------

    await addTypedOutput(
        `<span class="dim">
Initializing portfolio terminal...
</span>`,
        25
    );


    await sleep(500);


    await addTypedOutput(
        `<span class="dim">
Loading user profile...
</span>`,
        25
    );


    await sleep(500);


    await addTypedOutput(
        `<span class="dim">
Loading projects...
</span>`,
        25
    );


    await sleep(500);


    await addTypedOutput(
        `<span class="dim">
Loading experience...
</span>`,
        25
    );


    await sleep(700);


    // -----------------------------------------------
    // Big Name
    // -----------------------------------------------

    addOutput(`

<div class="name-ascii">
UTKARSH GUPTA
</div>

<div class="intro-role">
Software Engineer | Java Developer
</div>

`);


    await sleep(600);


    // -----------------------------------------------
    // Automatic HI command
    // -----------------------------------------------

    await typePrompt("hi");


    await sleep(350);


    await addTypedOutput(`

<div class="bright">
Hi, I am Utkarsh Gupta 👋
</div>


Software Engineer | Java Developer


Backend Development • Automation Testing • Spring Boot


Welcome to my interactive portfolio terminal.


Type <span class="bright">'help'</span>
to see available commands.

`, 13);


    await sleep(400);


    // -----------------------------------------------
    // System ready
    // -----------------------------------------------

    await addTypedOutput(`

<span class="dim">
──────────────────────────────────────────────

System initialized successfully.

Terminal ready.

Use TAB for autocomplete.
Use ↑ / ↓ for command history.

──────────────────────────────────────────────
</span>

`, 10);


    // -----------------------------------------------
    // Show input
    // -----------------------------------------------

    commandInput.style.display =
        "block";


    commandInput.focus();

}


// =====================================================
// START
// =====================================================

startup();