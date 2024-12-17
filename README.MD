# **Health Lab Finder** 🌍🏥  
**Discover health labs in your city with ease.**  
A modern, responsive MERN stack web application that allows users to find health labs in their area using live data from Google Places API.

---

## **🚀 Features**
- 🌐 **Find Health Labs:** Search health labs based on your city.
- 📍 **Detailed Information:** View lab details including name, address, services, and contact number.
- 🖼️ **Modern UI:** Visually impactful and fully responsive user interface with card-based design.
- ⚡ **Real-Time API Integration:** Fetch live data using Google Places API for accurate results.
- 📱 **Responsive Design:** Seamlessly adapts to any device — mobile, tablet, or desktop.

---

## **💻 Tech Stack**
### **Frontend**  
- React.js (with Material-UI for styling)
- Axios for API calls
- Responsive design with modern UI components  

### **Backend**  
- Node.js with Express.js
- Google Places API for fetching lab data
- CORS and environment management  

---

## **📦 Setup Instructions**
Follow these steps to set up and run the project locally.

### **Step 1: Clone the Repository**
```bash
git clone https://github.com/your-username/health-lab-finder.git
cd health-lab-finder
```

### **Step 2: Install Dependencies**
- Navigate to both `frontend` and `backend` directories and install dependencies:
```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### **Step 3: Configure Environment Variables**
- In the `backend` folder, create a `.env` file same as `.env.example` file:
```plaintext
GOOGLE_API_KEY=your-google-api-key
```

### **Step 4: Start the Application**
- Start the backend server:
```bash
cd backend
node server.js
```

- Start the frontend development server:
```bash
cd ../frontend
npm start
```

- Open your browser at `http://localhost:3000`.

---

## **🌟 Key Functionalities**
1. **Search Health Labs:** Enter your city name and get a list of health labs.  
2. **View Lab Details:** Each result displays the lab’s name, address, services, and phone number in an attractive card format.  
3. **Responsive UI:** Designed to provide a seamless experience across all devices.  

---

## **🔗 API Usage**
- **Google Places API**  
   The app uses Google Places API to fetch accurate and live health lab data.  

---

## **📌Keywords**
- Find health labs  
- Health lab locator  
- City health services finder  
- Medical labs near me  
- Modern health lab search  

---

## **📚 Additional Notes**
- Ensure your Google Places API key is active and has permissions for Places API usage.
- Placeholder images can be replaced with dynamic Unsplash/other image sources if needed.

---

## **🤝 Contributing**
1. Fork the project.
2. Create a feature branch:  
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:  
   ```bash
   git commit -m "Add some feature"
   ```
4. Push to the branch:  
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## **💬 Feedback**
We’d love to hear your feedback! Feel free to [open an issue](https://github.com/exclusiveabhi/medical-labs-finder/issues) or contribute to the project.