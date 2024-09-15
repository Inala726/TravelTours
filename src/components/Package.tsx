import data from "./data";

const Package = () => {
  return (
    <>
      <div className="mb-8 p-[1rem]">
        <div className="">
          <div className="">
            <div className="flex flex-col gap-[0.5rem]">
              <p className="text-[2em] font-bold text-[#22166fee]">
                Popular Destinations
              </p>
              <p>
                From historical cities to natural spectaculars, come see some of
                the best in the world
              </p>
            </div>
          </div>

          <div className="flex gap-2 overflow-x-scroll overflow-y-hidden ">
          {data.map((items) => (
            <div className="">
              <div className="w-[250px] border rounded-xl ">
                <img src={items.image} alt="" />
                <p>{items.title}</p>
                <p>{`$${items.price}`}</p>
                <div className="button">
                  <button className="">Book</button>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Package;
