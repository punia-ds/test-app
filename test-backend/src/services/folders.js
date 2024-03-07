import fs from "fs";
import unzipper from "unzipper";
import { createSubFiles } from "../utils/files.js";

let folders = ["files", "split_new", "split_old", "split_prefix","logs"];

function createFolders() {
  folders.forEach(async (f) => (fs.existsSync(f) ? null : fs.mkdirSync(f)));
}

// check all files in folder
function getFilesInFolderSync(folderPath) {
  try {
    const files = fs.readdirSync(folderPath);

    // new styles
    files[0].indexOf("new") >= 0
      ? createSubFiles(files[0], "split_new")
      : files[1].indexOf("new") >= 0
      ? createSubFiles(files[1], "split_new")
      : createSubFiles(files[2], "split_new");

    // prefix
    files[0].indexOf("prefix") >= 0
      ? createSubFiles(files[0], "split_prefix")
      : files[1].indexOf("prefix") >= 0
      ? createSubFiles(files[1], "split_prefix")
      : createSubFiles(files[2], "split_prefix");

    // dateless
    files[0].indexOf("ni") >= 0
      ? createSubFiles(files[0], "split_old")
      : files[1].indexOf("ni") >= 0
      ? createSubFiles(files[1], "split_old")
      : createSubFiles(files[2], "split_old");
  } catch (error) {
    console.log("Error reading folder: " + error.message);
  }
}

// unzip folder
async function unzipFolder(zipFilePath) {
  return new Promise((resolve, reject) => {
    // Read the compressed file
    const readStream = fs.createReadStream(zipFilePath);

    // const writeStream = fs.createWriteStream("./files");
    readStream
      .pipe(unzipper.Parse())
      .on("entry", (entry) => {
        const entryPath = "./files/" + entry.path;
        entry.pipe(fs.createWriteStream(entryPath));
      })
      .on("close", () => {
        // fs.unlinkSync(zipFilePath); // Remove the zip file if needed
        console.log("Folder successfully unzipped.");
        resolve("files");
      })
      .on("error", (err) => {
        reject("Error unzipping folder:" + err);
      });
  });
}

export { createFolders, getFilesInFolderSync, unzipFolder };
