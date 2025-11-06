import React from "react";
import "./style.css";
import Title from "../../shared/ui/title";
import Container from "../../shared/ui/container";
import Text13 from "../../shared/ui/text";

function Story() {
  return (
    <Container className="story">
      <Title align="center">OUR STORY</Title>

      <img className="deliver" src="/deliver.png" alt="deliver" />
      <img className="manage" src="/manage.png" alt="manage" />
      <img className="plan" src="/plan.png" alt="plan" />
      <p className="founted">
        Founded in 2011 by John Mathew <br /> Smith, Konstruct has become the{" "}
        <br /> number one construction management firm
      </p>
      <Text13 className="lorem">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed <br /> diam nonummy nibh euismod tincidunt ut laoreet dolore magna <br /> aliquam erat. Lorem ipsum dolor sit amet, consectetuer <br /> adipiscing elit, sed diam nonummy nibh euismod tincidunt ut <br /> laoreet dolore magna aliquam erat.</Text13>
    </Container>
  );
}
export default Story;
