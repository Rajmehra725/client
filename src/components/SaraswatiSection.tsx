import Sars from "../Images/saraswati.jpg";

const SaraswatiSection = () => {
  return (
    <section className="py-16 bg-yellow-100 text-center">

      <h2 className="text-3xl font-bold text-yellow-900 mb-8">
        Saraswati Maa's Blessings
      </h2>

      <div className="bg-white p-8 rounded-xl shadow-xl max-w-xl mx-auto">

        <img
          src={Sars}
          alt="Saraswati Maa"
          className="w-40 h-40 rounded-full mx-auto border-4 border-yellow-500"
        />

        <p className="mt-6 text-gray-700 leading-relaxed">

          या कुन्देन्दुतुषारहारधवला  
          या शुभ्रवस्त्रावृता  
          या वीणावरदण्डमण्डितकरा  
          या श्वेतपद्मासना  

        </p>

        <p className="mt-4 font-semibold text-yellow-700">
          Sunflower Public School
        </p>

      </div>

    </section>
  );
};

export default SaraswatiSection;