import React from "react";
import "./project2.scss";
import NewNavbar from "../new_navbar/new_navbar";
import Sidebar from "../sidebar/Sidebar";

const Project1 = () => {
  return (
    <div className="container">
      <Sidebar className="side_bar" />
      <header className="header">
        <h1>Travel Buddy</h1>
        <hr className="header-line" />
      </header>
      <div className="flex-container">
        <div className="image-center">
          <img src="./project2.png" alt="Project Image" />
        </div>
        <div className="text-center">
          <p className="micro-para">
          This microblog serves as an introspection for COMP 4461, a course that focuses on understanding human-computer interaction, a field I find intriguing. Our second assignment involved my groupmates, Surya, Antariksh, and me, empathizing with our target audience, which, in this case, consists of frequent travelers, with a primary focus on exchange students. Our task was to create an app or website with an HRI element to help tackle hospitality issues. We designed and ideated a hypothetical situation in the form of a mind map and then developed a prototype, which was akin to brainstorming while trying to avoid being distracted by thoughts of visiting Thailand—a clear indication of what a big vagabond I am! 
          </p>
        </div>
      </div>
      <p className="para1">  </p>
      <hr className="header-line2" />
      <header className="header">
        <h1>Project Information</h1>
        <hr className="header-line" />
      </header>
      <p className="para3">
      For Project 2, we had to identify a user that needs HRI services, such as hotels, restaurants, cafés, bars, theme parks, concerts, and sports events, which could benefit from a virtual or physical robot. Additionally, we needed to design an interactive agent or chatbot. At first, we used a method called "speed dating" and came up with three consecutive ideas: a personalized shopping assistant, a health and wellness coach, and an education and learning companion. However, we ultimately decided on "Travel Buddy," which is essentially an AI agent that allows users to plan a trip itinerary without hassles. 
      </p>
      <img src="./speeddating.png" alt="" className="hci" />
      <p className="para2">
        Speed Dating
      </p>

      <hr className="header-line2" />
      <header className="header">
        <h1>Background</h1>
        <hr className="header-line" />
      </header>
      <p className="para3">
      To make a user-centered design, one needs to interpret things from users' behaviors rather than relying on a designer's assumptions about what might fulfill their unmet needs. Keeping in mind the Maslow's hierarchy of needs, the most fundamental requirements are physiological needs—air, food, and shelter. The needs for safety and security come next, followed by those for social interaction (who doesn't enjoy a good travel companion?), self-esteem, and self-actualization, which is all about ingenuity and personal development.

      </p>
      <img src="/mindmap1.png" className="pyramid" />
      <p className="para2"> Mind Map</p>
      <p className="para3">
      In our project, which focuses on travelers and exchange students, we wanted to develop a strong sense of empathy for my users. We understood that acclimating to new surroundings can be intimidating and that travelers frequently come across logistical challenges such as making hotel reservations, organizing itineraries, and locating local facilities. 
      </p>
      <p className="para3">
      To gain insights into these challenges, we used ethnographic methods. We observed and shadowed users in their natural environments—well, as natural as it gets when you're trying to book flights for a midterm break. We even conducted interviews via WhatsApp (because who needs face-to-face when you have emojis?) and sent out Google Forms to gather more data. As we watched my participants plan their trips, we realized that understanding their behaviours in real-time was key to designing solutions that truly meet their needs.
      </p>
      
    
      <hr className="header-line2" />
      <header className="header">
        <h1>Emphatizes</h1>
        <hr className="header-line" />
      </header>
      <p className="para3">
      We believe our solution will address visceral, behavioral, and reflective design levels by focusing on how tourists feel, how they use things, and what they want to see while traveling. 
      
      Since we are concentrating on user-centered design (UCD), we are tailoring our solutions to meet tourists' physical and sensory needs, emphasizing accessibility and ensuring ease of use.
We utilized mind mapping and mash-up techniques to focus on usability, simplicity, and aesthetics. For example, we created mind map structures to outline our use cases and identify potential stakeholders.
We discovered that many students, especially exchange students, travel nearby for enrichment, which became our focus area. To understand our users' needs better, we created an online survey using Google Forms and shared it with friends and peers. The results showed that many students rated our product 4 out of 5. Most respondents travel at least once every few months and face challenges like finding reliable information, overcoming language barriers, and managing time when planning trips. To gain personal insights, we interviewed a fellow exchange student via WhatsApp.
      </p>
     
    <img src="/piechart.png" alt="Pie Chart" classname ="pie_chart"></img>
      
      <hr className="header-line2" />
      <header className="header">
        <h1>Interpret</h1>
        <hr className="header-line" />
      </header>

      <p className="para15">
We categorized our gathered information into two sections: user behaviors and bottlenecks. We noted that users prefer to do the least amount of work while gaining the most benefits. Budget is crucial for users, as they want to maximize enjoyment within their limited means. The primary reason for travel is leisure, particularly international travel, but users often lack knowledge about these destinations.
      </p>

    

      <div className="double-image-containe">
        <img src="./questions.png" alt="Persona 2" className="double-image" />
        {/* <img src="/people.png" alt="Persona 1" className="double-image" /> */}
      </div>

      <p className="para16">
      We found that budget planning is challenging due to varying costs and unpredictability while traveling. Additionally, finding reliable information is tough because others' experiences can be contradictory. The repetitive process of researching and adjusting trip details is also time-consuming.
      </p>

      <hr className="header-line2" />
      <header className="header">
        <h1>Ideate</h1>
        <hr className="header-line" />
      </header>
      <p className="para3">
      With our target group clearly defined, we took the time to develop a detailed framework that maps out how users currently go about planning their trips. We broke this process down into various sub-goals, like “Plan 0: Do 1, 2, 3” or “Plan 1,” which you can see in the image below. To better understand how users interact with our app, we applied the GOMS (Goals, Operators, Methods, and Selection rules) model to identify key features and objectives. We also outlined specific tasks, such as logging in, creating an itinerary, and modifying it later on.
To really connect with our users, we created detailed personas that reflect different perspectives and experiences.
 For example, we have Julian Lee, a 23-year-old Korean-American who wants to dive deeper into Japan beyond what he learns in textbooks, even if it means using a translator app to help him out. Then there’s Alex Chen, a 22-year-old Chinese business student eager to explore Europe before his semester—and his budget—runs out. We also have Liam O’Connor, a 20-year-old Irish student on a mission to find the perfect wave in Australia while managing his engineering coursework. Lastly, we introduced Maya Patel, a 24-year-old Indian student who captures the beauty of Canada through her camera, all while pretending she’s not freezing in the chilly weather.
By creating these relatable personas, we aim to truly empathize with our users’ unique needs and preferences. This helps us ensure that our solution effectively tackles the challenges they face when planning their trip
      </p>
     
      <div className="double-image-container">
        <img src="/flowchart.png"  />
        <img src="/flowchart2.png" />
      </div>
      <div className="double-image-container">
        <img src="/flowchart3.png"  />
        <img src="/flowchart4.png"  />
      </div>
      <div className="double-image-container">
        <img src="/flowchart5.png"  />
        <img src="/flowchart6.png"  />
      </div>
      
    
      
      <hr className="header-line2" />
      <header className="header">
        <h1>Prototype</h1>
        <hr className="header-line" />
      </header>

      <p className="para3">
      For our prototype, we adopted a philosophy centered around "Vertical Prototyping," which allowed us to focus on developing core functionalities given our time constraints. We began the process by creating wireframes using Figma, a web design tool that helps us visualize the layout and flow of our application.
      For the functional prototype, we chose to use Next.js in combination with Supabase for authentication. Next.js is an incredibly powerful framework for rapid development, as it comes with built-in capabilities for creating API routes, streamlining the development process. Supabase, on the other hand, offers a straightforward way to implement authentication, making it easy for us to m anage user access and security
      We started with low-fidelity wireframes to outline the basic structure and user experience. Once we had a solid foundation, we moved on to high-fidelity prototypes, refining our designs and functionalities to better meet user needs. This approach allowed us to iterate quickly and ensure that our prototype effectively addresses the challenges we identified during our research. The video can be assessed through this <a href="https://www.youtube.com/watch?v=tQRpEuNzLrw"><u>link</u></a>
      </p>

      <div className="three-image-container">
        <img src="/low.png" alt="Spara Persona" className="three-image" />
        <img
          src="/high.png"
          alt="Jeff Persona"
          className="three-image"
        />
        <img src="/high2.png" alt="Delphina Persona" className="three-image" />
      </div>

      <hr className="header-line2" />
      <header className="header">
        <h1>Verify</h1>
        <hr className="header-line" />
      </header>

      <p className="para3">
      Our group actively engaged with both friends and strangers in the atrium, pitching our proposed solutions and seeking their perspectives. This engagement proved to be incredibly valuable, as we received a wide range of insights that deepened our understanding of the issues at hand. Many participants offered suggestions that we found particularly useful, which we later incorporated into our mind map.
For example, one significant concern raised was the inability for users to see the edits or changes they were making in the search bar. We also noted the inconsistent user interface, where the button designs did not match the design of the destination elements. Additionally, participants pointed out the lack of icons; while some mapping was present, using icons on buttons would enhance usability. Another issue highlighted was the absence of a "Submit" button on the chat page, which could lead to user confusion. Furthermore, users mentioned that there was no feedback provided during the signup process, and content overflow in the input box hid what users had previously written. This could be remedied by implementing a &lt;textarea&gt; for better text visibility.
To further refine our understanding, we chose the "Conceptual Model Extraction" testing protocol. This approach allows us to qualitatively understand the user's thought process. Unlike the "Co-Discovery Learning Protocol," which involves an expert guiding the user, we wanted participants to freely interact with the web app and describe their experience without any bias. We asked each user to articulate what they would do before actually using the app, such as which button they would instinctively click first and their anticipated usage flow. This feedback was invaluable in helping us identify areas for improvement and ensuring our design aligns with user expectations

      </p>

      <img src="/Verify.png" className="verify" />

      <hr className="header-line2" />
      <header className="header">
        <h1>Personal Reflection</h1>
        <hr className="header-line" />
      </header>
      <p className="para3">
      Reflecting on my experience in COMP 4461 and the "Travel Buddy" project, I find myself feeling both grateful and enlightened. This course has deepened my understanding of human-computer interaction, allowing me to explore the intricate relationship between users and technology. Working alongside my groupmates, Surya and Antariksh, has been particularly rewarding. Collaborating with them not only sparked creativity but also fostered a sense of camaraderie as we navigated the challenges of our project together.
      </p>
      <p className="para3">
      One of the most impactful aspects of this assignment was the emphasis on empathy. Engaging with our target audience—frequent travelers and exchange students—allowed us to step into their shoes and understand their unique experiences and challenges. Conducting interviews and utilizing ethnographic methods opened my eyes to the real-life hurdles travelers face, from logistical nightmares to the emotional stress of acclimating to new environments. This firsthand insight was invaluable in shaping our design decisions and ensuring that "Travel Buddy" truly addresses user needs.
      </p>
      <p className="para3">
I also found the process of ideation and prototyping to be incredibly fulfilling. The transition from brainstorming ideas to creating wireframes and functional prototypes was a journey of discovery. Using tools like Figma and Next.js not only enhanced my technical skills but also taught me the importance of iterative design. Each round of feedback we received helped refine our ideas and solidify our understanding of what users truly want.
      </p>
    </div>
  );
};

export default Project1;
