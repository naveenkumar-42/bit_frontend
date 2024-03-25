document.addEventListener("DOMContentLoaded", function () {
    const msgerForm = document.querySelector(".msger-inputarea");
    const msgerInput = document.querySelector(".msger-input");
    const msgerChat = document.querySelector(".msger-chat");
    const sendBtn = document.getElementById("sendBtn");
    const clearBtn = document.getElementById("clearBtn"); // Added Clear button

    const BOT_IMG = "bot.jpg";
    const PERSON_IMG = "person.jpg";
    const BOT_NAME = "BitBot";
    const PERSON_NAME = "You";

    function clearConversation() {
        const chatContainer = document.getElementById("chatContainer");

        // Keep the default message, which is the first child of chatContainer
        const defaultMessage = chatContainer.firstElementChild;

        // Clear all other messages
        while (chatContainer.children.length > 1) {
            chatContainer.removeChild(chatContainer.children[1]);
        }
    }
      
    

    msgerForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const msgText = msgerInput.value.trim().toLowerCase();
        if (!msgText) return;
        appendMessage(PERSON_NAME, PERSON_IMG, "right", msgText);
        msgerInput.value = "";
        botResponse(msgText);
    });

    clearBtn.addEventListener("click", function () {
        clearConversation();
    });
    
    msgerForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const msgText = msgerInput.value.trim().toLowerCase();
        if (!msgText) return;
        appendMessage(PERSON_NAME, PERSON_IMG, "right", msgText);
        msgerInput.value = "";
        botResponse(msgText);
    });
  
    function appendMessage(name, img, side, text) {
        const msgHTML = `
            <div class="msg ${side}-msg">
                <div class="msg-img" style="background-image: url(${img})"></div>
                <div class="msg-bubble">
                    <div class="msg-info">
                        <div class="msg-info-name">${name}</div>
                        <div class="msg-info-time">${formatDate(new Date())}</div>
                    </div>
                    <div class="msg-text">${text}</div>
                </div>
            </div>
        `;
        msgerChat.insertAdjacentHTML("beforeend", msgHTML);
        msgerChat.scrollTop = msgerChat.scrollHeight;
    }
  
    function botResponse(userInput) {
        const input = userInput.toLowerCase();
        const response = qaDictionary[input] || qaDictionary["default"];
        appendMessage(BOT_NAME, BOT_IMG, "left", response);
    }
  
    function get(selector, root = document) {
        return root.querySelector(selector);
    }
  
    function formatDate(date) {
        const h = "0" + date.getHours();
        const m = "0" + date.getMinutes();
        return `${h.slice(-2)}:${m.slice(-2)}`;
    }
  
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
  
    recognition.addEventListener("result", function (e) {
        const transcript = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript).join(' ');
        msgerInput.value = transcript;
        setTimeout(function () {
            sendBtn.click(); // Click the send button
        }, 3000);
    });
  
    function startVoice() {
        recognition.start();
    }
    
      const qaDictionary = {
        "hi": "Hi! How can I assist you today?",
        "hello": "Hello! How can I assist you today?",
        "how are you ?": "I'm just a bot, but I'm here to help. What can I do for you?",
        "what is your name ?": "I'm Naveen's Bot, your friendly chatbot.",
        "goodbye": "Goodbye! If you have more questions, feel free to ask.",
        "what is meant by ssig in bannari amman institute of technology ?": "SSIG stands for Student Special Interest Group at BIT.",
        "what is the full form of ssig ?": "SSIG stands for Student Special Interest Group at BIT.",
        "what is the use of ssig in bit ?": "In the SSIG group, students collaborate to complete their SSIG targets and engage in various activities.",
        "what is information technology ?": "Information Technology (IT) is the use of computers, software, networks, and other technology to store, process, and transmit data for various purposes.",
        "what are the different branches of IT ?": "Some branches of IT include software development, network administration, cybersecurity, database management, and web development, among others.",
        "what is programming ?": "Programming is the process of creating and writing instructions for a computer to execute. Programmers use programming languages to develop software and applications.",
        "what is cybersecurity ?": "Cybersecurity is the practice of protecting computer systems, networks, and data from theft, damage, or unauthorized access. It involves measures to prevent and respond to cyber threats.",
        "what is cloud computing ?": "Cloud computing is a technology that allows users to access and use computing resources (such as servers and storage) over the internet. It provides scalability and flexibility for various IT applications.",
        "how does data encryption work ?": "Data encryption is the process of converting data into a code to prevent unauthorized access. It uses algorithms and keys to encode and decode the information securely.",
        "what is a database ?": "A database is a structured collection of data that can be easily accessed, managed, and updated. It's commonly used to store and retrieve information in various IT applications.",
        "what is the role of an IT support specialist ?": "An IT support specialist helps users with technical issues, troubleshoots problems, and provides assistance with hardware and software. They ensure that IT systems run smoothly.",
        "what are the emerging trends in IT ?": "Emerging trends in IT include artificial intelligence, machine learning, Internet of Things (IoT), blockchain technology, and 5G networks, among others.",
        "what is the Internet of Things (IoT) ?": "IoT refers to the network of interconnected physical devices and objects that can communicate and exchange data with each other over the internet.",
        "explain agile software development ": "Agile is an iterative and flexible approach to software development, where projects are divided into small increments, and collaboration and adaptability are emphasized.",
        "what is a firewall ?": "A firewall is a network security device or software that monitors and controls incoming and outgoing network traffic to protect a network from unauthorized access and threats.",
        "what is open-source software ?": "Open-source software is software with a source code that is publicly available and can be modified and distributed by anyone. It often promotes collaboration and community-driven development.",
        "what is a computer virus ?": "A computer virus is malicious software that can infect and damage a computer system. It spreads by attaching itself to legitimate programs and files.",
        "what is a data breach ?": "A data breach is a security incident in which sensitive or confidential data is accessed, disclosed, or stolen by unauthorized individuals or entities.",
        "what is virtualization ?": "Virtualization is the process of creating a virtual version of a resource, such as a server, storage device, or operating system, to improve resource utilization and management.",
        "what is cloud security ?": "Cloud security involves measures and strategies to protect data and applications stored in cloud environments, ensuring data privacy, compliance, and protection against cyber threats.",
        "how does blockchain work ?": "Blockchain is a decentralized and distributed ledger technology that records transactions in a secure and immutable way. It uses cryptographic techniques to ensure trust and transparency.",
        "what is big data ?": "Big data refers to extremely large and complex data sets that are challenging to process and analyze using traditional data management tools. It often requires specialized technologies and techniques.",
        "what is a computer network ?": "A computer network is a collection of interconnected devices and computers that can communicate and share resources, such as files and printers.",
        "what is a URL ?": "A URL (Uniform Resource Locator) is a web address that specifies the location of a resource on the internet, including web pages, documents, or other files.",
        "what is a programming language ?": "A programming language is a formal language used to instruct a computer to perform specific tasks. Examples include Python, Java, C++, and JavaScript.",
        "what is cloud storage ?": "Cloud storage is a service that allows data to be stored and accessed over the internet, often provided by third-party providers. It offers data backup and accessibility from anywhere.",
        "what is a software update ?": "A software update is a release of a newer version of software or an application that typically includes bug fixes, new features, and security enhancements.",
        "what is a data center ?": "A data center is a facility housing computer systems and networking equipment used for data storage, processing, and management.",
        "what is machine learning ?": "Machine learning is a subset of artificial intelligence that enables computers to learn from data and make predictions or decisions without being explicitly programmed.",
        "what is a router ?": "A router is a networking device that forwards data packets between computer networks. It plays a crucial role in directing internet traffic between devices.",
        "what is an API ?": "An API (Application Programming Interface) is a set of rules and protocols that allow different software applications to communicate and interact with each other.",
        "what is a data scientist ?": "A data scientist is a professional who uses statistical analysis, data mining, and programming to analyze large datasets and extract valuable insights.",
        "what is a computer virus scanner": "A computer virus scanner, also known as antivirus software, is a program that scans and detects computer viruses and malware to protect a computer from infections.",
        "what is a LAN (Local Area Network)": "A LAN is a network that connects devices within a limited geographical area, such as a home, office, or campus, enabling local data sharing and communication.",
        "what is a WAN (Wide Area Network)": "A WAN is a network that spans a larger geographical area, connecting multiple LANs and allowing data transmission over longer distances.",
        "what is a data backup": "Data backup is the process of creating copies of data to ensure its availability in case of data loss due to hardware failures, accidental deletion, or other issues.",
        "what is a data warehouse": "A data warehouse is a central repository that stores and manages large volumes of data from various sources, allowing for complex data analysis and reporting.",
        "what is a 404 error": "A 404 error is a standard HTTP response code indicating that the server could not find the requested webpage or resource on a website.",
        "what is artificial intelligence (AI)": "AI is the development of computer systems that can perform tasks typically requiring human intelligence, such as problem-solving, pattern recognition, and decision-making.",
        "what is a web browser": "A web browser is a software application that allows users to access and view websites on the internet. Popular examples include Chrome, Firefox, and Safari.",
        "what is data mining": "Data mining is the process of discovering patterns and information from large datasets using techniques like statistical analysis, machine learning, and pattern recognition.",
        "what is a computer algorithm": "A computer algorithm is a step-by-step set of instructions or rules designed to solve a specific problem or perform a particular task.",
        "default": "Sorry! I can't help you."
        
      };
    });
  