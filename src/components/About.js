import React from "react";

// function Links() {
//   return (
//     <h3>Links</h3>
//     <a href={props.github}></a>
//     <a href={props.linkedin}
//   )
// }

function DisplayBio(props){
  if (props.bio) {
    return (<p>{props.bio}</p>)
  }
}

function Links(props){
  return (
    <div>
    <h3>Links</h3>
    <a href={props.github}>{props.github}</a>
    <a href={props.linkedin}>{props.github}</a>
    </div>
  )
}


function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
            {DisplayBio(props)}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {Links(props)}
    </div>
  );
}

export default About;
