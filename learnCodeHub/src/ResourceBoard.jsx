import ResourceCard from './ResourceCard'; 
import './ResourceBoard.css';
function ResourceBoard() {
  const resources = [
    {
      title: "JavaScript Basics",
      description: "Learn the fundamentals of JavaScript, the language of the web.",
      link: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics",
    },
    {
      title: "React Concepts",
      description: "A comprehensive guide to building applications with React.",
      link: "https://legacy.reactjs.org/docs/hello-world.html",
    },
    {
        title: "React Tutorial",
        description: "A step-by-step tutorial to learn React from scratch.",
        link: "https://reactjs.org/tutorial/tutorial.html",
    },
    {
        title: "HTML Basics",
        description: "Learn the fundamentals of HTML, the markup language of the web.",
        link: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics",
    },
    {
        title: "CSS Basics",
        description: "Learn the fundamentals of CSS, the styling language of the web.",
        link: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics",
    },
    {
        title: "Coding Practice",
        description: "A website to practice coding exercises and improve your skills.",
        link: "https://www.codewars.com/"
    },
    {
        title: "Python Basics",
        description: "Learn the fundamentals of Python, a versatile and powerful programming language.",
        link: "https://www.learnpython.org/"
    },
    {
        title: "Java Basics",
        description: "Learn the fundamentals of Java, a popular programming language for building enterprise-level applications.",
        link: "https://www.learnjavaonline.org/"
    },
    {
        title: "Coding Game",
        description: "Play interactive coding games to enhance your programming skills.",
        link: "https://www.codingame.com/"
    },
    {
        title: "CSS Grid",
        description: "Learn how to create responsive grid layouts with CSS Grid.",
        link: "https://css-tricks.com/snippets/css/complete-guide-grid/"
    }
  ];

  return (
    <div className="resource-board">
      {resources.map((resource, index) => (
        <ResourceCard
          key={index}
          title={resource.title}
          description={resource.description}
          link={resource.link}
        />
      ))}
    </div>
  );
}

export default ResourceBoard;
