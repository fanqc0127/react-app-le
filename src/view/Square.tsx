import React from "react";

export interface Props {
    value: string;
    onClick: any;
  }

class Square extends React.Component<Props ,Object> {
  render() {
    const { value, onClick} = this.props;
    return (
      <button
       className="square"
       onClick={() => onClick()}>
        { value }
      </button>
    );
  }
}


export default Square;