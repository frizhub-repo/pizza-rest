// //home data
// const images = [
//   "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//   "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
//   "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//   "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//   "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//   "https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//   "https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//   "https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//   "https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//   "https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//   "https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//   "https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
// ];
// <div className="w-full ">
//   <Carousel
//     additionalTransfrom={0}
//     arrows
//     autoPlaySpeed={3000}
//     centerMode={false}
//     className=""
//     containerClass="carousel-container"
//     dotListClass=""
//     draggable
//     focusOnSelect={false}
//     infinite
//     itemClass="carousel-item-padding-30-px"
//     keyBoardControl
//     minimumTouchDrag={80}
//     renderButtonGroupOutside={false}
//     renderDotsOutside={false}
//     responsive={{
//       desktop: {
//         breakpoint: {
//           max: 3000,
//           min: 1024,
//         },
//         items: 3,
//         partialVisibilityGutter: 40,
//       },
//       mobile: {
//         breakpoint: {
//           max: 464,
//           min: 0,
//         },
//         items: 1,
//         partialVisibilityGutter: 30,
//       },
//       tablet: {
//         breakpoint: {
//           max: 1024,
//           min: 464,
//         },
//         items: 1,
//         partialVisibilityGutter: 30,
//       },
//     }}
//     showDots={false}
//     sliderClass=""
//     slidesToSlide={1}
//     swipeable
//   >
//     {menus?.map((menu, index) => (
//       <Card
//         text={
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, \n" +
//           "pulvinar facilisis justo mollis"
//         }
//         title={menu?.title}
//         image={
//           "https://images.unsplash.com/photo-1542834369-f10ebf06d3e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80"
//         }
//         index={index}
//         setKey={setKey}
//         icon={food}
//       />
//     ))}
//   </Carousel>
// </div>;
// <div
//   className="w-full mt-8 flex px-44"
//   style={{ display: "flex", flexWrap: "wrap" }}
// >
//   {loading ? (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "space-around",
//         width: "100%",
//       }}
//     >
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//         }}
//       >
//         {[...Array(3).keys()].map((i) => (
//           <Skeleton
//             variant="rect"
//             height={200}
//             width={200}
//             style={{ marginBottom: "20px" }}
//           />
//         ))}
//       </div>
//       <div style={{ display: "flex", flexDirection: "column" }}>
//         {[...Array(3).keys()].map((i) => (
//           <Skeleton
//             variant="rect"
//             height={200}
//             width={200}
//             style={{ marginBottom: "20px" }}
//           />
//         ))}
//       </div>
//     </div>
//   ) : menus?.length ? (
//     menus[key]?.items?.map((product) => (
//       <div
//         style={{
//           width: "50%",
//           height: "-webkit-fill-available",
//         }}
//       >
//         <h1 className="text-4xl font-weight-bold font-italic text-yellow-400 text-left mb-4">
//           {product?.category?.name}
//         </h1>
//         {product?.products?.length
//           ? product?.products?.map((item) => (
//               <p className="text-lg text-left mb-8 font-italic">
//                 {item.title}{" "}
//                 <label
//                   style={{
//                     marginLeft: "10px",
//                   }}
//                 >
//                   {item?.sizes?.[0]?.price} {item.currency}
//                 </label>
//               </p>
//             ))
//           : null}
//       </div>
//     ))
//   ) : null}
// </div>;

// {
//   /* </Container> */
// }

// ///delivery data
// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3,
//     paritialVisibilityGutter: 60,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2,
//     paritialVisibilityGutter: 50,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//     paritialVisibilityGutter: 30,
//   },
// };
// const images = [
//   {
//     image:
//       "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//     cat: "Appetizers",
//     key: "0",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
//     cat: "Ravioli",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//     cat: "Soups",
//     key: "1",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//     cat: "Rice",
//     key: "2",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//     cat: "pasta",
//     key: "3",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//     cat: "Boats",
//     key: "4",
//   },
// ];

