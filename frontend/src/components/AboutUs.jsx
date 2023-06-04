import React from "react";
import "../App.css";
import Arrow from "../icons/projdesc.svg";
import Book from "../icons/book.svg";
const AboutUs = () => {
  return (
    <div className="AboutUs">
      <div className="projdesc">
        <div className="projtitle">
          <p className="project">PROJECT</p>
          <p className="description">DESCRIPTION</p>
          <img src={Arrow} alt="" />
        </div>
        <div className="container2">
          <img src={Book} alt="" className="book" />
          <p className="centered">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id in
            labore non necessitatibus nostrum, facilis, ipsam, quis placeat
            doloremque nisi minima eaque quas esse et veritatis suscipit
            consequatur vitae. Nam assumenda optio, saepe id at rerum.
            Aspernatur at voluptatibus omnis obcaecati? Consequatur, deleniti.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
            expedita magni amet saepe sint omnis dolorum aut at rem eos,
            doloribus libero. Veritatis doloribus tempore in ratione quaerat ad
            magnam architecto, pariatur laboriosam dolores nobis saepe minima,
            sed aperiam accusamus eligendi dicta repellat ullam voluptatibus!
            Error quos numquam consectetur fuga quas dolor possimus modi
            reprehenderit, sequi corporis eos ad facilis esse ratione, velit
            autem consequatur, rem expedita dolore iure! Modi, deserunt velit
            minima, repellendus dolorum corporis vel perferendis ipsum dolores
            asperiores numquam? Ut labore temporibus qui placeat vitae neque
            dolor, ullam ab praesentium fugiat? Unde enim quos libero tenetur
            optio!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
