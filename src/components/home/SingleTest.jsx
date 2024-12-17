import { useParams } from "react-router"

export default function SingleTest () {
    const params = useParams();
    return (
        <div className="">
            <h2>Single test of profile: {params.profile}</h2>
        </div>
    )
}