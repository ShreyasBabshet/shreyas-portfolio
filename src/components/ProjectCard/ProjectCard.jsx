import { Col } from "react-bootstrap";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  onReadMore,
  readMore,
}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <p>{description}</p>
          <a href="#project" onClick={onReadMore}>
            Read More
          </a>
        </div>
      </div>
    </Col>
  );
};
