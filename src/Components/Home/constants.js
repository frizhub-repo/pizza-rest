//home data
const images = [
  "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
];
<div className="w-full ">
  <Carousel
    additionalTransfrom={0}
    arrows
    autoPlaySpeed={3000}
    centerMode={false}
    className=""
    containerClass="carousel-container"
    dotListClass=""
    draggable
    focusOnSelect={false}
    infinite
    itemClass="carousel-item-padding-30-px"
    keyBoardControl
    minimumTouchDrag={80}
    renderButtonGroupOutside={false}
    renderDotsOutside={false}
    responsive={{
      desktop: {
        breakpoint: {
          max: 3000,
          min: 1024,
        },
        items: 3,
        partialVisibilityGutter: 40,
      },
      mobile: {
        breakpoint: {
          max: 464,
          min: 0,
        },
        items: 1,
        partialVisibilityGutter: 30,
      },
      tablet: {
        breakpoint: {
          max: 1024,
          min: 464,
        },
        items: 1,
        partialVisibilityGutter: 30,
      },
    }}
    showDots={false}
    sliderClass=""
    slidesToSlide={1}
    swipeable
  >
    {menus?.map((menu, index) => (
      <Card
        text={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, \n" +
          "pulvinar facilisis justo mollis"
        }
        title={menu?.title}
        image={
          "https://images.unsplash.com/photo-1542834369-f10ebf06d3e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80"
        }
        index={index}
        setKey={setKey}
        icon={food}
      />
    ))}
  </Carousel>
</div>;
<div
  className="w-full mt-8 flex px-44"
  style={{ display: "flex", flexWrap: "wrap" }}
>
  {loading ? (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {[...Array(3).keys()].map((i) => (
          <Skeleton
            variant="rect"
            height={200}
            width={200}
            style={{ marginBottom: "20px" }}
          />
        ))}
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {[...Array(3).keys()].map((i) => (
          <Skeleton
            variant="rect"
            height={200}
            width={200}
            style={{ marginBottom: "20px" }}
          />
        ))}
      </div>
    </div>
  ) : menus?.length ? (
    menus[key]?.items?.map((product) => (
      <div
        style={{
          width: "50%",
          height: "-webkit-fill-available",
        }}
      >
        <h1 className="text-4xl font-weight-bold font-italic text-yellow-400 text-left mb-4">
          {product?.category?.name}
        </h1>
        {product?.products?.length
          ? product?.products?.map((item) => (
              <p className="text-lg text-left mb-8 font-italic">
                {item.title}{" "}
                <label
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  {item?.sizes?.[0]?.price} {item.currency}
                </label>
              </p>
            ))
          : null}
      </div>
    ))
  ) : null}
</div>;

{
  /* </Container> */
}

///delivery data
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};
const images = [
  {
    image:
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    cat: "Appetizers",
    key: "0",
  },
  {
    image:
      "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    cat: "Ravioli",
  },
  {
    image:
      "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    cat: "Soups",
    key: "1",
  },
  {
    image:
      "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    cat: "Rice",
    key: "2",
  },
  {
    image:
      "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    cat: "pasta",
    key: "3",
  },
  {
    image:
      "https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    cat: "Boats",
    key: "4",
  },
];

const foods = [
  {
    name: "Shrimp Roll",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    cat: ["Apperitizers"],
    price: 25,
    image:
      "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
  },
  {
    name: "Sake dom poke",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    cat: ["Apperitizers", "Rice", "Salads", "Pinned"],
    price: 4,
    image:
      "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
  },
  {
    name: "Ebi shu mai",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    cat: ["Apperitizers", "Rice", "Soups"],
    price: 30,
    image:
      "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
  },
  {
    name: "Nigiri 1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    cat: ["Apperitizers", "Nigiri", "Soups"],
    price: 30,
    image:
      "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
  },
  {
    name: "Shrimp Roll",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    cat: ["Apperitizers"],
    price: 25,
    image:
      "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
  },
  {
    name: "Sake dom poke",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    cat: ["Apperitizers", "Rice", "Salads"],
    price: 4,
    image:
      "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
  },
  {
    name: "Ebi shu mai",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    cat: ["Apperitizers", "Rice", "Soups", "Pinned"],
    price: 30,
    image:
      "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
  },
  {
    name: "Nigiri 1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    cat: ["Apperitizers", "Nigiri", "Soups"],
    price: 30,
    image:
      "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
  },
  {
    name: "Shrimp Roll",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    cat: ["Apperitizers"],
    price: 25,
    image:
      "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
  },
  {
    name: "Sake dom poke",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    cat: ["Apperitizers", "Rice", "Salads"],
    price: 4,
    image:
      "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
  },
  {
    name: "Ebi shu mai",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    cat: ["Apperitizers", "Rice", "Soups"],
    price: 30,
    image:
      "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
  },
  {
    name: "Nigiri 1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    cat: ["Apperitizers", "Nigiri", "Soups"],
    price: 30,
    image:
      "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
  },
  {
    name: "Shrimp Roll",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    cat: ["Apperitizers"],
    price: 25,
    image:
      "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
  },
  {
    name: "Sake dom poke",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    cat: ["Apperitizers", "Rice", "Salads", "Pinned"],
    price: 4,
    image:
      "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
  },
  {
    name: "Ebi shu mai",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    cat: ["Apperitizers", "Rice", "Soups"],
    price: 30,
    image:
      "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
  },
  {
    name: "Nigiri 1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    cat: ["Apperitizers", "Nigiri", "Soups"],
    price: 30,
    image:
      "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
  },
  {
    name: "Shrimp Roll",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    cat: ["Apperitizers", "Pinned"],
    price: 25,
    image:
      "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
  },
  {
    name: "Sake dom poke",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    cat: ["Apperitizers", "Rice", "Salads"],
    price: 4,
    image:
      "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
  },
  {
    name: "Ebi shu mai",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    cat: ["Apperitizers", "Rice", "Soups"],
    price: 30,
    image:
      "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
  },
  {
    name: "Nigiri 1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    cat: ["Apperitizers", "Nigiri", "Soups"],
    price: 30,
    image:
      "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
  },
  {
    name: "Shrimp Roll",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    cat: ["Apperitizers", "Pinned"],
    price: 25,
    image:
      "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
  },
  {
    name: "Sake dom poke",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    cat: ["Apperitizers", "Rice", "Salads"],
    price: 4,
    image:
      "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
  },
  {
    name: "Ebi shu mai",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    cat: ["Apperitizers", "Rice", "Soups"],
    price: 30,
    image:
      "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
  },
  {
    name: "Nigiri 1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    cat: ["Apperitizers", "Nigiri", "Soups"],
    price: 30,
    image:
      "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
  },
];
