import { useEffect, useRef } from "react";
import { ChatType } from "../Types/types";



const MessageInput: React.FC <{
    joinRoomHandler: () => void;
    choosenChat: ChatType;
    isMemberOfRoom:  boolean
    sendMessage: (a: string) => void;
}> = ({joinRoomHandler, choosenChat, isMemberOfRoom, sendMessage}) => {
    const inputRef = useRef<HTMLInputElement>(null);

	const onSubmitForm = (e: any) => {
		e.preventDefault();
		sendMessage(inputRef.current!.value);
		e.target.value.reset();
	};

    useEffect(() =>
    {
        console.log(isMemberOfRoom);
        console.log(`chosenChat = ${choosenChat._id}`)
    },[]);
    return <>

<div className="mx-4">
			{!isMemberOfRoom && (
				<div className="mb-3 flex align-items-center justify-content-between">
					<p className="m-0 font-weight-bold gray-color text-uppercase">
						You are not member in Room {choosenChat.name}
					</p>
					<button
						className="btn main-btn font-weight-bold text-uppercase"
						onClick={() => joinRoomHandler()}
					>
						Join {choosenChat.name}
					</button>
				</div>
			)}
			{isMemberOfRoom && choosenChat._id !== "" && (
				<form className="form-group" onSubmit={onSubmitForm}>
					<input
						type="text"
						className="form-control main-input"
						id="exampleFormControlInput1"
						placeholder="Message @Tmc Trevor"
						ref={inputRef}
					/>
				</form>
			)}
		</div>
    </>
}

export default MessageInput;