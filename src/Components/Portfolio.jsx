/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "CarBot: AI-Powered Vehicle Diagnostic Assistant",
    description:
      "An innovative AI-driven application designed to assist with vehicle diagnostics. It combines Computer Vision and Natural Language Processing (NLP) technologies to interpret car dashboard warning lights and provide diagnoses and potential solutions through user-friendly chats and image analysis.",
    url: "https://github.com/Ajisco/CarBot",
  },
  {
    title: "Music Therapy for Depression: AI-Driven Solution",
    description:
      "A cutting-edge AI application designed to diagnose depression and recommend music therapy solutions. The app leverages machine learning algorithms to classify the severity of depression based on user input and suggests therapeutic music.",
    url: "https://github.com/Ajisco/Sami-Depression",
  },
  {
    title: "AI-Driven Financial Advisory App for SMEs",
    description:
      "A sophisticated Flask application, leveraging OpenAI's GPT-3.5 Turbo, to offer bespoke financial and business advice, primarily for SMEs and loan-related queries.",
    url: "https://github.com/Ajisco/ai-finance",
  },
  {
    title: "Advert Click: AI-Powered Ad Click Prediction",
    description:
      "An advanced AI solution aimed at predicting user interactions with online advertisements. It utilizes machine learning algorithms to predict whether a user is likely to click on an ad, thereby enhancing advertising strategies and optimizing ad placements.",
    url: "https://github.com/Ajisco/Ad-Click",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
