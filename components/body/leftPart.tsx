import Button from "../button";

export default function LeftPart() {
    return (
        <div className="lg:text-xl lg:w-auto w-screen ml-0 text-white flex items-center flex-col">
            <span><span className="border-b-2 border-primary">share your awesome photos on</span><span className="text-primary"> media</span></span>

            <span className="lg:mt-8 mt-16"><span className="text-primary" >start</span> <span className="border-b-2 border-primary">now</span></span>

            <div className="lg:mt-8 mt-16 flex gap-x-8">
                <Button>Log in</Button>

                <Button>Sign in</Button>
            </div>
        </div>
    )
}
