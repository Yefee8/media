import Button from "../button";
import LeftPart from "./leftPart";
import RightPart from "./rightPart";

export default function Body() {
    return (
        <div className="lg:mt-28 mt-36 flex lg:flex-row flex-col lg:justify-between justify-center items-start font-regular">
            <LeftPart />

            <RightPart />
        </div>
    )
}
