// import React, {useRef} from 'react';
import React, { useEffect, useRef, useState } from 'react';
import { IoCloseCircleSharp } from "react-icons/io5";
import { Privacy } from './Types/types';
const formImage = require('../images/form.gif');

const logo = require('../images/ponglogo.png');

const AddChannel: React.FC<{

  createRoomHandler: (roomName: string, private1: Privacy, password: string | null) => void;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setState: React.Dispatch<React.SetStateAction<string>>;
  

}> = ({ createRoomHandler, setShowModal, setState }) => {


  const [privacy, setPrivacy] = useState("Public");
  const roomNameRef = useRef<HTMLInputElement>(null);
  const privateRef = useRef<HTMLSelectElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const closeModal = () => {

    setShowModal(false);

  };

  const formSubmit = (e: any) => {
	let p : Privacy = (privacy === "Public") ? Privacy.PUBLIC : (privacy === "Protected") ? Privacy.PROTECTED : Privacy.PRIVATE;

    e.preventDefault();
    let pass: string | null;
    if (passwordRef.current)
      pass = passwordRef.current!.value;
    else
      pass = null;
    createRoomHandler(roomNameRef.current!.value, p, pass);
    closeModal();
  };

  const showdiv = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPrivacy(event.target.value);
  }

  return (

    <>

      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        onClick={() => { closeModal(); }}
      >
        <div className="flex items-center" onClick={e => { e.stopPropagation(); }} >
          <div className="grow invisible lg:visible">
            <img className="lg:visible w-0 lg:w-[35rem] lg:h-[46rem] lg:rounded-l-lg" src={formImage}
              alt="img" />
          </div>
          <div className="w-auto my-6 mx-auto h-[46rem] max-w-3xl" >
            {/*content*/}
            <div className="border-0 rounded-lg lg:rounded-r-lg  h-[46rem] shadow-lg  flex flex-col w-full bg-white outline-none focus:outline-none" onClick={e => { e.stopPropagation(); }}>
              {/*header*/}
              <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <button
                  className="p-1 ml-auto bg-transparant  text-black  float-right text-3xl leading-none font-semibold"
                  onClick={closeModal}
                >
                  <IoCloseCircleSharp className="text-emerald-400" />
                </button>
                <img className="mx-auto h-40 w-auto" src={logo} alt="Workflow" />
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create New Channel</h2>
              </div>

              <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-6 shadow  rounded lg:rounded-r-lg sm:px-10 h-full">
                  <form onSubmit={formSubmit} className="mb-0 space-y-6" action="addchannel" method="POST">
                    <div>
                      <label htmlFor="text" className="block text-sm font-medium text-gray-700">Channel Name</label>
                      <div className="mt-1">
                        <input ref={roomNameRef} id="channelName" name="channelName" type="text" required className="" />
                      </div>
                    </div>


                    <div>
                      <label htmlFor="company-size" className="block text-sm font-medium text-gray-700">Channel Privacy</label>
                      <div className="mt-1">
                        <select name="company-size" id="company-size" className="" onChange={showdiv}>
                          <option value="not selected">Please select</option>
                          <option value="Public">Public</option>
                          <option value="Private">Private</option>
                          <option value="Protected">Protected</option>
                        </select>
                      </div>
                    </div>
                    {
                      privacy === "Protected" || privacy === "Private" ?
                        <div>
                          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                          <div className="mt-1">
                            <input ref={passwordRef} id="password" name="password" type="password" required className="" />
                          </div>
                        </div> : null
                    }

                    <div className="mt-1">
                      <label htmlFor="img">Select image:</label>
                      <input type="file" id="img" name="img" accept="image/*" />
                    </div>

                    <div>
                      <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-400 hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500">Create</button>
                    </div>
                    <div>
                      OR <a onClick={(e)=> { e.preventDefault(); setState("JOIN")}} className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'> Join Channel</a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )

}
const AddChannel2: React.FC<{

  // createRoomHandler: (roomName: string, private1: string, password: string | null) => void;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setState: React.Dispatch<React.SetStateAction<string>>;
  

}> = ({  setShowModal, setState }) => {


  const [privacy, setPrivacy] = useState("Public");
  const roomNameRef = useRef<HTMLInputElement>(null);
  const privateRef = useRef<HTMLSelectElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const closeModal = () => {

    setShowModal(false);

  };

  const formSubmit = (e: any) => {


    e.preventDefault();
    let pass: string | null;
    if (passwordRef.current)
      pass = passwordRef.current!.value;
    else
      pass = null;
   // createRoomHandler(roomNameRef.current!.value, privacy, pass);
    closeModal();
  };

  const showdiv = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPrivacy(event.target.value);
  }

  return (

    <>

      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        onClick={() => { closeModal(); }}
      >
        <div className="flex items-center" onClick={e => { e.stopPropagation(); }} >
          <div className="grow invisible lg:visible">
            <img className="lg:visible w-0 lg:w-[35rem] lg:h-[46rem] lg:rounded-l-lg" src={formImage}
              alt="img" />
          </div>
          <div className="w-auto my-6 mx-auto h-[46rem] max-w-3xl" >
            {/*content*/}
            <div className="border-0 rounded-lg lg:rounded-r-lg  h-[46rem] shadow-lg  flex flex-col w-full bg-white outline-none focus:outline-none" onClick={e => { e.stopPropagation(); }}>
              {/*header*/}
              <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <button
                  className="p-1 ml-auto bg-transparant  text-black  float-right text-3xl leading-none font-semibold"
                  onClick={closeModal}
                >
                  <IoCloseCircleSharp className="text-emerald-400" />
                </button>
                <img className="mx-auto h-40 w-auto" src={logo} alt="Workflow" />
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Join Channel</h2>
              </div>

              <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-6 shadow  rounded lg:rounded-r-lg sm:px-10 h-full">
                  <form onSubmit={formSubmit} className="mb-0 space-y-6" action="addchannel" method="POST">
                    <div>
                      <label htmlFor="text" className="block text-sm font-medium text-gray-700">Channel Name</label>
                      <div className="mt-1">
                        <input ref={roomNameRef} id="channelName" name="channelName" type="text" required className="" />
                      </div>
                    </div>


                    <div>
                      <label htmlFor="company-size" className="block text-sm font-medium text-gray-700">Channel Privacy</label>
                      <div className="mt-1">
                        <select name="company-size" id="company-size" className="" onChange={showdiv}>
                          <option value="not selected">Please select</option>
                          <option value="Public">Public</option>
                          <option value="Private">Private</option>
                          <option value="Protected">Protected</option>
                        </select>
                      </div>
                    </div>
                    {
                      privacy === "Protected" || privacy === "Private" ?
                        <div>
                          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                          <div className="mt-1">
                            <input ref={passwordRef} id="password" name="password" type="password" required className="" />
                          </div>
                        </div> : null
                    }


                    <div>
                      <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-400 hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500">Join</button>
                    </div>
                    <div>
                      OR <a onClick={(e)=> { e.preventDefault(); setState("CREATE")}} className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'> Create Your Own Channel</a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )

}


