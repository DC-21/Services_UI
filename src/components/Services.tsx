import image1 from "../assets/pexels-caio-56759.jpg";
import image2 from "../assets/pexels-designecologist-1779487.jpg";
import image3 from "../assets/pexels-tima-miroshnichenko-5380642.jpg";
import image4 from "../assets/pexels-pixabay-38544.jpg";

const Services = () => {
  return (
    <section className="w-full flex px-2 md:px-10 py-6 min-h-screen">
      <div className="w-full flex flex-col justify-center items-center p-2 md:p-6 overflow-hidden">
        <p className="text-[50px] font-bold">Services</p>
        <div className="w-full grid grid-cols-1 md:grid-cols-4 mt-6 gap-6">
          <div
            style={{ backgroundImage: `url(${image1})` }}
            className="w-full flex flex-col rounded-[40px] relative shadow-md shadow-[#d57b56] group overflow-hidden bg-cover object-cover bg-center h-96"
          >
            <div className="absolute -bottom-full w-full bg-[#d57b56] group-hover:bottom-0 duration-500 delay-150 p-4">
              <p className="text-xl font-bold">Web Design</p>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium animi voluptatem quod expedita fugiat hic magni sed
                modi delectus iure rem maiores cumque non, dolorem nemo eligendi
                a neque reprehenderit.
              </p>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${image2})` }}
            className="w-full flex flex-col rounded-[40px] relative shadow-md shadow-[#aa107f] group overflow-hidden bg-cover object-cover bg-center h-96"
          >
            <div className="absolute -bottom-full w-full bg-[#aa107f] group-hover:bottom-0 duration-500 delay-150 p-4">
              <p className="text-xl font-bold">Web Design</p>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium animi voluptatem quod expedita fugiat hic magni sed
                modi delectus iure rem maiores cumque non, dolorem nemo eligendi
                a neque reprehenderit.
              </p>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${image3})` }}
            className="w-full flex flex-col rounded-[40px] relative shadow-md shadow-[#0087b4] group overflow-hidden bg-cover object-cover bg-center h-96"
          >
            <div className="absolute -bottom-full w-full bg-[#0087b4] group-hover:bottom-0 duration-500 delay-150 p-4">
              <p className="text-xl font-bold">Web Design</p>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium animi voluptatem quod expedita fugiat hic magni sed
                modi delectus iure rem maiores cumque non, dolorem nemo eligendi
                a neque reprehenderit.
              </p>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${image4})` }}
            className="w-full flex flex-col rounded-[40px] relative shadow-md shadow-[#d7e2eb] group overflow-hidden bg-cover object-cover bg-center h-96"
          >
            <div className="text-black absolute -bottom-full w-full bg-[#d7e2eb] group-hover:bottom-0 duration-500 delay-150 p-4">
              <p className="text-xl font-bold">Web Design</p>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium animi voluptatem quod expedita fugiat hic magni sed
                modi delectus iure rem maiores cumque non, dolorem nemo eligendi
                a neque reprehenderit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
