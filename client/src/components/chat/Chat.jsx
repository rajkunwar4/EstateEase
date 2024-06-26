import { useState } from "react"
import "./chat.scss"

const Chat = () => {

    const [chat, setChat]=useState(true)


  return (
    <div className="chat">
        <div className="messages">
            <h1>Messages</h1>
            <div className="message">
                <img src="https://avatars.githubusercontent.com/u/123080253?v=4" alt="" />
                <span>Raj Kunwar</span>
                <p>Lorem ipsum dolor sit amet.....</p>
            </div>
            <div className="message">
                <img src="https://avatars.githubusercontent.com/u/123080253?v=4" alt="" />
                <span>Raj Kunwar</span>
                <p>Lorem ipsum dolor sit amet ....</p>
            </div>
            <div className="message">
                <img src="https://avatars.githubusercontent.com/u/123080253?v=4" alt="" />
                <span>Raj Kunwar</span>
                <p>Lorem ipsum dolor sit amet ......</p>
            </div>
            <div className="message">
                <img src="https://avatars.githubusercontent.com/u/123080253?v=4" alt="" />
                <span>Raj Kunwar</span>
                <p>Lorem ipsum dolor sit amet ......</p>
            </div>
            <div className="message">
                <img src="https://avatars.githubusercontent.com/u/123080253?v=4" alt="" />
                <span>Raj Kunwar</span>
                <p>Lorem ipsum dolor sit amet ....</p>
            </div>
            <div className="message">
                <img src="https://avatars.githubusercontent.com/u/123080253?v=4" alt="" />
                <span>Raj Kunwar</span>
                <p>Lorem ipsum dolor sit amet ......</p>
            </div>
            <div className="message">
                <img src="https://avatars.githubusercontent.com/u/123080253?v=4" alt="" />
                <span>Raj Kunwar</span>
                <p>Lorem ipsum dolor sit amet ......</p>
            </div>

        </div>

        {/* chatbox */}
       {
        chat && ( <div className="chatBox">



            
            <div className="top">
                <div className="user">
                    <img src="https://avatars.githubusercontent.com/u/123080253?v=4" alt="" />
                    Raj Kunwar
                </div>
                <div className="close" onClick={()=>setChat(null)}>X</div>
            </div>
            <div className="center">
                <div className="chatMessage">
                    <p>Lorem ipsum dolor sit</p>
                    <span>1 hour ago</span>
                </div>
                <div className="chatMessage own">
                    <p>Lorem ipsum dolor sit</p>
                    <span>1 hour ago</span>
                </div>
                <div className="chatMessage">
                    <p>Lorem ipsum dolor sit</p>
                    <span>1 hour ago</span>
                </div>
                <div className="chatMessage own">
                    <p>Lorem ipsum dolor sit</p>
                    <span>1 hour ago</span>
                </div>
                <div className="chatMessage">
                    <p>Lorem ipsum dolor sit</p>
                    <span>1 hour ago</span>
                </div>
                <div className="chatMessage own">
                    <p>Lorem ipsum dolor sit</p>
                    <span>1 hour ago</span>
                </div>
                <div className="chatMessage">
                    <p>Lorem ipsum dolor sit</p>
                    <span>1 hour ago</span>
                </div>
                <div className="chatMessage own">
                    <p>Lorem ipsum dolor sit</p>
                    <span>1 hour ago</span>
                </div>
               
              


            </div>
            <div className="bottom">
                <textarea ></textarea>
                <button>Send</button>
            </div>
        </div>)
       }
    </div>
  )
}

export default Chat