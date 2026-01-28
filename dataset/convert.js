const fs = require("fs");
const csv = require("csvtojson");

const INPUT = "goodreads-popular-dataset-delimited.csv";
const OUTPUT = "goodreads-popular-dataset-delimited.json";

const ARRAY_FIELDS = ["genres", "awards", "ratingsByStars"];
const NUM_FIELDS = ["rating", "pages", "numRatings", "likedPercent"];
const DATE_FIELDS = ["publishDate"];
const NESTED_NUMFIELDS = ["ratingsByStars"];

csv()
  .fromFile(INPUT)
  .then(rows => {
    const transformed = rows
      .map(row => {
        if (row.numRatings) {
          row.numRatings = Number(row.numRatings);
        }
        return row;
      })
      // Only keep rows with numRatings > 15000
      .filter(row => row.numRatings > 15000)
      .map(row => {
        ARRAY_FIELDS.forEach(field => {
          if (row[field]) {
            row[field] = row[field]
              .split("|")
              .map(v => v.trim())
              .filter(Boolean);
          } else {
            row[field] = [];
          }
        });

        // Convert columns to specific data types
        NUM_FIELDS.forEach(field => {
          if (row[field] !== undefined) {
            row[field] = Number(row[field]);
          }
        });

        DATE_FIELDS.forEach(field => {
          if (row[field]) {
            row[field] = new Date(row[field]).getTime();
          }
        });

        NESTED_NUMFIELDS.forEach(field => {
          if (row[field]) {
            row[field] = row[field].map(num => Number(num));
          }
        });

        return row;
      });

    fs.writeFileSync(OUTPUT, JSON.stringify(transformed, null, 2));
    console.log(`Wrote ${transformed.length} records to ${OUTPUT}`);
  })
  .catch(err => {
    console.error("Error:", err);
  });
