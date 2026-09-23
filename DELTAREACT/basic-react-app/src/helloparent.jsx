import Hellomsg from "./hellomsg";

export default function Helloparent() {
    return (
        <>
            <Hellomsg msg="hello khatri" color="green" />
            <Hellomsg msg="welcome back" color="red" />
            <Hellomsg msg="good morning" color="orange" />
        </>
    );
}