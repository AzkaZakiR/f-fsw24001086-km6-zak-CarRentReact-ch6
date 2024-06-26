import { useState, useEffect } from "react";
import { getCars } from "../layouts/sendCar";

export const SearchCar = () => {
    // preventDefault();

    const [driver, setDriver] = useState("");
    const [tanggal, setTanggal] = useState("");
    const [waktu, setWaktu] = useState("");
    const [penumpang, setPenumpang] = useState("");
    const [cars, setCars] = useState([]);
    const [error, setError] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleDriverChange = (event) => {
        setDriver(event.target.value);
    };

    const handleTanggalChange = (event) => {
        setTanggal(event.target.value);
    };

    const handleWaktuChange = (event) => {
        setWaktu(event.target.value);
    };

    const handlePenumpangChange = (event) => {
        setPenumpang(event.target.value);
    };

    let filteredCars;
    const handleSearch = async () => {
        if (driver === "" || tanggal === "" || waktu === "") {
            setError("Semua kolom harus diisi.");
            console.log("Semua kolom harus diisi.");
            alert("Semua kolom harus diisi")
            return;
        }
        console.log("Semua kolom harus diisi.");
        setLoading(true);
        try {
            const searchData = { driver, tanggal, waktu, penumpang };
            filteredCars = await getCars(searchData);
            console.log("Masuk filter")
            setCars(filteredCars);
        } catch (error) {
            setError("Terjadi kesalahan saat mencari mobil.");
        }
        setLoading(false);
    };

    useEffect(() => {
        if (cars !== "") {
            console.log("Filtered Cars:", cars);
        }
    }, [cars]);

    console.log("Value" + driver, tanggal, waktu, penumpang)
    return (
        <div>
            <div class="container mx-auto -mt-12 bg-slate-100 p-4 rounded-lg shadow-md w-90%">
                <div class="card">
                    <div class="card-body">
                        <div class="flex justify-center items-center">
                            <div class="grid grid-cols-1 lg:grid-cols-5 gap-4">
                                <div class="col">
                                    <label for="driver" class="block mb-1">Tipe Driver</label>
                                    <select class="form-select" id="driver" value={driver} onChange={handleDriverChange}>
                                        <option hidden class="font-light">Pilih Tipe Driver</option>
                                        <option value="1">Dengan Sopir</option>
                                        <option value="1">Tanpa Sopir(Lepas Kunci)</option>
                                    </select>
                                </div>
                                <div class="col m-auto">
                                    <label for="date" class="block mb-1">Tanggal</label>
                                    <input type="date" class="form-control" placeholder="Pilih Tanggal" id="date" value={tanggal} onChange={handleTanggalChange} />
                                </div>
                                <div class="col">
                                    <label for="time" class="block mb-1">Waktu Jemput/Ambil</label>
                                    <select class="form-select" id="time" value={waktu} onChange={handleWaktuChange} >
                                        <option hidden>Pilih waktu</option>
                                        <option value="08:00" class="mb-2">08.00 WIB</option>
                                        <option value="09:00" class="mb-2">09.00 WIB</option>
                                        <option value="10:00" class="mb-2">10.00 WIB</option>
                                        <option value="11:00" class="mb-2">11.00 WIB</option>
                                        <option value="12:00" class="mb-2">12.00 WIB</option>
                                    </select>
                                </div>
                                <div class="col">
                                    <label class="font-light mb-1">Jumlah Penumpang (optional)</label>
                                    <div class="flex items-center">
                                        <input type="number" class="form-control" placeholder="1" id="passenger" value={penumpang} onChange={handlePenumpangChange} min="0" />
                                        <span class="input-group-text bg-white">
                                            <img src="images/fi_users.png" width="20px" alt="" />
                                        </span>
                                    </div>
                                </div>
                                <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 mt-3 rounded" id="search" onClick={handleSearch}>Cari Mobil</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="result mt-5" id="result">
                <div className="grid grid-cols-1 lg:grid-cols-3 justify-center gap-4" id="cars-container">
                    {cars.map((car) => (
                        <div key={car.id} className="card mx-auto">
                            <img src={`img/cars${car.image.slice(8)}`} alt={car.model} className="w-full h-auto" />
                            <div className="card-body">
                                <h3 className="text-lg font-semibold">{car.model}</h3>
                                <p>{car.manufacture}</p>
                                <p>Plate: {car.plate}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>


    )
}

export default SearchCar;