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
- sections         => Includes sections such as Home, About, etc.
- GlobalStyles.js  => Contains global styles for the entire application
- Themes.js        => Contains colour and font sizes as variables
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

- **[Styled Components](https://styled-components.com/docs)**: For styling React components.
- **[GSAP](https://greensock.com/gsap/)**: For animations.
- **[React Locomotive Scroll](https://www.npmjs.com/package/react-locomotive-scroll)**: Smooth scrolling effects.
- **[Locomotive Scroll](https://www.npmjs.com/package/locomotive-scroll)**: Parallax scrolling.
- **[Framer Motion](https://www.framer.com/motion/)**: Animations and interactions.
- **[Axios](https://axios-http.com/)**: For API requests.

---

## **Data Files**

### **Processed Data**

- **`processed_data.json`**: JSON file containing structured data ready for analysis.
- **`cleaned_survey_data.csv`**: Cleaned survey data for visualization and reporting.

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

- **[Fontsource](https://fontsource.org/)**: Easy integration of Google Fonts.

---

## **Resources**

### **Videos**

- **Walking Girl Video**: By cottonbro on Pexels\
  [[https://www.pexels.com/@cottonbro](https://www.pexels.com/@cottonbro)]

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

## **Learnings and Accomplishments**

- Successfully implemented PostgreSQL for raw data storage and retrieval.
- Built a frontend application with modern libraries (GSAP, Framer Motion).
- Processed survey data using Python and Pandas for insights.
- Set up Apache HTTP server to serve the project locally.
- Prepared code for future Snowflake integration.

---

## **Setting Up PostgreSQL for KLPS Project**

This document provides a step-by-step guide to setting up PostgreSQL for the KLPS (Kids, Ladies, Parents Solutions) project. This setup is essential for managing survey data and ensuring smooth integration with the rest of the stack.

---

## **Prerequisites**

Before proceeding, ensure you have the following installed on your machine:

1. PostgreSQL (Latest version recommended).
2. `psql` command-line tool.
3. Node.js (Latest LTS version recommended).
4. Required Node.js libraries: `pg` and `dotenv`.
5. Database credentials and structure defined for KLPS.

---

## **Step 1: Install PostgreSQL**

### macOS

```bash
brew install postgresql
brew services start postgresql
```

### Linux

```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql
sudo systemctl enable postgresql
```

### Windows

1. Download the installer from [PostgreSQL Downloads](https://www.postgresql.org/download/).
2. Follow the installation wizard.
3. After installation, start the PostgreSQL service via the Services app or `pgAdmin`.

---

## **Step 2: Create the Database**

### Log in to `psql`

```bash
psql -U postgres
```

### Create the KLPS database

```sql
CREATE DATABASE klps;
```

---

## **Step 3: Create Tables**

### Use the following schema to create the necessary tables for survey data:

```sql
CREATE TABLE survey_raw_data (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    location VARCHAR(255),
    age INT,
    job_title VARCHAR(255),
    profession_level VARCHAR(255),
    favourite_brands TEXT,
    underwear_changes TEXT,
    shopping_preference TEXT,
    main_underwear_type TEXT,
    relatable_statement TEXT,
    underwear_discomfort TEXT,
    priority_issues TEXT,
    favourite_brand_reason TEXT,
    willingness_to_pay VARCHAR(255),
    clip_off_preference BOOLEAN
);

CREATE TABLE survey_processed_data (
    id SERIAL PRIMARY KEY,
    age_group VARCHAR(50),
    shopper_type VARCHAR(50),
    willingness_tier VARCHAR(50),
    aggregated_responses JSONB
);
```

---

## **Step 4: Set Up Environment Variables**

### Create a `.env` file in your project root and add the following:

```
POSTGRES_USER=postgres
POSTGRES_PASSWORD=add password
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_DB=klps
```

Ensure that your application is configured to read these variables.

---

## **Step 5: Install Dependencies**

Run the following command to install required Node.js packages:

```bash
npm install pg dotenv
```

---

## **Step 6: Configure `db.js`**

Add the following code to your `db.js` file:

```javascript
require('dotenv').config(); // Load environment variables from .env
const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.POSTGRES_USER,
    host
```
Future Enhancements

Complete Snowflake integration for processed data storage and analytics.

Develop a full-featured UI Dashboard for visualizing survey insights.

Set up CI/CD pipelines to automate testing and deployment.

Deploy the platform to a cloud-based production environment.

Contributors

Emma Mendez: Developer and Architect of KLPS software.

License

This project is licensed under the MIT License.


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
- sections         => Includes sections such as Home, About, etc.
- GlobalStyles.js  => Contains global styles for the entire application
- Themes.js        => Contains colour and font sizes as variables
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

**Walking Girl Video:**
Video by cottonbro from Pexels
[https://www.pexels.com/@cottonbro]

**Images:**
AI-generated.

---

## Setting Up PostgreSQL for KLPS Project

This document provides a step-by-step guide to setting up PostgreSQL for the KLPS (Kids, Ladies, Parents Solutions) project. This setup is essential for managing survey data and ensuring smooth integration with the rest of the stack.

---

## **Prerequisites**

Before proceeding, ensure you have the following installed on your machine:

1. PostgreSQL (Latest version recommended).
2. `psql` command-line tool.
3. Node.js (Latest LTS version recommended).
4. Required Node.js libraries: `pg` and `dotenv`.
5. Database credentials and structure defined for KLPS.

---

## **Step 1: Install PostgreSQL**

### macOS
```bash
brew install postgresql
brew services start postgresql
```

### Linux
```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql
sudo systemctl enable postgresql
```

### Windows
1. Download the installer from [PostgreSQL Downloads](https://www.postgresql.org/download/).
2. Follow the installation wizard.
3. After installation, start the PostgreSQL service via the Services app or `pgAdmin`.

---

## **Step 2: Create the Database**

### Log in to `psql`
```bash
psql -U postgres
```

### Create the KLPS database
```sql
CREATE DATABASE klps;
```

---

## **Step 3: Create Tables**

### Use the following schema to create the necessary tables for survey data:
```sql
CREATE TABLE survey_raw_data (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    location VARCHAR(255),
    age INT,
    job_title VARCHAR(255),
    profession_level VARCHAR(255),
    favourite_brands TEXT,
    underwear_changes TEXT,
    shopping_preference TEXT,
    main_underwear_type TEXT,
    relatable_statement TEXT,
    underwear_discomfort TEXT,
    priority_issues TEXT,
    favourite_brand_reason TEXT,
    willingness_to_pay VARCHAR(255),
    clip_off_preference BOOLEAN
);

CREATE TABLE survey_processed_data (
    id SERIAL PRIMARY KEY,
    age_group VARCHAR(50),
    shopper_type VARCHAR(50),
    willingness_tier VARCHAR(50),
    aggregated_responses JSONB
);
```

---

## **Step 4: Set Up Environment Variables**

### Create a `.env` file in your project root and add the following:
```
POSTGRES_USER=postgres
POSTGRES_PASSWORD=test123
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_DB=klps
```

Ensure that your application is configured to read these variables.

---

## **Step 5: Install Dependencies**

Run the following command to install required Node.js packages:
```bash
npm install pg dotenv
```

---

## **Step 6: Configure `db.js`**

Add the following code to your `db.js` file:

```javascript
require('dotenv').config(); // Load environment variables from .env
const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.POSTGRES_PORT,
});

pool.connect()
    .then(client => {
        console.log('Connected to PostgreSQL');
        client.release();
    })
    .catch(err => {
        console.error('Error connecting to PostgreSQL:', err.stack);
    });

module.exports = pool;
```

---

## **Step 7: Verify Setup**

### Test Database Connection

1. Use `psql` to connect:
   ```bash
   psql -U postgres -h localhost -d klps
   ```

2. Run a query:
   ```sql
   SELECT * FROM survey_raw_data LIMIT 5;
   ```

### Test Backend Connection
Run your server and check if it connects to PostgreSQL without errors:
```bash
node index.js
```

If successful, you should see:
```
Connected to PostgreSQL
```

---

## **Windows Tip**

- If using Windows, ensure your `PATH` environment variable includes the directory where PostgreSQL binaries (e.g., `psql.exe`) are installed. You can add this directory via:
  1. Control Panel > System > Advanced System Settings > Environment Variables.
  2. Edit the `Path` variable and add the PostgreSQL binary directory (e.g., `C:\Program Files\PostgreSQL\<version>\bin`).
- Run the commands in PowerShell or Command Prompt with administrative privileges if needed.

---

## **Troubleshooting**

### Common Issues

1. **`psql: could not connect to server`**
   - Ensure PostgreSQL is running: `sudo systemctl start postgresql` (Linux) or restart via Services (Windows).

2. **Permission Denied Errors**
   - Check file and folder permissions where the CSV is stored.

3. **Database Does Not Exist**
   - Verify the database name in `.env` matches the created database.

4. **Error: Role Does Not Exist**
   - Create the necessary role:
     ```sql
     CREATE USER postgres WITH PASSWORD 'test123';
     GRANT ALL PRIVILEGES ON DATABASE klps TO postgres;
     ```

---

## **Next Steps**

1. Clean and process data using pandas.
2. Integrate with Snowflake for advanced analytics.
3. Build dashboards for insights and reporting.
