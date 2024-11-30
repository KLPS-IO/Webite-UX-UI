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
- Themes.js        => Contains colour and font sizes as variables
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
