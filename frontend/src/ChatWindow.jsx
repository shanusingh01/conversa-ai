import "./ChatWindow.css";
import Chat from "./Chat.jsx";

function ChatWindow(){
    return(
        <div className="ChatWindow">

            <div className="navbar">
                <span>ConversaAI <i class="fa-solid fa-chevron-down"></i> </span>

                <div className="userIconDiv">
                    <span><i class="fa-solid fa-user"></i></span>
                </div>
                
            </div>

            <Chat/>

            <div className="chatInput">
                
                <div className="userInput">
                    <input placeholder="Ask anything" />
                    <div id="submit"><i class="fa-solid fa-paper-plane"></i></div>
                </div>

                <p className="info">
                    ConversaAI can make mistakes.Check important info See Cookie Prefrences.
                </p>

            </div>
        </div>
    );
}

export default ChatWindow;