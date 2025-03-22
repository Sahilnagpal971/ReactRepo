
function Child (props){

    return(
        <>
        <p>Name : {props.name}</p>
        <p>Age : {props.age}</p>
        <p>Student: {props.isStudent ? "Yes": "No"}</p>
        </>
    )
}
export default Child