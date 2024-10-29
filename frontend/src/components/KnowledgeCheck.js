import axios from 'axios';

const checkAnswer = async (answer) => {
    try {
        const response = await axios.post('http://localhost:5000/check-answer', { answer });
        console.log(response.data); // This should show {"correct": true}
    } catch (error) {
        console.error("There was an error checking the answer:", error);
    }
};