// const foods = [
//   {
//     name: "Shrimp Roll",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
//     cat: ["Apperitizers"],
//     price: 25,
//     image:
//       "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
//   },
//   {
//     name: "Sake dom poke",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
//     cat: ["Apperitizers", "Rice", "Salads", "Pinned"],
//     price: 4,
//     image:
//       "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
//   },
//   {
//     name: "Ebi shu mai",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
//     cat: ["Apperitizers", "Rice", "Soups"],
//     price: 30,
//     image:
//       "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
//   },
//   {
//     name: "Nigiri 1",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
//     cat: ["Apperitizers", "Nigiri", "Soups"],
//     price: 30,
//     image:
//       "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
//   },
//   {
//     name: "Shrimp Roll",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
//     cat: ["Apperitizers"],
//     price: 25,
//     image:
//       "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
//   },
//   {
//     name: "Sake dom poke",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
//     cat: ["Apperitizers", "Rice", "Salads"],
//     price: 4,
//     image:
//       "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
//   },
//   {
//     name: "Ebi shu mai",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
//     cat: ["Apperitizers", "Rice", "Soups", "Pinned"],
//     price: 30,
//     image:
//       "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
//   },
//   {
//     name: "Nigiri 1",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
//     cat: ["Apperitizers", "Nigiri", "Soups"],
//     price: 30,
//     image:
//       "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
//   },
//   {
//     name: "Shrimp Roll",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
//     cat: ["Apperitizers"],
//     price: 25,
//     image:
//       "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
//   },
//   {
//     name: "Sake dom poke",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
//     cat: ["Apperitizers", "Rice", "Salads"],
//     price: 4,
//     image:
//       "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
//   },
//   {
//     name: "Ebi shu mai",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
//     cat: ["Apperitizers", "Rice", "Soups"],
//     price: 30,
//     image:
//       "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
//   },
//   {
//     name: "Nigiri 1",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
//     cat: ["Apperitizers", "Nigiri", "Soups"],
//     price: 30,
//     image:
//       "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
//   },
//   {
//     name: "Shrimp Roll",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
//     cat: ["Apperitizers"],
//     price: 25,
//     image:
//       "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
//   },
//   {
//     name: "Sake dom poke",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
//     cat: ["Apperitizers", "Rice", "Salads", "Pinned"],
//     price: 4,
//     image:
//       "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
//   },
//   {
//     name: "Ebi shu mai",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
//     cat: ["Apperitizers", "Rice", "Soups"],
//     price: 30,
//     image:
//       "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
//   },
//   {
//     name: "Nigiri 1",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
//     cat: ["Apperitizers", "Nigiri", "Soups"],
//     price: 30,
//     image:
//       "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
//   },
//   {
//     name: "Shrimp Roll",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
//     cat: ["Apperitizers", "Pinned"],
//     price: 25,
//     image:
//       "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
//   },
//   {
//     name: "Sake dom poke",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
//     cat: ["Apperitizers", "Rice", "Salads"],
//     price: 4,
//     image:
//       "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
//   },
//   {
//     name: "Ebi shu mai",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
//     cat: ["Apperitizers", "Rice", "Soups"],
//     price: 30,
//     image:
//       "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
//   },
//   {
//     name: "Nigiri 1",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
//     cat: ["Apperitizers", "Nigiri", "Soups"],
//     price: 30,
//     image:
//       "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
//   },
//   {
//     name: "Shrimp Roll",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
//     cat: ["Apperitizers", "Pinned"],
//     price: 25,
//     image:
//       "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
//   },
//   {
//     name: "Sake dom poke",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
//     cat: ["Apperitizers", "Rice", "Salads"],
//     price: 4,
//     image:
//       "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
//   },
//   {
//     name: "Ebi shu mai",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
//     cat: ["Apperitizers", "Rice", "Soups"],
//     price: 30,
//     image:
//       "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
//   },
//   {
//     name: "Nigiri 1",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
//     cat: ["Apperitizers", "Nigiri", "Soups"],
//     price: 30,
//     image:
//       "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
//   },
// ];

