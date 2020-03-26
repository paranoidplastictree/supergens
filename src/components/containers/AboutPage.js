import React from 'react';
import {connect} from 'react-redux';
import '../../styles/about-page.scss';

export class AboutPage extends React.Component {

  render() {
    return (
      <div className="about-page">
        <div className="side-content"></div>
        <div className="main-content">
          <h1>About</h1>
          <p>Oh hey, thanks for visiting!</p>
          <p>This is a searchable, filterable rendering of the data that makes up the <a href="https://www.reddit.com/r/MyNoise/comments/3hw95k/supergen_masterlist">mynoise supergen master list</a> on reddit.</p>
          <p>I listen to mynoise almost exclusively on a desktop and I wanted a way to filter the existing supergen master list, so I created this to scratch that itch.</p>
          <p>I do not own/operate <a href="https://mynoise.net" title="mynoise.net">mynoise.net</a> nor am I responsible for the reddit master list, but I am a huge fan of both!</p>
          <p>Please consider contributing monitarily to the mynoise project, it changes lives!</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutPage);
