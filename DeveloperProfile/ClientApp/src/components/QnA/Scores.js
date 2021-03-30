import React, { Component } from 'react';

export class Scores extends Component {
  static displayName = Scores.name;

  render() {

    return (
      <ul class="list-group">
        {
          this.props.scores && this.props.scores.map((ans, index) =>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              {ans.text}
              <span class="badge badge-primary badge-pill">
                {this.roundDown(ans.score, 3)}
              </span>
            </li>
          )}
      </ul>
    )
  }


  /* https://stackoverflow.com/questions/1435975/how-can-i-round-down-a-number-in-javascript */
  roundDown(number, decimals) {
    decimals = decimals || 0;
    return (Math.floor(number * Math.pow(10, decimals)) / Math.pow(10, decimals));
  }
}