// //reservation table
// <Modal
// aria-labelledby="transition-modal-title"
// aria-describedby="transition-modal-description"
// className={classes.modal}
// open={open}
// onClose={handleClosee}
// closeAfterTransition
// BackdropComponent={Backdrop}
// BackdropProps={{
//   timeout: 500,
// }}
// >
// <Card style={{ overflow: "auto", maxHeight: "90vh" }}>
//   <Container
//     style={{
//       padding: "100px",
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "center",
//     }}
//   >
//     <strong style={{ fontSize: "26px", fontWeight: "600" }}>
//       Table Reservation
//     </strong>
//     <form
//       onSubmit={handleSubmit(tableReserve)}
//       style={{ width: "100%", marginTop: "20px" }}
//     >
//       <div
//         className="  text-left flew-wrap w-full "
//         style={{ marginBottom: "20px" }}
//       >
//         <label
//           htmlFor="grid-state"
//           className="text-sm text-left text-gray-500 font-weight-bolder"
//         >
//           Number of people
//         </label>

//         <div
//           className="text-left mr-2 flex flex-wrap "
//           style={{ justifyContent: "space-between", width: "500px" }}
//         >
//           {[...Array(5).keys()].map((i) => (
//             <button
//               className={`text-gray-500 font-weight-light text-xs mr-1  py-3 w-1/6  border border-gray-500 rounded-pill `}
//               onClick={(e) => {
//                 e.preventDefault();
//                 setNumber(i);
//               }}
//               style={{
//                 backgroundColor: number === i && "rgba(16, 185, 129,1)",
//                 color: number === i ? "#fff" : "#000",
//               }}
//             >
//               {i + 1}
//             </button>
//           ))}
//         </div>
//       </div>
//       <div
//         className="  text-left flew-wrap w-full "
//         style={{ marginBottom: "20px" }}
//       >
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             marginBottom: "20px",
//           }}
//         >
//           <label
//             htmlFor="grid-state"
//             className="text-sm text-left text-gray-500 font-weight-bolder"
//           >
//             Date
//           </label>
//           <div>
//             <label
//               htmlFor="grid-state"
//               className="text-sm text-left text-gray-500 font-weight-bolder"
//               style={{ marginRight: "10px" }}
//             >
//               Other Date
//             </label>
//             {/* <input
//                             type="datetime-local"
//                             defaultValue={Date.now()}
//                             onChange={(e) => setTime(e.target.value)}
//                         /> */}
//             {showDate ? (
//               <DatePicker
//                 selected={startDate}
//                 onChange={(date) => {
//                   setDate(dayjs(date).format("YYYY-MM-DD"));
//                   setStartDate(date);
//                 }}
//               />
//             ) : (
//               <CalendarTodayIcon onClick={() => setShowDate(true)} />
//             )}
//           </div>
//         </div>

//         <div className="text-left mr-2 flex flex-wrap justify-content-between ">
//           <EventButton
//             data={date}
//             setData={setDate}
//             localState={dayjs().format("YYYY-MM-DD")}
//             text="Today"
//             style={{ width: "160px" }}
//           />
//           <EventButton
//             data={date}
//             setData={setDate}
//             localState={dayjs().add(1, "day").format("YYYY-MM-DD")}
//             text="Tomorrow"
//             style={{ width: "160px" }}
//           />
//           <EventButton
//             data={date}
//             setData={setDate}
//             localState={dayjs().add(2, "day").format("YYYY-MM-DD")}
//             text={dayjs().add(2, "day").format("MMMM D, YYYY")}
//             style={{ width: "160px" }}
//           />
//         </div>
//       </div>
//       <div
//         className="  text-left flew-wrap w-full "
//         style={{ marginBottom: "20px" }}
//       >
//         <label
//           htmlFor="grid-state"
//           className="text-sm text-left text-gray-500 font-weight-bolder"
//         >
//           Services
//         </label>

//         <div className="text-left mr-2 flex flex-wrap justify-content-between ">
//           <EventButton
//             data={services}
//             setData={setServices}
//             localState="breakfast"
//             text="Breakfast"
//             style={{ width: "160px" }}
//           />
//           <EventButton
//             data={services}
//             setData={setServices}
//             localState="lunch"
//             text="Lunch"
//             style={{ width: "160px" }}
//           />

//           <EventButton
//             data={services}
//             setData={setServices}
//             localState="dinner"
//             text="Dinner"
//             style={{ width: "160px" }}
//           />
//         </div>
//       </div>

//       <div className="  text-left flew-wrap w-full ">
//         <label
//           htmlFor="grid-state"
//           className="text-sm text-left text-gray-500 font-weight-bolder"
//         >
//           Schedule
//         </label>

