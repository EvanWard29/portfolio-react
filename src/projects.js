// Thumbnails
import catchapp from "./assets/img/portfolio/catchapp/thumbnail.webp";
import mcInteractions from "./assets/img/portfolio/mc-interactions/thumbnail.webp";
import backToWork from "./assets/img/portfolio/back-to-work/thumbnail.webp";
import thisIsIt from "./assets/img/portfolio/this-is-it/thumbnail.webp";
import sleepDeep from "./assets/img/portfolio/sleep-deep/thumbnail.webp";
import patientSystem from "./assets/img/portfolio/patient-system/thumbnail.webp";
import whiteLion from "./assets/img/portfolio/white-lion/thumbnail.webp";
import weatherApp from "./assets/img/portfolio/weather-app/thumbnail.webp";

// Screenshots
import sso from "./assets/img/portfolio/catchapp/google-sso.webp";
import setNight from "./assets/img/portfolio/mc-interactions/set-night.webp";
import familyPage from "./assets/img/portfolio/back-to-work/family-page.webp";
import choresPage from "./assets/img/portfolio/back-to-work/chores-page.webp";
import usersPage from "./assets/img/portfolio/this-is-it/users-page.webp";
import pmsUsersPage from "./assets/img/portfolio/patient-system/user-page.webp";
import feedbackPage from "./assets/img/portfolio/patient-system/feedback-page.webp";
import orderPage from "./assets/img/portfolio/white-lion/order-page.webp";
import locationData from "./assets/img/portfolio/weather-app/location-data.webp";
import averageRain from "./assets/img/portfolio/weather-app/average-rain.webp";

// SVG Links
import catchappSvg from "./assets/img/svg/catchapp.svg";
import githubSvg from "./assets/img/svg/github.svg";
import youtubeSvg from "./assets/img/svg/youtube.svg";

