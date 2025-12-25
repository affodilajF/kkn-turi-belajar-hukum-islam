import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";

const Anim1 = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    // Mengambil file JSON dari folder public
    fetch("/animations/fixed-blur.json")
      .then((response) => response.json()) // Mengonversi file JSON ke objek JavaScript
      .then((data) => setAnimationData(data)) // Menyimpan data animasi ke state
      .catch((error) => console.error("Error loading animation data:", error));
  }, []);

  // Menunggu sampai animationData tersedia
  if (!animationData) {
    return <div>Loading animation...</div>; // Menampilkan pesan sementara
  }

  const options = {
    loop: true, // Animasi berulang
    autoplay: true, // Animasi dimulai secara otomatis
    animationData: animationData, // Data animasi yang sudah dimuat
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice", // Menjaga proporsi gambar
    },
  };

  return (
    <Lottie
      options={options}
      height={400}
      width={400}
      style={{ opacity: 0.4 }} // Mengurangi opacity animasi
    />
  );
};

export default Anim1;
