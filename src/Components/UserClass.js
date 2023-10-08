import React from "react";
// Class Based Component
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // Local State Variable
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "",
      },
    };
    console.log(this.props.name + "Child Constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/kisanpanda3");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("Component will Unmount");
  }

  render() {
    console.log(this.props.name + "Child Render");
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img className="avatar" src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: kisanpanda3@gmail.com</h4>
      </div>
    );
  }
}
export default UserClass;

/*
 * --- MOUNTING LIFE CYCLE ---
 * Constructor (dummy)
 * Render(dummy)
      <HTML Dummy>
 * Component DidMount
      <API Call>
      <this.setState>

 * --- UPDATE ---
      Render (<Api Data>)
      HTML new update data
  
      ComponentDidUpdate
 
*/