//         <div className="text-left mr-2 flex flex-wrap justify-content-between ">
//           <EventButton
//             data={time}
//             setData={setTime}
//             localState="19:30:00"
//             text="19:30"
//             style={{ width: "85px" }}
//           />
//           <EventButton
//             data={time}
//             setData={setTime}
//             localState="08:00:00"
//             text="08:00"
//             style={{ width: "85px" }}
//           />
//           <EventButton
//             data={time}
//             setData={setTime}
//             localState="08:30:00"
//             text="08:30"
//             style={{ width: "85px" }}
//           />
//           <EventButton
//             data={time}
//             setData={setTime}
//             localState="09:00:00"
//             text="09:00"
//             style={{ width: "85px" }}
//           />
//           <EventButton
//             data={time}
//             setData={setTime}
//             localState="09:30:00"
//             text="09:30"
//             style={{ width: "85px" }}
//           />
//         </div>
//       </div>

//       <label
//         style={{
//           fontWeight: "400",
//           marginTop: "20px",
//           opacity: "0.8",
//           fontSize: "20px",
//           color: "rgb(16, 185, 129)",
//         }}
//       >
//         Offer - 2 promotions available at the moment
//       </label>

//       <Box className={classes.banner} style={{ marginTop: "10px" }}>
//         <label className={classes.bannerHeading}>
//           50% at the checkout - Return to the restaurant
//         </label>
//         <p>
//           Discount applicable for the slected booking time. Discount
//         </p>
//         <p>
//           applicable without restrictions. Eat whatever you want and
//         </p>
//         <p>enjoy your meal. Valud for the selected booking time and</p>
//         <p>subject to availability of seats</p>
//       </Box>

//       <Box className={classes.banner} style={{ marginTop: "50px" }}>
//         <label className={classes.bannerHeading}>Spend the yums</label>
//         <p>
//           cannot be combined with other promotions. The exclusive
//           loyalty
//         </p>
//         <p>discount applies to the total bill</p>
//       </Box>

//       <Box className={classes.banner} style={{ marginTop: "50px" }}>
//         <label className={classes.bannerHeading}>
//           Book without special promotion
//         </label>

//         <p>standard booking without promotion</p>
//       </Box>

//       <div className="mt-4 px-2 w-full">
//         {token && (
//           <button
//             className=" b   g-white px-12 py-3 text-black text-center text-sm mb-12"
//             style={{
//               backgroundColor: "#F5873A",
//               color: "#fff",
//               width: "100%",
//               borderRadius: "6px",
//               marginTop: "20px",
//             }}
//             type="submit"
//           >
//             {loading && (
//               <Spinner
//                 animation="border"
//                 size="sm"
//                 style={{ marginRight: "10px" }}
//               />
//             )}
//             Book Now
//           </button>
//         )}
//       </div>
//     </form>
//   </Container>
// </Card>
// {/* </Fade> */}
// </Modal>

// <SuccessModal
// show={show}
// handleClose={handleClose}
// date={date}
// time={time}
// peopleCount={number}
// />

// <div className={classes.mobile1}>
//         <div className={classes.mobile2}>
//           <div className="text-gray-900   w-full mb-2 	 px-0 py-0 border border-gray-300 shadow-sm">
//             <div
//               style={{
//                 background: "#f59342",
//                 padding: "10px",
//                 display: "flex",
//               }}
//             >
//               <label
//                 style={{
//                   color: "white",
//                   marginLeft: "21px",
//                   fontWeight: "500",
//                 }}
//               >
//                 Table Reservation
//               </label>
//             </div>

