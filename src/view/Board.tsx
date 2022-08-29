import React from "react";
import Square from "./Square";

export interface Props {
    squares: Array<string>;
    onClick: any;
  }

  class Board extends React.Component<Props ,Object> {
    renderSquare(i:number) {
      const {squares,onClick} = this.props;
      return (
          <Square
            value={squares[i]}
            onClick={() => onClick(i)} />);
    }
  
    render() {

      return (
        <div>
          {/* <div className="status">{status}</div> */}
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  


export default Board;