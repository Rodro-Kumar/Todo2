// import React from "react";
// import { useEffect, useState } from "react";
// import {
//   getDatabase,
//   ref,
//   set,
//   push,
//   onValue,
//   remove,
// } from "firebase/database";
// import Modal from "react-modal";

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//   },
// };

// const Todo = () => {
//   const db = getDatabase();

//   const [modalIsOpen, setIsOpen] = React.useState(false);

//   function openModal() {
//     setIsOpen(true);
//   }

//   function closeModal() {
//     setIsOpen(false);
//   }

//   //   all state

//   const [inputData, setinputData] = useState("");
//   const [todoallDta, settodoallDta] = useState([]);
//   const [editItem, seteditItem] = useState("");
//   const [modalValue, setmodalValue] = useState("");
//   const [realtime, setrealtime] = useState(false);

//   //   Get data from database
//   useEffect(() => {
//     const todoRef = ref(db, "todo2/");
//     onValue(todoRef, (snapshot) => {
//       const allDataArr = [];
//       snapshot.forEach((item) => {
//         allDataArr.push({
//           todoId: item.key,
//           todoItem: item.val(),
//         });
//       });

//       settodoallDta(allDataArr);
//     });
//   }, [realtime]);

//   //   HandleAdd

//   const HandleAdd = () => {
//     if (inputData !== "") {
//       const dbInfo = ref(db, "todo2/");
//       set(push(dbInfo), {
//         todoItem: inputData,
//       })
//         .then(() => {
//           setrealtime(!realtime);
//           setinputData("");
//           console.log("upload succes");
//         })
//         .catch(() => {
//           console.log("Error");
//         });
//     } else {
//       console.log("input faka");
//     }
//   };

//   // Handle Edit

//   const HandleEdit = (edit) => {
//     seteditItem(edit);
//     setIsOpen(true);
//   };

//   // Handle update

//   const HandleUpdate = (e) => {
//     e.preventDefault();
//     set(ref(db, "todo2/" + editItem), {
//       todoItem: modalValue,
//     })
//       .then(() => {
//         setIsOpen(false);
//         console.log("update");
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   // Handle Delete

//   const HandleDelete = (dletedID) => {
//     remove(ref(db, "todo2/" + dletedID))
//       .then(() => {
//         console.log("Delted");
//       })
//       .catch((errr) => {
//         console.log(errr);
//       });
//   };

//   return (
//     <>
//       <div className="flex justify-center items-center h-[100vh]">
//         <div className="flex-col">
//           <input
//             type="text"
//             className="bg-black text-white outline-none rounded-tl-md rounded-bl-md"
//             onChange={(e) => setinputData(e.target.value)}
//           />

//           <button
//             className="bg-red-900 text-white rounded-tr-md rounded-br-md px-6"
//             onClick={HandleAdd}
//           >
//             Add
//           </button>
//           {todoallDta.map((item) => (
//             <div className="flex-col" key={item.todoId}>
//               <p className="pb-5 pt-4 text-white">{item.todoItem.todoItem}</p>
//               <div className="flex justify-between">
//                 <button
//                   className="bg-yellow-500"
//                   onClick={() => HandleEdit(item.todoId)}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   className="bg-red-500"
//                   onClick={() => HandleDelete(item.todoId)}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div>
//         <Modal
//           isOpen={modalIsOpen}
//           onRequestClose={closeModal}
//           style={customStyles}
//           contentLabel="Example Modal"
//         >
//           <button onClick={closeModal}>close</button>

//           <form>
//             <input
//               className="bg-black text-white"
//               onChange={(e) => setmodalValue(e.target.value)}
//             />
//             <button onClick={HandleUpdate}>update</button>
//           </form>
//         </Modal>
//       </div>
//     </>
//   );
// };

// export default Todo;