//             <div className=" ml-0  w-full  py-0 px-0 md:flex-row p-4  ">
//               <div className=" px-0 w-full  ml-0   md:mb-0">
//                 <img
//                   className="object-cover px-0 object-center ml-0 max-h-80 w-full "
//                   alt="hero"
//                   src={image}
//                 />
//               </div>
//               <div className="w-full mt-4 border border-gray-300 shadow-sm">
//                 <Carousel
//                   ssr
//                   partialVisbile
//                   itemClass="image-item"
//                   responsive={responsive}
//                 >
//                   {images.slice(0, 5).map((image) => {
//                     return (
//                       <Image
//                         draggable={false}
//                         style={{ width: "100%", height: "100%" }}
//                         src={image}
//                         onClick={() => setImage(image)}
//                       />
//                     );
//                   })}
//                 </Carousel>
//               </div>
//             </div>
//           </div>
//           <div className="w-full my-4 border border-gray-300 shadow-sm">
//             <div className="w-full py-2 px-4 bg-green-500 flex justify-content-around">
//               <p
//                 className="text-white mx-2  text-center text-md cursor-pointer"
//                 onClick={() => setActivestep(0)}
//               >
//                 Menu
//               </p>
//               <p
//                 className="text-white mx-2  text-center text-md cursor-pointer"
//                 onClick={() => setActivestep(1)}
//               >
//                 Promotions
//               </p>
//               <p
//                 className="text-white mx-2   text-center text-md cursor-pointer"
//                 onClick={() => setActivestep(2)}
//               >
//                 User photos
//               </p>
//               <p
//                 className="text-white mx-2  text-center text-md cursor-pointer"
//                 onClick={() => setActivestep(3)}
//               >
//                 Info
//               </p>
//             </div>
//             {activeStep === 0 && (
//               <div className="p-4">
//                 <Box style={{ display: "flex", justifyContent: "flex-start" }}>
//                   <p className={classes.menuHeading}>Chef:</p>
//                   <p className={classes.menuPara}>Misha Sukays</p>
//                 </Box>
//                 <Box style={{ display: "flex", justifyContent: "flex-start" }}>
//                   <p className={classes.menuHeading}>Average price:</p>
//                   <p className={classes.menuPara}>38 ‎€ Special Request</p>
//                 </Box>
//                 <Box className={classes.menuContent}>
//                   <label>
//                     Pyramids stuffed with potatoes, sheep's milk ricotta and
//                     mint,
//                   </label>
//                   <label>artichoke and scapece aubergine sauce</label>
//                 </Box>
//                 <Box className={classes.menuContent}>
//                   <label>
//                     Tagliolini with yellow Piennolo tomato, grilled lemon cream
//                     and
//                   </label>
//                   <label>flakes of valsabbia</label>
//                 </Box>
//                 <Box className={classes.menuContent}>
//                   <label>
//                     Candies filled with carbonara, pancetta, toasted almonds and
//                   </label>
//                   <label>asparagus sauce</label>
//                 </Box>
//                 <Box
//                   style={{
//                     display: "flex",
//                     flexDirection: "column",
//                     textAlign: "start",
//                   }}
//                 >
//                   <p className={classes.menuHeading}>
//                     First + Second + Dessert ‎€ 15.00
//                   </p>
//                   <p className={classes.menuPara}>
//                     The fix menu includes: entree + main course + dessert
//                   </p>
//                 </Box>
//                 <Box
//                   style={{
//                     display: "flex",
//                     flexDirection: "column",
//                     textAlign: "start",
//                     margin: "20px 0px",
//                   }}
//                 >
//                   <p className={classes.menuHeading}>Food options</p>
//                   <p className={classes.menuPara}>
//                     Vegan dishes, Vegetarian dishes
//                   </p>
//                 </Box>

//                 <div className="mr-0  w-full min-w-2/3  ">
//                   <div className=" text-center w-full mt-0 border-b border-dashed border-gray-300">
//                     <button
//                       style={{
//                         background: "#ceebdb",
//                         height: "67px",
//                         fontSize: "25px",
//                         color: "#67bf8f",
//                         fontWeight: "600",
//                       }}
//                       className=" mb-4  text-green-500 bg-opacity-50 border-2 border-green-500 font-weight-600 w-1/2   py-2 px-6 focus:outline-none   text-lg"
//                     >
//                       See Set Menu and A La Carte
//                     </button>
//                   </div>

//                   <div className="w-furters Cafell mt-8 ">
//                     <label
//                       style={{
//                         color: "#67bf8f",
//                         display: "flex",
//                         fontSize: "24px",
//                         marginBottom: "35px",
//                         fontWeight: "600",
//                       }}
//                     >
//                       Offers From Starters Cafe
//                     </label>

