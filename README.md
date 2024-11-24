# **Website-UX-UI**

This repository contains the frontend implementation for the KLPS project, showcasing a user-friendly interface and seamless integration with backend services and data.

---

## **Repository Naming Convention**

We follow a structured naming convention for our repositories to ensure clarity, consistency, and easy collaboration:

```
<project-name>-<scope>-<descriptor>
```

### **Examples**:
- `KLPS-frontend-v1`: Frontend application for the KLPS project.
- `KLPS-api`: Backend API for KLPS.
- `KLPS-data-pipeline`: Data processing pipeline for KLPS.

Ensure any new repositories adhere to this convention.

---

## **Folder Structure**

```
- assets           => Contains assets such as images, videos, and SVG files
- components       => React components used to build this website
- sections         => Includes sections like Home, About, Contact, etc.
- data             => Processed data files (e.g., JSON, CSV)
- server           => Backend logic and API endpoints
- GlobalStyles.js  => Global styles for the entire application
- Themes.js        => Variables for color schemes and font sizes
- public           => Static assets and the entry point (index.html)
```

---

## **Steps to Run**

1. Open this directory in your terminal or command prompt.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the application:
   ```bash
   npm start
   ```
4. Open the app in your browser at [http://localhost:3000](http://localhost:3000).

---

## **Backend Integration**

The backend API is currently under development and will integrate:
1. **PostgreSQL** for storing raw survey data.
2. **Snowflake** for processed data and analytics.
3. **Python** scripts for data cleaning and processing.

---

## **External Libraries Used**

This project leverages several external libraries for functionality and design:

- [**Styled Components**](https://styled-components.com/docs): For styling React components.
- [**GSAP**](https://greensock.com/gsap/): For animations.
- [**React Locomotive Scroll**](https://www.npmjs.com/package/react-locomotive-scroll): Smooth scrolling effects.
- [**Locomotive Scroll**](https://www.npmjs.com/package/locomotive-scroll): Parallax scrolling.
- [**Framer Motion**](https://www.framer.com/motion/): Animations and interactions.
- [**Axios**](https://axios-http.com/): For API requests.

---

## **Data Files**

### **Processed Data**
- **`processed_data.json`**: JSON file containing structured data ready for analysis.
- **`cleaned_survey_data.csv`**: Cleaned survey data for visualisation and reporting.

Both files are located in the `data/` folder and used for testing data workflows.

---

## **Apache Server Setup**

The app is served locally using **Apache HTTP Server** for testing purposes. Steps to set up:
1. Place the `public/` folder in the Apache `DocumentRoot` (configured in `httpd.conf`).
2. Restart Apache:
   ```bash
   sudo apachectl restart
   ```
3. Access the app via [http://localhost:8080](http://localhost:8080).

---

## **Fonts**

All fonts used in the project are sourced from:
- [**Fontsource**](https://fontsource.org/): Easy integration of Google Fonts.

---

## **Resources**

### **Videos**
- **Walking Girl Video**: By cottonbro on Pexels  
  [https://www.pexels.com/@cottonbro]

### **Images**
- AI-generated visuals for placeholders and graphics.

---

## **Testing Checklist**

### **1. Verify UI**
- Ensure the website runs at [http://localhost:3000](http://localhost:3000).
- Validate smooth animations and scroll effects.

### **2. Backend Connectivity**
- Test `test.py`:
  - Ensure PostgreSQL data retrieval is functional.
  - Confirm processed data outputs (`cleaned_survey_data.csv` and `processed_data.json`).

### **3. Apache Configuration**
- Access the app via [http://localhost:8080](http://localhost:8080).
- Test UI responsiveness when served via Apache.

### **4. Data Validation**
- Inspect data files (`cleaned_survey_data.csv`, `processed_data.json`) for accuracy.

---

## **Future Enhancements**

1. Complete **Snowflake integration** for processed data storage and analytics.
2. Develop a full-featured **UI Dashboard** for visualising survey insights.
3. Set up **CI/CD pipelines** to automate testing and deployment.
4. Deploy the platform to a cloud-based production environment.

---

## **Learnings and Accomplishments**

- Successfully implemented PostgreSQL for raw data storage and retrieval.
- Built a frontend application with modern libraries (GSAP, Framer Motion).
- Processed survey data using Python and Pandas for insights.
- Set up Apache HTTP server to serve the project locally.
- Prepared code for future Snowflake integration.

---

## **Contributors**
- **Emma Mendez**: Developer and Architect of KLPS software.

---

## **License**

This project is licensed under the **MIT License**.

