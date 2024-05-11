export async function getCars(cars) {

    const { tanggal, waktu, penumpang } = cars;

    const response = await fetch(
        `https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json`, { method: "GET", }
    );

    const resData = await response.json();

    if (!response.ok) {
        const message = `${response.status} | ${resData.message}`;
        throw new Error(message);
    }

    const filteredData = resData.filter((car) => {
        const dateTime = new Date(car.availableAt).toISOString();
        const formattedDateTime = new Date(`${tanggal}T${waktu}:00Z`).toISOString();

        if (dateTime && formattedDateTime && !(dateTime <= formattedDateTime)) {
            return false;
        }

        if (car.available === false) {
            return false;
        }

        if (car.capacity < parseInt(penumpang)) {
            return false;
        }

        return true;
    });

    return filteredData;
}
