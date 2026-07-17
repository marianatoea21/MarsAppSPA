import { useState } from "react";
import axios from "axios";
import "./CosmoExplorer.css";

interface ApodPhotoDto {
    date: string;
    title: string;
    url: string;
}

export default function CosmoExplorer() {
    const [selectedDate, setSelectedDate] = useState<string> (
        new Date().toISOString().split('T')[0]
    )

    const [photo, setPhoto] = useState<ApodPhotoDto | null>(null);

    const handleSearch = async (e: React.SubmitEvent) => {
        e.preventDefault();

        try {
            const response = await axios.get(`http://localhost:5027/apod/photos/${selectedDate}`);
            setPhoto(response.data);
        } catch (error) {
            console.error("An error occurred while fetching the data...", error);
            alert("There is no photo for the picked date!");
        }
    }

    return (
        <div className="cosmo-container">
            <h2>Cosmo Explorer</h2>

            <form onSubmit={handleSearch} className={"cosmo-form"}>
                <label htmlFor="date-input">Pick a date:</label>
                <input
                    id="date-input"
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    max={new Date().toISOString().split('T')[0]}
                />
                <button type="submit">Search</button>
            </form>

            {
                photo &&
                (
                    <div className="cosmo-result">
                        <h3>{photo.title}</h3>
                        <p>Date: {photo.date}</p>
                        <img src={photo.url} alt={photo.title} className="cosmo-image" />
                    </div>
                )
            }
        </div>
    )
}