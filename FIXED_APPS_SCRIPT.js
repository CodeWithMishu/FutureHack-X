// FIXED Google Apps Script for FutureHack-X Registration
// This version handles the "undefined" request issue

function doPost(e) {
    try {
        console.log("Function called, e parameter:", e);

        // Handle the case where e is undefined or null
        if (!e) {
            console.error("Request parameter 'e' is undefined");
            return ContentService.createTextOutput(
                JSON.stringify({ ok: false, error: "Invalid request - no data received" })
            ).setMimeType(ContentService.MimeType.JSON);
        }

        // Log the full request structure for debugging
        console.log("Full request object:", JSON.stringify(e, null, 2));

        // Check if postData exists
        if (!e.postData) {
            console.error("No postData in request");
            return ContentService.createTextOutput(
                JSON.stringify({ ok: false, error: "No post data received" })
            ).setMimeType(ContentService.MimeType.JSON);
        }

        // Check if contents exist
        if (!e.postData.contents) {
            console.error("No contents in postData");
            return ContentService.createTextOutput(
                JSON.stringify({ ok: false, error: "No post data contents" })
            ).setMimeType(ContentService.MimeType.JSON);
        }

        console.log("Raw post data contents:", e.postData.contents);

        // Get headers (might be undefined)
        const headers = e.postData.headers || {};
        console.log("Headers received:", headers);

        // For now, skip token validation to test basic functionality
        // const token = headers["X-Verification-Token"];
        // const expectedToken = "a3ad1599-50ef-4c28-ac5a-6d26b3df07e5";
        // console.log("Token received:", token);

        // Open your spreadsheet
        const ss = SpreadsheetApp.openById("1peVhuVB-XvYv6dXJg3boOLy8Y_Z2vlHJlM_la3pMYkA");
        const sheet = ss.getSheetByName("Sheet1");

        // Parse the form data
        let data;
        try {
            data = JSON.parse(e.postData.contents);
            console.log("Successfully parsed data:", JSON.stringify(data, null, 2));
        } catch (parseError) {
            console.error("Failed to parse JSON:", parseError);
            return ContentService.createTextOutput(
                JSON.stringify({ ok: false, error: "Invalid JSON data: " + parseError.message })
            ).setMimeType(ContentService.MimeType.JSON);
        }

        // Add headers if this is the first submission
        if (sheet.getLastRow() === 0) {
            console.log("Adding headers to sheet");
            sheet.appendRow([
                "Timestamp",
                "College Name",
                "Team Name",
                "Leader Email",
                "Leader Phone",
                "Member 2 Email",
                "Member 2 Phone",
                "Member 3 Email",
                "Member 3 Phone",
                "Member 4 Email",
                "Member 4 Phone",
                "Primary Track",
                "Experience Level",
                "Resources Needed",
            ]);
        }

        // Prepare the row data
        const rowData = [
            new Date(),
            data.collegeName || "",
            data.teamName || "",
            data.leaderEmail || "",
            data.leaderPhone || "",
            data.member2Email || "",
            data.member2Phone || "",
            data.member3Email || "",
            data.member3Phone || "",
            data.member4Email || "",
            data.member4Phone || "",
            data.primaryTrack || "",
            data.experienceLevel || "",
            data.resources || "",
        ];

        console.log("Adding row data:", rowData);
        sheet.appendRow(rowData);
        console.log("Row added successfully!");

        return ContentService.createTextOutput(
            JSON.stringify({
                ok: true,
                message: "Registration saved successfully",
                rowNumber: sheet.getLastRow(),
                timestamp: new Date().toISOString()
            })
        ).setMimeType(ContentService.MimeType.JSON);

    } catch (err) {
        console.error("Unexpected error in doPost:", err);
        console.error("Error stack:", err.stack);
        return ContentService.createTextOutput(
            JSON.stringify({
                ok: false,
                error: "Server error: " + err.message,
                details: err.stack
            })
        ).setMimeType(ContentService.MimeType.JSON);
    }
}

// Alternative GET handler for testing
function doGet(e) {
    console.log("GET request received:", e);
    return ContentService.createTextOutput(
        JSON.stringify({
            ok: true,
            message: "Apps Script is running",
            timestamp: new Date().toISOString(),
            method: "GET"
        })
    ).setMimeType(ContentService.MimeType.JSON);
}

// Test function you can run manually
function testFunction() {
    console.log("Test function executed successfully");

    // Test spreadsheet access
    try {
        const ss = SpreadsheetApp.openById("1peVhuVB-XvYv6dXJg3boOLy8Y_Z2vlHJlM_la3pMYkA");
        const sheet = ss.getSheetByName("Sheet1");
        console.log("Spreadsheet access successful, current rows:", sheet.getLastRow());
        return "Success";
    } catch (err) {
        console.error("Spreadsheet access failed:", err);
        return "Failed: " + err.message;
    }
}