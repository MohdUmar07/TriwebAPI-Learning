

function FirstComponent(props) {


    return <div className="modal">
        <div>
            <h1>{props.owner} Application</h1>
            <p>Its Application - {props.reason}</p>
            <button onClick={props.closeModal}>Close</button>
        </div>

    </div>
}
export default FirstComponent;