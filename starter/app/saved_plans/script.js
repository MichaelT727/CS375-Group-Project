const DATABASE_URL = 'postgresql://api_andys_postgres_user:nTC8TtGgZgV2t5lnu2242fDNqYPHdXBu@dpg-d2af26hr0fns73ci2v5g-a.virginia-postgres.render.com/api_andys_postgres';

async function fetchTravelData() {
    try {
        const response = await fetch('/api/travel-data');
        const data = await response.json();

        if (data.length > 0) {
            const firstRow = data[0];
            document.getElementById('airport').textContent = firstRow.airport;
            document.getElementById('city').textContent = firstRow.city;
            document.getElementById('country').textContent = firstRow.country;
            document.getElementById('startDate').textContent = firstRow.start_date;
            document.getElementById('endDate').textContent = firstRow.end_date;
        }
    } catch (error) {
        console.error('Error fetching travel data:', error);
    }
}

window.addEventListener('DOMContentLoaded', fetchTravelData);