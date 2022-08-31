import Button from "../button";
import LeftPart from "./leftPart";
import RightPart from "./rightPart";

export default function Body() {
    return (
        <div className="lg:pt-28 pt-36 lg:px-20 flex lg:w-auto w-screen lg:flex-row flex-col lg:justify-between justify-center items-center font-regular">
            <LeftPart />

            <RightPart />
        </div>
    )
}
