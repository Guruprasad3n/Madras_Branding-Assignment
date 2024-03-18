import React, { useState, useEffect } from "react";
import "../css/containers.css";

function ScrollEffect() {
  const [currentImage, setCurrentImage] = useState("");
  const data = [
    {
      para: "Never start from scratch",
      heading: "Generate docs, decks & webpages in seconds",
      description:
        "Create a working presentation, document or webpage you can refine and customize in under a minute, using our powerful AI generator.",
      boxContent:
        "Gamma allows me to package up information in ways I can't with slides, while still creating good flow for my presentations.",
      profile: "Ann Marie, Director of Product at Koalafi",
      image:
        "https://www.masaischool.com/images/new-homepage/curriculum-style/course-image1.webp",
    },
    {
      para: "Beautiful and on-brand",
      heading: "Make it polished and ready in one click",
      description: "",
      //   description:
      //     "Harness & Implement The Power Of AI In Coding & Data Analytics. What’s More? Use Custom AI Tools To Enhance Placement Preparation.",
      emojies: ["🎉", "🎨", "⏰"],
      content: [
        " No more slide masters or template lock-in",
        " Restyle your entire deck in just one click",
        " Use a flexible template to work faster",
      ],
      boxContent:
        "Creating polished slides gets really tedious, especially aligning boxes and keeping things on-brand. With Gamma, I can get things done so much faster.",
      profile: "John, Co-founder & CEO at Stotles",
      image:
        "https://www.masaischool.com/images/new-homepage/curriculum-style/course-image2.webp",
    },
    {
      para: "Context with brevity",
      heading: "Present live, or send a webpage",
      description: "",
      //   description:
      //     "Our Curriculum Is Regularly Updated Through Industry Feedback. In-Demand Specialisations Are Added To Aid Our Students Launch Sustainable Careers.",
      emojies: ["💡", "🔎", "💬"],
      content: [
        " Get your point across with present mode",
        " Drill into the details using nested cards",
        " Share online with publishing + analytics",
      ],
      boxContent:
        "Notion x Canva is the best way to think about Gamma. It's just so nice to use!",
      profile: "Matthias, Senior Strategy Consultant at ODALINE",
      image:
        "https://www.masaischool.com/images/new-homepage/curriculum-style/course-image3.webp",
    },

    {
      para: "Concise, visual, and interactive",
      heading: "Bring your ideas to life",
      description: "",
      //   description:
      //     "We Prioritise Flexible Thinking & Continuous Skill Development. Stay Nimble In An Ever-Changing World By Embracing Adaptability, Curiosity & Rapid Learning.",
      emojies: ["🎆", "🎥", "📈", "💻"],
      content: [" GIFs", " Videos", " Charts", " Websites"],
      boxContent:
        "We've avoided PowerPoint decks at all costs at our agency, but Gamma offered us a fresh alternative that we love to share with potential clients. Polished and adaptable. We love it!",
      profile: "Emilie, Founder & Principal at Six Eastern",
      image:
        "https://www.masaischool.com/images/new-homepage/curriculum-style/course-image4.webp",
    },
    {
      para: "Engage users on any device",
      heading: "Read anywhere",
      description: "",
      //   description:
      //     "We Prioritise Flexible Thinking & Continuous Skill Development. Stay Nimble In An Ever-Changing World By Embracing Adaptability, Curiosity & Rapid Learning.",
      emojies: ["😁", "💬", "📱", "📊"],
      content: [
        " Measure engagement with built-in analytics",
        " Get more feedback with quick reactions",
        " Comments make collaboration straightforward",
        " Share on any device — laptop, tablet, or phone",
      ],
      boxContent:
        "We've avoided PowerPoint decks at all costs at our agency, but Gamma offered us a fresh alternative that we love to share with potential clients. Polished and adaptable. We love it!",
      profile: "Emilie, Founder & Principal at Six Eastern",
      image:
        "https://www.masaischool.com/images/new-homepage/curriculum-style/course-image4.webp",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const container = document.getElementById("scroll-container");
      const scrollTop = container.scrollTop;
      const headingHeight = container.scrollHeight / data.length;

      const newHeadingIndex = Math.floor(scrollTop / headingHeight);
      setCurrentImage(data[newHeadingIndex].image);
    };

    const container = document.getElementById("scroll-container");
    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [data]);

  return (
    <div>
      <div className="scroll-head">
        <div className="scroll-head-imgbox">
          <img
            className="scroll-head-img"
            src="https://www.masaischool.com/images/new-homepage/curriculum-style/graduate.svg"
            alt="Graduate"
          />
        </div>
      </div>
      <div className="container">
        <div id="scroll-container" className="left-container">
          {data.map((item, index) => (
            <div key={index} className="heading">
              <img className="scroll-icon" src="/" alt="Icon" />
              <p className="paraTop">{item.para}</p>
              <h3 className="scrollHeadin">
                <span
                  style={{
                    color: "rgb(10, 22, 41)",
                    fontSize: "60px",
                    fontWeight: "700",
                    letterSpacing: "-2.4px",
                  }}
                >
                  {item.heading}
                </span>
              </h3>
              {item.description && (
                <p className="descriptionScroll">{item.description}</p>
              )}
              <div className="contnetField">
                {item.content && (
                  <ul  className="containerLI">
                    {item.content.map((contentItem, contentIndex) => (
                      <li className="containerUL" key={contentIndex}>
                        {item.emojies && item.emojies[contentIndex] && (
                          <span className="emoji">
                            {item.emojies[contentIndex]}
                          </span>
                        )}
                        {contentItem}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="contentCOntain">
                <p className="boxContent">{item.boxContent}</p>
                <p className="profileText">{item.profile}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="image-box">
          <img
            src={currentImage}
            alt="Current Image"
            style={{ width: "100%", height: "395px", borderRadius: "24px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default ScrollEffect;