//                     <Carousel
//                       additionalTransfrom={0}
//                       arrows={true}
//                       autoPlaySpeed={3000}
//                       centerMode={false}
//                       className=""
//                       containerClass="carousel-container"
//                       dotListClass=""
//                       draggable
//                       focusOnSelect={false}
//                       infinite
//                       itemClass="carousel-item-padding-30-px"
//                       keyBoardControl
//                       minimumTouchDrag={80}
//                       renderButtonGroupOutside={true}
//                       renderDotsOutside={false}
//                       responsive={{
//                         desktop: {
//                           breakpoint: {
//                             max: 3000,
//                             min: 1024,
//                           },
//                           items: 2,
//                           partialVisibilityGutter: 40,
//                         },
//                         mobile: {
//                           breakpoint: {
//                             max: 464,
//                             min: 0,
//                           },
//                           items: 1,
//                           partialVisibilityGutter: 30,
//                         },
//                         tablet: {
//                           breakpoint: {
//                             max: 1024,
//                             min: 464,
//                           },
//                           items: 1,
//                           partialVisibilityGutter: 30,
//                         },
//                       }}
//                       showDots={false}
//                       sliderClass=""
//                       slidesToSlide={1}
//                       swipeable
//                       partialVisbile
//                     >
//                       <Card className={classes.cardContent}>
//                         <label>Menu First + Second + Dessert</label>
//                         <label>‎€ 15.00</label>

//                         <label>The fixed menu includes: entree</label>
//                         <label>+ main course + dessert</label>
//                         <label
//                           style={{
//                             color: "#e8a166",
//                             fontWeight: "500",
//                             marginBottom: "20px",
//                           }}
//                         >
//                           See the details of the menu
//                         </label>
//                         <button
//                           style={{
//                             background: "#eddaca",
//                             height: "67px",
//                             fontSize: "21px",
//                             color: "#e8a166",
//                             fontWeight: "600",
//                             border: "1px solid #e8a166",
//                           }}
//                           className=" mb-4 bg-opacity-50 font-weight-600 w-3/4  focus:outline-none   text-lg"
//                         >
//                           Book with This Promotion
//                         </button>
//                       </Card>
//                       <Card className={classes.cardContent}>
//                         <label>Menu First + Second + Dessert</label>
//                         <label>‎€ 15.00</label>

//                         <label>The fixed menu includes: entree</label>
//                         <label>+ main course + dessert</label>
//                         <label
//                           style={{
//                             color: "#e8a166",
//                             fontWeight: "500",
//                             marginBottom: "20px",
//                           }}
//                         >
//                           see the details of the menu
//                         </label>
//                         <button
//                           style={{
//                             background: "#eddaca",
//                             height: "67px",
//                             fontSize: "21px",
//                             color: "#e8a166",
//                             fontWeight: "600",
//                             border: "1px solid #e8a166",
//                           }}
//                           className=" mb-4 bg-opacity-50  font-weight-600 w-3/4  focus:outline-none   text-lg"
//                         >
//                           Book with This Promotion
//                         </button>
//                       </Card>
//                     </Carousel>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>

//           {activeStep === 1 && (
//             <Card>
//               <label>dummy data 1</label>
//             </Card>
//           )}
//           {activeStep === 2 && (
//             <Card>
//               <label>dummy data 2</label>
//             </Card>
//           )}

//           {activeStep === 3 && (
//             <Card>
//               <label>dummy data 3</label>
//             </Card>
//           )}

