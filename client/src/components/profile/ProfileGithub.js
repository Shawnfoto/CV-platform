import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from "lodash";

import Spinner from "../common/Spinner";

class ProfileGithub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientId: "ed563f430adbe8bf56f8",
      clientSecret: "d2c15097071388a450c8ca9a473efe92f9bb430a",
      count: 5,
      sort: "created: asc",
      repos: [],
      repoEmpty: false
    };
  }

  componentDidMount() {
    const { username } = this.props;
    const { count, sort, clientId, clientSecret } = this.state;

    // try {
    //   const res = await fetch(
    //     `https://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`
    //   );
    //   const data = await res.json();
    //   this.setState({ repos: data });
    // } catch (error) {
    //   console.log(error.response.data);
    // }

    fetch(
      `https://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`
    )
      .then(res => res.json())
      .then(data => {
        if (this.refs.myRef) {
          this.setState({ repos: data });
          // if(data.message) {

          // }

          if (_.isEmpty(data)) {
            this.setState({ repoEmpty: !this.state.repoEmpty });
          }
        }
      })
      .catch(err => console.log(err));
  }

  repoItems() {
    const { repos } = this.state;
    if (this.state.repoEmpty) {
      return <p>Your github repo is empty</p>;
    }
    if (_.isEmpty(repos)) {
      return <Spinner />;
    } else {
      if (repos.message === "Not Found") {
        return <p>Your github repo is Not Found</p>;
      }

      return repos.map(repo => (
        <div key={repo.id} className="card card-body mb-2">
          <div className="row">
            <div className="col-md-6">
              <h4>
                <a href={repo.html_url} className="text-info" target="_blank">
                  {repo.name}
                </a>
              </h4>
              <p>{repo.description}</p>
            </div>
            <div className="col-md-6">
              <span className="badge badge-info mr-1">
                Stars: {repo.stargazers_count}
              </span>
              <span className="badge badge-secondary mr-1">
                Watchers: {repo.watchers_count}
              </span>
              <span className="badge badge-success">
                Forks: {repo.forks_count}
              </span>
            </div>
          </div>
        </div>
      ));
    }
  }

  render() {
    return (
      <div ref="myRef">
        <hr />
        <h3 className="mb-4">Latest Github Repos</h3>
        {this.repoItems()}
      </div>
    );
  }
}

ProfileGithub.propTypes = {
  username: PropTypes.string.isRequired
};

export default ProfileGithub;
