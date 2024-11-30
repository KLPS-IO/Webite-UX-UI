const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON payloads

// Routes

/** Add New Data to survey_raw_data Table */
app.post("/survey_raw_data", async (req, res) => {
    try {
        const { user_id, question_id, response, metadata } = req.body;

        // Validate input
        if (!user_id || !question_id || !response) {
            return res.status(400).json({
                error: "user_id, question_id, and response are required",
            });
        }

        // Insert new survey data
        const newData = await pool.query(
            "INSERT INTO survey_raw_data (user_id, question_id, response, metadata) VALUES($1, $2, $3, $4) RETURNING *",
            [user_id, question_id, response, metadata]
        );

        res.status(201).json({
            success: true,
            message: "Data successfully added to survey_raw_data",
            data: newData.rows[0],
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Server error" });
    }
});

/** Get Data by ID from survey_raw_data */
app.get("/survey_raw_data/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const data = await pool.query("SELECT * FROM survey_raw_data WHERE id = $1", [id]);

        if (data.rows.length === 0) {
            return res.status(404).json({ error: "Data not found" });
        }

        res.json(data.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Server error" });
    }
});

/** Update Data in survey_raw_data */
app.put("/survey_raw_data/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { response, metadata } = req.body;

        const updatedData = await pool.query(
            "UPDATE survey_raw_data SET response = $1, metadata = $2 WHERE id = $3 RETURNING *",
            [response, metadata, id]
        );

        if (updatedData.rows.length === 0) {
            return res.status(404).json({ error: "Data not found" });
        }

        res.json({
            success: true,
            message: "Data successfully updated",
            data: updatedData.rows[0],
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Server error" });
    }
});

/** Delete Data from survey_raw_data */
app.delete("/survey_raw_data/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const deletedData = await pool.query("DELETE FROM survey_raw_data WHERE id = $1 RETURNING *", [id]);

        if (deletedData.rows.length === 0) {
            return res.status(404).json({ error: "Data not found" });
        }

        res.json({
            success: true,
            message: "Data successfully deleted",
            data: deletedData.rows[0],
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Server error" });
    }
});

/** Retrieve All Data from survey_raw_data */
app.get("/survey_raw_data", async (req, res) => {
    try {
        const allData = await pool.query("SELECT * FROM survey_raw_data");

        res.json(allData.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Server error" });
    }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