//         </div>
//         <div
//           style={{ maxHeight: "24rem" }}
//           className=" leading-relaxed   w-2/3  ml-4 shadow-xl lg:min-h-80 max-h-80 border border-gray-300	px-8 py-4 flex flex-col md:items-start md:text-left  "
//         >
//           <div className=" d-flex justify-content-around w-100 px-0 ml-0  ">
//             <h2
//               className=" sm:text-3xl text-green-500  text-2xl mb-2 flex-grow -1 mr-2"
//               style={{ fontWeight: "500", fontSize: "24px" }}
//             >
//               Arcane
//             </h2>
//             <h2
//               className="sm:text-3xl  text-3xl mb-2"
//               style={{ color: "grey", fontSize: "23px", fontWeight: "600" }}
//             >
//               8.3 / 10
//             </h2>
//           </div>
//           <div className=" d-flex justify-content-around w-full  py-1">
//             <p
//               className="w-50 text-xs flex-grow-1 leading-relaxed"
//               style={{ fontSize: "16px", color: "grey", fontWeight: "700" }}
//             >
//               Viale S. Michele del
//             </p>
//             <span
//               className=" text-xs text-inigo-500"
//               style={{ color: "blue", display: "flex", alignItems: "center" }}
//             >
//               See Map
//             </span>
//           </div>
//           <div className="w-full mb-4">
//             <p
//               className="leading-relaxed text-xs py-1"
//               style={{ fontSize: "16px", color: "grey", fontWeight: "700" }}
//             >
//               Carso, 7, 20144 Milan
//             </p>
//             <div className="d-flex justify-content-between leading-relaxed text-xs w-full py-1">
//               <p
//                 className=" leading-relaxed text-xs py-1"
//                 style={{ fontSize: "16px", color: "grey", fontWeight: "700" }}
//               >
//                 Average price 38 €
//               </p>
//               <span
//                 className=" text-xs text-inigo-500"
//                 style={{ color: "blue", display: "flex", alignItems: "center" }}
//               >
//                 Accept the yums
//               </span>
//             </div>
//             <p className=" leading-relaxed text-s w-full text-yellow-500 py-1 px-1 mt-3  font-weight-bold">
//               -50% at the checkout - Return to the restaurant
//             </p>

//             <div className="flex justify-center mb-4 py-4">
//               <button
//                 className="text-center  text-white bg-green-500 font-weight-bold  py-3 px-2 mb-4 w-full    text-sm"
//                 onClick={openTableReservModal}
//               >
//                 Book up to 50%
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//       {authModalVisible && (
//         <AuthModal open={authModalVisible} handleClose={handleCloseAuthModal} />
//       )}
//     </div>

// const responsive = {
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 3,
//       paritialVisibilityGutter: 60,
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2,
//       paritialVisibilityGutter: 50,
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1,
//       paritialVisibilityGutter: 30,
//     },
//   };

//   const images = [
//     "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//     "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
//     "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//     "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//     "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//     "https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//     "https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//     "https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//     "https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//     "https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//     "https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//     "https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//   ];

///delivery page
{
  /* <section className={`${classes.sectionStyles} px-48 `}>
<h1 className="font-weight-bolder  text-black w-full mt-16 mb-4 text-xl text-left">
  Categories
</h1>

<div className="d-flex w-full">
  <div
    className={`${classes.divStyles} w-1/6 bg-white border border-gray-300 p-2 h-72 shadow-sm`}
  >
    {loading
      ? [...Array(5).keys()].map((i) => (
          <Skeleton
            variant="rect"
            height={20}
            width={"100%"}
            className={classes.skeletonStyles}
          />
        ))
      : products?.length
      ? products?.map((product, index) => {
          return (
            <p
              className="text-black text-left text-xs font-weight-bold mb-4 cursor-pointer"
              onClick={() => setActiveIndex(index)}
              style={{
                padding: "10px",
                backgroundColor:
                  index === activeIndex && "rgba(253, 126, 20,0.5)",
              }}
            >
              {product?.name}
            </p>
          );
        })
      : null}
  </div>
  <div className="w-5/6 p-2 ml-4 flex ">
    <div className="w-2/3 mr-2 ml-2 mb-8">
      <div className="shadow-sm">
        {loading
          ? [...Array(5).keys()].map((i) => (
              <div
                className={`${classes.skeletonStyles} border border-gray-300 mb-0 mt-0`}
              >
                <Skeleton variant="rect" height={200} width={"100%"} />
              </div>
            ))
          : products[activeIndex]?.products?.length
          ? products[activeIndex]?.products.map((product, index) => (
              <div className="border border-gray-300 mb-0 mt-0">
                <Product
                  desc={product.description}
                  name={product.title}
                  price={product?.sizes?.[0]?.price}
                  currency={product.currency}
                  key={product._id}
                  id={product._id}
                />
              </div>
            ))
          : null}

        {/* <Accordion>
                            {images.map((item) => {
                                return (
                                    <Card>
                                        <div id={item.cat}>
                                            <Accordion.Toggle
                                                as={Card.Header}
                                                eventKey={item.key}
                                            >
                                                {item.cat}
                                            </Accordion.Toggle>
                                            <Accordion.Collapse
                                                eventKey={item.key}
                                            >
                                                <div>
                                                    {foods.map(
                                                        (food) => {
                                                            if (
                                                                food.cat.includes(
                                                                    item.cat
                                                                )
                                                            ) {
                                                                return (
                                                                    <div className="border border-gray-300 mb-0 mt-0">
                                                                        <Product
                                                                            desc={
                                                                                food.desc
                                                                            }
                                                                            name={
                                                                                food.name
                                                                            }
                                                                            price={
                                                                                food.price
                                                                            }
                                                                            key={
                                                                                1
                                                                            }
                                                                        />
                                                                    </div>
                                                                );
                                                            }
                                                        }
                                                    )}
                                                </div>
                                            </Accordion.Collapse>
                                        </div>
                                    </Card>
                                );
                            })}
                        </Accordion> */
}
//       </div>
//     </div>

