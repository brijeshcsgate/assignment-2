import React from "react";
import "./ImageMagnify.css";

const { Component } = React;

class ImageMagnify extends Component {
  state = {
    backgroundImage: `url(${this.props.src})`,
    backgroundPosition: "0% 0%",
  };

  handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 50;
    this.setState({
      backgroundImage: `url(${this.props.src})`,
      backgroundPosition: `${x}% ${y}%`,
    });
  };
  render = () => (
    <figure
      className='figure'
      onMouseMove={this.handleMouseMove}
      style={this.state}>
      <img
        className='productPageSection-main-imageLarge border border-2 border-solid w-full h-[400px] rounded-[4px]'
        src={this.props.src}
        alt='sdvfsd'
      />
    </figure>
  );
}

export default ImageMagnify;