export const projects =[
  {
    "id": "catchapp",
    "title": "CatchApp Bookings",
    "description": `<p>CatchApp Bookings was my first professional experience of working with PHP and the Laravel framework. Here I developed an immense number of valuable technical and personal skills.</p><p>As only one of two backend developers, I was responsible for developing <strong>30+</strong> features. These ranged from implementing <a class="text-decoration-none" href="https://openid.net/developers/how-connect-works/" target="_blank">OpenID Connect</a> (OAuth 2.0) single sign-on for Google and Microsoft, to creating and maintaining <strong>250+</strong> Unit/Feature tests.</p><img class="img" src="${sso}" alt="Google Single Sign-On"><p class="mb-0">Some other responsibilities included:</p><ul><li>Creating and documenting, using the <a class="text-decoration-none" href="https://swagger.io/specification/v2/" target="_blank">Swagger 2.0</a> specification, REST APIs for features to allow the React frontend to communicate with.</li><li>Integrating third-party services such as <a class="text-decoration-none" href="https://monday.com/" target="_blank">monday.com</a>, <a class="text-decoration-none" href="https://zapier.com" target="_blank">Zapier</a>, and <a class="text-decoration-none" href="https://www.nylas.com" target="_blank">Nylas</a>.</li><li>Optimizing slow and outdated code, increasing response times by a factor of <strong>10x</strong> in some instances.</li><li>Built asynchronous queue systems to parallelize tasks and make previously slow user interactions near instantaneous.</li><li>Planning and implementing the structure of <strong>MySQL</strong> tables and their associated <strong>Eloquent</strong> models.</li><li>Setting up <a class="text-decoration-none" href="https://github.com/PHP-CS-Fixer/PHP-CS-Fixer" target="_blank">PHP-CS-Fixer</a>, a coding standards formatter.</li><li>Using the Zoom, Google Meet, and Microsoft Teams APIs, to create conference rooms for authenticated users.</li><li>Built a multi-layer cache for polling external ICS calendar links.</li><li>Updating the codebase from <strong>Laravel 5.4</strong>, up until <strong>Laravel 10.x</strong>.</li><li>Updating the codebase from <strong>PHP 7.4</strong> to <strong>PHP 8.2</strong>.</li><li>Updating package requirements and refactoring code to make use of newer Laravel and PHP features.</li></ul><p class="mb-0">I also learnt a number of competencies whilst working at CatchApp:</p><ul><li>Setting up a Windows development environment using JetBrains PhpStorm, WSL 2, and Docker.</li><li>Understanding how Laravel's powerful features are used to develop robust web applications.</li><li>The importance of planning the functionality and structure of REST APIs.</li><li>Approaching and planning complex tasks in an agile manner, to ensure efficient and optimal productivity.</li></ul>`,
    "links": [
      {
        url: "https://catchapp.mobi",
        svg: catchappSvg
      }
    ],
    "thumbnail": catchapp
  },
  {
    "id": "mc-interactions",
    "title": "MC Interactions",
    "description": `<p>Minecraft Interactions is a Minecraft Java mod I've developed for personal use, inspired by the <a href="https://www.curseforge.com/minecraft/mc-mods/twitchspawn" target="_blank">TwitchSpawn</a> mod.</p><p>The mod was designed to connect to the Twitch API using a WebSocket and listen for subscribed events, such as gaining a new follower or subscriber.</p><img src="${setNight}" alt="MC Interactions channel point redemption." class="img-fluid mb-3"/><p>Triggered events would then perform an action in-game, like spawning a mob when someone follows, or changing the time of day to night when someone redeems a custom channel point.</p><p class="mb-0">From this project, I learnt a number of skills which I could apply to other projects:</p><ul><li>A much better understaning of Object Oriented Programming.</li><li>Implementing OAuth 2.0 for Twitch to retrieve user access tokens.</li><li>Using <a href="https://central.sonatype.com/artifact/org.java-websocket/Java-WebSocket/1.5.3" target="_blank">Java-WebSocket</a> to connect to Twitch's <a href="https://dev.twitch.tv/docs/eventsub" target="_blank">EventSub API</a> and listen out for event messages.</li><li>Using the <a href="https://sparkjava.com/" target="_blank">Spark</a> framework to set up a minimalist webserver for user authentication.</li><li>Using Cloudflare <a class="text-decoration-none" href="https://www.cloudflare.com/en-gb/products/tunnel/" target="_blank">Tunnels</a> and <a class="text-decoration-none" href="https://www.cloudflare.com/en-gb/application-services/products/dns/" target="_blank">DNS</a> to route traffic.</li></ul><p>The mod was developed as a bespoke project, but at some point in the future, I plan to redesign the mod to be more flexible.</p>`,
    "links": [
      {
        url: "https://github.com/EvanWard29/MC-Interactions",
        svg: githubSvg
      }
    ],
    "thumbnail": mcInteractions
  },
  {
    "id": "back-to-work",
    "title": "Back To Work",
    "description": `<p>I independently developed Back To Work as part of my final year project at the university of Plymouth.</p><p>Coded in <strong>PHP</strong> and <strong>JavaScript</strong>, the project was a household chore web application that allowed families to add members to a group and assign chores to individuals.</p><p>Points would be awarded for completing a chore, which could later be redeemed for a custom reward setup by parents/admins.</p><div class="row"><div class="col"><img class="img" src="${familyPage}" alt="Back To Work Family Page"></div><div class="d-lg-none w-100 mb-4"></div><div class="col"><img class="img" src="${choresPage}" alt="Back To Work Chore Page"></div></div><p>This project represented the culmination of all the skills and knowledge I had acquired throughout my three years at university.</p><p class="mb-0">Some of these included:</p><ul><li>Understanding the principles of full stack web development.<ul><li>Using Windows, Apache, MySQL, and PHP stack (<strong>WAMP</strong>) for backend development.</li><li>Using <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>, along with <strong>jQuery</strong> and <strong>Bootstrap</strong>, for frontend development.</li></ul><li>How to manage projects agilely.</li><li>Using entity relationship diagrams to plan database structures in MySQL.</li><li>Using <strong>AWS EC2</strong> instances to host web applications using Apache.</li><li>Using <strong>AWS RDS</strong> to host MySQL databases.</li><li>Using <strong>Git</strong> version control.</li></ul>`,
    "links": [
      {
        url: "https://github.com/EvanWard29/BackToWork",
        svg: githubSvg
      }
    ],
    "thumbnail": backToWork
  },
  {
    "id": "this-is-it",
    "title": "This Is It",
    "description": `<p>This project was a Newsletter Service full stack web application, written in Node.js using the Express framework.</p><p>The application allowed users to subscribe to topics and view a feed of newsletters for the chosen topics.</p><img class="img" src="${usersPage}" alt="Users Page"><p class="mb-0">From this project I learnt:</p><ul><li>How the model-view-controller (<strong>MVC</strong>) design pattern is used to structure robust web applications.</li><li>How <strong>Node.js</strong> can be used as a server-side language.</li><li>How powerful frameworks, such as <a class="text-decoration-none" href="https://expressjs.com/" target="_blank">Express</a>, can be used in conjunction with Node.js to create structured REST APIs.</li><li>How <strong>NoSQL</strong> databases, such as <a class="text-decoration-none" href="https://www.mongodb.com" target="_blank">MongoDB</a>, can be used to create flexible and scalable data structures.</li><li>How templating engines, such as <a class="text-decoration-none" href="https://ejs.co" target="_blank">EJS</a>, can be used to render dynamic web pages server-side before sending to the client.</li></ul>`,
    "links": [
      {
        url: "https://github.com/EvanWard29/This-Is-It",
        svg: githubSvg
      },
      {
        url: "https://www.youtube.com/watch?v=V5Obf46W_Gc",
        svg: youtubeSvg
      }
    ],
    "thumbnail": thisIsIt
  },
  {
    "id": "sleep-deep",
    "title": "Sleep Deep",
    "description": `<p>Sleep Deep was the final group project I completed whilst at university.</p><p>This full stack web application, using the WAMP stack, allows users to manually track their sleeping patterns.</p><p>It also allows them to play peaceful sounds and visually view their data with a calendar.</p><p class="mb-0">Working on this project, I gained:</p><ul><li>Working as a team to split tasks and maximize productivity.</li><li>Using agile project management to plan and complete tasks in sprints.</li><li>Using the <strong>MVC</strong> design pattern.</li><li>Using <strong>MySQL</strong> stored procedures to create, read, update, and delete data.</li></ul>`,
    "links": [
      {
        url: "https://github.com/EvanWard29/SleepDeep",
        svg: githubSvg
      }
    ],
    "thumbnail": sleepDeep
  },
  {
    "id": "patient-system",
    "title": "Patient Management System",
    "description": `<p>This independent project was my first introduction to Java and object-oriented programming (OOP).</p><p>The application allowed admins to manage patient, doctor, and secretary information at the GP.</p><p>It also allowed users to provide feedback for specific doctors.</p><div class="row"><div class="col"><img class="img" src="${pmsUsersPage}" alt="PMS User Page"></div><div class="d-lg-none w-100 mb-4"></div><div class="col"><img class="img" src="${feedbackPage}" alt="PMS Feedback Page"></div></div><p class="mb-0">Some skills I picked up from working on this project were:</p><ul><li>Learning to program in the <strong>Java</strong> language.</li><li>The value of using <strong>OOP</strong> to create structured software applications.</li><li>Using <strong>UML</strong> diagrams to plan and visualize class structures.</li><li>Using the <a class="text-decoration-none" href="https://netbeans.apache.org/front/main/index.html" target="_blank">NetBeans IDE</a> to code and build projects.</li></ul>`,
    "links": [
      {
        url: "https://github.com/EvanWard29/PatientSystem",
        svg: githubSvg
      }
    ],
    "thumbnail": patientSystem
  },
  {
    "id": "white-lion",
    "title": "The White Lion",
    "description": `<p>This project was my first introduction to web development.</p><p>The web application was independently created for a theoretical local pub for ordering drinks and snacks to the table.</p><img class="img" src="${orderPage}" alt="Order Page"><p class="mb-0">This project is what sparked my passion for web development, which led to me learning useful skills such as:</p><ul><li>Writing server-side code using the <strong>PHP</strong> language.</li><li>Using <strong>HTML</strong and <strong>CSS</strong> to produce styled web pages.</li><li>Using <strong>JavaScript</strong> and the <a class="text-decoration-none" href="https://jquery.com" target="_blank">jQuery</a> library to create interactive web pages.</li><li>Using <strong>MySQL</strong> to create relational databases for storing data.</li><li>Using <strong>Apache</strong> to host web applications.</li></ul>`,
    "links": [
      {
        url: "https://github.com/EvanWard29/TheWhiteLion",
        svg: githubSvg
      },
      {
        url: "https://youtu.be/Op6Ynqd_0dM?si=I9jDQfe6gaY5bqzw",
        svg: youtubeSvg
      }
    ],
    "thumbnail": whiteLion
  },
  {
    "id": "weather-app",
    "title": "The Weather App",
    "description": `<p>This was my first project I developed at university. It was also the first project I developed in C#.</p><p>The application accepted an input file of weather data recorded over the years.</p><p>Users could then search for locations to view their details and monthly data by year.</p><img class="img" src="${locationData}" alt="Data by location"><p>Users could also visually represent the data, such as plotting a graph of the average millimetres of rain for a location over the recorded years.</p><img class="img" src="${averageRain}" alt="A graph representing the average millimetres of rain by location over the recorded years"><p class="mb-0">This was the first project I developed in a language other than Python. From it, I learnt:</p><ul><li>How to use <strong>C#</strong> to develop GUI and terminal applications.</li><li>The importance and usages of classes.</li><li>The principles of software engineering.</li><li>How to handle file input and outputs.</li></ul>`,
    "links": [
      {
        url: "https://github.com/EvanWard29/WeatherApp",
        svg: githubSvg
      }
    ],
    "thumbnail": weatherApp
  }
]