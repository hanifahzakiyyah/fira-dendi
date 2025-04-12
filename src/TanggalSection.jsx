import { MapPinIcon, ClockIcon, CalendarDaysIcon } from "@heroicons/react/24/solid";

const TanggalSection = () => {
  

  return (
    <section id="tanggal" className="py-20 px-5 pt-44 text-center text-[#10031d]">
      <div className="container mx-auto px-4">
        {/* Judul & Lokasi */}
        <div className="max-w-xl mx-auto">
          {/* <h2 className="text-3xl font-bold mb-4" data-aos="flip-down-right" data-aos-duration="2000">
            Informasi Acara
          </h2> */}
          <p className="text-lg mb-5" data-aos="fade-up-right" data-aos-duration="2000">
            Assalamu'alaikum Warahmatullah Wabarakatuh <br />
            Dengan mengharap Rahmat dan Ridho Allah, Kami mengundang Bapak/Ibu, Saudara/i untuk berkenan hadir pada resepsi pernikahan putra-putri kami, serta memberikan doa restu. InsyaAllah walimatul 'Urs akan diselenggarakan pada:
          </p>

          <div 
            className="shadow-lg rounded-lg p-6 text-[#10031d]" 
            data-aos="fade-up-right" data-aos-duration="2000">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <CalendarDaysIcon className="w-8 h-8 text-[#10031d] mx-auto" />
                <p className="mt-2 text-lg">Minggu, 20 April 2025</p>
              </div>
              <div>
                <ClockIcon className="w-8 h-8 text-[#10031d] mx-auto" />
                <p className="mt-2 text-lg">
                  19:00 - selesai WITA
                </p>
              </div>
              
            </div>
            <div>
              <p className="text-lg mt-10" data-aos="fade-up-left" data-aos-duration="2000">
                Yang bertempat di: <br />  jln .Poros Bontang Sangatta Rt 05 Desa Martadinata
              </p>
              <p data-aos="fade-up-left" data-aos-duration="2000" className="mt-4">
                <a 
                  href="" 
                  target="_blank" 
                  className="inline-flex items-center gap-2 px-6 py-3 text-lg font-semibold text-pink-200 bg-purple-900 rounded-lg shadow-md hover:bg-purple-700 transition">
                  <MapPinIcon className="w-6 h-6" /> Klik Map
                </a>
              </p>
              
            </div>
          </div>
        </div>

        {/* Kartu Acara */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-3xl mx-auto">

        </div>
      </div>
    </section>
  );
};

export default TanggalSection;
