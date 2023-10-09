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
      <div className="h-80 w-52 border-black shadow-2xl m-auto p-4 ">
        <img className="rounded-xl w-44 mx-auto  border" src={avatar_url} />
        <h2 className="text-slate-700 dark:text-slate-600 font-semibold">Name: {name}</h2>
        <h3 className="text-slate-700 dark:text-slate-600 font-semibold">Location: {location}</h3>
        <h4 className="text-slate-700 dark:text-slate-600 font-semibold">Contact: kisanpanda3@gmail.com</h4>
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