export const AddChannel1: React.FC<{

  createRoomHandler: (roomName: string, private1: Privacy, password: string | null) => void;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;

}> = ({ createRoomHandler, setShowModal }) => {


  const [privacy, setPrivacy] = useState("Public");
  const roomNameRef = useRef<HTMLInputElement>(null);
  const privateRef = useRef<HTMLSelectElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [state, setState] = useState("");

  const closeModal = () => {
    setState("");
    setShowModal(false);

  };

//   const reload=()=>window.location.reload();
//   useEffect(() => {
//     console.log(`state = ${state}`)
//   }, [])
//   const formSubmit = (e: any) => {


//     e.preventDefault();
//     let pass: string | null;
//     if (passwordRef.current)
//       pass = passwordRef.current!.value;
//     else
//       pass = null;
//     createRoomHandler(roomNameRef.current!.value, privacy, pass);
//     setState("");
//     closeModal();
//   };
//   const formSubmit1 = (e: any) => {


//     e.preventDefault();
//     let pass: string | null;
//     if (passwordRef.current)
//       pass = passwordRef.current!.value;
//     else
//       pass = null;
//     createRoomHandler(roomNameRef.current!.value, privacy, pass);
//     setState("");
//     closeModal();
//   };

  const showdiv = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPrivacy(event.target.value);
  }

  return (

    <>

      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        onClick={() => { closeModal(); }}
      >
        <div className="flex items-center" onClick={e => { e.stopPropagation(); }} >
          <div className="grow invisible lg:visible">
            <img className="lg:visible w-0 lg:w-[35rem] lg:h-[46rem] lg:rounded-l-lg" src={formImage}
              alt="img" />
          </div>
          <div className="w-auto my-6 mx-auto h-[46rem] max-w-3xl" >
            {/*content*/}
            <div className="border-0 rounded-lg lg:rounded-r-lg  h-[46rem] shadow-lg  flex flex-col w-full bg-white outline-none focus:outline-none" onClick={e => { e.stopPropagation(); }}>
              {/*header*/}
              <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <button
                  className="p-1 ml-auto bg-transparant  text-black  float-right text-3xl leading-none font-semibold"
                  onClick={closeModal}
                >
                  <IoCloseCircleSharp className="text-emerald-400" />
                </button>
                <img className="mx-auto h-40 w-auto" src={logo} alt="Workflow" />
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create Or <br/>Join New Channel</h2>
              </div>

              <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-6 shadow  gap-5 flex flex-col rounded lg:rounded-r-lg sm:px-10 h-full">
                  {
                    state === "CREATE" && <AddChannel setState={setState} createRoomHandler={createRoomHandler} setShowModal={setShowModal} />
                  }
                  {
                    state === "JOIN" && <AddChannel2 setState={setState} setShowModal={setShowModal}/>
                  }

                  {
                  state === "" && <> <div className='pb-1'>
                    <button onClick={() => {setState("CREATE");  console.log(`state in create = ${state}`); }} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-400 hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500">Create</button>
                  </div>
                  <div>
                    <button onClick={() => {setState("JOIN");  console.log(`state in join = ${state}`);  }}className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-400 hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500">Join</button>
                  </div> </>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )

}



export default AddChannel