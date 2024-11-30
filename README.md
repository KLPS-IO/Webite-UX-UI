# Website-UX-UI

## Repository Naming Convention

We follow a structured naming convention for our repositories to maintain clarity and consistency:

```
<project-name>-<scope>-<descriptor>
```

Examples:
- `KLPS-frontend-v1`: Frontend application for the KLPS project.
- `KLPS-api`: Backend API for KLPS.

Ensure new repositories adhere to this convention for better collaboration.

---

## Folder Structure

```
- assets           => Contains all assets such as images, videos, and SVG files
- components       => React components used to build this website
- sections         => Includes sections such as Home, About, etc.
- GlobalStyles.js  => Contains global styles for the entire application
- Themes.js        => Contains color and font sizes as variables
```

---

## Steps to Run

1. Open this directory in Terminal / CMD.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the application.

---

## External Libraries Used

- [Styled Components](https://styled-components.com/docs)
- [GSAP](https://greensock.com/gsap/)
- [React Locomotive Scroll](https://www.npmjs.com/package/react-locomotive-scroll)
- [Locomotive Scroll](https://www.npmjs.com/package/locomotive-scroll)
- [Framer Motion](https://www.framer.com/motion/)

---

## Fonts

All fonts are sourced from:
- [Fontsource](https://fontsource.org/)

---

## Resources

**Walking Girl Video:**  
Video by cottonbro from Pexels  
[https://www.pexels.com/@cottonbro]

**Images:**  
AI-generated.

---
# Setting Up PostgreSQL for KLPS Project

This document provides a step-by-step guide to setting up PostgreSQL for the KLPS (Kids, Ladies, Parents Solutions) project. This setup is essential for managing survey data and ensuring smooth integration with the rest of the stack.

---

## **Prerequisites**

Before proceeding, ensure you have the following installed on your machine:

1. PostgreSQL (Latest version recommended).
2. `psql` command-line tool.
3. Python 3.x (for data processing).
4. Required Python libraries: `pandas`, `sqlalchemy`.
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
DB_USER=postgres
DB_PASSWORD=add password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=klps
```

Ensure that your application is configured to read these variables.

---

## **Step 5: Load Initial Data**

### Use `COPY` to Import Data

Prepare your CSV file (e.g., `cleaned_survey_data.csv`) and place it in an accessible directory. Then, run:
```sql
COPY survey_raw_data(name, location, age, job_title, profession_level, favourite_brands, underwear_changes, shopping_preference, main_underwear_type, relatable_statement, underwear_discomfort, priority_issues, favourite_brand_reason, willingness_to_pay, clip_off_preference)
FROM '/path/to/cleaned_survey_data.csv'
DELIMITER ','
CSV HEADER;
```

---

## **Step 6: Connect PostgreSQL to Backend**

### Example Node.js Configuration
Add the following code to your `db.js` file:
```javascript
const { Pool } = require("pg");

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
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

---

## **Troubleshooting**

### Common Issues

1. **`psql: could not connect to server`**
   - Ensure PostgreSQL is running: `sudo systemctl start postgresql`.

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

---

For further questions or troubleshooting, refer to the PostgreSQL documentation or consult the project team.



