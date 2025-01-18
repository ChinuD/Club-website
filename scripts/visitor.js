import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, onValue, set } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYhfk0eKcfvKhCOMqIWlxeZoLGeUWGQOM",
  authDomain: "hackathon-club-43dd9.firebaseapp.com",
  databaseURL: "https://hackathon-club-43dd9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hackathon-club-43dd9",
  storageBucket: "hackathon-club-43dd9.firebasestorage.app",
  messagingSenderId: "160124508536",
  appId: "1:160124508536:web:0d9a6b8bd91515c3d1508d",
  measurementId: "G-KV0HVQ8DYN"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const visitorCountRef = ref(database, 'visitorCount');

// Function to update visitor count
function updateVisitorCount() {
    // First get current value
    onValue(visitorCountRef, (snapshot) => {
        let currentCount = snapshot.val() || 0;
        // Increment the count
        set(visitorCountRef, currentCount + 1)
            .then(() => {
                console.log("Count updated successfully");
            })
            .catch((error) => {
                console.error("Error updating count:", error);
            });
        
        // Update display
        document.getElementById('count-visitor').innerText = currentCount + 1;
    }, {
        onlyOnce: true
    });
}

// Update count when page loads
document.addEventListener('DOMContentLoaded', updateVisitorCount);