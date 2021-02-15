import React from "react";
import { withAsyncAction } from "../../redux/HOCs";
import { getPicture } from "../../redux/stateReducers/profile";


class Messages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      message: '',
      count: 0,
      image: '',
      addedLike: '',
      removedLike: '',

    }
  }
  addedLike = (messageId) => {
    this.props.addedLike(messageId).then(() => {
      this.fetchMessages();
    })
  }
  removedLike = (likeID) => {
    this.props.removedLike(likeID).then(() => {
      this.fetchMessages();
    })
  }

  componentDidMount() {
    this.fetchMessages();
  }

  fetchMessages = () => {
    this.props.getMessage(this.props.username).then((res) => {
      console.log(res.payload)
      this.setState({
        messages: res.payload.messages,
        count: res.payload.count
      })
    })
  }
  // grabAPicture =()=>{
  //   this.props.getPicture(this.props.username)
  //   .then((res)=>{
  //     console.log(res)
  //   })
  //   .catch((err)=>{
  //     console.log(err)
  //   })


  newMessageHandler = () => {
    let text = this.state.message;
    this.props.createMessage(text).then(() => {
      this.fetchMessages();
      this.setState({
        message: ''
      })
    })
  }
  createNewMessage = () => {
    let tex = this.stat.message;
    this.props.createNewMessage(text).then(() => {
      this.fetchNewMessage();
      this.setState({
        message: "Like"
      })
    })
  }
  deleteMessage = (messageId) => {
    this.props.deleteMessage(messageId).then(() => {
      this.fetchMessages();
    })
  }

  handleChange = (event) => {
    let data = { ...this.state };

    data[event.target.name] = event.target.value;

    this.setState(data);

  }
  
    let display = (<div>No Messages Found</div>)
if (this.state.messages) {
  display = this.state.messages.map((value) => {

    return (
      <li key={value.id}><button onClick={() => this.deleteMessage(value.id)}>delete</button>
        <button onClick={() => this.addedLike(value.id)}>Like </button>
        <button onClick={() => this.removedLike(value.liks[0].id)}>do not like</button>
        {value.text}
      </li>
    )



  })
}

return (
  <div className="Messages">
    <div className="ListMessage">
      {display}
    </div>
    <div className="NewMessage">
      <input name="message" onChange={this.handleChange} value={this.state.message} />
      <button onClick={this.newMessageHandler}> Send Message </button>
      <img src="cinqueterre.jpg" class="rounded" alt="Cinque Terre" width="304" height="236" />
    </div>
  </div>
);
}
}

export default withAsyncAction("profile", "all")(Messages);