//     <div className="w-1/3">
//       <Control />
//     </div>
//   </div>
// </div>
// </section> */}

//about us page
{
  /* <section className="text-gray-700 body-font px-64 py-12  mt-12 mb-12 ">
<div className="w-full py-2 px-4 bg-yellow-500 text-white">
  <h1 className="text-left ml-4 text-xl font-weight-bold">
    Contact us
  </h1>
</div>
<div className=" shadow-sm border-l border-r border-b border-gray-300  py-8 mx-auto flex  ">
  <div className="w-1/2 bg-white flex flex-col px-6 md:ml-auto  md:py-8 mt-8 md:mt-0">
    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font text-left">
      Contact Us
    </h2>
    <p className="text-xs text-left mb-5 text-gray-600">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
      nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
      Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu
      venenatis
    </p>
    <form onSubmit={handleSubmit(addContactUsHandler)}>
      <div className="relative mb-4 text-left">
        <label
          htmlFor="name"
          className="leading-7 text-sm text-indigo-400 font-weight-bold text-left"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          ref={register({
            required: "Name is required",
          })}
          name="name"
          placeholder="Amanda"
          className="w-full bg-white  border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4 text-left">
        <label
          htmlFor="email"
          className="leading-7 text-sm text-indigo-400 font-weight-bold text-left"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          ref={register({
            required: "Email is required",
          })}
          placeholder="amanda@mail.com"
          className="w-full bg-white border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4 text-left">
        <label
          htmlFor="message"
          className="leading-7 text-sm text-indigo-400 font-weight-bold text-left"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          ref={register({
            required: "Message is required",
          })}
          className="w-full bg-white  border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
        ></textarea>
      </div>
      <button className="text-green-500 border-2 border-green-500 bg-opacity-50 bg-green-500  py-2 px-6 focus:outline-none rounded text-lg align-self-end">
        {loading && (
          <CircularProgress
            color="inherit"
            size={20}
            style={{ marginRight: "8px" }}
          />
        )}
        Submit
      </button>
    </form>
  </div>
  <div className="w-1/2 rounded-lg py-8 sm:mr-10 ">
    <div className="w-full h-72 p-0">
      <iframe
        width="100%"
        height="100%"
        className="w-full h-72 p-0"
        frameBorder="0"
        title="map"
        marginHeight="0"
        marginWidth="0"
        scrolling="no"
        src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
      ></iframe>
    </div>

    <div className="bg-white w-full flex flex-wrap py-6">
      <div className="w-full px-6 mt-4 lg:mt-0">
        <p className="text-left font-weight-normal text-gray-500 mb-2">
          <span className="text-black">Address:</span> Vis mario rossi
          Milan Italy{" "}
        </p>
        <p className="text-left font-weight-normal text-gray-500 mb-2">
          <span className="text-black">Email:</span> starters@cafe.com{" "}
        </p>
        <p className="text-left font-weight-normal text-gray-500 mb-2">
          <span className="text-black">Phone:</span> 3334445566{" "}
        </p>
        <p className="text-left font-weight-normal text-gray-500 mb-2">
          <span className="text-black">Email:</span> starters@cafe.com{" "}
        </p>
      </div>
    </div>
  </div>
</div>
</section> */
}
