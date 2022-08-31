import Button from "../button";

export default function LeftPart() {
    return (
        <div className="lg:text-xl lg:ml-24 lg:w-auto w-screen ml-0 text-white flex items-center flex-col">
            <span>share your awesome photos on <span className="text-primary border-b-2">media</span></span>

            <span className="lg:mt-28 mt-36">start <span className="text-primary border-b-2">now</span></span>

            <div className="lg:mt-28 mt-36 flex gap-x-8">
                <Button>Log in</Button>

                <Button>Sign in</Button>
            </div>
        </div>
    )
}
