import "./Sidebar.css";


function Sidebar(){
    return (
        <section>

            {/* new chat button */}
            <button>
                <img src="src/assests/blacklogo.png" alt="AI logo"></img>
                <i className="fa-solid fa-pen-to-square"></i>
            </button>

            {/* history */}
            <ul className="history">
                <li>history1</li>
                <li>history2</li>
                <li>history3</li>
            </ul>


            {/* sign */}
            <div className="sign">
                <p>By ShanuSingh &hearts;</p>
            </div>

        </section>
    );
}

export default Sidebar;