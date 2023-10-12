import React from "react";
import User from "./User";
import UserClass from "./UserClass";


class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}
  render() {
    return (
      <div>
        <h1>About Class Component</h1>
        <h2>This is Namaste React About Page</h2>
        {/* <User name={"Kisan Panda (Functional)"}/> */}
        <UserClass name={"First"} location={"Balangir (Class)"} />
      </div>
    );
  }
}

/*
- Parent Constructor
- Parent Render
   - First Child Constructor
   - First Child Render

   - SecondChild Constructor
   - SecondChild Render

   <>DOM STARTED BATCH UPDATE</>
    - FirstChild Component Did Mount
    - SecondChild Component Did Mount
- Parent Component Did Mount

*/

export default About;
