import { useState } from "react";

export const SearchCar = () => {
    const [driver, setDriver] = useState();
    const [tanggal, setTanggal] = useState();
    const [waktu, setWaktu] = useState();
    const [penumpang, setPenumpang] = useState();



    return (
        <div class="container mx-auto -mt-12 bg-slate-100 p-4 rounded-lg shadow-md w-3/5">
            <div class="card">
                <div class="card-body">
                    <div class="flex justify-center items-center">
                        <div class="grid grid-cols-1 lg:grid-cols-4 gap-4">
                            <div class="col">
                                <label for="driver" class="block mb-1">Tipe Driver</label>
                                <select class="form-select" id="driver" aria-placeholder="">
                                    <option hidden class="font-light">Pilih Tipe Driver</option>
                                    <option value="1">Dengan Sopir</option>
                                    <option value="1">Tanpa Sopir(Lepas Kunci)</option>
                                </select>
                            </div>
                            <div class="col m-auto">
                                <label for="date" class="block mb-1">Tanggal</label>
                                <input type="date" class="form-control" placeholder="Pilih Tanggal" id="date" />
                            </div>
                            <div class="col">
                                <label for="time" class="block mb-1">Waktu Jemput/Ambil</label>
                                <select class="form-select" id="time" aria-placeholder="">
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
                                    <input type="number" class="form-control" placeholder="1" id="passenger" />
                                    <span class="input-group-text bg-white">
                                        <img src="images/fi_users.png" width="20px" alt="" />
                                    </span>
                                </div>
                            </div>
                            <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 mt-3 rounded" id="search" disabled>Cari Mobil</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="grid grid-cols-1 lg:grid-cols-3 justify-center" id="cars-container"></div>
            </div>
        </div>


    )
}

export default SearchCar;