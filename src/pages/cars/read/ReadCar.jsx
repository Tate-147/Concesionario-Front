import { useParams } from "react-router-dom"

const ReadCar = () => {
    const {idcar} = useParams()
    return(
        <div>
            <h1>ReadCar{idcar}</h1>
        </div>
    )
}
export default ReadCar