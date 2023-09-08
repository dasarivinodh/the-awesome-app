type HelloProps = {
    message: string;
}

function Hello(props: HelloProps) {
    return (
        <div>
            <h4>{props.message}</h4>
            <p>this is a functional component</p>
            <p>Expression:{2 + 3}</p>
            <p>Created at {new Date().toString()}</p>
        </div>
    )
}
export default Hello;