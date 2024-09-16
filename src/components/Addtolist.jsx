import Heading from "./Heading";

export default function Addtolist(props) {
    return (
        <div className="addtolist">
            <div className="container">
                <div style={{display:"flex",justifyContent:"center"}}>
                    <Heading title="ADD NEW LIST" />
                    <button className="closebtn" style={{ fontSize: "1.5rem", background: "none", border: "none", color: "#373a40",marginLeft:"1rem",cursor:"pointer"}} onClick={props.click}><i className="fa-solid fa-xmark"></i></button>
                </div>
                <div>
                    <input type="text" placeholder="New List Title" style={{ marginRight: ".6rem" }} />
                    <button className="addbtn"><i class="fa-solid fa-plus"></i></button>
                </div>
            </div>
        </div>
    )
}