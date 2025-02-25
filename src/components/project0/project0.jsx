import React from "react";
import "./project0.scss";
import NewNavbar from "../new_navbar/new_navbar";
import Sidebar from "../sidebar/Sidebar";

const Project1 = () => {
  return (
    <div className="container">
      <Sidebar className="side_bar" />
      <header className="header">
        <h1>Making UST a Zootopia</h1>
        <hr className="header-line" />
      </header>
      <div className="flex-container">
        <div className="image-center">
          <img src="./hkust.jpg" alt="Project Image" />
        </div>
        <div className="text-center">
          <p className="micro-para">
            This microblog serves as an introspection for a course I am ardently
            passionate about, which I am currently undertaking during my studies
            at HKUST. The course is called COMP 4461, and it deals with the
            intricate dynamics of human computer interaction, a field I find
            intriguing. Our first assignment involved my groupmates and me
            empathizing with our target audience, which, in this case, consists
            of visiting students from the Biosphere of Fauna—yes, that’s right,
            we’re talking about animals on an academic exchange! We designed and
            ideated a hypothetical situation in the form of a mind map, which
            was akin to brainstorming while trying to avoid being distracted by
            thoughts of rewatching movies like Zootopia, Ice Age, Madagascar,
            and Jurassic Park—a clear indication of what a big cinephile I am!
          </p>
        </div>
      </div>
      <p className="para1">I like to move it, move it(Madagascar)</p>
      <hr className="header-line2" />
      <header className="header">
        <h1>Project Information</h1>
        <hr className="header-line" />
      </header>
      <p className="para3">
        Before we begin with what our project is about, I want to shed some
        light on the whimsical world of Human-Computer Interaction (HCI). Now,
        don’t confuse this acronym with a chemistry compound—unless you want
        your computer to start bubbling over, basically creating an unexpected
        effervescent reaction! In essence, HCI is a field of study that focuses
        on the two-way communication between people and machines to improve user
        experience (UX) and optimize computer design. A salient takeaway is that
        just because a prototype works in a lab setting doesn’t guarantee it
        will function effectively in the real world; for instance, consider
        Google Glass, which was launched in 2013, or Amazon’s Fire Phone. This
        is where HCI concepts come into play, as they often promote equity and
        accessibility.
      </p>
      <img src="/HCI.jpg" alt="" className="hci" />
      <p className="para2">
        Perfect Example of HCI: Iron man working with Jarvis!
      </p>
      <p className="para3">
        Now, onto our first project: to foster teamwork and understand the steps
        necessary before prototyping, we were divided into groups of three. Our
        first topic involves improving the current HKUST campus to better
        accommodate the needs of animal kingdom visiting students. This required
        us to put ourselves in their shoes—quite literally! While humans are
        mammals, the animal kingdom is a wild party of classifications,
        including reptiles, fish (Pisces), amphibians, and birds (aves). Each of
        these categories has its own quirks; for example, did you know that aves
        can be divided into Palaeognathae (the flightless ones) and Neognathae
        (the modern aviators)?
      </p>

      <p className="para3">
        This means all these creatures have unique abilities, habits, and forms
        that we must meticulously consider during our project (need finding). As
        we brainstormed solutions, it became abundantly clear that our existing
        facilities—like the current water fountains and door mechanisms—needed a
        serious makeover. Imagine a feline trying to pull open a door with her
        pretty claws; I wouldn’t want her nails to break off! Our goal is to
        develop innovative designs that not only improve accessibility but also
        foster a sense of community between human students and their animal
        counterparts.
      </p>

      <hr className="header-line2" />
      <header className="header">
        <h1>Background</h1>
        <hr className="header-line" />
      </header>
      <p className="para3">
        In order to create a user-centered design, one must interpret things
        from users’ behaviors rather than a designer's interpretation, which is
        often based on assumptions about what could fulfill the unmet needs of
        these visitors. According to Maslow’s hierarchy of needs, the most
        fundamental requirement is physiological needs, which include air, food,
        and shelter. Following this are safety and security needs, further
        followed by social needs—akin to companionship among similar species.
        Next are esteem needs, and finally, self-actualization, which relates to
        creativity and personal growth.
      </p>
      <p className="para3">
        To fulfill all these needs,our group wanted to build deep empathy with
        the creatures for whom we were designing. Thus, we employed ethnographic
        methods such as observing and shadowing the campus. Despite HKUST’s
        beautiful campus, it is primarily designed with human capabilities and
        color psychology in mind. For instance, animals might face challenges
        with entrances and exits due to door mechanisms; a dog or larger animal
        may struggle with heavy doors that require pushing or pulling, as well
        as navigating pathways like stairs.
      </p>
      <img src="/pyramid.jpg" className="pyramid" />
      <p className="para2"> Maslow's Hierarchy</p>
      <p className="para3">
        Furthermore, many animals might have different temperature preferences.
        Even though HKUST does have controlled environments in laboratory
        settings, when animals are sprawling across the campus, they could be
        exposed to extreme weather conditions in the outdoor areas. For
        instance, it is known that reptiles thrive in temperatures between 28°C
        and 32°C, while other species might require cooler or warmer
        environments to feel comfortable. Moreover, the lively atmosphere of our
        campus, which is filled with bustling human activity and loud noises,
        could be another hurdle. This sensory overload could easily overwhelm
        sensitive species such as dogs or cats, causing anxiety and distress.
        Just as humans can feel overwhelmed in a crowded space, animals too can
        experience similar feelings when faced with constant commotion.
        Furthermore, basic facilities such as feeding stations, water stations,
        washrooms, and resting areas may not cater to every species. For
        example, a small bird might struggle to access water from a standard
        fountain designed for humans. Just as humans experience homesickness,
        the lack of a natural habitat could evoke similar feelings in animals.
        It is also crucial to consider emergency protocols and biosecurity
        measures
      </p>
      <div className="three-image-container">
        <img src="/washroom.png" alt="Spara Persona" className="three-image" />
        <img
          src="/dispenser.jpg.webp"
          alt="Jeff Persona"
          className="three-image"
        />
        <img src="/LC.jpg" alt="Delphina Persona" className="three-image" />
      </div>
      <p className="p18">Current Infrastructure at HKUST</p>

      <hr className="header-line2" />
      <header className="header">
        <h1>Emphatizes</h1>
        <hr className="header-line" />
      </header>
      <p className="para3">
        From our findings, we feel our solution would consist of all three
        levels of design: visceral, behavioral, and reflective because we will
        be focusing on how animals sense, use things, and how they interpret
        their environments. Since our group is focusing on user-centered design
        (UCD), we are tailoring our solutions to animals’ physical and sensory
        requirements, along with focusing on accessibility for various species
        and making sure of its affordance. We are even thinking of an
        animal-centered design. We used mind mapping and mash-up techniques.
        Additionally, we focused on usability and thought of the simplest
        solution, along with its aesthetics, and even took inspiration from
        Zootopia, which talked about how Animal-Computer Interaction (ACI) can
        enhance animal agency by enabling choice and control over their
        environments.
      </p>

      <hr className="header-line2" />
      <header className="header">
        <h1>Interpret</h1>
        <hr className="header-line" />
      </header>

      <p className="para15">
        For our solution we came up with an engaging experience focusing on its
        immersiveness and effectiveness. We first built three personas named
        Spara, the sparrow, Jeff, the cow and Delphina, the dolphin and analyzed
        their dietary preference, habitat and so on. By using this method for
        rapid need finding we focused on a story board and role playing. Each
        member expressed their concerns for me since I was a sparrow I talked
        about the need of high perches, safe nesting spots and minimal
        reflective hazard.
      </p>

      <div className="double-image-container">
        <img src="/persona-2.png" alt="Persona 2" className="double-image" />
        <img src="/persona.png" alt="Persona 1" className="double-image" />
      </div>

      <p className="para16">
        We focused on a HTA framework that is basically a hierarchical Task
        Analysis where we took out problems to be fixed as sub goals for
        instance habitat or abilities and divided them into various types for
        instance nocturnal, terrestrial, aquatic and aerial. Then we
        brainstormed solutions like pipes and pathways for water locomotion or
        water tanks in classrooms for aquatic creatures. We even dove into
        things like dexterity and talked about stationary objects and amanuenses
        while also addressing important issues like bullying among species.
        Plus, we examined the food chain and considered safety measures such as
        alerts and repellents. Our approach really aims to align with
        animal-centered design principles.
      </p>

      <hr className="header-line2" />
      <header className="header">
        <h1>Ideate</h1>
        <hr className="header-line" />
      </header>
      <div className="flex-container">
        <div className="image-center">
          <img src="/mindmap.png" alt="Project Image" className="persona " />
          <p className="para17">Mind Map</p>
        </div>
        <div className="text-center">
          <p className="para3">
            We used a mind map to keep track of our thoughts during the
            brainstorming session, where we proposed as many ideas as we could
            while trying to think from the user perspective. We focused more on
            the “yes, and” method rather than questioning each other
            excessively. Inspired by "Zootopia," we even tried to go visual and
            considered key quantities that make quality, particularly regarding
            navigation. For example, we discussed public transport solutions
            like wearable mini octopus cards, similar to what one might find in
            Zootopia, and how we could adjust buses to accommodate different
            animal sizes. We also thought about essentials like accommodation
            and dug deep into their basic functionalities. Additionally, we
            explored infrastructure solutions such as green areas, animal zones,
            and a smart campus navigation app along with environmental
            monitoring systems. Since we were designing solutions for animals,
            we put extra effort into ensuring that each solution was simple and
            intuitive enough, reflecting the thoughtful design seen in
            "Zootopia."
          </p>
        </div>
      </div>
      <hr className="header-line2" />
      <header className="header">
        <h1>Verify</h1>
        <hr className="header-line" />
      </header>

      <p className="para3">
        Our group actively reached out to both friends and strangers in the
        atrium, pitching our proposed solutions and asking for their
        perspectives as well. This engagement proved to be incredibly valuable,
        as we received a variety of insights that enriched our understanding of
        the issues at hand. Many participants offered suggestions that we found
        particularly useful, which we subsequently incorporated into our mind
        map. For instance, one significant concern raised was related to night
        blindness among certain species, which can pose challenges for
        navigation in low-light conditions. This feedback prompted us to
        consider additional design elements, such as improved lighting solutions
        or reflective pathways that would enhance visibility and safety for
        animals with limited night vision.
      </p>

      <img src="/Verify.png" className="verify" />

      <hr className="header-line2" />
      <header className="header">
        <h1>Personal Reflection</h1>
        <hr className="header-line" />
      </header>
      <p className="para3">
        Even though I happen to be someone who loves entrepreneurship and
        commercializing innovation, the things this course has taught me so far
        have blown my mind because, after all, I am just a computer science
        major. The fact that even an invention one thinks of in a lab or works
        really hard on prototyping won’t be a success if HCI isn’t taken into
        consideration is eye-opening. Mostly, engineers think of a problem
        statement and start working on the solution—in my case, coding.
      </p>
      <img src="/personal_back.jpg" className="pyramid" />

      <p className="para3">
        For this specific project, even coming up with a mind map took me a lot
        of time since that meant we were focusing more on the ideation and
        design portion, especially when it comes to thinking about a
        hypothetical situation like this that isn’t possible in real life. I let
        my imagination run wild when it came to creativity, inspired by the song
        “I Like to Move It” from Madagascar. I really loved the whole idea and
        process of thinking about something that’s at least not possible in the
        near future. It made me realize how much I often feel things are
        perfect, but you can always design it better.
      </p>
      <p className="para3">
        Now, coming to designing, I feel I learned a lot of techniques—like
        POVs, HTA, brainstorming, storyboards, and so on—which helped my team
        come up with solutions. This experience has shown me that blending
        technical skills with design thinking is crucial for creating successful
        innovations. Overall, this project has reshaped my understanding of how
        important HCI is in the innovation process and has inspired me to think
        differently about future projects.
      </p>
    </div>
  );
};

export default Project1;
