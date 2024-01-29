import Image1 from "../assets/pexels-caio-56759.jpg";
import Image2 from "../assets/pexels-designecologist-1779487.jpg";
import Image3 from "../assets/pexels-tima-miroshnichenko-5380642.jpg";
import Image4 from "../assets/pexels-pixabay-38544.jpg";

const Services = () => {
  return (
    <section className="w-full flex min-h-screen px-2 md:px-10 py-6">
      <div className="w-full flex flex-col justify-center items-center p-2 md:p-6">
        <p className="text-white text-[50px] font-bold">Services</p>
        <div className="w-full grid  grid-cols-1 md:grid-cols-4 gap-6 mt-6">
          <div
            style={{ backgroundImage: `url(${Image1})` }}
            className="shadow object-cover bg-center group shadow-[#b5604b] overflow-hidden relative w-full bg-cover h-96 flex flex-col rounded-[40px]"
          >
            <div className="absolute -bottom-full group-hover:bottom-0 duration-300 delay-150 p-4 bg-[#b5604b] w-full">
              <p className="text-black text-xl font-bold">Web Development</p>
              <p className="text-black text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae vel, ea qui magnam maiores architecto! Suscipit,
                iure porro. At dignissimos odit vitae illo odio reprehenderit
                sapiente facilis? Vel, consequuntur esse.
              </p>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Image2})` }}
            className="shadow object-cover bg-center group shadow-[#c80087] overflow-hidden relative w-full bg-cover h-96 flex flex-col rounded-[40px]"
          >
            <div className="absolute -bottom-full group-hover:bottom-0 duration-300 delay-150 p-4 bg-[#c80087] w-full">
              <p className="text-white text-xl font-bold">Web Design</p>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae vel, ea qui magnam maiores architecto! Suscipit,
                iure porro. At dignissimos odit vitae illo odio reprehenderit
                sapiente facilis? Vel, consequuntur esse.
              </p>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Image3})` }}
            className="shadow object-cover bg-center group shadow-[#009cc3] overflow-hidden relative w-full bg-cover h-96 flex flex-col rounded-[40px]"
          >
            <div className="absolute -bottom-full group-hover:bottom-0 duration-300 delay-150 p-4 bg-[#009cc3] w-full">
              <p className="text-white text-xl font-bold">Web Security</p>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae vel, ea qui magnam maiores architecto! Suscipit,
                iure porro. At dignissimos odit vitae illo odio reprehenderit
                sapiente facilis? Vel, consequuntur esse.
              </p>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Image4})` }}
            className="shadow object-cover bg-center group shadow-[#e3cec6] overflow-hidden relative w-full bg-cover h-96 flex flex-col rounded-[40px]"
          >
            <div className="absolute -bottom-full group-hover:bottom-0 duration-300 delay-150 p-4 bg-[#e3cec6] w-full">
              <p className="text-black text-xl font-bold">Dev Ops</p>
              <p className="text-black text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae vel, ea qui magnam maiores architecto! Suscipit,
                iure porro. At dignissimos odit vitae illo odio reprehenderit
                sapiente facilis? Vel, consequuntur esse.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
